import { StatusPill } from "@/components/ui/StatusPill";
import {
  type FastReadinessItem,
  type FastReadinessStatus,
  type RecommendedService,
} from "@/lib/api";

const statusTone = {
  ready: "teal",
  needs_work: "amber",
  needs_validation: "muted",
} as const;

const statusLabel: Record<FastReadinessStatus, string> = {
  ready: "Ready",
  needs_work: "Needs work",
  needs_validation: "Needs validation",
};

type Props = {
  items: FastReadinessItem[];
  editing: boolean;
  onChange: (items: FastReadinessItem[]) => void;
  services: RecommendedService[];
};

export function FastReadinessCard({ items, editing, onChange, services }: Props) {
  const serviceNames = new Map(services.map((service) => [service.service_id, service.name]));

  const update = (index: number, patch: Partial<FastReadinessItem>) => {
    onChange(items.map((item, itemIndex) => (itemIndex === index ? { ...item, ...patch } : item)));
  };

  return (
    <section className="rounded-sc border border-sc-line bg-sc-surface p-5 shadow-sc">
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <div>
          <h2 className="text-base font-semibold text-sc-ink">FAST Readiness</h2>
          <p className="mt-1 text-xs text-sc-muted">
            Flexible, Accessible, Strategic, and Trackable delivery readiness. No overall score.
          </p>
        </div>
      </div>
      <div className="mt-4 divide-y divide-sc-line">
        {items.map((item, index) => (
          <article key={item.pillar} className="py-4 first:pt-0 last:pb-0">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h3 className="font-semibold text-sc-ink">{item.label}</h3>
              {editing ? (
                <select
                  aria-label={`${item.label} readiness status`}
                  className="rounded-sc-sm border border-sc-line bg-white px-2 py-1 text-xs font-medium text-sc-charcoal"
                  value={item.status}
                  onChange={(event) => update(index, { status: event.target.value as FastReadinessStatus })}
                >
                  {Object.entries(statusLabel).map(([value, label]) => (
                    <option key={value} value={value}>{label}</option>
                  ))}
                </select>
              ) : (
                <StatusPill tone={statusTone[item.status]}>{statusLabel[item.status]}</StatusPill>
              )}
            </div>

            <div className="mt-3 text-sm leading-relaxed text-sc-charcoal">
              <p className="text-xs font-semibold uppercase tracking-wide text-sc-muted">Finding</p>
              {editing ? (
                <textarea
                  className="mt-1 w-full rounded-sc-sm border border-sc-line p-2 text-sm"
                  rows={3}
                  value={item.finding}
                  onChange={(event) => update(index, { finding: event.target.value })}
                />
              ) : (
                <p className="mt-1">{item.finding}</p>
              )}
            </div>

            <div className="mt-3 text-sm leading-relaxed text-sc-charcoal">
              <p className="text-xs font-semibold uppercase tracking-wide text-sc-muted">Suggested action</p>
              {editing ? (
                <textarea
                  className="mt-1 w-full rounded-sc-sm border border-sc-line p-2 text-sm"
                  rows={2}
                  value={item.suggested_action}
                  onChange={(event) => update(index, { suggested_action: event.target.value })}
                />
              ) : (
                <p className="mt-1">{item.suggested_action}</p>
              )}
            </div>

            <p className="mt-3 text-xs text-sc-muted">
              {item.evidence_ids.length > 0
                ? `Call evidence: ${item.evidence_ids.join(", ")}`
                : "Needs validation from discovery or site review."}
            </p>
            {item.service_ids.length > 0 && (
              <p className="mt-1 text-xs font-medium text-sc-primary">
                Services: {item.service_ids.map((serviceId) => serviceNames.get(serviceId) || serviceId).join(" · ")}
              </p>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
