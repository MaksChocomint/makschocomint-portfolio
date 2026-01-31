"use client";

import { useEffect, Suspense } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import Script from "next/script";

const COUNTER_ID = process.env.NEXT_PUBLIC_YANDEX_METRIKA_ID;

function MetrikaContent() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (typeof window.ym !== "undefined" && COUNTER_ID) {
      const url =
        pathname +
        (searchParams.toString() ? "?" + searchParams.toString() : "");
      window.ym(Number(COUNTER_ID), "hit", url);
    }
  }, [pathname, searchParams]);

  return null;
}

export default function Metrika() {
  return (
    <>
      <Script id="yandex-metrika" strategy="afterInteractive">
        {`
          (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
          m[i].l=1*new Date();
          for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
          k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
          (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

          ym(${COUNTER_ID || 0}, "init", {
            defer: true,
            clickmap:true,
            trackLinks:true,
            accurateTrackBounce:true,
            webvisor:true,
            ecommerce:"dataLayer"
          });
        `}
      </Script>
      <Suspense fallback={null}>
        <MetrikaContent />
      </Suspense>
    </>
  );
}

// Добавляем типизацию для window
declare global {
  interface Window {
    ym: (id: number, method: string, ...args: unknown[]) => void;
  }
}
