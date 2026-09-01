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
    demoUrl: "https://makschocomint.layero.app/upiter/",
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
    slug: "beautystar-grooming",
    index: "06",
    title: "BeautyStar",
    category: "Груминг-салон · Санкт-Петербург",
    label: "Инициативная концепция",
    summary:
      "Тёплый сайт салона с понятными услугами, подготовкой к визиту и отдельным знакомством с мастерами.",
    result:
      "Помогает выбрать уход, узнать, кто будет работать с питомцем, и перейти к записи без лишних уточнений.",
    cover: "/projects/commercial/beautystar-cover.webp",
    fullPage: "/projects/commercial/beautystar-page.webp",
    imageAlt: "Главная страница груминг-салона BeautyStar",
    demoUrl: "https://makschocomint.layero.app/beautystar/",
    accent: "#845bc2",
    accentText: "#fff7e8",
    surface: "#35112d",
    services: ["Арт-дирекшн", "Услуги", "Мастера", "Запись"],
    features: [
      "Услуги для собак и кошек",
      "Наглядная подготовка к первому визиту",
      "Знакомство с мастерами и их опытом",
      "Адаптивная версия с быстрым переходом к записи",
    ],
    stack: ["Next.js", "TypeScript", "React", "Responsive UI"],
  },
  {
    slug: "past-reuse",
    index: "07",
    title: "Past Reuse",
    category: "Реставрация мебели · Санкт-Петербург",
    label: "Инициативная концепция",
    summary:
      "Редакционный сайт мастерской, где предмет, материал и следы времени становятся частью визуального рассказа.",
    result:
      "Владелец вещи понимает подход мастерской и может сразу отправить фотографии для предварительной оценки.",
    cover: "/projects/commercial/past-reuse-cover.webp",
    fullPage: "/projects/commercial/past-reuse-page.webp",
    imageAlt: "Главная страница мастерской Past Reuse",
    demoUrl: "https://makschocomint.layero.app/past-reuse/",
    accent: "#d24b68",
    accentText: "#fff9ee",
    surface: "#151917",
    services: ["Арт-дирекшн", "Редакционный UX", "Материалы", "Оценка"],
    features: [
      "Крупная фотографическая подача работ",
      "Разбор материалов и характера предмета",
      "Понятный порядок предварительной оценки",
      "Форма обращения с фотографиями",
    ],
    stack: ["Next.js", "TypeScript", "React", "Static Export"],
  },
  {
    slug: "atelier-27",
    index: "08",
    title: "Ателье 27",
    category: "Подгонка одежды · Парнас",
    label: "Инициативная концепция",
    summary:
      "Сдержанный сайт ателье с ясным делением услуг, крупными деталями ткани и удобным сценарием примерки.",
    result:
      "Клиент заранее понимает, с какими задачами обратиться и что принести на примерку.",
    cover: "/projects/commercial/atelier-27-cover.webp",
    fullPage: "/projects/commercial/atelier-27-page.webp",
    imageAlt: "Главная страница сайта Ателье 27",
    demoUrl: "https://makschocomint.layero.app/atelier-27/",
    accent: "#b51533",
    accentText: "#fffaf2",
    surface: "#f2e8dc",
    services: ["Фирменный знак", "Услуги", "Примерка", "Контакты"],
    features: [
      "Услуги без неоднозначных формулировок",
      "Подсказки перед примеркой",
      "Акцент на посадке и работе с деталями",
      "Удобная запись с телефона",
    ],
    stack: ["Next.js", "TypeScript", "React", "SEO"],
  },
  {
    slug: "kosmos-studio",
    index: "09",
    title: "Космос",
    category: "Студия звукозаписи · Санкт-Петербург",
    label: "Инициативная концепция",
    summary:
      "Контрастный сайт студии, собранный вокруг пространства, оборудования и живого ощущения записи.",
    result:
      "Музыкант быстро выбирает формат сессии и отправляет короткий бриф без длинной переписки.",
    cover: "/projects/commercial/kosmos-cover.webp",
    fullPage: "/projects/commercial/kosmos-page.webp",
    imageAlt: "Главная страница студии звукозаписи Космос",
    demoUrl: "https://makschocomint.layero.app/kosmos/",
    accent: "#b9ff20",
    accentText: "#080b08",
    surface: "#090c09",
    services: ["Арт-дирекшн", "Форматы записи", "Пространство", "Бриф"],
    features: [
      "Фотографии студии и оборудования",
      "Форматы для вокала, групп и монтажа",
      "Короткая заявка под конкретную сессию",
      "Выразительная мобильная версия",
    ],
    stack: ["Next.js", "TypeScript", "React", "Responsive UI"],
  },
  {
    slug: "cycle-repair",
    index: "10",
    title: "Сайкл Репэйр",
    category: "Веломастерская · Санкт-Петербург",
    label: "Инициативная концепция",
    summary:
      "Практичный сайт веломастерской с диагностикой по симптому и прямым переходом к записи.",
    result:
      "Велосипедист описывает проблему своими словами, а мастер получает исходные данные до визита.",
    cover: "/projects/commercial/cycle-repair-cover.webp",
    fullPage: "/projects/commercial/cycle-repair-page.webp",
    imageAlt: "Главная страница веломастерской Сайкл Репэйр",
    demoUrl: "https://makschocomint.layero.app/cycle-repair/",
    accent: "#f2ca22",
    accentText: "#07130e",
    surface: "#e8ece5",
    services: ["UX-сценарий", "Диагностика", "Услуги", "Запись"],
    features: [
      "Выбор проблемы по понятному симптому",
      "Объяснение порядка диагностики и ремонта",
      "Режим работы и контакты без поиска",
      "Крупная типографика для телефона и десктопа",
    ],
    stack: ["Next.js", "TypeScript", "React", "Static Export"],
  },
  {
    slug: "flatpoint",
    index: "11",
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
  "beautystar-grooming",
  "past-reuse",
  "atelier-27",
  "kosmos-studio",
  "cycle-repair",
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
