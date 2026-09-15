"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowUpRight, ShieldCheck, Lock, FileText, ChevronRight, Eye } from "lucide-react";
import { useTranslation } from "@/context/TranslationContext";

export default function PrivacyContent() {
  const { locale } = useTranslation();
  const [activeSection, setActiveSection] = useState("s1");

  const sections = [
    { id: "s1", title: "1. Information We Collect" },
    { id: "s2", title: "2. Legal Basis for Processing" },
    { id: "s3", title: "3. Use of Information" },
    { id: "s4", title: "4. Security & ISO / SOC-2" },
    { id: "s5", title: "5. Data Retention Policies" },
    { id: "s6", title: "6. Subprocessors & Cloud Partners" },
    { id: "s7", title: "7. International Transfers" },
    { id: "s8", title: "8. Your Privacy Rights" },
    { id: "s9", title: "9. Cookies & Analytics" },
    { id: "s10", title: "10. Contact & DPO Inquiries" },
  ];

  const scrollTo = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <main className="min-h-screen bg-[#FAF8F5] text-slate-900 selection:bg-[#A90706] selection:text-white font-sans antialiased">
      <Navbar />

      {/* Hero Header */}
      <section className="pt-32 sm:pt-40 pb-12 bg-slate-950 text-white border-b border-slate-800 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center gap-2 text-xs font-condensed uppercase tracking-widest text-[#A90706] mb-4">
            <Lock className="w-4 h-4" />
            <span>GLOBAL DATA PRIVACY &amp; COMPLIANCE</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-normal tracking-tight text-white uppercase font-[var(--font-geist)] mb-4">
            PRIVACY POLICY
          </h1>
          <div className="flex flex-wrap items-center gap-6 text-xs text-slate-400 font-condensed uppercase tracking-wider">
            <span>EFFECTIVE DATE: JANUARY 1, 2026</span>
            <span>•</span>
            <span>GDPR &amp; CCPA COMPLIANT</span>
            <span>•</span>
            <span>ISO 27001 / SOC-2 CERTIFIED</span>
          </div>
        </div>
      </section>

      {/* Main Content with Sidebar Navigation */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

            {/* Sidebar Sticky Quick-Links */}
            <div className="lg:col-span-4 hidden lg:block">
              <div className="sticky top-28 bg-white border border-[#E2DDD5] p-6 shadow-xs space-y-4">
                <div className="flex items-center gap-2 pb-3 border-b border-[#E2DDD5]">
                  <Eye className="w-4 h-4 text-[#A90706]" />
                  <span className="font-condensed text-xs font-bold text-slate-900 uppercase tracking-wider">
                    PRIVACY NAVIGATION
                  </span>
                </div>
                <nav className="space-y-1">
                  {sections.map((sec) => (
                    <button
                      key={sec.id}
                      onClick={() => scrollTo(sec.id)}
                      className={`w-full text-left px-3 py-2 text-xs font-condensed uppercase tracking-wider transition-colors flex items-center justify-between cursor-pointer ${
                        activeSection === sec.id
                          ? "bg-[#A90706] text-white font-semibold"
                          : "text-slate-600 hover:bg-[#FAF8F5] hover:text-slate-900"
                      }`}
                    >
                      <span>{sec.title}</span>
                      <ChevronRight className="w-3.5 h-3.5 opacity-60" />
                    </button>
                  ))}
                </nav>

                <div className="pt-4 border-t border-[#E2DDD5]">
                  <Link
                    href={`/${locale}/book-consultation`}
                    className="w-full py-3 bg-slate-900 hover:bg-[#A90706] text-white font-condensed text-xs uppercase tracking-widest flex items-center justify-center gap-2 transition-colors"
                  >
                    <span>DATA PRIVACY OFFICER</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Privacy Articles Content */}
            <div className="lg:col-span-8 bg-white border border-[#E2DDD5] p-8 sm:p-12 space-y-12 shadow-xs">

              <div className="p-6 bg-[#FAF8F5] border-l-4 border-[#A90706] space-y-2">
                <h3 className="font-condensed text-sm font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#A90706]" />
                  <span>COMMITMENT TO DATA PROTECTION</span>
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed font-sans">
                  BrosDev Solutions (&quot;BrosDev Solutions&quot;, &quot;We&quot;, &quot;Us&quot;, &quot;Our&quot;) respects your privacy and is dedicated to managing client information with enterprise-grade security protocols in compliance with EU General Data Protection Regulation (&quot;GDPR&quot;), California Consumer Privacy Act (&quot;CCPA&quot;), and global cybersecurity standards.
                </p>
              </div>

              {/* Section 1 */}
              <div id="s1" className="space-y-4 pt-4 border-t border-[#E2DDD5]/60 scroll-mt-28">
                <span className="font-condensed text-xs text-[#A90706] font-bold uppercase tracking-widest">
                  ARTICLE 01
                </span>
                <h2 className="text-2xl font-normal text-slate-900 uppercase font-[var(--font-geist)]">
                  1. Information We Collect
                </h2>
                <div className="text-sm text-slate-700 leading-relaxed space-y-3 font-sans">
                  <p>
                    1.1. <strong>Directly Provided Information:</strong> We collect personal details when you submit consultation forms, subscribe to insights, or enter into engineering contracts (e.g., name, work email, phone number, company name, project specifications).
                  </p>
                  <p>
                    1.2. <strong>Technical &amp; Usage Data:</strong> When visiting our platform, we automatically capture IP addresses, browser types, operating systems, referring URLs, and page navigation patterns via aggregated analytical telemetry.
                  </p>
                  <p>
                    1.3. <strong>Zero Sensitive Data Processing:</strong> We do not collect or process special categories of personal data (such as health, biometric, genetic, or political data) unless required under a specific HIPAA/FinTech SOW.
                  </p>
                </div>
              </div>

              {/* Section 2 */}
              <div id="s2" className="space-y-4 pt-8 border-t border-[#E2DDD5] scroll-mt-28">
                <span className="font-condensed text-xs text-[#A90706] font-bold uppercase tracking-widest">
                  ARTICLE 02
                </span>
                <h2 className="text-2xl font-normal text-slate-900 uppercase font-[var(--font-geist)]">
                  2. Legal Basis for Processing (GDPR Art. 6)
                </h2>
                <div className="text-sm text-slate-700 leading-relaxed space-y-3 font-sans">
                  <p>
                    2.1. <strong>Contract Performance:</strong> Processing contact and project details is necessary to execute Master Services Agreements, deliver sprint software builds, and issue billing invoices.
                  </p>
                  <p>
                    2.2. <strong>Legitimate Interests:</strong> Processing website analytics and technical telemetry supports network security monitoring, system optimization, and enterprise service enhancements.
                  </p>
                  <p>
                    2.3. <strong>Consent:</strong> Where required by law (e.g., newsletter subscriptions or marketing communications), processing is based on explicit opt-in consent.
                  </p>
                </div>
              </div>

              {/* Section 3 */}
              <div id="s3" className="space-y-4 pt-8 border-t border-[#E2DDD5] scroll-mt-28">
                <span className="font-condensed text-xs text-[#A90706] font-bold uppercase tracking-widest">
                  ARTICLE 03
                </span>
                <h2 className="text-2xl font-normal text-slate-900 uppercase font-[var(--font-geist)]">
                  3. How We Use Collected Information
                </h2>
                <div className="text-sm text-slate-700 leading-relaxed space-y-3 font-sans">
                  <p>
                    3.1. To evaluate technical project requirements and schedule developer matching discovery calls.
                  </p>
                  <p>
                    3.2. To engineer custom web, cloud, and mobile software applications specified under signed Statements of Work.
                  </p>
                  <p>
                    3.3. <strong>Zero Data Monetization Guarantee:</strong> BrosDev Solutions never sells, rents, leases, or trades client personal data or proprietary repository code bases to third-party ad networks or data brokers.
                  </p>
                </div>
              </div>

              {/* Section 4 */}
              <div id="s4" className="space-y-4 pt-8 border-t border-[#E2DDD5] scroll-mt-28">
                <span className="font-condensed text-xs text-[#A90706] font-bold uppercase tracking-widest">
                  ARTICLE 04
                </span>
                <h2 className="text-2xl font-normal text-slate-900 uppercase font-[var(--font-geist)]">
                  4. Enterprise Data Security &amp; ISO / SOC-2 Compliance
                </h2>
                <div className="text-sm text-slate-700 leading-relaxed space-y-3 font-sans">
                  <p>
                    4.1. <strong>Encryption Standards:</strong> All data in transit is encrypted using TLS 1.3 encryption protocols. Sensitive client data at rest is secured via AES-256 hardware cryptographic encryption.
                  </p>
                  <p>
                    4.2. <strong>Access Control:</strong> Engineering team access to client repositories and cloud VPCs is enforced through multi-factor authentication (MFA), hardware security keys, and role-based principle of least privilege.
                  </p>
                  <p>
                    4.3. <strong>Audit &amp; Vulnerability Testing:</strong> We perform routine automated static code analysis (SAST), dependency vulnerability scanning, and third-party penetration testing.
                  </p>
                </div>
              </div>

              {/* Section 5 */}
              <div id="s5" className="space-y-4 pt-8 border-t border-[#E2DDD5] scroll-mt-28">
                <span className="font-condensed text-xs text-[#A90706] font-bold uppercase tracking-widest">
                  ARTICLE 05
                </span>
                <h2 className="text-2xl font-normal text-slate-900 uppercase font-[var(--font-geist)]">
                  5. Data Retention &amp; Archival Policies
                </h2>
                <div className="text-sm text-slate-700 leading-relaxed space-y-3 font-sans">
                  <p>
                    5.1. Personal data and project communication records are retained for as long as necessary to fulfill the operational purposes set forth in active contracts.
                  </p>
                  <p>
                    5.2. Following project completion or account termination, client project repositories and temporary staging environments are scrubbed and permanently deleted within ninety (90) days upon written request.
                  </p>
                </div>
              </div>

              {/* Section 6 */}
              <div id="s6" className="space-y-4 pt-8 border-t border-[#E2DDD5] scroll-mt-28">
                <span className="font-condensed text-xs text-[#A90706] font-bold uppercase tracking-widest">
                  ARTICLE 06
                </span>
                <h2 className="text-2xl font-normal text-slate-900 uppercase font-[var(--font-geist)]">
                  6. Third-Party Subprocessors &amp; Infrastructure
                </h2>
                <div className="text-sm text-slate-700 leading-relaxed space-y-3 font-sans">
                  <p>
                    6.1. BrosDev Solutions utilizes enterprise cloud infrastructure providers (e.g., AWS, Vercel, GitHub, Cloudflare, Google Cloud Platform) to host platform infrastructure and run automated CI/CD deployment pipelines.
                  </p>
                  <p>
                    6.2. All third-party subprocessors undergo rigorous vendor security evaluations and are bound by Data Processing Addendums (DPAs) reflecting equivalent data safety standard guarantees.
                  </p>
                </div>
              </div>

              {/* Section 7 */}
              <div id="s7" className="space-y-4 pt-8 border-t border-[#E2DDD5] scroll-mt-28">
                <span className="font-condensed text-xs text-[#A90706] font-bold uppercase tracking-widest">
                  ARTICLE 07
                </span>
                <h2 className="text-2xl font-normal text-slate-900 uppercase font-[var(--font-geist)]">
                  7. International Data Transfers (EU-US &amp; Global Frameworks)
                </h2>
                <div className="text-sm text-slate-700 leading-relaxed space-y-3 font-sans">
                  <p>
                    7.1. For cross-border data transfers originating from the European Economic Area (EEA), UK, or Switzerland to global delivery centers, BrosDev Solutions implements Standard Contractual Clauses (SCCs) approved by the European Commission.
                  </p>
                </div>
              </div>

              {/* Section 8 */}
              <div id="s8" className="space-y-4 pt-8 border-t border-[#E2DDD5] scroll-mt-28">
                <span className="font-condensed text-xs text-[#A90706] font-bold uppercase tracking-widest">
                  ARTICLE 08
                </span>
                <h2 className="text-2xl font-normal text-slate-900 uppercase font-[var(--font-geist)]">
                  8. Your Data Privacy Rights (GDPR &amp; CCPA)
                </h2>
                <div className="text-sm text-slate-700 leading-relaxed space-y-3 font-sans">
                  <p>
                    8.1. <strong>Right to Access &amp; Portability:</strong> Request copies of personal data held by BrosDev Solutions in a structured, machine-readable format.
                  </p>
                  <p>
                    8.2. <strong>Right to Erasure (&quot;Right to be Forgotten&quot;):</strong> Request the permanent deletion of personal information where no overriding legal obligation exists.
                  </p>
                  <p>
                    8.3. <strong>Right to Rectification:</strong> Request correction of inaccurate or incomplete personal records.
                  </p>
                </div>
              </div>

              {/* Section 9 */}
              <div id="s9" className="space-y-4 pt-8 border-t border-[#E2DDD5] scroll-mt-28">
                <span className="font-condensed text-xs text-[#A90706] font-bold uppercase tracking-widest">
                  ARTICLE 09
                </span>
                <h2 className="text-2xl font-normal text-slate-900 uppercase font-[var(--font-geist)]">
                  9. Cookies &amp; Analytics Telemetry Policy
                </h2>
                <div className="text-sm text-slate-700 leading-relaxed space-y-3 font-sans">
                  <p>
                    9.1. We use essential session cookies to maintain platform security, language localization preferences (EN, DE, FR, ES, HI), and user authentication states.
                  </p>
                  <p>
                    9.2. You can manage or disable cookie tracking at any time through your web browser preferences or consent banner controls.
                  </p>
                </div>
              </div>

              {/* Section 10 */}
              <div id="s10" className="space-y-4 pt-8 border-t border-[#E2DDD5] scroll-mt-28">
                <span className="font-condensed text-xs text-[#A90706] font-bold uppercase tracking-widest">
                  ARTICLE 10
                </span>
                <h2 className="text-2xl font-normal text-slate-900 uppercase font-[var(--font-geist)]">
                  10. Contact &amp; Data Protection Officer (DPO) Inquiries
                </h2>
                <div className="text-sm text-slate-700 leading-relaxed space-y-3 font-sans">
                  <p>
                    If you have questions regarding this Privacy Policy, wish to exercise your statutory privacy rights, or submit a Data Subject Access Request (DSAR), please contact our Data Protection Officer:
                  </p>
                  <div className="p-4 bg-[#FAF8F5] border border-[#E2DDD5] text-xs font-condensed space-y-1">
                    <p className="font-bold text-slate-900">BROSDEV SOLUTIONS DATA PROTECTION OFFICER</p>
                    <p className="text-slate-600">Email: dpo@brosdev.site / privacy@brosdev.site</p>
                    <p className="text-slate-600">Address: GIFT City / Infocity, Gujarat 382007, India</p>
                  </div>
                </div>
              </div>

              {/* Footer contact box */}
              <div className="pt-8 border-t-2 border-slate-900 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <h4 className="font-condensed text-sm font-bold text-slate-900 uppercase">
                    HAVE PRIVACY OR COMPLIANCE QUESTIONS?
                  </h4>
                  <p className="text-xs text-slate-500 font-condensed uppercase">
                    Our DPO responds within 24 hours at privacy@brosdev.site
                  </p>
                </div>
                <Link
                  href={`/${locale}/contact`}
                  className="px-6 py-3 bg-[#A90706] hover:bg-[#880504] text-white font-condensed text-xs uppercase tracking-widest transition-colors flex items-center gap-2"
                >
                  <span>CONTACT PRIVACY TEAM</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>

            </div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
