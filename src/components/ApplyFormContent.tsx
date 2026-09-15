"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { ArrowLeft, Upload, CheckCircle2, FileText, Send } from "lucide-react";

export default function ApplyFormContent({ locale }: { locale: string }) {
  const searchParams = useSearchParams();
  const positionQuery = searchParams.get("position") || "Product Designer";

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [resumeFileName, setResumeFileName] = useState<string | null>(null);
  const [attachment, setAttachment] = useState<{ filename: string; content: string; type: string } | null>(null);
  const [referenceId, setReferenceId] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    nameOnAadhar: "",
    gender: "Male",
    email: "",
    phone: "",
    age: "",
    address: "",
    position: positionQuery,
    currentFirm: "",
    currentDesignation: "",
    reportingTo: "",
    totalExperience: "",
    relevantExperience: "",
    currentCTC: "",
    expectedCTC: "",
    noticePeriod: "",
    reasonForLeaving: "",
  });

  useEffect(() => {
    if (positionQuery) {
      setFormData((prev) => ({ ...prev, position: positionQuery }));
    }
  }, [positionQuery]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setResumeFileName(file.name);

      const reader = new FileReader();
      reader.onload = () => {
        if (typeof reader.result === "string") {
          setAttachment({
            filename: file.name,
            content: reader.result,
            type: file.type,
          });
        }
      };
      reader.readAsDataURL(file);
    }
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
          formType: "careers-application",
          name: formData.nameOnAadhar,
          ...formData,
          attachment: attachment || undefined,
        }),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setReferenceId(data.referenceId || null);
        setSubmitted(true);
      } else {
        setErrorMessage(data.error || "Failed to submit application. Please try again.");
      }
    } catch (err) {
      console.error(err);
      setErrorMessage("Network error. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const careersHref = `/${locale}/company/careers`;

  return (
    <>
      <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-[#E2DDD5] mb-4 block w-fit">
        <span className="w-2 h-2 bg-[#A90706]"></span>
        <span className="font-condensed text-xs font-black tracking-widest text-[#A90706] uppercase">
          // CAREER APPLICATION FORM
        </span>
      </div>

      <h1 className="text-4xl sm:text-6xl font-black text-slate-900 tracking-tight leading-none uppercase mb-4 font-[var(--font-geist)]">
        JOB APPLICATION
      </h1>

      <p className="text-slate-700 text-base sm:text-lg font-medium mb-8">
        Applying for position: <strong className="text-[#A90706] uppercase">{formData.position}</strong>
      </p>

      {submitted ? (
        <div className="p-10 border-2 border-slate-900 bg-[#FAF8F5] text-center space-y-6 shadow-2xl">
          <div className="w-16 h-16 bg-[#A90706] text-white flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-10 h-10" />
          </div>
          <h2 className="font-condensed text-3xl font-black uppercase tracking-tight text-slate-900 font-[var(--font-geist)]">
            APPLICATION SUBMITTED SUCCESSFULLY!
          </h2>
          <p className="text-slate-700 text-sm max-w-lg mx-auto leading-relaxed">
            Thank you for applying for <strong className="text-slate-900">{formData.position}</strong> at BrosDev Solutions. Our talent squad will review your application and contact you via email at <strong className="text-slate-900">{formData.email}</strong> within 48 hours.
          </p>
          {referenceId && (
            <p className="text-xs font-black text-[#A90706] font-condensed">
              APPLICATION CODE: {referenceId}
            </p>
          )}
          <div className="pt-4">
            <Link
              href={careersHref}
              className="px-8 py-4 bg-slate-900 hover:bg-[#A90706] text-white font-condensed text-xs font-black tracking-widest uppercase transition-colors inline-block cursor-pointer"
            >
              RETURN TO CAREERS
            </Link>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-12">
          {errorMessage && (
            <div className="p-4 bg-red-50 border-2 border-red-600 text-red-700 text-xs font-bold">
              ⚠️ {errorMessage}
            </div>
          )}

          {/* 01 // PERSONAL DETAILS */}
          <div className="p-8 border-2 border-slate-900 bg-[#FAF8F5] shadow-lg">
            <div className="flex items-center gap-3 border-b border-[#E2DDD5] pb-4 mb-6">
              <span className="font-condensed text-lg font-black text-[#A90706]">01</span>
              <h2 className="font-condensed text-xl font-black text-slate-900 uppercase tracking-wide">
                // PERSONAL DETAILS
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block font-condensed text-xs font-extrabold uppercase text-slate-800 tracking-wider mb-2">
                  Name as per your Aadhar Card *
                </label>
                <input
                  type="text"
                  name="nameOnAadhar"
                  required
                  value={formData.nameOnAadhar}
                  onChange={handleChange}
                  placeholder="Full name as on Aadhar Card"
                  className="w-full p-3.5 bg-white border border-[#E2DDD5] focus:border-slate-900 text-sm font-medium text-slate-900 focus:outline-hidden"
                />
              </div>

              <div>
                <label className="block font-condensed text-xs font-extrabold uppercase text-slate-800 tracking-wider mb-2">
                  Gender *
                </label>
                <select
                  name="gender"
                  required
                  value={formData.gender}
                  onChange={handleChange}
                  className="w-full p-3.5 bg-white border border-[#E2DDD5] focus:border-slate-900 text-sm font-medium text-slate-900 focus:outline-hidden cursor-pointer"
                >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                  <option value="Prefer not to say">Prefer not to say</option>
                </select>
              </div>

              <div>
                <label className="block font-condensed text-xs font-extrabold uppercase text-slate-800 tracking-wider mb-2">
                  Email ID *
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="w-full p-3.5 bg-white border border-[#E2DDD5] focus:border-slate-900 text-sm font-medium text-slate-900 focus:outline-hidden"
                />
              </div>

              <div>
                <label className="block font-condensed text-xs font-extrabold uppercase text-slate-800 tracking-wider mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 XXXXX XXXXX"
                  className="w-full p-3.5 bg-white border border-[#E2DDD5] focus:border-slate-900 text-sm font-medium text-slate-900 focus:outline-hidden"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block font-condensed text-xs font-extrabold uppercase text-slate-800 tracking-wider mb-2">
                  Age (in Years) *
                </label>
                <input
                  type="number"
                  name="age"
                  required
                  value={formData.age}
                  onChange={handleChange}
                  placeholder="e.g. 28"
                  className="w-full p-3.5 bg-white border border-[#E2DDD5] focus:border-slate-900 text-sm font-medium text-slate-900 focus:outline-hidden"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block font-condensed text-xs font-extrabold uppercase text-slate-800 tracking-wider mb-2">
                  Address *
                </label>
                <textarea
                  name="address"
                  required
                  rows={3}
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="Full residential address"
                  className="w-full p-3.5 bg-white border border-[#E2DDD5] focus:border-slate-900 text-sm font-medium text-slate-900 focus:outline-hidden"
                />
              </div>
            </div>
          </div>

          {/* 02 // POSITION APPLIED FOR */}
          <div className="p-8 border-2 border-slate-900 bg-[#FAF8F5] shadow-lg">
            <div className="flex items-center gap-3 border-b border-[#E2DDD5] pb-4 mb-6">
              <span className="font-condensed text-lg font-black text-[#A90706]">02</span>
              <h2 className="font-condensed text-xl font-black text-slate-900 uppercase tracking-wide">
                // POSITION APPLIED FOR
              </h2>
            </div>

            <div>
              <label className="block font-condensed text-xs font-extrabold uppercase text-slate-800 tracking-wider mb-2">
                Position *
              </label>
              <input
                type="text"
                name="position"
                required
                value={formData.position}
                onChange={handleChange}
                placeholder="Product Designer"
                className="w-full p-3.5 bg-white border border-[#E2DDD5] focus:border-slate-900 text-sm font-bold text-slate-900 focus:outline-hidden"
              />
            </div>
          </div>

          {/* 03 // PROFESSIONAL DETAILS */}
          <div className="p-8 border-2 border-slate-900 bg-[#FAF8F5] shadow-lg">
            <div className="flex items-center gap-3 border-b border-[#E2DDD5] pb-4 mb-6">
              <span className="font-condensed text-lg font-black text-[#A90706]">03</span>
              <h2 className="font-condensed text-xl font-black text-slate-900 uppercase tracking-wide">
                // PROFESSIONAL DETAILS
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block font-condensed text-xs font-extrabold uppercase text-slate-800 tracking-wider mb-2">
                  Current Firm Name
                </label>
                <input
                  type="text"
                  name="currentFirm"
                  value={formData.currentFirm}
                  onChange={handleChange}
                  placeholder="Company / Organisation name"
                  className="w-full p-3.5 bg-white border border-[#E2DDD5] focus:border-slate-900 text-sm font-medium text-slate-900 focus:outline-hidden"
                />
              </div>

              <div>
                <label className="block font-condensed text-xs font-extrabold uppercase text-slate-800 tracking-wider mb-2">
                  Current Designation / Title
                </label>
                <input
                  type="text"
                  name="currentDesignation"
                  value={formData.currentDesignation}
                  onChange={handleChange}
                  placeholder="e.g. Sales Executive"
                  className="w-full p-3.5 bg-white border border-[#E2DDD5] focus:border-slate-900 text-sm font-medium text-slate-900 focus:outline-hidden"
                />
              </div>

              <div>
                <label className="block font-condensed text-xs font-extrabold uppercase text-slate-800 tracking-wider mb-2">
                  Currently Reporting To
                </label>
                <input
                  type="text"
                  name="reportingTo"
                  value={formData.reportingTo}
                  onChange={handleChange}
                  placeholder="e.g. Regional Manager"
                  className="w-full p-3.5 bg-white border border-[#E2DDD5] focus:border-slate-900 text-sm font-medium text-slate-900 focus:outline-hidden"
                />
              </div>

              <div>
                <label className="block font-condensed text-xs font-extrabold uppercase text-slate-800 tracking-wider mb-2">
                  Total Experience (in Years)
                </label>
                <input
                  type="number"
                  step="0.5"
                  name="totalExperience"
                  value={formData.totalExperience}
                  onChange={handleChange}
                  placeholder="e.g. 6"
                  className="w-full p-3.5 bg-white border border-[#E2DDD5] focus:border-slate-900 text-sm font-medium text-slate-900 focus:outline-hidden"
                />
              </div>

              <div>
                <label className="block font-condensed text-xs font-extrabold uppercase text-slate-800 tracking-wider mb-2">
                  Relevant Experience (in Years)
                </label>
                <input
                  type="number"
                  step="0.5"
                  name="relevantExperience"
                  value={formData.relevantExperience}
                  onChange={handleChange}
                  placeholder="e.g. 4"
                  className="w-full p-3.5 bg-white border border-[#E2DDD5] focus:border-slate-900 text-sm font-medium text-slate-900 focus:outline-hidden"
                />
              </div>

              <div>
                <label className="block font-condensed text-xs font-extrabold uppercase text-slate-800 tracking-wider mb-2">
                  Current CTC (in Lakhs)
                </label>
                <input
                  type="text"
                  name="currentCTC"
                  value={formData.currentCTC}
                  onChange={handleChange}
                  placeholder="e.g. 4.5"
                  className="w-full p-3.5 bg-white border border-[#E2DDD5] focus:border-slate-900 text-sm font-medium text-slate-900 focus:outline-hidden"
                />
              </div>

              <div>
                <label className="block font-condensed text-xs font-extrabold uppercase text-slate-800 tracking-wider mb-2">
                  Expected CTC (in Lakhs)
                </label>
                <input
                  type="text"
                  name="expectedCTC"
                  value={formData.expectedCTC}
                  onChange={handleChange}
                  placeholder="e.g. 6.0"
                  className="w-full p-3.5 bg-white border border-[#E2DDD5] focus:border-slate-900 text-sm font-medium text-slate-900 focus:outline-hidden"
                />
              </div>

              <div>
                <label className="block font-condensed text-xs font-extrabold uppercase text-slate-800 tracking-wider mb-2">
                  Notice Period (in Days)
                </label>
                <input
                  type="number"
                  name="noticePeriod"
                  value={formData.noticePeriod}
                  onChange={handleChange}
                  placeholder="e.g. 30"
                  className="w-full p-3.5 bg-white border border-[#E2DDD5] focus:border-slate-900 text-sm font-medium text-slate-900 focus:outline-hidden"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block font-condensed text-xs font-extrabold uppercase text-slate-800 tracking-wider mb-2">
                  Reason for Leaving the Last Job
                </label>
                <textarea
                  name="reasonForLeaving"
                  rows={3}
                  value={formData.reasonForLeaving}
                  onChange={handleChange}
                  placeholder="Briefly describe your reason for leaving"
                  className="w-full p-3.5 bg-white border border-[#E2DDD5] focus:border-slate-900 text-sm font-medium text-slate-900 focus:outline-hidden"
                />
              </div>
            </div>
          </div>

          {/* 04 // RESUME & CREDENTIALS */}
          <div className="p-8 border-2 border-slate-900 bg-[#FAF8F5] shadow-lg">
            <div className="flex items-center gap-3 border-b border-[#E2DDD5] pb-4 mb-6">
              <span className="font-condensed text-lg font-black text-[#A90706]">04</span>
              <h2 className="font-condensed text-xl font-black text-slate-900 uppercase tracking-wide">
                // RESUME & CREDENTIALS
              </h2>
            </div>

            <div>
              <label className="block font-condensed text-xs font-extrabold uppercase text-slate-800 tracking-wider mb-3">
                Kindly upload your updated resume *
              </label>
              <div className="border-2 border-dashed border-[#E2DDD5] hover:border-slate-900 bg-white p-8 text-center cursor-pointer transition-colors relative">
                <input
                  type="file"
                  required
                  accept=".pdf,.doc,.docx"
                  onChange={handleFileChange}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                />
                <Upload className="w-8 h-8 text-[#A90706] mx-auto mb-3" />
                {resumeFileName ? (
                  <p className="font-condensed text-sm font-bold text-slate-900 uppercase flex items-center justify-center gap-2">
                    <FileText className="w-4 h-4 text-emerald-600" />
                    <span>{resumeFileName}</span>
                  </p>
                ) : (
                  <div>
                    <p className="font-condensed text-sm font-bold text-slate-900 uppercase mb-1">
                      DRAG &amp; DROP YOUR RESUME HERE OR CLICK TO BROWSE
                    </p>
                    <p className="text-xs text-slate-500 font-medium">
                      Supports PDF, DOC, DOCX (Max size 10MB)
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Bottom Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-4">
            <Link
              href={careersHref}
              className="font-condensed text-xs font-black text-slate-600 hover:text-[#A90706] uppercase tracking-widest transition-colors flex items-center gap-2 cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>BACK TO CAREERS</span>
            </Link>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full sm:w-auto px-10 py-5 bg-[#A90706] hover:bg-[#880504] text-white font-condensed text-xs font-black tracking-widest uppercase transition-all shadow-lg flex items-center justify-center gap-3 cursor-pointer disabled:opacity-50"
            >
              <span>{isSubmitting ? "SUBMITTING APPLICATION..." : "SUBMIT APPLICATION"}</span>
              <Send className="w-4 h-4" />
            </button>
          </div>

        </form>
      )}
    </>
  );
}
