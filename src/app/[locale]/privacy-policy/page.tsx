"use client";

import { use, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CallBookingModal from "@/components/CallBookingModal";
import { TranslationProvider } from "@/context/TranslationContext";

export default function LocalePrivacyPage({ params }: { params: Promise<{ locale: string }> }) {
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
              PRIVACY POLICY
            </h1>
            <div className="prose prose-slate max-w-none space-y-6 text-slate-700 font-medium">
              <p>
                BrosDev is committed to protecting the privacy and security of our clients, partners, and platform visitors.
              </p>
              <h2 className="text-2xl font-black uppercase text-slate-900 pt-4">1. Data Collection & ISO Compliance</h2>
              <p>
                We process minimal technical analytics and inquiry information in compliance with ISO 27001, GDPR, and global data protection regulations.
              </p>
              <h2 className="text-2xl font-black uppercase text-slate-900 pt-4">2. Zero Data Selling</h2>
              <p>
                BrosDev never sells, leases, or trades client data or proprietary code bases to third-party advertisers.
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
