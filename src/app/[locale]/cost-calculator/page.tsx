import type { Metadata } from "next";
import CostCalculatorContent from "@/components/CostCalculatorContent";
import { TranslationProvider } from "@/context/TranslationContext";

export const metadata: Metadata = {
  title: "Brosdev | Interactive Squad & Project Cost Estimator",
  description:
    "Calculate your custom software engineering squad budget in under 60 seconds with Brosdev interactive cost estimator tool.",
  openGraph: {
    title: "Brosdev | Interactive Squad & Project Cost Estimator",
    description:
      "Calculate your custom software engineering squad budget in under 60 seconds with Brosdev interactive cost estimator tool.",
  },
};

export default async function LocaleCostCalculatorPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const resolvedParams = await params;
  const locale = resolvedParams?.locale || "en";

  return (
    <TranslationProvider defaultLocale={locale}>
      <CostCalculatorContent />
    </TranslationProvider>
  );
}
