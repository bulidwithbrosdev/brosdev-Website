import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
      {
        userAgent: [
          "GPTBot",
          "ChatGPT-User",
          "ClaudeBot",
          "Google-Extended",
          "PerplexityBot",
          "Bytespider",
          "CCBot",
        ],
        allow: "/",
      },
    ],
    sitemap: "https://brosdev.com/sitemap.xml",
  };
}
