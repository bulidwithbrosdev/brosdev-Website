import type { Metadata } from "next";
import TeamContent from "@/components/TeamContent";
import { TranslationProvider } from "@/context/TranslationContext";

export const metadata: Metadata = {
  title: "BrosDev Solutions | Our Leadership & Engineering Team",
  description:
    "Meet BrosDev Solutions founders and senior engineering leads powering custom software development and AI platform execution.",
  openGraph: {
    title: "BrosDev Solutions | Our Leadership & Engineering Team",
    description:
      "Meet BrosDev Solutions founders and senior engineering leads powering custom software development and AI platform execution.",
  },
};

export default async function LocaleTeamPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const resolvedParams = await params;
  const locale = resolvedParams?.locale || "en";

  return (
    <TranslationProvider defaultLocale={locale}>
      <TeamContent locale={locale} />
    </TranslationProvider>
  );
}
