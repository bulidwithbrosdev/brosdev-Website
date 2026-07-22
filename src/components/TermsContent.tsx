"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowUpRight, ShieldCheck, FileText, ChevronRight, Scale } from "lucide-react";
import { useTranslation } from "@/context/TranslationContext";

export default function TermsContent() {
  const { locale } = useTranslation();
  const [activeSection, setActiveSection] = useState("s1");

  const sections = [
    { id: "s1", title: "1. Acceptance of Terms & Scope" },
    { id: "s2", title: "2. Master Services & SOW" },
    { id: "s3", title: "3. Client Obligations" },
    { id: "s4", title: "4. Intellectual Property & Rights" },
    { id: "s5", title: "5. Payment & Invoicing Terms" },
    { id: "s6", title: "6. Sprint Delivery & Acceptance" },
    { id: "s7", title: "7. Confidentiality & Non-Disclosure" },
    { id: "s8", title: "8. Liability & Indemnification" },
    { id: "s9", title: "9. Term & Termination" },
    { id: "s10", title: "10. Governing Law & Jurisdiction" },
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
            <Scale className="w-4 h-4" />
            <span>LEGAL & GOVERNANCE FRAMEWORK</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-normal tracking-tight text-white uppercase font-[var(--font-geist)] mb-4">
            TERMS &amp; CONDITIONS
          </h1>
          <div className="flex flex-wrap items-center gap-6 text-xs text-slate-400 font-condensed uppercase tracking-wider">
            <span>EFFECTIVE DATE: JANUARY 1, 2026</span>
            <span>•</span>
            <span>VERSION 3.2</span>
            <span>•</span>
            <span>APPLIES GLOBALLY (USA, EU, UK, INDIA)</span>
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
                  <FileText className="w-4 h-4 text-[#A90706]" />
                  <span className="font-condensed text-xs font-bold text-slate-900 uppercase tracking-wider">
                    TABLE OF CONTENTS
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
                    <span>LEGAL INQUIRIES</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Terms Articles Content */}
            <div className="lg:col-span-8 bg-white border border-[#E2DDD5] p-8 sm:p-12 space-y-12 shadow-xs">

              <div className="p-6 bg-[#FAF8F5] border-l-4 border-[#A90706] space-y-2">
                <h3 className="font-condensed text-sm font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#A90706]" />
                  <span>PREAMBLE & EXECUTORY AGREEMENT</span>
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed font-sans">
                  These Terms and Conditions (&quot;Terms&quot;) constitute a legally binding agreement between BrosDev Technologies (&quot;BrosDev&quot;, &quot;Company&quot;, &quot;We&quot;, &quot;Us&quot;) and any legal entity or individual (&quot;Client&quot;, &quot;You&quot;) accessing our software engineering services, web applications, custom APIs, or technical consulting solutions.
                </p>
              </div>

              {/* Section 1 */}
              <div id="s1" className="space-y-4 pt-4 border-t border-[#E2DDD5]/60 scroll-mt-28">
                <span className="font-condensed text-xs text-[#A90706] font-bold uppercase tracking-widest">
                  ARTICLE 01
                </span>
                <h2 className="text-2xl font-normal text-slate-900 uppercase font-[var(--font-geist)]">
                  1. Acceptance of Terms &amp; Scope of Services
                </h2>
                <div className="text-sm text-slate-700 leading-relaxed space-y-3 font-sans">
                  <p>
                    1.1. By signing a Statement of Work (&quot;SOW&quot;), issuing a Purchase Order (&quot;PO&quot;), or utilizing any digital services developed by BrosDev, the Client acknowledges having read, understood, and agreed to be bound by these Terms.
                  </p>
                  <p>
                    1.2. BrosDev provides enterprise product engineering, full-stack cloud SaaS development, mobile applications, AI/LLM workflow orchestration, devops infrastructure automation, and team augmentation services.
                  </p>
                  <p>
                    1.3. Any custom modifications or supplementary terms requested by the Client must be explicitly set forth in a written Addendum signed by authorized signatories of both parties.
                  </p>
                </div>
              </div>

              {/* Section 2 */}
              <div id="s2" className="space-y-4 pt-8 border-t border-[#E2DDD5] scroll-mt-28">
                <span className="font-condensed text-xs text-[#A90706] font-bold uppercase tracking-widest">
                  ARTICLE 02
                </span>
                <h2 className="text-2xl font-normal text-slate-900 uppercase font-[var(--font-geist)]">
                  2. Master Services Agreement (MSA) &amp; Statement of Work (SOW)
                </h2>
                <div className="text-sm text-slate-700 leading-relaxed space-y-3 font-sans">
                  <p>
                    2.1. Individual projects shall be governed by specific Statements of Work (&quot;SOW&quot;). Each SOW will detail the project scope, engineering deliverables, sprint timelines, tech stack parameters, and milestone payment schedules.
                  </p>
                  <p>
                    2.2. In the event of any conflict or inconsistency between these general Terms and an executed SOW, the provisions of the specific SOW shall prevail for that project.
                  </p>
                  <p>
                    2.3. Scope changes requested during sprint execution shall be processed through our formal Change Order Procedure, outlining additional cost and schedule impact prior to implementation.
                  </p>
                </div>
              </div>

              {/* Section 3 */}
              <div id="s3" className="space-y-4 pt-8 border-t border-[#E2DDD5] scroll-mt-28">
                <span className="font-condensed text-xs text-[#A90706] font-bold uppercase tracking-widest">
                  ARTICLE 03
                </span>
                <h2 className="text-2xl font-normal text-slate-900 uppercase font-[var(--font-geist)]">
                  3. Client Obligations &amp; Technical Assets
                </h2>
                <div className="text-sm text-slate-700 leading-relaxed space-y-3 font-sans">
                  <p>
                    3.1. The Client agrees to provide timely access to necessary technical documentation, third-party API credentials, domain access, cloud console permissions (AWS, Azure, GCP), and feedback within 48 hours of sprint review requests.
                  </p>
                  <p>
                    3.2. BrosDev is not liable for project delivery delays resulting from the Client’s failure or delay in providing required access, assets, or approvals.
                  </p>
                  <p>
                    3.3. The Client warrants that all assets, logos, databases, and proprietary software provided to BrosDev do not infringe upon any third-party intellectual property rights.
                  </p>
                </div>
              </div>

              {/* Section 4 */}
              <div id="s4" className="space-y-4 pt-8 border-t border-[#E2DDD5] scroll-mt-28">
                <span className="font-condensed text-xs text-[#A90706] font-bold uppercase tracking-widest">
                  ARTICLE 04
                </span>
                <h2 className="text-2xl font-normal text-slate-900 uppercase font-[var(--font-geist)]">
                  4. Intellectual Property &amp; Code Ownership Rights
                </h2>
                <div className="text-sm text-slate-700 leading-relaxed space-y-3 font-sans">
                  <p>
                    4.1. <strong>Transfer of Ownership:</strong> Upon full and final settlement of all invoices associated with an executed SOW, BrosDev assigns and transfers to the Client all right, title, and interest in and to the custom source code, design assets, and database schemas created specifically for the Client.
                  </p>
                  <p>
                    4.2. <strong>Pre-existing Components &amp; Libraries:</strong> BrosDev retains ownership of its pre-existing proprietary frameworks, boilerplates, open-source modules, and developer tooling utilized in project creation. Client is granted a perpetual, royalty-free, worldwide license to use such integrated modules within their application.
                  </p>
                  <p>
                    4.3. <strong>Open Source Compliance:</strong> All open-source software libraries integrated into deliverables shall adhere strictly to their respective permissive licenses (e.g., MIT, Apache 2.0).
                  </p>
                </div>
              </div>

              {/* Section 5 */}
              <div id="s5" className="space-y-4 pt-8 border-t border-[#E2DDD5] scroll-mt-28">
                <span className="font-condensed text-xs text-[#A90706] font-bold uppercase tracking-widest">
                  ARTICLE 05
                </span>
                <h2 className="text-2xl font-normal text-slate-900 uppercase font-[var(--font-geist)]">
                  5. Payment Terms, Retainers &amp; Invoicing
                </h2>
                <div className="text-sm text-slate-700 leading-relaxed space-y-3 font-sans">
                  <p>
                    5.1. <strong>Invoicing Schedule:</strong> Services are billed on a fixed-fee milestone basis, bi-weekly sprint retainer, or time-and-materials rate as defined in the SOW. Invoices are due within 14 calendar days from invoice date.
                  </p>
                  <p>
                    5.2. <strong>Late Payment Interest:</strong> Invoices overdue by more than 15 business days shall incur interest at the rate of 1.5% per month or the maximum statutory rate allowed by applicable law.
                  </p>
                  <p>
                    5.3. <strong>Taxes &amp; Fees:</strong> All quoted rates are exclusive of applicable local, state, or international sales taxes, VAT, or withholding taxes, which shall be borne by the Client.
                  </p>
                </div>
              </div>

              {/* Section 6 */}
              <div id="s6" className="space-y-4 pt-8 border-t border-[#E2DDD5] scroll-mt-28">
                <span className="font-condensed text-xs text-[#A90706] font-bold uppercase tracking-widest">
                  ARTICLE 06
                </span>
                <h2 className="text-2xl font-normal text-slate-900 uppercase font-[var(--font-geist)]">
                  6. Sprint Delivery, Acceptance &amp; Warranty Period
                </h2>
                <div className="text-sm text-slate-700 leading-relaxed space-y-3 font-sans">
                  <p>
                    6.1. <strong>Sprint Acceptance:</strong> Upon delivery of a sprint build or milestone release, the Client has 7 business days to inspect and test the software against agreed functional specifications.
                  </p>
                  <p>
                    6.2. <strong>Deemed Acceptance:</strong> If no written bug report or rejection notice is provided within the 7-day inspection window, the milestone deliverable shall be deemed accepted.
                  </p>
                  <p>
                    6.3. <strong>30-Day Bug Warranty:</strong> BrosDev provides a 30-calendar-day warranty following final deployment, covering the rectification of reproducible critical bugs or code defects without additional charge.
                  </p>
                </div>
              </div>

              {/* Section 7 */}
              <div id="s7" className="space-y-4 pt-8 border-t border-[#E2DDD5] scroll-mt-28">
                <span className="font-condensed text-xs text-[#A90706] font-bold uppercase tracking-widest">
                  ARTICLE 07
                </span>
                <h2 className="text-2xl font-normal text-slate-900 uppercase font-[var(--font-geist)]">
                  7. Confidentiality &amp; Non-Disclosure (NDA)
                </h2>
                <div className="text-sm text-slate-700 leading-relaxed space-y-3 font-sans">
                  <p>
                    7.1. Both parties agree that all trade secrets, client data, business plans, financial records, and source code disclosed during engagement shall remain strictly confidential.
                  </p>
                  <p>
                    7.2. Neither party shall disclose confidential information to any third party without prior written consent, except to employees, subcontractors, or legal advisors bound by equivalent non-disclosure obligations.
                  </p>
                  <p>
                    7.3. Confidentiality obligations shall survive the termination of services for a period of five (5) years.
                  </p>
                </div>
              </div>

              {/* Section 8 */}
              <div id="s8" className="space-y-4 pt-8 border-t border-[#E2DDD5] scroll-mt-28">
                <span className="font-condensed text-xs text-[#A90706] font-bold uppercase tracking-widest">
                  ARTICLE 08
                </span>
                <h2 className="text-2xl font-normal text-slate-900 uppercase font-[var(--font-geist)]">
                  8. Limitation of Liability &amp; Indemnification
                </h2>
                <div className="text-sm text-slate-700 leading-relaxed space-y-3 font-sans">
                  <p>
                    8.1. <strong>Liability Cap:</strong> To the maximum extent permitted by law, BrosDev&apos;s total aggregate liability arising out of or related to any project shall not exceed the total fees paid by the Client under the specific SOW giving rise to the claim in the six (6) months prior to the incident.
                  </p>
                  <p>
                    8.2. <strong>Consequential Damages:</strong> In no event shall either party be liable for indirect, incidental, special, consequential, or punitive damages, including loss of profits, revenue, or business interruption.
                  </p>
                </div>
              </div>

              {/* Section 9 */}
              <div id="s9" className="space-y-4 pt-8 border-t border-[#E2DDD5] scroll-mt-28">
                <span className="font-condensed text-xs text-[#A90706] font-bold uppercase tracking-widest">
                  ARTICLE 09
                </span>
                <h2 className="text-2xl font-normal text-slate-900 uppercase font-[var(--font-geist)]">
                  9. Term, Suspension &amp; Termination
                </h2>
                <div className="text-sm text-slate-700 leading-relaxed space-y-3 font-sans">
                  <p>
                    9.1. Either party may terminate an ongoing engagement for convenience by providing thirty (30) days written notice to the other party.
                  </p>
                  <p>
                    9.2. Either party may terminate immediately for cause if the other party commits a material breach of these Terms and fails to cure such breach within fourteen (14) days of receiving written notification.
                  </p>
                  <p>
                    9.3. Upon termination, Client shall pay for all completed engineering work and prorated sprint labor delivered up to the effective date of termination.
                  </p>
                </div>
              </div>

              {/* Section 10 */}
              <div id="s10" className="space-y-4 pt-8 border-t border-[#E2DDD5] scroll-mt-28">
                <span className="font-condensed text-xs text-[#A90706] font-bold uppercase tracking-widest">
                  ARTICLE 10
                </span>
                <h2 className="text-2xl font-normal text-slate-900 uppercase font-[var(--font-geist)]">
                  10. Governing Law, Dispute Resolution &amp; Jurisdiction
                </h2>
                <div className="text-sm text-slate-700 leading-relaxed space-y-3 font-sans">
                  <p>
                    10.1. These Terms shall be governed by and construed in accordance with international commercial law standards. Any legal dispute shall first be submitted to good-faith executive negotiation.
                  </p>
                  <p>
                    10.2. If unresolved within thirty (30) days, the dispute shall be referred to binding arbitration conducted under the rules of the International Chamber of Commerce (ICC) or competent jurisdiction court of company registration.
                  </p>
                </div>
              </div>

              {/* Footer contact box */}
              <div className="pt-8 border-t-2 border-slate-900 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <h4 className="font-condensed text-sm font-bold text-slate-900 uppercase">
                    QUESTIONS REGARDING LEGAL TERMS?
                  </h4>
                  <p className="text-xs text-slate-500 font-condensed uppercase">
                    Contact our legal team at legal@brosdev.com
                  </p>
                </div>
                <Link
                  href={`/${locale}/contact`}
                  className="px-6 py-3 bg-[#A90706] hover:bg-[#880504] text-white font-condensed text-xs uppercase tracking-widest transition-colors flex items-center gap-2"
                >
                  <span>GET IN TOUCH</span>
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
