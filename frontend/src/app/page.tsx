"use client";

import Link from "next/link";
import { ArrowRight, Database } from "lucide-react";
import { useEffect, useState } from "react";
import { api, type GovernedJourney } from "@/lib/api";
import { StatusPill } from "@/components/ui/StatusPill";
import { journeyDestination, journeyStepIndex, journeySteps } from "@/lib/journey";

export default function Page() {
  const [journeys, setJourneys] = useState<GovernedJourney[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    api.journeys().then(setJourneys).catch((reason) => setError(reason instanceof Error ? reason.message : "Unable to load journeys"));
  }, []);

  return (
    <main className="mx-auto max-w-5xl space-y-8 animate-sc-fade-up">
      <header className="flex flex-wrap items-end justify-between gap-5">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[.14em] text-sc-accent">Acquisition workspace</p>
          <h1 className="mt-2 text-3xl font-bold tracking-[-.04em] text-sc-ink">Prospect journeys</h1>
          <p className="mt-2 max-w-[55ch] text-sm leading-relaxed text-sc-muted">Start with a clear ScoreApp signal, prepare an evidence-led diagnostic, then make a human-approved route decision.</p>
        </div>
        <div className="inline-flex items-center gap-2 rounded-full border border-sc-line bg-sc-canvas px-3 py-2 text-xs font-medium text-sc-muted"><Database className="h-3.5 w-3.5 text-sc-accent" />Synthetic demonstration workspace</div>
      </header>
      {error && <p className="rounded-sc-sm border border-sc-danger/20 bg-[var(--sc-danger-soft)] px-4 py-3 text-sm text-sc-danger">{error}. Start the journey service to continue.</p>}
      <section>
        <div className="mb-3 flex items-center justify-between"><h2 className="text-sm font-semibold uppercase tracking-[.1em] text-sc-muted">Imported ScoreApp leads</h2><span className="text-xs text-sc-muted">{journeys.length}/4 leads</span></div>
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
            return <Link key={journey.id} href={journeyDestination(journey.id, journey.workflow.current_stage)} className="sc-panel group p-5 transition hover:-translate-y-0.5 hover:border-sc-accent/50">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[.12em] text-sc-accent">Imported ScoreApp lead</p>
                  <h3 className="mt-2 text-lg font-semibold text-sc-ink">{journey.company_name}</h3>
                  <p className="mt-1 text-sm text-sc-muted">{prospect.contact_name} · {prospect.contact_role}</p>
                </div>
                <StatusPill tone={ready ? "amber" : "teal"}>{ready ? "Ready to prepare" : "In progress"}</StatusPill>
              </div>
              <div className="mt-5 flex items-end justify-between gap-4 border-y border-sc-line py-4">
                <div>
                  <p className="text-xs font-medium uppercase tracking-wide text-sc-muted">Lean Marketing Score</p>
                  <p className="mt-1 text-3xl font-bold tracking-tight text-sc-ink">{scoreapp.overall_score}<span className="text-base font-medium text-sc-muted">/100</span></p>
                </div>
                <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-right text-xs text-sc-muted">
                  {(scoreapp.dimensions ?? []).map((dimension) => <span key={dimension.name}>{dimension.name}: <b className="text-sc-ink">{dimension.score}</b></span>)}
                </div>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-sc-charcoal">{scoreapp.headline}</p>
              <p className="mt-2 text-xs text-sc-muted">{scoreapp.campaign_context} · {prospect.website}</p>
              <div className="mt-4 flex items-center gap-3" aria-label={`Journey step ${activeStep + 1} of ${journeySteps.length}`}>
                <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-sc-line"><div className="h-full rounded-full bg-sc-primary transition-all duration-700" style={{ width: `${((activeStep + 1) / journeySteps.length) * 100}%` }} /></div>
                <span className="shrink-0 text-xs font-medium text-sc-muted">Step {activeStep + 1}/{journeySteps.length}</span>
              </div>
              <p className="mt-3 text-xs leading-relaxed text-sc-muted">{journey.synthetic_disclaimer}</p>
              <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-sc-primary">{ready ? "Review lead" : `Continue at ${journeySteps[activeStep].label}`} <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" /></div>
            </Link>;
          })}
        </div>
      </section>
    </main>
  );
}
