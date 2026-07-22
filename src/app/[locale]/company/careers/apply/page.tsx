import type { Metadata } from "next";
import { Suspense } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ApplyFormContent from "@/components/ApplyFormContent";
import { TranslationProvider } from "@/context/TranslationContext";

export const metadata: Metadata = {
  title: "Brosdev | Apply for Open Engineering Roles",
  description:
    "Submit your job application for engineering, design, AI development, and full-stack positions at BrosDev.",
  openGraph: {
    title: "Brosdev | Apply for Open Engineering Roles",
    description:
      "Submit your job application for engineering, design, AI development, and full-stack positions at BrosDev.",
  },
};

export default async function LocaleJobApplyPage({ params }: { params: Promise<{ locale: string }> }) {
  const resolvedParams = await params;
  const locale = resolvedParams?.locale || "en";

  return (
    <TranslationProvider defaultLocale={locale}>
      <main className="min-h-screen bg-[#FAF8F5] text-slate-900 selection:bg-[#A90706] selection:text-white font-sans antialiased">
        <Navbar />

        <section className="pt-36 pb-16 bg-[#FAF8F5]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Suspense fallback={
              <div className="p-12 text-center font-condensed font-bold text-slate-500 uppercase tracking-widest">
                LOADING APPLICATION FORM...
              </div>
            }>
              <ApplyFormContent locale={locale} />
            </Suspense>
          </div>
        </section>

        <Footer />
      </main>
    </TranslationProvider>
  );
}
