"use client";

import { use } from "react";
import { INDUSTRY_DATA } from "@/data/industryData";
import IndustryDetailContent from "@/components/IndustryDetailContent";
import { TranslationProvider } from "@/context/TranslationContext";
import { notFound } from "next/navigation";

export default function LocalePage({ params }: { params: Promise<{ locale: string }> }) {
  const resolvedParams = use(params);
  const locale = resolvedParams?.locale || "en";
  const industry = INDUSTRY_DATA["manufacturing"];
  if (!industry) notFound();

  return (
    <TranslationProvider defaultLocale={locale}>
      <IndustryDetailContent industry={industry} locale={locale} />
    </TranslationProvider>
  );
}
