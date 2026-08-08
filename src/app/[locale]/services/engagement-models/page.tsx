import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { TranslationProvider } from "@/context/TranslationContext";
import {
  Layers,
  Users,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Zap,
  Clock,
  Briefcase,
  FileCheck,
  Headphones
} from "lucide-react";

export const metadata: Metadata = {
  title: "Brosdev | Engagement Models — Flexible Engineering Collaboration",
  description:
    "Explore BrosDev flexible engagement models: Full Project Delivery, Embedded Dedicated Team Extension, and Enterprise Retainer & SLA Support.",
  openGraph: {
    title: "Brosdev | Engagement Models — Flexible Engineering Collaboration",
    description:
      "Explore BrosDev flexible engagement models: Full Project Delivery, Embedded Dedicated Team Extension, and Enterprise Retainer & SLA Support.",
  },
};

export default async function EngagementModelsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const resolvedParams = await params;
  const locale = resolvedParams?.locale || "en";

  const models = [
    {
      id: "full-project-delivery",
      title: "Full Project Delivery",
      tagline: "End-to-End Product Ownership & Fixed Deliverables",
      icon: Briefcase,
      badge: "MILESTONE-BASED",
      description:
        "Ideal for companies seeking turn-key product engineering. BrosDev assumes complete ownership from discovery and UI/UX design to cloud architecture, build, automated testing, and launch.",
      highlights: [
        "100% Fixed Scope & Budget Certainty",
        "Dedicated Product Manager & Principal Architect",
        "Weekly Demo Milestones & Sprint Audits",
        "Full Source Code & IP Transfer Upon Completion"
      ],
      bestFor: "Startups building MVPs, enterprises building new digital products, or refactoring complete legacy systems."
    },
    {
      id: "dedicated-team-extension",
      title: "Dedicated Team Extension",
      tagline: "Embedded Senior Engineers Seamlessly Integrated into Your Workflow",
      icon: Users,
      badge: "EMBEDDED SQUAD",
      description:
        "Reframed from traditional staffing: absorb senior, pre-vetted engineers directly into your engineering organization. Developers participate in your daily standups, use your tools, and write code to your standards.",
      highlights: [
        "Direct Slack / Teams Integration & Standups",
        "100% Timezone Overlap (US, UK, EU, ASIA)",
        "Zero Overhead: HR, Equipment & Admin Handled",
        "48-Hour Developer Swap SLA if Needs Change"
      ],
      bestFor: "Engineering leaders needing fast access to senior Next.js, Cloud, Mobile, or AI engineers to accelerate roadmap execution."
    },
    {
      id: "enterprise-retainer-sla",
      title: "Enterprise Retainer & SLA Support",
      tagline: "24/7 Managed Infrastructure, Security Maintenance & SLA Guarantees",
      icon: Headphones,
      badge: "ONGOING SUPPORT",
      description:
        "For mission-critical production platforms. Includes dedicated monthly engineering hours, 24/7 monitoring, security patching, sub-1-hour critical response SLAs, and continuous performance tuning.",
      highlights: [
        "Sub-1-Hour Critical Severity Incident Response",
        "Continuous Security Patching & SOC-2 Audit Support",
        "Monthly Infrastructure Cost Optimization",
        "Dedicated Technical Account Director"
      ],
      bestFor: "High-concurrency platforms, fintech/healthtech platforms, and enterprise applications requiring 99.99% uptime guarantees."
    }
  ];

  return (
    <TranslationProvider defaultLocale={locale}>
      <main className="min-h-screen bg-[#FAF8F5] text-slate-900 selection:bg-[#A90706] selection:text-white font-sans antialiased">
        <Navbar />

        {/* Hero Header */}
        <section className="pt-36 pb-20 border-b border-[#E2DDD5] bg-[#FAF8F5]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-[#E2DDD5] mb-6">
              <span className="w-2 h-2 bg-[#A90706]"></span>
              <span className="font-condensed text-xs font-black tracking-widest text-[#A90706] uppercase">
                // FLEXIBLE COLLABORATION FRAMEWORKS
              </span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-slate-900 tracking-tight leading-none uppercase mb-6 font-[var(--font-geist)]">
              ENGAGEMENT MODELS
            </h1>

            <p className="text-slate-700 text-lg sm:text-xl font-medium max-w-3xl leading-relaxed font-[var(--font-geist)]">
              Whether you need full turn-key project execution, embedded senior engineering talent, or 24/7 enterprise SLA coverage — we align with your operational model.
            </p>
          </div>
        </section>

        {/* Engagement Models Cards */}
        <section className="py-20 bg-white border-b border-[#E2DDD5]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
            {models.map((m) => {
              const Icon = m.icon;
              return (
                <div
                  key={m.id}
                  id={m.id}
                  className="bg-[#FAF8F5] border-2 border-slate-900 p-8 sm:p-12 shadow-xl space-y-8 relative overflow-hidden"
                >
                  <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#E2DDD5] pb-4">
                    <span className="font-condensed text-xs font-black px-3 py-1 bg-[#A90706] text-white uppercase tracking-widest">
                      {m.badge}
                    </span>
                    <div className="flex items-center gap-2 text-slate-900 font-condensed text-xs font-bold uppercase">
                      <Icon className="w-5 h-5 text-[#A90706]" />
                      <span>{m.title}</span>
                    </div>
                  </div>

                  <div>
                    <h2 className="text-3xl sm:text-4xl font-black text-slate-900 uppercase tracking-tight font-[var(--font-geist)] mb-3">
                      {m.title}
                    </h2>
                    <p className="text-slate-600 font-condensed font-bold uppercase text-sm tracking-wider mb-4">
                      {m.tagline}
                    </p>
                    <p className="text-slate-700 text-base leading-relaxed max-w-4xl">
                      {m.description}
                    </p>
                  </div>

                  {/* Highlights Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {m.highlights.map((h, hIdx) => (
                      <div key={hIdx} className="p-4 bg-white border border-[#E2DDD5] flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-[#A90706] shrink-0" />
                        <span className="font-condensed font-bold text-xs sm:text-sm uppercase text-slate-900">
                          {h}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Best For Box */}
                  <div className="p-5 bg-slate-900 text-white space-y-1 border-l-4 border-[#A90706]">
                    <span className="font-condensed text-[11px] font-black text-[#A90706] uppercase tracking-widest block">
                      BEST FOR:
                    </span>
                    <p className="text-xs sm:text-sm text-slate-300 font-normal">
                      {m.bestFor}
                    </p>
                  </div>

                  <div className="pt-2 flex flex-wrap gap-4">
                    <Link
                      href={`/${locale}/book-consultation`}
                      className="px-6 py-3 bg-[#A90706] hover:bg-[#880504] text-white font-condensed text-xs font-bold uppercase tracking-widest transition-colors flex items-center gap-2"
                    >
                      <span>DISCUSS THIS MODEL</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <Footer />
      </main>
    </TranslationProvider>
  );
}
