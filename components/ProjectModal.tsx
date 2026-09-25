'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import { X, ArrowUpRight } from 'lucide-react';
import type { Locale, Project } from '@/lib/portfolio-data';

interface ProjectModalProps {
  project: Project | null;
  locale: Locale;
  onClose: () => void;
}

export function ProjectModal({ project, locale, onClose }: ProjectModalProps) {
  const isAr = locale === 'ar';

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-10 bg-[#141414]/80 backdrop-blur-md transition-opacity"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto bg-[#F4F1EA] border-2 border-[#141414] shadow-2xl p-6 sm:p-8 flex flex-col gap-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between border-b border-[#141414]/15 pb-4">
          <div className="flex items-center gap-3">
            <span className="w-3 h-3 bg-[#FF4B2B]" aria-hidden="true" />
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#575752]">
              {isAr ? project.categoryAr : project.categoryEn}
            </span>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="flex items-center justify-center w-10 h-10 bg-[#141414] hover:bg-[#FF4B2B] text-[#F4F1EA] transition-colors rounded-none focus:outline-none"
            aria-label={isAr ? 'إغلاق المعاينة' : 'Close preview'}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Project Header in Modal */}
        <div>
          <h2
            id="modal-project-title"
            className="font-display font-extrabold text-2xl sm:text-4xl text-[#141414] tracking-tight uppercase"
          >
            {isAr ? project.titleAr : project.titleEn}
          </h2>
          <p className="mt-2 text-base text-[#575752] font-medium">
            {isAr ? project.subtitleAr : project.subtitleEn}
          </p>
          <p className="mt-1 text-xs text-[#FF4B2B] font-mono font-semibold">
            {isAr ? project.academicAr : project.academicEn}
          </p>
        </div>

        {/* Main Artwork Large Display */}
        <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] bg-[#141414] overflow-hidden border border-[#141414]">
          <Image
            src={project.image}
            alt={isAr ? project.titleAr : project.titleEn}
            fill
            sizes="(max-width: 1280px) 100vw, 1200px"
            className="object-cover object-center"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Minimal Bottom Info Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-2 border-t border-[#141414]/10 text-xs text-[#575752]">
          <div className="flex items-center gap-2">
            <span className="font-mono">{isAr ? 'لوحة الألوان:' : 'Color Palette:'}</span>
            <div className="flex items-center gap-1.5">
              {project.palette.map((hex, i) => (
                <div
                  key={i}
                  className="w-4 h-4 border border-[#141414]/20"
                  style={{ backgroundColor: hex }}
                  title={hex}
                />
              ))}
            </div>
          </div>

          <div className="font-mono text-[11px]">
            {isAr ? 'أعمال طالبة — الجامعة الأمريكية بالكويت' : 'Student Coursework — AUK'}
          </div>
        </div>
      </div>
    </div>
  );
}
