"use client";

import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import ScopeReview from "@/components/journey/ScopeReview";
import { EvidenceTrail } from "@/components/governance/EvidenceTrail";
import { ActionButton } from "@/components/ui/ActionButton";
import { api } from "@/lib/api";
import type { GovernedJourney } from "@/lib/types";

export default function ScopeClient({ id }: { id: string }) {
  const router = useRouter();
  const [journey, setJourney] = useState<GovernedJourney>();
  const [error, setError] = useState("");

  useEffect(() => {
    api.journey(id).then(setJourney).catch((reason) => setError(reason.message));
  }, [id]);

  if (error) return <p className="text-sc-danger">{error}</p>;
  if (!journey) return <p className="text-sc-muted">Loading scope…</p>;

  const canApprove = journey.workflow.current_stage === "approve_scope";
  const approved = journey.workflow.completed_stages.includes("approve_scope");

  return (
    <main className="mx-auto max-w-5xl space-y-5 animate-sc-fade-up">
      <Link href={`/prospects/${id}`} className="text-sm text-sc-muted hover:text-sc-primary">
        {journey.company_name}
      </Link>
      <header className="sc-panel p-6">
        <p className="text-xs font-semibold uppercase tracking-widest text-sc-accent">Scope review · synthetic</p>
        <h1 className="mt-2 text-3xl font-bold text-sc-ink">Define the work before the investment</h1>
        <p className="mt-2 text-sm text-sc-muted">
          Scope separates agreed delivery from assumptions, exclusions, dependencies and client responsibilities.
        </p>
      </header>
      <ScopeReview scope={journey.scope} />
      <EvidenceTrail evidence={journey.scope.evidence} citations={journey.scope.governance?.citations} />
      <section className="sc-panel p-5">
        <p className="text-sm text-sc-muted">
          {canApprove
            ? "Scope is ready for authorised human approval."
            : approved
              ? "Scope approved. Investment may now be revealed to the reviewer."
              : `Scope is controlled at ${journey.workflow.current_stage}.`}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          <ActionButton
            idleLabel="Approve scope"
            busyLabel="Approving…"
            successLabel="Scope approved"
            idleIcon={<Check className="h-4 w-4" />}
            done={approved}
            disabled={!canApprove && !approved}
            onAction={async () => {
              try {
                setJourney(
                  await api.journeyAction(id, {
                    action: "approve_scope",
                    actor: "Authorized reviewer",
                    role: "Authorized SimpliCreative reviewer",
                    reason: "Human approval of governed scope",
                  }),
                );
              } catch (reason) {
                setError(reason instanceof Error ? reason.message : "Approval failed");
                throw reason;
              }
            }}
          />
          {approved && (
            <ActionButton
              idleLabel="Continue to pricing"
              busyLabel="Opening…"
              successLabel="Continuing"
              idleIcon={<ArrowRight className="h-4 w-4" />}
              onAction={async () => undefined}
              onCelebrated={() => router.push(`/prospects/${id}/pricing`)}
            />
          )}
        </div>
      </section>
    </main>
  );
}
