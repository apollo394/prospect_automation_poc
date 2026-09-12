"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import DiagnosticBrief from "@/components/journey/DiagnosticBrief";
import { EvidenceTrail } from "@/components/governance/EvidenceTrail";
import { useToast } from "@/components/governance/ToastProvider";
import { ActionButton } from "@/components/ui/ActionButton";
import { api } from "@/lib/api";
import type { GovernedJourney } from "@/lib/types";

const APEX_DEMO_TRANSCRIPT = `04:12 Jordan Ellis: We're still figuring out how to talk about what we do without sounding like every other analytics vendor.

08:40 Sam Ortiz: Our primary goal this year is to increase qualified opportunities from the website, not just traffic.

12:05 Jordan Ellis: The homepage feels dated, and sales keeps sending people to PDFs because the site doesn't explain the offer well.

18:42 Jordan Ellis: Positioning is a significant concern. Prospects ask what makes us different and we don't have a clean answer.

22:18 Sam Ortiz: We need marketing to update pages without opening tickets every time. That dependency is killing campaign speed.

27:50 Jordan Ellis: Budget is still forming, but leadership wants to see a scoped phase-one before committing to a full rebuild.

31:10 Sam Ortiz: Ideal timeline would be discovery this quarter and something live before our spring launch window.

36:22 Jordan Ellis: I'm the economic buyer. Sam owns day-to-day marketing operations and will be the main collaborator.`;

export default function DiagnosticClient({ id }: { id: string }) {
  const router = useRouter();
  const { toast } = useToast();
  const reduceMotion = useReducedMotion();
  const [journey, setJourney] = useState<GovernedJourney | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [celebrate, setCelebrate] = useState(false);
  const [transcript, setTranscript] = useState(APEX_DEMO_TRANSCRIPT);

  useEffect(() => {
    api
      .journey(id)
      .then((next) => {
        setJourney(next);
        const saved = next.diagnostic.uploaded_transcript;
        if (typeof saved === "string") setTranscript(saved);
      })
      .catch((reason) => setError(reason instanceof Error ? reason.message : "Unable to load diagnostic"));
  }, [id]);

  if (error) return <p className="text-sm text-sc-danger">{error}</p>;
  if (!journey) return <p className="text-sc-muted">Loading diagnostic…</p>;

  const imported = journey.workflow.completed_stages.includes("import_transcript");

  return (
    <main className="mx-auto max-w-4xl space-y-5 animate-sc-fade-up">
      <Link className="inline-flex items-center gap-2 text-sm text-sc-muted hover:text-sc-primary" href={`/prospects/${id}`}>
        <ArrowLeft className="h-4 w-4" />
        {journey.company_name}
      </Link>

      <header className="sc-panel p-6">
        <p className="text-xs font-semibold uppercase tracking-[.14em] text-sc-accent">Diagnostic workspace</p>
        <h1 className="mt-2 text-3xl font-bold text-sc-ink">{journey.company_name}</h1>
        <p className="mt-2 text-sm text-sc-muted">
          Review hypotheses, then save the synthetic call record for the evidence-led questionnaire draft.
        </p>
      </header>

      <DiagnosticBrief diagnostic={journey.diagnostic} />

      <motion.section
        className="sc-panel relative overflow-hidden p-5"
        animate={
          celebrate && !reduceMotion
            ? { borderColor: "rgba(0, 157, 136, 0.55)", backgroundColor: "rgba(232, 245, 242, 0.85)" }
            : { borderColor: "var(--sc-line)", backgroundColor: "var(--sc-surface)" }
        }
        transition={{ duration: reduceMotion ? 0 : 0.35, ease: [0.23, 1, 0.32, 1] }}
      >
        <div className="relative flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[.14em] text-sc-accent">Synthetic call record</p>
            <h2 className="mt-1 text-lg font-semibold text-sc-ink">Paste or refine the Apex demonstration transcript</h2>
            <p className="mt-2 text-sm text-sc-muted">
              This is fictional POC data. Saving it advances only this demonstration journey.
            </p>
          </div>
          <span className="rounded-full bg-sc-canvas px-3 py-1 text-xs font-medium text-sc-muted">
            {transcript.trim().split(/\s+/).filter(Boolean).length} words
          </span>
        </div>

        <textarea
          aria-label="Synthetic diagnostic transcript"
          value={transcript}
          onChange={(event) => setTranscript(event.target.value)}
          disabled={imported || celebrate}
          className="relative mt-5 min-h-64 w-full rounded-sc-sm border border-sc-line bg-sc-canvas p-4 text-sm leading-6 text-sc-charcoal outline-none transition focus:border-sc-accent focus:ring-2 focus:ring-sc-accent/15 disabled:cursor-not-allowed disabled:opacity-60"
        />

        <div className="relative mt-4">
          <ActionButton
            idleLabel={imported ? "Continue to questionnaire" : "Save call record & continue"}
            busyLabel="Saving record…"
            successLabel="Record saved — continuing"
            idleIcon={<ArrowRight className="h-4 w-4" />}
            disabled={!imported && !transcript.trim()}
            onAction={async () => {
              setCelebrate(true);
              if (imported) return;
              try {
                const next = await api.journeyAction(id, {
                  action: "import_transcript",
                  actor: "Authorized reviewer",
                  role: "Authorized SimpliCreative reviewer",
                  reason: "Import synthetic diagnostic call record",
                  edits: { transcript_text: transcript },
                });
                setJourney(next);
                toast(next.workflow.toast || "Synthetic call record saved");
              } catch (reason) {
                setCelebrate(false);
                setError(reason instanceof Error ? reason.message : "Could not save transcript");
                throw reason;
              }
            }}
            onCelebrated={() => router.push(`/prospects/${id}/questionnaire`)}
          />
        </div>
      </motion.section>

      <EvidenceTrail evidence={journey.diagnostic.evidence} citations={journey.diagnostic.governance?.citations} />
    </main>
  );
}
