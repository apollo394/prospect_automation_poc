"use client";

import Link from "next/link";
import { ArrowRight, Check, LockKeyhole } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import FoundationPricingRationale from "@/components/journey/FoundationPricingRationale";
import { EvidenceTrail } from "@/components/governance/EvidenceTrail";
import { ActionButton } from "@/components/ui/ActionButton";
import { api } from "@/lib/api";
import type { GovernedJourney } from "@/lib/types";

export default function PricingClient({ id }: { id: string }) {
  const router = useRouter();
  const pending = useRef<GovernedJourney | null>(null);
  const [journey, setJourney] = useState<GovernedJourney>();
  const [error, setError] = useState("");

  useEffect(() => {
    api.journey(id).then(setJourney).catch((reason) => setError(reason.message));
  }, [id]);

  if (error) return <p className="text-sc-danger">{error}</p>;
  if (!journey) return <p className="text-sc-muted">Loading pricing…</p>;

  const revealed =
    journey.workflow.revealed_stages.includes("pricing") || journey.workflow.current_stage === "approve_pricing";
  const canReveal = journey.workflow.current_stage === "reveal_pricing";
  const canApprove = journey.workflow.current_stage === "approve_pricing";
  const pricingApproved = journey.workflow.completed_stages.includes("approve_pricing");

  async function act(action: "reveal_pricing" | "approve_pricing", defer = false) {
    try {
      const next = await api.journeyAction(id, {
        action,
        actor: "Authorized reviewer",
        role: "Authorized SimpliCreative reviewer",
        reason: "Governed pricing review",
      });
      if (defer) pending.current = next;
      else setJourney(next);
    } catch (reason) {
      setError(reason instanceof Error ? reason.message : "Pricing action failed");
      throw reason;
    }
  }

  return (
    <main className="mx-auto max-w-5xl space-y-5 animate-sc-fade-up">
      <Link href={`/prospects/${id}/scope`} className="text-sm text-sc-muted hover:text-sc-primary">
        Back to scope
      </Link>
      <header className="sc-panel p-6">
        <p className="text-xs font-semibold uppercase tracking-widest text-sc-accent">Pricing review · synthetic</p>
        <h1 className="mt-2 text-3xl font-bold text-sc-ink">Investment follows approved scope</h1>
        <p className="mt-2 text-sm text-sc-muted">
          Price is a reviewer-only commercial decision. It is not a direct output of an assessment score.
        </p>
      </header>
      {!revealed ? (
        <section className="sc-panel p-6">
          <LockKeyhole className="h-6 w-6 text-sc-accent" />
          <h2 className="mt-3 text-xl font-semibold text-sc-ink">Pricing is controlled</h2>
          <p className="mt-2 text-sm text-sc-muted">
            {canReveal
              ? "Reveal the illustrative commercial view for human review."
              : "Pricing remains unavailable until the scope approval gate is complete."}
          </p>
          <ActionButton
            className="mt-4"
            idleLabel="Reveal pricing"
            busyLabel="Revealing…"
            successLabel="Pricing revealed"
            idleIcon={<ArrowRight className="h-4 w-4" />}
            disabled={!canReveal}
            onAction={() => act("reveal_pricing", true)}
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
          <section className="sc-panel p-6">
            <p className="text-xs font-semibold uppercase tracking-widest text-sc-accent">Reviewer commercial view</p>
            <h2 className="mt-2 text-xl font-semibold text-sc-ink">{journey.recommendation.product as string}</h2>
            <p className="mt-3 text-sm leading-6 text-sc-charcoal">
              {String(journey.pricing.route_rationale ?? journey.pricing.summary)}
            </p>
            {journey.pricing.total != null && (
              <p className="mt-5 text-3xl font-bold tracking-tight text-sc-primary">
                {journey.pricing.currency ?? "USD"} {Number(journey.pricing.total).toLocaleString()}
              </p>
            )}
          </section>
          {journey.recommendation.product === "SimpliFoundation" && (
            <FoundationPricingRationale pricing={journey.pricing} />
          )}
          <EvidenceTrail evidence={journey.pricing.evidence} citations={journey.pricing.governance?.citations} />
          <div className="flex flex-wrap gap-2">
            <ActionButton
              idleLabel="Approve pricing"
              busyLabel="Approving…"
              successLabel="Pricing approved"
              idleIcon={<Check className="h-4 w-4" />}
              done={pricingApproved}
              disabled={!canApprove && !pricingApproved}
              onAction={() => act("approve_pricing")}
            />
            {pricingApproved && (
              <ActionButton
                idleLabel="Continue to proposal"
                busyLabel="Opening…"
                successLabel="Continuing"
                idleIcon={<ArrowRight className="h-4 w-4" />}
                onAction={async () => undefined}
                onCelebrated={() => router.push(`/prospects/${id}/proposal`)}
              />
            )}
          </div>
        </>
      )}
    </main>
  );
}
