import type { Metadata } from "next";
import ContactContent from "@/components/ContactContent";
import { TranslationProvider } from "@/context/TranslationContext";

export const metadata: Metadata = {
  title: "Brosdev | Contact BrosDev",
  description:
    "Connect with our global offices in USA, Germany, France, Canada, UK, and India for technical project inquiries.",
  openGraph: {
    title: "Brosdev | Contact BrosDev",
    description:
      "Connect with our global offices in USA, Germany, France, Canada, UK, and India for technical project inquiries.",
  },
};

export default async function LocaleCompanyContactPage({
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
