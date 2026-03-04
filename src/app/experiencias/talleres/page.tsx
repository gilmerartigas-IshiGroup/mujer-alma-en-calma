import type { Metadata } from "next"
import { Button } from "@/components/Button"
import { Section } from "@/components/Section"

export const metadata: Metadata = {
  title: "Talleres",
  description: "Talleres de las estaciones 1 y 4: sanación de raíz y diseño consciente de futuro.",
}

const workshops = [
  {
    slug: "/experiencias/talleres/sanar-nina-interior",
    title: "Sanar a la Niña Interior",
    problem: "Te sientes bloqueada por miedos antiguos o reacciones que no entiendes del todo.",
    agitation: "Repites patrones, te exiges de más y terminas agotada emocionalmente.",
    solution: "Un proceso guiado para reconciliar tu historia y practicar autocompasión efectiva.",
  },
  {
    slug: "/experiencias/talleres/vision-board-prayer-board",
    title: "Vision Board & Prayer Board",
    problem: "Tus metas se diluyen entre pendientes y no logras sostener foco.",
    agitation: "Pasa el tiempo y sientes que tu dirección vital se dispersa cada semana.",
    solution: "Diseñas una visión clara y una práctica espiritual concreta para manifestarla.",
  },
]

export default function Page() {
  return (
    <>
      <section className="py-14">
        <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
          <div className="max-w-3xl">
            <div className="text-xs uppercase tracking-wide text-brand-cocoa/70">Estaciones 1 y 4 del viaje</div>
            <h1 className="mt-3 text-4xl font-semibold leading-tight">Talleres</h1>
            <p className="mt-4 text-base text-brand-cocoa/80 prose-soft">
              Aquí trabajas dos momentos clave del proceso: sanar raíces emocionales y diseñar futuro con intención.
              Formatos breves, prácticos y fáciles de integrar a tu semana.
            </p>
          </div>
        </div>
      </section>

      <Section
        title="Elige el taller que responde a tu momento"
        subtitle="Estructura PAS para tomar decisiones rápidas y conscientes."
        tone="soft"
      >
        <div className="grid gap-5 md:grid-cols-2">
          {workshops.map((workshop) => (
            <article key={workshop.title} className="rounded-2xl bg-brand-ivory p-6 shadow-soft">
              <h2 className="text-2xl font-semibold">{workshop.title}</h2>
              <div className="mt-4 grid gap-3 text-sm text-brand-cocoa/80">
                <p>
                  <strong>Problema:</strong> {workshop.problem}
                </p>
                <p>
                  <strong>Agitación:</strong> {workshop.agitation}
                </p>
                <p>
                  <strong>Solución:</strong> {workshop.solution}
                </p>
              </div>
              <div className="mt-5">
                <Button href={workshop.slug} variant="secondary">
                  Ver detalle e inscripción
                </Button>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section
        title="Siguiente paso claro"
        subtitle="Si necesitas acompañamiento para elegir, te orientamos en una conversación breve."
        tone="sage"
      >
        <Button href="/contacto">Ayúdame a elegir mi taller</Button>
      </Section>
    </>
  )
}
