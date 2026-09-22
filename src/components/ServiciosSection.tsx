import { Check, ArrowRight, Clock, Calendar, ShieldCheck, Sparkles } from "lucide-react";

export default function ServiciosSection() {
  return (
    <section id="servicios" className="pt-8 pb-20 px-4 sm:px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Cabecera */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <p className="text-xs font-bold tracking-widest uppercase text-primary mb-2">
            Estructura del Acompañamiento
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground tracking-tight mb-3">
            Comienza tu camino
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
            Un método estructurado y transparente para que sepas con total certeza cómo iniciamos y cómo avanzamos en tu proceso.
          </p>
        </div>

        {/* Grid de 2 Fases */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-stretch max-w-5xl mx-auto mb-12">

          {/* FASE 1: Sesión de Claridad (Punto de entrada único) */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 md:p-10 border-2 border-primary shadow-card flex flex-col justify-between relative">
            <div className="absolute -top-3.5 left-6 sm:left-8 bg-primary text-primary-foreground text-[11px] font-bold uppercase tracking-wider px-3.5 py-1 rounded-full shadow-sm">
              Paso 1: Punto de Partida
            </div>

            <div>
              <div className="flex items-center justify-between mb-3 mt-2">
                <h3 className="text-2xl font-bold text-foreground">Sesión de Claridad</h3>
                <span className="text-xs font-semibold px-3 py-1 bg-accent text-accent-foreground rounded-full flex items-center gap-1.5">
                  <Clock size={13} /> 45 - 60 min
                </span>
              </div>

              <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed mb-6">
                Evaluación individual obligatoria antes de iniciar el tratamiento. Analizamos tu motivo de consulta, identificamos bloqueos conductuales y trazamos tu hoja de ruta personalizada.
              </p>

              <div className="flex items-baseline gap-2 mb-6">
                <span className="text-4xl font-extrabold text-foreground">S/ 50</span>
                <span className="text-xs text-muted-foreground font-medium">pago único de evaluación</span>
              </div>

              <ul className="space-y-3 mb-8">
                {[
                  "Evaluación clínica y conductual del problema",
                  "Diseño inicial de tu mapa de ruta de objetivos",
                  "Pautas prácticas inmediatas para tu día a día",
                  "Entrega de tu protocolo inicial de foco y hábitos",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-foreground">
                    <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <a
                href="https://wa.me/51900172786?text=Hola,%20quiero%20agendar%20mi%20Sesi%C3%B3n%20de%20Claridad"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground font-semibold py-3.5 sm:py-4 rounded-full shadow-button hover:opacity-90 hover:scale-[1.02] transition-all text-sm"
              >
                Agendar Sesión de Claridad <ArrowRight size={16} />
              </a>

              {/* Microcopy de confianza y bajo riesgo */}
              <div className="mt-3 text-center space-y-1">
                <p className="text-[12px] font-semibold text-foreground">
                  Solo pagas S/ 50 hoy. <span className="font-normal text-muted-foreground">El resto se define contigo al final de la sesión.</span>
                </p>
                <p className="text-[11px] text-muted-foreground/80">
                  Confirmación previa vía Yape, Plin o transferencia bancaria.
                </p>
              </div>
            </div>

          </div>

          {/* FASE 2: Proceso Continuo */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 md:p-10 border border-border/90 shadow-soft flex flex-col justify-between relative">
            <div className="absolute -top-3.5 left-6 sm:left-8 bg-slate-100 text-foreground text-[11px] font-bold uppercase tracking-wider px-3.5 py-1 rounded-full border border-border">
              Paso 2: Intervención Activa
            </div>

            <div>
              <div className="flex items-center justify-between mb-3 mt-2">
                <h3 className="text-2xl font-bold text-foreground">Programa de Enfoque y Acción</h3>
                <span className="text-xs font-semibold px-3 py-1 bg-secondary text-secondary-foreground rounded-full flex items-center gap-1.5">
                  <Calendar size={13} /> Frecuencia semanal
                </span>
              </div>

              <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed mb-6">
                El proceso de cambio real. Aplicamos protocolos de TCC para transformar el diálogo interno, regular el estrés y consolidar rutinas que se sostengan en el tiempo.
              </p>

              <div className="mb-6">
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl sm:text-4xl font-extrabold text-foreground">Desde S/ 65</span>
                  <span className="text-xs text-muted-foreground font-medium">por sesión de seguimiento</span>
                </div>
                <p className="text-[11px] text-primary font-medium mt-1">
                  Opción de sesión a sesión o tarifa preferencial por proceso completo de 6 sesiones.
                </p>
              </div>

              <ul className="space-y-3 mb-8">
                {[
                  "Estructura mínima de 6 sesiones para consolidar cambios cognitivos y conductuales",
                  "Reestructuración cognitiva aplicada a la autoexigencia y el sobrepensamiento",
                  "Diseño ambiental y rutinas de sueño, foco y desconexión sin culpa",
                  "Acompañamiento estructurado con revisión de avances sesión a sesión",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-foreground">
                    <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-4 rounded-2xl bg-[#FFF9F2] border border-border/60 text-xs text-muted-foreground leading-relaxed flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <div>
                <strong className="text-foreground font-semibold block mb-0.5">Definición de plan</strong>
                La cantidad exacta de sesiones y la modalidad de pago se acuerdan al cierre de tu Sesión de Claridad, según tus tiempos y objetivos prioritarios.
              </div>
            </div>
          </div>

        </div>

        {/* Barra de Transparencia inferior */}
        <div className="max-w-4xl mx-auto text-center border-t border-border/60 pt-6">
          <p className="text-xs text-muted-foreground">
            * Cada sesión se confirma con al menos 24 horas de anticipación. Flexibilidad para reprogramar avisando con anticipación sin costos adicionales.
          </p>
        </div>
      </div>
    </section>
  );
}
