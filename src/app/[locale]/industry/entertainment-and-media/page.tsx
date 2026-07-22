import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { INDUSTRY_DATA } from "@/data/industryData";
import IndustryDetailContent from "@/components/IndustryDetailContent";
import { TranslationProvider } from "@/context/TranslationContext";

const slug = "entertainment-and-media";
const industry = INDUSTRY_DATA[slug];

export const metadata: Metadata = {
  title: industry ? "Brosdev | " + industry.title : "Brosdev | Industry Solutions",
  description: industry?.heroDesc || industry?.tagline || "BrosDev industry software solutions.",
  openGraph: {
    title: industry ? "Brosdev | " + industry.title : "Brosdev | Industry Solutions",
    description: industry?.heroDesc || industry?.tagline || "BrosDev industry software solutions.",
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
