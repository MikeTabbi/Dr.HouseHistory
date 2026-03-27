# Supabase Setup

## How to apply the schema

1. Go to **Supabase Dashboard → SQL Editor → New query**
2. Paste the full contents of `schema.sql`
3. Click **Run**

That's it — all tables, indexes, triggers, and RLS policies are created in one shot.

## After running the schema

### Create the NDA PDF storage bucket
1. Dashboard → **Storage → New bucket**
2. Name: `nda-pdfs`
3. Public: **OFF**
4. File size limit: `10 MB`
5. Allowed MIME types: `application/pdf`

The storage RLS policies in `schema.sql` reference this bucket by name — it must be created before uploads will work.

### Seed an admin user
Admin users are **not** created through the public registration form. Add them directly via SQL:

```sql
insert into admin_users (email)
values ('your-admin@houselegacygroup.com');
```

Then in Supabase Auth, create a matching user with the same email (Dashboard → Authentication → Users → Invite user). The `admin_users` table acts as the allowlist — API routes check this table server-side before granting admin access.

## Table overview

| Table | Purpose |
|---|---|
| `applicant_profiles` | One row per applicant — status, category, full form payload (JSONB) |
| `form_drafts` | Auto-saved in-progress forms — cleared on submit |
| `nda_records` | Documenso document ID, signed_at, ip_address, PDF URL |
| `audit_log` | Immutable log of all admin actions |
| `admin_users` | Admin email allowlist — service role access only |

## RLS summary

- **Applicants** can only read/write their own rows (`user_id = auth.uid()`)
- **NDA records** are read-only for applicants (written by server via service role)
- **audit_log** and **admin_users** are inaccessible to all non-service-role callers
- **Service role key** (used in `createAdminSupabaseClient()`) bypasses all RLS — never expose to the browser
