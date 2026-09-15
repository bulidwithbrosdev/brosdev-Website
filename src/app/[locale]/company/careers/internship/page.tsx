import type { Metadata } from "next";
import InternshipApplicationContent from "@/components/InternshipApplicationContent";
import { TranslationProvider } from "@/context/TranslationContext";

export const metadata: Metadata = {
  title: "BrosDev Solutions | Engineering Internship Program",
  description:
    "Apply for BrosDev Solutions 6-month hands-on engineering internship program in software development, AI systems, and cloud infrastructure.",
  openGraph: {
    title: "BrosDev Solutions | Engineering Internship Program",
    description:
      "Apply for BrosDev Solutions 6-month hands-on engineering internship program in software development, AI systems, and cloud infrastructure.",
  },
};

export default async function LocaleInternshipApplicationPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const resolvedParams = await params;
  const locale = resolvedParams?.locale || "en";

  return (
    <TranslationProvider defaultLocale={locale}>
      <InternshipApplicationContent locale={locale} />
    </TranslationProvider>
  );
}
