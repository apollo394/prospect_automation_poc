"use client";

import { useEffect, useState } from "react";
import { StatusPill } from "@/components/ui/StatusPill";
import { api } from "@/lib/api";

type Framework = {
  id: string;
  name: string;
  status: string;
  description: string;
  note: string;
  criteria: unknown[];
  evaluation_rules: unknown[];
};

export default function FrameworksPage() {
  const [items, setItems] = useState<Framework[]>([]);
  useEffect(() => {
    api.frameworks().then((d) => setItems(d as Framework[])).catch(console.error);
  }, []);

  return (
    <div className="space-y-6 animate-sc-fade-up">
      <h1 className="text-[1.75rem] font-bold tracking-tight text-sc-ink">
        Knowledge / Frameworks
      </h1>
      <p className="max-w-[65ch] text-sc-muted">
        Framework architecture is ready (criteria, evaluation rules, evidence, score,
        recommendation). Proprietary methodology is not invented here — configuration waits on
        SimpliCreative process docs.
      </p>
      {items.map((fw) => (
        <article
          key={fw.id}
          className="rounded-sc border border-sc-line bg-sc-surface p-6 shadow-sc"
        >
          <div className="flex flex-wrap items-center gap-3">
            <h2 className="text-lg font-semibold text-sc-ink">{fw.name}</h2>
            <StatusPill tone="amber">Methodology configuration pending</StatusPill>
          </div>
          <p className="mt-3 text-sm leading-relaxed text-sc-charcoal">{fw.description}</p>
          <p className="mt-3 text-sm text-sc-muted">{fw.note}</p>
          <dl className="mt-5 grid gap-3 sm:grid-cols-2 text-sm">
            <div className="rounded-sc-sm border border-sc-line p-3">
              <dt className="text-xs font-semibold uppercase text-sc-muted">Criteria</dt>
              <dd className="mt-1 text-sc-ink">{fw.criteria.length} configured</dd>
            </div>
            <div className="rounded-sc-sm border border-sc-line p-3">
              <dt className="text-xs font-semibold uppercase text-sc-muted">
                Evaluation rules
              </dt>
              <dd className="mt-1 text-sc-ink">{fw.evaluation_rules.length} configured</dd>
            </div>
          </dl>
        </article>
      ))}
    </div>
  );
}
