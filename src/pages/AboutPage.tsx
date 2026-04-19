const values = [
  { emoji: "🌹", title: "Традиция", desc: "Чтим рецепты, уходящие корнями в османскую кухню XV века" },
  { emoji: "✨", title: "Мастерство", desc: "Делимся техниками и секретами, которые делают лукум особенным" },
  { emoji: "🫂", title: "Сообщество", desc: "Объединяем ценителей со всей России и мира" },
  { emoji: "🎨", title: "Творчество", desc: "Вдохновляем на авторские интерпретации классических рецептов" },
];

const team = [
  { name: "Амина Ш.", role: "Основательница", years: "с 2019", initial: "А" },
  { name: "Борис К.", role: "Шеф-кулинар", years: "с 2020", initial: "Б" },
  { name: "Нина В.", role: "Куратор рецептов", years: "с 2021", initial: "Н" },
];

export default function AboutPage() {
  return (
    <main className="pt-28 pb-24">
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 text-center mb-24">
        <span
          className="font-golos text-xs tracking-[0.3em] uppercase"
          style={{ color: "var(--rose-deep)" }}
        >
          История
        </span>
        <h1
          className="font-cormorant text-6xl lg:text-7xl mt-4 mb-8"
          style={{ fontWeight: 300, color: "hsl(var(--foreground))" }}
        >
          О нас
        </h1>
        <p className="font-golos text-lg leading-relaxed" style={{ color: "hsl(var(--muted-foreground))" }}>
          Мы начали в 2019 году с небольшого чаепития, где впервые угостили друзей 
          домашним розовым лукумом. Сегодня нас более 300 человек — из Москвы, 
          Петербурга, Стамбула и Тбилиси.
        </p>
      </section>

      {/* Story */}
      <section className="max-w-6xl mx-auto px-6 mb-24">
        <div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 p-12 rounded-3xl"
          style={{ background: "rgba(255,255,255,0.6)", border: "1px solid rgba(201, 160, 110, 0.2)" }}
        >
          <div>
            <h2 className="font-cormorant text-4xl mb-6" style={{ fontWeight: 300 }}>
              Как всё началось
            </h2>
            <div className="space-y-4 font-golos text-sm leading-relaxed" style={{ color: "hsl(var(--muted-foreground))" }}>
              <p>
                Амина впервые попробовала настоящий рахат-лукум в Стамбуле, в маленькой лавке 
                на Гранд-Базаре. Это был не тот сахарный мармелад, что продают повсюду — 
                это было произведение искусства: нежное, ароматное, с тонким вкусом мастики и розы.
              </p>
              <p>
                Вернувшись домой, она потратила полгода, чтобы воссоздать этот вкус. 
                Первый удачный рецепт стал поводом собрать друзей. А потом ещё раз, и ещё.
              </p>
              <p>
                Сегодня наше сообщество — это живой обмен опытом, мастер-классы, 
                дегустации и настоящая дружба, скреплённая любовью к этой удивительной сладости.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6">
            {[
              { number: "300+", label: "Участников" },
              { number: "50+", label: "Рецептов" },
              { number: "24", label: "Мастер-класса" },
              { number: "5", label: "Лет вместе" },
            ].map((stat, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl text-center"
                style={{ background: i % 2 === 0 ? "var(--rose-light)" : "var(--sand)" }}
              >
                <p className="font-cormorant text-4xl" style={{ color: "var(--rose-deep)", fontWeight: 400 }}>
                  {stat.number}
                </p>
                <p className="font-golos text-xs mt-1" style={{ color: "hsl(var(--muted-foreground))" }}>
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="max-w-6xl mx-auto px-6 mb-24">
        <div className="text-center mb-12">
          <h2 className="font-cormorant text-5xl" style={{ fontWeight: 300 }}>Наши ценности</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v, i) => (
            <div
              key={i}
              className="p-6 rounded-3xl text-center transition-all duration-300 hover:-translate-y-1"
              style={{ background: "rgba(255,255,255,0.7)", border: "1px solid rgba(201, 160, 110, 0.2)" }}
            >
              <div className="text-3xl mb-4">{v.emoji}</div>
              <h3 className="font-cormorant text-xl mb-2" style={{ fontWeight: 400 }}>{v.title}</h3>
              <p className="font-golos text-xs leading-relaxed" style={{ color: "hsl(var(--muted-foreground))" }}>
                {v.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-cormorant text-5xl" style={{ fontWeight: 300 }}>Команда</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
          {team.map((person, i) => (
            <div
              key={i}
              className="text-center p-8 rounded-3xl"
              style={{ background: "rgba(255,255,255,0.7)", border: "1px solid rgba(201, 160, 110, 0.2)" }}
            >
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 font-cormorant text-2xl"
                style={{ background: "var(--rose-light)", color: "var(--rose-deep)" }}
              >
                {person.initial}
              </div>
              <p className="font-cormorant text-xl" style={{ fontWeight: 400 }}>{person.name}</p>
              <p className="font-golos text-xs mt-1" style={{ color: "var(--rose-deep)" }}>{person.role}</p>
              <p className="font-golos text-xs mt-1" style={{ color: "hsl(var(--muted-foreground))" }}>{person.years}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
