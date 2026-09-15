import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { TranslationProvider } from "@/context/TranslationContext";
import { Handshake, Calendar, CheckCircle2, ShieldCheck, Globe, Sparkles, Zap, Layers } from "lucide-react";

export const metadata: Metadata = {
  title: "BrosDev Solutions | Global Alliances & Partnerships",
  description:
    "Learn what Strategic Alliance means at BrosDev Solutions, establishment dates, AWS, Microsoft Cloud, Google Cloud, Vercel, and OpenAI partner ecosystems.",
  openGraph: {
    title: "BrosDev Solutions | Global Alliances & Partnerships",
    description:
      "Learn what Strategic Alliance means at BrosDev Solutions, establishment dates, AWS, Microsoft Cloud, Google Cloud, Vercel, and OpenAI partner ecosystems.",
  },
};

export default async function LocaleAlliancesPage({ params }: { params: Promise<{ locale: string }> }) {
  const resolvedParams = await params;
  const locale = resolvedParams?.locale || "en";

  const allianceDefinition = [
    {
      title: "CO-ENGINEERING & DIRECT LABS ACCESS",
      desc: "Our engineers work directly with core architecture teams at AWS, Google Cloud, and Vercel. We test upcoming beta features before public launch, ensuring your apps use cutting-edge capabilities.",
    },
    {
      title: "TIER-1 ENTERPRISE CREDITS & DISCOUNTING",
      desc: "Through our official partner status, BrosDev Solutions clients gain access to exclusive cloud architecture credits (up to $100k in AWS/GCP credits) and enterprise tier discounting.",
    },
    {
      title: "GUARANTEED 24/7 ESCALATION & SUPPORT",
      desc: "If cloud issues arise, our alliances grant us direct escalation paths to dedicated cloud partner engineers, resolving outages or bottlenecks in minutes.",
    },
  ];

  const partners = [
    { 
      name: "AWS PARTNER NETWORK", 
      established: "ESTABLISHED 2024",
      tier: "Advanced Tier Partner", 
      desc: "Formed in 2024 to co-build scalable cloud-native microservices, serverless AI pipelines, and Kubernetes clusters on AWS infrastructure.",
      benefits: ["Serverless Architecture Acceleration", "Up to $100K Cloud Credits", "AWS Security Audits Included"]
    },
    { 
      name: "MICROSOFT CLOUD PARTNER", 
      established: "ESTABLISHED 2024",
      tier: "Azure Solution Partner", 
      desc: "Formed in 2024 for enterprise cloud migrations, Azure Kubernetes Service (AKS), and Azure OpenAI enterprise integrations.",
      benefits: ["Azure OpenAI Model Fine-Tuning", "Enterprise AD Security Integration", "Hybrid Cloud Migration"]
    },
    { 
      name: "GOOGLE CLOUD PARTNER", 
      established: "ESTABLISHED 2025",
      tier: "Build Partner", 
      desc: "Formed in 2025 to leverage Google Cloud Run, GKE Kubernetes orchestration, and BigQuery high-volume data analytics for AI applications.",
      benefits: ["BigQuery LLM Analytics Pipeline", "GKE Autopilot Optimization", "Google Cloud AI Credits"]
    },
    { 
      name: "VERCEL ENTERPRISE PARTNER", 
      established: "ESTABLISHED 2025",
      tier: "Frontend Cloud Partner", 
      desc: "Formed in 2025 for sub-second Next.js edge deployments, serverless rendering, and global CDN performance optimization.",
      benefits: ["Next.js Edge Function Scaling", "Global Edge Cache Acceleration", "Zero-Downtime Deployment"]
    },
    { 
      name: "OPENAI & ANTHROPIC ECOSYSTEM", 
      established: "ESTABLISHED 2026",
      tier: "Enterprise AI Alliance", 
      desc: "Formed in 2026 to deploy autonomous LLM agents, RAG document search pipelines, and enterprise-grade AI assistant workflows.",
      benefits: ["GPT-4o & Claude 3.5 Sonnet Integration", "Private Fine-Tuned Models", "Strict Data Privacy Protection"]
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
                // STRATEGIC PARTNERSHIPS &amp; ECOSYSTEM
              </span>
            </div>

            <h1 className="text-5xl sm:text-7xl font-black text-slate-900 tracking-tight leading-none uppercase mb-8 font-[var(--font-geist)]">
              GLOBAL ALLIANCES
            </h1>

            <p className="text-slate-700 text-lg sm:text-xl font-medium max-w-3xl leading-relaxed">
              Co-engineering high-performance digital products alongside global cloud hyperscalers, AI laboratories, and edge network leaders.
            </p>
          </div>
        </section>

        {/* What Strategic Alliance Means Section */}
        <section className="py-20 border-b border-[#E2DDD5] bg-slate-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#A90706] text-white font-condensed text-xs font-black uppercase tracking-widest mb-3">
                <Handshake className="w-4 h-4" />
                <span>WHAT ALLIANCE MEANS AT BROSDEV SOLUTIONS</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white font-[var(--font-geist)]">
                VALUE TO OUR CLIENTS
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {allianceDefinition.map((item, idx) => (
                <div key={idx} className="bg-slate-800 border-2 border-slate-700 p-8 space-y-4 shadow-xl">
                  <div className="w-12 h-12 bg-[#A90706] text-white flex items-center justify-center font-condensed text-xl font-black">
                    0{idx + 1}
                  </div>
                  <h3 className="font-condensed text-xl font-black text-white uppercase tracking-tight font-[var(--font-geist)]">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partners & Established Dates Grid */}
        <section className="py-24 border-b border-[#E2DDD5] bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="font-condensed text-xs font-black text-[#A90706] uppercase tracking-widest block mb-2">
                // ACTIVE ALLIANCES &amp; TIMELINE
              </span>
              <h2 className="text-3xl sm:text-5xl font-black text-slate-900 uppercase tracking-tight font-[var(--font-geist)]">
                OUR GLOBAL PARTNERS
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {partners.map((p, i) => (
                <div key={i} className="p-8 border-2 border-slate-900 bg-[#FAF8F5] shadow-lg flex flex-col justify-between space-y-6">
                  <div>
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                      <span className="font-condensed text-xs font-black text-[#A90706] uppercase tracking-widest">
                        {p.tier}
                      </span>
                      <span className="font-condensed text-xs font-black px-2.5 py-1 bg-slate-900 text-white uppercase tracking-wider">
                        {p.established}
                      </span>
                    </div>

                    <h3 className="font-condensed text-2xl font-black text-slate-900 uppercase tracking-tight mb-3 font-[var(--font-geist)]">
                      {p.name}
                    </h3>

                    <p className="text-xs text-slate-700 font-normal leading-relaxed mb-6">
                      {p.desc}
                    </p>

                    <div className="space-y-2 border-t border-[#E2DDD5] pt-4">
                      <span className="font-condensed text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-2">
                        CLIENT BENEFITS:
                      </span>
                      {p.benefits.map((ben, bIdx) => (
                        <div key={bIdx} className="flex items-center gap-2 text-xs font-condensed font-bold uppercase text-slate-900">
                          <CheckCircle2 className="w-4 h-4 text-[#A90706] shrink-0" />
                          <span>{ben}</span>
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
