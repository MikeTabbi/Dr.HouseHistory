import { NextRequest, NextResponse } from "next/server";
import { createServerSupabaseClient } from "@/lib/supabase";
import type { ApplicationSubmission } from "@/types";

// POST /api/apply — submit a completed application
export async function POST(req: NextRequest) {
  const supabase = await createServerSupabaseClient();

  const { data: { user }, error: authError } = await supabase.auth.getUser();
  if (authError || !user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body: ApplicationSubmission = await req.json();

  // TODO: server-side validation (Phase 1)
  // TODO: upsert applicant_profiles row (Phase 1)
  // TODO: clear form_drafts row (Phase 1)
  // TODO: trigger Documenso NDA send (Phase 1)
  // TODO: send confirmation email via Resend (Phase 1)

  return NextResponse.json({ success: true }, { status: 201 });
}
