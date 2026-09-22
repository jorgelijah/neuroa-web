import { useState } from "react";
import { Brain, Compass, Target, Sparkles, ArrowRight, RotateCw, CheckCircle2 } from "lucide-react";

const pasosMetodo = [
  {
    numero: "01",
    titulo: "Desactivación y Claridad",
    tag: "Fase de Evaluación",
    descripcion:
      "Identificamos bucles de sobrepensamiento, fuentes de saturación y patrones de evitación que drenan tu energía diaria.",
    icon: Brain,
    herramientas: [
      "Mapeo de detonantes y fatiga mental",
      "Registro de conductas de evitación",
      "Estructura inicial de prioridades",
    ],
    entregable: "Diagnóstico conductual claro y hoja de ruta inicial.",
  },
  {
    numero: "02",
    titulo: "Reestructuración Cognitiva",
    tag: "Fase de Trabajo",
    descripcion:
      "Herramientas de TCC para intervenir creencias limitantes y autoexigencia, transformando el diálogo interno en respuestas funcionales.",
    icon: Compass,
    herramientas: [
      "Reencuadre cognitivo estructurado",
      "Desarticulación del perfeccionismo",
      "Regulación emocional práctica",
    ],
    entregable: "Respuestas funcionales ante el estrés y la autoexigencia.",
  },
  {
    numero: "03",
    titulo: "Diseño de Hábitos y Foco",
    tag: "Fase de Consolidación",
    descripcion:
      "Sistemas sostenibles en tu rutina: higiene de sueño, gestión de pantallas y bloques de acción para asegurar autonomía.",
    icon: Target,
    herramientas: [
      "Optimización de descanso y sueño",
      "Reducción de fricción para iniciar tareas",
      "Arquitectura de entorno sin distracciones",
    ],
    entregable: "Un sistema diario que se sostiene con naturalidad.",
  },
];

export default function MetodoSection() {
  const [flipped, setFlipped] = useState<number | null>(null);

  const toggleFlip = (index: number) => {
    setFlipped(flipped === index ? null : index);
  };

  return (
    <section id="metodo" className="pt-4 pb-16 px-4 sm:px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Encabezado */}
        <div className="max-w-2xl mb-8 sm:mb-10">
          <p className="text-xs font-bold tracking-widest uppercase text-primary mb-2">
            Nuestro Método
          </p>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-foreground tracking-tight mb-3">
            Un proceso estructurado para recuperar el control
          </h2>
          <p className="text-muted-foreground text-xs sm:text-base leading-relaxed">
            Diseñamos un plan adaptado a tu situación real, integrando la evidencia de la Terapia Cognitivo-Conductual con principios de diseño de hábitos para lograr cambios observables desde las primeras semanas.
          </p>
        </div>

        {/* Grid Adaptable y Compacto */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 sm:gap-6 mb-10">
          {pasosMetodo.map((p, idx) => {
            const Icon = p.icon;
            const isFlipped = flipped === idx;

            return (
              <div
                key={idx}
                onClick={() => toggleFlip(idx)}
                className="min-h-[220px] sm:h-[300px] cursor-pointer [perspective:1000px] group"
              >
                <div
                  className={`relative w-full h-full duration-500 [transform-style:preserve-3d] transition-transform rounded-2xl sm:rounded-3xl ${
                    isFlipped ? "[transform:rotateY(180deg)]" : ""
                  }`}
                >
                  {/* FRENTE */}
                  <div className="w-full h-full [backface-visibility:hidden] bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-border/80 shadow-soft flex flex-col justify-between hover:shadow-card hover:border-primary/40 transition-all">
                    <div>
                      <div className="flex items-center justify-between mb-2 sm:mb-3">
                        <span className="text-xl sm:text-3xl font-black text-primary/20 group-hover:text-primary transition-colors">
                          {p.numero}
                        </span>
                        <div className="w-8 h-8 rounded-xl bg-accent text-primary flex items-center justify-center">
                          <Icon size={16} />
                        </div>
                      </div>

                      <span className="text-[10px] font-bold uppercase tracking-wider text-primary block mb-1">
                        {p.tag}
                      </span>
                      <h3 className="text-base sm:text-lg font-bold text-foreground mb-1.5 leading-snug">
                        {p.titulo}
                      </h3>
                      <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                        {p.descripcion}
                      </p>
                    </div>

                    <div className="flex items-center justify-between pt-2.5 mt-3 border-t border-border/40 text-[11px] font-semibold text-primary/80 group-hover:text-primary transition-colors">
                      <span>
                        <span className="sm:hidden">Toca para ver qué trabajamos</span>
                        <span className="hidden sm:inline">Haz clic para ver qué trabajamos</span>
                      </span>
                      <RotateCw size={12} className="opacity-70 group-hover:rotate-180 transition-transform duration-500" />
                    </div>
                  </div>

                  {/* REVERSO */}
                  <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] bg-gradient-to-br from-primary to-[#1845a0] text-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-card flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[10px] font-bold uppercase tracking-wider bg-white/20 px-2 py-0.5 rounded-full">
                          Etapa {p.numero}
                        </span>
                        <RotateCw size={13} className="text-white/70" />
                      </div>

                      <h4 className="text-xs font-bold uppercase tracking-wide text-white/90 mb-2">
                        Herramientas clave:
                      </h4>

                      <ul className="space-y-1 mb-2">
                        {p.herramientas.map((item, i) => (
                          <li key={i} className="flex items-start gap-1.5 text-[11px] text-white/90 leading-tight">
                            <CheckCircle2 size={12} className="text-[#8ab4ec] shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-2 border-t border-white/20">
                      <p className="text-[9px] text-white/70 uppercase font-semibold">Resultado clave:</p>
                      <p className="text-[11px] font-medium text-white/95 leading-snug">
                        {p.entregable}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Banner Explicativo TCC + CTA */}
        <div className="bg-gradient-to-r from-[#dbe9fb]/70 via-white to-[#dbe9fb]/40 rounded-2xl sm:rounded-3xl p-5 sm:p-8 border border-[#8ab4ec]/40 shadow-sm flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="max-w-2xl text-center md:text-left">
            <div className="inline-flex items-center gap-1.5 text-[10px] sm:text-xs font-bold text-primary uppercase tracking-wider mb-1">
              <Sparkles size={12} /> ¿Por qué TCC?
            </div>
            <h4 className="text-base sm:text-xl font-bold text-foreground mb-1">
              Psicoterapia basada en evidencia
            </h4>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              La TCC analiza la relación directa entre lo que piensas, sientes y haces, brindando herramientas activas para desarticular bloqueos en tu rutina diaria.
            </p>
          </div>

          <a
            href="#servicios"
            className="w-full md:w-auto text-center shrink-0 inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground font-semibold px-5 py-2.5 rounded-full text-xs sm:text-sm shadow-button hover:opacity-90 transition-all"
          >
            Ver cómo empezar <ArrowRight size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}
