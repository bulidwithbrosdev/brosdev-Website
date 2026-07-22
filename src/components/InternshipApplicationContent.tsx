"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { 
  GraduationCap, 
  BookOpen, 
  Code, 
  CheckCircle2, 
  ArrowUpRight, 
  Paperclip, 
  Sparkles, 
  Building, 
  Calendar, 
  Award,
  Globe,
  Terminal,
  User,
  Mail,
  Phone
} from "lucide-react";

interface InternshipApplicationContentProps {
  locale?: string;
}

export default function InternshipApplicationContent({ locale = "en" }: InternshipApplicationContentProps) {
  // Form State
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  
  // Academic & College State
  const [collegeName, setCollegeName] = useState("");
  const [degreeBranch, setDegreeBranch] = useState("B.Tech / B.E. Computer Engineering");
  const [customBranch, setCustomBranch] = useState("");
  const [currentSemYear, setCurrentSemYear] = useState("Final Year (7th / 8th Semester)");
  const [graduationYear, setGraduationYear] = useState("2026");
  const [cgpa, setCgpa] = useState("");

  // Pipeline Track & Internship Options
  const [pipelineTrack, setPipelineTrack] = useState("Full-Stack Web Engineering Track");
  const [duration, setDuration] = useState("6 Months (Final Semester Project)");
  const [locationMode, setLocationMode] = useState("GIFT City / Ahmedabad HQ (On-Site)");
  const [startDate, setStartDate] = useState("Immediate (Within 1-2 Weeks)");

  // Links & Cover Letter
  const [githubUrl, setGithubUrl] = useState("");
  const [linkedinUrl, setLinkedinUrl] = useState("");
  const [portfolioUrl, setPortfolioUrl] = useState("");
  const [coverNote, setCoverNote] = useState("");
  const [resumeName, setResumeName] = useState("");

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const pipelineTracks = [
    {
      title: "Full-Stack Web Engineering Track",
      stack: "Next.js 16, React 19, TypeScript, Node.js & PostgreSQL",
      desc: "Build enterprise SaaS web apps, server-rendered components, and high-volume REST/GraphQL APIs.",
    },
    {
      title: "AI & Enterprise LLM Engineering Track",
      stack: "Python, PyTorch, vLLM, LangChain & Vector DBs (Pinecone/Qdrant)",
      desc: "Develop autonomous AI agents, semantic RAG pipelines, and model fine-tuning systems.",
    },
    {
      title: "Cloud DevOps & Kubernetes Track",
      stack: "Docker, Kubernetes, AWS, Terraform, ArgoCD & Linux Kernels",
      desc: "Manage zero-downtime microservices clusters, CI/CD automated deployments, and mesh networks.",
    },
    {
      title: "UI/UX Product Design Systems Track",
      stack: "Figma, Design System Tokens, Prototyping & Tailwind CSS",
      desc: "Design state-of-the-art dark mode web interfaces, design tokens, and interactive micro-animations.",
    },
    {
      title: "Mobile Application Engineering Track",
      stack: "Flutter, React Native, Swift (iOS) & Kotlin (Android)",
      desc: "Engineer high-performance cross-platform mobile apps with native hardware integrations.",
    },
  ];

  const handleResumeUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setResumeName(e.target.files[0].name);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1000);
  };

  return (
    <main className="min-h-screen bg-[#FAF8F5] text-slate-900 selection:bg-[#A90706] selection:text-white font-sans antialiased">
      <Navbar />

      {/* Header Banner */}
      <section className="pt-36 pb-20 border-b border-[#E2DDD5] bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-[#E2DDD5] mb-6">
            <span className="w-2 h-2 bg-[#A90706]"></span>
            <span className="font-condensed text-xs font-normal tracking-widest text-[#A90706] uppercase">
              // BROSDEV ENGINEERING FELLOWSHIP &amp; INTERNSHIP
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-normal text-slate-900 tracking-tight leading-none uppercase mb-6 font-[var(--font-geist)]">
            INTERNSHIP APPLICATION FORM
          </h1>

          <p className="text-slate-700 text-lg sm:text-xl font-normal max-w-3xl leading-relaxed font-[var(--font-geist)]">
            Join Brosdev's elite software engineering cohort. Hands-on mentorship from principal architects, monthly stipend, real enterprise projects, and PPO full-time job offer opportunity.
          </p>
        </div>
      </section>

      {/* 4-Step Selection Process Funnel */}
      <section className="py-16 bg-[#FAF8F5] border-b border-[#E2DDD5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border-b-2 border-slate-900 pb-3 mb-8">
            <span className="font-condensed text-xs font-normal text-[#A90706] uppercase tracking-widest block mb-1">
              // SELECTION PROCESS &amp; ROADMAP
            </span>
            <h2 className="text-2xl sm:text-3xl font-normal text-slate-900 uppercase tracking-tight font-[var(--font-geist)]">
              4-STEP SELECTION &amp; ONBOARDING PIPELINE
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-2 border-slate-900 bg-white divide-y sm:divide-y-0 divide-slate-900 shadow-xl font-normal">
            {[
              {
                step: "01",
                title: "APPLICATION & PORTFOLIO REVIEW",
                tag: "STEP 1 • 24-48 HR REVIEW",
                desc: "Submit your online application, GitHub code samples, and college credentials. Our talent squad reviews your profile within 48 hours.",
              },
              {
                step: "02",
                title: "TECHNICAL & ARCHITECTURE INTERVIEW",
                tag: "STEP 2 • 45-MIN CALL",
                desc: "A 45-minute live interview & coding discussion with our Principal Software Architects to evaluate problem-solving & culture fit.",
              },
              {
                step: "03",
                title: "OFFER LETTER & STIPEND OFFER",
                tag: "STEP 3 • FORMAL OFFER",
                desc: "Receive your official offer letter detailing monthly stipend, PPO conversion roadmap, and assigned engineering squad.",
              },
              {
                step: "04",
                title: "LIVE PROJECT EXECUTION & WORK",
                tag: "STEP 4 • PRODUCTION WORK",
                desc: "Onboard to live enterprise client codebases with dedicated mentorship from senior leads, leading to full-time PPO conversion.",
              },
            ].map((s, idx) => (
              <div key={idx} className="p-6 hover:bg-[#FAF8F5] transition-colors flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-condensed text-3xl font-normal text-[#A90706]">
                      {s.step}
                    </span>
                    <span className="font-condensed text-[10px] font-normal px-2 py-0.5 bg-[#FAF8F5] text-slate-600 border border-[#E2DDD5] uppercase">
                      {s.tag}
                    </span>
                  </div>
                  <h3 className="font-condensed text-base font-normal text-slate-900 uppercase tracking-wide mb-2 font-[var(--font-geist)]">
                    {s.title}
                  </h3>
                  <p className="text-xs text-slate-600 font-normal leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-12 bg-white border-b border-[#E2DDD5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="font-condensed text-xs font-normal text-[#A90706] uppercase tracking-widest block mb-4">
            // AVAILABLE INTERNSHIP PIPELINE TRACKS
          </span>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {pipelineTracks.map((track, i) => (
              <div
                key={i}
                onClick={() => setPipelineTrack(track.title)}
                className={`p-4 border transition-all cursor-pointer text-left flex flex-col justify-between ${
                  pipelineTrack === track.title
                    ? "bg-slate-900 text-white border-slate-900 shadow-lg"
                    : "bg-[#FAF8F5] border-[#E2DDD5] hover:border-slate-900 text-slate-900"
                }`}
              >
                <div>
                  <span className={`font-condensed text-[10px] font-normal uppercase block mb-1 ${
                    pipelineTrack === track.title ? "text-[#A90706]" : "text-slate-500"
                  }`}>
                    TRACK 0{i + 1}
                  </span>
                  <h3 className="font-condensed text-sm font-normal uppercase mb-2 font-[var(--font-geist)] leading-tight">
                    {track.title}
                  </h3>
                  <p className={`text-[11px] font-normal line-clamp-2 ${
                    pipelineTrack === track.title ? "text-slate-300" : "text-slate-600"
                  }`}>
                    {track.desc}
                  </p>
                </div>
                <div className="pt-3 border-t border-slate-700/30 text-[10px] font-condensed uppercase font-normal text-[#A90706] mt-3">
                  {pipelineTrack === track.title ? "✓ SELECTED TRACK" : "CLICK TO SELECT"}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form Container */}
      <section className="py-20 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {isSubmitted ? (
            <div className="max-w-3xl mx-auto bg-white border-2 border-slate-900 p-10 sm:p-14 text-center shadow-2xl">
              <div className="w-20 h-20 bg-red-50 border-2 border-[#A90706] text-[#A90706] rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-12 h-12" />
              </div>
              <span className="font-condensed text-xs font-normal text-[#A90706] uppercase tracking-widest block mb-2">
                // INTERNSHIP APPLICATION SUBMITTED
              </span>
              <h2 className="text-3xl sm:text-4xl font-normal text-slate-900 uppercase tracking-tight mb-4 font-[var(--font-geist)]">
                APPLICATION RECEIVED FOR {fullName.toUpperCase()}
              </h2>
              <p className="text-slate-600 text-sm sm:text-base font-normal max-w-lg mx-auto mb-8 leading-relaxed">
                Thank you for applying to the <strong className="font-normal text-slate-900">{pipelineTrack}</strong>. Our engineering leads will review your college credentials &amp; portfolio, reaching out to <strong className="font-normal text-slate-900">{email}</strong> within 48 hours.
              </p>

              {/* Confirmation Summary Box */}
              <div className="p-6 bg-[#FAF8F5] border-2 border-slate-900 text-left mb-8 space-y-3 font-condensed font-normal">
                <div className="flex items-center justify-between border-b border-[#E2DDD5] pb-3 text-xs text-slate-500 uppercase">
                  <span>APPLICATION ID: #BD-INT-2026-8904</span>
                  <span>STATUS: UNDER REVIEW</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs uppercase text-slate-900 pt-2 font-normal">
                  <div>
                    <span className="text-slate-400 block text-[10px]">COLLEGE &amp; BRANCH:</span>
                    <span>{collegeName} ({degreeBranch})</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[10px]">YEAR &amp; PASSING:</span>
                    <span>{currentSemYear} (Graduating {graduationYear})</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[10px]">PIPELINE TRACK &amp; DURATION:</span>
                    <span>{pipelineTrack} ({duration})</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[10px]">LOCATION MODE:</span>
                    <span>{locationMode}</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link
                  href={locale ? `/${locale}` : "/"}
                  className="px-8 py-4 bg-slate-900 text-white font-condensed text-xs font-normal uppercase tracking-widest hover:bg-[#A90706] transition-colors"
                >
                  RETURN TO HOME PAGE
                </Link>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="px-8 py-4 bg-white border border-slate-900 text-slate-900 font-condensed text-xs font-normal uppercase tracking-widest hover:bg-slate-900 hover:text-white transition-colors cursor-pointer"
                >
                  SUBMIT ANOTHER APPLICATION
                </button>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              
              {/* Left Form Column (8 Cols) */}
              <div className="lg:col-span-8 bg-white border-2 border-slate-900 p-8 sm:p-12 shadow-2xl">
                <form onSubmit={handleSubmit} className="space-y-10 font-normal">

                  {/* Step 1: Personal & Contact Information */}
                  <div className="space-y-6">
                    <div className="flex items-center gap-3 border-b-2 border-slate-900 pb-3">
                      <span className="w-7 h-7 bg-[#A90706] text-white font-condensed text-xs font-normal flex items-center justify-center">
                        01
                      </span>
                      <h3 className="font-condensed text-xl font-normal text-slate-900 uppercase tracking-wide font-[var(--font-geist)]">
                        PERSONAL &amp; CONTACT DETAILS
                      </h3>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="font-condensed text-xs font-normal text-slate-900 uppercase tracking-wider block mb-1">
                          YOUR FULL NAME *
                        </label>
                        <input
                          type="text"
                          required
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
                          placeholder="e.g. Aarav Patel / Rahul Sharma"
                          className="w-full p-3.5 bg-[#FAF8F5] border border-[#E2DDD5] font-condensed text-xs font-normal uppercase text-slate-900 placeholder:text-slate-400 focus:outline-hidden focus:border-slate-900"
                        />
                      </div>

                      <div>
                        <label className="font-condensed text-xs font-normal text-slate-900 uppercase tracking-wider block mb-1">
                          EMAIL ADDRESS (PERSONAL / COLLEGE) *
                        </label>
                        <input
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="aarav@college.edu / aarav@gmail.com"
                          className="w-full p-3.5 bg-[#FAF8F5] border border-[#E2DDD5] font-condensed text-xs font-normal text-slate-900 placeholder:text-slate-400 focus:outline-hidden focus:border-slate-900"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="font-condensed text-xs font-normal text-slate-900 uppercase tracking-wider block mb-1">
                        PHONE / WHATSAPP NUMBER *
                      </label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+91 98765-43210"
                        className="w-full p-3.5 bg-[#FAF8F5] border border-[#E2DDD5] font-condensed text-xs font-normal text-slate-900 placeholder:text-slate-400 focus:outline-hidden focus:border-slate-900"
                      />
                    </div>
                  </div>

                  {/* Step 2: Academic & College Details */}
                  <div className="space-y-6 pt-6 border-t border-[#E2DDD5]">
                    <div className="flex items-center gap-3 border-b-2 border-slate-900 pb-3">
                      <span className="w-7 h-7 bg-[#A90706] text-white font-condensed text-xs font-normal flex items-center justify-center">
                        02
                      </span>
                      <h3 className="font-condensed text-xl font-normal text-slate-900 uppercase tracking-wide font-[var(--font-geist)]">
                        COLLEGE, DEGREE &amp; ACADEMIC DETAILS
                      </h3>
                    </div>

                    <div>
                      <label className="font-condensed text-xs font-normal text-slate-900 uppercase tracking-wider block mb-1">
                        COLLEGE / UNIVERSITY NAME *
                      </label>
                      <input
                        type="text"
                        required
                        value={collegeName}
                        onChange={(e) => setCollegeName(e.target.value)}
                        placeholder="e.g. IIT Bombay / NIT Surat / Nirma University / GTU / Parul University..."
                        className="w-full p-3.5 bg-[#FAF8F5] border border-[#E2DDD5] font-condensed text-xs font-normal uppercase text-slate-900 placeholder:text-slate-400 focus:outline-hidden focus:border-slate-900"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="font-condensed text-xs font-normal text-slate-900 uppercase tracking-wider block mb-1">
                          DEGREE &amp; BRANCH / MAJOR *
                        </label>
                        <select
                          value={degreeBranch}
                          onChange={(e) => setDegreeBranch(e.target.value)}
                          className="w-full p-3.5 bg-[#FAF8F5] border border-[#E2DDD5] font-condensed text-xs font-normal uppercase text-slate-900 focus:outline-hidden focus:border-slate-900"
                        >
                          <option value="B.Tech / B.E. Computer Engineering">B.Tech / B.E. Computer Engineering</option>
                          <option value="B.Tech / B.E. Information Technology">B.Tech / B.E. Information Technology</option>
                          <option value="B.Tech AI & Data Science">B.Tech AI &amp; Data Science</option>
                          <option value="BCA / MCA (Computer Applications)">BCA / MCA (Computer Applications)</option>
                          <option value="M.Tech Computer Science / AI">M.Tech Computer Science / AI</option>
                          <option value="B.Sc / M.Sc Computer Science">B.Sc / M.Sc Computer Science</option>
                          <option value="Other">Other Branch / Major (Specify Below)</option>
                        </select>
                      </div>

                      <div>
                        <label className="font-condensed text-xs font-normal text-slate-900 uppercase tracking-wider block mb-1">
                          CURRENT YEAR / SEMESTER *
                        </label>
                        <select
                          value={currentSemYear}
                          onChange={(e) => setCurrentSemYear(e.target.value)}
                          className="w-full p-3.5 bg-[#FAF8F5] border border-[#E2DDD5] font-condensed text-xs font-normal uppercase text-slate-900 focus:outline-hidden focus:border-slate-900"
                        >
                          <option value="3rd Year (5th / 6th Semester)">3rd Year (5th / 6th Semester)</option>
                          <option value="Final Year (7th / 8th Semester)">Final Year (7th / 8th Semester)</option>
                          <option value="Recent Graduate (2025 / 2026 Batch)">Recent Graduate (2025 / 2026 Batch)</option>
                          <option value="2nd Year (3rd / 4th Semester)">2nd Year (3rd / 4th Semester)</option>
                        </select>
                      </div>
                    </div>

                    {degreeBranch === "Other" && (
                      <div>
                        <label className="font-condensed text-[11px] font-normal text-[#A90706] uppercase tracking-wider block mb-1">
                          SPECIFY YOUR DEGREE &amp; BRANCH *
                        </label>
                        <input
                          type="text"
                          required
                          value={customBranch}
                          onChange={(e) => setCustomBranch(e.target.value)}
                          placeholder="e.g. Electrical Engineering, Data Science..."
                          className="w-full p-3.5 bg-[#FAF8F5] border border-[#E2DDD5] font-condensed text-xs font-normal text-slate-900 focus:outline-hidden focus:border-slate-900"
                        />
                      </div>
                    )}

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="font-condensed text-xs font-normal text-slate-900 uppercase tracking-wider block mb-1">
                          PASSING / GRADUATION YEAR *
                        </label>
                        <select
                          value={graduationYear}
                          onChange={(e) => setGraduationYear(e.target.value)}
                          className="w-full p-3.5 bg-[#FAF8F5] border border-[#E2DDD5] font-condensed text-xs font-normal uppercase text-slate-900 focus:outline-hidden focus:border-slate-900"
                        >
                          <option value="2026">2026 (Graduating Batch)</option>
                          <option value="2025">2025 (Recent Pass Out)</option>
                          <option value="2027">2027 (Pre-Final Year)</option>
                          <option value="2028">2028</option>
                        </select>
                      </div>

                      <div>
                        <label className="font-condensed text-xs font-normal text-slate-900 uppercase tracking-wider block mb-1">
                          CURRENT CGPA / PERCENTAGE *
                        </label>
                        <input
                          type="text"
                          required
                          value={cgpa}
                          onChange={(e) => setCgpa(e.target.value)}
                          placeholder="e.g. 8.5 CGPA / 82%"
                          className="w-full p-3.5 bg-[#FAF8F5] border border-[#E2DDD5] font-condensed text-xs font-normal uppercase text-slate-900 placeholder:text-slate-400 focus:outline-hidden focus:border-slate-900"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Step 3: Pipeline Track & Internship Terms */}
                  <div className="space-y-6 pt-6 border-t border-[#E2DDD5]">
                    <div className="flex items-center gap-3 border-b-2 border-slate-900 pb-3">
                      <span className="w-7 h-7 bg-[#A90706] text-white font-condensed text-xs font-normal flex items-center justify-center">
                        03
                      </span>
                      <h3 className="font-condensed text-xl font-normal text-slate-900 uppercase tracking-wide font-[var(--font-geist)]">
                        INTERNSHIP TRACK &amp; DURATION PREFERENCES
                      </h3>
                    </div>

                    <div>
                      <label className="font-condensed text-xs font-normal text-slate-900 uppercase tracking-wider block mb-1">
                        SELECT INTERNSHIP PIPELINE TRACK *
                      </label>
                      <select
                        value={pipelineTrack}
                        onChange={(e) => setPipelineTrack(e.target.value)}
                        className="w-full p-3.5 bg-[#FAF8F5] border border-[#E2DDD5] font-condensed text-xs font-normal uppercase text-slate-900 focus:outline-hidden focus:border-slate-900"
                      >
                        <option value="Full-Stack Web Engineering Track">Full-Stack Web Engineering Track (Next.js / Node / React)</option>
                        <option value="AI & Enterprise LLM Engineering Track">AI &amp; Enterprise LLM Track (Python / PyTorch / RAG)</option>
                        <option value="Cloud DevOps & Kubernetes Track">Cloud DevOps &amp; Kubernetes Track (Docker / K8s / AWS)</option>
                        <option value="UI/UX Product Design Systems Track">UI/UX Product Design Track (Figma / Design Tokens)</option>
                        <option value="Mobile Application Engineering Track">Mobile Application Track (Flutter / React Native)</option>
                      </select>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="font-condensed text-xs font-normal text-slate-900 uppercase tracking-wider block mb-1">
                          INTERNSHIP DURATION *
                        </label>
                        <select
                          value={duration}
                          onChange={(e) => setDuration(e.target.value)}
                          className="w-full p-3.5 bg-[#FAF8F5] border border-[#E2DDD5] font-condensed text-xs font-normal uppercase text-slate-900 focus:outline-hidden focus:border-slate-900"
                        >
                          <option value="6 Months (Final Semester Project)">6 Months (Final Semester Project / Training)</option>
                          <option value="3 Months (Summer / Winter Internship)">3 Months (Summer / Winter Internship)</option>
                          <option value="1 Year (Extended Engineering Fellowship)">1 Year (Extended Engineering Fellowship)</option>
                        </select>
                      </div>

                      <div>
                        <label className="font-condensed text-xs font-normal text-slate-900 uppercase tracking-wider block mb-1">
                          LOCATION MODE *
                        </label>
                        <select
                          value={locationMode}
                          onChange={(e) => setLocationMode(e.target.value)}
                          className="w-full p-3.5 bg-[#FAF8F5] border border-[#E2DDD5] font-condensed text-xs font-normal uppercase text-slate-900 focus:outline-hidden focus:border-slate-900"
                        >
                          <option value="GIFT City / Ahmedabad HQ (On-Site)">GIFT City / Ahmedabad HQ (On-Site Studio)</option>
                          <option value="Remote (India / Global)">Remote (Online Internship)</option>
                          <option value="Hybrid (Office + Remote)">Hybrid (Office + Remote)</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Step 4: Portfolio Links & Statement of Intent */}
                  <div className="space-y-6 pt-6 border-t border-[#E2DDD5]">
                    <div className="flex items-center gap-3 border-b-2 border-slate-900 pb-3">
                      <span className="w-7 h-7 bg-[#A90706] text-white font-condensed text-xs font-normal flex items-center justify-center">
                        04
                      </span>
                      <h3 className="font-condensed text-xl font-normal text-slate-900 uppercase tracking-wide font-[var(--font-geist)]">
                        PORTFOLIO LINKS &amp; RESUME ATTACHMENT
                      </h3>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="font-condensed text-xs font-normal text-slate-900 uppercase tracking-wider block mb-1">
                          GITHUB PROFILE URL *
                        </label>
                        <input
                          type="url"
                          required
                          value={githubUrl}
                          onChange={(e) => setGithubUrl(e.target.value)}
                          placeholder="https://github.com/username"
                          className="w-full p-3.5 bg-[#FAF8F5] border border-[#E2DDD5] font-condensed text-xs font-normal text-slate-900 placeholder:text-slate-400 focus:outline-hidden focus:border-slate-900"
                        />
                      </div>

                      <div>
                        <label className="font-condensed text-xs font-normal text-slate-900 uppercase tracking-wider block mb-1">
                          LINKEDIN PROFILE URL *
                        </label>
                        <input
                          type="url"
                          required
                          value={linkedinUrl}
                          onChange={(e) => setLinkedinUrl(e.target.value)}
                          placeholder="https://linkedin.com/in/username"
                          className="w-full p-3.5 bg-[#FAF8F5] border border-[#E2DDD5] font-condensed text-xs font-normal text-slate-900 placeholder:text-slate-400 focus:outline-hidden focus:border-slate-900"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="font-condensed text-xs font-normal text-slate-900 uppercase tracking-wider block mb-1">
                        STATEMENT OF INTENT / WHY JOIN BROSDEV?
                      </label>
                      <textarea
                        rows={3}
                        value={coverNote}
                        onChange={(e) => setCoverNote(e.target.value)}
                        placeholder="Briefly describe your key coding projects, programming skills, and why you want to intern at Brosdev..."
                        className="w-full p-3.5 bg-[#FAF8F5] border border-[#E2DDD5] font-condensed text-xs font-normal text-slate-900 placeholder:text-slate-400 focus:outline-hidden focus:border-slate-900"
                      ></textarea>
                    </div>

                    {/* Resume Attachment */}
                    <div>
                      <label className="font-condensed text-xs font-normal text-slate-900 uppercase tracking-wider block mb-1">
                        ATTACH RESUME / CV *
                      </label>
                      <div className="relative flex items-center">
                        <input
                          type="file"
                          required={!resumeName}
                          onChange={handleResumeUpload}
                          className="hidden"
                          id="internship-resume-upload"
                        />
                        <label
                          htmlFor="internship-resume-upload"
                          className="w-full p-3.5 bg-[#FAF8F5] border border-dashed border-slate-400 text-xs font-condensed font-normal text-slate-600 flex items-center justify-center gap-2 cursor-pointer hover:border-slate-900 hover:text-slate-900"
                        >
                          <Paperclip className="w-4 h-4 text-[#A90706]" />
                          <span>{resumeName ? `ATTACHED: ${resumeName}` : "CHOOSE PDF / DOCX RESUME FILE (MAX 10MB)"}</span>
                        </label>
                      </div>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-6 border-t border-[#E2DDD5]">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-5 bg-[#A90706] hover:bg-[#880504] text-white font-condensed text-sm font-normal tracking-widest uppercase transition-all shadow-xl flex items-center justify-center gap-3 cursor-pointer disabled:opacity-50"
                    >
                      <span>{isSubmitting ? "SUBMITTING APPLICATION..." : "SUBMIT INTERNSHIP APPLICATION"}</span>
                      <ArrowUpRight className="w-5 h-5" />
                    </button>

                    <div className="flex items-center justify-center gap-4 mt-4 text-[10px] font-condensed font-normal text-slate-500 uppercase">
                      <span>✓ MONTHLY STIPEND PROVIDED</span>
                      <span>•</span>
                      <span>✓ FULL-TIME PPO CONVERSION OFFER</span>
                      <span>•</span>
                      <span>✓ DIRECT MENTORSHIP BY ARCHITECTS</span>
                    </div>
                  </div>

                </form>
              </div>

              {/* Right Information Sidebar (4 Cols) */}
              <div className="lg:col-span-4 space-y-6 font-normal">
                
                {/* Benefits Card */}
                <div className="p-8 border-2 border-slate-900 bg-white shadow-xl space-y-4">
                  <span className="font-condensed text-xs font-normal text-[#A90706] uppercase tracking-widest block border-b border-[#E2DDD5] pb-2">
                    // WHAT OUR INTERNS GET
                  </span>
                  
                  <div className="space-y-4 text-xs font-normal text-slate-800 uppercase">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-[#A90706] shrink-0 mt-0.5" />
                      <span>Industry Competitive Monthly Stipend</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-[#A90706] shrink-0 mt-0.5" />
                      <span>Full-Time PPO Pre-Placement Offer Opportunity</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-[#A90706] shrink-0 mt-0.5" />
                      <span>Live Production Enterprise Codebase Experience</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-[#A90706] shrink-0 mt-0.5" />
                      <span>1-on-1 Mentorship with Principal Architects</span>
                    </div>
                  </div>
                </div>

                {/* Questions Card */}
                <div className="p-8 bg-slate-900 text-white border border-slate-900 shadow-xl space-y-4 font-normal">
                  <span className="font-condensed text-xs font-normal text-[#A90706] uppercase tracking-widest block border-b border-slate-800 pb-2">
                    // HAVE QUESTIONS?
                  </span>
                  <p className="text-xs text-slate-300 leading-relaxed font-normal">
                    Email our talent squad directly regarding campus drives, university NOC agreements, or internship terms.
                  </p>
                  <div className="space-y-2 pt-2 text-xs font-condensed font-normal uppercase">
                    <div className="text-slate-400 text-[10px]">CAREERS EMAIL:</div>
                    <a href="mailto:careers@brosdev.com" className="text-white hover:text-[#A90706] block underline font-normal">
                      careers@brosdev.com
                    </a>
                  </div>
                </div>

              </div>

            </div>
          )}

        </div>
      </section>

      <Footer />
    </main>
  );
}
