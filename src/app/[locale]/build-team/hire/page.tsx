import type { Metadata } from "next";
import HireDeveloperContent from "@/components/HireDeveloperContent";
import { TranslationProvider } from "@/context/TranslationContext";

export const metadata: Metadata = {
  title: "Brosdev | Hire Dedicated Software Developers & Engineering Teams",
  description:
    "Hire pre-screened software engineers, full-stack developers, AI architects, and mobile developers with dynamic engagement rates.",
  openGraph: {
    title: "Brosdev | Hire Dedicated Software Developers & Engineering Teams",
    description:
      "Hire pre-screened software engineers, full-stack developers, AI architects, and mobile developers with dynamic engagement rates.",
  },
};

export default async function LocaleHireDeveloperPage({ params }: { params: Promise<{ locale: string }> }) {
  const resolvedParams = await params;
  const locale = resolvedParams?.locale || "en";

  return (
    <TranslationProvider defaultLocale={locale}>
      <HireDeveloperContent locale={locale} />
    </TranslationProvider>
  );
}
