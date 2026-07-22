"use client";

import { use } from "react";
import { TranslationProvider } from "@/context/TranslationContext";
import IndustryOverviewContent from "@/components/IndustryOverviewContent";

export default function LocaleIndustryPage({ params }: { params: Promise<{ locale: string }> }) {
  const resolvedParams = use(params);
  const locale = resolvedParams?.locale || "en";

  return (
    <TranslationProvider defaultLocale={locale}>
      <IndustryOverviewContent locale={locale} />
    </TranslationProvider>
  );
}
