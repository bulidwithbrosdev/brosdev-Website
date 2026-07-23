"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2, PhoneCall, ArrowUpRight, Calendar, Clock } from "lucide-react";
import Link from "next/link";
import { useTranslation } from "@/context/TranslationContext";

interface CallBookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CallBookingModal({ isOpen, onClose }: CallBookingModalProps) {
  const { locale } = useTranslation();
  const [submitted, setSubmitted] = useState(false);
  const [currency, setCurrency] = useState<"INR" | "USD" | "EUR" | "GBP">("INR");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    projectType: "Full-Stack Web & SaaS Application",
    customService: "",
    budget: "₹2,50,000 - ₹5,00,000",
    date: new Date(Date.now() + 86400000).toISOString().split("T")[0],
    timeSlot: "02:00 PM - 02:45 PM",
    platform: "Google Meet",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [referenceId, setReferenceId] = useState<string | null>(null);

  const budgetOptions: Record<"INR" | "USD" | "EUR" | "GBP", string[]> = {
    INR: ["₹1,00,000 - ₹2,50,000", "₹2,50,000 - ₹5,00,000", "₹5,00,000 - ₹10,00,000", "₹10,00,000+"],
    USD: ["< $3,000 USD", "$3,000 - $6,000 USD", "$6,000 - $15,000 USD", "$15,000+ USD"],
    EUR: ["< €2,500 EUR", "€2,500 - €5,500 EUR", "€5,500 - €14,000 EUR", "€14,000+ EUR"],
    GBP: ["< £2,000 GBP", "£2,000 - £4,500 GBP", "£4,500 - £12,000 GBP", "£12,000+ GBP"],
  };

