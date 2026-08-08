"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useTranslation } from "@/context/TranslationContext";
import { CASE_STUDIES_DATA } from "@/data/caseStudiesData";
import {
  ArrowUpRight,
  TrendingUp,
  ShieldCheck,
  Building2,
  ArrowRight
} from "lucide-react";

export default function CaseStudiesContent() {
  const { locale } = useTranslation();
  const caseStudies = Object.values(CASE_STUDIES_DATA);

  return (
    <main className="min-h-screen bg-[#FAF8F5] text-slate-900 selection:bg-[#A90706] selection:text-white font-sans antialiased">
      <Navbar />

      {/* Header Banner */}
      <section className="pt-36 pb-20 border-b border-[#E2DDD5] bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-[#E2DDD5] mb-6">
            <span className="w-2 h-2 bg-[#A90706]"></span>
            <span className="font-condensed text-xs font-normal tracking-widest text-[#A90706] uppercase">
              // PROVEN ENTERPRISE RESULTS
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-normal text-slate-900 tracking-tight leading-none uppercase mb-6 font-[var(--font-geist)]">
            CASE STUDIES &amp; CLIENT ROI
          </h1>

          <p className="text-slate-700 text-lg sm:text-xl font-normal max-w-3xl leading-relaxed font-[var(--font-geist)]">
            Explore how BrosDev engineering squads build high-throughput microservices, sub-second AI platforms, and zero-downtime cloud architectures for global market leaders.
          </p>
        </div>
      </section>

      {/* Case Studies List */}
      <section className="py-20 bg-white border-b border-[#E2DDD5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {caseStudies.map((cs) => (
            <div
              key={cs.slug}
              className="bg-[#FAF8F5] border-2 border-slate-900 p-8 sm:p-12 shadow-xl space-y-8 relative overflow-hidden"
            >
              {/* Header Badge & Client */}
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#E2DDD5] pb-4">
                <span className="font-condensed text-xs font-normal px-3 py-1 bg-[#A90706] text-white uppercase tracking-widest">
                  {cs.badge}
                </span>
                <span className="font-condensed text-xs font-normal text-slate-600 uppercase tracking-wider flex items-center gap-1.5">
                  <Building2 className="w-3.5 h-3.5 text-[#A90706]" />
                  <span>{cs.client}</span>
                </span>
              </div>

              {/* Title */}
              <h2 className="text-2xl sm:text-4xl font-normal text-slate-900 uppercase tracking-tight font-[var(--font-geist)]">
                <Link href={`/${locale}/case-studies/${cs.slug}`} className="hover:text-[#A90706] transition-colors">
                  {cs.title}
                </Link>
              </h2>

              {/* Key Metrics Stats Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 font-condensed">
                {cs.metrics.map((m, mIdx) => (
                  <div key={mIdx} className="p-4 bg-white border border-[#E2DDD5] space-y-1">
                    <span className="text-2xl sm:text-3xl font-normal text-[#A90706] block font-[var(--font-geist)]">
                      {m.value}
                    </span>
                    <span className="text-xs font-normal text-slate-900 uppercase block">
                      {m.label}
                    </span>
                    <span className="text-[10px] text-slate-500 uppercase block">
                      {m.desc}
                    </span>
                  </div>
                ))}
              </div>

              {/* Problem vs Solution Summary Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-2">
                <div className="p-6 bg-white border border-[#E2DDD5] space-y-2">
                  <span className="font-condensed text-xs font-normal text-[#A90706] uppercase tracking-widest block">
                    // THE CHALLENGE
                  </span>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                    {cs.problem}
                  </p>
                </div>

                <div className="p-6 bg-white border border-[#E2DDD5] space-y-2">
                  <span className="font-condensed text-xs font-normal text-slate-900 uppercase tracking-widest block">
                    // THE BROSDEV SOLUTION
                  </span>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                    {cs.solution}
                  </p>
                </div>
              </div>

              {/* Tech Stack Badges & Link to Full Case Study */}
              <div className="flex flex-wrap items-center justify-between gap-4 pt-2 border-t border-[#E2DDD5]">
                <div className="flex flex-wrap gap-2">
                  {cs.techStack.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-3 py-1 bg-white border border-slate-900 font-condensed text-xs font-normal text-slate-800 uppercase tracking-wider"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <Link
                  href={`/${locale}/case-studies/${cs.slug}`}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-900 hover:bg-[#A90706] text-white font-condensed text-xs font-bold uppercase tracking-wider transition-colors"
                >
                  <span>READ FULL CASE STUDY</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#FAF8F5] border-b border-[#E2DDD5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="font-condensed text-xs font-normal text-[#A90706] uppercase tracking-widest block">
            // READY FOR SIMILAR RESULTS?
          </span>
          <h2 className="text-3xl sm:text-5xl font-normal text-slate-900 uppercase tracking-tight font-[var(--font-geist)]">
            EXPLORE OUR ENGAGEMENT MODELS TODAY
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link
              href={`/${locale}/services/engagement-models`}
              className="px-8 py-4 bg-[#A90706] hover:bg-[#880504] text-white font-condensed text-xs font-normal uppercase tracking-widest transition-colors flex items-center gap-2 cursor-pointer"
            >
              <span>VIEW ENGAGEMENT MODELS</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
            <Link
              href={`/${locale}/book-consultation`}
              className="px-8 py-4 bg-white border border-slate-900 text-slate-900 hover:bg-slate-100 font-condensed text-xs font-normal uppercase tracking-widest transition-colors cursor-pointer"
            >
              BOOK TECHNICAL CONSULTATION
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
