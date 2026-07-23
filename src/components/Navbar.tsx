"use client";

import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import Logo from "./Logo";
import { Search, Globe, Menu, X, ArrowUpRight, ChevronDown, Sparkles, Layers, Cpu } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation, LocaleCode } from "@/context/TranslationContext";

interface NavbarProps {
  onBookCallClick?: () => void;
}

export default function Navbar({ onBookCallClick }: NavbarProps) {
  const pathname = usePathname();
  const router = useRouter();
  const { locale, t, changeLocale } = useTranslation();

  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpandedTab, setMobileExpandedTab] = useState<string | null>(null);

  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);

  const isCompanyRoute = pathname?.includes("/company");
  const isServicesRoute = pathname?.includes("/services");
  const isIndustryRoute = pathname?.includes("/industry");
  const isBuildTeamRoute = pathname?.includes("/build-team");
  const isHomeRoute = (pathname === "/" || pathname === `/${locale}` || pathname === `/${locale}/`) && !isCompanyRoute && !isServicesRoute && !isIndustryRoute && !isBuildTeamRoute;

  // Helper to check if a specific service page is active
  const isServiceActive = (slug: string) => {
    if (slug === "all") {
      return (
        pathname === `/services` ||
        pathname === `/${locale}/services` ||
        pathname === `/services/` ||
        pathname === `/${locale}/services/`
      );
    }
    return pathname?.endsWith(`/services/${slug}`) || pathname?.includes(`/services/${slug}/`);
  };

  // Helper to check if a specific industry page is active
  const isIndustryActive = (slug: string) => {
    if (slug === "all") {
      return (
        pathname === `/industry` ||
        pathname === `/${locale}/industry` ||
        pathname === `/industry/` ||
        pathname === `/${locale}/industry/`
      );
    }
    return pathname?.endsWith(`/industry/${slug}`) || pathname?.includes(`/industry/${slug}/`);
  };

  // Helper to check if a specific build-team page is active
  const isBuildTeamActive = (slug: string) => {
    if (slug === "all") {
      return (
        pathname === `/build-team` ||
        pathname === `/${locale}/build-team` ||
        pathname === `/build-team/` ||
        pathname === `/${locale}/build-team/`
      );
    }
    return pathname?.endsWith(`/build-team/${slug}`) || pathname?.includes(`/build-team/${slug}/`);
  };

  // Active Tab determination logic
  const isTabActive = (itemLabel: string) => {
    if (isCompanyRoute) {
      return itemLabel === t.nav.company;
    }
    if (isServicesRoute) {
      return itemLabel === t.nav.service;
    }
    if (isIndustryRoute) {
      return itemLabel === t.nav.industry;
    }
    if (isBuildTeamRoute) {
      return itemLabel === t.nav.buildTeam;
    }
    if (isHomeRoute) {
      return itemLabel === t.nav.home;
    }
    return false;
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  // Fast Client-Side Navigation & Smooth Scroll Helper
  const handleNavClick = (item: { label: string; targetId: string }) => {
    setActiveDropdown(null);

    if (item.label === t.nav.insights) {
      router.push(`/${locale}/insights`);
      return;
    }
    if (item.label === t.nav.buildTeam) {
      router.push(`/${locale}/build-team`);
      return;
    }
    if (item.label === t.nav.product) {
      router.push(`/${locale}/products`);
      return;
    }
    if (item.label === t.nav.industry) {
      router.push(`/${locale}/industry`);
      return;
    }
    if (item.label === t.nav.company) {
      router.push(`/${locale}/company/about-us`);
      return;
    }
    if (item.label === t.nav.contact) {
      router.push(`/${locale}/contact`);
      return;
    }
    if (item.label === t.nav.service) {
      router.push(`/${locale}/services`);
      return;
    }

    if (!isHomeRoute) {
      router.push(`/${locale}`);
      return;
    }
    const el = document.getElementById(item.targetId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleSelectCountry = (code: LocaleCode) => {
    setLangDropdownOpen(false);
    changeLocale(code);
  };

  const navItems = [
    { label: t.nav.home, targetId: "hero", hasDropdown: false },
    { label: t.nav.company, targetId: "company", hasDropdown: true },
    { label: t.nav.service, targetId: "services", hasDropdown: true },
    { label: t.nav.product, targetId: "projects", hasDropdown: true },
    { label: t.nav.industry, targetId: "industry", hasDropdown: true },
    { label: t.nav.buildTeam, targetId: "build-team", hasDropdown: true },
    { label: t.nav.insights, targetId: "projects", hasDropdown: false },
    { label: t.nav.contact, targetId: "company", hasDropdown: false },
  ];

  const countries: { code: LocaleCode; name: string }[] = [
    { code: "en", name: "EN (Global)" },
    { code: "us", name: "US (USA)" },
    { code: "uk", name: "UK (UK)" },
    { code: "in", name: "IN (India / हिन्दी)" },
    { code: "de", name: "DE (Deutschland)" },
    { code: "fr", name: "FR (France)" },
    { code: "es", name: "ES (España)" },
    { code: "ca", name: "CA (Canada)" },
    { code: "eu", name: "EU (Europe)" },
  ];

  // Data for Mega Dropdowns
  const companyData = [
    { title: "About Us", desc: "Transforming challenges into opportunities with tech.", href: "/company/about-us" },
    { title: "Our Team & Squads", desc: "Dedicated 52 lead architects and global engineering experts.", href: "/company/team" },
    { title: "Client Onboarding & Process", desc: "Frictionless Day 1 to 14 onboarding & 2-week risk-free trial.", href: "/company/onboarding" },
    { title: "Why Brosdev (Comparison)", desc: "Why top brands choose Brosdev over traditional agencies & freelancers.", href: "/company/comparison" },
    { title: "Enterprise Case Studies", desc: "Proven engineering case studies, cloud savings & AI transformations.", href: "/case-studies" },
    { title: "Squad Cost Estimator", desc: "Calculate your custom engineering squad budget & timeline.", href: "/cost-calculator" },
    { title: "Free Code & Security Audit", desc: "Request a complimentary 10-point technical health check.", href: "/audit-request" },
    { title: "Our Infrastructure", desc: "Tech capabilities for scalable and reliable solutions.", href: "/company/infrastructure" },
    { title: "Development Methodology", desc: "Seamless development with a focus on quality and speed.", href: "/company/methodology" },
    { title: "Certifications & Alliances", desc: "Industry certifications backing our quality commitment.", href: "/company/certifications" },
    { title: "Career Overview", desc: "Grow with us and build rewarding careers with creative cohorts.", href: "/company/careers" },
  ];

  const serviceData = {
    services: [
      "Digital Product Engineering",
      "Legacy Software Modernization",
      "MVP Development",
      "SaaS Development",
      "IoT Development",
      "Cloud Computing",
      "Support and Maintenance",
      "Mobile App Development",
      "Enterprise AI & Content",
    ],
    expertise: [
      "Custom Software Development",
      "Enterprise Automation",
      "Web Development",
      "Mobile Development",
      "DevOps As a Service",
      "Quality Assurance",
      "Business Analysis",
      "UX and Design",
      "Branding & Web SaaS",
      "Design & Product UX",
    ],
    platforms: [
      "DITAworks Webtop",
      "SAP Commerce Cloud",
      "Odoo",
      "Hubspot",
      "Zoho",
      "Shopify",
      "WordPress",
      "Opencart",
      "Microsoft Power Apps",
      "Microsoft Azure",
      "Amazon Web Services",
      "Google Cloud",
      "OVHCloud",
    ],
  };

  const productData = [
    { name: "OmniFlow AI Engine", desc: "High-throughput autonomous AI workflow platform for enterprises." },
    { name: "ApexPay FinTech Core", desc: "Multi-currency digital wallet & instant settlement payment gateway." },
    { name: "NovaCloud Kubernetes", desc: "Zero-downtime microservices container orchestration suite." },
    { name: "ScaleStack AI CRM", desc: "Intelligent customer relationship management & sales agent." },
  ];

  const industryData = {
    verticals: [
      "Healthcare",
      "Fintech",
      "Manufacturing",
      "Construction",
      "Logistics",
      "Technology",
      "Automotive",
      "Ecommerce",
      "Entertainment and Media",
      "Education and E-learning",
      "Biotech",
      "Retail",
      "Insurance",
    ],
    solutions: [
      "Cryptocurrency Exchange",
      "Advertising Management",
      "Marketplace Development",
      "Supply Chain Management",
      "Inventory Management",
      "AI for Underwriting",
      "AI for Inventory Management",
      "AI Agent For Sales",
    ],
  };

  const buildTeamData = [
    "Hire Dedicated Developers",
    "Hire AI/ML Developer",
    "Hire Mobile App Developers",
    "Hire Full Stack Developers",
    "Hire Software Developers",
    "Hire Web Developers",
    "Hire Web App Developers",
    "Hire Web Designers",
    "Hire Digital Marketing Experts",
    "Hire Blockchain Developer",
  ];

  return (
    <>
      <header
        onMouseLeave={() => setActiveDropdown(null)}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${isScrolled
            ? "bg-[#FAF8F5]/95 backdrop-blur-md border-b border-[#E2DDD5] py-3.5 shadow-xs"
            : "bg-[#FAF8F5]/90 backdrop-blur-xs py-5 border-b border-[#E2DDD5]/60"
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">

          {/* Fast Client-Side Logo Link */}
          <Link
            href={`/${locale}`}
            prefetch={true}
            className="flex items-center group focus:outline-hidden shrink-0 text-left cursor-pointer"
          >
            <Logo className="w-8 h-8 sm:w-10 sm:h-10" showText={false} />
          </Link>

          {/* Desktop Navigation Group */}
          <div className="hidden lg:flex items-center gap-3">

            {/* Roboto Condensed Nav Links */}
            <nav className="flex items-center gap-4 xl:gap-5">
              {navItems.map((item) => {
                const active = isTabActive(item.label);
                const isHovered = activeDropdown === item.label;

                return (
                  <div
                    key={item.label}
                    onMouseEnter={() => item.hasDropdown && setActiveDropdown(item.label)}
                    className="relative py-2"
                  >
                    <button
                      onClick={() => handleNavClick(item)}
                      className={`font-condensed text-xs sm:text-sm font-normal tracking-wider uppercase transition-colors flex items-center gap-1 whitespace-nowrap cursor-pointer ${active || isHovered
                          ? "text-[#A90706]"
                          : "text-slate-800 hover:text-[#A90706]"
                        }`}
                    >
                      <span>{item.label}</span>
                      {item.hasDropdown && (
                        <ChevronDown className={`w-3 h-3 transition-transform ${isHovered || active ? "rotate-180 text-[#A90706]" : "text-slate-400"}`} />
                      )}
                    </button>
                  </div>
                );
              })}
            </nav>

            {/* Vertical Divider | */}
            <div className="h-4 w-px bg-[#E2DDD5] mx-1.5 shrink-0" />

            {/* Search Icon & Global Country Code Dropdown */}
            <div className="flex items-center gap-2 relative">

              {/* Search Toggle */}
              <div className="relative">
                {searchOpen ? (
                  <motion.div
                    initial={{ width: 0, opacity: 0 }}
                    animate={{ width: 200, opacity: 1 }}
                    exit={{ width: 0, opacity: 0 }}
                    className="flex items-center bg-white border border-[#E2DDD5] px-2.5 py-1"
                  >
                    <Search className="w-3.5 h-3.5 text-slate-500 mr-2 shrink-0" />
                    <input
                      type="text"
                      autoFocus
                      placeholder={t.nav.searchPlaceholder}
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full bg-transparent text-xs font-condensed font-bold text-slate-900 focus:outline-hidden"
                    />
                    <button
                      onClick={() => setSearchOpen(false)}
                      className="text-slate-400 hover:text-slate-800 text-xs ml-1 cursor-pointer"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  </motion.div>
                ) : (
                  <button
                    onClick={() => setSearchOpen(true)}
                    aria-label="Search"
                    className="p-2 border border-[#E2DDD5] hover:border-slate-900 bg-white flex items-center justify-center text-slate-800 hover:text-[#A90706] transition-colors cursor-pointer"
                  >
                    <Search className="w-4 h-4" />
                  </button>
                )}
              </div>

              {/* Global Country Code Selector */}
              <div className="relative">
                <button
                  onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                  aria-label="Country Language Selector"
                  className="h-8.5 px-2.5 border border-[#E2DDD5] hover:border-slate-900 bg-white flex items-center gap-1.5 text-xs font-normal font-condensed text-slate-800 hover:text-[#A90706] transition-colors cursor-pointer uppercase"
                >
                  <Globe className="w-3.5 h-3.5 text-slate-700" />
                  <span>{locale.toUpperCase()}</span>
                </button>

                <AnimatePresence>
                  {langDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 5 }}
                      className="absolute right-0 mt-2 w-44 bg-white border border-[#E2DDD5] shadow-xl z-50 py-1"
                    >
                      {countries.map((c) => (
                        <button
                          key={c.code}
                          onClick={() => handleSelectCountry(c.code)}
                          className={`w-full text-left px-3 py-1.5 text-xs font-condensed font-normal transition-colors cursor-pointer ${locale === c.code
                              ? "bg-slate-900 text-white"
                              : "text-slate-700 hover:bg-[#FAF8F5] hover:text-[#A90706]"
                            }`}
                        >
                          {c.name}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

            </div>

          </div>

          {/* Mobile Action: Hamburger Toggle Only */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open Full Page Navigation Menu"
              className="p-2.5 bg-white border border-[#E2DDD5] text-slate-800 hover:bg-[#FAF8F5] cursor-pointer"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>

        </div>

        {/* DESKTOP MEGA DROPDOWN PANELS */}
        <AnimatePresence>
          {activeDropdown && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 8 }}
              transition={{ duration: 0.18 }}
              onMouseEnter={() => setActiveDropdown(activeDropdown)}
              onMouseLeave={() => setActiveDropdown(null)}
              className="hidden lg:block absolute left-0 right-0 top-full bg-[#FAF8F5] border-b border-[#E2DDD5] shadow-2xl z-50 py-8 px-4 sm:px-6 lg:px-8"
            >
              <div className="max-w-7xl mx-auto bg-white border border-[#E2DDD5] p-8 shadow-sm">

                {/* COMPANY DROPDOWN WITH INSTANT NEXT.JS LINK ROUTING & ACCURATE CARD HIGHLIGHTING */}
                {activeDropdown === t.nav.company && (
                  <div>
                    <span className="font-condensed text-base font-normal text-[#A90706] uppercase tracking-widest block mb-6 border-b border-[#E2DDD5] pb-2 font-[var(--font-geist)]">
                      // COMPANY OVERVIEW
                    </span>
                    <div className="grid grid-cols-3 gap-6">
                      {companyData.map((item, idx) => {
                        const fullHref = `/${locale}${item.href}`;
                        const isCardActive =
                          pathname === fullHref ||
                          pathname === item.href ||
                          pathname?.endsWith(item.href);

                        return (
                          <Link
                            key={idx}
                            href={fullHref}
                            prefetch={true}
                            onClick={() => {
                              setActiveDropdown(null);
                            }}
                            className={`p-4 border transition-all group text-left cursor-pointer block ${isCardActive
                                ? "border-[#A90706] bg-[#A90706] text-white shadow-lg"
                                : "border-[#E2DDD5] hover:border-slate-900 bg-[#FAF8F5]/50 hover:bg-white text-slate-900"
                              }`}
                          >
                            <h4 className={`font-condensed text-sm font-normal uppercase transition-colors mb-1.5 flex items-center justify-between ${isCardActive ? "text-white" : "text-slate-900 group-hover:text-[#A90706]"
                              }`}>
                              <span className="flex items-center gap-2">
                                {isCardActive && <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>}
                                <span>{item.title}</span>
                              </span>
                              <ArrowUpRight className={`w-4 h-4 transition-opacity ${isCardActive ? "opacity-100 text-white" : "opacity-0 group-hover:opacity-100 text-[#A90706]"
                                }`} />
                            </h4>
                            <p className={`text-xs font-normal leading-normal ${isCardActive ? "text-slate-100" : "text-slate-600"
                              }`}>{item.desc}</p>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* SERVICE DROPDOWN */}
                {activeDropdown === t.nav.service && (
                  <div>
                    <div className="flex items-center justify-between border-b border-[#E2DDD5] pb-3 mb-6">
                      <span className="font-condensed text-base font-normal text-[#A90706] uppercase tracking-widest font-[var(--font-geist)]">
                        // ENGINEERING SERVICES & PLATFORMS
                      </span>
                      <Link
                        href={`/${locale}/services`}
                        onClick={() => setActiveDropdown(null)}
                        className={`font-condensed text-xs font-normal uppercase tracking-widest flex items-center gap-1 cursor-pointer transition-colors ${isServiceActive("all")
                            ? "text-[#A90706] bg-red-50 border border-[#A90706]/30 px-2 py-1"
                            : "text-slate-900 hover:text-[#A90706]"
                          }`}
                      >
                        <span>VIEW ALL SERVICES</span>
                        <ArrowUpRight className="w-3.5 h-3.5 text-[#A90706]" />
                      </Link>
                    </div>

                    <div className="grid grid-cols-3 gap-8">
                      <div>
                        <span className="font-condensed text-xs font-normal text-slate-500 uppercase tracking-widest block mb-4 border-b border-[#E2DDD5] pb-2">
                          CORE SERVICES
                        </span>
                        <ul className="space-y-2.5">
                          {serviceData.services.map((item, i) => {
                            const slug = item.toLowerCase().replace(/ & /g, "-and-").replace(/\s+/g, "-");
                            const active = isServiceActive(slug);
                            return (
                              <li key={i}>
                                <Link
                                  href={`/${locale}/services/${slug}`}
                                  onClick={() => setActiveDropdown(null)}
                                  className={`font-condensed text-sm uppercase tracking-wide transition-colors flex items-center gap-2 group cursor-pointer text-left ${active
                                      ? "text-[#A90706] font-normal underline underline-offset-4 decoration-[#A90706]"
                                      : "font-normal text-slate-900 hover:text-[#A90706]"
                                    }`}
                                >
                                  <span className={`w-1.5 h-1.5 ${active ? "bg-[#A90706] animate-pulse" : "bg-[#A90706]"}`}></span>
                                  <span>{item}</span>
                                  {active && <span className="text-[10px] bg-[#A90706] text-white px-1.5 py-0.2 rounded-xs ml-auto">OPEN</span>}
                                </Link>
                              </li>
                            );
                          })}
                        </ul>
                      </div>

                      <div>
                        <span className="font-condensed text-xs font-normal text-slate-500 uppercase tracking-widest block mb-4 border-b border-[#E2DDD5] pb-2">
                          EXPERTISE
                        </span>
                        <ul className="space-y-2.5">
                          {serviceData.expertise.map((item, i) => {
                            const slug = item.toLowerCase().replace(/ & /g, "-and-").replace(/\s+/g, "-");
                            const active = isServiceActive(slug);
                            return (
                              <li key={i}>
                                <Link
                                  href={`/${locale}/services/${slug}`}
                                  onClick={() => setActiveDropdown(null)}
                                  className={`font-condensed text-sm uppercase tracking-wide transition-colors flex items-center gap-2 group cursor-pointer text-left ${active
                                      ? "text-[#A90706] font-normal underline underline-offset-4 decoration-[#A90706]"
                                      : "font-normal text-slate-900 hover:text-[#A90706]"
                                    }`}
                                >
                                  <span className={`w-1.5 h-1.5 ${active ? "bg-[#A90706] animate-pulse" : "bg-slate-400 group-hover:bg-[#A90706]"}`}></span>
                                  <span>{item}</span>
                                  {active && <span className="text-[10px] bg-[#A90706] text-white px-1.5 py-0.2 rounded-xs ml-auto">OPEN</span>}
                                </Link>
                              </li>
                            );
                          })}
                        </ul>
                      </div>

                      <div>
                        <span className="font-condensed text-xs font-normal text-slate-500 uppercase tracking-widest block mb-4 border-b border-[#E2DDD5] pb-2">
                          PRODUCTS & PLATFORMS
                        </span>
                        <div className="flex flex-wrap gap-2">
                          {serviceData.platforms.map((item, i) => {
                            const slug = item.toLowerCase().replace(/ & /g, "-and-").replace(/\s+/g, "-");
                            const active = isServiceActive(slug);
                            return (
                              <Link
                                key={i}
                                href={`/${locale}/services/${slug}`}
                                onClick={() => setActiveDropdown(null)}
                                className={`font-condensed text-xs font-normal px-2.5 py-1 uppercase tracking-wide transition-all cursor-pointer inline-block ${active
                                    ? "bg-[#A90706] text-white border border-[#A90706] shadow-sm font-normal"
                                    : "bg-[#FAF8F5] text-slate-800 border border-[#E2DDD5] hover:border-slate-900 hover:text-[#A90706]"
                                  }`}
                              >
                                {item} {active && "✓"}
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* PRODUCT DROPDOWN */}
                {activeDropdown === t.nav.product && (
                  <div>
                    <div className="flex items-center justify-between border-b border-[#E2DDD5] pb-3 mb-6">
                      <span className="font-condensed text-base font-normal text-[#A90706] uppercase tracking-widest font-[var(--font-geist)]">
                        // PROPRIETARY IT PRODUCTS
                      </span>
                      <Link
                        href={`/${locale}/products`}
                        onClick={() => setActiveDropdown(null)}
                        className="font-condensed text-xs font-normal uppercase tracking-widest flex items-center gap-1 cursor-pointer text-slate-900 hover:text-[#A90706] transition-colors"
                      >
                        <span>VIEW ALL PRODUCTS</span>
                        <ArrowUpRight className="w-3.5 h-3.5 text-[#A90706]" />
                      </Link>
                    </div>

                    <div className="grid grid-cols-2 gap-6">
                      {productData.map((item, idx) => {
                        const slug = item.name.toLowerCase().replace(/ & /g, "-and-").replace(/\s+/g, "-");
                        return (
                          <Link
                            key={idx}
                            href={`/${locale}/products/${slug}`}
                            onClick={() => setActiveDropdown(null)}
                            className="p-5 border border-[#E2DDD5] hover:border-slate-900 bg-[#FAF8F5]/50 hover:bg-white transition-all group flex items-start gap-4 text-left cursor-pointer"
                          >
                            <div className="p-3 bg-slate-900 text-white shrink-0">
                              <Layers className="w-5 h-5 text-[#A90706]" />
                            </div>
                            <div>
                              <h4 className="font-condensed text-base font-normal text-slate-900 uppercase group-hover:text-[#A90706] transition-colors mb-1 font-[var(--font-geist)]">
                                {item.name}
                              </h4>
                              <p className="text-xs text-slate-600 font-normal">{item.desc}</p>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* INDUSTRY DROPDOWN */}
                {activeDropdown === t.nav.industry && (
                  <div>
                    <div className="flex items-center justify-between border-b border-[#E2DDD5] pb-3 mb-6">
                      <span className="font-condensed text-base font-normal text-[#A90706] uppercase tracking-widest font-[var(--font-geist)]">
                        // INDUSTRY VERTICALS & CUSTOM SOLUTIONS
                      </span>
                      <Link
                        href={`/${locale}/industry`}
                        onClick={() => setActiveDropdown(null)}
                        className={`font-condensed text-xs font-normal uppercase tracking-widest flex items-center gap-1 cursor-pointer transition-colors ${isIndustryActive("all")
                            ? "text-[#A90706] bg-red-50 border border-[#A90706]/30 px-2 py-1"
                            : "text-slate-900 hover:text-[#A90706]"
                          }`}
                      >
                        <span>VIEW ALL INDUSTRIES</span>
                        <ArrowUpRight className="w-3.5 h-3.5 text-[#A90706]" />
                      </Link>
                    </div>

                    <div className="grid grid-cols-2 gap-8">
                      <div>
                        <span className="font-condensed text-xs font-black text-slate-500 uppercase tracking-widest block mb-4 border-b border-[#E2DDD5] pb-2">
                          INDUSTRY VERTICALS
                        </span>
                        <div className="grid grid-cols-2 gap-2.5">
                          {industryData.verticals.map((item, i) => {
                            const slug = item.toLowerCase().replace(/ & /g, "-and-").replace(/ and /g, "-and-").replace(/\s+/g, "-");
                            const active = isIndustryActive(slug);
                            return (
                              <Link
                                key={i}
                                href={`/${locale}/industry/${slug}`}
                                onClick={() => setActiveDropdown(null)}
                                className={`font-condensed text-sm uppercase tracking-wide transition-colors flex items-center gap-2 group cursor-pointer text-left ${active
                                    ? "text-[#A90706] font-normal underline underline-offset-4 decoration-[#A90706]"
                                    : "font-normal text-slate-900 hover:text-[#A90706]"
                                  }`}
                              >
                                <span className={`w-1.5 h-1.5 ${active ? "bg-[#A90706] animate-pulse" : "bg-slate-900 group-hover:bg-[#A90706]"}`}></span>
                                <span>{item}</span>
                                {active && <span className="text-[10px] bg-[#A90706] text-white px-1 py-0.2 rounded-xs ml-auto">OPEN</span>}
                              </Link>
                            );
                          })}
                        </div>
                      </div>

                      <div>
                        <span className="font-condensed text-xs font-black text-slate-500 uppercase tracking-widest block mb-4 border-b border-[#E2DDD5] pb-2">
                          CUSTOM SOLUTIONS
                        </span>
                        <div className="grid grid-cols-1 gap-2.5">
                          {industryData.solutions.map((item, i) => {
                            const slug = item.toLowerCase().replace(/ & /g, "-and-").replace(/ for /g, "-for-").replace(/\s+/g, "-");
                            const active = isIndustryActive(slug);
                            return (
                              <Link
                                key={i}
                                href={`/${locale}/industry/${slug}`}
                                onClick={() => setActiveDropdown(null)}
                                className={`font-condensed text-sm uppercase tracking-wide transition-colors flex items-center gap-2 group cursor-pointer text-left ${active
                                    ? "text-[#A90706] font-normal underline underline-offset-4 decoration-[#A90706]"
                                    : "font-normal text-slate-900 hover:text-[#A90706]"
                                  }`}
                              >
                                <Sparkles className={`w-3.5 h-3.5 ${active ? "text-[#A90706] animate-pulse" : "text-[#A90706]"}`} />
                                <span>{item}</span>
                                {active && <span className="text-[10px] bg-[#A90706] text-white px-1.5 py-0.2 rounded-xs ml-auto">OPEN</span>}
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* BUILD YOUR TEAM DROPDOWN */}
                {activeDropdown === t.nav.buildTeam && (
                  <div>
                    <div className="flex items-center justify-between border-b border-[#E2DDD5] pb-3 mb-6">
                      <span className="font-condensed text-base font-normal text-[#A90706] uppercase tracking-widest font-[var(--font-geist)]">
                        // HIRE PRE-VETTED DEVELOPERS &amp; AI ENGINEERS
                      </span>
                      <Link
                        href={`/${locale}/build-team`}
                        onClick={() => setActiveDropdown(null)}
                        className={`font-condensed text-xs font-normal uppercase tracking-widest flex items-center gap-1 cursor-pointer transition-colors ${
                          isBuildTeamActive("all")
                            ? "text-[#A90706] bg-red-50 border border-[#A90706]/30 px-2 py-1"
                            : "text-slate-900 hover:text-[#A90706]"
                        }`}
                      >
                        <span>VIEW ALL ROLES</span>
                        <ArrowUpRight className="w-3.5 h-3.5 text-[#A90706]" />
                      </Link>
                    </div>

                    <div className="grid grid-cols-3 gap-3">
                      {buildTeamData.map((item, i) => {
                        const slug = item === "Contact Us" 
                          ? "hire-dedicated-developers" 
                          : item.toLowerCase().replace(/ & /g, "-and-").replace(/\//g, "-").replace(/ /g, "-");
                        const active = isBuildTeamActive(slug);
                        return (
                          <Link
                            key={i}
                            href={item === "Contact Us" ? `/${locale}/company/contact` : `/${locale}/build-team/${slug}`}
                            onClick={() => setActiveDropdown(null)}
                            className={`p-3 border font-condensed text-xs uppercase tracking-wider transition-all flex items-center justify-between group cursor-pointer ${
                              active
                                ? "bg-red-50 border-[#A90706] text-[#A90706] font-normal shadow-sm"
                                : "bg-[#FAF8F5] border-[#E2DDD5] hover:border-slate-900 hover:bg-white text-slate-900 font-normal"
                            }`}
                          >
                            <div className="flex items-center gap-2">
                              <Cpu className={`w-4 h-4 ${active ? "text-[#A90706]" : "text-slate-500 group-hover:text-[#A90706]"}`} />
                              <span>{item}</span>
                            </div>
                            {active ? (
                              <span className="text-[10px] bg-[#A90706] text-white px-1.5 py-0.2 rounded-xs">OPEN</span>
                            ) : (
                              <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#A90706]" />
                            )}
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                )}

              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </header>

      {/* FULL PAGE MOBILE OVERLAY NAVIGATION MENU */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 bg-[#FAF8F5] flex flex-col justify-between overflow-y-auto"
          >
            {/* Top Bar */}
            <div className="px-4 py-5 border-b border-[#E2DDD5] flex items-center justify-between bg-[#FAF8F5]">
              <Link
                href={`/${locale}`}
                prefetch={true}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center cursor-pointer"
              >
                <Logo className="w-8 h-8" showText={false} />
              </Link>

              <button
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close Mobile Navigation"
                className="p-2.5 bg-white border border-[#E2DDD5] text-slate-900 hover:bg-slate-900 hover:text-white transition-colors cursor-pointer"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Middle Nav Items */}
            <div className="px-6 py-8 space-y-6 flex-1 overflow-y-auto">
              {/* Navigation Links Accordion */}
              <nav className="space-y-4 font-normal">
                {navItems.map((item) => {
                  const isExpanded = mobileExpandedTab === item.label;
                  const active = isTabActive(item.label);

                  return (
                    <div key={item.label} className="border-b border-[#E2DDD5]/60 pb-3">
                      <div className="flex items-center justify-between">
                        <button
                          onClick={() => {
                            setMobileMenuOpen(false);
                            handleNavClick(item);
                          }}
                          className={`font-condensed text-2xl font-normal uppercase tracking-wide transition-colors cursor-pointer text-left ${active ? "text-[#A90706]" : "text-slate-900 hover:text-[#A90706]"
                            }`}
                        >
                          {item.label}
                        </button>

                        {item.hasDropdown && (
                          <button
                            onClick={() => setMobileExpandedTab(isExpanded ? null : item.label)}
                            className="p-2 text-slate-500 cursor-pointer"
                          >
                            <ChevronDown className={`w-5 h-5 transition-transform ${isExpanded ? "rotate-180 text-[#A90706]" : ""}`} />
                          </button>
                        )}
                      </div>

                      {item.hasDropdown && isExpanded && (
                        <div className="mt-3 pl-4 space-y-2.5 border-l-2 border-[#A90706] pt-2">

                          {/* COMPANY */}
                          {item.label === t.nav.company && (
                            <>
                              <Link
                                href={`/${locale}/company/about-us`}
                                onClick={() => setMobileMenuOpen(false)}
                                className={`block font-condensed text-xs font-normal uppercase text-left cursor-pointer pb-2 border-b border-[#E2DDD5] ${pathname?.includes("/company/about-us") ? "text-[#A90706]" : "text-slate-500 hover:text-[#A90706]"}`}
                              >
                                ABOUT US / COMPANY OVERVIEW {pathname?.includes("/company/about-us") && "✓"}
                              </Link>
                              {companyData.map((sub, idx) => {
                                const fullHref = `/${locale}${sub.href}`;
                                const isCardActive =
                                  pathname === fullHref ||
                                  pathname === sub.href ||
                                  pathname?.endsWith(sub.href);
                                return (
                                  <Link
                                    key={idx}
                                    href={fullHref}
                                    prefetch={true}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className={`block font-condensed text-sm font-normal uppercase text-left cursor-pointer ${isCardActive ? "text-[#A90706]" : "text-slate-800 hover:text-[#A90706]"}`}
                                  >
                                    {sub.title} {isCardActive && "✓"}
                                  </Link>
                                );
                              })}
                            </>
                          )}

                          {/* SERVICE */}
                          {item.label === t.nav.service && (
                            <>
                              <Link
                                href={`/${locale}/services`}
                                onClick={() => setMobileMenuOpen(false)}
                                className={`block font-condensed text-xs font-normal uppercase text-left cursor-pointer pb-2 border-b border-[#E2DDD5] ${isServiceActive("all") ? "text-[#A90706]" : "text-slate-500 hover:text-[#A90706]"}`}
                              >
                                VIEW ALL SERVICES {isServiceActive("all") && "✓"}
                              </Link>

                              <p className="font-condensed text-[10px] font-black uppercase tracking-widest text-slate-400 pt-1">Core Services</p>
                              {serviceData.services.map((sub, idx) => {
                                const slug = sub.toLowerCase().replace(/ & /g, "-and-").replace(/\s+/g, "-");
                                const isActive = isServiceActive(slug);
                                return (
                                  <Link
                                    key={idx}
                                    href={`/${locale}/services/${slug}`}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className={`block font-condensed text-sm uppercase text-left cursor-pointer ${isActive ? "text-[#A90706]" : "font-normal text-slate-800 hover:text-[#A90706]"}`}
                                  >
                                    {sub} {isActive && "✓"}
                                  </Link>
                                );
                              })}

                              <p className="font-condensed text-[10px] font-black uppercase tracking-widest text-slate-400 pt-2">Expertise</p>
                              {serviceData.expertise.map((sub, idx) => {
                                const slug = sub.toLowerCase().replace(/ & /g, "-and-").replace(/\s+/g, "-");
                                const isActive = isServiceActive(slug);
                                return (
                                  <Link
                                    key={idx}
                                    href={`/${locale}/services/${slug}`}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className={`block font-condensed text-sm uppercase text-left cursor-pointer ${isActive ? "text-[#A90706]" : "font-normal text-slate-800 hover:text-[#A90706]"}`}
                                  >
                                    {sub} {isActive && "✓"}
                                  </Link>
                                );
                              })}

                              <p className="font-condensed text-[10px] font-black uppercase tracking-widest text-slate-400 pt-2">Platforms</p>
                              {serviceData.platforms.map((sub, idx) => {
                                const slug = sub.toLowerCase().replace(/ & /g, "-and-").replace(/\s+/g, "-");
                                const isActive = isServiceActive(slug);
                                return (
                                  <Link
                                    key={idx}
                                    href={`/${locale}/services/${slug}`}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className={`block font-condensed text-sm uppercase text-left cursor-pointer ${isActive ? "text-[#A90706]" : "font-normal text-slate-800 hover:text-[#A90706]"}`}
                                  >
                                    {sub} {isActive && "✓"}
                                  </Link>
                                );
                              })}
                            </>
                          )}

                          {/* PRODUCT */}
                          {item.label === t.nav.product && (
                            <>
                              <Link
                                href={`/${locale}/products`}
                                onClick={() => setMobileMenuOpen(false)}
                                className="block font-condensed text-xs font-normal uppercase text-left cursor-pointer pb-2 border-b border-[#E2DDD5] text-slate-500 hover:text-[#A90706]"
                              >
                                VIEW ALL PRODUCTS
                              </Link>
                              {productData.map((sub, idx) => {
                                const slug = sub.name.toLowerCase().replace(/ & /g, "-and-").replace(/\s+/g, "-");
                                return (
                                  <Link
                                    key={idx}
                                    href={`/${locale}/products/${slug}`}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="block font-condensed text-sm font-normal uppercase text-left cursor-pointer text-slate-800 hover:text-[#A90706]"
                                  >
                                    {sub.name}
                                  </Link>
                                );
                              })}
                            </>
                          )}

                          {/* INDUSTRY */}
                          {item.label === t.nav.industry && (
                            <>
                              <Link
                                href={`/${locale}/industry`}
                                onClick={() => setMobileMenuOpen(false)}
                                className={`block font-condensed text-xs font-normal uppercase text-left cursor-pointer pb-2 border-b border-[#E2DDD5] ${isIndustryActive("all") ? "text-[#A90706]" : "text-slate-500 hover:text-[#A90706]"}`}
                              >
                                VIEW ALL INDUSTRIES {isIndustryActive("all") && "✓"}
                              </Link>

                              <p className="font-condensed text-[10px] font-black uppercase tracking-widest text-slate-400 pt-1">Industry Verticals</p>
                              {industryData.verticals.map((sub, idx) => {
                                const slug = sub.toLowerCase().replace(/ & /g, "-and-").replace(/ and /g, "-and-").replace(/\s+/g, "-");
                                const isActive = isIndustryActive(slug);
                                return (
                                  <Link
                                    key={idx}
                                    href={`/${locale}/industry/${slug}`}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className={`block font-condensed text-sm uppercase text-left cursor-pointer ${isActive ? "text-[#A90706]" : "font-normal text-slate-800 hover:text-[#A90706]"}`}
                                  >
                                    {sub} {isActive && "✓"}
                                  </Link>
                                );
                              })}

                              <p className="font-condensed text-[10px] font-black uppercase tracking-widest text-slate-400 pt-2">Custom Solutions</p>
                              {industryData.solutions.map((sub, idx) => {
                                const slug = sub.toLowerCase().replace(/ & /g, "-and-").replace(/ for /g, "-for-").replace(/\s+/g, "-");
                                const isActive = isIndustryActive(slug);
                                return (
                                  <Link
                                    key={idx}
                                    href={`/${locale}/industry/${slug}`}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className={`block font-condensed text-sm uppercase text-left cursor-pointer ${isActive ? "text-[#A90706]" : "font-normal text-slate-800 hover:text-[#A90706]"}`}
                                  >
                                    {sub} {isActive && "✓"}
                                  </Link>
                                );
                              })}
                            </>
                          )}

                          {/* BUILD YOUR TEAM */}
                          {item.label === t.nav.buildTeam && (
                            <>
                              <Link
                                href={`/${locale}/build-team`}
                                onClick={() => setMobileMenuOpen(false)}
                                className={`block font-condensed text-xs font-normal uppercase text-left cursor-pointer pb-2 border-b border-[#E2DDD5] ${isBuildTeamActive("all") ? "text-[#A90706]" : "text-slate-500 hover:text-[#A90706]"}`}
                              >
                                VIEW ALL ROLES {isBuildTeamActive("all") && "✓"}
                              </Link>
                              {buildTeamData.map((sub, idx) => {
                                const slug = sub.toLowerCase().replace(/ & /g, "-and-").replace(/\//g, "-").replace(/ /g, "-");
                                const isActive = isBuildTeamActive(slug);
                                return (
                                  <Link
                                    key={idx}
                                    href={`/${locale}/build-team/${slug}`}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className={`block font-condensed text-sm uppercase text-left cursor-pointer ${isActive ? "text-[#A90706]" : "font-normal text-slate-800 hover:text-[#A90706]"}`}
                                  >
                                    {sub} {isActive && "✓"}
                                  </Link>
                                );
                              })}
                            </>
                          )}

                        </div>
                      )}
                    </div>
                  );
                })}
              </nav>

              {/* Region / Country Selector (Moved to Bottom) */}
              <div className="pt-6 border-t border-[#E2DDD5]">
                <span className="font-condensed text-xs font-normal text-slate-500 uppercase tracking-widest block mb-3">
                  SELECT COUNTRY / REGION
                </span>
                <div className="flex flex-wrap gap-2">
                  {countries.map((c) => (
                    <button
                      key={c.code}
                      onClick={() => handleSelectCountry(c.code)}
                      className={`px-3 py-1.5 text-xs font-condensed font-normal uppercase tracking-wider border cursor-pointer ${locale === c.code
                          ? "bg-slate-900 text-white border-slate-900"
                          : "bg-white text-slate-800 border-[#E2DDD5]"
                        }`}
                    >
                      {c.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Mobile Footer CTAs */}
            <div className="p-6 border-t border-[#E2DDD5] bg-white space-y-3">
              <Link
                href={`/${locale}/book-consultation`}
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-4 bg-[#A90706] hover:bg-[#880504] text-white font-condensed text-xs font-normal tracking-widest uppercase transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>BOOK A CONSULTATION</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>

              <div className="text-center font-condensed text-[11px] font-normal text-slate-500 uppercase tracking-widest pt-1">
                BROSDEV • EST. 2024
              </div>
            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
