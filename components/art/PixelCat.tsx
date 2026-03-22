"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { Github, Hand } from "lucide-react";

type CatStatus = "idle" | "menu" | "accepted" | "rejected";

export function PixelCat({ className }: { className?: string }) {
  const [status, setStatus] = useState<CatStatus>("idle");
  const [handAnimationKey, setHandAnimationKey] = useState(0);
  const resetTimerRef = useRef<number | null>(null);

  const clearResetTimer = () => {
    if (resetTimerRef.current !== null) {
      window.clearTimeout(resetTimerRef.current);
      resetTimerRef.current = null;
    }
  };

  const scheduleReset = (delayMs: number) => {
    clearResetTimer();
    resetTimerRef.current = window.setTimeout(() => {
      setStatus("idle");
      resetTimerRef.current = null;
    }, delayMs);
  };

  useEffect(() => clearResetTimer, []);

  const handleCatClick = () => {
    if (status === "idle") {
      setStatus("menu");
      return;
    }

    if (status === "menu") {
      setStatus("idle");
    }
  };

  const handlePet = (choice: boolean) => {
    if (choice) {
      setStatus("accepted");
      setHandAnimationKey((prev) => prev + 1);
      scheduleReset(4500);
      return;
    }

    setStatus("rejected");
    scheduleReset(2000);
  };

  const isLocked = status === "rejected";
  const isHappy = status === "accepted";
  const isInteractive = !isLocked && !isHappy;

  return (
    <div className={`relative inline-block ${className ?? ""}`}>
      <AnimatePresence>
        {isHappy && (
          <motion.div
            key={`hand-${handAnimationKey}`}
            initial={{ opacity: 0, scale: 0.8, x: -20, y: 0 }}
            animate={{
              opacity: 1,
              scale: 1,
              x: [20, 50, 20],
              y: [20, 10, 20],
            }}
            exit={{
              opacity: 0,
              scale: 0.8,
              x: 30,
              y: 20,
              transition: { duration: 0.3 },
            }}
            transition={{
              duration: 1.5,
              repeat: 2,
              repeatType: "loop",
              ease: "easeInOut",
            }}
            className="absolute -top-8 left-0 z-30 text-garden-cream pointer-events-none"
          >
            <Hand
              size={48}
              className="rotate-160 drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]"
              fill="currentColor"
              fillOpacity={0.2}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {status === "menu" && (
          <motion.div
            key="menu"
            initial={{ opacity: 0, y: 10, scale: 0.8 }}
            animate={{ opacity: 1, y: -60, scale: 1 }}
            exit={{
              opacity: 0,
              y: -40,
              scale: 0.9,
              transition: { duration: 0.2 },
            }}
            className="absolute -top-3 left-1/2 -translate-x-[47%] z-50 bg-garden-dark border-2 border-garden-moss p-3 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex flex-col items-center gap-2 min-w-[120px]"
          >
            <p className="font-pixel text-xs text-white whitespace-nowrap">
              Погладить?
            </p>
            <div className="flex gap-4">
              <button
                type="button"
                onClick={() => handlePet(true)}
                className="text-garden-moss hover:text-garden-rust font-pixel text-sm cursor-pointer transition-colors"
              >
                ДА
              </button>
              <button
                type="button"
                onClick={() => handlePet(false)}
                className="text-zinc-500 hover:text-garden-cream font-pixel text-sm cursor-pointer transition-colors"
              >
                НЕТ
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isHappy && (
          <motion.a
            key="github-link"
            href="https://github.com/MaksChocomint/makschocomint-portfolio"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 60 }}
            exit={{
              opacity: 0,
              x: -10,
              transition: { duration: 1 },
            }}
            className="absolute top-[70%] flex items-center gap-2 bg-garden-cream text-black px-2 py-1 rounded-md font-pixel border-4 border-black text-sm hover:bg-garden-moss transition-all shadow-lg z-10 whitespace-nowrap"
          >
            <Github size={36} />
            SOURCE
          </motion.a>
        )}
      </AnimatePresence>

      <motion.button
        type="button"
        className={`relative block focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-garden-moss ${
          isInteractive ? "cursor-pointer" : "pointer-events-none grayscale-[0.5]"
        }`}
        onClick={handleCatClick}
        aria-label={status === "menu" ? "Закрыть меню котика" : "Открыть меню котика"}
        aria-expanded={status === "menu"}
        disabled={!isInteractive}
        whileHover={isInteractive ? { scale: 1.05 } : {}}
        whileTap={isInteractive ? { scale: 0.95 } : {}}
      >
        <Image
          width={150}
          height={150}
          src="/art/cat.svg"
          alt=""
          aria-hidden="true"
          className="block"
        />

        <motion.img
          src="/art/cat_blink.svg"
          alt=""
          aria-hidden="true"
          className="absolute top-0 left-0 w-full h-auto pointer-events-none"
          initial={{ opacity: 0 }}
          animate={isHappy ? { opacity: 1 } : { opacity: [0, 0, 1, 0, 0] }}
          transition={
            isHappy
              ? {
                  duration: 0.2,
                }
              : {
                  repeat: Infinity,
                  duration: 4,
                  times: [0, 0.9, 0.92, 0.94, 1],
                  delay: 1,
                }
          }
        />
      </motion.button>

      <AnimatePresence>
        {isLocked && (
          <motion.div
            key="lock-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/20 rounded-lg pointer-events-none"
          />
        )}
      </AnimatePresence>
    </div>
  );
}
