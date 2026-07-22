"use client";

import { use } from "react";
import { BUILD_TEAM_DATA } from "@/data/buildTeamData";
import BuildTeamDetailContent from "@/components/BuildTeamDetailContent";
import { TranslationProvider } from "@/context/TranslationContext";
import { notFound } from "next/navigation";

export default function LocalePage({ params }: { params: Promise<{ locale: string }> }) {
  const resolvedParams = use(params);
  const locale = resolvedParams?.locale || "en";
  const role = BUILD_TEAM_DATA["hire-full-stack-developers"];
  if (!role) notFound();

  return (
    <TranslationProvider defaultLocale={locale}>
      <BuildTeamDetailContent role={role} locale={locale} />
    </TranslationProvider>
  );
}
