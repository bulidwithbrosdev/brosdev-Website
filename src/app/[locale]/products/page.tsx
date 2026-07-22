"use client";

import { use } from "react";
import { TranslationProvider } from "@/context/TranslationContext";
import ProductsOverviewContent from "@/components/ProductsOverviewContent";

export default function LocaleProductsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const resolvedParams = use(params);
  const locale = resolvedParams?.locale || "en";

  return (
    <TranslationProvider defaultLocale={locale}>
      <ProductsOverviewContent locale={locale} />
    </TranslationProvider>
  );
}
