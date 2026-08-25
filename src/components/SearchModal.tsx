"use client";

import { useState, useEffect, useRef, useMemo } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

import {
  Search as SearchIcon,
  X as XIcon,
  ArrowRight,
  ArrowUpRight,
  Sparkles as SparklesIcon,
  Layers as LayersIcon,
  Building2 as BuildingIcon,
  Cpu as CpuIcon,
  FileText as FileTextIcon,
  PhoneCall as PhoneCallIcon,
  Briefcase as BriefcaseIcon,
  Command as CommandIcon,
  ChevronRight as ChevronRightIcon,
  Globe as GlobeIcon,
  ShieldCheck as ShieldIcon
} from "lucide-react";
import { SERVICES_DATA } from "@/data/servicesData";
import { INDUSTRY_DATA } from "@/data/industryData";

interface SearchItem {
  id: string;
  title: string;
  category: "Services" | "Industry Verticals" | "Company" | "Pages & Resources";
  description: string;
  href: string;
  keywords: string[];
  icon: any;
}

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  locale: string;
}

export default function SearchModal({ isOpen, onClose, locale }: SearchModalProps) {
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);

  // Popular search suggestions
  const popularSearches = [
    { label: "Digital Product Engineering", searchTerm: "Digital Product Engineering" },
    { label: "Healthcare IT & Telemedicine", searchTerm: "Healthcare" },
    { label: "Fintech & Payment Core", searchTerm: "Fintech" },
    { label: "Cloud Computing & AWS", searchTerm: "Cloud" },
    { label: "Career Opportunities", searchTerm: "Careers" },
    { label: "Book a Consultation", searchTerm: "Consultation" },
    { label: "About Brosdev", searchTerm: "About" },
    { label: "Case Studies", searchTerm: "Case Studies" },
  ];

  // Comprehensive Search Index
  const searchIndex: SearchItem[] = useMemo(() => {
    const items: SearchItem[] = [];

    // Company & Core Pages
    const mainPages: SearchItem[] = [
      {
        id: "about-us",
        title: "About Us & Company Vision",
        category: "Company",
        description: "Transforming complex business challenges into scalable software with engineering precision.",
        href: "/company/about-us",
        keywords: ["about", "company", "vision", "mission", "who we are", "brosdev", "overview"],
        icon: BuildingIcon,
      },
      {
        id: "company-team",
        title: "Our Team & Engineering Squads",
        category: "Company",
        description: "Dedicated lead architects, full-stack engineers, and global technology cohorts.",
        href: "/company/team",
        keywords: ["team", "squads", "engineers", "architects", "staffing", "developers", "people"],
        icon: BriefcaseIcon,
      },
      {
        id: "company-infrastructure",
        title: "Tech Infrastructure & Capabilities",
        category: "Company",
        description: "Cloud-native capabilities, devops security practices, and reliable systems.",
        href: "/company/infrastructure",
        keywords: ["infrastructure", "devops", "cloud", "security", "architecture", "tech stack"],
        icon: CpuIcon,
      },
      {
        id: "company-methodology",
        title: "Development Methodology",
        category: "Company",
        description: "Agile sprints, test-driven development, zero-downtime deployment pipelines.",
        href: "/company/methodology",
        keywords: ["methodology", "agile", "process", "sprints", "ci/cd", "workflow", "quality"],
        icon: LayersIcon,
      },
      {
        id: "company-partners",
        title: "Partners & Collaborations",
        category: "Company",
        description: "Collaborating with IT agencies, tech platforms, and global enterprises.",
        href: "/company/partners",
        keywords: ["partners", "collaborations", "agencies", "alliances", "ecosystem"],
        icon: GlobeIcon,
      },
      {
        id: "company-alliances",
        title: "Global Cloud Alliances",
        category: "Company",
        description: "Strategic partnerships with AWS, Google Cloud, Microsoft Azure, and Vercel.",
        href: "/company/alliances",
        keywords: ["alliances", "aws", "gcp", "azure", "vercel", "cloud partners"],
        icon: GlobeIcon,
      },
      {
        id: "company-careers",
        title: "Career Overview & Open Roles",
        category: "Company",
        description: "Join our global engineering team and build high-impact digital products.",
        href: "/company/careers",
        keywords: ["careers", "jobs", "hiring", "work with us", "openings", "positions", "apply"],
        icon: BriefcaseIcon,
      },
      {
        id: "contact",
        title: "Contact Us & Global Offices",
        category: "Pages & Resources",
        description: "Get in touch with our leadership team and discuss project requirements.",
        href: "/contact",
        keywords: ["contact", "email", "address", "phone", "reach out", "location", "inquiry"],
        icon: PhoneCallIcon,
      },
      {
        id: "book-consultation",
        title: "Book a Strategy Consultation",
        category: "Pages & Resources",
        description: "Schedule a 1-on-1 discovery call with our senior solutions architect.",
        href: "/book-consultation",
        keywords: ["consultation", "book", "call", "discovery", "meeting", "estimate", "quote"],
        icon: SparklesIcon,
      },
      {
        id: "insights",
        title: "Insights & Engineering Articles",
        category: "Pages & Resources",
        description: "Deep dives on modern architecture, AI integration, and cloud scalability.",
        href: "/insights",
        keywords: ["insights", "blog", "articles", "tech posts", "guides", "engineering"],
        icon: FileTextIcon,
      },
      {
        id: "case-studies",
        title: "Case Studies & Client Impact",
        category: "Pages & Resources",
        description: "Real-world engineering successes and enterprise transformational projects.",
        href: "/case-studies",
        keywords: ["case studies", "portfolio", "projects", "clients", "work", "examples", "success"],
        icon: FileTextIcon,
      },
      {
        id: "privacy-policy",
        title: "Privacy Policy",
        category: "Pages & Resources",
        description: "Data privacy practices, compliance commitments, and cookie policy.",
        href: "/privacy-policy",
        keywords: ["privacy", "policy", "gdpr", "compliance", "terms", "data security"],
        icon: ShieldIcon,
      },
      {
        id: "terms",
        title: "Terms & Conditions",
        category: "Pages & Resources",
        description: "Legal terms of service, engagement guidelines, and software policies.",
        href: "/terms",
        keywords: ["terms", "conditions", "legal", "agreements", "service terms"],
        icon: ShieldIcon,
      },
    ];

    items.push(...mainPages);

    // Services from SERVICES_DATA
    Object.values(SERVICES_DATA).forEach((srv) => {
      items.push({
        id: `service-${srv.slug}`,
        title: srv.title,
        category: "Services",
        description: srv.tagline || srv.heroDesc,
        href: `/services/${srv.slug}`,
        keywords: [
          srv.title.toLowerCase(),
          srv.category.toLowerCase(),
          ...(srv.techStack || []).map((t) => t.toLowerCase()),
          ...(srv.features || []).map((f) => f.title.toLowerCase()),
          "service",
          "engineering",
          "development",
        ],
        icon: CpuIcon,
      });
    });

    // Industries from INDUSTRY_DATA
    Object.values(INDUSTRY_DATA).forEach((ind) => {
      items.push({
        id: `industry-${ind.slug}`,
        title: ind.title,
        category: "Industry Verticals",
        description: ind.tagline || ind.heroDesc,
        href: `/industry/${ind.slug}`,
        keywords: [
          ind.title.toLowerCase(),
          ind.category.toLowerCase(),
          ...(ind.techStack || []).map((t) => t.toLowerCase()),
          ...(ind.compliance || []).map((c) => c.toLowerCase()),
          "industry",
          "domain",
          "solutions",
        ],
        icon: BuildingIcon,
      });
    });

    return items;
  }, []);

  // Filter items based on user query
  const filteredResults = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];

    return searchIndex.filter((item) => {
      const matchTitle = item.title.toLowerCase().includes(q);
      const matchDesc = item.description.toLowerCase().includes(q);
      const matchCategory = item.category.toLowerCase().includes(q);
      const matchKeywords = item.keywords.some((k) => k.includes(q));
      return matchTitle || matchDesc || matchCategory || matchKeywords;
    });
  }, [query, searchIndex]);

  // Handle focus when modal opens
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 50);
      setQuery("");
      setSelectedIndex(0);
    }
  }, [isOpen]);

  // Reset selected index when query changes
  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  // Handle Keyboard Navigation (Arrow up/down, Enter, Escape)
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelectedIndex((prev) =>
          filteredResults.length > 0 ? (prev + 1) % filteredResults.length : 0
        );
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedIndex((prev) =>
          filteredResults.length > 0
            ? (prev - 1 + filteredResults.length) % filteredResults.length
            : 0
        );
      } else if (e.key === "Enter") {
        if (filteredResults.length > 0 && filteredResults[selectedIndex]) {
          e.preventDefault();
          handleNavigate(filteredResults[selectedIndex].href);
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, filteredResults, selectedIndex]);

  const handleNavigate = (path: string) => {
    onClose();
    router.push(`/${locale}${path}`);
  };

  const handleSuggestionClick = (searchTerm: string) => {
    setQuery(searchTerm);
    setTimeout(() => {
      inputRef.current?.focus();
    }, 10);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-start justify-center p-4 pt-16 sm:pt-24 overflow-y-auto">
        {/* Backdrop (Dark transparent background behind modal) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/60 z-40"
        />

        {/* Modal Window Card (High z-index, pure white background, crisp text & interactive) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: -10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: -10 }}
          transition={{ duration: 0.18 }}
          className="relative z-50 w-full max-w-2xl transform overflow-hidden bg-white text-left shadow-2xl border border-[#E2DDD5] my-auto sm:my-0"
        >
            {/* Search Input Bar */}
            <div className="relative flex items-center border-b border-[#E2DDD5] px-4 py-3 bg-[#FAF8F5]">
              <SearchIcon className="w-5 h-5 text-[#A90706] shrink-0 mr-3" />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search services, industry solutions, company, case studies..."
                className="w-full bg-transparent font-condensed text-base sm:text-lg font-normal text-slate-900 placeholder:text-slate-400 focus:outline-hidden"
              />
              {query && (
                <button
                  onClick={() => setQuery("")}
                  className="p-1 text-slate-400 hover:text-slate-800 transition-colors mr-2 cursor-pointer"
                  aria-label="Clear search"
                >
                  <XIcon className="w-4 h-4" />
                </button>
              )}
              <button
                onClick={onClose}
                className="hidden sm:flex items-center gap-1 text-[11px] font-condensed uppercase tracking-wider font-semibold text-slate-500 bg-white border border-[#E2DDD5] px-2 py-1 rounded-xs hover:border-slate-800 transition-colors cursor-pointer"
              >
                <span>ESC</span>
              </button>
            </div>

            {/* Modal Body */}
            <div className="max-h-[60vh] overflow-y-auto p-4 sm:p-6 space-y-6">
              {/* State 1: Query is empty -> Show Suggestions & Categories */}
              {!query.trim() && (
                <div className="space-y-6">
                  {/* Popular Searches */}
                  <div>
                    <span className="font-condensed text-xs font-semibold text-slate-500 uppercase tracking-widest block mb-3 flex items-center gap-1.5">
                      <SparklesIcon className="w-3.5 h-3.5 text-[#A90706]" />
                      POPULAR SEARCHES
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {popularSearches.map((item, idx) => (
                        <button
                          key={idx}
                          onClick={() => handleSuggestionClick(item.searchTerm)}
                          className="px-3 py-1.5 bg-[#FAF8F5] hover:bg-white border border-[#E2DDD5] hover:border-[#A90706] text-xs font-condensed font-normal text-slate-800 hover:text-[#A90706] transition-all cursor-pointer flex items-center gap-1.5 group"
                        >
                          <span>{item.label}</span>
                          <ChevronRightIcon className="w-3 h-3 text-slate-400 group-hover:text-[#A90706] transition-transform group-hover:translate-x-0.5" />
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Quick Categories Navigation */}
                  <div className="pt-4 border-t border-[#E2DDD5]/60">
                    <span className="font-condensed text-xs font-semibold text-slate-500 uppercase tracking-widest block mb-3">
                      EXPLORE DIRECTORIES
                    </span>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                      <button
                        onClick={() => handleNavigate("/services")}
                        className="p-3 border border-[#E2DDD5] hover:border-[#A90706] bg-[#FAF8F5]/50 hover:bg-white text-left transition-all group cursor-pointer"
                      >
                        <LayersIcon className="w-5 h-5 text-[#A90706] mb-2" />
                        <h4 className="font-condensed text-sm font-bold uppercase text-slate-900 group-hover:text-[#A90706]">
                          Services
                        </h4>
                        <p className="text-[11px] text-slate-500 line-clamp-1 font-normal">9 Engineering domains</p>
                      </button>

                      <button
                        onClick={() => handleNavigate("/industry")}
                        className="p-3 border border-[#E2DDD5] hover:border-[#A90706] bg-[#FAF8F5]/50 hover:bg-white text-left transition-all group cursor-pointer"
                      >
                        <BuildingIcon className="w-5 h-5 text-[#A90706] mb-2" />
                        <h4 className="font-condensed text-sm font-bold uppercase text-slate-900 group-hover:text-[#A90706]">
                          Industries
                        </h4>
                        <p className="text-[11px] text-slate-500 line-clamp-1 font-normal">11 Industry verticals</p>
                      </button>

                      <button
                        onClick={() => handleNavigate("/company/about-us")}
                        className="p-3 border border-[#E2DDD5] hover:border-[#A90706] bg-[#FAF8F5]/50 hover:bg-white text-left transition-all group cursor-pointer"
                      >
                        <BriefcaseIcon className="w-5 h-5 text-[#A90706] mb-2" />
                        <h4 className="font-condensed text-sm font-bold uppercase text-slate-900 group-hover:text-[#A90706]">
                          Company
                        </h4>
                        <p className="text-[11px] text-slate-500 line-clamp-1 font-normal">About, Team & Culture</p>
                      </button>

                      <button
                        onClick={() => handleNavigate("/book-consultation")}
                        className="p-3 border border-[#E2DDD5] hover:border-[#A90706] bg-[#FAF8F5]/50 hover:bg-white text-left transition-all group cursor-pointer"
                      >
                        <PhoneCallIcon className="w-5 h-5 text-[#A90706] mb-2" />
                        <h4 className="font-condensed text-sm font-bold uppercase text-slate-900 group-hover:text-[#A90706]">
                          Contact
                        </h4>
                        <p className="text-[11px] text-slate-500 line-clamp-1 font-normal">Book discovery call</p>
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* State 2: Query entered and has matching results */}
              {query.trim() && filteredResults.length > 0 && (
                <div className="space-y-2">
                  <div className="flex items-center justify-between border-b border-[#E2DDD5]/60 pb-2 mb-3">
                    <span className="font-condensed text-xs font-semibold text-slate-500 uppercase tracking-widest">
                      SEARCH RESULTS ({filteredResults.length})
                    </span>
                    <span className="text-[11px] text-slate-400 font-condensed">
                      Use ↑ ↓ keys to navigate
                    </span>
                  </div>

                  <div className="space-y-2">
                    {filteredResults.map((item, index) => {
                      const Icon = item.icon || ArrowRight;
                      const isSelected = index === selectedIndex;

                      return (
                        <div
                          key={item.id}
                          onClick={() => handleNavigate(item.href)}
                          onMouseEnter={() => setSelectedIndex(index)}
                          className={`p-3 border transition-all cursor-pointer flex items-start justify-between gap-3 text-left ${
                            isSelected
                              ? "bg-[#FAF8F5] border-[#A90706] shadow-xs"
                              : "bg-white border-[#E2DDD5] hover:border-slate-400"
                          }`}
                        >
                          <div className="flex items-start gap-3">
                            <div className={`p-2 shrink-0 ${isSelected ? "bg-[#A90706] text-white" : "bg-slate-100 text-slate-700"}`}>
                              <Icon className="w-4 h-4" />
                            </div>
                            <div>
                              <div className="flex items-center gap-2 mb-0.5">
                                <h4 className={`font-condensed text-sm font-bold uppercase ${isSelected ? "text-[#A90706]" : "text-slate-900"}`}>
                                  {item.title}
                                </h4>
                                <span className="text-[10px] font-condensed font-semibold uppercase tracking-wider px-1.5 py-0.2 bg-slate-100 text-slate-600 border border-slate-200">
                                  {item.category}
                                </span>
                              </div>
                              <p className="text-xs text-slate-600 font-normal line-clamp-1">
                                {item.description}
                              </p>
                            </div>
                          </div>

                          <ArrowUpRight className={`w-4 h-4 shrink-0 mt-1 transition-transform ${isSelected ? "text-[#A90706] translate-x-0.5 -translate-y-0.5" : "text-slate-400"}`} />
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* State 3: Query entered but no matching results */}
              {query.trim() && filteredResults.length === 0 && (
                <div className="text-center py-10 px-4 space-y-3">
                  <div className="w-12 h-12 rounded-full bg-red-50 text-[#A90706] flex items-center justify-center mx-auto">
                    <SearchIcon className="w-6 h-6" />
                  </div>
                  <h4 className="font-condensed text-base font-bold uppercase text-slate-900">
                    NO MATCHING RESULTS FOUND FOR "{query}"
                  </h4>
                  <p className="text-xs text-slate-600 font-normal max-w-sm mx-auto">
                    Try searching for terms like "Services", "Healthcare", "Fintech", "Cloud", "Careers", or "Contact".
                  </p>
                  <div className="pt-2">
                    <button
                      onClick={() => setQuery("")}
                      className="px-4 py-2 bg-[#A90706] text-white font-condensed text-xs uppercase tracking-wider hover:bg-[#880504] transition-colors cursor-pointer"
                    >
                      Clear Search & View Suggestions
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Modal Footer */}
            <div className="px-4 py-2.5 bg-[#FAF8F5] border-t border-[#E2DDD5] flex items-center justify-between text-[11px] font-condensed text-slate-500">
              <div className="flex items-center gap-3">
                <span className="flex items-center gap-1">
                  <kbd className="px-1.5 py-0.5 bg-white border border-[#E2DDD5] text-slate-700 font-mono text-[10px]">↵</kbd>
                  to select
                </span>
                <span className="flex items-center gap-1">
                  <kbd className="px-1.5 py-0.5 bg-white border border-[#E2DDD5] text-slate-700 font-mono text-[10px]">esc</kbd>
                  to close
                </span>
              </div>
              <div className="hidden sm:flex items-center gap-1">
                <CommandIcon className="w-3 h-3 text-slate-400" />
                <span>+ K search shortcut</span>
              </div>
            </div>
          </motion.div>
        </div>
      </AnimatePresence>
  );
}
