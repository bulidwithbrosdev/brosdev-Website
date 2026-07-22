const fs = require('fs');
const path = require('path');

const slugs = [
  "healthcare",
  "fintech",
  "manufacturing",
  "construction",
  "logistics",
  "technology",
  "automotive",
  "ecommerce",
  "entertainment-and-media",
  "education-and-e-learning",
  "biotech",
  "retail",
  "insurance",
  "cryptocurrency-exchange",
  "advertising-management",
  "marketplace-development",
  "supply-chain-management",
  "inventory-management",
  "ai-for-underwriting",
  "ai-for-inventory-management",
  "ai-agent-for-sales"
];

const appDir = path.join(__dirname, '..', 'src', 'app');

slugs.forEach(slug => {
  // Non-locale path: src/app/industry/<slug>/page.tsx
  const nonLocaleDir = path.join(appDir, 'industry', slug);
  if (!fs.existsSync(nonLocaleDir)) {
    fs.mkdirSync(nonLocaleDir, { recursive: true });
  }
  const nonLocaleContent = `"use client";

import { INDUSTRY_DATA } from "@/data/industryData";
import IndustryDetailContent from "@/components/IndustryDetailContent";
import { notFound } from "next/navigation";

export default function Page() {
  const industry = INDUSTRY_DATA["${slug}"];
  if (!industry) notFound();
  return <IndustryDetailContent industry={industry} locale="en" />;
}
`;
  fs.writeFileSync(path.join(nonLocaleDir, 'page.tsx'), nonLocaleContent, 'utf8');

  // Locale path: src/app/[locale]/industry/<slug>/page.tsx
  const localeDir = path.join(appDir, '[locale]', 'industry', slug);
  if (!fs.existsSync(localeDir)) {
    fs.mkdirSync(localeDir, { recursive: true });
  }
  const localeContent = `"use client";

import { use } from "react";
import { INDUSTRY_DATA } from "@/data/industryData";
import IndustryDetailContent from "@/components/IndustryDetailContent";
import { TranslationProvider } from "@/context/TranslationContext";
import { notFound } from "next/navigation";

export default function LocalePage({ params }: { params: Promise<{ locale: string }> }) {
  const resolvedParams = use(params);
  const locale = resolvedParams?.locale || "en";
  const industry = INDUSTRY_DATA["${slug}"];
  if (!industry) notFound();

  return (
    <TranslationProvider defaultLocale={locale}>
      <IndustryDetailContent industry={industry} locale={locale} />
    </TranslationProvider>
  );
}
`;
  fs.writeFileSync(path.join(localeDir, 'page.tsx'), localeContent, 'utf8');
});

console.log(`Successfully generated ${slugs.length * 2} industry page files!`);
