"use client";

import { use } from "react";
import { TranslationProvider } from "@/context/TranslationContext";
import InsightsOverviewContent from "@/components/InsightsOverviewContent";

export default function LocaleInsightsPage({ params }: { params: Promise<{ locale: string }> }) {
  const resolvedParams = use(params);
  const locale = resolvedParams?.locale || "en";

  return (
    <TranslationProvider defaultLocale={locale}>
      <InsightsOverviewContent locale={locale} />
    </TranslationProvider>
  );
}
