const STEPS = [
  {
    number: "01",
    title: "Знакомимся",
    text: "Вы присылаете ссылку на бизнес, материалы и пример, который вам ближе.",
  },
  {
    number: "02",
    title: "Фиксируем задачу",
    text: "Согласуем страницы, функции, срок и стоимость до начала разработки.",
  },
  {
    number: "03",
    title: "Смотрим демо",
    text: "Вы проверяете сайт на временном адресе, я вношу согласованные правки.",
  },
  {
    number: "04",
    title: "Запускаем",
    text: "Подключаю домен, аналитику и поиск, затем передаю вам все доступы.",
  },
];

export function Process() {
  return (
    <section id="process" className="on-scroll scroll-mt-8">
      <div className="flex items-center gap-3 sm:gap-4 mb-8 sm:mb-10">
        <h2 className="font-pixel text-3xl sm:text-4xl md:text-5xl text-garden-cream">
          Как работаем_
        </h2>
        <div className="h-0.5 bg-garden-dim flex-1 opacity-30" />
      </div>

      <ol className="process-grid">
        {STEPS.map((step) => (
          <li key={step.number} className="process-step">
            <span className="process-step__number">{step.number}</span>
            <h3>{step.title}_</h3>
            <p>{step.text}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
