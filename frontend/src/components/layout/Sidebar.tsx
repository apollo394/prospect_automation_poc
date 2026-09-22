"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  HelpCircle,
  LayoutList,
  LogOut,
  Settings,
  Users,
} from "lucide-react";
import { cn } from "@/lib/utils";

const nav = [
  { href: "/", label: "Prospects", icon: Users },
  { href: "/work-queue", label: "Work Queue", icon: LayoutList },
  { href: "/frameworks", label: "Knowledge / Frameworks", icon: HelpCircle },
  { href: "/settings", label: "Settings", icon: Settings },
];

export function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();

  async function signOut() {
    if (!process.env.NEXT_PUBLIC_SUPABASE_URL) {
      router.push("/login");
      return;
    }
    const { createClient } = await import("@/lib/supabase/client");
    const supabase = createClient();
    await supabase.auth.signOut();
    router.replace("/login");
    router.refresh();
  }

  return (
    <aside className="relative flex h-dvh w-[260px] shrink-0 flex-col overflow-hidden bg-sc-night text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage: "var(--sc-hex)",
          backgroundSize: "64px 56px",
        }}
      />

      <div className="relative border-b border-white/10 px-5 py-7">
        <Link href="/" className="block">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/brand/simplicreative-logo-dark.svg"
            alt="SimpliCreative"
            className="h-20 w-auto max-w-full"
          />
        </Link>
        <div className="mt-4 flex items-center gap-2">
          <span className="inline-flex h-5 w-5 items-center justify-center">
            <svg viewBox="0 0 24 22" className="h-4 w-4 text-sc-accent" aria-hidden>
              <path
                fill="currentColor"
                d="M12 1.5 L21.5 7 v8 L12 20.5 L2.5 15 V7 Z"
                opacity="0.9"
              />
            </svg>
          </span>
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-sc-accent">
            Prospect Intelligence
          </p>
        </div>
      </div>

      <nav className="relative flex-1 space-y-1 px-3 py-5">
        {nav.map((item) => {
          const active =
            item.href === "/"
              ? pathname === "/" || pathname.startsWith("/prospects") || pathname.startsWith("/blueprints")
              : pathname.startsWith(item.href);
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "group relative flex items-center gap-3 rounded-sc-sm px-3 py-2.5 text-sm transition",
                active
                  ? "bg-sc-primary/35 text-white shadow-[inset_0_0_0_1px_rgba(0,157,136,0.35)]"
                  : "text-white/65 hover:bg-white/5 hover:text-white"
              )}
            >
              {active && (
                <span className="absolute left-0 top-1/2 h-5 w-[3px] -translate-y-1/2 rounded-r bg-sc-accent" />
              )}
              <Icon
                className={cn(
                  "h-4 w-4 transition",
                  active ? "text-sc-accent" : "text-white/45 group-hover:text-white/70"
                )}
              />
              <span className="font-medium">{item.label}</span>
            </Link>
          );
        })}
      </nav>

      <div className="relative space-y-3 border-t border-white/10 px-5 py-4">
        <button
          type="button"
          onClick={() => void signOut()}
          className="inline-flex items-center gap-2 text-xs font-medium text-white/55 transition hover:text-white"
        >
          <LogOut className="h-3.5 w-3.5" />
          Sign out
        </button>
        <p className="text-[11px] font-medium uppercase tracking-[0.12em] text-white/35">
          SimpliCreative · Internal
        </p>
        <p className="text-xs text-white/50">AI prepares · Humans approve</p>
      </div>
    </aside>
  );
}
