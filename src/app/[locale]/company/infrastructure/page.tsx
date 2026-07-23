import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { TranslationProvider } from "@/context/TranslationContext";
import { 
  Server, 
  Cloud, 
  Database, 
  Lock, 
  ShieldCheck, 
  HardDrive, 
  Cpu, 
  Network, 
  Globe, 
  CheckCircle2, 
  Zap, 
  Activity 
} from "lucide-react";

export const metadata: Metadata = {
  title: "Brosdev | Dedicated UK Servers & Bank-Grade Infrastructure",
  description:
    "Explore BrosDev UK private server cluster, bank-level security, high-throughput vector databases, and 99.99% uptime cloud architecture.",
  openGraph: {
    title: "Brosdev | Dedicated UK Servers & Bank-Grade Infrastructure",
    description:
      "Explore BrosDev UK private server cluster, bank-level security, high-throughput vector databases, and 99.99% uptime cloud architecture.",
  },
};

export default async function LocaleInfrastructurePage({ params }: { params: Promise<{ locale: string }> }) {
  const resolvedParams = await params;
  const locale = resolvedParams?.locale || "en";

  const serverSpecs = [
    {
      title: "PROPRIETARY UK PRIVATE SERVERS",
      tag: "// LONDON DATA CENTER HUB",
      desc: "Our own dedicated bare-metal server cluster hosted in London, UK (Tier-4 facility). Provides isolated high-memory hardware with sub-10ms European latency and dedicated IP space.",
      icon: Server,
    },
    {
      title: "BANK-LEVEL CYBERSECURITY",
      tag: "// AES-256 & ZERO-TRUST",
      desc: "Architected with financial institution security standards. End-to-end TLS 1.3 encryption, hardware security modules (HSM), automated intrusion prevention, and 24/7 SIEM monitoring.",
      icon: Lock,
    },
    {
      title: "KUBERNETES HIGH-AVAILABILITY",
      tag: "// AUTO-SCALING CLUSTERS",
      desc: "Containerized microservices running on auto-scaling Kubernetes nodes (EKS/GKE). Automatically absorbs traffic spikes up to 10M requests/min with zero downtime.",
      icon: Cpu,
    },
    {
      title: "HIGH-THROUGHPUT VECTOR & SQL DATABASES",
      tag: "// IN-MEMORY CACHING & Pinecone",
      desc: "Optimized PostgreSQL, Redis enterprise clusters, and Pinecone vector indexing for enterprise LLMs & AI document search workflows.",
      icon: Database,
    },
  ];

  const securityFeatures = [
    { title: "Bank-Grade Encryption", desc: "AES-256 at-rest database encryption & TLS 1.3 in-transit protocol." },
    { title: "Dedicated UK Node Isolation", desc: "Private hardware tenant allocation in London, UK datacenter." },
    { title: "Biometric & Physical Security", desc: "Tier-4 datacenter with 24/7 armed guards & biometric access controls." },
    { title: "Multi-Region DDoS Protection", desc: "Cloudflare Magic Transit DDoS mitigation handling 100+ Gbps attacks." },
    { title: "Automated Daily Backups", desc: "Point-in-time database recovery with geo-redundant storage in EU & US." },
    { title: "Compliance Ready", desc: "Full audit trails satisfying ISO 27001, SOC 2 Type II, HIPAA, & GDPR." },
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
                // UK SERVERS &amp; BANK-GRADE SECURITY
              </span>
            </div>

            <h1 className="text-5xl sm:text-7xl font-black text-slate-900 tracking-tight leading-none uppercase mb-8 font-[var(--font-geist)]">
              OUR INFRASTRUCTURE
            </h1>

            <p className="text-slate-700 text-lg sm:text-xl font-medium max-w-3xl leading-relaxed">
              Proprietary bare-metal UK server cluster combined with multi-region cloud architecture, bank-level security protocols, and microsecond data throughput.
            </p>
          </div>
        </section>

        {/* UK Server Highlight Banner */}
        <section className="py-16 border-b border-[#E2DDD5] bg-slate-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#A90706] text-white font-condensed text-xs font-black uppercase tracking-widest">
                  <Server className="w-4 h-4" />
                  <span>LOCATION: LONDON, UNITED KINGDOM</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-white font-[var(--font-geist)]">
                  Dedicated Private UK Server Nodes
                </h2>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-normal">
                  Unlike agencies relying purely on shared public cloud instances, BrosDev operates its own high-frequency bare-metal servers located in London, UK. This grants our enterprise clients dedicated hardware isolation, zero noisy-neighbor degradation, and bank-grade data sovereignty.
                </p>
              </div>

              <div className="lg:col-span-4 bg-slate-800 border-2 border-slate-700 p-6 space-y-3 font-condensed font-bold text-xs uppercase">
                <div className="flex items-center justify-between border-b border-slate-700 pb-2">
                  <span className="text-slate-400">UK SERVER LATENCY:</span>
                  <span className="text-emerald-400">&lt; 8 ms</span>
                </div>
                <div className="flex items-center justify-between border-b border-slate-700 pb-2">
                  <span className="text-slate-400">SECURITY STANDARD:</span>
                  <span className="text-[#A90706]">BANK LEVEL (AES-256)</span>
                </div>
                <div className="flex items-center justify-between border-b border-slate-700 pb-2">
                  <span className="text-slate-400">UPTIME GUARANTEE:</span>
                  <span className="text-white">99.99% SLA</span>
                </div>
                <div className="flex items-center justify-between pt-1">
                  <span className="text-slate-400">FACILITY TIER:</span>
                  <span className="text-amber-400">TIER-4 DATACENTER</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Infrastructure Specifications Grid */}
        <section className="py-24 border-b border-[#E2DDD5] bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="font-condensed text-xs font-black text-[#A90706] uppercase tracking-widest block mb-2">
                // HARDWARE &amp; NETWORK ARCHITECTURE
              </span>
              <h2 className="text-3xl sm:text-5xl font-black text-slate-900 uppercase tracking-tight font-[var(--font-geist)]">
                ENTERPRISE TECH STACK
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-2 border-slate-900 divide-y md:divide-y-0 md:divide-x divide-slate-900 shadow-xl">
              {serverSpecs.map((spec, i) => {
                const Icon = spec.icon;
                return (
                  <div key={i} className="p-8 hover:bg-[#FAF8F5] transition-colors flex flex-col justify-between">
                    <div>
                      <div className="w-14 h-14 bg-slate-900 text-white border border-slate-900 flex items-center justify-center mb-6 shadow-md">
                        <Icon className="w-7 h-7 text-[#A90706]" />
                      </div>
                      <span className="font-condensed text-[10px] font-black text-[#A90706] uppercase tracking-widest block mb-1">
                        {spec.tag}
                      </span>
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

        {/* Bank-Level Security Breakdown */}
        <section className="py-24 border-b border-[#E2DDD5] bg-[#FAF8F5]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-5 space-y-6">
                <span className="font-condensed text-xs font-black text-[#A90706] uppercase tracking-widest block">
                  // ZERO-TRUST DEFENSE
                </span>
                <h2 className="text-3xl sm:text-4xl font-black text-slate-900 uppercase tracking-tight leading-tight font-[var(--font-geist)]">
                  BANK-LEVEL SECURITY FOR EVERY PROJECT
                </h2>
                <p className="text-slate-700 text-base leading-relaxed font-normal">
                  We enforce bank-grade security protocols on every web application, API, and cloud deployment. From financial transactions to HIPAA medical records, your data is shielded by multi-layered encryption.
                </p>
              </div>

              <div className="lg:col-span-7">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {securityFeatures.map((sec, idx) => (
                    <div key={idx} className="bg-white border-2 border-slate-900 p-6 shadow-md space-y-2">
                      <div className="flex items-center gap-2">
                        <ShieldCheck className="w-5 h-5 text-[#A90706] shrink-0" />
                        <h4 className="font-condensed text-sm font-black text-slate-900 uppercase tracking-wider">
                          {sec.title}
                        </h4>
                      </div>
                      <p className="text-xs text-slate-600 font-normal leading-relaxed">
                        {sec.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </TranslationProvider>
  );
}
