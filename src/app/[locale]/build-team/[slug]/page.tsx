"use client";

import { use } from "react";
import { notFound } from "next/navigation";
import { BUILD_TEAM_DATA } from "@/data/buildTeamData";
import BuildTeamDetailContent from "@/components/BuildTeamDetailContent";
import { TranslationProvider } from "@/context/TranslationContext";

export default function LocaleBuildTeamSlugPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const resolvedParams = use(params);
  const locale = resolvedParams?.locale || "en";
  const slug = resolvedParams?.slug;

  const role = BUILD_TEAM_DATA[slug];

  if (!role) {
    notFound();
  }

  return (
    <TranslationProvider defaultLocale={locale}>
      <BuildTeamDetailContent role={role} locale={locale} />
    </TranslationProvider>
  );
}
