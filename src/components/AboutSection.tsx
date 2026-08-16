"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Terminal, Zap, Cpu, ShieldCheck, Award, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { useTranslation } from "@/context/TranslationContext";

export default function AboutSection() {
  const { t, locale } = useTranslation();

  const pillars = [
    {
      number: "01",
      title: t.about.p1Title,
      desc: t.about.p1Desc,
      icon: Terminal,
      tag: "CORE ARCHITECTURE",
    },
    {
      number: "02",
      title: t.about.p2Title,
      desc: t.about.p2Desc,
      icon: Zap,
      tag: "SPEED TO MARKET",
    },
    {
      number: "03",
      title: t.about.p3Title,
      desc: t.about.p3Desc,
      icon: Cpu,
      tag: "AI INTEGRATION",
    },
    {
      number: "04",
      title: t.about.p4Title,
      desc: t.about.p4Desc,
      icon: ShieldCheck,
      tag: "COMPLIANCE & RISK",
    },
  ];

  return (
    <section id="company" className="py-24 sm:py-32 bg-[#FAF8F5] border-b border-[#E2DDD5] relative font-sans antialiased">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header Line Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start mb-16">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-[#E2DDD5] mb-4">
              <span className="w-2 h-2 bg-[#A90706]"></span>
              <span className="font-condensed text-xs font-normal tracking-widest text-[#A90706] uppercase">
                {t.about.tag}
              </span>
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-normal text-slate-900 tracking-tight leading-[1.04] uppercase font-[var(--font-geist)]">
              {t.about.headline}
            </h2>
          </div>

          <div className="lg:col-span-5">
            <div className="p-6 bg-white border border-[#E2DDD5] shadow-xs">
              <p className="text-slate-800 text-base sm:text-lg font-normal leading-relaxed mb-4 font-[var(--font-geist)]">
                {t.about.quote}
              </p>
              <div className="flex flex-wrap items-center gap-2 sm:gap-4 pt-2 border-t border-[#E2DDD5] text-xs font-condensed font-normal tracking-widest text-slate-500 uppercase">
                <span>EST. 2024</span>
                <span>•</span>
                <span>HUBS: INDIA &amp; CANADA</span>
                <span className="hidden sm:inline">•</span>
                <span className="block sm:inline w-full sm:w-auto">SERVING: AU, UK, NZ, CA, US, DE, FR &amp; NY</span>
              </div>
            </div>
          </div>
        </div>

        {/* Pillars 4-Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-2 border-slate-900 bg-white divide-y sm:divide-y-0 divide-slate-900 mb-16 shadow-lg">
          {pillars.map((item) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.number}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className="p-8 hover:bg-[#FAF8F5] transition-colors group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <span className="font-condensed text-4xl font-normal text-slate-300 group-hover:text-[#A90706] transition-colors">
                      {item.number}
                    </span>
                    <div className="w-12 h-12 bg-white border border-[#E2DDD5] flex items-center justify-center text-slate-900 group-hover:bg-[#A90706] group-hover:border-[#A90706] group-hover:text-white transition-all shadow-xs">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  <span className="font-condensed text-[10px] font-normal text-[#A90706] uppercase tracking-widest block mb-2">
                    {item.tag}
                  </span>

                  <h3 className="font-condensed text-xl font-normal text-slate-900 mb-3 uppercase tracking-tight font-[var(--font-geist)]">
                    {item.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Manifesto & Performance Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

          {/* Left Bento Box (7 Cols): Studio Capabilities */}
          <div className="lg:col-span-7 bg-white border border-[#E2DDD5] p-8 sm:p-10 flex flex-col justify-between">
            <div>
              <span className="font-condensed text-xs font-normal text-[#A90706] uppercase tracking-widest block mb-4">
                WHY LEADING TECH COMPANIES CHOOSE US
              </span>

              <h3 className="text-2xl sm:text-3xl font-normal text-slate-900 uppercase tracking-tight mb-6 font-[var(--font-geist)]">
                From Prototype to High-Traffic Production Infrastructure
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#A90706] shrink-0 mt-0.5" />
                  <span className="text-xs font-normal text-slate-800 uppercase tracking-wider">
                    Full-Stack Web &amp; Mobile Apps
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#A90706] shrink-0 mt-0.5" />
                  <span className="text-xs font-normal text-slate-800 uppercase tracking-wider">
                    Custom AI &amp; LLM Workflows
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#A90706] shrink-0 mt-0.5" />
                  <span className="text-xs font-normal text-slate-800 uppercase tracking-wider">
                    Cloud Native &amp; Kubernetes
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#A90706] shrink-0 mt-0.5" />
                  <span className="text-xs font-normal text-slate-800 uppercase tracking-wider">
                    24/7 Enterprise SLA Support
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-[#E2DDD5] flex items-center justify-between">
              <span className="font-condensed text-xs font-normal text-slate-500 uppercase tracking-widest">
                TRANSPARENT SPRINT PRICING
              </span>

              <Link
                href={`/${locale}/services`}
                className="font-condensed text-xs font-normal text-slate-900 hover:text-[#A90706] uppercase tracking-widest flex items-center gap-1 transition-colors cursor-pointer group"
              >
                <span>VIEW SERVICES</span>
                <ArrowUpRight className="w-4 h-4 shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </div>

          {/* Right Bento Box (5 Cols): High-Contrast Dark Stats Banner */}
          <div className="lg:col-span-5 bg-slate-900 text-white p-8 sm:p-10 border border-slate-900 flex flex-col justify-between shadow-xl">
            <div>
              <Link href={`/${locale}/company/alliances`} className="flex items-center gap-3 mb-6 group cursor-pointer">
                <div className="w-10 h-10 bg-[#A90706] flex items-center justify-center group-hover:bg-[#880504] transition-colors">
                  <Award className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-condensed text-sm font-normal uppercase tracking-wider text-white group-hover:text-[#A90706] transition-colors">
                    RECOGNIZED FOR SPEED &amp; CODE QUALITY
                  </h3>
                  <p className="text-[10px] text-slate-400 font-condensed font-normal uppercase">
                    VIEW GLOBAL ALLIANCES &rarr;
                  </p>
                </div>
              </Link>

              <p className="text-slate-300 text-sm leading-relaxed mb-8 font-normal">
                Over 100+ digital platforms shipped across Fintech, SaaS, Healthcare, AI, and E-Commerce.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 border-t border-slate-800 pt-6">
              <Link href={`/${locale}/case-studies`} className="group cursor-pointer">
                <div className="font-condensed text-3xl font-black text-[#A90706] group-hover:underline">99.8%</div>
                <div className="font-condensed text-[10px] font-normal text-slate-400 uppercase tracking-widest">
                  {t.about.satisfaction}
                </div>
              </Link>

              <Link href={`/${locale}/case-studies`} className="group cursor-pointer">
                <div className="font-condensed text-3xl font-black text-white group-hover:text-[#A90706]">100+</div>
                <div className="font-condensed text-[10px] font-normal text-slate-400 uppercase tracking-widest">
                  {t.about.shipped}
                </div>
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
