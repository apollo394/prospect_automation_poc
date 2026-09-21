"use client";

import Link from "next/link";
import { FormEvent, useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { PasswordField } from "@/components/auth/PasswordField";
import { Button } from "@/components/ui/Button";
import { isCompanyEmail } from "@/lib/auth/domain";
import { createClient } from "@/lib/supabase/client";

export default function LoginClient() {
  const router = useRouter();
  const search = useSearchParams();
  const next = search.get("next") || "/";
  const domainError = search.get("error") === "domain";
  const configError = search.get("error") === "config";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(
    domainError
      ? "Only @simplicreative.com accounts can access this workspace."
      : configError
        ? "Supabase env is missing. Set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY, then restart the frontend."
        : null
  );
  const [pending, setPending] = useState(false);

  const configured = useMemo(
    () =>
      Boolean(
        process.env.NEXT_PUBLIC_SUPABASE_URL &&
          process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY
      ),
    []
  );

  async function onSubmit(event: FormEvent) {
    event.preventDefault();
    setError(null);
    if (!isCompanyEmail(email)) {
      setError("Use your @simplicreative.com email address.");
      return;
    }
    if (!configured) {
      setError(
        "Supabase is not configured. Set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY."
      );
      return;
    }
    setPending(true);
    try {
      const supabase = createClient();
      const { error: signInError } = await supabase.auth.signInWithPassword({
        email: email.trim(),
        password,
      });
      if (signInError) {
        setError(signInError.message);
        return;
      }
      router.replace(next.startsWith("/") ? next : "/");
      router.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Sign in failed");
    } finally {
      setPending(false);
    }
  }

  return (
    <div className="rounded-sc border border-sc-line bg-sc-surface p-8 shadow-sc">
      <p className="text-xs font-semibold uppercase tracking-[.14em] text-sc-accent">
        Prospect Intelligence
      </p>
      <h1 className="mt-2 text-2xl font-bold tracking-[-.03em] text-sc-ink">Sign in</h1>
      <p className="mt-2 text-sm text-sc-muted">
        SimpliCreative strategists only (@simplicreative.com).
      </p>
      <form className="mt-6 space-y-4" onSubmit={onSubmit}>
        <label className="block space-y-1.5 text-sm">
          <span className="font-medium text-sc-ink">Email</span>
          <input
            type="email"
            autoComplete="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-sc-sm border border-sc-line bg-sc-canvas px-3 py-2.5 text-sc-ink outline-none focus:border-sc-accent focus:ring-2 focus:ring-sc-accent/30"
            placeholder="you@simplicreative.com"
          />
        </label>
        <PasswordField
          label="Password"
          autoComplete="current-password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && (
          <p className="rounded-sc-sm border border-sc-danger/20 bg-[var(--sc-danger-soft)] px-3 py-2 text-sm text-sc-danger">
            {error}
          </p>
        )}
        <Button type="submit" className="w-full" disabled={pending}>
          {pending ? "Signing in…" : "Sign in"}
        </Button>
      </form>
      <p className="mt-4 text-center text-sm text-sc-muted">
        Need an account?{" "}
        <Link href="/signup" className="font-semibold text-sc-primary hover:underline">
          Sign up
        </Link>
      </p>
    </div>
  );
}
