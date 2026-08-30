import type { Metadata } from "next";
import "./globals.css";
import Metrika from "@/lib/Metrika";
import { MotionProvider } from "@/components/ui/MotionProvider";
import { CASE_STUDIES } from "@/data/cases";

const SITE_TITLE =
  "Максим Иванов — создание сайтов под ключ в Санкт-Петербурге";
const SITE_DESCRIPTION =
  "Дизайн и разработка сайтов под ключ: мобильная версия, заявки, техническое SEO, аналитика, домен и запуск. Живые примеры для бизнеса и веб-приложений.";

export const metadata: Metadata = {
  metadataBase: new URL("https://makschocomint.ru"),
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  keywords: [
    "создание сайта Санкт-Петербург",
    "веб-дизайнер Санкт-Петербург",
    "создание сайтов под ключ",
    "заказать сайт",
    "сайт для малого бизнеса",
    "разработка сайтов",
    "разработка веб-приложений",
    "лендинг под ключ",
    "техническое SEO сайта",
    "поддержка сайта",
    "Next.js разработчик",
    "React разработчик",
    "TypeScript разработчик",
    "fullstack разработчик",
    "веб-разработчик портфолио",
    "Максим Иванов",
    "ShikiMatch",
  ],
  authors: [{ name: "Maksim Ivanov", url: "https://t.me/makschocomint" }],
  creator: "Maksim Ivanov",
  publisher: "Maksim Ivanov",
  applicationName: "Портфолио Максима Иванова",
  category: "technology",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: "/",
    siteName: "Максим Иванов — сайты под ключ",
    locale: "ru_RU",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Портфолио сайтов и веб-приложений Максима Иванова",
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
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://makschocomint.ru/#person",
      name: "Максим Иванов",
      alternateName: "MaksChocomint",
      url: "https://makschocomint.ru/",
      image: "https://makschocomint.ru/hero/profile_pic.webp",
      jobTitle: "Веб-дизайнер и fullstack-разработчик",
      homeLocation: {
        "@type": "Place",
        name: "Санкт-Петербург",
      },
      sameAs: [
        "https://github.com/MaksChocomint",
        "https://t.me/makschocomint",
        "https://shikimatch.com",
      ],
      knowsAbout: [
        "Next.js",
        "React",
        "TypeScript",
        "веб-дизайн",
        "техническое SEO",
        "создание сайтов под ключ",
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Разработка и поддержка сайтов",
        itemListElement: [
          {
            "@type": "Offer",
            priceCurrency: "RUB",
            price: "9900",
            itemOffered: {
              "@type": "Service",
              name: "Адаптация готовой концепции сайта",
              areaServed: "RU",
            },
          },
          {
            "@type": "Offer",
            priceCurrency: "RUB",
            price: "30000",
            itemOffered: {
              "@type": "Service",
              name: "Дизайн и разработка сайта с нуля",
              areaServed: "RU",
            },
          },
          {
            "@type": "Offer",
            priceCurrency: "RUB",
            price: "1500",
            itemOffered: {
              "@type": "Service",
              name: "Поддержка сайта",
              areaServed: "RU",
            },
          },
        ],
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://makschocomint.ru/#website",
      name: "Максим Иванов — сайты под ключ",
      url: "https://makschocomint.ru/",
      inLanguage: "ru-RU",
      publisher: { "@id": "https://makschocomint.ru/#person" },
    },
    {
      "@type": "ProfilePage",
      "@id": "https://makschocomint.ru/#profile",
      url: "https://makschocomint.ru/",
      name: SITE_TITLE,
      description: SITE_DESCRIPTION,
      inLanguage: "ru-RU",
      mainEntity: { "@id": "https://makschocomint.ru/#person" },
      isPartOf: { "@id": "https://makschocomint.ru/#website" },
    },
    {
      "@type": "ItemList",
      "@id": "https://makschocomint.ru/#portfolio",
      name: "Примеры сайтов и веб-приложений",
      numberOfItems: CASE_STUDIES.length,
      itemListElement: CASE_STUDIES.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "CreativeWork",
          name: item.title,
          description: item.summary,
          url: item.demoUrl,
          image: `https://makschocomint.ru${item.cover}`,
          creator: { "@id": "https://makschocomint.ru/#person" },
        },
      })),
    },
  ],
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
