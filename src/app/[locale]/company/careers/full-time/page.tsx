import type { Metadata } from "next";
import FullTimeCareersContent from "@/components/FullTimeCareersContent";
import { TranslationProvider } from "@/context/TranslationContext";

export const metadata: Metadata = {
  title: "Brosdev | Full-Time Engineering Careers",
  description:
    "Explore full-time engineering positions at BrosDev: Senior Full Stack Developers, AI/ML Engineers, Cloud Architects, and DevOps leads.",
  openGraph: {
    title: "Brosdev | Full-Time Engineering Careers",
    description:
      "Explore full-time engineering positions at BrosDev: Senior Full Stack Developers, AI/ML Engineers, Cloud Architects, and DevOps leads.",
  },
};

export default async function LocaleFullTimeCareersPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const resolvedParams = await params;
  const locale = resolvedParams?.locale || "en";

  return (
    <TranslationProvider defaultLocale={locale}>
      <FullTimeCareersContent locale={locale} />
    </TranslationProvider>
  );
}
