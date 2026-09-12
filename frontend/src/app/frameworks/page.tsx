"use client";

import { FileText, Info, X } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { createPortal } from "react-dom";
import { api } from "@/lib/api";

type KnowledgeSource = {
  id: string;
  file_name: string;
  title: string;
  folder: string;
  source_location: string;
  source_id: string | null;
  version: string | null;
  extension: string;
};

const EMPTY = "Not populated";

/** Source Register fields from GOV-002 / ENG-002 */
const METADATA_FIELDS = [
  "Source_ID",
  "Title",
  "Version",
  "Status",
  "Knowledge_Type",
  "Authority_Domain",
  "Owner",
  "Effective_Date",
  "Supersedes",
  "Superseded_By",
  "Retrieval_Priority",
  "Client_Bound",
  "Client_ID",
  "External_Source",
  "Reuse_Restrictions",
  "Human_Approval_Required",
  "Example_Copy",
  "Source_Location",
  "Ingestion_Approved",
  "Validation_Status",
  "Notes",
] as const;

type MetaKey = (typeof METADATA_FIELDS)[number];

function metadataFor(source: KnowledgeSource): Record<MetaKey, string> {
  return {
    Source_ID: source.source_id ?? EMPTY,
    Title: source.title || source.file_name,
    Version: source.version ?? EMPTY,
    Status: EMPTY,
    Knowledge_Type: EMPTY,
    Authority_Domain: EMPTY,
    Owner: EMPTY,
    Effective_Date: EMPTY,
    Supersedes: EMPTY,
    Superseded_By: EMPTY,
    Retrieval_Priority: EMPTY,
    Client_Bound: EMPTY,
    Client_ID: EMPTY,
    External_Source: EMPTY,
    Reuse_Restrictions: EMPTY,
    Human_Approval_Required: EMPTY,
    Example_Copy: EMPTY,
    Source_Location: source.source_location,
    Ingestion_Approved: "No",
    Validation_Status: "MISSING_METADATA",
    Notes: "File name listed only. Document body not ingested in this POC.",
  };
}

