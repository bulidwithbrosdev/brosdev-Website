"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CallBookingModal from "@/components/CallBookingModal";
import { ServiceDetail, SERVICES_DATA } from "@/data/servicesData";
import { 
  ArrowUpRight, 
  CheckCircle2, 
  ChevronDown, 
  Cpu, 
  ShieldCheck, 
  Zap, 
  Layers, 
  Code2, 
  Sparkles,
  ArrowRight,
  Terminal
} from "lucide-react";

interface ServiceDetailContentProps {
  service: ServiceDetail;
  locale?: string;
}

export default function ServiceDetailContent({ service, locale = "en" }: ServiceDetailContentProps) {
  const [isCallModalOpen, setIsCallModalOpen] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  // Other related services to recommend in footer grid
  const allOtherServices = Object.values(SERVICES_DATA).filter(
    (s) => s.slug !== service.slug
  );
  // Pick 4 related services
  const relatedServices = allOtherServices.slice(0, 4);

  return (
    <main className="min-h-screen bg-[#FAF8F5] text-slate-900 selection:bg-[#A90706] selection:text-white font-sans antialiased">
      <Navbar onBookCallClick={() => setIsCallModalOpen(true)} />

      {/* Hero Banner */}
      <section className="pt-36 pb-20 border-b border-[#E2DDD5] bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <Link 
              href={locale ? `/${locale}/services` : "/services"}
              className="inline-flex items-center gap-1.5 px-3 py-1 bg-white border border-[#E2DDD5] text-xs font-condensed font-black tracking-widest text-slate-600 hover:text-[#A90706] uppercase transition-colors"
            >
              <span>SERVICES</span>
            </Link>
            <span className="text-slate-400 font-condensed text-xs">/</span>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-[#E2DDD5]">
              <span className="w-2 h-2 bg-[#A90706]"></span>
              <span className="font-condensed text-xs font-black tracking-widest text-[#A90706] uppercase">
                {service.badge}
              </span>
            </div>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-slate-900 tracking-tight leading-none uppercase mb-6 max-w-5xl">
            {service.title}
          </h1>

          <p className="text-lg sm:text-2xl font-bold text-[#A90706] uppercase tracking-wide mb-6 max-w-3xl">
            {service.tagline}
          </p>

          <p className="text-slate-700 text-base sm:text-lg font-medium max-w-3xl leading-relaxed mb-8">
            {service.heroDesc}
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={() => setIsCallModalOpen(true)}
              className="px-8 py-4 bg-[#A90706] hover:bg-[#880504] text-white font-condensed text-sm font-black tracking-widest uppercase transition-all shadow-lg flex items-center gap-3 cursor-pointer"
            >
              <span>START YOUR PROJECT</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>

            <a
              href="#features"
              className="px-8 py-4 bg-white hover:bg-slate-900 hover:text-white border border-[#E2DDD5] text-slate-900 font-condensed text-sm font-black tracking-widest uppercase transition-all flex items-center gap-2"
            >
              <span>EXPLORE CAPABILITIES</span>
            </a>
          </div>

        </div>
      </section>

      {/* Stats Grid */}
      <section className="py-12 border-b border-[#E2DDD5] bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 border-2 border-slate-900 divide-x divide-y md:divide-y-0 divide-slate-900 shadow-xl bg-white">
            {service.stats.map((st, idx) => (
              <div key={idx} className="p-6 text-center">
                <div className="font-condensed text-3xl sm:text-4xl font-black text-[#A90706] tracking-tight">
                  {st.value}
                </div>
                <div className="font-condensed text-xs font-extrabold text-slate-500 uppercase tracking-widest mt-1">
                  {st.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features & Capabilities */}
      <section id="features" className="py-24 border-b border-[#E2DDD5] bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="mb-14">
            <span className="font-condensed text-xs font-black text-[#A90706] uppercase tracking-widest block mb-2">
              // CORE CAPABILITIES
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 uppercase tracking-tight">
              ENGINEERED FOR EXCELLENCE
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {service.features.map((feat, i) => (
              <div 
                key={i} 
                className="p-8 bg-white border border-[#E2DDD5] hover:border-slate-900 transition-all shadow-xs group flex items-start gap-5"
              >
                <div className="p-3 bg-[#FAF8F5] border border-[#E2DDD5] group-hover:bg-[#A90706] group-hover:text-white transition-colors shrink-0">
                  <CheckCircle2 className="w-6 h-6 text-[#A90706] group-hover:text-white" />
                </div>
                <div>
                  <h3 className="font-condensed text-xl font-extrabold text-slate-900 uppercase tracking-wide mb-2 group-hover:text-[#A90706] transition-colors">
                    {feat.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed font-normal">
                    {feat.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-16 border-b border-[#E2DDD5] bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <span className="font-condensed text-xs font-black text-[#A90706] uppercase tracking-widest block mb-1">
                // TECHNOLOGIES & TOOLS
              </span>
              <h3 className="font-condensed text-2xl font-black text-slate-900 uppercase">
                POWERED BY MODERN STACK
              </h3>
            </div>

            <div className="flex flex-wrap gap-3">
              {service.techStack.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-4 py-2 bg-[#FAF8F5] border border-[#E2DDD5] font-condensed text-xs font-black text-slate-900 uppercase tracking-wider flex items-center gap-2 hover:border-[#A90706] transition-colors"
                >
                  <Terminal className="w-3.5 h-3.5 text-[#A90706]" />
                  <span>{tech}</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4-Step Engineering Process */}
      <section className="py-24 border-b border-[#E2DDD5] bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="mb-14">
            <span className="font-condensed text-xs font-black text-[#A90706] uppercase tracking-widest block mb-2">
              // METHODOLOGY
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 uppercase tracking-tight">
              4-STEP EXECUTION PROCESS
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-2 border-slate-900 divide-y sm:divide-y-0 sm:divide-x divide-slate-900 bg-white shadow-xl">
            {service.process.map((pr) => (
              <div key={pr.step} className="p-8 flex flex-col justify-between hover:bg-[#FAF8F5] transition-colors">
                <div>
                  <span className="font-condensed text-4xl font-black text-[#A90706] block mb-4">
                    {pr.step}
                  </span>
                  <h3 className="font-condensed text-xl font-extrabold text-slate-900 uppercase mb-3">
                    {pr.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    {pr.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Real-World Use Cases */}
      {service.useCases && service.useCases.length > 0 && (
        <section className="py-24 border-b border-[#E2DDD5] bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-14">
              <span className="font-condensed text-xs font-black text-[#A90706] uppercase tracking-widest block mb-2">
                // PROVEN OUTCOMES
              </span>
              <h2 className="text-3xl sm:text-5xl font-black text-slate-900 uppercase tracking-tight">
                REAL-WORLD USE CASES
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {service.useCases.map((uc, i) => (
                <div key={i} className="p-8 border-2 border-slate-900 bg-[#FAF8F5] shadow-lg">
                  <div className="flex items-center gap-2 mb-3 text-[#A90706]">
                    <Sparkles className="w-5 h-5" />
                    <span className="font-condensed text-xs font-black uppercase tracking-widest">
                      INSIGHTS // {i + 1}
                    </span>
                  </div>
                  <h3 className="font-condensed text-2xl font-extrabold text-slate-900 uppercase mb-3">
                    {uc.title}
                  </h3>
                  <p className="text-slate-700 text-sm leading-relaxed font-medium">
                    {uc.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQs */}
      {service.faqs && service.faqs.length > 0 && (
        <section className="py-24 border-b border-[#E2DDD5] bg-[#FAF8F5]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <span className="font-condensed text-xs font-black text-[#A90706] uppercase tracking-widest block mb-2">
                // QUESTIONS & ANSWERS
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 uppercase tracking-tight">
                FREQUENTLY ASKED QUESTIONS
              </h2>
            </div>

            <div className="space-y-4">
              {service.faqs.map((faq, idx) => {
                const isOpen = openFaqIndex === idx;
                return (
                  <div key={idx} className="border border-[#E2DDD5] bg-white transition-all">
                    <button
                      onClick={() => toggleFaq(idx)}
                      className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                    >
                      <span className="font-condensed text-lg font-extrabold text-slate-900 uppercase tracking-wide">
                        {faq.question}
                      </span>
                      <ChevronDown
                        className={`w-5 h-5 text-slate-500 transition-transform ${
                          isOpen ? "rotate-180 text-[#A90706]" : ""
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="px-6 pb-6 text-slate-700 text-sm leading-relaxed font-medium border-t border-[#FAF8F5] pt-4">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Related Services Navigation */}
      <section className="py-20 border-b border-[#E2DDD5] bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-10">
            <div>
              <span className="font-condensed text-xs font-black text-[#A90706] uppercase tracking-widest block mb-1">
                // EXPLORE MORE
              </span>
              <h3 className="font-condensed text-2xl sm:text-3xl font-black text-slate-900 uppercase">
                OTHER ENGINEERING SERVICES
              </h3>
            </div>
            <Link
              href={locale ? `/${locale}/services` : "/services"}
              className="font-condensed text-xs font-black text-[#A90706] hover:underline uppercase tracking-widest flex items-center gap-1"
            >
              <span>VIEW ALL SERVICES</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedServices.map((rel) => (
              <Link
                key={rel.slug}
                href={locale ? `/${locale}/services/${rel.slug}` : `/services/${rel.slug}`}
                className="p-6 border border-[#E2DDD5] bg-[#FAF8F5] hover:border-slate-900 hover:bg-white transition-all group flex flex-col justify-between"
              >
                <div>
                  <span className="font-condensed text-[10px] font-black text-[#A90706] uppercase tracking-widest block mb-2">
                    {rel.category}
                  </span>
                  <h4 className="font-condensed text-base font-extrabold text-slate-900 uppercase group-hover:text-[#A90706] transition-colors mb-2">
                    {rel.title}
                  </h4>
                  <p className="text-xs text-slate-600 line-clamp-2">
                    {rel.tagline}
                  </p>
                </div>
                <div className="mt-4 pt-4 border-t border-[#E2DDD5] flex items-center justify-between text-xs font-condensed font-bold uppercase text-slate-900 group-hover:text-[#A90706]">
                  <span>READ SPECIFICATION</span>
                  <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Footer Banner */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="font-condensed text-xs font-black text-[#A90706] uppercase tracking-widest block mb-3">
            // READY TO BUILD?
          </span>
          <h2 className="text-4xl sm:text-6xl font-black uppercase tracking-tight mb-6">
            LET'S ARCHITECT YOUR {service.title.toUpperCase()}
          </h2>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto mb-8 font-medium">
            Schedule an architecture scoping session with senior BrosDev engineers today.
          </p>
          <button
            onClick={() => setIsCallModalOpen(true)}
            className="px-10 py-5 bg-[#A90706] hover:bg-[#880504] text-white font-condensed text-sm font-black tracking-widest uppercase transition-all shadow-xl inline-flex items-center gap-3 cursor-pointer"
          >
            <span>BOOK ARCHITECTURE CALL</span>
            <ArrowUpRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      <Footer />
      <CallBookingModal isOpen={isCallModalOpen} onClose={() => setIsCallModalOpen(false)} />
    </main>
  );
}
