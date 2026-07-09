// src/pages/LandingPage.tsx
import React from 'react';

// Layout
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { FloatingWhatsApp } from '../components/layout/FloatingWhatsApp';

// Sections
import { HeroSection } from '../components/sections/HeroSection';
import { AboutSection } from '../components/sections/AboutSection';
import { TreatmentsSection } from '../components/sections/TreatmentsSection';
import { DifferentialsSection } from '../components/sections/DifferentialsSection';
import { ResultsSection } from '../components/sections/ResultsSection';
import { TestimonialsSection } from '../components/sections/TestimonialsSection';
import { ProcessSection } from '../components/sections/ProcessSection';
import { FAQSection } from '../components/sections/FAQSection';
import { CTASection } from '../components/sections/CTASection';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-brand-light text-brand-dark font-sans selection:bg-brand-accent selection:text-white">
      <Header />
      
      <main>
        <HeroSection />
        <AboutSection />
        <TreatmentsSection />
        <DifferentialsSection />
        <ResultsSection />
        <TestimonialsSection />
        <ProcessSection />
        <FAQSection />
        <CTASection />
      </main>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}