import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable compression for production
  compress: true,

  // Image optimization
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 86400,
  },

  // Production logging
  logging: {
    fetches: {
      fullUrl: false,
    },
  },
};

export default nextConfig;
