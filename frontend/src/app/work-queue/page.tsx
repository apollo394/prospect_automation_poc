"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { api, type GovernedJourney } from "@/lib/api";
import { Button } from "@/components/ui/Button";
import { StatusPill } from "@/components/ui/StatusPill";
import {
  journeyDestination,
  journeyQueueCopy,
  journeyStepIndex,
  journeySteps,
} from "@/lib/journey";

export default function WorkQueuePage() {
  const [journeys, setJourneys] = useState<GovernedJourney[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    api
      .journeys()
      .then(setJourneys)
      .catch((reason) =>
        setError(reason instanceof Error ? reason.message : "Unable to load work queue")
      );
  }, []);

  const open = journeys.filter((journey) => journey.workflow.current_stage !== "complete");
  const done = journeys.filter((journey) => journey.workflow.current_stage === "complete");

  return (
    <main className="mx-auto max-w-5xl space-y-8 animate-sc-fade-up">
      <header>
        <p className="text-xs font-semibold uppercase tracking-[.14em] text-sc-accent">
          Strategist inbox
        </p>
        <h1 className="mt-2 text-3xl font-bold tracking-[-.04em] text-sc-ink">Work Queue</h1>
        <p className="mt-2 max-w-[55ch] text-sm leading-relaxed text-sc-muted">
          Human actions waiting across governed prospect journeys — prepare, review, approve.
        </p>
      </header>

      {error && (
        <p className="rounded-sc-sm border border-sc-danger/20 bg-[var(--sc-danger-soft)] px-4 py-3 text-sm text-sc-danger">
          {error}. Start the journey service to continue.
        </p>
      )}

      <section className="space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="text-sm font-semibold uppercase tracking-[.1em] text-sc-muted">
            Awaiting action
          </h2>
          <span className="text-xs text-sc-muted">{open.length} open</span>
        </div>

        {!error && open.length === 0 && (
          <p className="sc-panel p-5 text-sm text-sc-muted">
            No open journey actions. All demonstration leads are complete or still loading.
          </p>
        )}

        {open.map((journey) => {
          const stage = journey.workflow.current_stage;
          const copy = journeyQueueCopy(stage);
          const step = journeyStepIndex(journey.workflow);
          const prospect = journey.prospect as Record<string, string>;
          return (
            <div
              key={journey.id}
              className="sc-panel flex flex-wrap items-center justify-between gap-4 p-5 transition hover:border-sc-accent/40"
            >
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="text-lg font-semibold text-sc-ink">{journey.company_name}</h3>
                  <StatusPill tone="amber">{journeySteps[step].label}</StatusPill>
                </div>
                <p className="mt-1 text-sm text-sc-charcoal">{copy.headline}</p>
                <p className="mt-1 text-xs text-sc-muted">
                  {copy.detail}
                  {prospect.contact_name ? ` · ${prospect.contact_name}` : ""}
                </p>
                <div
                  className="mt-3 flex items-center gap-3"
                  aria-label={`Journey step ${step + 1} of ${journeySteps.length}`}
                >
                  <div className="h-1.5 max-w-[12rem] flex-1 overflow-hidden rounded-full bg-sc-line">
                    <div
                      className="h-full rounded-full bg-sc-primary"
                      style={{ width: `${((step + 1) / journeySteps.length) * 100}%` }}
                    />
                  </div>
                  <span className="text-xs text-sc-muted">
                    Step {step + 1}/{journeySteps.length}
                  </span>
                </div>
              </div>
              <Link href={journeyDestination(journey.id, stage)}>
                <Button>
                  {copy.action_label}
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          );
        })}
      </section>

      {done.length > 0 && (
        <section className="space-y-3">
          <h2 className="text-sm font-semibold uppercase tracking-[.1em] text-sc-muted">
            Complete
          </h2>
          {done.map((journey) => {
            const copy = journeyQueueCopy("complete");
            return (
              <div
                key={journey.id}
                className="flex flex-wrap items-center justify-between gap-4 rounded-sc-sm border border-sc-line bg-sc-canvas px-5 py-4"
              >
                <div>
                  <p className="font-semibold text-sc-ink">{journey.company_name}</p>
                  <p className="text-xs text-sc-muted">{copy.detail}</p>
                </div>
                <StatusPill tone="teal">Complete</StatusPill>
              </div>
            );
          })}
        </section>
      )}
    </main>
  );
}
