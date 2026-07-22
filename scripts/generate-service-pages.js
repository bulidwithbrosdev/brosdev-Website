const fs = require('fs');
const path = require('path');

const slugs = [
  "digital-product-engineering",
  "legacy-software-modernization",
  "mvp-development",
  "saas-development",
  "iot-development",
  "cloud-computing",
  "support-and-maintenance",
  "custom-software-development",
  "enterprise-automation",
  "web-development",
  "mobile-development",
  "devops-as-a-service",
  "quality-assurance",
  "business-analysis",
  "ux-and-design",
  "branding-and-web-saas",
  "design-and-product-ux",
  "mobile-app-development",
  "enterprise-ai-and-content",
  "ditaworks-webtop",
  "sap-commerce-cloud",
  "odoo",
  "hubspot",
  "zoho",
  "shopify",
  "wordpress",
  "opencart",
  "microsoft-power-apps",
  "microsoft-azure",
  "amazon-web-services",
  "google-cloud",
  "ovhcloud"
];

const appDir = path.join(__dirname, '..', 'src', 'app');

slugs.forEach(slug => {
  // Non-locale path: src/app/services/<slug>/page.tsx
  const nonLocaleDir = path.join(appDir, 'services', slug);
  if (!fs.existsSync(nonLocaleDir)) {
    fs.mkdirSync(nonLocaleDir, { recursive: true });
  }
  const nonLocaleContent = `"use client";

import { SERVICES_DATA } from "@/data/servicesData";
import ServiceDetailContent from "@/components/ServiceDetailContent";
import { notFound } from "next/navigation";

export default function Page() {
  const service = SERVICES_DATA["${slug}"];
  if (!service) notFound();
  return <ServiceDetailContent service={service} locale="en" />;
}
`;
  fs.writeFileSync(path.join(nonLocaleDir, 'page.tsx'), nonLocaleContent, 'utf8');

  // Locale path: src/app/[locale]/services/<slug>/page.tsx
  const localeDir = path.join(appDir, '[locale]', 'services', slug);
  if (!fs.existsSync(localeDir)) {
    fs.mkdirSync(localeDir, { recursive: true });
  }
  const localeContent = `"use client";

import { use } from "react";
import { SERVICES_DATA } from "@/data/servicesData";
import ServiceDetailContent from "@/components/ServiceDetailContent";
import { TranslationProvider } from "@/context/TranslationContext";
import { notFound } from "next/navigation";

export default function LocalePage({ params }: { params: Promise<{ locale: string }> }) {
  const resolvedParams = use(params);
  const locale = resolvedParams?.locale || "en";
  const service = SERVICES_DATA["${slug}"];
  if (!service) notFound();

  return (
    <TranslationProvider defaultLocale={locale}>
      <ServiceDetailContent service={service} locale={locale} />
    </TranslationProvider>
  );
}
`;
  fs.writeFileSync(path.join(localeDir, 'page.tsx'), localeContent, 'utf8');
});

console.log(`Successfully generated ${slugs.length * 2} service page files!`);
