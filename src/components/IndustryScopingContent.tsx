"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { 
  Building2, 
  CheckCircle2, 
  ArrowUpRight, 
  ShieldCheck, 
  FileText, 
  Sparkles,
  HelpCircle,
  Clock,
  Globe
} from "lucide-react";

interface IndustryScopingContentProps {
  locale?: string;
}

function ScopingForm({ locale = "en" }: IndustryScopingContentProps) {
  const searchParams = useSearchParams();
  const initialDomain = searchParams?.get("domain") || "Fintech & Financial Systems";

  // Form State
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [industryDomain, setIndustryDomain] = useState(initialDomain);
  const [currency, setCurrency] = useState<"INR" | "USD" | "EUR" | "GBP">("INR");
  const [budgetRange, setBudgetRange] = useState("₹2,50,000 - ₹5,00,000");
  const [projectDescription, setProjectDescription] = useState("");
  const [questionsToKnow, setQuestionsToKnow] = useState("");

  // Submission State
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [referenceId, setReferenceId] = useState<string | null>(null);

  useEffect(() => {
    const domainFromUrl = searchParams?.get("domain");
    if (domainFromUrl) {
      setIndustryDomain(domainFromUrl);
    }
  }, [searchParams]);

  const budgetOptions: Record<"INR" | "USD" | "EUR" | "GBP", string[]> = {
    INR: [
      "₹1,00,000 - ₹2,50,000",
      "₹2,50,000 - ₹5,00,000",
      "₹5,00,000 - ₹10,00,000",
      "₹10,00,000 - ₹25,00,000",
      "₹25,00,000+",
    ],
    USD: [
      "< $3,000 USD",
      "$3,000 - $6,000 USD",
      "$6,000 - $15,000 USD",
      "$15,000 - $35,000 USD",
      "$35,000+ USD",
    ],
    EUR: [
      "< €2,500 EUR",
      "€2,500 - €5,500 EUR",
      "€5,500 - €14,000 EUR",
      "€14,000 - €30,000 EUR",
      "€30,000+ EUR",
    ],
    GBP: [
      "< £2,000 GBP",
      "£2,000 - £4,500 GBP",
      "£4,500 - £12,000 GBP",
      "£12,000 - £25,000 GBP",
      "£25,000+ GBP",
    ],
  };

  const industryDomainsList = [
    "Fintech & Financial Systems",
    "Healthcare & Telehealth",
    "E-Commerce & Retail",
    "Logistics & Supply Chain",
    "Manufacturing & IoT",
    "Automotive & Connected Mobility",
    "Biotech & Life Sciences",
    "Construction & Real Estate",
    "Cryptocurrency & Web3 Exchange",
    "Education & E-Learning",
    "Entertainment & Streaming Media",
    "Insurance & Underwriting AI",
    "Other Industry Vertical",
  ];

  const handleCurrencyChange = (newCurr: "INR" | "USD" | "EUR" | "GBP") => {
    setCurrency(newCurr);
    setBudgetRange(budgetOptions[newCurr][1]);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const res = await fetch("/api/send-enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          formType: "industry-scoping",
          name: fullName,
          email,
          phone,
          company,
          industryDomain,
          currency,
          budgetRange,
          projectDescription,
          questionsToKnow,
        }),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setReferenceId(data.referenceId || null);
        setIsSubmitted(true);
      } else {
        setErrorMessage(data.error || "Failed to submit scoping request. Please try again.");
      }
    } catch (err) {
      console.error(err);
      setErrorMessage("Network error. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {isSubmitted ? (
        <div className="max-w-3xl mx-auto bg-white border-2 border-slate-900 p-10 sm:p-14 text-center shadow-2xl">
          <div className="w-20 h-20 bg-red-50 border-2 border-[#A90706] text-[#A90706] rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-12 h-12" />
          </div>
          <span className="font-condensed text-xs font-black text-[#A90706] uppercase tracking-widest block mb-2">
            // INDUSTRY SCOPING SUBMITTED
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 uppercase tracking-tight mb-4 font-[var(--font-geist)]">
            SCOPING REQUEST CONFIRMED FOR {fullName.toUpperCase()}
          </h2>
          <p className="text-slate-600 text-sm sm:text-base font-normal max-w-lg mx-auto mb-8 leading-relaxed">
            Our domain principal architects have received your requirements for <strong className="text-slate-900 font-bold">{industryDomain}</strong>. A detailed feasibility report &amp; scoping audit will be sent to <strong className="text-slate-900 font-bold">{email}</strong> within 24 hours.
          </p>

          {/* Ticket Summary */}
          <div className="p-6 bg-[#FAF8F5] border-2 border-slate-900 text-left mb-8 space-y-3 font-condensed">
            <div className="flex items-center justify-between border-b border-[#E2DDD5] pb-3 text-xs text-slate-500 uppercase font-bold">
              <span>SCOPING TICKET ID: {referenceId}</span>
              <span>STATUS: UNDER ARCHITECT REVIEW</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs uppercase text-slate-900 pt-2 font-bold">
              <div>
                <span className="text-slate-400 block text-[10px]">SELECTED INDUSTRY DOMAIN:</span>
                <span>{industryDomain}</span>
              </div>
              <div>
                <span className="text-slate-400 block text-[10px]">ESTIMATED BUDGET:</span>
                <span className="text-[#A90706]">{budgetRange}</span>
              </div>
              <div>
                <span className="text-slate-400 block text-[10px]">COMPANY / ORGANIZATION:</span>
                <span>{company || "Stealth Startup / Independent Client"}</span>
              </div>
              <div>
                <span className="text-slate-400 block text-[10px]">CONTACT PHONE / WHATSAPP:</span>
                <span>{phone}</span>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 font-condensed">
            <Link
              href={locale ? `/${locale}/industry` : "/industry"}
              className="px-8 py-4 bg-slate-900 text-white text-xs font-black uppercase tracking-widest hover:bg-[#A90706] transition-colors"
            >
              EXPLORE ALL INDUSTRIES
            </Link>
            <button
              onClick={() => setIsSubmitted(false)}
              className="px-8 py-4 bg-white border border-slate-900 text-slate-900 text-xs font-black uppercase tracking-widest hover:bg-slate-900 hover:text-white transition-colors cursor-pointer"
            >
              SUBMIT ANOTHER SCOPING REQUEST
            </button>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Form Column (8 Cols) */}
          <div className="lg:col-span-8 bg-white border-2 border-slate-900 p-8 sm:p-12 shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-8 font-normal">
              {errorMessage && (
                <div className="p-4 bg-red-50 border-2 border-red-600 text-red-700 text-xs font-bold">
                  ⚠️ {errorMessage}
                </div>
              )}

              {/* Step 1: Industry Domain & Budget */}
              <div className="space-y-6">
                <div className="flex items-center gap-3 border-b-2 border-slate-900 pb-3">
                  <span className="w-7 h-7 bg-[#A90706] text-white font-condensed text-xs font-black flex items-center justify-center">
                    01
                  </span>
                  <h3 className="font-condensed text-xl font-black text-slate-900 uppercase tracking-wide font-[var(--font-geist)]">
                    INDUSTRY DOMAIN &amp; ESTIMATED BUDGET
                  </h3>
                </div>

                <div>
                  <label className="font-condensed text-xs font-bold text-slate-900 uppercase tracking-wider block mb-2">
                    SELECT YOUR INDUSTRY DOMAIN *
                  </label>
                  <select
                    value={industryDomain}
                    onChange={(e) => setIndustryDomain(e.target.value)}
                    className="w-full p-3.5 bg-[#FAF8F5] border border-[#E2DDD5] font-condensed text-xs font-bold uppercase text-slate-900 focus:outline-hidden focus:border-slate-900"
                  >
                    {industryDomainsList.map((dom) => (
                      <option key={dom} value={dom}>
                        {dom}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Multi-Currency Budget Selector */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="font-condensed text-xs font-bold text-slate-900 uppercase tracking-wider">
                      ESTIMATED PROJECT BUDGET *
                    </label>
                    <div className="flex items-center gap-1">
                      {(["INR", "USD", "EUR", "GBP"] as const).map((curr) => (
                        <button
                          key={curr}
                          type="button"
                          onClick={() => handleCurrencyChange(curr)}
                          className={`px-2.5 py-1 font-condensed text-[10px] font-black uppercase transition-all cursor-pointer ${
                            currency === curr
                              ? "bg-[#A90706] text-white"
                              : "bg-[#FAF8F5] text-slate-600 border border-[#E2DDD5] hover:border-slate-900"
                          }`}
                        >
                          {curr === "INR" ? "₹ INR" : curr === "USD" ? "$ USD" : curr === "EUR" ? "€ EUR" : "£ GBP"}
                        </button>
                      ))}
                    </div>
                  </div>

                  <select
                    value={budgetRange}
                    onChange={(e) => setBudgetRange(e.target.value)}
                    className="w-full p-3.5 bg-[#FAF8F5] border border-[#E2DDD5] font-condensed text-xs font-bold uppercase text-slate-900 focus:outline-hidden focus:border-slate-900"
                  >
                    {budgetOptions[currency].map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Step 2: Contact Info */}
              <div className="space-y-6 pt-6 border-t border-[#E2DDD5]">
                <div className="flex items-center gap-3 border-b-2 border-slate-900 pb-3">
                  <span className="w-7 h-7 bg-[#A90706] text-white font-condensed text-xs font-black flex items-center justify-center">
                    02
                  </span>
                  <h3 className="font-condensed text-xl font-black text-slate-900 uppercase tracking-wide font-[var(--font-geist)]">
                    YOUR CONTACT DETAILS
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="font-condensed text-xs font-bold text-slate-900 uppercase tracking-wider block mb-1">
                      FULL NAME *
                    </label>
                    <input
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="e.g. Vikram Sharma / Alex Morgan"
                      className="w-full p-3.5 bg-[#FAF8F5] border border-[#E2DDD5] font-condensed text-xs font-bold uppercase text-slate-900 placeholder:text-slate-400 focus:outline-hidden focus:border-slate-900"
                    />
                  </div>

                  <div>
                    <label className="font-condensed text-xs font-bold text-slate-900 uppercase tracking-wider block mb-1">
                      WORK EMAIL *
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value.toLowerCase())}
                      autoCapitalize="none"
                      autoCorrect="off"
                      spellCheck={false}
                      placeholder="vikram@company.com"
                      className="w-full p-3.5 bg-[#FAF8F5] border border-[#E2DDD5] font-condensed text-xs font-bold text-slate-900 lowercase placeholder:text-slate-400 focus:outline-hidden focus:border-slate-900"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="font-condensed text-xs font-bold text-slate-900 uppercase tracking-wider block mb-1">
                      PHONE / WHATSAPP NUMBER *
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+91 98765-43210 / +1 (555) 000-0000"
                      className="w-full p-3.5 bg-[#FAF8F5] border border-[#E2DDD5] font-condensed text-xs font-bold text-slate-900 placeholder:text-slate-400 focus:outline-hidden focus:border-slate-900"
                    />
                  </div>

                  <div>
                    <label className="font-condensed text-xs font-bold text-slate-900 uppercase tracking-wider block mb-1">
                      COMPANY / STARTUP NAME
                    </label>
                    <input
                      type="text"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      placeholder="e.g. HealthTech Global Inc."
                      className="w-full p-3.5 bg-[#FAF8F5] border border-[#E2DDD5] font-condensed text-xs font-bold uppercase text-slate-900 placeholder:text-slate-400 focus:outline-hidden focus:border-slate-900"
                    />
                  </div>
                </div>
              </div>

              {/* Step 3: Industry Scope & Specific Questions */}
              <div className="space-y-6 pt-6 border-t border-[#E2DDD5]">
                <div className="flex items-center gap-3 border-b-2 border-slate-900 pb-3">
                  <span className="w-7 h-7 bg-[#A90706] text-white font-condensed text-xs font-black flex items-center justify-center">
                    03
                  </span>
                  <h3 className="font-condensed text-xl font-black text-slate-900 uppercase tracking-wide font-[var(--font-geist)]">
                    SOLUTION REQUIREMENTS &amp; WHAT YOU WANT TO KNOW
                  </h3>
                </div>

                <div>
                  <label className="font-condensed text-xs font-bold text-slate-900 uppercase tracking-wider block mb-1">
                    PROJECT DESCRIPTION &amp; TECHNICAL GOALS *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={projectDescription}
                    onChange={(e) => setProjectDescription(e.target.value)}
                    placeholder="Describe your solution concept, target users, compliance requirements (e.g. HIPAA, PCI-DSS, GDPR), or legacy system migration..."
                    className="w-full p-3.5 bg-[#FAF8F5] border border-[#E2DDD5] font-condensed text-xs font-normal text-slate-900 placeholder:text-slate-400 focus:outline-hidden focus:border-slate-900"
                  ></textarea>
                </div>

                <div>
                  <label className="font-condensed text-xs font-bold text-slate-900 uppercase tracking-wider block mb-1">
                    SPECIFIC QUESTIONS FOR OUR DOMAIN ARCHITECTS
                  </label>
                  <textarea
                    rows={3}
                    value={questionsToKnow}
                    onChange={(e) => setQuestionsToKnow(e.target.value)}
                    placeholder="List what you want to know (e.g. expected development timeline, cloud infrastructure cost estimate, AI integration feasibility, tech stack recommendation)..."
                    className="w-full p-3.5 bg-[#FAF8F5] border border-[#E2DDD5] font-condensed text-xs font-normal text-slate-900 placeholder:text-slate-400 focus:outline-hidden focus:border-slate-900"
                  ></textarea>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-6 border-t border-[#E2DDD5]">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-5 bg-[#A90706] hover:bg-[#880504] text-white font-condensed text-sm font-black tracking-widest uppercase transition-all shadow-xl flex items-center justify-center gap-3 cursor-pointer disabled:opacity-50 group"
                >
                  <span className="inline-flex items-center gap-2">
                    <span>{isSubmitting ? "PROCESSING INDUSTRY SCOPING..." : "SUBMIT REQUEST FOR INDUSTRY SCOPING"}</span>
                    <ArrowUpRight className="w-5 h-5 shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </button>

                <div className="flex flex-wrap items-center justify-center gap-4 mt-4 text-[10px] font-condensed font-bold text-slate-500 uppercase">
                  <span>✓ DOMAIN ARCHITECT REVIEW</span>
                  <span>•</span>
                  <span>✓ STRICT NDA INCLUDED</span>
                  <span>•</span>
                  <span>✓ 24-HOUR FEASIBILITY AUDIT</span>
                </div>
              </div>

            </form>
          </div>

          {/* Right Information Sidebar (4 Cols) */}
          <div className="lg:col-span-4 space-y-6 font-normal">
            
            <div className="p-8 border-2 border-slate-900 bg-white shadow-xl space-y-4">
              <span className="font-condensed text-xs font-black text-[#A90706] uppercase tracking-widest block border-b border-[#E2DDD5] pb-2">
                // SCOPING DELIVERABLES
              </span>
              
              <div className="space-y-4 text-xs font-bold text-slate-800 uppercase">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#A90706] shrink-0 mt-0.5" />
                  <span>Domain Solution Architecture Blueprint</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#A90706] shrink-0 mt-0.5" />
                  <span>Regulatory &amp; Compliance Risk Assessment</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#A90706] shrink-0 mt-0.5" />
                  <span>Milestone Roadmap &amp; Cost Estimation</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#A90706] shrink-0 mt-0.5" />
                  <span>Tech Stack &amp; Database Recommendations</span>
                </div>
              </div>
            </div>

            <div className="p-8 bg-slate-900 text-white border border-slate-900 shadow-xl space-y-4 font-normal">
              <span className="font-condensed text-xs font-black text-[#A90706] uppercase tracking-widest block border-b border-slate-800 pb-2">
                // NEED DIRECT ARCHITECT HELP?
              </span>
              <p className="text-xs text-slate-300 leading-relaxed font-normal">
                Prefer an immediate email scoping audit? Reach our principal industry directors directly.
              </p>
              <div className="space-y-2 pt-2 text-xs font-condensed font-bold uppercase">
                <div className="text-slate-400 text-[10px]">DIRECT INDUSTRY EMAIL:</div>
                <a href="mailto:industry@brosdev.site" className="text-white hover:text-[#A90706] block underline font-normal">
                  industry@brosdev.site
                </a>
              </div>
            </div>

          </div>

        </div>
      )}
    </div>
  );
}

