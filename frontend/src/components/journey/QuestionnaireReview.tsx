import type { GovernedArtifact } from "@/lib/types";

type QuestionnaireItem = {
  classification?: string;
  reason?: string;
  question?: string;
  answer?: string;
};

export default function QuestionnaireReview({
  artifact,
  preview = false,
}: {
  artifact: GovernedArtifact;
  preview?: boolean;
}) {
  const rawItems = (artifact.items ?? artifact.questions ?? artifact.sources ?? []) as QuestionnaireItem[];
  const items = rawItems.filter((item) => typeof item === "object" && item !== null);
  const openQuestions = artifact.governance?.open_questions ?? [];

  return (
    <section className="sc-panel p-5">
      <div className="flex justify-between gap-3">
        <h2 className="text-lg font-semibold">{artifact.title ?? "Questionnaire review"}</h2>
        <span className="text-xs uppercase tracking-widest text-sc-muted">
          {preview ? "Draft" : "Returned"}
        </span>
      </div>
      <div className="mt-4 space-y-3">
        {items.length ? items.map((item, index) => (
          <article key={index} className="rounded-sc-sm bg-sc-canvas p-4">
            <div className="flex flex-wrap gap-2 text-xs font-semibold uppercase tracking-wide text-sc-muted">
              <span>{item.classification ?? "Unclassified"}</span>
              {item.reason && <span>· {item.reason}</span>}
            </div>
            <p className="mt-2 text-sm font-semibold">{item.question ?? "Question not supplied"}</p>
            {item.answer && <p className="mt-2 text-sm text-sc-muted">Answer: {item.answer}</p>}
          </article>
        )) : <p className="text-sm text-sc-muted">No questionnaire items supplied.</p>}
      </div>
      {!!openQuestions.length && <div className="mt-4"><h3 className="text-xs font-semibold uppercase tracking-wide text-sc-muted">Open questions</h3><ul className="mt-2 list-disc space-y-1 pl-5 text-sm">{openQuestions.map((question) => <li key={question}>{question}</li>)}</ul></div>}
      <p className="mt-4 text-xs text-sc-muted">Synthetic data · AI prepares a draft; a human reviewer decides what proceeds.</p>
    </section>
  );
}
