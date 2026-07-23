import type { Metadata } from "next";
import CaseStudiesContent from "@/components/CaseStudiesContent";
import { TranslationProvider } from "@/context/TranslationContext";

export const metadata: Metadata = {
  title: "Brosdev | Enterprise Case Studies & Client ROI",
  description:
    "Explore how Brosdev dedicated engineering squads deliver sub-second performance, cloud cost reductions, and zero-downtime platforms.",
  openGraph: {
    title: "Brosdev | Enterprise Case Studies & Client ROI",
    description:
      "Explore how Brosdev dedicated engineering squads deliver sub-second performance, cloud cost reductions, and zero-downtime platforms.",
  },
};

export default async function LocaleCaseStudiesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const resolvedParams = await params;
  const locale = resolvedParams?.locale || "en";

  return (
    <TranslationProvider defaultLocale={locale}>
      <CaseStudiesContent />
    </TranslationProvider>
  );
}
