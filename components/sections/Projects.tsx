"use client";
import Image from "next/image";
import { BloomingSection } from "../ui/BloomingSection";

// Типы лучше вынести в отдельный файл types.ts в реальном проекте
interface Project {
  id: number;
  title: string;
  desc: string;
  imageUrl: string;
  githubLink: string;
  demoLink?: string;
  isHot?: boolean;
}

export function Projects({ data }: { data: Project[] }) {
  return (
    <section>
      <div className="flex items-center gap-4 mb-10">
        <h2 className="font-pixel text-5xl text-garden-cream">Квесты_</h2>
        <div className="h-0.5 bg-garden-dim flex-1 opacity-30"></div>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        {data.map((project, i) => (
          <BloomingSection
            key={project.id}
            title={project.title}
            index={i}
            badge={project.isHot ? "Hot" : undefined}
          >
            <div className="flex flex-col justify-between h-full">
              <div className="flex flex-col gap-4">
                <div className="aspect-video bg-zinc-900 border-b border-garden-dim flex items-center justify-center relative group-hover:border-garden-moss transition-colors">
                  <Image
                    src={project.imageUrl}
                    width={1280}
                    height={720}
                    alt={project.title}
                    className="object-cover w-full h-full"
                  />
                </div>
                <p className="text-zinc-400 text-sm leading-relaxed font-mono">
                  {project.desc}
                </p>
              </div>
              <div className="flex gap-4 pt-2 font-pixel text-lg justify-self-end">
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

                <a
                  className="text-zinc-500 hover:text-garden-cream underline cursor-pointer"
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Код
                </a>
              </div>
            </div>
          </BloomingSection>
        ))}
      </div>
    </section>
  );
}
