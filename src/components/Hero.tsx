"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { useTranslation } from "@/context/TranslationContext";

export default function Hero() {
  const { t, locale } = useTranslation();

  return (
    <section id="hero" className="relative pt-28 sm:pt-36 pb-12 sm:pb-20 bg-slate-950 text-white overflow-hidden min-h-[75vh] sm:min-h-[85vh] flex flex-col justify-between font-sans antialiased">

      {/* Background Full-Screen Video with Clean Dark Cinematic Overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full min-h-full object-cover object-center filter brightness-90 sm:brightness-75 contrast-105"
        >
          <source src="/video/firstsectionvideo.mp4" type="video/mp4" />
        </video>
        {/* Uniform Subtle Dark Overlay - Keeps Video 100% Visible Top-to-Bottom */}
        <div className="absolute inset-0 bg-slate-950/55 sm:bg-slate-950/65 z-0" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full my-auto">

        {/* Top Minimalist Header Tag */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-4 mb-8 sm:mb-14 text-xs font-condensed font-normal tracking-widest uppercase text-slate-300">

        </div>

        {/* Centered Hero Content */}
        <div className="max-w-4xl mx-auto text-center mb-8 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 2, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Simple Headline using Google Font Geist */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-normal tracking-tight text-white leading-tight mb-6 font-[var(--font-geist)]">
              Code Beyond <br />
              <span className="text-[#A90706] font-normal">Boundaries.</span>
            </h1>

            {/* Simple Subheading / Tagline using Google Font Geist */}
            <p className="text-slate-300 text-base sm:text-lg lg:text-xl font-normal leading-relaxed max-w-2xl mx-auto mb-10 font-[var(--font-geist)]">
              Creating high-performance digital experiences with modern technologies and intelligent solutions.
            </p>

            {/* Centered Action Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
              <Link
                href={`/${locale}/book-consultation`}
                className="px-8 py-4 bg-[#A90706] hover:bg-[#880504] text-white text-xs sm:text-sm font-condensed font-normal tracking-widest uppercase transition-all duration-300 flex items-center gap-3 group cursor-pointer shadow-2xl border border-red-600/40"
              >
                <span>{t.hero.bookCallBtn}</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>

              <Link
                href={`/${locale}/products`}
                className="px-8 py-4 bg-white/10 hover:bg-white hover:text-slate-950 border border-white/20 text-white text-xs sm:text-sm font-condensed font-normal tracking-widest uppercase transition-all duration-300 flex items-center gap-3 group cursor-pointer backdrop-blur-md"
              >
                <span>{t.hero.exploreWorkBtn}</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0" />
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Bottom Metrics Ticker Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-4 border border-white/15 bg-slate-900/80 backdrop-blur-xl divide-y sm:divide-y-0 sm:divide-x divide-white/15 shadow-2xl font-normal">
          <div className="p-5 flex flex-col justify-center text-center hover:bg-white/5 transition-colors">
            <span className="font-condensed text-[11px] font-normal text-[#A90706] uppercase tracking-widest mb-1">
              {t.hero.responseTime}
            </span>
            <span className="font-condensed text-xl sm:text-2xl font-normal text-white">
              &lt; 1H RESPONSE
            </span>
          </div>

          <div className="p-5 flex flex-col justify-center text-center hover:bg-white/5 transition-colors">
            <span className="font-condensed text-[11px] font-normal text-[#A90706] uppercase tracking-widest mb-1">
              {t.hero.engineeringTeam}
            </span>
            <span className="font-condensed text-xl sm:text-2xl font-normal text-white">
              30+ EXPERTS
            </span>
          </div>

          <div className="p-5 flex flex-col justify-center text-center hover:bg-white/5 transition-colors">
            <span className="font-condensed text-[11px] font-normal text-[#A90706] uppercase tracking-widest mb-1">
              {t.hero.productsShipped}
            </span>
            <span className="font-condensed text-xl sm:text-2xl font-normal text-white">
              100+ PLATFORMS
            </span>
          </div>

          <div className="p-5 flex flex-col justify-center text-center hover:bg-white/5 transition-colors">
            <span className="font-condensed text-[11px] font-normal text-[#A90706] uppercase tracking-widest mb-1">
              {t.hero.globalPresence}
            </span>
            <span className="font-condensed text-xl sm:text-2xl font-normal text-white uppercase">
              {locale} / GLOBAL
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
