"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import DiagnosticBrief from "@/components/journey/DiagnosticBrief";
import { EvidenceTrail } from "@/components/governance/EvidenceTrail";
import { useToast } from "@/components/governance/ToastProvider";
import { ActionButton } from "@/components/ui/ActionButton";
import { api } from "@/lib/api";
import { DEMO_FATHOM_ACCOUNT, fathomMeetingsForJourney, type FathomMeeting } from "@/lib/fathomMeetings";
import type { GovernedJourney } from "@/lib/types";

export default function DiagnosticClient({ id }: { id: string }) {
  const router = useRouter();
  const { toast } = useToast();
  const reduceMotion = useReducedMotion();
  const [journey, setJourney] = useState<GovernedJourney | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [celebrate, setCelebrate] = useState(false);
  const [transcript, setTranscript] = useState("");
  const [selectedMeetingId, setSelectedMeetingId] = useState("");
  const [useManualPaste, setUseManualPaste] = useState(false);

  const meetings = useMemo(
    () => (journey ? fathomMeetingsForJourney(journey.id, journey.company_name) : []),
    [journey],
  );

  useEffect(() => {
    api
      .journey(id)
      .then((next) => {
        setJourney(next);
        const saved = next.diagnostic.uploaded_transcript;
        const list = fathomMeetingsForJourney(next.id, next.company_name);
        const defaultMeeting = list[0];
        if (typeof saved === "string" && saved.trim()) {
          setTranscript(saved);
          const matched = list.find((meeting) => meeting.transcript.trim() === saved.trim());
          setSelectedMeetingId(matched?.id ?? "");
          setUseManualPaste(!matched);
        } else if (defaultMeeting) {
          setSelectedMeetingId(defaultMeeting.id);
          setTranscript(defaultMeeting.transcript);
        }
      })
      .catch((reason) => setError(reason instanceof Error ? reason.message : "Unable to load diagnostic"));
  }, [id]);

  function selectMeeting(meeting: FathomMeeting) {
    setSelectedMeetingId(meeting.id);
    setTranscript(meeting.transcript);
    setUseManualPaste(false);
  }

  if (error) return <p className="text-sm text-sc-danger">{error}</p>;
  if (!journey) return <p className="text-sc-muted">Loading diagnostic…</p>;

  const imported = journey.workflow.completed_stages.includes("import_transcript");
  const canContinue = Boolean(transcript.trim());

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
          Review hypotheses, then attach the Executive Marketing Diagnostic from your connected Fathom account. Manual paste
          remains available as fallback.
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
            <p className="text-xs font-semibold uppercase tracking-[.14em] text-sc-accent">Fathom call evidence</p>
            <h2 className="mt-1 text-lg font-semibold text-sc-ink">Select meeting from your account</h2>
            <p className="mt-2 text-sm text-sc-muted">{DEMO_FATHOM_ACCOUNT}</p>
          </div>
          <span className="rounded-full bg-sc-canvas px-3 py-1 text-xs font-medium text-sc-muted">
            {transcript.trim().split(/\s+/).filter(Boolean).length} words
          </span>
        </div>

        <div className="relative mt-5 space-y-2">
          {meetings.map((meeting) => {
            const active = selectedMeetingId === meeting.id && !useManualPaste;
            return (
              <button
                key={meeting.id}
                type="button"
                disabled={imported || celebrate}
                onClick={() => selectMeeting(meeting)}
                className={`w-full rounded-sc-sm border px-4 py-3 text-left transition disabled:cursor-not-allowed disabled:opacity-60 ${
                  active ? "border-sc-accent bg-sc-canvas ring-2 ring-sc-accent/15" : "border-sc-line hover:border-sc-accent/40"
                }`}
              >
                <p className="text-sm font-semibold text-sc-ink">{meeting.title}</p>
                <p className="mt-1 text-xs text-sc-muted">{meeting.recordedAt}</p>
              </button>
            );
          })}
        </div>

        <div className="relative mt-5 flex flex-wrap items-center justify-between gap-3">
          <p className="text-xs font-medium uppercase tracking-wide text-sc-muted">Manual transcript fallback</p>
          <button
            type="button"
            disabled={imported || celebrate}
            onClick={() => setUseManualPaste((value) => !value)}
            className="text-xs font-semibold text-sc-primary hover:underline disabled:opacity-60"
          >
            {useManualPaste ? "Hide paste area" : "Paste transcript instead"}
          </button>
        </div>

        {useManualPaste ? (
          <textarea
            aria-label="Manual diagnostic transcript fallback"
            value={transcript}
            onChange={(event) => setTranscript(event.target.value)}
            disabled={imported || celebrate}
            className="relative mt-3 min-h-48 w-full rounded-sc-sm border border-sc-line bg-sc-canvas p-4 text-sm leading-6 text-sc-charcoal outline-none transition focus:border-sc-accent focus:ring-2 focus:ring-sc-accent/15 disabled:cursor-not-allowed disabled:opacity-60"
          />
        ) : (
          <p className="relative mt-3 rounded-sc-sm bg-sc-canvas p-3 text-xs leading-relaxed text-sc-muted">
            Transcript preview is loaded from the selected Fathom meeting. Use manual paste only when integration is unavailable.
          </p>
        )}

        <div className="relative mt-4">
          <ActionButton
            idleLabel={imported ? "Continue to questionnaire" : "Save Fathom record & continue"}
            busyLabel="Saving record…"
            successLabel="Record saved — continuing"
            idleIcon={<ArrowRight className="h-4 w-4" />}
            disabled={!imported && !canContinue}
            onAction={async () => {
              setCelebrate(true);
              if (imported) return;
              try {
                const next = await api.journeyAction(id, {
                  action: "import_transcript",
                  actor: "Authorized reviewer",
                  role: "Authorized SimpliCreative reviewer",
                  reason: selectedMeetingId
                    ? `Import Fathom meeting ${selectedMeetingId}`
                    : "Import manual diagnostic transcript fallback",
                  edits: { transcript_text: transcript, fathom_meeting_id: selectedMeetingId || undefined },
                });
                setJourney(next);
                toast(next.workflow.toast || "Diagnostic call record saved");
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
