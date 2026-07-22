import type { Metadata } from "next";
import TermsContent from "@/components/TermsContent";
import { TranslationProvider } from "@/context/TranslationContext";

export const metadata: Metadata = {
  title: "Brosdev | Terms & Conditions",
  description:
    "Review BrosDev legal terms, Master Services Agreement standards, intellectual property code transfer rights, and sprint delivery commitments.",
  openGraph: {
    title: "Brosdev | Terms & Conditions",
    description:
      "Review BrosDev legal terms, Master Services Agreement standards, intellectual property code transfer rights, and sprint delivery commitments.",
  },
};

export default async function LocaleTermsPage({ params }: { params: Promise<{ locale: string }> }) {
  const resolvedParams = await params;
  const locale = resolvedParams?.locale || "en";

  return (
    <TranslationProvider defaultLocale={locale}>
      <TermsContent />
    </TranslationProvider>
  );
}
