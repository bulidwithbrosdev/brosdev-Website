"use client";

import { use } from "react";
import { notFound } from "next/navigation";
import { INDUSTRY_DATA } from "@/data/industryData";
import IndustryDetailContent from "@/components/IndustryDetailContent";
import { TranslationProvider } from "@/context/TranslationContext";

export default function LocaleIndustrySlugPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const resolvedParams = use(params);
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
