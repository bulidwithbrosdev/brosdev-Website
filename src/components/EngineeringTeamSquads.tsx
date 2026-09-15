"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { Globe, Award, Sparkles, Search, Users, ChevronRight, CheckCircle2, ShieldCheck, Briefcase } from "lucide-react";
import { useTranslation } from "@/context/TranslationContext";

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  location: string;
  countryCode: string;
  flag: string;
  experience: string;
  about: string;
  category: "csuite" | "senior" | "leads" | "ml" | "design";
  categoryLabel: string;
  iconEmoji: string;
}

const CATEGORIES = [
  { id: "all", label: "All Members", emoji: "⚡", count: 52 },
  { id: "csuite", label: "C-Suite", emoji: "👔", count: 4 },
  { id: "senior", label: "Senior Experts", emoji: "🎯", count: 12 },
  { id: "leads", label: "Lead Developers", emoji: "💻", count: 18 },
  { id: "ml", label: "ML Specialists", emoji: "🤖", count: 12 },
  { id: "design", label: "Design Directors", emoji: "🎨", count: 6 },
] as const;

const TEAM_DATA: TeamMember[] = [
  // 👔 C-Suite (4)
  {
    id: "c1",
    name: "Robert Turner",
    role: "CMO",
    location: "USA",
    countryCode: "US",
    flag: "🇺🇸",
    experience: "18 years",
    about: "Drives global marketing strategy, brand positioning, and demand generation.",
    category: "csuite",
    categoryLabel: "C-Suite",
    iconEmoji: "👔"
  },
  {
    id: "c2",
    name: "Daniel Harris",
    role: "COO",
    location: "UK",
    countryCode: "GB",
    flag: "🇬🇧",
    experience: "20 years",
    about: "Oversees global operations, process optimization, and delivery excellence.",
    category: "csuite",
    categoryLabel: "C-Suite",
    iconEmoji: "👔"
  },
  {
    id: "c3",
    name: "Suresh Menon",
    role: "CIO",
    location: "India",
    countryCode: "IN",
    flag: "🇮🇳",
    experience: "19 years",
    about: "Leads enterprise IT strategy, digital transformation, and cybersecurity governance.",
    category: "csuite",
    categoryLabel: "C-Suite",
    iconEmoji: "👔"
  },
  {
    id: "c4",
    name: "Andreas Becker",
    role: "CFO",
    location: "Germany",
    countryCode: "DE",
    flag: "🇩🇪",
    experience: "17 years",
    about: "Manages global finance, investor relations, and fiscal planning.",
    category: "csuite",
    categoryLabel: "C-Suite",
    iconEmoji: "👔"
  },

  // 🎯 Senior Experts (12)
  {
    id: "s1",
    name: "Rajesh Kumar",
    role: "Senior Cloud Architecture Expert",
    location: "India",
    countryCode: "IN",
    flag: "🇮🇳",
    experience: "12 years",
    about: "Senior architecture expert specializing in cloud-native systems and microservices design.",
    category: "senior",
    categoryLabel: "Senior Experts",
    iconEmoji: "🎯"
  },
  {
    id: "s2",
    name: "Deepak Chauhan",
    role: "Senior Enterprise Data Expert",
    location: "India",
    countryCode: "IN",
    flag: "🇮🇳",
    experience: "10 years",
    about: "Senior expert in enterprise data platforms and system scalability.",
    category: "senior",
    categoryLabel: "Senior Experts",
    iconEmoji: "🎯"
  },
  {
    id: "s3",
    name: "Michael Anderson",
    role: "Senior Distributed Systems Expert",
    location: "USA",
    countryCode: "US",
    flag: "🇺🇸",
    experience: "11 years",
    about: "Senior technical expert in distributed systems, leading platform scalability.",
    category: "senior",
    categoryLabel: "Senior Experts",
    iconEmoji: "🎯"
  },
  {
    id: "s4",
    name: "Priya Sharma",
    role: "Senior AI Infrastructure Expert",
    location: "USA",
    countryCode: "US",
    flag: "🇺🇸",
    experience: "10 years",
    about: "Senior expert in AI infrastructure and enterprise software architecture.",
    category: "senior",
    categoryLabel: "Senior Experts",
    iconEmoji: "🎯"
  },
  {
    id: "s5",
    name: "James Wilson",
    role: "Senior Fintech Technology Expert",
    location: "UK",
    countryCode: "GB",
    flag: "🇬🇧",
    experience: "13 years",
    about: "Senior technology expert focused on fintech systems and compliance tech.",
    category: "senior",
    categoryLabel: "Senior Experts",
    iconEmoji: "🎯"
  },
  {
    id: "s6",
    name: "Henry Clarke",
    role: "Senior Cloud Security Expert",
    location: "UK",
    countryCode: "GB",
    flag: "🇬🇧",
    experience: "10 years",
    about: "Senior expert in cloud security and enterprise risk management systems.",
    category: "senior",
    categoryLabel: "Senior Experts",
    iconEmoji: "🎯"
  },
  {
    id: "s7",
    name: "Stefan Müller",
    role: "Senior Industrial Automation Expert",
    location: "Germany",
    countryCode: "DE",
    flag: "🇩🇪",
    experience: "12 years",
    about: "Senior expert in industrial automation software and IoT integration.",
    category: "senior",
    categoryLabel: "Senior Experts",
    iconEmoji: "🎯"
  },
  {
    id: "s8",
    name: "Amit Verma",
    role: "Senior Embedded Systems Expert",
    location: "Germany",
    countryCode: "DE",
    flag: "🇩🇪",
    experience: "10 years",
    about: "Senior expert specializing in embedded systems and automotive software.",
    category: "senior",
    categoryLabel: "Senior Experts",
    iconEmoji: "🎯"
  },
  {
    id: "s9",
    name: "David Tremblay",
    role: "Senior Cybersecurity Architect",
    location: "Canada",
    countryCode: "CA",
    flag: "🇨🇦",
    experience: "11 years",
    about: "Senior expert in cybersecurity architecture and threat intelligence systems.",
    category: "senior",
    categoryLabel: "Senior Experts",
    iconEmoji: "🎯"
  },
  {
    id: "s10",
    name: "Matthew Wilson",
    role: "Senior Enterprise DevOps Expert",
    location: "Canada",
    countryCode: "CA",
    flag: "🇨🇦",
    experience: "9 years",
    about: "Senior expert in cloud migration strategy and enterprise DevOps.",
    category: "senior",
    categoryLabel: "Senior Experts",
    iconEmoji: "🎯"
  },
  {
    id: "s11",
    name: "Claire Dubois",
    role: "Senior Enterprise Data Expert",
    location: "France",
    countryCode: "FR",
    flag: "🇫🇷",
    experience: "12 years",
    about: "Senior expert in enterprise data systems and digital transformation strategy.",
    category: "senior",
    categoryLabel: "Senior Experts",
    iconEmoji: "🎯"
  },
  {
    id: "s12",
    name: "Julien Girard",
    role: "Senior Cloud Architecture Expert",
    location: "France",
    countryCode: "FR",
    flag: "🇫🇷",
    experience: "9 years",
    about: "Senior expert in cloud architecture and enterprise integration platforms.",
    category: "senior",
    categoryLabel: "Senior Experts",
    iconEmoji: "🎯"
  },

  // 💻 Lead Developers (18)
  {
    id: "l1",
    name: "Ankit Verma",
    role: "Lead Backend Developer (Java/Spring)",
    location: "India",
    countryCode: "IN",
    flag: "🇮🇳",
    experience: "9 years",
    about: "Lead developer specializing in backend systems using Java and Spring Boot.",
    category: "leads",
    categoryLabel: "Lead Developers",
    iconEmoji: "💻"
  },
  {
    id: "l2",
    name: "Sneha Reddy",
    role: "Lead Mobile Developer (React Native/Flutter)",
    location: "India",
    countryCode: "IN",
    flag: "🇮🇳",
    experience: "8 years",
    about: "Lead developer for mobile applications, expert in React Native and Flutter.",
    category: "leads",
    categoryLabel: "Lead Developers",
    iconEmoji: "💻"
  },
  {
    id: "l3",
    name: "Pooja Malhotra",
    role: "Lead Cloud Infrastructure Developer",
    location: "India",
    countryCode: "IN",
    flag: "🇮🇳",
    experience: "7 years",
    about: "Lead developer focused on cloud infrastructure and API gateway design.",
    category: "leads",
    categoryLabel: "Lead Developers",
    iconEmoji: "💻"
  },
  {
    id: "l4",
    name: "Christopher Brown",
    role: "Lead AWS Cloud Developer",
    location: "USA",
    countryCode: "US",
    flag: "🇺🇸",
    experience: "9 years",
    about: "Lead developer driving cloud-native application development on AWS.",
    category: "leads",
    categoryLabel: "Lead Developers",
    iconEmoji: "💻"
  },
  {
    id: "l5",
    name: "Emily Davis",
    role: "Lead Frontend Architect",
    location: "USA",
    countryCode: "US",
    flag: "🇺🇸",
    experience: "7 years",
    about: "Lead developer specializing in front-end architecture and design systems.",
    category: "leads",
    categoryLabel: "Lead Developers",
    iconEmoji: "💻"
  },
  {
    id: "l6",
    name: "Rohan Gupta",
    role: "Lead API & Microservices Developer",
    location: "USA",
    countryCode: "US",
    flag: "🇺🇸",
    experience: "8 years",
    about: "Lead developer focused on API architecture and microservices integration.",
    category: "leads",
    categoryLabel: "Lead Developers",
    iconEmoji: "💻"
  },
  {
    id: "l7",
    name: "Oliver Smith",
    role: "Lead Enterprise .NET Developer",
    location: "UK",
    countryCode: "GB",
    flag: "🇬🇧",
    experience: "9 years",
    about: "Lead developer for enterprise .NET applications and system integrations.",
    category: "leads",
    categoryLabel: "Lead Developers",
    iconEmoji: "💻"
  },
  {
    id: "l8",
    name: "Charlotte Taylor",
    role: "Lead DevOps & Automation Engineer",
    location: "UK",
    countryCode: "GB",
    flag: "🇬🇧",
    experience: "8 years",
    about: "Lead developer specializing in DevOps pipelines and infrastructure automation.",
    category: "leads",
    categoryLabel: "Lead Developers",
    iconEmoji: "💻"
  },
  {
    id: "l9",
    name: "George Evans",
    role: "Lead Database & Backend Engineer",
    location: "UK",
    countryCode: "GB",
    flag: "🇬🇧",
    experience: "7 years",
    about: "Lead developer focused on backend systems and database performance.",
    category: "leads",
    categoryLabel: "Lead Developers",
    iconEmoji: "💻"
  },
  {
    id: "l10",
    name: "Lukas Schmidt",
    role: "Lead Industrial Software Developer",
    location: "Germany",
    countryCode: "DE",
    flag: "🇩🇪",
    experience: "10 years",
    about: "Lead developer for industrial software solutions and automation platforms.",
    category: "leads",
    categoryLabel: "Lead Developers",
    iconEmoji: "💻"
  },
  {
    id: "l11",
    name: "Hannah Weber",
    role: "Lead Secure Enterprise Developer",
    location: "Germany",
    countryCode: "DE",
    flag: "🇩🇪",
    experience: "7 years",
    about: "Lead developer specializing in secure enterprise application development.",
    category: "leads",
    categoryLabel: "Lead Developers",
    iconEmoji: "💻"
  },
  {
    id: "l12",
    name: "Felix Wagner",
    role: "Lead Manufacturing Systems Developer",
    location: "Germany",
    countryCode: "DE",
    flag: "🇩🇪",
    experience: "8 years",
    about: "Lead developer focused on manufacturing systems and real-time data processing.",
    category: "leads",
    categoryLabel: "Lead Developers",
    iconEmoji: "💻"
  },
  {
    id: "l13",
    name: "Jacob Martin",
    role: "Lead Serverless Infrastructure Developer",
    location: "Canada",
    countryCode: "CA",
    flag: "🇨🇦",
    experience: "8 years",
    about: "Lead developer for cloud infrastructure and serverless architecture.",
    category: "leads",
    categoryLabel: "Lead Developers",
    iconEmoji: "💻"
  },
  {
    id: "l14",
    name: "Olivia Roy",
    role: "Lead Full-Stack Developer",
    location: "Canada",
    countryCode: "CA",
    flag: "🇨🇦",
    experience: "7 years",
    about: "Lead developer focused on full-stack development and API design.",
    category: "leads",
    categoryLabel: "Lead Developers",
    iconEmoji: "💻"
  },
  {
    id: "l15",
    name: "Emma Tremblay",
    role: "Lead Real-Time Systems Developer",
    location: "Canada",
    countryCode: "CA",
    flag: "🇨🇦",
    experience: "7 years",
    about: "Lead developer specializing in real-time systems and messaging platforms.",
    category: "leads",
    categoryLabel: "Lead Developers",
    iconEmoji: "💻"
  },
  {
    id: "l16",
    name: "Nicolas Laurent",
    role: "Lead Enterprise ERP Developer",
    location: "France",
    countryCode: "FR",
    flag: "🇫🇷",
    experience: "9 years",
    about: "Lead developer specializing in enterprise resource planning (ERP) systems.",
    category: "leads",
    categoryLabel: "Lead Developers",
    iconEmoji: "💻"
  },
  {
    id: "l17",
    name: "Camille Bernard",
    role: "Lead E-Commerce Platform Developer",
    location: "France",
    countryCode: "FR",
    flag: "🇫🇷",
    experience: "8 years",
    about: "Lead developer for e-commerce platforms and payment gateway integrations.",
    category: "leads",
    categoryLabel: "Lead Developers",
    iconEmoji: "💻"
  },
  {
    id: "l18",
    name: "Arnaud Petit",
    role: "Lead Backend Optimization Engineer",
    location: "France",
    countryCode: "FR",
    flag: "🇫🇷",
    experience: "7 years",
    about: "Lead developer focused on backend performance optimization and databases.",
    category: "leads",
    categoryLabel: "Lead Developers",
    iconEmoji: "💻"
  },

  // 🤖 ML Specialists (12)
  {
    id: "m1",
    name: "Dr. Ananya Iyer",
    role: "ML Specialist (NLP & Recommendation)",
    location: "India",
    countryCode: "IN",
    flag: "🇮🇳",
    experience: "7 years",
    about: "ML specialist working on NLP models and recommendation engines.",
    category: "ml",
    categoryLabel: "ML Specialists",
    iconEmoji: "🤖"
  },
  {
    id: "m2",
    name: "Dr. Nikhil Rao",
    role: "ML Specialist (Computer Vision & Edge AI)",
    location: "India",
    countryCode: "IN",
    flag: "🇮🇳",
    experience: "6 years",
    about: "ML specialist focused on computer vision and edge AI deployment.",
    category: "ml",
    categoryLabel: "ML Specialists",
    iconEmoji: "🤖"
  },
  {
    id: "m3",
    name: "Dr. Sarah Johnson",
    role: "ML Specialist (Deep Learning Research)",
    location: "USA",
    countryCode: "US",
    flag: "🇺🇸",
    experience: "8 years",
    about: "ML specialist focused on computer vision and deep learning research.",
    category: "ml",
    categoryLabel: "ML Specialists",
    iconEmoji: "🤖"
  },
  {
    id: "m4",
    name: "Dr. Kevin Lee",
    role: "ML Specialist (Recommendation Systems)",
    location: "USA",
    countryCode: "US",
    flag: "🇺🇸",
    experience: "6 years",
    about: "ML specialist in recommendation systems and large-scale data modeling.",
    category: "ml",
    categoryLabel: "ML Specialists",
    iconEmoji: "🤖"
  },
  {
    id: "m5",
    name: "Dr. Thomas Clarke",
    role: "ML Specialist (Predictive Analytics)",
    location: "UK",
    countryCode: "GB",
    flag: "🇬🇧",
    experience: "6 years",
    about: "ML specialist in predictive analytics and fintech risk modeling.",
    category: "ml",
    categoryLabel: "ML Specialists",
    iconEmoji: "🤖"
  },
  {
    id: "m6",
    name: "Dr. Emma Wright",
    role: "ML Specialist (Conversational AI)",
    location: "UK",
    countryCode: "GB",
    flag: "🇬🇧",
    experience: "6 years",
    about: "ML specialist working on speech recognition and conversational AI.",
    category: "ml",
    categoryLabel: "ML Specialists",
    iconEmoji: "🤖"
  },
  {
    id: "m7",
    name: "Dr. Julia Fischer",
    role: "ML Specialist (Industrial AI)",
    location: "Germany",
    countryCode: "DE",
    flag: "🇩🇪",
    experience: "7 years",
    about: "ML specialist working on industrial AI and predictive maintenance systems.",
    category: "ml",
    categoryLabel: "ML Specialists",
    iconEmoji: "🤖"
  },
  {
    id: "m8",
    name: "Dr. Lena Schulz",
    role: "ML Specialist (Anomaly Detection)",
    location: "Germany",
    countryCode: "DE",
    flag: "🇩🇪",
    experience: "6 years",
    about: "ML specialist in anomaly detection and sensor data analytics.",
    category: "ml",
    categoryLabel: "ML Specialists",
    iconEmoji: "🤖"
  },
  {
    id: "m9",
    name: "Dr. Ryan Campbell",
    role: "ML Specialist (MLOps & Data Pipelines)",
    location: "Canada",
    countryCode: "CA",
    flag: "🇨🇦",
    experience: "6 years",
    about: "ML specialist focused on data pipelines and MLOps infrastructure.",
    category: "ml",
    categoryLabel: "ML Specialists",
    iconEmoji: "🤖"
  },
  {
    id: "m10",
    name: "Dr. Megan Clark",
    role: "ML Specialist (Time-Series Forecasting)",
    location: "Canada",
    countryCode: "CA",
    flag: "🇨🇦",
    experience: "6 years",
    about: "ML specialist in time-series forecasting and financial modeling.",
    category: "ml",
    categoryLabel: "ML Specialists",
    iconEmoji: "🤖"
  },
  {
    id: "m11",
    name: "Dr. Isabelle Moreau",
    role: "ML Specialist (Generative AI & LLMs)",
    location: "France",
    countryCode: "FR",
    flag: "🇫🇷",
    experience: "8 years",
    about: "ML specialist in generative AI and large language model applications.",
    category: "ml",
    categoryLabel: "ML Specialists",
    iconEmoji: "🤖"
  },
  {
    id: "m12",
    name: "Dr. Lucas Girard",
    role: "ML Specialist (AI Automation Pipelines)",
    location: "France",
    countryCode: "FR",
    flag: "🇫🇷",
    experience: "6 years",
    about: "ML specialist working on AI-driven automation and NLP pipelines.",
    category: "ml",
    categoryLabel: "ML Specialists",
    iconEmoji: "🤖"
  },

  // 🎨 Design Directors (6)
  {
    id: "d1",
    name: "Kavya Nair",
    role: "Design Director (UX Strategy)",
    location: "India",
    countryCode: "IN",
    flag: "🇮🇳",
    experience: "11 years",
    about: "Design director leading UX strategy for enterprise and consumer products.",
    category: "design",
    categoryLabel: "Design Directors",
    iconEmoji: "🎨"
  },
  {
    id: "d2",
    name: "Jessica Martinez",
    role: "Design Director (Brand & Design Systems)",
    location: "USA",
    countryCode: "US",
    flag: "🇺🇸",
    experience: "12 years",
    about: "Design director overseeing brand identity and product design systems.",
    category: "design",
    categoryLabel: "Design Directors",
    iconEmoji: "🎨"
  },
  {
    id: "d3",
    name: "Sophie Bennett",
    role: "Design Director (User Research)",
    location: "UK",
    countryCode: "GB",
    flag: "🇬🇧",
    experience: "10 years",
    about: "Design director specializing in user research and accessibility standards.",
    category: "design",
    categoryLabel: "Design Directors",
    iconEmoji: "🎨"
  },
  {
    id: "d4",
    name: "Max Hoffmann",
    role: "Design Director (Industrial & Automotive UI)",
    location: "Germany",
    countryCode: "DE",
    flag: "🇩🇪",
    experience: "11 years",
    about: "Design director leading industrial and automotive UI/UX design initiatives.",
    category: "design",
    categoryLabel: "Design Directors",
    iconEmoji: "🎨"
  },
  {
    id: "d5",
    name: "Sarah Mitchell",
    role: "Design Director (SaaS Product Design)",
    location: "Canada",
    countryCode: "CA",
    flag: "🇨🇦",
    experience: "9 years",
    about: "Design director specializing in SaaS product design and design ops.",
    category: "design",
    categoryLabel: "Design Directors",
    iconEmoji: "🎨"
  },
  {
    id: "d6",
    name: "Antoine Rousseau",
    role: "Design Director (Visual Identity)",
    location: "France",
    countryCode: "FR",
    flag: "🇫🇷",
    experience: "8 years",
    about: "Design director focused on visual identity and cross-platform design systems.",
    category: "design",
    categoryLabel: "Design Directors",
    iconEmoji: "🎨"
  },
];

