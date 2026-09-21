"use client";

import Link from "next/link";
import { FormEvent, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { PasswordField } from "@/components/auth/PasswordField";
import { Button } from "@/components/ui/Button";
import { isCompanyEmail } from "@/lib/auth/domain";
import {
  PASSWORD_MAX_LENGTH,
  PASSWORD_MIN_LENGTH,
  passwordIssueMessage,
  passwordsMatch,
  validatePassword,
} from "@/lib/auth/password";
import { createClient } from "@/lib/supabase/client";

export default function SignupPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);
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
    setMessage(null);
    if (!isCompanyEmail(email)) {
      setError("Only @simplicreative.com email addresses can sign up.");
      return;
    }
    const issue = validatePassword(password);
    if (issue) {
      setError(passwordIssueMessage(issue));
      return;
    }
    if (!passwordsMatch(password, confirmPassword)) {
      setError(passwordIssueMessage("mismatch"));
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
      const { data, error: signUpError } = await supabase.auth.signUp({
        email: email.trim(),
        password,
        options: {
          data: { full_name: fullName.trim() || undefined },
        },
      });
      if (signUpError) {
        setError(signUpError.message);
        return;
      }
      if (data.session) {
        router.replace("/");
        router.refresh();
        return;
      }
      setMessage("Check your inbox to confirm your email, then sign in.");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Sign up failed");
    } finally {
      setPending(false);
    }
  }

  return (
    <div className="rounded-sc border border-sc-line bg-sc-surface p-8 shadow-sc">
      <p className="text-xs font-semibold uppercase tracking-[.14em] text-sc-accent">
        Prospect Intelligence
      </p>
      <h1 className="mt-2 text-2xl font-bold tracking-[-.03em] text-sc-ink">Create account</h1>
      <p className="mt-2 text-sm text-sc-muted">
        Restricted to @simplicreative.com. Built-in email is rate-limited (~2/hour).
      </p>
      <form className="mt-6 space-y-4" onSubmit={onSubmit}>
        <label className="block space-y-1.5 text-sm">
          <span className="font-medium text-sc-ink">Full name</span>
          <input
            type="text"
            autoComplete="name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="w-full rounded-sc-sm border border-sc-line bg-sc-canvas px-3 py-2.5 text-sc-ink outline-none focus:border-sc-accent focus:ring-2 focus:ring-sc-accent/30"
          />
        </label>
        <label className="block space-y-1.5 text-sm">
          <span className="font-medium text-sc-ink">Work email</span>
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
          autoComplete="new-password"
          required
          minLength={PASSWORD_MIN_LENGTH}
          maxLength={PASSWORD_MAX_LENGTH}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          showRequirements
        />
        <PasswordField
          label="Re-type password"
          autoComplete="new-password"
          required
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          matchAgainst={password}
        />
        {error && (
          <p className="rounded-sc-sm border border-sc-danger/20 bg-[var(--sc-danger-soft)] px-3 py-2 text-sm text-sc-danger">
            {error}
          </p>
        )}
        {message && (
          <p className="rounded-sc-sm border border-sc-success/20 bg-[var(--sc-success-soft)] px-3 py-2 text-sm text-sc-primary">
            {message}
          </p>
        )}
        <Button type="submit" className="w-full" disabled={pending}>
          {pending ? "Creating…" : "Create account"}
        </Button>
      </form>
      <p className="mt-4 text-center text-sm text-sc-muted">
        Already have an account?{" "}
        <Link href="/login" className="font-semibold text-sc-primary hover:underline">
          Sign in
        </Link>
      </p>
    </div>
  );
}
