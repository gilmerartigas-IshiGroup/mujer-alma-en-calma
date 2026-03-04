import type { Metadata } from "next"
import { Button } from "@/components/Button"
import { Card } from "@/components/Card"
import { Section } from "@/components/Section"

export const metadata: Metadata = {
  title: "Experiencias",
  description: "Mapa completo del viaje de transformación: de la raíz a la integración en calma.",
}

const stations = [
  {
    eyebrow: "Estación 1 · Raíces",
    title: "Sanación y Reconciliación",
    body: "Inicias mirando hacia atrás para sanar heridas tempranas y honrar tu linaje con la Actividad de Agradecimiento Familiar.",
    href: "/experiencias/talleres/sanar-nina-interior",
    cta: "Sanar la Niña Interior",
  },
  {
    eyebrow: "Estación 2 · Ser",
    title: "Despertar de la Observadora",
    body: "Con Coaching Ontológico transformas tu forma de observar lenguaje, emociones y cuerpo para crear resultados distintos.",
    href: "/coaching-ontologico",
    cta: "Ir a Coaching Ontológico",
  },
  {
    eyebrow: "Estación 3 · Espejo",
    title: "Poder de lo Colectivo",
    body: "En Círculos de Mujeres tu proceso se sostiene con escucha, contención y reconocimiento mutuo en comunidad.",
    href: "/circulos-de-mujeres",
    cta: "Ver Círculos de Mujeres",
  },
  {
    eyebrow: "Estación 4 · Visión",
    title: "Diseño de Futuro y Propósito",
    body: "Vision Board y Prayer Board convierten metas y sueños en un mapa tangible con intención espiritual y acción concreta.",
    href: "/experiencias/talleres/vision-board-prayer-board",
    cta: "Explorar Vision & Prayer Board",
  },
  {
    eyebrow: "Estación 5 · Integración",
    title: "Retiro Alma en Calma",
    body: "La inmersión final integra los aprendizajes del proceso para regresar a tu rutina con una identidad renovada.",
    href: "/experiencias/retiros/retiro-alma-en-calma",
    cta: "Conocer el retiro",
  },
]

export default function Page() {
  return (
    <>
      <section className="py-14">
        <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
          <div className="max-w-3xl">
            <div className="text-xs uppercase tracking-wide text-brand-cocoa/70">Ecosistema de transformación</div>
            <h1 className="mt-3 text-4xl font-semibold leading-tight">Mucho más que talleres: un viaje hacia el ser</h1>
            <p className="mt-4 text-base text-brand-cocoa/80 prose-soft">
              En Mujer Alma en Calma, cada experiencia está conectada. No trabajamos temas aislados: acompañamos un
              proceso integral que va de la sanación de raíces al diseño consciente de futuro.
            </p>
          </div>
        </div>
      </section>

      <Section
        title="Las 5 estaciones del viaje"
        subtitle="Puedes iniciar en una estación específica, pero todas se integran en un mismo camino de transformación."
        tone="soft"
      >
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {stations.map((station) => (
            <Card key={station.title} title={station.title} eyebrow={station.eyebrow}>
              {station.body}
              <div className="mt-5">
                <Button href={station.href} variant="secondary">
                  {station.cta}
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      <Section
        title="Formas de vivir la experiencia"
        subtitle="Elige por nivel de profundidad y tiempo disponible."
      >
        <div className="grid gap-5 md:grid-cols-2">
          <Card title="Talleres Virtuales" eyebrow="Formato breve">
            Espacios prácticos para activar cambios puntuales y sostener nuevos hábitos con estructura.
            <div className="mt-5">
              <Button href="/experiencias/talleres" variant="secondary">
                Ver talleres
              </Button>
            </div>
          </Card>
          <Card title="Retiros Presenciales" eyebrow="Inmersión profunda">
            Experiencias de pausa e integración para consolidar aprendizajes y volver a tu centro.
            <div className="mt-5">
              <Button href="/experiencias/retiros" variant="secondary">
                Ver retiros
              </Button>
            </div>
          </Card>
        </div>
      </Section>

      <Section
        title="Siguiente paso claro"
        subtitle="Si quieres orientación personalizada para elegir tu estación, conversemos primero."
        tone="sage"
      >
        <Button href="/contacto">Quiero una recomendación de ruta</Button>
      </Section>
    </>
  )
}
