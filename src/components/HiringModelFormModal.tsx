"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { X, CheckCircle2, ArrowUpRight, ShieldCheck, UserCheck } from "lucide-react";

interface HiringModelFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialModelName?: string;
  roleTitle?: string;
}

export default function HiringModelFormModal({
  isOpen,
  onClose,
  initialModelName = "Dedicated Team Model",
  roleTitle = "Software Developer",
}: HiringModelFormModalProps) {
  const [model, setModel] = useState(initialModelName);
  const [seniority, setSeniority] = useState("Senior (5-8+ Yrs)");
  const [teamSize, setTeamSize] = useState("1 Developer");
  const [startDate, setStartDate] = useState("Immediate");
  const [timezone, setTimezone] = useState("US Timezone Overlap");

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [notes, setNotes] = useState("");

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [referenceId, setReferenceId] = useState<string | null>(null);

  useEffect(() => {
    if (initialModelName) {
      setModel(initialModelName);
    }
  }, [initialModelName]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const res = await fetch("/api/send-enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          formType: "hiring-model-modal",
          name: fullName,
          email,
          phone,
          company,
          model,
          roleTitle,
          seniority,
          teamSize,
          startDate,
          timezone,
          notes,
        }),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setReferenceId(data.referenceId || null);
        setIsSubmitted(true);
      } else {
        setErrorMessage(data.error || "Failed to submit request. Please try again.");
      }
    } catch (err) {
      console.error(err);
      setErrorMessage("Network error. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleResetAndClose = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-3xl bg-[#FAF8F5] border-2 border-slate-900 shadow-2xl overflow-hidden my-8">
        
        {/* Header */}
        <div className="p-6 bg-slate-900 text-white flex items-center justify-between border-b border-slate-800">
          <div>
            <span className="font-condensed text-[10px] font-black text-[#A90706] uppercase tracking-widest block mb-1">
              // ENGAGEMENT MODEL SELECTION
            </span>
            <h3 className="font-condensed text-xl sm:text-2xl font-black uppercase tracking-wide">
              HIRE DEVELOPERS // {roleTitle.toUpperCase()}
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
              HIRING MODEL REQUEST RECEIVED
            </h4>
            <p className="text-slate-600 text-sm max-w-md mx-auto mb-4 font-medium">
              Thank you, <strong className="text-slate-900">{fullName}</strong>. Our Principal Engineering Recruiter will match 2-3 pre-screened candidate profiles for your <strong className="text-slate-900">{model}</strong> within 24 hours.
            </p>
            {referenceId && (
              <p className="text-xs font-black text-[#A90706] font-condensed mb-8">
                REQUEST ID: {referenceId}
              </p>
            )}
            <button
              onClick={handleResetAndClose}
              className="px-8 py-3 bg-[#A90706] text-white font-condensed text-xs font-black uppercase tracking-widest shadow-md"
            >
              CLOSE WINDOW
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-6 max-h-[80vh] overflow-y-auto bg-white">
            {errorMessage && (
              <div className="p-4 bg-red-50 border-2 border-red-600 text-red-700 text-xs font-bold">
                ⚠️ {errorMessage}
              </div>
            )}
            
            {/* Model Selection */}
            <div>
              <label className="font-condensed text-xs font-extrabold text-slate-900 uppercase tracking-wider block mb-2">
                SELECTED ENGAGEMENT MODEL:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {["Dedicated Team Model", "Staff Augmentation", "Project-Based Team"].map((m) => (
                  <button
                    key={m}
                    type="button"
                    onClick={() => setModel(m)}
                    className={`p-3 font-condensed text-xs font-extrabold uppercase border text-center transition-all cursor-pointer ${
                      model === m
                        ? "bg-[#A90706] text-white border-[#A90706] shadow-sm"
                        : "bg-[#FAF8F5] text-slate-800 border-[#E2DDD5] hover:border-slate-900"
                    }`}
                  >
                    {m}
                  </button>
                ))}
              </div>
            </div>

            {/* Developer Experience & Team Size */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="font-condensed text-xs font-extrabold text-slate-900 uppercase tracking-wider block mb-1">
                  REQUIRED SENIORITY LEVEL:
                </label>
                <select
                  value={seniority}
                  onChange={(e) => setSeniority(e.target.value)}
                  className="w-full p-3 bg-[#FAF8F5] border border-[#E2DDD5] font-condensed text-xs font-bold uppercase text-slate-900 focus:outline-hidden focus:border-slate-900"
                >
                  <option value="Junior (1-3 Yrs)">Junior / Associate (1-3 Yrs)</option>
                  <option value="Mid-Level (3-5 Yrs)">Mid-Level (3-5 Yrs)</option>
                  <option value="Senior (5-8+ Yrs)">Senior Engineer (5-8+ Yrs)</option>
                  <option value="Lead Architect (8+ Yrs)">Tech Lead / Architect (8+ Yrs)</option>
                </select>
              </div>

              <div>
                <label className="font-condensed text-xs font-extrabold text-slate-900 uppercase tracking-wider block mb-1">
                  TEAM SIZE NEEDED:
                </label>
                <select
                  value={teamSize}
                  onChange={(e) => setTeamSize(e.target.value)}
                  className="w-full p-3 bg-[#FAF8F5] border border-[#E2DDD5] font-condensed text-xs font-bold uppercase text-slate-900 focus:outline-hidden focus:border-slate-900"
                >
                  <option value="1 Developer">1 Developer</option>
                  <option value="2-3 Developers">2-3 Developers</option>
                  <option value="4-6 Developer Squad">4-6 Developer Squad</option>
                  <option value="Enterprise Squad (7+)">Enterprise Squad (7+)</option>
                </select>
              </div>
            </div>

            {/* Start Date & Timezone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="font-condensed text-xs font-extrabold text-slate-900 uppercase tracking-wider block mb-1">
                  EXPECTED START DATE:
                </label>
                <select
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  className="w-full p-3 bg-[#FAF8F5] border border-[#E2DDD5] font-condensed text-xs font-bold uppercase text-slate-900 focus:outline-hidden focus:border-slate-900"
                >
                  <option value="Immediate">Immediate (24-48 Hours)</option>
                  <option value="Within 1 Week">Within 1 Week</option>
                  <option value="Within 2 Weeks">Within 2 Weeks</option>
                  <option value="Exploring Options">Exploring Options</option>
                </select>
              </div>

              <div>
                <label className="font-condensed text-xs font-extrabold text-slate-900 uppercase tracking-wider block mb-1">
                  TIMEZONE OVERLAP PREFERENCE:
                </label>
                <select
                  value={timezone}
                  onChange={(e) => setTimezone(e.target.value)}
                  className="w-full p-3 bg-[#FAF8F5] border border-[#E2DDD5] font-condensed text-xs font-bold uppercase text-slate-900 focus:outline-hidden focus:border-slate-900"
                >
                  <option value="US Timezone Overlap">US Timezone (EST / PST Overlap)</option>
                  <option value="Europe Timezone Overlap">Europe (GMT / CET Overlap)</option>
                  <option value="Asia Timezone Overlap">Asia (IST / SGT Overlap)</option>
                  <option value="Flexible">Flexible / Asynchronous</option>
                </select>
              </div>
            </div>

            {/* Contact Details */}
            <div className="pt-4 border-t border-[#E2DDD5] space-y-4">
              <span className="font-condensed text-xs font-black text-[#A90706] uppercase tracking-widest block">
                // YOUR CONTACT INFORMATION
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
                    placeholder="e.g. Alex Morgan"
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
                    placeholder="alex@company.com"
                    className="w-full p-3 bg-[#FAF8F5] border border-[#E2DDD5] font-condensed text-xs font-bold text-slate-900 placeholder:text-slate-400 focus:outline-hidden focus:border-slate-900"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="font-condensed text-xs font-extrabold text-slate-900 uppercase tracking-wider block mb-1">
                    PHONE / WHATSAPP *
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
                    COMPANY / ORGANISATION
                  </label>
                  <input
                    type="text"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    placeholder="e.g. Acme Tech Inc."
                    className="w-full p-3 bg-[#FAF8F5] border border-[#E2DDD5] font-condensed text-xs font-bold uppercase text-slate-900 placeholder:text-slate-400 focus:outline-hidden focus:border-slate-900"
                  />
                </div>
              </div>

              <div>
                <label className="font-condensed text-xs font-extrabold text-slate-900 uppercase tracking-wider block mb-1">
                  PROJECT SPECIFICATIONS / SKILL REQUIREMENTS
                </label>
                <textarea
                  rows={3}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Describe your tech stack, project goals, or specific developer skills required..."
                  className="w-full p-3 bg-[#FAF8F5] border border-[#E2DDD5] font-condensed text-xs font-medium text-slate-900 placeholder:text-slate-400 focus:outline-hidden focus:border-slate-900"
                ></textarea>
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-4 border-t border-[#E2DDD5]">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-[#A90706] hover:bg-[#880504] text-white font-condensed text-sm font-black tracking-widest uppercase transition-all shadow-xl flex items-center justify-center gap-3 cursor-pointer disabled:opacity-50"
              >
                <span>{isSubmitting ? "PROCESSING REQUEST..." : "SUBMIT HIRING REQUEST & RECEIVE CANDIDATES"}</span>
                <ArrowUpRight className="w-5 h-5" />
              </button>
              <div className="flex items-center justify-center gap-4 mt-3 text-[10px] font-condensed font-bold text-slate-500 uppercase">
                <span>✓ 2-WEEK RISK-FREE TRIAL</span>
                <span>•</span>
                <span>✓ STRICT NDA INCLUDED</span>
                <span>•</span>
                <span>✓ 24-HOUR PROFILES DISPATCH</span>
              </div>
              <div className="pt-2 text-center">
                <Link
                  href="/build-team/hire"
                  onClick={onClose}
                  className="font-condensed text-xs font-bold text-[#A90706] hover:underline uppercase tracking-wider inline-flex items-center gap-1"
                >
                  <span>OPEN FULL-PAGE HIRING &amp; RATE CALCULATOR FORM</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

          </form>
        )}

      </div>
    </div>
  );
}
