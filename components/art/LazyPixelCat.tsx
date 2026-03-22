"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";

const PixelCat = dynamic(() => import("./PixelCat").then((mod) => mod.PixelCat), {
  ssr: false,
  loading: () => <div className="h-[150px] w-[150px]" aria-hidden="true" />,
});

export function LazyPixelCat({ className }: { className?: string }) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [shouldLoad, setShouldLoad] = useState(
    () => typeof window !== "undefined" && !("IntersectionObserver" in window),
  );

  useEffect(() => {
    const target = containerRef.current;
    if (!target) {
      return;
    }

    if (!("IntersectionObserver" in window) || shouldLoad) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: "300px 0px" },
    );

    observer.observe(target);
    return () => observer.disconnect();
  }, [shouldLoad]);

  return (
    <div ref={containerRef} className="h-[150px] w-[150px]">
      {shouldLoad ? <PixelCat className={className} /> : null}
    </div>
  );
}
