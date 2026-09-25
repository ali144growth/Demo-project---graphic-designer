'use client';

import React from 'react';
import Image from 'next/image';
import { Globe } from 'lucide-react';
import type { Locale } from '@/lib/portfolio-data';

interface NavbarProps {
  locale: Locale;
  onToggleLocale: () => void;
}

export function Navbar({ locale, onToggleLocale }: NavbarProps) {
  const isAr = locale === 'ar';

  return (
    <header className="sticky top-0 z-40 w-full px-4 sm:px-6 lg:px-12 pt-4 pb-2 transition-all">
      <nav
        id="main-navigation"
        className="mx-auto max-w-7xl flex items-center justify-between px-4 sm:px-6 py-3 rounded-2xl glass-panel shadow-sm"
        aria-label="Main Navigation"
      >
        {/* Brand / Logo */}
        <a
          href="#"
          id="brand-logo"
          className="group flex items-center gap-3 focus:outline-none"
          aria-label={isAr ? 'الصفحة الرئيسية لفجر الغانم' : "Fajer Al-Ghanim Home"}
        >
          <div className="relative flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-xl overflow-hidden bg-white/70 border border-[#141414]/15 shadow-sm transition-transform group-hover:scale-105 duration-200 shrink-0">
            <Image
              src="https://paleturquoise-alligator-394015.hostingersite.com/wp-content/uploads/2026/09/Pink-and-White-Aesthetic-Elegant-Logo.png"
              alt={isAr ? 'شعار فجر الغانم' : 'Fajer Al-Ghanim Logo'}
              fill
              sizes="(max-width: 640px) 44px, 48px"
              className="object-contain p-0.5"
              priority
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="flex flex-col">
            <span className="font-bold text-sm tracking-tight text-[#141414] leading-tight group-hover:text-[#FF4B2B] transition-colors">
              {isAr ? 'فجر الغانم' : 'Fajer Al-Ghanim'}
            </span>
            <span className="text-[11px] text-[#575752] leading-tight">
              {isAr ? 'طالبة تصميم جرافيك · AUK' : 'Design Student · AUK'}
            </span>
          </div>
        </a>

        {/* Navigation Actions */}
        <div className="flex items-center gap-2 sm:gap-4">
          <a
            href="#work"
            id="nav-link-work"
            className="hidden sm:inline-flex items-center px-3.5 py-1.5 text-xs font-semibold tracking-wide uppercase text-[#141414] hover:text-[#FF4B2B] transition-colors"
          >
            {isAr ? 'الأعمال' : 'Work'}
          </a>

          <a
            href="#contact"
            id="nav-link-contact"
            className="hidden sm:inline-flex items-center px-3.5 py-1.5 text-xs font-semibold tracking-wide uppercase text-[#141414] hover:text-[#FF4B2B] transition-colors"
          >
            {isAr ? 'التواصل' : 'Contact'}
          </a>

          {/* Bilingual Toggle Button */}
          <button
            id="locale-toggle-button"
            type="button"
            onClick={onToggleLocale}
            className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#141414]/5 hover:bg-[#141414]/10 active:scale-95 border border-[#141414]/15 transition-all text-xs font-bold text-[#141414]"
            aria-label={isAr ? 'Switch to English' : 'التحويل إلى العربية'}
          >
            <Globe className="w-3.5 h-3.5 text-[#FF4B2B]" aria-hidden="true" />
            <span className="tracking-wide">
              {isAr ? 'EN' : 'عربي'}
            </span>
            <span className="text-[10px] uppercase font-mono px-1 py-0.5 rounded bg-[#FF4B2B] text-white">
              {locale.toUpperCase()}
            </span>
          </button>
        </div>
      </nav>
    </header>
  );
}
