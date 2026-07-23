"use client";

import Link from "next/link";
import { useTranslation } from "@/context/TranslationContext";
import {
  Users,
  Zap,
  ShieldCheck,
  Code,
  Sparkles,
  CheckCircle2,
  Terminal,
  Cpu,
  HeartHandshake,
  Trees,
  Award,
  ArrowUpRight,
  MessageSquare,
  Layers,
  Rocket
} from "lucide-react";

export default function SquadDeliveryAndCulture() {
  const { locale } = useTranslation();
  const deliveryModels = [
    {
      badge: "MOST POPULAR",
      title: "DEDICATED FULL-STACK SQUAD",
      subtitle: "Complete autonomous engineering pod for end-to-end product development.",
      composition: "1 Principal Architect • 4 Senior Full-Stack Engineers • 1 QA Lead • 1 UI/UX Specialist",
      bestFor: "Greenfield enterprise platforms, legacy modernizations, and rapid MVP-to-Scale rebuilds.",
      perks: [
        "100% Dedicated Sprint Focus",
        "Direct GitHub, Jira & Slack Integration",
        "Daily Agile Standups & Weekly Demos",
        "Full Ownership of Code Base & Architecture"
      ],
      highlightColor: "border-[#A90706]",
      tagBg: "bg-[#A90706] text-white"
    },
    {
      badge: "NICHE TECH",
      title: "SPECIALIST AI & CLOUD POD",
      subtitle: "High-throughput cloud architects and LLM/ML researchers on demand.",
      composition: "1 AI Infrastructure Architect • 2 ML Pipeline Engineers • 1 Security Specialist",
      bestFor: "Enterprise RAG vector search, custom LLM fine-tuning, sub-millisecond cloud scaling.",
      perks: [
        "Sub-Second Latency Optimization",
        "Proprietary Vector Database Benchmarking",
        "Bank-Grade SOC-2 & ISO Compliance",
        "Real-Time ML Pipeline Monitoring"
      ],
      highlightColor: "border-slate-900",
      tagBg: "bg-slate-900 text-white"
    },
    {
      badge: "FLEXIBLE SCALE",
      title: "STAFF AUGMENTATION POD",
      subtitle: "Embed top-tier pre-vetted engineers directly into your engineering team.",
      composition: "Dedicated Senior Engineers (Next.js, Python, Golang, React Native, Java)",
      bestFor: "Plugging critical skill gaps, accelerating sprint velocity, and meeting tight launch deadlines.",
      perks: [
        "Zero Onboarding Delay (< 48 Hrs Start)",
        "Direct Client Workflow Management",
        "Same Timezone / Overlapping Hours",
        "Flexible Monthly Scaling (Up or Down)"
      ],
      highlightColor: "border-slate-900",
      tagBg: "bg-slate-800 text-white"
    }
  ];

  const codeGuarantees = [
    {
      number: "01",
      icon: Zap,
      title: "SUB-100MS LATENCY BENCHMARK",
      desc: "Every API endpoint, query, and micro-animation is benchmarked for sub-second execution. We optimize indexes, edge caches, and bundle sizes religiously."
    },
    {
      number: "02",
      icon: CheckCircle2,
      title: "85%+ AUTOMATED TEST COVERAGE",
      desc: "Strict CI/CD gates enforce comprehensive unit, integration, and Playwright E2E regression tests before any pull request hits production."
    },
    {
      number: "03",
      icon: ShieldCheck,
      title: "ZERO-TRUST SECURITY & SOC-2",
      desc: "Bank-grade encryption at rest and in transit. Automated SAST/DAST vulnerability scanning, OWASP Top 10 compliance, and secret management."
    },
    {
      number: "04",
      icon: MessageSquare,
      title: "DIRECT DEVELOPER ACCESS",
      desc: "No account manager gatekeeping. Speak directly to senior engineers and architects on Slack, Discord, or Teams daily for instant clarity."
    }
  ];

  const cultureHighlights = [
    {
      icon: Rocket,
      tag: "// INNOVATION SPRINTS",
      title: "48-HOUR ARCHITECTURE HACKATHONS",
      desc: "Quarterly internal hackathons where our engineers build experimental AI tools, benchmark edge frameworks, and contribute to open-source software.",
      bgCard: "bg-white border-2 border-slate-900",
      iconBg: "bg-slate-900 text-white"
    },
    {
      icon: HeartHandshake,
      tag: "// WORK-LIFE BALANCE",
      title: "FESTIVE DAYS = FAMILY DAYS",
      desc: "Mandatory paid festive leaves ensuring engineers celebrate cultural festivals with family, completely disconnected from work and recharged.",
      bgCard: "bg-[#FAF8F5] border-2 border-[#E2DDD5] hover:border-slate-900",
      iconBg: "bg-[#A90706] text-white"
    },
    {
      icon: Trees,
      tag: "// NATURE CAMPUS",
      title: "SUNLIT ECO-FRIENDLY WORKSPACE",
      desc: "Our GIFT City campus features botanical zones, quiet deep-focus coding pods, and natural daylight architecture for calm problem solving.",
      bgCard: "bg-[#FAF8F5] border-2 border-[#E2DDD5] hover:border-slate-900",
      iconBg: "bg-emerald-800 text-white"
    },
    {
      icon: Award,
      tag: "// CONTINUOUS GROWTH",
      title: "UNLIMITED CERTIFICATIONS & BOOKS",
      desc: "100% company-reimbursed AWS, GCP, and Kubernetes certifications, plus unlimited tech books, course allowances, and conference tickets.",
      bgCard: "bg-white border-2 border-slate-900",
      iconBg: "bg-slate-900 text-white"
    }
  ];

  return (
    <div className="space-y-0">
      {/* ------------------------------------------------------------- */}
      {/* SECTION 3: SQUAD ENGAGEMENT & DELIVERY POD MODELS */}
      {/* ------------------------------------------------------------- */}
      <section className="py-20 bg-[#FAF8F5] border-b border-[#E2DDD5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="border-b-2 border-slate-900 pb-6 mb-12">
            <span className="font-condensed text-xs font-normal text-[#A90706] uppercase tracking-widest block mb-1">
              // SQUAD ENGAGEMENT MODELS
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-slate-900 uppercase tracking-tight font-[var(--font-geist)]">
              HOW CLIENTS ENGAGE OUR ENGINEERING SQUADS
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2 max-w-3xl font-normal">
              Flexible, high-throughput engineering delivery models designed for ambitious scaleups and global enterprises.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {deliveryModels.map((model, idx) => (
              <div
                key={idx}
                className={`bg-white border-2 ${model.highlightColor} p-8 shadow-xl flex flex-col justify-between space-y-6 hover:-translate-y-1 transition-transform relative`}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className={`font-condensed text-[10px] font-normal px-2.5 py-1 uppercase tracking-widest ${model.tagBg}`}>
                      {model.badge}
                    </span>
                    <span className="font-condensed text-xs text-slate-400 uppercase tracking-wider">
                      MODEL 0{idx + 1}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-normal text-slate-900 uppercase font-[var(--font-geist)] tracking-tight">
                    {model.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
                    {model.subtitle}
                  </p>

                  <div className="p-3 bg-[#FAF8F5] border border-[#E2DDD5] font-condensed text-xs text-slate-800 font-normal">
                    <span className="text-[#A90706] block font-semibold mb-1 uppercase text-[10px] tracking-widest">// POD COMPOSITION</span>
                    {model.composition}
                  </div>

                  <div className="space-y-2 pt-2">
                    <span className="font-condensed text-xs text-slate-900 font-semibold uppercase tracking-wider block border-b border-[#E2DDD5] pb-1">
                      KEY POD ADVANTAGES:
                    </span>
                    {model.perks.map((perk, pIdx) => (
                      <div key={pIdx} className="flex items-center gap-2 text-xs text-slate-700 font-normal">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#A90706] shrink-0" />
                        <span>{perk}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-[#E2DDD5]">
                  <Link
                    href={`/${locale}/build-team`}
                    className="w-full py-3 bg-slate-900 hover:bg-[#A90706] text-white font-condensed text-xs font-normal uppercase tracking-widest transition-colors flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>ENGAGE THIS POD</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* SECTION 4: CODE QUALITY & TECHNICAL GUARANTEES */}
      {/* ------------------------------------------------------------- */}
      <section className="py-20 bg-white border-b border-[#E2DDD5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="font-condensed text-xs font-normal text-[#A90706] uppercase tracking-widest block">
              // TECHNICAL GUARANTEES
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-slate-900 uppercase tracking-tight font-[var(--font-geist)]">
              OUR UNCOMPROMISING CODE QUALITY STANDARDS
            </h2>
            <p className="text-slate-600 text-sm sm:text-base font-normal">
              We hold ourselves to rigorous engineering standards on every sprint, release, and deployment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {codeGuarantees.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="p-6 bg-[#FAF8F5] border-2 border-slate-900 space-y-4 hover:bg-white transition-colors flex flex-col justify-between shadow-md"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 bg-[#A90706] text-white flex items-center justify-center">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="font-condensed text-xs font-bold text-slate-400 uppercase tracking-wider">
                        {item.number}
                      </span>
                    </div>

                    <h3 className="font-condensed text-lg font-normal text-slate-900 uppercase tracking-tight font-[var(--font-geist)]">
                      {item.title}
                    </h3>

                    <p className="text-xs text-slate-600 font-normal leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-[#E2DDD5]">
                    <span className="font-condensed text-[10px] text-[#A90706] uppercase tracking-widest font-normal">
                      ✓ STRICTLY ENFORCED
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* SECTION 5: BROSDEV CULTURE & LIFE AT BROSDEV */}
      {/* ------------------------------------------------------------- */}
      <section className="py-20 bg-[#FAF8F5] border-b border-[#E2DDD5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="flex flex-col md:flex-row md:items-end justify-between border-b-2 border-slate-900 pb-6 mb-12 gap-6">
            <div>
              <span className="font-condensed text-xs font-normal text-[#A90706] uppercase tracking-widest block mb-1">
                // BROSDEV CULTURE &amp; LIFE
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-slate-900 uppercase tracking-tight font-[var(--font-geist)]">
                LIFE INSIDE OUR GLOBAL STUDIO
              </h2>
              <p className="text-slate-600 text-sm sm:text-base mt-2 max-w-2xl font-normal">
                Where deep technical obsession meets human compassion, green serenity, and continuous learning.
              </p>
            </div>

            <Link
              href={`/${locale}/company/careers`}
              className="px-6 py-3 bg-[#A90706] hover:bg-[#880504] text-white font-condensed text-xs font-normal uppercase tracking-widest transition-colors inline-flex items-center gap-2 shrink-0 self-start md:self-auto cursor-pointer"
            >
              <span>EXPLORE CAREERS AT BROSDEV</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {cultureHighlights.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className={`p-8 ${item.bgCard} transition-all space-y-4 shadow-lg flex flex-col justify-between`}
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className={`w-12 h-12 flex items-center justify-center ${item.iconBg}`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="font-condensed text-xs font-normal text-[#A90706] uppercase tracking-widest">
                        {item.tag}
                      </span>
                    </div>

                    <h3 className="text-2xl font-normal text-slate-900 uppercase font-[var(--font-geist)] tracking-tight">
                      {item.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#E2DDD5] flex items-center justify-between font-condensed text-xs text-slate-500 uppercase tracking-wider">
                    <span>ENGINEERING CULTURE</span>
                    <span className="text-[#A90706] font-bold">BROSDEV // 2026</span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>
    </div>
  );
}
