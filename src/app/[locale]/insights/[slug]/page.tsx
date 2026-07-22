import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { INSIGHTS_DATA } from "@/data/insightsData";
import InsightDetailContent from "@/components/InsightDetailContent";
import { TranslationProvider } from "@/context/TranslationContext";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const resolvedParams = await params;
  const slug = resolvedParams?.slug;
  const insight = INSIGHTS_DATA[slug];

  if (!insight) {
    return {
      title: "Brosdev | Insight Not Found",
    };
  }

  const title = `Brosdev | ${insight.title}`;
  return {
    title,
    description: insight.summary || insight.subtitle,
    openGraph: {
      title,
      description: insight.summary || insight.subtitle,
    },
  };
}

export default async function LocaleInsightSlugPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const resolvedParams = await params;
  const locale = resolvedParams?.locale || "en";
  const slug = resolvedParams?.slug;

  const insight = INSIGHTS_DATA[slug];

  if (!insight) {
    notFound();
  }

  return (
    <TranslationProvider defaultLocale={locale}>
      <InsightDetailContent insight={insight} locale={locale} />
    </TranslationProvider>
  );
}
