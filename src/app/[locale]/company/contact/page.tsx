import type { Metadata } from "next";
import ContactContent from "@/components/ContactContent";
import { TranslationProvider } from "@/context/TranslationContext";

export const metadata: Metadata = {
  title: "Brosdev | Contact BrosDev Global Hubs",
  description:
    "Connect with our engineering hubs in India and Canada, serving enterprise clients across AU, UK, NZ, CA, US, DE, FR & NY.",
  openGraph: {
    title: "Brosdev | Contact BrosDev Global Hubs",
    description:
      "Connect with our engineering hubs in India and Canada, serving enterprise clients across AU, UK, NZ, CA, US, DE, FR & NY.",
  },
};

import { redirect } from "next/navigation";

export default async function LocaleCompanyContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const resolvedParams = await params;
  const locale = resolvedParams?.locale || "com";
  redirect(`/${locale}/contact`);
}
