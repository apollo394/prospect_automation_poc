import type { JourneyAction, JourneyWorkflow } from "@/lib/types";

export const journeySteps = [
  { key: "lead", label: "Lead" },
  { key: "diagnostic", label: "Diagnostic" },
  { key: "questionnaire", label: "Questionnaire" },
  { key: "recommendation", label: "Recommendation" },
  { key: "scope", label: "Scope" },
  { key: "pricing", label: "Pricing" },
  { key: "proposal", label: "Proposal" },
] as const;

export function journeyDestination(id: string, stage: JourneyAction | "complete") {
  if (stage === "prepare_diagnostic") return `/prospects/${id}`;
  if (stage === "import_transcript") return `/prospects/${id}/diagnostic`;
  if (stage === "generate_questionnaire" || stage === "review_returned_questionnaire") return `/prospects/${id}/questionnaire`;
  if (stage === "approve_recommendation") return `/prospects/${id}/recommendation`;
  if (stage === "approve_scope") return `/prospects/${id}/scope`;
  if (stage === "reveal_pricing" || stage === "approve_pricing") return `/prospects/${id}/pricing`;
  return `/prospects/${id}/proposal`;
}

export function journeyStepIndex(workflow: JourneyWorkflow) {
  if (workflow.current_stage === "complete") return 6;
  const stageToIndex: Record<JourneyAction, number> = {
    prepare_diagnostic: 0,
    import_transcript: 1,
    generate_questionnaire: 2,
    review_returned_questionnaire: 2,
    approve_recommendation: 3,
    approve_scope: 4,
    reveal_pricing: 5,
    approve_pricing: 5,
    reveal_proposal: 6,
    approve_proposal: 6,
  };
  return stageToIndex[workflow.current_stage];
}
