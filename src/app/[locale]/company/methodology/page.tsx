import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhyUsSection from "@/components/WhyUsSection";
import { TranslationProvider } from "@/context/TranslationContext";

export const metadata: Metadata = {
  title: "Brosdev | Development Methodology & Agile Process",
  description:
    "Discover BrosDev 4-step agile engineering pipeline: Discovery & Architecture, 2-Week Sprints, CI/CD Automated Testing, and 24/7 Production Deployment.",
  openGraph: {
    title: "Brosdev | Development Methodology & Agile Process",
    description:
      "Discover BrosDev 4-step agile engineering pipeline: Discovery & Architecture, 2-Week Sprints, CI/CD Automated Testing, and 24/7 Production Deployment.",
  },
};

export default async function LocaleMethodologyPage({ params }: { params: Promise<{ locale: string }> }) {
  const resolvedParams = await params;
  const locale = resolvedParams?.locale || "en";

  return (
    <TranslationProvider defaultLocale={locale}>
      <main className="min-h-screen bg-[#FAF8F5] text-slate-900 selection:bg-[#A90706] selection:text-white font-sans antialiased">
        <Navbar />

        {/* Header Banner */}
        <section className="pt-36 pb-12 border-b border-[#E2DDD5] bg-[#FAF8F5]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-[#E2DDD5] mb-6">
              <span className="w-2 h-2 bg-[#A90706]"></span>
              <span className="font-condensed text-xs font-black tracking-widest text-[#A90706] uppercase">
                // AGILE PIPELINE
              </span>
            </div>

            <h1 className="text-5xl sm:text-7xl font-black text-slate-900 tracking-tight leading-none uppercase mb-8 font-[var(--font-geist)]">
              DEVELOPMENT METHODOLOGY
            </h1>

            <p className="text-slate-700 text-lg sm:text-xl font-medium max-w-3xl leading-relaxed">
              Seamless agile 2-week sprint workflows with continuous integration, automated builds, bi-weekly live staging demos, and bank-grade security audits.
            </p>
          </div>
        </section>

        {/* Interactive Methodology Section */}
        <WhyUsSection />

        <Footer />
      </main>
    </TranslationProvider>
  );
}
