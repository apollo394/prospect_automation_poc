"use client";

import { useEffect, useState } from "react";
import { CheckCircle2, Circle } from "lucide-react";
import type { AnalysisResult } from "@/lib/api";
import { api } from "@/lib/api";

const STEP_LABELS = [
  "Reading strategy call",
  "Extracting goals",
  "Identifying pain points",
  "Identifying requirements",
  "Preparing strategic brief",
];

export function AnalyzeExperience({
  prospectId,
  companyName,
  onComplete,
}: {
  prospectId: string;
  companyName: string;
  onComplete: (result: AnalysisResult) => void;
}) {
  const [stepIndex, setStepIndex] = useState(0);
  const [result, setResult] = useState<AnalysisResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    let timer: ReturnType<typeof setTimeout>;

    async function run() {
      try {
        for (let i = 0; i < STEP_LABELS.length; i++) {
          await new Promise((r) => {
            timer = setTimeout(r, 380 + i * 70);
          });
          if (cancelled) return;
          setStepIndex(i + 1);
        }
        const data = await api.analyze(prospectId);
        if (cancelled) return;
        setResult(data);
        onComplete(data);
      } catch (e) {
        if (!cancelled) setError(e instanceof Error ? e.message : "Analysis failed");
      }
    }

    run();
    return () => {
      cancelled = true;
      clearTimeout(timer);
    };
  }, [prospectId, onComplete]);

  const complete = Boolean(result);

  return (
    <div className="sc-panel animate-sc-fade-up p-6 md:p-7">
      <h3 className="text-lg font-semibold tracking-tight text-sc-ink">
        {complete ? "Analysis complete" : `Analyzing ${companyName}…`}
      </h3>
      <p className="mt-1 text-sm text-sc-muted">
        Turning the Fathom strategy call into a strategic brief for human review.
      </p>

      <ul className="mt-6 space-y-3">
        {STEP_LABELS.map((label, i) => {
          const done = stepIndex > i || complete;
          const active = !complete && stepIndex === i;
          return (
            <li key={label} className="flex items-center gap-3 text-sm">
              {done ? (
                <CheckCircle2 className="h-5 w-5 text-sc-accent" />
              ) : (
                <Circle
                  className={`h-5 w-5 text-sc-line ${active ? "animate-sc-pulse-dot text-sc-muted" : ""}`}
                />
              )}
              <span className={done ? "font-medium text-sc-ink" : "text-sc-muted"}>
                {label}
              </span>
            </li>
          );
        })}
      </ul>

      {error && <p className="mt-4 text-sm text-sc-danger">{error}</p>}

      {complete && result && (
        <div className="mt-6 grid grid-cols-2 gap-3 border-t border-sc-line pt-5 sm:grid-cols-4">
          {[
            { label: "Goals", value: result.counts.goals },
            { label: "Pain Points", value: result.counts.pain_points },
            { label: "Opportunities", value: result.counts.opportunities },
            { label: "Open Questions", value: result.counts.open_questions },
          ].map((c) => (
            <div
              key={c.label}
              className="rounded-sc-sm bg-[color-mix(in_srgb,var(--sc-canvas)_90%,white)] px-3 py-3"
            >
              <div className="text-2xl font-semibold tracking-tight text-sc-primary">
                {c.value}
              </div>
              <div className="text-xs font-medium text-sc-muted">{c.label}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
