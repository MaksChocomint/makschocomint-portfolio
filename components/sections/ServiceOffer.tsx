import { BloomingSection } from "../ui/BloomingSection";

const LAUNCH_ITEMS = [
  "ваш домен и защищённое соединение HTTPS",
  "удобная версия для телефона и компьютера",
  "заявка через форму или мессенджер",
  "заголовки и описания страниц для поиска",
  "sitemap, robots и базовая Schema.org-разметка",
  "Яндекс Метрика с основной целью",
  "добавление сайта в Яндекс Вебмастер",
  "финальная проверка форм, ссылок и браузеров",
];

export function ServiceOffer() {
  return (
    <BloomingSection title="Что входит в запуск" badge="Без доплаты">
      <div className="launch-grid">
        <div>
          <p className="font-pixel text-base sm:text-lg text-garden-cream leading-relaxed mb-3">
            Сайт готов не только к показу, но и к работе_
          </p>
          <p className="font-mono text-sm text-zinc-400 leading-relaxed">
            Настраиваю техническую основу, чтобы сайт открывался по вашему
            адресу, собирал обращения и был понятен поисковым системам.
          </p>
          <p className="launch-note">
            Продвижение по запросам и реклама — отдельная регулярная работа.
            Базовая подготовка к поиску уже входит в запуск.
          </p>
        </div>

        <ul className="launch-list">
          {LAUNCH_ITEMS.map((item) => (
            <li key={item}>
              <span aria-hidden="true">✓</span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </BloomingSection>
  );
}
