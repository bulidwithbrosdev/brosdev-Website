"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { INDUSTRY_DATA, IndustryDetail } from "@/data/industryData";
import { Search, ArrowUpRight, ShieldCheck, Cpu, Zap, Building2, Filter, Lock } from "lucide-react";

interface IndustryOverviewContentProps {
  locale?: string;
}

export default function IndustryOverviewContent({ locale = "en" }: IndustryOverviewContentProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", "Industry Vertical", "Custom Industry Solution"];

  const industryList = useMemo(() => {
    return Object.values(INDUSTRY_DATA);
  }, []);

  const filteredIndustries = useMemo(() => {
    return industryList.filter((ind) => {
      const matchesCategory = selectedCategory === "All" || ind.category === selectedCategory;
      const matchesSearch =
        ind.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        ind.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
        ind.heroDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
        ind.techStack.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchesCategory && matchesSearch;
    });
  }, [industryList, selectedCategory, searchQuery]);

  return (
    <main className="min-h-screen bg-[#FAF8F5] text-slate-900 selection:bg-[#A90706] selection:text-white font-sans antialiased">
      <Navbar />

      {/* Header Banner */}
      <section className="pt-36 pb-20 border-b border-[#E2DDD5] bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-[#E2DDD5] mb-6">
            <span className="w-2 h-2 bg-[#A90706]"></span>
            <span className="font-condensed text-xs font-black tracking-widest text-[#A90706] uppercase">
              // DOMAIN EXPERTISE &amp; VERTICALS
            </span>
          </div>

          <h1 className="text-5xl sm:text-7xl font-black text-slate-900 tracking-tight leading-none uppercase mb-8 font-[var(--font-geist)]">
            INDUSTRIES WE SERVE
          </h1>

          <p className="text-slate-700 text-lg sm:text-xl font-medium max-w-3xl leading-relaxed mb-8 font-[var(--font-geist)]">
            Explore our deep domain expertise across healthcare, fintech, smart manufacturing, logistics, retail, biotech, and custom AI enterprise solutions.
          </p>

          {/* Search & Category Filters Bar */}
          <div className="space-y-4">
            <div className="relative max-w-xl">
              <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search industries & solutions (e.g. Healthcare, Fintech, AI, Supply Chain)..."
                className="w-full pl-12 pr-4 py-4 bg-white border border-[#E2DDD5] focus:border-slate-900 font-condensed text-sm font-bold uppercase tracking-wider text-slate-900 placeholder:text-slate-400 focus:outline-hidden"
              />
            </div>

            <div className="flex flex-wrap items-center gap-2 pt-2">
              <span className="text-xs font-condensed font-black text-slate-400 uppercase tracking-widest mr-2 flex items-center gap-1">
                <Filter className="w-3.5 h-3.5 text-[#A90706]" />
                FILTER BY:
              </span>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 text-xs font-condensed font-bold uppercase tracking-wider transition-all cursor-pointer ${
                    selectedCategory === cat
                      ? "bg-slate-900 text-white border border-slate-900 shadow-md"
                      : "bg-white text-slate-700 border border-[#E2DDD5] hover:border-slate-900 hover:text-[#A90706]"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Industry Grid */}
      <section className="py-24 border-b border-[#E2DDD5] bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-[#E2DDD5]">
            <span className="font-condensed text-xs font-black text-[#A90706] uppercase tracking-widest">
              SHOWING {filteredIndustries.length} OF {industryList.length} DOMAINS &amp; SOLUTIONS
            </span>
          </div>

          {filteredIndustries.length === 0 ? (
            <div className="py-16 text-center bg-[#FAF8F5] border border-[#E2DDD5]">
              <p className="font-condensed text-lg font-bold text-slate-600 uppercase mb-4">
                NO INDUSTRIES FOUND MATCHING "{searchQuery}"
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("All");
                }}
                className="px-6 py-3 bg-[#A90706] text-white font-condensed text-xs font-bold uppercase tracking-widest"
              >
                RESET FILTERS
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredIndustries.map((ind) => (
                <Link
                  key={ind.slug}
                  href={locale ? `/${locale}/industry/${ind.slug}` : `/industry/${ind.slug}`}
                  className="p-8 border border-[#E2DDD5] bg-[#FAF8F5] hover:border-slate-900 hover:bg-white transition-all group flex flex-col justify-between shadow-xs hover:shadow-xl"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="px-2.5 py-1 bg-white border border-[#E2DDD5] font-condensed text-[10px] font-black text-[#A90706] uppercase tracking-widest">
                        {ind.category}
                      </span>
                      <ArrowUpRight className="w-5 h-5 text-slate-400 group-hover:text-[#A90706] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                    </div>

                    <h3 className="font-condensed text-2xl font-black text-slate-900 uppercase tracking-tight mb-2 group-hover:text-[#A90706] transition-colors font-[var(--font-geist)]">
                      {ind.title}
                    </h3>

                    <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-4 line-clamp-1">
                      {ind.tagline}
                    </p>

                    <p className="text-xs text-slate-600 leading-relaxed line-clamp-3 mb-6 font-normal">
                      {ind.heroDesc}
                    </p>
                  </div>

                  <div>
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {ind.compliance.slice(0, 3).map((comp, i) => (
                        <span key={i} className="px-2 py-0.5 bg-white border border-[#E2DDD5] font-condensed text-[10px] font-bold text-slate-700 uppercase">
                          {comp}
                        </span>
                      ))}
                    </div>

                    <div className="pt-4 border-t border-[#E2DDD5] flex items-center justify-between text-xs font-condensed font-black uppercase text-slate-900 group-hover:text-[#A90706] transition-colors">
                      <span>EXPLORE INDUSTRY BLUEPRINT</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}

        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="font-condensed text-xs font-black text-[#A90706] uppercase tracking-widest block mb-3">
            // NEED A CUSTOM INDUSTRY SOLUTION?
          </span>
          <h2 className="text-4xl sm:text-6xl font-black uppercase tracking-tight mb-6 font-[var(--font-geist)]">
            BUILD WITH BROSDEV SOLUTIONS DOMAIN EXPERTS
          </h2>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto mb-8 font-medium">
            Schedule a technical scoping session to design your industry-specific software architecture.
          </p>
          <Link
            href={`/${locale}/book-consultation`}
            className="px-10 py-5 bg-[#A90706] hover:bg-[#880504] text-white font-condensed text-sm font-black tracking-widest uppercase transition-all shadow-xl inline-flex items-center gap-3 cursor-pointer"
          >
            <span>BOOK A FREE DOMAIN SCOPING CALL</span>
            <ArrowUpRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
