import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BUILD_TEAM_DATA } from "@/data/buildTeamData";
import BuildTeamDetailContent from "@/components/BuildTeamDetailContent";
import { TranslationProvider } from "@/context/TranslationContext";

const slug = "hire-digital-marketing-experts";
const role = BUILD_TEAM_DATA[slug];

export const metadata: Metadata = {
  title: role ? "Brosdev | " + role.title : "Brosdev | Build Your Team",
  description: role?.heroDesc || role?.title || "Hire dedicated software developers from BrosDev.",
  openGraph: {
    title: role ? "Brosdev | " + role.title : "Brosdev | Build Your Team",
    description: role?.heroDesc || role?.title || "Hire dedicated software developers from BrosDev.",
  },
};

export default async function LocalePage({ params }: { params: Promise<{ locale: string }> }) {
  const resolvedParams = await params;
  const locale = resolvedParams?.locale || "en";
  if (!role) notFound();

  return (
    <TranslationProvider defaultLocale={locale}>
      <BuildTeamDetailContent role={role} locale={locale} />
    </TranslationProvider>
  );
}
