import { useState } from "react";
import { 
  ArrowRight, 
  CheckCircle2, 
  RotateCcw, 
  Sparkles, 
  ShieldCheck, 
  AlertCircle 
} from "lucide-react";

interface Pregunta {
  id: string;
  enunciado: string;
  opciones: {
    texto: string;
    puntos: number;
  }[];
}

const PREGUNTAS: Pregunta[] = [
  {
    id: "energia_matutina",
    enunciado: "1. ¿Cómo sueles despertar al comenzar el día?",
    opciones: [
      { texto: "Con buena energía y sensación de descanso reparador", puntos: 0 },
      { texto: "Duermo mis horas, pero despierto con pesadez o cansancio", puntos: 1 },
      { texto: "Con dificultad para levantarme o sueño muy interrumpido", puntos: 2 },
    ],
  },
  {
    id: "sobrecarga_mental",
    enunciado: "2. Cuando tienes una pausa o vas a dormir, ¿qué hace tu mente?",
    opciones: [
      { texto: "Logro desconectar y estar en calma", puntos: 0 },
      { texto: "Le doy vueltas a pendientes o preocupaciones del día", puntos: 1 },
      { texto: "Siento un flujo constante de pensamientos que no puedo apagar", puntos: 2 },
    ],
  },
  {
    id: "procrastinacion",
    enunciado: "3. Ante responsabilidades importantes, ¿cuál suele ser tu tendencia?",
    opciones: [
      { texto: "Las planifico y las inicio sin mayor conflicto interno", puntos: 0 },
      { texto: "Las pospongo hasta que la presión o el plazo aumentan", puntos: 1 },
      { texto: "Suelo bloquearme, postergarlas repetidamente y sentir frustración", puntos: 2 },
    ],
  },
  {
    id: "distraccion_digital",
    enunciado: "4. ¿Qué tanto interfieren el celular o las pantallas en tu calma diaria?",
    opciones: [
      { texto: "Las uso con balance sin que desplacen mi tranquilidad", puntos: 0 },
      { texto: "A veces me distraigo más de lo previsto para evadir pendientes", puntos: 1 },
      { texto: "Siento una dependencia constante que me genera agotamiento y culpa", puntos: 2 },
    ],
  },
  {
    id: "situacion_laboral",
    enunciado: "5. ¿Cómo describirías tu nivel de sobrecarga en el trabajo o estudios?",
    opciones: [
      { texto: "Manejo bien las exigencias y mantengo mis límites", puntos: 0 },
      { texto: "Llevadero, pero termino la jornada con la mente saturada", puntos: 1 },
      { texto: "Con alta tensión, desmotivación o sensación de agotamiento continuo", puntos: 2 },
    ],
  },
  {
    id: "red_apoyo",
    enunciado: "6. Cuando sientes que una situación te sobrepasa, ¿cómo la afrontas?",
    opciones: [
      { texto: "Cuento con personas de confianza con quienes hablar con libertad", puntos: 0 },
      { texto: "Tengo personas cercanas, pero prefiero guardarme las cosas", puntos: 1 },
      { texto: "Suelo afrontarlo en soledad; siento que no tengo con quién desahogarme", puntos: 2 },
    ],
  },
  {
    id: "actividad_fisica",
    enunciado: "7. ¿Cómo gestionas el movimiento corporal o la desconexión física?",
    opciones: [
      { texto: "Hago pausas activas o ejercicio con regularidad para liberar estrés", puntos: 0 },
      { texto: "Intento hacerlo, pero me falta constancia por falta de tiempo o ánimo", puntos: 1 },
      { texto: "Paso la mayor parte del tiempo en inmovilidad o encierro", puntos: 2 },
    ],
  },
  {
    id: "alimentacion_rutina",
    enunciado: "8. ¿Cómo impacta tu estado de ánimo en tu alimentación y horarios?",
    opciones: [
      { texto: "Mantengo horarios estables y una relación tranquila con las comidas", puntos: 0 },
      { texto: "A veces como por ansiedad o apuro y salto horarios", puntos: 1 },
      { texto: "Mis horarios están desordenados o recurro a la comida para calmar el estrés", puntos: 2 },
    ],
  },
  {
    id: "autocuidado",
    enunciado: "9. ¿Dispones de momentos de descanso genuino sin sentir culpa?",
    opciones: [
      { texto: "Sí, me permito desconectar y disfrutar de mi tiempo libre", puntos: 0 },
      { texto: "Tengo poco espacio y me cuesta relajarme del todo", puntos: 1 },
      { texto: "Casi nunca; cuando intento descansar siento que debería estar haciendo algo", puntos: 2 },
    ],
  },
  {
    id: "prioridad_principal",
    enunciado: "10. ¿Qué aspecto sientes más urgente atender en este momento?",
    opciones: [
      { texto: "Aprender a gestionar la ansiedad y el sobrepensamiento", puntos: 0 },
      { texto: "Superar bloqueos personales y recuperar la constancia", puntos: 0 },
      { texto: "Recuperar el orden emocional, el descanso y la tranquilidad", puntos: 0 },
    ],
  },
];

