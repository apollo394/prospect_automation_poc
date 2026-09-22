"use client";

import Link from "next/link";
import { ArrowRight, Database, Map } from "lucide-react";
import { useEffect, useState } from "react";
import { api, type BlueprintEngagement, type GovernedJourney } from "@/lib/api";
import { StatusPill } from "@/components/ui/StatusPill";
import { ENGAGEMENT_ROUTE_LABELS, routeBadgeTone, routeDecisionLabel } from "@/lib/engagementRoutes";
import { BLUEPRINT_STAGES, blueprintStepIndex } from "@/lib/blueprint";
import { journeyDestination, journeyStepIndex, journeySteps } from "@/lib/journey";

export default function Page() {
  const [journeys, setJourneys] = useState<GovernedJourney[]>([]);
  const [blueprints, setBlueprints] = useState<BlueprintEngagement[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    Promise.all([api.journeys(), api.blueprints()])
      .then(([journeyRows, blueprintRows]) => {
        setJourneys(journeyRows);
        setBlueprints(blueprintRows);
      })
      .catch((reason) => setError(reason instanceof Error ? reason.message : "Unable to load workspace"));
  }, []);

  return (
    <main className="mx-auto max-w-5xl space-y-8 animate-sc-fade-up">
      <header className="flex flex-wrap items-end justify-between gap-5">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[.14em] text-sc-accent">Acquisition workspace</p>
          <h1 className="mt-2 text-3xl font-bold tracking-[-.04em] text-sc-ink">Prospect journeys</h1>
          <p className="mt-2 max-w-[55ch] text-sm leading-relaxed text-sc-muted">
            Start with SimpliSignals, prepare an evidence-led diagnostic, then approve optional SimpliBlueprint or a direct Foundation / WordPress / CARE route.
          </p>
        </div>
        <div className="inline-flex items-center gap-2 rounded-full border border-sc-line bg-sc-canvas px-3 py-2 text-xs font-medium text-sc-muted">
          <Database className="h-3.5 w-3.5 text-sc-accent" />
          Synthetic demonstration workspace
        </div>
      </header>
      {error && (
        <p className="rounded-sc-sm border border-sc-danger/20 bg-[var(--sc-danger-soft)] px-4 py-3 text-sm text-sc-danger">
          {error}. Start the journey service to continue.
        </p>
      )}
      <section>
        <div className="mb-3 flex items-center justify-between">
          <h2 className="text-sm font-semibold uppercase tracking-[.1em] text-sc-muted">SimpliSignals leads (ScoreApp)</h2>
          <span className="text-xs text-sc-muted">{journeys.length}/4 demo routes</span>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {journeys.map((journey) => {
            const ready = journey.workflow.current_stage === "prepare_diagnostic";
            const activeStep = journeyStepIndex(journey.workflow);
            const prospect = journey.prospect as Record<string, string>;
            const scoreapp = journey.scoreapp as typeof journey.scoreapp & {
              campaign_context?: string;
              headline?: string;
              overall_score?: number;
              dimensions?: Array<{ name: string; score: number }>;
            };
            const demoRoute = journey.recommendation.product as string | undefined;
            const routeTone = routeBadgeTone(demoRoute);
            const routePillClass =
              routeTone === "violet"
                ? "border-violet-200 bg-violet-50 text-violet-900"
                : routeTone === "teal"
                  ? "border-teal-200 bg-teal-50 text-teal-900"
                  : routeTone === "amber"
                    ? "border-amber-200 bg-amber-50 text-amber-900"
                    : "border-sc-line bg-sc-canvas text-sc-muted";
            return (
              <Link
                key={journey.id}
                href={journeyDestination(journey.id, journey.workflow.current_stage)}
                className="sc-panel group p-5 transition hover:-translate-y-0.5 hover:border-sc-accent/50"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[.12em] text-sc-accent">SimpliSignals lead · ScoreApp</p>
                    <h3 className="mt-2 text-lg font-semibold text-sc-ink">{journey.company_name}</h3>
                    <p className="mt-1 text-sm text-sc-muted">
                      {prospect.contact_name} · {prospect.contact_role}
                    </p>
                  </div>
                  <StatusPill tone={ready ? "amber" : "teal"}>{ready ? "Ready to prepare" : "In progress"}</StatusPill>
                </div>
                <div className="mt-4 flex flex-wrap items-center gap-2">
                  <span className={`rounded-full border px-2.5 py-1 text-xs font-semibold ${routePillClass}`}>
                    Demo route: {ENGAGEMENT_ROUTE_LABELS[demoRoute ?? ""] ?? demoRoute ?? "Pending"}
                  </span>
                  <span className="text-xs text-sc-muted">{routeDecisionLabel(journey.route_decision)}</span>
                </div>
                <div className="mt-5 flex items-end justify-between gap-4 border-y border-sc-line py-4">
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wide text-sc-muted">SimpliSignals score</p>
                    <p className="mt-1 text-3xl font-bold tracking-tight text-sc-ink">
                      {scoreapp.overall_score}
                      <span className="text-base font-medium text-sc-muted">/100</span>
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-right text-xs text-sc-muted">
                    {(scoreapp.dimensions ?? []).map((dimension) => (
                      <span key={dimension.name}>
                        {dimension.name}: <b className="text-sc-ink">{dimension.score}</b>
                      </span>
                    ))}
                  </div>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-sc-charcoal">{scoreapp.headline}</p>
                <p className="mt-2 text-xs text-sc-muted">
                  {scoreapp.campaign_context} · {prospect.website}
                </p>
                <div className="mt-4 flex items-center gap-3" aria-label={`Journey step ${activeStep + 1} of ${journeySteps.length}`}>
                  <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-sc-line">
                    <div
                      className="h-full rounded-full bg-sc-primary transition-all duration-700"
                      style={{ width: `${((activeStep + 1) / journeySteps.length) * 100}%` }}
                    />
                  </div>
                  <span className="shrink-0 text-xs font-medium text-sc-muted">
                    Step {activeStep + 1}/{journeySteps.length}
                  </span>
                </div>
                <p className="mt-3 text-xs leading-relaxed text-sc-muted">{journey.synthetic_disclaimer}</p>
                <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-sc-primary">
                  {ready ? "Review lead" : `Continue at ${journeySteps[activeStep].label}`}{" "}
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      <section>
        <div className="mb-3 flex items-center justify-between">
          <h2 className="text-sm font-semibold uppercase tracking-[.1em] text-sc-muted">Blueprint delivery (BLUE-002)</h2>
          <span className="text-xs text-sc-muted">{blueprints.length} engagements</span>
        </div>
        <p className="mb-4 max-w-[60ch] text-sm text-sc-muted">
          Post-sale SimpliBlueprint delivery: activation through questionnaire, research, report, strategy deck, session,
          and Foundation handoff. NuVue is always available; Cedar unlocks after its acquisition proposal is approved.
        </p>
        <div className="grid gap-4 md:grid-cols-2">
          {blueprints.map((bp) => {
            const step = blueprintStepIndex(bp.workflow);
            const done = bp.workflow.current_stage === "complete";
            return (
              <Link
                key={bp.id}
                href={`/blueprints/${bp.id}`}
                className="sc-panel group p-5 transition hover:-translate-y-0.5 hover:border-violet-300"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[.12em] text-violet-700">
                      <Map className="h-3.5 w-3.5" /> SimpliBlueprint delivery
                    </p>
                    <h3 className="mt-2 text-lg font-semibold text-sc-ink">{bp.company_name}</h3>
                  </div>
                  <StatusPill tone={!bp.unlocked ? "muted" : done ? "teal" : "amber"}>
                    {!bp.unlocked ? "Locked" : done ? "Complete" : "Ready"}
                  </StatusPill>
                </div>
                <p className="mt-3 text-sm text-sc-muted">{bp.synthetic_disclaimer}</p>
                <div className="mt-4 flex items-center gap-3">
                  <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-sc-line">
                    <div
                      className="h-full rounded-full bg-violet-600 transition-all duration-700"
                      style={{
                        width: `${((done ? BLUEPRINT_STAGES.length : step + 1) / BLUEPRINT_STAGES.length) * 100}%`,
                      }}
                    />
                  </div>
                  <span className="shrink-0 text-xs font-medium text-sc-muted">
                    {done ? "Done" : `Step ${step + 1}/${BLUEPRINT_STAGES.length}`}
                  </span>
                </div>
                <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-violet-800">
                  {!bp.unlocked ? "View lock reason" : done ? "Review handoff" : "Open delivery"}
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </main>
  );
}
