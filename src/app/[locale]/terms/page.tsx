"use client";

import { use, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CallBookingModal from "@/components/CallBookingModal";
import { TranslationProvider } from "@/context/TranslationContext";

export default function LocaleTermsPage({ params }: { params: Promise<{ locale: string }> }) {
  const resolvedParams = use(params);
  const locale = resolvedParams?.locale || "en";
  const [isCallModalOpen, setIsCallModalOpen] = useState(false);

  return (
    <TranslationProvider defaultLocale={locale}>
      <main className="min-h-screen bg-[#FAF8F5] text-slate-900 selection:bg-[#A90706] selection:text-white font-sans antialiased">
        <Navbar onBookCallClick={() => setIsCallModalOpen(true)} />

        <section className="pt-36 pb-20 border-b border-[#E2DDD5] bg-[#FAF8F5]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl sm:text-6xl font-black text-slate-900 uppercase tracking-tight mb-8">
              TERMS &amp; CONDITIONS
            </h1>
            <div className="prose prose-slate max-w-none space-y-6 text-slate-700 font-medium">
              <p>
                Welcome to BrosDev. By accessing our platform or engaging our engineering services, you agree to comply with the following terms and conditions.
              </p>
              <h2 className="text-2xl font-black uppercase text-slate-900 pt-4">1. Engineering Services</h2>
              <p>
                BrosDev provides custom digital product engineering, cloud infrastructure orchestration, and AI software development under agile 2-week sprint agreements.
              </p>
              <h2 className="text-2xl font-black uppercase text-slate-900 pt-4">2. Intellectual Property</h2>
              <p>
                Upon final settlement of project invoices, all custom source code, documentation, and digital assets produced by BrosDev shall be transferred exclusively to the client.
              </p>
            </div>
          </div>
        </section>

        <Footer />
        <CallBookingModal isOpen={isCallModalOpen} onClose={() => setIsCallModalOpen(false)} />
      </main>
    </TranslationProvider>
  );
}
