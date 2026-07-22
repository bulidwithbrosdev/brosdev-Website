"use client";

import { use } from "react";
import { notFound } from "next/navigation";
import { INSIGHTS_DATA } from "@/data/insightsData";
import InsightDetailContent from "@/components/InsightDetailContent";
import { TranslationProvider } from "@/context/TranslationContext";

export default function LocaleInsightSlugPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const resolvedParams = use(params);
  const locale = resolvedParams?.locale || "en";
  const slug = resolvedParams?.slug;

  const insight = INSIGHTS_DATA[slug];

  if (!insight) {
    notFound();
  }

  return (
    <TranslationProvider defaultLocale={locale}>
      <InsightDetailContent insight={insight} locale={locale} />
    </TranslationProvider>
  );
}
