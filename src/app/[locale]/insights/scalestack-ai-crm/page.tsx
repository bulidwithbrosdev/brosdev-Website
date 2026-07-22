"use client";

import { use } from "react";
import { INSIGHTS_DATA } from "@/data/insightsData";
import InsightDetailContent from "@/components/InsightDetailContent";
import { TranslationProvider } from "@/context/TranslationContext";
import { notFound } from "next/navigation";

export default function LocalePage({ params }: { params: Promise<{ locale: string }> }) {
  const resolvedParams = use(params);
  const locale = resolvedParams?.locale || "en";
  const insight = INSIGHTS_DATA["scalestack-ai-crm"];
  if (!insight) notFound();

  return (
    <TranslationProvider defaultLocale={locale}>
      <InsightDetailContent insight={insight} locale={locale} />
    </TranslationProvider>
  );
}
