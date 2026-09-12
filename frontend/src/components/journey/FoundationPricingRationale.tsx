import { LockKeyhole } from "lucide-react";
import type { GovernedArtifact } from "@/lib/types";
export default function FoundationPricingRationale({ pricing }: { pricing: GovernedArtifact }) {
  const rationale = pricing.foundation_rationale as Record<string, unknown> | undefined;
  if (!rationale || rationale.internal_only !== true) return null;
  const rows: Array<[string, unknown]> = [
    ["Complexity dimensions", rationale.complexity_dimensions],
    ["Required deliverables", rationale.required_deliverables],
    ["Reference-value validation", rationale.reference_value_validation],
    ["Delivery-cost assumptions", rationale.delivery_cost_assumptions ?? rationale.delivery_cost_assumption],
    ["Target-margin validation", rationale.margin_validation],
    ["Risk and dependency flags", rationale.risk_dependency_flags],
    ["Recommended fixed investment", rationale.recommended_fixed_investment],
  ].filter(([, value]) => value !== undefined && value !== null) as Array<[string, unknown]>;
  return <section className="sc-panel border-sc-warning/40 bg-[var(--sc-warning-soft)] p-5"><div className="flex gap-3"><LockKeyhole className="h-5 w-5 text-sc-warning"/><div><p className="text-xs font-bold uppercase tracking-[.14em] text-sc-warning">Internal only</p><h2 className="mt-1 font-semibold text-sc-ink">Foundation pricing rationale</h2><p className="mt-2 text-xs text-sc-charcoal">Never share delivery economics, cost, reference value, or margin with the client.</p></div></div><div className="mt-4 grid gap-3 sm:grid-cols-2">{rows.map(([label,value])=><div key={label} className="border-t border-sc-warning/20 pt-3"><p className="text-xs text-sc-muted">{label}</p><p className="mt-1 text-sm text-sc-charcoal">{Array.isArray(value)?value.map(String).join(", "):String(value)}</p></div>)}</div></section>;
}
