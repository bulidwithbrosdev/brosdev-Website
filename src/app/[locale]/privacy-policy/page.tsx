import type { Metadata } from "next";
import PrivacyContent from "@/components/PrivacyContent";
import { TranslationProvider } from "@/context/TranslationContext";

export const metadata: Metadata = {
  title: "Brosdev | Privacy Policy",
  description:
    "Learn about BrosDev data protection policies, GDPR & CCPA compliance, enterprise security encryption standards, and zero data selling guarantees.",
  openGraph: {
    title: "Brosdev | Privacy Policy",
    description:
      "Learn about BrosDev data protection policies, GDPR & CCPA compliance, enterprise security encryption standards, and zero data selling guarantees.",
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
