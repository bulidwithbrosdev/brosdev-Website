"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { INSIGHTS_DATA, InsightArticle } from "@/data/insightsData";
import { Search, ArrowUpRight, Sparkles, Filter, Clock, Building2, Terminal, CheckCircle2 } from "lucide-react";

interface InsightsOverviewContentProps {
  locale?: string;
}

export default function InsightsOverviewContent({ locale = "en" }: InsightsOverviewContentProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = [
    "All",
    "AI & Machine Learning",
    "SaaS Architecture",
    "Fintech & Banking",
    "Cloud Infrastructure",
    "Mobile Engineering",
    "E-Commerce",
  ];

  const articlesList = useMemo(() => {
    return Object.values(INSIGHTS_DATA);
  }, []);

  const featuredArticle = useMemo(() => {
    return articlesList.find((art) => art.featured) || articlesList[0];
  }, [articlesList]);

  const filteredArticles = useMemo(() => {
    return articlesList.filter((art) => {
      const matchesCategory = selectedCategory === "All" || art.category === selectedCategory;
      const matchesSearch =
        art.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        art.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
        art.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
        art.client.toLowerCase().includes(searchQuery.toLowerCase()) ||
        art.techStack.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchesCategory && matchesSearch;
    });
  }, [articlesList, selectedCategory, searchQuery]);

  return (
    <main className="min-h-screen bg-[#FAF8F5] text-slate-900 selection:bg-[#A90706] selection:text-white font-sans antialiased">
      <Navbar />

      {/* Header Banner */}
      <section className="pt-36 pb-20 border-b border-[#E2DDD5] bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-[#E2DDD5] mb-6">
            <span className="w-2 h-2 bg-[#A90706]"></span>
            <span className="font-condensed text-xs font-black tracking-widest text-[#A90706] uppercase">
              // ARCHITECTURAL BLUEPRINTS &amp; CASE INSIGHTS
            </span>
          </div>

          <h1 className="text-5xl sm:text-7xl font-black text-slate-900 tracking-tight leading-none uppercase mb-6 font-[var(--font-geist)]">
            ENGINEERING INSIGHTS
          </h1>

          <p className="text-slate-700 text-lg sm:text-xl font-medium max-w-3xl leading-relaxed mb-8 font-[var(--font-geist)]">
            In-depth technical breakdowns, performance benchmarks, and real-world case studies from our software engineering teams.
          </p>

          {/* Search & Category Filter */}
          <div className="space-y-4">
            <div className="relative max-w-xl">
              <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search insights & tech case studies (e.g. Next.js, AI, Fintech, Cloud, Microservices)..."
                className="w-full pl-12 pr-4 py-4 bg-white border border-[#E2DDD5] focus:border-slate-900 font-condensed text-sm font-bold uppercase tracking-wider text-slate-900 placeholder:text-slate-400 focus:outline-hidden"
              />
            </div>

            <div className="flex flex-wrap items-center gap-2 pt-2">
              <span className="text-xs font-condensed font-black text-slate-400 uppercase tracking-widest mr-2 flex items-center gap-1">
                <Filter className="w-3.5 h-3.5 text-[#A90706]" />
                FILTER BY DOMAIN:
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

      {/* Featured Insight Spotlight */}
      {selectedCategory === "All" && !searchQuery && featuredArticle && (
        <section className="py-16 border-b border-[#E2DDD5] bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-6">
              <span className="font-condensed text-xs font-black text-[#A90706] uppercase tracking-widest block">
                // FEATURED ARCHITECTURAL SPOTLIGHT
              </span>
            </div>

            <Link
              href={locale ? `/${locale}/insights/${featuredArticle.slug}` : `/insights/${featuredArticle.slug}`}
              className="group grid grid-cols-1 lg:grid-cols-12 gap-8 border-2 border-slate-900 bg-[#FAF8F5] p-8 sm:p-10 shadow-2xl hover:border-[#A90706] transition-all"
            >
              <div className="lg:col-span-8 flex flex-col justify-between">
                <div>
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span className="px-3 py-1 bg-red-50 text-[#A90706] border border-red-100 font-condensed text-xs font-black uppercase">
                      {featuredArticle.category}
                    </span>
                    <span className="text-slate-500 font-condensed text-xs font-bold flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-slate-400" />
                      {featuredArticle.readTime}
                    </span>
                    <span className="text-slate-400 font-condensed text-xs">•</span>
                    <span className="text-slate-500 font-condensed text-xs font-bold uppercase">
                      CLIENT: {featuredArticle.client}
                    </span>
                  </div>

                  <h2 className="text-2xl sm:text-4xl font-black text-slate-900 uppercase tracking-tight mb-4 group-hover:text-[#A90706] transition-colors font-[var(--font-geist)]">
                    {featuredArticle.title}
                  </h2>

                  <p className="text-slate-700 text-sm sm:text-base font-medium leading-relaxed mb-6 font-[var(--font-geist)]">
                    {featuredArticle.summary}
                  </p>
                </div>

                <div>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-4 border-t border-[#E2DDD5] mb-6">
                    {featuredArticle.metrics.map((m, i) => (
                      <div key={i}>
                        <div className="font-condensed text-xl font-black text-[#A90706]">
                          {m.value}
                        </div>
                        <div className="font-condensed text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                          {m.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center gap-2 text-xs font-condensed font-black uppercase text-slate-900 group-hover:text-[#A90706] transition-colors">
                    <span>READ FULL ARCHITECTURAL BLUEPRINT</span>
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </div>
                </div>
              </div>

              <div className="lg:col-span-4 border border-[#E2DDD5] bg-white p-6 flex flex-col justify-between">
                <div>
                  <span className="font-condensed text-xs font-black text-slate-500 uppercase tracking-widest block mb-4 border-b border-[#E2DDD5] pb-2">
                    VERIFIED TECH STACK
                  </span>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {featuredArticle.techStack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-[#FAF8F5] border border-[#E2DDD5] font-condensed text-xs font-bold text-slate-900 uppercase"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-4 bg-red-50/50 border border-red-100 text-xs font-bold text-[#A90706] uppercase">
                  ✓ VERIFIED PRODUCTION CASE STUDY
                </div>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* Insights Articles Grid */}
      <section className="py-24 border-b border-[#E2DDD5] bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-[#E2DDD5]">
            <span className="font-condensed text-xs font-black text-[#A90706] uppercase tracking-widest">
              SHOWING {filteredArticles.length} INSIGHT ARTICLES &amp; BLUEPRINTS
            </span>
          </div>

          {filteredArticles.length === 0 ? (
            <div className="py-16 text-center bg-white border border-[#E2DDD5]">
              <p className="font-condensed text-lg font-bold text-slate-600 uppercase mb-4">
                NO INSIGHTS FOUND MATCHING "{searchQuery}"
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
              {filteredArticles.map((art) => (
                <Link
                  key={art.slug}
                  href={locale ? `/${locale}/insights/${art.slug}` : `/insights/${art.slug}`}
                  className="p-8 border border-[#E2DDD5] bg-white hover:border-slate-900 transition-all group flex flex-col justify-between shadow-xs hover:shadow-xl"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-2.5 py-1 bg-[#FAF8F5] border border-[#E2DDD5] font-condensed text-[10px] font-black text-[#A90706] uppercase tracking-widest">
                        {art.category}
                      </span>
                      <span className="text-slate-400 font-condensed text-[11px] font-bold flex items-center gap-1">
                        <Clock className="w-3 h-3 text-slate-400" />
                        {art.readTime}
                      </span>
                    </div>

                    <h3 className="font-condensed text-2xl font-black text-slate-900 uppercase tracking-tight mb-3 group-hover:text-[#A90706] transition-colors font-[var(--font-geist)]">
                      {art.title}
                    </h3>

                    <p className="text-xs text-slate-600 leading-relaxed line-clamp-3 mb-6 font-normal">
                      {art.subtitle}
                    </p>
                  </div>

                  <div>
                    <div className="grid grid-cols-2 gap-2 py-3 border-t border-[#E2DDD5] mb-4 bg-[#FAF8F5] p-3 border">
                      {art.metrics.slice(0, 2).map((m, i) => (
                        <div key={i}>
                          <div className="font-condensed text-sm font-black text-[#A90706]">
                            {m.value}
                          </div>
                          <div className="font-condensed text-[9px] font-bold text-slate-500 uppercase tracking-wider line-clamp-1">
                            {m.label}
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="pt-2 flex items-center justify-between text-xs font-condensed font-black uppercase text-slate-900 group-hover:text-[#A90706] transition-colors">
                      <span>READ CASE INSIGHT</span>
                      <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
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
            // HAVE AN ENTERPRISE ENGINEERING CHALLENGE?
          </span>
          <h2 className="text-4xl sm:text-6xl font-black uppercase tracking-tight mb-6 font-[var(--font-geist)]">
            BUILD YOUR NEXT PLATFORM WITH BROSDEV
          </h2>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto mb-8 font-medium">
            Schedule an architectural scoping call with our senior software engineers to map out your product strategy.
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
