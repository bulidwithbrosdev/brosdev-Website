import type { Metadata } from "next";
import BookConsultationContent from "@/components/BookConsultationContent";
import { TranslationProvider } from "@/context/TranslationContext";

export const metadata: Metadata = {
  title: "Brosdev | Book Technical Consultation",
  description:
    "Schedule a 1-on-1 strategy session with BrosDev senior software architects. Evaluate technical scope, architecture roadmaps, and dedicated team estimates.",
  openGraph: {
    title: "Brosdev | Book Technical Consultation",
    description:
      "Schedule a 1-on-1 strategy session with BrosDev senior software architects. Evaluate technical scope, architecture roadmaps, and dedicated team estimates.",
  },
};

export default async function LocaleBookConsultationPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const resolvedParams = await params;
  const locale = resolvedParams?.locale || "en";

  return (
    <TranslationProvider defaultLocale={locale}>
      <BookConsultationContent locale={locale} />
    </TranslationProvider>
  );
}
