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
};

export default nextConfig;
