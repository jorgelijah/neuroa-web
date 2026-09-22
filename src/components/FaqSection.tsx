import { useState } from "react";
import { ChevronDown, HelpCircle, MessageCircle } from "lucide-react";

interface FAQItem {
  pregunta: string;
  respuesta: string;
}

const faqs: FAQItem[] = [
  {
    pregunta: "¿Cómo son las sesiones y qué necesito para conectarme?",
    respuesta:
      "Las sesiones son 100% virtuales y personalizadas, vía Google Meet o Zoom. Tienen una duración aproximada de 45 a 60 minutos. Solo necesitas un espacio privado y tranquilo, conexión a internet estable y un dispositivo con cámara y micrófono.",
  },
  {
    pregunta: "¿Es efectiva la psicoterapia online frente a la presencial?",
    respuesta:
      "Sí. La evidencia científica acumulada en Terapia Cognitivo-Conductual (TCC) demuestra que la modalidad virtual tiene exactamente la misma efectividad clínica que la presencial, con la ventaja de eliminar tiempos de traslado y permitirte trabajar tus herramientas directamente desde tu entorno cotidiano.",
  },
  {
    pregunta: "¿Cómo realizo el pago de la Sesión de Claridad?",
    respuesta:
      "Para la primera sesión abonas únicamente el valor inicial de S/ 50. Puedes pagar de manera rápida y segura mediante Yape, Plin o transferencia bancaria nacional (BCP, BBVA, Interbank). Tras enviar tu comprobante por WhatsApp, tu horario queda 100% reservado.",
  },
  {
    pregunta: "¿Mis datos y conversaciones son confidenciales?",
    respuesta:
      "Absolutamente. Todo lo conversado en sesión y tus datos personales están protegidos por el secreto profesional y el código de ética del Colegio de Psicólogos del Perú (C.Ps.P.). La privacidad y confidencialidad son totales e inviolables.",
  },
  {
    pregunta: "¿Puedo cancelar o reprogramar una sesión si tengo un imprevisto?",
    respuesta:
      "Por supuesto. Entendemos que surgen imprevistos. Puedes reprogramar tu cita sin costo adicional avisando con un mínimo de 24 horas de anticipación para poder reasignar el horario.",
  },
  {
    pregunta: "¿Para qué tipo de dificultades o motivos puedo pedir ayuda?",
    respuesta:
      "El espacio está orientado a personas que experimentan sobrecarga mental, rumiación o sobrepensamiento, ansiedad, procrastinación recurrente, dificultad para gestionar su tiempo, o que buscan recuperar el orden y la constancia en su vida diaria.",
  },
];

export default function FaqSection() {
  const [abierto, setAbierto] = useState<number | null>(null);

  const toggleAccordion = (idx: number) => {
    setAbierto(abierto === idx ? null : idx);
  };

  return (
    <section id="preguntas" className="py-20 px-4 sm:px-6 bg-[#1845a0] text-white relative overflow-hidden">
      {/* Resplandor decorativo de fondo */}
      <div
        className="absolute -top-32 -left-32 w-96 h-96 rounded-full opacity-20 pointer-events-none"
        style={{ background: "#8ab4ec", filter: "blur(100px)" }}
      />
      <div
        className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full opacity-15 pointer-events-none"
        style={{ background: "#dbe9fb", filter: "blur(90px)" }}
      />

      <div className="max-w-3xl mx-auto relative">
        {/* Cabecera de la sección */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-1.5 bg-white/10 text-[#dbe9fb] text-xs font-semibold px-3 py-1 rounded-full mb-3 border border-white/15">
            <HelpCircle size={13} />
            Preguntas Frecuentes
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-3">
            Resolvemos tus dudas
          </h2>
          <p className="text-[#dbe9fb]/80 text-xs sm:text-base leading-relaxed max-w-lg mx-auto">
            Todo lo que necesitas saber sobre el método, la modalidad de trabajo y el inicio de tu proceso.
          </p>
        </div>

        {/* Acordeón de preguntas */}
        <div className="space-y-3 mb-10">
          {faqs.map((faq, idx) => {
            const isOpen = abierto === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-white/20 overflow-hidden shadow-soft transition-all duration-200"
              >
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 transition-colors hover:bg-slate-50/80"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-bold text-foreground leading-snug">
                    {faq.pregunta}
                  </span>
                  <ChevronDown
                    size={18}
                    className={`text-primary shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-4 sm:px-5 pb-4 pt-1 text-xs sm:text-sm text-muted-foreground leading-relaxed border-t border-slate-100 bg-slate-50/40">
                    {faq.respuesta}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Mini CTA final al pie de las preguntas */}
        <div className="text-center pt-4 border-t border-white/15 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs sm:text-sm text-[#dbe9fb]/90">
            ¿Tienes alguna consulta específica que no esté aquí?
          </p>
          <a
            href="https://wa.me/51900172786?text=Hola,%20tengo%20una%20duda%20sobre%20las%20sesiones"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-primary font-semibold px-5 py-2.5 rounded-full text-xs sm:text-sm hover:bg-[#dbe9fb] transition-all shadow-sm"
          >
            <MessageCircle size={15} /> Consultar por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
