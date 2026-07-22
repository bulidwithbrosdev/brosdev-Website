"use client";

import { use } from "react";
import { TranslationProvider } from "@/context/TranslationContext";
import CareersContent from "@/components/CareersContent";

export default function LocaleCareersPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const resolvedParams = use(params);
  const locale = resolvedParams?.locale || "en";

  return (
    <TranslationProvider defaultLocale={locale}>
      <CareersContent locale={locale} />
    </TranslationProvider>
  );
}
