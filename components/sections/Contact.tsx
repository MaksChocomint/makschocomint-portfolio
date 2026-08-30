const QUESTIONS = [
  {
    title: "Кому принадлежит сайт после запуска?",
    text: "Вам. Домен и внешние сервисы оформляются на владельца бизнеса, после оплаты я передаю код и все доступы.",
  },
  {
    title: "SEO уже входит в стоимость?",
    text: "Входит техническая подготовка страниц и подключение инструментов Яндекса. Регулярное продвижение, статьи и реклама обсуждаются отдельно.",
  },
  {
    title: "Поддержка обязательна каждый месяц?",
    text: "Нет. Можно заказать сопровождение или обращаться только тогда, когда нужны изменения.",
  },
];

export function Contact() {
  return (
    <section id="contact" className="on-scroll scroll-mt-8">
      <div className="flex items-center gap-3 sm:gap-4 mb-8 sm:mb-10">
        <h2 className="font-pixel text-3xl sm:text-4xl md:text-5xl text-garden-cream">
          Начать проект_
        </h2>
        <div className="h-0.5 bg-garden-dim flex-1 opacity-30" />
      </div>

      <div className="contact-panel">
        <div className="contact-panel__copy">
          <span className="font-pixel text-garden-rust text-xs">НОВЫЙ КВЕСТ</span>
          <h3>Покажите, какой сайт вам нужен_</h3>
          <p>
            Для начала достаточно названия бизнеса, ссылки на текущую страницу
            и короткого описания задачи. Я предложу подход, который подходит
            именно вам, а затем назову срок и стоимость.
          </p>
          <a
            className="pixel-button pixel-button--contact"
            href="https://t.me/makschocomint"
            target="_blank"
            rel="noopener noreferrer"
          >
            Написать в Telegram_
          </a>
        </div>

        <div className="faq-list">
          {QUESTIONS.map((item) => (
            <details key={item.title}>
              <summary>{item.title}</summary>
              <p>{item.text}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
