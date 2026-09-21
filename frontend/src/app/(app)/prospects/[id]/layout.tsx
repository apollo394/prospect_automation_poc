import { JourneyShell } from "@/components/journey/JourneyShell";

export default function ProspectJourneyLayout({ children }: { children: React.ReactNode }) {
  return <JourneyShell>{children}</JourneyShell>;
}
