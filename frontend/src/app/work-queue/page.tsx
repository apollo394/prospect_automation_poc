"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { api, type WorkQueueItem } from "@/lib/api";
import { Button } from "@/components/ui/Button";

export default function WorkQueuePage() {
  const [items, setItems] = useState<WorkQueueItem[]>([]);
  useEffect(() => {
    api.workQueue().then(setItems).catch(console.error);
  }, []);

  return (
    <div className="space-y-6 animate-sc-fade-up">
      <h1 className="text-[1.75rem] font-bold tracking-tight text-sc-ink">Work Queue</h1>
      <p className="text-sc-muted">Actions waiting for a strategist.</p>
      <div className="space-y-3">
        {items.map((item) => (
          <div
            key={`${item.prospect_id}-${item.action}`}
            className="flex flex-wrap items-center justify-between gap-4 rounded-sc border border-sc-line bg-sc-surface px-5 py-4 shadow-sc"
          >
            <div>
              <div className="font-semibold text-sc-ink">{item.company_name}</div>
              <div className="text-sm text-sc-charcoal">{item.headline}</div>
              <div className="text-xs text-sc-muted">{item.detail}</div>
            </div>
            <Link href={item.href}>
              <Button>{item.action_label}</Button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
