import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { INDUSTRY_DATA } from "@/data/industryData";
import IndustryDetailContent from "@/components/IndustryDetailContent";
import { TranslationProvider } from "@/context/TranslationContext";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const resolvedParams = await params;
  const slug = resolvedParams?.slug;
  const industry = INDUSTRY_DATA[slug];

  if (!industry) {
    return {
      title: "BrosDev Solutions | Industry Not Found",
    };
  }

  const title = `BrosDev Solutions | ${industry.title}`;
  return {
    title,
    description: industry.heroDesc || industry.tagline,
    openGraph: {
      title,
      description: industry.heroDesc || industry.tagline,
    },
  };
}

export default async function LocaleIndustrySlugPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const resolvedParams = await params;
  const locale = resolvedParams?.locale || "en";
  const slug = resolvedParams?.slug;

  const industry = INDUSTRY_DATA[slug];

  if (!industry) {
    notFound();
  }

  return (
    <TranslationProvider defaultLocale={locale}>
      <IndustryDetailContent industry={industry} locale={locale} />
    </TranslationProvider>
  );
}
