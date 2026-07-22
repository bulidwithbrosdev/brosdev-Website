import type { Metadata } from "next";
import { TranslationProvider } from "@/context/TranslationContext";
import IndustryOverviewContent from "@/components/IndustryOverviewContent";

export const metadata: Metadata = {
  title: "Brosdev | Industry Verticals & Solutions",
  description:
    "Tailored software engineering & AI solutions for Healthcare, FinTech, Logistics, Manufacturing, Retail, Construction, Biotech, and E-Commerce.",
  openGraph: {
    title: "Brosdev | Industry Verticals & Solutions",
    description:
      "Tailored software engineering & AI solutions for Healthcare, FinTech, Logistics, Manufacturing, Retail, Construction, Biotech, and E-Commerce.",
  },
};

export default async function LocaleIndustryPage({ params }: { params: Promise<{ locale: string }> }) {
  const resolvedParams = await params;
  const locale = resolvedParams?.locale || "en";

  return (
    <TranslationProvider defaultLocale={locale}>
      <IndustryOverviewContent locale={locale} />
    </TranslationProvider>
  );
}
