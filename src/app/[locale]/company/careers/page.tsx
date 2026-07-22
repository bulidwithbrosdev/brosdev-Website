import type { Metadata } from "next";
import CareersContent from "@/components/CareersContent";
import { TranslationProvider } from "@/context/TranslationContext";

export const metadata: Metadata = {
  title: "Brosdev | Careers & Open Engineering Roles",
  description:
    "Join BrosDev global technology team. Explore open engineering, UI/UX design, and AI development positions in India and remotely.",
  openGraph: {
    title: "Brosdev | Careers & Open Engineering Roles",
    description:
      "Join BrosDev global technology team. Explore open engineering, UI/UX design, and AI development positions in India and remotely.",
  },
};

export default async function LocaleCareersPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const resolvedParams = await params;
  const locale = resolvedParams?.locale || "en";

  return (
    <TranslationProvider defaultLocale={locale}>
      <CareersContent locale={locale} />
    </TranslationProvider>
  );
}
