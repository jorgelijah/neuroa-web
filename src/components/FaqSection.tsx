import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "¿Cómo son las sesiones?",
    a: "Las sesiones son 100% virtuales, realizadas a través de Google Meet. Antes de comenzar, te enviaremos un enlace privado. Solo necesitas un dispositivo con cámara, micrófono y conexión a internet. Son espacios confidenciales, cómodos y sin interrupciones.",
  },
  {
    q: "¿Es efectiva la terapia breve?",
    a: "Sí. La terapia breve basada en TCC cuenta con amplio respaldo científico para una gran variedad de problemas como ansiedad, estrés, dificultades emocionales y más. La clave es trabajar con objetivos claros y herramientas concretas desde la primera sesión, lo que permite avances reales en menos tiempo.",
  },
  {
    q: "¿Cómo realizo el pago?",
    a: "Aceptamos Yape, Plin y transferencias bancarias. La Sesión de Claridad se abona para confirmar tu espacio. En el caso de los programas, el pago es único al inicio para simplificar la gestión y centrarnos totalmente en tu proceso desde el primer día. Te enviamos los datos de pago al agendar por WhatsApp. ¡Es muy sencillo!",
  },
  {
    q: "¿Mis datos y conversaciones son confidenciales?",
    a: "Absolutamente. Todos los datos personales y el contenido de las sesiones están protegidos bajo estrictos protocolos de seguridad y ética profesional. La confidencialidad es un pilar fundamental de nuestra práctica.",
  },
  {
    q: "¿Puedo cancelar o reprogramar una sesión?",
    a: "Sí. Te pedimos que nos avises con al menos 24 horas de anticipación para cancelar o reprogramar sin costo. Entendemos que los imprevistos ocurren, y siempre buscamos la mejor solución para ti.",
  },
  {
    q: "¿Para qué tipo de problemas puedo pedir ayuda?",
    a: "Trabajamos con ansiedad, estrés crónico, baja autoestima, dificultades para tomar decisiones, procrastinación, duelos, dificultades en relaciones y más. En la primera sesión evaluamos juntos tu situación y definimos si podemos ayudarte.",
  },
];

export default function FaqSection() {
  return (
    <section
      id="preguntas"
      className="py-24 px-6"
      style={{ background: "hsl(var(--cream-deep))" }}
    >
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="mb-16 text-center">
          <p className="text-xs font-bold tracking-widest uppercase text-primary mb-3">
            Preguntas frecuentes
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-foreground">
            Resolvemos tus dudas
          </h2>
        </div>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="bg-card border border-border rounded-2xl px-6 shadow-card data-[state=open]:shadow-soft transition-all"
            >
              <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline py-5 text-base">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-5 text-sm">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">
            ¿Tienes más preguntas? Escríbenos directamente.
          </p>
          <a
            href="https://wa.me/51900172786?text=Hola,%20tengo%20una%20consulta%20sobre%20Neuroa"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-8 py-4 rounded-full shadow-button hover:opacity-90 hover:scale-105 transition-all"
          >
            Consultar por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
