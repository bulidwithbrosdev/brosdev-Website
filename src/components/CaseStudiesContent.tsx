"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useTranslation } from "@/context/TranslationContext";
import {
  ArrowUpRight,
  TrendingUp,
  ShieldCheck,
  Zap,
  CheckCircle2,
  Download,
  Building2,
  Cpu,
  Layers,
  Globe2,
  Server
} from "lucide-react";

export default function CaseStudiesContent() {
  const { locale } = useTranslation();

  const caseStudies = [
    {
      id: "cs-1",
      badge: "FINTECH & PAYMENTS",
      title: "APEXPAY: REBUILDING CORE TRANSACTION ENGINE IN GOLANG",
      client: "ApexPay UK (London, United Kingdom)",
      metrics: [
        { label: "TRANSACTION LATENCY", value: "-45%", desc: "Reduced sub-second checkout delays" },
        { label: "SYSTEM UPTIME", value: "99.999%", desc: "Zero downtime during peak Black Friday" },
        { label: "PEAK CAPACITY", value: "25,000 req/s", desc: "Handled concurrent payment loads" },
        { label: "CLOUD BILL SAVINGS", value: "$120,000/yr", desc: "Optimized AWS container infrastructure" }
      ],
      problem: "ApexPay was struggling with legacy monolithic API bottlenecks that caused transaction timeouts during high-traffic flash sales and elevated server bills.",
      solution: "Brosdev deployed a 5-member dedicated squad to decompose the backend into high-concurrency microservices written in Golang, utilizing Redis cluster caching and Event-Driven Kafka message queues.",
      techStack: ["Golang", "PostgreSQL", "Kafka", "AWS EKS", "Redis", "Docker"],
      quote: "Brosdev's engineers delivered a bulletproof architecture. Our payment success rate hit an all-time high of 99.98% within 60 days of deployment.",
      author: "Marcus Vance, CTO at ApexPay UK"
    },
    {
      id: "cs-2",
      badge: "ENTERPRISE AI & HEALTHCARE",
      title: "OMNIHEALTH: AUTONOMOUS AI MEDICAL VECTOR SEARCH",
      client: "OmniHealth Systems (Boston, USA)",
      metrics: [
        { label: "QUERY SPEED", value: "< 85ms", desc: "Vector similarity search response" },
        { label: "DATA PROCESSED", value: "50M+", desc: "HIPAA-compliant EHR medical records" },
        { label: "CLINICAL ACCURACY", value: "99.4%", desc: "LLM RAG precision score" },
        { label: "TIME-TO-DIAGNOSE", value: "3x Faster", desc: "Automated physician insights" }
      ],
      problem: "OmniHealth required an ultra-secure, HIPAA-compliant AI engine to query 50+ million unstructured patient records, lab reports, and clinical notes in real time without data leakage.",
      solution: "Brosdev built a proprietary RAG (Retrieval-Augmented Generation) pipeline using vLLM, Qdrant Vector DB, and PyTorch, wrapped in a bank-grade encrypted microservices framework on private Azure GPU instances.",
      techStack: ["Python", "PyTorch", "vLLM", "Qdrant Vector DB", "Azure Health Data", "React"],
      quote: "The speed and accuracy of Brosdev's AI RAG system transformed our clinical workflows. They are true principal AI architects.",
      author: "Dr. Elena Rostova, VP of Digital Health at OmniHealth"
    },
    {
      id: "cs-3",
      badge: "CLOUD & SAAS INFRASTRUCTURE",
      title: "CLOUDSCALE: MONOLITH TO SERVERLESS KUBERNETES MIGRATION",
      client: "CloudScale B2B SaaS (Munich, Germany)",
      metrics: [
        { label: "HOSTING COST REDUCTION", value: "-42%", desc: "Direct annual cloud infrastructure savings" },
        { label: "DEPLOYMENT SPEED", value: "10x Faster", desc: "Automated CI/CD GitHub Actions pipelines" },
        { label: "ZERO-TRUST RATING", value: "ISO 27001", desc: "Passed third-party security auditing" },
        { label: "DEVS EMBEDDED", value: "4 Engineers", desc: "Full-stack squad integration" }
      ],
      problem: "CloudScale's Node.js monolith was crashing during customer onboarding spikes, taking 45+ minutes for developers to deploy new updates.",
      solution: "Brosdev executed a zero-downtime migration to Next.js, Golang microservices, and Kubernetes (EKS) with Terraform infrastructure-as-code and Playwright automated testing.",
      techStack: ["Next.js", "Terraform", "Kubernetes", "Node.js", "GraphQL", "Playwright"],
      quote: "Brosdev migrated our entire platform with zero downtime. Our developers can now deploy code in under 3 minutes with total confidence.",
      author: "Lukas Weber, VP of Engineering at CloudScale DE"
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
              // PROVEN ENTERPRISE RESULTS
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-normal text-slate-900 tracking-tight leading-none uppercase mb-6 font-[var(--font-geist)]">
            CASE STUDIES &amp; CLIENT ROI
          </h1>

          <p className="text-slate-700 text-lg sm:text-xl font-normal max-w-3xl leading-relaxed font-[var(--font-geist)]">
            Explore how Brosdev&apos;s dedicated engineering squads build high-throughput microservices, sub-second AI platforms, and zero-downtime cloud architectures for global market leaders.
          </p>
        </div>
      </section>

      {/* Case Studies List */}
      <section className="py-20 bg-white border-b border-[#E2DDD5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {caseStudies.map((cs, idx) => (
            <div
              key={cs.id}
              className="bg-[#FAF8F5] border-2 border-slate-900 p-8 sm:p-12 shadow-2xl space-y-8 relative overflow-hidden"
            >
              {/* Header Badge & Client */}
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#E2DDD5] pb-4">
                <span className="font-condensed text-xs font-normal px-3 py-1 bg-[#A90706] text-white uppercase tracking-widest">
                  {cs.badge}
                </span>
                <span className="font-condensed text-xs font-normal text-slate-600 uppercase tracking-wider flex items-center gap-1.5">
                  <Building2 className="w-3.5 h-3.5 text-[#A90706]" />
                  <span>{cs.client}</span>
                </span>
              </div>

              {/* Title */}
              <h2 className="text-2xl sm:text-4xl font-normal text-slate-900 uppercase tracking-tight font-[var(--font-geist)]">
                {cs.title}
              </h2>

              {/* Key Metrics Stats Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 font-condensed">
                {cs.metrics.map((m, mIdx) => (
                  <div key={mIdx} className="p-4 bg-white border border-[#E2DDD5] space-y-1">
                    <span className="text-2xl sm:text-3xl font-normal text-[#A90706] block font-[var(--font-geist)]">
                      {m.value}
                    </span>
                    <span className="text-xs font-normal text-slate-900 uppercase block">
                      {m.label}
                    </span>
                    <span className="text-[10px] text-slate-500 uppercase block">
                      {m.desc}
                    </span>
                  </div>
                ))}
              </div>

              {/* Problem vs Solution Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-2">
                <div className="p-6 bg-white border border-[#E2DDD5] space-y-2">
                  <span className="font-condensed text-xs font-normal text-[#A90706] uppercase tracking-widest block">
                    // THE CHALLENGE
                  </span>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                    {cs.problem}
                  </p>
                </div>

                <div className="p-6 bg-white border border-[#E2DDD5] space-y-2">
                  <span className="font-condensed text-xs font-normal text-slate-900 uppercase tracking-widest block">
                    // THE BROSDEV SOLUTION
                  </span>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                    {cs.solution}
                  </p>
                </div>
              </div>

              {/* Tech Stack Badges */}
              <div className="space-y-2">
                <span className="font-condensed text-xs font-normal text-slate-500 uppercase tracking-widest block">
                  TECH STACK &amp; INFRASTRUCTURE USED:
                </span>
                <div className="flex flex-wrap gap-2">
                  {cs.techStack.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-3 py-1 bg-white border border-slate-900 font-condensed text-xs font-normal text-slate-800 uppercase tracking-wider"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Client Quote Banner */}
              <div className="p-6 bg-slate-900 text-white space-y-2 border-l-4 border-[#A90706]">
                <p className="text-xs sm:text-sm italic font-normal leading-relaxed text-slate-200">
                  &quot;{cs.quote}&quot;
                </p>
                <span className="font-condensed text-xs font-normal text-[#A90706] uppercase tracking-wider block">
                  — {cs.author}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#FAF8F5] border-b border-[#E2DDD5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="font-condensed text-xs font-normal text-[#A90706] uppercase tracking-widest block">
            // READY FOR SIMILAR RESULTS?
          </span>
          <h2 className="text-3xl sm:text-5xl font-normal text-slate-900 uppercase tracking-tight font-[var(--font-geist)]">
            BUILD YOUR DEDICATED SQUAD TODAY
          </h2>
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
              CALCULATE ESTIMATED SQUAD BUDGET
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
