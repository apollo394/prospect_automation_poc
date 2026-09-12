export const workflowSteps = [
  { key: "lead", label: "Lead" },
  { key: "diagnostic", label: "Diagnostic" },
  { key: "questionnaire", label: "Questionnaire" },
  { key: "recommendation", label: "Recommendation" },
  { key: "scope", label: "Scope" },
  { key: "pricing", label: "Pricing" },
  { key: "proposal", label: "Proposal" },
] as const;

export type WorkflowStep = (typeof workflowSteps)[number]["key"] | "analyze" | "assessment";

const legacyStepMap: Record<string, (typeof workflowSteps)[number]["key"]> = {
  analyze: "diagnostic",
  assessment: "recommendation",
};

export function normalizedStep(step: WorkflowStep) {
  return legacyStepMap[step] ?? step;
}

export function actionFor(prospectId: string, step: WorkflowStep) {
  const routes = {
    lead: { label: "Review lead", href: `/prospects/${prospectId}` },
    diagnostic: { label: "Open diagnostic", href: `/prospects/${prospectId}/diagnostic` },
    questionnaire: { label: "Review questionnaire", href: `/prospects/${prospectId}/questionnaire` },
    recommendation: { label: "Review recommendation", href: `/prospects/${prospectId}/recommendation` },
    scope: { label: "Review scope", href: `/prospects/${prospectId}/scope` },
    pricing: { label: "Review pricing", href: `/prospects/${prospectId}/pricing` },
    proposal: { label: "Review proposal", href: `/prospects/${prospectId}/proposal` },
  } as const;
  return routes[normalizedStep(step)];
}

export function actionFromNextAction(prospectId: string, nextAction: string) {
  const step: WorkflowStep =
    nextAction === "review_questionnaire" ? "questionnaire" :
    nextAction === "review_scope" ? "scope" :
    nextAction === "review_pricing" ? "pricing" :
    nextAction === "review_proposal" || nextAction === "proposal_approved" ? "proposal" :
    nextAction === "analyze" ? "analyze" : "assessment";
  return { ...actionFor(prospectId, step), step };
}
