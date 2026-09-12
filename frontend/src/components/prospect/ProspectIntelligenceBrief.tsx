"use client";

import { useEffect, useMemo, useState } from "react";
import type { Insight, IntelligenceResponse } from "@/lib/api";
import { EvidenceBlock } from "@/components/prospect/IntelligenceParts";
import { StatusPill } from "@/components/ui/StatusPill";
import { cn } from "@/lib/utils";

const BRIEF_SECTIONS: { key: string; title: string }[] = [
  { key: "business_goals", title: "Goals" },
  { key: "pain_points", title: "Pain Points" },
  { key: "desired_outcomes", title: "Outcomes" },
  { key: "opportunities", title: "Opportunities" },
  { key: "open_questions", title: "Open Questions" },
];

function byCategory(intelligence: IntelligenceResponse, key: string): Insight[] {
  return intelligence.categories.find((c) => c.key === key)?.insights ?? [];
}

export function ProspectIntelligenceBrief({
  intelligence,
  prospectId,
}: {
  intelligence: IntelligenceResponse;
  prospectId: string;
}) {
  const availableSections = useMemo(
    () =>
      BRIEF_SECTIONS.filter(({ key }) => byCategory(intelligence, key).length > 0),
    [intelligence]
  );

  const [activeSection, setActiveSection] = useState(
    () => availableSections[0]?.key ?? "business_goals"
  );

  const sectionInsights = byCategory(intelligence, activeSection);

  const [activeId, setActiveId] = useState<string | null>(
    () => sectionInsights[0]?.id ?? null
  );

  useEffect(() => {
    const next = byCategory(intelligence, activeSection);
    setActiveId(next[0]?.id ?? null);
  }, [activeSection, intelligence]);

  const activeInsight =
    sectionInsights.find((i) => i.id === activeId) ?? sectionInsights[0] ?? null;

  const summaryLead = intelligence.summary
    .split(/(?<=\.)\s+/)
    .map((p) => p.trim())
    .filter(Boolean)
    .slice(0, 2)
    .join(" ");

  return (
    <section className="overflow-hidden rounded-sc border border-sc-line bg-sc-surface shadow-sc animate-sc-fade-up">
      {/* Summary */}
      <div className="border-b border-sc-line px-5 py-4 md:px-6">
        <h2 className="text-base font-semibold tracking-tight text-sc-ink">
          AI Prospect Summary
        </h2>
        <p className="mt-2 max-w-[72ch] text-sm leading-relaxed text-sc-charcoal">
          {summaryLead}
        </p>
      </div>

      {/* Category tabs */}
      <div className="flex gap-0 overflow-x-auto border-b border-sc-line px-2">
        {availableSections.map(({ key, title }) => {
          const count = byCategory(intelligence, key).length;
          const selected = key === activeSection;
          return (
            <button
              key={key}
              type="button"
              onClick={() => setActiveSection(key)}
              className={cn(
                "relative shrink-0 px-3.5 py-3 text-sm font-medium transition",
                selected
                  ? "text-sc-primary"
                  : "text-sc-muted hover:text-sc-ink"
              )}
            >
              {title}
              <span
                className={cn(
                  "ml-1.5 tabular-nums text-xs",
                  selected ? "text-sc-accent" : "text-sc-muted/70"
                )}
              >
                {count}
              </span>
              {selected && (
                <span className="absolute inset-x-3 bottom-0 h-0.5 rounded-full bg-sc-accent" />
              )}
            </button>
          );
        })}
      </div>

      {/* Master / detail */}
      <div className="grid lg:grid-cols-[minmax(0,1fr)_minmax(300px,0.95fr)]">
        <ul className="divide-y divide-sc-line border-b border-sc-line lg:border-b-0 lg:border-r">
          {sectionInsights.map((insight, index) => {
            const selected = activeInsight?.id === insight.id;
            const hasEvidence = (insight.evidence?.length ?? 0) > 0;
            return (
              <li key={insight.id}>
                <button
                  type="button"
                  onClick={() => setActiveId(insight.id)}
                  className={cn(
                    "flex w-full items-start gap-3 px-5 py-3.5 text-left transition md:px-6",
                    selected ? "bg-sc-success-soft" : "hover:bg-sc-canvas/80"
                  )}
                >
                  <span
                    className={cn(
                      "mt-0.5 w-5 shrink-0 text-xs font-semibold tabular-nums",
                      selected ? "text-sc-accent" : "text-sc-muted"
                    )}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-sm font-semibold text-sc-ink">
                      {insight.title}
                    </span>
                    <span className="mt-0.5 block text-[13px] leading-snug text-sc-muted line-clamp-2">
                      {insight.description}
                    </span>
                  </span>
                  {hasEvidence && (
                    <span className="mt-0.5 shrink-0 text-[10px] font-semibold uppercase tracking-wide text-sc-accent">
                      Quote
                    </span>
                  )}
                </button>
              </li>
            );
          })}
        </ul>

        <div className="bg-[color-mix(in_srgb,var(--sc-canvas)_55%,white)] px-5 py-4 md:px-6 md:py-5">
          {activeInsight ? (
            <EvidenceDetail insight={activeInsight} />
          ) : (
            <p className="text-sm text-sc-muted">Select a finding.</p>
          )}
        </div>
      </div>

    </section>
  );
}

function EvidenceDetail({ insight }: { insight: Insight }) {
  const hasEvidence = (insight.evidence?.length ?? 0) > 0;

  return (
    <div>
      <div className="flex flex-wrap items-center gap-2">
        <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-sc-muted">
          Detail
        </p>
        <StatusPill
          tone={
            insight.confidence === "high"
              ? "teal"
              : insight.confidence === "medium"
                ? "amber"
                : "muted"
          }
        >
          {insight.confidence}
        </StatusPill>
      </div>
      <h3 className="mt-2 text-base font-semibold leading-snug tracking-tight text-sc-ink">
        {insight.title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-sc-charcoal">
        {insight.description}
      </p>

      <div className="mt-5">
        <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-sc-muted">
          {hasEvidence ? "Transcript evidence" : "Evidence"}
        </p>
        {hasEvidence ? (
          <div className="space-y-2.5">
            {insight.evidence.map((ev) => (
              <EvidenceBlock key={ev.id} evidence={ev} />
            ))}
          </div>
        ) : (
          <p className="rounded-sc-sm border border-dashed border-sc-line bg-sc-surface px-3 py-3 text-sm text-sc-muted">
            No call quote linked — treat as a gap to confirm in the questionnaire.
          </p>
        )}
      </div>
    </div>
  );
}
