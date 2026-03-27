import { NextRequest, NextResponse } from "next/server";
import { createServerSupabaseClient } from "@/lib/supabase";

// PUT /api/apply/draft — auto-save form progress
export async function PUT(req: NextRequest) {
  const supabase = await createServerSupabaseClient();

  const { data: { user }, error: authError } = await supabase.auth.getUser();
  if (authError || !user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await req.json();

  // TODO: upsert into form_drafts table (Phase 1)

  return NextResponse.json({ success: true });
}

// GET /api/apply/draft — resume a saved draft
export async function GET() {
  const supabase = await createServerSupabaseClient();

  const { data: { user }, error: authError } = await supabase.auth.getUser();
  if (authError || !user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  // TODO: fetch from form_drafts table (Phase 1)

  return NextResponse.json({ draft: null });
}
