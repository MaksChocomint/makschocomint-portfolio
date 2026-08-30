export type Project = {
  id: number;
  title: string;
  desc: string;
  imageUrl?: string;
  githubLink?: string;
  demoLink?: string;
  isHot?: boolean;
  /** Флагманский проект: широкая карточка над сеткой, вне пагинации. */
  featured?: boolean;
  /** Ключевые факты (метрики продукта) для флагманской карточки. */
  highlights?: string[];
  /** Стек-теги для флагманской карточки. */
  tags?: string[];
};

export const PROJECTS_DATA: Project[] = [
  {
    id: 0,
    title: "ShikiMatch",
    desc: "Лаборатория аниме-вкусов: анализ профиля Shikimori, 33 класса зрителя, персональные рекомендации, совместимость и ежедневный аниме-квиз. Живой продукт с премиум-подпиской, платежами, Telegram-ботом и браузерным расширением.",
    imageUrl: "/projects/shikimatch.webp",
    demoLink: "https://shikimatch.com",
    featured: true,
    highlights: [
      "90 000+ профилей в анализе вкуса",
      "ML-кластеризация: 33 класса зрителя",
      "Ежедневный квиз, лидерборды и архив",
      "Подписка, платежи (ЮKassa), бот, расширение",
    ],
    tags: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Prisma",
      "ML-кластеризация",
      "Telegram Bot API",
    ],
  },
  {
    id: 1,
    title: "AmphiLab",
    desc: "Лендинг для лаборатории по изучению амфибий с понятной подачей исследований и направлений работы.",
    imageUrl: "/projects/amphilab.webp",
    githubLink: "https://github.com/MaksChocomint/amphilab",
    demoLink: "",
    isHot: false,
  },
  {
    id: 3,
    title: "AI-Codenames",
    desc: 'Онлайн-игра "Codenames" с комнатами, ИИ-ботами, разными режимами и партиями в реальном времени.',
    imageUrl: "/projects/codenames.webp",
    demoLink: "https://aicodenames.vercel.app/",
    isHot: false,
  },
  {
    id: 4,
    title: "Rig Monitor and Anomaly Detector",
    desc: "Панель мониторинга буровых датчиков, которая строит графики в реальном времени и отмечает аномалии.",
    imageUrl: "/projects/rig.webp",
    githubLink: "https://github.com/MaksChocomint/wellpro-anomalies",
    isHot: false,
  },
  {
    id: 5,
    title: "FinOps Insight Portal",
    desc: "Портал финансовой аналитики с KPI-дашбордами, задачами по SLA и AI-помощником для разбора аномалий.",
    imageUrl: "/projects/finops.webp",
    githubLink: "https://github.com/MaksChocomint/finops-portal",
    isHot: false,
  },
  {
    id: 6,
    title: "Contact Game",
    desc: 'Первая онлайн-версия игры "Есть контакт" с быстрыми раундами для совместной игры.',
    imageUrl: "/projects/contact.webp",
    githubLink: "https://github.com/MaksChocomint/contact-game",
    demoLink: "https://makschocomint-contact-game-dd90.twc1.net",
    isHot: false,
  },
  {
    id: 7,
    title: "Content Generation and Prediction",
    desc: "Система для создания аналитического контента с графиками и прогнозированием данных на будущие периоды.",
    imageUrl: "/projects/analytics.webp",
    githubLink: "https://github.com/MaksChocomint/global-energy-uni",
    demoLink: "https://globalenergy.vercel.app/",
    isHot: false,
  },
  {
    id: 8,
    title: "Diagrams",
    desc: "Приложение для создания диаграмм и алгоритмических цепочек, которые могут выполняться ботами.",
    imageUrl: "/projects/diagrams.webp",
    githubLink: "https://github.com/MaksChocomint/diagrams-app",
    demoLink: "",
    isHot: false,
  },
  {
    id: 9,
    title: "Wordle",
    desc: "Дизайн мобильной версии Wordle с цветными подсказками, уровнями и плавной системой прогрессии.",
    imageUrl: "/projects/wordle.webp",
    isHot: false,
  },
  {
    id: 10,
    title: "Portfolio",
    desc: "Мое первое портфолио с проектами, навыками и услугами в космическом стиле.",
    imageUrl: "/projects/portfolio.webp",
    githubLink: "https://github.com/MaksChocomint/portfolio",
    demoLink: "https://makschocomint-portfolio.vercel.app/",
    isHot: false,
  },
];
