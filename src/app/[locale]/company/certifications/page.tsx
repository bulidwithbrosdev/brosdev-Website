"use client";

import { use, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CallBookingModal from "@/components/CallBookingModal";
import { TranslationProvider } from "@/context/TranslationContext";
import { Award } from "lucide-react";

export default function LocaleCertificationsPage({ params }: { params: Promise<{ locale: string }> }) {
  const resolvedParams = use(params);
  const locale = resolvedParams?.locale || "en";
  const [isCallModalOpen, setIsCallModalOpen] = useState(false);

  const certs = [
    { name: "ISO 27001:2022", category: "Information Security Management", desc: "Certified global security framework for risk management and data confidentiality." },
    { name: "AWS Certified Solutions Architect", category: "Cloud Architecture", desc: "Recognized expertise in designing scalable, fault-tolerant AWS cloud infrastructure." },
    { name: "SOC 2 Type II Compliant", category: "Data Protection & Privacy", desc: "Independent audit verifying strict security, availability, and confidentiality controls." },
    { name: "GDPR & HIPAA Compliant", category: "Global Regulatory Standards", desc: "Strict data privacy mechanisms for European and healthcare data processing." },
  ];

  return (
    <TranslationProvider defaultLocale={locale}>
      <main className="min-h-screen bg-[#FAF8F5] text-slate-900 selection:bg-[#A90706] selection:text-white font-sans antialiased">
        <Navbar onBookCallClick={() => setIsCallModalOpen(true)} />

        {/* Header Banner */}
        <section className="pt-36 pb-20 border-b border-[#E2DDD5] bg-[#FAF8F5]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-[#E2DDD5] mb-6">
              <span className="w-2 h-2 bg-[#A90706]"></span>
              <span className="font-condensed text-xs font-black tracking-widest text-[#A90706] uppercase">
                // QUALITY ASSURANCE & COMPLIANCE
              </span>
            </div>

            <h1 className="text-5xl sm:text-7xl font-black text-slate-900 tracking-tight leading-none uppercase mb-8">
              CERTIFICATIONS
            </h1>

            <p className="text-slate-700 text-lg sm:text-xl font-medium max-w-3xl leading-relaxed">
              Industry-recognized certifications and international compliance standards backing our unwavering commitment to security, speed, and code quality.
            </p>
          </div>
        </section>

        {/* Certs Grid */}
        <section className="py-24 border-b border-[#E2DDD5] bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {certs.map((c, i) => (
                <div key={i} className="p-8 border-2 border-slate-900 bg-[#FAF8F5] shadow-lg flex items-start gap-5">
                  <div className="w-12 h-12 bg-slate-900 text-white flex items-center justify-center shrink-0">
                    <Award className="w-6 h-6 text-[#A90706]" />
                  </div>
                  <div>
                    <span className="font-condensed text-xs font-black text-[#A90706] uppercase tracking-widest block mb-1">
                      {c.category}
                    </span>
                    <h3 className="font-condensed text-2xl font-black text-slate-900 uppercase tracking-tight mb-2">
                      {c.name}
                    </h3>
                    <p className="text-xs text-slate-600 font-medium leading-relaxed">
                      {c.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Footer />
        <CallBookingModal isOpen={isCallModalOpen} onClose={() => setIsCallModalOpen(false)} />
      </main>
    </TranslationProvider>
  );
}
