import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { TranslationProvider } from "@/context/TranslationContext";
import { 
  CheckCircle2, 
  Calendar, 
  HeartHandshake, 
  Trees, 
  Users, 
  Sparkles, 
  Award, 
  Globe2, 
  Milestone,
  ShieldCheck,
  Zap,
  Rocket
} from "lucide-react";

export const metadata: Metadata = {
  title: "Brosdev | About Us, History & Culture",
  description:
    "Discover BrosDev story, history timeline, green eco-campus, Festive Days = Family Days work culture, and engineering philosophy.",
  openGraph: {
    title: "Brosdev | About Us, History & Culture",
    description:
      "Discover BrosDev story, history timeline, green eco-campus, Festive Days = Family Days work culture, and engineering philosophy.",
  },
};

export default async function LocaleAboutUsPage({ params }: { params: Promise<{ locale: string }> }) {
  const resolvedParams = await params;
  const locale = resolvedParams?.locale || "en";

  const timelineMilestones = [
    {
      year: "2024 Q1",
      title: "FOUNDING & INCEPTION",
      desc: "BrosDev was established by veteran software architects with a mission to bridge high-end UI design with enterprise-grade cloud systems.",
      icon: Rocket,
    },
    {
      year: "2024 Q3",
      title: "ENTERPRISE AI DIVISION",
      desc: "Launched our dedicated Enterprise AI & Autonomous LLM Agent practice, serving high-growth SaaS founders across North America & Europe.",
      icon: Sparkles,
    },
    {
      year: "2025 Q1",
      title: "UK PRIVATE SERVER CLUSTER",
      desc: "Commissioned our proprietary Tier-4 high-security server infrastructure in London, UK, ensuring bank-level security for financial and health tech clients.",
      icon: ShieldCheck,
    },
    {
      year: "2025 Q4",
      title: "GREEN ECO-CAMPUS EXPANSION",
      desc: "Opened our flagship green eco-campus in GIFT City, providing our 30+ principal engineers with a natural, peaceful environment for deep focus.",
      icon: Trees,
    },
    {
      year: "2026 PRESENT",
      title: "GLOBAL ALLIANCES & 100+ SHIPPED",
      desc: "Achieved strategic partnerships with AWS, Google Cloud, Microsoft Azure, and Vercel, having delivered over 100+ digital platforms globally.",
      icon: Globe2,
    },
  ];

  const cultureValues = [
    {
      title: "FESTIVE DAYS = FAMILY DAYS",
      tag: "// WORK-LIFE BALANCE",
      desc: "We strictly uphold a policy where major festival days are dedicated entirely to family. All engineers receive mandatory paid festive leaves to celebrate cultural traditions with their loved ones, recharged and refreshed.",
      icon: HeartHandshake,
      color: "bg-red-50 text-[#A90706] border-red-200",
    },
    {
      title: "SUNLIT ECO-FRIENDLY CAMPUS",
      tag: "// NATURE-INSPIRED WORKSPACE",
      desc: "Our headquarters features open-air botanical spaces, energy-efficient solar architecture, and quiet green zones. We believe natural surroundings inspire calm problem-solving and break through creative blocks.",
      icon: Trees,
      color: "bg-emerald-50 text-emerald-800 border-emerald-200",
    },
    {
      title: "PEOPLE-FIRST & COMPASSIONATE",
      tag: "// TEAM WELLBEING",
      desc: "Zero toxic hustle, zero ego. We provide unlimited technical book allowances, mental wellness retreats, quarterly bonus sharing, and a collaborative environment where senior architects mentor junior team members.",
      icon: Users,
      color: "bg-blue-50 text-blue-900 border-blue-200",
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
                // COMPANY HISTORY &amp; CULTURE
              </span>
            </div>

            <h1 className="text-5xl sm:text-7xl font-black text-slate-900 tracking-tight leading-none uppercase mb-8 font-[var(--font-geist)]">
              ABOUT BROSDEV
            </h1>

            <p className="text-slate-700 text-lg sm:text-xl font-medium max-w-3xl leading-relaxed">
              Founded by engineers for ambitious founders and global enterprises. BrosDev combines bold aesthetic design with robust software craftsmanship, a green nature campus, and a deeply compassionate work culture.
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

        {/* Story & Inception */}
        <section className="py-24 border-b border-[#E2DDD5] bg-[#FAF8F5]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              <div className="lg:col-span-6 space-y-6">
                <span className="font-condensed text-xs font-black text-[#A90706] uppercase tracking-widest block">
                  // THE BROSDEV ORIGIN STORY
                </span>
                <h2 className="text-3xl sm:text-4xl font-black text-slate-900 uppercase tracking-tight leading-tight font-[var(--font-geist)]">
                  Engineering Beyond Boundaries
                </h2>
                <p className="text-slate-700 text-base leading-relaxed font-normal">
                  BrosDev started with a simple observation: most software agencies either deliver beautiful designs that break under heavy user traffic, or robust backends with confusing, outdated interfaces.
                </p>
                <p className="text-slate-700 text-base leading-relaxed font-normal">
                  Our founders set out to build an engineering firm where high-throughput architecture and pixel-perfect design live in total synergy. Operating across global hubs (USA, Germany, France, Canada, UK, and India), we provide 24/7 dedicated engineering teams for enterprise software.
                </p>
              </div>

              <div className="lg:col-span-6">
                <div className="border-2 border-slate-900 bg-white p-8 shadow-xl space-y-4">
                  <h3 className="font-condensed text-xl font-black text-slate-900 uppercase tracking-wide border-b border-[#E2DDD5] pb-3">
                    WHAT DRIVES OUR TEAM
                  </h3>
                  <div className="space-y-4">
                    {[
                      "Sub-Second Response Times Across All Digital Products",
                      "Bank-Level UK Server Security & Zero-Trust Architecture",
                      "AI-Integrated Workflows to Speed Up Development 3x",
                      "Dedicated Senior Engineers with Direct Client Access",
                      "Continuous Integration & Automated Test Pipelines",
                      "Compassionate People-First Workplace Culture",
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

        {/* Company History Timeline Graph */}
        <section className="py-24 border-b border-[#E2DDD5] bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="font-condensed text-xs font-black text-[#A90706] uppercase tracking-widest block mb-2">
                // CHRONOLOGICAL MILESTONES
              </span>
              <h2 className="text-3xl sm:text-5xl font-black text-slate-900 uppercase tracking-tight font-[var(--font-geist)]">
                OUR JOURNEY &amp; TIMELINE
              </h2>
            </div>

            {/* Visual Timeline Track */}
            <div className="relative border-l-2 border-slate-900 pl-6 sm:pl-10 space-y-12 ml-4 sm:ml-8">
              {timelineMilestones.map((m, idx) => {
                const Icon = m.icon;
                return (
                  <div key={idx} className="relative group">
                    {/* Timeline Node Point */}
                    <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-10 h-10 bg-slate-900 text-white rounded-full border-4 border-white flex items-center justify-center group-hover:bg-[#A90706] transition-colors shadow-md">
                      <Icon className="w-4 h-4 text-white" />
                    </div>

                    {/* Timeline Card */}
                    <div className="bg-[#FAF8F5] border-2 border-slate-900 p-6 sm:p-8 shadow-md hover:shadow-xl transition-all">
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <span className="font-condensed text-xs font-black px-3 py-1 bg-[#A90706] text-white uppercase tracking-widest">
                          {m.year}
                        </span>
                        <span className="font-condensed text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                          MILESTONE #{idx + 1}
                        </span>
                      </div>
                      <h3 className="font-condensed text-xl sm:text-2xl font-black text-slate-900 uppercase tracking-tight mb-2 font-[var(--font-geist)]">
                        {m.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                        {m.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Culture, Family Days & Campus Nature */}
        <section className="py-24 border-b border-[#E2DDD5] bg-[#FAF8F5]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="font-condensed text-xs font-black text-[#A90706] uppercase tracking-widest block mb-2">
                // LIFE AT BROSDEV
              </span>
              <h2 className="text-3xl sm:text-5xl font-black text-slate-900 uppercase tracking-tight font-[var(--font-geist)]">
                CULTURE, FAMILY &amp; NATURE CAMPUS
              </h2>
              <p className="text-slate-600 text-sm sm:text-base mt-4 font-normal">
                We foster an environment where software engineers thrive personally and professionally, grounded in strong values and green serenity.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {cultureValues.map((val, idx) => {
                const Icon = val.icon;
                return (
                  <div
                    key={idx}
                    className="bg-white border-2 border-slate-900 p-8 shadow-xl flex flex-col justify-between hover:translate-y-1 transition-transform"
                  >
                    <div>
                      <div className={`w-14 h-14 border flex items-center justify-center mb-6 ${val.color}`}>
                        <Icon className="w-7 h-7 shrink-0" />
                      </div>
                      <span className="font-condensed text-[10px] font-black text-[#A90706] uppercase tracking-widest block mb-1">
                        {val.tag}
                      </span>
                      <h3 className="font-condensed text-xl font-black text-slate-900 uppercase tracking-tight mb-3 font-[var(--font-geist)]">
                        {val.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                        {val.desc}
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
