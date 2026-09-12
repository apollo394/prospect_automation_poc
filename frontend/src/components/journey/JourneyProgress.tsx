"use client";

import { useCallback, useEffect, useState } from "react";
import { useParams, usePathname } from "next/navigation";
import { motion } from "motion/react";
import { Check } from "lucide-react";
import { api } from "@/lib/api";
import { journeyStepIndex, journeySteps } from "@/lib/journey";
import type { JourneyWorkflow } from "@/lib/types";

export function JourneyProgress({ workflow: workflowProp }: { workflow?: JourneyWorkflow }) {
  const { id } = useParams<{ id: string }>();
  const pathname = usePathname();
  const [workflow, setWorkflow] = useState<JourneyWorkflow | undefined>(workflowProp);

  const load = useCallback(() => {
    if (workflowProp) {
      setWorkflow(workflowProp);
      return;
    }
    if (!id) return;
    api.journey(id).then((journey) => setWorkflow(journey.workflow)).catch(() => undefined);
  }, [id, workflowProp]);

  useEffect(() => {
    load();
  }, [load, pathname]);

  useEffect(() => {
    if (workflowProp) return;
    const onUpdate = () => load();
    window.addEventListener("sc-journey-updated", onUpdate);
    return () => window.removeEventListener("sc-journey-updated", onUpdate);
  }, [load, workflowProp]);

  if (!workflow) {
    return (
      <aside className="lg:sticky lg:top-8 lg:self-start">
        <section className="sc-panel p-5">
          <p className="text-xs text-sc-muted">Loading progress…</p>
        </section>
      </aside>
    );
  }

  const active = journeyStepIndex(workflow);

  return (
    <aside className="lg:sticky lg:top-8 lg:self-start" aria-label="Journey progress">
      <section className="sc-panel overflow-hidden p-5">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[.14em] text-sc-accent">Journey progress</p>
          <h2 className="mt-1 text-lg font-semibold text-sc-ink">
            Step {active + 1} of {journeySteps.length}
          </h2>
          <p className="mt-1 text-xs text-sc-muted">Saved automatically</p>
        </div>
        <ol className="mt-5 space-y-3">
          {journeySteps.map((step, index) => {
            const complete = index < active || workflow.current_stage === "complete";
            const current = index === active && workflow.current_stage !== "complete";
            return (
              <li key={step.key} className="flex items-center gap-3">
                <motion.span
                  initial={false}
                  animate={{ scale: current ? 1.08 : 1 }}
                  className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-bold ${
                    complete || current ? "bg-sc-primary text-white" : "bg-sc-line text-sc-muted"
                  }`}
                >
                  {complete ? <Check className="h-3.5 w-3.5" /> : index + 1}
                </motion.span>
                <p
                  className={`text-xs font-semibold uppercase tracking-wide ${
                    current ? "text-sc-primary" : "text-sc-muted"
                  }`}
                >
                  {step.label}
                </p>
              </li>
            );
          })}
        </ol>
      </section>
    </aside>
  );
}
