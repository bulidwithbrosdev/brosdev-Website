import type { Metadata } from "next";
import { TranslationProvider } from "@/context/TranslationContext";
import BuildTeamOverviewContent from "@/components/BuildTeamOverviewContent";

export const metadata: Metadata = {
  title: "Brosdev | Hire Dedicated Software Developers",
  description:
    "Hire top 1% pre-screened software developers, AI engineers, full-stack web developers, and UI/UX designers with a 2-week risk-free trial.",
  openGraph: {
    title: "Brosdev | Hire Dedicated Software Developers",
    description:
      "Hire top 1% pre-screened software developers, AI engineers, full-stack web developers, and UI/UX designers with a 2-week risk-free trial.",
  },
};

export default async function LocaleBuildTeamPage({ params }: { params: Promise<{ locale: string }> }) {
  const resolvedParams = await params;
  const locale = resolvedParams?.locale || "en";

  return (
    <TranslationProvider defaultLocale={locale}>
      <BuildTeamOverviewContent locale={locale} />
    </TranslationProvider>
  );
}
