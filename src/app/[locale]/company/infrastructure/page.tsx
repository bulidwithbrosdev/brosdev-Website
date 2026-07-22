import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { TranslationProvider } from "@/context/TranslationContext";
import { Server, Cloud, Database, Lock } from "lucide-react";

export const metadata: Metadata = {
  title: "Brosdev | Enterprise Cloud Infrastructure",
  description:
    "Explore BrosDev cloud native hosting, Kubernetes auto-scaling, high-throughput vector databases, and bank-grade encryption infrastructure.",
  openGraph: {
    title: "Brosdev | Enterprise Cloud Infrastructure",
    description:
      "Explore BrosDev cloud native hosting, Kubernetes auto-scaling, high-throughput vector databases, and bank-grade encryption infrastructure.",
  },
};

export default async function LocaleInfrastructurePage({ params }: { params: Promise<{ locale: string }> }) {
  const resolvedParams = await params;
  const locale = resolvedParams?.locale || "en";

  const infraSpecs = [
    {
      title: "Cloud Native Hosting & CDN",
      desc: "Multi-region deployment across AWS, Google Cloud, Microsoft Azure, and Vercel Edge networks.",
      icon: Cloud,
    },
    {
      title: "Kubernetes Auto-Scaling",
      desc: "Containerized microservices orchestrated via EKS/GKE with high-availability load balancing.",
      icon: Server,
    },
    {
      title: "High-Throughput Databases",
      desc: "PostgreSQL, Redis in-memory caching, and Pinecone vector databases for AI models.",
      icon: Database,
    },
    {
      title: "Bank-Grade Encryption",
      desc: "TLS 1.3 in-transit encryption, AES-256 at-rest storage, and zero-trust security foundations.",
      icon: Lock,
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
                // TECH CAPABILITIES
              </span>
            </div>

            <h1 className="text-5xl sm:text-7xl font-black text-slate-900 tracking-tight leading-none uppercase mb-8 font-[var(--font-geist)]">
              OUR INFRASTRUCTURE
            </h1>

            <p className="text-slate-700 text-lg sm:text-xl font-medium max-w-3xl leading-relaxed">
              Battle-tested, enterprise-grade cloud infrastructure engineered for 99.99% uptime, microsecond latency, and seamless global scaling.
            </p>
          </div>
        </section>

        {/* Specs Grid */}
        <section className="py-24 border-b border-[#E2DDD5] bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-2 border-slate-900 divide-y md:divide-y-0 md:divide-x divide-slate-900 shadow-xl">
              {infraSpecs.map((spec, i) => {
                const Icon = spec.icon;
                return (
                  <div key={i} className="p-8 hover:bg-[#FAF8F5] transition-colors flex flex-col justify-between">
                    <div>
                      <div className="w-12 h-12 bg-slate-900 text-white flex items-center justify-center mb-6">
                        <Icon className="w-6 h-6 text-[#A90706]" />
                      </div>
                      <h3 className="font-condensed text-xl font-black text-slate-900 uppercase tracking-tight mb-3 font-[var(--font-geist)]">
                        {spec.title}
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed font-normal">
                        {spec.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </TranslationProvider>
  );
}
