import { redirect } from "next/navigation";
import { AppShell } from "@/components/layout/AppShell";
import { ToastProvider } from "@/components/governance/ToastProvider";
import { isCompanyEmail } from "@/lib/auth/domain";
import { createClient } from "@/lib/supabase/server";

export default async function AppLayout({ children }: { children: React.ReactNode }) {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;
  if (!url || !key) {
    redirect("/login?error=config");
  }

  const supabase = await createClient();
  const { data } = await supabase.auth.getClaims();
  const claims = data?.claims as { email?: string; sub?: string } | undefined;

  if (!claims?.sub) {
    redirect("/login");
  }
  if (claims.email && !isCompanyEmail(claims.email)) {
    await supabase.auth.signOut();
    redirect("/login?error=domain");
  }

  return (
    <ToastProvider>
      <AppShell>{children}</AppShell>
    </ToastProvider>
  );
}
