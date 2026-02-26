import { Check, Star, ArrowRight } from "lucide-react";

const planClaridad = {
  name: "Sesión de Claridad",
  subtitle: "Paso 1: Evaluación y Mapa de Ruta",
  price: "S/ 50",
  duration: "45 min",
  description:
    "Es el punto de partida obligatorio. Aquí evaluamos tu caso y diseñamos la estructura de tu proceso antes de pasar a un programa.",
  features: [
    "Evaluación de motivo de consulta",
    "Diseño de tu plan personalizado",
    "Herramientas para empezar hoy mismo",
    "Entrega de tu 'Protocolo de Diseño de Foco'",
  ],
  cta: "Agendar Sesión Inicial",
};

const programas = [
  {
    name: "Mente Clara",
    subtitle: "Paso 2: Intervención",
    price: "S/ 210",
    duration: "+3 sesiones de trabajo",
    badge: "Recomendado",
    description:
      "Proceso enfocado en resolver el objetivo definido en tu Sesión de Claridad.",
    features: [
      "3 sesiones de intervención (50 min)",
      "Material de la 'Biblioteca de Recursos'",
      "Soporte prioritario por WhatsApp",
    ],
    cta: "Ver programa",
    highlight: true,
  },
  {
    name: "Mente Clara Plus",
    subtitle: "Paso 2: Consolidación",
    price: "S/ 280",
    duration: "+4 sesiones de trabajo",
    description:
      "Para casos que requieren un acompañamiento más extenso y cambios profundos.",
    features: [
      "4 sesiones de intervención (50 min)",
      "Acceso total a guías y audios",
      "Plan de prevención de recaídas",
    ],
    cta: "Ver programa",
    highlight: false,
  },
];

export default function ServiciosSection() {
  return (
    <section id="servicios" className="py-24 px-6 bg-[#FFF9F2]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xs font-bold tracking-widest uppercase text-[#1A52C1] mb-3">
            Tu Proceso
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#0D0D0D] mb-4">
            Comienza tu camino
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Un método estructurado para que sepas exactamente qué esperar en
            cada etapa.
          </p>
        </div>

        {/* PASO 1: SESIÓN DE CLARIDAD */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-8 justify-center">
            <span className="bg-[#1A52C1] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
              1
            </span>
            <h3 className="text-2xl font-bold">Empieza por aquí</h3>
          </div>

          <div className="max-w-3xl mx-auto bg-white rounded-3xl p-8 border-2 border-[#1A52C1] shadow-xl flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-1">
              <span className="text-[#1A52C1] font-bold text-sm uppercase tracking-tighter">
                {planClaridad.duration}
              </span>
              <h4 className="text-3xl font-extrabold mb-2">
                {planClaridad.name}
              </h4>
              <p className="text-[#1A52C1] font-medium mb-4">
                {planClaridad.subtitle}
              </p>
              <p className="text-muted-foreground mb-6">
                {planClaridad.description}
              </p>
              <div className="text-4xl font-black mb-6">
                {planClaridad.price}
              </div>
            </div>
            <div className="flex-1 bg-slate-50 rounded-2xl p-6 w-full">
              <ul className="space-y-3 mb-8">
                {planClaridad.features.map((f, j) => (
                  <li key={j} className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 mt-1 text-[#1A52C1]" />
                    <span className="text-sm font-medium">{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href="https://wa.me/51900172786?text=Hola,%20quiero%20empezar%20con%20la%20Sesión%20de%20Claridad"
                className="w-full bg-[#1A52C1] text-white py-4 rounded-full font-bold text-center flex justify-center items-center gap-2 hover:scale-105 transition-transform"
              >
                {planClaridad.cta} <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* PASO 2: PROGRAMAS */}
        <div>
          <div className="flex items-center gap-4 mb-8 justify-center">
            <span className="bg-slate-200 text-slate-600 w-8 h-8 rounded-full flex items-center justify-center font-bold">
              2
            </span>
            <h3 className="text-2xl font-bold text-slate-500">
              Continuidad del proceso
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {programas.map((plan, i) => (
              <div
                key={i}
                className={`rounded-3xl p-8 border flex flex-col ${plan.highlight ? "bg-[#1A52C1] text-white border-[#1A52C1] shadow-lg" : "bg-white border-slate-200"}`}
              >
                {plan.badge && (
                  <div className="bg-[#91DBF0] text-[#1A52C1] text-[10px] font-black uppercase px-2 py-1 rounded mb-4 self-start">
                    {plan.badge}
                  </div>
                )}
                <h4 className="text-xl font-bold">{plan.name}</h4>
                <p
                  className={`text-sm mb-4 ${plan.highlight ? "text-white/80" : "text-muted-foreground"}`}
                >
                  {plan.duration}
                </p>
                <div className="text-3xl font-black mb-6">{plan.price}</div>
                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((f, j) => (
                    <li key={j} className="flex items-start gap-2.5">
                      <Check
                        className={`w-4 h-4 mt-1 ${plan.highlight ? "text-[#91DBF0]" : "text-[#1A52C1]"}`}
                      />
                      <span className="text-sm">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* REFUERZO */}
        <div className="mt-16 text-center text-muted-foreground text-sm italic">
          * Sesiones de refuerzo disponibles para pacientes antiguos.
        </div>
      </div>
    </section>
  );
}
