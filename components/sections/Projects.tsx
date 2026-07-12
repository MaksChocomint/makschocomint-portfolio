"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { BloomingSection } from "../ui/BloomingSection";
import type { Project } from "@/data/projects";

const PROJECTS_PER_PAGE = 6;

export function Projects({ data }: { data: Project[] }) {
  const [currentPage, setCurrentPage] = useState(1);
  const sectionRef = useRef<HTMLElement | null>(null);
  const isFirstRender = useRef(true);
  // Флагман рендерится широкой карточкой над сеткой и не участвует в пагинации.
  const featured = data.find((project) => project.featured);
  const rest = data.filter((project) => !project.featured);
  const totalPages = Math.max(1, Math.ceil(rest.length / PROJECTS_PER_PAGE));
  const startIndex = (currentPage - 1) * PROJECTS_PER_PAGE;
  const visibleProjects = rest.slice(startIndex, startIndex + PROJECTS_PER_PAGE);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    sectionRef.current?.scrollIntoView({
      behavior: prefersReducedMotion ? "auto" : "smooth",
      block: "start",
    });
  }, [currentPage]);

  return (
    <section ref={sectionRef}>
      <div className="flex items-center gap-3 sm:gap-4 mb-8 sm:mb-10">
        <h2 className="font-pixel text-3xl sm:text-4xl md:text-5xl text-garden-cream">
          Квесты_
        </h2>
        <div className="h-0.5 bg-garden-dim flex-1 opacity-30"></div>
      </div>

      {featured && (
        <div className="mb-6 sm:mb-8">
          <BloomingSection title={featured.title} badge="Флагман">
            <div className="grid grid-cols-1 md:grid-cols-[1.25fr_1fr] gap-4 sm:gap-6">
              <a
                href={featured.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Открыть ${featured.title}`}
                className="block aspect-video bg-zinc-900 border border-garden-dim relative overflow-hidden group-hover:border-garden-moss transition-colors"
              >
                {featured.imageUrl && (
                  <Image
                    src={featured.imageUrl}
                    width={1600}
                    height={900}
                    alt={`${featured.title} — анализ аниме-вкуса по профилю Shikimori`}
                    className="object-cover w-full h-full transition-transform duration-500 hover:scale-[1.02]"
                    sizes="(max-width: 768px) 100vw, 640px"
                    priority
                  />
                )}
              </a>
              <div className="flex flex-col justify-between gap-4">
                <div className="space-y-3 sm:space-y-4">
                  <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed font-mono">
                    {featured.desc}
                  </p>
                  {featured.highlights && (
                    <ul className="space-y-1.5">
                      {featured.highlights.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2 font-mono text-xs sm:text-sm text-garden-cream/90"
                        >
                          <span className="text-garden-moss shrink-0">{">"}</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                  {featured.tags && (
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {featured.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 border border-garden-dim bg-zinc-900/60 font-mono text-[10px] sm:text-xs text-garden-moss"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
                {featured.demoLink && (
                  <a
                    className="text-center cursor-pointer w-full py-3 sm:py-2 bg-zinc-800 border border-garden-dim font-pixel text-lg sm:text-xl hover:bg-garden-rust hover:border-garden-rust transition-all duration-300"
                    href={featured.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Открыть сайт_
                  </a>
                )}
              </div>
            </div>
          </BloomingSection>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
        {visibleProjects.map((project, i) => {
          const hasLinks = Boolean(project.demoLink || project.githubLink);

          return (
            <BloomingSection
              key={project.id}
              title={project.title}
              index={i}
              badge={project.isHot ? "Hot" : undefined}
            >
              <div className="flex flex-col justify-between h-full">
                <div className="flex flex-col gap-3 sm:gap-4">
                  <div className="aspect-video bg-zinc-900 border-b border-garden-dim flex items-center justify-center relative group-hover:border-garden-moss transition-colors">
                    {project.imageUrl ? (
                      <Image
                        src={project.imageUrl}
                        width={960}
                        height={540}
                        alt={project.title}
                        className="object-cover w-full h-full"
                        sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 560px"
                        priority={currentPage === 1 && i < 2}
                      />
                    ) : (
                      <div className="flex h-full w-full flex-col items-center justify-center gap-3 bg-[radial-gradient(circle_at_top,_rgba(140,197,126,0.18),_rgba(18,18,18,0.95))] px-6 text-center">
                        <span className="font-pixel text-base sm:text-lg text-garden-cream">
                          {project.title}
                        </span>
                        <span className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.3em] text-garden-moss/80">
                          Скоро превью
                        </span>
                      </div>
                    )}
                  </div>
                  <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed font-mono">
                    {project.desc}
                  </p>
                </div>
                <div className="flex gap-3 sm:gap-4 pt-3 sm:pt-2 font-pixel text-base sm:text-lg justify-self-end flex-wrap items-center">
                  {project.demoLink && (
                    <a
                      className="text-garden-rust hover:text-garden-cream underline cursor-pointer"
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Демо
                    </a>
                  )}
                  {project.githubLink && (
                    <a
                      className="text-zinc-500 hover:text-garden-cream underline cursor-pointer"
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Код
                    </a>
                  )}
                  {!hasLinks && (
                    <span className="text-zinc-500 uppercase tracking-[0.2em] text-xs sm:text-sm">
                      В разработке
                    </span>
                  )}
                </div>
              </div>
            </BloomingSection>
          );
        })}
      </div>
      {totalPages > 1 && (
        <div className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          <button
            type="button"
            onClick={() => setCurrentPage((page) => Math.max(1, page - 1))}
            disabled={currentPage === 1}
            className="px-3 sm:px-4 py-2 border border-garden-dim bg-garden-card text-garden-cream font-pixel text-xs sm:text-sm transition-colors hover:border-garden-moss hover:text-garden-moss disabled:opacity-40 disabled:cursor-not-allowed"
          >
            Назад
          </button>
          {Array.from({ length: totalPages }, (_, index) => {
            const pageNumber = index + 1;

            return (
              <button
                key={pageNumber}
                type="button"
                onClick={() => setCurrentPage(pageNumber)}
                aria-label={`Перейти на страницу ${pageNumber}`}
                aria-current={currentPage === pageNumber ? "page" : undefined}
                className={`min-w-10 px-3 py-2 border font-pixel text-xs sm:text-sm transition-colors ${
                  currentPage === pageNumber
                    ? "border-garden-moss bg-garden-moss text-garden-dark"
                    : "border-garden-dim bg-garden-card text-garden-cream hover:border-garden-moss hover:text-garden-moss"
                }`}
              >
                {pageNumber}
              </button>
            );
          })}
          <button
            type="button"
            onClick={() =>
              setCurrentPage((page) => Math.min(totalPages, page + 1))
            }
            disabled={currentPage === totalPages}
            className="px-3 sm:px-4 py-2 border border-garden-dim bg-garden-card text-garden-cream font-pixel text-xs sm:text-sm transition-colors hover:border-garden-moss hover:text-garden-moss disabled:opacity-40 disabled:cursor-not-allowed"
          >
            Вперед
          </button>
        </div>
      )}
    </section>
  );
}
