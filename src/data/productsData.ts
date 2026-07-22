export interface ProductItem {
  slug: string;
  name: string;
  badge: string;
  tagline: string;
  shortDesc: string;
  description: string;
  category: "Enterprise AI" | "FinTech" | "Cloud Infrastructure" | "SaaS & CRM";
  pricingTier: string;
  deploymentModel: string;
  techStack: string[];
  keyFeatures: { title: string; desc: string }[];
  architectureHighlights: { metric: string; label: string }[];
  useCases: string[];
}

export const PRODUCTS_DATA: ProductItem[] = [
  {
    slug: "omniflow-ai-engine",
    name: "OmniFlow AI Engine",
    badge: "ENTERPRISE AI PLATFORM",
    tagline: "Autonomous Agent Orchestration & High-Throughput Enterprise LLM Workflows",
    shortDesc: "High-throughput autonomous AI workflow platform for enterprise task automation, multi-agent collaboration, and secure local model execution.",
    description: "OmniFlow AI Engine is a next-generation enterprise AI orchestration platform designed to power complex business workflows through multi-agent collaboration, hybrid cloud/on-premise LLM inference, and native RAG (Retrieval-Augmented Generation) data pipelines.",
    category: "Enterprise AI",
    pricingTier: "Enterprise Licensing / Usage-Based SLA",
    deploymentModel: "Hybrid Cloud, On-Premise & AWS / Azure Marketplace",
    techStack: ["Python", "PyTorch", "vLLM", "Next.js", "Docker", "Kubernetes", "Redis", "Pinecone Vector DB"],
    keyFeatures: [
      {
        title: "Multi-Agent DAG Execution",
        desc: "Graph-based asynchronous task distribution across autonomous AI agents with automatic retry and state persistence.",
      },
      {
        title: "Hybrid Cloud & On-Prem Inference",
        desc: "Seamlessly route requests between private GPU clusters (vLLM/Triton) and cloud APIs (OpenAI, Anthropic, Gemini) with zero data leakage.",
      },
      {
        title: "Enterprise Vector RAG Pipeline",
        desc: "Ingest millions of unstructured PDFs, docs, and DB tables into real-time semantic search with sub-20ms retrieval latency.",
      },
      {
        title: "SOC-2 & HIPAA Compliance Audit Trail",
        desc: "Cryptographically signed logs for every model decision, output verification, and human-in-the-loop approval step.",
      },
    ],
    architectureHighlights: [
      { metric: "100K+", label: "RPS Concurrent Token Stream" },
      { metric: "<18ms", label: "Semantic RAG Retrieval" },
      { metric: "99.99%", label: "Uptime High-Availability SLA" },
      { metric: "Zero", label: "Third-Party Data Exposure" },
    ],
    useCases: [
      "Automated Claims Processing & Legal Document Parsing",
      "Financial Fraud Detection & Real-Time Risk Analysis",
      "Autonomous Customer Support & Intelligent Ticket Resolution",
      "Internal Knowledge Graph & Semantic Enterprise Search",
    ],
  },
  {
    slug: "apexpay-fintech-core",
    name: "ApexPay FinTech Core",
    badge: "DIGITAL PAYMENT GATEWAY",
    tagline: "Multi-Currency Digital Wallet & Instant Ledger Settlement Engine",
    shortDesc: "Multi-currency digital wallet, ledger reconciliation & instant settlement payment gateway with bank-grade security protocols.",
    description: "ApexPay FinTech Core provides financial institutions and fintech scaleups with a modular, PCI-DSS Level 1 compliant core banking and payment processing engine supporting multi-currency ledgers, instant UPI / SWIFT / SEPA routing, and tokenized wallet management.",
    category: "FinTech",
    pricingTier: "Transaction Percentage + Tiered SaaS Fee",
    deploymentModel: "Private Cloud / Dedicated Banking VPC",
    techStack: ["Go (Golang)", "PostgreSQL", "Kafka", "Docker", "gRPC", "React", "Terraform", "Vault"],
    keyFeatures: [
      {
        title: "Double-Entry Ledger Engine",
        desc: "Immutable, high-performance ledger engine capable of processing millions of debits and credits per second with strict ACID guarantees.",
      },
      {
        title: "Instant Multi-Currency FX Settlement",
        desc: "Real-time foreign exchange conversion and liquidity routing across INR ₹, USD $, EUR €, and GBP £ corridors.",
      },
      {
        title: "Biometric Fraud Detection AI",
        desc: "Machine-learning risk scoring pipeline evaluating transaction velocity, device fingerprinting, and geo-anomalies in sub-10ms.",
      },
      {
        title: "Tokenized Vault & Card Issuance",
        desc: "PCI-DSS compliant card tokenization engine supporting virtual card creation and contactless Apple Pay / Google Wallet integration.",
      },
    ],
    architectureHighlights: [
      { metric: "50,000+", label: "Transactions Per Second" },
      { metric: "PCI-DSS", label: "Level 1 Certified Architecture" },
      { metric: "<5ms", label: "Fraud Evaluation Latency" },
      { metric: "256-bit", label: "Hardware Security Module Encryption" },
    ],
    useCases: [
      "Neobanking Apps & Digital Wallet Platforms",
      "Cross-Border Remittance & Global Payroll Systems",
      "B2B Merchant Payment Gateway & QR Settlement",
      "Micro-Finance & Peer-to-Peer Peer Transfer Services",
    ],
  },
  {
    slug: "novacloud-kubernetes",
    name: "NovaCloud Kubernetes",
    badge: "CLOUD INFRASTRUCTURE",
    tagline: "Zero-Downtime Microservices Container Orchestration & Cost Optimization Suite",
    shortDesc: "Zero-downtime microservices container orchestration, multi-cloud mesh network, and automated FinOps cost optimization platform.",
    description: "NovaCloud Kubernetes simplifies enterprise container management by delivering multi-cluster deployment automation, eBPF-powered network observability, intelligent auto-scaling, and up to 45% infrastructure cloud cost savings across AWS, Azure, and Google Cloud.",
    category: "Cloud Infrastructure",
    pricingTier: "Per-Node Managed Subscription / Annual SLA",
    deploymentModel: "Multi-Cloud, Hybrid On-Premise (Bare Metal)",
    techStack: ["Kubernetes", "Helm", "Istio", "Prometheus", "Grafana", "eBPF", "Terraform", "ArgoCD"],
    keyFeatures: [
      {
        title: "GitOps Automated Continuous Delivery",
        desc: "Declarative application management synced with Git repositories using ArgoCD and Flux for instant rollback and zero-downtime blue/green releases.",
      },
      {
        title: "AI-Powered FinOps Auto-Scaling",
        desc: "Predictive node provisioning and spot-instance fallback reducing cloud compute costs without sacrificing application availability.",
      },
      {
        title: "Zero-Trust Mesh Security",
        desc: "Automated mTLS encryption for inter-service communication with granular micro-segmentation firewall policies.",
      },
      {
        title: "Unified Observability Dashboard",
        desc: "Real-time distributed tracing, metrics aggregation, and log visualization out-of-the-box.",
      },
    ],
    architectureHighlights: [
      { metric: "45%", label: "Average Cloud Bill Reduction" },
      { metric: "99.999%", label: "Cluster Uptime SLA Guarantee" },
      { metric: "<1s", label: "Automatic Failover Routing" },
      { metric: "Multi-Cloud", label: "AWS / Azure / GCP Native" },
    ],
    useCases: [
      "Enterprise Microservices Infrastructure",
      "High-Traffic E-Commerce & Streaming Scalability",
      "Multi-Cloud Disaster Recovery & Hot-Active Standby",
      "Regulated HealthTech & FinTech Cloud Hosting",
    ],
  },
  {
    slug: "scalestack-ai-crm",
    name: "ScaleStack AI CRM",
    badge: "SAAS & CRM PLATFORM",
    tagline: "Intelligent Autonomous Sales Agent & Customer Lifecycle Management",
    shortDesc: "Intelligent customer relationship management, autonomous AI sales SDR, and omnichannel pipeline predictive analytics.",
    description: "ScaleStack AI CRM reimagines enterprise sales operations by embedding conversational AI agents directly into your lead funnel. Automatically enrich contact data, score inbound prospects, schedule demo meetings, and predict deal velocity.",
    category: "SaaS & CRM",
    pricingTier: "Per-Seat Monthly / Annual Enterprise Tier",
    deploymentModel: "Cloud SaaS (Dedicated Tenant Available)",
    techStack: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "OpenAI API", "Twilio", "SendGrid", "Tailwind CSS"],
    keyFeatures: [
      {
        title: "Autonomous AI Sales SDR",
        desc: "AI sales agent that responds to inbound lead inquiries within 60 seconds, qualifies project scope, and schedules meetings into team calendars.",
      },
      {
        title: "Predictive Revenue Pipeline Analytics",
        desc: "Machine learning forecasting model estimating quarterly win probability based on deal activity and buyer engagement signals.",
      },
      {
        title: "Omnichannel Communications Hub",
        desc: "Unified inbox integrating Email, WhatsApp, LinkedIn, VoIP Phone Calls, and live web chat into a single timeline.",
      },
      {
        title: "Automated Data Enrichment",
        desc: "Real-time lookup of company tech stacks, headcount, decision-maker LinkedIn profiles, and revenue estimates.",
      },
    ],
    architectureHighlights: [
      { metric: "3.5x", label: "Increase in Qualified Demos" },
      { metric: "<60s", label: "Average Lead Response Time" },
      { metric: "98%", label: "AI Contact Enrichment Accuracy" },
      { metric: "100+", label: "Native App Integrations" },
    ],
    useCases: [
      "High-Growth B2B SaaS Sales Teams",
      "IT Services & Software Consulting Lead Capture",
      "Mid-Market & Enterprise Revenue Operations",
      "Customer Success & Expansion Lifecycle Management",
    ],
  },
];
