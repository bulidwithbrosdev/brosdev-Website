"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Code2, ShieldCheck, Rocket, ArrowRight, Terminal, CheckCircle2 } from "lucide-react";

export default function WhyUsSection() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      step: "01",
      title: "DISCOVERY & BLUEPRINT",
      tag: "PHASE 1 • ARCHITECTURE",
      desc: "We analyze your project goals, construct database schemas, wireframe key user flows, and publish comprehensive technical architecture specifications.",
      icon: Search,
      deliverables: [
        "System Architecture Diagram",
        "Database Schemas (SQL/NoSQL)",
        "Figma UI/UX Wireframes",
        "Milestone Timeline & Costing",
      ],
      terminalCmd: "brosdev init --project enterprise-app --spec v1.0",
      metric: "100% SPEC ACCURACY",
    },
    {
      step: "02",
      title: "SPRINT DEVELOPMENT",
      tag: "PHASE 2 • AGILE SPRINTS",
      desc: "Two-week agile sprint cycles with continuous integration, automated builds, and bi-weekly live staging demos so you inspect real code progress.",
      icon: Code2,
      deliverables: [
        "2-Week Agile Sprints",
        "Bi-Weekly Live Staging Demos",
        "Automated CI/CD Build Pipeline",
        "Git Commit Code Transparency",
      ],
      terminalCmd: "git push origin feature/sprint-04-staging",
      metric: "2-WEEK SPRINT CADENCE",
    },
    {
      step: "03",
      title: "QA & SECURITY AUDIT",
      tag: "PHASE 3 • TESTING & PEN-TEST",
      desc: "Rigorous unit, integration, and load testing paired with zero-trust security audits and penetration scans before any public production release.",
      icon: ShieldCheck,
      deliverables: [
        "Automated E2E Playwright Tests",
        "Penetration & Vulnerability Scans",
        "High-Concurrency Load Tests",
        "ISO & GDPR Compliance Check",
      ],
      terminalCmd: "npm run test:security --target production",
      metric: "0 CRITICAL VULNERABILITIES",
    },
    {
      step: "04",
      title: "DEPLOY & AUTO-SCALE",
      tag: "PHASE 4 • PRODUCTION & SLA",
      desc: "Zero-downtime deployment to AWS/Azure/GCP cloud Kubernetes clusters backed by 24/7 proactive monitoring and guaranteed SLA support.",
      icon: Rocket,
      deliverables: [
        "Zero-Downtime Deployment",
        "Kubernetes Auto-Scaling",
        "Datadog & Sentry 24/7 Alerts",
        "Guaranteed < 1H SLA Response",
      ],
      terminalCmd: "kubectl apply -f production-cluster.yaml",
      metric: "99.99% GUARANTEED UPTIME",
    },
  ];

  return (
    <section id="why-us" className="py-24 sm:py-32 bg-[#FAF8F5] border-b border-[#E2DDD5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-[#E2DDD5] mb-4">
            <span className="w-2 h-2 bg-[#A90706]"></span>
            <span className="font-condensed text-xs font-normal tracking-widest text-[#A90706] uppercase">
              // OUR METHODOLOGY
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-normal text-slate-900 tracking-tight leading-tight uppercase mb-4 font-[var(--font-geist)]">
            Transparent Engineering Pipeline
          </h2>
          <p className="text-slate-700 text-base sm:text-lg font-medium leading-relaxed">
            An agile software development workflow optimized for rapid speed, enterprise-grade code quality, and measurable business growth.
          </p>
        </div>

        {/* Pipeline Step Selection — Mobile: compact 2×2 pill grid | sm+: full 4-col cards */}

        {/* Mobile pill grid (< sm) — always shows all 4 phases */}
        <div className="grid grid-cols-2 gap-2 mb-6 sm:hidden">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            const isActive = activeStep === idx;
            return (
              <button
                key={item.step}
                onClick={() => setActiveStep(idx)}
                className={`flex items-center gap-2.5 px-3 py-3 border-2 transition-all duration-200 text-left w-full relative ${
                  isActive
                    ? "bg-slate-900 border-slate-900 text-white"
                    : "bg-white border-[#E2DDD5] text-slate-900"
                }`}
              >
                {/* Active top bar */}
                {isActive && (
                  <div className="absolute top-0 left-0 right-0 h-1 bg-[#A90706]" />
                )}
                <div
                  className={`w-7 h-7 shrink-0 flex items-center justify-center border transition-colors ${
                    isActive
                      ? "bg-[#A90706] border-[#A90706] text-white"
                      : "bg-[#FAF8F5] border-[#E2DDD5] text-slate-900"
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                </div>
                <div className="min-w-0">
                  <span className="font-condensed text-[10px] font-black uppercase tracking-widest block leading-tight">
                    {item.step}
                  </span>
                  <span className="font-condensed text-xs font-normal uppercase tracking-tight block truncate leading-tight">
                    {item.title}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* sm+ full 4-column card grid */}
        <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-4 border-2 border-slate-900 bg-white divide-y sm:divide-y-0 sm:divide-x divide-slate-900 mb-12 shadow-lg">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            const isActive = activeStep === idx;
            return (
              <button
                key={item.step}
                onClick={() => setActiveStep(idx)}
                onMouseEnter={() => setActiveStep(idx)}
                className={`p-6 text-left transition-all duration-300 relative group cursor-pointer flex flex-col justify-between ${
                  isActive
                    ? "bg-slate-900 text-white"
                    : "bg-white text-slate-900 hover:bg-[#FAF8F5]"
                }`}
              >
                {/* Active Indicator Top Bar */}
                {isActive && (
                  <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#A90706]" />
                )}

                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span
                      className={`font-condensed text-4xl font-black transition-colors ${
                        isActive ? "text-[#A90706]" : "text-slate-300 group-hover:text-slate-900"
                      }`}
                    >
                      {item.step}
                    </span>
                    <div
                      className={`w-10 h-10 border flex items-center justify-center transition-all ${
                        isActive
                          ? "bg-[#A90706] border-[#A90706] text-white"
                          : "bg-[#FAF8F5] border-[#E2DDD5] text-slate-900 group-hover:border-slate-900"
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <span
                    className={`font-condensed text-[10px] font-black uppercase tracking-widest block mb-2 ${
                      isActive ? "text-[#A90706]" : "text-slate-400"
                    }`}
                  >
                    {item.tag}
                  </span>

                  <h3 className="font-condensed text-lg font-normal uppercase tracking-tight mb-2 font-[var(--font-geist)]">
                    {item.title}
                  </h3>
                </div>

                <div className="pt-4 border-t border-slate-200/20 flex items-center justify-between text-[10px] font-condensed font-black uppercase tracking-widest mt-6">
                  <span>STEP {item.step} OF 04</span>
                  <ArrowRight
                    className={`w-4 h-4 transition-transform ${
                      isActive ? "text-[#A90706] translate-x-1" : "text-slate-400"
                    }`}
                  />
                </div>
              </button>
            );
          })}
        </div>

        {/* Step Interactive Details Showcase Panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStep}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="border-2 border-slate-900 bg-white p-8 sm:p-12 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
          >
            {/* Left Box (7 Cols): Step Overview & Deliverables List */}
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 bg-[#A90706] text-white font-condensed text-xs font-black tracking-widest uppercase">
                  ACTIVE PHASE {steps[activeStep].step}
                </span>
                <span className="font-condensed text-xs font-bold text-slate-400 uppercase tracking-widest">
                  {steps[activeStep].metric}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-slate-900 uppercase tracking-tight mb-4">
                {steps[activeStep].title}
              </h3>

              <p className="text-slate-700 text-base font-normal leading-relaxed mb-8">
                {steps[activeStep].desc}
              </p>

              {/* Deliverables Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-4 border-t border-[#E2DDD5]">
                {steps[activeStep].deliverables.map((deliv, i) => (
                  <div key={i} className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#A90706] shrink-0" />
                    <span className="font-condensed text-xs font-bold text-slate-800 uppercase tracking-wider">
                      {deliv}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Box (5 Cols): Live Terminal Preview Card */}
            <div className="lg:col-span-5 bg-slate-950 text-white border border-slate-800 p-6 shadow-2xl font-mono text-xs">
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <div className="flex items-center gap-1 text-[10px] font-sans font-bold text-slate-500 uppercase tracking-widest">
                  <Terminal className="w-3.5 h-3.5 text-[#A90706]" />
                  <span>BROSDEV CLI</span>
                </div>
              </div>

              <div className="space-y-2 text-slate-300">
                <p className="text-slate-500">$ // Executing Phase {steps[activeStep].step} Pipeline...</p>
                <p className="text-emerald-400 font-bold break-all">
                  $ {steps[activeStep].terminalCmd}
                </p>
                <p className="text-slate-400 text-[11px] pt-2">
                  [SUCCESS] {steps[activeStep].metric} Verified.
                </p>
                <div className="pt-3 flex items-center justify-between text-[10px] text-slate-500 font-sans font-bold uppercase tracking-widest border-t border-slate-900">
                  <span>STATUS: ACTIVE</span>
                  <span className="text-[#A90706]">BROSDEV ENGINE</span>
                </div>
              </div>
            </div>

          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
