import type { Metadata } from "next";
import { PRODUCTS_DATA } from "@/data/productsData";
import { TranslationProvider } from "@/context/TranslationContext";
import ProductDetailContent from "@/components/ProductDetailContent";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const resolvedParams = await params;
  const slug = resolvedParams?.slug;
  const product = PRODUCTS_DATA.find((p) => p.slug === slug);

  const name = product?.name || "OmniFlow AI Engine";
  const title = `Brosdev | ${name}`;
  const desc = product?.shortDesc || product?.description || "BrosDev enterprise software product.";

  return {
    title,
    description: desc,
    openGraph: {
      title,
      description: desc,
    },
  };
}

export default async function LocaleProductDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const resolvedParams = await params;
  const locale = resolvedParams?.locale || "en";
  const slug = resolvedParams?.slug || "omniflow-ai-engine";

  return (
    <TranslationProvider defaultLocale={locale}>
      <ProductDetailContent slug={slug} locale={locale} />
    </TranslationProvider>
  );
}
