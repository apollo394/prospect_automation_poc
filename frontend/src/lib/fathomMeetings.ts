export type FathomMeeting = {
  id: string;
  title: string;
  recordedAt: string;
  transcript: string;
};

/** POC stand-in for per-user Fathom account connection (production: OAuth per strategist). */
export const DEMO_FATHOM_ACCOUNT = "Connected Fathom account · synthetic reviewer";

const EXECUTIVE_DIAGNOSTIC_TRANSCRIPT = `04:12 Jordan Ellis: We're still figuring out how to talk about what we do without sounding like every other analytics vendor.

08:40 Sam Ortiz: Our primary goal this year is to increase qualified opportunities from the website, not just traffic.

12:05 Jordan Ellis: The homepage feels dated, and sales keeps sending people to PDFs because the site doesn't explain the offer well.

18:42 Jordan Ellis: Positioning is a significant concern. Prospects ask what makes us different and we don't have a clean answer.

22:18 Sam Ortiz: We need marketing to update pages without opening tickets every time. That dependency is killing campaign speed.

27:50 Jordan Ellis: Budget is still forming, but leadership wants to see a scoped phase-one before committing to a full rebuild.

31:10 Sam Ortiz: Ideal timeline would be discovery this quarter and something live before our spring launch window.

36:22 Jordan Ellis: I'm the economic buyer. Sam owns day-to-day marketing operations and will be the main collaborator.`;

export function fathomMeetingsForJourney(journeyId: string, companyName: string): FathomMeeting[] {
  const diagnosticTitle = `Executive Marketing Diagnostic · ${companyName}`;
  return [
    {
      id: `${journeyId}-diagnostic`,
      title: diagnosticTitle,
      recordedAt: "2026-09-10 · 36 min",
      transcript: EXECUTIVE_DIAGNOSTIC_TRANSCRIPT,
    },
    {
      id: `${journeyId}-internal`,
      title: `Internal prep · ${companyName}`,
      recordedAt: "2026-09-09 · 12 min",
      transcript: "Internal strategist prep only — not used for commercial routing in this POC.",
    },
  ];
}
