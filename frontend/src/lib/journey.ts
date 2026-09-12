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

/** Human-action copy for the strategist inbox (Work Queue). */
export function journeyQueueCopy(stage: JourneyAction | "complete") {
  const copy: Record<JourneyAction | "complete", { headline: string; detail: string; action_label: string }> = {
    prepare_diagnostic: {
      headline: "Imported ScoreApp lead",
      detail: "Prepare the evidence-led diagnostic from ScoreApp and website context.",
      action_label: "Prepare Diagnostic",
    },
    import_transcript: {
      headline: "Diagnostic awaiting call record",
      detail: "Review hypotheses, then save the synthetic transcript to continue.",
      action_label: "Continue Diagnostic",
    },
    generate_questionnaire: {
      headline: "Questionnaire ready to draft",
      detail: "Generate an evidence-led question plan from the diagnostic.",
      action_label: "Generate Questionnaire",
    },
    review_returned_questionnaire: {
      headline: "Questionnaire awaiting return",
      detail: "Simulate the client-returned answers before routing.",
      action_label: "Review Questionnaire",
    },
    approve_recommendation: {
      headline: "Recommendation awaiting approval",
      detail: "An authorised reviewer must approve the engagement route.",
      action_label: "Approve Recommendation",
    },
    approve_scope: {
      headline: "Scope awaiting approval",
      detail: "Define agreed work before any commercial investment is revealed.",
      action_label: "Approve Scope",
    },
    reveal_pricing: {
      headline: "Pricing ready to reveal",
      detail: "Reveal the reviewer-only commercial view after scope approval.",
      action_label: "Reveal Pricing",
    },
    approve_pricing: {
      headline: "Pricing awaiting approval",
      detail: "Review the illustrative investment before the proposal stage.",
      action_label: "Approve Pricing",
    },
    reveal_proposal: {
      headline: "Proposal ready to reveal",
      detail: "Reveal the client-safe proposal for human review.",
      action_label: "Reveal Proposal",
    },
    approve_proposal: {
      headline: "Proposal awaiting approval",
      detail: "Final human gate before the simulated HubSpot lifecycle update.",
      action_label: "Approve Proposal",
    },
    complete: {
      headline: "Journey complete",
      detail: "Proposal approved. Simulated HubSpot update recorded.",
      action_label: "View Proposal",
    },
  };
  return copy[stage];
}
