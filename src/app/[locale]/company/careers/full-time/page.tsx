"use client";

import { use } from "react";
import { TranslationProvider } from "@/context/TranslationContext";
import FullTimeCareersContent from "@/components/FullTimeCareersContent";

export default function LocaleFullTimeCareersPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const resolvedParams = use(params);
  const locale = resolvedParams?.locale || "en";

  return (
    <TranslationProvider defaultLocale={locale}>
      <FullTimeCareersContent locale={locale} />
    </TranslationProvider>
  );
}
