import { Sidebar } from "@/components/layout/Sidebar";

export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-dvh flex-col bg-sc-canvas md:h-dvh md:flex-row md:overflow-hidden">
      <Sidebar />
      <main className="sc-brand-canvas relative min-w-0 flex-1 md:overflow-y-auto md:overscroll-contain">
        <div className="relative mx-auto w-full max-w-[1280px] px-4 py-6 sm:px-6 md:px-8 md:py-8">
          {children}
        </div>
      </main>
    </div>
  );
}
