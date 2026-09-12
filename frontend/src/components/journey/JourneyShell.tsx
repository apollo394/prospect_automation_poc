import { JourneyProgress } from "@/components/journey/JourneyProgress";

export function JourneyShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto grid w-full max-w-6xl gap-6 lg:grid-cols-[minmax(0,1fr)_240px]">
      <div className="min-w-0">{children}</div>
      <JourneyProgress />
    </div>
  );
}
