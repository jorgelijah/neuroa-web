import { Brain, Heart, Zap } from "lucide-react";

const pillars = [
  {
    icon: Brain,
    title: "Técnicas que funcionan",
    description:
      "Usamos herramientas probadas por la ciencia para entender cómo funciona tu cerebro y cómo cambiar tus hábitos.",
  },
  {
    icon: Heart,
    title: "Calidez humana",
    description:
      "Tu espacio seguro, sin juicios. Te escuchamos y acompañamos de forma genuina.",
  },
  {
    icon: Zap,
    title: "Eficacia práctica",
    description:
      "Desde la primera sesión obtendrás herramientas concretas. El objetivo es que seas autónomo y no dependas de la terapia para sentirte bien.",
  },
];

export default function MetodoSection() {
  return (
    <section id="metodo" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="max-w-xl mb-16">
          <p className="text-xs font-bold tracking-widest uppercase text-primary mb-3">
            Nuestro método
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-foreground mb-4">
            Ciencia y calidez, <br className="hidden sm:block" />
            en equilibrio
          </h2>
          <p className="text-muted-foreground text-lg">
            Combinamos lo mejor de la ciencia con un trato humano para que
            recuperes el control de tu bienestar
          </p>
        </div>

        {/* Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((p, i) => (
            <div
              key={i}
              className="group bg-card rounded-2xl p-8 border border-border shadow-card hover:shadow-soft hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-2xl bg-accent flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                <p.icon className="w-6 h-6 text-accent-foreground group-hover:text-primary-foreground transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                {p.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {p.description}
              </p>
            </div>
          ))}
        </div>

        {/* Accent strip */}
        <div
          className="mt-12 rounded-2xl p-8 flex flex-col md:flex-row items-center gap-6"
          style={{ background: "hsl(var(--blue-soft))" }}
        >
          <div className="flex-1">
            <h3 className="text-xl font-bold text-foreground mb-2">
              ¿Cómo funciona la Terapia Cognitivo-Conductual?
            </h3>
            <p className="text-muted-foreground">
              La TCC te ayuda a identificar esos
              pensamientos que te frenan y a cambiarlos por acciones que te den
              claridad. Es entrenar tu mente para reaccionar de forma distinta.
            </p>
          </div>
          <a
            href="#servicios"
            className="shrink-0 inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-6 py-3 rounded-full shadow-button hover:opacity-90 transition-all hover:scale-105 text-sm"
          >
            Ver servicios
          </a>
        </div>
      </div>
    </section>
  );
}
