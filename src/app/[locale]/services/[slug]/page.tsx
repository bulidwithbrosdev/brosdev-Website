import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SERVICES_DATA } from "@/data/servicesData";
import ServiceDetailContent from "@/components/ServiceDetailContent";
import { TranslationProvider } from "@/context/TranslationContext";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const resolvedParams = await params;
  const slug = resolvedParams?.slug;
  const service = SERVICES_DATA[slug];

  if (!service) {
    return {
      title: "BrosDev Solutions | Service Not Found",
    };
  }

  const title = `BrosDev Solutions | ${service.title}`;
  return {
    title,
    description: service.heroDesc || service.tagline,
    openGraph: {
      title,
      description: service.heroDesc || service.tagline,
    },
  };
}

export default async function LocaleServiceSlugPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const resolvedParams = await params;
  const locale = resolvedParams?.locale || "en";
  const slug = resolvedParams?.slug;

  const service = SERVICES_DATA[slug];

  if (!service) {
    notFound();
  }

  return (
    <TranslationProvider defaultLocale={locale}>
      <ServiceDetailContent service={service} locale={locale} />
    </TranslationProvider>
  );
}
