import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { TranslationProvider } from "@/context/TranslationContext";
import { 
  Globe, 
  MapPin, 
  Cloud, 
  Database, 
  Lock, 
  ShieldCheck, 
  Cpu, 
  Network, 
  CheckCircle2, 
  Zap, 
  Building2,
  Server
} from "lucide-react";

export const metadata: Metadata = {
  title: "Brosdev | Global Cloud Infrastructure & Multi-Region Presence",
  description:
    "Explore BrosDev engineering hubs in India and Canada, serving enterprise clients across AU, UK, NZ, CA, US, DE, FR & NY.",
  openGraph: {
    title: "Brosdev | Global Cloud Infrastructure & Multi-Region Presence",
    description:
      "Explore BrosDev engineering hubs in India and Canada, serving enterprise clients across AU, UK, NZ, CA, US, DE, FR & NY.",
  },
};

export default async function LocaleInfrastructurePage({ params }: { params: Promise<{ locale: string }> }) {
  const resolvedParams = await params;
  const locale = resolvedParams?.locale || "en";

  const physicalHubs = [
    {
      country: "INDIA",
      flag: "🇮🇳",
      city: "GIFT City / Ahmedabad",
      tag: "// HEADQUARTERS & DEEP R&D CAMPUS",
      desc: "Our primary engineering headquarters & botanical eco-campus. Houses principal software architects, enterprise AI research scientists, and system design pods.",
    },
    {
      country: "CANADA",
      flag: "🇨🇦",
      city: "Toronto / Vancouver Hub",
      tag: "// NORTH AMERICA OPERATIONS",
      desc: "Dedicated product delivery studio & client architecture center, ensuring seamless time-zone overlap and high-touch engineering leadership across North America.",
    },
  ];

  const globalMarkets = [
    { code: "AU", name: "Australia", desc: "Fintech & SaaS Platform Engineering" },
    { code: "UK", name: "United Kingdom", desc: "Enterprise Cloud & Microservices" },
    { code: "NZ", name: "New Zealand", desc: "Cloud Modernization & Automation" },
    { code: "CA", name: "Canada", desc: "AI Workflows & Mobile Development" },
    { code: "US", name: "United States", desc: "High-Concurrency Digital Engineering" },
    { code: "NY", name: "New York Hub", desc: "Financial Technology & Wall Street Systems" },
    { code: "DE", name: "Germany", desc: "Industrial Automation & Embedded Cloud" },
    { code: "FR", name: "France", desc: "E-Commerce & Digital Design Systems" },
  ];

  const cloudCapabilities = [
    {
      title: "MULTI-REGION CLOUD ORCHESTRATION",
      tag: "// AWS, GCP, AZURE & VERCEL",
      desc: "Cloud-native microservices engineered on AWS EKS, Google Cloud GKE, Microsoft Azure, and Vercel Edge networks for sub-10ms global API latency.",
      icon: Cloud,
    },
    {
      title: "ENTERPRISE-LEVEL CYBERSECURITY",
      tag: "// AES-256 & ZERO-TRUST",
      desc: "Architected with financial institution security standards. End-to-end TLS 1.3 encryption, hardware security modules (HSM), and 24/7 SIEM monitoring.",
      icon: Lock,
    },
    {
      title: "AUTO-SCALING CONTAINER NODES",
      tag: "// KUBERNETES HA CLUSTERS",
      desc: "Production Kubernetes infrastructure configured with horizontal pod auto-scalers, service meshes, and automated failover guarantees.",
      icon: Cpu,
    },
    {
      title: "HIGH-THROUGHPUT VECTOR & SQL DATABASES",
      tag: "// REDIS & PINECONE VECTOR INDEXING",
      desc: "Optimized PostgreSQL, Redis enterprise clusters, and Pinecone vector indexing for enterprise LLMs & AI document search workflows.",
      icon: Database,
    },
  ];

  const securityFeatures = [
    { title: "Enterprise-Grade Encryption", desc: "AES-256 at-rest database encryption & TLS 1.3 in-transit protocol." },
    { title: "Multi-Region Cloud Redundancy", desc: "Active-active failover clusters across US-East, US-West, EU, and APAC." },
    { title: "24/7 SIEM Threat Monitoring", desc: "Automated intrusion detection systems & continuous vulnerability auditing." },
    { title: "DDoS Mitigation & Edge CDN", desc: "Global Cloudflare Magic Transit handling 100+ Gbps attack vectors." },
    { title: "Automated Daily Backups", desc: "Point-in-time database recovery with geo-redundant storage snapshotting." },
    { title: "Compliance Certified Standards", desc: "Full audit trails satisfying ISO 27001, SOC 2 Type II, HIPAA, & GDPR." },
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
                // GLOBAL ENGINEERING FOOTPRINT &amp; CLOUD ARCHITECTURE
              </span>
            </div>

            <h1 className="text-5xl sm:text-7xl font-black text-slate-900 tracking-tight leading-none uppercase mb-8 font-[var(--font-geist)]">
              OUR INFRASTRUCTURE
            </h1>

            <p className="text-slate-700 text-lg sm:text-xl font-medium max-w-3xl leading-relaxed">
              Engineering hubs in India and Canada delivering high-throughput cloud platforms, enterprise AI, and zero-downtime microservices across global markets.
            </p>
          </div>
        </section>

        {/* Primary Physical Engineering Hubs */}
        <section className="py-16 border-b border-[#E2DDD5] bg-slate-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-slate-800 pb-6 gap-4">
              <div>
                <span className="font-condensed text-xs font-black text-[#A90706] uppercase tracking-widest block mb-1">
                  // DUAL CORE DEVELOPMENT STUDIOS
                </span>
                <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-white font-[var(--font-geist)]">
                  OUR PHYSICAL PRESENCE: INDIA &amp; CANADA
                </h2>
              </div>
              <span className="font-condensed text-xs text-slate-400 uppercase tracking-widest">
                24/7 CONTINUOUS DEVELOPMENT &amp; DEPLOYMENT
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {physicalHubs.map((hub, idx) => (
                <div key={idx} className="bg-slate-800 border-2 border-slate-700 p-8 space-y-4 shadow-xl">
                  <div className="flex items-center justify-between border-b border-slate-700 pb-4">
                    <div className="flex items-center gap-3">
                      <span className="text-3xl">{hub.flag}</span>
                      <h3 className="font-condensed text-2xl font-black text-white uppercase tracking-wide">
                        {hub.country}
                      </h3>
                    </div>
                    <span className="font-condensed text-xs text-slate-400 uppercase tracking-wider">
                      {hub.city}
                    </span>
                  </div>
                  <span className="font-condensed text-[11px] font-black text-[#A90706] uppercase tracking-widest block">
                    {hub.tag}
                  </span>
                  <p className="text-slate-300 text-xs sm:text-sm font-normal leading-relaxed">
                    {hub.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Global Serving Footprint Grid */}
        <section className="py-20 border-b border-[#E2DDD5] bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <div className="text-center max-w-3xl mx-auto space-y-2">
              <span className="font-condensed text-xs font-black text-[#A90706] uppercase tracking-widest block">
                // WORLDWIDE CLIENT COVERAGE
              </span>
              <h2 className="text-3xl sm:text-5xl font-black text-slate-900 uppercase tracking-tight font-[var(--font-geist)]">
                SERVING KEY GLOBAL MARKETS
              </h2>
              <p className="text-slate-600 text-sm sm:text-base">
                Delivering high-reliability software engineering for enterprise founders and scaleups across international financial and tech hubs.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {globalMarkets.map((m, idx) => (
                <div key={idx} className="p-6 bg-[#FAF8F5] border-2 border-slate-900 space-y-2 hover:border-[#A90706] transition-colors shadow-sm">
                  <div className="flex items-center justify-between">
                    <span className="font-condensed text-2xl font-black text-[#A90706] font-[var(--font-geist)]">
                      {m.code}
                    </span>
                    <Globe className="w-4 h-4 text-slate-400" />
                  </div>
                  <span className="font-condensed text-base font-black text-slate-900 uppercase block">
                    {m.name}
                  </span>
                  <span className="text-[11px] text-slate-600 uppercase block font-condensed">
                    {m.desc}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Core Infrastructure Specifications Grid */}
        <section className="py-24 border-b border-[#E2DDD5] bg-[#FAF8F5]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="font-condensed text-xs font-black text-[#A90706] uppercase tracking-widest block mb-2">
                // CLOUD NATIVE &amp; NETWORK CAPABILITIES
              </span>
              <h2 className="text-3xl sm:text-5xl font-black text-slate-900 uppercase tracking-tight font-[var(--font-geist)]">
                MULTI-CLOUD ARCHITECTURE
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-2 border-slate-900 divide-y md:divide-y-0 md:divide-x divide-slate-900 bg-white shadow-xl">
              {cloudCapabilities.map((spec, i) => {
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

        {/* Enterprise-Level Security Breakdown */}
        <section className="py-24 border-b border-[#E2DDD5] bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-5 space-y-6">
                <span className="font-condensed text-xs font-black text-[#A90706] uppercase tracking-widest block">
                  // ZERO-TRUST DEFENSE
                </span>
                <h2 className="text-3xl sm:text-4xl font-black text-slate-900 uppercase tracking-tight leading-tight font-[var(--font-geist)]">
                  ENTERPRISE-LEVEL SECURITY FOR EVERY PROJECT
                </h2>
                <p className="text-slate-700 text-base leading-relaxed font-normal">
                  We enforce enterprise-grade security protocols on every web application, API, and cloud deployment. From financial transactions to HIPAA medical records, your data is shielded by multi-layered encryption.
                </p>
              </div>

              <div className="lg:col-span-7">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {securityFeatures.map((sec, idx) => (
                    <div key={idx} className="bg-[#FAF8F5] border-2 border-slate-900 p-6 shadow-md space-y-2">
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
