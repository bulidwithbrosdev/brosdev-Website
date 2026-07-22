"use client";

import { use } from "react";
import { TranslationProvider } from "@/context/TranslationContext";
import BookConsultationContent from "@/components/BookConsultationContent";

export default function LocaleBookConsultationPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const resolvedParams = use(params);
  const locale = resolvedParams?.locale || "en";

  return (
    <TranslationProvider defaultLocale={locale}>
      <BookConsultationContent locale={locale} />
    </TranslationProvider>
  );
}
