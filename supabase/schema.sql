-- ─────────────────────────────────────────────────────────────────────────────
-- House Legacy Group — Supabase Database Schema
-- Run this in the Supabase SQL Editor (Dashboard → SQL Editor → New query)
-- ─────────────────────────────────────────────────────────────────────────────

-- Enable UUID extension (usually already enabled on Supabase)
create extension if not exists "pgcrypto";

-- ─────────────────────────────────────────────
-- ENUM types
-- ─────────────────────────────────────────────

create type applicant_category as enum (
  'social-sciences',
  'student',
  'law-enforcement',
  'tech-it',
  'blue-collar',
  'white-collar',
  'working-class',
  'returning-citizen'
);

create type applicant_status as enum (
  'pending',
  'nda_sent',
  'nda_signed',
  'approved',
  'rejected'
);

create type payment_method as enum (
  'paypal',
  'direct_deposit',
  'stripe'
);

create type work_auth_status as enum (
  'us_citizen',
  'permanent_resident',
  'work_visa',
  'not_authorized'
);

-- ─────────────────────────────────────────────
-- admin_users
-- Separate from Supabase Auth — admins cannot register via the public form
-- ─────────────────────────────────────────────

create table admin_users (
  id          uuid primary key default gen_random_uuid(),
  email       text not null unique,
  created_at  timestamptz not null default now()
);

-- ─────────────────────────────────────────────
-- applicant_profiles
-- One row per applicant. form_data holds category-specific JSONB payload.
-- ─────────────────────────────────────────────

create table applicant_profiles (
  id                uuid primary key default gen_random_uuid(),
  user_id           uuid not null references auth.users(id) on delete cascade,
  category          applicant_category not null,
  status            applicant_status not null default 'pending',
  form_data         jsonb not null default '{}',
  full_name         text not null,
  email             text not null,
  phone             text not null,
  state             text not null,
  country           text not null default 'US',
  work_auth_status  work_auth_status not null,
  payment_method    payment_method,
  willing_to_test   boolean not null default false,
  nda_consent       boolean not null default false,
  version           integer not null default 1,   -- optimistic locking for admin actions
  created_at        timestamptz not null default now(),
  updated_at        timestamptz not null default now(),
  constraint one_profile_per_user unique (user_id)
);

-- Fast filtering for admin dashboard
create index applicant_profiles_status_idx    on applicant_profiles(status);
create index applicant_profiles_category_idx  on applicant_profiles(category);
create index applicant_profiles_work_auth_idx on applicant_profiles(work_auth_status);
create index applicant_profiles_created_idx   on applicant_profiles(created_at desc);

-- Auto-update updated_at on every row change
create or replace function set_updated_at()
returns trigger language plpgsql as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

create trigger applicant_profiles_updated_at
  before update on applicant_profiles
  for each row execute function set_updated_at();

-- ─────────────────────────────────────────────
-- form_drafts
-- Auto-saved in-progress forms. Cleared when the applicant submits.
-- ─────────────────────────────────────────────

create table form_drafts (
  id          uuid primary key default gen_random_uuid(),
  user_id     uuid not null references auth.users(id) on delete cascade,
  category    applicant_category,
  draft_data  jsonb not null default '{}',
  updated_at  timestamptz not null default now(),
  constraint one_draft_per_user unique (user_id)
);

create trigger form_drafts_updated_at
  before update on form_drafts
  for each row execute function set_updated_at();

-- ─────────────────────────────────────────────
-- nda_records
-- Tracks every NDA send/sign event per applicant.
-- ─────────────────────────────────────────────

create table nda_records (
  id                      uuid primary key default gen_random_uuid(),
  applicant_id            uuid not null references applicant_profiles(id) on delete cascade,
  documenso_document_id   text not null,
  sent_at                 timestamptz not null default now(),
  signed_at               timestamptz,
  ip_address              text,
  pdf_url                 text,                 -- Supabase Storage path once signed
  constraint one_nda_per_applicant unique (applicant_id)
);

-- ─────────────────────────────────────────────
-- audit_log
-- Immutable record of all admin actions (approve, reject, export, assign).
-- ─────────────────────────────────────────────

create table audit_log (
  id           uuid primary key default gen_random_uuid(),
  admin_id     uuid references admin_users(id),
  action       text not null,                   -- 'approve' | 'reject' | 'export' | 'assign_task'
  target_id    uuid,                             -- applicant_profiles.id
  metadata     jsonb not null default '{}',      -- extra context (e.g. task details)
  created_at   timestamptz not null default now()
);

create index audit_log_target_idx on audit_log(target_id);
create index audit_log_created_idx on audit_log(created_at desc);

-- ─────────────────────────────────────────────
-- ROW LEVEL SECURITY
-- ─────────────────────────────────────────────

alter table applicant_profiles enable row level security;
alter table form_drafts         enable row level security;
alter table nda_records         enable row level security;
alter table audit_log           enable row level security;
alter table admin_users         enable row level security;

-- applicant_profiles: applicants can only see and edit their own row
create policy "Applicants read own profile"
  on applicant_profiles for select
  using (auth.uid() = user_id);

create policy "Applicants insert own profile"
  on applicant_profiles for insert
  with check (auth.uid() = user_id);

create policy "Applicants update own profile"
  on applicant_profiles for update
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

-- form_drafts: applicants can only access their own draft
create policy "Applicants read own draft"
  on form_drafts for select
  using (auth.uid() = user_id);

create policy "Applicants upsert own draft"
  on form_drafts for insert
  with check (auth.uid() = user_id);

create policy "Applicants update own draft"
  on form_drafts for update
  using (auth.uid() = user_id);

create policy "Applicants delete own draft"
  on form_drafts for delete
  using (auth.uid() = user_id);

-- nda_records: applicants can read their own NDA record (read-only)
create policy "Applicants read own NDA"
  on nda_records for select
  using (
    applicant_id in (
      select id from applicant_profiles where user_id = auth.uid()
    )
  );

-- audit_log: no public access — service role only
-- (no RLS policies = blocked for all non-service-role callers)

-- admin_users: no public access — service role only

-- ─────────────────────────────────────────────
-- SUPABASE STORAGE — NDA PDF bucket
-- Run this AFTER creating the storage bucket named "nda-pdfs" in the dashboard
-- ─────────────────────────────────────────────

-- NOTE: Create the bucket manually in Dashboard → Storage → New bucket
--   Name: nda-pdfs
--   Public: OFF (private bucket)
--   File size limit: 10 MB
--   Allowed MIME types: application/pdf

-- Storage RLS: only the owning applicant can download their own NDA PDF
-- (Admin access via service role key — bypasses RLS entirely)
insert into storage.buckets (id, name, public)
values ('nda-pdfs', 'nda-pdfs', false)
on conflict (id) do nothing;

create policy "Applicants download own NDA PDF"
  on storage.objects for select
  using (
    bucket_id = 'nda-pdfs'
    and auth.uid()::text = (storage.foldername(name))[1]
  );

create policy "Service role uploads NDA PDFs"
  on storage.objects for insert
  with check (bucket_id = 'nda-pdfs');
