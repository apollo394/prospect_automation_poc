"use client";

import { Check, Circle, Eye, EyeOff } from "lucide-react";
import { InputHTMLAttributes, useId, useState } from "react";
import { passwordRequirements, passwordsMatch } from "@/lib/auth/password";
import { cn } from "@/lib/utils";

type Props = Omit<InputHTMLAttributes<HTMLInputElement>, "type"> & {
  label: string;
  /** Live checklist under the field (signup). */
  showRequirements?: boolean;
  /** When set, show live match status against this password (retype field). */
  matchAgainst?: string;
};

export function PasswordField({
  label,
  showRequirements = false,
  matchAgainst,
  className,
  id: idProp,
  value,
  ...inputProps
}: Props) {
  const autoId = useId();
  const id = idProp ?? autoId;
  const [visible, setVisible] = useState(false);
  const requirements = passwordRequirements(String(value ?? ""));
  const confirmValue = String(value ?? "");
  const showMatch = matchAgainst !== undefined && confirmValue.length > 0;
  const matched = showMatch && passwordsMatch(matchAgainst, confirmValue);

  return (
    <div className="space-y-2">
      <label className="block space-y-1.5 text-sm" htmlFor={id}>
        <span className="font-medium text-sc-ink">{label}</span>
        <div className="relative">
          <input
            {...inputProps}
            id={id}
            value={value}
            type={visible ? "text" : "password"}
            className={cn(
              "w-full rounded-sc-sm border border-sc-line bg-sc-canvas py-2.5 pl-3 pr-11 text-sc-ink outline-none focus:border-sc-accent focus:ring-2 focus:ring-sc-accent/30",
              className
            )}
          />
          <button
            type="button"
            onClick={() => setVisible((v) => !v)}
            className="absolute inset-y-0 right-0 flex items-center px-3 text-sc-muted transition hover:text-sc-ink"
            aria-label={visible ? "Hide password" : "Show password"}
            aria-pressed={visible}
          >
            {visible ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
          </button>
        </div>
      </label>
      {showRequirements && (
        <ul className="space-y-1.5 px-0.5" aria-live="polite">
          {requirements.map((req) => (
            <li
              key={req.id}
              className={cn(
                "flex items-center gap-2 text-xs transition-colors",
                req.met ? "font-medium text-sc-primary" : "text-sc-muted"
              )}
            >
              {req.met ? (
                <Check className="h-3.5 w-3.5 shrink-0" aria-hidden />
              ) : (
                <Circle className="h-3.5 w-3.5 shrink-0 opacity-50" aria-hidden />
              )}
              <span>{req.label}</span>
            </li>
          ))}
        </ul>
      )}
      {showMatch && (
        <p
          className={cn(
            "flex items-center gap-2 px-0.5 text-xs",
            matched ? "font-medium text-sc-primary" : "text-sc-danger"
          )}
          aria-live="polite"
        >
          {matched ? (
            <Check className="h-3.5 w-3.5 shrink-0" aria-hidden />
          ) : (
            <Circle className="h-3.5 w-3.5 shrink-0 opacity-50" aria-hidden />
          )}
          {matched ? "Passwords match" : "Passwords do not match"}
        </p>
      )}
    </div>
  );
}
