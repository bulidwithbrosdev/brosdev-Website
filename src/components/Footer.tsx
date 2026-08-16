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
                GET ENGINEERING BLUEPRINTS IN YOUR INBOX
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm">
                Architectural patterns, cloud cost optimizations, and AI benchmarks written by our principal software engineers.
              </p>
            </div>

            <div className="lg:col-span-6">
              {newsletterSuccess ? (
                <div className="p-4 bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold uppercase flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>SUCCESS! YOU ARE SUBSCRIBED TO BROSDEV INSIGHTS.</span>
                </div>
              ) : (
                <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    required
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder="ENTER YOUR WORK EMAIL..."
                    className="flex-1 px-4 py-3.5 bg-[#FAF8F5] border border-[#E2DDD5] focus:border-slate-900 font-condensed text-xs font-bold uppercase text-slate-900 focus:outline-hidden"
                  />
                  <button
                    type="submit"
                    disabled={isSubmittingNewsletter}
                    className="px-6 py-3.5 bg-[#A90706] hover:bg-[#880504] text-white font-condensed text-xs font-black uppercase tracking-wider transition-colors flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    <span>{isSubmittingNewsletter ? "SUBSCRIBING..." : "SUBSCRIBE"}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              )}
              {newsletterError && (
                <p className="text-xs font-condensed font-bold text-red-600 mt-2 uppercase">{newsletterError}</p>
              )}
            </div>
          </div>
        </div>

        {/* Footer Navigation Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 border-t border-[#E2DDD5] pt-16">

          {/* Left Brand Column */}
          <div className="lg:col-span-4 space-y-6">
            <Link
              href={`/${locale}`}
              className="inline-flex items-center text-left cursor-pointer focus:outline-hidden"
            >
              <Logo className="w-32 h-32 sm:w-40 sm:h-40" showText={false} />
            </Link>

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

            <div className="pt-2 space-y-1 font-normal">
              <span className="font-condensed text-[11px] font-normal text-[#A90706] uppercase tracking-widest block mb-1">
                // GLOBAL PRESENCE &amp; COVERAGE
              </span>
              <p className="font-condensed text-xs sm:text-sm font-normal text-slate-900 uppercase tracking-wider">
                HUBS: INDIA &amp; CANADA<br />
                SERVING: AU, UK, NZ, CA, US, DE, FR, NY
              </p>
            </div>

            <div className="pt-4 border-t border-[#E2DDD5]/60 text-xs font-bold text-slate-500 font-condensed uppercase tracking-wider">
              <p>{t.footer.rights} {new Date().getFullYear()}</p>
            </div>
          </div>

          {/* Right Column: 4 Clean Navigation Columns */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-8 lg:gap-6 pt-4 lg:pt-0">

            {/* Col 1: Overview */}
            <div className="space-y-4 font-normal">
              <h4 className="font-condensed text-xs font-normal text-[#A90706] uppercase tracking-widest border-b border-[#E2DDD5] pb-2 min-h-[29px] flex items-center">
                OVERVIEW
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
                    href={`/${locale}/insights`}
                    className="font-condensed text-xs sm:text-sm font-normal tracking-wider uppercase text-slate-900 hover:text-[#A90706] transition-colors block text-left cursor-pointer"
                  >
                    INSIGHTS
                  </Link>
                </li>
                <li>
                  <Link
                    href={`/${locale}/company/contact`}
                    className="font-condensed text-xs sm:text-sm font-normal tracking-wider uppercase text-slate-900 hover:text-[#A90706] transition-colors block text-left cursor-pointer"
                  >
                    CONTACT
                  </Link>
                </li>
              </ul>
            </div>

            {/* Col 2: Services & Solutions */}
            <div className="space-y-4 font-normal">
              <h4 className="font-condensed text-xs font-normal text-[#A90706] uppercase tracking-widest border-b border-[#E2DDD5] pb-2 min-h-[29px] flex items-center">
                SERVICES
              </h4>
              <ul className="space-y-3 font-normal">
                <li>
                  <Link
                    href={`/${locale}/services`}
                    className="font-condensed text-xs sm:text-sm font-normal tracking-wider uppercase text-slate-900 hover:text-[#A90706] transition-colors block text-left cursor-pointer"
                  >
                    ALL SERVICES
                  </Link>
                </li>
                <li>
                  <Link
                    href={`/${locale}/services/engagement-models`}
                    className="font-condensed text-xs sm:text-sm font-normal tracking-wider uppercase text-slate-900 hover:text-[#A90706] transition-colors block text-left cursor-pointer"
                  >
                    ENGAGEMENT MODELS
                  </Link>
                </li>
                <li>
                  <Link
                    href={`/${locale}/services/platform-integrations`}
                    className="font-condensed text-xs sm:text-sm font-normal tracking-wider uppercase text-slate-900 hover:text-[#A90706] transition-colors block text-left cursor-pointer"
                  >
                    PLATFORM INTEGRATIONS
                  </Link>
                </li>
                <li>
                  <Link
                    href={`/${locale}/case-studies`}
                    className="font-condensed text-xs sm:text-sm font-normal tracking-wider uppercase text-slate-900 hover:text-[#A90706] transition-colors block text-left cursor-pointer"
                  >
                    CASE STUDIES
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
            fontSize="180"
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
