import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://brosdev.site";
  const locales = ["en", "de", "fr", "es", "hi"];

  const mainPages = [
    "",
    "/contact",
    "/company/about-us",
    "/company/careers",
    "/company/team",
    "/company/methodology",
    "/company/infrastructure",
    "/company/certifications",
    "/company/alliances",
    "/services",
    "/products",
    "/industry",
    "/build-team",
    "/insights",
    "/book-consultation",
    "/terms",
    "/privacy-policy",
  ];

  const services = [
    "digital-product-engineering",
    "legacy-software-modernization",
    "mvp-development",
    "saas-development",
    "iot-development",
    "cloud-computing",
    "support-and-maintenance",
    "mobile-app-development",
    "enterprise-ai-and-content",
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
  ];

  const industries = [
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
    "ai-agent-for-sales",
  ];

  const buildTeamRoles = [
    "hire-dedicated-developers",
    "hire-ai-ml-developer",
    "hire-mobile-app-developers",
    "hire-full-stack-developers",
    "hire-software-developers",
    "hire-web-developers",
    "hire-web-app-developers",
    "hire-web-designers",
    "hire-digital-marketing-experts",
    "hire-blockchain-developer",
  ];

  const products = [
    "omniflow-ai-engine",
    "apexpay-fintech-core",
    "novacloud-kubernetes",
    "scalestack-ai-crm",
  ];

  const routes: MetadataRoute.Sitemap = [];

  locales.forEach((locale) => {
    mainPages.forEach((page) => {
      routes.push({
        url: `${baseUrl}/${locale}${page}`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: page === "" ? 1.0 : 0.8,
      });
    });

    services.forEach((slug) => {
      routes.push({
        url: `${baseUrl}/${locale}/services/${slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.7,
      });
    });

    industries.forEach((slug) => {
      routes.push({
        url: `${baseUrl}/${locale}/industry/${slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.7,
      });
    });

    buildTeamRoles.forEach((slug) => {
      routes.push({
        url: `${baseUrl}/${locale}/build-team/${slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.7,
      });
    });

    products.forEach((slug) => {
      routes.push({
        url: `${baseUrl}/${locale}/products/${slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.7,
      });
    });
  });

  return routes;
}
