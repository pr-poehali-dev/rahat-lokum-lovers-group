type Page = "home" | "about" | "contacts";

interface NavigationProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

const links: { id: Page; label: string }[] = [
  { id: "home", label: "Главная" },
  { id: "about", label: "О нас" },
  { id: "contacts", label: "Контакты" },
];

export default function Navigation({ currentPage, onNavigate }: NavigationProps) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50" style={{ background: "rgba(253, 246, 240, 0.85)", backdropFilter: "blur(16px)", borderBottom: "1px solid rgba(201, 160, 110, 0.2)" }}>
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <button
          onClick={() => onNavigate("home")}
          className="font-cormorant text-2xl font-light tracking-widest"
          style={{ color: "var(--rose-deep)" }}
        >
          ✦ Лукум
        </button>
        <div className="flex items-center gap-8">
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => onNavigate(link.id)}
              className="font-golos text-sm tracking-wider transition-all duration-300 relative"
              style={{
                color: currentPage === link.id ? "var(--rose-deep)" : "hsl(var(--muted-foreground))",
                fontWeight: currentPage === link.id ? 500 : 300,
              }}
            >
              {link.label}
              {currentPage === link.id && (
                <span
                  className="absolute -bottom-1 left-0 right-0 h-px"
                  style={{ background: "var(--rose-deep)" }}
                />
              )}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
