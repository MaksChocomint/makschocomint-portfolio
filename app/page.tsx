import { Hero } from "@/components/sections/Hero";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { BloomingSection } from "@/components/ui/BloomingSection";
import { PixelCat } from "@/components/art/PixelCat";
import { TetrisBackground } from "@/components/ui/TetrisBackground";
import { ScrollObserver } from "@/components/ui/ScrollObserver";
import Image from "next/image";
import { SKILLS_DATA } from "@/data/skills";
import { PROJECTS_DATA } from "@/data/projects";
import { SERVICES_DATA } from "@/data/services";

export default function Home() {
  return (
    <>
      {/* Фоновый тетрис (клиентский) */}
      <TetrisBackground />

      {/* Компонент для анимаций по скроллу */}
      <ScrollObserver />

      <main className="max-w-6xl mx-auto px-6 py-24 space-y-32 relative z-10">
        {/* 1. Hero Section (SSR с CSS анимациями) */}
        <Hero />

        {/* 2. Skills Section (SSR с CSS анимациями) */}
        <Skills items={SKILLS_DATA} />

        {/* 3. Projects Section (SSR с CSS анимациями) */}
        <Projects data={PROJECTS_DATA} />

        {/* 4. Services Section (SSR с CSS анимациями) */}
        <section className="on-scroll">
          <div className="flex items-center gap-4 mb-10">
            <h2
              className="font-pixel text-5xl text-garden-cream animate-slide-in-left opacity-0"
              style={{ animationFillMode: "forwards" }}
            >
              Магазин_
            </h2>
            <div className="h-0.5 bg-garden-dim flex-1 opacity-30"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {SERVICES_DATA.map((service, idx) => (
              <BloomingSection
                key={service.title}
                title={service.title}
                index={idx}
              >
                <div className="flex justify-between items-start mb-4">
                  <Image
                    className="text-4xl animate-scale-in opacity-0"
                    style={{
                      animationFillMode: "forwards",
                      animationDelay: `${idx * 100 + 300}ms`,
                    }}
                    src={service.icon}
                    alt={service.title}
                    width={120}
                    height={120}
                  />
                  <div
                    className="font-pixel text-base text-white text-right mt-4 animate-slide-in-right opacity-0"
                    style={{
                      animationFillMode: "forwards",
                      animationDelay: `${idx * 100 + 300}ms`,
                    }}
                  >
                    <div>{service.price}</div>
                    {service.period && (
                      <div className="text-sm opacity-80">{service.period}</div>
                    )}
                  </div>
                </div>
                <button
                  className="cursor-pointer w-full py-2 bg-zinc-800 border border-garden-dim font-pixel text-xl hover:bg-garden-rust hover:border-garden-rust transition-all duration-300 animate-slide-in-up opacity-0"
                  style={{
                    animationFillMode: "forwards",
                    animationDelay: `${idx * 100 + 400}ms`,
                  }}
                >
                  Купить_
                </button>
              </BloomingSection>
            ))}
          </div>
        </section>

        {/* 5. Footer (SSR с CSS анимациями) */}
        <footer className="pt-10 pb-20 border-t border-garden-dim/30 text-center relative backdrop-blur-sm bg-garden-dark/30 on-scroll">
          <h2
            className="font-pixel text-xl mb-2 text-garden-moss animate-fade-in opacity-0"
            style={{ animationFillMode: "forwards" }}
          >
            Свяжитесь со мной_
          </h2>
          <div
            className="flex justify-center gap-8 font-pixel text-lg mt-6 animate-fade-in opacity-0"
            style={{ animationFillMode: "forwards", animationDelay: "200ms" }}
          >
            <a
              href="https://t.me/makschocomint"
              className="hover:text-garden-rust transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Telegram
            </a>
            <a
              href="https://github.com/makschocomint"
              className="hover:text-garden-rust transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
          </div>
          <div className="absolute right-1/2 md:right-10 translate-x-1/2 md:translate-0 -bottom-20  md:bottom-0 grayscale-50 hover:grayscale-0 transition-all">
            <PixelCat />
          </div>
        </footer>
      </main>
    </>
  );
}
