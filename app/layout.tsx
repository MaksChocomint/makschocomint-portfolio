import type { Metadata } from "next";
// Заменяем VT323 на Pixelify_Sans, так как VT323 не умеет в кириллицу
import { JetBrains_Mono, Press_Start_2P } from "next/font/google";
import "./globals.css";

// 1. Настраиваем пиксельный шрифт с поддержкой кириллицы
const pixelFont = Press_Start_2P({
  subsets: ["latin", "cyrillic"], // Обязательно добавляем cyrillic
  weight: "400", // Берем разные начертания для гибкости
  variable: "--font-pixel",
  display: "swap",
});

// 2. Настраиваем моноширинный шрифт (для кода и подписей)
const monoFont = JetBrains_Mono({
  subsets: ["latin", "cyrillic"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  // Переводим метаданные на русский для SEO в РФ/СНГ
  title: "Максим Иванов | Портфолио Разработчика",

  description:
    "Fullstack веб-разработчик. Создаю быстрые SPA приложения на Next.js, проектирую интерфейсы.",

  keywords: [
    "веб-разработка",
    "Next.js разработчик",
    "React",
    "Фронтенд",
    "Пиксель-арт портфолио",
    "Создание сайтов",
    "Максим Иванов",
  ],

  authors: [{ name: "Maxim Ivanov", url: "https://t.me/makschocomint" }],

  openGraph: {
    title: "Максим Иванов | Портфолио Разработчика",
    description: "Разработка эстетичных сайтов",
    url: "http://localhost:3000/",
    siteName: "Portfolio Maxim Ivanov",
    locale: "ru_RU",
    type: "website",
    images: [
      {
        url: "/og-image-rus.png", // Сделай отдельную картинку с русским текстом
        width: 1200,
        height: 630,
        alt: "Портфолио разработчика Максима Иванова",
      },
    ],
  },

  // Иконки (фавиконки)
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className="scroll-smooth">
      <body
        className={`${pixelFont.variable} ${monoFont.variable} antialiased bg-garden-dark text-garden-text selection:bg-garden-moss selection:text-garden-dark`}
      >
        {children}
      </body>
    </html>
  );
}
