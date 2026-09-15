import type { Metadata } from "next";
import { TranslationProvider } from "@/context/TranslationContext";
import ProductsOverviewContent from "@/components/ProductsOverviewContent";

export const metadata: Metadata = {
  title: "BrosDev Solutions | Enterprise AI & SaaS Products",
  description:
    "Discover BrosDev Solutions proprietary enterprise AI engines, fintech digital payment cores, Kubernetes cloud orchestrators, and AI sales SDR CRM systems.",
  openGraph: {
    title: "BrosDev Solutions | Enterprise AI & SaaS Products",
    description:
      "Discover BrosDev Solutions proprietary enterprise AI engines, fintech digital payment cores, Kubernetes cloud orchestrators, and AI sales SDR CRM systems.",
  },
};

export default async function LocaleProductsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const resolvedParams = await params;
  const locale = resolvedParams?.locale || "en";

  return (
    <TranslationProvider defaultLocale={locale}>
      <ProductsOverviewContent locale={locale} />
    </TranslationProvider>
  );
}
