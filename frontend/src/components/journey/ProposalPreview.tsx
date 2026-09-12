"use client";

import { FileText } from "lucide-react";
import type { GovernedArtifact } from "@/lib/types";

function text(proposal: GovernedArtifact, key: string) {
  const candidate = proposal[key];
  return typeof candidate === "string" && candidate.trim() ? candidate : null;
}

function list(proposal: GovernedArtifact, key: string) {
  const candidate = proposal[key];
  return Array.isArray(candidate) && candidate.length
    ? candidate.map((item) => String(item)).filter(Boolean)
    : null;
}

function Section({
  title,
  body,
  items,
  ordered = false,
}: {
  title: string;
  body?: string | null;
  items?: string[] | null;
  ordered?: boolean;
}) {
  if (!body && !items?.length) return null;
  return (
    <div>
      <h3 className="text-sm font-semibold text-sc-ink">{title}</h3>
      {body && <p className="mt-2 text-sm leading-6 text-sc-charcoal">{body}</p>}
      {items?.length ? (
        ordered ? (
          <ol className="mt-2 list-decimal space-y-1.5 pl-5 text-sm leading-6 text-sc-charcoal">
            {items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ol>
        ) : (
          <ul className="mt-2 list-disc space-y-1.5 pl-5 text-sm leading-6 text-sc-charcoal">
            {items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        )
      ) : null}
    </div>
  );
}

export default function ProposalPreview({ proposal }: { proposal: GovernedArtifact }) {
  const nextSteps = list(proposal, "next_steps");
  const investmentNotes = list(proposal, "investment_notes");

  return (
    <section className="sc-panel p-6 md:p-8">
      <div className="flex gap-3">
        <FileText className="mt-1 h-5 w-5 shrink-0 text-sc-accent" />
        <div className="min-w-0">
          <p className="text-xs font-semibold uppercase tracking-[.14em] text-sc-accent">
            Client-safe preview
            {text(proposal, "gold_standard_ref") ? ` · ${text(proposal, "gold_standard_ref")}` : ""}
          </p>
          <h2 className="mt-1 text-2xl font-semibold text-sc-ink">
            {text(proposal, "title") ?? "Proposal preview"}
          </h2>
          {text(proposal, "subtitle") && (
            <p className="mt-1 text-sm text-sc-muted">{text(proposal, "subtitle")}</p>
          )}
          <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-xs text-sc-muted">
            {text(proposal, "prepared_for") && <span>Prepared for {text(proposal, "prepared_for")}</span>}
            {text(proposal, "prepared_by") && <span>{text(proposal, "prepared_by")}</span>}
            {text(proposal, "recommended_engagement") && (
              <span className="rounded-full bg-sc-canvas px-2 py-0.5 font-semibold text-sc-primary">
                {text(proposal, "recommended_engagement")}
              </span>
            )}
          </div>
        </div>
      </div>

      <div className="mt-8 space-y-7 border-t border-sc-line pt-7">
        <Section title={text(proposal, "opening_heading") ?? "Overview"} body={text(proposal, "opening") ?? text(proposal, "executive_summary")} />
        <Section title="What we heard" items={list(proposal, "what_we_heard")} />
        <Section title="The opportunity" body={text(proposal, "opportunity") ?? text(proposal, "strategy_snapshot")} />
        <Section title="What this engagement is designed to accomplish" items={list(proposal, "objectives")} />
        <Section title="Why this route" items={list(proposal, "why_this_route")} />
        <Section title="What we will cover" items={list(proposal, "investigate")} />
        <Section title="Included scope" items={list(proposal, "included_scope") ?? list(proposal, "deliverables")} />
        <Section title="Key client deliverables" items={list(proposal, "deliverables")} />
        <Section title="How the engagement works" items={list(proposal, "how_it_works")} ordered />
        <Section title="What we need from you" items={list(proposal, "client_needs")} />
        <Section title="Client responsibilities" items={list(proposal, "client_responsibilities")} />
        <Section title="Scope assumptions" items={list(proposal, "assumptions")} />
        <Section title="Not included unless explicitly added" items={list(proposal, "exclusions")} />

        <div>
          <h3 className="text-sm font-semibold text-sc-ink">Investment</h3>
          <p className="mt-2 text-2xl font-bold tracking-tight text-sc-primary">
            {text(proposal, "investment") ?? "Investment pending approval"}
          </p>
          {text(proposal, "investment_summary") && (
            <p className="mt-2 text-sm leading-6 text-sc-charcoal">{text(proposal, "investment_summary")}</p>
          )}
          {investmentNotes?.length ? (
            <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm leading-6 text-sc-muted">
              {investmentNotes.map((note) => (
                <li key={note}>{note}</li>
              ))}
            </ul>
          ) : null}
        </div>

        <Section title="What happens after this engagement" items={list(proposal, "after_engagement")} />
        <Section title="Next steps" items={nextSteps} ordered />
        <Section title="Closing" body={text(proposal, "closing_note")} />

        {text(proposal, "boundary_note") && (
          <p className="rounded-sc-sm border border-sc-line bg-sc-canvas px-4 py-3 text-xs leading-5 text-sc-muted">
            {text(proposal, "boundary_note")}
          </p>
        )}
      </div>
    </section>
  );
}
