"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { PRODUCTS_DATA, ProductItem } from "@/data/productsData";
import { 
  ArrowUpRight, 
  CheckCircle2, 
  ChevronRight, 
  Layers, 
  ShieldCheck, 
  Sparkles, 
  Terminal, 
  Cpu, 
  Globe, 
  X 
} from "lucide-react";

interface ProductDetailContentProps {
  slug: string;
  locale?: string;
}

export default function ProductDetailContent({ slug, locale = "en" }: ProductDetailContentProps) {
  const [demoSubmitted, setDemoSubmitted] = useState(false);
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  const [demoEmail, setDemoEmail] = useState("");
  const [demoName, setDemoName] = useState("");
  const [demoCompany, setDemoCompany] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [referenceId, setReferenceId] = useState<string | null>(null);

  const product = PRODUCTS_DATA.find((p) => p.slug === slug) || PRODUCTS_DATA[0];

  const handleDemoSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const res = await fetch("/api/send-enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          formType: "contact-us",
          name: demoName,
          email: demoEmail,
          company: demoCompany,
          inquiryType: `Enterprise Demo Request: ${product.name}`,
          productRequested: product.name,
          message: `User requested live enterprise sandbox demo access for ${product.name}`,
        }),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setReferenceId(data.referenceId || null);
        setDemoSubmitted(true);
      } else {
        setErrorMessage(data.error || "Failed to submit demo request. Please try again.");
      }
    } catch (err) {
      console.error(err);
      setErrorMessage("Network error. Please check your connection and try again.");
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
          
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-xs font-condensed font-normal text-slate-500 uppercase tracking-widest mb-6">
            <Link href={`/${locale}/products`} className="hover:text-[#A90706] transition-colors">
              PRODUCTS
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-slate-900">{product.name}</span>
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-[#E2DDD5] mb-6">
            <span className="w-2 h-2 bg-[#A90706]"></span>
            <span className="font-condensed text-xs font-normal tracking-widest text-[#A90706] uppercase">
              // {product.badge}
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-normal text-slate-900 tracking-tight leading-none uppercase mb-6 font-[var(--font-geist)]">
            {product.name}
          </h1>

          <p className="text-[#A90706] text-lg sm:text-xl font-normal max-w-3xl leading-relaxed font-condensed uppercase mb-8">
            {product.tagline}
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={() => {
                setDemoSubmitted(false);
                setIsDemoModalOpen(true);
              }}
              className="px-8 py-4 bg-[#A90706] hover:bg-[#880504] text-white font-condensed text-xs font-normal uppercase tracking-widest transition-colors flex items-center gap-2 cursor-pointer shadow-xl"
            >
              <span>REQUEST ENTERPRISE DEMO</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>

            <Link
              href={`/${locale}/book-consultation`}
              className="px-8 py-4 bg-white border-2 border-slate-900 hover:bg-slate-900 hover:text-white text-slate-900 font-condensed text-xs font-normal uppercase tracking-widest transition-colors flex items-center gap-2 cursor-pointer"
            >
              <span>BOOK ARCHITECTURE CONSULTATION</span>
            </Link>
          </div>

        </div>
      </section>

      {/* Main Product Technical Specifications */}
      <section className="py-20 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

          {/* Performance Benchmark Highlights */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {product.architectureHighlights.map((stat, idx) => (
              <div key={idx} className="p-6 bg-white border-2 border-slate-900 shadow-md text-left">
                <span className="text-3xl sm:text-4xl font-normal text-slate-900 block font-[var(--font-geist)] mb-1">
                  {stat.metric}
                </span>
                <span className="text-xs font-condensed font-normal text-slate-500 uppercase block">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

          {/* System Architecture Overview */}
          <div className="bg-white border-2 border-slate-900 p-8 sm:p-12 shadow-2xl">
            <span className="font-condensed text-xs font-normal text-[#A90706] uppercase tracking-widest block mb-4">
              // ARCHITECTURAL OVERVIEW &amp; CORE DESIGN
            </span>
            <h2 className="text-2xl sm:text-3xl font-normal text-slate-900 uppercase tracking-tight mb-6 font-[var(--font-geist)]">
              ENTERPRISE CAPABILITIES &amp; INTEGRATION
            </h2>
            <p className="text-slate-700 text-base font-normal leading-relaxed font-[var(--font-geist)] max-w-4xl mb-8">
              {product.description}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6 border-t border-[#E2DDD5]">
              <div>
                <span className="font-condensed text-xs font-normal text-slate-500 uppercase tracking-widest block mb-3">
                  DEPLOYMENT ENVIRONMENT &amp; MODELS:
                </span>
                <p className="text-slate-900 font-condensed text-sm font-normal uppercase">
                  {product.deploymentModel}
                </p>
              </div>

              <div>
                <span className="font-condensed text-xs font-normal text-slate-500 uppercase tracking-widest block mb-3">
                  COMMERCIAL LICENSING TIER:
                </span>
                <p className="text-[#A90706] font-condensed text-sm font-normal uppercase">
                  {product.pricingTier}
                </p>
              </div>
            </div>
          </div>

          {/* Deep-Dive Feature Grid */}
          <div className="space-y-6">
            <span className="font-condensed text-xs font-normal text-[#A90706] uppercase tracking-widest block">
              // FEATURE MATRIX &amp; CAPABILITIES
            </span>
            <h2 className="text-3xl font-normal text-slate-900 uppercase tracking-tight mb-8 font-[var(--font-geist)]">
              CORE SYSTEM FEATURES
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {product.keyFeatures.map((feat, idx) => (
                <div key={idx} className="p-8 bg-white border border-[#E2DDD5] space-y-3 hover:border-slate-900 transition-colors">
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-6 bg-[#A90706] text-white font-condensed text-xs font-normal flex items-center justify-center">
                      {idx + 1}
                    </span>
                    <h3 className="font-condensed text-lg font-normal text-slate-900 uppercase tracking-wide">
                      {feat.title}
                    </h3>
                  </div>
                  <p className="text-slate-600 text-sm font-normal leading-relaxed pl-9">
                    {feat.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Industry Use Cases & Tech Stack */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            <div className="lg:col-span-7 bg-white border border-[#E2DDD5] p-8 space-y-4">
              <span className="font-condensed text-xs font-normal text-slate-500 uppercase tracking-widest block border-b border-[#E2DDD5] pb-2">
                TESTED INDUSTRY USE CASES
              </span>
              <div className="space-y-3 pt-2">
                {product.useCases.map((useCase, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-xs font-normal text-slate-900 uppercase font-condensed">
                    <CheckCircle2 className="w-4 h-4 text-[#A90706] shrink-0 mt-0.5" />
                    <span>{useCase}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 bg-slate-900 text-white p-8 space-y-4">
              <span className="font-condensed text-xs font-normal text-[#A90706] uppercase tracking-widest block border-b border-slate-800 pb-2">
                TECHNOLOGY &amp; FRAMEWORKS
              </span>
              <p className="text-xs text-slate-300 font-normal leading-relaxed">
                Engineered with modern cloud-native frameworks for high scalability and zero-downtime operations.
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                {product.techStack.map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-slate-800 text-white text-xs font-condensed font-normal uppercase border border-slate-700">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* Bottom CTA Box */}
          <div className="bg-white border-2 border-slate-900 p-10 sm:p-14 text-center space-y-6 shadow-2xl">
            <span className="font-condensed text-xs font-normal text-[#A90706] uppercase tracking-widest block">
              // READY TO INTEGRATE {product.name.toUpperCase()}?
            </span>
            <h2 className="text-3xl sm:text-4xl font-normal text-slate-900 uppercase tracking-tight font-[var(--font-geist)]">
              REQUEST A DEMO OR DISCUSS CUSTOM ARCHITECTURE
            </h2>
            <p className="text-slate-600 text-sm font-normal max-w-xl mx-auto leading-relaxed">
              Our principal software architects are available to guide technical deployment and POC integration for your organization.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <button
                onClick={() => {
                  setDemoSubmitted(false);
                  setIsDemoModalOpen(true);
                }}
                className="px-8 py-4 bg-[#A90706] hover:bg-[#880504] text-white font-condensed text-xs font-normal uppercase tracking-widest transition-colors cursor-pointer"
              >
                REQUEST DEMO SANDBOX
              </button>
              <Link
                href={`/${locale}/book-consultation`}
                className="px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white font-condensed text-xs font-normal uppercase tracking-widest transition-colors"
              >
                BOOK A STRATEGY CALL
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* Demo Modal */}
      {isDemoModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-xs">
          <div className="bg-[#FAF8F5] max-w-lg w-full p-8 relative border-2 border-slate-900 shadow-2xl">
            <button
              onClick={() => setIsDemoModalOpen(false)}
              className="absolute top-6 right-6 p-2 bg-slate-900 text-white hover:bg-[#A90706] transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {demoSubmitted ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-red-50 text-[#A90706] flex items-center justify-center mx-auto mb-4 border border-[#A90706] rounded-full">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-normal text-slate-900 mb-2 uppercase font-[var(--font-geist)]">
                  DEMO REQUEST CONFIRMED!
                </h3>
                <p className="text-slate-600 text-xs max-w-sm mx-auto mb-4 font-normal">
                  Our engineering team for <strong className="font-normal text-slate-900">{product.name}</strong> will send sandbox login credentials to your work email.
                </p>
                {referenceId && (
                  <p className="text-xs font-bold text-[#A90706] font-condensed mb-6">
                    DEMO REQUEST ID: {referenceId}
                  </p>
                )}
                <button
                  onClick={() => setIsDemoModalOpen(false)}
                  className="px-8 py-3.5 bg-[#A90706] text-white font-condensed text-xs font-normal uppercase tracking-widest cursor-pointer"
                >
                  CLOSE WINDOW
                </button>
              </div>
            ) : (
              <div>
                <span className="font-condensed text-xs font-normal text-[#A90706] uppercase tracking-widest block mb-2">
                  // ENTERPRISE DEMO ACCESS
                </span>
                <h3 className="text-2xl font-normal text-slate-900 uppercase mb-1 font-[var(--font-geist)]">
                  {product.name}
                </h3>
                <p className="text-xs text-slate-600 mb-6 font-normal">
                  Request live sandbox access and technical architecture walkthrough.
                </p>

                <form onSubmit={handleDemoSubmit} className="space-y-4">
                  {errorMessage && (
                    <div className="p-3 bg-red-50 border border-red-600 text-red-700 text-xs font-bold">
                      ⚠️ {errorMessage}
                    </div>
                  )}

                  <div>
                    <label className="block text-[10px] font-normal text-slate-900 uppercase mb-1 font-condensed">
                      WORK EMAIL *
                    </label>
                    <input
                      type="email"
                      required
                      value={demoEmail}
                      onChange={(e) => setDemoEmail(e.target.value.toLowerCase())}
                      placeholder="name@company.com"
                      className="w-full px-3.5 py-2.5 bg-white border border-[#E2DDD5] text-xs font-normal text-slate-900 focus:outline-hidden focus:border-slate-900"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-normal text-slate-900 uppercase mb-1 font-condensed">
                      FULL NAME *
                    </label>
                    <input
                      type="text"
                      required
                      value={demoName}
                      onChange={(e) => setDemoName(e.target.value)}
                      placeholder="John Doe"
                      className="w-full px-3.5 py-2.5 bg-white border border-[#E2DDD5] text-xs font-normal uppercase text-slate-900 focus:outline-hidden focus:border-slate-900"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-normal text-slate-900 uppercase mb-1 font-condensed">
                      COMPANY / ORGANIZATION *
                    </label>
                    <input
                      type="text"
                      required
                      value={demoCompany}
                      onChange={(e) => setDemoCompany(e.target.value)}
                      placeholder="e.g. Acme Tech Solutions"
                      className="w-full px-3.5 py-2.5 bg-white border border-[#E2DDD5] text-xs font-normal uppercase text-slate-900 focus:outline-hidden focus:border-slate-900"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-[#A90706] hover:bg-[#880504] text-white font-condensed text-xs font-normal uppercase tracking-widest transition-colors flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    <span>{isSubmitting ? "SUBMITTING REQUEST..." : "REQUEST DEMO ACCESS"}</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      )}

      <Footer />
    </main>
  );
}