  const handleCurrencyChange = (curr: "INR" | "USD" | "EUR" | "GBP") => {
    setCurrency(curr);
    setFormData((prev) => ({ ...prev, budget: budgetOptions[curr][1] }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const res = await fetch("/api/send-enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          formType: "book-consultation",
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
          serviceType: formData.projectType === "Other Custom Service" ? formData.customService : formData.projectType,
          budgetRange: formData.budget,
          meetingDate: formData.date,
          timeSlot: formData.timeSlot,
          platform: formData.platform,
          projectNotes: formData.message,
          currency,
        }),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setReferenceId(data.referenceId || null);
        setSubmitted(true);
      } else {
        setErrorMessage(data.error || "Failed to book call. Please try again.");
      }
    } catch (err) {
      console.error(err);
      setErrorMessage("Network error. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            className="bg-[#FAF8F5] max-w-2xl w-full p-6 sm:p-8 relative shadow-2xl border-2 border-slate-900 my-8 overflow-hidden"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 p-2 bg-slate-900 text-white hover:bg-[#A90706] transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {submitted ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-red-50 text-[#A90706] flex items-center justify-center mx-auto mb-4 border border-[#A90706] rounded-full">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-2 uppercase font-[var(--font-geist)]">
                  CONSULTATION CONFIRMED!
                </h3>
                <p className="text-slate-600 text-xs max-w-sm mx-auto mb-4">
                  Thank you, <span className="font-bold text-slate-900">{formData.name}</span>. We have emailed your calendar invitation for <strong className="text-slate-900">{formData.date} @ {formData.timeSlot}</strong>.
                </p>
                {referenceId && (
                  <p className="text-xs font-black text-[#A90706] font-condensed mb-6">
                    MEETING ID: {referenceId}
                  </p>
                )}
                <button
                  onClick={handleReset}
                  className="px-8 py-3.5 bg-[#A90706] text-white font-condensed font-black text-xs tracking-widest uppercase cursor-pointer"
                >
                  DONE &amp; CLOSE
                </button>
              </div>
            ) : (
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-50 text-[#A90706] border border-red-200 text-[10px] font-black uppercase mb-3">
                  <PhoneCall className="w-3.5 h-3.5" />
                  <span>// 45-MIN ARCHITECTURAL SCOPING SESSION</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-black text-slate-900 mb-1 uppercase font-[var(--font-geist)]">
                  BOOK A CONSULTATION
                </h3>
                <p className="text-xs text-slate-600 mb-6 font-medium">
                  Review your architecture, timeline &amp; fixed pricing directly with senior engineers.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4 max-h-[70vh] overflow-y-auto pr-1">
                  {errorMessage && (
                    <div className="p-4 bg-red-50 border-2 border-red-600 text-red-700 text-xs font-bold">
                      ⚠️ {errorMessage}
                    </div>
                  )}

                  {/* Service & Currency Budget */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] font-extrabold text-slate-900 uppercase mb-1">
                        SERVICE REQUIRED *
                      </label>
                      <select
                        value={formData.projectType}
                        onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-white border border-[#E2DDD5] text-xs font-bold text-slate-900 focus:outline-hidden focus:border-slate-900 uppercase font-condensed"
                      >
                        <option>Full-Stack Web &amp; SaaS Application</option>
                        <option>AI &amp; Enterprise LLM Workflows</option>
                        <option>Mobile App (iOS/Android)</option>
                        <option>Cloud Architecture &amp; Kubernetes</option>
                        <option>Hire Dedicated Developers</option>
                        <option>UI/UX Design System</option>
                        <option value="Other">Other (Specify Custom Service Below)</option>
                      </select>

                      {formData.projectType === "Other" && (
                        <div className="mt-2">
                          <label className="block text-[9px] font-extrabold text-[#A90706] uppercase mb-1">
                            SPECIFY CUSTOM SERVICE *
                          </label>
                          <input
                            type="text"
                            required
                            placeholder="e.g. Smart Contract Audit, Data Pipeline..."
                            value={formData.customService}
                            onChange={(e) => setFormData({ ...formData, customService: e.target.value })}
                            className="w-full px-3 py-2 bg-white border border-[#E2DDD5] text-xs font-medium text-slate-900 focus:outline-hidden focus:border-slate-900"
                          />
                        </div>
                      )}
                    </div>

                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <label className="block text-[10px] font-extrabold text-slate-900 uppercase">
                          BUDGET RANGE *
                        </label>
                        <div className="flex items-center gap-1">
                          {(["INR", "USD", "EUR", "GBP"] as const).map((curr) => (
                            <button
                              key={curr}
                              type="button"
                              onClick={() => handleCurrencyChange(curr)}
                              className={`px-1.5 py-0.5 font-condensed text-[9px] font-black uppercase transition-all cursor-pointer ${currency === curr ? "bg-[#A90706] text-white" : "bg-white text-slate-600 border border-[#E2DDD5]"
                                }`}
                            >
                              {curr === "INR" ? "₹ INR" : curr === "USD" ? "$ USD" : curr === "EUR" ? "€ EUR" : "£ GBP"}
                            </button>
                          ))}
                        </div>
                      </div>

                      <select
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-white border border-[#E2DDD5] text-xs font-bold text-slate-900 focus:outline-hidden focus:border-slate-900 uppercase font-condensed"
                      >
                        {budgetOptions[currency].map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Meeting Date & Time */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] font-extrabold text-slate-900 uppercase mb-1">
                        MEETING DATE *
                      </label>
                      <input
                        type="date"
                        required
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-white border border-[#E2DDD5] text-xs font-bold text-slate-900 focus:outline-hidden focus:border-slate-900 font-condensed"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] font-extrabold text-slate-900 uppercase mb-1">
                        TIME SLOT *
                      </label>
                      <select
                        value={formData.timeSlot}
                        onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-white border border-[#E2DDD5] text-xs font-bold text-slate-900 focus:outline-hidden focus:border-slate-900 uppercase font-condensed"
                      >
                        <option>11:00 AM - 11:45 AM</option>
                        <option>02:00 PM - 02:45 PM</option>
                        <option>04:00 PM - 04:45 PM</option>
                        <option>06:30 PM - 07:15 PM</option>
                        <option>09:00 PM - 09:45 PM</option>
                      </select>
                    </div>
                  </div>

                  {/* Contact Info */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] font-extrabold text-slate-900 uppercase mb-1">
                        FULL NAME *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Vikram Sharma / Alex Morgan"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-white border border-[#E2DDD5] text-xs font-bold uppercase text-slate-900 focus:outline-hidden focus:border-slate-900 font-condensed"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] font-extrabold text-slate-900 uppercase mb-1">
                        WORK EMAIL *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="john@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value.toLowerCase() })}
                        autoCapitalize="none"
                        autoCorrect="off"
                        spellCheck={false}
                        className="w-full px-3.5 py-2.5 bg-white border border-[#E2DDD5] text-xs font-bold text-slate-900 lowercase focus:outline-hidden focus:border-slate-900 font-condensed"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] font-extrabold text-slate-900 uppercase mb-1">
                        PHONE / WHATSAPP NUMBER *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765-43210 / +1 (555) 000-0000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-white border border-[#E2DDD5] text-xs font-bold text-slate-900 focus:outline-hidden focus:border-slate-900 font-condensed"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] font-extrabold text-slate-900 uppercase mb-1">
                        COMPANY NAME
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Acme Tech"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-white border border-[#E2DDD5] text-xs font-bold uppercase text-slate-900 focus:outline-hidden focus:border-slate-900 font-condensed"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] font-extrabold text-slate-900 uppercase mb-1">
                      PROJECT DESCRIPTION / SCOPE NOTES
                    </label>
                    <textarea
                      rows={2}
                      placeholder="Outline key product goals or tech stack requirements..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-white border border-[#E2DDD5] text-xs font-medium text-slate-900 focus:outline-hidden focus:border-slate-900"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-[#A90706] hover:bg-[#880504] text-white font-condensed font-black text-xs tracking-widest uppercase transition-colors shadow-lg flex items-center justify-center gap-2 cursor-pointer mt-2 group"
                  >
                    <span className="inline-flex items-center gap-2">
                      <span>CONFIRM &amp; BOOK CONSULTATION</span>
                      <ArrowUpRight className="w-4 h-4 shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </button>

                  <div className="pt-2 text-center">
                    <Link
                      href={`/${locale}/book-consultation`}
                      onClick={onClose}
                      className="font-condensed text-xs font-bold text-[#A90706] hover:underline uppercase tracking-wider inline-flex items-center gap-1"
                    >
                      <span>OPEN FULL-PAGE SCOPING FORM</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>

                </form>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
