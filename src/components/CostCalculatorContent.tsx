"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useTranslation } from "@/context/TranslationContext";
import {
  Calculator,
  CheckCircle2,
  ArrowUpRight,
  Sparkles,
  Users,
  Clock,
  ShieldCheck,
  Zap,
  Send,
  RefreshCw,
  Globe,
  Upload,
  Layers,
  ShoppingBag,
  Database,
  Server,
  FileText,
  MessageSquare,
  ChevronRight,
  ChevronLeft,
  Loader2
} from "lucide-react";

type Currency = "INR" | "USD" | "EUR" | "GBP";

const CURRENCY_SYMBOLS: Record<Currency, string> = {
  INR: "₹",
  USD: "$",
  EUR: "€",
  GBP: "£",
};

const CONVERSION_RATES: Record<Currency, number> = {
  INR: 1,
  USD: 0.012, // 1 INR = ~0.012 USD
  EUR: 0.011, // 1 INR = ~0.011 EUR
  GBP: 0.0094, // 1 INR = ~0.0094 GBP
};

export default function CostCalculatorContent() {
  const { locale } = useTranslation();
  const [activeStep, setActiveStep] = useState<number>(1);

  // 1. Basic Information
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [country, setCountry] = useState("India");
  const [currency, setCurrency] = useState<Currency>("INR");
  const [whatsappNumber, setWhatsappNumber] = useState("");
  const [sameAsPhone, setSameAsPhone] = useState(true);

  // 2. Project Type
  const [projectType, setProjectType] = useState<string>("website");

  // 3. Platform
  const [platform, setPlatform] = useState<string>("Corporate Website");

  // 4. Design Complexity
  const [designComplexity, setDesignComplexity] = useState<string>("Custom UI/UX");

  // 5. Number of Pages
  const [pagesRange, setPagesRange] = useState<string>("6-10");

  // 6. Features Required (Checkboxes)
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([
    "Contact Form",
    "Admin Panel",
    "Payment Gateway",
    "User Login",
  ]);

  // 7. E-commerce Options
  const [isEcommerce, setIsEcommerce] = useState<boolean>(false);
  const [ecommerceOptions, setEcommerceOptions] = useState<string[]>([
    "Razorpay/Stripe",
    "Coupons",
    "Inventory",
  ]);

  // 8. Admin Requirements
  const [adminRequirement, setAdminRequirement] = useState<string>("Single Admin");

  // 9. Database Size
  const [databaseSize, setDatabaseSize] = useState<string>("Small");

  // 10. Expected Users
  const [expectedUsers, setExpectedUsers] = useState<string>("100–1000");

  // 11. Timeline
  const [timeline, setTimeline] = useState<string>("1 Month");

  // 12. Maintenance
  const [maintenance, setMaintenance] = useState<string>("3 Months");

  // 13. Hosting
  const [hosting, setHosting] = useState<string>("Need Hosting");

  // 14. Domain
  const [domain, setDomain] = useState<string>("Already Have Domain");

  // 15. Existing Project
  const [existingProject, setExistingProject] = useState<string>("New Project");

  // 16. Upload Files
  const [uploadedFile, setUploadedFile] = useState<{ filename: string; content: string } | null>(null);

  // 17. Additional Requirements
  const [additionalNotes, setAdditionalNotes] = useState("");

  // Form submission state
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [referenceCode, setReferenceCode] = useState<string>("");

  // Smooth Scroll Helper on Step Change
  const changeStep = (stepNum: number) => {
    setActiveStep(stepNum);
    const container = document.getElementById("cost-calculator-container");
    if (container) {
      container.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      window.scrollTo({ top: 350, behavior: "smooth" });
    }
  };

  // Sync Phone with WhatsApp if enabled
  const handlePhoneChange = (val: string) => {
    setPhone(val);
    if (sameAsPhone) {
      setWhatsappNumber(val);
    }
  };

  // Price Items Definition in Base Currency (INR)
  const PROJECT_TYPES = [
    { id: "website", name: "🌐 Website Development", baseINR: 20000 },
    { id: "mobile", name: "📱 Mobile App Development", baseINR: 50000 },
    { id: "custom_software", name: "💻 Custom Software", baseINR: 60000 },
    { id: "ecommerce", name: "🛒 E-commerce Store", baseINR: 40000 },
    { id: "uiux", name: "🎨 UI/UX Design", baseINR: 25000 },
    { id: "ai", name: "🤖 AI & Automation", baseINR: 70000 },
    { id: "marketing", name: "📈 Digital Marketing", baseINR: 15000 },
    { id: "cloud", name: "☁️ Cloud Solutions", baseINR: 45000 },
    { id: "support", name: "🔧 Maintenance & Support", baseINR: 15000 },
  ];

  const PLATFORM_OPTIONS: Record<string, string[]> = {
    website: ["Landing Page", "Business Website", "Portfolio", "Corporate Website", "Blog", "News Portal", "LMS", "CRM", "ERP", "Custom Website"],
    mobile: ["Android", "iOS", "Cross Platform (React Native/Flutter)", "PWA"],
    ecommerce: ["Shopify", "WooCommerce", "Custom E-Commerce", "Multi-Vendor Marketplace"],
    custom_software: ["Web SaaS", "Desktop Application", "Enterprise Microservices"],
    ai: ["AI RAG Vector Pipeline", "LLM Chatbot Engine", "Autonomous Sales Agent"],
  };

  const DESIGN_COMPLEXITY = [
    { id: "Basic Template", label: "Basic Template", inr: 0 },
    { id: "Premium UI", label: "Premium UI", inr: 15000 },
    { id: "Custom UI/UX", label: "Custom UI/UX", inr: 30000 },
    { id: "Premium Animations", label: "Premium Animations", inr: 20000 },
  ];

  const PAGES_RANGE = [
    { id: "1-5", label: "1 - 5 Pages", inr: 0 },
    { id: "6-10", label: "6 - 10 Pages", inr: 7500 },
    { id: "11-20", label: "11 - 20 Pages", inr: 15000 },
    { id: "20+", label: "20+ Pages", inr: 30000 },
  ];

  const ALL_FEATURES = [
    { name: "User Login", inr: 10000 },
    { name: "Admin Panel", inr: 20000 },
    { name: "Dashboard", inr: 15000 },
    { name: "Payment Gateway", inr: 8000 },
    { name: "Contact Form", inr: 2000 },
    { name: "Live Chat", inr: 5000 },
    { name: "Blog", inr: 4000 },
    { name: "Multi-language", inr: 8000 },
    { name: "Dark Mode", inr: 3000 },
    { name: "Search", inr: 3000 },
    { name: "Notifications", inr: 5000 },
    { name: "Push Notifications", inr: 8000 },
    { name: "OTP Login", inr: 7000 },
    { name: "Google Login", inr: 4000 },
    { name: "Social Login", inr: 5000 },
    { name: "Maps Integration", inr: 6000 },
    { name: "Booking System", inr: 15000 },
    { name: "Appointment System", inr: 12000 },
    { name: "Calendar", inr: 6000 },
    { name: "Email Notifications", inr: 4000 },
    { name: "SMS Notifications", inr: 6000 },
    { name: "Analytics Dashboard", inr: 10000 },
    { name: "Reports", inr: 8000 },
    { name: "Invoice Generation", inr: 10000 },
    { name: "Inventory", inr: 12000 },
    { name: "Order Management", inr: 15000 },
    { name: "Product Management", inr: 10000 },
    { name: "Customer Management", inr: 12000 },
    { name: "Subscription Plans", inr: 15000 },
    { name: "Reviews & Ratings", inr: 6000 },
    { name: "Wishlist", inr: 4000 },
    { name: "Coupon System", inr: 6000 },
    { name: "AI Chatbot", inr: 25000 },
    { name: "API Integration", inr: 12000 },
    { name: "Third-party Integrations", inr: 15000 },
  ];

  const ECOMMERCE_FEATS = [
    { name: "Number of Products", inr: 5000 },
    { name: "Categories", inr: 3000 },
    { name: "Inventory", inr: 8000 },
    { name: "Shipping Integration", inr: 6000 },
    { name: "GST Invoice", inr: 7000 },
    { name: "COD (Cash on Delivery)", inr: 4000 },
    { name: "Razorpay/Stripe", inr: 8000 },
    { name: "Coupons System", inr: 6000 },
    { name: "Multi Vendor", inr: 25000 },
  ];

  const ADMIN_REQS = [
    { id: "Single Admin", label: "Single Admin", inr: 0 },
    { id: "Multiple Admins", label: "Multiple Admins", inr: 5000 },
    { id: "Role Management", label: "Role Management (RBAC)", inr: 10000 },
  ];

  const DATABASE_SIZES = [
    { id: "Small", label: "Small (Under 10GB)", inr: 0 },
    { id: "Medium", label: "Medium (10GB - 100GB)", inr: 10000 },
    { id: "Large", label: "Large (100GB+ Big Data)", inr: 25000 },
  ];

  const EXPECTED_USERS = [
    { id: "Under 100", label: "Under 100 Users", inr: 0 },
    { id: "100–1000", label: "100 – 1,000 Users", inr: 5000 },
    { id: "1000–10000", label: "1,000 – 10,000 Users", inr: 15000 },
    { id: "10000+", label: "10,000+ Enterprise Scale", inr: 35000 },
  ];

  const TIMELINES = [
    { id: "ASAP", label: "ASAP (Urgent Sprint)", inr: 15000 },
    { id: "1 Month", label: "1 Month", inr: 5000 },
    { id: "2 Months", label: "2 Months", inr: 0 },
    { id: "3+ Months", label: "3+ Months", inr: -5000 },
  ];

  const MAINTENANCE_OPTIONS = [
    { id: "No", label: "No Maintenance", percent: 0 },
    { id: "3 Months", label: "3 Months Support (+10%)", percent: 0.10 },
    { id: "6 Months", label: "6 Months Support (+18%)", percent: 0.18 },
    { id: "1 Year", label: "1 Year Support (+25%)", percent: 0.25 },
  ];

  // Helper formatting function for current currency
  const formatMoney = (inrAmount: number) => {
    const converted = inrAmount * CONVERSION_RATES[currency];
    const symbol = CURRENCY_SYMBOLS[currency];

    if (currency === "INR") {
      return `${symbol}${Math.round(converted).toLocaleString("en-IN")}`;
    }
    return `${symbol}${Math.round(converted).toLocaleString()}`;
  };

  // Calculation Engine
  const priceCalculation = useMemo(() => {
    // Base Dev Cost
    const selectedPt = PROJECT_TYPES.find((p) => p.id === projectType) || PROJECT_TYPES[0];
    let devBaseINR = selectedPt.baseINR;

    // Design
    const selectedDesign = DESIGN_COMPLEXITY.find((d) => d.id === designComplexity) || DESIGN_COMPLEXITY[0];
    devBaseINR += selectedDesign.inr;

    // Pages
    const selectedPageRange = PAGES_RANGE.find((p) => p.id === pagesRange) || PAGES_RANGE[0];
    devBaseINR += selectedPageRange.inr;

    // Timeline adjustment
    const selectedTimeline = TIMELINES.find((t) => t.id === timeline) || TIMELINES[2];
    devBaseINR += selectedTimeline.inr;

    // Features Cost
    let featuresINR = 0;
    selectedFeatures.forEach((featName) => {
      const featObj = ALL_FEATURES.find((f) => f.name === featName);
      if (featObj) featuresINR += featObj.inr;
    });

    if (isEcommerce) {
      ecommerceOptions.forEach((eFeat) => {
        const eObj = ECOMMERCE_FEATS.find((f) => f.name === eFeat);
        if (eObj) featuresINR += eObj.inr;
      });
    }

    const selectedAdmin = ADMIN_REQS.find((a) => a.id === adminRequirement) || ADMIN_REQS[0];
    featuresINR += selectedAdmin.inr;

    const selectedDb = DATABASE_SIZES.find((d) => d.id === databaseSize) || DATABASE_SIZES[0];
    featuresINR += selectedDb.inr;

    const selectedUsers = EXPECTED_USERS.find((u) => u.id === expectedUsers) || EXPECTED_USERS[0];
    featuresINR += selectedUsers.inr;

    if (hosting === "Need Hosting") featuresINR += 6000;
    if (domain === "Need Domain") featuresINR += 1200;

    // Maintenance Cost
    const selectedMaint = MAINTENANCE_OPTIONS.find((m) => m.id === maintenance) || MAINTENANCE_OPTIONS[0];
    const maintenanceINR = Math.round((devBaseINR + featuresINR) * selectedMaint.percent);

    // GST 18% Tax
    const subtotalINR = devBaseINR + featuresINR + maintenanceINR;
    const gstINR = Math.round(subtotalINR * 0.18);

    // Total Estimate
    const totalINR = subtotalINR + gstINR;

    return {
      devBaseINR,
      featuresINR,
      maintenanceINR,
      gstINR,
      totalINR,
      devBaseFormatted: formatMoney(devBaseINR),
      featuresFormatted: formatMoney(featuresINR),
      maintenanceFormatted: formatMoney(maintenanceINR),
      gstFormatted: formatMoney(gstINR),
      totalFormatted: formatMoney(totalINR),
    };
  }, [
    projectType,
    designComplexity,
    pagesRange,
    timeline,
    selectedFeatures,
    isEcommerce,
    ecommerceOptions,
    adminRequirement,
    databaseSize,
    expectedUsers,
    hosting,
    domain,
    maintenance,
    currency,
  ]);

  const toggleFeature = (featName: string) => {
    setSelectedFeatures((prev) =>
      prev.includes(featName) ? prev.filter((f) => f !== featName) : [...prev, featName]
    );
  };

  const toggleEcommerceOption = (optName: string) => {
    setEcommerceOptions((prev) =>
      prev.includes(optName) ? prev.filter((o) => o !== optName) : [...prev, optName]
    );
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUploadedFile({
          filename: file.name,
          content: reader.result as string,
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const ref = `#BD-QUOTE-${Math.floor(100000 + Math.random() * 900000)}`;
    setReferenceCode(ref);

    const finalWhatsapp = whatsappNumber.trim() || phone.trim() || "N/A";

    try {
      await fetch("/api/send-cost-quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          referenceId: ref,
          name: fullName,
          email,
          phone,
          company,
          country,
          currency,
          whatsappNumber: finalWhatsapp,
          projectType,
          platform,
          designComplexity,
          pagesRange,
          selectedFeatures: selectedFeatures.join(", "),
          isEcommerce: isEcommerce ? "Yes" : "No",
          ecommerceOptions: ecommerceOptions.join(", "),
          adminRequirement,
          databaseSize,
          expectedUsers,
          timeline,
          maintenance,
          hosting,
          domain,
          existingProject,
          additionalNotes,
          devBaseCost: priceCalculation.devBaseFormatted,
          featuresCost: priceCalculation.featuresFormatted,
          maintenanceCost: priceCalculation.maintenanceFormatted,
          gstTax: priceCalculation.gstFormatted,
          totalEstimate: priceCalculation.totalFormatted,
          ...(uploadedFile ? { attachment: uploadedFile } : {}),
        }),
      });
      setSubmitted(true);
    } catch {
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#FAF8F5] text-slate-900 selection:bg-[#A90706] selection:text-white font-sans antialiased relative">
      <Navbar />

      {/* Sending Progress Full-Screen Modal Overlay */}
      {isSubmitting && (
        <div className="fixed inset-0 z-50 bg-slate-900/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-white border-2 border-slate-900 p-8 sm:p-10 max-w-md w-full text-center space-y-5 shadow-2xl">
            <Loader2 className="w-12 h-12 text-[#A90706] animate-spin mx-auto" />
            <div className="space-y-1">
              <h3 className="text-xl sm:text-2xl font-normal text-slate-900 uppercase font-[var(--font-geist)]">
                GENERATING QUOTATION PDF...
              </h3>
              <p className="text-xs text-slate-600 font-normal leading-relaxed">
                Please wait while our engine compiles your 17-parameter technical estimate and dispatches your official PDF quotation to <strong>{email}</strong>.
              </p>
            </div>
            <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
              <div className="bg-[#A90706] h-full animate-pulse w-4/5"></div>
            </div>
            <span className="font-condensed text-[10px] text-slate-400 uppercase tracking-widest block">
              🔒 100% Secure &amp; Confidential Processing
            </span>
          </div>
        </div>
      )}

      {/* Header Banner */}
      <section className="pt-36 pb-16 border-b border-[#E2DDD5] bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-[#E2DDD5]">
              <span className="w-2 h-2 bg-[#A90706]"></span>
              <span className="font-condensed text-xs font-normal tracking-widest text-[#A90706] uppercase">
                // INSTANT PROJECT COST CALCULATOR
              </span>
            </div>

            {/* Preferred Currency Selector */}
            <div className="flex items-center gap-2 bg-white border border-slate-900 p-1.5 shadow-sm">
              <Globe className="w-3.5 h-3.5 text-[#A90706] ml-1" />
              <span className="font-condensed text-xs font-normal text-slate-700 uppercase pr-1">Currency:</span>
              {(["INR", "USD", "EUR", "GBP"] as Currency[]).map((curr) => (
                <button
                  key={curr}
                  onClick={() => setCurrency(curr)}
                  className={`px-2.5 py-1 font-condensed text-xs uppercase tracking-wider transition-colors cursor-pointer ${
                    currency === curr ? "bg-[#A90706] text-white font-bold" : "bg-[#FAF8F5] text-slate-700 hover:bg-slate-200"
                  }`}
                >
                  {curr} ({CURRENCY_SYMBOLS[curr]})
                </button>
              ))}
            </div>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-normal text-slate-900 tracking-tight leading-none uppercase mb-6 font-[var(--font-geist)]">
            PROJECT COST &amp; SQUAD CALCULATOR
          </h1>

          <p className="text-slate-700 text-lg sm:text-xl font-normal max-w-3xl leading-relaxed font-[var(--font-geist)]">
            Freely select categories, platforms, features, and scale parameters below for an instant live price calculation. Enter your details at the end to get your official PDF proposal.
          </p>
        </div>
      </section>

      {/* Calculator Main Section */}
      <section id="cost-calculator-container" className="py-16 bg-white border-b border-[#E2DDD5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Step Navigation Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-12 no-scrollbar border-b border-[#E2DDD5]">
            {[
              { num: 1, title: "1. CATEGORY & PLATFORM" },
              { num: 2, title: "2. DESIGN, PAGES & FEATURES" },
              { num: 3, title: "3. INFRASTRUCTURE & SCALE" },
              { num: 4, title: "4. CONTACT & GET PDF QUOTE" },
            ].map((step) => (
              <button
                key={step.num}
                onClick={() => changeStep(step.num)}
                className={`px-5 py-3 font-condensed text-xs sm:text-sm uppercase tracking-wider whitespace-nowrap transition-all border flex items-center gap-2 cursor-pointer ${
                  activeStep === step.num
                    ? "bg-slate-900 text-white border-slate-900 shadow-md font-bold"
                    : "bg-[#FAF8F5] text-slate-700 border-[#E2DDD5] hover:border-slate-900"
                }`}
              >
                <span>{step.title}</span>
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

            {/* Left Interactive Wizard Controls (Steps 1 to 4) */}
            <div className="lg:col-span-7 space-y-12">

              {/* STEP 1: CATEGORY & PLATFORM */}
              {activeStep === 1 && (
                <div className="space-y-10">

                  {/* Section 1: Project Type */}
                  <div className="space-y-4">
                    <span className="font-condensed text-xs font-normal text-[#A90706] uppercase tracking-widest block">
                      // 01. SELECT PROJECT CATEGORY
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {PROJECT_TYPES.map((pt) => (
                        <button
                          key={pt.id}
                          onClick={() => {
                            setProjectType(pt.id);
                            if (pt.id === "ecommerce") setIsEcommerce(true);
                          }}
                          className={`p-3.5 border-2 text-left transition-all cursor-pointer ${
                            projectType === pt.id
                              ? "border-slate-900 bg-slate-900 text-white shadow-md"
                              : "border-[#E2DDD5] bg-[#FAF8F5] text-slate-900 hover:border-slate-900"
                          }`}
                        >
                          <span className="font-condensed text-xs font-normal uppercase tracking-wide block">
                            {pt.name}
                          </span>
                          <span className={`text-[10px] block mt-1 ${projectType === pt.id ? "text-slate-300" : "text-slate-500"}`}>
                            Base: {formatMoney(pt.baseINR)}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Section 2: Target Platform */}
                  <div className="space-y-4">
                    <span className="font-condensed text-xs font-normal text-[#A90706] uppercase tracking-widest block">
                      // 02. TARGET PLATFORM / ARCHITECTURE
                    </span>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {(PLATFORM_OPTIONS[projectType] || PLATFORM_OPTIONS.website).map((p) => (
                        <button
                          key={p}
                          onClick={() => setPlatform(p)}
                          className={`px-3 py-2.5 border text-xs font-condensed uppercase tracking-wider text-left transition-colors cursor-pointer ${
                            platform === p
                              ? "bg-[#A90706] text-white border-[#A90706] font-bold"
                              : "bg-[#FAF8F5] text-slate-800 border-[#E2DDD5] hover:border-slate-900"
                          }`}
                        >
                          {p}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Section 3: Existing Project Status */}
                  <div className="space-y-4">
                    <span className="font-condensed text-xs font-normal text-[#A90706] uppercase tracking-widest block">
                      // 03. EXISTING PROJECT STATUS
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {["New Project", "Redesign Existing Website", "Upgrade Existing Software"].map((status) => (
                        <button
                          key={status}
                          onClick={() => setExistingProject(status)}
                          className={`p-3 border-2 text-xs font-condensed uppercase tracking-wider text-left transition-colors cursor-pointer ${
                            existingProject === status
                              ? "bg-slate-900 text-white border-slate-900"
                              : "bg-[#FAF8F5] text-slate-800 border-[#E2DDD5] hover:border-slate-900"
                          }`}
                        >
                          {status}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 flex justify-end">
                    <button
                      onClick={() => changeStep(2)}
                      className="px-6 py-3 bg-[#A90706] text-white font-condensed text-xs uppercase tracking-widest flex items-center gap-2 cursor-pointer"
                    >
                      <span>NEXT: DESIGN &amp; FEATURES</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>

                </div>
              )}

              {/* STEP 2: DESIGN, PAGES & FEATURES */}
              {activeStep === 2 && (
                <div className="space-y-10">

                  {/* Section 4: Design Complexity */}
                  <div className="space-y-4">
                    <span className="font-condensed text-xs font-normal text-[#A90706] uppercase tracking-widest block">
                      // 04. DESIGN COMPLEXITY &amp; ANIMATIONS
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {DESIGN_COMPLEXITY.map((d) => (
                        <button
                          key={d.id}
                          onClick={() => setDesignComplexity(d.id)}
                          className={`p-3.5 border-2 text-left transition-all cursor-pointer ${
                            designComplexity === d.id
                              ? "border-slate-900 bg-slate-900 text-white shadow-md"
                              : "border-[#E2DDD5] bg-[#FAF8F5] text-slate-900 hover:border-slate-900"
                          }`}
                        >
                          <span className="font-condensed text-xs font-normal uppercase block">{d.label}</span>
                          <span className={`text-[10px] block mt-0.5 ${designComplexity === d.id ? "text-slate-300" : "text-slate-500"}`}>
                            +{formatMoney(d.inr)}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Section 5: Number of Pages */}
                  <div className="space-y-4">
                    <span className="font-condensed text-xs font-normal text-[#A90706] uppercase tracking-widest block">
                      // 05. NUMBER OF PAGES / SCREENS
                    </span>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {PAGES_RANGE.map((p) => (
                        <button
                          key={p.id}
                          onClick={() => setPagesRange(p.id)}
                          className={`p-3 border text-center transition-colors cursor-pointer ${
                            pagesRange === p.id
                              ? "bg-[#A90706] text-white border-[#A90706] font-bold"
                              : "bg-[#FAF8F5] text-slate-800 border-[#E2DDD5] hover:border-slate-900"
                          }`}
                        >
                          <span className="font-condensed text-xs uppercase block">{p.label}</span>
                          <span className="text-[10px] block mt-0.5 opacity-80">+{formatMoney(p.inr)}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Section 6: Features Required (Checkboxes) */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="font-condensed text-xs font-normal text-[#A90706] uppercase tracking-widest">
                        // 06. FEATURES REQUIRED ({selectedFeatures.length} SELECTED)
                      </span>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 max-h-80 overflow-y-auto pr-1">
                      {ALL_FEATURES.map((feat) => {
                        const isChecked = selectedFeatures.includes(feat.name);
                        return (
                          <button
                            key={feat.name}
                            type="button"
                            onClick={() => toggleFeature(feat.name)}
                            className={`p-2.5 border text-left flex items-start justify-between gap-1.5 transition-colors cursor-pointer ${
                              isChecked
                                ? "bg-slate-900 text-white border-slate-900"
                                : "bg-[#FAF8F5] text-slate-800 border-[#E2DDD5] hover:border-slate-900"
                            }`}
                          >
                            <div>
                              <span className="font-condensed text-xs block leading-tight">{feat.name}</span>
                              <span className={`text-[9px] block mt-0.5 ${isChecked ? "text-slate-300" : "text-slate-500"}`}>
                                +{formatMoney(feat.inr)}
                              </span>
                            </div>
                            <span className={`text-xs font-bold ${isChecked ? "text-[#A90706]" : "text-slate-300"}`}>
                              {isChecked ? "✓" : "+"}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Section 7: E-commerce Options */}
                  <div className="p-5 bg-[#FAF8F5] border-2 border-slate-900 space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="font-condensed text-xs font-normal text-slate-900 uppercase tracking-widest">
                        // 07. E-COMMERCE OPTIONS
                      </span>
                      <button
                        type="button"
                        onClick={() => setIsEcommerce(!isEcommerce)}
                        className={`px-3 py-1 font-condensed text-xs uppercase cursor-pointer ${
                          isEcommerce ? "bg-[#A90706] text-white" : "bg-white border border-[#E2DDD5] text-slate-700"
                        }`}
                      >
                        {isEcommerce ? "ENABLED" : "ENABLE E-COMMERCE"}
                      </button>
                    </div>

                    {isEcommerce && (
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 pt-2">
                        {ECOMMERCE_FEATS.map((ef) => {
                          const isSel = ecommerceOptions.includes(ef.name);
                          return (
                            <button
                              key={ef.name}
                              type="button"
                              onClick={() => toggleEcommerceOption(ef.name)}
                              className={`p-2 border text-left transition-colors cursor-pointer ${
                                isSel ? "bg-[#A90706] text-white border-[#A90706]" : "bg-white text-slate-800 border-[#E2DDD5]"
                              }`}
                            >
                              <span className="font-condensed text-[11px] block">{ef.name}</span>
                              <span className="text-[9px] block opacity-80">+{formatMoney(ef.inr)}</span>
                            </button>
                          );
                        })}
                      </div>
                    )}
                  </div>

                  <div className="pt-4 flex justify-between">
                    <button
                      onClick={() => changeStep(1)}
                      className="px-6 py-3 bg-white border border-slate-900 text-slate-900 font-condensed text-xs uppercase tracking-widest flex items-center gap-2 cursor-pointer"
                    >
                      <ChevronLeft className="w-4 h-4" />
                      <span>BACK</span>
                    </button>
                    <button
                      onClick={() => changeStep(3)}
                      className="px-6 py-3 bg-[#A90706] text-white font-condensed text-xs uppercase tracking-widest flex items-center gap-2 cursor-pointer"
                    >
                      <span>NEXT: INFRASTRUCTURE</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>

                </div>
              )}

              {/* STEP 3: INFRASTRUCTURE, TIMELINE & FILES */}
              {activeStep === 3 && (
                <div className="space-y-10">

                  {/* Section 8: Admin Requirements */}
                  <div className="space-y-4">
                    <span className="font-condensed text-xs font-normal text-[#A90706] uppercase tracking-widest block">
                      // 08. ADMIN REQUIREMENTS
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {ADMIN_REQS.map((a) => (
                        <button
                          key={a.id}
                          onClick={() => setAdminRequirement(a.id)}
                          className={`p-3 border-2 text-left transition-all cursor-pointer ${
                            adminRequirement === a.id
                              ? "border-slate-900 bg-slate-900 text-white"
                              : "border-[#E2DDD5] bg-[#FAF8F5] text-slate-900 hover:border-slate-900"
                          }`}
                        >
                          <span className="font-condensed text-xs block">{a.label}</span>
                          <span className={`text-[10px] block mt-0.5 ${adminRequirement === a.id ? "text-slate-300" : "text-slate-500"}`}>
                            +{formatMoney(a.inr)}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Section 9 & 10: Database Size & Expected Users */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <span className="font-condensed text-xs font-normal text-[#A90706] uppercase tracking-widest block">
                        // 09. DATABASE SIZE
                      </span>
                      <div className="space-y-2">
                        {DATABASE_SIZES.map((d) => (
                          <button
                            key={d.id}
                            onClick={() => setDatabaseSize(d.id)}
                            className={`w-full p-2.5 border text-left font-condensed text-xs flex items-center justify-between cursor-pointer ${
                              databaseSize === d.id ? "bg-slate-900 text-white border-slate-900" : "bg-[#FAF8F5] border-[#E2DDD5]"
                            }`}
                          >
                            <span>{d.label}</span>
                            <span>+{formatMoney(d.inr)}</span>
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-3">
                      <span className="font-condensed text-xs font-normal text-[#A90706] uppercase tracking-widest block">
                        // 10. EXPECTED USERS
                      </span>
                      <div className="space-y-2">
                        {EXPECTED_USERS.map((u) => (
                          <button
                            key={u.id}
                            onClick={() => setExpectedUsers(u.id)}
                            className={`w-full p-2.5 border text-left font-condensed text-xs flex items-center justify-between cursor-pointer ${
                              expectedUsers === u.id ? "bg-slate-900 text-white border-slate-900" : "bg-[#FAF8F5] border-[#E2DDD5]"
                            }`}
                          >
                            <span>{u.label}</span>
                            <span>+{formatMoney(u.inr)}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Section 11 & 12: Timeline & Maintenance */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <span className="font-condensed text-xs font-normal text-[#A90706] uppercase tracking-widest block">
                        // 11. TIMELINE REQUIREMENT
                      </span>
                      <div className="space-y-2">
                        {TIMELINES.map((t) => (
                          <button
                            key={t.id}
                            onClick={() => setTimeline(t.id)}
                            className={`w-full p-2.5 border text-left font-condensed text-xs flex items-center justify-between cursor-pointer ${
                              timeline === t.id ? "bg-[#A90706] text-white border-[#A90706]" : "bg-[#FAF8F5] border-[#E2DDD5]"
                            }`}
                          >
                            <span>{t.label}</span>
                            <span>{t.inr > 0 ? `+${formatMoney(t.inr)}` : t.inr < 0 ? `-${formatMoney(Math.abs(t.inr))}` : "+₹0"}</span>
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-3">
                      <span className="font-condensed text-xs font-normal text-[#A90706] uppercase tracking-widest block">
                        // 12. MAINTENANCE &amp; SUPPORT
                      </span>
                      <div className="space-y-2">
                        {MAINTENANCE_OPTIONS.map((m) => (
                          <button
                            key={m.id}
                            onClick={() => setMaintenance(m.id)}
                            className={`w-full p-2.5 border text-left font-condensed text-xs flex items-center justify-between cursor-pointer ${
                              maintenance === m.id ? "bg-[#A90706] text-white border-[#A90706]" : "bg-[#FAF8F5] border-[#E2DDD5]"
                            }`}
                          >
                            <span>{m.label}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Section 13 & 14: Hosting & Domain */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <span className="font-condensed text-xs font-normal text-slate-900 uppercase tracking-widest block">
                        // 13. HOSTING REQ
                      </span>
                      <div className="flex gap-2">
                        {["Need Hosting", "Already Have Hosting"].map((h) => (
                          <button
                            key={h}
                            onClick={() => setHosting(h)}
                            className={`w-1/2 p-2.5 border font-condensed text-xs text-center cursor-pointer ${
                              hosting === h ? "bg-slate-900 text-white" : "bg-[#FAF8F5] border-[#E2DDD5]"
                            }`}
                          >
                            {h}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-3">
                      <span className="font-condensed text-xs font-normal text-slate-900 uppercase tracking-widest block">
                        // 14. DOMAIN REQ
                      </span>
                      <div className="flex gap-2">
                        {["Need Domain", "Already Have Domain"].map((d) => (
                          <button
                            key={d}
                            onClick={() => setDomain(d)}
                            className={`w-1/2 p-2.5 border font-condensed text-xs text-center cursor-pointer ${
                              domain === d ? "bg-slate-900 text-white" : "bg-[#FAF8F5] border-[#E2DDD5]"
                            }`}
                          >
                            {d}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Section 16: File Upload */}
                  <div className="space-y-3">
                    <span className="font-condensed text-xs font-normal text-[#A90706] uppercase tracking-widest block">
                      // 16. UPLOAD SPECIFICATION DOCUMENTS / LOGO / WIREFRAMES
                    </span>
                    <div className="p-6 bg-[#FAF8F5] border-2 border-dashed border-[#E2DDD5] text-center space-y-2">
                      <Upload className="w-6 h-6 text-slate-400 mx-auto" />
                      <label className="font-condensed text-xs text-[#A90706] uppercase tracking-wider block cursor-pointer underline">
                        {uploadedFile ? uploadedFile.filename : "Upload PDF, Wireframes, Logo, or Spec Sheet"}
                        <input
                          type="file"
                          accept=".pdf,.doc,.docx,.png,.jpg,.jpeg,.webp"
                          onChange={handleFileUpload}
                          className="hidden"
                        />
                      </label>
                      <span className="text-[10px] text-slate-400 block font-normal uppercase">
                        Max File Size: 10MB (PDF, DOCX, PNG, JPG)
                      </span>
                    </div>
                  </div>

                  {/* Section 17: Additional Requirements */}
                  <div className="space-y-3">
                    <span className="font-condensed text-xs font-normal text-slate-900 uppercase tracking-widest block">
                      // 17. ADDITIONAL CUSTOM REQUIREMENTS
                    </span>
                    <textarea
                      rows={3}
                      value={additionalNotes}
                      onChange={(e) => setAdditionalNotes(e.target.value)}
                      placeholder="Specify any custom API integrations, third-party services, or special compliance requirements..."
                      className="w-full p-3 bg-[#FAF8F5] border border-[#E2DDD5] text-xs text-slate-900 focus:outline-none focus:border-slate-900"
                    />
                  </div>

                  <div className="pt-4 flex justify-between">
                    <button
                      onClick={() => changeStep(2)}
                      className="px-6 py-3 bg-white border border-slate-900 text-slate-900 font-condensed text-xs uppercase tracking-widest flex items-center gap-2 cursor-pointer"
                    >
                      <ChevronLeft className="w-4 h-4" />
                      <span>BACK</span>
                    </button>
                    <button
                      onClick={() => changeStep(4)}
                      className="px-6 py-3 bg-[#A90706] text-white font-condensed text-xs uppercase tracking-widest flex items-center gap-2 cursor-pointer"
                    >
                      <span>NEXT: CONTACT &amp; GET PDF QUOTE</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>

                </div>
              )}

              {/* STEP 4: CONTACT & GET OFFICIAL PDF PROPOSAL */}
              {activeStep === 4 && (
                <div className="space-y-8">
                  <div className="p-8 bg-[#FAF8F5] border-2 border-slate-900 space-y-6">
                    <span className="font-condensed text-xs font-normal text-[#A90706] uppercase tracking-widest block">
                      // FINAL STEP: CONTACT DETAILS FOR PDF DISPATCH
                    </span>
                    <h3 className="text-2xl font-normal text-slate-900 uppercase font-[var(--font-geist)]">
                      YOUR PROJECT ESTIMATE IS CONFIGURED!
                    </h3>
                    <p className="text-xs text-slate-600 font-normal leading-relaxed">
                      Enter your contact information below to generate your official PDF quotation and receive it instantly in your inbox.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-4 pt-2">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="font-condensed text-xs font-bold text-slate-900 uppercase block mb-1">Full Name *</label>
                          <input
                            type="text"
                            required
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            placeholder="John Doe"
                            className="w-full px-3.5 py-2.5 bg-white border border-[#E2DDD5] text-xs text-slate-900 focus:outline-none focus:border-slate-900"
                          />
                        </div>
                        <div>
                          <label className="font-condensed text-xs font-bold text-slate-900 uppercase block mb-1">Work Email *</label>
                          <input
                            type="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="john@company.com"
                            className="w-full px-3.5 py-2.5 bg-white border border-[#E2DDD5] text-xs text-slate-900 focus:outline-none focus:border-slate-900"
                          />
                        </div>
                        <div>
                          <label className="font-condensed text-xs font-bold text-slate-900 uppercase block mb-1">Phone Number</label>
                          <input
                            type="tel"
                            value={phone}
                            onChange={(e) => handlePhoneChange(e.target.value)}
                            placeholder="+1 555 000 0000"
                            className="w-full px-3.5 py-2.5 bg-white border border-[#E2DDD5] text-xs text-slate-900 focus:outline-none focus:border-slate-900"
                          />
                        </div>
                        <div>
                          <label className="font-condensed text-xs font-bold text-slate-900 uppercase block mb-1">WhatsApp Number</label>
                          <input
                            type="tel"
                            value={whatsappNumber}
                            onChange={(e) => {
                              setWhatsappNumber(e.target.value);
                              setSameAsPhone(false);
                            }}
                            placeholder="WhatsApp Number"
                            className="w-full px-3.5 py-2.5 bg-white border border-[#E2DDD5] text-xs text-slate-900 focus:outline-none focus:border-slate-900"
                          />
                          <label className="flex items-center gap-1.5 mt-1 cursor-pointer">
                            <input
                              type="checkbox"
                              checked={sameAsPhone}
                              onChange={(e) => {
                                setSameAsPhone(e.target.checked);
                                if (e.target.checked) setWhatsappNumber(phone);
                              }}
                              className="w-3 h-3 text-[#A90706]"
                            />
                            <span className="font-condensed text-[10px] text-slate-500 uppercase">Same as Phone Number</span>
                          </label>
                        </div>
                        <div>
                          <label className="font-condensed text-xs font-bold text-slate-900 uppercase block mb-1">Company Name</label>
                          <input
                            type="text"
                            value={company}
                            onChange={(e) => setCompany(e.target.value)}
                            placeholder="Acme Corp (Optional)"
                            className="w-full px-3.5 py-2.5 bg-white border border-[#E2DDD5] text-xs text-slate-900 focus:outline-none focus:border-slate-900"
                          />
                        </div>
                        <div>
                          <label className="font-condensed text-xs font-bold text-slate-900 uppercase block mb-1">Country</label>
                          <input
                            type="text"
                            value={country}
                            onChange={(e) => setCountry(e.target.value)}
                            placeholder="USA / India / UK"
                            className="w-full px-3.5 py-2.5 bg-white border border-[#E2DDD5] text-xs text-slate-900 focus:outline-none focus:border-slate-900"
                          />
                        </div>
                      </div>

                      <div className="pt-2 flex justify-between items-center">
                        <button
                          type="button"
                          onClick={() => changeStep(3)}
                          className="px-6 py-3 bg-white border border-slate-900 text-slate-900 font-condensed text-xs uppercase tracking-widest flex items-center gap-2 cursor-pointer"
                        >
                          <ChevronLeft className="w-4 h-4" />
                          <span>BACK TO INFRASTRUCTURE</span>
                        </button>

                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="px-8 py-4 bg-[#A90706] hover:bg-[#880504] text-white font-condensed text-xs font-bold uppercase tracking-widest transition-colors flex items-center gap-2 cursor-pointer shadow-lg"
                        >
                          <Send className="w-4 h-4" />
                          <span>{isSubmitting ? "GENERATING & SENDING PDF..." : "GENERATE OFFICIAL PDF PROPOSAL"}</span>
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              )}

            </div>

            {/* Right Calculated Result Sidebar (Dynamic Price Display) */}
            <div className="lg:col-span-5 space-y-8 sticky top-28">

              <div className="bg-[#FAF8F5] border-2 border-slate-900 p-6 sm:p-8 shadow-2xl space-y-6">
                
                {/* Header Badge */}
                <div className="flex items-center justify-between border-b border-[#E2DDD5] pb-3">
                  <span className="font-condensed text-xs font-normal text-[#A90706] uppercase tracking-widest">
                    // LIVE ITEMIZED ESTIMATE
                  </span>
                  <span className="font-condensed text-xs font-bold text-slate-900 uppercase px-2 py-0.5 bg-white border border-[#E2DDD5]">
                    {currency} ({CURRENCY_SYMBOLS[currency]})
                  </span>
                </div>

                {/* Itemized Cost Breakdown Table */}
                <div className="space-y-2 font-condensed text-xs">
                  <div className="flex justify-between border-b border-[#E2DDD5] pb-2">
                    <span className="text-slate-600 uppercase">Development Base (App/Web + Design + Pages):</span>
                    <span className="font-semibold text-slate-900">{priceCalculation.devBaseFormatted}</span>
                  </div>
                  <div className="flex justify-between border-b border-[#E2DDD5] pb-2">
                    <span className="text-slate-600 uppercase">Features &amp; Add-ons ({selectedFeatures.length} Feats):</span>
                    <span className="font-semibold text-slate-900">{priceCalculation.featuresFormatted}</span>
                  </div>
                  <div className="flex justify-between border-b border-[#E2DDD5] pb-2">
                    <span className="text-slate-600 uppercase">Maintenance ({maintenance}):</span>
                    <span className="font-semibold text-slate-900">{priceCalculation.maintenanceFormatted}</span>
                  </div>
                  <div className="flex justify-between border-b border-[#E2DDD5] pb-2 text-slate-500">
                    <span className="uppercase">GST Tax (18%):</span>
                    <span className="font-semibold">{priceCalculation.gstFormatted}</span>
                  </div>

                  {/* Total Estimate Highlight */}
                  <div className="pt-3 border-t-2 border-slate-900 flex justify-between items-baseline">
                    <span className="text-sm font-normal text-slate-900 uppercase font-[var(--font-geist)]">
                      TOTAL ESTIMATE:
                    </span>
                    <span className="text-2xl sm:text-3xl font-normal text-[#A90706] font-[var(--font-geist)]">
                      {priceCalculation.totalFormatted}
                    </span>
                  </div>
                </div>

                {/* Confirmation Card or Quick Action */}
                {submitted ? (
                  <div className="p-6 bg-emerald-50 border-2 border-emerald-500 text-center space-y-3">
                    <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                    <h4 className="font-condensed text-xl font-normal text-slate-900 uppercase font-[var(--font-geist)]">
                      PROPOSAL REQUEST CONFIRMED!
                    </h4>
                    <span className="font-condensed text-xs px-2.5 py-1 bg-slate-900 text-white font-bold inline-block uppercase">
                      Ref: {referenceCode}
                    </span>
                    <p className="text-xs text-slate-600 font-normal leading-relaxed pt-1">
                      Thank you <strong>{fullName}</strong>! We have sent your official PDF quotation to <strong>{email}</strong>. Our senior solutions architect will contact you on WhatsApp/Phone shortly.
                    </p>
                  </div>
                ) : activeStep !== 4 ? (
                  <div className="pt-2">
                    <button
                      onClick={() => changeStep(4)}
                      className="w-full py-3.5 bg-[#A90706] hover:bg-[#880504] text-white font-condensed text-xs font-normal uppercase tracking-widest transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md"
                    >
                      <Send className="w-4 h-4" />
                      <span>GET OFFICIAL PDF PROPOSAL</span>
                    </button>
                    <p className="text-[10px] text-slate-500 font-condensed uppercase tracking-wider text-center pt-2">
                      🔒 100% Confidential. Instant PDF Email Delivery.
                    </p>
                  </div>
                ) : null}

              </div>

            </div>

          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
