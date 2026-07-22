"use client";

import { use } from "react";
import { notFound } from "next/navigation";
import { SERVICES_DATA } from "@/data/servicesData";
import ServiceDetailContent from "@/components/ServiceDetailContent";
import { TranslationProvider } from "@/context/TranslationContext";

export default function LocaleServiceSlugPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const resolvedParams = use(params);
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
