import type { Metadata } from "next";
import ServicesOverviewContent from "@/components/ServicesOverviewContent";
import { TranslationProvider } from "@/context/TranslationContext";

export const metadata: Metadata = {
  title: "Brosdev | Software Engineering Services",
  description:
    "Explore BrosDev end-to-end IT services: digital product engineering, legacy modernization, SaaS development, enterprise AI, cloud architecture, and DevOps.",
  openGraph: {
    title: "Brosdev | Software Engineering Services",
    description:
      "Explore BrosDev end-to-end IT services: digital product engineering, legacy modernization, SaaS development, enterprise AI, cloud architecture, and DevOps.",
  },
};

export default async function LocaleServicesPage({ params }: { params: Promise<{ locale: string }> }) {
  const resolvedParams = await params;
  const locale = resolvedParams?.locale || "en";

  return (
    <TranslationProvider defaultLocale={locale}>
      <ServicesOverviewContent locale={locale} />
    </TranslationProvider>
  );
}
