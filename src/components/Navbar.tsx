"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useTranslation, LocaleCode } from "@/context/TranslationContext";
import Logo from "@/components/Logo";
import {
  ChevronDown,
  Menu,
  X,
  Search,
  Globe,
  ArrowUpRight,
  Sparkles,
  Layers,
  Cpu,
  Building2
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const { t, locale, changeLocale } = useTranslation();
  const pathname = usePathname();
  const router = useRouter();

  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpandedTab, setMobileExpandedTab] = useState<string | null>(null);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const isCompanyRoute = pathname?.includes("/company");
  const isServicesRoute = pathname?.includes("/services");
  const isIndustryRoute = pathname?.includes("/industry");
  const isHomeRoute =
    (pathname === "/" || pathname === `/${locale}` || pathname === `/${locale}/`) &&
    !isCompanyRoute &&
    !isServicesRoute &&
    !isIndustryRoute;

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
    if (item.label === t.nav.service) {
      router.push(`/${locale}/services`);
      return;
    }
    if (item.label === t.nav.contact) {
      router.push(`/${locale}/company/contact`);
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
    { title: "Our Team & Squads", desc: "Dedicated lead architects and global engineering experts.", href: "/company/team" },
    { title: "Our Infrastructure", desc: "Tech capabilities for scalable and reliable solutions.", href: "/company/infrastructure" },
    { title: "Development Methodology", desc: "Seamless development with a focus on quality and speed.", href: "/company/methodology" },
    { title: "Partners & Collaborations", desc: "Building better technology together with IT companies & agencies.", href: "/company/partners" },
    { title: "Global Alliances & Partners", desc: "Strategic cloud partnerships with AWS, GCP, Azure, and Vercel.", href: "/company/alliances" },
    { title: "Career Overview", desc: "Grow with us and build rewarding careers with creative cohorts.", href: "/company/careers" },
  ];

  const serviceData = {
    services: [
      "Digital Product Engineering",
      "Engagement Models",
      "Legacy Software Modernization",
      "MVP Development",
      "SaaS Development",
      "IoT Development",
      "Cloud Computing",
      "Support and Maintenance",
      "Enterprise AI & Content",
    ],
    expertise: [
      "Custom Software Development",
      "Enterprise Automation",
      "Branding & Web SaaS",
      "Mobile App Development",
      "DevOps As a Service",
      "UX and Design",
    ],
    platforms: [
      "Platform Integrations",
      "Amazon Web Services",
      "Microsoft Azure",
      "Google Cloud",
      "Shopify",
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
      "Education and E-learning",
      "Retail",
      "Insurance",
    ],
    solutions: [
      "Marketplace Development",
      "Supply Chain Management",
      "AI Agent For Sales",
    ],
  };

  return (
    <>
      <header
        onMouseLeave={() => setActiveDropdown(null)}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
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
                      className={`font-condensed text-xs sm:text-sm font-normal tracking-wider uppercase transition-colors flex items-center gap-1 whitespace-nowrap cursor-pointer ${
                        active || isHovered
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
                          className={`w-full text-left px-3 py-1.5 text-xs font-condensed font-normal transition-colors cursor-pointer ${
                            locale === c.code
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

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open Navigation Menu"
              className="p-2 bg-white border border-[#E2DDD5] text-slate-900 hover:bg-slate-900 hover:text-white transition-colors cursor-pointer"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>

        </div>

        {/* MEGA DROPDOWNS OVERLAY (DESKTOP) */}
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

                {/* COMPANY DROPDOWN */}
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
                            className={`p-4 border transition-all group text-left cursor-pointer block ${
                              isCardActive
                                ? "border-[#A90706] bg-[#A90706] text-white shadow-lg"
                                : "border-[#E2DDD5] hover:border-slate-900 bg-[#FAF8F5]/50 hover:bg-white text-slate-900"
                            }`}
                          >
                            <h4
                              className={`font-condensed text-base font-bold uppercase transition-colors mb-1.5 flex items-center justify-between ${
                                isCardActive ? "text-white" : "text-slate-900 group-hover:text-[#A90706]"
                              }`}
                            >
                              <span className="flex items-center gap-2">
                                {isCardActive && <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>}
                                <span>{item.title}</span>
                              </span>
                              <ArrowUpRight
                                className={`w-4 h-4 transition-opacity ${
                                  isCardActive ? "opacity-100 text-white" : "opacity-0 group-hover:opacity-100 text-[#A90706]"
                                }`}
                              />
                            </h4>
                            <p className={`text-xs font-normal leading-normal ${isCardActive ? "text-slate-100" : "text-slate-600"}`}>
                              {item.desc}
                            </p>
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
                        // ENGINEERING SERVICES &amp; PLATFORMS
                      </span>
                      <Link
                        href={`/${locale}/services`}
                        onClick={() => setActiveDropdown(null)}
                        className={`font-condensed text-xs font-normal uppercase tracking-widest flex items-center gap-1 cursor-pointer transition-colors ${
                          isServiceActive("all")
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
                        <ul className="space-y-3">
                          {serviceData.services.map((item, i) => {
                            const slug = item.toLowerCase().replace(/ & /g, "-and-").replace(/\s+/g, "-");
                            const active = isServiceActive(slug);
                            return (
                              <li key={i}>
                                <Link
                                  href={`/${locale}/services/${slug}`}
                                  onClick={() => setActiveDropdown(null)}
                                  className={`font-condensed text-base uppercase tracking-wide transition-colors flex items-center gap-2 group cursor-pointer text-left ${
                                    active
                                      ? "text-[#A90706] font-bold underline underline-offset-4 decoration-[#A90706]"
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
                        <ul className="space-y-3">
                          {serviceData.expertise.map((item, i) => {
                            const slug = item.toLowerCase().replace(/ & /g, "-and-").replace(/\s+/g, "-");
                            const active = isServiceActive(slug);
                            return (
                              <li key={i}>
                                <Link
                                  href={`/${locale}/services/${slug}`}
                                  onClick={() => setActiveDropdown(null)}
                                  className={`font-condensed text-base uppercase tracking-wide transition-colors flex items-center gap-2 group cursor-pointer text-left ${
                                    active
                                      ? "text-[#A90706] font-bold underline underline-offset-4 decoration-[#A90706]"
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
                          PLATFORMS &amp; CLOUD
                        </span>
                        <ul className="space-y-3">
                          {serviceData.platforms.map((item, i) => {
                            const slug = item.toLowerCase().replace(/ & /g, "-and-").replace(/\s+/g, "-");
                            const active = isServiceActive(slug);
                            return (
                              <li key={i}>
                                <Link
                                  href={`/${locale}/services/${slug}`}
                                  onClick={() => setActiveDropdown(null)}
                                  className={`font-condensed text-base uppercase tracking-wide transition-colors flex items-center gap-2 group cursor-pointer text-left ${
                                    active
                                      ? "text-[#A90706] font-bold underline underline-offset-4 decoration-[#A90706]"
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
                    </div>
                  </div>
                )}

                {/* PRODUCT DROPDOWN */}
                {activeDropdown === t.nav.product && (
                  <div>
                    <span className="font-condensed text-base font-normal text-[#A90706] uppercase tracking-widest block mb-6 border-b border-[#E2DDD5] pb-2 font-[var(--font-geist)]">
                      // READY-TO-DEPLOY ENTERPRISE PRODUCTS
                    </span>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                      {productData.map((prod, idx) => (
                        <Link
                          key={idx}
                          href={`/${locale}/products/${prod.name.toLowerCase().replace(/ & /g, "-and-").replace(/\s+/g, "-")}`}
                          onClick={() => setActiveDropdown(null)}
                          className="p-5 border border-[#E2DDD5] hover:border-slate-900 bg-[#FAF8F5]/50 hover:bg-white transition-all group text-left cursor-pointer"
                        >
                          <h4 className="font-condensed text-base font-bold uppercase text-slate-900 group-hover:text-[#A90706] transition-colors mb-2">
                            {prod.name}
                          </h4>
                          <p className="text-xs font-normal text-slate-600">
                            {prod.desc}
                          </p>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                {/* INDUSTRY DROPDOWN */}
                {activeDropdown === t.nav.industry && (
                  <div>
                    <div className="flex items-center justify-between border-b border-[#E2DDD5] pb-3 mb-6">
                      <span className="font-condensed text-base font-normal text-[#A90706] uppercase tracking-widest font-[var(--font-geist)]">
                        // INDUSTRY DOMAINS &amp; SOLUTIONS
                      </span>
                      <Link
                        href={`/${locale}/industry`}
                        onClick={() => setActiveDropdown(null)}
                        className={`font-condensed text-xs font-normal uppercase tracking-widest flex items-center gap-1 cursor-pointer transition-colors ${
                          isIndustryActive("all")
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
                        <span className="font-condensed text-xs font-normal text-slate-500 uppercase tracking-widest block mb-4 border-b border-[#E2DDD5] pb-2">
                          INDUSTRY VERTICALS
                        </span>
                        <div className="grid grid-cols-2 gap-3">
                          {industryData.verticals.map((item, i) => {
                            const slug = item.toLowerCase().replace(/ & /g, "-and-").replace(/ and /g, "-and-").replace(/\s+/g, "-");
                            const active = isIndustryActive(slug);
                            return (
                              <Link
                                key={i}
                                href={`/${locale}/industry/${slug}`}
                                onClick={() => setActiveDropdown(null)}
                                className={`font-condensed text-base uppercase tracking-wide transition-colors flex items-center gap-2 group cursor-pointer text-left ${
                                  active
                                    ? "text-[#A90706] font-bold underline underline-offset-4 decoration-[#A90706]"
                                    : "font-normal text-slate-900 hover:text-[#A90706]"
                                }`}
                              >
                                <span className={`w-1.5 h-1.5 ${active ? "bg-[#A90706] animate-pulse" : "bg-slate-400 group-hover:bg-[#A90706]"}`}></span>
                                <span>{item}</span>
                                {active && <span className="text-[10px] bg-[#A90706] text-white px-1.5 py-0.2 rounded-xs ml-auto">OPEN</span>}
                              </Link>
                            );
                          })}
                        </div>
                      </div>

                      <div>
                        <span className="font-condensed text-xs font-normal text-slate-500 uppercase tracking-widest block mb-4 border-b border-[#E2DDD5] pb-2">
                          CUSTOM DOMAIN SOLUTIONS
                        </span>
                        <ul className="space-y-3">
                          {industryData.solutions.map((item, i) => {
                            const slug = item.toLowerCase().replace(/ & /g, "-and-").replace(/ for /g, "-for-").replace(/\s+/g, "-");
                            const active = isIndustryActive(slug);
                            return (
                              <li key={i}>
                                <Link
                                  href={`/${locale}/industry/${slug}`}
                                  onClick={() => setActiveDropdown(null)}
                                  className={`font-condensed text-base uppercase tracking-wide transition-colors flex items-center gap-2 group cursor-pointer text-left ${
                                    active
                                      ? "text-[#A90706] font-bold underline underline-offset-4 decoration-[#A90706]"
                                      : "font-normal text-slate-900 hover:text-[#A90706]"
                                  }`}
                                >
                                  <Sparkles className={`w-3.5 h-3.5 ${active ? "text-[#A90706] animate-pulse" : "text-[#A90706]"}`} />
                                  <span>{item}</span>
                                  {active && <span className="text-[10px] bg-[#A90706] text-white px-1.5 py-0.2 rounded-xs ml-auto">OPEN</span>}
                                </Link>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
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
              <nav className="space-y-4 font-normal">
                {navItems.map((item) => {
                  const isExpanded = mobileExpandedTab === item.label;
                  const active = isTabActive(item.label);

                  return (
                    <div key={item.label} className="border-b border-[#E2DDD5]/60 pb-3">
                      <div
                        onClick={() => {
                          if (item.hasDropdown) {
                            setMobileExpandedTab(isExpanded ? null : item.label);
                          } else {
                            setMobileMenuOpen(false);
                            handleNavClick(item);
                          }
                        }}
                        className="flex items-center justify-between cursor-pointer py-1 group"
                      >
                        <button
                          className={`font-condensed text-2xl font-normal uppercase tracking-wide transition-colors text-left cursor-pointer ${
                            active || isExpanded ? "text-[#A90706]" : "text-slate-900 group-hover:text-[#A90706]"
                          }`}
                        >
                          {item.label}
                        </button>

                        {item.hasDropdown && (
                          <div className="p-2 text-slate-500 group-hover:text-[#A90706]">
                            <ChevronDown className={`w-5 h-5 transition-transform ${isExpanded ? "rotate-180 text-[#A90706]" : ""}`} />
                          </div>
                        )}
                      </div>

                      <AnimatePresence>
                        {item.hasDropdown && isExpanded && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden"
                          >
                            <div className="mt-3 pl-4 space-y-4 border-l-2 border-[#A90706] pt-2 pb-2">

                              {/* COMPANY */}
                              {item.label === t.nav.company && (
                                <div className="space-y-2">
                                  <Link
                                    href={`/${locale}/company/about-us`}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="block font-condensed text-xs font-bold uppercase text-[#A90706] hover:underline mb-2 tracking-wider"
                                  >
                                    VIEW COMPANY OVERVIEW →
                                  </Link>
                                  {companyData.map((sub, idx) => {
                                    const fullHref = `/${locale}${sub.href}`;
                                    return (
                                      <Link
                                        key={idx}
                                        href={fullHref}
                                        prefetch={true}
                                        onClick={() => setMobileMenuOpen(false)}
                                        className="block font-condensed text-base font-normal uppercase text-left text-slate-800 hover:text-[#A90706] transition-colors"
                                      >
                                        {sub.title}
                                      </Link>
                                    );
                                  })}
                                </div>
                              )}

                              {/* SERVICE */}
                              {item.label === t.nav.service && (
                                <div className="space-y-4">
                                  <Link
                                    href={`/${locale}/services`}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="block font-condensed text-xs font-bold uppercase text-[#A90706] hover:underline tracking-wider"
                                  >
                                    VIEW ALL SERVICES →
                                  </Link>

                                  {/* Core Services */}
                                  <div>
                                    <p className="font-condensed text-xs font-bold uppercase tracking-widest text-slate-500 mb-2 border-b border-[#E2DDD5]/60 pb-1">
                                      Core Services
                                    </p>
                                    <div className="space-y-2 pl-1">
                                      {serviceData.services.map((sub, idx) => {
                                        const slug = sub.toLowerCase().replace(/ & /g, "-and-").replace(/\s+/g, "-");
                                        return (
                                          <Link
                                            key={idx}
                                            href={`/${locale}/services/${slug}`}
                                            onClick={() => setMobileMenuOpen(false)}
                                            className="block font-condensed text-sm uppercase text-left font-normal text-slate-800 hover:text-[#A90706] transition-colors"
                                          >
                                            {sub}
                                          </Link>
                                        );
                                      })}
                                    </div>
                                  </div>

                                  {/* Expertise */}
                                  <div>
                                    <p className="font-condensed text-xs font-bold uppercase tracking-widest text-slate-500 mb-2 border-b border-[#E2DDD5]/60 pb-1">
                                      Expertise
                                    </p>
                                    <div className="space-y-2 pl-1">
                                      {serviceData.expertise.map((sub, idx) => {
                                        const slug = sub.toLowerCase().replace(/ & /g, "-and-").replace(/\s+/g, "-");
                                        return (
                                          <Link
                                            key={idx}
                                            href={`/${locale}/services/${slug}`}
                                            onClick={() => setMobileMenuOpen(false)}
                                            className="block font-condensed text-sm uppercase text-left font-normal text-slate-800 hover:text-[#A90706] transition-colors"
                                          >
                                            {sub}
                                          </Link>
                                        );
                                      })}
                                    </div>
                                  </div>

                                  {/* Platforms & Cloud */}
                                  <div>
                                    <p className="font-condensed text-xs font-bold uppercase tracking-widest text-slate-500 mb-2 border-b border-[#E2DDD5]/60 pb-1">
                                      Platforms & Cloud
                                    </p>
                                    <div className="space-y-2 pl-1">
                                      {serviceData.platforms.map((sub, idx) => {
                                        const slug = sub.toLowerCase().replace(/ & /g, "-and-").replace(/\s+/g, "-");
                                        return (
                                          <Link
                                            key={idx}
                                            href={`/${locale}/services/${slug}`}
                                            onClick={() => setMobileMenuOpen(false)}
                                            className="block font-condensed text-sm uppercase text-left font-normal text-slate-800 hover:text-[#A90706] transition-colors"
                                          >
                                            {sub}
                                          </Link>
                                        );
                                      })}
                                    </div>
                                  </div>
                                </div>
                              )}

                              {/* PRODUCT */}
                              {item.label === t.nav.product && (
                                <div className="space-y-3">
                                  <Link
                                    href={`/${locale}/products`}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="block font-condensed text-xs font-bold uppercase text-[#A90706] hover:underline tracking-wider mb-2"
                                  >
                                    VIEW ALL PRODUCTS →
                                  </Link>

                                  <p className="font-condensed text-xs font-bold uppercase tracking-widest text-slate-500 mb-2 border-b border-[#E2DDD5]/60 pb-1">
                                    Ready-To-Deploy Products
                                  </p>

                                  <div className="space-y-2.5">
                                    {productData.map((prod, idx) => {
                                      const slug = prod.name.toLowerCase().replace(/ & /g, "-and-").replace(/\s+/g, "-");
                                      return (
                                        <Link
                                          key={idx}
                                          href={`/${locale}/products/${slug}`}
                                          onClick={() => setMobileMenuOpen(false)}
                                          className="block p-3 border border-[#E2DDD5] bg-white rounded-xs hover:border-[#A90706] transition-colors group"
                                        >
                                          <div className="flex items-center justify-between">
                                            <span className="font-condensed text-sm font-bold uppercase text-slate-900 group-hover:text-[#A90706]">
                                              {prod.name}
                                            </span>
                                            <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#A90706]" />
                                          </div>
                                          <p className="text-xs text-slate-600 font-normal mt-1 line-clamp-2">
                                            {prod.desc}
                                          </p>
                                        </Link>
                                      );
                                    })}
                                  </div>
                                </div>
                              )}

                              {/* INDUSTRY */}
                              {item.label === t.nav.industry && (
                                <div className="space-y-4">
                                  <Link
                                    href={`/${locale}/industry`}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="block font-condensed text-xs font-bold uppercase text-[#A90706] hover:underline tracking-wider"
                                  >
                                    VIEW ALL INDUSTRIES →
                                  </Link>

                                  {/* Verticals */}
                                  <div>
                                    <p className="font-condensed text-xs font-bold uppercase tracking-widest text-slate-500 mb-2 border-b border-[#E2DDD5]/60 pb-1">
                                      Industry Verticals
                                    </p>
                                    <div className="grid grid-cols-1 gap-2 pl-1">
                                      {industryData.verticals.map((sub, idx) => {
                                        const slug = sub.toLowerCase().replace(/ & /g, "-and-").replace(/ and /g, "-and-").replace(/\s+/g, "-");
                                        return (
                                          <Link
                                            key={idx}
                                            href={`/${locale}/industry/${slug}`}
                                            onClick={() => setMobileMenuOpen(false)}
                                            className="block font-condensed text-sm uppercase font-normal text-slate-800 hover:text-[#A90706] transition-colors"
                                          >
                                            {sub}
                                          </Link>
                                        );
                                      })}
                                    </div>
                                  </div>

                                  {/* Solutions */}
                                  <div>
                                    <p className="font-condensed text-xs font-bold uppercase tracking-widest text-slate-500 mb-2 border-b border-[#E2DDD5]/60 pb-1">
                                      Custom Solutions
                                    </p>
                                    <div className="space-y-2 pl-1">
                                      {industryData.solutions.map((sub, idx) => {
                                        const slug = sub.toLowerCase().replace(/ & /g, "-and-").replace(/ for /g, "-for-").replace(/\s+/g, "-");
                                        return (
                                          <Link
                                            key={idx}
                                            href={`/${locale}/industry/${slug}`}
                                            onClick={() => setMobileMenuOpen(false)}
                                            className="flex items-center gap-1.5 font-condensed text-sm uppercase font-normal text-slate-800 hover:text-[#A90706] transition-colors"
                                          >
                                            <Sparkles className="w-3 h-3 text-[#A90706]" />
                                            <span>{sub}</span>
                                          </Link>
                                        );
                                      })}
                                    </div>
                                  </div>
                                </div>
                              )}

                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </nav>

              {/* Region / Country Selector */}
              <div className="pt-6 border-t border-[#E2DDD5]">
                <span className="font-condensed text-xs font-normal text-slate-500 uppercase tracking-widest block mb-3">
                  SELECT COUNTRY / REGION
                </span>
                <div className="flex flex-wrap gap-2">
                  {countries.map((c) => (
                    <button
                      key={c.code}
                      onClick={() => handleSelectCountry(c.code)}
                      className={`px-3 py-1.5 text-xs font-condensed font-semibold uppercase tracking-wider border cursor-pointer transition-colors ${
                        locale === c.code
                          ? "bg-slate-900 text-white border-slate-900"
                          : "bg-white text-slate-800 border-[#E2DDD5] hover:border-slate-800 hover:text-[#A90706]"
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
            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
