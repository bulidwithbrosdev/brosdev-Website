import type { Metadata } from "next";
import AuditRequestContent from "@/components/AuditRequestContent";
import { TranslationProvider } from "@/context/TranslationContext";

export const metadata: Metadata = {
  title: "Brosdev | Free Architecture & Code Security Audit",
  description:
    "Request a complimentary 10-point technical, security, and cloud cost audit from Brosdev principal software architects.",
  openGraph: {
    title: "Brosdev | Free Architecture & Code Security Audit",
    description:
      "Request a complimentary 10-point technical, security, and cloud cost audit from Brosdev principal software architects.",
  },
};

export default async function LocaleAuditRequestPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const resolvedParams = await params;
  const locale = resolvedParams?.locale || "en";

  return (
    <TranslationProvider defaultLocale={locale}>
      <AuditRequestContent />
    </TranslationProvider>
  );
}
