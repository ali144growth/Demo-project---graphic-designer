'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ArrowUpRight, Eye } from 'lucide-react';
import type { Locale, Project } from '@/lib/portfolio-data';
import { PORTFOLIO_DATA } from '@/lib/portfolio-data';
import { ProjectModal } from './ProjectModal';

interface WorkSectionProps {
  locale: Locale;
}

export function WorkSection({ locale }: WorkSectionProps) {
  const isAr = locale === 'ar';
  const { projects } = PORTFOLIO_DATA;
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section
      id="work"
      aria-label="Work Section"
      className="relative w-full px-4 sm:px-6 lg:px-12 py-20 lg:py-28 overflow-hidden bg-[#F4F1EA]"
    >
      {/* Decorative Asymmetric Structural Color Blocks (Behind Masonry) */}
      <div
        className="pointer-events-none absolute top-1/4 ltr:left-0 rtl:right-0 w-32 md:w-64 h-96 bg-[#FF4B2B]/10 -z-10"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-1/3 ltr:right-4 rtl:left-4 w-48 h-48 bg-[#141414]/5 rounded-full -z-10"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 pb-6 border-b-2 border-[#141414] gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-3 h-3 bg-[#FF4B2B]" aria-hidden="true" />
              <span className="text-xs font-mono font-bold tracking-widest uppercase text-[#575752]">
                {isAr ? 'المشاريع والتطبيقات الأكاديمية' : 'Curated Works & Projects'}
              </span>
            </div>
            <h2
              id="work-section-title"
              className="font-display font-black text-4xl sm:text-6xl text-[#141414] tracking-tight uppercase"
            >
              {isAr ? 'الأعمال المختارة' : 'Selected Work'}
            </h2>
          </div>

          <div className="max-w-md text-sm text-[#575752]">
            <p>
              {isAr
                ? 'مجموعة من المشاريع الأكاديمية والتجريبية التي تعكس شغفي بالهوية البصرية والطباعة المعاصرة.'
                : 'Selected coursework, studio experiments, and personal projects exploring bilingual typography and print.'}
            </p>
          </div>
        </div>

        {/* Masonry Layout with Varied Sizes & Intentional Offsets */}
        <div
          id="projects-masonry-grid"
          className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-10 items-start"
        >
          {projects.map((project, index) => {
            const isFeatured = index === 0;
            const isFullSpan = project.offsetClass.includes('col-span-12');

            return (
              <article
                key={project.id}
                id={`project-card-${project.id}`}
                onClick={() => setSelectedProject(project)}
                className={`group relative cursor-pointer ${project.offsetClass} transition-all duration-300`}
              >
                {/* Asymmetric Background Accent (Micro-interaction: slides out on hover) */}
                <div
                  className="absolute -inset-2 bg-[#FF4B2B] opacity-0 group-hover:opacity-100 transition-all duration-200 -z-10 transform translate-x-0 translate-y-0 group-hover:translate-x-2 group-hover:translate-y-2"
                  aria-hidden="true"
                />

                {/* Main Card Frame with intentional rotation on physical spread */}
                <div
                  className={`relative flex flex-col bg-[#ECE8DE] border-2 border-[#141414] shadow-md transition-transform duration-300 group-hover:scale-[1.01] ${project.rotationClass}`}
                >
                  {/* Visual Container (Image-First) */}
                  <div className={`relative w-full ${project.aspect} overflow-hidden bg-[#141414]`}>
                    <Image
                      src={project.image}
                      alt={isAr ? project.titleAr : project.titleEn}
                      fill
                      sizes={
                        isFullSpan
                          ? '(max-width: 1280px) 100vw, 1200px'
                          : isFeatured
                          ? '(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 700px'
                          : '(max-width: 768px) 100vw, (max-width: 1200px) 40vw, 500px'
                      }
                      className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />

                    {/* Subtle Frosted Glass Category Tag (Sparingly applied over image) */}
                    <div className="absolute top-4 ltr:left-4 rtl:right-4 z-10">
                      <span className="glass-panel px-3 py-1.5 text-xs font-mono font-bold uppercase tracking-wider text-[#141414] border border-[#141414]/20 shadow-sm">
                        {isAr ? project.categoryAr : project.categoryEn}
                      </span>
                    </div>

                    {/* Hover Peek Prompt */}
                    <div className="absolute top-4 ltr:right-4 rtl:left-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      <div className="w-8 h-8 rounded-none bg-[#141414] text-[#F4F1EA] flex items-center justify-center shadow-md">
                        <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                      </div>
                    </div>
                  </div>

                  {/* Minimal Card Details (Card shows ONLY visual, name, tag, and one short line) */}
                  <div className="p-5 sm:p-6 bg-[#F4F1EA] border-t-2 border-[#141414] flex flex-col gap-2">
                    <div className="flex items-baseline justify-between gap-4">
                      <h3 className="font-display font-extrabold text-xl sm:text-2xl text-[#141414] tracking-tight group-hover:text-[#FF4B2B] transition-colors">
                        {isAr ? project.titleAr : project.titleEn}
                      </h3>
                      <span className="text-[11px] font-mono text-[#575752] shrink-0">
                        {isAr ? `٠${index + 1}` : `0${index + 1}`}
                      </span>
                    </div>

                    {/* One short line */}
                    <p className="text-xs sm:text-sm text-[#575752] leading-relaxed line-clamp-2">
                      {isAr ? project.subtitleAr : project.subtitleEn}
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      {/* Project Lightbox / Inspection Modal */}
      <ProjectModal
        project={selectedProject}
        locale={locale}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
