"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import RecommendationDecision from "@/components/journey/RecommendationDecision";
import { ApprovalPanel } from "@/components/governance/ApprovalPanel";
import { EvidenceTrail } from "@/components/governance/EvidenceTrail";
import { useToast } from "@/components/governance/ToastProvider";
import { ActionButton } from "@/components/ui/ActionButton";
import { api } from "@/lib/api";
import type { GovernedJourney } from "@/lib/types";

export default function RecommendationClient({ id }: { id: string }) {
  const router = useRouter();
  const { toast } = useToast();
  const [journey, setJourney] = useState<GovernedJourney | null>(null);
  const [error, setError] = useState("");

  useEffect(() => {
    api.journey(id).then(setJourney).catch((reason) => setError(reason.message));
  }, [id]);

  if (error) return <p className="text-sc-danger">{error}</p>;
  if (!journey) return <p className="text-sc-muted">Loading recommendation…</p>;

  const approved = journey.workflow.completed_stages.includes("approve_recommendation");

  return (
    <main className="mx-auto max-w-4xl space-y-5 animate-sc-fade-up">
      <Link href={`/prospects/${id}/questionnaire`} className="text-sm text-sc-muted hover:text-sc-primary">
        Back to questionnaire
      </Link>
      <header className="sc-panel p-6">
        <p className="text-xs font-semibold uppercase tracking-widest text-sc-accent">Recommendation stage</p>
        <h1 className="mt-2 text-3xl font-bold text-sc-ink">A decision a strategist can govern</h1>
        <p className="mt-2 text-sm text-sc-muted">
          The system proposes one route from the evidence; an authorised reviewer alone releases commercial work.
        </p>
      </header>
      {error && <p className="text-sc-danger">{error}</p>}
      <RecommendationDecision recommendation={journey.recommendation} />
      <EvidenceTrail evidence={journey.recommendation.evidence} citations={journey.recommendation.governance?.citations} />
      <ApprovalPanel
        decision={journey.recommendation}
        workflow={{ next_action: "Approve recommendation" }}
        onApprove={
          journey.workflow.current_stage === "approve_recommendation"
            ? async () => {
                try {
                  const next = await api.journeyAction(id, {
                    action: "approve_recommendation",
                    actor: "Authorized reviewer",
                    role: "Authorized SimpliCreative reviewer",
                    reason: "Human approval of synthetic recommendation",
                  });
                  setJourney(next);
                  toast(next.workflow.toast ?? "Recommendation approved by human reviewer");
                } catch (reason) {
                  setError(reason instanceof Error ? reason.message : "Approval failed");
                  throw reason;
                }
              }
            : undefined
        }
      />
      {approved && (
        <ActionButton
          idleLabel="Continue to scope"
          busyLabel="Opening…"
          successLabel="Continuing"
          idleIcon={<ArrowRight className="h-4 w-4" />}
          onAction={async () => undefined}
          onCelebrated={() => router.push(`/prospects/${id}/scope`)}
        />
      )}
    </main>
  );
}
