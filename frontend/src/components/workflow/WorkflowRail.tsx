import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { normalizedStep, workflowSteps, type WorkflowStep } from "@/lib/workflow";

type Props = {
  currentStep: WorkflowStep;
  primary?: { label: string; href: string };
  back?: { label: string; href: string };
  reviewState?: string;
  complete?: boolean;
};

export function WorkflowRail({ currentStep, primary, back, reviewState, complete }: Props) {
  const currentIndex = workflowSteps.findIndex((step) => step.key === normalizedStep(currentStep));
  return (
    <aside className="space-y-4 lg:sticky lg:top-8 lg:self-start">
      <section className="rounded-sc border border-sc-line bg-sc-surface p-4 shadow-sc">
        <p className="text-xs font-semibold uppercase tracking-wide text-sc-muted">Workflow</p>
        <ol className="mt-3 space-y-3">
          {workflowSteps.map((step, index) => {
            const done = index < currentIndex || complete;
            const active = index === currentIndex && !complete;
            return <li key={step.key} className={`flex items-center gap-2 text-sm ${active ? "font-semibold text-sc-ink" : "text-sc-muted"}`}>
              <span className={`flex h-6 w-6 items-center justify-center rounded-full text-xs font-bold ${done || active ? "bg-sc-primary text-white" : "bg-sc-line text-sc-muted"}`}>
                {done ? <Check className="h-3.5 w-3.5" /> : index + 1}
              </span>
              {step.label}
            </li>;
          })}
        </ol>
        {reviewState && <p className="mt-4 border-t border-sc-line pt-3 text-xs text-sc-muted">Review status: {reviewState.replaceAll("_", " ")}</p>}
      </section>
      {back && <Link href={back.href} className="block"><Button variant="secondary" className="w-full">{back.label}</Button></Link>}
      {primary && !complete && <Link href={primary.href} className="block"><Button className="w-full">{primary.label}<ArrowRight className="h-4 w-4" /></Button></Link>}
      {complete && <p className="rounded-sc border border-sc-primary/30 bg-sc-primary/5 p-3 text-sm text-sc-primary">Proposal approved. POC 1 commercial path complete.</p>}
    </aside>
  );
}
