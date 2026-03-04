import type { Metadata } from "next"
import { Button } from "@/components/Button"
import { HeroSplit } from "@/components/HeroSplit"
import { Section } from "@/components/Section"

export const metadata: Metadata = {
  title: "Retiro: Alma en Calma",
  description: "Estación 5 del viaje: retiro de inmersión para integrar aprendizajes y volver con claridad renovada.",
}

export default function Page() {
  return (
    <>
      <HeroSplit
        eyebrow="Estación 5 · Integración en Calma"
        title="Retiro Alma en Calma"
        subtitle="La culminación del viaje: una inmersión para consolidar aprendizajes, descansar profundamente y regresar a tu vida cotidiana con una identidad más sólida y serena."
        imageSrc="/images/heroes/silencio-desconexion-hero.webp"
        imageAlt="Mujer en retiro de silencio y desconexión"
      />

      <Section tone="soft">
        <div className="grid gap-6 lg:grid-cols-[1fr_.9fr]">
          <div className="flex flex-wrap gap-3">
            <Button href="/contacto">Reserva tu lugar</Button>
            <Button href="/experiencias/retiros" variant="secondary">
              Ver otros retiros
            </Button>
          </div>

          <aside className="rounded-3xl border border-black/5 bg-brand-ivory p-6 shadow-soft">
            <div className="text-xs uppercase tracking-wide text-brand-cocoa/70">Información rápida</div>
            <ul className="mt-4 grid gap-3 text-sm text-brand-cocoa/80">
              <li>
                <strong>Duración:</strong> 3 días / 2 noches
              </li>
              <li>
                <strong>Modalidad:</strong> Presencial
              </li>
              <li>
                <strong>Cupos:</strong> Grupo íntimo
              </li>
              <li>
                <strong>Ideal para:</strong> Mujeres que necesitan descanso profundo y redirección vital.
              </li>
            </ul>
          </aside>
        </div>
      </Section>

      <Section title="Cronograma base" subtitle="Esta agenda orienta el ritmo de la experiencia para integrar descanso, introspección y cierre." tone="soft">
        <div className="grid gap-4 md:grid-cols-3">
          <article className="rounded-2xl bg-brand-ivory p-5 shadow-soft">
            <div className="text-xs uppercase tracking-wide text-brand-cocoa/70">Día 1</div>
            <h2 className="mt-2 text-xl font-semibold">Llegada y aterrizaje</h2>
            <p className="mt-2 text-sm text-brand-cocoa/80">
              Apertura del retiro, regulación del sistema nervioso y ritual de intención.
            </p>
          </article>
          <article className="rounded-2xl bg-brand-ivory p-5 shadow-soft">
            <div className="text-xs uppercase tracking-wide text-brand-cocoa/70">Día 2</div>
            <h2 className="mt-2 text-xl font-semibold">Profundización</h2>
            <p className="mt-2 text-sm text-brand-cocoa/80">
              Trabajo personal guiado, espacios de silencio y prácticas de integración emocional.
            </p>
          </article>
          <article className="rounded-2xl bg-brand-ivory p-5 shadow-soft">
            <div className="text-xs uppercase tracking-wide text-brand-cocoa/70">Día 3</div>
            <h2 className="mt-2 text-xl font-semibold">Cierre y plan de regreso</h2>
            <p className="mt-2 text-sm text-brand-cocoa/80">
              Ritual de cierre y diseño de hábitos para sostener la calma al volver a tu rutina.
            </p>
          </article>
        </div>
      </Section>

      <Section title="Qué incluye / Qué no incluye">
        <div className="grid gap-5 md:grid-cols-2">
          <div className="rounded-2xl bg-brand-ivory p-6 text-sm text-brand-cocoa/80 shadow-soft">
            <h3 className="text-xl font-semibold">Incluye</h3>
            <ul className="mt-3 grid gap-2">
              <li>Acompañamiento facilitado durante todo el retiro.</li>
              <li>Prácticas guiadas y material de integración.</li>
              <li>Espacios de descanso y actividades de conexión grupal.</li>
            </ul>
          </div>

          <div className="rounded-2xl bg-brand-cream p-6 text-sm text-brand-cocoa/80 shadow-soft">
            <h3 className="text-xl font-semibold">No incluye</h3>
            <ul className="mt-3 grid gap-2">
              <li>Transporte hacia la locación del retiro.</li>
              <li>Servicios adicionales fuera del programa oficial.</li>
              <li>Atención clínica individual durante la experiencia.</li>
            </ul>
          </div>
        </div>
      </Section>

      <Section
        title="Siguiente paso claro"
        subtitle="Solicita información de fecha, inversión y locación para confirmar tu cupo."
        tone="sage"
      >
        <Button href="/contacto">Quiero reservar mi lugar</Button>
      </Section>
    </>
  )
}
