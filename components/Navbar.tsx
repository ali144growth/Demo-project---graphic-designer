'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Globe } from 'lucide-react';
import type { Locale } from '@/lib/portfolio-data';
import { DownloadCvButton } from '@/components/DownloadCvButton';

interface NavbarProps {
  locale: Locale;
  onToggleLocale: () => void;
}

export function Navbar({ locale, onToggleLocale }: NavbarProps) {
  const isAr = locale === 'ar';
  const [imageError, setImageError] = useState(false);

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
          {!imageError ? (
            <Image
              src="https://ik.imagekit.io/imgy4/Images%20used%20in%20websites/Pink%20and%20White%20Aesthetic%20Elegant%20Logo.png"
              alt={isAr ? 'شعار فجر الغانم' : 'Fajer Al-Ghanim Logo'}
              width={48}
              height={48}
              className="w-10 h-10 sm:w-12 sm:h-12 object-contain shrink-0 transition-transform group-hover:scale-105 duration-200"
              priority
              referrerPolicy="no-referrer"
              onError={() => setImageError(true)}
            />
          ) : (
            <span className="font-serif font-black text-xl tracking-tighter text-[#e11d48]">
              {isAr ? 'ف.غ' : 'FG'}
            </span>
          )}

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

          {/* One-Click Downloadable CV Button */}
          <DownloadCvButton locale={locale} variant="navbar" />

          {/* Bilingual Toggle Button: In mobile view only icon; on desktop shows EN or AR */}
          <button
            id="locale-toggle-button"
            type="button"
            onClick={onToggleLocale}
            className="flex items-center justify-center p-2 sm:px-3 sm:py-1.5 sm:gap-2 rounded-xl bg-[#141414]/5 hover:bg-[#141414]/10 active:scale-95 border border-[#141414]/15 transition-all text-xs font-bold text-[#141414]"
            aria-label={isAr ? 'Switch to English' : 'التحويل إلى العربية'}
            title={isAr ? 'Switch to English' : 'التحويل إلى العربية'}
          >
            <Globe className="w-4 h-4 sm:w-3.5 sm:h-3.5 text-[#FF4B2B] shrink-0" aria-hidden="true" />
            <span className="font-mono font-bold tracking-wider hidden sm:inline">
              {isAr ? 'EN' : 'AR'}
            </span>
          </button>
        </div>
      </nav>
    </header>
  );
}
