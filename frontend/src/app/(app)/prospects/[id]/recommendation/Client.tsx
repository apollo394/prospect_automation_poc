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

type RouteChoice = "ai" | "SimpliBlueprint";

export default function RecommendationClient({ id }: { id: string }) {
  const router = useRouter();
  const { toast } = useToast();
  const [journey, setJourney] = useState<GovernedJourney | null>(null);
  const [error, setError] = useState("");
  const [choice, setChoice] = useState<RouteChoice>("ai");
  const [applying, setApplying] = useState(false);

  useEffect(() => {
    api
      .journey(id)
      .then((data) => {
        setJourney(data);
        setChoice(data.route_override === "SimpliBlueprint" ? "SimpliBlueprint" : "ai");
      })
      .catch((reason) => setError(reason.message));
  }, [id]);

  if (error && !journey) return <p className="text-sc-danger">{error}</p>;
  if (!journey) return <p className="text-sc-muted">Loading recommendation…</p>;

  const approved = journey.workflow.completed_stages.includes("approve_recommendation");
  const canOverride = journey.workflow.current_stage === "approve_recommendation";
  const aiProduct = String(journey.ai_product ?? journey.recommendation.product ?? "AI recommendation");
  const alreadyBlueprint = aiProduct === "SimpliBlueprint";
  const pending =
    (choice === "SimpliBlueprint" && journey.route_override !== "SimpliBlueprint") ||
    (choice === "ai" && Boolean(journey.route_override));

  async function applyOverride() {
    if (!canOverride) return;
    setApplying(true);
    setError("");
    try {
      const next = await api.journeyAction(id, {
        action: "override_route",
        actor: "Authorized reviewer",
        role: "Authorized SimpliCreative reviewer",
        reason:
          choice === "SimpliBlueprint"
            ? "Strategist overrode AI route to SimpliBlueprint"
            : "Strategist restored AI recommendation",
        edits: { route_override: choice === "SimpliBlueprint" ? "SimpliBlueprint" : null },
      });
      setJourney(next);
      toast(next.workflow.toast ?? "Route updated");
    } catch (reason) {
      setError(reason instanceof Error ? reason.message : "Route override failed");
    } finally {
      setApplying(false);
    }
  }

  return (
    <main className="mx-auto max-w-4xl space-y-5 animate-sc-fade-up">
      <Link href={`/prospects/${id}/questionnaire`} className="text-sm text-sc-muted hover:text-sc-primary">
        Back to questionnaire
      </Link>
      <header className="sc-panel p-6">
        <p className="text-xs font-semibold uppercase tracking-widest text-sc-accent">Recommendation stage</p>
        <h1 className="mt-2 text-3xl font-bold text-sc-ink">A decision a strategist can govern</h1>
        <p className="mt-2 text-sm text-sc-muted">
          After the Diagnostic, the system proposes optional SimpliBlueprint or a direct package. An authorised reviewer alone
          releases commercial work — and may override the AI route to SimpliBlueprint when strategy is still unclear.
        </p>
        {typeof journey.route_decision_summary === "string" && (
          <p className="mt-3 rounded-sc-sm bg-sc-canvas p-3 text-sm text-sc-charcoal">{journey.route_decision_summary}</p>
        )}
      </header>
      {error && <p className="text-sc-danger">{error}</p>}

      {journey.route_override === "SimpliBlueprint" && (
        <p className="rounded-sc-sm border border-violet-200 bg-violet-50/80 px-4 py-3 text-sm text-sc-charcoal">
          Human override active: commercial artifacts now reflect <strong>SimpliBlueprint</strong>.
        </p>
      )}

      <RecommendationDecision recommendation={journey.recommendation} />

      {canOverride && !alreadyBlueprint && (
        <section className="sc-panel space-y-4 p-6" aria-labelledby="route-override-heading">
          <p className="text-xs font-semibold uppercase tracking-widest text-sc-accent">Manual route override</p>
          <h2 id="route-override-heading" className="text-lg font-semibold text-sc-ink">
            Not the right route? Override to SimpliBlueprint
          </h2>
          <p className="text-sm text-sc-muted">
            Review the recommendation above first. Applying an override rematerializes recommendation, scope, pricing, and
            proposal before you approve.
          </p>
          <div className="space-y-2" role="radiogroup" aria-label="Engagement route choice">
            <label className="flex cursor-pointer items-start gap-3 rounded-sc-sm border border-sc-line bg-sc-canvas p-3">
              <input
                type="radio"
                name="route-choice"
                className="mt-1"
                checked={choice === "ai"}
                onChange={() => setChoice("ai")}
              />
              <span>
                <span className="block text-sm font-semibold text-sc-ink">Keep AI recommendation</span>
                <span className="text-sm text-sc-muted">{aiProduct} (current system proposal)</span>
              </span>
            </label>
            <label className="flex cursor-pointer items-start gap-3 rounded-sc-sm border border-violet-200 bg-violet-50/70 p-3">
              <input
                type="radio"
                name="route-choice"
                className="mt-1"
                checked={choice === "SimpliBlueprint"}
                onChange={() => setChoice("SimpliBlueprint")}
              />
              <span>
                <span className="block text-sm font-semibold text-sc-ink">Override → SimpliBlueprint</span>
                <span className="text-sm text-sc-muted">
                  Strategy-before-build package; scope, pricing, and proposal switch to Blueprint.
                </span>
              </span>
            </label>
          </div>
          <ActionButton
            idleLabel={pending ? "Apply route change" : "Route choice applied"}
            busyLabel="Applying…"
            successLabel="Applied"
            disabled={!pending || applying}
            onAction={async () => {
              await applyOverride();
            }}
          />
        </section>
      )}

      <EvidenceTrail evidence={journey.recommendation.evidence} citations={journey.recommendation.governance?.citations} />
      <ApprovalPanel
        decision={journey.recommendation}
        workflow={{ next_action: "Approve recommendation" }}
        onApprove={
          canOverride
            ? async () => {
                try {
                  const next = await api.journeyAction(id, {
                    action: "approve_recommendation",
                    actor: "Authorized reviewer",
                    role: "Authorized SimpliCreative reviewer",
                    reason: journey.route_override
                      ? `Human approval after route_override=${journey.route_override}`
                      : "Human approval of synthetic recommendation",
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
