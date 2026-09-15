import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { INDUSTRY_DATA } from "@/data/industryData";
import IndustryDetailContent from "@/components/IndustryDetailContent";
import { TranslationProvider } from "@/context/TranslationContext";

const slug = "supply-chain-management";
const industry = INDUSTRY_DATA[slug];

export const metadata: Metadata = {
  title: industry ? "BrosDev Solutions | " + industry.title : "BrosDev Solutions | Industry Solutions",
  description: industry?.heroDesc || industry?.tagline || "BrosDev Solutions industry software solutions.",
  openGraph: {
    title: industry ? "BrosDev Solutions | " + industry.title : "BrosDev Solutions | Industry Solutions",
    description: industry?.heroDesc || industry?.tagline || "BrosDev Solutions industry software solutions.",
  },
};

export default async function LocalePage({ params }: { params: Promise<{ locale: string }> }) {
  const resolvedParams = await params;
  const locale = resolvedParams?.locale || "en";
  if (!industry) notFound();

  return (
    <TranslationProvider defaultLocale={locale}>
      <IndustryDetailContent industry={industry} locale={locale} />
    </TranslationProvider>
  );
}