export default function EngineeringTeamSquads() {
  const { locale } = useTranslation();
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredMembers = useMemo(() => {
    return TEAM_DATA.filter((m) => {
      const matchesCategory = activeCategory === "all" || m.category === activeCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        m.name.toLowerCase().includes(q) ||
        m.role.toLowerCase().includes(q) ||
        m.location.toLowerCase().includes(q) ||
        m.about.toLowerCase().includes(q);
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  // Grouped members when activeCategory is 'all'
  const groupedCategories = useMemo(() => {
    const categoriesOrder: ("csuite" | "senior" | "leads" | "ml" | "design")[] = [
      "csuite",
      "senior",
      "leads",
      "ml",
      "design",
    ];

    return categoriesOrder
      .map((catId) => {
        const info = CATEGORIES.find((c) => c.id === catId);
        const members = filteredMembers.filter((m) => m.category === catId);
        return {
          id: catId,
          label: info?.label || catId,
          emoji: info?.emoji || "⭐",
          count: members.length,
          members,
        };
      })
      .filter((group) => group.members.length > 0);
  }, [filteredMembers]);

  return (
    <section id="engineering-squads" className="py-20 bg-white border-b border-[#E2DDD5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b-2 border-slate-900 pb-6 mb-10 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#FAF8F5] border border-[#E2DDD5] mb-3">
              <span className="w-2 h-2 bg-[#A90706]"></span>
              <span className="font-condensed text-xs font-normal tracking-widest text-[#A90706] uppercase">
                // GLOBAL TECHNICAL TALENT DIRECTORY
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-slate-900 uppercase tracking-tight font-[var(--font-geist)]">
              ENGINEERING ROLES &amp; SQUADS
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2 max-w-2xl font-normal">
              Meet our 52 key engineering leaders, architects, developers, ML scientists, and product design directors organized by technical role.
            </p>
          </div>

          {/* Search Bar */}
          <div className="relative min-w-[260px] sm:min-w-[320px]">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by name, role, country, or skill..."
              className="w-full pl-9 pr-4 py-2.5 bg-[#FAF8F5] border border-[#E2DDD5] text-xs font-normal text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-slate-900 focus:bg-white transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-900 text-xs uppercase"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Member Cards Display Grouped by Role Category */}
        <div className="space-y-14">
          {groupedCategories.map((group) => (
            <div key={group.id} className="space-y-6">
              {/* Group Title Header */}
              <div className="flex items-center border-b border-slate-900 pb-2">
                <h3 className="text-xl sm:text-2xl font-normal text-slate-900 uppercase font-[var(--font-geist)] tracking-tight">
                  {group.label}
                </h3>
              </div>

              {/* Grid layout: Mobile 1 row 2 columns (grid-cols-2), Desktop 1 row 4 columns (lg:grid-cols-4) */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
                {group.members.map((member) => (
                  <EmployeeCard key={member.id} member={member} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Global Workforce Callout Banner ("AND AT LAST HAVE MANY MORE EMPLOYEE") */}
        <div className="mt-16 bg-[#FAF8F5] border-2 border-slate-900 p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#A90706]/5 rounded-bl-full pointer-events-none"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-8 space-y-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 bg-[#A90706] text-white font-condensed text-xs font-normal uppercase tracking-widest">
                  // GLOBAL TALENT NETWORK
                </span>
                <span className="px-3 py-1 bg-white border border-[#E2DDD5] font-condensed text-xs font-normal text-slate-700 uppercase tracking-wider">
                  200+ Additional Engineers Globally
                </span>
              </div>

              <h3 className="text-2xl sm:text-4xl font-normal text-slate-900 uppercase tracking-tight font-[var(--font-geist)]">
                + MANY MORE GLOBAL SQUAD SPECIALISTS &amp; ENGINEERS
              </h3>

              <p className="text-slate-700 text-xs sm:text-sm font-normal leading-relaxed max-w-3xl">
                Beyond our key 52 lead architects and directors listed above, BrosDev Solutions operates a high-capacity engineering force of over <strong>200+ full-time software specialists</strong> from hubs in India and Canada, serving clients across AU, UK, NZ, CA, US, DE, FR &amp; NY, and beyond.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 font-condensed">
                <div className="p-3 bg-white border border-[#E2DDD5]">
                  <span className="text-xl font-normal text-slate-900 block font-[var(--font-geist)]">200+</span>
                  <span className="text-[10px] text-slate-500 uppercase">Active Global Engineers</span>
                </div>
                <div className="p-3 bg-white border border-[#E2DDD5]">
                  <span className="text-xl font-normal text-[#A90706] block font-[var(--font-geist)]">15+</span>
                  <span className="text-[10px] text-slate-500 uppercase">Countries Covered</span>
                </div>
                <div className="p-3 bg-white border border-[#E2DDD5]">
                  <span className="text-xl font-normal text-slate-900 block font-[var(--font-geist)]">24/7</span>
                  <span className="text-[10px] text-slate-500 uppercase">Follow-The-Sun Ops</span>
                </div>
                <div className="p-3 bg-white border border-[#E2DDD5]">
                  <span className="text-xl font-normal text-[#A90706] block font-[var(--font-geist)]">Top 1%</span>
                  <span className="text-[10px] text-slate-500 uppercase">Vetted Talent Pool</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-3 justify-center">
              <Link
                href={`/${locale}/services/engagement-models`}
                className="w-full text-center px-6 py-4 bg-[#A90706] hover:bg-[#880504] text-white font-condensed text-xs font-normal uppercase tracking-widest transition-colors flex items-center justify-center gap-2 shadow-md cursor-pointer"
              >
                <Users className="w-4 h-4" />
                <span>REQUEST CUSTOM SQUAD BUILD</span>
              </Link>
              <Link
                href={`/${locale}/company/careers`}
                className="w-full text-center px-6 py-4 bg-white border border-slate-900 text-slate-900 hover:bg-slate-100 font-condensed text-xs font-normal uppercase tracking-widest transition-colors cursor-pointer"
              >
                JOIN OUR GLOBAL SQUAD
              </Link>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

function EmployeeCard({ member }: { member: TeamMember }) {
  return (
    <div className="p-4 sm:p-5 bg-white border-2 border-slate-900 hover:border-[#A90706] transition-all flex flex-col justify-between space-y-3 group shadow-sm hover:shadow-lg">
      <div className="space-y-2">
        {/* Top Badges: Country Flag + Experience */}
        <div className="flex items-center justify-between border-b border-[#E2DDD5] pb-2">
          <div className="flex items-center gap-1.5">
            <span className="text-base" title={member.location}>
              {member.flag}
            </span>
            <span className="font-condensed text-[11px] font-normal text-slate-600 uppercase tracking-wider">
              {member.location}
            </span>
          </div>
          <span className="font-condensed text-[10px] font-normal px-2 py-0.5 bg-[#FAF8F5] border border-[#E2DDD5] text-[#A90706] uppercase tracking-wider">
            {member.experience}
          </span>
        </div>

        {/* Member Name */}
        <h4 className="text-base sm:text-lg font-normal text-slate-900 uppercase font-[var(--font-geist)] tracking-tight group-hover:text-[#A90706] transition-colors">
          {member.name}
        </h4>

        {/* Member Designation */}
        <div className="font-condensed text-xs font-normal text-[#A90706] uppercase tracking-wide">
          {member.role}
        </div>

        {/* About Description */}
        <p className="text-[11px] sm:text-xs text-slate-600 font-normal leading-relaxed line-clamp-4 pt-1 border-t border-[#F3EFEA]">
          {member.about}
        </p>
      </div>

      {/* Footer Tag */}
      <div className="pt-2 flex items-center justify-between font-condensed text-[10px] text-slate-400 uppercase tracking-wider">
        <span>{member.categoryLabel}</span>
      </div>
    </div>
  );
}
