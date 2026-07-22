export interface BuildTeamRoleDetail {
  slug: string;
  title: string;
  subtitle: string;
  badge: string;
  heroDesc: string;
  stats: { label: string; value: string }[];
  hiringModels: { name: string; tag: string; desc: string; features: string[] }[];
  skills: { category: string; items: string[] }[];
  vettingProcess: { step: string; title: string; desc: string }[];
  benefits: { title: string; desc: string }[];
  pricingPlans: { tier: string; rate: string; idealFor: string; highlights: string[] }[];
  faqs: { question: string; answer: string }[];
}

export const BUILD_TEAM_DATA: Record<string, BuildTeamRoleDetail> = {
  "hire-dedicated-developers": {
    slug: "hire-dedicated-developers",
    title: "Hire Dedicated Developers in India & Globally",
    subtitle: "Top 1% Pre-Screened Software Engineers | 24-48 Hour Onboarding | Save Up To 65% On Payroll",
    badge: "// DEDICATED TEAM AUGMENTATION",
    heroDesc: "Scale your software engineering bandwidth effortlessly with dedicated, full-time remote developers in India and globally. Our pre-screened engineers work directly under your management, adhering to your tools, Git repositories, and agile sprint ceremonies with zero overhead or recruitment delay.",
    stats: [
      { label: "QUALIFIED ACCEPTANCE RATE", value: "Top 1%" },
      { label: "ONBOARDING TIMELINE", value: "24-48 Hrs" },
      { label: "DEVELOPMENT COST SAVINGS", value: "Up to 65%" },
      { label: "CLIENT RETENTION RATE", value: "98.4%" },
    ],
    hiringModels: [
      {
        name: "Dedicated Team Model",
        tag: "FULL-TIME ENGAGEMENT",
        desc: "Hire a 100% dedicated engineering squad (Developers, QA, Scrum Master) working exclusively for your company 160 hours/month.",
        features: ["Direct management via Slack/Jira", "Full IP & code ownership", "Zero setup or hiring fees", "Seamless time-zone overlap"],
      },
      {
        name: "Staff Augmentation",
        tag: "ON-DEMAND SCALE",
        desc: "Plug individual senior developers directly into your existing in-house tech team to fill skill gaps or rush critical product deadlines.",
        features: ["Flexible month-to-month contracts", "Instant developer replacement guarantee", "Daily Git commits & standups", "No long-term commitments"],
      },
      {
        name: "Project-Based Team",
        tag: "TURNKEY DELIVERY",
        desc: "Hand off your product roadmap to a dedicated engineering team with fixed milestones and guaranteed deliverables.",
        features: ["Dedicated Project Manager", "Fixed milestone pricing", "Agile 2-week sprint demos", "Complete post-launch warranty"],
      },
    ],
    skills: [
      { category: "Frontend Web Stack", items: ["React.js", "Next.js", "Vue.js", "TypeScript", "Tailwind CSS", "Angular"] },
      { category: "Backend & Microservices Stack", items: ["Node.js", "Python (Django/FastAPI)", "Go (Golang)", "Java (Spring)", "C# (.NET Core)"] },
      { category: "Mobile App Stack", items: ["React Native", "Flutter", "iOS (Swift)", "Android (Kotlin)"] },
      { category: "Cloud & DevOps Stack", items: ["AWS", "Google Cloud", "Microsoft Azure", "Docker", "Kubernetes", "Terraform", "CI/CD Pipelines"] },
      { category: "Database & Analytics Stack", items: ["PostgreSQL", "MongoDB", "Redis", "Elasticsearch", "TimescaleDB", "Snowflake"] },
    ],
    vettingProcess: [
      { step: "01", title: "Technical Background Screening", desc: "Evaluating 5+ years of verified software development experience, GitHub portfolios, and production architecture history." },
      { step: "02", title: "Live Algorithmic Coding Assessment", desc: "Rigorous 90-minute live data structure, algorithm, and system design coding exam evaluated by Principal Engineers." },
      { step: "03", title: "Communication & Soft Skills Test", desc: "Evaluating fluent English speaking, proactive Slack communication, and agile collaboration aptitude." },
      { step: "04", title: "Client Matching & Risk-Free Trial", desc: "Matching top 3 candidates within 24 hours. Start with a 2-week risk-free trial period." },
    ],
    benefits: [
      { title: "Direct Team Control & Slack Access", desc: "Your hired developers report directly to you every day via Slack, Microsoft Teams, Jira, and GitHub." },
      { title: "Strict NDA & 100% Code Ownership", desc: "Complete intellectual property (IP) assignment and source code rights belong to your company from day one." },
      { title: "Zero Setup or Recruitment Fees", desc: "No recruitment commissions, hardware costs, or office overheads. You only pay for productive developer hours." },
      { title: "Flexible Scaling & No Lockdown Contracts", desc: "Scale your team up or down with simple 14-day notice periods as your product requirements evolve." },
    ],
    pricingPlans: [
      { tier: "Junior / Associate Dev", rate: "$16 - $24 / hr", idealFor: "Bug Fixes, UI Tasks & QA Assistance", highlights: ["1-3 Years Verified Experience", "Full-Time 160 Hrs/Month", "Daily Git Commits", "English Fluent"] },
      { tier: "Mid-Level Engineer", rate: "$25 - $35 / hr", idealFor: "Core Feature Development & Maintenance", highlights: ["3-5 Years Verified Experience", "Full-Time 160 Hrs/Month", "Daily Code Pushes", "English Fluent"] },
      { tier: "Senior Lead Engineer", rate: "$38 - $52 / hr", idealFor: "Complex Microservices & System Architecture", highlights: ["6-10+ Years Experience", "Tech Lead Capabilities", "System Design Expert", "24/7 Slack Availability"] },
      { tier: "Dedicated Engineering Squad", rate: "$8,500 / mo", idealFor: "End-to-End Product Engineering", highlights: ["2 Senior + 2 Mid Devs", "Dedicated Scrum PM", "QA Automation Engineer", "Guaranteed Velocity"] },
    ],
    faqs: [
      { question: "How quickly can I hire dedicated developers in India?", answer: "We match pre-screened developer profiles within 24 hours. Once selected, your developer can onboard and push code within 48 hours." },
      { question: "How do I communicate with my hired developers?", answer: "You communicate directly with your developers via Slack, Zoom, Google Meet, email, or Jira—exactly like your internal full-time employees." },
      { question: "What if I am not satisfied with a developer's performance?", answer: "We offer a 2-week risk-free trial. If a developer doesn't meet your expectations during the trial, we replace them immediately at no cost to you." },
      { question: "Who owns the code and intellectual property (IP)?", answer: "You own 100% of the code, IP rights, trademarks, and documentation. All developers sign strict non-disclosure agreements (NDAs) prior to assignment." },
    ],
  },
  "hire-ai-ml-developer": {
    slug: "hire-ai-ml-developer",
    title: "Hire AI & Machine Learning Developers",
    subtitle: "Pre-Screened LLM, Computer Vision, PyTorch & OpenAI Integration Specialists",
    badge: "// AI & DATA SCIENCE TALENT",
    heroDesc: "Supercharge your business with senior AI/ML developers experienced in fine-tuning Large Language Models (LLMs), RAG pipelines, PyTorch deep learning, computer vision, and autonomous AI agents.",
    stats: [
      { label: "AI MODEL ACCURACY", value: "99.2%" },
      { label: "LLM INFERENCE SPEED", value: "<200ms" },
      { label: "PRE-SCREENED AI CANDIDATES", value: "Top 1%" },
      { label: "ONBOARDING TIMELINE", value: "48 Hrs" },
    ],
    hiringModels: [
      { name: "Full-Time Dedicated AI Engineer", tag: "100% EXCLUSIVE", desc: "Senior AI researcher/engineer building proprietary models and RAG pipelines for your platform.", features: ["LangChain & LlamaIndex", "OpenAI & Claude API tuning", "Vector database architecture", "PyTorch / TensorFlow expert"] },
      { name: "AI Agent Development Squad", tag: "COMPLETE TEAM", desc: "Cross-functional team of AI engineers, data scientists, and MLOps specialists shipping autonomous agents.", features: ["Autonomous workflow agents", "Custom Fine-Tuning", "GPU Infrastructure", "Zero data leakage safeguards"] },
      { name: "AI Staff Augmentation", tag: "ON-DEMAND SCALE", desc: "Plug experienced AI specialists directly into your team to build custom models and algorithms.", features: ["Flexible monthly contracts", "No lock-in commitment", "Immediate availability", "Full code ownership"] },
    ],
    skills: [
      { category: "AI Frameworks Stack", items: ["PyTorch", "TensorFlow", "Keras", "Scikit-Learn", "OpenCV", "Hugging Face"] },
      { category: "Generative AI & LLM Stack", items: ["OpenAI GPT-4", "Claude 3.5", "Llama 3", "LangChain", "LlamaIndex", "DeepSeek"] },
      { category: "Vector Database Stack", items: ["Pinecone", "Milvus", "Weaviate", "ChromaDB", "FAISS", "Qdrant"] },
      { category: "MLOps & Cloud Infrastructure Stack", items: ["AWS SageMaker", "Google Vertex AI", "MLflow", "Kubeflow", "Docker", "Triton"] },
    ],
    vettingProcess: [
      { step: "01", title: "AI Math & Data Screening", desc: "Assessing deep learning math, linear algebra, and data engineering fundamentals." },
      { step: "02", title: "Live Python & PyTorch Exam", desc: "Building live RAG vector search pipelines and fine-tuning transformer models." },
      { step: "03", title: "Data Security & Privacy Verification", desc: "Ensuring compliance with zero data leakage and enterprise SOC2 privacy standards." },
      { step: "04", title: "Client Matching & Risk-Free Trial", desc: "Interviewing top candidate matches with a 2-week risk-free trial." },
    ],
    benefits: [
      { title: "Cutting-Edge GenAI Expertise", desc: "Access engineers who actively build multi-modal agents, RAG, and fine-tuned open-source LLMs." },
      { title: "Enterprise Data Security", desc: "Strict protocols ensuring your proprietary corporate data is never used to train public AI models." },
    ],
    pricingPlans: [
      { tier: "Junior AI Engineer", rate: "$22 - $32 / hr", idealFor: "Data Cleaning, Annotations & Scripting", highlights: ["1-3 Years AI Experience", "Python & Pandas Specialist", "Data Pipeline Maintenance", "English Fluent"] },
      { tier: "Mid-Level AI Developer", rate: "$32 - $45 / hr", idealFor: "API Tuning, RAG & ML Model Deployments", highlights: ["3-5 Years ML Experience", "LangChain & Vector DBs", "OpenAI & PyTorch Expert", "English Fluent"] },
      { tier: "Senior AI Architect", rate: "$48 - $70 / hr", idealFor: "Custom LLM Fine-Tuning & Multi-Agent Systems", highlights: ["6-10+ Years Experience", "Deep Learning Research", "Custom Agent Systems", "24/7 Slack Availability"] },
      { tier: "Dedicated AI Squad", rate: "$12,500 / mo", idealFor: "Complete Enterprise AI Product Build", highlights: ["2 AI Devs + 1 MLOps + PM", "Custom RAG & GPU Tuning", "Zero Data Leakage Security", "Guaranteed Velocity"] },
    ],
    faqs: [
      { question: "What AI tasks can your developers handle?", answer: "Our developers handle LLM integrations, fine-tuning Llama/OpenAI models, RAG vector search, AI sales agents, computer vision, and MLOps deployment." },
    ],
  },
  "hire-mobile-app-developers": {
    slug: "hire-mobile-app-developers",
    title: "Hire Mobile App Developers (iOS, Android, React Native & Flutter)",
    subtitle: "Build Native & Cross-Platform Mobile Apps with High App Store Ratings",
    badge: "// MOBILE ENGINEERING TALENT",
    heroDesc: "Hire top-tier mobile app developers to build responsive, high-performance iOS and Android applications. From native Swift and Kotlin to cross-platform React Native and Flutter.",
    stats: [
      { label: "APP STORE APPROVAL", value: "100%" },
      { label: "AVERAGE APP RATING", value: "4.8 ★" },
      { label: "CRASH-FREE USERS RATE", value: "99.9%" },
      { label: "ONBOARDING TIMELINE", value: "24-48 Hrs" },
    ],
    hiringModels: [
      { name: "Dedicated Mobile Developer", tag: "FULL TIME", desc: "Full-time React Native, Flutter, Swift, or Kotlin developer dedicated to your mobile roadmap.", features: ["App Store & Play Store publishing", "Offline sync & Push notifications", "Biometric security & Payments", "Native device hardware access"] },
      { name: "Mobile Staff Augmentation", tag: "ON-DEMAND SCALE", desc: "Add expert mobile developers to speed up feature delivery or fix app store release bottlenecks.", features: ["Flexible contracts", "Native & cross-platform expertise", "Daily commits", "No lock-in"] },
      { name: "Turnkey Mobile App Squad", tag: "COMPLETE APP BUILD", desc: "Full mobile squad (iOS + Android + UI/UX + QA + PM) building your mobile product from scratch.", features: ["Dedicated PM & QA", "App Store submission guaranteed", "Bi-weekly sprint demos", "Post-launch warranty"] },
    ],
    skills: [
      { category: "Cross-Platform Mobile Stack", items: ["React Native", "Flutter", "Expo", "Dart", "TypeScript"] },
      { category: "Native iOS & Android Stack", items: ["Swift (iOS)", "SwiftUI", "Kotlin (Android)", "Jetpack Compose", "Objective-C"] },
      { category: "Mobile Backend & API Stack", items: ["Firebase", "GraphQL", "REST APIs", "SQLite", "WatermelonDB"] },
    ],
    vettingProcess: [
      { step: "01", title: "App Portfolio Review", desc: "Evaluating published App Store apps, UI performance, and offline caching logic." },
      { step: "02", title: "Live Mobile Coding Test", desc: "Building live mobile UI components with REST API integration and state management." },
      { step: "03", title: "Device Hardware & Memory Exam", desc: "Testing memory leak detection, offline SQLite sync, and battery optimization." },
      { step: "04", title: "Client Matching & Trial", desc: "Matching developer profiles within 24 hours for a 2-week risk-free trial." },
    ],
    benefits: [
      { title: "Pixel-Perfect Native UI/UX", desc: "Delivering smooth 60fps animations and native gesture responsiveness." },
    ],
    pricingPlans: [
      { tier: "Junior Mobile Dev", rate: "$18 - $24 / hr", idealFor: "UI Adjustments, Bug Fixes & Testing", highlights: ["1-3 Years App Experience", "React Native / Flutter", "Git & API Integration", "English Fluent"] },
      { tier: "Mid-Level Mobile Dev", rate: "$25 - $35 / hr", idealFor: "Core Feature Builds & App Store Releases", highlights: ["3-5 Years App Experience", "Swift / Kotlin / Flutter", "Push & Payments Master", "English Fluent"] },
      { tier: "Senior Lead Mobile Dev", rate: "$38 - $50 / hr", idealFor: "Complex Architecture & Hardware Integration", highlights: ["6-10+ Years Experience", "High 60fps Animations", "Biometric Security Lead", "English Fluent"] },
      { tier: "Dedicated Mobile Squad", rate: "$8,800 / mo", idealFor: "Complete iOS & Android App Development", highlights: ["1 iOS + 1 Android + 1 Cross + PM", "QA & App Store Publishing", "Bi-Weekly Sprint Demos", "Full Warranty"] },
    ],
    faqs: [
      { question: "Should I hire React Native, Flutter, or Native developers?", answer: "React Native and Flutter allow building iOS and Android apps simultaneously with a single codebase, saving 40% in cost. Native is best for heavy hardware or graphics workloads." },
    ],
  },
  "hire-full-stack-developers": {
    slug: "hire-full-stack-developers",
    title: "Hire Full-Stack Developers (MERN, PERN, Next.js & Node.js)",
    subtitle: "Complete End-to-End Web & Cloud Application Engineering Talent",
    badge: "// FULL-STACK ENGINEERING",
    heroDesc: "Hire versatile senior full-stack developers skilled in React/Next.js frontends, Node.js/Python backends, database schema optimization, and cloud deployments.",
    stats: [
      { label: "DEVELOPMENT SPEED GAIN", value: "2x" },
      { label: "FULL-STACK RIGOR", value: "Top 1%" },
      { label: "ONBOARDING TIMELINE", value: "24-48 Hrs" },
      { label: "COST SAVINGS", value: "Up to 65%" },
    ],
    hiringModels: [
      { name: "Dedicated Full-Stack Developer", tag: "END-TO-END", desc: "Senior developer taking ownership of both frontend UI, backend APIs, and database migrations.", features: ["React / Next.js + Node.js / Python", "Database indexing & API security", "REST & GraphQL master", "Cloud deployment ready"] },
      { name: "Full-Stack Staff Augmentation", tag: "ON-DEMAND SCALE", desc: "Add full-stack developers to increase team output across both frontend and backend tasks.", features: ["Flexible month-to-month contracts", "Instant replacement guarantee", "Daily Git standups", "No lock-in"] },
      { name: "Full-Stack SaaS Squad", tag: "TURNKEY BUILD", desc: "Cross-functional team of full-stack engineers and QA building your SaaS platform from scratch.", features: ["Dedicated PM", "Stripe & Auth integration", "Automated CI/CD", "Post-launch warranty"] },
    ],
    skills: [
      { category: "Frontend Stack", items: ["Next.js", "React.js", "TypeScript", "Tailwind CSS", "Redux Toolkit"] },
      { category: "Backend Stack", items: ["Node.js", "Express", "NestJS", "Python", "Go", "PostgreSQL", "MongoDB"] },
      { category: "DevOps & Cloud Stack", items: ["AWS", "Docker", "Kubernetes", "Vercel", "GitHub Actions", "Terraform"] },
    ],
    vettingProcess: [
      { step: "01", title: "Full-Stack Architecture Exam", desc: "Testing end-to-end web architecture, database ORMs, and API security." },
      { step: "02", title: "Live End-to-End Coding Test", desc: "Building a live Next.js + Node.js application with PostgreSQL schema migrations." },
      { step: "03", title: "Security & Performance Audit", desc: "Evaluating OWASP top 10 security safeguards, JWT auth, and database indexing." },
      { step: "04", title: "Client Matching & Trial", desc: "Matching top 3 developer profiles within 24 hours for a 2-week risk-free trial." },
    ],
    benefits: [
      { title: "One Engineer for End-to-End Delivery", desc: "Reduce team overhead by hiring engineers who seamlessly handle UI design and backend microservices." },
    ],
    pricingPlans: [
      { tier: "Junior Full-Stack Dev", rate: "$18 - $24 / hr", idealFor: "UI Components, CRUD APIs & Maintenance", highlights: ["1-3 Years Experience", "MERN / PERN Stack", "Daily Code Pushes", "English Fluent"] },
      { tier: "Mid-Level Full-Stack Engineer", rate: "$25 - $35 / hr", idealFor: "Web Platform Development & API Integration", highlights: ["3-5 Years Experience", "Next.js + Node.js Master", "PostgreSQL & ORM Expert", "English Fluent"] },
      { tier: "Senior Lead Full-Stack Engineer", rate: "$38 - $50 / hr", idealFor: "Enterprise Architecture & High-Scale Systems", highlights: ["6-10+ Years Experience", "System Architecture Expert", "CI/CD & Cloud Master", "English Fluent"] },
      { tier: "Dedicated Full-Stack Squad", rate: "$9,200 / mo", idealFor: "Complete SaaS Product Engineering", highlights: ["2 Senior + 2 Mid Devs", "Dedicated Scrum PM", "QA Engineer", "Guaranteed Velocity"] },
    ],
    faqs: [
      { question: "What stacks do your full-stack developers specialize in?", answer: "Our full-stack engineers specialize in Next.js/React + Node.js, MERN stack, Python/FastAPI + React, and Go + PostgreSQL stacks." },
    ],
  },
  "hire-software-developers": {
    slug: "hire-software-developers",
    title: "Hire Senior Software Developers",
    subtitle: "Enterprise Software Engineers for High-Scale Backend Systems",
    badge: "// SOFTWARE ENGINEERING",
    heroDesc: "Hire senior software engineers specializing in distributed systems, microservices, database optimization, C++, Java, C#, Go, and Python.",
    stats: [
      { label: "SYSTEM UPTIME SLA", value: "99.99%" },
      { label: "API LATENCY", value: "<15ms" },
      { label: "PRE-SCREENED ENGINEERS", value: "Top 1%" },
      { label: "ONBOARDING SPEED", value: "24-48 Hrs" },
    ],
    hiringModels: [
      { name: "Dedicated Software Engineer", tag: "BACKEND & ARCHITECTURE", desc: "Senior software engineer focused on mission-critical backend systems and high-throughput logic.", features: ["Distributed microservices", "High-concurrency logic", "SQL/NoSQL database tuning", "Zero downtime deployments"] },
      { name: "Backend Staff Augmentation", tag: "ON-DEMAND SCALE", desc: "Plug specialized backend developers directly into your codebase to optimize API latencies and database queries.", features: ["Flexible monthly contracts", "No lock-in", "Immediate availability", "Full IP rights"] },
      { name: "Enterprise Systems Team", tag: "COMPLETE BACKEND BUILD", desc: "Complete team of senior backend engineers building scalable cloud architectures.", features: ["Dedicated PM & System Architect", "Kubernetes & Microservices", "PCI/SOC2 Compliance", "24/7 Monitoring"] },
    ],
    skills: [
      { category: "Core Software Stack", items: ["Java", "C# (.NET Core)", "Go (Golang)", "Python", "C++", "Node.js"] },
      { category: "Distributed Systems Stack", items: ["Kafka", "RabbitMQ", "Redis", "gRPC", "GraphQL", "Docker"] },
    ],
    vettingProcess: [
      { step: "01", title: "Data Structures & Algorithmic Rigor", desc: "Rigorous testing on memory management, concurrency locks, and algorithmic complexity." },
      { step: "02", title: "System Architecture Exam", desc: "Designing high-concurrency microservices handling 10,000+ requests per second." },
      { step: "03", title: "Code Quality & Testing Audit", desc: "Evaluating unit testing, integration tests, and clean architecture principles." },
      { step: "04", title: "Client Matching & Trial", desc: "Matching candidates within 24 hours with a 2-week risk-free trial." },
    ],
    benefits: [
      { title: "Enterprise Security & Performance", desc: "Build high-throughput backends designed for enterprise reliability." },
    ],
    pricingPlans: [
      { tier: "Junior Software Dev", rate: "$18 - $24 / hr", idealFor: "Bug Fixes, API Endpoints & Unit Tests", highlights: ["1-3 Years Experience", "Java / .NET / Python", "Clean Code Focus", "English Fluent"] },
      { tier: "Mid-Level Software Engineer", rate: "$25 - $35 / hr", idealFor: "Microservices & Database Optimizations", highlights: ["3-5 Years Experience", "Go / Java / .NET Master", "SQL/NoSQL Tuning", "English Fluent"] },
      { tier: "Senior Lead Software Engineer", rate: "$38 - $52 / hr", idealFor: "High-Throughput Systems & Distributed Logic", highlights: ["6-10+ Years Experience", "System Architect", "Kafka & Microservices Lead", "English Fluent"] },
      { tier: "Dedicated Software Squad", rate: "$9,800 / mo", idealFor: "Complete High-Scale Backend Platform", highlights: ["2 Senior + 2 Mid Engineers", "Scrum PM & Architect", "QA Automation Engineer", "Guaranteed SLA"] },
    ],
    faqs: [
      { question: "Can your developers handle high-traffic backend systems?", answer: "Yes, our senior software engineers have built systems handling over 1 billion requests monthly with sub-15ms response latencies." },
    ],
  },
  "hire-web-developers": {
    slug: "hire-web-developers",
    title: "Hire Web Developers (Next.js, React & Node)",
    subtitle: "High-Performance Modern Web Applications with Sub-Second Page Loads",
    badge: "// WEB ENGINEERING",
    heroDesc: "Hire dedicated web developers to create responsive, SEO-optimized, ultra-fast web applications using Next.js, React, Node.js, and modern Jamstack architecture.",
    stats: [
      { label: "CORE WEB VITALS SCORE", value: "99/100" },
      { label: "PAGE LOAD LATENCY", value: "<0.5s" },
      { label: "PRE-SCREENED DEVELOPERS", value: "Top 1%" },
      { label: "ONBOARDING TIMELINE", value: "24-48 Hrs" },
    ],
    hiringModels: [
      { name: "Dedicated Web Developer", tag: "FRONTEND & WEB", desc: "Modern web developer building lightning-fast, accessible, and high-converting web applications.", features: ["Next.js App Router", "Tailwind CSS & Responsive UI", "SEO & Core Web Vitals optimization", "TypeScript safety"] },
      { name: "Web Staff Augmentation", tag: "ON-DEMAND SCALE", desc: "Add frontend or full-stack web developers to accelerate web production schedules.", features: ["Flexible month-to-month contracts", "Instant replacement guarantee", "Daily commits", "No lock-in"] },
      { name: "Headless Web Squad", tag: "COMPLETE WEB BUILD", desc: "Team building headless e-commerce storefronts or enterprise web portals from scratch.", features: ["Dedicated PM", "Next.js & Shopify/CMS integration", "99+ Lighthouse score", "Post-launch warranty"] },
    ],
    skills: [
      { category: "Modern Web Stack", items: ["Next.js", "React.js", "Node.js", "TypeScript", "Tailwind CSS", "HTML5/CSS3"] },
      { category: "CMS & Headless Stack", items: ["Shopify Storefront API", "Sanity.io", "Strapi", "WordPress (Headless)", "GraphQL"] },
    ],
    vettingProcess: [
      { step: "01", title: "Frontend Performance & SEO Exam", desc: "Testing lighthouse optimization, web vitals, state management, and semantic HTML." },
      { step: "02", title: "Live Next.js Coding Test", desc: "Building responsive server-side rendered components with Tailwind CSS and TypeScript." },
      { step: "03", title: "Cross-Browser & Accessibility Audit", desc: "Testing WCAG 2.1 compliance, cross-browser rendering, and mobile responsiveness." },
      { step: "04", title: "Client Matching & Trial", desc: "Matching top developer profiles within 24 hours for a 2-week risk-free trial." },
    ],
    benefits: [
      { title: "Sub-Second Load Times", desc: "Deliver web applications tuned for 99+ Google Lighthouse performance scores." },
    ],
    pricingPlans: [
      { tier: "Junior Web Developer", rate: "$16 - $22 / hr", idealFor: "HTML/CSS Layouts, Bug Fixes & CMS", highlights: ["1-3 Years Experience", "React & Tailwind CSS", "Daily Code Pushes", "English Fluent"] },
      { tier: "Mid-Level Web Developer", rate: "$23 - $32 / hr", idealFor: "Responsive Web Applications & Portals", highlights: ["3-5 Years Experience", "Next.js & React Master", "SEO & Web Vitals Expert", "English Fluent"] },
      { tier: "Senior Lead Web Architect", rate: "$35 - $48 / hr", idealFor: "Headless E-Commerce & Complex Web Portals", highlights: ["6-10+ Years Experience", "Next.js App Router Lead", "GraphQL & Performance Expert", "English Fluent"] },
      { tier: "Dedicated Web Squad", rate: "$7,800 / mo", idealFor: "End-to-End Enterprise Web Development", highlights: ["2 Senior + 1 Mid Dev + PM", "UI/UX Designer & QA", "99+ Lighthouse Score", "Guaranteed Velocity"] },
    ],
    faqs: [
      { question: "Why should I hire Next.js web developers?", answer: "Next.js provides server-side rendering (SSR), sub-second page loads, and top SEO Google rankings out of the box." },
    ],
  },
  "hire-web-app-developers": {
    slug: "hire-web-app-developers",
    title: "Hire Web Application Developers",
    subtitle: "Complex Enterprise Web Portals, SaaS Platforms & Dashboards",
    badge: "// WEB APP ENGINEERING",
    heroDesc: "Hire specialized web application developers to engineer complex SaaS platforms, B2B enterprise portals, workflow automation tools, and real-time dashboards.",
    stats: [
      { label: "SAAS ACCELERATION", value: "3x" },
      { label: "UPTIME SLA", value: "99.99%" },
      { label: "PRE-SCREENED DEVELOPERS", value: "Top 1%" },
      { label: "ONBOARDING SPEED", value: "24-48 Hrs" },
    ],
    hiringModels: [
      { name: "Dedicated SaaS Web App Engineer", tag: "ENTERPRISE PORTALS", desc: "Developer experienced in building multi-tenant SaaS backends, RBAC security, and dynamic dashboards.", features: ["Multi-tenant architecture", "Role-Based Access Control (RBAC)", "Real-time WebSocket channels", "Stripe subscription billing"] },
      { name: "SaaS Staff Augmentation", tag: "ON-DEMAND SCALE", desc: "Add web app developers to expand existing SaaS features and customer portals.", features: ["Flexible month-to-month contracts", "Instant replacement guarantee", "Daily commits", "No lock-in"] },
      { name: "Turnkey SaaS Product Team", tag: "COMPLETE SAAS BUILD", desc: "Full engineering team building your SaaS MVP or enterprise web app from blueprint to launch.", features: ["Dedicated PM & Architect", "Stripe Connect & RBAC Auth", "PostgreSQL & Redis scaling", "Post-launch warranty"] },
    ],
    skills: [
      { category: "Web App Core Stack", items: ["React", "Next.js", "Node.js", "PostgreSQL", "GraphQL", "Docker"] },
      { category: "SaaS Security & Billing Stack", items: ["Stripe API", "Auth0 / Clerk", "JWT Tokens", "Redis Caching", "Tailwind CSS"] },
    ],
    vettingProcess: [
      { step: "01", title: "Complex SaaS State & Security Exam", desc: "Testing complex client-side state, multi-tenant databases, and authentication workflows." },
      { step: "02", title: "Live Web App Coding Test", desc: "Building live dashboard analytics components with WebSocket feeds and RBAC permissions." },
      { step: "03", title: "Database Indexing & Scalability Audit", desc: "Evaluating multi-tenant database isolation, row-level locks, and caching strategies." },
      { step: "04", title: "Client Matching & Trial", desc: "Matching top developer profiles within 24 hours for a 2-week risk-free trial." },
    ],
    benefits: [
      { title: "Enterprise SaaS Security", desc: "Architect multi-tenant SaaS platforms with automated billing, RBAC, and SOC2 compliance." },
    ],
    pricingPlans: [
      { tier: "Junior Web App Dev", rate: "$18 - $24 / hr", idealFor: "Dashboard Widgets, Forms & CRUD APIs", highlights: ["1-3 Years Experience", "React & Node.js", "Daily Git Commits", "English Fluent"] },
      { tier: "Mid-Level Web App Dev", rate: "$25 - $35 / hr", idealFor: "Enterprise SaaS & B2B Web Portals", highlights: ["3-5 Years Experience", "SaaS Architecture Expert", "Multi-Tenant Database Master", "English Fluent"] },
      { tier: "Senior Web App Architect", rate: "$38 - $52 / hr", idealFor: "High-Scale Multi-Tenant Platforms", highlights: ["6-10+ Years Experience", "System Design Lead", "Stripe Billing & Security Master", "English Fluent"] },
      { tier: "Dedicated Web App Squad", rate: "$9,200 / mo", idealFor: "Complete SaaS Product Engineering", highlights: ["2 Senior + 2 Mid Devs", "Dedicated PM & QA", "Automated CI/CD", "Guaranteed Velocity"] },
    ],
    faqs: [
      { question: "Can your developers build multi-tenant SaaS applications?", answer: "Yes, we specialize in building multi-tenant SaaS applications with isolated schemas, subscription billing, and RBAC permissions." },
    ],
  },
  "hire-web-designers": {
    slug: "hire-web-designers",
    title: "Hire UI/UX & Web Designers",
    subtitle: "World-Class Product Design, Figma Design Systems & Micro-Animations",
    badge: "// UI/UX DESIGN TALENT",
    heroDesc: "Hire senior UI/UX designers to craft stunning, high-converting product interfaces, interactive Figma prototypes, brand design systems, and responsive layouts.",
    stats: [
      { label: "CONVERSION RATE GAIN", value: "+40%" },
      { label: "FIGMA DESIGN SYSTEMS", value: "Included" },
      { label: "PRE-SCREENED DESIGNERS", value: "Top 1%" },
      { label: "ONBOARDING SPEED", value: "24 Hrs" },
    ],
    hiringModels: [
      { name: "Dedicated Product Designer", tag: "UI/UX & FIGMA", desc: "Senior designer taking product requirements and delivering interactive Figma design systems.", features: ["Figma Design Systems", "Interactive Prototypes", "User Journey Mapping", "Developer Handoff Ready"] },
      { name: "UI/UX Staff Augmentation", tag: "ON-DEMAND SCALE", desc: "Add UI/UX designers to revamp your web/mobile app design or launch new product features.", features: ["Flexible month-to-month contracts", "Instant replacement guarantee", "Daily Figma updates", "No lock-in"] },
      { name: "Complete Brand & Product Design Squad", tag: "TURNKEY DESIGN", desc: "Design squad delivering brand identity, design tokens, responsive web layouts, and mobile prototypes.", features: ["Dedicated Lead UX Strategist", "Complete Figma Component Library", "Dark & Light Mode Variants", "Developer Handoff Support"] },
    ],
    skills: [
      { category: "Design Tools Stack", items: ["Figma", "Adobe XD", "Framer", "Protopie", "Illustrator", "After Effects"] },
      { category: "UX & Research Stack", items: ["User Journey Mapping", "Wireframing", "Design Systems", "Usability Testing", "Micro-Animations"] },
    ],
    vettingProcess: [
      { step: "01", title: "Design Portfolio & UX Critique", desc: "Evaluating visual hierarchy, component typography, usability, and design systems." },
      { step: "02", title: "Live Figma Component Challenge", desc: "Designing a responsive, accessible UI component set with auto-layout and variant states." },
      { step: "03", title: "Developer Handoff Audit", desc: "Evaluating Figma token naming, layer organization, and developer specifications." },
      { step: "04", title: "Client Matching & Trial", desc: "Matching top designer profiles within 24 hours for a 2-week risk-free trial." },
    ],
    benefits: [
      { title: "WOW-Factor Visual Excellence", desc: "Craft modern, sleek, dark-mode & glassmorphism user experiences that impress users immediately." },
    ],
    pricingPlans: [
      { tier: "Junior UI/UX Designer", rate: "$16 - $22 / hr", idealFor: "Banners, Layout Adjustments & Icons", highlights: ["1-3 Years Experience", "Figma & Illustrator", "Daily Deliverables", "English Fluent"] },
      { tier: "Mid-Level Product Designer", rate: "$23 - $32 / hr", idealFor: "Web & Mobile Product Design & Prototypes", highlights: ["3-5 Years Experience", "Figma Master & Auto-Layout", "Design Tokens & Systems", "English Fluent"] },
      { tier: "Senior Lead UX Strategist", rate: "$35 - $48 / hr", idealFor: "Complex Product UX & Brand Architecture", highlights: ["6-10+ Years Experience", "UX Research & Conversion Lead", "Micro-Animations Expert", "English Fluent"] },
      { tier: "Dedicated Design Squad", rate: "$7,500 / mo", idealFor: "Complete Brand & UI/UX Product Design", highlights: ["2 Senior Designers + Lead", "Figma Design System", "Interactive Prototypes", "Developer Support"] },
    ],
    faqs: [
      { question: "Will the designer deliver developer-ready Figma files?", answer: "Yes! All Figma files include structured auto-layout components, color tokens, typography scales, and assets ready for developer handoff." },
    ],
  },
  "hire-digital-marketing-experts": {
    slug: "hire-digital-marketing-experts",
    title: "Hire Digital Marketing & SEO Experts",
    subtitle: "Drive Organic Traffic, High-Converting PPC Campaigns & Technical SEO",
    badge: "// DIGITAL MARKETING TALENT",
    heroDesc: "Hire experienced digital marketing strategists, technical SEO specialists, and performance marketers to accelerate organic search rankings and lower customer acquisition costs.",
    stats: [
      { label: "ORGANIC TRAFFIC GROWTH", value: "3.5x" },
      { label: "PPC CONVERSION GAIN", value: "+45%" },
      { label: "TECHNICAL SEO SCORE", value: "98/100" },
      { label: "ONBOARDING TIMELINE", value: "24 Hrs" },
    ],
    hiringModels: [
      { name: "Dedicated Marketing Strategist", tag: "SEO & PERFORMANCE", desc: "Full-time digital marketing manager executing keyword strategies, content expansion, and Google Ads.", features: ["Technical SEO Audits", "Keyword Research & Content Strategy", "Google Ads & Meta PPC", "Conversion Rate Optimization (CRO)"] },
      { name: "Marketing Staff Augmentation", tag: "ON-DEMAND SCALE", desc: "Add SEO specialists or PPC ad managers to scale your ongoing digital acquisition channels.", features: ["Flexible month-to-month contracts", "Instant replacement guarantee", "Weekly reporting", "No lock-in"] },
      { name: "Full Performance Growth Team", tag: "TURNKEY GROWTH", desc: "Complete growth team (SEO Lead + Copywriter + PPC Manager + Designer) scaling your inbound pipeline.", features: ["Dedicated Growth Lead", "Ahrefs & SEMrush Strategy", "Weekly ROAS Optimization", "Custom Analytics Dashboard"] },
    ],
    skills: [
      { category: "SEO & Analytics Stack", items: ["Ahrefs", "SEMrush", "Google Analytics 4", "Google Search Console", "Screaming Frog", "Looker Studio"] },
      { category: "Paid Ads & CRO Stack", items: ["Google Ads", "Meta Ads Manager", "LinkedIn Ads", "Hotjar", "VWO", "Unbounce"] },
    ],
    vettingProcess: [
      { step: "01", title: "Campaign Insights Review", desc: "Evaluating verified ROI insights, organic traffic growth metrics, and ad spend efficiency." },
      { step: "02", title: "Live SEO & Ad Audit Exam", desc: "Performing a live technical audit on a target website to identify ranking bottlenecks." },
      { step: "03", title: "CRO & Data Analytics Test", desc: "Evaluating conversion rate optimization hypotheses, GA4 funnel tracking, and ROAS modeling." },
      { step: "04", title: "Client Matching & Trial", desc: "Matching top marketing strategists within 24 hours for a 2-week risk-free trial." },
    ],
    benefits: [
      { title: "Measurable ROI & Lower CAC", desc: "Drive predictable inbound leads and scale customer acquisition through data-backed marketing." },
    ],
    pricingPlans: [
      { tier: "Junior Marketing Specialist", rate: "$15 - $20 / hr", idealFor: "Content Posting, Basic SEO & Reporting", highlights: ["1-3 Years Experience", "Ahrefs & GA4 Basics", "Daily Deliverables", "English Fluent"] },
      { tier: "Mid-Level SEO/PPC Specialist", rate: "$22 - $32 / hr", idealFor: "Organic Growth & Paid Ad Management", highlights: ["3-5 Years Experience", "Google Ads Certified", "Technical SEO Specialist", "English Fluent"] },
      { tier: "Senior Growth Lead", rate: "$35 - $48 / hr", idealFor: "Comprehensive Inbound Scaling & CRO", highlights: ["6-10+ Years Experience", "High ROAS Campaign Lead", "Data Analytics Master", "English Fluent"] },
      { tier: "Dedicated Growth Squad", rate: "$7,200 / mo", idealFor: "Full-Funnel Organic & Paid Acquisition", highlights: ["Growth Lead + SEO + Copy + Ad Mgr", "Weekly ROAS Reports", "Conversion Funnel Build", "Guaranteed Leads"] },
    ],
    faqs: [
      { question: "How fast will I see results from SEO services?", answer: "Technical SEO improvements show impact within 2-4 weeks, while organic keyword ranking growth accelerates substantially between months 2 and 4." },
    ],
  },
  "hire-blockchain-developer": {
    slug: "hire-blockchain-developer",
    title: "Hire Blockchain & Web3 Developers",
    subtitle: "Smart Contracts, Solidity, DApps & Decentralized Finance (DeFi)",
    badge: "// WEB3 & BLOCKCHAIN TALENT",
    heroDesc: "Hire senior blockchain developers to code audited Solidity smart contracts, Web3 decentralized applications (DApps), tokenomics, and decentralized finance (DeFi) platforms.",
    stats: [
      { label: "SMART CONTRACT SECURITY", value: "Audited" },
      { label: "TOTAL VALUE LOCKED (TVL)", value: "$100M+" },
      { label: "PRE-SCREENED DEVELOPERS", value: "Top 1%" },
      { label: "ONBOARDING TIMELINE", value: "48 Hrs" },
    ],
    hiringModels: [
      { name: "Dedicated Blockchain Developer", tag: "SMART CONTRACTS & DAPPS", desc: "Senior Web3 engineer developing audited Solidity contracts and Ethers.js DApp interfaces.", features: ["Solidity & Rust Smart Contracts", "Web3.js / Ethers.js integration", "Smart contract gas optimization", "OpenZeppelin security standards"] },
      { name: "Web3 Staff Augmentation", tag: "ON-DEMAND SCALE", desc: "Add smart contract auditors or DApp developers to your Web3 engineering team.", features: ["Flexible month-to-month contracts", "Instant replacement guarantee", "Daily commits", "No lock-in"] },
      { name: "Complete Web3 Product Team", tag: "TURNKEY WEB3 BUILD", desc: "Team building DeFi protocols, NFT marketplaces, or custom blockchain nodes from scratch.", features: ["Dedicated Web3 Architect", "Smart Contract Security Audit", "Frontend DApp UI", "Post-launch warranty"] },
    ],
    skills: [
      { category: "Smart Contract Stack", items: ["Solidity", "Rust (Solana)", "Vyper", "Hardhat", "Foundry", "OpenZeppelin"] },
      { category: "Web3 Frontend & Protocol Stack", items: ["Ethereum", "Polygon", "Web3.js", "Ethers.js", "Wagmi", "Viem", "Solana Web3"] },
    ],
    vettingProcess: [
      { step: "01", title: "Smart Contract Security Audit", desc: "Testing reentrancy attack prevention, gas optimization, and smart contract verification." },
      { step: "02", title: "Live Solidity & Web3 Coding Test", desc: "Writing gas-optimized ERC-20/ERC-721 smart contracts with Hardhat test suites." },
      { step: "03", title: "Cryptography & Consensus Audit", desc: "Evaluating cryptographic signatures, zero-knowledge proofs, and node RPC endpoints." },
      { step: "04", title: "Client Matching & Trial", desc: "Matching top Web3 candidates within 48 hours for a 2-week risk-free trial." },
    ],
    benefits: [
      { title: "Audited Smart Contract Security", desc: "Deploy robust, hack-resistant smart contracts verified against top security standards." },
    ],
    pricingPlans: [
      { tier: "Junior Web3 Developer", rate: "$22 - $30 / hr", idealFor: "DApp Frontend Integration & Testing", highlights: ["1-3 Years Web3 Experience", "Ethers.js & React", "Hardhat Test Suites", "English Fluent"] },
      { tier: "Mid-Level Solidity Developer", rate: "$32 - $45 / hr", idealFor: "Smart Contracts & Tokenomics Builds", highlights: ["3-5 Years Web3 Experience", "Solidity & Hardhat Master", "OpenZeppelin Security", "English Fluent"] },
      { tier: "Senior Web3 Architect", rate: "$48 - $70 / hr", idealFor: "Complex DeFi Protocols & Cross-Chain Bridges", highlights: ["6-10+ Years Experience", "Audited Contract Track Record", "Rust & Solidity Master", "English Fluent"] },
      { tier: "Dedicated Web3 Squad", rate: "$12,000 / mo", idealFor: "Complete Decentralized Application Build", highlights: ["2 Senior + 1 Mid Web3 Devs", "Web3 Architect & PM", "Security Audit Included", "Guaranteed SLA"] },
    ],
    faqs: [
      { question: "Which blockchains do your developers support?", answer: "Our developers support Ethereum, Solana, Polygon, Arbitrum, Optimism, BNB Chain, and Avalanche." },
    ],
  },
};
