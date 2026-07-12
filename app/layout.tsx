import type { Metadata } from "next";
import "./globals.css";
import Metrika from "@/lib/Metrika";
import { MotionProvider } from "@/components/ui/MotionProvider";

const SITE_TITLE =
  "Максим Иванов — Fullstack-разработчик Next.js/React · Сайты под ключ";
const SITE_DESCRIPTION =
  "Fullstack-разработчик на Next.js, React и TypeScript. Создаю сайты и веб-приложения под ключ: лендинги, сервисы с платежами, ботами и аналитикой. Флагманский проект — ShikiMatch: анализ аниме-вкуса, 90 000+ профилей.";

export const metadata: Metadata = {
  metadataBase: new URL("https://makschocomint.ru"),
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  keywords: [
    "создание сайтов под ключ",
    "заказать сайт",
    "заказать веб-приложение",
    "разработка сайтов",
    "разработка веб-приложений",
    "сделать сайт",
    "лендинг под ключ",
    "Next.js разработчик",
    "React разработчик",
    "TypeScript разработчик",
    "fullstack разработчик",
    "фронтенд-разработчик",
    "веб-разработчик портфолио",
    "поддержка сайта",
    "Максим Иванов",
    "ShikiMatch",
  ],
  authors: [{ name: "Maksim Ivanov", url: "https://t.me/makschocomint" }],
  creator: "Maksim Ivanov",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: "/",
    siteName: "Максим Иванов — веб-разработчик",
    locale: "ru_RU",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Портфолио fullstack-разработчика Максима Иванова",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

// Структурированные данные: кто автор и что это за сайт. Помогает поисковикам
// (и ИИ-ответам) связать портфолио, GitHub, Telegram и флагманский проект.
const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Максим Иванов",
    alternateName: "MaksChocomint",
    url: "https://makschocomint.ru",
    image: "https://makschocomint.ru/hero/profile_pic.webp",
    jobTitle: "Fullstack-разработчик",
    sameAs: [
      "https://github.com/MaksChocomint",
      "https://t.me/makschocomint",
      "https://shikimatch.com",
    ],
    knowsAbout: [
      "Next.js",
      "React",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "веб-разработка",
      "создание сайтов под ключ",
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Максим Иванов — портфолио веб-разработчика",
    url: "https://makschocomint.ru",
    inLanguage: "ru",
  },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className="scroll-smooth">
      <head>
        <meta
          name="apple-mobile-web-app-title"
          content="Makschocomint Portfolio"
        />
      </head>
      <body className="antialiased bg-garden-dark text-garden-cream selection:bg-garden-moss selection:text-garden-dark">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <MotionProvider>{children}</MotionProvider>
        <Metrika />
      </body>
    </html>
  );
}
