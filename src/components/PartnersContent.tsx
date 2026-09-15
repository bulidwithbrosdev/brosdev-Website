"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { 
  Users, 
  Handshake, 
  Building2, 
  Code, 
  Globe2, 
  Sparkles, 
  Layers, 
  ArrowUpRight, 
  ChevronDown, 
  Cpu, 
  MessageSquare, 
  ShieldCheck, 
  Zap, 
  Mail 
} from "lucide-react";

interface PartnersContentProps {
  locale: string;
}

export default function PartnersContent({ locale }: PartnersContentProps) {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const collaborationAreas = [
    {
      title: "IT & Technology Companies",
      tag: "// SOFTWARE & DIGITAL PRODUCTS",
      desc: "Collaborating with technology companies to deliver software, digital products, and technology solutions.",
      icon: Building2,
    },
    {
      title: "Software Development Partners",
      tag: "// TEAM EXTENSION & CAPACITY",
      desc: "Working with experienced development teams to extend engineering capabilities and support project delivery.",
      icon: Code,
    },
    {
      title: "Digital Agencies",
      tag: "// CREATIVE & TECHNICAL SYNERGY",
      desc: "Partnering with creative and digital agencies that need reliable technology and development expertise for their clients.",
      icon: Sparkles,
    },
    {
      title: "Strategic Collaborations",
      tag: "// LONG-TERM INNOVATION",
      desc: "Building long-term relationships with companies that share our vision for innovation and technology.",
      icon: Handshake,
    },
    {
      title: "Global Delivery Partners",
      tag: "// CROSS-BORDER ENGINEERING",
      desc: "Collaborating with teams across international markets to support projects and clients worldwide.",
      icon: Globe2,
    },
    {
      title: "Specialized Technology Teams",
      tag: "// PLATFORMS & INFRASTRUCTURE",
      desc: "Working with specialists who bring expertise in specific technologies, platforms, infrastructure, and digital solutions.",
      icon: Cpu,
    },
  ];

  const steps = [
    {
      step: "01",
      title: "Connect",
      desc: "We understand your company, capabilities, expertise, and collaboration goals.",
    },
    {
      step: "02",
      title: "Align",
      desc: "We define project requirements, responsibilities, technology needs, and delivery expectations.",
    },
    {
      step: "03",
      title: "Collaborate",
      desc: "Our teams work together with clear communication, defined responsibilities, and shared objectives.",
    },
    {
      step: "04",
      title: "Deliver",
      desc: "We combine our capabilities to deliver reliable, scalable, and high-quality technology solutions.",
    },
  ];

  const whyUs = [
    {
      title: "Engineering First",
      desc: "We focus on building practical, scalable, and maintainable technology solutions.",
      icon: Zap,
    },
    {
      title: "Flexible Collaboration",
      desc: "Our collaboration model adapts to different project sizes, technologies, industries, and delivery requirements.",
      icon: Layers,
    },
    {
      title: "Modern Technology",
      desc: "Our engineering capabilities cover web applications, mobile applications, software platforms, APIs, databases, cloud technologies, and digital products.",
      icon: Code,
    },
    {
      title: "Transparent Communication",
      desc: "Clear communication, defined responsibilities, and structured workflows keep collaborations efficient.",
      icon: MessageSquare,
    },
    {
      title: "Long-Term Relationships",
      desc: "We believe strong partnerships are built through trust, consistent delivery, and shared growth.",
      icon: ShieldCheck,
    },
  ];

  const faqs = [
    {
      question: "Who can collaborate with BrosDev Solutions?",
      answer: "IT companies, software development studios, digital agencies, technology providers, and specialized technical teams can explore collaboration opportunities with BrosDev Solutions.",
    },
    {
      question: "What types of collaborations are available?",
      answer: "Collaborations may include project development, team extension, technical expertise, software delivery, technology partnerships, and strategic initiatives.",
    },
    {
      question: "Can international companies collaborate with BrosDev Solutions?",
      answer: "Yes. BrosDev Solutions can collaborate with companies and technology teams across international markets.",
    },
    {
      question: "Do you offer white-label development?",
      answer: "BrosDev Solutions can work as a technology and development partner for agencies and companies that require behind-the-scenes engineering support.",
    },
    {
      question: "How can we become a BrosDev Solutions partner?",
      answer: "Contact our team with your company details, capabilities, areas of expertise, and proposed collaboration model. Our team will review the opportunity and get in touch.",
    },
  ];

  return (
    <main className="min-h-screen bg-[#FAF8F5] text-slate-900 selection:bg-[#A90706] selection:text-white font-sans antialiased">
      <Navbar />

      {/* Hero Banner */}
      <section className="pt-36 pb-20 border-b border-[#E2DDD5] bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-[#E2DDD5] mb-6">
            <span className="w-2 h-2 bg-[#A90706]"></span>
            <span className="font-condensed text-xs font-black tracking-widest text-[#A90706] uppercase">
              // STRATEGIC TECH ALLIANCES
            </span>
          </div>

          <h1 className="text-5xl sm:text-7xl font-black text-slate-900 tracking-tight leading-none uppercase mb-6 font-[var(--font-geist)]">
            PARTNERS &amp; COLLABORATIONS
          </h1>

          <h2 className="text-2xl sm:text-3xl font-black text-[#A90706] uppercase tracking-tight mb-6 font-[var(--font-geist)]">
            Building Better Technology, Together.
          </h2>

          <p className="text-slate-700 text-base sm:text-lg font-medium max-w-3xl leading-relaxed mb-4">
            BrosDev Solutions IT Engineering Studio collaborates with IT companies, software development teams, digital agencies, technology providers, and specialized professionals to deliver better digital solutions.
          </p>

          <p className="text-slate-600 text-sm sm:text-base font-normal max-w-3xl leading-relaxed mb-8">
            By combining expertise, resources, and experience, we create flexible collaboration models that help businesses bring ideas to life faster and more effectively.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="mailto:partnerships@brosdev.site"
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#A90706] hover:bg-[#880504] text-white font-condensed text-xs sm:text-sm font-black uppercase tracking-widest transition-colors shadow-lg cursor-pointer"
            >
              <Mail className="w-4 h-4" />
              <span>PARTNERSHIPS@BROSDEV.SITE</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

            <Link
              href={`/${locale}/book-consultation`}
              className="inline-flex items-center gap-2 px-8 py-4 bg-white border-2 border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white font-condensed text-xs sm:text-sm font-black uppercase tracking-widest transition-colors cursor-pointer"
            >
              <span>BOOK CONSULTATION</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 border-b border-[#E2DDD5] bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-6">
              <span className="font-condensed text-xs font-black text-[#A90706] uppercase tracking-widest block">
                // SYNERGY &amp; SHARED EXPERTISE
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 uppercase tracking-tight leading-tight font-[var(--font-geist)]">
                TECHNOLOGY IS BETTER WHEN WE COLLABORATE
              </h2>
              <p className="text-slate-700 text-base leading-relaxed font-normal">
                Great digital products are built through strong collaboration. At BrosDev Solutions, we work with trusted technology and development teams to combine different capabilities, expand technical expertise, and deliver solutions that meet the unique requirements of every project.
              </p>
            </div>

            <div className="lg:col-span-7">
              <div className="bg-[#FAF8F5] border-2 border-slate-900 p-8 shadow-xl space-y-6">
                <div className="flex items-center gap-4 border-b border-[#E2DDD5] pb-4">
                  <div className="w-12 h-12 bg-[#A90706] text-white flex items-center justify-center font-condensed text-xl font-bold">
                    <Handshake className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-condensed text-xl font-black text-slate-900 uppercase tracking-wide">
                      EXPAND YOUR TECHNICAL HORIZON
                    </h3>
                    <span className="font-condensed text-xs text-[#A90706] uppercase tracking-wider block">
                      WEB • MOBILE • CLOUD • SPECIALIZED TECH
                    </span>
                  </div>
                </div>
                <p className="text-slate-700 text-sm leading-relaxed font-normal">
                  Whether it&apos;s software development, mobile applications, web platforms, cloud solutions, or specialized technology, our collaboration approach helps create stronger outcomes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Collaboration Areas */}
      <section className="py-24 border-b border-[#E2DDD5] bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="font-condensed text-xs font-black text-[#A90706] uppercase tracking-widest block">
              // COLLABORATION FRAMEWORK
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 uppercase tracking-tight font-[var(--font-geist)]">
              OUR COLLABORATION AREAS
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {collaborationAreas.map((area, idx) => {
              const Icon = area.icon;
              return (
                <div
                  key={idx}
                  className="bg-white border-2 border-slate-900 p-8 shadow-xl hover:border-[#A90706] transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="w-12 h-12 bg-slate-900 text-white flex items-center justify-center mb-6 group-hover:bg-[#A90706] transition-colors shadow-md">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <span className="font-condensed text-[10px] font-black text-[#A90706] uppercase tracking-widest block mb-2">
                      {area.tag}
                    </span>
                    <h3 className="font-condensed text-xl font-black text-slate-900 uppercase tracking-tight mb-3 font-[var(--font-geist)]">
                      {area.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
                      {area.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Partner Network Highlight */}
      <section className="py-16 border-b border-[#E2DDD5] bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="font-condensed text-xs font-black text-[#A90706] uppercase tracking-widest block">
            // OUR PARTNER NETWORK
          </span>
          <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white font-[var(--font-geist)] max-w-4xl mx-auto">
            COMMITMENT TO QUALITY, INNOVATION &amp; RELIABLE DELIVERY
          </h2>
          <p className="text-slate-300 text-sm sm:text-base font-normal max-w-3xl mx-auto leading-relaxed">
            We collaborate with companies and technology teams that share our commitment to excellence. Our collaborations range from project-based development and technical expertise to long-term strategic relationships.
          </p>
          <div className="inline-flex flex-wrap items-center justify-center gap-3 pt-4 border-t border-slate-800 text-xs font-condensed font-black tracking-widest text-[#A90706] uppercase">
            <span>TECHNOLOGY</span>
            <span>•</span>
            <span>DEVELOPMENT</span>
            <span>•</span>
            <span>STRATEGIC</span>
            <span>•</span>
            <span>GLOBAL DELIVERY</span>
          </div>
        </div>
      </section>

      {/* How We Collaborate (Process) */}
      <section className="py-24 border-b border-[#E2DDD5] bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="font-condensed text-xs font-black text-[#A90706] uppercase tracking-widest block">
              // ENGAGEMENT METHODOLOGY
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 uppercase tracking-tight font-[var(--font-geist)]">
              HOW WE COLLABORATE
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-2 border-slate-900 divide-y sm:divide-y-0 sm:divide-x divide-slate-900 shadow-xl bg-[#FAF8F5]">
            {steps.map((st, i) => (
              <div key={i} className="p-8 space-y-4 hover:bg-white transition-colors">
                <div className="w-10 h-10 bg-[#A90706] text-white font-condensed text-base font-black flex items-center justify-center">
                  {st.step}
                </div>
                <h3 className="font-condensed text-2xl font-black text-slate-900 uppercase tracking-tight font-[var(--font-geist)]">
                  {st.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
                  {st.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Collaborate With BrosDev Solutions? */}
      <section className="py-24 border-b border-[#E2DDD5] bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="font-condensed text-xs font-black text-[#A90706] uppercase tracking-widest block">
              // VALUE PROPOSITION
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 uppercase tracking-tight font-[var(--font-geist)]">
              WHY COLLABORATE WITH BROSDEV SOLUTIONS?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyUs.map((w, idx) => {
              const Icon = w.icon;
              return (
                <div key={idx} className="bg-white border-2 border-slate-900 p-8 shadow-md space-y-4 hover:border-[#A90706] transition-colors">
                  <div className="w-10 h-10 bg-[#A90706] text-white flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-condensed text-xl font-black text-slate-900 uppercase tracking-tight font-[var(--font-geist)]">
                    {w.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
                    {w.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Become a BrosDev Solutions Partner CTA */}
      <section className="py-20 border-b border-[#E2DDD5] bg-slate-900 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <span className="font-condensed text-xs font-black text-[#A90706] uppercase tracking-widest block">
            // JOIN OUR PARTNER COHORT
          </span>

          <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white font-[var(--font-geist)] leading-tight">
            BECOME A BROSDEV SOLUTIONS PARTNER
          </h2>

          <p className="text-slate-300 text-base sm:text-lg font-normal leading-relaxed max-w-3xl mx-auto">
            Are you an IT company, software development studio, digital agency, technology provider, or specialized technology team looking for a reliable engineering partner? Let&apos;s explore how our teams can work together.
          </p>

          <div className="p-6 bg-slate-800 border-2 border-slate-700 max-w-2xl mx-auto">
            <p className="font-condensed text-lg sm:text-xl font-bold text-white uppercase tracking-wide">
              &ldquo;Bring your expertise. We&apos;ll bring our engineering. Together, let&apos;s build what&apos;s next.&rdquo;
            </p>
          </div>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <a
              href="mailto:partnerships@brosdev.site"
              className="inline-flex items-center gap-3 px-10 py-5 bg-[#A90706] hover:bg-[#880504] text-white font-condensed text-sm sm:text-base font-black uppercase tracking-widest transition-colors shadow-2xl cursor-pointer"
            >
              <Mail className="w-5 h-5" />
              <span>EMAIL: PARTNERSHIPS@BROSDEV.SITE</span>
              <ArrowUpRight className="w-5 h-5" />
            </a>

            <Link
              href={`/${locale}/book-consultation`}
              className="inline-flex items-center gap-3 px-10 py-5 bg-white border-2 border-white text-slate-900 hover:bg-slate-800 hover:text-white hover:border-slate-800 font-condensed text-sm sm:text-base font-black uppercase tracking-widest transition-colors cursor-pointer"
            >
              <span>BOOK CONSULTATION</span>
              <ArrowUpRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Partnership FAQs */}
      <section className="py-24 border-b border-[#E2DDD5] bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center space-y-2">
            <span className="font-condensed text-xs font-black text-[#A90706] uppercase tracking-widest block">
              // FREQUENTLY ASKED QUESTIONS
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 uppercase tracking-tight font-[var(--font-geist)]">
              PARTNERSHIP FAQS
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div key={idx} className="border-2 border-slate-900 bg-[#FAF8F5] transition-all">
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  >
                    <span className="font-condensed text-lg font-black text-slate-900 uppercase tracking-tight font-[var(--font-geist)]">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#A90706] shrink-0 transition-transform duration-200 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 pt-2 border-t border-[#E2DDD5] bg-white">
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
