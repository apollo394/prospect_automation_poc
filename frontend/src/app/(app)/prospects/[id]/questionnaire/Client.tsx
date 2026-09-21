"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle2, FileQuestion, Play } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import QuestionnaireReview from "@/components/journey/QuestionnaireReview";
import { useToast } from "@/components/governance/ToastProvider";
import { ActionButton } from "@/components/ui/ActionButton";
import { api } from "@/lib/api";
import type { GovernedJourney } from "@/lib/types";

export default function QuestionnaireClient({ id }: { id: string }) {
  const router = useRouter();
  const { toast } = useToast();
  const pending = useRef<GovernedJourney | null>(null);
  const [journey, setJourney] = useState<GovernedJourney | null>(null);
  const [error, setError] = useState("");

  useEffect(() => {
    api.journey(id).then(setJourney).catch((reason) => setError(reason.message));
  }, [id]);

  if (error && !journey) return <p className="text-sc-danger">{error}</p>;
  if (!journey) return <p className="text-sc-muted">Loading questionnaire…</p>;

  const stage = journey.workflow.current_stage;
  const generated = stage === "review_returned_questionnaire" || stage === "approve_recommendation" || stage === "complete";

  async function runAction(action: "generate_questionnaire" | "review_returned_questionnaire") {
    try {
      const next = await api.journeyAction(id, {
        action,
        actor: "Authorized reviewer",
        role: "Authorized SimpliCreative reviewer",
        reason:
          action === "generate_questionnaire"
            ? "Generate synthetic informed questionnaire"
            : "Simulate synthetic returned questionnaire",
      });
      pending.current = next;
      toast(next.workflow.toast ?? "Questionnaire stage complete");
    } catch (reason) {
      setError(reason instanceof Error ? reason.message : "Action failed");
      throw reason;
    }
  }

  function commitPending() {
    if (pending.current) {
      setJourney(pending.current);
      pending.current = null;
    }
  }

  return (
    <main className="mx-auto max-w-4xl space-y-5 animate-sc-fade-up">
      <Link href={`/prospects/${id}`} className="text-sm text-sc-muted hover:text-sc-primary">
        {journey.company_name}
      </Link>
      <header className="sc-panel p-6">
        <p className="text-xs font-semibold uppercase tracking-widest text-sc-accent">Questionnaire stage</p>
        <h1 className="mt-2 text-3xl font-bold text-sc-ink">Turn uncertainty into useful questions</h1>
        <p className="mt-2 text-sm text-sc-muted">
          The draft is informed by the diagnostic and call record; it is not a fixed generic form.
        </p>
      </header>
      {error && <p className="text-sc-danger">{error}</p>}
      <section className="sc-panel p-6">
        <FileQuestion className="h-6 w-6 text-sc-accent" />
        <h2 className="mt-3 text-xl font-semibold text-sc-ink">
          {generated ? "Returned questionnaire" : "Personalised question plan"}
        </h2>
        <QuestionnaireReview artifact={journey.questionnaire} preview={!generated} />
        {stage === "generate_questionnaire" && (
          <ActionButton
            className="mt-5"
            idleLabel="Generate questionnaire"
            busyLabel="Building draft…"
            successLabel="Draft ready"
            idleIcon={<Play className="h-4 w-4" />}
            onAction={() => runAction("generate_questionnaire")}
            onCelebrated={commitPending}
          />
        )}
        {stage === "review_returned_questionnaire" && (
          <ActionButton
            className="mt-5"
            idleLabel="Simulate completed questionnaire"
            busyLabel="Recording return…"
            successLabel="Return recorded — continuing"
            idleIcon={<CheckCircle2 className="h-4 w-4" />}
            onAction={() => runAction("review_returned_questionnaire")}
            onCelebrated={() => {
              commitPending();
              router.push(`/prospects/${id}/recommendation`);
            }}
          />
        )}
        {(stage === "approve_recommendation" || stage === "complete") && (
          <ActionButton
            className="mt-5"
            idleLabel="Continue to recommendation"
            busyLabel="Opening…"
            successLabel="Continuing"
            idleIcon={<ArrowRight className="h-4 w-4" />}
            onAction={async () => undefined}
            onCelebrated={() => router.push(`/prospects/${id}/recommendation`)}
          />
        )}
      </section>
    </main>
  );
}
