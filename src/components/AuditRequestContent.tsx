"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useTranslation } from "@/context/TranslationContext";
import {
  ShieldCheck,
  Zap,
  CheckCircle2,
  Lock,
  Search,
  Send,
  FileCode,
  Server,
  AlertTriangle,
  ArrowUpRight
} from "lucide-react";

export default function AuditRequestContent() {
  const { locale } = useTranslation();

  const [websiteUrl, setWebsiteUrl] = useState("");
  const [techStack, setTechStack] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [concerns, setConcerns] = useState("");

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const auditPoints = [
    { title: "API Response & Query Latency", desc: "Detection of sub-optimal database queries, un-indexed joins, and slow REST/GraphQL endpoints." },
    { title: "SAST & Security Vulnerability Scan", desc: "Automated check for OWASP Top 10 risks, exposed secrets, and outdated package dependencies." },
    { title: "Cloud Cost & Over-Provisioning Audit", desc: "Identification of idle AWS/GCP resources, un-cached assets, and container bloat." },
    { title: "Frontend Bundle & Core Web Vitals", desc: "Analysis of LCP, CLS, INP metrics, image compression, and un-optimized JavaScript chunks." },
    { title: "CI/CD & Test Automation Health", desc: "Evaluation of deployment pipelines, unit test coverage gaps, and regression risks." },
    { title: "Microservices Architecture Audit", desc: "Review of domain boundaries, message queues, and memory leak vulnerabilities." },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await fetch("/api/send-enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          formType: "audit-request",
          websiteUrl,
          techStack,
          name,
          email,
          company,
          concerns,
        }),
      });
      setSubmitted(true);
    } catch {
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#FAF8F5] text-slate-900 selection:bg-[#A90706] selection:text-white font-sans antialiased">
      <Navbar />

      {/* Header Banner */}
      <section className="pt-36 pb-20 border-b border-[#E2DDD5] bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-[#E2DDD5] mb-6">
            <span className="w-2 h-2 bg-[#A90706]"></span>
            <span className="font-condensed text-xs font-normal tracking-widest text-[#A90706] uppercase">
              // COMPLIMENTARY TECHNICAL AUDIT
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-normal text-slate-900 tracking-tight leading-none uppercase mb-6 font-[var(--font-geist)]">
            FREE CODE &amp; SECURITY AUDIT
          </h1>

          <p className="text-slate-700 text-lg sm:text-xl font-normal max-w-3xl leading-relaxed font-[var(--font-geist)]">
            Uncover hidden latency bottlenecks, cloud cost leaks, and security risks with a complimentary 10-point technical audit by Brosdev senior architects.
          </p>
        </div>
      </section>

      {/* Main Form & Benefits Grid */}
      <section className="py-20 bg-white border-b border-[#E2DDD5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Audit Checklist Column */}
            <div className="lg:col-span-6 space-y-8">
              <div className="border-b-2 border-slate-900 pb-4">
                <span className="font-condensed text-xs font-normal text-[#A90706] uppercase tracking-widest block mb-1">
                  // WHAT OUR ARCHITECTS AUDIT
                </span>
                <h2 className="text-2xl sm:text-3xl font-normal text-slate-900 uppercase tracking-tight font-[var(--font-geist)]">
                  COMPREHENSIVE 10-POINT TECHNICAL HEALTH CHECK
                </h2>
              </div>

              <div className="space-y-4">
                {auditPoints.map((point, idx) => (
                  <div key={idx} className="p-4 bg-[#FAF8F5] border border-[#E2DDD5] space-y-1">
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-[#A90706] shrink-0" />
                      <span className="font-condensed text-sm font-normal text-slate-900 uppercase font-[var(--font-geist)]">
                        {point.title}
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 font-normal leading-relaxed pl-6">
                      {point.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Request Form Column */}
            <div className="lg:col-span-6">
              <div className="bg-[#FAF8F5] border-2 border-slate-900 p-8 shadow-2xl space-y-6">
                <div className="border-b border-[#E2DDD5] pb-3">
                  <span className="font-condensed text-xs font-normal text-[#A90706] uppercase tracking-widest block">
                    // CONFIDENTIAL AUDIT REQUEST
                  </span>
                  <h3 className="text-2xl font-normal text-slate-900 uppercase font-[var(--font-geist)]">
                    REQUEST YOUR FREE TECHNICAL REPORT
                  </h3>
                </div>

                {submitted ? (
                  <div className="p-8 bg-emerald-50 border border-emerald-300 text-center space-y-4">
                    <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                    <h4 className="font-condensed text-xl font-normal text-slate-900 uppercase font-[var(--font-geist)]">
                      AUDIT REQUEST CONFIRMED!
                    </h4>
                    <p className="text-xs text-slate-600 font-normal leading-relaxed">
                      Our principal cloud security architect will review your platform and deliver your confidential audit report within 24 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="font-condensed text-xs font-normal text-slate-800 uppercase block mb-1">
                        Application URL / Repository Link *
                      </label>
                      <input
                        type="text"
                        required
                        value={websiteUrl}
                        onChange={(e) => setWebsiteUrl(e.target.value)}
                        placeholder="https://app.yourcompany.com"
                        className="w-full px-3 py-2.5 bg-white border border-[#E2DDD5] text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-slate-900"
                      />
                    </div>

                    <div>
                      <label className="font-condensed text-xs font-normal text-slate-800 uppercase block mb-1">
                        Current Tech Stack (e.g. Next.js, Node, Python, AWS)
                      </label>
                      <input
                        type="text"
                        value={techStack}
                        onChange={(e) => setTechStack(e.target.value)}
                        placeholder="React, Golang, PostgreSQL, Docker..."
                        className="w-full px-3 py-2.5 bg-white border border-[#E2DDD5] text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-slate-900"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="font-condensed text-xs font-normal text-slate-800 uppercase block mb-1">
                          Your Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="John Doe"
                          className="w-full px-3 py-2.5 bg-white border border-[#E2DDD5] text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-slate-900"
                        />
                      </div>
                      <div>
                        <label className="font-condensed text-xs font-normal text-slate-800 uppercase block mb-1">
                          Work Email *
                        </label>
                        <input
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="john@company.com"
                          className="w-full px-3 py-2.5 bg-white border border-[#E2DDD5] text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-slate-900"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="font-condensed text-xs font-normal text-slate-800 uppercase block mb-1">
                        Primary Bottleneck or Security Concerns
                      </label>
                      <textarea
                        rows={3}
                        value={concerns}
                        onChange={(e) => setConcerns(e.target.value)}
                        placeholder="E.g. Slow database queries during peak traffic, high cloud bills, or pre-funding security prep..."
                        className="w-full px-3 py-2.5 bg-white border border-[#E2DDD5] text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-slate-900"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 bg-[#A90706] hover:bg-[#880504] text-white font-condensed text-xs font-normal uppercase tracking-widest transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md"
                    >
                      <Send className="w-4 h-4" />
                      <span>{isSubmitting ? "ANALYZING..." : "REQUEST FREE TECHNICAL AUDIT"}</span>
                    </button>

                    <p className="text-[10px] text-slate-500 font-condensed uppercase tracking-wider text-center pt-1">
                      🔒 100% Confidential. Bound by Mutual NDA. Zero Spam Guarantee.
                    </p>
                  </form>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
