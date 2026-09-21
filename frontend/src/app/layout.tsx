import type { Metadata } from "next";
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
        {children}
      </body>
    </html>
  );
}
