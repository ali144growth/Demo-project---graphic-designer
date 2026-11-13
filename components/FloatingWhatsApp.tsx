'use client';

import React from 'react';
import Image from 'next/image';
import type { Locale } from '@/lib/portfolio-data';
import { PORTFOLIO_DATA } from '@/lib/portfolio-data';

interface FloatingWhatsAppProps {
  locale: Locale;
}

export function FloatingWhatsApp({ locale }: FloatingWhatsAppProps) {
  const isAr = locale === 'ar';
  const { contact } = PORTFOLIO_DATA;

  return (
    <div
      id="floating-whatsapp-container"
      className={`fixed bottom-6 z-40 transition-all duration-300 ${
        isAr ? 'left-6' : 'right-6'
      }`}
    >
      <a
        href={contact.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        id="floating-whatsapp-button"
        aria-label={isAr ? 'تواصل معي مباشرة عبر واتساب' : 'Chat directly via WhatsApp'}
        className="group relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#FF4B2B] hover:bg-[#E03E20] text-white shadow-2xl transition-transform active:scale-95 duration-200 pulse-accent focus:outline-none"
      >
        {/* Thin Glass Outer Ring */}
        <div
          className="pointer-events-none absolute -inset-1.5 rounded-full border border-white/50 bg-white/20 backdrop-blur-sm -z-10 group-hover:scale-105 transition-transform"
          aria-hidden="true"
        />

        {/* WhatsApp Custom Icon */}
        <Image
          src="https://ik.imagekit.io/imgy4/Images%20used%20in%20websites/whatsapp%20(4).png"
          alt="WhatsApp"
          width={36}
          height={36}
          className="w-8 h-8 sm:w-9 sm:h-9 object-contain transition-transform group-hover:scale-110"
          priority
          referrerPolicy="no-referrer"
        />

        {/* Hover Tooltip Pill */}
        <span
          className={`absolute whitespace-nowrap px-3 py-1.5 rounded-full glass-panel text-xs font-bold text-[#141414] shadow-md opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none ${
            isAr ? 'left-full ml-3' : 'right-full mr-3'
          }`}
        >
          {isAr ? (
            <span className="inline-flex items-center gap-1.5">
              <span>واتساب</span>
              <bdi dir="ltr" className="font-sans tracking-normal font-semibold">+965 5500 7788</bdi>
            </span>
          ) : (
            'WhatsApp +965 5500 7788'
          )}
        </span>
      </a>
    </div>
  );
}