const PAISES = [
  { codigo: "+51", pais: "Perú", bandera: "🇵🇪", digitos: 9 },
  { codigo: "+56", pais: "Chile", bandera: "🇨🇱", digitos: 9 },
  { codigo: "+57", pais: "Colombia", bandera: "🇨🇴", digitos: 10 },
  { codigo: "+54", pais: "Argentina", bandera: "🇦🇷", digitos: 10 },
  { codigo: "+52", pais: "México", bandera: "🇲🇽", digitos: 10 },
  { codigo: "+34", pais: "España", bandera: "🇪🇸", digitos: 9 },
  { codigo: "+1", pais: "EE.UU.", bandera: "🇺🇸", digitos: 10 },
];

export default function ScreeningSection() {
  const [pasoActual, setPasoActual] = useState<number>(0);
  const [respuestas, setRespuestas] = useState<Record<string, { texto: string; puntos: number }>>({});
  const [opcionMarcada, setOpcionMarcada] = useState<string | null>(null);
  
  const [nombre, setNombre] = useState("");
  const [codigoPais, setCodigoPais] = useState("+51");
  const [whatsapp, setWhatsapp] = useState("");
  const [errorTel, setErrorTel] = useState("");
  const [submitError, setSubmitError] = useState<string | null>(null);
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const totalPreguntas = PREGUNTAS.length;
  const esUltimaPregunta = pasoActual === totalPreguntas;

  // Manejo de clic con feedback táctil y avance fluido
  const handleSeleccion = (preguntaId: string, texto: string, puntos: number) => {
    setOpcionMarcada(texto);

    setTimeout(() => {
      setRespuestas((prev) => ({ ...prev, [preguntaId]: { texto, puntos } }));
      setPasoActual((prev) => prev + 1);
      setOpcionMarcada(null);
    }, 220);
  };

  const calcularResultado = () => {
    const totalPuntos = Object.values(respuestas).reduce((acc, r) => acc + r.puntos, 0);
    
    if (totalPuntos <= 6) {
      return {
        nivel: "Sobrecarga Leve",
        cardBg: "bg-emerald-50/70 border-emerald-200 text-emerald-950",
        badgeColor: "bg-emerald-100 text-emerald-700",
        descripcion: "Mantienes una base emocional y de rutina adecuada, aunque existen factores de sobrepensamiento o cansancio puntual que conviene atender a tiempo.",
        recomendacion: "Ajustar pequeñas pautas de desconexión y descanso te ayudará a mantener tu equilibrio mental.",
      };
    } else if (totalPuntos <= 13) {
      return {
        nivel: "Sobrecarga Moderada",
        cardBg: "bg-amber-50/70 border-amber-200 text-amber-950",
        badgeColor: "bg-amber-100 text-amber-800",
        descripcion: "Tu mente está acumulando un nivel considerable de fatiga y tensión. Es frecuente experimentar bucles de sobrepensamiento, postergación y dificultad para desconectar.",
        recomendacion: "Herramientas prácticas de Terapia Cognitivo-Conductual (TCC) te permitirán ordenar prioridades y frenar la autoexigencia.",
      };
    } else {
      return {
        nivel: "Sobrecarga Alta",
        cardBg: "bg-rose-50/70 border-rose-200 text-rose-950",
        badgeColor: "bg-rose-100 text-rose-800",
        descripcion: "Estás experimentando un desgaste emocional y mental importante. La sensación de saturación está interfiriendo en tu tranquilidad cotidiana y descanso.",
        recomendacion: "Es altamente recomendable iniciar un espacio terapéutico guiado para descargar la sobrecarga y recuperar el orden con un plan claro.",
      };
    }
  };

  const validarTelefono = (tel: string, cod: string) => {
    const soloNumeros = tel.replace(/\D/g, "");
    const paisInfo = PAISES.find((p) => p.codigo === cod) || PAISES[0];

    if (!soloNumeros) {
      return "Por favor, ingresa tu número de WhatsApp.";
    }
    if (cod === "+51") {
      if (!soloNumeros.startsWith("9")) {
        return "El número en Perú debe iniciar con 9.";
      }
      if (soloNumeros.length !== 9) {
        return "El número en Perú debe tener 9 dígitos.";
      }
    } else if (soloNumeros.length < 8 || soloNumeros.length > paisInfo.digitos + 2) {
      return `Ingresa un número válido (${paisInfo.digitos} dígitos aprox.).`;
    }
    return "";
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value.replace(/\D/g, "");
    setWhatsapp(val);
    if (errorTel) setErrorTel("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);

    if (!nombre.trim()) {
      alert("Por favor ingresa tu nombre.");
      return;
    }

    const error = validarTelefono(whatsapp, codigoPais);
    if (error) {
      setErrorTel(error);
      return;
    }

    setIsSubmitting(true);
    const resultado = calcularResultado();

    const payload: Record<string, string> = {
      "form-name": "screening",
      nombre: nombre.trim(),
      codigo_pais: codigoPais,
      whatsapp: `${codigoPais} ${whatsapp.trim()}`,
      nivel_sobrecarga: resultado.nivel,
    };

    PREGUNTAS.forEach((p) => {
      payload[p.id] = respuestas[p.id]?.texto || "No especificado";
    });

    try {
      const res = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(payload).toString(),
      });

      if (res.ok) {
        setSubmitted(true);
      } else {
        console.error("Netlify form submission falló con código:", res.status);
        if (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1") {
          setSubmitted(true);
        } else {
          setSubmitError("Hubo un inconveniente al registrar tus datos. Por favor reintenta.");
        }
      }
    } catch (err) {
      console.error("Error en conexión con Netlify Forms:", err);
      if (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1") {
        setSubmitted(true);
      } else {
        setSubmitError("No se pudo conectar con el servidor. Verifica tu conexión a internet.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const reiniciarTest = () => {
    setRespuestas({});
    setPasoActual(0);
    setOpcionMarcada(null);
    setSubmitted(false);
    setNombre("");
    setWhatsapp("");
    setErrorTel("");
    setSubmitError(null);
  };

  const resultadoFinal = calcularResultado();
  const mensajeWhatsApp = encodeURIComponent(
    `Hola Jorge, completé el Test de Claridad en Neuroa.\nMi resultado preliminar fue: ${resultadoFinal.nivel}.\nQuiero agendar mi Sesión de Claridad (S/ 50).`
  );

  return (
    <section id="screening" className="pt-10 pb-20 px-4 sm:px-6 bg-background">
      <div className="max-w-3xl mx-auto">
        
        {/* Encabezado contextual */}
        <div className="text-center max-w-xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 bg-accent text-accent-foreground text-xs font-semibold px-3 py-1 rounded-full mb-3 border border-blue-light/40">
            <Sparkles size={13} className="text-primary" />
            Evaluación orientativa
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight mb-3">
            Test de Claridad Mental
          </h2>
          <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
            Una breve exploración para identificar qué factores están sobrecargando tu mente y dar el primer paso hacia tu tranquilidad.
          </p>
        </div>

        {/* Tarjeta del Test */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-border/80 shadow-card">
          
          {/* Barra de progreso */}
          {!submitted && (
            <div className="mb-8">
              <div className="flex justify-between items-center text-xs font-medium text-muted-foreground mb-2">
                <span>{pasoActual < totalPreguntas ? `Pregunta ${pasoActual + 1} de ${totalPreguntas}` : "Paso final"}</span>
                <span>{Math.round((pasoActual / totalPreguntas) * 100)}%</span>
              </div>
              <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-primary transition-all duration-300 rounded-full"
                  style={{ width: `${(pasoActual / totalPreguntas) * 100}%` }}
                />
              </div>
            </div>
          )}

          {/* ESTADO 1: PREGUNTAS (0 a 9) */}
          {!submitted && pasoActual < totalPreguntas && (
            <div>
              <h3 className="text-base sm:text-lg font-bold text-foreground mb-5 leading-snug">
                {PREGUNTAS[pasoActual].enunciado}
              </h3>

              <div className="space-y-3 mb-6">
                {PREGUNTAS[pasoActual].opciones.map((opcion) => {
                  const estaSeleccionada = opcionMarcada === opcion.texto;

                  return (
                    <button
                      key={`${PREGUNTAS[pasoActual].id}-${opcion.texto}`}
                      type="button"
                      disabled={opcionMarcada !== null}
                      onClick={() =>
                        handleSeleccion(
                          PREGUNTAS[pasoActual].id,
                          opcion.texto,
                          opcion.puntos
                        )
                      }
                      className={`w-full text-left p-4 rounded-2xl border transition-all duration-150 flex items-center justify-between group outline-none select-none ${
                        estaSeleccionada
                          ? "border-primary bg-primary/10 text-primary scale-[0.99]"
                          : "border-border/80 bg-white hover:border-primary hover:bg-slate-50 text-foreground"
                      }`}
                    >
                      <span
                        className={`text-xs sm:text-sm font-medium pr-4 leading-relaxed transition-colors ${
                          estaSeleccionada ? "text-primary font-semibold" : ""
                        }`}
                      >
                        {opcion.texto}
                      </span>
                      <ArrowRight
                        size={15}
                        className={`shrink-0 transition-transform ${
                          estaSeleccionada
                            ? "text-primary translate-x-1"
                            : "text-muted-foreground group-hover:text-primary group-hover:translate-x-1"
                        }`}
                      />
                    </button>
                  );
                })}
              </div>

              {pasoActual > 0 && (
                <button
                  type="button"
                  disabled={opcionMarcada !== null}
                  onClick={() => setPasoActual((prev) => prev - 1)}
                  className="text-xs text-muted-foreground hover:text-foreground font-medium flex items-center gap-1.5 transition-colors disabled:opacity-50"
                >
                  ← Pregunta anterior
                </button>
              )}
            </div>
          )}

          {/* ESTADO 2: FORMULARIO DE CONTACTO */}
          {!submitted && esUltimaPregunta && (
            <div>
              <div className="text-center mb-6">
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-primary bg-accent px-3 py-1 rounded-full mb-2">
                  <CheckCircle2 size={13} /> Respuestas listas
                </span>
                <h3 className="text-xl sm:text-2xl font-extrabold text-foreground mb-2">
                  ¿Dónde mostramos tus resultados?
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground max-w-md mx-auto leading-relaxed">
                  Ingresa tu nombre y tu WhatsApp para ver tu perfil de claridad en pantalla al instante.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-foreground mb-1.5">
                    Tu nombre
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ej. Carlos"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary text-sm outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-foreground mb-1.5">
                    Número de WhatsApp
                  </label>
                  <div className="flex gap-2">
                    <select
                      value={codigoPais}
                      onChange={(e) => {
                        setCodigoPais(e.target.value);
                        setErrorTel("");
                      }}
                      className="px-3 py-3 rounded-xl border border-border bg-slate-50 text-xs sm:text-sm font-medium outline-none focus:border-primary shrink-0"
                    >
                      {PAISES.map((p) => (
                        <option key={p.codigo} value={p.codigo}>
                          {p.bandera} {p.codigo}
                        </option>
                      ))}
                    </select>

                    <input
                      type="tel"
                      required
                      placeholder={codigoPais === "+51" ? "987 654 321" : "Número celular"}
                      value={whatsapp}
                      onChange={handlePhoneChange}
                      className="w-full px-4 py-3 rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary text-sm outline-none transition-all"
                    />
                  </div>

                  {errorTel && (
                    <p className="text-[11px] text-rose-500 font-medium mt-1.5 flex items-center gap-1">
                      <AlertCircle size={12} /> {errorTel}
                    </p>
                  )}
                </div>

                <div className="p-3 bg-slate-50 rounded-xl border border-border/60 flex items-start gap-2 text-[11px] text-muted-foreground leading-relaxed">
                  <ShieldCheck size={14} className="text-primary shrink-0 mt-0.5" />
                  <span>
                    Tus respuestas son estrictamente confidenciales y se utilizan para preparar tu proceso de consulta.
                  </span>
                </div>

                {submitError && (
                  <div className="p-3 bg-rose-50 border border-rose-200 text-rose-700 text-xs rounded-xl flex items-center gap-2">
                    <AlertCircle size={14} className="shrink-0" />
                    <span>{submitError}</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground font-semibold py-3.5 rounded-full shadow-button hover:opacity-90 transition-all text-sm disabled:opacity-50"
                >
                  {isSubmitting ? "Procesando resultados..." : "Ver resultados en pantalla"}
                  <ArrowRight size={15} />
                </button>

                <div className="text-center pt-2">
                  <button
                    type="button"
                    onClick={() => setPasoActual(totalPreguntas - 1)}
                    className="text-xs text-muted-foreground hover:text-foreground font-medium"
                  >
                    ← Revisar preguntas
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* ESTADO 3: PANTALLA DE RESULTADOS */}
          {submitted && (
            <div className="text-center py-2 max-w-xl mx-auto">
              <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-3">
                <CheckCircle2 size={24} />
              </div>

              <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                Evaluación completada para {nombre}
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-foreground mt-1 mb-6">
                Tu Perfil de Claridad Mental
              </h3>

              <div className={`p-6 rounded-2xl border text-left mb-6 ${resultadoFinal.cardBg}`}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground">
                    Nivel estimado
                  </span>
                  <span className={`text-xs font-bold px-2.5 py-0.5 rounded-full ${resultadoFinal.badgeColor}`}>
                    {resultadoFinal.nivel}
                  </span>
                </div>

                <p className="text-xs sm:text-sm leading-relaxed mb-4 text-foreground/90 font-medium">
                  {resultadoFinal.descripcion}
                </p>

                <div className="pt-3 border-t border-black/10 text-xs text-foreground/80 leading-relaxed">
                  <strong className="font-semibold text-foreground">Pauta inicial orientativa: </strong>
                  {resultadoFinal.recomendacion}
                </div>
              </div>

              <p className="text-[11px] text-muted-foreground leading-relaxed mb-6">
                * Este test es una herramienta orientativa de autoexploración diseñada por Neuroa. No sustituye un diagnóstico clínico formal, sino que sirve de base para tu consulta inicial.
              </p>

              <div className="space-y-3">
                <a
                  href={`https://wa.me/51900172786?text=${mensajeWhatsApp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold px-8 py-3.5 rounded-full shadow-md hover:scale-[1.02] transition-all text-sm"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Agendar Sesión de Claridad (S/ 50)
                </a>

                <div>
                  <button
                    type="button"
                    onClick={reiniciarTest}
                    className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground font-medium py-2 transition-colors"
                  >
                    <RotateCcw size={13} /> Volver a realizar el test
                  </button>
                </div>
              </div>
            </div>
          )}

        </div>
      </div>
    </section>
  );
}
