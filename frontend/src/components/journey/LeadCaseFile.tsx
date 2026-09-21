import type { GovernedJourney } from "@/lib/types";
import { ENGAGEMENT_ROUTE_LABELS, routeDecisionLabel } from "@/lib/engagementRoutes";

export default function LeadCaseFile({ journey }: { journey: GovernedJourney }) {
  const prospect = journey.prospect;
  const product = journey.recommendation.product as string | undefined;
  const routeLabel = product ? ENGAGEMENT_ROUTE_LABELS[product] ?? product : "Pending Diagnostic review";
  const scoreappResult =
    journey.scoreapp.headline ||
    journey.scoreapp.summary ||
    journey.scoreapp.exact_decision ||
    "SimpliSignals qualification evidence is ready for review.";

  return (
    <section className="sc-panel p-5 animate-sc-fade-up">
      <p className="text-xs font-semibold uppercase tracking-[.14em] text-sc-accent">Lead case file</p>
      <h2 className="mt-2 text-xl font-bold text-sc-ink">SimpliSignals qualification signal</h2>
      <p className="mt-3 text-sm leading-relaxed text-sc-charcoal">{String(scoreappResult)}</p>
      <div className="mt-5 grid gap-4 border-t border-sc-line pt-4 sm:grid-cols-3">
        <div>
          <p className="text-xs text-sc-muted">Prospect</p>
          <p className="mt-1 text-sm font-semibold text-sc-ink">{String(prospect.name || journey.company_name)}</p>
        </div>
        <div>
          <p className="text-xs text-sc-muted">Evidence context</p>
          <p className="mt-1 text-sm font-semibold text-sc-ink">SimpliSignals via ScoreApp + website context</p>
        </div>
        <div>
          <p className="text-xs text-sc-muted">Demonstration route</p>
          <p className="mt-1 text-sm font-semibold text-sc-ink">{routeLabel}</p>
          <p className="mt-1 text-xs text-sc-muted">{routeDecisionLabel(journey.route_decision as string | undefined)}</p>
        </div>
      </div>
      <p className="mt-5 rounded-sc-sm bg-sc-canvas p-3 text-xs leading-relaxed text-sc-muted">
        SimpliSignals shows where friction may appear; it does not diagnose root cause or select an engagement. After the
        Executive Marketing Diagnostic, the system recommends either optional SimpliBlueprint or a direct package when strategy
        is already clear. A human strategist must approve the route before scope, pricing, or proposal work continues.
      </p>
    </section>
  );
}
