export type Confidence = "high" | "medium" | "low";

export type GoverningCitation = {
  document_id: string;
  version: string;
  title?: string;
  authority?: string;
  rule?: string;
};

export type ProspectEvidence = {
  id: string;
  source_type: string;
  quote: string;
  evidence_status: string;
  synthetic_label: string;
};

export type GovernanceMeta = {
  evidence_status: string;
  ai_confidence: Confidence;
  citations: GoverningCitation[];
  open_questions: string[];
  conflicts: string[];
};

export type GovernedArtifact = {
  title?: string;
  exact_decision?: string;
  decision?: string;
  summary?: string;
  evidence: ProspectEvidence[];
  governance: GovernanceMeta;
  approval_record?: { approved_by: string; approved_at?: string; reason?: string };
  [key: string]: unknown;
};

export type JourneyAction =
  | "prepare_diagnostic"
  | "import_transcript"
  | "generate_questionnaire"
  | "review_returned_questionnaire"
  | "approve_recommendation"
  | "approve_scope"
  | "reveal_pricing"
  | "approve_pricing"
  | "reveal_proposal"
  | "approve_proposal";

export type JourneyWorkflow = {
  current_stage: JourneyAction | "complete";
  completed_stages: JourneyAction[];
  revealed_stages: string[];
  approval_history: Array<{
    stage: string;
    role: string;
    actor: string;
    reason: string;
    timestamp: string;
  }>;
  toast?: string;
};

export type GovernedJourney = {
  id: string;
  company_name: string;
  recommended_product: string | null;
  route_decision?: "optional_blueprint" | "direct_to_implementation";
  route_decision_summary?: string;
  synthetic: boolean;
  synthetic_disclaimer: string;
  prospect: Record<string, unknown>;
  scoreapp: GovernedArtifact;
  diagnostic: GovernedArtifact;
  questionnaire: GovernedArtifact;
  recommendation: GovernedArtifact;
  scope: GovernedArtifact;
  pricing: GovernedArtifact & {
    total?: number;
    currency?: string;
    foundation_rationale?: { internal_only: boolean; [key: string]: unknown };
  };
  proposal: GovernedArtifact;
  workflow: JourneyWorkflow;
  hubspot: { lifecycle_stage: string };
};
