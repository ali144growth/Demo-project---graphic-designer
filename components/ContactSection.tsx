'use client';

import React from 'react';
import { Phone, MessageCircle, Mail, MapPin, Instagram, ExternalLink, ArrowUpRight } from 'lucide-react';
import type { Locale } from '@/lib/portfolio-data';
import { PORTFOLIO_DATA } from '@/lib/portfolio-data';

interface ContactSectionProps {
  locale: Locale;
}

export function ContactSection({ locale }: ContactSectionProps) {
  const isAr = locale === 'ar';
  const { contact, designer } = PORTFOLIO_DATA;

  return (
    <section
      id="contact"
      aria-label="Contact Section"
      className="relative w-full px-4 sm:px-6 lg:px-12 py-20 lg:py-28 overflow-hidden bg-[#F4F1EA]"
    >
      {/* Background Graphic Accents */}
      <div
        className="pointer-events-none absolute bottom-0 ltr:right-0 rtl:left-0 w-96 h-96 bg-[#FF4B2B] opacity-15 -z-10"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -top-12 ltr:-left-12 rtl:-right-12 w-64 h-64 bg-[#141414]/5 -z-10"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-5xl">
        {/* Section Heading */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center justify-center gap-2 mb-3">
            <span className="w-2.5 h-2.5 bg-[#FF4B2B]" aria-hidden="true" />
            <span className="text-xs font-mono font-bold tracking-widest uppercase text-[#575752]">
              {isAr ? 'تواصل معي' : 'Direct Inquiries'}
            </span>
          </div>
          <h2
            id="contact-section-title"
            className="font-display font-black text-4xl sm:text-6xl text-[#141414] tracking-tight uppercase"
          >
            {isAr ? 'لنبدأ الحديث' : 'Get in Touch'}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#575752] max-w-md mx-auto">
            {isAr
              ? 'متاحة لفرص التدريب الصيفي، المشاريع الطلابية، وتبادل الأفكار في التصميم.'
              : 'Open for internship inquiries, academic collaborations, and graphic design discussions.'}
          </p>
        </div>

        {/* SINGLE Glass Panel: Display-Only, Icons Over Labels, Minimal Text */}
        <div
          id="contact-glass-panel"
          className="relative glass-panel rounded-3xl p-6 sm:p-10 lg:p-12 border-2 border-[#141414]/15 shadow-xl backdrop-blur-lg"
        >
          {/* Subtle Graphic Corner Stamp */}
          <div
            className="absolute top-0 ltr:right-0 rtl:left-0 w-16 h-16 bg-[#FF4B2B] text-[#F4F1EA] flex items-center justify-center font-mono text-xs font-bold -z-0 rounded-bl-2xl rtl:rounded-bl-none rtl:rounded-br-2xl"
            aria-hidden="true"
          >
            {isAr ? '٢٠٢٦' : '2026'}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
            {/* Phone (tap-to-call) */}
            <a
              href={`tel:${contact.phoneRaw}`}
              id="contact-link-phone"
              className="group p-5 rounded-2xl bg-white/40 hover:bg-white border border-[#141414]/10 hover:border-[#FF4B2B] transition-all duration-200 flex flex-col items-start gap-3 active:scale-98"
            >
              <div className="w-12 h-12 rounded-xl bg-[#141414] text-[#F4F1EA] group-hover:bg-[#FF4B2B] flex items-center justify-center transition-colors">
                <Phone className="w-5 h-5" aria-hidden="true" />
              </div>
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-[#575752] block">
                  {isAr ? 'الهاتف' : 'Phone'}
                </span>
                <bdi
                  dir="ltr"
                  className="text-base font-bold text-[#141414] group-hover:text-[#FF4B2B] transition-colors block font-sans tracking-normal"
                >
                  +965 5500 7788
                </bdi>
              </div>
            </a>

            {/* WhatsApp (direct link) */}
            <a
              href={contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              id="contact-link-whatsapp"
              className="group p-5 rounded-2xl bg-white/40 hover:bg-white border border-[#141414]/10 hover:border-[#FF4B2B] transition-all duration-200 flex flex-col items-start gap-3 active:scale-98"
            >
              <div className="w-12 h-12 rounded-xl bg-[#141414] text-[#F4F1EA] group-hover:bg-[#FF4B2B] flex items-center justify-center transition-colors">
                <MessageCircle className="w-5 h-5" aria-hidden="true" />
              </div>
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-[#575752] block">
                  {isAr ? 'واتساب' : 'WhatsApp'}
                </span>
                <bdi
                  dir="ltr"
                  className="text-base font-bold text-[#141414] group-hover:text-[#FF4B2B] transition-colors block font-sans tracking-normal"
                >
                  +965 5500 7788
                </bdi>
              </div>
            </a>

            {/* Email */}
            <a
              href={`mailto:${contact.email}`}
              id="contact-link-email"
              className="group p-5 rounded-2xl bg-white/40 hover:bg-white border border-[#141414]/10 hover:border-[#FF4B2B] transition-all duration-200 flex flex-col items-start gap-3 active:scale-98"
            >
              <div className="w-12 h-12 rounded-xl bg-[#141414] text-[#F4F1EA] group-hover:bg-[#FF4B2B] flex items-center justify-center transition-colors">
                <Mail className="w-5 h-5" aria-hidden="true" />
              </div>
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-[#575752] block">
                  {isAr ? 'البريد الإلكتروني' : 'Email'}
                </span>
                <span className="text-sm font-bold text-[#141414] group-hover:text-[#FF4B2B] transition-colors break-all block">
                  {contact.email}
                </span>
              </div>
            </a>

            {/* Location (Display-Only) */}
            <div
              id="contact-info-location"
              className="p-5 rounded-2xl bg-white/40 border border-[#141414]/10 flex flex-col items-start gap-3"
            >
              <div className="w-12 h-12 rounded-xl bg-[#141414] text-[#F4F1EA] flex items-center justify-center">
                <MapPin className="w-5 h-5 text-[#FF4B2B]" aria-hidden="true" />
              </div>
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-[#575752] block">
                  {isAr ? 'الموقع' : 'Location'}
                </span>
                <span className="text-base font-bold text-[#141414] block">
                  {isAr ? contact.locationAr : contact.locationEn}
                </span>
              </div>
            </div>

            {/* Instagram Link */}
            <a
              href={contact.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              id="contact-link-instagram"
              className="group p-5 rounded-2xl bg-white/40 hover:bg-white border border-[#141414]/10 hover:border-[#FF4B2B] transition-all duration-200 flex flex-col items-start gap-3 active:scale-98"
            >
              <div className="w-12 h-12 rounded-xl bg-[#141414] text-[#F4F1EA] group-hover:bg-[#FF4B2B] flex items-center justify-center transition-colors">
                <Instagram className="w-5 h-5" aria-hidden="true" />
              </div>
              <div className="w-full flex items-center justify-between">
                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-[#575752] block">
                    Instagram
                  </span>
                  <span className="text-sm font-bold text-[#141414] group-hover:text-[#FF4B2B] transition-colors block dir-ltr">
                    {contact.instagramHandle}
                  </span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#575752] group-hover:text-[#FF4B2B] transition-colors" aria-hidden="true" />
              </div>
            </a>

            {/* Behance Link */}
            <a
              href={contact.behanceUrl}
              target="_blank"
              rel="noopener noreferrer"
              id="contact-link-behance"
              className="group p-5 rounded-2xl bg-white/40 hover:bg-white border border-[#141414]/10 hover:border-[#FF4B2B] transition-all duration-200 flex flex-col items-start gap-3 active:scale-98"
            >
              <div className="w-12 h-12 rounded-xl bg-[#141414] text-[#F4F1EA] group-hover:bg-[#FF4B2B] flex items-center justify-center transition-colors">
                <ExternalLink className="w-5 h-5" aria-hidden="true" />
              </div>
              <div className="w-full flex items-center justify-between">
                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-[#575752] block">
                    Behance
                  </span>
                  <span className="text-sm font-bold text-[#141414] group-hover:text-[#FF4B2B] transition-colors block dir-ltr">
                    {contact.behanceHandle}
                  </span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#575752] group-hover:text-[#FF4B2B] transition-colors" aria-hidden="true" />
              </div>
            </a>
          </div>

          {/* Minimal Student Colophon / Disclaimer */}
          <div className="mt-8 pt-6 border-t border-[#141414]/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#575752] font-mono">
            <div>
              {isAr
                ? 'فجر الغانم — طالبة تصميم جرافيك، الجامعة الأمريكية بالكويت'
                : 'Fajer Al-Ghanim — Graphic Design Student, American University of Kuwait'}
            </div>
            <div>
              {isAr ? 'جميع الحقوق محفوظة © ٢٠٢٦' : 'All rights reserved © 2026'}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
