import type { Metadata } from "next";
import ContactContent from "@/components/ContactContent";
import { TranslationProvider } from "@/context/TranslationContext";

export const metadata: Metadata = {
  title: "BrosDev Solutions | Contact BrosDev Solutions",
  description:
    "Get in touch with BrosDev Solutions technical architects for custom software engineering, AI workflow automation, and dedicated developer team inquiries.",
  openGraph: {
    title: "BrosDev Solutions | Contact BrosDev Solutions",
    description:
      "Get in touch with BrosDev Solutions technical architects for custom software engineering, AI workflow automation, and dedicated developer team inquiries.",
  },
};

export default async function LocaleContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const resolvedParams = await params;
  const locale = resolvedParams?.locale || "en";

  return (
    <TranslationProvider defaultLocale={locale}>
      <ContactContent locale={locale} />
    </TranslationProvider>
  );
}
