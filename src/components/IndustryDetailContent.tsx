"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { IndustryDetail, INDUSTRY_DATA } from "@/data/industryData";
import { 
  ArrowUpRight, 
  CheckCircle2, 
  ChevronDown, 
  Cpu, 
  ShieldCheck, 
  Zap, 
  Sparkles,
  ArrowRight,
  Terminal,
  Building2,
  Lock,
  Layers,
  FileText
} from "lucide-react";

interface IndustryDetailContentProps {
  industry: IndustryDetail;
  locale?: string;
}

export default function IndustryDetailContent({ industry, locale = "en" }: IndustryDetailContentProps) {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  // Other related industries for cross-navigation
  const allOtherIndustries = Object.values(INDUSTRY_DATA).filter(
    (ind) => ind.slug !== industry.slug
  );
  const relatedIndustries = allOtherIndustries.slice(0, 4);

  return (
    <main className="min-h-screen bg-[#FAF8F5] text-slate-900 selection:bg-[#A90706] selection:text-white font-sans antialiased">
      <Navbar />

      {/* Hero Banner */}
      <section className="pt-36 pb-20 border-b border-[#E2DDD5] bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <Link 
              href={locale ? `/${locale}/industry` : "/industry"}
              className="inline-flex items-center gap-1.5 px-3 py-1 bg-white border border-[#E2DDD5] text-xs font-condensed font-black tracking-widest text-slate-600 hover:text-[#A90706] uppercase transition-colors"
            >
              <span>INDUSTRIES</span>
            </Link>
            <span className="text-slate-400 font-condensed text-xs">/</span>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-[#E2DDD5]">
              <span className="w-2 h-2 bg-[#A90706]"></span>
              <span className="font-condensed text-xs font-black tracking-widest text-[#A90706] uppercase">
                {industry.badge}
              </span>
            </div>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-slate-900 tracking-tight leading-none uppercase mb-6 max-w-5xl font-[var(--font-geist)]">
            {industry.title}
          </h1>

          <p className="text-lg sm:text-2xl font-bold text-[#A90706] uppercase tracking-wide mb-6 max-w-3xl font-[var(--font-geist)]">
            {industry.tagline}
          </p>

          <p className="text-slate-700 text-base sm:text-lg font-medium max-w-4xl leading-relaxed mb-8 font-[var(--font-geist)]">
            {industry.heroDesc}
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <Link
            href={`/${locale}/book-consultation`}
            className="px-8 py-4 bg-[#A90706] hover:bg-[#880504] text-white font-condensed text-sm font-black tracking-widest uppercase transition-all shadow-lg flex items-center gap-3 cursor-pointer"
            >
              <span>REQUEST INDUSTRY SCOPING</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>

            <a
              href="#solutions"
              className="px-8 py-4 bg-white hover:bg-slate-900 hover:text-white border border-[#E2DDD5] text-slate-900 font-condensed text-sm font-black tracking-widest uppercase transition-all flex items-center gap-2"
            >
              <span>EXPLORE SOLUTIONS</span>
            </a>
          </div>

        </div>
      </section>

      {/* Key Industry Metrics Grid */}
      <section className="py-12 border-b border-[#E2DDD5] bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 border-2 border-slate-900 divide-x divide-y md:divide-y-0 divide-slate-900 shadow-xl bg-white">
            {industry.stats.map((st, idx) => (
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

      {/* Industry Challenges Solved */}
      <section className="py-24 border-b border-[#E2DDD5] bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="mb-14">
            <span className="font-condensed text-xs font-black text-[#A90706] uppercase tracking-widest block mb-2">
              // PAIN POINTS OVERCOME
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 uppercase tracking-tight font-[var(--font-geist)]">
              KEY INDUSTRY CHALLENGES WE SOLVE
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {industry.challenges.map((ch, i) => (
              <div 
                key={i} 
                className="p-8 bg-white border border-[#E2DDD5] shadow-xs flex items-start gap-5 hover:border-slate-900 transition-all"
              >
                <div className="p-3 bg-red-50 border border-red-100 text-[#A90706] font-condensed font-black text-lg shrink-0">
                  0{i + 1}
                </div>
                <div>
                  <h3 className="font-condensed text-xl font-extrabold text-slate-900 uppercase tracking-wide mb-2">
                    {ch.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed font-normal">
                    {ch.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Engineering Solutions Grid */}
      <section id="solutions" className="py-24 border-b border-[#E2DDD5] bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="mb-14">
            <span className="font-condensed text-xs font-black text-[#A90706] uppercase tracking-widest block mb-2">
              // CUSTOM SOLUTIONS
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 uppercase tracking-tight font-[var(--font-geist)]">
              TAILORED SOFTWARE CAPABILITIES
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {industry.solutions.map((sol, i) => (
              <div 
                key={i} 
                className="p-8 bg-[#FAF8F5] border-2 border-slate-900 shadow-lg flex items-start gap-5 group hover:bg-white transition-all"
              >
                <div className="p-3 bg-slate-900 text-white shrink-0">
                  <CheckCircle2 className="w-6 h-6 text-[#A90706]" />
                </div>
                <div>
                  <h3 className="font-condensed text-xl font-extrabold text-slate-900 uppercase tracking-wide mb-2 group-hover:text-[#A90706] transition-colors">
                    {sol.title}
                  </h3>
                  <p className="text-slate-700 text-sm leading-relaxed font-medium">
                    {sol.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Architecture & Regulatory Compliance Standards */}
      <section className="py-20 border-b border-[#E2DDD5] bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7">
              <span className="font-condensed text-xs font-black text-[#A90706] uppercase tracking-widest block mb-2">
                // SYSTEM BLUEPRINT & COMPLIANCE
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 uppercase tracking-tight mb-6 font-[var(--font-geist)]">
                ENTERPRISE SECURITY &amp; COMPLIANCE STANDARDS
              </h2>
              <p className="text-slate-700 text-base leading-relaxed mb-6 font-medium">
                {industry.architectureDesc}
              </p>
              
              <div className="flex flex-wrap gap-3 pt-2">
                {industry.compliance.map((comp, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 bg-white border border-[#E2DDD5] font-condensed text-xs font-black text-slate-900 uppercase tracking-wider flex items-center gap-2 shadow-xs"
                  >
                    <Lock className="w-3.5 h-3.5 text-[#A90706]" />
                    <span>{comp}</span>
                  </span>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="border-2 border-slate-900 bg-white p-8 shadow-xl">
                <h3 className="font-condensed text-xl font-black text-slate-900 uppercase tracking-wide mb-6 border-b border-[#E2DDD5] pb-3">
                  TEHNOLOGY &amp; FRAMEWORKS
                </h3>
                <div className="flex flex-wrap gap-2.5">
                  {industry.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 bg-[#FAF8F5] border border-[#E2DDD5] font-condensed text-xs font-bold text-slate-900 uppercase tracking-wide flex items-center gap-1.5"
                    >
                      <Terminal className="w-3.5 h-3.5 text-[#A90706]" />
                      <span>{tech}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4-Step Execution Process */}
      <section className="py-24 border-b border-[#E2DDD5] bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="mb-14">
            <span className="font-condensed text-xs font-black text-[#A90706] uppercase tracking-widest block mb-2">
              // METHODOLOGY
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 uppercase tracking-tight font-[var(--font-geist)]">
              4-STEP INDUSTRY EXECUTION
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-2 border-slate-900 divide-y sm:divide-y-0 sm:divide-x divide-slate-900 bg-[#FAF8F5] shadow-xl">
            {industry.process.map((pr) => (
              <div key={pr.step} className="p-8 flex flex-col justify-between hover:bg-white transition-colors">
                <div>
                  <span className="font-condensed text-4xl font-black text-[#A90706] block mb-4">
                    {pr.step}
                  </span>
                  <h3 className="font-condensed text-xl font-extrabold text-slate-900 uppercase mb-3">
                    {pr.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    {pr.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Real-World Case Studies */}
      {industry.caseStudies && industry.caseStudies.length > 0 && (
        <section className="py-24 border-b border-[#E2DDD5] bg-[#FAF8F5]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-14">
              <span className="font-condensed text-xs font-black text-[#A90706] uppercase tracking-widest block mb-2">
                // PROVEN RESULTS
              </span>
              <h2 className="text-3xl sm:text-5xl font-black text-slate-900 uppercase tracking-tight font-[var(--font-geist)]">
                ENTERPRISE INSIGHTS
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {industry.caseStudies.map((cs, i) => (
                <div key={i} className="p-8 border-2 border-slate-900 bg-white shadow-xl flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-3 py-1 bg-red-50 text-[#A90706] font-condensed text-xs font-black uppercase border border-red-100">
                        OUTCOME: {cs.outcome}
                      </span>
                      <Sparkles className="w-5 h-5 text-[#A90706]" />
                    </div>
                    <h3 className="font-condensed text-2xl font-extrabold text-slate-900 uppercase mb-3">
                      {cs.title}
                    </h3>
                    <p className="text-slate-700 text-sm leading-relaxed font-medium">
                      {cs.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQs */}
      {industry.faqs && industry.faqs.length > 0 && (
        <section className="py-24 border-b border-[#E2DDD5] bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <span className="font-condensed text-xs font-black text-[#A90706] uppercase tracking-widest block mb-2">
                // INDUSTRY FAQS
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 uppercase tracking-tight font-[var(--font-geist)]">
                FREQUENTLY ASKED QUESTIONS
              </h2>
            </div>

            <div className="space-y-4">
              {industry.faqs.map((faq, idx) => {
                const isOpen = openFaqIndex === idx;
                return (
                  <div key={idx} className="border border-[#E2DDD5] bg-[#FAF8F5] transition-all">
                    <button
                      onClick={() => toggleFaq(idx)}
                      className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                    >
                      <span className="font-condensed text-lg font-extrabold text-slate-900 uppercase tracking-wide">
                        {faq.question}
                      </span>
                      <ChevronDown
                        className={`w-5 h-5 text-slate-500 transition-transform ${
                          isOpen ? "rotate-180 text-[#A90706]" : ""
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="px-6 pb-6 text-slate-700 text-sm leading-relaxed font-medium border-t border-[#E2DDD5] pt-4 bg-white">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Cross-Navigation Grid */}
      <section className="py-20 border-b border-[#E2DDD5] bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-10">
            <div>
              <span className="font-condensed text-xs font-black text-[#A90706] uppercase tracking-widest block mb-1">
                // EXPLORE OTHER DOMAINS
              </span>
              <h3 className="font-condensed text-2xl sm:text-3xl font-black text-slate-900 uppercase font-[var(--font-geist)]">
                OTHER INDUSTRY VERTICALS
              </h3>
            </div>
            <Link
              href={locale ? `/${locale}/industry` : "/industry"}
              className="font-condensed text-xs font-black text-[#A90706] hover:underline uppercase tracking-widest flex items-center gap-1"
            >
              <span>VIEW ALL INDUSTRIES</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedIndustries.map((rel) => (
              <Link
                key={rel.slug}
                href={locale ? `/${locale}/industry/${rel.slug}` : `/industry/${rel.slug}`}
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
                    {rel.tagline}
                  </p>
                </div>
                <div className="mt-4 pt-4 border-t border-[#E2DDD5] flex items-center justify-between text-xs font-condensed font-bold uppercase text-slate-900 group-hover:text-[#A90706]">
                  <span>READ INDUSTRY BLUEPRINT</span>
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
            // READY TO INNOVATE IN {industry.title.toUpperCase()}?
          </span>
          <h2 className="text-4xl sm:text-6xl font-black uppercase tracking-tight mb-6 font-[var(--font-geist)]">
            BUILD WITH SENIOR DOMAIN ENGINEERS
          </h2>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto mb-8 font-medium">
            Schedule a technical consultation to map compliance, architecture, and sprint timelines for your project.
          </p>
          <Link
            href={`/${locale}/book-consultation`}
            className="px-10 py-5 bg-[#A90706] hover:bg-[#880504] text-white font-condensed text-sm font-black tracking-widest uppercase transition-all shadow-xl inline-flex items-center gap-3 cursor-pointer"
          >
            <span>BOOK INDUSTRY SCOPING CALL</span>
            <ArrowUpRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
