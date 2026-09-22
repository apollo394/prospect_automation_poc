import type { BlueprintAction, BlueprintEngagement, BlueprintWorkflow } from "@/lib/types";

export const BLUEPRINT_STAGES: BlueprintAction[] = [
  "activate_blueprint",
  "generate_blueprint_questionnaire",
  "validate_questionnaire",
  "complete_research",
  "approve_intelligence",
  "approve_draft_report",
  "approve_strategy_deck",
  "complete_strategy_session",
  "approve_final_blueprint",
  "approve_handoff",
];

export const BLUEPRINT_STAGE_META: Record<
  BlueprintAction,
  { label: string; artifact: keyof BlueprintEngagement; cta: string }
> = {
  activate_blueprint: { label: "Activate", artifact: "activation", cta: "Activate Blueprint" },
  generate_blueprint_questionnaire: {
    label: "Questionnaire",
    artifact: "questionnaire",
    cta: "Generate questionnaire",
  },
  validate_questionnaire: { label: "Validate", artifact: "questionnaire", cta: "Validate questionnaire" },
  complete_research: { label: "Research", artifact: "research", cta: "Complete research synthesis" },
  approve_intelligence: { label: "Intelligence", artifact: "intelligence", cta: "Approve intelligence" },
  approve_draft_report: { label: "Draft report", artifact: "draft_report", cta: "Approve draft report" },
  approve_strategy_deck: { label: "Strategy deck", artifact: "strategy_deck", cta: "Approve strategy deck" },
  complete_strategy_session: {
    label: "Strategy session",
    artifact: "strategy_session",
    cta: "Complete strategy session",
  },
  approve_final_blueprint: { label: "Final Blueprint", artifact: "final_blueprint", cta: "Approve final Blueprint" },
  approve_handoff: { label: "Handoff", artifact: "handoff", cta: "Approve implementation handoff" },
};

export function blueprintStepIndex(workflow: BlueprintWorkflow): number {
  if (workflow.current_stage === "complete") return BLUEPRINT_STAGES.length - 1;
  const index = BLUEPRINT_STAGES.indexOf(workflow.current_stage);
  return index < 0 ? 0 : index;
}

export function isApprovalStage(action: BlueprintAction): boolean {
  return action in {
    validate_questionnaire: 1,
    approve_intelligence: 1,
    approve_draft_report: 1,
    approve_strategy_deck: 1,
    approve_final_blueprint: 1,
    approve_handoff: 1,
  };
}
