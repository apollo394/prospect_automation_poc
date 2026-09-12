"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { api, type GovernedJourney } from "@/lib/api";
import { EvidenceTrail } from "@/components/governance/EvidenceTrail";
import { HubSpotStatus } from "@/components/governance/HubSpotStatus";
import { useToast } from "@/components/governance/ToastProvider";
import { Button } from "@/components/ui/Button";
import LeadCaseFile from "@/components/journey/LeadCaseFile";
import { JourneyProgress } from "@/components/journey/JourneyProgress";
import { journeyDestination } from "@/lib/journey";

export default function Page() {
  const { id } = useParams<{ id: string }>(); const router = useRouter(); const { toast } = useToast();
  const [journey, setJourney] = useState<GovernedJourney | null>(null); const [error, setError] = useState<string | null>(null); const [busy, setBusy] = useState(false);
  useEffect(() => { api.journey(id).then((next) => { setJourney(next); if (next.workflow.current_stage !== "prepare_diagnostic") router.replace(journeyDestination(id, next.workflow.current_stage)); }).catch((reason) => setError(reason instanceof Error ? reason.message : "Unable to load lead")); }, [id, router]);
  async function prepareDiagnostic() { setBusy(true); try { const next = await api.journeyAction(id, { action: "prepare_diagnostic", actor: "Authorized reviewer", role: "Authorized SimpliCreative reviewer", reason: "Prepare evidence-led diagnostic" }); setJourney(next); toast(next.workflow.toast || "Diagnostic prepared"); router.push(`/prospects/${id}/diagnostic`); } catch (reason) { setError(reason instanceof Error ? reason.message : "Could not prepare diagnostic"); setBusy(false); } }
  if (error) return <p className="text-sm text-sc-danger">{error}. Start the journey service to continue.</p>;
  if (!journey) return <p className="text-sc-muted">Loading lead…</p>;
  const available = journey.workflow.current_stage === "prepare_diagnostic";
  return <main className="mx-auto max-w-4xl space-y-5 animate-sc-fade-up"><Link className="inline-flex items-center gap-2 text-sm text-sc-muted hover:text-sc-primary" href="/"><ArrowLeft className="h-4 w-4" />All prospects</Link><header className="sc-panel p-6"><div className="flex flex-wrap items-start justify-between gap-4"><div><p className="text-xs font-semibold uppercase tracking-[.14em] text-sc-accent">ScoreApp lead · synthetic</p><h1 className="mt-2 text-3xl font-bold text-sc-ink">{journey.company_name}</h1><p className="mt-2 text-sm text-sc-muted">{journey.synthetic_disclaimer}</p></div><HubSpotStatus status={journey.hubspot?.lifecycle_stage} /></div><div className="mt-6 rounded-sc-sm bg-sc-canvas p-4"><p className="text-sm font-semibold text-sc-ink">Next action</p><p className="mt-1 text-sm text-sc-muted">{available ? "Prepare the diagnostic from the ScoreApp and website evidence context." : `Resuming this saved journey at ${journey.workflow.current_stage}.`}</p><Button className="mt-4" disabled={!available || busy} onClick={prepareDiagnostic}>{busy ? "Preparing…" : "Prepare Diagnostic"}<ArrowRight className="h-4 w-4" /></Button></div></header><JourneyProgress workflow={journey.workflow} /><LeadCaseFile journey={journey} /><EvidenceTrail evidence={journey.scoreapp.evidence} citations={journey.scoreapp.governance?.citations} /></main>;
}
