"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useTranslation } from "@/context/TranslationContext";
import {
  CheckCircle2,
  Clock,
  ShieldCheck,
  Zap,
  Users,
  ArrowUpRight,
  MessageSquare,
  GitBranch,
  Terminal,
  Calendar,
  Award
} from "lucide-react";

export default function OnboardingContent() {
  const { locale } = useTranslation();

  const onboardingPhases = [
    {
      phase: "PHASE 01 • DAY 1",
      title: "KICKOFF & SECURE ONBOARDING",
      timeframe: "Within 24 Hours of Signing",
      desc: "Immediate setup of dedicated communication channels and security protocols.",
      steps: [
        "Fully Executed Mutual NDA & Intellectual Property Assignment Agreement",
        "Dedicated Slack / Microsoft Teams / Discord Channel Provisioning",
        "Granting Access to GitHub / GitLab Code Repositories & Cloud Gateways",
        "Assignment of Dedicated Principal Architect & Senior Developer Lead"
      ],
      badgeBg: "bg-[#A90706] text-white"
    },
    {
      phase: "PHASE 02 • DAYS 2 - 3",
      title: "SPRINT ZERO & ARCHITECTURE PLANNING",
      timeframe: "48 to 72 Hours",
      desc: "Aligning on technical specifications, API contracts, and dev environments.",
      steps: [
        "Technical Kickoff Call & Architecture Deep-Dive with Client CTO/Product Lead",
        "Definition of Sprint 1 Backlog Items, Acceptance Criteria & Deliverables",
        "Local & Staging Environment Setup with Docker Containers & CI/CD Pipelines",
        "Establishing Daily Standup Times (Matching Client Timezone Overlap)"
      ],
      badgeBg: "bg-slate-900 text-white"
    },
    {
      phase: "PHASE 03 • DAYS 4 - 10",
      title: "FIRST SPRINT EXECUTION & LIVE DEMO",
      timeframe: "Days 4 to 10",
      desc: "Rapid development velocity with daily code commits and automated testing.",
      steps: [
        "Daily Code Pushes to Staging Repository with Automated PR Review Checks",
        "Daily 15-Minute Standup Syncs & Direct Slack Access to Engineers",
        "Comprehensive Automated Testing (Jest Unit Tests & Playwright E2E Suites)",
        "End-of-Sprint 1 Live Video Demonstration of Working Features"
      ],
      badgeBg: "bg-slate-800 text-white"
    },
    {
      phase: "PHASE 04 • DAY 14",
      title: "2-WEEK RISK-FREE TRIAL EVALUATION",
      timeframe: "Day 14 Benchmark",
      desc: "Full evaluation of squad code quality, communication, and velocity.",
      steps: [
        "Formal Review of All Delivered Code, Documentation & Test Coverage",
        "Client Approval & Confirmation to Proceed with Long-Term Sprint Roadmap",
        "Zero-Risk Guarantee: If Unsatisfied, Zero Billable Obligation for Trial Period",
        "Transition to Recurring 2-Week Agile Delivery Cadence"
      ],
      badgeBg: "bg-[#A90706] text-white"
    }
  ];

  const SLAs = [
    {
      title: "15-MINUTE RESPONSE TIME",
      desc: "Instant Slack/Teams response during agreed overlapping working hours."
    },
    {
      title: "< 48-HOUR SQUAD REPLACEMENT",
      desc: "Instant developer replacement guarantee if skill requirements change."
    },
    {
      title: "100% CODE OWNERSHIP",
      desc: "Immediate ownership of all commits, PRs, and database schemas."
    },
    {
      title: "BANK-GRADE SECURITY",
      desc: "Encrypted workspaces, SOC-2 readiness, and zero third-party data sharing."
    }
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
              // CLIENT JOURNEY &amp; GUARANTEE
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-normal text-slate-900 tracking-tight leading-none uppercase mb-6 font-[var(--font-geist)]">
            CLIENT ONBOARDING &amp; PROCESS
          </h1>

          <p className="text-slate-700 text-lg sm:text-xl font-normal max-w-3xl leading-relaxed font-[var(--font-geist)]">
            From contract signing to Day 14 production commits — discover how Brosdev delivers a transparent, frictionless, and risk-free engineering onboarding experience.
          </p>
        </div>
      </section>

      {/* Onboarding Timeline Grid */}
      <section className="py-20 bg-white border-b border-[#E2DDD5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="border-b-2 border-slate-900 pb-4">
            <span className="font-condensed text-xs font-normal text-[#A90706] uppercase tracking-widest block mb-1">
              // DAY 1 TO DAY 14 ROADMAP
            </span>
            <h2 className="text-3xl sm:text-4xl font-normal text-slate-900 uppercase tracking-tight font-[var(--font-geist)]">
              OUR 4-PHASE ONBOARDING WORKFLOW
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {onboardingPhases.map((phase, idx) => (
              <div
                key={idx}
                className="bg-[#FAF8F5] border-2 border-slate-900 p-8 shadow-xl space-y-6 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-[#E2DDD5] pb-3">
                    <span className={`font-condensed text-xs font-normal px-3 py-1 uppercase tracking-widest ${phase.badgeBg}`}>
                      {phase.phase}
                    </span>
                    <span className="font-condensed text-xs text-slate-500 uppercase tracking-wider flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[#A90706]" />
                      <span>{phase.timeframe}</span>
                    </span>
                  </div>

                  <h3 className="text-2xl font-normal text-slate-900 uppercase font-[var(--font-geist)] tracking-tight">
                    {phase.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
                    {phase.desc}
                  </p>

                  <div className="space-y-3 pt-2">
                    <span className="font-condensed text-xs font-normal text-slate-900 uppercase tracking-wider block">
                      DELIVERABLES &amp; ACTIONS:
                    </span>
                    {phase.steps.map((step, sIdx) => (
                      <div key={sIdx} className="flex items-start gap-2.5 text-xs text-slate-700 font-normal">
                        <CheckCircle2 className="w-4 h-4 text-[#A90706] shrink-0 mt-0.5" />
                        <span>{step}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-[#E2DDD5] flex items-center justify-between font-condensed text-[10px] text-slate-500 uppercase tracking-wider">
                  <span>PHASE 0{idx + 1} COMPLETE</span>
                  <span className="text-[#A90706] font-bold">BROSDEV SLA</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SLA Guarantees Banner */}
      <section className="py-20 bg-[#FAF8F5] border-b border-[#E2DDD5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <span className="font-condensed text-xs font-normal text-[#A90706] uppercase tracking-widest block">
              // CLIENT SERVICE LEVEL AGREEMENTS
            </span>
            <h2 className="text-3xl sm:text-4xl font-normal text-slate-900 uppercase tracking-tight font-[var(--font-geist)]">
              OUR HARDCODED SERVICE GUARANTEES
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SLAs.map((sla, idx) => (
              <div key={idx} className="p-6 bg-white border-2 border-slate-900 space-y-3 shadow-md">
                <div className="w-8 h-8 bg-[#A90706] text-white flex items-center justify-center font-condensed text-xs">
                  0{idx + 1}
                </div>
                <h3 className="font-condensed text-base font-normal text-slate-900 uppercase tracking-tight font-[var(--font-geist)]">
                  {sla.title}
                </h3>
                <p className="text-xs text-slate-600 font-normal leading-relaxed">
                  {sla.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="bg-slate-900 text-white p-10 text-center space-y-6 shadow-2xl border-2 border-slate-900">
            <span className="font-condensed text-xs font-normal text-[#A90706] uppercase tracking-widest block">
              // READY TO START YOUR 2-WEEK TRIAL?
            </span>
            <h3 className="text-3xl sm:text-4xl font-normal text-white uppercase tracking-tight font-[var(--font-geist)]">
              INITIATE YOUR ONBOARDING TODAY
            </h3>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <Link
                href={`/${locale}/build-team`}
                className="px-8 py-4 bg-[#A90706] hover:bg-[#880504] text-white font-condensed text-xs font-normal uppercase tracking-widest transition-colors flex items-center gap-2 cursor-pointer"
              >
                <span>BUILD DEDICATED SQUAD</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
              <Link
                href={`/${locale}/book-consultation`}
                className="px-8 py-4 bg-white text-slate-900 hover:bg-slate-200 font-condensed text-xs font-normal uppercase tracking-widest transition-colors cursor-pointer"
              >
                SCHEDULE KICKOFF CALL
              </Link>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
