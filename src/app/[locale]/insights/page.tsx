import type { Metadata } from "next";
import { TranslationProvider } from "@/context/TranslationContext";
import InsightsOverviewContent from "@/components/InsightsOverviewContent";

export const metadata: Metadata = {
  title: "BrosDev Solutions | Technical Insights & Case Studies",
  description:
    "Read BrosDev Solutions architecture case studies on Enterprise AI, FinTech core banking ledgers, Kubernetes orchestration, and WebRTC telehealth platforms.",
  openGraph: {
    title: "BrosDev Solutions | Technical Insights & Case Studies",
    description:
      "Read BrosDev Solutions architecture case studies on Enterprise AI, FinTech core banking ledgers, Kubernetes orchestration, and WebRTC telehealth platforms.",
  },
};

export default async function LocaleInsightsPage({ params }: { params: Promise<{ locale: string }> }) {
  const resolvedParams = await params;
  const locale = resolvedParams?.locale || "en";

  return (
    <TranslationProvider defaultLocale={locale}>
      <InsightsOverviewContent locale={locale} />
    </TranslationProvider>
  );
}
