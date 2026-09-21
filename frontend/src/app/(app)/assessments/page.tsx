"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { ArrowRight, ClipboardCheck, Clock3, CheckCircle2 } from "lucide-react";
import { api, type Prospect } from "@/lib/api";
import { actionFromNextAction } from "@/lib/workflow";
import { Button } from "@/components/ui/Button";
import { StatusPill } from "@/components/ui/StatusPill";

export default function AssessmentsIndex() {
  const [prospects, setProspects] = useState<Prospect[]>([]);
  const counts = useMemo(() => ({
    review: prospects.filter((p) => p.review_status === "needs_review").length,
    progress: prospects.filter((p) => p.review_status === "in_progress").length,
    approved: prospects.filter((p) => p.review_status === "approved").length,
  }), [prospects]);

  useEffect(() => { api.prospects().then(setProspects).catch(console.error); }, []);

  return <div className="mx-auto max-w-5xl space-y-6 animate-sc-fade-up">
    <header><p className="text-sm font-semibold uppercase tracking-[0.12em] text-sc-accent">Review queue</p><h1 className="mt-2 text-[1.75rem] font-bold tracking-tight text-sc-ink">Strategy Assessments</h1><p className="mt-2 max-w-[65ch] text-sm text-sc-muted">Review the strategic brief, confirm open questions, then move the prospect into scope and proposal work.</p></header>
    <div className="grid gap-3 sm:grid-cols-3">
      {[{label:"Needs review",value:counts.review,icon:ClipboardCheck},{label:"In progress",value:counts.progress,icon:Clock3},{label:"Approved",value:counts.approved,icon:CheckCircle2}].map(({label,value,icon:Icon}) => <div key={label} className="rounded-sc border border-sc-line bg-sc-surface p-4 shadow-sc"><Icon className="h-5 w-5 text-sc-primary"/><p className="mt-3 text-2xl font-bold text-sc-ink">{value}</p><p className="text-sm text-sc-muted">{label}</p></div>)}
    </div>
    <div className="space-y-3">
      {prospects.map((prospect) => {
        const action = actionFromNextAction(prospect.id, prospect.next_action);
        return <article key={prospect.id} className="rounded-sc border border-sc-line bg-sc-surface p-5 shadow-sc"><div className="flex flex-wrap items-start justify-between gap-4"><div className="min-w-0"><div className="flex flex-wrap items-center gap-2"><h2 className="text-lg font-semibold text-sc-ink">{prospect.company_name}</h2><StatusPill tone={prospect.review_status === "approved" ? "teal" : prospect.review_status === "in_progress" ? "amber" : "muted"}>{prospect.review_status.replaceAll("_", " ")}</StatusPill></div><p className="mt-2 max-w-[70ch] text-sm leading-relaxed text-sc-charcoal">{prospect.summary}</p><p className="mt-3 text-xs text-sc-muted">{prospect.stage} · {prospect.assigned_to} · {prospect.last_activity_label}</p></div><Link href={action.href}><Button>{action.label}<ArrowRight className="h-4 w-4"/></Button></Link></div></article>;
      })}
    </div>
  </div>;
}
