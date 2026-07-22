"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useTranslation } from "@/context/TranslationContext";

interface ServicesProps {
  onBookCallClick: () => void;
}

export default function ServicesSection({ onBookCallClick }: ServicesProps) {
  const { locale } = useTranslation();

  const servicesGrid = [
    {
      id: "01",
      slug: "branding-and-web-saas",
      title: "BRANDING & WEB SAAS",
      desc: "Full-stack cloud applications built with Next.js, React, and TypeScript. Optimized for sub-second load times.",
      icon: (
        <svg viewBox="0 0 40 40" fill="none" className="w-9 h-9 stroke-slate-900 stroke-[1.5]">
          <circle cx="20" cy="20" r="16" strokeDasharray="3 3" />
          <circle cx="20" cy="20" r="10" />
          <circle cx="20" cy="20" r="4" />
        </svg>
      ),
    },
    {
      id: "02",
      slug: "design-and-product-ux",
      title: "DESIGN & PRODUCT UX",
      desc: "Conversion-focused digital design systems, Figma wireframes, and interactive prototypes.",
      icon: (
        <svg viewBox="0 0 40 40" fill="none" className="w-9 h-9 stroke-slate-900 stroke-[1.5]">
          <polygon points="10,12 30,12 30,16 10,16" />
          <polygon points="14,20 30,20 30,24 14,24" />
          <polygon points="18,28 30,28 30,32 18,32" />
        </svg>
      ),
    },
    {
      id: "03",
      slug: "mobile-app-development",
      title: "MOBILE APP DEVELOPMENT",
      desc: "Cross-platform mobile applications with offline sync, push notifications, and frictionless user flows.",
      icon: (
        <svg viewBox="0 0 40 40" fill="none" className="w-9 h-9 stroke-slate-900 stroke-[1.5]">
          <circle cx="20" cy="20" r="16" />
          <circle cx="20" cy="20" r="12" />
          <circle cx="20" cy="20" r="8" />
          <circle cx="20" cy="20" r="4" />
        </svg>
      ),
    },
    {
      id: "04",
      slug: "enterprise-ai-and-content",
      title: "ENTERPRISE AI & CONTENT",
      desc: "Deploy autonomous AI agents, RAG document search, and custom fine-tuned LLM workflows.",
      icon: (
        <svg viewBox="0 0 40 40" fill="none" className="w-9 h-9 stroke-slate-900 stroke-[1.5]">
          <polygon points="20,4 24,16 36,20 24,24 20,36 16,24 4,20 16,16" />
        </svg>
      ),
    },
  ];

  return (
    <section id="services" className="py-20 bg-[#FAF8F5] border-b border-[#E2DDD5] font-sans antialiased">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Clean Line Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 border border-[#E2DDD5] bg-white">
          
          {/* Left Column (3 Cols): Header Identifier */}
          <div className="lg:col-span-3 p-8 lg:p-10 border-b lg:border-b-0 lg:border-r border-[#E2DDD5] bg-[#FAF8F5] flex flex-col justify-between">
            <div>
              <span className="text-xs font-normal tracking-widest text-slate-400 uppercase mb-3 block font-condensed">
                WHAT WE DO
              </span>
              <h2 className="font-condensed text-2xl font-normal text-slate-900 uppercase tracking-tight mb-4 font-[var(--font-geist)]">
                ENGINEERING SERVICES
              </h2>
              <Link
                href={`/${locale}/services`}
                className="font-condensed text-xs font-normal text-[#A90706] hover:underline uppercase tracking-widest flex items-center gap-1"
              >
                <span>EXPLORE ALL SERVICES</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
            <div className="pt-8">
              <Link
                href={`/${locale}/book-consultation`}
                className="px-5 py-3 bg-[#A90706] hover:bg-[#880504] text-white text-xs font-normal font-condensed tracking-widest uppercase flex items-center gap-2 transition-colors cursor-pointer w-full justify-center"
              >
                <span>BOOK A CALL</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Right Column (9 Cols): 2x2 Line Grid */}
          <div className="lg:col-span-9 grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-[#E2DDD5]">
            
            {servicesGrid.map((item, idx) => (
              <Link
                key={item.id}
                href={`/${locale}/services/${item.slug}`}
                className={`p-8 lg:p-10 flex items-start gap-6 hover:bg-[#FAF8F5] transition-colors group ${
                  idx >= 2 ? "border-t border-[#E2DDD5]" : ""
                }`}
              >
                <div className="shrink-0 pt-0.5">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-base font-normal text-slate-900 tracking-wider mb-2 uppercase group-hover:text-[#A90706] transition-colors flex items-center justify-between font-[var(--font-geist)]">
                    <span>{item.title}</span>
                    <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-[#A90706]" />
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>
              </Link>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}
