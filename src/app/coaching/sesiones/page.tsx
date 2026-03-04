import type { Metadata } from "next"
import { Section } from "@/components/Section"
import { CalendlyEmbed } from "@/components/Embeds"
import { Button } from "@/components/Button"

export const metadata: Metadata = {
  title: "Sesiones 1:1",
  description: "Reserva tu sesión de la Estación 2: Coaching Ontológico para rediseñar tu forma de estar en el mundo.",
}

export default function Page() {
  return (
    <>
      <section className="py-14">
        <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
          <div className="max-w-3xl">
            <div className="text-xs uppercase tracking-wide text-brand-cocoa/70">Estación 2 · Coaching Ontológico</div>
            <h1 className="mt-3 text-4xl font-semibold leading-tight">Sesiones 1:1</h1>
            <p className="mt-4 text-base text-brand-cocoa/80 prose-soft">
              Este espacio es para ti si te sientes cargada, repetitiva en tus decisiones o desconectada de tu propia
              voz. Empezamos donde estás, sin prisa y con un plan realista.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button href="/coaching-ontologico" variant="secondary">
                Ver enfoque completo
              </Button>
              <Button href="/contacto">Necesito orientación antes de reservar</Button>
            </div>
          </div>
        </div>
      </section>

      <Section
        title="Cómo funciona"
        subtitle="Un proceso claro para que la sesión no se quede en teoría."
        tone="soft"
      >
        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl bg-brand-ivory p-5 shadow-soft">
            <div className="text-xs uppercase tracking-wide text-brand-cocoa/70">Paso 1</div>
            <h3 className="mt-2 text-xl font-semibold">Exploramos tu momento actual</h3>
            <p className="mt-2 text-sm text-brand-cocoa/80">
              Identificamos el punto de tensión principal y lo traducimos en una intención concreta de trabajo.
            </p>
          </div>
          <div className="rounded-2xl bg-brand-ivory p-5 shadow-soft">
            <div className="text-xs uppercase tracking-wide text-brand-cocoa/70">Paso 2</div>
            <h3 className="mt-2 text-xl font-semibold">Abrimos nuevas posibilidades</h3>
            <p className="mt-2 text-sm text-brand-cocoa/80">
              Trabajamos lenguaje, emoción y cuerpo para ampliar tu mirada y recuperar capacidad de elección.
            </p>
          </div>
          <div className="rounded-2xl bg-brand-ivory p-5 shadow-soft">
            <div className="text-xs uppercase tracking-wide text-brand-cocoa/70">Paso 3</div>
            <h3 className="mt-2 text-xl font-semibold">Definimos acciones sostenibles</h3>
            <p className="mt-2 text-sm text-brand-cocoa/80">
              Cierras con compromisos simples que puedes mantener en tu vida real, sin sobrecarga.
            </p>
          </div>
        </div>
      </Section>

      <Section title="Reserva tu sesión" subtitle="Conecta tu enlace de Calendly para activar agenda automática.">
        <CalendlyEmbed />
        <div className="mt-6 rounded-2xl bg-brand-sage/35 p-5 text-sm text-brand-cocoa/80">
          Si aún no conectas el embed, usa el formulario de contacto para solicitudes manuales o redirige este botón a
          WhatsApp.
          <div className="mt-4">
            <Button href="/contacto" variant="secondary">
              Ir a contacto
            </Button>
          </div>
        </div>
      </Section>

      <Section
        title="¿Prefieres empezar en comunidad?"
        subtitle="También puedes iniciar en un entorno de contención grupal antes de pasar a sesiones 1:1."
        tone="sage"
      >
        <Button href="/circulos/proximos-encuentros">Ver próximos encuentros</Button>
      </Section>
    </>
  )
}
