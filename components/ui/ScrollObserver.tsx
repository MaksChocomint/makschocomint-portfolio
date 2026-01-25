"use client";

import { useEffect } from "react";

export function ScrollObserver() {
  useEffect(() => {
    // Небольшая задержка для корректной работы
    const timer = setTimeout(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("visible");
            }
          });
        },
        {
          threshold: 0.1,
          rootMargin: "-50px",
        },
      );

      document.querySelectorAll(".on-scroll").forEach((el) => {
        observer.observe(el);
      });

      return () => observer.disconnect();
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return null;
}
