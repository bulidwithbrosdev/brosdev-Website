import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { TranslationProvider } from "@/context/TranslationContext";
import { CASE_STUDIES_DATA } from "@/data/caseStudiesData";
import {
  Building2,
  CheckCircle2,
  ArrowLeft,
  ArrowRight,
  TrendingUp,
  Cpu,
  Layers,
  ShieldCheck,
  Quote
} from "lucide-react";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const resolvedParams = await params;
  const cs = CASE_STUDIES_DATA[resolvedParams.slug];

  if (!cs) {
    return { title: "Case Study Not Found | BrosDev Solutions" };
  }

  return {
    title: `${cs.title} | BrosDev Solutions Case Study`,
    description: cs.summary,
    openGraph: {
      title: `${cs.title} | BrosDev Solutions Case Study`,
      description: cs.summary,
    },
  };
}

export default async function CaseStudyDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const resolvedParams = await params;
  const locale = resolvedParams?.locale || "en";
  const cs = CASE_STUDIES_DATA[resolvedParams.slug];

  if (!cs) {
    notFound();
  }

  return (
    <TranslationProvider defaultLocale={locale}>
      <main className="min-h-screen bg-[#FAF8F5] text-slate-900 selection:bg-[#A90706] selection:text-white font-sans antialiased">
        <Navbar />

        {/* Header Banner */}
        <section className="pt-36 pb-20 border-b border-[#E2DDD5] bg-[#FAF8F5]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link
              href={`/${locale}/case-studies`}
              className="inline-flex items-center gap-2 text-xs font-condensed font-bold uppercase tracking-widest text-[#A90706] mb-6 hover:underline"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>BACK TO CASE STUDIES</span>
            </Link>

            <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
              <span className="font-condensed text-xs font-black px-3 py-1 bg-[#A90706] text-white uppercase tracking-widest">
                {cs.badge}
              </span>
              <div className="flex items-center gap-2 text-slate-600 font-condensed text-xs font-bold uppercase">
                <Building2 className="w-4 h-4 text-[#A90706]" />
                <span>CLIENT: {cs.client}</span>
              </div>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-tight uppercase mb-6 font-[var(--font-geist)]">
              {cs.title}
            </h1>

            <p className="text-slate-700 text-lg sm:text-xl font-medium max-w-3xl leading-relaxed font-[var(--font-geist)]">
              {cs.summary}
            </p>
          </div>
        </section>

        {/* Client & Industry Overview */}
        <section className="py-12 bg-slate-900 text-white border-b border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-condensed uppercase">
              <div className="p-4 bg-slate-800 border border-slate-700">
                <span className="text-xs text-slate-400 block mb-1">CLIENT ORGANIZATION</span>
                <span className="text-lg font-black text-white">{cs.client}</span>
              </div>
              <div className="p-4 bg-slate-800 border border-slate-700">
                <span className="text-xs text-slate-400 block mb-1">INDUSTRY DOMAIN</span>
                <span className="text-lg font-black text-[#A90706]">{cs.industry}</span>
              </div>
            </div>
          </div>
        </section>

        {/* Measurable Results / Key Metrics */}
        <section className="py-16 bg-white border-b border-[#E2DDD5]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <div className="border-b-2 border-slate-900 pb-3">
              <span className="font-condensed text-xs font-black text-[#A90706] uppercase tracking-widest block mb-1">
                // MEASURABLE RESULTS
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 uppercase font-[var(--font-geist)]">
                KEY PERFORMANCE &amp; ROI METRICS
              </h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 font-condensed">
              {cs.metrics.map((m, idx) => (
                <div key={idx} className="p-6 bg-[#FAF8F5] border-2 border-slate-900 space-y-2 shadow-md">
                  <span className="text-3xl sm:text-4xl font-black text-[#A90706] block font-[var(--font-geist)]">
                    {m.value}
                  </span>
                  <span className="text-xs font-black text-slate-900 uppercase block">
                    {m.label}
                  </span>
                  <span className="text-[11px] text-slate-600 uppercase block">
                    {m.desc}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Problem vs Approach Detailed Breakdown */}
        <section className="py-20 bg-[#FAF8F5] border-b border-[#E2DDD5]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            
            {/* Problem */}
            <div className="bg-white border-2 border-slate-900 p-8 sm:p-10 space-y-4 shadow-lg">
              <span className="font-condensed text-xs font-black text-[#A90706] uppercase tracking-widest block">
                // THE CHALLENGE &amp; PROBLEM STATEMENT
              </span>
              <h3 className="text-2xl font-black text-slate-900 uppercase font-[var(--font-geist)]">
                BUSINESS &amp; TECHNICAL BOTTLENECKS
              </h3>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                {cs.problem}
              </p>
            </div>

            {/* Approach */}
            <div className="bg-white border-2 border-slate-900 p-8 sm:p-10 space-y-4 shadow-lg">
              <span className="font-condensed text-xs font-black text-slate-900 uppercase tracking-widest block">
                // THE BROSDEV SOLUTIONS APPROACH &amp; ARCHITECTURE
              </span>
              <h3 className="text-2xl font-black text-slate-900 uppercase font-[var(--font-geist)]">
                ENGINEERING SOLUTION &amp; SYSTEM DESIGN
              </h3>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-4">
                {cs.solution}
              </p>
              <div className="p-4 bg-[#FAF8F5] border border-[#E2DDD5] text-xs sm:text-sm text-slate-800 font-mono">
                <span className="font-bold text-[#A90706] block mb-1 font-sans">ARCHITECTURE SPECIFICATION:</span>
                {cs.architectureDetails}
              </div>
            </div>

            {/* Tech Stack */}
            <div className="bg-white border-2 border-slate-900 p-8 space-y-4 shadow-lg">
              <span className="font-condensed text-xs font-black text-slate-500 uppercase tracking-widest block">
                // TECHNOLOGIES &amp; TOOLS UTILIZED
              </span>
              <div className="flex flex-wrap gap-3">
                {cs.techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-4 py-2 bg-[#FAF8F5] border-2 border-slate-900 font-condensed text-xs font-black text-slate-900 uppercase tracking-wider shadow-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Client Quote */}
            <div className="bg-slate-900 text-white p-8 sm:p-10 border-l-8 border-[#A90706] shadow-xl space-y-3">
              <p className="text-base sm:text-lg italic leading-relaxed text-slate-200">
                &quot;{cs.quote}&quot;
              </p>
              <span className="font-condensed text-xs font-black text-[#A90706] uppercase tracking-wider block">
                — {cs.author}
              </span>
            </div>

          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-white border-b border-[#E2DDD5]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 uppercase tracking-tight font-[var(--font-geist)]">
              WANT SIMILAR RESULTS FOR YOUR ENGINEERING ROADMAP?
            </h2>
            <div className="pt-2">
              <Link
                href={`/${locale}/book-consultation`}
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#A90706] hover:bg-[#880504] text-white font-condensed text-xs font-bold uppercase tracking-widest transition-colors"
              >
                <span>SCHEDULE TECHNICAL DISCOVERY</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </TranslationProvider>
  );
}
