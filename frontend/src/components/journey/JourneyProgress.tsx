"use client";

import { motion } from "motion/react";
import { Check } from "lucide-react";
import { journeyStepIndex, journeySteps } from "@/lib/journey";
import type { JourneyWorkflow } from "@/lib/types";

export function JourneyProgress({ workflow }: { workflow: JourneyWorkflow }) {
  const active = journeyStepIndex(workflow);
  return <section className="sc-panel overflow-hidden p-5">
    <div className="flex items-end justify-between gap-4"><div><p className="text-xs font-semibold uppercase tracking-[.14em] text-sc-accent">Journey progress</p><h2 className="mt-1 text-lg font-semibold text-sc-ink">Step {active + 1} of {journeySteps.length}</h2></div><p className="text-xs text-sc-muted">Saved automatically</p></div>
    <ol className="mt-5 grid grid-cols-7 gap-1" aria-label="Journey progress">
      {journeySteps.map((step, index) => {
        const complete = index < active || workflow.current_stage === "complete";
        const current = index === active && workflow.current_stage !== "complete";
        return <li key={step.key} className="min-w-0">
          <div className="flex items-center gap-1"><motion.span initial={false} animate={{ scale: current ? 1.08 : 1 }} className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-bold ${complete || current ? "bg-sc-primary text-white" : "bg-sc-line text-sc-muted"}`}>{complete ? <Check className="h-3.5 w-3.5" /> : index + 1}</motion.span>{index < 6 && <span className={`h-[2px] flex-1 ${complete ? "bg-sc-primary" : "bg-sc-line"}`} />}</div>
          <p className={`mt-2 text-[10px] font-semibold uppercase tracking-wide ${current ? "text-sc-primary" : "text-sc-muted"}`}>{step.label}</p>
        </li>;
      })}
    </ol>
  </section>;
}
