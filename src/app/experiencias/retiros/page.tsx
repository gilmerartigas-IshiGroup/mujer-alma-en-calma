import type { Metadata } from "next"
import { Button } from "@/components/Button"
import { Card } from "@/components/Card"
import { Section } from "@/components/Section"

export const metadata: Metadata = {
  title: "Retiros",
  description: "Estación 5 del viaje: inmersión para integrar aprendizajes y volver con calma sostenida.",
}

export default function Page() {
  return (
    <>
      <section className="py-14">
        <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
          <div className="max-w-3xl">
            <div className="text-xs uppercase tracking-wide text-brand-cocoa/70">Estación 5 del viaje</div>
            <h1 className="mt-3 text-4xl font-semibold leading-tight">Retiros</h1>
            <p className="mt-4 text-base text-brand-cocoa/80 prose-soft">
              Inmersiones para integrar lo trabajado en las estaciones previas. Pausas profundas para asentar cambios
              y regresar con mayor presencia, dirección y paz interna.
            </p>
          </div>
        </div>
      </section>

      <Section
        title="Retiro principal"
        subtitle="Una experiencia diseñada para combinar descanso, práctica interior y acompañamiento profesional."
        tone="soft"
      >
        <Card title="Retiro Alma en Calma" eyebrow="Presencial · 3 días">
          Un espacio de desconexión consciente, rituales de cuidado y conversaciones de transformación en comunidad
          íntima.
          <div className="mt-5">
            <Button href="/experiencias/retiros/retiro-alma-en-calma" variant="secondary">
              Ver detalle del retiro
            </Button>
          </div>
        </Card>
      </Section>

      <Section
        title="Siguiente paso claro"
        subtitle="Si buscas una pausa profunda para reordenar tu vida, conoce la experiencia completa."
        tone="sage"
      >
        <Button href="/experiencias/retiros/retiro-alma-en-calma">Explorar Retiro Alma en Calma</Button>
      </Section>
    </>
  )
}
