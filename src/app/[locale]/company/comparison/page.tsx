import type { Metadata } from "next";
import ComparisonContent from "@/components/ComparisonContent";
import { TranslationProvider } from "@/context/TranslationContext";

export const metadata: Metadata = {
  title: "Brosdev vs Traditional Agencies vs Freelancers",
  description:
    "Discover why enterprise leaders choose Brosdev dedicated software engineering squads over traditional offshore agencies and freelancers.",
  openGraph: {
    title: "Brosdev vs Traditional Agencies vs Freelancers",
    description:
      "Discover why enterprise leaders choose Brosdev dedicated software engineering squads over traditional offshore agencies and freelancers.",
  },
};

export default async function LocaleComparisonPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const resolvedParams = await params;
  const locale = resolvedParams?.locale || "en";

  return (
    <TranslationProvider defaultLocale={locale}>
      <ComparisonContent />
    </TranslationProvider>
  );
}
