import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhyUsSection from "@/components/WhyUsSection";
import { TranslationProvider } from "@/context/TranslationContext";
import { 
  Search, 
  Users, 
  BrainCircuit, 
  Code2, 
  CheckCircle2, 
  Sparkles, 
  Cpu, 
  GitBranch, 
  Rocket, 
  Terminal 
} from "lucide-react";

export const metadata: Metadata = {
  title: "Brosdev | Agile Methodology & AI-Powered Pipeline",
  description:
    "Explore BrosDev 4-phase development methodology: Deep Client Research, Architecture Blueprinting, AI-Integrated Coding, and Continuous CI/CD Delivery.",
  openGraph: {
    title: "Brosdev | Agile Methodology & AI-Powered Pipeline",
    description:
      "Explore BrosDev 4-phase development methodology: Deep Client Research, Architecture Blueprinting, AI-Integrated Coding, and Continuous CI/CD Delivery.",
  },
};

export default async function LocaleMethodologyPage({ params }: { params: Promise<{ locale: string }> }) {
  const resolvedParams = await params;
  const locale = resolvedParams?.locale || "en";

  const methodologyPhases = [
    {
      phase: "PHASE 01",
      title: "DEEP PROJECT RESEARCH & CLIENT DISCOVERY",
      tag: "// DISCOVERY & USER RESEARCH",
      desc: "Before writing a single line of code, our software architects conduct in-depth research into your business model, target user personas, competitor tech stacks, and scalability bottlenecks. We collaborate closely with your team to extract precise product requirements.",
      icon: Search,
      deliverables: ["Product Requirements Document (PRD)", "System Architecture Blueprint", "UX Wireframes & Database Schema"],
    },
    {
      phase: "PHASE 02",
      title: "CLIENT COLLABORATION & SCOPING",
      tag: "// STAKEHOLDER ALIGNMENT",
      desc: "We run structured scoping workshops to align on sprint milestones, budget allocation, and technical trade-offs. You gain transparent visibility into sprint roadmaps, key performance metrics, and fixed deliverable dates.",
      icon: Users,
      deliverables: ["Agile 2-Week Sprint Roadmap", "Fixed Cost & Scope Contract", "Dedicated Team Roster"],
    },
    {
      phase: "PHASE 03",
      title: "AI-INTEGRATED DEVELOPMENT & CODING",
      tag: "// AI-POWERED SPEED & PRECISION",
      desc: "We integrate state-of-the-art AI workflows directly into our engineering pipelines. Our engineers leverage custom AI code generators, automated unit test writers, and LLM static code analysis tools to eliminate repetitive tasks and deliver code 3x faster without sacrificing quality.",
      icon: BrainCircuit,
      deliverables: ["AI-Assisted Clean Codebase", "Automated Jest/Playwright Test Suites", "Bi-Weekly Staging Demos"],
    },
    {
      phase: "PHASE 04",
      title: "CI/CD AUTOMATED DEPLOYMENT & MAINTENANCE",
      tag: "// ZERO-DOWNTIME DELIVERY",
      desc: "Continuous integration pipelines deploy code straight to staging and production with zero downtime. Enterprise-grade security scanning and automated regression suites ensure pristine stability prior to public launch.",
      icon: Rocket,
      deliverables: ["Zero-Downtime Deployment", "24/7 SLA Monitoring & Incident Response", "Complete Source Code Ownership"],
    },
  ];

  return (
    <TranslationProvider defaultLocale={locale}>
      <main className="min-h-screen bg-[#FAF8F5] text-slate-900 selection:bg-[#A90706] selection:text-white font-sans antialiased">
        <Navbar />

        {/* Header Banner */}
        <section className="pt-36 pb-20 border-b border-[#E2DDD5] bg-[#FAF8F5]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-[#E2DDD5] mb-6">
              <span className="w-2 h-2 bg-[#A90706]"></span>
              <span className="font-condensed text-xs font-black tracking-widest text-[#A90706] uppercase">
                // AGILE PIPELINE &amp; AI INTEGRATION
              </span>
            </div>

            <h1 className="text-5xl sm:text-7xl font-black text-slate-900 tracking-tight leading-none uppercase mb-8 font-[var(--font-geist)]">
              DEVELOPMENT METHODOLOGY
            </h1>

            <p className="text-slate-700 text-lg sm:text-xl font-medium max-w-3xl leading-relaxed">
              Deep client research, structured requirement scoping, and AI-integrated sprint pipelines engineered for rapid execution, sub-second performance, and zero-downtime releases.
            </p>
          </div>
        </section>

        {/* AI Integration Highlight Box */}
        <section className="py-16 border-b border-[#E2DDD5] bg-slate-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#A90706] text-white font-condensed text-xs font-black uppercase tracking-widest">
                  <BrainCircuit className="w-4 h-4" />
                  <span>AI-POWERED ENGINEERING WORKFLOWS</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-white font-[var(--font-geist)]">
                  How We Leverage AI to Supercharge Client Projects
                </h2>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-normal">
                  By embedding AI into our internal software development lifecycle, our senior engineers automate boilerplate setup, generate unit tests instantaneously, and perform real-time security vulnerability audits. This allows us to focus 100% of human brainpower on complex system architecture and user experience.
                </p>
              </div>

              <div className="lg:col-span-4 bg-slate-800 border-2 border-slate-700 p-6 space-y-3 font-condensed text-xs font-bold uppercase">
                <div className="flex items-center justify-between border-b border-slate-700 pb-2">
                  <span className="text-slate-400">DEVELOPMENT SPEED:</span>
                  <span className="text-emerald-400">3X FASTER SPRINT OUTPUT</span>
                </div>
                <div className="flex items-center justify-between border-b border-slate-700 pb-2">
                  <span className="text-slate-400">CODE COVERAGE:</span>
                  <span className="text-white">95%+ AUTOMATED TESTS</span>
                </div>
                <div className="flex items-center justify-between border-b border-slate-700 pb-2">
                  <span className="text-slate-400">AI AUDITING:</span>
                  <span className="text-[#A90706]">REAL-TIME LINT &amp; SEC</span>
                </div>
                <div className="flex items-center justify-between pt-1">
                  <span className="text-slate-400">RE-WORK RATE:</span>
                  <span className="text-amber-400">&lt; 2% SPRINT BUGS</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Step-by-Step Methodology Cards Grid */}
        <section className="py-24 border-b border-[#E2DDD5] bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="font-condensed text-xs font-black text-[#A90706] uppercase tracking-widest block mb-2">
                // END-TO-END PRODUCT PIPELINE
              </span>
              <h2 className="text-3xl sm:text-5xl font-black text-slate-900 uppercase tracking-tight font-[var(--font-geist)]">
                OUR 4-STEP METHODOLOGY
              </h2>
            </div>

            <div className="space-y-8">
              {methodologyPhases.map((phase, idx) => {
                const Icon = phase.icon;
                return (
                  <div
                    key={idx}
                    className="bg-[#FAF8F5] border-2 border-slate-900 p-8 sm:p-10 shadow-lg grid grid-cols-1 lg:grid-cols-12 gap-8 items-start hover:border-[#A90706] transition-colors"
                  >
                    <div className="lg:col-span-4 space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-slate-900 text-white flex items-center justify-center font-condensed text-lg font-black shrink-0">
                          {idx + 1}
                        </div>
                        <span className="font-condensed text-xs font-black px-2.5 py-1 bg-[#A90706] text-white uppercase tracking-widest">
                          {phase.phase}
                        </span>
                      </div>
                      <span className="font-condensed text-[10px] font-black text-[#A90706] uppercase tracking-widest block">
                        {phase.tag}
                      </span>
                      <h3 className="font-condensed text-2xl font-black text-slate-900 uppercase tracking-tight font-[var(--font-geist)]">
                        {phase.title}
                      </h3>
                    </div>

                    <div className="lg:col-span-8 space-y-6">
                      <p className="text-slate-700 text-sm sm:text-base leading-relaxed font-normal">
                        {phase.desc}
                      </p>

                      <div className="border-t border-[#E2DDD5] pt-4">
                        <span className="font-condensed text-xs font-black text-slate-500 uppercase tracking-widest block mb-3">
                          KEY DELIVERABLES:
                        </span>
                        <div className="flex flex-wrap gap-3">
                          {phase.deliverables.map((del, dIdx) => (
                            <div key={dIdx} className="flex items-center gap-2 px-3 py-1.5 bg-white border border-[#E2DDD5] text-xs font-condensed font-bold text-slate-900 uppercase">
                              <CheckCircle2 className="w-4 h-4 text-[#A90706]" />
                              <span>{del}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Process Showcase Section */}
        <WhyUsSection />

        <Footer />
      </main>
    </TranslationProvider>
  );
}
