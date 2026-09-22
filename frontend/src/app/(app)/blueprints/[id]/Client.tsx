"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowRight, LockKeyhole } from "lucide-react";
import { ApprovalPanel } from "@/components/governance/ApprovalPanel";
import { EvidenceTrail } from "@/components/governance/EvidenceTrail";
import { useToast } from "@/components/governance/ToastProvider";
import { ActionButton } from "@/components/ui/ActionButton";
import { StatusPill } from "@/components/ui/StatusPill";
import { api } from "@/lib/api";
import {
  BLUEPRINT_STAGE_META,
  BLUEPRINT_STAGES,
  blueprintStepIndex,
  isApprovalStage,
} from "@/lib/blueprint";
import type { BlueprintAction, BlueprintEngagement, GovernedArtifact } from "@/lib/types";

function asArtifact(value: unknown): GovernedArtifact {
  return value as GovernedArtifact;
}

function StageBody({ engagement, stage }: { engagement: BlueprintEngagement; stage: BlueprintAction }) {
  const meta = BLUEPRINT_STAGE_META[stage];
  const artifact = asArtifact(engagement[meta.artifact]);

  if (stage === "activate_blueprint") {
    const record = (engagement.activation.record ?? {}) as Record<string, unknown>;
    const context = (engagement.activation.cumulative_context ?? {}) as Record<string, unknown>;
    return (
      <section className="sc-panel space-y-4 p-6">
        <p className="text-xs font-semibold uppercase tracking-widest text-sc-accent">Active Blueprint Record</p>
        <h2 className="text-2xl font-bold text-sc-ink">{artifact.title}</h2>
        <p className="text-sm text-sc-muted">{artifact.summary}</p>
        <dl className="grid gap-3 text-sm sm:grid-cols-2">
          {Object.entries(record).map(([key, value]) => (
            <div key={key} className="rounded-sc-sm bg-sc-canvas p-3">
              <dt className="text-xs uppercase tracking-wide text-sc-muted">{key.replaceAll("_", " ")}</dt>
              <dd className="mt-1 text-sc-charcoal">
                {Array.isArray(value) ? value.join(" · ") : String(value)}
              </dd>
            </div>
          ))}
        </dl>
        <h3 className="text-sm font-semibold">Cumulative context</h3>
        <ul className="space-y-2 text-sm text-sc-muted">
          {Object.entries(context).map(([key, value]) => (
            <li key={key}>
              <span className="font-medium text-sc-ink">{key.replaceAll("_", " ")}:</span>{" "}
              {Array.isArray(value) ? value.join("; ") : String(value)}
            </li>
          ))}
        </ul>
      </section>
    );
  }

  if (stage === "generate_blueprint_questionnaire" || stage === "validate_questionnaire") {
    const questions = engagement.questionnaire.questions ?? [];
    return (
      <section className="sc-panel space-y-4 p-6">
        <p className="text-xs font-semibold uppercase tracking-widest text-sc-accent">
          {engagement.questionnaire.gold_standard_ref}
        </p>
        <h2 className="text-2xl font-bold text-sc-ink">{engagement.questionnaire.title}</h2>
        <p className="text-sm text-sc-muted">{engagement.questionnaire.summary}</p>
        <ul className="space-y-3">
          {questions.map((q) => {
            const status = String(q.status ?? "");
            const suppressed = status === "SUPPRESS";
            return (
              <li
                key={String(q.question_id)}
                className={`rounded-sc-sm border p-4 ${suppressed ? "border-sc-line bg-sc-canvas opacity-70" : "border-sc-line bg-white"}`}
              >
                <div className="flex flex-wrap items-center gap-2">
                  <StatusPill tone={suppressed ? "muted" : status === "REQUIRED" ? "amber" : "teal"}>
                    {status}
                  </StatusPill>
                  <span className="text-xs text-sc-muted">{String(q.framework ?? "")}</span>
                </div>
                <p className="mt-2 text-sm font-semibold text-sc-ink">{String(q.prompt ?? "")}</p>
                {q.prefilled_answer != null && (
                  <p className="mt-2 text-sm text-sc-muted">Prefill: {String(q.prefilled_answer)}</p>
                )}
                {q.client_answer != null && !suppressed && (
                  <p className="mt-1 text-sm text-sc-charcoal">Client answer: {String(q.client_answer)}</p>
                )}
                {suppressed && (
                  <p className="mt-2 text-xs text-sc-muted">{String(q.suppressed_because ?? "Suppressed — already validated.")}</p>
                )}
              </li>
            );
          })}
        </ul>
      </section>
    );
  }

  if (stage === "complete_research") {
    const research = engagement.research;
    return (
      <section className="sc-panel space-y-5 p-6">
        <p className="text-xs font-semibold uppercase tracking-widest text-sc-accent">{String(research.gold_standard_ref ?? "")}</p>
        <h2 className="text-2xl font-bold">{String(research.title)}</h2>
        <p className="text-sm text-sc-muted">{String(research.summary)}</p>
        <div>
          <h3 className="text-sm font-semibold">Research questions</h3>
          <ul className="mt-2 space-y-2 text-sm text-sc-muted">
            {((research.research_questions as Array<Record<string, string>>) ?? []).map((row, i) => (
              <li key={i}>
                <span className="font-medium text-sc-ink">{row.question}</span> — {row.result}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold">Data quality</h3>
          <div className="mt-2 grid gap-2 sm:grid-cols-2">
            {((research.data_quality as Array<Record<string, string>>) ?? []).map((row, i) => (
              <div key={i} className="rounded-sc-sm bg-sc-canvas p-3 text-sm">
                <p className="font-medium text-sc-ink">{row.area}</p>
                <p className="text-xs text-sc-accent">{row.quality}</p>
                <p className="mt-1 text-sc-muted">{row.limitation}</p>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-sm font-semibold">Findings</h3>
          <ul className="mt-2 space-y-2 text-sm">
            {((research.findings as Array<Record<string, string>>) ?? []).map((row, i) => (
              <li key={i} className="rounded-sc-sm border border-sc-line p-3">
                <p className="font-medium text-sc-ink">{row.finding}</p>
                <p className="text-xs text-sc-muted">{row.validation_status}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    );
  }

  if (stage === "approve_intelligence") {
    const intel = engagement.intelligence;
    return (
      <section className="sc-panel space-y-5 p-6">
        <h2 className="text-2xl font-bold">{String(intel.title)}</h2>
        <p className="text-sm text-sc-muted">{String(intel.summary)}</p>
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <h3 className="text-sm font-semibold">Hypotheses</h3>
            <ul className="mt-2 space-y-2 text-sm text-sc-muted">
              {((intel.hypotheses as Array<Record<string, string>>) ?? []).map((h, i) => (
                <li key={i}>
                  {h.hypothesis} <span className="text-xs text-sc-accent">({h.status})</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold">Priorities</h3>
            <ul className="mt-2 space-y-2 text-sm text-sc-muted">
              {((intel.priorities as Array<Record<string, string>>) ?? []).map((p, i) => (
                <li key={i}>
                  <span className="font-medium text-sc-ink">{p.tier}</span> — {p.item}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div>
          <h3 className="text-sm font-semibold">Recommendations</h3>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-sc-charcoal">
            {((intel.recommendations as string[]) ?? []).map((line, i) => (
              <li key={i}>{line}</li>
            ))}
          </ul>
        </div>
      </section>
    );
  }

  if (stage === "approve_draft_report") {
    const report = engagement.draft_report;
    return (
      <section className="sc-panel space-y-4 p-6">
        <p className="text-xs font-semibold uppercase tracking-widest text-sc-accent">{String(report.gold_standard_ref ?? "")}</p>
        <h2 className="text-2xl font-bold">{String(report.title)}</h2>
        <p className="text-sm text-sc-muted">{String(report.summary)}</p>
        {((report.sections as Array<Record<string, string>>) ?? []).map((section, i) => (
          <article key={i} className="border-t border-sc-line pt-4">
            <h3 className="text-sm font-semibold text-sc-ink">{section.heading}</h3>
            <p className="mt-2 text-sm leading-6 text-sc-charcoal">{section.body}</p>
          </article>
        ))}
      </section>
    );
  }

  if (stage === "approve_strategy_deck") {
    const deck = engagement.strategy_deck;
    return (
      <section className="sc-panel space-y-4 p-6">
        <p className="text-xs font-semibold uppercase tracking-widest text-sc-accent">{String(deck.gold_standard_ref ?? "")}</p>
        <h2 className="text-2xl font-bold">{String(deck.title)}</h2>
        <p className="text-sm text-sc-muted">{String(deck.summary)}</p>
        <ol className="space-y-3">
          {((deck.slides as Array<Record<string, string>>) ?? []).map((slide, i) => (
            <li key={i} className="flex gap-3 rounded-sc-sm border border-sc-line p-3">
              <span className="text-sm font-bold text-sc-accent">{i + 1}</span>
              <div>
                <p className="text-sm font-semibold text-sc-ink">{slide.title}</p>
                <p className="text-sm text-sc-muted">{slide.notes}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>
    );
  }

  if (stage === "complete_strategy_session") {
    const session = engagement.strategy_session;
    const metaSession = (session.session ?? {}) as Record<string, string>;
    return (
      <section className="sc-panel space-y-4 p-6">
        <p className="text-xs font-semibold uppercase tracking-widest text-sc-accent">{String(session.gold_standard_ref ?? "")}</p>
        <h2 className="text-2xl font-bold">{String(session.title)}</h2>
        <p className="text-sm text-sc-muted">{String(session.summary)}</p>
        <p className="text-sm text-sc-charcoal">
          {metaSession.participants} — {metaSession.objective}
        </p>
        <h3 className="text-sm font-semibold">Decisions</h3>
        <ul className="space-y-2 text-sm">
          {((session.decisions as Array<Record<string, string>>) ?? []).map((d, i) => (
            <li key={i} className="rounded-sc-sm bg-sc-canvas p-3">
              <p className="font-medium text-sc-ink">{d.input}</p>
              <p className="text-xs text-sc-accent">{d.classification}</p>
            </li>
          ))}
        </ul>
      </section>
    );
  }

  if (stage === "approve_final_blueprint") {
    const final = engagement.final_blueprint;
    return (
      <section className="sc-panel space-y-4 p-6">
        <h2 className="text-2xl font-bold">{String(final.title)}</h2>
        <p className="text-sm text-sc-muted">{String(final.summary)}</p>
        <p className="text-sm">
          Implementation path: <strong>{String(final.implementation_path)}</strong>
        </p>
        <ul className="list-disc space-y-1 pl-5 text-sm text-sc-charcoal">
          {((final.approved_conclusions as string[]) ?? []).map((line, i) => (
            <li key={i}>{line}</li>
          ))}
        </ul>
      </section>
    );
  }

  const handoff = engagement.handoff;
  const control = (handoff.control ?? {}) as Record<string, string>;
  return (
    <section className="sc-panel space-y-4 p-6">
      <p className="text-xs font-semibold uppercase tracking-widest text-sc-accent">{String(handoff.gold_standard_ref ?? "")}</p>
      <h2 className="text-2xl font-bold">{String(handoff.title)}</h2>
      <p className="text-sm text-sc-muted">{String(handoff.summary)}</p>
      <dl className="grid gap-3 text-sm sm:grid-cols-2">
        {Object.entries(control).map(([key, value]) => (
          <div key={key} className="rounded-sc-sm bg-sc-canvas p-3">
            <dt className="text-xs uppercase tracking-wide text-sc-muted">{key.replaceAll("_", " ")}</dt>
            <dd className="mt-1 font-medium text-sc-ink">{value}</dd>
          </div>
        ))}
      </dl>
      <h3 className="text-sm font-semibold">Evidence boundaries</h3>
      <ul className="list-disc space-y-1 pl-5 text-sm text-sc-muted">
        {((handoff.evidence_boundaries as string[]) ?? []).map((line, i) => (
          <li key={i}>{line}</li>
        ))}
      </ul>
    </section>
  );
}

export default function BlueprintClient({ id }: { id: string }) {
  const { toast } = useToast();
  const [engagement, setEngagement] = useState<BlueprintEngagement | null>(null);
  const [error, setError] = useState("");

  useEffect(() => {
    api.blueprint(id).then(setEngagement).catch((reason) => setError(reason.message));
  }, [id]);

  if (error && !engagement) return <p className="text-sc-danger">{error}</p>;
  if (!engagement) return <p className="text-sc-muted">Loading Blueprint delivery…</p>;

  const stage = engagement.workflow.current_stage;
  const complete = stage === "complete";
  const activeStage: BlueprintAction = complete ? "approve_handoff" : stage;
  const step = blueprintStepIndex(engagement.workflow);
  const meta = BLUEPRINT_STAGE_META[activeStage];
  const artifact = asArtifact(engagement[meta.artifact]);
  const locked = !engagement.unlocked;

  async function advance() {
    if (complete || locked) return;
    const action = engagement!.workflow.current_stage as BlueprintAction;
    const next = await api.blueprintAction(id, {
      action,
      actor: "Authorized reviewer",
      role: "Authorized SimpliCreative reviewer",
      reason: `Human gate · ${action}`,
    });
    setEngagement(next);
    toast(next.workflow.toast ?? "Stage complete");
  }

  return (
    <main className="mx-auto max-w-4xl space-y-5 animate-sc-fade-up">
      <Link href="/" className="text-sm text-sc-muted hover:text-sc-primary">
        Back to workspace
      </Link>
      <header className="sc-panel p-6">
        <p className="text-xs font-semibold uppercase tracking-widest text-sc-accent">SimpliBlueprint delivery · BLUE-002</p>
        <h1 className="mt-2 text-3xl font-bold text-sc-ink">{engagement.company_name}</h1>
        <p className="mt-2 text-sm text-sc-muted">{engagement.synthetic_disclaimer}</p>
        <div className="mt-5" aria-label={`Blueprint step ${step + 1} of ${BLUEPRINT_STAGES.length}`}>
          <div className="mb-2 flex justify-between text-xs text-sc-muted">
            <span>{complete ? "Complete" : meta.label}</span>
            <span>
              Step {Math.min(step + 1, BLUEPRINT_STAGES.length)}/{BLUEPRINT_STAGES.length}
            </span>
          </div>
          <div className="h-1.5 overflow-hidden rounded-full bg-sc-line">
            <div
              className="h-full rounded-full bg-sc-primary transition-all duration-700"
              style={{ width: `${((complete ? BLUEPRINT_STAGES.length : step + 1) / BLUEPRINT_STAGES.length) * 100}%` }}
            />
          </div>
          <div className="mt-3 flex flex-wrap gap-1.5">
            {(engagement.stage_labels ?? []).map((label, index) => (
              <span
                key={label}
                className={`rounded-full px-2 py-0.5 text-[10px] font-medium ${
                  index <= step ? "bg-sc-primary/15 text-sc-primary" : "bg-sc-canvas text-sc-muted"
                }`}
              >
                {label}
              </span>
            ))}
          </div>
        </div>
      </header>

      {error && <p className="text-sc-danger">{error}</p>}

      {locked ? (
        <section className="sc-panel p-6">
          <LockKeyhole className="h-5 w-5 text-sc-muted" />
          <h2 className="mt-3 text-xl font-semibold">Delivery locked</h2>
          <p className="mt-2 text-sm text-sc-muted">
            Complete and approve the linked acquisition SimpliBlueprint proposal first, then return here to activate
            delivery.
          </p>
          {engagement.linked_acquisition_journey_id && (
            <Link
              href={`/prospects/${engagement.linked_acquisition_journey_id}/proposal`}
              className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-sc-primary"
            >
              Open acquisition proposal <ArrowRight className="h-4 w-4" />
            </Link>
          )}
        </section>
      ) : (
        <>
          <StageBody engagement={engagement} stage={activeStage} />
          <EvidenceTrail evidence={artifact.evidence} citations={artifact.governance?.citations} />
          {!complete && (
            isApprovalStage(activeStage) ? (
              <ApprovalPanel
                key={activeStage}
                decision={artifact}
                workflow={{ next_action: meta.cta }}
                onApprove={async () => {
                  try {
                    await advance();
                  } catch (reason) {
                    setError(reason instanceof Error ? reason.message : "Action failed");
                    throw reason;
                  }
                }}
              />
            ) : (
              <ActionButton
                key={activeStage}
                idleLabel={meta.cta}
                busyLabel="Working…"
                successLabel="Advanced"
                idleIcon={<ArrowRight className="h-4 w-4" />}
                onAction={async () => {
                  try {
                    await advance();
                  } catch (reason) {
                    setError(reason instanceof Error ? reason.message : "Action failed");
                    throw reason;
                  }
                }}
              />
            )
          )}
          {complete && (
            <p className="rounded-sc-sm border border-teal-200 bg-teal-50/80 px-4 py-3 text-sm text-sc-charcoal">
              Blueprint delivery complete. Implementation handoff is ready for SimpliFoundation.
            </p>
          )}
        </>
      )}
    </main>
  );
}
