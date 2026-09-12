"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle2, FileQuestion, Play } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import QuestionnaireReview from "@/components/journey/QuestionnaireReview";
import { JourneyProgress } from "@/components/journey/JourneyProgress";
import { useToast } from "@/components/governance/ToastProvider";
import { Button } from "@/components/ui/Button";
import { api } from "@/lib/api";
import type { GovernedJourney } from "@/lib/types";

export default function QuestionnairePage() {
  const { id } = useParams<{ id: string }>();
  const router = useRouter();
  const { toast } = useToast();
  const [journey, setJourney] = useState<GovernedJourney | null>(null);
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);

  useEffect(() => { api.journey(id).then(setJourney).catch((reason) => setError(reason.message)); }, [id]);

  async function runAction(action: "generate_questionnaire" | "review_returned_questionnaire") {
    setBusy(true); setError("");
    try {
      const next = await api.journeyAction(id, { action, actor: "Authorized reviewer", role: "Authorized SimpliCreative reviewer", reason: action === "generate_questionnaire" ? "Generate synthetic informed questionnaire" : "Simulate synthetic returned questionnaire" });
      setJourney(next); toast(next.workflow.toast ?? "Questionnaire stage complete");
    } catch (reason) { setError(reason instanceof Error ? reason.message : "Action failed"); }
    finally { setBusy(false); }
  }

  if (error && !journey) return <p className="text-sc-danger">{error}</p>;
  if (!journey) return <p className="text-sc-muted">Loading questionnaire…</p>;
  const stage = journey.workflow.current_stage;
  const generated = stage === "review_returned_questionnaire" || stage === "approve_recommendation" || stage === "complete";

  return <main className="mx-auto max-w-4xl space-y-5 animate-sc-fade-up">
    <Link href={`/prospects/${id}`} className="text-sm text-sc-muted hover:text-sc-primary">{journey.company_name}</Link>
    <header className="sc-panel p-6"><p className="text-xs font-semibold uppercase tracking-widest text-sc-accent">Questionnaire stage</p><h1 className="mt-2 text-3xl font-bold text-sc-ink">Turn uncertainty into useful questions</h1><p className="mt-2 text-sm text-sc-muted">The draft is informed by the diagnostic and call record; it is not a fixed generic form.</p></header>
    <JourneyProgress workflow={journey.workflow} />
    {error && <p className="text-sc-danger">{error}</p>}
    <section className="sc-panel p-6">
      <FileQuestion className="h-6 w-6 text-sc-accent" />
      <h2 className="mt-3 text-xl font-semibold text-sc-ink">{generated ? "Returned questionnaire" : "Personalised question plan"}</h2>
      <QuestionnaireReview artifact={journey.questionnaire} preview={!generated} />
      {stage === "generate_questionnaire" && <Button className="mt-5" onClick={() => runAction("generate_questionnaire")} disabled={busy}><Play className="h-4 w-4" />{busy ? "Building draft…" : "Generate questionnaire"}</Button>}
      {stage === "review_returned_questionnaire" && <Button className="mt-5" onClick={() => runAction("review_returned_questionnaire")} disabled={busy}><CheckCircle2 className="h-4 w-4" />{busy ? "Recording return…" : "Simulate completed questionnaire"}</Button>}
      {(stage === "approve_recommendation" || stage === "complete") && <Button className="mt-5" onClick={() => router.push(`/prospects/${id}/recommendation`)}><CheckCircle2 className="h-4 w-4" />Continue to recommendation<ArrowRight className="h-4 w-4" /></Button>}
    </section>
  </main>;
}
