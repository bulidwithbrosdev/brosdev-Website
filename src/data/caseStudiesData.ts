export interface CaseStudy {
  slug: string;
  title: string;
  badge: string;
  client: string;
  industry: string;
  summary: string;
  problem: string;
  solution: string;
  architectureDetails: string;
  metrics: { label: string; value: string; desc: string }[];
  techStack: string[];
  quote: string;
  author: string;
}

export const CASE_STUDIES_DATA: Record<string, CaseStudy> = {
  "apexpay-fintech-core": {
    slug: "apexpay-fintech-core",
    badge: "FINTECH & PAYMENTS",
    title: "APEXPAY: REBUILDING CORE TRANSACTION ENGINE IN GOLANG",
    client: "ApexPay UK (London, United Kingdom)",
    industry: "Fintech & Global Payments",
    summary: "ApexPay needed a high-performance financial ledger capable of processing thousands of multi-currency transactions per second with microsecond ledger reconciliation.",
    problem: "ApexPay was struggling with legacy monolithic API bottlenecks that caused transaction timeouts during high-traffic flash sales and elevated server bills.",
    solution: "BrosDev deployed a 5-member dedicated squad to decompose the backend into high-concurrency microservices written in Golang, utilizing Redis cluster caching and Event-Driven Kafka message queues.",
    architectureDetails: "Event-driven microservices architecture using Go, Kafka queues, PostgreSQL relational double-entry ledgers with HSM tokenization, and automated failover clusters.",
    metrics: [
      { label: "TRANSACTION LATENCY", value: "-45%", desc: "Reduced sub-second checkout delays" },
      { label: "SYSTEM UPTIME", value: "99.999%", desc: "Zero downtime during peak Black Friday" },
      { label: "PEAK CAPACITY", value: "25,000 req/s", desc: "Handled concurrent payment loads" },
      { label: "CLOUD BILL SAVINGS", value: "$120,000/yr", desc: "Optimized AWS container infrastructure" }
    ],
    techStack: ["Golang", "PostgreSQL", "Kafka", "AWS EKS", "Redis", "Docker"],
    quote: "BrosDev's engineers delivered a bulletproof architecture. Our payment success rate hit an all-time high of 99.98% within 60 days of deployment.",
    author: "Marcus Vance, CTO at ApexPay UK"
  },
  "omniflow-ai-enterprise-saas": {
    slug: "omniflow-ai-enterprise-saas",
    badge: "ENTERPRISE AI & SAAS",
    title: "OMNIFLOW AI: AUTONOMOUS MULTI-AGENT WORKFLOW PLATFORM",
    client: "OmniFlow Systems (Boston, USA)",
    industry: "Enterprise AI & Machine Learning",
    summary: "OmniFlow required an enterprise-grade multi-agent orchestration engine to parse complex multi-step workflow requests from Fortune 500 enterprises.",
    problem: "Processing high-concurrency natural language queries while orchestrating multiple LLMs simultaneously created severe network latency and GPU memory bottlenecks.",
    solution: "BrosDev built a decoupled microservices platform utilizing Python FastAPI, Redis streaming queues, vector databases, and Next.js App Router.",
    architectureDetails: "Decoupled Serverless & Kubernetes microservices architecture featuring an Envoy API gateway, Redis semantic cache layer, and distributed Python inference workers.",
    metrics: [
      { label: "DAILY AI QUERIES", value: "5,000,000+", desc: "Processed across enterprise accounts" },
      { label: "QUERY RESPONSE LATENCY", value: "< 85ms", desc: "Vector similarity search speed" },
      { label: "SYSTEM UPTIME SLA", value: "99.99%", desc: "Guaranteed SLA uptime" },
      { label: "LLM API COST SAVINGS", value: "45%", desc: "Achieved via semantic vector caching" }
    ],
    techStack: ["Next.js", "Python FastAPI", "OpenAI GPT-4", "Redis", "Pinecone", "AWS ECS"],
    quote: "The speed and accuracy of BrosDev's AI RAG system transformed our clinical workflows. They are true principal AI architects.",
    author: "Dr. Elena Rostova, VP of Engineering at OmniFlow"
  },
  "novacloud-kubernetes-orchestration": {
    slug: "novacloud-kubernetes-orchestration",
    badge: "CLOUD INFRASTRUCTURE",
    title: "NOVACLOUD: MONOLITH TO KUBERNETES ZERO-DOWNTIME MIGRATION",
    client: "NovaCloud Systems (Munich, Germany)",
    industry: "Cloud & Enterprise Software",
    summary: "NovaCloud needed to migrate their legacy monolithic infrastructure to a modern containerized Kubernetes cloud architecture with blue-green automated deployments.",
    problem: "The existing monolithic server suffered from single-point-of-failure risks, slow 3-hour deployment cycles, and ballooning cloud hosting bills.",
    solution: "BrosDev containerized all backend services into Docker containers, configured Kubernetes (EKS) auto-scaling nodes, and set up automated GitHub Actions CI/CD pipelines.",
    architectureDetails: "Multi-region AWS EKS Kubernetes cluster connected with Terraform infrastructure-as-code scripts, Prometheus telemetry dashboards, and CloudFront global edge CDNs.",
    metrics: [
      { label: "HOSTING COST REDUCTION", value: "-42%", desc: "Direct annual cloud infrastructure savings" },
      { label: "DEPLOYMENT VELOCITY", value: "25x / day", desc: "Automated CI/CD GitHub Actions pipelines" },
      { label: "MIGRATION DOWNTIME", value: "0 Seconds", desc: "Achieved zero outage during cutover" },
      { label: "AUTO-SCALING VELOCITY", value: "< 30 Secs", desc: "Handled traffic spikes instantly" }
    ],
    techStack: ["Kubernetes", "AWS EKS", "Terraform", "Docker", "Prometheus", "GitHub Actions"],
    quote: "BrosDev migrated our entire platform with zero downtime. Our developers can now deploy code in under 3 minutes with total confidence.",
    author: "Lukas Weber, VP of Infrastructure at NovaCloud"
  },
  "scalestack-ai-crm": {
    slug: "scalestack-ai-crm",
    badge: "AI & SALES AUTOMATION",
    title: "SCALESTACK: AUTONOMOUS AI SALES AGENTS WITH VECTOR RAG",
    client: "ScaleStack CRM (Toronto, Canada)",
    industry: "B2B SaaS & CRM",
    summary: "ScaleStack needed an autonomous AI sales agent capable of engaging website leads instantly, qualifying budget and timelines, and booking meetings.",
    problem: "Standard chatbots failed to answer technical product questions accurately and frequently hallucinated incorrect pricing details.",
    solution: "BrosDev built a RAG-powered autonomous AI agent trained on product documentation and pricing playbooks with LangChain, OpenAI GPT-4, and HubSpot CRM APIs.",
    architectureDetails: "Python FastAPI inference server utilizing ChromaDB vector store, LangChain agent tooling, and Webhook event listeners.",
    metrics: [
      { label: "QUALIFIED LEADS GAIN", value: "+310%", desc: "Inbound conversion boost" },
      { label: "INBOUND RESPONSE TIME", value: "5 Secs", desc: "Instant AI engagement" },
      { label: "MEETINGS BOOKED AUTOMATICALLY", value: "48%", desc: "Direct calendar sync" },
      { label: "CRM DATA ACCURACY", value: "100%", desc: "Zero hallucination pricing" }
    ],
    techStack: ["Python", "LangChain", "OpenAI GPT-4", "ChromaDB", "HubSpot API", "PostgreSQL"],
    quote: "Responding to leads in under 10 seconds tripled our conversion rate. BrosDev built a game-changing AI product.",
    author: "Rajesh Kumar, CEO at ScaleStack"
  },
  "headless-shopify-conversion": {
    slug: "headless-shopify-conversion",
    badge: "E-COMMERCE & HEADLESS",
    title: "VOGUETHREADS: HEADLESS STOREFRONT WITH 99+ CORE WEB VITALS",
    client: "VogueThreads DTC (Paris, France)",
    industry: "Retail & E-Commerce",
    summary: "VogueThreads experienced slow page loads on their legacy Liquid theme. BrosDev built a Next.js 16 Headless Storefront integrated with Shopify Storefront GraphQL API.",
    problem: "Slow mobile page load speeds caused high bounce rates and cart abandonment during international marketing campaigns.",
    solution: "We engineered a Headless Next.js storefront using Tailwind CSS, edge-cached GraphQL queries, and instant optimistic cart updates.",
    architectureDetails: "Headless Composable architecture deploying Next.js on Vercel edge servers connected to Shopify Plus GraphQL APIs.",
    metrics: [
      { label: "CORE WEB VITALS SCORE", value: "99/100", desc: "Lighthouse mobile score" },
      { label: "MOBILE CONVERSION GAIN", value: "+140%", desc: "Direct revenue increase" },
      { label: "PAGE LOAD TIME", value: "0.3s", desc: "Sub-second edge rendering" },
      { label: "CART ABANDONMENT DROP", value: "-28%", desc: "Reduced friction at checkout" }
    ],
    techStack: ["Next.js", "React", "Shopify Storefront API", "Tailwind CSS", "GraphQL", "Vercel"],
    quote: "Our mobile conversion rate surged 140% after launch. The site speed is blazingly fast.",
    author: "Jean-Pierre Laurent, Head of Digital at VogueThreads"
  },
  "hipaa-telehealth-webrtc": {
    slug: "hipaa-telehealth-webrtc",
    badge: "HEALTHCARE & WEBRTC",
    title: "MEDICONNECT: HIPAA-COMPLIANT WEBRTC TELEHEALTH PLATFORM",
    client: "MediConnect Health (Boston, USA)",
    industry: "HealthTech & Telemedicine",
    summary: "MediConnect required a secure WebRTC telehealth platform supporting encrypted multi-party video consultations and FHIR EHR sync.",
    problem: "Legacy video consultation tools lacked HIPAA compliance safeguards and suffered from lag over mobile cellular networks.",
    solution: "BrosDev built a custom WebRTC media server with end-to-end AES-256 encryption, bi-directional HL7 FHIR EHR mappers, and automated e-prescription dispatch.",
    architectureDetails: "Zero-trust microservices stack featuring WebRTC media relays, AWS HealthLake encrypted databases, and SMART-on-FHIR APIs.",
    metrics: [
      { label: "PATIENT CONSULTATIONS", value: "500,000+", desc: "Completed securely" },
      { label: "HIPAA COMPLIANCE", value: "100%", desc: "Audited ePHI security" },
      { label: "VIDEO STREAM LATENCY", value: "< 150ms", desc: "Sub-second WebRTC video" },
      { label: "EHR SYNC VELOCITY", value: "Instant", desc: "Bi-directional chart sync" }
    ],
    techStack: ["React Native", "Next.js", "WebRTC", "Python", "HL7 FHIR API", "AWS HealthLake"],
    quote: "BrosDev's WebRTC engineering gave us sub-second video latency while passing strict HIPAA compliance audits with flying colors.",
    author: "Sarah Jenkins, CPO at MediConnect Health"
  }
};
