import { cn } from "@/lib/utils";

const tones: Record<string, string> = {
  teal: "bg-[var(--sc-success-soft)] text-sc-primary",
  amber: "bg-[var(--sc-warning-soft)] text-sc-warning",
  muted: "bg-[color-mix(in_srgb,var(--sc-muted)_12%,white)] text-sc-charcoal",
  danger: "bg-[var(--sc-danger-soft)] text-sc-danger",
  outline: "border border-sc-primary/30 text-sc-primary bg-white",
};

export function StatusPill({
  children,
  tone = "muted",
  className,
}: {
  children: React.ReactNode;
  tone?: keyof typeof tones;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-sc-sm px-2.5 py-1 text-xs font-semibold tracking-wide",
        tones[tone],
        className
      )}
    >
      {children}
    </span>
  );
}
