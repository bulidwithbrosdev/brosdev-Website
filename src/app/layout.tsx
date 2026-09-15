import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Roboto_Condensed, Outfit, Geist } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};


const jakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
  display: "swap",
});

const robotoCondensed = Roboto_Condensed({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-roboto-condensed",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-outfit",
  display: "swap",
});

const geist = Geist({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-geist",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://brosdev.site"),
  title: {
    default: "BrosDev Solutions | Next-Gen IT Company & Digital Product Engineering",
    template: "%s",
  },
  description:
    "BrosDev Solutions is a premier IT company specializing in custom software development, enterprise AI workflows, cloud engineering, mobile apps, and dedicated software engineering teams.",
  icons: {
    icon: "/logo.svg",
  },
  keywords: [
    "BrosDev Solutions",
    "Contact BrosDev Solutions",
    "IT Company",
    "Software Agency",
    "Digital Product Engineering",
    "Enterprise AI",
    "Custom Software Development",
    "Hire Software Developers",
    "Full Stack Development",
    "Cloud Architecture",
    "Next.js Development",
    "Mobile App Development",
  ],
  authors: [{ name: "BrosDev Solutions Engineering Team" }],
  creator: "BrosDev Solutions",
  publisher: "BrosDev Solutions",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://brosdev.site",
    siteName: "BrosDev Solutions",
    title: "BrosDev Solutions | Next-Gen IT Company & Digital Product Engineering",
    description:
      "Designing seamless & intuitive digital experiences that engage users and simplify complex tasks effortlessly. Custom Web Apps, Mobile Apps & Enterprise AI.",
    images: [
      {
        url: "/featured-work.png",
        width: 1200,
        height: 630,
        alt: "BrosDev Solutions Digital Product Engineering",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BrosDev Solutions | Next-Gen IT Company & Digital Product Engineering",
    description:
      "BrosDev Solutions delivers high-performance digital product engineering, enterprise AI workflows, and dedicated software development teams.",
    images: ["/featured-work.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://brosdev.site/#organization",
        name: "BrosDev Solutions",
        url: "https://brosdev.site",
        logo: "https://brosdev.site/logo.svg",
        sameAs: [
          "https://github.com/brosdev",
          "https://linkedin.com/company/brosdev",
          "https://twitter.com/brosdev",
        ],
        description:
          "Global IT & product engineering firm delivering enterprise AI, custom cloud software, mobile apps, and dedicated developer teams.",
        address: {
          "@type": "PostalAddress",
          addressLocality: "GIFT City / Ahmedabad",
          addressRegion: "Gujarat",
          addressCountry: "India",
        },
      },
      {
        "@type": "ProfessionalService",
        "@id": "https://brosdev.site/#service",
        name: "BrosDev Solutions Engineering Services",
        url: "https://brosdev.site",
        priceRange: "$$$$",
        address: {
          "@type": "PostalAddress",
          addressLocality: "GIFT City / Ahmedabad",
          addressRegion: "Gujarat",
          addressCountry: "India",
        },
        areaServed: ["IN", "CA", "AU", "UK", "NZ", "US", "NY", "DE", "FR"],
      },
      {
        "@type": "WebSite",
        "@id": "https://brosdev.site/#website",
        url: "https://brosdev.site",
        name: "BrosDev Solutions",
        publisher: { "@id": "https://brosdev.site/#organization" },
      },
    ],
  };

  return (
    <html
      lang="en"
      className={`${jakartaSans.variable} ${robotoCondensed.variable} ${outfit.variable} ${geist.variable} scroll-smooth antialiased`}
    >
      <body className="min-h-screen bg-white text-slate-900 font-sans selection:bg-[#A90706] selection:text-white">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
