import type { Metadata } from "next"
import { Section } from "@/components/Section"
import { ContactForm } from "@/components/ContactForm"
import { Button } from "@/components/Button"

export const metadata: Metadata = {
  title: "Contacto",
  description: "Iniciemos la conversación para acompañarte en la etapa de viaje en la que estás hoy.",
}

export default function Page() {
  return (
    <>
      <section className="py-14">
        <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
          <div className="max-w-3xl">
            <div className="text-xs uppercase tracking-wide text-brand-cocoa/70">Iniciemos la conversación</div>
            <h1 className="mt-3 text-4xl font-semibold leading-tight">Tu camino comienza con un paso</h1>
            <p className="mt-4 text-base text-brand-cocoa/80 prose-soft">
              ¿Estás lista para pasar de la búsqueda a la transformación? Escríbenos y cuéntanos en qué etapa de tu
              viaje te encuentras. Estamos aquí para acompañarte a habitar tu propia calma.
            </p>
          </div>
        </div>
      </section>

      <Section
        title="Cuéntanos dónde estás hoy"
        subtitle="Con esta guía te orientamos a la experiencia que mejor responde a tu momento."
        tone="soft"
      >
        <div className="grid gap-5 md:grid-cols-3">
          <div className="rounded-2xl bg-brand-ivory p-5 text-sm text-brand-cocoa/80 shadow-soft">
            <div className="font-semibold">Necesito sanar y entender mi historia</div>
            <p className="mt-2">Recomendado: Sanar la Niña Interior + Recursos de Agradecimiento Familiar.</p>
          </div>
          <div className="rounded-2xl bg-brand-ivory p-5 text-sm text-brand-cocoa/80 shadow-soft">
            <div className="font-semibold">Quiero claridad para transformar mi forma de estar</div>
            <p className="mt-2">Recomendado: Coaching Ontológico 1:1.</p>
          </div>
          <div className="rounded-2xl bg-brand-ivory p-5 text-sm text-brand-cocoa/80 shadow-soft">
            <div className="font-semibold">Busco sostén grupal o inmersión profunda</div>
            <p className="mt-2">Recomendado: Círculos de Mujeres, Talleres o Retiro Alma en Calma.</p>
          </div>
        </div>
      </Section>

      <Section tone="soft">
        <div className="mx-auto w-full max-w-3xl">
          <ContactForm />
        </div>
      </Section>

      <Section
        title="Siguiente paso claro"
        subtitle="Si prefieres agendar directamente, puedes ir al calendario de sesiones."
        tone="sage"
      >
        <Button href="/coaching/sesiones">Ir a reservas</Button>
      </Section>
    </>
  )
}
