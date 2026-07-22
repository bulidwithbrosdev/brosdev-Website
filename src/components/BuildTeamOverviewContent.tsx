"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CallBookingModal from "@/components/CallBookingModal";
import { BUILD_TEAM_DATA, BuildTeamRoleDetail } from "@/data/buildTeamData";
import { Search, ArrowUpRight, ShieldCheck, UserCheck, Zap, Terminal, CheckCircle2 } from "lucide-react";

interface BuildTeamOverviewContentProps {
  locale?: string;
}

export default function BuildTeamOverviewContent({ locale = "en" }: BuildTeamOverviewContentProps) {
  const [isCallModalOpen, setIsCallModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const roleList = useMemo(() => {
    return Object.values(BUILD_TEAM_DATA);
  }, []);

  const filteredRoles = useMemo(() => {
    return roleList.filter((r) => {
      const matchesSearch =
        r.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        r.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
        r.heroDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
        r.skills.some((sk) => sk.items.some((item) => item.toLowerCase().includes(searchQuery.toLowerCase())));

      return matchesSearch;
    });
  }, [roleList, searchQuery]);

  return (
    <main className="min-h-screen bg-[#FAF8F5] text-slate-900 selection:bg-[#A90706] selection:text-white font-sans antialiased">
      <Navbar onBookCallClick={() => setIsCallModalOpen(true)} />

      {/* Header Banner */}
      <section className="pt-36 pb-20 border-b border-[#E2DDD5] bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-[#E2DDD5] mb-6">
            <span className="w-2 h-2 bg-[#A90706]"></span>
            <span className="font-condensed text-xs font-black tracking-widest text-[#A90706] uppercase">
              // TEAM AUGMENTATION &amp; DEDICATED DEVELOPERS
            </span>
          </div>

          <h1 className="text-5xl sm:text-7xl font-black text-slate-900 tracking-tight leading-none uppercase mb-8 font-[var(--font-geist)]">
            HIRE DEDICATED DEVELOPERS
          </h1>

          <p className="text-slate-700 text-lg sm:text-xl font-medium max-w-3xl leading-relaxed mb-8 font-[var(--font-geist)]">
            Scale your engineering team with top 1% pre-vetted software engineers in India and globally. Onboard senior developers in 24-48 hours with a 2-week risk-free trial.
          </p>

          {/* Search Bar */}
          <div className="relative max-w-xl">
            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search developer roles & skills (e.g. Next.js, AI/ML, React Native, Python, Full Stack)..."
              className="w-full pl-12 pr-4 py-4 bg-white border border-[#E2DDD5] focus:border-slate-900 font-condensed text-sm font-bold uppercase tracking-wider text-slate-900 placeholder:text-slate-400 focus:outline-hidden"
            />
          </div>

        </div>
      </section>

      {/* Developer Roles Grid */}
      <section className="py-24 border-b border-[#E2DDD5] bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-[#E2DDD5]">
            <span className="font-condensed text-xs font-black text-[#A90706] uppercase tracking-widest">
              SHOWING {filteredRoles.length} PRE-VETTED DEVELOPER ROLES
            </span>
          </div>

          {filteredRoles.length === 0 ? (
            <div className="py-16 text-center bg-[#FAF8F5] border border-[#E2DDD5]">
              <p className="font-condensed text-lg font-bold text-slate-600 uppercase mb-4">
                NO ROLES FOUND MATCHING "{searchQuery}"
              </p>
              <button
                onClick={() => setSearchQuery("")}
                className="px-6 py-3 bg-[#A90706] text-white font-condensed text-xs font-bold uppercase tracking-widest"
              >
                RESET SEARCH
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredRoles.map((r) => (
                <Link
                  key={r.slug}
                  href={locale ? `/${locale}/build-team/${r.slug}` : `/build-team/${r.slug}`}
                  className="p-8 border border-[#E2DDD5] bg-[#FAF8F5] hover:border-slate-900 hover:bg-white transition-all group flex flex-col justify-between shadow-xs hover:shadow-xl"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="px-2.5 py-1 bg-white border border-[#E2DDD5] font-condensed text-[10px] font-black text-[#A90706] uppercase tracking-widest">
                        {r.badge}
                      </span>
                      <ArrowUpRight className="w-5 h-5 text-slate-400 group-hover:text-[#A90706] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                    </div>

                    <h3 className="font-condensed text-2xl font-black text-slate-900 uppercase tracking-tight mb-2 group-hover:text-[#A90706] transition-colors font-[var(--font-geist)]">
                      {r.title}
                    </h3>

                    <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-4 line-clamp-1">
                      {r.subtitle}
                    </p>

                    <p className="text-xs text-slate-600 leading-relaxed line-clamp-3 mb-6 font-normal">
                      {r.heroDesc}
                    </p>
                  </div>

                  <div>
                    <div className="pt-4 border-t border-[#E2DDD5] flex items-center justify-between text-xs font-condensed font-black uppercase text-slate-900 group-hover:text-[#A90706] transition-colors">
                      <span>VIEW DEVELOPER PROFILES &amp; RATES</span>
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
            // READY TO SCALE YOUR TECH TEAM?
          </span>
          <h2 className="text-4xl sm:text-6xl font-black uppercase tracking-tight mb-6 font-[var(--font-geist)]">
            MATCH WITH TOP 1% DEVELOPERS TODAY
          </h2>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto mb-8 font-medium">
            Schedule a 15-minute developer matching call with our engineering leaders. Start with a 2-week risk-free trial.
          </p>
          <button
            onClick={() => setIsCallModalOpen(true)}
            className="px-10 py-5 bg-[#A90706] hover:bg-[#880504] text-white font-condensed text-sm font-black tracking-widest uppercase transition-all shadow-xl inline-flex items-center gap-3 cursor-pointer"
          >
            <span>BOOK DEVELOPER MATCHING CALL</span>
            <ArrowUpRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      <Footer />
      <CallBookingModal isOpen={isCallModalOpen} onClose={() => setIsCallModalOpen(false)} />
    </main>
  );
}
