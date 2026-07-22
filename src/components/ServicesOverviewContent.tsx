"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CallBookingModal from "@/components/CallBookingModal";
import { SERVICES_DATA, ServiceDetail } from "@/data/servicesData";
import { Search, ArrowUpRight, CheckCircle2, Cpu, ShieldCheck, Zap, Layers, Sparkles, Filter } from "lucide-react";

interface ServicesOverviewContentProps {
  locale?: string;
}

export default function ServicesOverviewContent({ locale = "en" }: ServicesOverviewContentProps) {
  const [isCallModalOpen, setIsCallModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", "Core Services", "Expertise", "Platforms & Cloud", "Specialized Solutions"];

  const servicesList = useMemo(() => {
    return Object.values(SERVICES_DATA);
  }, []);

  const filteredServices = useMemo(() => {
    return servicesList.filter((s) => {
      const matchesCategory = selectedCategory === "All" || s.category === selectedCategory;
      const matchesSearch =
        s.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        s.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
        s.heroDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
        s.techStack.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchesCategory && matchesSearch;
    });
  }, [servicesList, selectedCategory, searchQuery]);

  return (
    <main className="min-h-screen bg-[#FAF8F5] text-slate-900 selection:bg-[#A90706] selection:text-white font-sans antialiased">
      <Navbar onBookCallClick={() => setIsCallModalOpen(true)} />

      {/* Header Banner */}
      <section className="pt-36 pb-20 border-b border-[#E2DDD5] bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-[#E2DDD5] mb-6">
            <span className="w-2 h-2 bg-[#A90706]"></span>
            <span className="font-condensed text-xs font-black tracking-widest text-[#A90706] uppercase">
              // ENGINEERING SERVICES & SOLUTIONS
            </span>
          </div>

          <h1 className="text-5xl sm:text-7xl font-black text-slate-900 tracking-tight leading-none uppercase mb-8">
            OUR COMPLETE SERVICES
          </h1>

          <p className="text-slate-700 text-lg sm:text-xl font-medium max-w-3xl leading-relaxed mb-8">
            Explore our end-to-end software engineering capabilities—from cloud-native web applications and custom mobile platforms to enterprise AI agents and specialized cloud architectures.
          </p>

          {/* Search & Category Filters Bar */}
          <div className="space-y-4">
            <div className="relative max-w-xl">
              <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search services (e.g. Next.js, Cloud, Mobile, AI, Shopify, Odoo)..."
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

      {/* Services Grid */}
      <section className="py-24 border-b border-[#E2DDD5] bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-[#E2DDD5]">
            <span className="font-condensed text-xs font-black text-[#A90706] uppercase tracking-widest">
              SHOWING {filteredServices.length} OF {servicesList.length} SERVICES
            </span>
          </div>

          {filteredServices.length === 0 ? (
            <div className="py-16 text-center bg-[#FAF8F5] border border-[#E2DDD5]">
              <p className="font-condensed text-lg font-bold text-slate-600 uppercase mb-4">
                NO SERVICES FOUND MATCHING "{searchQuery}"
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
              {filteredServices.map((srv) => (
                <Link
                  key={srv.slug}
                  href={locale ? `/${locale}/services/${srv.slug}` : `/services/${srv.slug}`}
                  className="p-8 border border-[#E2DDD5] bg-[#FAF8F5] hover:border-slate-900 hover:bg-white transition-all group flex flex-col justify-between shadow-xs hover:shadow-xl"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="px-2.5 py-1 bg-white border border-[#E2DDD5] font-condensed text-[10px] font-black text-[#A90706] uppercase tracking-widest">
                        {srv.category}
                      </span>
                      <ArrowUpRight className="w-5 h-5 text-slate-400 group-hover:text-[#A90706] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                    </div>

                    <h3 className="font-condensed text-2xl font-black text-slate-900 uppercase tracking-tight mb-2 group-hover:text-[#A90706] transition-colors">
                      {srv.title}
                    </h3>

                    <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-4 line-clamp-1">
                      {srv.tagline}
                    </p>

                    <p className="text-xs text-slate-600 leading-relaxed line-clamp-3 mb-6 font-normal">
                      {srv.heroDesc}
                    </p>
                  </div>

                  <div>
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {srv.techStack.slice(0, 4).map((tech, i) => (
                        <span key={i} className="px-2 py-0.5 bg-white border border-[#E2DDD5] font-condensed text-[10px] font-bold text-slate-700 uppercase">
                          {tech}
                        </span>
                      ))}
                      {srv.techStack.length > 4 && (
                        <span className="px-2 py-0.5 bg-slate-900 text-white font-condensed text-[10px] font-bold uppercase">
                          +{srv.techStack.length - 4} MORE
                        </span>
                      )}
                    </div>

                    <div className="pt-4 border-t border-[#E2DDD5] flex items-center justify-between text-xs font-condensed font-black uppercase text-slate-900 group-hover:text-[#A90706] transition-colors">
                      <span>VIEW SERVICE DETAILS</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}

        </div>
      </section>

      {/* Engineering Guarantees */}
      <section className="py-20 bg-[#FAF8F5] border-b border-[#E2DDD5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 border-2 border-slate-900 divide-y md:divide-y-0 md:divide-x divide-slate-900 bg-white shadow-xl">
            <div className="p-8 text-center">
              <div className="w-12 h-12 bg-slate-900 text-white flex items-center justify-center mx-auto mb-4">
                <ShieldCheck className="w-6 h-6 text-[#A90706]" />
              </div>
              <h3 className="font-condensed text-xl font-black text-slate-900 uppercase mb-2">100% CODE OWNERSHIP</h3>
              <p className="text-xs text-slate-600 font-normal">You own full IP rights, repositories, and credentials upon delivery.</p>
            </div>
            <div className="p-8 text-center">
              <div className="w-12 h-12 bg-slate-900 text-white flex items-center justify-center mx-auto mb-4">
                <Cpu className="w-6 h-6 text-[#A90706]" />
              </div>
              <h3 className="font-condensed text-xl font-black text-slate-900 uppercase mb-2">PRODUCTION READY</h3>
              <p className="text-xs text-slate-600 font-normal">Battle-tested CI/CD, 99.99% SLAs, and automated test coverage.</p>
            </div>
            <div className="p-8 text-center">
              <div className="w-12 h-12 bg-slate-900 text-white flex items-center justify-center mx-auto mb-4">
                <Zap className="w-6 h-6 text-[#A90706]" />
              </div>
              <h3 className="font-condensed text-xl font-black text-slate-900 uppercase mb-2">FAST SPRINT VELOCITY</h3>
              <p className="text-xs text-slate-600 font-normal">Agile 2-week iterations with continuous production code deployments.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="font-condensed text-xs font-black text-[#A90706] uppercase tracking-widest block mb-3">
            // NEED A CUSTOM SOLUTION?
          </span>
          <h2 className="text-4xl sm:text-6xl font-black uppercase tracking-tight mb-6">
            BUILD WITH BROSDEV TODAY
          </h2>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto mb-8 font-medium">
            Let our senior software architects evaluate your technical requirements and construct a tailored delivery roadmap.
          </p>
          <button
            onClick={() => setIsCallModalOpen(true)}
            className="px-10 py-5 bg-[#A90706] hover:bg-[#880504] text-white font-condensed text-sm font-black tracking-widest uppercase transition-all shadow-xl inline-flex items-center gap-3 cursor-pointer"
          >
            <span>BOOK A FREE TECHNICAL CALL</span>
            <ArrowUpRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      <Footer />
      <CallBookingModal isOpen={isCallModalOpen} onClose={() => setIsCallModalOpen(false)} />
    </main>
  );
}
