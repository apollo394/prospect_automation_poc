"use client";

import type { Evidence, Insight } from "@/lib/api";
import { StatusPill } from "@/components/ui/StatusPill";
import { cn } from "@/lib/utils";

export function EvidenceBlock({ evidence }: { evidence: Evidence }) {
  return (
    <figure className="rounded-sc-sm border border-sc-line bg-sc-surface p-3.5">
      <div className="mb-2 flex flex-wrap items-center gap-x-2 gap-y-0.5 text-[11px] font-medium text-sc-muted">
        <span className="font-semibold text-sc-primary">{evidence.source}</span>
        <span aria-hidden className="text-sc-line">
          ·
        </span>
        <time className="font-mono tabular-nums tracking-wide text-sc-charcoal">
          {evidence.timestamp}
        </time>
        {evidence.speaker && (
          <>
            <span aria-hidden className="text-sc-line">
              ·
            </span>
            <span>{evidence.speaker}</span>
          </>
        )}
      </div>
      <blockquote className="text-[13px] leading-relaxed text-sc-ink">
        “{evidence.quote}”
      </blockquote>
    </figure>
  );
}

export function InsightWithEvidence({
  insight,
  compact = false,
}: {
  insight: Insight;
  compact?: boolean;
}) {
  return (
    <article className={cn(!compact && "border-b border-sc-line py-5 last:border-0")}>
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div className="min-w-0 flex-1">
          <h4 className="text-sm font-semibold text-sc-ink">{insight.title}</h4>
          <p className="mt-1 text-sm leading-snug text-sc-charcoal">{insight.description}</p>
        </div>
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

      {insight.evidence?.length > 0 ? (
        <div className="mt-3 space-y-2">
          <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-sc-muted">
            Transcript evidence
          </p>
          {insight.evidence.map((ev) => (
            <EvidenceBlock key={ev.id} evidence={ev} />
          ))}
        </div>
      ) : (
        <p className="mt-3 text-xs text-sc-muted">No transcript quote linked yet.</p>
      )}
    </article>
  );
}

export function IntelligenceSection({
  title,
  insights,
}: {
  title: string;
  insights: Insight[];
}) {
  if (!insights.length) return null;

  return (
    <section className="py-4 first:pt-0">
      <h3 className="text-sm font-semibold tracking-tight text-sc-ink">{title}</h3>
      <ul className="mt-2 space-y-1.5">
        {insights.map((insight) => (
          <li key={insight.id} className="flex gap-2 text-sm leading-snug text-sc-charcoal">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-sc-accent" aria-hidden />
            <span>
              <span className="font-medium text-sc-ink">{insight.title}. </span>
              {insight.description}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
