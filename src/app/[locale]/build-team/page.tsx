"use client";

import { use } from "react";
import { TranslationProvider } from "@/context/TranslationContext";
import BuildTeamOverviewContent from "@/components/BuildTeamOverviewContent";

export default function LocaleBuildTeamPage({ params }: { params: Promise<{ locale: string }> }) {
  const resolvedParams = use(params);
  const locale = resolvedParams?.locale || "en";

  return (
    <TranslationProvider defaultLocale={locale}>
      <BuildTeamOverviewContent locale={locale} />
    </TranslationProvider>
  );
}
