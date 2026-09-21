import type { GovernedArtifact } from "@/lib/types";
import { routeDecisionLabel } from "@/lib/engagementRoutes";

type Alternative = { name?: string; reason?: string; not_selected_because?: string };
type Readiness = { strategic?: string; commercial?: string; proposal?: string };

export default function RecommendationDecision({ recommendation }: { recommendation: GovernedArtifact }) {
  const data = recommendation as GovernedArtifact & {
    product?: string;
    rationale?: string;
    alternatives?: Alternative[];
    alternatives_not_selected?: string[];
    readiness?: Readiness | string;
    route_decision?: string;
  };
  const structuredAlternatives = data.alternatives ?? [];
  const stringAlternatives = data.alternatives_not_selected ?? [];
  const readiness =
    typeof data.readiness === "object" && data.readiness !== null
      ? data.readiness
      : ({ strategic: data.readiness ?? "Review required" } as Readiness);
  const cards: Array<[string, string]> = [
    ["Strategic readiness", readiness.strategic ?? "Review required"],
    ["Commercial readiness", readiness.commercial ?? "Review required"],
    ["Proposal readiness", readiness.proposal ?? "Review required"],
  ];
  const isBlueprint = data.product === "SimpliBlueprint";

  return (
    <section className="sc-panel p-6">
      <p className="text-xs font-semibold uppercase tracking-widest text-sc-accent">Engagement route recommendation</p>
      <h2 className="mt-2 text-2xl font-bold">{data.product ?? recommendation.exact_decision ?? "Recommendation pending"}</h2>
      <p className="mt-2 text-xs font-medium uppercase tracking-wide text-sc-muted">
        {routeDecisionLabel(data.route_decision)}
      </p>
      <p className="mt-3 text-sm leading-6">{recommendation.summary ?? data.rationale ?? "This route is proposed from the available governed evidence."}</p>

      {isBlueprint ? (
        <div className="mt-5 rounded-sc-sm border border-violet-200 bg-violet-50/80 p-4 text-sm leading-6 text-sc-charcoal">
          <p className="font-semibold text-sc-ink">What happens after you approve SimpliBlueprint</p>
          <p className="mt-2">
            This POC stops at the first Blueprint proposal. After the client signs, delivery continues in a separate workflow:
            Blueprint questionnaire validation, research, Blueprint Report, Strategy Deck, then the human-led{" "}
            <span className="font-medium">Strategy Session</span> call. Foundation or CARE would be a later separate deal.
          </p>
        </div>
      ) : (
        <div className="mt-5 rounded-sc-sm border border-sc-line bg-sc-canvas p-4 text-sm leading-6 text-sc-muted">
          Blueprint was skipped for this scenario because strategy is clear enough to recommend a direct implementation or care
          package after Diagnostic review.
        </div>
      )}

      <h3 className="mt-6 text-sm font-semibold">Why alternatives are not selected</h3>
      <ul className="mt-2 space-y-2 text-sm text-sc-muted">
        {structuredAlternatives.length
          ? structuredAlternatives.map((alternative, index) => (
              <li key={index}>
                <span className="font-medium text-sc-ink">{alternative.name ?? "Alternative route"}:</span>{" "}
                {alternative.not_selected_because ?? alternative.reason ?? "Not selected for this scenario."}
              </li>
            ))
          : stringAlternatives.length
            ? stringAlternatives.map((line, index) => <li key={index}>{line}</li>)
            : <li>No alternative route was selected for this synthetic scenario.</li>}
      </ul>
      <div className="mt-6 grid gap-3 sm:grid-cols-3">
        {cards.map(([label, value]) => (
          <div key={label} className="rounded-sc-sm bg-sc-canvas p-3">
            <p className="text-xs text-sc-muted">{label}</p>
            <p className="mt-1 text-sm font-semibold">{value}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
