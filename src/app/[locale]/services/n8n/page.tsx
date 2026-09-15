import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SERVICES_DATA } from "@/data/servicesData";
import ServiceDetailContent from "@/components/ServiceDetailContent";
import { TranslationProvider } from "@/context/TranslationContext";

const slug = "n8n";
const service = SERVICES_DATA[slug];

export const metadata: Metadata = {
  title: service ? "BrosDev Solutions | " + service.title : "BrosDev Solutions | Services",
  description: service?.heroDesc || service?.tagline || "BrosDev Solutions N8N integration and automation services.",
  openGraph: {
    title: service ? "BrosDev Solutions | " + service.title : "BrosDev Solutions | Services",
    description: service?.heroDesc || service?.tagline || "BrosDev Solutions N8N integration and automation services.",
  },
};

export default async function LocalePage({ params }: { params: Promise<{ locale: string }> }) {
  const resolvedParams = await params;
  const locale = resolvedParams?.locale || "en";
  if (!service) notFound();

  return (
    <TranslationProvider defaultLocale={locale}>
      <ServiceDetailContent service={service} locale={locale} />
    </TranslationProvider>
  );
}
