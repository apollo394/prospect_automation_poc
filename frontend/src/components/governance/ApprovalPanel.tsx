"use client";

import { Check, LockKeyhole } from "lucide-react";
import { ActionButton } from "@/components/ui/ActionButton";

export interface GovernanceRecord {
  citations?: Array<{ document_id?: string; version?: string }>;
  open_questions?: string[];
  conflicts?: string[];
}
export interface ApprovalRecord {
  approved_by?: string;
}
export interface ApprovalDecision {
  exact_decision?: string;
  decision?: string;
  governance?: GovernanceRecord;
  approval_record?: ApprovalRecord;
}
export interface ApprovalWorkflow {
  next_action?: string;
}

export function ApprovalPanel({
  decision,
  workflow,
  onApprove,
}: {
  decision?: ApprovalDecision;
  workflow?: ApprovalWorkflow;
  onApprove?: () => void | Promise<void>;
}) {
  const approved = Boolean(decision?.approval_record);
  const questions = decision?.governance?.open_questions ?? [];
  const conflicts = decision?.governance?.conflicts ?? [];

  return (
    <section className="sc-panel p-5" aria-labelledby="approval-heading">
      <div className="flex justify-between">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[.14em] text-sc-accent">Human decision gate</p>
          <h2 id="approval-heading" className="mt-1 text-lg font-semibold">
            {decision?.exact_decision ?? decision?.decision ?? "Recommendation awaiting review"}
          </h2>
        </div>
        <LockKeyhole className="h-5 w-5 text-sc-muted" />
      </div>
      <div className="mt-5 grid gap-4 text-sm sm:grid-cols-3">
        <div>
          <b>Citations</b>
          <p className="mt-1 text-sc-muted">{decision?.governance?.citations?.length ?? 0} governed source(s)</p>
        </div>
        <div>
          <b>Open questions</b>
          <p className="mt-1 text-sc-muted">{questions.length ? questions.join(", ") : "None recorded"}</p>
        </div>
        <div>
          <b>Conflicts</b>
          <p className="mt-1 text-sc-muted">{conflicts.length ? conflicts.join(", ") : "None recorded"}</p>
        </div>
      </div>
      <p className="mt-5 rounded-sc-sm border border-sc-line bg-sc-canvas p-3 text-xs text-sc-muted">
        {approved
          ? `Approved by ${decision?.approval_record?.approved_by ?? "human reviewer"}.`
          : "Approval record: not yet created. Synthetic labels remain visible until a human approves."}
      </p>
      <ActionButton
        className="mt-5"
        fullWidth
        idleLabel={workflow?.next_action ?? "Approve recommendation"}
        busyLabel="Approving…"
        successLabel="Approved"
        idleIcon={<Check className="h-4 w-4" />}
        done={approved}
        disabled={approved || !onApprove}
        onAction={async () => {
          await onApprove?.();
        }}
      />
    </section>
  );
}
