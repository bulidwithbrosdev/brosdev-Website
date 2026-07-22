import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { TranslationProvider } from "@/context/TranslationContext";
import { CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Brosdev | About BrosDev Engineering",
  description:
    "Learn about BrosDev history, engineering philosophy, global hub locations, and high-performance product execution team.",
  openGraph: {
    title: "Brosdev | About BrosDev Engineering",
    description:
      "Learn about BrosDev history, engineering philosophy, global hub locations, and high-performance product execution team.",
  },
};

export default async function LocaleAboutUsPage({ params }: { params: Promise<{ locale: string }> }) {
  const resolvedParams = await params;
  const locale = resolvedParams?.locale || "en";

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
                // COMPANY OVERVIEW
              </span>
            </div>

            <h1 className="text-5xl sm:text-7xl font-black text-slate-900 tracking-tight leading-none uppercase mb-8 font-[var(--font-geist)]">
              ABOUT BROSDEV
            </h1>

            <p className="text-slate-700 text-lg sm:text-xl font-medium max-w-3xl leading-relaxed">
              Founded by engineers for ambitious founders and global enterprises. BrosDev combines bold aesthetic design with robust software craftsmanship to deliver high-performance web applications, mobile platforms, and AI systems.
            </p>
          </div>
        </section>

        {/* Key Stats Grid */}
        <section className="py-16 border-b border-[#E2DDD5] bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 border-2 border-slate-900 divide-x divide-y md:divide-y-0 divide-slate-900 shadow-lg">
              <div className="p-6 text-center">
                <div className="font-condensed text-4xl font-black text-[#A90706]">EST. 2024</div>
                <div className="font-condensed text-xs font-bold text-slate-500 uppercase tracking-widest mt-1">FOUNDED IN INDIA</div>
              </div>
              <div className="p-6 text-center">
                <div className="font-condensed text-4xl font-black text-slate-900">30+</div>
                <div className="font-condensed text-xs font-bold text-slate-500 uppercase tracking-widest mt-1">ENGINEERING EXPERTS</div>
              </div>
              <div className="p-6 text-center">
                <div className="font-condensed text-4xl font-black text-slate-900">100+</div>
                <div className="font-condensed text-xs font-bold text-slate-500 uppercase tracking-widest mt-1">PLATFORMS SHIPPED</div>
              </div>
              <div className="p-6 text-center">
                <div className="font-condensed text-4xl font-black text-[#A90706]">99.8%</div>
                <div className="font-condensed text-xs font-bold text-slate-500 uppercase tracking-widest mt-1">CLIENT SATISFACTION</div>
              </div>
            </div>
          </div>
        </section>

        {/* Story & Philosophy */}
        <section className="py-24 border-b border-[#E2DDD5] bg-[#FAF8F5]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              <div className="lg:col-span-6">
                <span className="font-condensed text-xs font-black text-[#A90706] uppercase tracking-widest block mb-4">
                  OUR ENGINEERING PHILOSOPHY
                </span>
                <h2 className="text-3xl sm:text-4xl font-black text-slate-900 uppercase tracking-tight leading-tight mb-6 font-[var(--font-geist)]">
                  Built for High-Growth Tech Companies
                </h2>
                <p className="text-slate-700 text-base leading-relaxed mb-6">
                  At BrosDev, we believe great software is not just about writing code—it is about designing resilient systems that scale effortlessly under high load while delighting users with intuitive UI/UX polish.
                </p>
                <p className="text-slate-700 text-base leading-relaxed">
                  We operate across global hubs (USA, Germany, France, Canada, UK, India), offering round-the-clock engineering execution for fast-growing startups and Fortune 500 enterprises.
                </p>
              </div>

              <div className="lg:col-span-6">
                <div className="border-2 border-slate-900 bg-white p-8 shadow-xl">
                  <h3 className="font-condensed text-xl font-black text-slate-900 uppercase tracking-wide mb-6 border-b border-[#E2DDD5] pb-3">
                    CORE CAPABILITIES
                  </h3>
                  <div className="space-y-4">
                    {[
                      "Full-Stack Web & Next.js Applications",
                      "Native iOS & Android Mobile Development",
                      "Custom LLM & Autonomous AI Agents",
                      "Kubernetes Microservices & AWS Cloud",
                      "Bank-Grade Cybersecurity & ISO Compliance",
                      "24/7 Guaranteed SLA Maintenance",
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-[#A90706] shrink-0" />
                        <span className="font-condensed text-sm font-bold text-slate-900 uppercase tracking-wide">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
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
