"use client";

import { use } from "react";
import { TranslationProvider } from "@/context/TranslationContext";
import InternshipApplicationContent from "@/components/InternshipApplicationContent";

export default function LocaleInternshipApplicationPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const resolvedParams = use(params);
  const locale = resolvedParams?.locale || "en";

  return (
    <TranslationProvider defaultLocale={locale}>
      <InternshipApplicationContent locale={locale} />
    </TranslationProvider>
  );
}
