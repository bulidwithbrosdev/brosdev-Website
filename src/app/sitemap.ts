import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://brosdev.site";
  const locales = ["com", "en", "us", "uk", "in", "de", "fr", "es", "ca", "eu"];

  const mainPages = [
    "",
    "/contact",
    "/company/about-us",
    "/company/careers",
    "/company/team",
    "/company/methodology",
    "/company/infrastructure",
    "/company/partners",
    "/company/alliances",
    "/services",
    "/products",
    "/industry",
    "/case-studies",
    "/insights",
    "/book-consultation",
    "/terms",
    "/privacy-policy",
  ];

  const services = [
    "digital-product-engineering",
    "engagement-models",
    "platform-integrations",
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
    "devops-as-a-service",
    "ux-and-design",
    "branding-and-web-saas",
    "amazon-web-services",
    "microsoft-azure",
    "google-cloud",
    "shopify",
    "custom-ai-development",
    "ai-automation",
    "ai-agents-and-multi-agents",
    "data-and-analytics",
    "n8n",
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
    "education-and-e-learning",
    "retail",
    "insurance",
    "marketplace-development",
    "supply-chain-management",
    "ai-agent-for-sales",
  ];

  const caseStudies = [
    "apexpay-fintech-core",
    "omniflow-ai-enterprise-saas",
    "novacloud-kubernetes-orchestration",
    "scalestack-ai-crm",
    "headless-shopify-conversion",
    "hipaa-telehealth-webrtc",
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

    caseStudies.forEach((slug) => {
      routes.push({
        url: `${baseUrl}/${locale}/case-studies/${slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.8,
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
