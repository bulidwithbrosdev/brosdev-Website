import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BUILD_TEAM_DATA } from "@/data/buildTeamData";
import BuildTeamDetailContent from "@/components/BuildTeamDetailContent";
import { TranslationProvider } from "@/context/TranslationContext";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const resolvedParams = await params;
  const slug = resolvedParams?.slug;
  const role = BUILD_TEAM_DATA[slug];

  if (!role) {
    return {
      title: "Brosdev | Role Not Found",
    };
  }

  const title = `Brosdev | ${role.title}`;
  const desc = role.heroDesc || role.title;
  return {
    title,
    description: desc,
    openGraph: {
      title,
      description: desc,
    },
  };
}

export default async function LocaleBuildTeamSlugPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const resolvedParams = await params;
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
