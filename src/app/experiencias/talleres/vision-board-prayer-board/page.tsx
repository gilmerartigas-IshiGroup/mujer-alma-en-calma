import type { Metadata } from "next"
import { Button } from "@/components/Button"
import { HeroSplit } from "@/components/HeroSplit"
import { ImageCard } from "@/components/ImageCard"
import { Section } from "@/components/Section"

export const metadata: Metadata = {
  title: "Taller: Vision Board & Prayer Board",
  description: "Estación 4 del viaje: diseñar futuro y propósito con foco visual e intención espiritual.",
}

export default function Page() {
  return (
    <>
      <HeroSplit
        eyebrow="Estación 4 · Diseño de Futuro"
        title="Vision Board & Prayer Board"
        subtitle="Con esta estación conviertes anhelos en dirección. Diseñas metas con claridad visual y una práctica espiritual que sostenga tu intención semana a semana."
        imageSrc="/images/heroes/taller-vision-board-hero.webp"
        imageAlt="Taller de vision board y diseño de metas"
      />

      <Section tone="soft">
        <Button href="/contacto">Inscribirme</Button>
      </Section>

      <Section title="Análisis PAS" subtitle="De la dispersión al enfoque con propósito." tone="soft">
        <div className="grid gap-4 md:grid-cols-3">
          <article className="rounded-2xl bg-brand-ivory p-5 shadow-soft">
            <h2 className="text-xl font-semibold">Problema</h2>
            <p className="mt-2 text-sm text-brand-cocoa/80">
              Te cuesta sostener dirección; tus metas se mezclan con la rutina y pierdes claridad.
            </p>
          </article>
          <article className="rounded-2xl bg-brand-ivory p-5 shadow-soft">
            <h2 className="text-xl font-semibold">Agitación</h2>
            <p className="mt-2 text-sm text-brand-cocoa/80">
              Sientes frustración al ver pasar los meses sin concretar lo que realmente importa para ti.
            </p>
          </article>
          <article className="rounded-2xl bg-brand-ivory p-5 shadow-soft">
            <h2 className="text-xl font-semibold">Solución</h2>
            <p className="mt-2 text-sm text-brand-cocoa/80">
              Aprendes a construir un tablero de visión y un tablero de oración para alinear acciones, intención y
              compromiso diario.
            </p>
          </article>
        </div>
      </Section>

      <Section title="Qué te llevas">
        <div className="grid gap-5 md:grid-cols-2">
          <div className="rounded-2xl bg-brand-ivory p-6 text-sm text-brand-cocoa/80 shadow-soft">
            <h3 className="text-xl font-semibold">Entregables del taller</h3>
            <ul className="mt-3 grid gap-2">
              <li>Guía para diseñar tu Vision Board con foco realista.</li>
              <li>Estructura de Prayer Board para sostener tu intención.</li>
              <li>Plan de seguimiento semanal de 15 minutos.</li>
            </ul>
          </div>
          <div className="rounded-2xl bg-brand-cream p-6 text-sm text-brand-cocoa/80 shadow-soft">
            <h3 className="text-xl font-semibold">Outcome esperado</h3>
            <ul className="mt-3 grid gap-2">
              <li>Claridad de propósito para los próximos meses.</li>
              <li>Metas alineadas con tus valores y tu energía real.</li>
              <li>Mayor constancia para pasar de intención a acción.</li>
            </ul>
          </div>
        </div>
      </Section>

      <Section title="Prayer Board" subtitle="Intención espiritual aplicada a tu ruta semanal.">
        <div className="grid gap-5 lg:grid-cols-[1fr_.65fr]">
          <div className="rounded-2xl bg-brand-ivory p-6 text-sm text-brand-cocoa/80 shadow-soft">
            <h3 className="text-xl font-semibold">Cómo trabajamos esta parte</h3>
            <ul className="mt-3 grid gap-2">
              <li>Definirás una intención principal de temporada.</li>
              <li>Crearás recordatorios visuales y frases de anclaje.</li>
              <li>Establecerás un ritual breve para revisar tu enfoque semanal.</li>
            </ul>
          </div>
          <ImageCard
            title="Prayer Board"
            imageSrc="/images/heroes/taller-prayer-board-hero.webp"
            imageAlt="Taller de prayer board con enfoque espiritual"
          />
        </div>
      </Section>

      <Section
        title="Siguiente paso claro"
        subtitle="Confirma tu inscripción y empieza a construir una vida con dirección serena."
        tone="sage"
      >
        <div className="flex flex-wrap gap-3">
          <Button href="/contacto">Reservar mi lugar</Button>
          <Button href="/experiencias/talleres" variant="secondary">
            Ver otros talleres
          </Button>
        </div>
      </Section>
    </>
  )
}
