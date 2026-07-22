"use client";

import { use } from "react";
import { TranslationProvider } from "@/context/TranslationContext";
import TeamContent from "@/components/TeamContent";

export default function LocaleTeamPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const resolvedParams = use(params);
  const locale = resolvedParams?.locale || "en";

  return (
    <TranslationProvider defaultLocale={locale}>
      <TeamContent locale={locale} />
    </TranslationProvider>
  );
}
