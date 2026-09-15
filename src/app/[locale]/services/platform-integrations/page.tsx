import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { TranslationProvider } from "@/context/TranslationContext";
import {
  Layers,
  Cpu,
  Workflow,
  Database,
  Cloud,
  CheckCircle2,
  ArrowRight,
  ShieldCheck
} from "lucide-react";

export const metadata: Metadata = {
  title: "BrosDev Solutions | Platform Integrations — Enterprise ERP, CRM & SaaS Ecosystems",
  description:
    "Consolidated enterprise platform integration services covering HubSpot, Odoo, SAP Commerce Cloud, Microsoft Power Apps, Zoho, WordPress, OpenCart, and cloud infrastructure.",
  openGraph: {
    title: "BrosDev Solutions | Platform Integrations — Enterprise ERP, CRM & SaaS Ecosystems",
    description:
      "Consolidated enterprise platform integration services covering HubSpot, Odoo, SAP Commerce Cloud, Microsoft Power Apps, Zoho, WordPress, OpenCart, and cloud infrastructure.",
  },
};

export default async function PlatformIntegrationsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const resolvedParams = await params;
  const locale = resolvedParams?.locale || "en";

  const platforms = [
    {
      category: "Enterprise CRM & Automation",
      items: [
        { name: "HubSpot", desc: "Custom CRM API integration, custom hublet modules, workflow automation, and transactional email synchronization." },
        { name: "Zoho Suite", desc: "Zoho CRM, Creator, and Analytics custom script integrations with real-time enterprise data pipelines." },
        { name: "Microsoft Power Apps", desc: "Low-code enterprise app development, Dataverse integration, and custom connector engineering." }
      ]
    },
    {
      category: "Enterprise ERP & Commerce Platforms",
      items: [
        { name: "Odoo ERP", desc: "Custom Odoo module development, Python backend customization, warehouse/POS integrations, and REST API sync." },
        { name: "SAP Commerce Cloud", desc: "Headless SAP Hybris/Commerce integration, enterprise product catalog management, and payment gateway orchestration." },
        { name: "OpenCart & WordPress", desc: "High-performance headless e-commerce builds, custom plugin development, and security hardening." }
      ]
    },
    {
      category: "Specialized Enterprise Platforms & Cloud",
      items: [
        { name: "DITAWorks Webtop", desc: "Structured DITA XML content management, documentation workflows, and automated publishing pipelines." },
        { name: "OVHcloud Infrastructure", desc: "EU data sovereignty compliance, bare-metal server orchestration, and hybrid cloud migrations." }
      ]
    }
  ];

  return (
    <TranslationProvider defaultLocale={locale}>
      <main className="min-h-screen bg-[#FAF8F5] text-slate-900 selection:bg-[#A90706] selection:text-white font-sans antialiased">
        <Navbar />

        {/* Hero Header */}
        <section className="pt-36 pb-20 border-b border-[#E2DDD5] bg-[#FAF8F5]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-[#E2DDD5] mb-6">
              <span className="w-2 h-2 bg-[#A90706]"></span>
              <span className="font-condensed text-xs font-black tracking-widest text-[#A90706] uppercase">
                // ENTERPRISE ECOSYSTEM CONNECTIVITY
              </span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-slate-900 tracking-tight leading-none uppercase mb-6 font-[var(--font-geist)]">
              PLATFORM INTEGRATIONS
            </h1>

            <p className="text-slate-700 text-lg sm:text-xl font-medium max-w-3xl leading-relaxed font-[var(--font-geist)]">
              Unify your software stack. We build custom API connectors, bi-directional sync pipelines, and bespoke extensions for enterprise CRM, ERP, Commerce, and Cloud platforms.
            </p>
          </div>
        </section>

        {/* Platform Categories */}
        <section className="py-20 bg-white border-b border-[#E2DDD5]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
            {platforms.map((group, idx) => (
              <div key={idx} className="space-y-6">
                <div className="border-b-2 border-slate-900 pb-3">
                  <span className="font-condensed text-xs font-black text-[#A90706] uppercase tracking-widest block mb-1">
                    // INTEGRATION DOMAIN
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-black text-slate-900 uppercase tracking-tight font-[var(--font-geist)]">
                    {group.category}
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {group.items.map((item, itemIdx) => (
                    <div key={itemIdx} className="bg-[#FAF8F5] border-2 border-slate-900 p-6 flex flex-col justify-between space-y-4 shadow-md">
                      <div>
                        <div className="flex items-center gap-2 mb-3">
                          <Workflow className="w-5 h-5 text-[#A90706]" />
                          <h3 className="font-condensed text-xl font-black text-slate-900 uppercase">
                            {item.name}
                          </h3>
                        </div>
                        <p className="text-xs text-slate-700 leading-relaxed">
                          {item.desc}
                        </p>
                      </div>

                      <div className="pt-2 border-t border-[#E2DDD5]">
                        <div className="flex items-center gap-1.5 text-[11px] font-condensed font-bold text-emerald-700 uppercase">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                          <span>ENTERPRISE CERTIFIED PATTERNS</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-[#FAF8F5] border-b border-[#E2DDD5]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 uppercase tracking-tight font-[var(--font-geist)]">
              NEED A CUSTOM API CONNECTOR OR PLATFORM INTEGRATION?
            </h2>
            <p className="text-slate-700 text-base max-w-2xl mx-auto">
              Our integration architects connect disparate legacy systems, SaaS tools, and cloud APIs into unified real-time data streams.
            </p>
            <div className="pt-2">
              <Link
                href={`/${locale}/book-consultation`}
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#A90706] hover:bg-[#880504] text-white font-condensed text-xs font-bold uppercase tracking-widest transition-colors"
              >
                <span>REQUEST INTEGRATION AUDIT</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </TranslationProvider>
  );
}
