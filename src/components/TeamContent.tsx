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
  Globe,
  HeartHandshake,
  Trees,
  Building2,
} from "lucide-react";

interface TeamContentProps {
  locale?: string;
}

export default function TeamContent({ locale = "en" }: TeamContentProps) {

  const teamRoles = [
    { title: "Principal Solutions Architects", count: "8+ Senior Experts", exp: "10+ Yrs Avg Experience", desc: "Enterprise cloud, microservices, and security infrastructure specialists." },
    { title: "Full-Stack Software Engineers", count: "14+ Lead Developers", exp: "7+ Yrs Avg Experience", desc: "React, Next.js, Node.js, Python, and Golang backend engineers." },
    { title: "AI & LLM Research Scientists", count: "6+ ML Specialists", exp: "6+ Yrs Avg Experience", desc: "Autonomous AI agents, RAG vector pipelines, and vLLM model optimization." },
    { title: "UI/UX Product Designers", count: "4+ Design Directors", exp: "8+ Yrs Avg Experience", desc: "Figma design systems, glassmorphism UI, and interactive micro-animations." },
  ];

  const cultureValues = [
    {
      title: "FESTIVE DAYS = FAMILY DAYS",
      tag: "// WORK-LIFE BALANCE",
      desc: "We strictly uphold a policy where major festival days are dedicated entirely to family. All engineers receive mandatory paid festive leaves to celebrate cultural traditions with their loved ones, recharged and refreshed.",
      icon: HeartHandshake,
      color: "bg-red-50 text-[#A90706] border-red-200",
    },
    {
      title: "SUNLIT ECO-FRIENDLY CAMPUS",
      tag: "// NATURE-INSPIRED WORKSPACE",
      desc: "Our headquarters features open-air botanical spaces, energy-efficient solar architecture, and quiet green zones. We believe natural surroundings inspire calm problem-solving and break through creative blocks.",
      icon: Trees,
      color: "bg-emerald-50 text-emerald-800 border-emerald-200",
    },
    {
      title: "PEOPLE-FIRST & COMPASSIONATE",
      tag: "// TEAM WELLBEING",
      desc: "Zero toxic hustle, zero ego. We provide unlimited technical book allowances, mental wellness retreats, quarterly bonus sharing, and a collaborative environment where senior architects mentor junior team members.",
      icon: Users,
      color: "bg-blue-50 text-blue-900 border-blue-200",
    },
  ];

  const values = [
    {
      title: "FOUNDED ON INTEGRITY & MUTUAL TRUST",
      desc: "Our culture is rooted in radical ownership, continuous learning, and long-term vision. Transparency, mutual respect, and zero office politics are hardcoded into our DNA.",
    },
    {
      title: "UNCOMPROMISING ENGINEERING EXCELLENCE",
      desc: "We don't take shortcuts. Every line of code, database index, and API contract is crafted to enterprise standards with strict automated testing.",
    },
    {
      title: "RELENTLESS INNOVATION & SPEED",
      desc: "From rapid prototyping to multi-million dollar client deployments, we move fast without breaking reliability or security compliance.",
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
              // THE PEOPLE BEHIND BROSDEV SOLUTIONS
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-normal text-slate-900 tracking-tight leading-none uppercase mb-6 font-[var(--font-geist)]">
            OUR TEAM &amp; LEADERSHIP
          </h1>

          <p className="text-slate-700 text-lg sm:text-xl font-normal max-w-3xl leading-relaxed font-[var(--font-geist)]">
            Powered by world-class software engineers, architects, and technical cohorts — proudly managed by Aagman Group.
          </p>
        </div>
      </section>

      {/* Managed by Aagman Group Section */}
      <section className="py-20 bg-white border-b border-[#E2DDD5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="bg-[#FAF8F5] border-2 border-slate-900 p-8 sm:p-14 shadow-2xl space-y-10">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#E2DDD5] pb-6">
              <span className="font-condensed text-xs font-bold text-[#A90706] uppercase tracking-widest flex items-center gap-2">
                <span className="w-2 h-2 bg-[#A90706] inline-block"></span>
                // PARENT ENTITY &amp; GOVERNANCE
              </span>
              <span className="font-condensed text-xs font-normal text-slate-500 uppercase tracking-widest">
                AN AAGMAN GROUP ENTERPRISE • GLOBAL FOOTPRINT
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7 space-y-6">
                <div className="space-y-2">
                  <span className="font-condensed text-xs font-black text-[#A90706] uppercase tracking-widest block">
                    CORPORATE STEWARDSHIP
                  </span>
                  <h2 className="text-3xl sm:text-5xl font-black text-slate-900 uppercase tracking-tight leading-tight font-[var(--font-geist)]">
                    MANAGED BY AAGMAN GROUP
                  </h2>
                </div>

                <p className="text-slate-700 text-base sm:text-lg font-normal leading-relaxed font-[var(--font-geist)]">
                  BrosDev Solutions is proudly owned and managed by <strong className="text-slate-900 font-semibold">Aagman Group</strong>, a diversified business group committed to building, developing, and scaling high-impact enterprises across technology, modern digital products, and emerging industries.
                </p>

                <p className="text-slate-700 text-base font-normal leading-relaxed font-[var(--font-geist)]">
                  Under the strategic direction, operational stewardship, and capital backing of Aagman Group, BrosDev Solutions operates as a premier software engineering studio. We combine institutional governance with startup agility—powering digital transformation for scaleups and enterprises across AU, UK, NZ, CA, US, DE, FR &amp; NY.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 font-condensed font-normal">
                  <div className="p-4 bg-white border border-[#E2DDD5]">
                    <span className="text-2xl font-black text-slate-900 block font-[var(--font-geist)]">AAGMAN</span>
                    <span className="text-[10px] text-slate-500 uppercase tracking-wider">PARENT GROUP ENTITY</span>
                  </div>
                  <div className="p-4 bg-white border border-[#E2DDD5]">
                    <span className="text-2xl font-black text-[#A90706] block font-[var(--font-geist)]">30+</span>
                    <span className="text-[10px] text-slate-500 uppercase tracking-wider">WORLD-CLASS ENGINEERS</span>
                  </div>
                  <div className="p-4 bg-white border border-[#E2DDD5]">
                    <span className="text-2xl font-black text-slate-900 block font-[var(--font-geist)]">6</span>
                    <span className="text-[10px] text-slate-500 uppercase tracking-wider">GLOBAL LOCATIONS</span>
                  </div>
                </div>
              </div>

              {/* Aagman Group Feature Card */}
              <div className="lg:col-span-5">
                <div className="p-8 bg-white border-2 border-slate-900 shadow-xl space-y-6 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-[#A90706]/5 rounded-bl-full pointer-events-none" />
                  
                  <div className="flex items-center justify-between border-b border-[#E2DDD5] pb-3">
                    <span className="font-condensed text-xs font-bold text-[#A90706] uppercase tracking-widest flex items-center gap-1.5">
                      <Building2 className="w-3.5 h-3.5" />
                      PARENT ORGANIZATION
                    </span>
                    <span className="font-condensed text-[10px] font-normal text-slate-500 uppercase">
                      PORTFOLIO COMPANY
                    </span>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-3xl font-black text-slate-900 uppercase font-[var(--font-geist)] tracking-tight">
                      AAGMAN GROUP
                    </h3>
                    <p className="text-xs font-semibold text-[#A90706] uppercase font-condensed tracking-wider">
                      BUILDING BUSINESSES. CREATING WHAT&apos;S NEXT.
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
                    Aagman Group is a growing business group focused on building, developing, and supporting ambitious companies across technology, digital products, consumer brands, and emerging industries.
                  </p>

                  <div className="pt-2 border-t border-[#E2DDD5] space-y-3">
                    <div className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#A90706]"></span>
                      <span>Autonomous Engineering &amp; Delivery</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#A90706]"></span>
                      <span>Enterprise Security &amp; Global Compliance</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#A90706]"></span>
                      <span>Long-Term Value Creation</span>
                    </div>
                  </div>

                  <div className="pt-2">
                    <Link
                      href={`/${locale}/company/aagman-group`}
                      className="inline-flex items-center justify-between w-full px-5 py-3.5 bg-slate-900 text-white hover:bg-[#A90706] font-condensed text-xs font-black uppercase tracking-widest transition-all duration-200"
                    >
                      <span>EXPLORE AAGMAN GROUP</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
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


      {/* Culture, Family Days & Campus Nature */}
      <section className="py-24 border-b border-[#E2DDD5] bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="font-condensed text-xs font-black text-[#A90706] uppercase tracking-widest block mb-2">
              // LIFE AT BROSDEV SOLUTIONS
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 uppercase tracking-tight font-[var(--font-geist)]">
              CULTURE, FAMILY &amp; NATURE CAMPUS
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-4 font-normal">
              We foster an environment where software engineers thrive personally and professionally, grounded in strong values and green serenity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {cultureValues.map((val, idx) => {
              const Icon = val.icon;
              return (
                <div
                  key={idx}
                  className="bg-white border-2 border-slate-900 p-8 shadow-xl flex flex-col justify-between hover:translate-y-1 transition-transform"
                >
                  <div>
                    <div className={`w-14 h-14 border flex items-center justify-center mb-6 ${val.color}`}>
                      <Icon className="w-7 h-7 shrink-0" />
                    </div>
                    <span className="font-condensed text-[10px] font-black text-[#A90706] uppercase tracking-widest block mb-1">
                      {val.tag}
                    </span>
                    <h3 className="font-condensed text-xl font-black text-slate-900 uppercase tracking-tight mb-3 font-[var(--font-geist)]">
                      {val.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                      {val.desc}
                    </p>
                  </div>
                </div>
              );
            })}
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
                href={`/${locale}/services/engagement-models`}
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
