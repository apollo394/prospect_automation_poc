"use client";

import { Eye, EyeOff } from "lucide-react";
import { InputHTMLAttributes, useId, useState } from "react";
import { passwordHint } from "@/lib/auth/password";
import { cn } from "@/lib/utils";

type Props = Omit<InputHTMLAttributes<HTMLInputElement>, "type"> & {
  label: string;
  showHint?: boolean;
};

export function PasswordField({
  label,
  showHint = false,
  className,
  id: idProp,
  ...inputProps
}: Props) {
  const autoId = useId();
  const id = idProp ?? autoId;
  const [visible, setVisible] = useState(false);

  return (
    <label className="block space-y-1.5 text-sm" htmlFor={id}>
      <span className="font-medium text-sc-ink">{label}</span>
      <div className="relative">
        <input
          {...inputProps}
          id={id}
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
          tabIndex={0}
        >
          {visible ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
        </button>
      </div>
      {showHint && <span className="block text-xs text-sc-muted">{passwordHint()}</span>}
    </label>
  );
}
