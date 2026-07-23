import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { TranslationProvider } from "@/context/TranslationContext";
import { Award, ShieldCheck, CheckCircle2, Trophy, Medal, Star, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Brosdev | Certifications, Compliance & Awards",
  description:
    "Review BrosDev ISO 27001, SOC 2 Type II, GDPR, HIPAA certifications, purpose for clients, and global industry awards.",
  openGraph: {
    title: "Brosdev | Certifications, Compliance & Awards",
    description:
      "Review BrosDev ISO 27001, SOC 2 Type II, GDPR, HIPAA certifications, purpose for clients, and global industry awards.",
  },
};

export default async function LocaleCertificationsPage({ params }: { params: Promise<{ locale: string }> }) {
  const resolvedParams = await params;
  const locale = resolvedParams?.locale || "en";

  const certs = [
    { 
      name: "ISO 27001:2022 CERTIFIED", 
      category: "Information Security Management System (ISMS)", 
      purpose: "Why it matters to clients:",
      desc: "Guarantees that BrosDev adheres to globally audited security policies. All client source code, customer databases, and IP are protected under strict access control and risk mitigation protocols.",
      benefits: ["Zero-Trust Data Protection", "Mandatory Security Audits", "Encrypted Source Code Repositories"]
    },
    { 
      name: "SOC 2 TYPE II COMPLIANT", 
      category: "Enterprise Trust, Privacy & Availability", 
      purpose: "Why it matters to clients:",
      desc: "Independent 3rd-party audit verifying operational security over a 12-month period. Proves that our cloud infrastructure and employee workflows meet Fortune 500 security standards.",
      benefits: ["Verified Operational Controls", "Data Confidentiality Guaranteed", "Zero-Downtime Infrastructure"]
    },
    { 
      name: "GDPR & HIPAA COMPLIANT", 
      category: "Global Regulatory Compliance Framework", 
      purpose: "Why it matters to clients:",
      desc: "Allows us to build healthcare applications and European SaaS platforms natively compliant with strict data protection laws (e.g. ePHI protection, right-to-be-forgotten, end-to-end encryption).",
      benefits: ["ePHI Healthcare Security", "EU Consumer Data Rights", "Right-to-be-forgotten Architecture"]
    },
    { 
      name: "AWS CERTIFIED SOLUTIONS ARCHITECT", 
      category: "Premier Cloud & Server Architecture", 
      purpose: "Why it matters to clients:",
      desc: "Certified by Amazon Web Services for designing high-availability, fault-tolerant, and cost-optimized multi-region cloud infrastructures capable of scaling to millions of users.",
      benefits: ["Sub-Second Latency Architecture", "Auto-Scaling Kubernetes Clusters", "Cost-Optimized Infrastructure"]
    },
  ];

  const awards = [
    {
      year: "2025 - 2026",
      title: "BEST NEXT-GEN IT ENGINEERING COMPANY AWARD",
      issuer: "Global Digital Tech Excellence Forum",
      desc: "Awarded for pioneering AI-integrated agile development workflows, sub-second web application performance, and 99.8% client satisfaction ratings.",
      icon: Trophy,
    },
    {
      year: "2025",
      title: "TOP CLOUD & ENTERPRISE AI AGENCY",
      issuer: "Enterprise Software Innovation Summit",
      desc: "Recognized for architecting autonomous AI agent platforms and high-throughput vector database integrations for fintech and healthcare clients.",
      icon: Medal,
    },
    {
      year: "2024",
      title: "EXCELLENCE IN AGILE PRODUCT DELIVERY",
      issuer: "International Agile Developers Association",
      desc: "Honored for delivering over 100+ digital products on schedule with under 2% bug re-work rates through automated testing pipelines.",
      icon: Star,
    },
  ];

  return (
    <TranslationProvider defaultLocale={locale}>
      <main className="min-h-screen bg-[#FAF8F5] text-slate-900 selection:bg-[#A90706] selection:text-white font-sans antialiased">
        <Navbar />

        {/* Header Banner */}
        <section className="pt-36 pb-20 border-b border-[#E2DDD5] bg-[#FAF8F5]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-[#E2DDD5] mb-6">
              <span className="w-2 h-2 bg-[#A90706]"></span>
              <span className="font-condensed text-xs font-black tracking-widest text-[#A90706] uppercase">
                // CERTIFICATIONS &amp; INDUSTRY AWARDS
              </span>
            </div>

            <h1 className="text-5xl sm:text-7xl font-black text-slate-900 tracking-tight leading-none uppercase mb-8 font-[var(--font-geist)]">
              CERTIFICATIONS &amp; AWARDS
            </h1>

            <p className="text-slate-700 text-lg sm:text-xl font-medium max-w-3xl leading-relaxed">
              Industry-recognized security certifications, regulatory compliance standards, and global awards backing our commitment to enterprise excellence.
            </p>
          </div>
        </section>

        {/* Industry Awards Showcase */}
        <section className="py-20 border-b border-[#E2DDD5] bg-slate-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#A90706] text-white font-condensed text-xs font-black uppercase tracking-widest mb-3">
                <Trophy className="w-4 h-4 text-amber-300" />
                <span>GLOBAL RECOGNITIONS</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white font-[var(--font-geist)]">
                INDUSTRY AWARDS WON
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {awards.map((award, idx) => {
                const Icon = award.icon;
                return (
                  <div key={idx} className="bg-slate-800 border-2 border-slate-700 p-8 flex flex-col justify-between space-y-4 shadow-xl">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="font-condensed text-xs font-black px-2.5 py-1 bg-[#A90706] text-white uppercase">
                          {award.year}
                        </span>
                        <Icon className="w-8 h-8 text-amber-400 shrink-0" />
                      </div>
                      <span className="font-condensed text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-1">
                        ISSUED BY: {award.issuer}
                      </span>
                      <h3 className="font-condensed text-xl font-black text-white uppercase tracking-tight font-[var(--font-geist)] mb-3">
                        {award.title}
                      </h3>
                      <p className="text-xs text-slate-300 leading-relaxed font-normal">
                        {award.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Certifications Detailed Grid */}
        <section className="py-24 border-b border-[#E2DDD5] bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="font-condensed text-xs font-black text-[#A90706] uppercase tracking-widest block mb-2">
                // COMPLIANCE &amp; CLIENT PURPOSE
              </span>
              <h2 className="text-3xl sm:text-5xl font-black text-slate-900 uppercase tracking-tight font-[var(--font-geist)]">
                SECURITY CERTIFICATIONS
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {certs.map((c, i) => (
                <div key={i} className="p-8 border-2 border-slate-900 bg-[#FAF8F5] shadow-lg flex flex-col justify-between space-y-6">
                  <div>
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-14 h-14 bg-slate-900 text-white flex items-center justify-center shrink-0 shadow-md">
                        <Award className="w-7 h-7 text-[#A90706]" />
                      </div>
                      <div>
                        <span className="font-condensed text-xs font-black text-[#A90706] uppercase tracking-widest block">
                          {c.category}
                        </span>
                        <h3 className="font-condensed text-2xl font-black text-slate-900 uppercase tracking-tight font-[var(--font-geist)]">
                          {c.name}
                        </h3>
                      </div>
                    </div>

                    <div className="bg-white border border-[#E2DDD5] p-4 mb-4">
                      <span className="font-condensed text-[11px] font-black text-[#A90706] uppercase tracking-wider block mb-1">
                        {c.purpose}
                      </span>
                      <p className="text-xs text-slate-700 font-normal leading-relaxed">
                        {c.desc}
                      </p>
                    </div>

                    <div className="space-y-2">
                      {c.benefits.map((b, bIdx) => (
                        <div key={bIdx} className="flex items-center gap-2 text-xs font-condensed font-bold uppercase text-slate-900">
                          <CheckCircle2 className="w-4 h-4 text-[#A90706] shrink-0" />
                          <span>{b}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </TranslationProvider>
  );
}
