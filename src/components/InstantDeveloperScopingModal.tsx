"use client";

import { useState, useEffect } from "react";
import { X, CheckCircle2, ArrowUpRight, ShieldCheck, Sparkles, Terminal } from "lucide-react";

interface InstantDeveloperScopingModalProps {
  isOpen: boolean;
  onClose: () => void;
  roleTitle?: string;
}

export default function InstantDeveloperScopingModal({
  isOpen,
  onClose,
  roleTitle = "Software Developer",
}: InstantDeveloperScopingModalProps) {
  const [techStack, setTechStack] = useState("Next.js, Node.js, TypeScript");
  const [engagementType, setEngagementType] = useState("Full-Time Dedicated (160h/mo)");
  const [duration, setDuration] = useState("6-12 Months");
  const [budgetRange, setBudgetRange] = useState("$3,000 - $6,000 / mo");

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [description, setDescription] = useState("");

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 800);
  };

  const handleResetAndClose = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-3xl bg-[#FAF8F5] border-2 border-slate-900 shadow-2xl overflow-hidden my-8">
        
        {/* Header Banner */}
        <div className="p-6 bg-slate-900 text-white flex items-center justify-between border-b border-slate-800">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="w-2 h-2 bg-[#A90706] rounded-full animate-pulse"></span>
              <span className="font-condensed text-[10px] font-black text-[#A90706] uppercase tracking-widest">
                // INSTANT SCOPING &amp; DEVELOPER MATCHING
              </span>
            </div>
            <h3 className="font-condensed text-xl sm:text-2xl font-black uppercase tracking-wide font-[var(--font-geist)]">
              HIRE PRE-SCREENED DEVELOPERS // {roleTitle.toUpperCase()}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-700 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {isSubmitted ? (
          <div className="p-10 text-center bg-white">
            <div className="w-16 h-16 bg-red-50 border-2 border-[#A90706] text-[#A90706] rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h4 className="font-condensed text-3xl font-black text-slate-900 uppercase mb-3 font-[var(--font-geist)]">
              DEVELOPER MATCHING REQUEST SUBMITTED
            </h4>
            <p className="text-slate-600 text-sm max-w-md mx-auto mb-8 font-medium">
              Thank you, <strong className="text-slate-900">{fullName}</strong>. Our engineering leads are screening pre-vetted candidate profiles matching <strong className="text-slate-900">{techStack}</strong>. We will email 3 developer CVs to <strong className="text-slate-900">{email}</strong> within 24 hours.
            </p>
            <button
              onClick={handleResetAndClose}
              className="px-8 py-3 bg-[#A90706] text-white font-condensed text-xs font-black uppercase tracking-widest shadow-md"
            >
              CLOSE WINDOW
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-6 max-h-[80vh] overflow-y-auto bg-white">
            
            {/* Tech Stack & Engagement Details */}
            <div className="space-y-4">
              <span className="font-condensed text-xs font-black text-[#A90706] uppercase tracking-widest block">
                // 1. TECHNICAL REQUIREMENTS
              </span>

              <div>
                <label className="font-condensed text-xs font-extrabold text-slate-900 uppercase tracking-wider block mb-1">
                  PRIMARY TECH STACK / SKILLS REQUIRED *
                </label>
                <input
                  type="text"
                  required
                  value={techStack}
                  onChange={(e) => setTechStack(e.target.value)}
                  placeholder="e.g. Next.js, Node.js, Python, PyTorch, React Native, AWS..."
                  className="w-full p-3 bg-[#FAF8F5] border border-[#E2DDD5] font-condensed text-xs font-bold uppercase text-slate-900 placeholder:text-slate-400 focus:outline-hidden focus:border-slate-900"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="font-condensed text-xs font-extrabold text-slate-900 uppercase tracking-wider block mb-1">
                    ENGAGEMENT TYPE:
                  </label>
                  <select
                    value={engagementType}
                    onChange={(e) => setEngagementType(e.target.value)}
                    className="w-full p-3 bg-[#FAF8F5] border border-[#E2DDD5] font-condensed text-xs font-bold uppercase text-slate-900 focus:outline-hidden focus:border-slate-900"
                  >
                    <option value="Full-Time Dedicated (160h/mo)">Full-Time Dedicated (160h/mo)</option>
                    <option value="Part-Time Dedicated (80h/mo)">Part-Time Dedicated (80h/mo)</option>
                    <option value="Hourly Contract">Hourly Contract</option>
                  </select>
                </div>

                <div>
                  <label className="font-condensed text-xs font-extrabold text-slate-900 uppercase tracking-wider block mb-1">
                    PROJECT DURATION:
                  </label>
                  <select
                    value={duration}
                    onChange={(e) => setDuration(e.target.value)}
                    className="w-full p-3 bg-[#FAF8F5] border border-[#E2DDD5] font-condensed text-xs font-bold uppercase text-slate-900 focus:outline-hidden focus:border-slate-900"
                  >
                    <option value="1-3 Months">1-3 Months</option>
                    <option value="3-6 Months">3-6 Months</option>
                    <option value="6-12 Months">6-12 Months</option>
                    <option value="Long Term (> 1 Year)">Long Term (&gt; 1 Year)</option>
                  </select>
                </div>

                <div>
                  <label className="font-condensed text-xs font-extrabold text-slate-900 uppercase tracking-wider block mb-1">
                    MONTHLY BUDGET RANGE:
                  </label>
                  <select
                    value={budgetRange}
                    onChange={(e) => setBudgetRange(e.target.value)}
                    className="w-full p-3 bg-[#FAF8F5] border border-[#E2DDD5] font-condensed text-xs font-bold uppercase text-slate-900 focus:outline-hidden focus:border-slate-900"
                  >
                    <option value="< $3,000 / mo">&lt; $3,000 / mo</option>
                    <option value="$3,000 - $6,000 / mo">$3,000 - $6,000 / mo</option>
                    <option value="$6,000 - $12,000 / mo">$6,000 - $12,000 / mo</option>
                    <option value="$12,000+ / mo">$12,000+ / mo</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Contact Details */}
            <div className="pt-4 border-t border-[#E2DDD5] space-y-4">
              <span className="font-condensed text-xs font-black text-[#A90706] uppercase tracking-widest block">
                // 2. CONTACT DETAILS
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="font-condensed text-xs font-extrabold text-slate-900 uppercase tracking-wider block mb-1">
                    FULL NAME *
                  </label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. Sarah Jenkins"
                    className="w-full p-3 bg-[#FAF8F5] border border-[#E2DDD5] font-condensed text-xs font-bold uppercase text-slate-900 placeholder:text-slate-400 focus:outline-hidden focus:border-slate-900"
                  />
                </div>

                <div>
                  <label className="font-condensed text-xs font-extrabold text-slate-900 uppercase tracking-wider block mb-1">
                    WORK EMAIL *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="sarah@techfirm.com"
                    className="w-full p-3 bg-[#FAF8F5] border border-[#E2DDD5] font-condensed text-xs font-bold text-slate-900 placeholder:text-slate-400 focus:outline-hidden focus:border-slate-900"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="font-condensed text-xs font-extrabold text-slate-900 uppercase tracking-wider block mb-1">
                    PHONE / WHATSAPP NUMBER *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+1 (555) 000-0000"
                    className="w-full p-3 bg-[#FAF8F5] border border-[#E2DDD5] font-condensed text-xs font-bold text-slate-900 placeholder:text-slate-400 focus:outline-hidden focus:border-slate-900"
                  />
                </div>

                <div>
                  <label className="font-condensed text-xs font-extrabold text-slate-900 uppercase tracking-wider block mb-1">
                    COMPANY / STARTUP NAME
                  </label>
                  <input
                    type="text"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    placeholder="e.g. NextGen Labs Inc."
                    className="w-full p-3 bg-[#FAF8F5] border border-[#E2DDD5] font-condensed text-xs font-bold uppercase text-slate-900 placeholder:text-slate-400 focus:outline-hidden focus:border-slate-900"
                  />
                </div>
              </div>

              <div>
                <label className="font-condensed text-xs font-extrabold text-slate-900 uppercase tracking-wider block mb-1">
                  PROJECT SCOPE / ROLE DESCRIPTION
                </label>
                <textarea
                  rows={3}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Outline key project deliverables, responsibilities, or technical milestones..."
                  className="w-full p-3 bg-[#FAF8F5] border border-[#E2DDD5] font-condensed text-xs font-medium text-slate-900 placeholder:text-slate-400 focus:outline-hidden focus:border-slate-900"
                ></textarea>
              </div>
            </div>

            {/* Submit CTA */}
            <div className="pt-4 border-t border-[#E2DDD5]">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-[#A90706] hover:bg-[#880504] text-white font-condensed text-sm font-black tracking-widest uppercase transition-all shadow-xl flex items-center justify-center gap-3 cursor-pointer disabled:opacity-50"
              >
                <span>{isSubmitting ? "MATCHING DEVELOPER PROFILES..." : "RECEIVE 3 MATCHED DEVELOPER CVS IN 24 HOURS"}</span>
                <ArrowUpRight className="w-5 h-5" />
              </button>
              <div className="flex items-center justify-center gap-4 mt-3 text-[10px] font-condensed font-bold text-slate-500 uppercase">
                <span>✓ 2-WEEK RISK-FREE TRIAL</span>
                <span>•</span>
                <span>✓ NO LOCK-IN CONTRACT</span>
                <span>•</span>
                <span>✓ 100% IP OWNERSHIP</span>
              </div>
            </div>

          </form>
        )}

      </div>
    </div>
  );
}
