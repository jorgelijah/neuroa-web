import founderPhoto from "@/assets/foto-sobre-mi.png";
import { GraduationCap, Brain, Award } from "lucide-react";

const credentials = [
  { icon: GraduationCap, text: "Psicólogo clínico titulado" },
  { icon: Brain, text: "Enfoque basado en neurociencia cognitiva" },
  { icon: Award, text: "Formado en TCC y terapias de tercera generación" },
];

export default function SobreMiSection() {
  return (
    <section id="sobre-mi" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Photo */}
          <div className="relative">
            <div
              className="absolute inset-0 rounded-3xl translate-x-4 translate-y-4"
              style={{ background: "hsl(var(--blue-soft))" }}
            />
            <img
              src= {founderPhoto}
              alt="Fundador de Neuroa — Psicólogo especializado"
              className="relative w-full object-cover rounded-3xl shadow-card aspect-[4/5]"
              style={{ objectPosition: "center top" }}
            />
          </div>

          {/* Content */}
          <div>
            <p className="text-xs font-bold tracking-widest uppercase text-primary mb-3">
              Sobre mí
            </p>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-foreground mb-6">
              Acompañarte es
              <br />
              mi propósito
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Hola, soy el psicólogo Jorge Escobedo y fundé Neuroa bajo una convicción clara: el
              bienestar no tiene por qué ser un proceso largo ni complicado. Mi
              enfoque integra la precisión de la neurociencia con herramientas
              prácticas de la Terapia Cognitivo-Conductual (TCC) para que logres
              resultados tangibles desde nuestro primer encuentro.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              En este espacio, la calidez humana y la evidencia científica se
              unen para devolverte el liderazgo sobre tu vida. No buscamos
              procesos de dependencia, sino darte el mapa y las habilidades
              necesarias para que tú seas el experto en tu propia mente.
            </p>

            {/* Credentials */}
            <div className="space-y-4">
              {credentials.map((c, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-accent flex items-center justify-center shrink-0">
                    <c.icon className="w-4 h-4 text-accent-foreground" />
                  </div>
                  <span className="text-foreground font-medium text-sm">
                    {c.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
