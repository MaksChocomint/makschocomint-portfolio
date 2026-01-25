import Image from "next/image";

export function Hero() {
  return (
    <section className="relative flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-20">
      <div className="relative group shrink-0">
        <div
          className="md:w-64 md:h-64 border-4 border-garden-moss bg-garden-card relative overflow-hidden shadow-[8px_8px_0px_0px_rgba(74,75,80,0.5)] animate-scale-in opacity-0"
          style={{ animationFillMode: "forwards" }}
        >
          <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.05)_50%,transparent_75%,transparent_100%)] bg-[length:20px_20px]" />
          <div className="w-full h-full flex flex-col items-center justify-center p-4">
            <div className="animate-float">
              <Image
                src="/hero/profile_pic.webp"
                alt="Profile Picture"
                width={300}
                height={300}
                className="w-30 h-30 md:w-38 md:h-38 border-2 border-garden-cream shadow-md shadow-garden-cream/30"
              />
            </div>
            <p
              className="font-pixel text-garden-dim md:text-lg md:mt-2 animate-fade-in opacity-0"
              style={{ animationFillMode: "forwards", animationDelay: "300ms" }}
            >
              NPC_MAKS
            </p>
          </div>
        </div>
      </div>

      <div className="flex-1 text-center md:text-left space-y-6">
        <h1
          className="font-pixel text-5xl md:text-8xl text-garden-moss uppercase leading-[0.7] text-glow animate-slide-in-left opacity-0"
          style={{ animationFillMode: "forwards" }}
        >
          Максим <br /> <span className="text-garden-cream p-4">Иванов</span>
        </h1>
        <p
          className="font-mono text-zinc-400 max-w-lg text-sm md:text-base p-4 animate-fade-in opacity-0"
          style={{ animationFillMode: "forwards", animationDelay: "200ms" }}
        >
          Fullstack-разработчик
        </p>
        <div
          className="flex gap-4 justify-center md:justify-start p-4 font-pixel text-xl animate-fade-in opacity-0"
          style={{ animationFillMode: "forwards", animationDelay: "300ms" }}
        >
          <button className="cursor-pointer px-6 py-2 bg-garden-moss text-garden-dark hover:bg-garden-cream hover:-translate-y-1 transition-all shadow-[4px_4px_0px_0px_rgba(255,255,255,0.1)]">
            РЕЗЮМЕ
          </button>
        </div>
      </div>
    </section>
  );
}
