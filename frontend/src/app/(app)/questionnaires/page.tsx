"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { api, type Prospect } from "@/lib/api";

export default function QuestionnairesIndex() {
  const [prospects, setProspects] = useState<Prospect[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    api
      .prospects()
      .then(setProspects)
      .catch((e) => setError(e instanceof Error ? e.message : "Failed to load"));
  }, []);

  return (
    <div className="space-y-6 animate-sc-fade-up">
      <div>
        <h1 className="text-[1.75rem] font-bold tracking-tight text-sc-ink">
          Questionnaires
        </h1>
        <p className="mt-2 max-w-[56ch] text-sm text-sc-muted">
          Review AI-prefilled discovery answers after Prospect Intelligence. Accept,
          edit, or reject before assessment.
        </p>
      </div>

      {error && <p className="text-sm text-sc-danger">{error}</p>}

      <ul className="divide-y divide-sc-line rounded-sc border border-sc-line bg-sc-surface shadow-sc">
        {prospects.map((p) => (
          <li key={p.id} className="flex items-center justify-between gap-4 px-5 py-4">
            <div>
              <span className="font-medium text-sc-ink">{p.company_name}</span>
              <p className="mt-0.5 text-xs text-sc-muted">
                {p.stage} · {p.status.replaceAll("_", " ")}
              </p>
            </div>
            <Link
              href={`/prospects/${p.id}/questionnaire`}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-sc-primary hover:text-sc-ink"
            >
              Open
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
