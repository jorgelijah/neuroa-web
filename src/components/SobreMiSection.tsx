import founderPhoto from "@/assets/foto-sobre-mi.png";
import { GraduationCap, Brain, Award } from "lucide-react";

const credentials = [
  { 
    icon: GraduationCap, 
    title: "Psicólogo Clínico",
    text: "Titulado y colegiado (C.Ps.P. N° 36036)" 
  },
  { 
    icon: Brain, 
    title: "Neurociencia Aplicada",
    text: "Enfoque en reestructuración de hábitos y conducta" 
  },
  { 
    icon: Award, 
    title: "Especialización TCC",
    text: "Formado en TCC y terapias basadas en evidencia" 
  },
];

export default function SobreMiSection() {
  return (
    <section id="sobre-mi" className="pt-6 pb-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
          
          {/* Foto compacta */}
          <div className="md:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[320px] md:max-w-[360px]">
              <div
                className="absolute inset-0 rounded-3xl translate-x-3 translate-y-3"
                style={{ background: "hsl(var(--blue-soft))" }}
              />
              <img
                src={founderPhoto}
                alt="Psicólogo Jorge Escobedo — Fundador de Neuroa"
                className="relative w-full object-cover rounded-3xl shadow-card aspect-[4/5]"
                style={{ objectPosition: "center top" }}
                loading="lazy"
              />
            </div>
          </div>

          {/* Contenido */}
          <div className="md:col-span-7">
            <p className="text-xs font-bold tracking-widest uppercase text-primary mb-2">
              Sobre mí
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground mb-4 leading-tight">
              Acompañarte es
              <br />
              mi propósito
            </h2>
            
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-3">
              Hola, soy el psicólogo Jorge Escobedo y fundé <strong className="text-foreground font-semibold">Neuroa</strong> bajo una premisa clara: el bienestar no tiene por qué ser un proceso ambiguo ni prolongarse indefinidamente. Mi enfoque integra la precisión de la neurociencia con herramientas prácticas de la Terapia Cognitivo-Conductual (TCC) para generar claridad y orden desde las primeras sesiones.
            </p>
            
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-6">
              En este espacio unimos la calidez humana con la evidencia científica. No buscamos generar dependencia de la consulta, sino darte el mapa, el método y las herramientas necesarias para que consolides tu propia autonomía mental.
            </p>

            {/* Tarjetas de credenciales */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {credentials.map((c, i) => (
                <div 
                  key={i} 
                  className="bg-white/80 p-3.5 rounded-2xl border border-border/80 shadow-soft flex flex-col justify-start"
                >
                  <div className="w-8 h-8 rounded-xl bg-accent flex items-center justify-center shrink-0 mb-2">
                    <c.icon className="w-4 h-4 text-accent-foreground" />
                  </div>
                  <h4 className="text-xs font-bold text-foreground mb-0.5">
                    {c.title}
                  </h4>
                  <p className="text-[11px] text-muted-foreground leading-tight">
                    {c.text}
                  </p>
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
