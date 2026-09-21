export const ENGAGEMENT_ROUTE_LABELS: Record<string, string> = {
  SimpliBlueprint: "SimpliBlueprint",
  SimpliFoundation: "SimpliFoundation",
  "Templated WordPress": "Templated WordPress",
  SimpliCARE: "SimpliCARE",
};

export function routeBadgeTone(product?: string | null): "violet" | "teal" | "amber" | "slate" {
  if (product === "SimpliBlueprint") return "violet";
  if (product === "SimpliFoundation") return "teal";
  if (product === "SimpliCARE") return "amber";
  return "slate";
}

export function routeDecisionLabel(decision?: string | null): string {
  if (decision === "optional_blueprint") return "Optional Blueprint path";
  if (decision === "direct_to_implementation") return "Direct package path · Blueprint skipped";
  return "Route pending Diagnostic";
}
