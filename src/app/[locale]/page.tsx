"use client";

import { use, useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TechTicker from "@/components/TechTicker";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import PortfolioSection from "@/components/PortfolioSection";
import TechStackExplorer from "@/components/TechStackExplorer";
import WhyUsSection from "@/components/WhyUsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";
import CallBookingModal from "@/components/CallBookingModal";
import { TranslationProvider } from "@/context/TranslationContext";

export default function LocaleHome({ params }: { params: Promise<{ locale: string }> }) {
  const resolvedParams = use(params);
  const locale = resolvedParams?.locale || "en";
  const [isCallModalOpen, setIsCallModalOpen] = useState(false);

  const handleOpenBookCall = () => {
    setIsCallModalOpen(true);
  };

  const handleCloseBookCall = () => {
    setIsCallModalOpen(false);
  };

  return (
    <TranslationProvider defaultLocale={locale}>
      <main className="min-h-screen bg-white text-slate-900 selection:bg-[#A90706] selection:text-white font-sans antialiased">
        {/* Header / Navbar */}
        <Navbar onBookCallClick={handleOpenBookCall} />

        {/* Hero Section */}
        <Hero onBookCallClick={handleOpenBookCall} />

        {/* Infinite Tech Stack Marquee */}
        <TechTicker />

        {/* About Section */}
        <AboutSection />

        {/* Core Services Section */}
        <ServicesSection onBookCallClick={handleOpenBookCall} />

        {/* Featured Portfolio Insights */}
        <PortfolioSection />

        {/* Interactive Tech Stack Explorer */}
        <TechStackExplorer />

        {/* Why Choose Us & Agile 4-Step Process */}
        <WhyUsSection />

        {/* Client Testimonials */}
        <TestimonialsSection />

        {/* Footer */}
        <Footer />

        {/* Interactive Call Booking Modal Drawer */}
        <CallBookingModal
          isOpen={isCallModalOpen}
          onClose={handleCloseBookCall}
        />
      </main>
    </TranslationProvider>
  );
}
