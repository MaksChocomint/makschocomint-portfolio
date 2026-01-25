"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Github, Hand } from "lucide-react";

export function PixelCat({ className }: { className?: string }) {
  const [status, setStatus] = useState<
    "idle" | "menu" | "accepted" | "rejected"
  >("idle");
  const [mounted, setMounted] = useState(false);
  const [handAnimationKey, setHandAnimationKey] = useState(0);
  const handTimerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    setMounted(true);
    return () => {
      // Очищаем таймеры при размонтировании
      if (handTimerRef.current) {
        clearTimeout(handTimerRef.current);
      }
    };
  }, []);

  const handleCatClick = () => {
    if (status === "idle") setStatus("menu");
  };

  const handlePet = (choice: boolean) => {
    if (choice) {
      setStatus("accepted");
      // Генерируем новый ключ для принудительного ререндера анимации руки
      setHandAnimationKey((prev) => prev + 1);

      // Очищаем предыдущий таймер
      if (handTimerRef.current) {
        clearTimeout(handTimerRef.current);
      }

      // Устанавливаем таймер для возврата в idle
      handTimerRef.current = setTimeout(() => {
        setStatus("idle");
      }, 4500); // 3 цикла по 1.5с = 4500мс
    } else {
      setStatus("rejected");
      setTimeout(() => setStatus("idle"), 2000);
    }
  };

  const isLocked = status === "rejected";
  const isHappy = status === "accepted";

  if (!mounted) return <div className="w-37.5 h-37.5" />;

  return (
    <div className={`relative inline-block ${className || ""}`}>
      {/* 1. Рука, которая гладит - упрощенная анимация без repeat */}
      <AnimatePresence>
        {isHappy && (
          <motion.div
            key={`hand-${handAnimationKey}`}
            initial={{ opacity: 0, scale: 0.8, x: -20, y: 0 }}
            animate={{
              opacity: 1,
              scale: 1,
              x: [20, 50, 20], // Один цикл
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
              repeat: 2, // Повторим 2 раза (всего 3 цикла)
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

      {/* 2. Меню выбора */}
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
                onClick={() => handlePet(true)}
                className="text-garden-moss hover:text-garden-rust font-pixel text-sm cursor-pointer transition-colors"
              >
                ДА
              </button>
              <button
                onClick={() => handlePet(false)}
                className="text-zinc-500 hover:text-garden-cream font-pixel text-sm cursor-pointer transition-colors"
              >
                НЕТ
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 3. Ссылка на GitHub */}
      <AnimatePresence>
        {isHappy && (
          <motion.a
            key="github-link"
            href="https://github.com/MaksChocomint/makschocomint-portfolio"
            target="_blank"
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

      {/* 4. Тело котика */}
      <motion.div
        className={`relative ${
          isLocked ? "pointer-events-none grayscale-[0.5]" : "cursor-pointer"
        }`}
        onClick={handleCatClick}
        whileHover={!isLocked && !isHappy ? { scale: 1.05 } : {}}
        whileTap={!isLocked && !isHappy ? { scale: 0.95 } : {}}
      >
        <Image
          width={150}
          height={150}
          src="/art/cat.svg"
          alt="Cat"
          className="block"
          priority
        />

        {/* Глаза */}
        <motion.img
          src="/art/cat_blink.svg"
          alt="Cat blinking"
          className="absolute top-0 left-0 w-full h-auto pointer-events-none"
          initial={{ opacity: 0 }}
          animate={isHappy ? { opacity: 1 } : { opacity: [0, 0, 1, 0, 0] }}
          transition={
            isHappy
              ? {
                  duration: 0.2,
                  repeat: 0, // Убираем повторение для счастливого состояния
                }
              : {
                  repeat: Infinity,
                  duration: 4,
                  times: [0, 0.9, 0.92, 0.94, 1],
                  delay: 1,
                }
          }
        />
      </motion.div>

      {/* 5. Анимация блокировки */}
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
