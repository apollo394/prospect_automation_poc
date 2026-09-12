import type { Metadata } from "next";
import { AppShell } from "@/components/layout/AppShell";
import { ToastProvider } from "@/components/governance/ToastProvider";
import "@/styles/tokens.css";

export const metadata: Metadata = {
  title: "Prospect Intelligence · SimpliCreative",
  description:
    "Prospect qualification, call analysis, and strategic assessment workspace for SimpliCreative.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full overflow-hidden">
      <body
        className="h-full overflow-hidden"
        style={{ fontFamily: "var(--sc-font)" }}
      >
        {/*
          THESIS: Attention-first strategy desk — what needs review now, not a KPI dashboard.
          OWN-WORLD: SimpliCreative teal (#006A5B / #009D88), charcoal night chrome, Inter, hexagonal logo.
          STORY: AI prepares prospect intelligence; humans review and approve with evidence.
          FIRST VIEWPORT: Sidebar + "Good morning, Lei" + Work Queue actions + Active Prospects table.
          FORM: Operate — established SimpliCreative brand extended into internal workspace; seed n/a (brief-specified).
          FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, and DESIGN.md
        */}
        <ToastProvider><AppShell>{children}</AppShell></ToastProvider>
      </body>
    </html>
  );
}
