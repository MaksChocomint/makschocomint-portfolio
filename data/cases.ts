export type CaseStudy = {
  slug: string;
  index: string;
  title: string;
  category: string;
  label: string;
  summary: string;
  result: string;
  cover: string;
  fullPage?: string;
  imageAlt: string;
  demoUrl: string;
  accent: string;
  accentText: string;
  surface: string;
  services: string[];
  features: string[];
  stack: string[];
};

const CASE_STUDIES_SOURCE: CaseStudy[] = [
  {
    slug: "monomi-flowers",
    index: "01",
    title: "Monomi Flowers",
    category: "Флористика · Санкт-Петербург",
    label: "Инициативная концепция",
    summary:
      "Выразительная витрина букетов с подбором по настроению и быстрым переходом к заказу.",
    result:
      "Помогает показать характер бренда, сценарии заказа и корпоративную флористику без длинной переписки.",
    cover: "/projects/commercial/monomi-cover.webp",
    fullPage: "/projects/commercial/monomi-page.webp",
    imageAlt: "Главная страница цветочного магазина Monomi Flowers",
    demoUrl: "https://monomi-flowers-spb.layero.app/",
    accent: "#ff735c",
    accentText: "#111827",
    surface: "#edf2ff",
    services: ["Структура", "UI-дизайн", "Каталог", "Форма заказа"],
    features: [
      "Каталог с разными цветовыми настроениями",
      "Подбор букета по бюджету и поводу",
      "Блоки для корпоративных и регулярных заказов",
      "Адаптивная версия и подготовка к поиску",
    ],
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "SEO"],
  },
  {
    slug: "upiter-jewelry",
    index: "02",
    title: "UPITER",
    category: "Ювелирная мастерская · Петроградская",
    label: "Инициативная концепция",
    summary:
      "Тёмный, тактильный сайт мастерской, который объясняет работу с металлом и собирает содержательную заявку.",
    result:
      "Клиент заранее выбирает тип работы, материал и бюджет, а мастер получает понятный запрос до первого диалога.",
    cover: "/projects/commercial/upiter-cover.webp",
    fullPage: "/projects/commercial/upiter-page.webp",
    imageAlt: "Главная страница ювелирной мастерской UPITER",
    demoUrl: "https://upiter-jewelry-spb.layero.app/",
    accent: "#e87835",
    accentText: "#fff8eb",
    surface: "#161713",
    services: ["Арт-дирекшн", "Портфолио", "Квиз заявки", "Адаптив"],
    features: [
      "Разделение изготовления и ремонта",
      "Портфолио изделий без визуального шума",
      "Бриф по металлу, сроку и бюджету",
      "Выразительная мобильная подача",
    ],
    stack: ["Next.js", "TypeScript", "React Hook Form", "SEO"],
  },
  {
    slug: "ceramland",
    index: "03",
    title: "CeramLand",
    category: "Керамическая студия · Санкт-Петербург",
    label: "Инициативная концепция",
    summary:
      "Живой сайт мастерской с пластичной типографикой, понятными форматами занятий и заявкой на дату.",
    result:
      "Снимает вопросы новичка и помогает быстро выбрать первое занятие, свидание, праздник или встречу команды.",
    cover: "/projects/commercial/ceramland-cover.webp",
    fullPage: "/projects/commercial/ceramland-page.webp",
    imageAlt: "Главная страница керамической студии CeramLand",
    demoUrl: "https://ceramland-spb.layero.app/",
    accent: "#f0b82f",
    accentText: "#20201c",
    surface: "#fff0ca",
    services: ["Айдентика", "UX-сценарий", "Расписание", "Заявка"],
    features: [
      "Форматы занятий простым языком",
      "Сценарий первого визита по шагам",
      "Заявка для праздников и команд",
      "Необычная, но удобная мобильная сетка",
    ],
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "JSON-LD"],
  },
  {
    slug: "veka-foto",
    index: "04",
    title: "Veka Фото",
    category: "Фото и печать · Санкт-Петербург",
    label: "Инициативная концепция",
    summary:
      "Рабочий интерфейс для печати и реставрации: услуга, параметры и филиал собираются до визита.",
    result:
      "Уменьшает количество одинаковых уточнений и превращает сайт из витрины в полезный инструмент заказа.",
    cover: "/projects/commercial/veka-cover.webp",
    fullPage: "/projects/commercial/veka-page.webp",
    imageAlt: "Главная страница сервиса печати Veka Фото",
    demoUrl: "https://veka-foto-spb.layero.app/",
    accent: "#48a8c7",
    accentText: "#101416",
    surface: "#dff4fb",
    services: ["UX-аудит", "Форма заказа", "Каталог услуг", "SEO"],
    features: [
      "Выбор услуги и параметров до посещения",
      "Разделы печати, документов и реставрации",
      "Сценарий передачи файла через согласованный канал",
      "Контакты и режим работы без поиска по странице",
    ],
    stack: ["Next.js", "TypeScript", "React", "Technical SEO"],
  },
  {
    slug: "sirelis-pastry",
    index: "05",
    title: "СИРЕЛИС",
    category: "Кондитерская · Санкт-Петербург",
    label: "Инициативная концепция",
    summary:
      "Тёплая витрина десертов и короткий бриф для сложных, праздничных и повторных заказов.",
    result:
      "Покупатель понимает форматы, начинки и порядок работы, а кондитер сразу получает дату, вес и пожелания.",
    cover: "/projects/commercial/sirelis-cover.webp",
    fullPage: "/projects/commercial/sirelis-page.webp",
    imageAlt: "Главная страница кондитерской СИРЕЛИС",
    demoUrl: "https://sirelis-pastry-spb.layero.app/",
    accent: "#d83c61",
    accentText: "#351d27",
    surface: "#fff0e5",
    services: ["Редизайн", "Каталог", "Бриф заказа", "Метрика"],
    features: [
      "Витрина форматов и начинок",
      "Путь заказа без лишнего текста",
      "Бриф по дате, весу и оформлению",
      "Подготовка к прямым и корпоративным заказам",
    ],
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Yandex Metrica"],
  },
  {
    slug: "flatpoint",
    index: "06",
    title: "Flatpoint",
    category: "Бронирование жилья · Web application",
    label: "Продуктовый интерфейс",
    summary:
      "Сервис выбора и бронирования загородных домов и апартаментов с фокусом на фотографии объектов.",
    result:
      "Соединяет эмоциональную презентацию жилья с понятным каталогом, условиями проживания и сценарием бронирования.",
    cover: "/projects/flatpoint.webp",
    imageAlt: "Главная страница сервиса бронирования Flatpoint",
    demoUrl: "https://makschocomint-house-frontend-application-a4c3.twc1.net",
    accent: "#b7a47a",
    accentText: "#171713",
    surface: "#f0eee6",
    services: ["Frontend", "Каталог", "Бронирование", "Адаптив"],
    features: [
      "Каталог домов и апартаментов",
      "Подробная презентация объектов",
      "Выбор условий и дат проживания",
      "Полноценная адаптивная вёрстка",
    ],
    stack: ["React", "TypeScript", "REST API", "Responsive UI"],
  },
];

const PRESENTATION_ORDER = [
  "ceramland",
  "veka-foto",
  "sirelis-pastry",
  "upiter-jewelry",
  "flatpoint",
  "monomi-flowers",
];

export const CASE_STUDIES = PRESENTATION_ORDER.flatMap((slug) =>
  CASE_STUDIES_SOURCE.filter((item) => item.slug === slug),
);

export function getCaseStudy(slug: string) {
  return CASE_STUDIES.find((item) => item.slug === slug);
}
