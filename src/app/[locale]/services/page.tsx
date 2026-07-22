"use client";

import { use } from "react";
import { TranslationProvider } from "@/context/TranslationContext";
import ServicesOverviewContent from "@/components/ServicesOverviewContent";

export default function LocaleServicesPage({ params }: { params: Promise<{ locale: string }> }) {
  const resolvedParams = use(params);
  const locale = resolvedParams?.locale || "en";

  return (
    <TranslationProvider defaultLocale={locale}>
      <ServicesOverviewContent locale={locale} />
    </TranslationProvider>
  );
}
