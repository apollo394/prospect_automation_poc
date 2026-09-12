import { FileText } from "lucide-react";
import type { GovernedArtifact } from "@/lib/types";
export default function ProposalPreview({ proposal }: { proposal: GovernedArtifact }) {
  const value = (key: string) => {
    const candidate = proposal[key];
    return typeof candidate === "string" && candidate.trim() ? candidate : null;
  };
  const nextSteps = Array.isArray(proposal.next_steps) ? proposal.next_steps : [];
  const sections = [
    ["Problem and recommendation", value("client_summary") ?? value("executive_summary") ?? value("summary")],
    ["Approved scope", value("scope_snapshot")],
    ["Investment", value("investment_summary")],
    ["Next steps", nextSteps.length ? nextSteps : null],
    ["Closing", value("closing_note")],
  ] as const;
  return <section className="sc-panel p-6"><div className="flex gap-3"><FileText className="h-5 w-5 text-sc-accent"/><div><p className="text-xs font-semibold uppercase tracking-[.14em] text-sc-accent">Client-safe preview</p><h2 className="mt-1 text-2xl font-semibold text-sc-ink">{String(proposal.title ?? "Proposal preview")}</h2></div></div><div className="mt-6 space-y-5 text-sm leading-6 text-sc-charcoal">{sections.map(([label,content]) => content ? <div key={label}><h3 className="font-semibold capitalize text-sc-ink">{label}</h3>{Array.isArray(content) ? <ol className="list-decimal pl-5">{content.map(step => <li key={String(step)}>{String(step)}</li>)}</ol> : <p>{content}</p>}</div> : null)}</div></section>;
}
