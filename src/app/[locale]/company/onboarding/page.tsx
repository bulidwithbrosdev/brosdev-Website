import type { Metadata } from "next";
import OnboardingContent from "@/components/OnboardingContent";
import { TranslationProvider } from "@/context/TranslationContext";

export const metadata: Metadata = {
  title: "Brosdev | Client Onboarding & Engagement Process",
  description:
    "Discover Brosdev Day 1 to Day 14 client onboarding journey, 2-week risk-free trial guarantee, and SLA standards.",
  openGraph: {
    title: "Brosdev | Client Onboarding & Engagement Process",
    description:
      "Discover Brosdev Day 1 to Day 14 client onboarding journey, 2-week risk-free trial guarantee, and SLA standards.",
  },
};

export default async function LocaleOnboardingPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const resolvedParams = await params;
  const locale = resolvedParams?.locale || "en";

  return (
    <TranslationProvider defaultLocale={locale}>
      <OnboardingContent />
    </TranslationProvider>
  );
}
