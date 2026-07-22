const fs = require('fs');
const path = require('path');

const slugs = [
  "omniflow-ai-enterprise-saas",
  "apexpay-fintech-core",
  "novacloud-kubernetes-orchestration",
  "scalestack-ai-crm",
  "headless-shopify-conversion",
  "hipaa-telehealth-webrtc"
];

const appDir = path.join(__dirname, '..', 'src', 'app');

slugs.forEach(slug => {
  // Non-locale path: src/app/insights/<slug>/page.tsx
  const nonLocaleDir = path.join(appDir, 'insights', slug);
  if (!fs.existsSync(nonLocaleDir)) {
    fs.mkdirSync(nonLocaleDir, { recursive: true });
  }
  const nonLocaleContent = `"use client";

import { INSIGHTS_DATA } from "@/data/insightsData";
import InsightDetailContent from "@/components/InsightDetailContent";
import { notFound } from "next/navigation";

export default function Page() {
  const insight = INSIGHTS_DATA["${slug}"];
  if (!insight) notFound();
  return <InsightDetailContent insight={insight} locale="en" />;
}
`;
  fs.writeFileSync(path.join(nonLocaleDir, 'page.tsx'), nonLocaleContent, 'utf8');

  // Locale path: src/app/[locale]/insights/<slug>/page.tsx
  const localeDir = path.join(appDir, '[locale]', 'insights', slug);
  if (!fs.existsSync(localeDir)) {
    fs.mkdirSync(localeDir, { recursive: true });
  }
  const localeContent = `"use client";

import { use } from "react";
import { INSIGHTS_DATA } from "@/data/insightsData";
import InsightDetailContent from "@/components/InsightDetailContent";
import { TranslationProvider } from "@/context/TranslationContext";
import { notFound } from "next/navigation";

export default function LocalePage({ params }: { params: Promise<{ locale: string }> }) {
  const resolvedParams = use(params);
  const locale = resolvedParams?.locale || "en";
  const insight = INSIGHTS_DATA["${slug}"];
  if (!insight) notFound();

  return (
    <TranslationProvider defaultLocale={locale}>
      <InsightDetailContent insight={insight} locale={locale} />
    </TranslationProvider>
  );
}
`;
  fs.writeFileSync(path.join(localeDir, 'page.tsx'), localeContent, 'utf8');
});

console.log(`Successfully generated ${slugs.length * 2} insights page files!`);
