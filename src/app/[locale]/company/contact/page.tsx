"use client";

import { use } from "react";
import { TranslationProvider } from "@/context/TranslationContext";
import ContactContent from "@/components/ContactContent";

export default function LocaleCompanyContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const resolvedParams = use(params);
  const locale = resolvedParams?.locale || "en";

  return (
    <TranslationProvider defaultLocale={locale}>
      <ContactContent locale={locale} />
    </TranslationProvider>
  );
}
