'use client';

import React, { useState } from 'react';
import { Download, Check, FileText } from 'lucide-react';
import type { Locale } from '@/lib/portfolio-data';
import { PORTFOLIO_DATA } from '@/lib/portfolio-data';

interface DownloadCvButtonProps {
  locale: Locale;
  variant?: 'navbar' | 'hero' | 'contact-card';
  className?: string;
  id?: string;
}

export function DownloadCvButton({
  locale,
  variant = 'hero',
  className = '',
  id,
}: DownloadCvButtonProps) {
  const isAr = locale === 'ar';
  const [downloading, setDownloading] = useState(false);
  const { contact } = PORTFOLIO_DATA;

  const handleClick = () => {
    setDownloading(true);
    setTimeout(() => {
      setDownloading(false);
    }, 2200);
  };

  if (variant === 'navbar') {
    return (
      <a
        href={contact.cvUrl}
        download={contact.cvFilename}
        onClick={handleClick}
        id={id || 'nav-download-cv'}
        className={`group relative inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3.5 py-1.5 rounded-xl bg-[#141414] hover:bg-[#FF4B2B] text-[#F4F1EA] active:scale-95 transition-all duration-200 text-xs font-bold tracking-tight shadow-sm ${className}`}
        aria-label={isAr ? 'تحميل السيرة الذاتية (ملف PDF)' : 'Download CV (PDF)'}
        title={isAr ? 'تحميل السيرة الذاتية بنقرة واحدة (PDF)' : 'One-Click Download CV (PDF)'}
      >
        {downloading ? (
          <Check className="w-3.5 h-3.5 text-[#F4F1EA] animate-in zoom-in" aria-hidden="true" />
        ) : (
          <Download className="w-3.5 h-3.5 text-[#F4F1EA] transition-transform group-hover:translate-y-0.5" aria-hidden="true" />
        )}
        <span className="hidden xs:inline">
          {downloading
            ? isAr ? 'جارِ التحميل...' : 'Downloading...'
            : isAr ? 'السيرة الذاتية' : 'Download CV'}
        </span>
        <span className="xs:hidden">CV</span>
      </a>
    );
  }

  if (variant === 'contact-card') {
    return (
      <a
        href={contact.cvUrl}
        download={contact.cvFilename}
        onClick={handleClick}
        id={id || 'contact-download-cv-card'}
        className={`group p-5 rounded-2xl bg-[#141414] text-[#F4F1EA] hover:bg-[#FF4B2B] transition-all duration-300 flex flex-col justify-between gap-4 shadow-lg hover:shadow-xl active:scale-98 relative overflow-hidden ${className}`}
        aria-label={isAr ? 'تحميل السيرة الذاتية بصيغة PDF' : 'Download CV in PDF format'}
      >
        {/* Decorative corner block */}
        <div
          className="pointer-events-none absolute -bottom-6 ltr:-right-6 rtl:-left-6 w-20 h-20 bg-white/10 rounded-full blur-xl group-hover:bg-black/10 transition-colors"
          aria-hidden="true"
        />

        <div className="flex items-start justify-between w-full">
          <div className="w-12 h-12 rounded-xl bg-white/15 text-[#F4F1EA] flex items-center justify-center transition-transform group-hover:scale-105">
            {downloading ? (
              <Check className="w-5 h-5 text-white" aria-hidden="true" />
            ) : (
              <FileText className="w-5 h-5 text-[#F4F1EA]" aria-hidden="true" />
            )}
          </div>
          <span className="font-mono text-[10px] uppercase font-bold tracking-wider px-2 py-1 rounded bg-white/20 text-white">
            2026
          </span>
        </div>

        <div>
          <span className="text-xs font-mono uppercase tracking-wider text-white/70 block mb-1">
            {isAr ? 'ملف السيرة الذاتية' : 'Curriculum Vitae'}
          </span>
          <div className="flex items-center justify-between">
            <span className="text-base font-bold text-white block">
              {downloading
                ? isAr ? 'جارِ التحميل الآن...' : 'Downloading CV...'
                : isAr ? 'تحميل السيرة الذاتية' : 'Download CV'}
            </span>
            <div className="w-8 h-8 rounded-lg bg-white/20 group-hover:bg-white text-white group-hover:text-[#141414] flex items-center justify-center transition-all duration-200">
              <Download className="w-4 h-4 transition-transform group-hover:translate-y-0.5" aria-hidden="true" />
            </div>
          </div>
        </div>
      </a>
    );
  }

  // Default 'hero' variant: Bold, asymmetric geometric accent
  return (
    <a
      href={contact.cvUrl}
      download={contact.cvFilename}
      onClick={handleClick}
      id={id || 'hero-cta-cv'}
      className={`group relative inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3.5 bg-[#141414] hover:bg-[#FF4B2B] text-[#F4F1EA] font-bold text-sm tracking-wide transition-all shadow-md hover:shadow-xl active:scale-95 duration-150 select-none ${className}`}
      aria-label={isAr ? 'تحميل السيرة الذاتية (ملف PDF)' : 'Download CV (PDF)'}
      title={isAr ? 'تحميل السيرة الذاتية بنقرة واحدة' : 'One-Click Download CV'}
    >
      {downloading ? (
        <Check className="w-4 h-4 text-white" aria-hidden="true" />
      ) : (
        <Download className="w-4 h-4 transition-transform group-hover:-translate-y-0.5" aria-hidden="true" />
      )}
      <span>
        {downloading
          ? isAr ? 'جارِ التحميل...' : 'Downloading...'
          : isAr ? 'تحميل السيرة الذاتية' : 'Download CV'}
      </span>

      {/* Asymmetric geometric accent (design motif) */}
      <div
        className="pointer-events-none absolute -top-1 -right-1 w-2.5 h-2.5 bg-[#FF4B2B] group-hover:bg-[#141414] transition-colors"
        aria-hidden="true"
      />
    </a>
  );
}
