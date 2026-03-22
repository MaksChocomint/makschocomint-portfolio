import type { Metadata } from "next";
import "./globals.css";
import Metrika from "@/lib/Metrika";
import { MotionProvider } from "@/components/ui/MotionProvider";

export const metadata: Metadata = {
  metadataBase: new URL("https://makschocomint.ru"),
  title: "Максим Иванов | Портфолио разработчика",
  description:
    "Fullstack веб-разработчик. Создаю быстрые SPA приложения на Next.js, проектирую интерфейсы.",
  keywords: [
    "веб-разработка",
    "Next.js разработчик",
    "React",
    "Сделать сайт",
    "Сайты недорого",
    "Услуги разработки",
    "Поддержка сайта",
    "Frontend",
    "Backend",
    "Фронтенд",
    "Пиксель-арт портфолио",
    "Создание сайтов",
    "Максим Иванов",
  ],
  authors: [{ name: "Maksim Ivanov", url: "https://t.me/makschocomint" }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Максим Иванов | Портфолио разработчика",
    description: "Разработка эстетичных сайтов",
    url: "/",
    siteName: "Portfolio Maxim Ivanov",
    locale: "ru_RU",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Портфолио разработчика Максима Иванова",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Максим Иванов | Портфолио разработчика",
    description: "Разработка эстетичных сайтов",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-icon.png",
  },
};

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
        <MotionProvider>{children}</MotionProvider>
        <Metrika />
      </body>
    </html>
  );
}
