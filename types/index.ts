// ─────────────────────────────────────────────
// Enums & Shared Types
// ─────────────────────────────────────────────

export type ApplicantCategory =
  | "social-sciences"
  | "student"
  | "law-enforcement"
  | "tech-it"
  | "blue-collar"
  | "white-collar"
  | "working-class"
  | "returning-citizen";

export type ApplicantStatus =
  | "pending"
  | "nda_sent"
  | "nda_signed"
  | "approved"
  | "rejected";

export type PaymentMethod = "paypal" | "direct_deposit" | "stripe";

export type WorkAuthStatus =
  | "us_citizen"
  | "permanent_resident"
  | "work_visa"
  | "not_authorized";

// ─────────────────────────────────────────────
// Section 1 — Universal (all forms)
// ─────────────────────────────────────────────

export interface Section1 {
  fullName: string;
  email: string;
  phone: string;
  state: string;
  country: string;
  workAuthStatus: WorkAuthStatus;
}

// ─────────────────────────────────────────────
// Critical Additions — Universal (all forms)
// ─────────────────────────────────────────────

export interface CriticalAdditions {
  willingToTest: boolean;
  paymentMethod: PaymentMethod;
  ndaConsent: boolean;
}

// ─────────────────────────────────────────────
// 1. Social Sciences Professors & Professionals
// ─────────────────────────────────────────────

export interface SocialSciencesData {
  highestDegree: "BA" | "MA" | "PhD" | "JD" | "other";
  fieldOfExpertise:
    | "history"
    | "sociology"
    | "political_science"
    | "economics"
    | "anthropology"
    | "other";
  institutionType: "university" | "think_tank" | "government" | "independent";
  areasOfSpecialization: (
    | "race_inequality"
    | "public_policy"
    | "institutions"
    | "labor"
    | "education"
    | "ai_ethics"
  )[];
  hasPublications: boolean;
  aiExperience: "none" | "basic" | "moderate" | "advanced";
  aiInterestArea: ("ai_evaluation" | "bias_review" | "dataset_development")[];
}

// ─────────────────────────────────────────────
// 2. Students
// ─────────────────────────────────────────────

export interface StudentData {
  level: "undergraduate" | "masters" | "phd";
  major: string;
  university: string;
  writingSkillLevel: "beginner" | "intermediate" | "advanced";
  hasResearchExperience: boolean;
  codingSkills: "none" | "basic" | "intermediate" | "advanced";
  hoursPerWeek: "5" | "10" | "20" | "30+";
}

// ─────────────────────────────────────────────
// 3. Law Enforcement / Lawyers / DAs
// ─────────────────────────────────────────────

export interface LawEnforcementData {
  roleType: "police_officer" | "detective" | "attorney" | "prosecutor" | "judge";
  yearsOfExperience: string;
  expertiseAreas: (
    | "criminal_law"
    | "civil_law"
    | "evidence"
    | "public_safety"
    | "policy"
  )[];
  aiWorkInterest: (
    | "legal_dataset_review"
    | "policy_evaluation"
    | "risk_assessment_models"
  )[];
}

// ─────────────────────────────────────────────
// 4. Tech & IT Professionals
// ─────────────────────────────────────────────

export interface TechITData {
  role:
    | "software_engineer"
    | "data_scientist"
    | "it_specialist"
    | "cybersecurity";
  programmingLanguages: string[];
  aiExperienceLevel: "beginner" | "intermediate" | "advanced";
  toolsUsed: ("python" | "tensorflow" | "pytorch" | "sql")[];
  preferredTasks: (
    | "model_evaluation"
    | "coding_tasks"
    | "dataset_building"
  )[];
}

// ─────────────────────────────────────────────
// 5. Blue-Collar Workers
// ─────────────────────────────────────────────

export interface BlueCollarData {
  field:
    | "construction"
    | "transportation"
    | "manufacturing"
    | "utilities"
    | "maintenance";
  yearsOfExperience: string;
  hasCertifications: boolean;
  aiComfortAreas: (
    | "image_labeling"
    | "safety_scenario_review"
    | "real_world_process_input"
  )[];
}

// ─────────────────────────────────────────────
// 6. White-Collar Workers
// ─────────────────────────────────────────────

export interface WhiteCollarData {
  field: "finance" | "marketing" | "hr" | "business" | "consulting";
  analyticalSkills: 1 | 2 | 3 | 4 | 5;
  writingSkills: 1 | 2 | 3 | 4 | 5;
  preferredTasks: (
    | "content_evaluation"
    | "business_datasets"
    | "document_analysis"
  )[];
}

// ─────────────────────────────────────────────
// 7. Working Class (General Entry Pool)
// ─────────────────────────────────────────────

export interface WorkingClassData {
  employmentType: "full_time" | "part_time" | "gig" | "unemployed";
  computerComfort: 1 | 2 | 3 | 4 | 5;
  canType: boolean;
  taskPreference: ("image_labeling" | "text_review" | "audio_transcription")[];
}

// ─────────────────────────────────────────────
// 8. Returning Citizens
// ─────────────────────────────────────────────

export interface ReturningCitizenData {
  inReentryProgram?: boolean;
  skillsDeveloped?: ("trades" | "writing" | "counseling" | "peer_mentorship")[];
  needsFlexibleHours?: boolean;
  needsTraining?: boolean;
  preferredWork: (
    | "entry_level_annotation"
    | "content_moderation"
    | "research_assistance"
  )[];
}

// ─────────────────────────────────────────────
// Union type for category-specific data
// ─────────────────────────────────────────────

export type CategoryData =
  | SocialSciencesData
  | StudentData
  | LawEnforcementData
  | TechITData
  | BlueCollarData
  | WhiteCollarData
  | WorkingClassData
  | ReturningCitizenData;

// ─────────────────────────────────────────────
// Full application submission
// ─────────────────────────────────────────────

export interface ApplicationSubmission {
  section1: Section1;
  category: ApplicantCategory;
  categoryData: CategoryData;
  criticalAdditions: CriticalAdditions;
}

// ─────────────────────────────────────────────
// Database row types (from Supabase)
// ─────────────────────────────────────────────

export interface ApplicantProfile {
  id: string;
  user_id: string;
  category: ApplicantCategory;
  status: ApplicantStatus;
  form_data: CategoryData;
  work_auth_status: WorkAuthStatus;
  payment_method: PaymentMethod | null;
  willing_to_test: boolean;
  nda_consent: boolean;
  created_at: string;
  updated_at: string;
}

export interface NdaRecord {
  id: string;
  applicant_id: string;
  documenso_document_id: string;
  sent_at: string;
  signed_at: string | null;
  ip_address: string;
  pdf_url: string | null;
}

export interface FormDraft {
  id: string;
  user_id: string;
  category: ApplicantCategory | null;
  draft_data: Partial<ApplicationSubmission>;
  updated_at: string;
}
