"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { PRODUCTS_DATA, ProductItem } from "@/data/productsData";
import { 
  Layers, 
  ArrowUpRight, 
  CheckCircle2, 
  Sparkles, 
  Terminal, 
  ShieldCheck, 
  Cpu, 
  Globe, 
  Calendar,
  X
} from "lucide-react";

interface ProductsOverviewContentProps {
  locale?: string;
}

export default function ProductsOverviewContent({ locale = "en" }: ProductsOverviewContentProps) {
  const [activeCategory, setActiveCategory] = useState<string>("ALL");
  const [demoModalProduct, setDemoModalProduct] = useState<ProductItem | null>(null);
  const [demoSubmitted, setDemoSubmitted] = useState(false);

  const [demoEmail, setDemoEmail] = useState("");
  const [demoName, setDemoName] = useState("");
  const [demoCompany, setDemoCompany] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [referenceId, setReferenceId] = useState<string | null>(null);

  const filteredProducts = activeCategory === "ALL" 
    ? PRODUCTS_DATA 
    : PRODUCTS_DATA.filter((p) => p.category === activeCategory);

  const categories = ["ALL", "Enterprise AI", "FinTech", "Cloud Infrastructure", "SaaS & CRM"];

  const handleRequestDemoSubmit = async (e: React.FormEvent) => {
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
          inquiryType: `Enterprise Demo Access Request: ${demoModalProduct?.name || "Suite"}`,
          productRequested: demoModalProduct?.name || "Suite Product",
          message: `User requested live demo sandbox access for ${demoModalProduct?.name || "Product"}`,
        }),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setReferenceId(data.referenceId || null);
        setDemoSubmitted(true);
      } else {
        setErrorMessage(data.error || "Failed to request demo access. Please try again.");
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
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-[#E2DDD5] mb-6">
            <span className="w-2 h-2 bg-[#A90706]"></span>
            <span className="font-condensed text-xs font-normal tracking-widest text-[#A90706] uppercase">
              // BROSDEV SOLUTIONS PROPRIETARY SOFTWARE SUITE
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-normal text-slate-900 tracking-tight leading-none uppercase mb-6 font-[var(--font-geist)]">
            ENTERPRISE PRODUCTS &amp; PLATFORMS
          </h1>

          <p className="text-slate-700 text-lg sm:text-xl font-normal max-w-3xl leading-relaxed font-[var(--font-geist)]">
            Battle-tested proprietary software platforms engineered by BrosDev Solutions. High-performance AI orchestration, multi-currency fintech ledgers, cloud infrastructure, and intelligent SaaS modules.
          </p>
        </div>
      </section>

      {/* Filter Categories Bar */}
      <section className="py-8 bg-white border-b border-[#E2DDD5] sticky top-20 z-30 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-condensed text-xs font-normal text-slate-500 uppercase tracking-widest mr-4">
              FILTER CATEGORY:
            </span>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 font-condensed text-xs font-normal uppercase tracking-wider transition-all cursor-pointer border ${
                  activeCategory === cat
                    ? "bg-[#A90706] text-white border-[#A90706] shadow-sm"
                    : "bg-[#FAF8F5] text-slate-700 border-[#E2DDD5] hover:border-slate-900"
                }`}
              >
                {cat === "ALL" ? "ALL PRODUCTS" : cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Directory Grid */}
      <section className="py-20 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

          {filteredProducts.map((product) => {
            const productHref = `/${locale}/products/${product.slug}`;

            return (
              <div
                key={product.slug}
                className="bg-white border-2 border-slate-900 p-8 sm:p-12 shadow-2xl hover:border-[#A90706] transition-colors relative group"
              >
                {/* Header Ticket Row */}
                <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#E2DDD5] pb-6 mb-8 font-condensed font-normal">
                  <div className="flex items-center gap-3">
                    <span className="px-3 py-1 bg-red-50 text-[#A90706] border border-red-200 text-xs uppercase tracking-widest">
                      {product.badge}
                    </span>
                    <span className="text-xs text-slate-500 uppercase">
                      DEPLOYMENT: {product.deploymentModel}
                    </span>
                  </div>

                  <span className="text-xs text-slate-900 uppercase">
                    LICENSING: {product.pricingTier}
                  </span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  
                  {/* Left Main Content */}
                  <div className="lg:col-span-8 space-y-6">
                    <div>
                      <h2 className="text-3xl sm:text-4xl font-normal text-slate-900 uppercase tracking-tight mb-2 font-[var(--font-geist)] group-hover:text-[#A90706] transition-colors">
                        {product.name}
                      </h2>
                      <p className="text-sm sm:text-base font-normal text-[#A90706] uppercase tracking-wide font-condensed">
                        {product.tagline}
                      </p>
                    </div>

                    <p className="text-slate-700 text-sm sm:text-base font-normal leading-relaxed font-[var(--font-geist)]">
                      {product.description}
                    </p>

                    {/* Key Features Bullet List */}
                    <div className="space-y-3 pt-2">
                      <span className="font-condensed text-xs font-normal text-slate-500 uppercase tracking-widest block">
                        KEY ARCHITECTURAL HIGHLIGHTS:
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {product.keyFeatures.map((feat, idx) => (
                          <div key={idx} className="p-3 bg-[#FAF8F5] border border-[#E2DDD5] text-xs font-normal">
                            <span className="text-slate-900 font-normal uppercase block mb-1">
                              • {feat.title}
                            </span>
                            <span className="text-slate-600 font-normal leading-normal">
                              {feat.desc}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Tech Stack Pills */}
                    <div className="pt-2">
                      <span className="font-condensed text-[10px] font-normal text-slate-500 uppercase tracking-widest block mb-2">
                        STACK &amp; RUNTIME TECH:
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {product.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 bg-white border border-[#E2DDD5] text-slate-800 text-[11px] font-condensed font-normal uppercase"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right Metric Card Column */}
                  <div className="lg:col-span-4 bg-[#FAF8F5] border border-[#E2DDD5] p-6 space-y-6">
                    <span className="font-condensed text-xs font-normal text-[#A90706] uppercase tracking-widest block border-b border-[#E2DDD5] pb-2">
                      // PERFORMANCE BENCHMARKS
                    </span>

                    <div className="grid grid-cols-2 gap-4">
                      {product.architectureHighlights.map((stat, idx) => (
                        <div key={idx} className="p-3 bg-white border border-[#E2DDD5]">
                          <span className="text-xl sm:text-2xl font-normal text-slate-900 block font-[var(--font-geist)]">
                            {stat.metric}
                          </span>
                          <span className="text-[10px] font-condensed font-normal text-slate-500 uppercase block">
                            {stat.label}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="space-y-3 pt-4 border-t border-[#E2DDD5]">
                      <Link
                        href={productHref}
                        className="w-full py-4 bg-slate-900 hover:bg-[#A90706] text-white font-condensed text-xs font-normal uppercase tracking-widest transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md"
                      >
                        <span>EXPLORE PRODUCT DETAILS</span>
                        <ArrowUpRight className="w-4 h-4" />
                      </Link>

                      <button
                        onClick={() => {
                          setDemoModalProduct(product);
                          setDemoSubmitted(false);
                        }}
                        className="w-full py-3.5 bg-white border border-slate-900 hover:bg-slate-900 hover:text-white text-slate-900 font-condensed text-xs font-normal uppercase tracking-widest transition-colors flex items-center justify-center gap-2 cursor-pointer"
                      >
                        <span>REQUEST DEMO / TRIAL</span>
                      </button>
                    </div>
                  </div>

                </div>
              </div>
            );
          })}

        </div>
      </section>

      {/* Demo Modal */}
      {demoModalProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-xs">
          <div className="bg-[#FAF8F5] max-w-lg w-full p-8 relative border-2 border-slate-900 shadow-2xl">
            <button
              onClick={() => setDemoModalProduct(null)}
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
                  DEMO REQUEST RECEIVED!
                </h3>
                <p className="text-slate-600 text-xs max-w-sm mx-auto mb-4 font-normal">
                  Our product engineering team for <strong className="font-normal text-slate-900">{demoModalProduct.name}</strong> will provision sandbox credentials and reach out within 2 hours.
                </p>
                {referenceId && (
                  <p className="text-xs font-bold text-[#A90706] font-condensed mb-6">
                    DEMO REQUEST ID: {referenceId}
                  </p>
                )}
                <button
                  onClick={() => setDemoModalProduct(null)}
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
                  {demoModalProduct.name}
                </h3>
                <p className="text-xs text-slate-600 mb-6 font-normal">
                  Request live sandbox access and architecture walkthrough.
                </p>

                <form onSubmit={handleRequestDemoSubmit} className="space-y-4">
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
