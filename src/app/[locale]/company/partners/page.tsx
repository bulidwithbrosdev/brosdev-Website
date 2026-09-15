import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { TranslationProvider } from "@/context/TranslationContext";
import PartnersContent from "@/components/PartnersContent";

export const metadata: Metadata = {
  title: "BrosDev Solutions | Partners & Collaborations",
  description:
    "BrosDev Solutions IT Engineering Studio collaborates with IT companies, software development teams, digital agencies, technology providers, and specialized technical teams to build better digital products together.",
  openGraph: {
    title: "BrosDev Solutions | Partners & Collaborations",
    description:
      "BrosDev Solutions IT Engineering Studio collaborates with IT companies, software development teams, digital agencies, technology providers, and specialized technical teams.",
  },
};

export default async function LocalePartnersPage({ params }: { params: Promise<{ locale: string }> }) {
  const resolvedParams = await params;
  const locale = resolvedParams?.locale || "en";

  return (
    <TranslationProvider defaultLocale={locale}>
      <PartnersContent locale={locale} />
    </TranslationProvider>
  );
}
