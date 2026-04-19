import { useState } from "react";

export default function ContactsPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <main className="pt-28 pb-24">
      <section className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="font-golos text-xs tracking-[0.3em] uppercase" style={{ color: "var(--rose-deep)" }}>
            Связь
          </span>
          <h1 className="font-cormorant text-6xl lg:text-7xl mt-4" style={{ fontWeight: 300 }}>
            Контакты
          </h1>
          <p className="font-golos text-lg mt-6 mx-auto" style={{ color: "hsl(var(--muted-foreground))", maxWidth: "480px" }}>
            Хотите вступить в сообщество, задать вопрос или предложить сотрудничество?
            Мы всегда рады новым голосам.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form */}
          <div
            className="p-10 rounded-3xl"
            style={{ background: "rgba(255,255,255,0.75)", border: "1px solid rgba(201, 160, 110, 0.2)", boxShadow: "0 8px 40px rgba(201, 107, 138, 0.08)" }}
          >
            {sent ? (
              <div className="text-center py-12">
                <div className="text-5xl mb-6">🌹</div>
                <h3 className="font-cormorant text-3xl mb-3" style={{ color: "var(--rose-deep)" }}>
                  Спасибо!
                </h3>
                <p className="font-golos text-sm" style={{ color: "hsl(var(--muted-foreground))" }}>
                  Мы ответим вам в течение 1-2 дней
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <h2 className="font-cormorant text-3xl mb-8" style={{ fontWeight: 300 }}>
                  Написать нам
                </h2>
                <div>
                  <label className="font-golos text-xs tracking-wider uppercase block mb-2" style={{ color: "hsl(var(--muted-foreground))" }}>
                    Ваше имя
                  </label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl font-golos text-sm outline-none transition-all duration-200"
                    style={{
                      background: "var(--sand)",
                      border: "1px solid transparent",
                      color: "hsl(var(--foreground))",
                    }}
                    placeholder="Как вас зовут?"
                    required
                  />
                </div>
                <div>
                  <label className="font-golos text-xs tracking-wider uppercase block mb-2" style={{ color: "hsl(var(--muted-foreground))" }}>
                    Email
                  </label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl font-golos text-sm outline-none transition-all duration-200"
                    style={{
                      background: "var(--sand)",
                      border: "1px solid transparent",
                      color: "hsl(var(--foreground))",
                    }}
                    placeholder="your@email.com"
                    required
                  />
                </div>
                <div>
                  <label className="font-golos text-xs tracking-wider uppercase block mb-2" style={{ color: "hsl(var(--muted-foreground))" }}>
                    Сообщение
                  </label>
                  <textarea
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl font-golos text-sm outline-none transition-all duration-200 resize-none"
                    style={{
                      background: "var(--sand)",
                      border: "1px solid transparent",
                      color: "hsl(var(--foreground))",
                    }}
                    placeholder="Расскажите о себе или задайте вопрос..."
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-4 rounded-xl font-golos text-sm tracking-wider transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
                  style={{ background: "var(--rose-deep)", color: "#fff" }}
                >
                  Отправить
                </button>
              </form>
            )}
          </div>

          {/* Info */}
          <div className="space-y-8 pt-4">
            <div>
              <h2 className="font-cormorant text-3xl mb-6" style={{ fontWeight: 300 }}>
                Как нас найти
              </h2>
            </div>
            {[
              { icon: "📧", title: "Email", value: "hello@lukum-club.ru", hint: "Отвечаем в течение дня" },
              { icon: "💬", title: "Telegram-канал", value: "@lukum_community", hint: "Новости и анонсы встреч" },
              { icon: "📍", title: "Основная локация", value: "Москва, Патриаршие пруды", hint: "Встречи каждую субботу" },
            ].map((item, i) => (
              <div
                key={i}
                className="flex gap-5 p-6 rounded-2xl"
                style={{ background: "rgba(255,255,255,0.6)", border: "1px solid rgba(201, 160, 110, 0.15)" }}
              >
                <span className="text-2xl flex-shrink-0">{item.icon}</span>
                <div>
                  <p className="font-golos text-xs tracking-wider uppercase mb-1" style={{ color: "hsl(var(--muted-foreground))" }}>
                    {item.title}
                  </p>
                  <p className="font-cormorant text-xl" style={{ color: "hsl(var(--foreground))" }}>
                    {item.value}
                  </p>
                  <p className="font-golos text-xs mt-1" style={{ color: "hsl(var(--muted-foreground))" }}>
                    {item.hint}
                  </p>
                </div>
              </div>
            ))}

            <div
              className="p-6 rounded-2xl text-center"
              style={{ background: "var(--rose-light)", border: "1px solid rgba(201, 107, 138, 0.2)" }}
            >
              <p className="font-cormorant text-xl italic mb-2" style={{ color: "var(--rose-deep)" }}>
                «Рахат-лукум — это не просто сладость.
                Это воспоминание о чём-то нежном.»
              </p>
              <p className="font-golos text-xs" style={{ color: "hsl(var(--muted-foreground))" }}>
                — Амина, основательница
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
