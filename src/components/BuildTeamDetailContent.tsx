"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HiringModelFormModal from "@/components/HiringModelFormModal";
import InstantDeveloperScopingModal from "@/components/InstantDeveloperScopingModal";
import { BuildTeamRoleDetail, BUILD_TEAM_DATA } from "@/data/buildTeamData";
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
  UserCheck,
  Lock,
  DollarSign,
  Clock,
  Code2,
  Users,
  Ticket
} from "lucide-react";

interface BuildTeamDetailContentProps {
  role: BuildTeamRoleDetail;
  locale?: string;
}

export default function BuildTeamDetailContent({ role, locale = "en" }: BuildTeamDetailContentProps) {
  const [isHiringModelModalOpen, setIsHiringModelModalOpen] = useState(false);
  const [isScopingModalOpen, setIsScopingModalOpen] = useState(false);
  const [selectedModelName, setSelectedModelName] = useState("Dedicated Team Model");
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const handleOpenHiringModelModal = (modelName: string) => {
    setSelectedModelName(modelName);
    setIsHiringModelModalOpen(true);
  };

  const otherRoles = Object.values(BUILD_TEAM_DATA).filter((r) => r.slug !== role.slug);
  const relatedRoles = otherRoles.slice(0, 4);

  return (
    <main className="min-h-screen bg-[#FAF8F5] text-slate-900 selection:bg-[#A90706] selection:text-white font-sans antialiased">
      <Navbar />

      {/* Hero Banner */}
      <section className="pt-36 pb-20 border-b border-[#E2DDD5] bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <Link 
              href={locale ? `/${locale}/build-team` : "/build-team"}
              className="inline-flex items-center gap-1.5 px-3 py-1 bg-white border border-[#E2DDD5] text-xs font-condensed font-black tracking-widest text-slate-600 hover:text-[#A90706] uppercase transition-colors"
            >
              <span>BUILD YOUR TEAM</span>
            </Link>
            <span className="text-slate-400 font-condensed text-xs">/</span>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-[#E2DDD5]">
              <span className="w-2 h-2 bg-[#A90706]"></span>
              <span className="font-condensed text-xs font-black tracking-widest text-[#A90706] uppercase">
                {role.badge}
              </span>
            </div>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-slate-900 tracking-tight leading-none uppercase mb-6 max-w-5xl font-[var(--font-geist)]">
            {role.title}
          </h1>

          <p className="text-lg sm:text-2xl font-bold text-[#A90706] uppercase tracking-wide mb-6 max-w-4xl font-[var(--font-geist)]">
            {role.subtitle}
          </p>

          <p className="text-slate-700 text-base sm:text-lg font-medium max-w-4xl leading-relaxed mb-8 font-[var(--font-geist)]">
            {role.heroDesc}
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <Link
              href={`/${locale}/build-team/hire?role=${encodeURIComponent(role.title)}`}
              className="px-8 py-4 bg-[#A90706] hover:bg-[#880504] text-white font-condensed text-sm font-black tracking-widest uppercase transition-all shadow-lg flex items-center gap-3 cursor-pointer"
            >
              <span>HIRE PRE-SCREENED DEVELOPERS NOW</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>

            <a
              href="#evaluation"
              className="px-8 py-4 bg-white hover:bg-slate-900 hover:text-white border border-[#E2DDD5] text-slate-900 font-condensed text-sm font-black tracking-widest uppercase transition-all flex items-center gap-2"
            >
              <span>EXPLORE EVALUATION PROCESS</span>
            </a>
          </div>

        </div>
      </section>

      {/* Key Metrics Ticker */}
      <section className="py-12 border-b border-[#E2DDD5] bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 border-2 border-slate-900 divide-x divide-y md:divide-y-0 divide-slate-900 shadow-xl bg-white">
            {role.stats.map((st, idx) => (
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

      {/* Flexible Hiring Engagement Models */}
      <section className="py-24 border-b border-[#E2DDD5] bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="mb-14">
            <span className="font-condensed text-xs font-black text-[#A90706] uppercase tracking-widest block mb-2">
              // ENGAGEMENT OPTIONS
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 uppercase tracking-tight font-[var(--font-geist)]">
              FLEXIBLE HIRING ENGAGEMENT MODELS
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {role.hiringModels.map((hm, i) => (
              <div 
                key={i}
                className="p-8 border-2 border-slate-900 bg-white shadow-xl flex flex-col justify-between hover:border-[#A90706] transition-all"
              >
                <div>
                  <span className="px-3 py-1 bg-red-50 text-[#A90706] font-condensed text-[10px] font-black uppercase border border-red-100 mb-4 inline-block">
                    {hm.tag}
                  </span>
                  <h3 className="font-condensed text-2xl font-extrabold text-slate-900 uppercase tracking-wide mb-3">
                    {hm.name}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6 font-normal">
                    {hm.desc}
                  </p>

                  <ul className="space-y-3 pt-4 border-t border-[#E2DDD5]">
                    {hm.features.map((feat, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs font-bold text-slate-900 uppercase">
                        <CheckCircle2 className="w-4 h-4 text-[#A90706] shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href={`/${locale}/build-team/hire?role=${encodeURIComponent(role.title)}&model=${encodeURIComponent(hm.name)}`}
                  className="w-full mt-8 py-3.5 bg-[#A90706] hover:bg-[#880504] text-white font-condensed text-xs font-black uppercase tracking-widest transition-all cursor-pointer shadow-md flex items-center justify-center gap-2"
                >
                  <span>SELECT MODEL &amp; HIRE</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Developer Skills & Tech Stack Matrix (Styled as Tech Tickets) */}
      <section className="py-24 border-b border-[#E2DDD5] bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="mb-14">
            <span className="font-condensed text-xs font-black text-[#A90706] uppercase tracking-widest block mb-2">
              // VERIFIED TECH STACK
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 uppercase tracking-tight font-[var(--font-geist)]">
              DEVELOPER SKILLS &amp; TECH STACK MATRIX
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {role.skills.map((sk, i) => (
              <div 
                key={i} 
                className="border-2 border-slate-900 bg-[#FAF8F5] p-6 shadow-xl relative overflow-hidden group hover:bg-white transition-colors"
              >
                {/* Tech Ticket Header */}
                <div className="flex items-center justify-between border-b-2 border-slate-900 pb-4 mb-4">
                  <div className="flex items-center gap-2.5">
                    <Ticket className="w-5 h-5 text-[#A90706]" />
                    <span className="font-condensed text-xs font-black text-[#A90706] uppercase tracking-widest">
                      // TECH TICKET #{i + 1}
                    </span>
                  </div>
                  <span className="px-2 py-0.5 bg-slate-900 text-white font-condensed text-[10px] font-black uppercase">
                    ENTERPRISE READY
                  </span>
                </div>

                <h3 className="font-condensed text-xl font-black text-slate-900 uppercase mb-4 flex items-center gap-2 font-[var(--font-geist)]">
                  <span>{sk.category}</span>
                </h3>

                {/* Ticket Items Grid */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {sk.items.map((item, idx) => (
                    <div
                      key={idx}
                      className="px-3 py-1.5 bg-white border border-[#E2DDD5] font-condensed text-xs font-bold text-slate-900 uppercase flex items-center gap-1.5 shadow-2xs group-hover:border-slate-900 transition-colors"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#A90706] animate-pulse"></span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                {/* Bottom Ticket Seal */}
                <div className="mt-6 pt-3 border-t border-[#E2DDD5] flex items-center justify-between text-[10px] font-condensed font-black text-slate-400 uppercase">
                  <span>VERIFIED TECH STACK</span>
                  <span>100% PRE-SCREENED</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4-Step Developer Evaluation Funnel */}
      <section id="evaluation" className="py-24 border-b border-[#E2DDD5] bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="mb-14">
            <span className="font-condensed text-xs font-black text-[#A90706] uppercase tracking-widest block mb-2">
              // RIGOROUS TOP 1% EVALUATION
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 uppercase tracking-tight font-[var(--font-geist)]">
              OUR 4-STEP DEVELOPER EVALUATION FUNNEL
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-2 border-slate-900 divide-y sm:divide-y-0 sm:divide-x divide-slate-900 bg-white shadow-xl">
            {role.vettingProcess.map((vp) => (
              <div key={vp.step} className="p-8 flex flex-col justify-between hover:bg-[#FAF8F5] transition-colors">
                <div>
                  <span className="font-condensed text-4xl font-black text-[#A90706] block mb-4">
                    {vp.step}
                  </span>
                  <h3 className="font-condensed text-xl font-extrabold text-slate-900 uppercase mb-3">
                    {vp.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    {vp.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* In-House vs Offshore Cost Comparison Table */}
      <section className="py-24 border-b border-[#E2DDD5] bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="font-condensed text-xs font-black text-[#A90706] uppercase tracking-widest block mb-2">
              // COST ADVANTAGE
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 uppercase tracking-tight font-[var(--font-geist)]">
              US/EU IN-HOUSE VS BROSDEV DEDICATED DEVELOPERS
            </h2>
          </div>

          <div className="border-2 border-slate-900 bg-white shadow-2xl overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-900 text-white font-condensed text-xs font-black uppercase tracking-widest border-b border-slate-900">
                  <th className="p-4 border-r border-slate-800">HIRING PARAMETER</th>
                  <th className="p-4 border-r border-slate-800 text-slate-400">US / EU IN-HOUSE DEVELOPER</th>
                  <th className="p-4 text-[#A90706]">BROSDEV DEDICATED DEVELOPER</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E2DDD5] font-condensed text-xs font-bold text-slate-900 uppercase">
                <tr>
                  <td className="p-4 bg-[#FAF8F5] border-r border-[#E2DDD5]">AVERAGE ANNUAL PAYROLL</td>
                  <td className="p-4 border-r border-[#E2DDD5] text-slate-500">$140,000 - $180,000 / yr</td>
                  <td className="p-4 text-[#A90706] font-black">$40,000 - $55,000 / yr (Save 65%)</td>
                </tr>
                <tr>
                  <td className="p-4 bg-[#FAF8F5] border-r border-[#E2DDD5]">RECRUITMENT &amp; SOURCING DELAY</td>
                  <td className="p-4 border-r border-[#E2DDD5] text-slate-500">60 - 90 Days Average</td>
                  <td className="p-4 text-[#A90706] font-black">24 - 48 Hours Onboarding</td>
                </tr>
                <tr>
                  <td className="p-4 bg-[#FAF8F5] border-r border-[#E2DDD5]">BENEFITS, HEALTHCARE &amp; HARDWARE</td>
                  <td className="p-4 border-r border-[#E2DDD5] text-slate-500">Add 30% Overhead Costs</td>
                  <td className="p-4 text-[#A90706] font-black">$0 (Covered 100% by BrosDev)</td>
                </tr>
                <tr>
                  <td className="p-4 bg-[#FAF8F5] border-r border-[#E2DDD5]">TRIAL PERIOD GUARANTEE</td>
                  <td className="p-4 border-r border-[#E2DDD5] text-slate-500">None (High Termination Risk)</td>
                  <td className="p-4 text-[#A90706] font-black">2-Week Risk-Free Trial Period</td>
                </tr>
                <tr>
                  <td className="p-4 bg-[#FAF8F5] border-r border-[#E2DDD5]">REPLACEMENT GUARANTEE</td>
                  <td className="p-4 border-r border-[#E2DDD5] text-slate-500">Restart 90-Day Recruitment</td>
                  <td className="p-4 text-[#A90706] font-black">Instant Replacement in 24 Hours</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Complete 4-Column Pricing Plans Row */}
      <section className="py-24 border-b border-[#E2DDD5] bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="mb-14">
            <span className="font-condensed text-xs font-black text-[#A90706] uppercase tracking-widest block mb-2">
              // TRANSPARENT RATES
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 uppercase tracking-tight font-[var(--font-geist)]">
              SIMPLE HOURLY &amp; MONTHLY RATES
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {role.pricingPlans.map((pp, i) => (
              <div 
                key={i} 
                className={`p-6 border-2 bg-white shadow-xl flex flex-col justify-between hover:border-[#A90706] transition-all ${
                  i === 2 ? "border-[#A90706] relative" : "border-slate-900"
                }`}
              >
                {i === 2 && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#A90706] text-white px-3 py-1 font-condensed text-[9px] font-black uppercase tracking-widest shadow-md">
                    MOST POPULAR
                  </span>
                )}
                <div>
                  <h3 className="font-condensed text-lg font-black text-slate-900 uppercase tracking-wide mb-2">
                    {pp.tier}
                  </h3>
                  <div className="font-condensed text-2xl sm:text-3xl font-black text-[#A90706] mb-2">
                    {pp.rate}
                  </div>
                  <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-6">
                    {pp.idealFor}
                  </p>

                  <ul className="space-y-2.5 pt-4 border-t border-[#E2DDD5]">
                    {pp.highlights.map((hl, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-[11px] font-bold text-slate-900 uppercase">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#A90706] shrink-0" />
                        <span>{hl}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href={`/${locale}/build-team/hire?role=${encodeURIComponent(role.title)}&tier=${encodeURIComponent(pp.tier)}`}
                  className="w-full mt-6 py-3.5 bg-[#A90706] hover:bg-[#880504] text-white font-condensed text-xs font-black uppercase tracking-widest transition-all cursor-pointer shadow-md text-center block"
                >
                  HIRE THIS PROFILE NOW
                </Link>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* FAQs */}
      {role.faqs && role.faqs.length > 0 && (
        <section className="py-24 border-b border-[#E2DDD5] bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <span className="font-condensed text-xs font-black text-[#A90706] uppercase tracking-widest block mb-2">
                // HIRING FAQS
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 uppercase tracking-tight font-[var(--font-geist)]">
                FREQUENTLY ASKED QUESTIONS
              </h2>
            </div>

            <div className="space-y-4">
              {role.faqs.map((faq, idx) => {
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
                // OTHER ROLES
              </span>
              <h3 className="font-condensed text-2xl sm:text-3xl font-black text-slate-900 uppercase font-[var(--font-geist)]">
                EXPLORE OTHER DEVELOPER ROLES
              </h3>
            </div>
            <Link
              href={locale ? `/${locale}/build-team` : "/build-team"}
              className="font-condensed text-xs font-black text-[#A90706] hover:underline uppercase tracking-widest flex items-center gap-1"
            >
              <span>VIEW ALL ROLES</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedRoles.map((rel) => (
              <Link
                key={rel.slug}
                href={locale ? `/${locale}/build-team/${rel.slug}` : `/build-team/${rel.slug}`}
                className="p-6 border border-[#E2DDD5] bg-white hover:border-slate-900 transition-all group flex flex-col justify-between shadow-xs"
              >
                <div>
                  <span className="font-condensed text-[10px] font-black text-[#A90706] uppercase tracking-widest block mb-2">
                    {rel.badge}
                  </span>
                  <h4 className="font-condensed text-base font-extrabold text-slate-900 uppercase group-hover:text-[#A90706] transition-colors mb-2">
                    {rel.title}
                  </h4>
                  <p className="text-xs text-slate-600 line-clamp-2">
                    {rel.subtitle}
                  </p>
                </div>
                <div className="mt-4 pt-4 border-t border-[#E2DDD5] flex items-center justify-between text-xs font-condensed font-bold uppercase text-slate-900 group-hover:text-[#A90706]">
                  <span>VIEW DEVELOPER PROFILES</span>
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
            // READY TO SCALE YOUR TECH TEAM?
          </span>
          <h2 className="text-4xl sm:text-6xl font-black uppercase tracking-tight mb-6 font-[var(--font-geist)]">
            HIRE PRE-SCREENED DEVELOPERS IN 24 HOURS
          </h2>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto mb-8 font-medium">
            Start your 2-week risk-free trial today. Pay only when you are 100% satisfied with your developer's performance.
          </p>
          <button
            onClick={() => setIsScopingModalOpen(true)}
            className="px-10 py-5 bg-[#A90706] hover:bg-[#880504] text-white font-condensed text-sm font-black tracking-widest uppercase transition-all shadow-xl inline-flex items-center gap-3 cursor-pointer"
          >
            <span>SCHEDULE DEVELOPER MATCHING CALL</span>
            <ArrowUpRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      <Footer />
      
      {/* Interactive Form Modals */}
      
      <HiringModelFormModal
        isOpen={isHiringModelModalOpen}
        onClose={() => setIsHiringModelModalOpen(false)}
        initialModelName={selectedModelName}
        roleTitle={role.title}
      />

      <InstantDeveloperScopingModal
        isOpen={isScopingModalOpen}
        onClose={() => setIsScopingModalOpen(false)}
        roleTitle={role.title}
      />
    </main>
  );
}
