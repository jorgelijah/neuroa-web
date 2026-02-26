import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Inicio", href: "#inicio" },
  { label: "Método", href: "#metodo" },
  { label: "Servicios", href: "#servicios" },
  { label: "Sobre mí", href: "#sobre-mi" },
  { label: "Preguntas", href: "#preguntas" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#FFF9F2]/95 border-b border-slate-200 shadow-sm backdrop-blur-md"
          : "bg-[#FFF9F2] border-b border-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <a href="#inicio" className="flex items-center gap-2 group">
          <img
            src="/logo-neuroa.png"
            alt="Neuroa Logo"
            className="h-14 w-auto object-contain"
          />
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* CTA desktop */}
        <a
          href="https://wa.me/51900172786?text=Hola,%20quiero%20agendar%20una%20sesi%C3%B3n"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center gap-2 bg-primary text-primary-foreground text-sm font-semibold px-5 py-2.5 rounded-full shadow-button hover:opacity-90 transition-all duration-200 hover:scale-105"
        >
          Agendar
        </a>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#FFF9F2] border-b border-slate-100 px-6 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-base font-medium text-foreground py-1"
            >
              {l.label}
            </a>
          ))}
          <a
            href="https://wa.me/51900172786?text=Hola,%20quiero%20agendar%20una%20sesi%C3%B3n"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex justify-center items-center bg-primary text-primary-foreground text-sm font-semibold px-5 py-3 rounded-full shadow-button"
          >
            Agendar por WhatsApp
          </a>
        </div>
      )}
    </nav>
  );
}
