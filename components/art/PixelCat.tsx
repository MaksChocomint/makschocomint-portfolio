"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Github } from "lucide-react"; // Или ваша иконка

export function PixelCat({ className }: { className?: string }) {
  const [status, setStatus] = useState<
    "idle" | "menu" | "accepted" | "rejected"
  >("idle");

  // Обработчики
  const handleCatClick = () => {
    if (status === "idle") setStatus("menu");
  };

  const handlePet = (choice: boolean) => {
    if (choice) {
      setStatus("accepted");
    } else {
      setStatus("rejected");
    }
  };

  const isLocked = status === "rejected";
  const isHappy = status === "accepted";

  return (
    <div className={`relative inline-block ${className}`}>
      {/* Меню выбора */}
      <AnimatePresence>
        {status === "menu" && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.8 }}
            animate={{ opacity: 1, y: -60, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="absolute left-1/2 -translate-x-1/2 z-50 bg-garden-dark border-2 border-garden-moss p-3 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex flex-col items-center gap-2 min-w-[120px]"
          >
            <p className="font-pixel text-xs text-white whitespace-nowrap">
              Погладить?
            </p>
            <div className="flex gap-4">
              <button
                onClick={() => handlePet(true)}
                className="text-garden-moss hover:text-garden-rust font-pixel text-sm cursor-pointer"
              >
                ДА
              </button>
              <button
                onClick={() => handlePet(false)}
                className="text-zinc-500 hover:text-white font-pixel text-sm cursor-pointer"
              >
                НЕТ
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Ссылка на GitHub при успехе */}
      <AnimatePresence>
        {isHappy && (
          <motion.a
            href="https://github.com/MaksChocomint/makschocomint-portfolio" // ЗАМЕНИТЕ НА ВАШУ ССЫЛКУ
            target="_blank"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 50 }}
            className="absolute right-0 top-1/2 -translate-y-1/2 flex items-center gap-2 bg-white text-black px-2 py-1 rounded-sm font-pixel text-[10px] hover:bg-garden-rust transition-colors shadow-lg"
          >
            <Github size={14} />
            SOURCE
          </motion.a>
        )}
      </AnimatePresence>

      {/* Сам котик */}
      <motion.div
        className={`relative ${isLocked ? "pointer-events-none grayscale-[0.5]" : "cursor-pointer"}`}
        onClick={handleCatClick}
        whileHover={!isLocked && !isHappy ? { scale: 1.05 } : {}}
        initial={{ y: 5, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {/* Основной котик с открытыми глазами */}
        <Image
          width={150}
          height={150}
          src="/art/cat.svg"
          alt="Cat"
          className="block"
        />

        {/* Слой с закрытыми глазами */}
        <motion.img
          src="/art/cat_blink.svg"
          alt="Cat blinking"
          className="absolute top-0 left-0 w-full h-auto"
          initial={{ opacity: 0 }}
          animate={
            isHappy
              ? { opacity: 1 } // Глаза всегда закрыты, если погладили
              : { opacity: [0, 0, 1, 0, 0] } // Обычное моргание
          }
          transition={
            isHappy
              ? { duration: 0.3 }
              : {
                  repeat: Infinity,
                  duration: 4,
                  times: [0, 0.9, 0.92, 0.94, 1],
                  delay: 1,
                }
          }
        />
      </motion.div>
    </div>
  );
}
