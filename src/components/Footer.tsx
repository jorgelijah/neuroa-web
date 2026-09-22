export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0f1f3d] text-white border-t border-white/10 pt-14 pb-10 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 mb-12">
          
          {/* Columna 1: Marca con tu logo oficial */}
          <div className="md:col-span-6 space-y-4">
            <a href="#inicio" className="inline-flex items-center gap-2.5">
              <img
                src="/icon.png"
                alt="Logo Neuroa"
                className="h-8 w-auto object-contain"
              />
              <span className="text-2xl font-bold tracking-tight text-white">
                neuroa
              </span>
            </a>

            <p className="text-sm text-[#dbe9fb]/80 max-w-sm leading-relaxed">
              Consultorio de psicología virtual basado en evidencia. Terapia Cognitivo-Conductual y reestructuración para recuperar la claridad mental y el bienestar.
            </p>

            <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#8ab4ec] bg-[#8ab4ec]/10 px-3 py-1.5 rounded-xl border border-[#8ab4ec]/20">
              <span>Psic. Jorge Escobedo · C.Ps.P. N° 36036</span>
            </div>
          </div>

          {/* Columna 2: Navegación directa */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#8ab4ec] mb-4">
              Navegación
            </h4>
            <ul className="space-y-2.5 text-sm text-[#dbe9fb]/70">
              <li>
                <a href="#inicio" className="hover:text-white transition-colors">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#metodo" className="hover:text-white transition-colors">
                  Método
                </a>
              </li>
              <li>
                <a href="#servicios" className="hover:text-white transition-colors">
                  Servicios
                </a>
              </li>
              <li>
                <a href="#sobre-mi" className="hover:text-white transition-colors">
                  Sobre mí
                </a>
              </li>
              <li>
                <a href="#screening" className="hover:text-white transition-colors">
                  Test de Claridad
                </a>
              </li>
              <li>
                <a href="#preguntas" className="hover:text-white transition-colors">
                  Preguntas frecuentes
                </a>
              </li>
            </ul>
          </div>

          {/* Columna 3: Modalidad y Ética */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#8ab4ec] mb-4">
              Atención
            </h4>
            <ul className="space-y-2.5 text-sm text-[#dbe9fb]/70 mb-4">
              <li>Modalidad 100% virtual</li>
              <li>Previa reserva de horario</li>
            </ul>
            <p className="text-xs text-[#dbe9fb]/60 leading-relaxed border-t border-white/10 pt-3">
              Atención profesional sujeta al secreto profesional y al código de ética del Colegio de Psicólogos del Perú.
            </p>
          </div>

        </div>

        {/* Barra de Derechos de Autor */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-[#dbe9fb]/60 gap-3">
          <p>© {currentYear} Neuroa. Todos los derechos reservados.</p>
          <p>Psicoterapia basada en evidencia y confidencialidad.</p>
        </div>
      </div>
    </footer>
  );
}
