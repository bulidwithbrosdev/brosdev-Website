"use client";

import { useState } from "react";
import Link from "next/link";
import { useTranslation } from "@/context/TranslationContext";
import Logo from "./Logo";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function Footer() {
  const { locale, t } = useTranslation();

  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [isSubmittingNewsletter, setIsSubmittingNewsletter] = useState(false);
  const [newsletterSuccess, setNewsletterSuccess] = useState(false);
  const [newsletterError, setNewsletterError] = useState<string | null>(null);

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;

    setIsSubmittingNewsletter(true);
    setNewsletterError(null);

    try {
      const res = await fetch("/api/subscribe-newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: newsletterEmail }),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setNewsletterSuccess(true);
        setNewsletterEmail("");
      } else {
        setNewsletterError(data.error || "Failed to subscribe. Please try again.");
      }
    } catch (err) {
      console.error(err);
      setNewsletterError("Network error. Please try again.");
    } finally {
      setIsSubmittingNewsletter(false);
    }
  };

  const scrollToSection = (targetId: string) => {
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = `/${locale}`;
    }
  };

  const columnOverview = [
    { label: "HOME", targetId: "hero" },
    { label: "COMPANY", targetId: "company" },
    { label: "BUILD YOUR TEAM", targetId: "build-team" },
    { label: "INSIGHTS", targetId: "projects" },
    { label: "CONTACT", targetId: "company" },
  ];

  const columnSolutions = [
    { label: "SERVICE", targetId: "services" },
    { label: "PRODUCT", targetId: "projects" },
    { label: "INDUSTRY", targetId: "industry" },
  ];

  const columnCommunication = [
    { label: "hello@brosdev.site", href: "mailto:hello@brosdev.site" },
    { label: "projects@brosdev.site", href: "mailto:projects@brosdev.site" },
    { label: "careers@brosdev.site", href: "mailto:careers@brosdev.site" },
  ];

  const columnSocial = [
    { label: "IG ↗", href: "https://instagram.com/brosdev", title: "Instagram" },
    { label: "FB ↗", href: "https://facebook.com/brosdev", title: "Facebook" },
    { label: "LN ↗", href: "https://linkedin.com/company/brosdev", title: "LinkedIn" },
    { label: "YT ↗", href: "https://youtube.com/@brosdev", title: "YouTube" },
    { label: "LT ↗", href: "https://linktr.ee/brosdev", title: "Linktree" },
  ];

  const columnLegal = [
    { label: "TERMS & CONDITIONS", href: `/${locale}/terms` },
    { label: "PRIVACY POLICY", href: `/${locale}/privacy-policy` },
  ];

  return (
    <footer className="relative overflow-hidden bg-[#FAF8F5] text-slate-900 border-t border-[#E2DDD5] pt-16 pb-24 sm:pt-24 sm:pb-32 font-sans antialiased">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">

        {/* Newsletter Subscription Banner */}
        <div className="bg-white border-2 border-slate-900 p-8 sm:p-10 mb-16 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 space-y-2">
              <div className="inline-flex items-center gap-2 px-2.5 py-0.5 bg-red-50 text-[#A90706] border border-red-200 text-[10px] font-black uppercase">
                <span className="w-1.5 h-1.5 bg-[#A90706] rounded-full animate-pulse"></span>
                <span>// BROSDEV NEWSLETTER &amp; INSIGHTS</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-slate-900 uppercase font-[var(--font-geist)]">
                SUBSCRIBE TO OUR NEWSLETTER
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm font-medium">
                Get monthly engineering insights, architecture updates, case studies &amp; tech offers directly to your inbox.
              </p>
            </div>

            <div className="lg:col-span-6">
              {newsletterSuccess ? (
                <div className="p-4 bg-emerald-50 border border-emerald-300 text-emerald-800 text-xs font-bold flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                  <span>Thanks for subscribing! Check your inbox for your confirmation email.</span>
                </div>
              ) : (
                <form onSubmit={handleNewsletterSubmit} className="space-y-2">
                  <div className="flex flex-col sm:flex-row items-stretch gap-2">
                    <input
                      type="email"
                      required
                      value={newsletterEmail}
                      onChange={(e) => setNewsletterEmail(e.target.value)}
                      placeholder="Enter your work email address..."
                      className="flex-1 px-4 py-3.5 bg-[#FAF8F5] border border-[#E2DDD5] text-xs font-medium text-slate-900 focus:outline-hidden focus:border-slate-900"
                    />
                    <button
                      type="submit"
                      disabled={isSubmittingNewsletter}
                      className="px-8 py-3.5 bg-[#A90706] hover:bg-[#880504] text-white font-condensed text-xs font-black uppercase tracking-widest transition-colors flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 shrink-0"
                    >
                      <span>{isSubmittingNewsletter ? "SUBSCRIBING..." : "SUBSCRIBE"}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                  {newsletterError && (
                    <p className="text-xs font-bold text-red-600 pt-1">
                      ⚠️ {newsletterError}
                    </p>
                  )}
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pb-16 border-b border-[#E2DDD5]/60">

          {/* Left Column (Logo + Communication Emails + Global Offices + Copyright) */}
          <div className="lg:col-span-4 space-y-6 flex flex-col justify-between">
            <div className="space-y-6">
              <button
                onClick={() => scrollToSection("hero")}
                className="inline-flex items-center text-left cursor-pointer focus:outline-hidden"
              >
                <Logo className="w-32 h-32 sm:w-40 sm:h-40" showText={false} />
              </button>

              {/* Communication Emails under Logo */}
              <div className="space-y-2 pt-2 font-normal">
                <span className="font-condensed text-[11px] font-normal text-[#A90706] uppercase tracking-widest block">
                  // COMMUNICATION
                </span>
                <ul className="space-y-1.5 font-normal">
                  {columnCommunication.map((item) => (
                    <li key={item.label}>
                      <a
                        href={item.href}
                        className="font-condensed text-xs sm:text-sm font-normal tracking-wider text-slate-800 hover:text-[#A90706] transition-colors block lowercase hover:underline underline-offset-4 decoration-[#A90706] break-all"
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Global Presence Offices */}
              <div className="pt-2 space-y-1 font-normal">
                <span className="font-condensed text-[11px] font-normal text-[#A90706] uppercase tracking-widest block mb-1">
                  // GLOBAL PRESENCE
                </span>
                <p className="font-condensed text-xs sm:text-sm font-normal text-slate-900 uppercase tracking-wider">
                  INDIA • USA • UK • GERMANY • CANADA • FRANCE
                </p>
              </div>
            </div>

            {/* Copyright */}
            <div className="pt-4 border-t border-[#E2DDD5]/60 text-xs font-bold text-slate-500 font-condensed uppercase tracking-wider">
              <p>{t.footer.rights} {new Date().getFullYear()}</p>
            </div>
          </div>

          {/* Right Column: 4 Clean Columns in a Row (OVERVIEW, SOLUTIONS, SOCIAL MEDIA, LEGAL) */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-8 lg:gap-6 pt-4 lg:pt-0">

            {/* Col 1: Overview */}
            <div className="space-y-4 font-normal">
              <h4 className="font-condensed text-xs font-normal text-[#A90706] uppercase tracking-widest border-b border-[#E2DDD5] pb-2 min-h-[29px] flex items-center">
                {t.footer.overview}
              </h4>
              <ul className="space-y-3 font-normal">
                <li>
                  <Link
                    href={`/${locale}`}
                    className="font-condensed text-xs sm:text-sm font-normal tracking-wider uppercase text-slate-900 hover:text-[#A90706] transition-colors block text-left cursor-pointer"
                  >
                    HOME
                  </Link>
                </li>
                <li>
                  <Link
                    href={`/${locale}/company/about-us`}
                    className="font-condensed text-xs sm:text-sm font-normal tracking-wider uppercase text-slate-900 hover:text-[#A90706] transition-colors block text-left cursor-pointer"
                  >
                    COMPANY
                  </Link>
                </li>
                <li>
                  <Link
                    href={`/${locale}/build-team`}
                    className="font-condensed text-xs sm:text-sm font-normal tracking-wider uppercase text-slate-900 hover:text-[#A90706] transition-colors block text-left cursor-pointer"
                  >
                    BUILD YOUR TEAM
                  </Link>
                </li>
                <li>
                  <Link
                    href={`/${locale}/insights`}
                    className="font-condensed text-xs sm:text-sm font-normal tracking-wider uppercase text-slate-900 hover:text-[#A90706] transition-colors block text-left cursor-pointer"
                  >
                    INSIGHTS
                  </Link>
                </li>
                <li>
                  <Link
                    href={`/${locale}/contact`}
                    className="font-condensed text-xs sm:text-sm font-normal tracking-wider uppercase text-slate-900 hover:text-[#A90706] transition-colors block text-left cursor-pointer"
                  >
                    CONTACT
                  </Link>
                </li>
              </ul>
            </div>

            {/* Col 2: Solutions */}
            <div className="space-y-4 font-normal">
              <h4 className="font-condensed text-xs font-normal text-[#A90706] uppercase tracking-widest border-b border-[#E2DDD5] pb-2 min-h-[29px] flex items-center">
                {t.footer.solutions}
              </h4>
              <ul className="space-y-3 font-normal">
                <li>
                  <Link
                    href={`/${locale}/services`}
                    className="font-condensed text-xs sm:text-sm font-normal tracking-wider uppercase text-slate-900 hover:text-[#A90706] transition-colors block text-left cursor-pointer"
                  >
                    SERVICE
                  </Link>
                </li>
                <li>
                  <Link
                    href={`/${locale}/products`}
                    className="font-condensed text-xs sm:text-sm font-normal tracking-wider uppercase text-slate-900 hover:text-[#A90706] transition-colors block text-left cursor-pointer"
                  >
                    PRODUCT
                  </Link>
                </li>
                <li>
                  <Link
                    href={`/${locale}/industry`}
                    className="font-condensed text-xs sm:text-sm font-normal tracking-wider uppercase text-slate-900 hover:text-[#A90706] transition-colors block text-left cursor-pointer"
                  >
                    INDUSTRY
                  </Link>
                </li>
              </ul>
            </div>

            {/* Col 3: Social Media */}
            <div className="space-y-4">
              <h4 className="font-condensed text-xs font-black text-[#A90706] uppercase tracking-widest border-b border-[#E2DDD5] pb-2 min-h-[29px] flex items-center">
                SOCIAL MEDIA
              </h4>
              <div className="flex flex-col gap-2">
                {columnSocial.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={item.title}
                    className="font-condensed text-xs sm:text-sm font-bold tracking-wider uppercase text-slate-900 hover:text-[#A90706] transition-colors flex items-center gap-1.5"
                  >
                    <span>{item.label}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Col 4: Legal */}
            <div className="space-y-4">
              <h4 className="font-condensed text-xs font-black text-[#A90706] uppercase tracking-widest border-b border-[#E2DDD5] pb-2 min-h-[29px] flex items-center">
                LEGAL
              </h4>
              <ul className="space-y-3">
                {columnLegal.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="font-condensed text-xs sm:text-sm font-bold tracking-wider uppercase text-slate-900 hover:text-[#A90706] transition-colors block"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

          </div>

        </div>

      </div>

      {/* Massive Full-Width Red Outline Watermark */}
      <div className="absolute -bottom-8 sm:-bottom-16 left-0 right-0 pointer-events-none select-none z-0 overflow-hidden flex justify-end">
        <svg
          className="w-full max-w-7xl h-auto text-[#A90706]"
          viewBox="0 0 1000 250"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <text
            x="1000"
            y="215"
            textAnchor="end"
            fontSize="200"
            fontWeight="400"
            fontFamily="system-ui, -apple-system, sans-serif"
            stroke="currentColor"
            strokeWidth="3.5"
            fill="none"
            letterSpacing="-0.04em"
          >
            BrosDev
          </text>
        </svg>
      </div>

    </footer>
  );
}
