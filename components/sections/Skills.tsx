// Skills component - улучшен для мобильных
"use client";
import { motion } from "framer-motion";

export function Skills({ items }: { items: string[] }) {
  return (
    <section>
      <div className="flex items-center gap-3 sm:gap-4 mb-8 sm:mb-10">
        <h2 className="font-pixel text-3xl sm:text-4xl md:text-5xl text-garden-cream">
          Навыки_
        </h2>
        <div className="h-0.5 bg-garden-dim flex-1 opacity-30"></div>
      </div>
      <div className="flex flex-wrap gap-2 sm:gap-3">
        {items.map((skill, i) => (
          <motion.div
            key={skill}
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: i * 0.03, type: "spring", stiffness: 200 }}
            className="px-3 sm:px-4 py-1.5 sm:py-2 bg-garden-card border border-zinc-800 font-mono text-xs sm:text-sm text-garden-moss hover:bg-garden-moss hover:text-garden-dark cursor-crosshair select-none transition-colors"
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
