"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { 
  Users, 
  Code, 
  Cpu, 
  ShieldCheck, 
  Award, 
  ArrowUpRight, 
  Sparkles, 
  Terminal, 
  Heart, 
  Rocket,
  CheckCircle2,
  Globe
} from "lucide-react";

interface TeamContentProps {
  locale?: string;
}

export default function TeamContent({ locale = "en" }: TeamContentProps) {

  const founders = [
    {
      name: "DHARMIK DUDHAT",
      role: "CO-FOUNDER & CEO",
      focus: "Product Strategy, Enterprise Growth & Architecture Innovation",
      desc: "Co-founded Brosdev with a vision to build a world-class IT engineering firm. Drives global enterprise partnerships, client growth, and high-performance product execution.",
      badge: "CO-FOUNDER",
      stats: "10+ Yrs Systems Leadership",
    },
    {
      name: "PRIYANSHU",
      role: "CO-FOUNDER & CTO",
      focus: "Principal Systems Architect, Cloud Infrastructure & AI Lead",
      desc: "Architects Brosdev's core tech stack, autonomous AI engines, and microservices infrastructure. Obsessed with sub-millisecond performance, clean code, and zero-downtime scaling.",
      badge: "CO-FOUNDER",
      stats: "10+ Yrs Engineering Mastery",
    },
  ];

  const teamRoles = [
    { title: "Principal Solutions Architects", count: "8+ Senior Experts", exp: "10+ Yrs Avg Experience", desc: "Enterprise cloud, microservices, and security infrastructure specialists." },
    { title: "Full-Stack Software Engineers", count: "14+ Lead Developers", exp: "7+ Yrs Avg Experience", desc: "React, Next.js, Node.js, Python, and Golang backend engineers." },
    { title: "AI & LLM Research Scientists", count: "6+ ML Specialists", exp: "6+ Yrs Avg Experience", desc: "Autonomous AI agents, RAG vector pipelines, and vLLM model optimization." },
    { title: "UI/UX Product Designers", count: "4+ Design Directors", exp: "8+ Yrs Avg Experience", desc: "Figma design systems, glassmorphism UI, and interactive micro-animations." },
  ];

  const values = [
    {
      title: "FOUNDED ON GENUINE FRIENDSHIP & TRUST",
      desc: "Our culture is rooted in a decade-long bond between our co-founders. Transparency, mutual respect, and zero office politics are hardcoded into our DNA.",
    },
    {
      title: "UNCOMPROMISING ENGINEERING EXCELLENCE",
      desc: "We don't take shortcuts. Every line of code, database index, and API contract is crafted to enterprise standards with strict automated testing.",
    },
    {
      title: "RELENTLESS INNOVATION & SPEED",
      desc: "From late-night hackathons to multi-million dollar client deployments, we move fast without breaking reliability or security compliance.",
    },
  ];

  return (
    <main className="min-h-screen bg-[#FAF8F5] text-slate-900 selection:bg-[#A90706] selection:text-white font-sans antialiased">
      <Navbar />

      {/* Header Banner */}
      <section className="pt-36 pb-20 border-b border-[#E2DDD5] bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-[#E2DDD5] mb-6">
            <span className="w-2 h-2 bg-[#A90706]"></span>
            <span className="font-condensed text-xs font-normal tracking-widest text-[#A90706] uppercase">
              // THE PEOPLE BEHIND BROSDEV
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-normal text-slate-900 tracking-tight leading-none uppercase mb-6 font-[var(--font-geist)]">
            OUR TEAM &amp; ORIGIN STORY
          </h1>

          <p className="text-slate-700 text-lg sm:text-xl font-normal max-w-3xl leading-relaxed font-[var(--font-geist)]">
            How a lifelong friendship between two passionate engineers evolved into a high-growth, global IT engineering powerhouse.
          </p>
        </div>
      </section>

      {/* Hero Founders' Story Feature Section */}
      <section className="py-20 bg-white border-b border-[#E2DDD5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="bg-[#FAF8F5] border-2 border-slate-900 p-8 sm:p-14 shadow-2xl space-y-10">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#E2DDD5] pb-6">
              <span className="font-condensed text-xs font-normal text-[#A90706] uppercase tracking-widest">
                // FOUNDERS' CHAPTER • FROM FRIENDSHIP TO TECH STARTUP
              </span>
              <span className="font-condensed text-xs font-normal text-slate-500 uppercase tracking-widest">
                ESTABLISHED 2024 • GLOBAL PRESENCE
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7 space-y-6">
                <h2 className="text-3xl sm:text-5xl font-normal text-slate-900 uppercase tracking-tight leading-tight font-[var(--font-geist)]">
                  TWO FRIENDS, ONE UNSTOPPABLE TECH VISION
                </h2>

                <p className="text-slate-700 text-base sm:text-lg font-normal leading-relaxed font-[var(--font-geist)]">
                  Brosdev was born from an extraordinary friendship between two engineering classmates who shared an obsession for solving complex digital problems. What started as late-night coding sessions, building experimental apps and debugging server architectures in a university dorm, rapidly transformed into a full-scale IT software engineering studio.
                </p>

                <p className="text-slate-700 text-base font-normal leading-relaxed font-[var(--font-geist)]">
                  Fuelled by mutual trust, relentless ambition, and a commitment to radical engineering quality, our founders turned their passion project into a global technology startup. Today, Brosdev powers digital transformation for scaleups and enterprises across the USA, Germany, France, Canada, and India.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 font-condensed font-normal">
                  <div className="p-4 bg-white border border-[#E2DDD5]">
                    <span className="text-2xl font-normal text-slate-900 block font-[var(--font-geist)]">10+ YRS</span>
                    <span className="text-[10px] text-slate-500 uppercase">SHARED FRIENDSHIP &amp; COLLABORATION</span>
                  </div>
                  <div className="p-4 bg-white border border-[#E2DDD5]">
                    <span className="text-2xl font-normal text-[#A90706] block font-[var(--font-geist)]">30+</span>
                    <span className="text-[10px] text-slate-500 uppercase">WORLD-CLASS ENGINEERS</span>
                  </div>
                  <div className="p-4 bg-white border border-[#E2DDD5]">
                    <span className="text-2xl font-normal text-slate-900 block font-[var(--font-geist)]">6</span>
                    <span className="text-[10px] text-slate-500 uppercase">GLOBAL LOCATIONS</span>
                  </div>
                </div>
              </div>

              {/* Founders Cards */}
              <div className="lg:col-span-5 space-y-6">
                {founders.map((founder, idx) => (
                  <div key={idx} className="p-6 bg-white border-2 border-slate-900 shadow-md space-y-3">
                    <div className="flex items-center justify-between border-b border-[#E2DDD5] pb-2">
                      <span className="font-condensed text-xs font-normal text-[#A90706] uppercase tracking-widest">
                        {founder.badge}
                      </span>
                      <span className="font-condensed text-[10px] font-normal text-slate-500 uppercase">
                        {founder.stats}
                      </span>
                    </div>

                    <h3 className="text-2xl font-normal text-slate-900 uppercase font-[var(--font-geist)]">
                      {founder.name}
                    </h3>
                    <p className="text-xs font-normal text-[#A90706] uppercase font-condensed">
                      {founder.role}
                    </p>
                    <p className="text-xs text-slate-600 font-normal leading-relaxed">
                      {founder.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Core Engineering Squad Roles Grid */}
      <section className="py-20 bg-[#FAF8F5] border-b border-[#E2DDD5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="border-b-2 border-slate-900 pb-4 mb-12">
            <span className="font-condensed text-xs font-normal text-[#A90706] uppercase tracking-widest block mb-1">
              // MULTI-DISCIPLINARY COHORTS
            </span>
            <h2 className="text-3xl sm:text-4xl font-normal text-slate-900 uppercase tracking-tight font-[var(--font-geist)]">
              OUR ENGINEERING ROLES &amp; SQUADS
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-2 border-slate-900 bg-white divide-y sm:divide-y-0 divide-slate-900 shadow-xl">
            {teamRoles.map((role, i) => (
              <div key={i} className="p-8 hover:bg-[#FAF8F5] transition-colors flex flex-col justify-between space-y-6">
                <div>
                  <span className="font-condensed text-xs font-normal text-[#A90706] uppercase tracking-widest block mb-2">
                    {role.exp}
                  </span>
                  <h3 className="font-condensed text-xl font-normal text-slate-900 uppercase tracking-tight mb-2 font-[var(--font-geist)]">
                    {role.title}
                  </h3>
                  <span className="font-condensed text-sm font-normal text-[#A90706] uppercase block mb-3">
                    {role.count}
                  </span>
                  <p className="text-xs text-slate-600 font-normal leading-relaxed">
                    {role.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Core Cultural Values */}
      <section className="py-20 bg-white border-b border-[#E2DDD5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-3xl mx-auto">
            <span className="font-condensed text-xs font-normal text-[#A90706] uppercase tracking-widest block mb-2">
              // GUIDING PRINCIPLES
            </span>
            <h2 className="text-3xl sm:text-4xl font-normal text-slate-900 uppercase tracking-tight font-[var(--font-geist)]">
              THE VALUES THAT POWER OUR GROWTH
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((v, i) => (
              <div key={i} className="p-8 bg-[#FAF8F5] border border-[#E2DDD5] space-y-4 hover:border-slate-900 transition-colors">
                <div className="w-8 h-8 bg-[#A90706] text-white font-condensed text-xs font-normal flex items-center justify-center">
                  0{i + 1}
                </div>
                <h3 className="font-condensed text-lg font-normal text-slate-900 uppercase tracking-wide">
                  {v.title}
                </h3>
                <p className="text-xs text-slate-600 font-normal leading-relaxed">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Join Squad CTA */}
          <div className="bg-slate-900 text-white p-10 sm:p-12 border-2 border-slate-900 text-center space-y-6 shadow-2xl">
            <span className="font-condensed text-xs font-normal text-[#A90706] uppercase tracking-widest block">
              // WANT TO WORK WITH OUR SQUAD?
            </span>
            <h3 className="text-3xl sm:text-4xl font-normal text-white uppercase tracking-tight font-[var(--font-geist)]">
              BUILD YOUR DEDICATED TEAM OR JOIN OUR COHORT
            </h3>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <Link
                href={`/${locale}/build-team`}
                className="px-8 py-4 bg-[#A90706] hover:bg-[#880504] text-white font-condensed text-xs font-normal uppercase tracking-widest transition-colors flex items-center gap-2 cursor-pointer"
              >
                <span>HIRE PRE-SCREENED DEVELOPERS</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
              <Link
                href={`/${locale}/company/careers`}
                className="px-8 py-4 bg-white border border-white text-slate-900 hover:bg-slate-200 font-condensed text-xs font-normal uppercase tracking-widest transition-colors"
              >
                VIEW OPEN CAREER POSITIONS
              </Link>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
