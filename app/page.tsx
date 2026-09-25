'use client';

import React, { useState, useEffect } from 'react';
import type { Locale } from '@/lib/portfolio-data';
import { Navbar } from '@/components/Navbar';
import { HeroSection } from '@/components/HeroSection';
import { WorkSection } from '@/components/WorkSection';
import { ContactSection } from '@/components/ContactSection';
import { FloatingWhatsApp } from '@/components/FloatingWhatsApp';

export default function HomePage() {
  const [locale, setLocale] = useState<Locale>('en');

  // Update root html dir and lang attribute whenever locale changes
  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute('dir', locale === 'ar' ? 'rtl' : 'ltr');
    root.setAttribute('lang', locale);
  }, [locale]);

  const toggleLocale = () => {
    setLocale((prev) => (prev === 'en' ? 'ar' : 'en'));
  };

  return (
    <div
      id="portfolio-root"
      dir={locale === 'ar' ? 'rtl' : 'ltr'}
      className="min-h-screen bg-[#F4F1EA] text-[#141414] relative selection:bg-[#FF4B2B] selection:text-[#F4F1EA]"
    >
      {/* Top Navigation */}
      <Navbar locale={locale} onToggleLocale={toggleLocale} />

      {/* Main Content: EXACTLY 3 Sections */}
      <main id="main-content">
        {/* Section 1: Hero */}
        <HeroSection locale={locale} />

        {/* Section 2: Work (Projects) */}
        <WorkSection locale={locale} />

        {/* Section 3: Contact */}
        <ContactSection locale={locale} />
      </main>

      {/* Floating WhatsApp Button (Corner Mirrored) */}
      <FloatingWhatsApp locale={locale} />
    </div>
  );
}
