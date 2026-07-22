"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { useTranslation } from "@/context/TranslationContext";

export default function PortfolioSection() {
  const { locale } = useTranslation();

  return (
    <section id="projects" className="py-24 bg-[#FAF8F5] border-b border-[#E2DDD5] font-sans antialiased">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

          {/* Left Column: Title & Info */}
          <div className="lg:col-span-4 space-y-6">
            <h2 className="text-4xl sm:text-5xl font-normal text-slate-900 tracking-tight leading-none uppercase font-[var(--font-geist)]">
              FEATURED<br />WORK
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed max-w-sm font-normal font-[var(--font-geist)]">
              Designing high-performance web applications, mobile platforms &amp; enterprise AI systems that engage users and simplify complex tasks.
            </p>
            <div>
              <Link
                href={`/${locale}/insights/omniflow-ai-saas-platform`}
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-slate-900 hover:bg-[#A90706] text-white text-xs font-normal tracking-widest uppercase transition-colors cursor-pointer font-condensed shadow-md"
              >
                <span>EXPLORE FEATURED PROJECT</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Right Column: Image Blended with Background */}
          <div className="lg:col-span-8">
            <Link
              href={`/${locale}/insights/omniflow-ai-saas-platform`}
              className="relative aspect-[16/10] bg-[#FAF8F5] border border-[#E2DDD5] block overflow-hidden shadow-xs"
            >
              <Image
                src="/featured-work.png"
                alt="Featured Work"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 66vw"
                className="object-cover object-center mix-blend-multiply opacity-95"
              />
              {/* Soft Background Blend Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#FAF8F5]/70 via-transparent to-[#FAF8F5]/30 pointer-events-none" />
              <div className="absolute bottom-5 right-5 w-11 h-11 bg-slate-900 text-white flex items-center justify-center border border-slate-700">
                <ArrowUpRight className="w-5 h-5" />
              </div>
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
