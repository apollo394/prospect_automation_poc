import type { GovernedArtifact } from "@/lib/types";

type Alternative = { name?: string; reason?: string; not_selected_because?: string };
type Readiness = { strategic?: string; commercial?: string; proposal?: string };

export default function RecommendationDecision({ recommendation }: { recommendation: GovernedArtifact }) {
  const data = recommendation as GovernedArtifact & {
    product?: string;
    rationale?: string;
    alternatives?: Alternative[];
    readiness?: Readiness;
  };
  const alternatives = data.alternatives ?? [];
  const readiness = data.readiness ?? {};
  const cards: Array<[string, string]> = [
    ["Strategic readiness", readiness.strategic ?? "Review required"],
    ["Commercial readiness", readiness.commercial ?? "Review required"],
    ["Proposal readiness", readiness.proposal ?? "Review required"],
  ];

  return (
    <section className="sc-panel p-6">
      <p className="text-xs font-semibold uppercase tracking-widest text-sc-accent">One governed route</p>
      <h2 className="mt-2 text-2xl font-bold">{data.product ?? recommendation.exact_decision ?? "Recommendation pending"}</h2>
      <p className="mt-3 text-sm leading-6">{recommendation.summary ?? data.rationale ?? "This route is proposed from the available governed evidence."}</p>
      <h3 className="mt-6 text-sm font-semibold">Why alternatives are not selected</h3>
      <ul className="mt-2 space-y-2 text-sm text-sc-muted">
        {alternatives.length ? alternatives.map((alternative, index) => <li key={index}><span className="font-medium text-sc-ink">{alternative.name ?? "Alternative route"}:</span> {alternative.reason ?? alternative.not_selected_because ?? "Not selected for this scenario."}</li>) : <li>No alternative route was selected for this synthetic scenario.</li>}
      </ul>
      <div className="mt-6 grid gap-3 sm:grid-cols-3">{cards.map(([label, value]) => <div key={label} className="rounded-sc-sm bg-sc-canvas p-3"><p className="text-xs text-sc-muted">{label}</p><p className="mt-1 text-sm font-semibold">{value}</p></div>)}</div>
    </section>
  );
}
