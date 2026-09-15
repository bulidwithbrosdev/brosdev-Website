import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { INSIGHTS_DATA } from "@/data/insightsData";
import InsightDetailContent from "@/components/InsightDetailContent";
import { TranslationProvider } from "@/context/TranslationContext";

const slug = "hipaa-telehealth-webrtc";
const insight = INSIGHTS_DATA[slug];

export const metadata: Metadata = {
  title: insight ? "BrosDev Solutions | " + insight.title : "BrosDev Solutions | Engineering Insights",
  description: insight?.summary || insight?.subtitle || "BrosDev Solutions architecture case study and engineering insight.",
  openGraph: {
    title: insight ? "BrosDev Solutions | " + insight.title : "BrosDev Solutions | Engineering Insights",
    description: insight?.summary || insight?.subtitle || "BrosDev Solutions architecture case study and engineering insight.",
  },
};

export default async function LocalePage({ params }: { params: Promise<{ locale: string }> }) {
  const resolvedParams = await params;
  const locale = resolvedParams?.locale || "en";
  if (!insight) notFound();

  return (
    <TranslationProvider defaultLocale={locale}>
      <InsightDetailContent insight={insight} locale={locale} />
    </TranslationProvider>
  );
}
