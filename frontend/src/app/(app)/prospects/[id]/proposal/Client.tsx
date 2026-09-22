"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ArrowRight, Check, LockKeyhole } from "lucide-react";
import { api } from "@/lib/api";
import type { GovernedJourney } from "@/lib/types";
import { ActionButton } from "@/components/ui/ActionButton";
import { EvidenceTrail } from "@/components/governance/EvidenceTrail";
import { HubSpotStatus } from "@/components/governance/HubSpotStatus";
import ProposalPreview from "@/components/journey/ProposalPreview";

export default function ProposalClient({ id }: { id: string }) {
  const pending = useRef<GovernedJourney | null>(null);
  const [journey, setJourney] = useState<GovernedJourney>();
  const [error, setError] = useState("");

  useEffect(() => {
    api.journey(id).then(setJourney).catch((reason) => setError(reason.message));
  }, [id]);

  if (error) return <p className="text-sc-danger">{error}</p>;
  if (!journey) return <p className="text-sc-muted">Loading proposal...</p>;

  const revealed =
    journey.workflow.revealed_stages.includes("proposal") || journey.workflow.current_stage === "approve_proposal";
  const canReveal = journey.workflow.current_stage === "reveal_proposal";
  const canApprove = journey.workflow.current_stage === "approve_proposal";
  const proposalApproved = journey.workflow.completed_stages.includes("approve_proposal");

  async function act(action: "reveal_proposal" | "approve_proposal", defer = false) {
    try {
      const next = await api.journeyAction(id, {
        action,
        actor: "Authorized reviewer",
        role: "Authorized SimpliCreative reviewer",
        reason: "Governed client-safe proposal review",
      });
      if (defer) pending.current = next;
      else setJourney(next);
    } catch (reason) {
      setError(reason instanceof Error ? reason.message : "Proposal action failed");
      throw reason;
    }
  }

  return (
    <main className="mx-auto max-w-5xl space-y-5">
      <div className="flex justify-between">
        <Link href={`/prospects/${id}/pricing`} className="text-sm text-sc-muted">
          Back to pricing
        </Link>
        {proposalApproved && <HubSpotStatus status={journey.hubspot.lifecycle_stage} />}
      </div>
      <header className="sc-panel p-6">
        <p className="text-xs font-semibold uppercase tracking-widest text-sc-accent">Proposal review · synthetic</p>
        <h1 className="mt-2 text-3xl font-bold">A client-safe next step</h1>
        <p className="mt-2 text-sm text-sc-muted">{journey.synthetic_disclaimer}</p>
      </header>
      {!revealed ? (
        <section className="sc-panel p-6">
          <LockKeyhole />
          <h2 className="mt-3 text-xl font-semibold">Proposal is controlled</h2>
          <p className="mt-2 text-sm text-sc-muted">
            {canReveal
              ? "Reveal the client-safe proposal for review."
              : "Proposal is unavailable until pricing approval."}
          </p>
          <ActionButton
            className="mt-4"
            idleLabel="Reveal proposal"
            busyLabel="Revealing…"
            successLabel="Proposal revealed"
            idleIcon={<ArrowRight className="h-4 w-4" />}
            disabled={!canReveal}
            onAction={() => act("reveal_proposal", true)}
            onCelebrated={() => {
              if (pending.current) {
                setJourney(pending.current);
                pending.current = null;
              }
            }}
          />
        </section>
      ) : (
        <>
          <ProposalPreview proposal={journey.proposal} />
          <EvidenceTrail evidence={journey.proposal.evidence} citations={journey.proposal.governance?.citations} />
          <ActionButton
            idleLabel="Approve proposal"
            busyLabel="Approving…"
            successLabel="Proposal approved"
            idleIcon={<Check className="h-4 w-4" />}
            done={proposalApproved}
            disabled={!canApprove && !proposalApproved}
            onAction={() => act("approve_proposal")}
          />
          {proposalApproved && (
            <div className="space-y-3">
              <p className="text-sm text-sc-primary">Approved. Simulated HubSpot lifecycle update recorded.</p>
              {journey.id === "cedar-strategy" && journey.recommendation.product === "SimpliBlueprint" && (
                <Link
                  href="/blueprints/cedar-blueprint"
                  className="inline-flex items-center gap-2 rounded-sc-sm border border-violet-200 bg-violet-50 px-4 py-3 text-sm font-semibold text-violet-900 transition hover:border-violet-300"
                >
                  Activate Blueprint delivery <ArrowRight className="h-4 w-4" />
                </Link>
              )}
            </div>
          )}
        </>
      )}
    </main>
  );
}
