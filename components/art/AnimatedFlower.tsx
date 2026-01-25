"use client";
import { motion } from "framer-motion";

export function AnimatedFlower({
  color = "#8cc57e",
  delay = 0,
}: {
  color?: string;
  delay?: number;
}) {
  return (
    <svg viewBox="0 0 24 24" className="w-full h-full overflow-visible">
      {/* Стебель */}
      <motion.rect
        x="11"
        y="12"
        width="2"
        height="12"
        fill="#4a4b50"
        initial={{ scaleY: 0, originY: 1 }}
        whileInView={{ scaleY: 1 }}
        transition={{ duration: 0.5, delay: delay }}
        viewport={{ once: true }}
      />
      {/* Бутон */}
      <motion.g
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 10,
          delay: delay + 0.3,
        }}
        viewport={{ once: true }}
      >
        <rect x="8" y="8" width="8" height="8" fill={color} />
        <rect x="6" y="6" width="4" height="4" fill={color} opacity="0.6" />
        <rect x="14" y="6" width="4" height="4" fill={color} opacity="0.6" />
        <rect x="6" y="14" width="4" height="4" fill={color} opacity="0.6" />
        <rect x="14" y="14" width="4" height="4" fill={color} opacity="0.6" />
        <rect x="10" y="10" width="4" height="4" fill="#18191f" />
      </motion.g>
    </svg>
  );
}
