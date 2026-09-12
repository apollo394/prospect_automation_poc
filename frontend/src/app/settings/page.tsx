export default function SettingsPage() {
  return (
    <div className="space-y-4 animate-sc-fade-up">
      <h1 className="text-[1.75rem] font-bold tracking-tight text-sc-ink">Settings</h1>
      <p className="text-sc-muted">
        POC settings placeholder. Production authentication and RBAC are out of scope.
      </p>
      <div className="rounded-sc border border-sc-line bg-sc-surface p-5 shadow-sc text-sm text-sc-charcoal">
        <div>
          <span className="font-semibold text-sc-ink">Product:</span> Prospect Intelligence
        </div>
        <div className="mt-2">
          <span className="font-semibold text-sc-ink">Company:</span> SimpliCreative
        </div>
        <div className="mt-2">
          <span className="font-semibold text-sc-ink">AI provider:</span> OpenRouter
          (falls back to mock demo data if{" "}
          <code className="text-xs">OPENROUTER_API_KEY</code> is missing)
        </div>
        <div className="mt-2">
          <span className="font-semibold text-sc-ink">Config:</span>{" "}
          <code className="text-xs">backend/.env</code>
        </div>
      </div>
    </div>
  );
}
