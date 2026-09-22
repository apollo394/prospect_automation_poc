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

/** Pipeline stages plus non-advancing side actions (e.g. route override). */
export type JourneyApiAction = JourneyAction | "override_route";

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
  route_override?: "SimpliBlueprint" | null;
  /** Fixture AI recommendation before any human route override. */
  ai_product?: string;
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

export type BlueprintAction =
  | "activate_blueprint"
  | "generate_blueprint_questionnaire"
  | "validate_questionnaire"
  | "complete_research"
  | "approve_intelligence"
  | "approve_draft_report"
  | "approve_strategy_deck"
  | "complete_strategy_session"
  | "approve_final_blueprint"
  | "approve_handoff";

export type BlueprintWorkflow = {
  current_stage: BlueprintAction | "complete";
  completed_stages: BlueprintAction[];
  approval_history: Array<{
    stage: string;
    role: string;
    actor: string;
    reason: string;
    timestamp: string;
  }>;
  toast?: string;
};

export type BlueprintEngagement = {
  id: string;
  company_name: string;
  synthetic: boolean;
  synthetic_disclaimer: string;
  unlocked: boolean;
  linked_acquisition_journey_id?: string | null;
  always_unlocked?: boolean;
  stage_labels: string[];
  workflow: BlueprintWorkflow;
  activation: GovernedArtifact & { record?: Record<string, unknown>; cumulative_context?: Record<string, unknown> };
  questionnaire: GovernedArtifact & {
    gold_standard_ref?: string;
    questions?: Array<Record<string, unknown>>;
  };
  research: GovernedArtifact & Record<string, unknown>;
  intelligence: GovernedArtifact & Record<string, unknown>;
  draft_report: GovernedArtifact & Record<string, unknown>;
  strategy_deck: GovernedArtifact & Record<string, unknown>;
  strategy_session: GovernedArtifact & Record<string, unknown>;
  final_blueprint: GovernedArtifact & Record<string, unknown>;
  handoff: GovernedArtifact & Record<string, unknown>;
};
