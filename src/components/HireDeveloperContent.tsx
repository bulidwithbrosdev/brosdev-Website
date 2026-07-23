"use client";

import { useState, useEffect, useMemo, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BUILD_TEAM_DATA, BuildTeamRoleDetail } from "@/data/buildTeamData";
import { 
  Users, 
  CheckCircle2, 
  ArrowUpRight, 
  ShieldCheck, 
  Code2, 
  Sparkles,
  DollarSign,
  Clock,
  Cpu,
  Layers,
  Award
} from "lucide-react";

interface HireDeveloperContentProps {
  locale?: string;
}

function normalize(str: string) {
  return str.toLowerCase().replace(/[^a-z0-9]/g, "");
}

function HireForm({ locale = "en" }: HireDeveloperContentProps) {
  const searchParams = useSearchParams();
  
  const allRolesList = useMemo(() => Object.values(BUILD_TEAM_DATA), []);

  const initialRoleParam = searchParams?.get("role") || allRolesList[0].title;

  // Form State
  const [selectedRoleTitle, setSelectedRoleTitle] = useState(initialRoleParam);
  const [engagementModel, setEngagementModel] = useState("");
  const [seniorityTier, setSeniorityTier] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [currency, setCurrency] = useState<"INR" | "USD" | "EUR" | "GBP">("INR");
  const [teamSize, setTeamSize] = useState("1 Dedicated Engineer");
  const [duration, setDuration] = useState("3 - 6 Months");
  const [techRequirements, setTechRequirements] = useState("");

  // Submission State
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [referenceId, setReferenceId] = useState<string | null>(null);

  // Find active role object dynamically using normalized string matching
  const activeRoleObj: BuildTeamRoleDetail = useMemo(() => {
    const normSelected = normalize(selectedRoleTitle);
    const found = allRolesList.find((r) => {
      const normTitle = normalize(r.title);
      const normSlug = normalize(r.slug);
      return (
        normTitle === normSelected ||
        normSlug === normSelected ||
        normSelected.includes(normSlug) ||
        normSlug.includes(normSelected) ||
        normTitle.includes(normSelected) ||
        normSelected.includes(normTitle)
      );
    });
    return found || allRolesList[0];
  }, [allRolesList, selectedRoleTitle]);

  // Dynamic available engagement models for the active role
  const availableModels = useMemo(() => {
    return activeRoleObj.hiringModels.map((hm) => hm.name);
  }, [activeRoleObj]);

  // Dynamic available pricing tiers for the active role
  const availableTiers = useMemo(() => {
    return activeRoleObj.pricingPlans.map((pp) => pp.tier);
  }, [activeRoleObj]);

  // Listen for role changes from URL param on initial load
  useEffect(() => {
    const roleFromUrl = searchParams?.get("role");
    if (roleFromUrl) {
      const normUrl = normalize(roleFromUrl);
      const found = allRolesList.find((r) => {
        const normTitle = normalize(r.title);
        const normSlug = normalize(r.slug);
        return (
          normTitle === normUrl ||
          normSlug === normUrl ||
          normUrl.includes(normSlug) ||
          normSlug.includes(normUrl) ||
          normTitle.includes(normUrl) ||
          normUrl.includes(normTitle)
        );
      });
      if (found) {
        setSelectedRoleTitle(found.title);
      }
    }
  }, [searchParams, allRolesList]);

  // Initialize engagement model & tier ONCE when activeRoleObj changes
  useEffect(() => {
    const modelFromUrl = searchParams?.get("model");
    if (modelFromUrl && availableModels.includes(modelFromUrl)) {
      setEngagementModel(modelFromUrl);
    } else {
      setEngagementModel(availableModels[0] || "");
    }

    const tierFromUrl = searchParams?.get("tier") || searchParams?.get("plan");
    if (tierFromUrl) {
      const matchedTier = availableTiers.find(
        (t) => normalize(t).includes(normalize(tierFromUrl)) || normalize(tierFromUrl).includes(normalize(t))
      );
      if (matchedTier) {
        setSeniorityTier(matchedTier);
        return;
      }
    }
    setSeniorityTier(availableTiers[1] || availableTiers[0] || "");
  }, [activeRoleObj]); // Only run when role changes, not on tier state change!

  // Find active pricing plan object
  const activePricingPlan = useMemo(() => {
    const found = activeRoleObj.pricingPlans.find((pp) => normalize(pp.tier) === normalize(seniorityTier));
    return found || activeRoleObj.pricingPlans[1] || activeRoleObj.pricingPlans[0];
  }, [activeRoleObj, seniorityTier]);

  // Dynamically calculate tier-specific rate based on currency, role, and active tier
  const displayRate = useMemo(() => {
    const normTier = normalize(activePricingPlan.tier);
    const isSquad = normTier.includes("squad") || normTier.includes("team") || activePricingPlan.rate.includes("/ mo");
    const planRateText = activePricingPlan.rate;
    const isHighTech = activeRoleObj.slug.includes("ai") || activeRoleObj.slug.includes("blockchain");

    if (currency === "USD") {
      return {
        hourly: isSquad ? "Dedicated Squad Flat Rate" : planRateText,
        monthly: isSquad ? planRateText : `${planRateText.split("/")[0]} (160 Hrs/mo)`
      };
    }

    if (currency === "INR") {
      if (isSquad) {
        return {
          hourly: "Dedicated Squad Flat Rate",
          monthly: isHighTech ? "₹9,50,000 / mo" : "₹6,50,000 / mo"
        };
      }
      if (normTier.includes("junior") || normTier.includes("associate")) {
        return {
          hourly: isHighTech ? "₹1,800 - ₹2,400 / hr" : "₹1,200 - ₹1,800 / hr",
          monthly: isHighTech ? "₹2,80,000 - ₹3,80,000 / mo" : "₹1,90,000 - ₹2,80,000 / mo"
        };
      }
      if (normTier.includes("senior") || normTier.includes("lead") || normTier.includes("architect")) {
        return {
          hourly: isHighTech ? "₹3,800 - ₹5,500 / hr" : "₹2,800 - ₹4,000 / hr",
          monthly: isHighTech ? "₹6,00,000 - ₹8,50,000 / mo" : "₹4,50,000 - ₹6,40,000 / mo"
        };
      }
      // Mid-level
      return {
        hourly: isHighTech ? "₹2,600 - ₹3,600 / hr" : "₹2,000 - ₹2,800 / hr",
        monthly: isHighTech ? "₹4,20,000 - ₹5,80,000 / mo" : "₹3,00,000 - ₹4,20,000 / mo"
      };
    }

    if (currency === "EUR") {
      if (isSquad) {
        return {
          hourly: "Dedicated Squad Flat Rate",
          monthly: isHighTech ? "€11,200 / mo" : "€7,800 / mo"
        };
      }
      if (normTier.includes("junior") || normTier.includes("associate")) {
        return {
          hourly: isHighTech ? "€20 - €29 / hr" : "€15 - €22 / hr",
          monthly: isHighTech ? "€3,200 - €4,600 / mo" : "€2,400 - €3,500 / mo"
        };
      }
      if (normTier.includes("senior") || normTier.includes("lead") || normTier.includes("architect")) {
        return {
          hourly: isHighTech ? "€44 - €65 / hr" : "€35 - €48 / hr",
          monthly: isHighTech ? "€7,000 - €10,000 / mo" : "€5,600 - €7,700 / mo"
        };
      }
      return {
        hourly: isHighTech ? "€30 - €42 / hr" : "€23 - €32 / hr",
        monthly: isHighTech ? "€4,800 - €6,800 / mo" : "€3,700 - €5,100 / mo"
      };
    }

    if (currency === "GBP") {
      if (isSquad) {
        return {
          hourly: "Dedicated Squad Flat Rate",
          monthly: isHighTech ? "£9,800 / mo" : "£6,800 / mo"
        };
      }
      if (normTier.includes("junior") || normTier.includes("associate")) {
        return {
          hourly: isHighTech ? "£18 - £25 / hr" : "£13 - £19 / hr",
          monthly: isHighTech ? "£2,800 - £3,900 / mo" : "£2,100 - £3,000 / mo"
        };
      }
      if (normTier.includes("senior") || normTier.includes("lead") || normTier.includes("architect")) {
        return {
          hourly: isHighTech ? "£38 - £55 / hr" : "£30 - £42 / hr",
          monthly: isHighTech ? "£6,000 - £8,800 / mo" : "£4,800 - £6,700 / mo"
        };
      }
      return {
        hourly: isHighTech ? "£26 - £36 / hr" : "£20 - £28 / hr",
        monthly: isHighTech ? "£4,100 - £5,800 / mo" : "£3,200 - £4,400 / mo"
      };
    }

    return { hourly: planRateText, monthly: planRateText };
  }, [currency, activePricingPlan, activeRoleObj]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const res = await fetch("/api/send-enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          formType: "hire-developer",
          name: fullName,
          email,
          phone,
          company,
          role: selectedRoleTitle,
          engagementModel,
          seniorityTier,
          teamSize,
          duration,
          currency,
          techRequirements,
        }),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setReferenceId(data.referenceId || null);
        setIsSubmitted(true);
      } else {
        setErrorMessage(data.error || "Failed to submit enquiry. Please try again.");
      }
    } catch (err) {
      console.error(err);
      setErrorMessage("Network error. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {isSubmitted ? (
        <div className="max-w-3xl mx-auto bg-white border-2 border-slate-900 p-10 sm:p-14 text-center shadow-2xl">
          <div className="w-20 h-20 bg-red-50 border-2 border-[#A90706] text-[#A90706] rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-12 h-12" />
          </div>
          <span className="font-condensed text-xs font-black text-[#A90706] uppercase tracking-widest block mb-2">
            // DEVELOPER SCOPING CONFIRMED
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 uppercase tracking-tight mb-4 font-[var(--font-geist)]">
            TEAM RESERVED FOR {fullName.toUpperCase()}
          </h2>
          <p className="text-slate-600 text-sm sm:text-base font-normal max-w-lg mx-auto mb-8 leading-relaxed">
            Our talent acquisition squad has shortlisted candidate profiles for <strong className="text-slate-900 font-bold">{activeRoleObj.title}</strong> ({activePricingPlan.tier}) under the <strong className="text-slate-900 font-bold">{engagementModel}</strong>. Resumes &amp; interview slots will be sent to <strong className="text-slate-900 font-bold">{email}</strong> within 1 business day.
          </p>

          {/* Ticket Summary */}
          <div className="p-6 bg-[#FAF8F5] border-2 border-slate-900 text-left mb-8 space-y-3 font-condensed">
            <div className="flex items-center justify-between border-b border-[#E2DDD5] pb-3 text-xs text-slate-500 uppercase font-bold">
              <span>HIRING ID: {referenceId}</span>
              <span>STATUS: PROFILES PREPARED</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs uppercase text-slate-900 pt-2 font-bold">
              <div>
                <span className="text-slate-400 block text-[10px]">DEVELOPER ROLE:</span>
                <span>{activeRoleObj.title}</span>
              </div>
              <div>
                <span className="text-slate-400 block text-[10px]">SELECTED SENIORITY TIER:</span>
                <span className="text-[#A90706]">{activePricingPlan.tier} ({displayRate.hourly})</span>
              </div>
              <div>
                <span className="text-slate-400 block text-[10px]">ENGAGEMENT MODEL:</span>
                <span>{engagementModel}</span>
              </div>
              <div>
                <span className="text-slate-400 block text-[10px]">TEAM SIZE &amp; DURATION:</span>
                <span>{teamSize} ({duration})</span>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 font-condensed">
            <Link
              href={locale ? `/${locale}/build-team` : "/build-team"}
              className="px-8 py-4 bg-slate-900 text-white text-xs font-black uppercase tracking-widest hover:bg-[#A90706] transition-colors"
            >
              EXPLORE ALL DEVELOPER ROLES
            </Link>
            <button
              onClick={() => setIsSubmitted(false)}
              className="px-8 py-4 bg-white border border-slate-900 text-slate-900 text-xs font-black uppercase tracking-widest hover:bg-slate-900 hover:text-white transition-colors cursor-pointer"
            >
              HIRE ANOTHER DEVELOPER
            </button>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Form Column (8 Cols) */}
          <div className="lg:col-span-8 bg-white border-2 border-slate-900 p-8 sm:p-12 shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-8 font-normal">
              {errorMessage && (
                <div className="p-4 bg-red-50 border-2 border-red-600 text-red-700 text-xs font-bold">
                  ⚠️ {errorMessage}
                </div>
              )}

              {/* Step 1: Engagement Model, Role & Seniority Tier */}
              <div className="space-y-6">
                <div className="flex items-center gap-3 border-b-2 border-slate-900 pb-3">
                  <span className="w-7 h-7 bg-[#A90706] text-white font-condensed text-xs font-black flex items-center justify-center">
                    01
                  </span>
                  <h3 className="font-condensed text-xl font-black text-slate-900 uppercase tracking-wide font-[var(--font-geist)]">
                    DEVELOPER ROLE, SENIORITY TIER &amp; ENGAGEMENT MODEL
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="font-condensed text-xs font-bold text-slate-900 uppercase tracking-wider block mb-1">
                      SELECT DEVELOPER ROLE *
                    </label>
                    <select
                      value={activeRoleObj.title}
                      onChange={(e) => {
                        const newTitle = e.target.value;
                        setSelectedRoleTitle(newTitle);
                      }}
                      className="w-full p-3.5 bg-[#FAF8F5] border border-[#E2DDD5] font-condensed text-xs font-bold uppercase text-slate-900 focus:outline-hidden focus:border-slate-900"
                    >
                      {allRolesList.map((r) => (
                        <option key={r.slug} value={r.title}>
                          {r.title}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="font-condensed text-xs font-bold text-[#A90706] uppercase tracking-wider block mb-1">
                      SELECTED SENIORITY / PRICING TIER *
                    </label>
                    <select
                      value={seniorityTier}
                      onChange={(e) => setSeniorityTier(e.target.value)}
                      className="w-full p-3.5 bg-[#FAF8F5] border-2 border-[#A90706] font-condensed text-xs font-bold uppercase text-slate-900 focus:outline-hidden focus:border-slate-900"
                    >
                      {activeRoleObj.pricingPlans.map((pp) => (
                        <option key={pp.tier} value={pp.tier}>
                          {pp.tier} — {pp.rate} ({pp.idealFor})
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="font-condensed text-xs font-bold text-slate-900 uppercase tracking-wider block mb-1">
                      SELECTED ENGAGEMENT MODEL *
                    </label>
                    <select
                      value={engagementModel}
                      onChange={(e) => setEngagementModel(e.target.value)}
                      className="w-full p-3.5 bg-[#FAF8F5] border border-[#E2DDD5] font-condensed text-xs font-bold uppercase text-slate-900 focus:outline-hidden focus:border-slate-900"
                    >
                      {availableModels.map((m) => (
                        <option key={m} value={m}>
                          {m}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="font-condensed text-xs font-bold text-slate-900 uppercase tracking-wider block mb-1">
                      REQUIRED TEAM SIZE *
                    </label>
                    <select
                      value={teamSize}
                      onChange={(e) => setTeamSize(e.target.value)}
                      className="w-full p-3.5 bg-[#FAF8F5] border border-[#E2DDD5] font-condensed text-xs font-bold uppercase text-slate-900 focus:outline-hidden focus:border-slate-900"
                    >
                      <option value="1 Dedicated Engineer">1 Dedicated Engineer</option>
                      <option value="2-3 Engineers Squad">2-3 Engineers Squad</option>
                      <option value="4-6 Full Engineering Squad">4-6 Full Engineering Squad</option>
                      <option value="7+ Enterprise Scale Team">7+ Enterprise Scale Team</option>
                    </select>
                  </div>
                </div>

                {/* Multi-Currency Rate Display Calculator */}
                <div className="p-6 bg-[#FAF8F5] border-2 border-slate-900 space-y-3">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#E2DDD5] pb-3">
                    <div className="flex items-center gap-2">
                      <Award className="w-4 h-4 text-[#A90706]" />
                      <span className="font-condensed text-xs font-black text-slate-900 uppercase tracking-wider">
                        {activePricingPlan.tier} RATE ({activePricingPlan.idealFor})
                      </span>
                    </div>
                    {/* Currency Pills */}
                    <div className="flex items-center gap-1">
                      {(["INR", "USD", "EUR", "GBP"] as const).map((curr) => (
                        <button
                          key={curr}
                          type="button"
                          onClick={() => setCurrency(curr)}
                          className={`px-3 py-1 font-condensed text-xs font-black uppercase transition-all cursor-pointer ${
                            currency === curr
                              ? "bg-[#A90706] text-white"
                              : "bg-white text-slate-700 border border-[#E2DDD5] hover:border-slate-900"
                          }`}
                        >
                          {curr === "INR" ? "₹ INR" : curr === "USD" ? "$ USD" : curr === "EUR" ? "€ EUR" : "£ GBP"}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1 font-condensed">
                    <div>
                      <span className="text-[10px] font-bold text-slate-500 uppercase block">ESTIMATED RATE:</span>
                      <span className="text-2xl font-black text-[#A90706]">{displayRate.hourly}</span>
                    </div>
                    <div>
                      <span className="text-[10px] font-bold text-slate-500 uppercase block">ESTIMATED MONTHLY / VELOCITY:</span>
                      <span className="text-2xl font-black text-slate-900">{displayRate.monthly}</span>
                    </div>
                  </div>

                  {/* Highlights Pill */}
                  <div className="pt-2 flex flex-wrap gap-2">
                    {activePricingPlan.highlights.map((hl, idx) => (
                      <span key={idx} className="px-2.5 py-1 bg-white border border-[#E2DDD5] text-[10px] font-condensed font-bold uppercase text-slate-700">
                        ✓ {hl}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="font-condensed text-xs font-bold text-slate-900 uppercase tracking-wider block mb-1">
                    TARGET CONTRACT DURATION *
                  </label>
                  <select
                    value={duration}
                    onChange={(e) => setDuration(e.target.value)}
                    className="w-full p-3.5 bg-[#FAF8F5] border border-[#E2DDD5] font-condensed text-xs font-bold uppercase text-slate-900 focus:outline-hidden focus:border-slate-900"
                  >
                    <option value="1 - 3 Months">1 - 3 Months</option>
                    <option value="3 - 6 Months">3 - 6 Months</option>
                    <option value="6 - 12 Months">6 - 12 Months</option>
                    <option value="Long-Term Ongoing">Long-Term Ongoing</option>
                  </select>
                </div>
              </div>

              {/* Step 2: Contact Info */}
              <div className="space-y-6 pt-6 border-t border-[#E2DDD5]">
                <div className="flex items-center gap-3 border-b-2 border-slate-900 pb-3">
                  <span className="w-7 h-7 bg-[#A90706] text-white font-condensed text-xs font-black flex items-center justify-center">
                    02
                  </span>
                  <h3 className="font-condensed text-xl font-black text-slate-900 uppercase tracking-wide font-[var(--font-geist)]">
                    YOUR CONTACT DETAILS
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="font-condensed text-xs font-bold text-slate-900 uppercase tracking-wider block mb-1">
                      FULL NAME *
                    </label>
                    <input
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="e.g. Vikram Sharma / Alex Morgan"
                      className="w-full p-3.5 bg-[#FAF8F5] border border-[#E2DDD5] font-condensed text-xs font-bold uppercase text-slate-900 placeholder:text-slate-400 focus:outline-hidden focus:border-slate-900"
                    />
                  </div>

                  <div>
                    <label className="font-condensed text-xs font-bold text-slate-900 uppercase tracking-wider block mb-1">
                      WORK EMAIL *
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value.toLowerCase())}
                      autoCapitalize="none"
                      autoCorrect="off"
                      spellCheck={false}
                      placeholder="vikram@company.com"
                      className="w-full p-3.5 bg-[#FAF8F5] border border-[#E2DDD5] font-condensed text-xs font-bold text-slate-900 lowercase placeholder:text-slate-400 focus:outline-hidden focus:border-slate-900"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="font-condensed text-xs font-bold text-slate-900 uppercase tracking-wider block mb-1">
                      PHONE / WHATSAPP NUMBER *
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+91 98765-43210 / +1 (555) 000-0000"
                      className="w-full p-3.5 bg-[#FAF8F5] border border-[#E2DDD5] font-condensed text-xs font-bold text-slate-900 placeholder:text-slate-400 focus:outline-hidden focus:border-slate-900"
                    />
                  </div>

                  <div>
                    <label className="font-condensed text-xs font-bold text-slate-900 uppercase tracking-wider block mb-1">
                      COMPANY / STARTUP NAME
                    </label>
                    <input
                      type="text"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      placeholder="e.g. Acme SaaS Technologies"
                      className="w-full p-3.5 bg-[#FAF8F5] border border-[#E2DDD5] font-condensed text-xs font-bold uppercase text-slate-900 placeholder:text-slate-400 focus:outline-hidden focus:border-slate-900"
                    />
                  </div>
                </div>
              </div>

              {/* Step 3: Technical Requirements & Notes */}
              <div className="space-y-6 pt-6 border-t border-[#E2DDD5]">
                <div className="flex items-center gap-3 border-b-2 border-slate-900 pb-3">
                  <span className="w-7 h-7 bg-[#A90706] text-white font-condensed text-xs font-black flex items-center justify-center">
                    03
                  </span>
                  <h3 className="font-condensed text-xl font-black text-slate-900 uppercase tracking-wide font-[var(--font-geist)]">
                    TECH STACK &amp; DEVELOPER REQUIREMENTS
                  </h3>
                </div>

                <div>
                  <label className="font-condensed text-xs font-bold text-slate-900 uppercase tracking-wider block mb-1">
                    PREFERRED TECH STACK &amp; PROJECT NOTES *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={techRequirements}
                    onChange={(e) => setTechRequirements(e.target.value)}
                    placeholder="Outline key tech stack requirements (e.g. Next.js, React Native, Python AI, PostgreSQL, AWS), developer seniority level, or immediate start date..."
                    className="w-full p-3.5 bg-[#FAF8F5] border border-[#E2DDD5] font-condensed text-xs font-normal text-slate-900 placeholder:text-slate-400 focus:outline-hidden focus:border-slate-900"
                  ></textarea>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-6 border-t border-[#E2DDD5]">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-5 bg-[#A90706] hover:bg-[#880504] text-white font-condensed text-sm font-black tracking-widest uppercase transition-all shadow-xl flex items-center justify-center gap-3 cursor-pointer disabled:opacity-50 group"
                >
                  <span className="inline-flex items-center gap-2">
                    <span>{isSubmitting ? "PROCESSING DEVELOPER SCOPING..." : "CONFIRM & HIRE PRE-SCREENED DEVELOPERS"}</span>
                    <ArrowUpRight className="w-5 h-5 shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </button>

                <div className="flex flex-wrap items-center justify-center gap-4 mt-4 text-[10px] font-condensed font-bold text-slate-500 uppercase">
                  <span>✓ 48-HOUR DEVELOPER MATCHING</span>
                  <span>•</span>
                  <span>✓ STRICT NDA INCLUDED</span>
                  <span>•</span>
                  <span>✓ 2-WEEK RISK-FREE TRIAL</span>
                </div>
              </div>

            </form>
          </div>

          {/* Right Information Sidebar (4 Cols) */}
          <div className="lg:col-span-4 space-y-6 font-normal">
            
            <div className="p-8 border-2 border-slate-900 bg-white shadow-xl space-y-4">
              <span className="font-condensed text-xs font-black text-[#A90706] uppercase tracking-widest block border-b border-[#E2DDD5] pb-2">
                // PRICING TIERS ({activeRoleObj.badge})
              </span>
              
              <div className="space-y-4">
                {activeRoleObj.pricingPlans.map((pp, idx) => (
                  <div 
                    key={idx} 
                    onClick={() => setSeniorityTier(pp.tier)}
                    className={`p-4 border transition-all cursor-pointer ${
                      normalize(pp.tier) === normalize(seniorityTier)
                        ? "border-[#A90706] bg-red-50/40 shadow-sm"
                        : "border-[#E2DDD5] bg-[#FAF8F5] hover:border-slate-900"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="font-condensed text-sm font-black text-slate-900 uppercase">
                        {pp.tier}
                      </h4>
                      <span className="font-condensed text-xs font-black text-[#A90706]">
                        {pp.rate}
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-600 font-normal leading-normal">
                      {pp.idealFor}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-8 bg-slate-900 text-white border border-slate-900 shadow-xl space-y-4 font-normal">
              <span className="font-condensed text-xs font-black text-[#A90706] uppercase tracking-widest block border-b border-slate-800 pb-2">
                // NEED AN INSTANT DEVELOPER SQUAD?
              </span>
              <p className="text-xs text-slate-300 leading-relaxed font-normal">
                Speak directly with our Chief Technology Officer to assemble your software engineering squad today.
              </p>
              <div className="space-y-2 pt-2 text-xs font-condensed font-bold uppercase">
                <div className="text-slate-400 text-[10px]">DIRECT TALENT ACQUISITION:</div>
                <a href="mailto:developers@brosdev.site" className="text-white hover:text-[#A90706] block underline font-normal">
                  developers@brosdev.site
                </a>
              </div>
            </div>

          </div>

        </div>
      )}
    </div>
  );
}

export default function HireDeveloperContent({ locale = "en" }: HireDeveloperContentProps) {
  return (
    <main className="min-h-screen bg-[#FAF8F5] text-slate-900 selection:bg-[#A90706] selection:text-white font-sans antialiased">
      <Navbar />

      {/* Header Banner */}
      <section className="pt-36 pb-20 border-b border-[#E2DDD5] bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-[#E2DDD5] mb-6">
            <span className="w-2 h-2 bg-[#A90706]"></span>
            <span className="font-condensed text-xs font-black tracking-widest text-[#A90706] uppercase">
              // TALENT ACQUISITION &amp; DEDICATED SQUAD SCOPING
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-slate-900 tracking-tight leading-none uppercase mb-6 font-[var(--font-geist)]">
            HIRE PRE-SCREENED DEVELOPERS
          </h1>

          <p className="text-slate-700 text-lg sm:text-xl font-medium max-w-3xl leading-relaxed font-[var(--font-geist)]">
            Select your preferred engagement model, view dynamic hourly/monthly developer rates, and assemble your high-performance software engineering team.
          </p>
        </div>
      </section>

      <section className="py-20 bg-[#FAF8F5]">
        <Suspense fallback={
          <div className="text-center py-20 font-condensed font-bold text-slate-500 uppercase">
            LOADING DEVELOPER HIRING FORM...
          </div>
        }>
          <HireForm locale={locale} />
        </Suspense>
      </section>

      <Footer />
    </main>
  );
}
