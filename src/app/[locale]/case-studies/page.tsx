import type { Metadata } from "next";
import CaseStudiesContent from "@/components/CaseStudiesContent";
import { TranslationProvider } from "@/context/TranslationContext";

export const metadata: Metadata = {
  title: "BrosDev Solutions | Enterprise Case Studies & Client ROI",
  description:
    "Explore how BrosDev Solutions dedicated engineering squads deliver sub-second performance, cloud cost reductions, and zero-downtime platforms.",
  openGraph: {
    title: "BrosDev Solutions | Enterprise Case Studies & Client ROI",
    description:
      "Explore how BrosDev Solutions dedicated engineering squads deliver sub-second performance, cloud cost reductions, and zero-downtime platforms.",
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
