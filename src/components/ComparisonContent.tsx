"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useTranslation } from "@/context/TranslationContext";
import {
  CheckCircle2,
  XCircle,
  ArrowUpRight,
  ShieldCheck,
  Zap,
  Users,
  Award,
  Globe2
} from "lucide-react";

export default function ComparisonContent() {
  const { locale } = useTranslation();

  const comparisonData = [
    {
      feature: "Engineering SLA & Performance Guarantee",
      brosdev: "Sub-100ms API response & 85%+ test coverage SLA",
      agencies: "Vague quality promises, un-tested codebases",
      freelancers: "No code quality guarantee or testing standards"
    },
    {
      feature: "Direct Technical Access",
      brosdev: "Direct daily Slack/Teams sync with Senior Leads & Architects",
      agencies: "Filtered through non-technical Account Managers",
      freelancers: "Inconsistent availability & timezone gaps"
    },
    {
      feature: "Timezone Overlap & Speed",
      brosdev: "100% overlapping hours (US, UK, EU, Asia)",
      agencies: "Partial overlap, slow ticket turnaround",
      freelancers: "Unpredictable hours & response lag"
    },
    {
      feature: "Intellectual Property & Security",
      brosdev: "100% Immediate Code Ownership under Mutual NDA & SOC-2",
      agencies: "Complex contract retention & IP clauses",
      freelancers: "High risk of IP leak or un-sanitized code"
    },
    {
      feature: "2-Week Risk-Free Trial",
      brosdev: "Included on all dedicated squad plans (Zero fee obligation)",
      agencies: "Strict upfront lock-in contracts with zero trial",
      freelancers: "No trial policy, payment upfront per hour"
    },
    {
      feature: "Developer Replacement SLA",
      brosdev: "Guaranteed developer replacement within < 48 hours",
      agencies: "Weeks delay to re-staff positions",
      freelancers: "Ghosting risk, start over from scratch"
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
              // WHY TOP BRANDS CHOOSE BROSDEV
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-normal text-slate-900 tracking-tight leading-none uppercase mb-6 font-[var(--font-geist)]">
            BROSDEV VS OTHERS
          </h1>

          <p className="text-slate-700 text-lg sm:text-xl font-normal max-w-3xl leading-relaxed font-[var(--font-geist)]">
            Compare Brosdev&apos;s dedicated engineering squads against traditional software outsourcing agencies and freelance gig marketplaces.
          </p>
        </div>
      </section>

      {/* Detailed Comparison Table */}
      <section className="py-20 bg-white border-b border-[#E2DDD5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="border-b-2 border-slate-900 pb-4">
            <span className="font-condensed text-xs font-normal text-[#A90706] uppercase tracking-widest block mb-1">
              // FEATURE-BY-FEATURE BREAKDOWN
            </span>
            <h2 className="text-3xl sm:text-4xl font-normal text-slate-900 uppercase tracking-tight font-[var(--font-geist)]">
              SIDE-BY-SIDE COMPARISON TABLE
            </h2>
          </div>

          <div className="overflow-x-auto border-2 border-slate-900 bg-white shadow-2xl">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-900 text-white font-condensed text-xs uppercase tracking-widest border-b-2 border-slate-900">
                  <th className="p-4 sm:p-6 w-1/4 border-r border-slate-800">EVALUATION CRITERIA</th>
                  <th className="p-4 sm:p-6 w-1/3 bg-[#A90706] text-white border-r border-[#880504]">
                    ⚡ BROSDEV DEDICATED SQUADS
                  </th>
                  <th className="p-4 sm:p-6 w-1/4 border-r border-slate-800">TRADITIONAL OFFSHORE AGENCIES</th>
                  <th className="p-4 sm:p-6 w-1/4">FREELANCE MARKETPLACES</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-900 font-normal text-xs sm:text-sm">
                {comparisonData.map((row, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? "bg-[#FAF8F5]" : "bg-white"}>
                    <td className="p-4 sm:p-6 font-condensed font-normal uppercase text-slate-900 border-r border-[#E2DDD5]">
                      {row.feature}
                    </td>
                    <td className="p-4 sm:p-6 bg-red-50/50 font-medium text-slate-900 border-r border-red-200">
                      <div className="flex items-start gap-2 text-[#A90706]">
                        <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" />
                        <span>{row.brosdev}</span>
                      </div>
                    </td>
                    <td className="p-4 sm:p-6 text-slate-600 border-r border-[#E2DDD5]">
                      <div className="flex items-start gap-2">
                        <XCircle className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                        <span>{row.agencies}</span>
                      </div>
                    </td>
                    <td className="p-4 sm:p-6 text-slate-600">
                      <div className="flex items-start gap-2">
                        <XCircle className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                        <span>{row.freelancers}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* CTA Banner */}
          <div className="bg-[#FAF8F5] border-2 border-slate-900 p-10 text-center space-y-6 shadow-2xl">
            <span className="font-condensed text-xs font-normal text-[#A90706] uppercase tracking-widest block">
              // EXPERIENCE THE BROSDEV DIFFERENCE
            </span>
            <h3 className="text-3xl sm:text-4xl font-normal text-slate-900 uppercase tracking-tight font-[var(--font-geist)]">
              TEST OUR SQUAD FOR 2 WEEKS RISK-FREE
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
                href={`/${locale}/cost-calculator`}
                className="px-8 py-4 bg-white border border-slate-900 text-slate-900 hover:bg-slate-100 font-condensed text-xs font-normal uppercase tracking-widest transition-colors cursor-pointer"
              >
                CALCULATE SQUAD BUDGET
              </Link>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
