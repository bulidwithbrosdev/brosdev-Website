"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Code, Server, Cloud, Smartphone, ShoppingBag, ArrowRight } from "lucide-react";

export default function TechStackExplorer() {
  const [activeCategory, setActiveCategory] = useState("Frontend");

  const categories = [
    {
      id: "Frontend",
      name: "Frontend Stack",
      count: "8 Frameworks",
      icon: Code,
      desc: "Responsive UI & Web Apps",
    },
    {
      id: "Backend",
      name: "Backend & DBs",
      count: "9 Engines & DBs",
      icon: Server,
      desc: "APIs, Microservices & Databases",
    },
    {
      id: "Cloud",
      name: "Cloud & DevOps",
      count: "7 Platforms",
      icon: Cloud,
      desc: "Containers & Edge Hosting",
    },
    {
      id: "Mobile",
      name: "Mobile Ecosystem",
      count: "5 Tech Stacks",
      icon: Smartphone,
      desc: "Native & Flutter Mobile Apps",
    },
    {
      id: "Ecommerce",
      name: "CMS & E-Commerce",
      count: "5 Storefronts",
      icon: ShoppingBag,
      desc: "Magento, Shopify & Custom CMS",
    },
  ];

  const techStackData: Record<
    string,
    { name: string; tag: string; icon: string; level: string }[]
  > = {
    Frontend: [
      {
        name: "Next.js 16",
        tag: "App Router, SSR & React Server Components",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
        level: "EXPERT",
      },
      {
        name: "React 19",
        tag: "Concurrent Mode, Custom Hooks & Context",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        level: "EXPERT",
      },
      {
        name: "TypeScript",
        tag: "Strict Type Safety, Interfaces & Generics",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
        level: "EXPERT",
      },
      {
        name: "JavaScript (ES6+)",
        tag: "Modern V8 Engine Async & Event Loop",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        level: "EXPERT",
      },
      {
        name: "Vue.js 3",
        tag: "Composition API & Pinia State",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
        level: "ADVANCED",
      },
      {
        name: "Angular 18",
        tag: "RxJS Signals & Enterprise Dependency Injection",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg",
        level: "ADVANCED",
      },
      {
        name: "Tailwind CSS",
        tag: "Design System Tokens & Utility Styling",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
        level: "EXPERT",
      },
      {
        name: "HTML5 & CSS3",
        tag: "Semantic Markup, Flexbox & Grid Math",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
        level: "EXPERT",
      },
    ],
    Backend: [
      {
        name: "Node.js",
        tag: "Non-Blocking Async Event Loop APIs",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
        level: "EXPERT",
      },
      {
        name: "Python",
        tag: "FastAPI, Django & AI Data Pipelines",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
        level: "EXPERT",
      },
      {
        name: "PHP",
        tag: "Modern PHP 8.3 & Enterprise Microservices",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
        level: "EXPERT",
      },
      {
        name: "Java",
        tag: "Spring Boot Microservices Architecture",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
        level: "ADVANCED",
      },
      {
        name: "C# / .NET",
        tag: "ASP.NET Core High-Performance APIs",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
        level: "ADVANCED",
      },
      {
        name: "Go (Golang)",
        tag: "Low-Latency Goroutines & Microservices",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg",
        level: "PROFICIENT",
      },
      {
        name: "Ruby on Rails",
        tag: "MVC Architecture & Rapid Backend APIs",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-original.svg",
        level: "PROFICIENT",
      },
      {
        name: "PostgreSQL",
        tag: "ACID Relational Database & Indexing",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
        level: "EXPERT",
      },
      {
        name: "MySQL",
        tag: "Scalable Enterprise Storage & Queries",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
        level: "EXPERT",
      },
    ],
    Cloud: [
      {
        name: "AWS Cloud",
        tag: "ECS, Lambda, S3, RDS & CloudFront CDN",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
        level: "EXPERT",
      },
      {
        name: "Microsoft Azure",
        tag: "Azure Kubernetes, App Service & Blob",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg",
        level: "ADVANCED",
      },
      {
        name: "Google Cloud",
        tag: "BigQuery, GKE & Cloud Run Services",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg",
        level: "ADVANCED",
      },
      {
        name: "Docker",
        tag: "Containerization & Multi-Stage Builds",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
        level: "EXPERT",
      },
      {
        name: "Kubernetes",
        tag: "Container Orchestration & Auto-Scaling",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg",
        level: "EXPERT",
      },
      {
        name: "Linux & Ubuntu",
        tag: "System Administration & Server Hardening",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
        level: "EXPERT",
      },
      {
        name: "GitHub Actions",
        tag: "Automated Testing, Building & CI/CD Pipelines",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
        level: "EXPERT",
      },
    ],
    Mobile: [
      {
        name: "Flutter & Dart",
        tag: "Cross-Platform High-FPS Mobile Apps",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
        level: "EXPERT",
      },
      {
        name: "Swift (iOS)",
        tag: "Native Apple iOS & SwiftUI Architecture",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg",
        level: "ADVANCED",
      },
      {
        name: "Kotlin (Android)",
        tag: "Native Android Jetpack Compose Apps",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg",
        level: "ADVANCED",
      },
      {
        name: "React Native",
        tag: "Cross-Platform iOS & Android Bridge",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        level: "EXPERT",
      },
      {
        name: "Android Studio",
        tag: "Native Mobile Build System & SDK",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg",
        level: "ADVANCED",
      },
    ],
    Ecommerce: [
      {
        name: "Magento 2",
        tag: "Enterprise B2B & B2C E-Commerce Stores",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/magento/magento-original.svg",
        level: "EXPERT",
      },
      {
        name: "Shopify Plus",
        tag: "Headless Commerce, Liquid & Theme Apps",
        icon: "https://cdn.simpleicons.org/shopify/95BF47",
        level: "EXPERT",
      },
      {
        name: "Laravel Framework",
        tag: "Custom Web Portals & E-Commerce Backends",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg",
        level: "EXPERT",
      },
      {
        name: "WordPress & WooCommerce",
        tag: "Custom Plugins, Security & Performance",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg",
        level: "EXPERT",
      },
      {
        name: "Drupal",
        tag: "Enterprise Content Management & CMS",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/drupal/drupal-original.svg",
        level: "ADVANCED",
      },
    ],
  };

  // Drag / Pointer move handler to change category when dragging over items
  const handlePointerMove = (e: React.PointerEvent) => {
    if (e.buttons === 1 || e.pointerType === "touch") {
      const element = document.elementFromPoint(e.clientX, e.clientY);
      const categoryItem = element?.closest("[data-category-id]");
      if (categoryItem) {
        const catId = categoryItem.getAttribute("data-category-id");
        if (catId && catId !== activeCategory) {
          setActiveCategory(catId);
        }
      }
    }
  };

  return (
    <section id="industry" className="py-24 sm:py-32 bg-[#FAF8F5] border-b border-[#E2DDD5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-[#E2DDD5] mb-4">
            <span className="w-2 h-2 bg-[#A90706]"></span>
            <span className="font-condensed text-xs font-normal tracking-widest text-[#A90706] uppercase">
              // TECH STACK MASTERY
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-normal text-slate-900 tracking-tight leading-tight uppercase mb-4 font-[var(--font-geist)]">
            Modern Developer Ecosystem
          </h2>
          <p className="text-slate-700 text-base sm:text-lg font-medium leading-relaxed">
            We stay at the bleeding edge of software engineering to deliver resilient, scalable, and future-proof applications.
          </p>
        </div>

        {/* 2-Column Split: Compact Left Stack + Right Side Tech Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Compact Left Column (3 Cols): Category Stack Selection */}
          <div
            onPointerMove={handlePointerMove}
            className="lg:col-span-3 border-2 border-slate-900 bg-white shadow-md flex flex-row lg:flex-col overflow-x-auto lg:overflow-x-visible divide-x lg:divide-x-0 lg:divide-y divide-slate-900 select-none"
          >
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isActive = activeCategory === cat.id;
              return (
                <div
                  key={cat.id}
                  data-category-id={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  onMouseEnter={() => setActiveCategory(cat.id)}
                  className={`w-full min-w-[200px] lg:min-w-0 p-4 transition-all duration-200 cursor-pointer flex items-center justify-between text-left group shrink-0 ${
                    isActive
                      ? "bg-slate-900 text-white"
                      : "bg-white text-slate-900 hover:bg-[#FAF8F5]"
                  }`}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div
                      className={`w-8 h-8 shrink-0 flex items-center justify-center border transition-colors ${
                        isActive
                          ? "bg-[#A90706] border-[#A90706] text-white"
                          : "bg-[#FAF8F5] border-[#E2DDD5] text-slate-900 group-hover:border-slate-900"
                      }`}
                    >
                      <Icon className="w-3.5 h-3.5" />
                    </div>

                    <div className="min-w-0">
                      <span className="font-condensed text-sm font-normal uppercase tracking-tight block truncate">
                        {cat.name}
                      </span>
                      <span className={`text-[9px] font-condensed font-normal uppercase block tracking-wider ${
                        isActive ? "text-[#A90706]" : "text-slate-400"
                      }`}>
                        {cat.count}
                      </span>
                    </div>
                  </div>

                  <ArrowRight
                    className={`w-3.5 h-3.5 shrink-0 transition-transform ${
                      isActive
                        ? "text-[#A90706] translate-x-1"
                        : "text-slate-300 group-hover:text-slate-900"
                    }`}
                  />
                </div>
              );
            })}
          </div>

          {/* Expanded Right Column (9 Cols): Tech Cards with Authentic Cloud Icons */}
          <div className="lg:col-span-9">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
            >
              {techStackData[activeCategory]?.map((tech) => (
                <div
                  key={tech.name}
                  className="p-5 bg-white border border-[#E2DDD5] hover:border-slate-900 hover:shadow-md transition-all duration-300 group flex items-start gap-3.5"
                >
                  {/* Cloud Icon */}
                  <div className="w-11 h-11 shrink-0 bg-[#FAF8F5] border border-[#E2DDD5] p-2 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <img
                      src={tech.icon}
                      alt={tech.name}
                      className="w-full h-full object-contain pointer-events-none"
                    />
                  </div>

                  {/* Tech Details */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="font-condensed text-base font-normal text-slate-900 uppercase group-hover:text-[#A90706] transition-colors truncate">
                        {tech.name}
                      </h3>
                      <span className="font-condensed text-[9px] font-normal px-1.5 py-0.5 bg-[#FAF8F5] text-slate-700 border border-[#E2DDD5] uppercase shrink-0 ml-1">
                        {tech.level}
                      </span>
                    </div>

                    <p className="text-[11px] text-slate-600 font-normal leading-relaxed line-clamp-2">
                      {tech.tag}
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}
