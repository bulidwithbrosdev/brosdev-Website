"use client";

import { use } from "react";
import { SERVICES_DATA } from "@/data/servicesData";
import ServiceDetailContent from "@/components/ServiceDetailContent";
import { TranslationProvider } from "@/context/TranslationContext";
import { notFound } from "next/navigation";

export default function LocalePage({ params }: { params: Promise<{ locale: string }> }) {
  const resolvedParams = use(params);
  const locale = resolvedParams?.locale || "en";
  const service = SERVICES_DATA["sap-commerce-cloud"];
  if (!service) notFound();

  return (
    <TranslationProvider defaultLocale={locale}>
      <ServiceDetailContent service={service} locale={locale} />
    </TranslationProvider>
  );
}
