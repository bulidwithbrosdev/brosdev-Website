"use client";

import { use } from "react";
import { TranslationProvider } from "@/context/TranslationContext";
import ProductDetailContent from "@/components/ProductDetailContent";

export default function LocaleProductDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const resolvedParams = use(params);
  const locale = resolvedParams?.locale || "en";
  const slug = resolvedParams?.slug || "omniflow-ai-engine";

  return (
    <TranslationProvider defaultLocale={locale}>
      <ProductDetailContent slug={slug} locale={locale} />
    </TranslationProvider>
  );
}
