import type { Metadata } from "next";
import PrivacyContent from "@/components/PrivacyContent";
import { TranslationProvider } from "@/context/TranslationContext";

export const metadata: Metadata = {
  title: "BrosDev Solutions | Privacy Policy",
  description:
    "Learn about BrosDev Solutions data protection policies, GDPR & CCPA compliance, enterprise security encryption standards, and zero data selling guarantees.",
  openGraph: {
    title: "BrosDev Solutions | Privacy Policy",
    description:
      "Learn about BrosDev Solutions data protection policies, GDPR & CCPA compliance, enterprise security encryption standards, and zero data selling guarantees.",
  },
};

export default async function LocalePrivacyPage({ params }: { params: Promise<{ locale: string }> }) {
  const resolvedParams = await params;
  const locale = resolvedParams?.locale || "en";

  return (
    <TranslationProvider defaultLocale={locale}>
      <PrivacyContent />
    </TranslationProvider>
  );
}
