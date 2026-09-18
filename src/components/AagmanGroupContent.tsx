"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  ArrowUpRight,
  Cpu,
  Sparkles,
  Rocket,
  Target,
  Eye,
  Heart,
  Brain,
  Lightbulb,
  Search,
  Hammer,
  TrendingUp,
  RefreshCw,
  Monitor,
  ShoppingBag,
  Mail,
  ChevronRight,
  Quote,
  Hotel,
  Building2,
} from "lucide-react";

interface AagmanGroupContentProps {
  locale: string;
}

export default function AagmanGroupContent({ locale }: AagmanGroupContentProps) {
  const companies = [
    {
      name: "BrosDev Solutions",
      tags: "Technology · AI · SaaS · Digital Solutions",
      desc: "BrosDev Solutions is a technology company focused on custom software, AI-powered solutions, SaaS products, automation, and modern digital platforms. It helps businesses transform ideas and operational challenges into scalable technology.",
      link: "/",
      linkText: "Visit BrosDev Solutions",
      gradient: "from-[#A90706] to-[#D4342E]",
      iconBg: "bg-red-50",
      iconColor: "text-[#A90706]",
      borderColor: "border-red-200",
      icon: Cpu,
    },
    {
      name: "The Privum",
      tags: "Fashion · Lifestyle · Consumer Brand",
      desc: "The Privum is a contemporary fashion and lifestyle brand built around minimal design, distinctive identity, and modern consumer experiences.",
      link: "#",
      linkText: "Visit The Privum",
      gradient: "from-slate-800 to-slate-600",
      iconBg: "bg-slate-100",
      iconColor: "text-slate-800",
      borderColor: "border-slate-200",
      icon: ShoppingBag,
    },
    {
      name: "Aatithi by Aagman Group",
      tags: "Hospitality · Luxury Stays · Guest Experience · Dining",
      desc: "A luxury hospitality and hotel brand dedicated to exceptional guest experiences, refined accommodations, modern amenities, and authentic cultural warmth.",
      link: "#",
      linkText: "Explore Aatithi Hotel",
      gradient: "from-rose-600 to-amber-500",
      iconBg: "bg-rose-50",
      iconColor: "text-rose-600",
      borderColor: "border-rose-200",
      icon: Hotel,
    },
    {
      name: "Riyasat Group",
      tags: "Real Estate · Builder · Luxury Flats · Property Development",
      desc: "Riyasat Group is a premier real estate development and builder company focused on constructing modern flats, premium housing projects, and landmark commercial and residential properties built with architectural grandeur and enduring value.",
      link: "#",
      linkText: "Discover Riyasat Group",
      gradient: "from-indigo-700 to-sky-600",
      iconBg: "bg-indigo-50",
      iconColor: "text-indigo-700",
      borderColor: "border-indigo-200",
      icon: Building2,
    },
    {
      name: "Future Ventures",
      tags: "Innovation · New Businesses · Emerging Markets",
      desc: "Aagman Group continuously explores new opportunities across technology, AI, SaaS, consumer products, and emerging industries. More ventures are coming.",
      link: null,
      linkText: null,
      gradient: "from-amber-600 to-amber-400",
      iconBg: "bg-amber-50",
      iconColor: "text-amber-700",
      borderColor: "border-amber-200",
      icon: Rocket,
    },
  ];

  const beliefs = [
    {
      title: "Long-Term Thinking",
      desc: "We build businesses with the ambition to last, not simply to grow quickly.",
      icon: Target,
      color: "text-[#A90706]",
    },
    {
      title: "Customer First",
      desc: "Every business starts with understanding a real problem and creating something people genuinely need.",
      icon: Heart,
      color: "text-rose-600",
    },
    {
      title: "Independent Thinking",
      desc: "Our companies are encouraged to experiment, challenge assumptions, and develop their own identity.",
      icon: Brain,
      color: "text-indigo-600",
    },
    {
      title: "Continuous Innovation",
      desc: "Markets change. Technology changes. We keep learning, adapting, and building.",
      icon: Lightbulb,
      color: "text-amber-600",
    },
  ];

  const approach = [
    {
      step: "01",
      title: "Discover",
      desc: "We identify opportunities, problems, and markets with long-term potential.",
      icon: Search,
    },
    {
      step: "02",
      title: "Build",
      desc: "We turn promising ideas into products, brands, and businesses.",
      icon: Hammer,
    },
    {
      step: "03",
      title: "Grow",
      desc: "We provide the strategic foundation, resources, and expertise required to scale.",
      icon: TrendingUp,
    },
    {
      step: "04",
      title: "Evolve",
      desc: "We continuously improve our businesses and explore new opportunities.",
      icon: RefreshCw,
    },
  ];

  const ecosystem = [
    {
      title: "Technology",
      desc: "Building software, AI systems, SaaS products, and digital infrastructure.",
      icon: Monitor,
      accent: "bg-blue-500",
    },
    {
      title: "Consumer",
      desc: "Creating distinctive brands and products for modern consumers.",
      icon: ShoppingBag,
      accent: "bg-emerald-500",
    },
    {
      title: "Hospitality",
      desc: "Curating bespoke hotel stays, luxury accommodations, and memorable guest experiences.",
      icon: Hotel,
      accent: "bg-rose-500",
    },
    {
      title: "Builder & Real Estate",
      desc: "Developing high-quality residential flats, architectural landmarks, and thriving properties.",
      icon: Building2,
      accent: "bg-indigo-500",
    },
    {
      title: "Innovation",
      desc: "Exploring emerging technologies, new business models, and future markets.",
      icon: Sparkles,
      accent: "bg-purple-500",
    },
    {
      title: "Ventures",
      desc: "Identifying and developing new businesses with long-term potential.",
      icon: Rocket,
      accent: "bg-amber-500",
    },
  ];

  return (
    <main className="min-h-screen bg-[#FAF8F5] text-slate-900 selection:bg-[#A90706] selection:text-white font-sans antialiased">
      <Navbar />

      {/* ─── HERO ─── */}
      <section className="relative pt-36 pb-28 border-b border-[#E2DDD5] bg-[#FAF8F5] overflow-hidden">
        {/* Decorative grid background */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: "linear-gradient(rgba(0,0,0,.15) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,.15) 1px, transparent 1px)",
          backgroundSize: "60px 60px"
        }} />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-[#E2DDD5] mb-6">
            <span className="w-2 h-2 bg-[#A90706]"></span>
            <span className="font-condensed text-xs font-black tracking-widest text-[#A90706] uppercase">
              // AAGMAN GROUP
            </span>
          </div>

          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black text-slate-900 tracking-tight leading-none uppercase mb-8 font-[var(--font-geist)]">
            AAGMAN GROUP
          </h1>

          <p className="text-2xl sm:text-3xl font-black text-slate-700 uppercase tracking-tight mb-6 font-[var(--font-geist)]">
            Building Businesses. Creating What&apos;s Next.
          </p>

          <p className="text-slate-600 text-lg sm:text-xl font-medium max-w-3xl leading-relaxed mb-12">
            Aagman Group is a growing business group focused on building, developing, and supporting ambitious companies across technology, digital products, consumer brands, and emerging industries.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#companies"
              className="inline-flex items-center gap-2 px-8 py-4 bg-slate-900 text-white font-condensed text-sm font-black uppercase tracking-widest hover:bg-[#A90706] transition-all duration-300"
            >
              Explore Our Companies
              <ChevronRight className="w-4 h-4" />
            </a>
            <a
              href="#partnerships"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white border-2 border-slate-900 text-slate-900 font-condensed text-sm font-black uppercase tracking-widest hover:bg-slate-900 hover:text-white transition-all duration-300"
            >
              Partner With Us
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* ─── ABOUT ─── */}
      <section className="py-24 border-b border-[#E2DDD5] bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-5 space-y-6">
              <span className="font-condensed text-xs font-black text-[#A90706] uppercase tracking-widest block">
                // ABOUT AAGMAN GROUP
              </span>
              <h2 className="text-3xl sm:text-5xl font-black text-slate-900 uppercase tracking-tight leading-tight font-[var(--font-geist)]">
                One Group.<br />Many Possibilities.
              </h2>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <div className="border-l-4 border-[#A90706] pl-6">
                <p className="text-slate-800 text-lg font-medium italic leading-relaxed">
                  Aagman Group is built on a simple belief: Great businesses begin with great ideas — and grow through relentless execution.
                </p>
              </div>

              <p className="text-slate-700 text-base leading-relaxed">
                We create and operate businesses that solve real problems, serve evolving markets, and have the potential to create lasting value.
              </p>

              <p className="text-slate-700 text-base leading-relaxed">
                Our companies operate independently, developing their own products, brands, teams, and identities while sharing the vision and entrepreneurial foundation of Aagman Group.
              </p>

              <p className="text-slate-700 text-base leading-relaxed">
                From technology and AI to consumer brands, hospitality, real estate development, and future ventures, we are building a portfolio of businesses designed for the next generation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── PRESIDENT'S THOUGHT ─── */}
      <section className="py-24 border-b border-[#E2DDD5] bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border-2 border-slate-900 bg-white p-8 sm:p-14 lg:p-16 shadow-xl relative">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#FAF8F5] border border-[#E2DDD5] mb-8">
              <Quote className="w-3.5 h-3.5 text-[#A90706]" />
              <span className="font-condensed text-xs font-black tracking-widest text-[#A90706] uppercase">
                // LEADERSHIP PERSPECTIVE
              </span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 uppercase tracking-tight leading-tight font-[var(--font-geist)] mb-6">
              Director&apos;s Thought
            </h2>

            {/* Featured Quote */}
            <div className="border-l-4 border-[#A90706] pl-6 sm:pl-8 py-3 my-8 bg-[#FAF8F5]">
              <p className="text-xl sm:text-2xl font-bold text-slate-900 italic leading-relaxed font-[var(--font-geist)]">
                &ldquo;Every great business begins with a simple idea. Our responsibility is to give that idea the courage, resources, and direction to become something meaningful.&rdquo;
              </p>
            </div>

            {/* Narrative text */}
            <div className="space-y-6 text-slate-700 text-base sm:text-lg leading-relaxed max-w-4xl">
              <p>
                At Aagman Group, we believe that building a business is not only about creating products or generating growth. It is about creating value, empowering people, and building something that can stand the test of time.
              </p>
              <p>
                We are committed to thinking beyond today&apos;s opportunities and preparing for tomorrow&apos;s possibilities. Through our companies, we aim to combine entrepreneurship, technology, innovation, and responsible leadership to create businesses that make a difference.
              </p>
              <p>
                Our journey is still at the beginning. There will be challenges, new ideas, failures, and breakthroughs along the way. But our direction remains clear:
              </p>
            </div>

            {/* 4 Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 my-10">
              {[
                { label: "Build with purpose.", num: "01" },
                { label: "Lead with integrity.", num: "02" },
                { label: "Think beyond today.", num: "03" },
                { label: "Create what's next.", num: "04" },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="border border-[#E2DDD5] bg-[#FAF8F5] p-5 hover:border-slate-900 hover:bg-slate-900 hover:text-white transition-all duration-300 group"
                >
                  <div className="font-condensed text-xs font-black text-[#A90706] group-hover:text-[#D4342E] tracking-widest mb-2">
                    // {item.num}
                  </div>
                  <div className="font-black text-slate-900 group-hover:text-white uppercase tracking-tight text-base font-[var(--font-geist)]">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Sign-off */}
            <div className="border-t border-[#E2DDD5] pt-6 flex items-center justify-between flex-wrap gap-4">
              <div>
                <div className="font-black text-slate-900 uppercase tracking-wide text-lg font-[var(--font-geist)]">
                  — Director
                </div>
                <div className="font-condensed text-xs font-bold text-slate-500 uppercase tracking-widest mt-0.5">
                  Aagman Group
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── COMPANIES ─── */}
      <section id="companies" className="py-24 border-b border-[#E2DDD5] bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <span className="font-condensed text-xs font-black text-[#A90706] uppercase tracking-widest block mb-4">
              // OUR COMPANIES
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 uppercase tracking-tight leading-tight font-[var(--font-geist)] mb-4">
              Businesses built for what&apos;s next.
            </h2>
          </div>

          <div className="space-y-8">
            {companies.map((company, i) => {
              const Icon = company.icon;
              return (
                <div
                  key={i}
                  className="group border-2 border-slate-900 bg-white hover:shadow-2xl transition-all duration-500 relative overflow-hidden"
                >
                  {/* Accent bar */}
                  <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${company.gradient}`} />

                  <div className="p-8 sm:p-10">
                    <div className="flex flex-col lg:flex-row lg:items-start gap-8">
                      <div className={`w-16 h-16 ${company.iconBg} border ${company.borderColor} flex items-center justify-center flex-shrink-0`}>
                        <Icon className={`w-7 h-7 ${company.iconColor}`} />
                      </div>

                      <div className="flex-1 space-y-4">
                        <div>
                          <h3 className="text-2xl sm:text-3xl font-black text-slate-900 uppercase tracking-tight font-[var(--font-geist)]">
                            {company.name}
                          </h3>
                          <span className="font-condensed text-xs font-bold text-slate-500 uppercase tracking-widest mt-1 block">
                            {company.tags}
                          </span>
                        </div>

                        <p className="text-slate-700 text-base leading-relaxed max-w-2xl">
                          {company.desc}
                        </p>

                        {company.link && company.linkText && (
                          <Link
                            href={company.link}
                            className="inline-flex items-center gap-2 font-condensed text-sm font-black text-[#A90706] uppercase tracking-widest hover:gap-3 transition-all duration-300 group/link"
                          >
                            {company.linkText}
                            <ArrowUpRight className="w-4 h-4 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                          </Link>
                        )}

                        {!company.link && (
                          <span className="inline-flex items-center gap-2 font-condensed text-xs font-bold text-slate-400 uppercase tracking-widest">
                            <span className="w-2 h-2 bg-amber-400 rounded-full animate-pulse" />
                            Coming Soon
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── WHAT WE BELIEVE ─── */}
      <section className="py-24 border-b border-[#E2DDD5] bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <span className="font-condensed text-xs font-black text-[#A90706] uppercase tracking-widest block mb-4">
              // WHAT WE BELIEVE
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 uppercase tracking-tight leading-tight font-[var(--font-geist)] mb-4">
              Build with purpose.
            </h2>
            <p className="text-slate-600 text-lg max-w-2xl leading-relaxed">
              We don&apos;t build businesses simply to follow trends. We look for opportunities where technology, creativity, and execution can create meaningful value.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {beliefs.map((belief, i) => {
              const Icon = belief.icon;
              return (
                <div
                  key={i}
                  className="border-2 border-slate-900 bg-[#FAF8F5] p-8 hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="flex items-start gap-5">
                    <div className="w-12 h-12 border border-[#E2DDD5] bg-white flex items-center justify-center flex-shrink-0 group-hover:border-[#A90706] transition-colors duration-300">
                      <Icon className={`w-6 h-6 ${belief.color}`} />
                    </div>
                    <div>
                      <h3 className="font-black text-lg text-slate-900 uppercase tracking-tight font-[var(--font-geist)] mb-2">
                        {belief.title}
                      </h3>
                      <p className="text-slate-600 text-sm leading-relaxed">
                        {belief.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── APPROACH ─── */}
      <section className="py-24 border-b border-[#E2DDD5] bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <span className="font-condensed text-xs font-black text-[#A90706] uppercase tracking-widest block mb-4">
              // OUR APPROACH
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 uppercase tracking-tight leading-tight font-[var(--font-geist)]">
              From idea to impact.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border-2 border-slate-900">
            {approach.map((step, i) => {
              const Icon = step.icon;
              return (
                <div
                  key={i}
                  className={`p-8 bg-white relative group hover:bg-slate-900 transition-all duration-500 ${i < approach.length - 1 ? "lg:border-r border-b lg:border-b-0 border-slate-900" : ""
                    }`}
                >
                  <div className="font-condensed text-5xl font-black text-slate-200 group-hover:text-slate-700 transition-colors duration-500 mb-4">
                    {step.step}
                  </div>
                  <Icon className="w-6 h-6 text-[#A90706] mb-4" />
                  <h3 className="font-black text-xl text-slate-900 group-hover:text-white uppercase tracking-tight font-[var(--font-geist)] mb-3 transition-colors duration-500">
                    {step.title}
                  </h3>
                  <p className="text-slate-600 group-hover:text-slate-300 text-sm leading-relaxed transition-colors duration-500">
                    {step.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── ECOSYSTEM ─── */}
      <section className="py-24 border-b border-[#E2DDD5] bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <span className="font-condensed text-xs font-black text-[#A90706] uppercase tracking-widest block mb-4">
              // OUR ECOSYSTEM
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 uppercase tracking-tight leading-tight font-[var(--font-geist)]">
              Where we operate.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {ecosystem.map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="border border-[#E2DDD5] bg-[#FAF8F5] p-6 hover:border-slate-900 transition-all duration-300 group relative overflow-hidden">
                  <div className={`absolute top-0 left-0 w-full h-0.5 ${item.accent}`} />
                  <Icon className="w-8 h-8 text-slate-900 mb-4" />
                  <h3 className="font-black text-lg text-slate-900 uppercase tracking-tight font-[var(--font-geist)] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── VISION & MISSION ─── */}
      <section className="py-24 border-b border-[#E2DDD5] bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Vision */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 border border-white/20">
                <Eye className="w-3.5 h-3.5 text-[#D4342E]" />
                <span className="font-condensed text-xs font-black tracking-widest text-white/80 uppercase">
                  Our Vision
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-white uppercase tracking-tight leading-tight font-[var(--font-geist)]">
                To build a group of businesses that shape the future.
              </h2>
              <p className="text-slate-300 text-base leading-relaxed">
                Aagman Group aims to become a diversified business group where technology, entrepreneurship, and innovation come together to create companies that matter.
              </p>
              <p className="text-slate-400 text-base leading-relaxed">
                We are not focused on building one business. We are building an ecosystem of businesses.
              </p>
            </div>

            {/* Mission */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 border border-white/20">
                <Rocket className="w-3.5 h-3.5 text-[#D4342E]" />
                <span className="font-condensed text-xs font-black tracking-widest text-white/80 uppercase">
                  Our Mission
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-white uppercase tracking-tight leading-tight font-[var(--font-geist)]">
                Create. Build. Grow.
              </h2>
              <p className="text-slate-300 text-base leading-relaxed">
                Our mission is to discover opportunities, build exceptional companies, empower talented people, and create products and services that make a meaningful difference.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── PARTNERSHIPS ─── */}
      <section id="partnerships" className="py-24 border-b border-[#E2DDD5] bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-5 space-y-6">
              <span className="font-condensed text-xs font-black text-[#A90706] uppercase tracking-widest block">
                // PARTNERSHIPS
              </span>
              <h2 className="text-3xl sm:text-5xl font-black text-slate-900 uppercase tracking-tight leading-tight font-[var(--font-geist)]">
                Great businesses are built together.
              </h2>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <p className="text-slate-700 text-base leading-relaxed">
                We are open to working with entrepreneurs, technology companies, investors, creators, and organizations that share our ambition to build something meaningful.
              </p>
              <p className="text-slate-700 text-base leading-relaxed">
                Whether it&apos;s a strategic partnership, technology collaboration, new venture, or investment opportunity, we&apos;re always open to the right conversation.
              </p>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-slate-900 text-white font-condensed text-sm font-black uppercase tracking-widest hover:bg-[#A90706] transition-all duration-300 mt-4"
              >
                Partner With Aagman Group
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FUTURE ─── */}
      <section className="py-24 border-b border-[#E2DDD5] bg-[#FAF8F5] relative overflow-hidden">
        {/* Background decorative text */}
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.02] pointer-events-none">
          <span className="text-[20rem] font-black text-slate-900 uppercase select-none tracking-tighter">AG</span>
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="font-condensed text-xs font-black text-[#A90706] uppercase tracking-widest block mb-6">
            // THE FUTURE
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 uppercase tracking-tight leading-tight font-[var(--font-geist)] mb-6">
            This is only the beginning.
          </h2>
          <p className="text-slate-700 text-lg leading-relaxed mb-4">
            Aagman Group is at the beginning of its journey.
          </p>
          <p className="text-slate-600 text-base leading-relaxed max-w-2xl mx-auto mb-4">
            New ideas will become new products. New products will become new companies. And new companies will become part of something bigger.
          </p>
          <p className="text-slate-800 text-lg font-medium italic mb-10">
            The future is built one venture at a time.
          </p>

          <a
            href="#companies"
            className="inline-flex items-center gap-2 px-8 py-4 bg-slate-900 text-white font-condensed text-sm font-black uppercase tracking-widest hover:bg-[#A90706] transition-all duration-300"
          >
            Explore Our Companies
            <ChevronRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      {/* ─── CONTACT ─── */}
      <section id="contact" className="py-24 border-b border-[#E2DDD5] bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-6 space-y-6">
              <span className="font-condensed text-xs font-black text-[#A90706] uppercase tracking-widest block">
                // CONTACT
              </span>
              <h2 className="text-3xl sm:text-5xl font-black text-slate-900 uppercase tracking-tight leading-tight font-[var(--font-geist)]">
                Let&apos;s build what&apos;s next.
              </h2>
              <p className="text-slate-700 text-base leading-relaxed">
                Have an idea, partnership opportunity, or business proposal? We&apos;d like to hear from you.
              </p>
            </div>

            <div className="lg:col-span-6">
              <div className="border-2 border-slate-900 bg-[#FAF8F5] p-8 space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white border border-[#E2DDD5] flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-[#A90706]" />
                  </div>
                  <div>
                    <div className="font-condensed text-xs font-bold text-slate-500 uppercase tracking-widest">
                      Email
                    </div>
                    <a
                      href="mailto:hello@aagman.runs-on.dev"
                      className="text-slate-900 font-medium text-lg hover:text-[#A90706] transition-colors"
                    >
                      hello@aagman.runs-on.dev
                    </a>
                  </div>
                </div>

                <div className="border-t border-[#E2DDD5] pt-6">
                  <Link
                    href={`/${locale}/contact`}
                    className="inline-flex items-center gap-2 px-8 py-4 bg-slate-900 text-white font-condensed text-sm font-black uppercase tracking-widest hover:bg-[#A90706] transition-all duration-300 w-full justify-center"
                  >
                    Get in Touch
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
