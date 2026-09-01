import Image from "next/image";
import { BloomingSection } from "../ui/BloomingSection";
import type { CaseStudy } from "@/data/cases";

export function CommercialCases({ cases }: { cases: CaseStudy[] }) {
  const total = String(cases.length).padStart(2, "0");

  return (
    <section id="business-cases" className="scroll-mt-8 on-scroll">
      <div className="flex items-center gap-3 sm:gap-4 mb-5 sm:mb-6">
        <h2 className="font-pixel text-3xl sm:text-4xl md:text-5xl text-garden-cream">
          Сайты для бизнеса_
        </h2>
        <div className="h-0.5 bg-garden-dim flex-1 opacity-30" />
      </div>

      <div className="business-intro mb-8 sm:mb-10">
        <p className="font-pixel text-garden-moss text-sm sm:text-base">
          {cases.length} решений, которые можно открыть и проверить
        </p>
        <p className="font-mono text-sm text-zinc-400 max-w-2xl leading-relaxed">
          Здесь не макеты-картинки, а работающие сайты. Десять концепций сделаны
          для петербургских бизнесов, Flatpoint — полноценное веб-приложение.
          Кейсы показывают диапазон задач и стилей. Для вашего бизнеса могу
          разработать совершенно новую концепцию с нуля.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
        {cases.map((item, index) => (
          <BloomingSection
            key={item.slug}
            title={item.title}
            index={index % 4}
            badge={item.slug === "flatpoint" ? "Веб-приложение" : "Живое демо"}
          >
            <article className="flex h-full flex-col gap-4 sm:gap-5">
              <a
                className="business-case-image"
                href={item.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Открыть сайт ${item.title}`}
                style={{ "--case-accent": item.accent } as React.CSSProperties}
              >
                <Image
                  src={item.cover}
                  alt={item.imageAlt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 560px"
                  className="object-cover"
                  priority={index < 2}
                />
                <span className="business-case-image__open" aria-hidden="true">
                  открыть ↗
                </span>
              </a>

              <div className="flex items-center justify-between gap-4 font-mono text-[11px] sm:text-xs uppercase text-zinc-500">
                <span>{item.category}</span>
                <span className="shrink-0 text-garden-rust">
                  {String(index + 1).padStart(2, "0")}/{total}
                </span>
              </div>

              <p className="font-mono text-sm text-zinc-300 leading-relaxed">
                {item.summary}
              </p>

              <ul className="business-case-points" aria-label="Что сделано">
                {item.features.slice(0, 3).map((feature) => (
                  <li key={feature}>
                    <span aria-hidden="true">+</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="mt-auto grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                <a
                  className="pixel-button pixel-button--primary"
                  href={item.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Смотреть демо_
                </a>
                <a
                  className="pixel-button pixel-button--secondary"
                  href={`https://t.me/makschocomint?text=${encodeURIComponent(
                    `Здравствуйте! Я посмотрел проект ${item.title} и хочу обсудить сайт для своего бизнеса.`,
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Обсудить проект_
                </a>
              </div>
            </article>
          </BloomingSection>
        ))}
      </div>
    </section>
  );
}
