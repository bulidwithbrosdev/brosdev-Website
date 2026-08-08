import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable compression for fast production loading
  compress: true,

  // Enable React Strict Mode
  reactStrictMode: true,

  // Disable X-Powered-By header for security & smaller headers
  poweredByHeader: false,

  // Image optimization
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 86400,
  },

  // Production logging optimization
  logging: {
    fetches: {
      fullUrl: false,
    },
  },

  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-DNS-Prefetch-Control", value: "on" },
          { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), interest-cohort=()" },
        ],
      },
    ];
  },

  async redirects() {
    const locales = "en|us|uk|in|de|fr|es|ca|eu";
    return [
      // STEP 1 — Redirect all /build-team/* URLs to /services/engagement-models (301 Permanent)
      {
        source: `/:locale(${locales})/build-team/:path*`,
        destination: "/:locale/services/engagement-models",
        permanent: true,
      },
      {
        source: `/:locale(${locales})/build-team`,
        destination: "/:locale/services/engagement-models",
        permanent: true,
      },
      {
        source: "/build-team/:path*",
        destination: "/en/services/engagement-models",
        permanent: true,
      },
      {
        source: "/build-team",
        destination: "/en/services/engagement-models",
        permanent: true,
      },

      // STEP 3 — Services Merges (301 Permanent)
      {
        source: `/:locale(${locales})/services/web-development`,
        destination: "/:locale/services/branding-and-web-saas",
        permanent: true,
      },
      {
        source: `/:locale(${locales})/services/mobile-development`,
        destination: "/:locale/services/mobile-app-development",
        permanent: true,
      },
      {
        source: `/:locale(${locales})/services/design-and-product-ux`,
        destination: "/:locale/services/ux-and-design",
        permanent: true,
      },
      {
        source: "/services/web-development",
        destination: "/en/services/branding-and-web-saas",
        permanent: true,
      },
      {
        source: "/services/mobile-development",
        destination: "/en/services/mobile-app-development",
        permanent: true,
      },
      {
        source: "/services/design-and-product-ux",
        destination: "/en/services/ux-and-design",
        permanent: true,
      },

      // STEP 3 — Platform Consolidation into /services/platform-integrations
      ...["ditaworks-webtop", "hubspot", "microsoft-power-apps", "odoo", "opencart", "ovhcloud", "sap-commerce-cloud", "wordpress", "zoho"].flatMap((platform) => [
        {
          source: `/:locale(${locales})/services/${platform}`,
          destination: "/:locale/services/platform-integrations",
          permanent: true,
        },
        {
          source: `/services/${platform}`,
          destination: "/en/services/platform-integrations",
          permanent: true,
        },
      ]),

      // STEP 3 — Industry Consolidations
      ...["cryptocurrency-exchange", "crypto-exchange", "biotech", "entertainment-and-media", "advertising-management"].flatMap((ind) => [
        {
          source: `/:locale(${locales})/industry/${ind}`,
          destination: "/:locale/industry",
          permanent: true,
        },
        {
          source: `/industry/${ind}`,
          destination: "/en/industry",
          permanent: true,
        },
      ]),
      ...["inventory-management", "ai-for-inventory-management"].flatMap((ind) => [
        {
          source: `/:locale(${locales})/industry/${ind}`,
          destination: "/:locale/industry/supply-chain-management",
          permanent: true,
        },
        {
          source: `/industry/${ind}`,
          destination: "/en/industry/supply-chain-management",
          permanent: true,
        },
      ]),
      {
        source: `/:locale(${locales})/industry/ai-for-underwriting`,
        destination: "/:locale/industry/insurance",
        permanent: true,
      },
      {
        source: "/industry/ai-for-underwriting",
        destination: "/en/industry/insurance",
        permanent: true,
      },
      {
        source: `/:locale(${locales})/industry/scoping`,
        destination: "/:locale/book-consultation",
        permanent: true,
      },
      {
        source: "/industry/scoping",
        destination: "/en/book-consultation",
        permanent: true,
      },

      // Form Removals: /cost-calculator and /audit-request (301 Permanent to /book-consultation)
      {
        source: `/:locale(${locales})/cost-calculator`,
        destination: "/:locale/book-consultation",
        permanent: true,
      },
      {
        source: "/cost-calculator",
        destination: "/en/book-consultation",
        permanent: true,
      },
      {
        source: `/:locale(${locales})/audit-request`,
        destination: "/:locale/book-consultation",
        permanent: true,
      },
      {
        source: "/audit-request",
        destination: "/en/book-consultation",
        permanent: true,
      },

      // STEP 3 — Company Consolidations
      {
        source: `/:locale(${locales})/company/onboarding`,
        destination: "/:locale/company/methodology",
        permanent: true,
      },
      {
        source: "/company/onboarding",
        destination: "/en/company/methodology",
        permanent: true,
      },
      {
        source: `/:locale(${locales})/company/comparison`,
        destination: "/:locale/company/methodology",
        permanent: true,
      },
      {
        source: "/company/comparison",
        destination: "/en/company/methodology",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
