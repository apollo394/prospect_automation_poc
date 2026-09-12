"use client";

import { Check } from "lucide-react";

export function ReviewRail({
  state,
  approvedBy,
}: {
  state: string;
  approvedBy?: string | null;
}) {
  const steps = [
    { key: "ai_generated", label: "AI Generated" },
    { key: "needs_human_review", label: "Needs Human Review" },
    { key: "approved", label: "Approved" },
  ];
  const activeIndex =
    state === "approved" ? 2 : state === "needs_human_review" ? 1 : 0;

  return (
    <div className="rounded-sc border border-sc-line bg-sc-surface p-4 shadow-sc">
      <div className="text-xs font-semibold uppercase tracking-wide text-sc-muted">
        Review status
      </div>
      <ol className="mt-3 space-y-2">
        {steps.map((s, i) => (
          <li key={s.key} className="flex items-center gap-2 text-sm">
            <span
              className={`flex h-6 w-6 items-center justify-center rounded-full text-xs font-bold ${
                i <= activeIndex
                  ? "bg-sc-primary text-white"
                  : "bg-sc-line text-sc-muted"
              }`}
            >
              {i < activeIndex ? <Check className="h-3.5 w-3.5" /> : i + 1}
            </span>
            <span className={i === activeIndex ? "font-semibold text-sc-ink" : "text-sc-muted"}>
              {s.label}
            </span>
          </li>
        ))}
      </ol>
      {state === "approved" && approvedBy && (
        <p className="mt-3 text-sm font-medium text-sc-primary">
          Approved by {approvedBy}
        </p>
      )}
      <p className="mt-3 text-xs leading-relaxed text-sc-muted">
        AI prepares the work. Humans review and approve. This does not replace SimpliCreative
        strategists.
      </p>
    </div>
  );
}
