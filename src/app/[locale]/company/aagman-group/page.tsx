import type { Metadata } from "next";
import { TranslationProvider } from "@/context/TranslationContext";
import AagmanGroupContent from "@/components/AagmanGroupContent";

export const metadata: Metadata = {
  title: "Aagman Group | Building Businesses. Creating What's Next.",
  description:
    "Aagman Group is a growing business group focused on building, developing, and supporting ambitious companies across technology, digital products, consumer brands, and emerging industries.",
  openGraph: {
    title: "Aagman Group | Building Businesses. Creating What's Next.",
    description:
      "Aagman Group is a growing business group focused on building, developing, and supporting ambitious companies across technology, digital products, consumer brands, and emerging industries.",
  },
};

export default async function AagmanGroupPage({ params }: { params: Promise<{ locale: string }> }) {
  const resolvedParams = await params;
  const locale = resolvedParams?.locale || "en";

  return (
    <TranslationProvider defaultLocale={locale}>
      <AagmanGroupContent locale={locale} />
    </TranslationProvider>
  );
}
