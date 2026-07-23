"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { 
  Calendar, 
  Clock, 
  Globe, 
  CheckCircle2, 
  ArrowUpRight, 
  Video, 
  Phone, 
  DollarSign, 
  IndianRupee, 
  ShieldCheck, 
  Terminal, 
  Sparkles,
  User,
  Mail,
  Building,
  MessageSquare
} from "lucide-react";

interface BookConsultationContentProps {
  locale?: string;
}

export default function BookConsultationContent({ locale = "en" }: BookConsultationContentProps) {
  // Form State
  const [serviceType, setServiceType] = useState("Full-Stack Web & SaaS Application");
  const [customService, setCustomService] = useState("");
  const [currency, setCurrency] = useState<"INR" | "USD" | "EUR" | "GBP">("INR");
  const [budgetRange, setBudgetRange] = useState("₹2,50,000 - ₹5,00,000");
  const [projectStage, setProjectStage] = useState("MVP / Early Stage");
  const [timeline, setTimeline] = useState("1 - 3 Months");

  // Meeting Schedule State
  const [meetingDate, setMeetingDate] = useState(() => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split("T")[0];
  });
  const [timeSlot, setTimeSlot] = useState("02:00 PM - 02:45 PM");
  const [timezone, setTimezone] = useState("IST (Asia/Kolkata - GMT +5:30)");
  const [platform, setPlatform] = useState("Google Meet");

  // Personal / Business Contact Info
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [projectNotes, setProjectNotes] = useState("");

  // Submission State
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [referenceId, setReferenceId] = useState<string | null>(null);

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

  const handleCurrencyChange = (newCurrency: "INR" | "USD" | "EUR" | "GBP") => {
    setCurrency(newCurrency);
    setBudgetRange(budgetOptions[newCurrency][1]);
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
          formType: "book-consultation",
          name: fullName,
          email,
          phone,
          company,
          serviceType: serviceType === "Other Custom Service" ? customService : serviceType,
          currency,
          budgetRange,
          projectStage,
          timeline,
          meetingDate,
          timeSlot,
          timezone,
          platform,
          projectNotes,
        }),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setReferenceId(data.referenceId || null);
        setIsSubmitted(true);
      } else {
        setErrorMessage(data.error || "Failed to book consultation. Please try again.");
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
              // ARCHITECTURAL CONSULTATION &amp; SCOPING
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-normal text-slate-900 tracking-tight leading-none uppercase mb-6 font-[var(--font-geist)]">
            BOOK A STRATEGY CONSULTATION
          </h1>

          <p className="text-slate-700 text-lg sm:text-xl font-normal max-w-3xl leading-relaxed font-[var(--font-geist)]">
            Schedule a 45-minute architectural scoping session with our senior engineering directors. Choose your preferred meeting date, time slot, budget range, and project requirements.
          </p>
        </div>
      </section>

      {/* Main Scoping Form & Details Container */}
      <section className="py-20 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {isSubmitted ? (
            <div className="max-w-3xl mx-auto bg-white border-2 border-slate-900 p-10 sm:p-14 text-center shadow-2xl">
              <div className="w-20 h-20 bg-red-50 border-2 border-[#A90706] text-[#A90706] rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-12 h-12" />
              </div>
              <span className="font-condensed text-xs font-normal text-[#A90706] uppercase tracking-widest block mb-2">
                // CONSULTATION CONFIRMED
              </span>
              <h2 className="text-3xl sm:text-4xl font-normal text-slate-900 uppercase tracking-tight mb-4 font-[var(--font-geist)]">
                MEETING RESERVED FOR {fullName.toUpperCase()}
              </h2>
              <p className="text-slate-600 text-sm sm:text-base font-normal max-w-lg mx-auto mb-8 leading-relaxed">
                We have emailed your calendar invitation &amp; {platform} link to <strong className="text-slate-900 font-normal">{email}</strong>.
              </p>

              {/* Meeting Summary Ticket */}
              <div className="p-6 bg-[#FAF8F5] border-2 border-slate-900 text-left mb-8 space-y-3 font-condensed font-normal">
                <div className="flex items-center justify-between border-b border-[#E2DDD5] pb-3 text-xs text-slate-500 uppercase">
                  <span>CONFIRMATION ID: {referenceId}</span>
                  <span>STATUS: SCHEDULED</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs uppercase text-slate-900 pt-2 font-normal">
                  <div>
                    <span className="text-slate-400 block text-[10px]">MEETING DATE &amp; TIME:</span>
                    <span>{meetingDate} @ {timeSlot}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[10px]">TIMEZONE &amp; PLATFORM:</span>
                    <span>{timezone.split(" ")[0]} via {platform}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[10px]">SERVICE &amp; STAGE:</span>
                    <span>{serviceType === "Other" ? (customService || "Custom Service") : serviceType} ({projectStage})</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[10px]">ESTIMATED BUDGET:</span>
                    <span className="text-[#A90706] font-normal">{budgetRange}</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link
                  href={locale ? `/${locale}` : "/"}
                  className="px-8 py-4 bg-slate-900 text-white font-condensed text-xs font-normal uppercase tracking-widest hover:bg-[#A90706] transition-colors"
                >
                  RETURN TO HOME PAGE
                </Link>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="px-8 py-4 bg-white border border-slate-900 text-slate-900 font-condensed text-xs font-normal uppercase tracking-widest hover:bg-slate-900 hover:text-white transition-colors"
                >
                  BOOK ANOTHER SESSION
                </button>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              
              {/* Left Form Column (8 Cols) */}
              <div className="lg:col-span-8 bg-white border-2 border-slate-900 p-8 sm:p-12 shadow-2xl">
                <form onSubmit={handleSubmit} className="space-y-10">
                  {errorMessage && (
                    <div className="p-4 bg-red-50 border-2 border-red-600 text-red-700 text-xs font-bold">
                      ⚠️ {errorMessage}
                    </div>
                  )}

                  {/* Step 1: Service & Budget */}
                  <div className="space-y-6">
                    <div className="flex items-center gap-3 border-b-2 border-slate-900 pb-3">
                      <span className="w-7 h-7 bg-[#A90706] text-white font-condensed text-xs font-normal flex items-center justify-center">
                        01
                      </span>
                      <h3 className="font-condensed text-xl font-normal text-slate-900 uppercase tracking-wide font-[var(--font-geist)]">
                        SERVICE REQUIREMENTS &amp; BUDGET
                      </h3>
                    </div>

                    <div>
                      <label className="font-condensed text-xs font-normal text-slate-900 uppercase tracking-wider block mb-2">
                        SELECT PRIMARY SERVICE NEEDED *
                      </label>
                      <select
                        value={serviceType}
                        onChange={(e) => setServiceType(e.target.value)}
                        className="w-full p-3.5 bg-[#FAF8F5] border border-[#E2DDD5] font-condensed text-xs font-normal uppercase text-slate-900 focus:outline-hidden focus:border-slate-900"
                      >
                        <option value="Full-Stack Web & SaaS Application">Full-Stack Web &amp; SaaS Application</option>
                        <option value="AI & Enterprise LLM Workflows">AI &amp; Enterprise LLM Workflows</option>
                        <option value="Mobile App Development (iOS / Android)">Mobile App Development (iOS / Android)</option>
                        <option value="Cloud Architecture & Kubernetes Migration">Cloud Architecture &amp; Kubernetes Migration</option>
                        <option value="Hire Dedicated Developers (Build Your Team)">Hire Dedicated Developers (Build Your Team)</option>
                        <option value="UI/UX Product Design Systems">UI/UX Product Design Systems</option>
                        <option value="Headless E-Commerce Platform">Headless E-Commerce Platform</option>
                        <option value="Other">Other (Specify Custom Service Below)</option>
                      </select>

                      {serviceType === "Other" && (
                        <div className="mt-3">
                          <label className="font-condensed text-[11px] font-normal text-[#A90706] uppercase tracking-wider block mb-1">
                            SPECIFY YOUR CUSTOM SERVICE / REQUIREMENT *
                          </label>
                          <input
                            type="text"
                            required
                            value={customService}
                            onChange={(e) => setCustomService(e.target.value)}
                            placeholder="e.g. Blockchain Smart Contract Audit, Data Pipeline, Custom CMS..."
                            className="w-full p-3.5 bg-[#FAF8F5] border border-[#E2DDD5] font-condensed text-xs font-normal text-slate-900 placeholder:text-slate-400 focus:outline-hidden focus:border-slate-900"
                          />
                        </div>
                      )}
                    </div>

                    {/* Multi-Currency Budget Selector */}
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <label className="font-condensed text-xs font-normal text-slate-900 uppercase tracking-wider">
                          ESTIMATED PROJECT BUDGET *
                        </label>
                        {/* Currency Selector Pills */}
                        <div className="flex items-center gap-1">
                          {(["INR", "USD", "EUR", "GBP"] as const).map((curr) => (
                            <button
                              key={curr}
                              type="button"
                              onClick={() => handleCurrencyChange(curr)}
                              className={`px-2.5 py-1 font-condensed text-[10px] font-normal uppercase transition-all cursor-pointer ${
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
                        className="w-full p-3.5 bg-[#FAF8F5] border border-[#E2DDD5] font-condensed text-xs font-normal uppercase text-slate-900 focus:outline-hidden focus:border-slate-900"
                      >
                        {budgetOptions[currency].map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="font-condensed text-xs font-normal text-slate-900 uppercase tracking-wider block mb-1">
                          CURRENT PROJECT STAGE:
                        </label>
                        <select
                          value={projectStage}
                          onChange={(e) => setProjectStage(e.target.value)}
                          className="w-full p-3.5 bg-[#FAF8F5] border border-[#E2DDD5] font-condensed text-xs font-normal uppercase text-slate-900 focus:outline-hidden focus:border-slate-900"
                        >
                          <option value="Idea Phase / Scoping">Idea Phase / Initial Concept</option>
                          <option value="MVP / Early Stage">MVP / Early Stage Prototype</option>
                          <option value="Scaling Existing Platform">Scaling Existing App / Infrastructure</option>
                          <option value="Enterprise Migration">Enterprise Legacy Migration</option>
                        </select>
                      </div>

                      <div>
                        <label className="font-condensed text-xs font-normal text-slate-900 uppercase tracking-wider block mb-1">
                          TARGET TIMELINE:
                        </label>
                        <select
                          value={timeline}
                          onChange={(e) => setTimeline(e.target.value)}
                          className="w-full p-3.5 bg-[#FAF8F5] border border-[#E2DDD5] font-condensed text-xs font-normal uppercase text-slate-900 focus:outline-hidden focus:border-slate-900"
                        >
                          <option value="Immediate (1-2 Weeks)">Immediate (1-2 Weeks)</option>
                          <option value="1 - 3 Months">1 - 3 Months</option>
                          <option value="3 - 6 Months">3 - 6 Months</option>
                          <option value="Flexible / Long-Term">Flexible / Long-Term</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Step 2: Meeting Date, Time & Platform */}
                  <div className="space-y-6 pt-6 border-t border-[#E2DDD5]">
                    <div className="flex items-center gap-3 border-b-2 border-slate-900 pb-3">
                      <span className="w-7 h-7 bg-[#A90706] text-white font-condensed text-xs font-normal flex items-center justify-center">
                        02
                      </span>
                      <h3 className="font-condensed text-xl font-normal text-slate-900 uppercase tracking-wide font-[var(--font-geist)]">
                        SCHEDULE DATE &amp; TIME SLOT
                      </h3>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="font-condensed text-xs font-normal text-slate-900 uppercase tracking-wider block mb-1">
                          PREFERRED MEETING DATE *
                        </label>
                        <input
                          type="date"
                          required
                          value={meetingDate}
                          onChange={(e) => setMeetingDate(e.target.value)}
                          className="w-full p-3.5 bg-[#FAF8F5] border border-[#E2DDD5] font-condensed text-xs font-normal text-slate-900 focus:outline-hidden focus:border-slate-900"
                        />
                      </div>

                      <div>
                        <label className="font-condensed text-xs font-normal text-slate-900 uppercase tracking-wider block mb-1">
                          PREFERRED TIME SLOT *
                        </label>
                        <select
                          value={timeSlot}
                          onChange={(e) => setTimeSlot(e.target.value)}
                          className="w-full p-3.5 bg-[#FAF8F5] border border-[#E2DDD5] font-condensed text-xs font-normal uppercase text-slate-900 focus:outline-hidden focus:border-slate-900"
                        >
                          <option value="11:00 AM - 11:45 AM">11:00 AM - 11:45 AM</option>
                          <option value="02:00 PM - 02:45 PM">02:00 PM - 02:45 PM</option>
                          <option value="04:00 PM - 04:45 PM">04:00 PM - 04:45 PM</option>
                          <option value="06:30 PM - 07:15 PM">06:30 PM - 07:15 PM</option>
                          <option value="09:00 PM - 09:45 PM">09:00 PM - 09:45 PM</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="font-condensed text-xs font-normal text-slate-900 uppercase tracking-wider block mb-1">
                          TIMEZONE PREFERENCE:
                        </label>
                        <select
                          value={timezone}
                          onChange={(e) => setTimezone(e.target.value)}
                          className="w-full p-3.5 bg-[#FAF8F5] border border-[#E2DDD5] font-condensed text-xs font-normal uppercase text-slate-900 focus:outline-hidden focus:border-slate-900"
                        >
                          <option value="IST (Asia/Kolkata - GMT +5:30)">IST (India - GMT +5:30)</option>
                          <option value="EST (US Eastern - GMT -5:00)">EST (US Eastern - GMT -5:00)</option>
                          <option value="PST (US Pacific - GMT -8:00)">PST (US Pacific - GMT -8:00)</option>
                          <option value="GMT (Europe/London - GMT +0:00)">GMT (UK/Europe - GMT +0:00)</option>
                          <option value="CET (Europe/Berlin - GMT +1:00)">CET (Central Europe - GMT +1:00)</option>
                        </select>
                      </div>

                      <div>
                        <label className="font-condensed text-xs font-normal text-slate-900 uppercase tracking-wider block mb-1">
                          MEETING PLATFORM:
                        </label>
                        <select
                          value={platform}
                          onChange={(e) => setPlatform(e.target.value)}
                          className="w-full p-3.5 bg-[#FAF8F5] border border-[#E2DDD5] font-condensed text-xs font-normal uppercase text-slate-900 focus:outline-hidden focus:border-slate-900"
                        >
                          <option value="Google Meet">Google Meet Video Call</option>
                          <option value="Zoom Meeting">Zoom Video Meeting</option>
                          <option value="Microsoft Teams">Microsoft Teams</option>
                          <option value="Direct Phone Call">Direct Phone Call</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Step 3: Contact & Business Info */}
                  <div className="space-y-6 pt-6 border-t border-[#E2DDD5]">
                    <div className="flex items-center gap-3 border-b-2 border-slate-900 pb-3">
                      <span className="w-7 h-7 bg-[#A90706] text-white font-condensed text-xs font-normal flex items-center justify-center">
                        03
                      </span>
                      <h3 className="font-condensed text-xl font-normal text-slate-900 uppercase tracking-wide font-[var(--font-geist)]">
                        YOUR CONTACT &amp; PROJECT DETAILS
                      </h3>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="font-condensed text-xs font-normal text-slate-900 uppercase tracking-wider block mb-1">
                          FULL NAME *
                        </label>
                        <input
                          type="text"
                          required
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
                          placeholder="e.g. Vikram Sharma / Alex Morgan"
                          className="w-full p-3.5 bg-[#FAF8F5] border border-[#E2DDD5] font-condensed text-xs font-normal uppercase text-slate-900 placeholder:text-slate-400 focus:outline-hidden focus:border-slate-900"
                        />
                      </div>

                      <div>
                        <label className="font-condensed text-xs font-normal text-slate-900 uppercase tracking-wider block mb-1">
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
                          className="w-full p-3.5 bg-[#FAF8F5] border border-[#E2DDD5] font-condensed text-xs font-normal text-slate-900 lowercase placeholder:text-slate-400 focus:outline-hidden focus:border-slate-900"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="font-condensed text-xs font-normal text-slate-900 uppercase tracking-wider block mb-1">
                          PHONE / WHATSAPP NUMBER *
                        </label>
                        <input
                          type="tel"
                          required
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="+91 98765-43210 / +1 (555) 000-0000"
                          className="w-full p-3.5 bg-[#FAF8F5] border border-[#E2DDD5] font-condensed text-xs font-normal text-slate-900 placeholder:text-slate-400 focus:outline-hidden focus:border-slate-900"
                        />
                      </div>

                      <div>
                        <label className="font-condensed text-xs font-normal text-slate-900 uppercase tracking-wider block mb-1">
                          COMPANY / STARTUP NAME
                        </label>
                        <input
                          type="text"
                          value={company}
                          onChange={(e) => setCompany(e.target.value)}
                          placeholder="e.g. Acme Tech Solutions"
                          className="w-full p-3.5 bg-[#FAF8F5] border border-[#E2DDD5] font-condensed text-xs font-normal uppercase text-slate-900 placeholder:text-slate-400 focus:outline-hidden focus:border-slate-900"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="font-condensed text-xs font-normal text-slate-900 uppercase tracking-wider block mb-1">
                        PROJECT DESCRIPTION / SCOPE NOTES
                      </label>
                      <textarea
                        rows={4}
                        value={projectNotes}
                        onChange={(e) => setProjectNotes(e.target.value)}
                        placeholder="Briefly describe your product goals, tech stack, or specific questions for our engineering directors..."
                        className="w-full p-3.5 bg-[#FAF8F5] border border-[#E2DDD5] font-condensed text-xs font-normal text-slate-900 placeholder:text-slate-400 focus:outline-hidden focus:border-slate-900"
                      ></textarea>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-6 border-t border-[#E2DDD5]">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-5 bg-[#A90706] hover:bg-[#880504] text-white font-condensed text-sm font-normal tracking-widest uppercase transition-all shadow-xl flex items-center justify-center gap-3 cursor-pointer disabled:opacity-50 group"
                    >
                      <span className="inline-flex items-center gap-2">
                        <span>{isSubmitting ? "CONFIRMING MEETING SLOT..." : "CONFIRM & BOOK CONSULTATION CALL"}</span>
                        <ArrowUpRight className="w-5 h-5 shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </span>
                    </button>

                    <div className="flex items-center justify-center gap-4 mt-4 text-[10px] font-condensed font-normal text-slate-500 uppercase">
                      <span>✓ 100% FREE SCOPING CALL</span>
                      <span>•</span>
                      <span>✓ STRICT NDA INCLUDED</span>
                      <span>•</span>
                      <span>✓ DIRECT WITH PRINCIPAL ARCHITECTS</span>
                    </div>
                  </div>

                </form>
              </div>

              {/* Right Information Sidebar (4 Cols) */}
              <div className="lg:col-span-4 space-y-6 font-normal">
                
                {/* Guarantee Card */}
                <div className="p-8 border-2 border-slate-900 bg-white shadow-xl space-y-4">
                  <span className="font-condensed text-xs font-normal text-[#A90706] uppercase tracking-widest block border-b border-[#E2DDD5] pb-2">
                    // WHAT TO EXPECT ON THE CALL
                  </span>
                  
                  <div className="space-y-4 text-xs font-normal text-slate-800 uppercase">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-[#A90706] shrink-0 mt-0.5" />
                      <span>45-Minute In-Depth Technical Review</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-[#A90706] shrink-0 mt-0.5" />
                      <span>Architecture &amp; Tech Stack Selection</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-[#A90706] shrink-0 mt-0.5" />
                      <span>Sprint Deliverables &amp; Fixed Cost Estimate</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-[#A90706] shrink-0 mt-0.5" />
                      <span>Direct Q&amp;A with Principal Software Engineers</span>
                    </div>
                  </div>
                </div>

                {/* Direct Contact Card */}
                <div className="p-8 bg-slate-900 text-white border border-slate-900 shadow-xl space-y-4 font-normal">
                  <span className="font-condensed text-xs font-normal text-[#A90706] uppercase tracking-widest block border-b border-slate-800 pb-2">
                    // NEED INSTANT ASSISTANCE?
                  </span>
                  <p className="text-xs text-slate-300 leading-relaxed font-normal">
                    Have urgent project scoping needs? Email our technical leads directly or chat on WhatsApp.
                  </p>
                  <div className="space-y-2 pt-2 text-xs font-condensed font-normal uppercase">
                    <div className="text-slate-400 text-[10px]">DIRECT EMAIL:</div>
                    <a href="mailto:hello@brosdev.site" className="text-white hover:text-[#A90706] block underline font-normal">
                      hello@brosdev.site
                    </a>
                    <a href="mailto:projects@brosdev.site" className="text-white hover:text-[#A90706] block underline font-normal">
                      projects@brosdev.site
                    </a>
                  </div>
                </div>

              </div>

            </div>
          )}

        </div>
      </section>

      <Footer />
    </main>
  );
}
