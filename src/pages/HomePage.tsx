type Page = "home" | "about" | "contacts";

interface HomePageProps {
  onNavigate: (page: Page) => void;
}

const recipes = [
  {
    emoji: "🌹",
    title: "Розовый классический",
    desc: "Нежный рахат-лукум с лепестками розы и фисташками — рецепт из Стамбула XIX века",
    time: "4 часа",
  },
  {
    emoji: "🍋",
    title: "Лимонный с мастикой",
    desc: "Цитрусовая свежесть в сочетании с греческой мастикой — освежающий летний вариант",
    time: "3 часа",
  },
  {
    emoji: "🌿",
    title: "С мятой и розмарином",
    desc: "Авторский рецепт нашего сообщества — травяной аромат и нежная текстура",
    time: "3.5 часа",
  },
];

const events = [
  { date: "25 апр", title: "Мастер-класс по розовому лукуму", place: "Москва, Патриаршие" },
  { date: "10 мая", title: "Дегустация новых сортов", place: "Онлайн" },
  { date: "1 июня", title: "Летний слёт сообщества", place: "Санкт-Петербург" },
];

export default function HomePage({ onNavigate }: HomePageProps) {
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Decorative circles */}
        <div
          className="absolute -top-32 -right-32 w-96 h-96 rounded-full opacity-30"
          style={{ background: "radial-gradient(circle, var(--rose-mid), transparent 70%)" }}
        />
        <div
          className="absolute bottom-0 -left-20 w-80 h-80 rounded-full opacity-20"
          style={{ background: "radial-gradient(circle, var(--sand-mid), transparent 70%)" }}
        />

        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center py-20">
          <div className="space-y-8 opacity-0-start animate-fade-in-up">
            <span
              className="inline-block font-golos text-xs tracking-[0.3em] uppercase px-4 py-2 rounded-full"
              style={{ background: "var(--rose-light)", color: "var(--rose-deep)" }}
            >
              Сообщество ценителей
            </span>
            <h1
              className="font-cormorant text-6xl lg:text-8xl leading-none"
              style={{ color: "hsl(var(--foreground))", fontWeight: 300 }}
            >
              Искусство
              <br />
              <em style={{ color: "var(--rose-deep)", fontStyle: "italic" }}>рахат-лукума</em>
            </h1>
            <p className="font-golos text-lg leading-relaxed" style={{ color: "hsl(var(--muted-foreground))", maxWidth: "480px" }}>
              Место, где встречаются те, кто ценит нежность восточной сладости — её историю, 
              тонкость ароматов и магию приготовления.
            </p>
            <div className="flex flex-wrap gap-4 opacity-0-start animate-fade-in-up delay-300">
              <button
                onClick={() => onNavigate("about")}
                className="px-8 py-3 rounded-full font-golos text-sm tracking-wider transition-all duration-300 hover:scale-105"
                style={{ background: "var(--rose-deep)", color: "#fff" }}
              >
                О сообществе
              </button>
              <button
                onClick={() => onNavigate("contacts")}
                className="px-8 py-3 rounded-full font-golos text-sm tracking-wider transition-all duration-300 hover:scale-105"
                style={{ border: "1px solid var(--rose-deep)", color: "var(--rose-deep)", background: "transparent" }}
              >
                Присоединиться
              </button>
            </div>
          </div>

          <div className="relative opacity-0-start animate-fade-in delay-200">
            <div
              className="absolute inset-0 rounded-3xl"
              style={{ background: "linear-gradient(135deg, var(--rose-light), var(--sand))", transform: "rotate(3deg)" }}
            />
            <img
              src="https://cdn.poehali.dev/projects/3bc06ef7-9f27-4fd1-a60f-8707b7ba84a7/files/6da0852c-c8b4-4b50-b540-27a134a724c3.jpg"
              alt="Рахат-лукум"
              className="relative rounded-3xl w-full object-cover animate-float"
              style={{ aspectRatio: "1/1", boxShadow: "0 30px 80px rgba(201, 107, 138, 0.25)" }}
            />
            <div
              className="absolute -bottom-6 -left-6 px-6 py-4 rounded-2xl"
              style={{ background: "rgba(255,255,255,0.9)", backdropFilter: "blur(12px)", boxShadow: "0 8px 32px rgba(0,0,0,0.08)" }}
            >
              <p className="font-cormorant text-2xl" style={{ color: "var(--rose-deep)" }}>300+</p>
              <p className="font-golos text-xs" style={{ color: "hsl(var(--muted-foreground))" }}>участников</p>
            </div>
            <div
              className="absolute -top-4 -right-4 px-5 py-3 rounded-2xl"
              style={{ background: "rgba(255,255,255,0.9)", backdropFilter: "blur(12px)", boxShadow: "0 8px 32px rgba(0,0,0,0.08)" }}
            >
              <p className="font-cormorant text-xl" style={{ color: "var(--gold)" }}>✦ с 2019</p>
            </div>
          </div>
        </div>
      </section>

      {/* Recipes */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span
              className="font-golos text-xs tracking-[0.3em] uppercase"
              style={{ color: "var(--rose-deep)" }}
            >
              Коллекция
            </span>
            <h2
              className="font-cormorant text-5xl lg:text-6xl mt-3"
              style={{ fontWeight: 300, color: "hsl(var(--foreground))" }}
            >
              Избранные рецепты
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {recipes.map((r, i) => (
              <div
                key={i}
                className="group relative p-8 rounded-3xl transition-all duration-500 hover:-translate-y-2 cursor-pointer"
                style={{
                  background: "rgba(255,255,255,0.7)",
                  backdropFilter: "blur(12px)",
                  border: "1px solid rgba(201, 160, 110, 0.2)",
                  boxShadow: "0 4px 24px rgba(201, 107, 138, 0.08)",
                }}
              >
                <div className="text-4xl mb-5">{r.emoji}</div>
                <h3
                  className="font-cormorant text-2xl mb-3"
                  style={{ color: "hsl(var(--foreground))", fontWeight: 400 }}
                >
                  {r.title}
                </h3>
                <p className="font-golos text-sm leading-relaxed mb-6" style={{ color: "hsl(var(--muted-foreground))" }}>
                  {r.desc}
                </p>
                <div className="flex items-center gap-2">
                  <span
                    className="font-golos text-xs px-3 py-1 rounded-full"
                    style={{ background: "var(--rose-light)", color: "var(--rose-deep)" }}
                  >
                    ⏱ {r.time}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Events */}
      <section className="py-24 px-6" style={{ background: "rgba(255,255,255,0.4)" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="font-golos text-xs tracking-[0.3em] uppercase" style={{ color: "var(--rose-deep)" }}>
              Календарь
            </span>
            <h2
              className="font-cormorant text-5xl lg:text-6xl mt-3"
              style={{ fontWeight: 300, color: "hsl(var(--foreground))" }}
            >
              Ближайшие встречи
            </h2>
          </div>
          <div className="space-y-4 max-w-3xl mx-auto">
            {events.map((e, i) => (
              <div
                key={i}
                className="flex items-center gap-6 p-6 rounded-2xl transition-all duration-300 hover:scale-[1.01] cursor-pointer"
                style={{
                  background: "rgba(255,255,255,0.8)",
                  border: "1px solid rgba(201, 160, 110, 0.2)",
                  boxShadow: "0 2px 16px rgba(201, 107, 138, 0.06)",
                }}
              >
                <div
                  className="flex-shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center text-center"
                  style={{ background: "var(--rose-light)" }}
                >
                  <span className="font-cormorant text-lg leading-tight" style={{ color: "var(--rose-deep)" }}>
                    {e.date}
                  </span>
                </div>
                <div className="flex-1">
                  <p className="font-cormorant text-xl" style={{ color: "hsl(var(--foreground))" }}>
                    {e.title}
                  </p>
                  <p className="font-golos text-sm mt-1" style={{ color: "hsl(var(--muted-foreground))" }}>
                    📍 {e.place}
                  </p>
                </div>
                <span
                  className="font-golos text-xs px-4 py-2 rounded-full"
                  style={{ border: "1px solid var(--rose-deep)", color: "var(--rose-deep)" }}
                >
                  Подробнее
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 text-center" style={{ borderTop: "1px solid rgba(201, 160, 110, 0.2)" }}>
        <p className="font-cormorant text-2xl" style={{ color: "var(--rose-deep)", fontStyle: "italic" }}>
          ✦ Рахат-Лукум
        </p>
        <p className="font-golos text-sm mt-2" style={{ color: "hsl(var(--muted-foreground))" }}>
          Сообщество ценителей восточных сладостей
        </p>
      </footer>
    </main>
  );
}
