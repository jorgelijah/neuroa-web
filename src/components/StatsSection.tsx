import { ShieldCheck, UserCheck, ThumbsUp } from "lucide-react";

export default function StatsSection() {
  return (
    <section className="w-full pb-16 px-6 -mt-8 relative z-10">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          
          {/* Item 1 */}
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 mb-2 flex items-center justify-center rounded-2xl bg-accent/50 text-primary">
              <ShieldCheck 
                className="w-8 h-8" 
                strokeWidth={2} 
              />
            </div>
            <h3 className="text-3xl font-extrabold text-primary mb-1">
              8 +
            </h3>
            <p className="text-[16px] font-bold text-foreground mb-1.5">
              Años De Experiencia
            </p>
            <p className="text-[13px] text-muted-foreground leading-relaxed px-4">
              Transformando la vida de nuestros pacientes
            </p>
          </div>

          {/* Item 2 */}
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 mb-2 flex items-center justify-center rounded-2xl bg-accent/50 text-primary">
              <UserCheck 
                className="w-8 h-8" 
                strokeWidth={2} 
              />
            </div>
            <h3 className="text-3xl font-extrabold text-primary mb-1">
              50 +
            </h3>
            <p className="text-[16px] font-bold text-foreground mb-1.5">
              Clientes Satisfechos
            </p>
            <p className="text-[13px] text-muted-foreground leading-relaxed px-4">
              Logrando Recuperar Su Bienestar Mental Con Nosotros
            </p>
          </div>

          {/* Item 3 */}
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 mb-2 flex items-center justify-center rounded-2xl bg-accent/50 text-primary">
              <ThumbsUp 
                className="w-8 h-8" 
                strokeWidth={2} 
              />
            </div>
            <h3 className="text-3xl font-extrabold text-primary mb-1">
              90 %
            </h3>
            <p className="text-[16px] font-bold text-foreground mb-1.5">
              Resultados Obtenidos
            </p>
            <p className="text-[13px] text-muted-foreground leading-relaxed px-4">
              9 De Cada 10 Pacientes Lograron Los Resultados Deseados
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
