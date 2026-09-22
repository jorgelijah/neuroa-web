import heroImg from "@/assets/hero-bienestar.png";

export default function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative min-h-[85vh] flex items-center justify-center overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24"
    >
      {/* Elementos decorativos de fondo sutiles */}
      <div
        className="absolute top-1/4 right-0 w-[420px] h-[420px] rounded-full opacity-25 pointer-events-none"
        style={{ background: "#8ab4ec", filter: "blur(90px)" }}
      />
      <div
        className="absolute bottom-10 left-0 w-[300px] h-[300px] rounded-full opacity-20 pointer-events-none"
        style={{ background: "#dbe9fb", filter: "blur(70px)" }}
      />

      <div className="relative max-w-6xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Columna izquierda: Textos y CTAs */}
          <div className="lg:col-span-7 text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-accent text-accent-foreground text-xs font-semibold px-4 py-1.5 rounded-full mb-6 border border-blue-light/40">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              Psicología virtual · Basada en evidencia
            </div>

            {/* Título Principal */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-foreground mb-6 leading-[1.1]">
              Terapia práctica para una{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #2f5fb0, #8ab4ec)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                mente clara
              </span>
            </h1>

            {/* Descripción */}
            <p className="text-base sm:text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed">
              Un abordaje integral que combina la terapia cognitivo-conductual con la reestructuración de hábitos para recuperar el orden mental, la constancia y el liderazgo sobre tu vida.
            </p>

            {/* Botones de Acción */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-6">
              <a
                href="https://wa.me/51900172786?text=Hola,%20quiero%20agendar%20mi%20Sesi%C3%B3n%20de%20Claridad"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-primary text-primary-foreground font-semibold px-8 py-4 rounded-full shadow-button hover:opacity-90 hover:scale-[1.02] transition-all text-sm"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Agendar por WhatsApp
              </a>

              <a
                href="#screening"
                className="w-full sm:w-auto inline-flex items-center justify-center bg-white text-primary font-semibold px-8 py-4 rounded-full border border-primary/25 shadow-sm hover:bg-slate-50 transition-all text-sm"
              >
                Test de Claridad Mental
              </a>
            </div>

            {/* Enlace discreto a Conocer el método */}
            <div className="flex justify-center lg:justify-start">
              <a
                href="#metodo"
                className="inline-flex items-center gap-1.5 text-[14px] text-muted-foreground hover:text-foreground transition-colors font-normal"
              >
                Conocer el método
                <svg
                  className="w-3.5 h-3.5 opacity-70"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </a>
            </div>

            {/* Trust Badges */}
            <div className="mt-10 pt-8 border-t border-border/60 flex flex-wrap gap-y-2 gap-x-6 justify-center lg:justify-start text-xs text-muted-foreground">
              <span>✓ TCC & Neurociencia aplicada</span>
              <span>✓ Objetivos medibles semana a semana</span>
              <span>✓ 100% virtual y confidencial</span>
            </div>
          </div>

          {/* Columna derecha: Tu nueva imagen de bienestar */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <div className="relative w-full max-w-[340px] md:max-w-[380px]">
              {/* Sombra suave decorativa */}
              <div
                className="absolute inset-0 rounded-3xl translate-x-2.5 translate-y-2.5 pointer-events-none"
                style={{ background: "#8ab4ec", opacity: 0.25 }}
              />
              
              {/* Contenedor limpio de la fotografía */}
              <div className="relative rounded-3xl overflow-hidden shadow-card border border-white/80 aspect-[4/5] bg-white">
                <img
                  src={heroImg}
                  alt="Persona disfrutando de calma y claridad mental"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
