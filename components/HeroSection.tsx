'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import type { Locale } from '@/lib/portfolio-data';
import { PORTFOLIO_DATA } from '@/lib/portfolio-data';

interface HeroSectionProps {
  locale: Locale;
}

export function HeroSection({ locale }: HeroSectionProps) {
  const isAr = locale === 'ar';
  const { designer } = PORTFOLIO_DATA;

  return (
    <section
      id="hero"
      aria-label="Hero Section"
      className="relative w-full min-h-[calc(100vh-5rem)] flex flex-col justify-center px-4 sm:px-6 lg:px-12 py-10 lg:py-16 overflow-hidden"
    >
      {/* Background Graphic Accents: Asymmetric Color-Block & Print Grid Marks */}
      <div
        className="pointer-events-none absolute -top-16 ltr:-right-16 rtl:-left-16 w-72 sm:w-96 h-72 sm:h-96 bg-[#FF4B2B] opacity-90 rounded-none transform rotate-12 -z-10"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-10 ltr:left-8 rtl:right-8 w-48 h-32 bg-[#141414]/5 -z-10"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-7xl w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-center">
          
          {/* Main Typography Column (Off-grid, breaks out into image) */}
          <div className="lg:col-span-7 flex flex-col justify-center z-20">
            {/* Academic Status Tag */}
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-2.5 h-2.5 bg-[#FF4B2B]" aria-hidden="true" />
              <p
                id="hero-status-pill"
                className="text-xs sm:text-sm font-bold tracking-tight uppercase text-[#575752]"
              >
                {isAr ? designer.statusAr : designer.statusEn}
              </p>
            </div>

            {/* Oversized Expressive Display Type */}
            <h1
              id="hero-designer-name"
              className="font-display font-black text-5xl sm:text-7xl lg:text-8xl xl:text-9xl tracking-tighter text-[#141414] leading-[0.9] sm:leading-[0.88] uppercase select-none"
            >
              {isAr ? (
                <span className="block font-bold tracking-normal text-6xl sm:text-8xl lg:text-9xl text-[#141414]">
                  فجر <br />
                  <span className="text-[#FF4B2B]">الغانم</span>
                </span>
              ) : (
                <>
                  <span className="block">FAJER</span>
                  <span className="block text-[#FF4B2B] transition-transform hover:translate-x-2 duration-300">
                    AL-GHANIM
                  </span>
                </>
              )}
            </h1>

            {/* Single Short Line Max */}
            <div className="mt-6 sm:mt-8 max-w-xl">
              <p
                id="hero-tagline"
                className="text-lg sm:text-2xl font-medium text-[#141414] leading-snug border-l-4 rtl:border-l-0 rtl:border-r-4 border-[#FF4B2B] pl-4 rtl:pl-0 rtl:pr-4"
              >
                {isAr ? designer.oneLinerAr : designer.oneLinerEn}
              </p>
            </div>

            {/* CTA Buttons (Exactly 2: Primary view work + Secondary contact) */}
            <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4">
              {/* Primary CTA (Solid Accent) */}
              <a
                href="#work"
                id="hero-cta-primary"
                className="group relative inline-flex items-center justify-center gap-3 px-7 py-3.5 bg-[#FF4B2B] hover:bg-[#E03E20] text-[#F4F1EA] font-bold text-sm tracking-wide transition-all shadow-lg hover:shadow-xl active:scale-95 duration-150"
              >
                <span>{isAr ? 'شاهدي أعمالي' : 'View My Work'}</span>
                <ArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-1" aria-hidden="true" />
                {/* Micro geometric accent */}
                <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-[#141414]" aria-hidden="true" />
              </a>

              {/* Secondary CTA (Glass / Outline) */}
              <a
                href="#contact"
                id="hero-cta-secondary"
                className="group inline-flex items-center justify-center gap-3 px-7 py-3.5 glass-panel hover:bg-white/80 text-[#141414] font-bold text-sm tracking-wide transition-all border border-[#141414]/20 hover:border-[#141414] active:scale-95 duration-150"
              >
                <span>{isAr ? 'تواصلي معي' : 'Get in Touch'}</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 rtl:group-hover:-translate-x-0.5" aria-hidden="true" />
              </a>
            </div>

            {/* Quick Context Metadata */}
            <div className="mt-10 pt-6 border-t border-[#141414]/15 flex flex-wrap items-center gap-6 text-xs text-[#575752] font-mono">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF4B2B]" />
                <span>{isAr ? 'جامعة الكويت الأمريكية' : 'American University of Kuwait'}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#141414]" />
                <span>{isAr ? 'دفعة ٢٠٢٦' : 'Class of 2026'}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#575752]" />
                <span>{isAr ? 'مدينة الكويت' : 'Kuwait City'}</span>
              </div>
            </div>
          </div>

          {/* Layered Off-Grid Visual Composition */}
          <div className="lg:col-span-5 relative mt-4 lg:mt-0 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md sm:max-w-lg lg:max-w-none">
              
              {/* Back Solid Accent Rectangle */}
              <div
                className="absolute -top-6 ltr:-left-6 rtl:-right-6 w-full h-full bg-[#FF4B2B] -z-10 transform -rotate-2"
                aria-hidden="true"
              />

              {/* Offset Charcoal Card Block */}
              <div
                className="absolute -bottom-4 ltr:-right-4 rtl:-left-4 w-3/4 h-3/4 bg-[#141414] -z-10"
                aria-hidden="true"
              />

              {/* Personal Visual Frame */}
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#ECE8DE] border-2 border-[#141414] shadow-2xl transition-transform hover:scale-[1.01] duration-300">
                <Image
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000&auto=format&fit=crop"
                  alt={isAr ? 'صورة فجر الغانم الشخصية في استوديو التصميم' : 'Fajer Al-Ghanim in design studio'}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                  className="object-cover object-center grayscale contrast-125 hover:grayscale-0 transition-all duration-700"
                  priority
                  referrerPolicy="no-referrer"
                />

                {/* Print Registration / Crop Mark Details (Design Field motif) */}
                <div className="pointer-events-none absolute top-3 left-3 flex items-center gap-1.5">
                  <div className="w-3 h-0.5 bg-[#F4F1EA]" />
                  <div className="w-0.5 h-3 bg-[#F4F1EA]" />
                </div>
                <div className="pointer-events-none absolute bottom-3 right-3 flex items-center gap-1.5">
                  <div className="w-3 h-0.5 bg-[#F4F1EA]" />
                  <div className="w-0.5 h-3 bg-[#F4F1EA]" />
                </div>

                {/* Quiet Frosted Glass Stamp */}
                <div className="absolute bottom-4 ltr:left-4 rtl:right-4 max-w-[80%] glass-panel px-3.5 py-2 rounded-lg border border-white/30 text-xs">
                  <span className="block font-bold text-[#141414] leading-tight">
                    {isAr ? 'فجر الغانم' : 'Fajer Al-Ghanim'}
                  </span>
                  <span className="block text-[10px] text-[#575752] font-mono leading-tight">
                    {isAr ? 'طالبة — خريف ٢٠٢٥ / ربيع ٢٠٢٦' : 'Student Portfolio · 2025–2026'}
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
