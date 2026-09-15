"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { 
  ArrowUpRight, 
  GraduationCap, 
  Code, 
  Cpu, 
  Cloud, 
  Smartphone, 
  ShoppingBag, 
  Sparkles, 
  CheckCircle2,
  Users
} from "lucide-react";

interface CareersContentProps {
  locale?: string;
}

export default function CareersContent({ locale = "en" }: CareersContentProps) {

  const fullTimeJobs = [
    { title: "Senior Next.js Full-Stack Engineer", dept: "Engineering", location: "GIFT City, India / Remote", type: "Full-Time" },
    { title: "AI & LLM Systems Architect", dept: "AI Labs", location: "GIFT City, India / Remote", type: "Full-Time" },
    { title: "Senior DevOps & Cloud Engineer", dept: "Cloud Infrastructure", location: "Remote (India / Global)", type: "Full-Time" },
    { title: "Lead UI/UX Product Designer", dept: "Design Studio", location: "Remote (India / Global)", type: "Full-Time" },
  ];

  const internshipTracks = [
    {
      title: "Full-Stack Web Engineering Track",
      stack: "Next.js 16, React 19, TypeScript, Node.js & PostgreSQL",
      icon: Code,
      desc: "Build enterprise SaaS web apps, server-rendered components, and high-volume REST APIs.",
    },
    {
      title: "AI & Enterprise LLM Engineering Track",
      stack: "Python, PyTorch, vLLM, LangChain & Vector DBs (Pinecone/Qdrant)",
      icon: Cpu,
      desc: "Develop autonomous AI agents, semantic RAG pipelines, and model fine-tuning systems.",
    },
    {
      title: "Cloud DevOps & Kubernetes Track",
      stack: "Docker, Kubernetes, AWS, Terraform, ArgoCD & Linux Kernels",
      icon: Cloud,
      desc: "Manage zero-downtime microservices clusters, CI/CD automated deployments, and mesh networks.",
    },
    {
      title: "UI/UX Product Design Systems Track",
      stack: "Figma, Design System Tokens, Prototyping & Tailwind CSS",
      icon: Sparkles,
      desc: "Design state-of-the-art dark mode web interfaces, design tokens, and micro-animations.",
    },
    {
      title: "Mobile Application Engineering Track",
      stack: "Flutter, React Native, Swift (iOS) & Kotlin (Android)",
      icon: Smartphone,
      desc: "Engineer high-performance cross-platform mobile apps with native hardware integrations.",
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
              // CAREERS &amp; INTERNSHIP COHORTS
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-normal text-slate-900 tracking-tight leading-none uppercase mb-6 font-[var(--font-geist)]">
            BUILD YOUR CAREER WITH BROSDEV SOLUTIONS
          </h1>

          <p className="text-slate-700 text-lg sm:text-xl font-normal max-w-3xl leading-relaxed font-[var(--font-geist)] mb-10">
            Grow alongside principal software architects, AI researchers, and UI/UX strategists. Choose your career path below.
          </p>

          {/* DUAL PATHWAY CARDS: FULL-TIME VS INTERNSHIP */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 font-normal">
            {/* Path 1: Experienced Full-Time */}
            <div className="p-8 bg-white border-2 border-slate-900 shadow-xl space-y-4 flex flex-col justify-between">
              <div>
                <span className="font-condensed text-xs font-normal text-[#A90706] uppercase tracking-widest block mb-2">
                  // FOR EXPERIENCED CANDIDATES
                </span>
                <h3 className="text-2xl sm:text-3xl font-normal text-slate-900 uppercase font-[var(--font-geist)] mb-2">
                  FULL-TIME CAREER POSITIONS
                </h3>
                <p className="text-xs text-slate-600 font-normal leading-relaxed">
                  For senior developers, cloud specialists, and tech leads seeking full-time employment with high-impact architectural ownership.
                </p>
              </div>

              <Link
                href={`/${locale}/company/careers/full-time`}
                className="w-full py-4 bg-slate-900 hover:bg-[#A90706] text-white font-condensed text-xs font-normal uppercase tracking-widest transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md"
              >
                <span>EXPLORE FULL-TIME POSITIONS</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Path 2: Students & Fresh Graduates */}
            <div className="p-8 bg-white border-2 border-slate-900 shadow-xl space-y-4 flex flex-col justify-between">
              <div>
                <span className="font-condensed text-xs font-normal text-[#A90706] uppercase tracking-widest block mb-2">
                  // FOR STUDENTS &amp; GRADUATES
                </span>
                <h3 className="text-2xl sm:text-3xl font-normal text-slate-900 uppercase font-[var(--font-geist)] mb-2">
                  INTERNSHIP PROGRAM COHORT
                </h3>
                <p className="text-xs text-slate-600 font-normal leading-relaxed">
                  Paid 3-month, 6-month (final semester project), or 1-year internship pipelines across 5 specialized tech tracks with PPO conversion.
                </p>
              </div>

              <Link
                href={`/${locale}/company/careers/internship`}
                className="w-full py-4 bg-[#A90706] hover:bg-[#880504] text-white font-condensed text-xs font-normal uppercase tracking-widest transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md"
              >
                <span>APPLY FOR INTERNSHIP PROGRAM</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* DEDICATED INTERNSHIP PROGRAM SECTION */}
      <section className="py-20 bg-white border-b border-[#E2DDD5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="bg-[#FAF8F5] border-2 border-slate-900 p-8 sm:p-12 shadow-2xl space-y-8">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#E2DDD5] pb-6">
              <div className="flex items-center gap-3">
                <span className="p-2 bg-[#A90706] text-white">
                  <GraduationCap className="w-5 h-5" />
                </span>
                <span className="font-condensed text-xs font-normal text-[#A90706] uppercase tracking-widest">
                  // BROSDEV SOLUTIONS ENGINEERING FELLOWSHIP &amp; INTERNSHIP PIPELINE
                </span>
              </div>

              <span className="font-condensed text-xs font-normal text-slate-500 uppercase tracking-widest">
                DURATION: 3 MONTHS • 6 MONTHS • 1 YEAR
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <h2 className="text-3xl sm:text-4xl font-normal text-slate-900 uppercase tracking-tight font-[var(--font-geist)]">
                  STUDENT &amp; FRESH GRADUATE INTERNSHIP PROGRAM
                </h2>
                <p className="text-slate-700 text-sm sm:text-base font-normal leading-relaxed font-[var(--font-geist)]">
                  Are you a Computer Engineering, IT, AI/DS, or MCA student looking for real-world production engineering experience? BrosDev Solutions offers paid 3-month, 6-month (final semester project), and 1-year internship pipelines across 5 specialized tech tracks.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 font-condensed font-normal text-xs uppercase">
                  <div className="p-3 bg-white border border-[#E2DDD5]">
                    <span className="text-[#A90706] font-normal block">✓ MONTHLY STIPEND</span>
                    <span className="text-slate-500 text-[10px]">Competitive allowance</span>
                  </div>
                  <div className="p-3 bg-white border border-[#E2DDD5]">
                    <span className="text-slate-900 font-normal block">✓ PPO OFFER</span>
                    <span className="text-slate-500 text-[10px]">Full-time conversion chance</span>
                  </div>
                  <div className="p-3 bg-white border border-[#E2DDD5]">
                    <span className="text-slate-900 font-normal block">✓ REAL PROJECTS</span>
                    <span className="text-slate-500 text-[10px]">Live client codebases</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-4 text-center sm:text-right">
                <Link
                  href={`/${locale}/company/careers/internship`}
                  className="w-full py-5 bg-[#A90706] hover:bg-[#880504] text-white font-condensed text-xs font-normal tracking-widest uppercase transition-all shadow-xl flex items-center justify-center gap-3 cursor-pointer"
                >
                  <span>APPLY FOR INTERNSHIP PROGRAM</span>
                  <ArrowUpRight className="w-5 h-5" />
                </Link>
                <span className="text-[10px] font-condensed font-normal text-slate-500 uppercase tracking-wider block mt-2">
                  FOR B.TECH / BCA / MCA / M.TECH STUDENTS
                </span>
              </div>
            </div>

            {/* Pipeline Tracks Grid */}
            <div className="pt-6 border-t border-[#E2DDD5]">
              <span className="font-condensed text-xs font-normal text-slate-500 uppercase tracking-widest block mb-4">
                CHOOSE YOUR SPECIALIZED PIPELINE TRACK:
              </span>
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {internshipTracks.map((track, idx) => {
                  const Icon = track.icon;
                  return (
                    <Link
                      key={idx}
                      href={`/${locale}/company/careers/internship`}
                      className="p-4 bg-white border border-[#E2DDD5] hover:border-slate-900 transition-all group flex flex-col justify-between"
                    >
                      <div>
                        <div className="w-8 h-8 bg-[#FAF8F5] border border-[#E2DDD5] flex items-center justify-center mb-3 text-slate-900 group-hover:bg-[#A90706] group-hover:text-white transition-colors">
                          <Icon className="w-4 h-4" />
                        </div>
                        <h3 className="font-condensed text-sm font-normal text-slate-900 uppercase mb-2 font-[var(--font-geist)] leading-tight group-hover:text-[#A90706] transition-colors">
                          {track.title}
                        </h3>
                        <p className="text-[11px] text-slate-600 font-normal leading-relaxed line-clamp-2">
                          {track.desc}
                        </p>
                      </div>
                      <span className="text-[10px] font-condensed font-normal text-[#A90706] uppercase block mt-3 underline">
                        APPLY THIS TRACK ↗
                      </span>
                    </Link>
                  );
                })}
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* SELECTION PROCESS PIPELINE SECTION */}
      <section className="py-20 bg-[#FAF8F5] border-b border-[#E2DDD5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border-b-2 border-slate-900 pb-3 mb-8">
            <span className="font-condensed text-xs font-normal text-[#A90706] uppercase tracking-widest block mb-1">
              // RECRUITMENT &amp; ONBOARDING ROADMAP
            </span>
            <h2 className="text-3xl sm:text-4xl font-normal text-slate-900 uppercase tracking-tight font-[var(--font-geist)]">
              HOW WE SELECT TALENT: 4-STEP RECRUITMENT PIPELINE
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-2 border-slate-900 bg-white divide-y sm:divide-y-0 divide-slate-900 shadow-xl font-normal">
            {[
              {
                step: "01",
                title: "APPLICATION & PORTFOLIO SCREENING",
                tag: "STEP 1 • 24-48 HR REVIEW",
                desc: "Submit your online application for full-time or internship roles. Our engineering talent squad reviews your experience & GitHub portfolio within 48 hours.",
              },
              {
                step: "02",
                title: "TECHNICAL & ARCHITECTURE INTERVIEW",
                tag: "STEP 2 • LIVE CODING CALL",
                desc: "A 45-minute technical evaluation & system design call with our Principal Software Architects to discuss live codebases and problem-solving.",
              },
              {
                step: "03",
                title: "OFFER LETTER & COMPENSATION PACKAGE",
                tag: "STEP 3 • FORMAL OFFER",
                desc: "Receive your official offer letter detailing stipend/salary, PPO roadmap for interns, equity options for senior leads, and equipment provision.",
              },
              {
                step: "04",
                title: "ENTERPRISE ONBOARDING & WORK",
                tag: "STEP 4 • PRODUCTION WORK",
                desc: "Onboard to live client projects with direct mentorship, daily standups, and rapid engineering progression.",
              },
            ].map((s, idx) => (
              <div key={idx} className="p-8 hover:bg-[#FAF8F5] transition-colors flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-condensed text-4xl font-normal text-[#A90706]">
                      {s.step}
                    </span>
                    <span className="font-condensed text-[10px] font-normal px-2 py-0.5 bg-[#FAF8F5] text-slate-600 border border-[#E2DDD5] uppercase">
                      {s.tag}
                    </span>
                  </div>
                  <h3 className="font-condensed text-lg font-normal text-slate-900 uppercase tracking-wide mb-2 font-[var(--font-geist)]">
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

      {/* FULL-TIME OPEN POSITIONS SECTION */}
      <section className="py-20 bg-[#FAF8F5] border-b border-[#E2DDD5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border-b-2 border-slate-900 pb-4 mb-8">
            <span className="font-condensed text-xs font-normal text-[#A90706] uppercase tracking-widest block mb-1">
              // EXPERIENCED ROLES
            </span>
            <h2 className="text-3xl sm:text-4xl font-normal text-slate-900 uppercase tracking-tight font-[var(--font-geist)]">
              FULL-TIME OPEN POSITIONS
            </h2>
          </div>

          <div className="space-y-4">
            {fullTimeJobs.map((j, i) => (
              <div key={i} className="p-6 border-2 border-slate-900 bg-white hover:border-[#A90706] transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-4 group shadow-md font-normal">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="font-condensed text-xs font-normal text-[#A90706] uppercase tracking-widest">
                      {j.dept}
                    </span>
                    <span className="text-xs text-slate-400">•</span>
                    <span className="font-condensed text-xs font-normal text-slate-500 uppercase">
                      {j.type}
                    </span>
                  </div>
                  <h3 className="font-condensed text-xl sm:text-2xl font-normal text-slate-900 uppercase tracking-tight group-hover:text-[#A90706] transition-colors font-[var(--font-geist)]">
                    {j.title}
                  </h3>
                  <p className="text-xs font-normal text-slate-600 uppercase pt-1">
                    {j.location}
                  </p>
                </div>

                <Link
                  href={`/${locale}/company/careers/apply?position=${encodeURIComponent(j.title)}`}
                  className="px-6 py-3.5 bg-slate-900 hover:bg-[#A90706] text-white font-condensed text-xs font-normal uppercase tracking-widest transition-colors flex items-center justify-center gap-2 shrink-0 cursor-pointer"
                >
                  <span>APPLY FOR POSITION</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
