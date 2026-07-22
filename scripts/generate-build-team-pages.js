const fs = require('fs');
const path = require('path');

const slugs = [
  "hire-dedicated-developers",
  "hire-ai-ml-developer",
  "hire-mobile-app-developers",
  "hire-full-stack-developers",
  "hire-software-developers",
  "hire-web-developers",
  "hire-web-app-developers",
  "hire-web-designers",
  "hire-digital-marketing-experts",
  "hire-blockchain-developer"
];

const appDir = path.join(__dirname, '..', 'src', 'app');

slugs.forEach(slug => {
  // Non-locale path: src/app/build-team/<slug>/page.tsx
  const nonLocaleDir = path.join(appDir, 'build-team', slug);
  if (!fs.existsSync(nonLocaleDir)) {
    fs.mkdirSync(nonLocaleDir, { recursive: true });
  }
  const nonLocaleContent = `"use client";

import { BUILD_TEAM_DATA } from "@/data/buildTeamData";
import BuildTeamDetailContent from "@/components/BuildTeamDetailContent";
import { notFound } from "next/navigation";

export default function Page() {
  const role = BUILD_TEAM_DATA["${slug}"];
  if (!role) notFound();
  return <BuildTeamDetailContent role={role} locale="en" />;
}
`;
  fs.writeFileSync(path.join(nonLocaleDir, 'page.tsx'), nonLocaleContent, 'utf8');

  // Locale path: src/app/[locale]/build-team/<slug>/page.tsx
  const localeDir = path.join(appDir, '[locale]', 'build-team', slug);
  if (!fs.existsSync(localeDir)) {
    fs.mkdirSync(localeDir, { recursive: true });
  }
  const localeContent = `"use client";

import { use } from "react";
import { BUILD_TEAM_DATA } from "@/data/buildTeamData";
import BuildTeamDetailContent from "@/components/BuildTeamDetailContent";
import { TranslationProvider } from "@/context/TranslationContext";
import { notFound } from "next/navigation";

export default function LocalePage({ params }: { params: Promise<{ locale: string }> }) {
  const resolvedParams = use(params);
  const locale = resolvedParams?.locale || "en";
  const role = BUILD_TEAM_DATA["${slug}"];
  if (!role) notFound();

  return (
    <TranslationProvider defaultLocale={locale}>
      <BuildTeamDetailContent role={role} locale={locale} />
    </TranslationProvider>
  );
}
`;
  fs.writeFileSync(path.join(localeDir, 'page.tsx'), localeContent, 'utf8');
});

console.log(`Successfully generated ${slugs.length * 2} build-team page files!`);
