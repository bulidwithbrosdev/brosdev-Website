"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2, 
  ArrowUpRight, 
  Globe, 
  ShieldCheck, 
  MessageSquare,
  Building,
  User,
  Paperclip,
  ChevronDown
} from "lucide-react";

interface ContactContentProps {
  locale?: string;
}

export default function ContactContent({ locale = "en" }: ContactContentProps) {
  // Form State
  const [inquiryType, setInquiryType] = useState("Project Scoping & Proposal");
  const [currency, setCurrency] = useState<"INR" | "USD" | "EUR" | "GBP">("INR");
  const [budgetRange, setBudgetRange] = useState("₹2,50,000 - ₹5,00,000");
  
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");
  const [fileName, setFileName] = useState("");
  const [attachment, setAttachment] = useState<{ filename: string; content: string; type: string } | null>(null);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [referenceId, setReferenceId] = useState<string | null>(null);

  // FAQ Accordion state
  const [expandedFaq, setExpandedFaq] = useState<number | null>(0);

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

  const globalOffices = [
    {
      country: "INDIA (HQ)",
      fullName: "BrosDev IT Engineering Studio",
      city: "GIFT City / Ahmedabad",
      hours: "09:00 - 19:00 IST",
      isHQ: true,
    },
    {
      country: "UNITED STATES",
      fullName: "BrosDev IT Engineering Studio",
      city: "San Francisco / New York",
      hours: "08:00 - 18:00 PST",
      isHQ: false,
    },
    {
      country: "UNITED KINGDOM",
      fullName: "BrosDev IT Engineering Studio",
      city: "London",
      hours: "09:00 - 18:00 GMT",
      isHQ: false,
    },
    {
      country: "GERMANY",
      fullName: "BrosDev IT Engineering Studio",
      city: "Berlin / Munich",
      hours: "09:00 - 18:00 CET",
      isHQ: false,
    },
    {
      country: "CANADA",
      fullName: "BrosDev IT Engineering Studio",
      city: "Toronto / Vancouver",
      hours: "09:00 - 18:00 EST",
      isHQ: false,
    },
    {
      country: "FRANCE",
      fullName: "BrosDev IT Engineering Studio",
      city: "Paris / Lyon",
      hours: "09:00 - 18:00 CET",
      isHQ: false,
    },
  ];

  const faqs = [
    {
      question: "HOW FAST WILL BROSDEV RESPOND TO MY INQUIRY?",
      answer: "Our technical strategy leads review all incoming messages within 2 hours during business hours. You will receive an initial response and call invitation within 1 business day.",
    },
    {
      question: "DO YOU SIGN AN NDA BEFORE DISCUSSING PROJECT DETAILS?",
      answer: "Yes, standard mutual NDAs are executed before initial technical scoping calls upon request.",
    },
    {
      question: "WHAT IS THE TYPICAL ENGAGEMENT & START TIMELINE?",
      answer: "Dedicated developers can be onboarded within 3-5 business days. Full custom web/app software projects typically begin within 1 week following architecture scoping.",
    },
    {
      question: "WHAT ARE YOUR ACCEPTED PAYMENT CURRENCIES & MODES?",
      answer: "We support payments in INR (₹), USD ($), EUR (€), and GBP (£) via wire transfers, ACH, UPI, credit cards, and escrow platforms.",
    },
  ];

  const handleCurrencyChange = (curr: "INR" | "USD" | "EUR" | "GBP") => {
    setCurrency(curr);
    setBudgetRange(budgetOptions[curr][1]);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setFileName(file.name);

      const reader = new FileReader();
      reader.onload = () => {
        if (typeof reader.result === "string") {
          setAttachment({
            filename: file.name,
            content: reader.result,
            type: file.type,
          });
        }
      };
      reader.readAsDataURL(file);
    }
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
          formType: "contact-us",
          name: fullName,
          email,
          phone,
          company,
          inquiryType,
          currency,
          budgetRange,
          message,
          attachment: attachment || undefined,
        }),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setReferenceId(data.referenceId || null);
        setIsSubmitted(true);
      } else {
        setErrorMessage(data.error || "Failed to send message. Please try again.");
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
              // CONNECT WITH OUR ENGINEERING DIRECTORS
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-normal text-slate-900 tracking-tight leading-none uppercase mb-6 font-[var(--font-geist)]">
            CONTACT BROSDEV
          </h1>

          <p className="text-slate-700 text-lg sm:text-xl font-normal max-w-3xl leading-relaxed font-[var(--font-geist)]">
            Have a new digital product concept, require dedicated pre-screened developers, or need a technical architecture review? Reach out to our global team directly.
          </p>
        </div>
      </section>

      {/* Communication Channel Cards */}
      <section className="py-12 bg-white border-b border-[#E2DDD5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <a
              href="mailto:hello@brosdev.site"
              className="p-6 bg-[#FAF8F5] border border-[#E2DDD5] hover:border-slate-900 transition-colors group block"
            >
              <span className="font-condensed text-xs font-normal text-[#A90706] uppercase tracking-widest block mb-2">
                // GENERAL INQUIRIES
              </span>
              <span className="text-xl font-normal text-slate-900 block mb-1 group-hover:text-[#A90706] transition-colors font-condensed lowercase">
                hello@brosdev.site
              </span>
              <span className="text-xs text-slate-500 font-normal">
                For company overviews, partnership ideas &amp; media requests.
              </span>
            </a>

            <a
              href="mailto:projects@brosdev.site"
              className="p-6 bg-[#FAF8F5] border border-[#E2DDD5] hover:border-slate-900 transition-colors group block"
            >
              <span className="font-condensed text-xs font-normal text-[#A90706] uppercase tracking-widest block mb-2">
                // PROJECT SCOPING &amp; RFPs
              </span>
              <span className="text-xl font-normal text-slate-900 block mb-1 group-hover:text-[#A90706] transition-colors font-condensed lowercase">
                projects@brosdev.site
              </span>
              <span className="text-xs text-slate-500 font-normal">
                Direct channel for RFPs, technical proposals &amp; developer hiring.
              </span>
            </a>

            <a
              href="mailto:careers@brosdev.site"
              className="p-6 bg-[#FAF8F5] border border-[#E2DDD5] hover:border-slate-900 transition-colors group block"
            >
              <span className="font-condensed text-xs font-normal text-[#A90706] uppercase tracking-widest block mb-2">
                // CAREERS &amp; TALENT
              </span>
              <span className="text-xl font-normal text-slate-900 block mb-1 group-hover:text-[#A90706] transition-colors font-condensed lowercase">
                careers@brosdev.site
              </span>
              <span className="text-xs text-slate-500 font-normal">
                For software engineers &amp; designers looking to join Brosdev.
              </span>
            </a>

          </div>
        </div>
      </section>

      {/* Main Scoping & Contact Form */}
      <section className="py-20 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

            {/* Left Main Form (8 Cols) */}
            <div className="lg:col-span-8 bg-white border-2 border-slate-900 p-8 sm:p-12 shadow-2xl">
              
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-red-50 border-2 border-[#A90706] text-[#A90706] rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-12 h-12" />
                  </div>
                  <span className="font-condensed text-xs font-normal text-[#A90706] uppercase tracking-widest block mb-2">
                    // MESSAGE DELIVERED
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-normal text-slate-900 uppercase tracking-tight mb-4 font-[var(--font-geist)]">
                    THANK YOU, {fullName.toUpperCase()}!
                  </h2>
                  <p className="text-slate-600 text-sm sm:text-base font-normal max-w-lg mx-auto mb-6 leading-relaxed">
                    We have received your message regarding <strong className="font-normal text-slate-900">{inquiryType}</strong>. Our engineering leads will reach out to <strong className="font-normal text-slate-900">{email}</strong> within 2 hours.
                  </p>

                  {referenceId && (
                    <div className="p-4 bg-[#FAF8F5] border border-[#E2DDD5] text-center mb-8 max-w-md mx-auto">
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-1">REFERENCE NO.</span>
                      <span className="text-sm font-black text-[#A90706] font-condensed">{referenceId}</span>
                    </div>
                  )}

                  <div className="flex flex-wrap items-center justify-center gap-4">
                    <Link
                      href={locale ? `/${locale}` : "/"}
                      className="px-8 py-4 bg-slate-900 text-white font-condensed text-xs font-normal uppercase tracking-widest hover:bg-[#A90706] transition-colors"
                    >
                      RETURN TO HOME PAGE
                    </Link>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="px-8 py-4 bg-white border border-slate-900 text-slate-900 font-condensed text-xs font-normal uppercase tracking-widest hover:bg-slate-900 hover:text-white transition-colors cursor-pointer"
                    >
                      SEND ANOTHER MESSAGE
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8 font-normal">
                  {errorMessage && (
                    <div className="p-4 bg-red-50 border-2 border-red-600 text-red-700 text-xs font-bold">
                      ⚠️ {errorMessage}
                    </div>
                  )}
                  <div className="border-b-2 border-slate-900 pb-4">
                    <span className="font-condensed text-xs font-normal text-[#A90706] uppercase tracking-widest block mb-1">
                      // DIRECT INQUIRY &amp; SCOPING FORM
                    </span>
                    <h3 className="font-condensed text-2xl font-normal text-slate-900 uppercase tracking-wide font-[var(--font-geist)]">
                      START A CONVERSATION
                    </h3>
                  </div>

                  {/* Inquiry Type */}
                  <div>
                    <label className="font-condensed text-xs font-normal text-slate-900 uppercase tracking-wider block mb-2">
                      SELECT INQUIRY TYPE *
                    </label>
                    <select
                      value={inquiryType}
                      onChange={(e) => setInquiryType(e.target.value)}
                      className="w-full p-3.5 bg-[#FAF8F5] border border-[#E2DDD5] font-condensed text-xs font-normal uppercase text-slate-900 focus:outline-hidden focus:border-slate-900"
                    >
                      <option value="Project Scoping & Proposal">Project Scoping &amp; Proposal</option>
                      <option value="Hire Pre-Screened Developers">Hire Pre-Screened Dedicated Developers</option>
                      <option value="Technical Architecture Review">Technical Architecture Review &amp; Audit</option>
                      <option value="Strategic Partnership">Strategic Partnership / Vendor</option>
                      <option value="General Support">General Support / Inquiry</option>
                      <option value="Other">Other Custom Requirement</option>
                    </select>
                  </div>

                  {/* Contact Information Fields */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="font-condensed text-xs font-normal text-slate-900 uppercase tracking-wider block mb-1">
                        YOUR FULL NAME *
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
                        WORK EMAIL ADDRESS *
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
                        COMPANY NAME &amp; WEBSITE
                      </label>
                      <input
                        type="text"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        placeholder="e.g. Acme Tech (acme.com)"
                        className="w-full p-3.5 bg-[#FAF8F5] border border-[#E2DDD5] font-condensed text-xs font-normal uppercase text-slate-900 placeholder:text-slate-400 focus:outline-hidden focus:border-slate-900"
                      />
                    </div>
                  </div>

                  {/* Multi-Currency Budget Selector */}
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <label className="font-condensed text-xs font-normal text-slate-900 uppercase tracking-wider">
                        ESTIMATED BUDGET RANGE *
                      </label>
                      <div className="flex items-center gap-1">
                        {(["INR", "USD", "EUR", "GBP"] as const).map((curr) => (
                          <button
                            key={curr}
                            type="button"
                            onClick={() => handleCurrencyChange(curr)}
                            className={`px-2 py-0.5 font-condensed text-[10px] font-normal uppercase transition-all cursor-pointer ${
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

                  {/* Project Details */}
                  <div>
                    <label className="font-condensed text-xs font-normal text-slate-900 uppercase tracking-wider block mb-1">
                      PROJECT DESCRIPTION / INQUIRY DETAILS *
                    </label>
                    <textarea
                      rows={5}
                      required
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Outline your project scope, core features, tech stack, or specific questions..."
                      className="w-full p-3.5 bg-[#FAF8F5] border border-[#E2DDD5] font-condensed text-xs font-normal text-slate-900 placeholder:text-slate-400 focus:outline-hidden focus:border-slate-900"
                    ></textarea>
                  </div>

                  {/* Attachment Simulation */}
                  <div>
                    <label className="font-condensed text-xs font-normal text-slate-900 uppercase tracking-wider block mb-1">
                      ATTACH RFP / SPECIFICATION FILE (OPTIONAL)
                    </label>
                    <div className="relative flex items-center">
                      <input
                        type="file"
                        onChange={handleFileChange}
                        className="hidden"
                        id="contact-file-upload"
                      />
                      <label
                        htmlFor="contact-file-upload"
                        className="w-full p-3.5 bg-[#FAF8F5] border border-dashed border-slate-400 text-xs font-condensed font-normal text-slate-600 flex items-center justify-center gap-2 cursor-pointer hover:border-slate-900 hover:text-slate-900"
                      >
                        <Paperclip className="w-4 h-4 text-[#A90706]" />
                        <span>{fileName ? `ATTACHED: ${fileName}` : "CLICK TO CHOOSE PDF, DOCX, OR ZIP FILE (MAX 25MB)"}</span>
                      </label>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-4 border-t border-[#E2DDD5]">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-5 bg-[#A90706] hover:bg-[#880504] text-white font-condensed text-sm font-normal tracking-widest uppercase transition-all shadow-xl flex items-center justify-center gap-3 cursor-pointer disabled:opacity-50"
                    >
                      <span>{isSubmitting ? "SENDING MESSAGE..." : "SUBMIT INQUIRY TO BROSDEV ARCHITECTS"}</span>
                      <ArrowUpRight className="w-5 h-5" />
                    </button>

                    <div className="flex items-center justify-center gap-4 mt-4 text-[10px] font-condensed font-normal text-slate-500 uppercase">
                      <span>✓ GUARANTEED 2-HOUR RESPONSE</span>
                      <span>•</span>
                      <span>✓ NDA AVAILABLE ON REQUEST</span>
                    </div>
                  </div>

                </form>
              )}

            </div>

            {/* Right Information Sidebar (4 Cols) */}
            <div className="lg:col-span-4 space-y-6 font-normal">
              
              {/* Direct Booking Promotion */}
              <div className="p-8 border-2 border-slate-900 bg-white shadow-xl space-y-4">
                <span className="font-condensed text-xs font-normal text-[#A90706] uppercase tracking-widest block border-b border-[#E2DDD5] pb-2">
                  // PREFER A DIRECT VIDEO CALL?
                </span>
                <p className="text-xs text-slate-700 leading-relaxed font-normal">
                  Skip email wait times and book a 45-minute architectural strategy session with our engineering directors.
                </p>
                <Link
                  href={`/${locale}/book-consultation`}
                  className="w-full py-4 bg-slate-900 hover:bg-[#A90706] text-white font-condensed text-xs font-normal uppercase tracking-widest transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md"
                >
                  <span>BOOK A CONSULTATION CALL</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Social Media Channels */}
              <div className="p-8 bg-white border border-[#E2DDD5] space-y-4">
                <span className="font-condensed text-xs font-normal text-slate-500 uppercase tracking-widest block border-b border-[#E2DDD5] pb-2">
                  OFFICIAL SOCIAL MEDIA
                </span>
                <div className="grid grid-cols-2 gap-2 text-xs font-condensed font-normal uppercase">
                  <a href="https://instagram.com/brosdev" target="_blank" rel="noopener noreferrer" className="p-2.5 bg-[#FAF8F5] border border-[#E2DDD5] hover:border-slate-900 hover:text-[#A90706] flex items-center justify-between">
                    <span>INSTAGRAM</span>
                    <ArrowUpRight className="w-3 h-3 text-slate-400" />
                  </a>
                  <a href="https://facebook.com/brosdev" target="_blank" rel="noopener noreferrer" className="p-2.5 bg-[#FAF8F5] border border-[#E2DDD5] hover:border-slate-900 hover:text-[#A90706] flex items-center justify-between">
                    <span>FACEBOOK</span>
                    <ArrowUpRight className="w-3 h-3 text-slate-400" />
                  </a>
                  <a href="https://linkedin.com/company/brosdev" target="_blank" rel="noopener noreferrer" className="p-2.5 bg-[#FAF8F5] border border-[#E2DDD5] hover:border-slate-900 hover:text-[#A90706] flex items-center justify-between">
                    <span>LINKEDIN</span>
                    <ArrowUpRight className="w-3 h-3 text-slate-400" />
                  </a>
                  <a href="https://youtube.com/@brosdev" target="_blank" rel="noopener noreferrer" className="p-2.5 bg-[#FAF8F5] border border-[#E2DDD5] hover:border-slate-900 hover:text-[#A90706] flex items-center justify-between">
                    <span>YOUTUBE</span>
                    <ArrowUpRight className="w-3 h-3 text-slate-400" />
                  </a>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Global Locations Section */}
      <section className="py-20 bg-white border-t border-[#E2DDD5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border-b-2 border-slate-900 pb-4 mb-12">
            <span className="font-condensed text-xs font-normal text-[#A90706] uppercase tracking-widest block mb-1">
              // PHYSICAL LOCATIONS &amp; IT PARKS
            </span>
            <h2 className="text-3xl sm:text-4xl font-normal text-slate-900 uppercase tracking-tight font-[var(--font-geist)]">
              OUR GLOBAL LOCATIONS
            </h2>
          </div>

          {/* Fully Responsive Grid across Mobile, Tablet, and Desktop */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
            {globalOffices.map((office) => (
              <div
                key={office.country}
                className={`p-5 border-2 space-y-3 ${
                  office.isHQ
                    ? "bg-slate-900 border-slate-900 text-white shadow-md"
                    : "bg-[#FAF8F5] border-slate-900"
                }`}
              >
                <div className={`border-b pb-3 ${ office.isHQ ? "border-white/20" : "border-[#E2DDD5]" }`}>
                  <span className="font-condensed text-xs font-normal text-[#A90706] uppercase tracking-widest block">
                    {office.country}
                  </span>
                  <p className={`font-condensed text-xs font-medium uppercase mt-0.5 tracking-wider leading-tight ${ office.isHQ ? "text-red-300" : "text-slate-600" }`}>
                    {office.fullName}
                  </p>
                  <h3 className={`font-condensed text-base font-normal uppercase leading-tight mt-1 ${ office.isHQ ? "text-white" : "text-slate-900" }`}>
                    {office.city}
                  </h3>
                </div>
                <p className={`font-condensed text-xs font-normal uppercase ${ office.isHQ ? "text-slate-300" : "text-slate-500" }`}>
                  {office.hours}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Map Section */}
      <section className="py-16 bg-[#FAF8F5] border-t border-[#E2DDD5] overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Heading */}
          <div className="mb-8 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <div>
              <span className="font-condensed text-xs font-normal text-[#A90706] uppercase tracking-widest block mb-1">
                // WORLDWIDE ENGINEERING PRESENCE
              </span>
              <h2 className="text-3xl sm:text-4xl font-normal text-slate-900 uppercase tracking-tight font-[var(--font-geist)]">
                Built Across 6 Time Zones
              </h2>
            </div>
            <p className="text-slate-500 text-xs font-condensed uppercase tracking-widest max-w-xs text-right hidden sm:block">
              India • USA • UK • Germany • Canada • France
            </p>
          </div>

          {/* Map Image Container */}
          <div className="relative w-full border border-[#E2DDD5] bg-white p-4 sm:p-8 rounded-none shadow-xs flex items-center justify-center">
            <img
              src="/world-map.png"
              alt="Global Operations Map - India, USA, Canada, UK, France, Germany"
              className="w-full h-auto max-h-[500px] object-contain mix-blend-multiply"
            />
          </div>

          {/* Country pill row below map */}
          <div className="flex flex-wrap gap-2 mt-6 justify-center sm:justify-start">
            {[
              { code: "🇮🇳", name: "India (HQ)", time: "IST" },
              { code: "🇺🇸", name: "USA", time: "PST" },
              { code: "🇨🇦", name: "Canada", time: "EST" },
              { code: "🇬🇧", name: "United Kingdom", time: "GMT" },
              { code: "🇩🇪", name: "Germany", time: "CET" },
              { code: "🇫🇷", name: "France", time: "CET" },
            ].map((c) => (
              <div
                key={c.name}
                className="flex items-center gap-2 px-3 py-1.5 bg-white border border-[#E2DDD5] font-condensed text-[11px] uppercase tracking-widest text-slate-800 shadow-2xs"
              >
                <span>{c.code}</span>
                <span className="font-medium">{c.name}</span>
                <span className="text-[#A90706] font-semibold">{c.time}</span>
              </div>
            ))}
          </div>
        </div>
      </section>


      <section className="py-20 bg-[#FAF8F5] border-t border-[#E2DDD5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="font-condensed text-xs font-normal text-[#A90706] uppercase tracking-widest block mb-2">
              // FREQUENTLY ASKED QUESTIONS
            </span>
            <h2 className="text-3xl sm:text-4xl font-normal text-slate-900 uppercase tracking-tight font-[var(--font-geist)]">
              COMMON INQUIRY QUESTIONS
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = expandedFaq === idx;
              return (
                <div key={idx} className="border border-[#E2DDD5] bg-white">
                  <button
                    onClick={() => setExpandedFaq(isOpen ? null : idx)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer font-condensed text-base font-normal text-slate-900 uppercase"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown className={`w-5 h-5 text-[#A90706] transition-transform ${isOpen ? "rotate-180" : ""}`} />
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 pt-2 text-xs font-normal text-slate-600 leading-relaxed border-t border-[#E2DDD5]/60 font-sans">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