export default function IndustryScopingContent({ locale = "en" }: IndustryScopingContentProps) {
  return (
    <main className="min-h-screen bg-[#FAF8F5] text-slate-900 selection:bg-[#A90706] selection:text-white font-sans antialiased">
      <Navbar />

      {/* Header Banner */}
      <section className="pt-36 pb-20 border-b border-[#E2DDD5] bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-[#E2DDD5] mb-6">
            <span className="w-2 h-2 bg-[#A90706]"></span>
            <span className="font-condensed text-xs font-black tracking-widest text-[#A90706] uppercase">
              // DOMAIN AUDIT &amp; TECHNICAL SCOPING
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-slate-900 tracking-tight leading-none uppercase mb-6 font-[var(--font-geist)]">
            REQUEST INDUSTRY SCOPING
          </h1>

          <p className="text-slate-700 text-lg sm:text-xl font-medium max-w-3xl leading-relaxed font-[var(--font-geist)]">
            Submit your industry domain requirements, compliance objectives, and technical questions for a comprehensive architectural feasibility review by our domain directors.
          </p>
        </div>
      </section>

      <section className="py-20 bg-[#FAF8F5]">
        <Suspense fallback={
          <div className="text-center py-20 font-condensed font-bold text-slate-500 uppercase">
            LOADING INDUSTRY SCOPING FORM...
          </div>
        }>
          <ScopingForm locale={locale} />
        </Suspense>
      </section>

      <Footer />
    </main>
  );
}
