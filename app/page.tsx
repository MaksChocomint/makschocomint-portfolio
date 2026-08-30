import Image from "next/image";
import { Hero } from "@/components/sections/Hero";
import { CommercialCases } from "@/components/sections/CommercialCases";
import { Process } from "@/components/sections/Process";
import { ServiceOffer } from "@/components/sections/ServiceOffer";
import { Contact } from "@/components/sections/Contact";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { BloomingSection } from "@/components/ui/BloomingSection";
import { LazyPixelCat } from "@/components/art/LazyPixelCat";
import { TetrisBackground } from "@/components/ui/TetrisBackground";
import { ScrollObserver } from "@/components/ui/ScrollObserver";
import { CASE_STUDIES } from "@/data/cases";
import { SKILLS_DATA } from "@/data/skills";
import { PROJECTS_DATA } from "@/data/projects";
import { SERVICES_DATA } from "@/data/services";

export default function Home() {
  return (
    <>
      <TetrisBackground />
      <ScrollObserver />

      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-24 space-y-20 sm:space-y-32 relative z-10">
        <Hero />

        <CommercialCases cases={CASE_STUDIES} />

        <section id="prices" className="on-scroll scroll-mt-8">
          <div className="flex items-center gap-3 sm:gap-4 mb-5 sm:mb-6">
            <h2 className="font-pixel text-3xl sm:text-4xl md:text-5xl text-garden-cream">
              Форматы работы_
            </h2>
            <div className="h-0.5 bg-garden-dim flex-1 opacity-30" />
          </div>
          <p className="font-mono text-sm text-zinc-400 max-w-2xl leading-relaxed mb-8 sm:mb-10">
            Точная стоимость зависит от материалов и функций. До старта фиксируем
            состав, срок и цену, чтобы результат был понятен обеим сторонам.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
            {SERVICES_DATA.map((service, index) => (
              <BloomingSection
                key={service.title}
                title={service.title}
                index={index}
              >
                <div className="flex h-full flex-col">
                  <div className="flex items-start justify-between gap-4 mb-5">
                    <Image
                      className="w-16 h-16 sm:w-20 sm:h-20"
                      src={service.icon}
                      alt=""
                      width={80}
                      height={80}
                      loading="lazy"
                    />
                    <div className="font-pixel text-sm sm:text-base text-white text-right leading-relaxed">
                      <div>{service.price}</div>
                      {service.period && (
                        <div className="text-xs text-zinc-400 mt-1">
                          {service.period}
                        </div>
                      )}
                    </div>
                  </div>
                  <p className="font-mono text-sm text-zinc-400 leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <a
                    className="pixel-button pixel-button--secondary mt-auto"
                    href={`https://t.me/makschocomint?text=${encodeURIComponent(
                      `Здравствуйте! Хочу обсудить формат «${service.title}».`,
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Обсудить_
                  </a>
                </div>
              </BloomingSection>
            ))}
          </div>

          <ServiceOffer />
        </section>

        <Process />

        <section className="portfolio-depth on-scroll">
          <p className="font-pixel text-garden-rust text-xs mb-3">ПОД КАПОТОМ</p>
          <h2 className="font-pixel text-xl sm:text-2xl text-garden-cream leading-relaxed max-w-3xl">
            Не только красивые страницы: умею собирать сервисы, интеграции и
            сложную логику_
          </h2>
        </section>

        <Skills items={SKILLS_DATA} />
        <Projects data={PROJECTS_DATA} />

        <Contact />

        <footer className="pt-8 sm:pt-10 pb-16 sm:pb-20 border-t border-garden-dim/30 text-center relative backdrop-blur-sm bg-garden-dark/30 on-scroll">
          <h2 className="font-pixel text-lg sm:text-xl mb-2 text-garden-moss">
            Максим Иванов · веб-разработчик_
          </h2>
          <p className="font-mono text-xs sm:text-sm text-zinc-500 mb-6">
            Санкт-Петербург · работаю с проектами по всей России
          </p>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-8 font-pixel text-sm sm:text-base">
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
          <div className="relative mt-12 mx-auto w-fit sm:mt-16 sm:absolute sm:right-1/2 sm:translate-x-1/2 md:right-10 md:translate-x-0 sm:-bottom-20 md:bottom-0 transition-all">
            <LazyPixelCat className="scale-90 sm:scale-100" />
          </div>
        </footer>
      </main>
    </>
  );
}
