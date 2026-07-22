"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { 
  ArrowUpRight, 
  Briefcase, 
  Code, 
  Cpu, 
  Cloud, 
  Sparkles, 
  CheckCircle2, 
  Building,
  ShieldCheck,
  Award,
  Globe
} from "lucide-react";

interface FullTimeCareersContentProps {
  locale?: string;
}

export default function FullTimeCareersContent({ locale = "en" }: FullTimeCareersContentProps) {

  const fullTimeJobs = [
    { 
      title: "Senior Next.js Full-Stack Engineer", 
      dept: "Digital Product Engineering", 
      location: "GIFT City, India / Remote", 
      type: "Full-Time",
      exp: "4-7 Years Exp",
      salary: "Competitive Tier + Performance Bonus",
      desc: "Lead frontend architecture using Next.js 16, React 19, TypeScript, and server components for high-volume SaaS platforms.",
    },
    { 
      title: "AI & LLM Systems Architect", 
      dept: "AI & Machine Learning Labs", 
      location: "GIFT City, India / Remote", 
      type: "Full-Time",
      exp: "5-8 Years Exp",
      salary: "Competitive Tier + Equity Options",
      desc: "Design enterprise RAG vector pipelines, multi-agent DAG workflows, and vLLM local model inference systems.",
    },
    { 
      title: "Senior DevOps & Kubernetes Specialist", 
      dept: "Cloud & Infrastructure", 
      location: "Remote (India / Global)", 
      type: "Full-Time",
      exp: "5-9 Years Exp",
      salary: "Competitive Tier + Performance Bonus",
      desc: "Orchestrate multi-cluster Kubernetes deployments, zero-trust mesh security, and GitOps CI/CD automation.",
    },
    { 
      title: "Lead UI/UX Product Designer", 
      dept: "Design Studio", 
      location: "Remote (India / Global)", 
      type: "Full-Time",
      exp: "6+ Years Exp",
      salary: "Competitive Tier",
      desc: "Architect enterprise Figma design systems, dark-mode component libraries, and interactive micro-animations.",
    },
  ];

  const selectionSteps = [
    {
      step: "01",
      title: "PROFILE & PORTFOLIO REVIEW",
      tag: "STEP 1 • 24-48 HR REVIEW",
      desc: "Submit your resume, past project achievements, and GitHub code samples. Our tech talent squad evaluates your profile within 48 hours.",
    },
    {
      step: "02",
      title: "TECHNICAL ARCHITECTURE INTERVIEW",
      tag: "STEP 2 • LIVE CODING CALL",
      desc: "A 45-minute live technical evaluation & system design call with our Principal Software Architects to discuss live codebases and problem-solving.",
    },
    {
      step: "03",
      title: "CULTURE FIT & COMPENSATION OFFER",
      tag: "STEP 3 • FORMAL OFFER",
      desc: "Receive your official offer letter detailing competitive compensation, performance bonuses, health benefits, and equipment allocation.",
    },
    {
      step: "04",
      title: "ENTERPRISE ONBOARDING & WORK",
      tag: "STEP 4 • PRODUCTION WORK",
      desc: "Onboard to live client projects with direct architectural ownership, daily standups, and rapid engineering career progression.",
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
              // EXPERIENCED ENGINEERING ROLES
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-normal text-slate-900 tracking-tight leading-none uppercase mb-6 font-[var(--font-geist)]">
            FULL-TIME CAREER POSITIONS
          </h1>

          <p className="text-slate-700 text-lg sm:text-xl font-normal max-w-3xl leading-relaxed font-[var(--font-geist)]">
            For senior software engineers, system architects, and design directors seeking high-impact technical ownership on enterprise software products.
          </p>
        </div>
      </section>

      {/* 4-Step Recruitment Process Pipeline */}
      <section className="py-16 bg-white border-b border-[#E2DDD5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border-b-2 border-slate-900 pb-3 mb-8">
            <span className="font-condensed text-xs font-normal text-[#A90706] uppercase tracking-widest block mb-1">
              // EXPERIENCED SELECTION PIPELINE
            </span>
            <h2 className="text-2xl sm:text-3xl font-normal text-slate-900 uppercase tracking-tight font-[var(--font-geist)]">
              FULL-TIME RECRUITMENT &amp; ONBOARDING ROADMAP
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-2 border-slate-900 bg-[#FAF8F5] divide-y sm:divide-y-0 divide-slate-900 shadow-xl font-normal">
            {selectionSteps.map((s, idx) => (
              <div key={idx} className="p-6 bg-white hover:bg-[#FAF8F5] transition-colors flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-condensed text-3xl font-normal text-[#A90706]">
                      {s.step}
                    </span>
                    <span className="font-condensed text-[10px] font-normal px-2 py-0.5 bg-[#FAF8F5] text-slate-600 border border-[#E2DDD5] uppercase">
                      {s.tag}
                    </span>
                  </div>
                  <h3 className="font-condensed text-base font-normal text-slate-900 uppercase tracking-wide mb-2 font-[var(--font-geist)]">
                    {s.title}
                  </h3>
                  <p className="text-xs text-slate-600 font-normal leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Full-Time Open Positions Directory */}
      <section className="py-20 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="border-b-2 border-slate-900 pb-4 mb-8">
            <span className="font-condensed text-xs font-normal text-[#A90706] uppercase tracking-widest block mb-1">
              // CURRENT OPENINGS
            </span>
            <h2 className="text-3xl sm:text-4xl font-normal text-slate-900 uppercase tracking-tight font-[var(--font-geist)]">
              AVAILABLE FULL-TIME POSITIONS
            </h2>
          </div>

          <div className="space-y-6">
            {fullTimeJobs.map((j, i) => (
              <div key={i} className="p-8 border-2 border-slate-900 bg-white hover:border-[#A90706] transition-colors shadow-lg font-normal space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#E2DDD5] pb-4">
                  <div className="flex items-center gap-3">
                    <span className="px-3 py-1 bg-red-50 text-[#A90706] border border-red-200 text-xs font-condensed uppercase tracking-widest">
                      {j.dept}
                    </span>
                    <span className="text-xs font-condensed text-slate-500 uppercase">
                      {j.exp}
                    </span>
                  </div>
                  <span className="text-xs font-condensed text-slate-900 uppercase">
                    {j.location} • {j.type}
                  </span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                  <div className="lg:col-span-8 space-y-2">
                    <h3 className="text-2xl sm:text-3xl font-normal text-slate-900 uppercase tracking-tight font-[var(--font-geist)]">
                      {j.title}
                    </h3>
                    <p className="text-xs text-slate-600 font-normal leading-relaxed">
                      {j.desc}
                    </p>
                  </div>

                  <div className="lg:col-span-4 text-left sm:text-right space-y-2">
                    <Link
                      href={`/${locale}/company/careers/apply?position=${encodeURIComponent(j.title)}`}
                      className="w-full py-4 bg-slate-900 hover:bg-[#A90706] text-white font-condensed text-xs font-normal uppercase tracking-widest transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md"
                    >
                      <span>APPLY FOR POSITION</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </Link>
                    <span className="text-[10px] font-condensed text-slate-500 uppercase block">
                      COMPENSATION: {j.salary}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
