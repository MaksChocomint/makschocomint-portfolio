// BloomingSection component - улучшен для мобильных
import { AnimatedFlower } from "../art/AnimatedFlower";

interface BloomingSectionProps {
  children: React.ReactNode;
  title: string;
  badge?: string;
  index?: number;
}

export function BloomingSection({
  children,
  title,
  badge,
  index = 0,
}: BloomingSectionProps) {
  const delayClass = `delay-${index * 100}`;

  return (
    <section
      className={`group on-scroll flex flex-col justify-start relative p-4 sm:p-6 md:p-8 bg-garden-card/80 backdrop-blur-sm border border-garden-dim hover:border-garden-moss/60 transition-all duration-500 shadow-lg sm:shadow-xl ${delayClass}`}
    >
      {/* Декор - Цветы (скрываем на очень маленьких экранах) */}
      <div className="hidden sm:block absolute -top-3 -left-3 sm:-top-4 sm:-left-4 w-8 h-8 sm:w-10 sm:h-10 pointer-events-none">
        <AnimatedFlower color="#8cc57e" delay={0.2} />
      </div>
      <div className="hidden sm:block absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4 w-8 h-8 sm:w-10 sm:h-10 pointer-events-none rotate-180">
        <AnimatedFlower color="#e06c4d" delay={0.4} />
      </div>

      {badge && (
        <span
          className={`animate-slide-in-right opacity-0 absolute -top-2 right-3 sm:-top-3 sm:right-6 bg-garden-rust text-garden-dark px-2 py-0.5 sm:px-3 sm:py-1 font-pixel text-xs sm:text-sm uppercase tracking-wider shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] sm:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] ${delayClass}`}
          style={{ animationFillMode: "forwards" }}
        >
          {badge}
        </span>
      )}

      <h2
        className={`animate-slide-in-left opacity-0 font-pixel text-lg sm:text-xl text-garden-moss mb-4 sm:mb-6 flex items-end gap-2 sm:gap-3 leading-none ${delayClass}`}
        style={{ animationFillMode: "forwards" }}
      >
        <span className="text-garden-rust text-xl sm:text-2xl animate-pulse">
          {">"}
        </span>
        {title}
      </h2>

      <div
        className={`animate-fade-in h-full flex flex-col justify-between opacity-0 ${delayClass}`}
        style={{ animationFillMode: "forwards", animationDelay: "200ms" }}
      >
        {children}
      </div>
    </section>
  );
}
