import { ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost" | "danger";

const styles: Record<Variant, string> = {
  primary:
    "bg-sc-primary text-white hover:bg-sc-primary-deep focus-visible:ring-sc-accent",
  secondary:
    "bg-sc-surface text-sc-ink border border-sc-line hover:bg-[color-mix(in_srgb,var(--sc-accent)_8%,white)] focus-visible:ring-sc-accent",
  ghost:
    "bg-transparent text-sc-primary hover:bg-[color-mix(in_srgb,var(--sc-accent)_10%,transparent)] focus-visible:ring-sc-accent",
  danger:
    "bg-sc-danger text-white hover:opacity-90 focus-visible:ring-sc-danger",
};

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
};

export const Button = forwardRef<HTMLButtonElement, Props>(
  ({ className, variant = "primary", ...props }, ref) => (
    <button
      ref={ref}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-sc-sm px-4 py-2.5 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
        styles[variant],
        className
      )}
      {...props}
    />
  )
);
Button.displayName = "Button";
