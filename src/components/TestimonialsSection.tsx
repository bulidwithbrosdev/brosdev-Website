"use client";

import { motion } from "framer-motion";
import { Star, Quote, CheckCircle2 } from "lucide-react";

export default function TestimonialsSection() {
  const testimonials = [
    {
      quote:
        "BrosDev delivered our complex multi-tenant SaaS application 3 weeks ahead of schedule. Their attention to clean architecture, Next.js 16 App Router, and UI polish is unparalleled.",
      author: "Marcus Vance",
      title: "CTO, FinTech Cloud Solutions",
      company: "FINTECH CLOUD",
      rating: 5,
      location: "SAN FRANCISCO, USA",
      project: "SaaS Platform",
    },
    {
      quote:
        "Working with BrosDev felt like extending our internal core engineering squad. Communication was instant, and their AI & LLM workflow integration saved us months of dev time.",
      author: "Elena Rostova",
      title: "Head of Product, OmniHealth AI",
      company: "OMNIHEALTH AI",
      rating: 5,
      location: "BERLIN, GERMANY",
      project: "AI Healthcare",
    },
    {
      quote:
        "The response speed (under 1 hour) and quality of code surpassed all software agencies we worked with previously. Highly recommend BrosDev for any scalable web application.",
      author: "Rajesh Kumar",
      title: "Founder & CEO, ScaleStack",
      company: "SCALESTACK CRM",
      rating: 5,
      location: "BENGALURU, INDIA",
      project: "Enterprise CRM",
    },
    {
      quote:
        "From database schema design to Kubernetes auto-scaling, BrosDev handled our entire digital platform launch with 100% precision and zero downtime.",
      author: "Jean-Pierre Laurent",
      title: "Lead Architect, NovaPay Systems",
      company: "NOVAPAY FINTECH",
      rating: 5,
      location: "PARIS, FRANCE",
      project: "Payments Hub",
    },
    {
      quote:
        "BrosDev transformed our legacy PHP monolith into a lightning-fast React microservices architecture. Our customer conversion rate jumped 38% after launch.",
      author: "David Miller",
      title: "VP Engineering, Apex Cloud Labs",
      company: "APEX CLOUD LABS",
      rating: 5,
      location: "TORONTO, CANADA",
      project: "Cloud Portal",
    },
    {
      quote:
        "Exceptional engineering standards, transparent 2-week agile sprints, and relentless focus on UI/UX excellence. BrosDev is our go-to technology partner.",
      author: "Sarah Jenkins",
      title: "Chief Product Officer, ScalePulse",
      company: "SCALEPULSE INC",
      rating: 5,
      location: "LONDON, UK",
      project: "Analytics App",
    },
  ];

  return (
    <section className="py-24 sm:py-32 bg-[#FAF8F5] border-b border-[#E2DDD5] overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        
        {/* Section Title Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-[#E2DDD5] mb-4">
            <span className="w-2 h-2 bg-[#A90706]"></span>
            <span className="font-condensed text-xs font-normal tracking-widest text-[#A90706] uppercase">
              // CLIENT REVIEWS
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-normal text-slate-900 tracking-tight leading-tight uppercase mb-4 font-[var(--font-geist)]">
            Trusted by Ambitious Founders &amp; CTOs
          </h2>
          <p className="text-slate-700 text-base sm:text-lg font-medium leading-relaxed">
            Here is what engineering leaders and product executives say about partnering with BrosDev.
          </p>
        </div>

      </div>

      {/* Infinite Auto-Scroller Ticker Container */}
      <div className="relative w-full flex overflow-x-hidden items-center py-4">
        {/* Soft Gradient Fade Edges - Responsive Width for Mobile */}
        <div className="absolute left-0 top-0 bottom-0 w-6 sm:w-28 bg-gradient-to-r from-[#FAF8F5] via-[#FAF8F5]/90 to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-6 sm:w-28 bg-gradient-to-l from-[#FAF8F5] via-[#FAF8F5]/90 to-transparent z-20 pointer-events-none" />

        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="flex items-center gap-6 whitespace-normal shrink-0 pt-4 pb-4"
        >
          {[...testimonials, ...testimonials, ...testimonials].map((item, idx) => (
            <div
              key={`${item.author}-${idx}`}
              className="w-[380px] sm:w-[440px] shrink-0 p-7 bg-white border-2 border-slate-900 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group cursor-pointer"
            >
              <div>
                {/* Rating Stars & Quote Icon */}
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#E2DDD5]">
                  <div className="flex items-center gap-1">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  <span className="font-condensed text-[10px] font-black px-2 py-0.5 bg-[#FAF8F5] text-[#A90706] border border-[#E2DDD5] uppercase tracking-widest">
                    {item.project}
                  </span>
                </div>

                {/* Quote Text */}
                <p className="text-slate-800 font-medium text-sm sm:text-base leading-relaxed mb-6 italic">
                  "{item.quote}"
                </p>
              </div>

              {/* Author & Location Footer */}
              <div className="pt-5 border-t border-slate-900 flex items-center justify-between">
                <div>
                  <h4 className="font-condensed text-base font-black text-slate-900 uppercase tracking-tight group-hover:text-[#A90706] transition-colors">
                    {item.author}
                  </h4>
                  <p className="text-xs text-slate-600 font-bold font-condensed uppercase">
                    {item.title}
                  </p>
                </div>

                <div className="flex flex-col items-end">
                  <span className="font-condensed text-[10px] font-extrabold px-2 py-0.5 bg-slate-900 text-white uppercase tracking-wider">
                    {item.location}
                  </span>
                  <div className="flex items-center gap-1 text-[9px] font-condensed text-emerald-600 font-bold uppercase pt-1">
                    <CheckCircle2 className="w-3 h-3" />
                    <span>VERIFIED CLIENT</span>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom Trust Badge Line */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="p-4 bg-white border border-[#E2DDD5] flex flex-wrap items-center justify-between gap-4 text-xs font-condensed font-black tracking-widest text-slate-600 uppercase">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-pulse"></span>
            <span>OVER 100+ VERIFIED FIVE-STAR REVIEWS WORLDWIDE</span>
          </div>

          <div className="flex items-center gap-6">
            <span>AVERAGE RATING: 5.0 / 5.0</span>
            <span className="text-[#A90706]">★ GUARANTEED QUALITY</span>
          </div>
        </div>
      </div>

    </section>
  );
}
