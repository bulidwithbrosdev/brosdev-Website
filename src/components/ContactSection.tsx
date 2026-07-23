"use client";

import { useState } from "react";
import { Mail, MapPin, Clock, ArrowUpRight, CheckCircle2 } from "lucide-react";

export default function ContactSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [sent, setSent] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [referenceId, setReferenceId] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const res = await fetch("/api/send-enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          formType: "contact-us",
          name,
          email,
          subject,
          message,
        }),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setReferenceId(data.referenceId || null);
        setSent(true);
      } else {
        setErrorMessage(data.error || "Failed to send inquiry. Please try again.");
      }
    } catch (err) {
      console.error(err);
      setErrorMessage("Network error. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-[#FAF8F5] border-b border-[#E2DDD5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 border border-[#E2DDD5] bg-white divide-y lg:divide-y-0 lg:divide-x divide-[#E2DDD5]">
          
          {/* Left Column (5 Cols): Info */}
          <div className="lg:col-span-5 p-8 lg:p-12 space-y-8 bg-[#FAF8F5]">
            <div>
              <span className="text-xs font-black tracking-widest text-[#A90706] uppercase mb-3 block">
                // GET IN TOUCH
              </span>
              <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-4 uppercase leading-none">
                Start A Project
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                Have a new project or looking to scale your engineering capacity? Send us a direct inquiry.
              </p>
            </div>

            <div className="space-y-6 pt-6 border-t border-[#E2DDD5]">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-white border border-[#E2DDD5] flex items-center justify-center text-[#A90706] shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest">
                    DIRECT EMAIL
                  </h4>
                  <a
                    href="mailto:hello@brosdev.site"
                    className="text-base font-extrabold text-slate-900 hover:text-[#A90706] transition-colors"
                  >
                    hello@brosdev.site
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-white border border-[#E2DDD5] flex items-center justify-center text-[#A90706] shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest">
                    RESPONSE TIME
                  </h4>
                  <p className="text-base font-extrabold text-slate-900">
                    Under 1 Hour Guaranteed
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-white border border-[#E2DDD5] flex items-center justify-center text-[#A90706] shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest">
                    LOCATION
                  </h4>
                  <p className="text-base font-extrabold text-slate-900">
                    India (IST) • Global Remote
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column (7 Cols): Sharp Square Form */}
          <div className="lg:col-span-7 p-8 lg:p-12 bg-white">
            {sent ? (
              <div className="text-center py-12">
                <div className="w-14 h-14 bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4 border border-emerald-300">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-2 uppercase">
                  Message Received!
                </h3>
                <p className="text-slate-600 text-xs max-w-sm mx-auto mb-4">
                  Our technical lead will review your message and reply via email within 1 hour.
                </p>
                {referenceId && (
                  <p className="text-xs font-bold text-[#A90706] font-condensed">
                    REFERENCE NO: {referenceId}
                  </p>
                )}
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <h3 className="text-2xl font-extrabold text-slate-900 mb-2 uppercase tracking-wide">
                  Send Direct Inquiry
                </h3>

                {errorMessage && (
                  <div className="p-4 bg-red-50 border-2 border-red-600 text-red-700 text-xs font-bold">
                    ⚠️ {errorMessage}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-extrabold text-slate-700 uppercase mb-1 tracking-wider">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Alex Morgan"
                      className="w-full px-4 py-3 bg-[#FAF8F5] border border-[#E2DDD5] text-xs font-medium text-slate-900 focus:outline-hidden focus:border-slate-900"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-extrabold text-slate-700 uppercase mb-1 tracking-wider">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value.toLowerCase())}
                      autoCapitalize="none"
                      autoCorrect="off"
                      spellCheck={false}
                      placeholder="alex@company.com"
                      className="w-full px-4 py-3 bg-[#FAF8F5] border border-[#E2DDD5] text-xs font-medium text-slate-900 lowercase focus:outline-hidden focus:border-slate-900"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-extrabold text-slate-700 uppercase mb-1 tracking-wider">
                    Project Scope / Subject
                  </label>
                  <input
                    type="text"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="e.g. Next.js SaaS Web Application"
                    className="w-full px-4 py-3 bg-[#FAF8F5] border border-[#E2DDD5] text-xs font-medium text-slate-900 focus:outline-hidden focus:border-slate-900"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-extrabold text-slate-700 uppercase mb-1 tracking-wider">
                    Message Details *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell us about your project goals and timeline..."
                    className="w-full px-4 py-3 bg-[#FAF8F5] border border-[#E2DDD5] text-xs font-medium text-slate-900 focus:outline-hidden focus:border-slate-900"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-slate-900 hover:bg-[#A90706] text-white font-extrabold text-xs tracking-widest uppercase transition-colors flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  <span>{isSubmitting ? "SENDING INQUIRY..." : "SEND INQUIRY NOW"}</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
