"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import RecommendationDecision from "@/components/journey/RecommendationDecision";
import { JourneyProgress } from "@/components/journey/JourneyProgress";
import { ApprovalPanel } from "@/components/governance/ApprovalPanel";
import { EvidenceTrail } from "@/components/governance/EvidenceTrail";
import { useToast } from "@/components/governance/ToastProvider";
import { Button } from "@/components/ui/Button";
import { api } from "@/lib/api";
import type { GovernedJourney } from "@/lib/types";

export default function RecommendationPage() {
  const { id } = useParams<{ id: string }>(); const router = useRouter(); const { toast } = useToast();
  const [journey, setJourney] = useState<GovernedJourney | null>(null); const [error, setError] = useState("");
  useEffect(() => { api.journey(id).then(setJourney).catch((reason) => setError(reason.message)); }, [id]);
  if (error) return <p className="text-sc-danger">{error}</p>;
  if (!journey) return <p className="text-sc-muted">Loading recommendation…</p>;
  const approved = journey.workflow.completed_stages.includes("approve_recommendation");
  async function approve() { try { const next = await api.journeyAction(id, { action: "approve_recommendation", actor: "Authorized reviewer", role: "Authorized SimpliCreative reviewer", reason: "Human approval of synthetic recommendation" }); setJourney(next); toast(next.workflow.toast ?? "Recommendation approved by human reviewer"); } catch (reason) { setError(reason instanceof Error ? reason.message : "Approval failed"); } }
  return <main className="mx-auto max-w-4xl space-y-5 animate-sc-fade-up">
    <Link href={`/prospects/${id}/questionnaire`} className="text-sm text-sc-muted hover:text-sc-primary">Back to questionnaire</Link>
    <header className="sc-panel p-6"><p className="text-xs font-semibold uppercase tracking-widest text-sc-accent">Recommendation stage</p><h1 className="mt-2 text-3xl font-bold text-sc-ink">A decision a strategist can govern</h1><p className="mt-2 text-sm text-sc-muted">The system proposes one route from the evidence; an authorised reviewer alone releases commercial work.</p></header>
    <JourneyProgress workflow={journey.workflow} />
    {error && <p className="text-sc-danger">{error}</p>}
    <RecommendationDecision recommendation={journey.recommendation} />
    <EvidenceTrail evidence={journey.recommendation.evidence} citations={journey.recommendation.governance?.citations} />
    <ApprovalPanel decision={journey.recommendation} workflow={{ next_action: "Approve recommendation" }} onApprove={journey.workflow.current_stage === "approve_recommendation" ? approve : undefined} />
    {approved && <Button variant="secondary" onClick={() => router.push(`/prospects/${id}/scope`)}><ArrowRight className="h-4 w-4" />Continue to scope</Button>}
  </main>;
}
