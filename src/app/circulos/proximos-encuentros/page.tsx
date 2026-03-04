import type { Metadata } from "next"
import { Button } from "@/components/Button"
import { Section } from "@/components/Section"

export const metadata: Metadata = {
  title: "Próximos Encuentros",
  description: "Agenda de la Estación 3: Círculos de Mujeres para sostener tu proceso en comunidad.",
}

const events = [
  {
    title: "Círculo de Luna Nueva",
    format: "Virtual · 90 min",
    focus: "Intención, claridad emocional y apertura de ciclo.",
  },
  {
    title: "Círculo de Integración Semanal",
    format: "Virtual · 75 min",
    focus: "Contención grupal para sostener avances y hábitos de calma.",
  },
  {
    title: "Círculo Presencial de Temporada",
    format: "Presencial · 2 h",
    focus: "Ritual de conexión y descanso en comunidad.",
  },
]

export default function Page() {
  return (
    <>
      <section className="py-14">
        <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
          <div className="max-w-3xl">
            <div className="text-xs uppercase tracking-wide text-brand-cocoa/70">Agenda</div>
            <h1 className="mt-3 text-4xl font-semibold leading-tight">Próximos Encuentros</h1>
            <p className="mt-4 text-base text-brand-cocoa/80 prose-soft">
              Aquí encontrarás la agenda activa de círculos y el acceso de inscripción. Cada encuentro está diseñado
              para que puedas entrar de forma suave y segura.
            </p>
            <div className="mt-6">
              <Button href="/contacto">Quiero reservar mi lugar</Button>
            </div>
          </div>
        </div>
      </section>

      <Section
        title="Encuentros disponibles"
        subtitle="Cada encuentro está diseñado para ofrecer contención real y seguimiento en comunidad."
        tone="soft"
      >
        <div className="grid gap-4 md:grid-cols-3">
          {events.map((event) => (
            <article key={event.title} className="rounded-2xl bg-brand-ivory p-5 shadow-soft">
              <div className="text-xs uppercase tracking-wide text-brand-cocoa/70">{event.format}</div>
              <h2 className="mt-2 text-xl font-semibold">{event.title}</h2>
              <p className="mt-2 text-sm text-brand-cocoa/80">{event.focus}</p>
              <div className="mt-4">
                <Button href="/contacto" variant="secondary">
                  Solicitar cupo
                </Button>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section
        title="Antes de reservar"
        subtitle="Recomendado para que la experiencia sea segura para ti y para el grupo."
      >
        <div className="rounded-2xl bg-brand-cream p-6 text-sm text-brand-cocoa/80 shadow-soft">
          <ul className="grid gap-2">
            <li>Confirma que podrás asistir sin interrupciones durante el horario completo.</li>
            <li>Trae libreta, agua y disposición para escuchar y escucharte.</li>
            <li>Si es tu primer círculo, puedes pedir una llamada breve de orientación.</li>
          </ul>
        </div>
      </Section>

      <Section title="Siguiente paso claro" subtitle="Si todavía tienes dudas, conversemos antes de tu inscripción." tone="sage">
        <Button href="/contacto">Hablar con acompañamiento</Button>
      </Section>
    </>
  )
}
