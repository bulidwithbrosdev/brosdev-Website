import type { Metadata } from "next";
import TeamContent from "@/components/TeamContent";
import { TranslationProvider } from "@/context/TranslationContext";

export const metadata: Metadata = {
  title: "BrosDev Solutions | Our Team & Leadership",
  description:
    "Meet BrosDev Solutions senior engineering leads and architects powering custom software development and AI platform execution — managed by Aagman Group.",
  openGraph: {
    title: "BrosDev Solutions | Our Team & Leadership",
    description:
      "Meet BrosDev Solutions senior engineering leads and architects powering custom software development and AI platform execution — managed by Aagman Group.",
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
