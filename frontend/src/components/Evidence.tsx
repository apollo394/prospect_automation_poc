"use client";

import { useState } from "react";
import { ChevronDown, Quote } from "lucide-react";
import type { Evidence, Insight } from "@/lib/api";
import { StatusPill } from "@/components/ui/StatusPill";
import { cn } from "@/lib/utils";

function ConfidenceTone(c: string) {
  if (c === "high") return "teal" as const;
  if (c === "medium") return "amber" as const;
  return "muted" as const;
}

export function EvidenceBlock({ evidence }: { evidence: Evidence }) {
  return (
    <figure className="rounded-sc-sm border border-sc-line bg-[color-mix(in_srgb,var(--sc-canvas)_80%,white)] p-3">
      <div className="mb-2 flex items-center gap-2 text-xs text-sc-muted">
        <Quote className="h-3.5 w-3.5 text-sc-accent" />
        <span>{evidence.source}</span>
        <span aria-hidden>·</span>
        <span>{evidence.timestamp}</span>
        {evidence.speaker && (
          <>
            <span aria-hidden>·</span>
            <span>{evidence.speaker}</span>
          </>
        )}
      </div>
      <blockquote className="text-sm leading-relaxed text-sc-charcoal">
        “{evidence.quote}”
      </blockquote>
    </figure>
  );
}

export function InsightCard({ insight }: { insight: Insight }) {
  const [open, setOpen] = useState(insight.confidence === "high");

  return (
    <article className="rounded-sc border border-sc-line bg-sc-surface p-4 shadow-sc">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h4 className="text-sm font-semibold text-sc-ink">{insight.title}</h4>
          <p className="mt-1 text-sm leading-relaxed text-sc-charcoal/90">
            {insight.description}
          </p>
        </div>
        <StatusPill tone={ConfidenceTone(insight.confidence)}>
          {insight.confidence} confidence
        </StatusPill>
      </div>

      {insight.evidence?.length > 0 && (
        <div className="mt-3">
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex items-center gap-1 text-xs font-semibold text-sc-primary"
          >
            Evidence ({insight.evidence.length})
            <ChevronDown
              className={cn("h-3.5 w-3.5 transition", open && "rotate-180")}
            />
          </button>
          {open && (
            <div className="mt-2 space-y-2 animate-sc-fade-up">
              {insight.evidence.map((ev) => (
                <EvidenceBlock key={ev.id} evidence={ev} />
              ))}
            </div>
          )}
        </div>
      )}
    </article>
  );
}
