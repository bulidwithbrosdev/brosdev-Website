import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { TranslationProvider } from "@/context/TranslationContext";
import { Handshake } from "lucide-react";

export const metadata: Metadata = {
  title: "Brosdev | Strategic Technology Alliances",
  description:
    "Explore BrosDev global technology alliances with AWS, Microsoft Cloud, Google Cloud, and Vercel for enterprise digital transformation.",
  openGraph: {
    title: "Brosdev | Strategic Technology Alliances",
    description:
      "Explore BrosDev global technology alliances with AWS, Microsoft Cloud, Google Cloud, and Vercel for enterprise digital transformation.",
  },
};

export default async function LocaleAlliancesPage({ params }: { params: Promise<{ locale: string }> }) {
  const resolvedParams = await params;
  const locale = resolvedParams?.locale || "en";

  const partners = [
    { name: "AWS Partner Network", tier: "Advanced Tier Partner", desc: "Co-building cloud native microservices and serverless AI applications." },
    { name: "Microsoft Cloud Partner", tier: "Azure Solution Partner", desc: "Enterprise cloud migrations, Azure Kubernetes, and OpenAI services." },
    { name: "Google Cloud Partner", tier: "Build Partner", desc: "Google Cloud Run, Kubernetes GKE, and BigQuery AI data pipelines." },
    { name: "Vercel Enterprise Partner", tier: "Frontend Cloud Partner", desc: "Next.js edge deployments, SSR acceleration, and global CDNs." },
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
                // STRATEGIC PARTNERSHIPS
              </span>
            </div>

            <h1 className="text-5xl sm:text-7xl font-black text-slate-900 tracking-tight leading-none uppercase mb-8 font-[var(--font-geist)]">
              GLOBAL ALLIANCES
            </h1>

            <p className="text-slate-700 text-lg sm:text-xl font-medium max-w-3xl leading-relaxed">
              Building strong strategic alliances with cloud providers, AI platforms, and technology leaders for superior software delivery.
            </p>
          </div>
        </section>

        {/* Partners Grid */}
        <section className="py-24 border-b border-[#E2DDD5] bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {partners.map((p, i) => (
                <div key={i} className="p-8 border-2 border-slate-900 bg-[#FAF8F5] shadow-lg flex items-start gap-5">
                  <div className="w-12 h-12 bg-slate-900 text-white flex items-center justify-center shrink-0">
                    <Handshake className="w-6 h-6 text-[#A90706]" />
                  </div>
                  <div>
                    <span className="font-condensed text-xs font-black text-[#A90706] uppercase tracking-widest block mb-1">
                      {p.tier}
                    </span>
                    <h3 className="font-condensed text-2xl font-black text-slate-900 uppercase tracking-tight mb-2 font-[var(--font-geist)]">
                      {p.name}
                    </h3>
                    <p className="text-xs text-slate-600 font-medium leading-relaxed">
                      {p.desc}
                    </p>
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
