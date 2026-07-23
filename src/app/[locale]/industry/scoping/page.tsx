import type { Metadata } from "next";
import IndustryScopingContent from "@/components/IndustryScopingContent";
import { TranslationProvider } from "@/context/TranslationContext";

export const metadata: Metadata = {
  title: "Brosdev | Request Industry Scoping & Domain Solution Analysis",
  description:
    "Request detailed technical scoping and compliance auditing for your industry domain with BrosDev principal software architects.",
  openGraph: {
    title: "Brosdev | Request Industry Scoping & Domain Solution Analysis",
    description:
      "Request detailed technical scoping and compliance auditing for your industry domain with BrosDev principal software architects.",
  },
};

export default async function LocaleIndustryScopingPage({ params }: { params: Promise<{ locale: string }> }) {
  const resolvedParams = await params;
  const locale = resolvedParams?.locale || "en";

  return (
    <TranslationProvider defaultLocale={locale}>
      <IndustryScopingContent locale={locale} />
    </TranslationProvider>
  );
}