export default function FrameworksPage() {
  const [items, setItems] = useState<KnowledgeSource[]>([]);
  const [error, setError] = useState("");
  const [selectedId, setSelectedId] = useState<string | null>(null);

  useEffect(() => {
    api
      .knowledgeSources()
      .then(setItems)
      .catch((reason) => setError(reason instanceof Error ? reason.message : "Unable to load sources"));
  }, []);

  useEffect(() => {
    if (!selectedId) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelectedId(null);
    };
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = previous;
    };
  }, [selectedId]);

  const selected = useMemo(
    () => items.find((item) => item.id === selectedId) ?? null,
    [items, selectedId],
  );

  const meta = selected ? metadataFor(selected) : null;
  const known = meta
    ? METADATA_FIELDS.filter((field) => meta[field] !== EMPTY).map((field) => [field, meta[field]] as const)
    : [];
  const missingCount = meta ? METADATA_FIELDS.length - known.length : 0;

  const grouped = useMemo(() => {
    const map = new Map<string, KnowledgeSource[]>();
    for (const item of items) {
      const list = map.get(item.folder) ?? [];
      list.push(item);
      map.set(item.folder, list);
    }
    return [...map.entries()];
  }, [items]);

  function toggle(file: KnowledgeSource) {
    setSelectedId((current) => (current === file.id ? null : file.id));
  }

  return (
    <div className="space-y-6 animate-sc-fade-up">
      <div>
        <h1 className="text-[1.75rem] font-bold tracking-tight text-sc-ink">Knowledge / Frameworks</h1>
        <p className="mt-2 max-w-[70ch] text-sm text-sc-muted">
          SimpliCreative Second Brain master files. Names only for now — info opens Source Register metadata in the
          center of the screen. Document bodies are not loaded in this POC.
        </p>
      </div>

      {error && <p className="text-sm text-sc-danger">{error}</p>}
      {!error && !items.length && <p className="text-sm text-sc-muted">Loading sources…</p>}

      {grouped.map(([folder, files]) => (
        <section key={folder} className="sc-panel overflow-hidden">
          <header className="border-b border-sc-line bg-sc-canvas/70 px-5 py-3">
            <h2 className="text-xs font-semibold uppercase tracking-[.14em] text-sc-accent">{folder}</h2>
            <p className="mt-1 text-xs text-sc-muted">
              {files.length} file{files.length === 1 ? "" : "s"}
            </p>
          </header>
          <ul className="divide-y divide-sc-line">
            {files.map((file) => {
              const active = selectedId === file.id;
              return (
                <li
                  key={file.id}
                  className={`flex items-center gap-3 px-5 py-3 transition-colors duration-150 ${
                    active ? "bg-[color-mix(in_srgb,var(--sc-accent)_8%,white)]" : ""
                  }`}
                >
                  <FileText className="h-4 w-4 shrink-0 text-sc-accent" aria-hidden />
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-medium text-sc-ink">{file.file_name}</p>
                    <p className="truncate text-xs text-sc-muted">{file.extension.toUpperCase()}</p>
                  </div>
                  <button
                    type="button"
                    aria-expanded={active}
                    aria-haspopup="dialog"
                    aria-label={`Show metadata for ${file.file_name}`}
                    onClick={() => toggle(file)}
                    className={`inline-flex h-9 w-9 items-center justify-center rounded-sc-sm border transition duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sc-accent ${
                      active
                        ? "border-sc-accent bg-sc-primary text-white"
                        : "border-sc-line text-sc-muted hover:border-sc-accent hover:text-sc-primary"
                    }`}
                  >
                    <Info className="h-4 w-4" />
                  </button>
                </li>
              );
            })}
          </ul>
        </section>
      ))}

      {selected && meta && typeof document !== "undefined"
        ? createPortal(
            <div
              className="fixed inset-0 z-[100] flex items-center justify-center bg-sc-night/45 p-4 backdrop-blur-[2px]"
              onClick={() => setSelectedId(null)}
            >
              <div
                role="dialog"
                aria-modal="true"
                aria-labelledby="source-metadata-title"
                className="w-full max-w-md rounded-sc border border-sc-line bg-sc-surface p-5 shadow-[0_16px_48px_rgba(11,39,38,0.22)]"
                onClick={(event) => event.stopPropagation()}
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <p className="text-[10px] font-semibold uppercase tracking-[.14em] text-sc-accent">
                      Source Register
                    </p>
                    <h2 id="source-metadata-title" className="mt-1 text-base font-semibold leading-snug text-sc-ink">
                      {meta.Title}
                    </h2>
                    <p className="mt-1 truncate text-xs text-sc-muted">{selected.file_name}</p>
                  </div>
                  <button
                    type="button"
                    aria-label="Close metadata"
                    onClick={() => setSelectedId(null)}
                    className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-sc-sm border border-sc-line text-sc-muted transition hover:border-sc-accent hover:text-sc-primary"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>

                <dl className="mt-4 space-y-3 border-t border-sc-line pt-4">
                  {known.map(([field, value]) => (
                    <div key={field} className="min-w-0">
                      <dt className="text-[10px] font-semibold uppercase tracking-wide text-sc-muted">{field}</dt>
                      <dd className="mt-1 break-words text-sm leading-5 text-sc-ink">{value}</dd>
                    </div>
                  ))}
                </dl>

                {missingCount > 0 && (
                  <p className="mt-4 rounded-sc-sm bg-sc-canvas px-3 py-2 text-[11px] leading-4 text-sc-muted">
                    {missingCount} Source Register fields not populated yet.
                  </p>
                )}
              </div>
            </div>,
            document.body,
          )
        : null}
    </div>
  );
}
