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
      className={`group on-scroll flex flex-col justify-start relative p-8 bg-garden-card/80 backdrop-blur-sm border border-garden-dim hover:border-garden-moss/60 transition-all duration-500 shadow-xl ${delayClass}`}
    >
      {/* Декор - Цветы */}
      {/* Декор - Цветы */}
      <div className="absolute -top-5 -left-5 w-10 h-10 pointer-events-none">
        <AnimatedFlower color="#8cc57e" delay={0.2} />
      </div>
      <div className="absolute -bottom-5 -right-5 w-10 h-10 pointer-events-none rotate-180">
        <AnimatedFlower color="#e06c4d" delay={0.4} />
      </div>

      {badge && (
        <span
          className={`animate-slide-in-right opacity-0 absolute -top-3 right-6 bg-garden-rust text-garden-dark px-3 py-1 font-pixel text-sm uppercase tracking-wider shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] ${delayClass}`}
          style={{ animationFillMode: "forwards" }}
        >
          {badge}
        </span>
      )}

      <h2
        className={`animate-slide-in-left opacity-0 font-pixel text-xl text-garden-moss mb-6 flex items-end gap-3 leading-none ${delayClass}`}
        style={{ animationFillMode: "forwards" }}
      >
        <span className="text-garden-rust text-2xl animate-pulse">{">"}</span>
        {title}
      </h2>

      <div
        className={`animate-fade-in opacity-0 ${delayClass}`}
        style={{ animationFillMode: "forwards", animationDelay: "200ms" }}
      >
        {children}
      </div>
    </section>
  );
}
