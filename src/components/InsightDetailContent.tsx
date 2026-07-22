"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { InsightArticle, INSIGHTS_DATA } from "@/data/insightsData";
import { 
  ArrowUpRight, 
  CheckCircle2, 
  Clock, 
  Building2, 
  Terminal, 
  Sparkles, 
  ArrowRight,
  ShieldCheck,
  Cpu,
  Layers,
  FileText
} from "lucide-react";

interface InsightDetailContentProps {
  insight: InsightArticle;
  locale?: string;
}

export default function InsightDetailContent({ insight, locale = "en" }: InsightDetailContentProps) {

  const otherInsights = Object.values(INSIGHTS_DATA).filter((art) => art.slug !== insight.slug);
  const relatedInsights = otherInsights.slice(0, 3);

  return (
    <main className="min-h-screen bg-[#FAF8F5] text-slate-900 selection:bg-[#A90706] selection:text-white font-sans antialiased">
      <Navbar />

      {/* Header Banner */}
      <section className="pt-36 pb-20 border-b border-[#E2DDD5] bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <Link 
              href={locale ? `/${locale}/insights` : "/insights"}
              className="inline-flex items-center gap-1.5 px-3 py-1 bg-white border border-[#E2DDD5] text-xs font-condensed font-black tracking-widest text-slate-600 hover:text-[#A90706] uppercase transition-colors"
            >
              <span>ENGINEERING INSIGHTS</span>
            </Link>
            <span className="text-slate-400 font-condensed text-xs">/</span>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-[#E2DDD5]">
              <span className="w-2 h-2 bg-[#A90706]"></span>
              <span className="font-condensed text-xs font-black tracking-widest text-[#A90706] uppercase">
                {insight.category}
              </span>
            </div>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-slate-900 tracking-tight leading-none uppercase mb-6 max-w-5xl font-[var(--font-geist)]">
            {insight.title}
          </h1>

          <p className="text-lg sm:text-2xl font-bold text-[#A90706] uppercase tracking-wide mb-8 max-w-4xl font-[var(--font-geist)]">
            {insight.subtitle}
          </p>

          <div className="flex flex-wrap items-center gap-6 pt-4 border-t border-[#E2DDD5] text-xs font-condensed font-extrabold uppercase text-slate-600">
            <div className="flex items-center gap-2">
              <Building2 className="w-4 h-4 text-[#A90706]" />
              <span>CLIENT: {insight.client}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#A90706]" />
              <span>{insight.readTime}</span>
            </div>
            <div className="flex items-center gap-2">
              <FileText className="w-4 h-4 text-[#A90706]" />
              <span>PUBLISHED: {insight.date}</span>
            </div>
          </div>

        </div>
      </section>

      {/* Quantitative Impact Metrics Grid */}
      <section className="py-12 border-b border-[#E2DDD5] bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 border-2 border-slate-900 divide-x divide-y md:divide-y-0 divide-slate-900 shadow-xl bg-white">
            {insight.metrics.map((st, idx) => (
              <div key={idx} className="p-6 text-center">
                <div className="font-condensed text-3xl sm:text-4xl font-black text-[#A90706] tracking-tight">
                  {st.value}
                </div>
                <div className="font-condensed text-xs font-extrabold text-slate-500 uppercase tracking-widest mt-1">
                  {st.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Article Body */}
      <section className="py-24 border-b border-[#E2DDD5] bg-[#FAF8F5]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {/* Executive Summary Box */}
          <div className="p-8 border-2 border-slate-900 bg-white shadow-xl">
            <span className="font-condensed text-xs font-black text-[#A90706] uppercase tracking-widest block mb-2">
              // EXECUTIVE SUMMARY
            </span>
            <p className="text-slate-800 text-base sm:text-lg font-medium leading-relaxed font-[var(--font-geist)]">
              {insight.summary}
            </p>
          </div>

          {/* The Technical Challenge */}
          <div className="space-y-4">
            <span className="font-condensed text-xs font-black text-[#A90706] uppercase tracking-widest block">
              // THE ARCHITECTURAL CHALLENGE
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 uppercase tracking-tight font-[var(--font-geist)]">
              THE PROBLEM &amp; BOTTLENECKS
            </h2>
            <p className="text-slate-700 text-base sm:text-lg leading-relaxed font-normal">
              {insight.challenge}
            </p>
          </div>

          {/* The Engineering Solution */}
          <div className="space-y-4 pt-8 border-t border-[#E2DDD5]">
            <span className="font-condensed text-xs font-black text-[#A90706] uppercase tracking-widest block">
              // BROSDEV ENGINEERING SOLUTION
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 uppercase tracking-tight font-[var(--font-geist)]">
              THE SOLUTION &amp; SYSTEM BLUEPRINT
            </h2>
            <p className="text-slate-700 text-base sm:text-lg leading-relaxed font-normal">
              {insight.solution}
            </p>

            <div className="p-6 bg-slate-900 text-white mt-6 border-l-4 border-[#A90706]">
              <span className="font-condensed text-xs font-black text-[#A90706] uppercase tracking-widest block mb-2">
                SYSTEM ARCHITECTURE BREAKDOWN
              </span>
              <p className="text-slate-200 text-sm leading-relaxed font-medium">
                {insight.architectureDetails}
              </p>
            </div>
          </div>

          {/* Tech Stack Ticket Box */}
          <div className="p-8 border border-[#E2DDD5] bg-white shadow-md space-y-4">
            <span className="font-condensed text-xs font-black text-[#A90706] uppercase tracking-widest block">
              // VERIFIED TECH STACK USED
            </span>
            <div className="flex flex-wrap gap-2.5">
              {insight.techStack.map((tech, i) => (
                <span
                  key={i}
                  className="px-4 py-2 bg-[#FAF8F5] border border-[#E2DDD5] font-condensed text-xs font-extrabold text-slate-900 uppercase flex items-center gap-2"
                >
                  <Terminal className="w-3.5 h-3.5 text-[#A90706]" />
                  <span>{tech}</span>
                </span>
              ))}
            </div>
          </div>

          {/* Key Architectural Takeaways for CTOs */}
          <div className="space-y-6 pt-8 border-t border-[#E2DDD5]">
            <span className="font-condensed text-xs font-black text-[#A90706] uppercase tracking-widest block">
              // LESSONS FOR CTOS &amp; PRODUCT LEADS
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 uppercase tracking-tight font-[var(--font-geist)]">
              KEY ARCHITECTURAL TAKEAWAYS
            </h2>

            <div className="space-y-4">
              {insight.keyTakeaways.map((tk, idx) => (
                <div key={idx} className="p-6 bg-white border border-[#E2DDD5] flex items-start gap-4 shadow-xs">
                  <CheckCircle2 className="w-6 h-6 text-[#A90706] shrink-0 mt-0.5" />
                  <p className="text-slate-800 text-base font-bold leading-relaxed font-[var(--font-geist)]">
                    {tk}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Cross-Navigation Grid */}
      <section className="py-20 border-b border-[#E2DDD5] bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-10">
            <div>
              <span className="font-condensed text-xs font-black text-[#A90706] uppercase tracking-widest block mb-1">
                // EXPLORE MORE BLUEPRINTS
              </span>
              <h3 className="font-condensed text-2xl sm:text-3xl font-black text-slate-900 uppercase font-[var(--font-geist)]">
                RELATED ENGINEERING INSIGHTS
              </h3>
            </div>
            <Link
              href={locale ? `/${locale}/insights` : "/insights"}
              className="font-condensed text-xs font-black text-[#A90706] hover:underline uppercase tracking-widest flex items-center gap-1"
            >
              <span>VIEW ALL INSIGHTS</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedInsights.map((rel) => (
              <Link
                key={rel.slug}
                href={locale ? `/${locale}/insights/${rel.slug}` : `/insights/${rel.slug}`}
                className="p-6 border border-[#E2DDD5] bg-white hover:border-slate-900 transition-all group flex flex-col justify-between shadow-xs"
              >
                <div>
                  <span className="font-condensed text-[10px] font-black text-[#A90706] uppercase tracking-widest block mb-2">
                    {rel.category}
                  </span>
                  <h4 className="font-condensed text-base font-extrabold text-slate-900 uppercase group-hover:text-[#A90706] transition-colors mb-2">
                    {rel.title}
                  </h4>
                  <p className="text-xs text-slate-600 line-clamp-2">
                    {rel.subtitle}
                  </p>
                </div>
                <div className="mt-4 pt-4 border-t border-[#E2DDD5] flex items-center justify-between text-xs font-condensed font-bold uppercase text-slate-900 group-hover:text-[#A90706]">
                  <span>READ ARCHITECTURAL CASE</span>
                  <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Footer Banner */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="font-condensed text-xs font-black text-[#A90706] uppercase tracking-widest block mb-3">
            // READY TO BUILD AN ENTERPRISE-GRADE PLATFORM?
          </span>
          <h2 className="text-4xl sm:text-6xl font-black uppercase tracking-tight mb-6 font-[var(--font-geist)]">
            TALK TO OUR PRINCIPAL ARCHITECTS
          </h2>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto mb-8 font-medium">
            Schedule a confidential technical scoping session to review your architecture, sprint deliverables, and team scaling needs.
          </p>
          <Link
            href={`/${locale}/book-consultation`}
            className="px-10 py-5 bg-[#A90706] hover:bg-[#880504] text-white font-condensed text-sm font-black tracking-widest uppercase transition-all shadow-xl inline-flex items-center gap-3 cursor-pointer"
          >
            <span>BOOK AN ARCHITECTURAL SCOPING CALL</span>
            <ArrowUpRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
