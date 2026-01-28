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
      {/* Фоновый тетрис (упрощаем на мобильных) */}
      <TetrisBackground />

      {/* Компонент для анимаций по скроллу */}
      <ScrollObserver />

      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-24 space-y-20 sm:space-y-32 relative z-10">
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. Skills Section */}
        <Skills items={SKILLS_DATA} />

        {/* 3. Projects Section */}
        <Projects data={PROJECTS_DATA} />

        {/* 4. Services Section */}
        <section className="on-scroll">
          <div className="flex items-center gap-3 sm:gap-4 mb-8 sm:mb-10">
            <h2
              className="font-pixel text-3xl sm:text-4xl md:text-5xl text-garden-cream animate-slide-in-left opacity-0"
              style={{ animationFillMode: "forwards" }}
            >
              Магазин_
            </h2>
            <div className="h-0.5 bg-garden-dim flex-1 opacity-30"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {SERVICES_DATA.map((service, idx) => (
              <BloomingSection
                key={service.title}
                title={service.title}
                index={idx}
              >
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4 gap-4">
                  <div className="flex items-center justify-between sm:block">
                    <Image
                      className="text-4xl animate-scale-in opacity-0 w-20 h-20 sm:w-24 sm:h-24"
                      style={{
                        animationFillMode: "forwards",
                        animationDelay: `${idx * 100 + 300}ms`,
                      }}
                      src={service.icon}
                      alt={service.title}
                      width={96}
                      height={96}
                      priority={idx < 2}
                    />
                    <div className="sm:hidden font-pixel text-base text-white text-right">
                      <div>{service.price}</div>
                      {service.period && (
                        <div className="text-sm opacity-80">
                          {service.period}
                        </div>
                      )}
                    </div>
                  </div>
                  <div
                    className="hidden sm:block font-pixel text-base text-white text-right mt-4 animate-slide-in-right opacity-0"
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
                <div className="mt-auto">
                  <a
                    className="text-center cursor-pointer w-full py-3 sm:py-2 bg-zinc-800 border border-garden-dim font-pixel text-lg sm:text-xl hover:bg-garden-rust hover:border-garden-rust transition-all duration-300 animate-slide-in-up opacity-0 block"
                    style={{
                      animationFillMode: "forwards",
                      animationDelay: `${idx * 100 + 400}ms`,
                    }}
                    href="https://t.me/makschocomint"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Купить_
                  </a>
                </div>
              </BloomingSection>
            ))}
          </div>
        </section>

        {/* 5. Footer */}
        <footer className="pt-8 sm:pt-10 pb-16 sm:pb-20 border-t border-garden-dim/30 text-center relative backdrop-blur-sm bg-garden-dark/30 on-scroll">
          <h2
            className="font-pixel text-lg sm:text-xl mb-4 sm:mb-2 text-garden-moss animate-fade-in opacity-0"
            style={{ animationFillMode: "forwards" }}
          >
            Свяжитесь со мной_
          </h2>
          <div
            className="flex flex-wrap justify-center gap-4 sm:gap-8 font-pixel text-base sm:text-lg mt-6 animate-fade-in opacity-0"
            style={{ animationFillMode: "forwards", animationDelay: "200ms" }}
          >
            <a
              href="https://t.me/makschocomint"
              className="hover:text-garden-rust transition-colors px-2 py-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              Telegram
            </a>
            <a
              href="https://github.com/makschocomint"
              className="hover:text-garden-rust transition-colors px-2 py-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
          </div>
          <div className="relative mt-12 sm:mt-16 sm:absolute sm:right-1/2 sm:translate-x-1/2 md:right-10 md:translate-x-0 sm:-bottom-20 md:bottom-0 grayscale-50 hover:grayscale-0 transition-all">
            <PixelCat className="scale-90 sm:scale-100" />
          </div>
        </footer>
      </main>
    </>
  );
}
