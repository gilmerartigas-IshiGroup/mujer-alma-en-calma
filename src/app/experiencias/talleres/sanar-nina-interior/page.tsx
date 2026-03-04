import type { Metadata } from "next"
import { Button } from "@/components/Button"
import { HeroSplit } from "@/components/HeroSplit"
import { Section } from "@/components/Section"

export const metadata: Metadata = {
  title: "Taller: Sanar a la Niña Interior",
  description: "Estación 1 del viaje: reconciliar tu historia para caminar con más libertad en el presente.",
}

export default function Page() {
  return (
    <>
      <HeroSplit
        eyebrow="Estación 1 · Raíces"
        title="Sanar a la Niña Interior"
        subtitle="El viaje comienza en la raíz: abrazas tu historia con ternura, transformas patrones de autoexigencia y abres espacio para una relación más compasiva contigo."
        imageSrc="/images/heroes/taller-nina-interior-hero.webp"
        imageAlt="Taller virtual para sanar a la niña interior"
      />

      <Section tone="soft">
        <Button href="/contacto">Inscribirme</Button>
      </Section>

      <Section title="Análisis PAS" subtitle="Una mirada clara de por qué este taller puede ayudarte." tone="soft">
        <div className="grid gap-4 md:grid-cols-3">
          <article className="rounded-2xl bg-brand-ivory p-5 shadow-soft">
            <h2 className="text-xl font-semibold">Problema</h2>
            <p className="mt-2 text-sm text-brand-cocoa/80">
              Miedos antiguos, respuestas emocionales intensas y sensación de no entender por qué repites ciertos
              patrones.
            </p>
          </article>
          <article className="rounded-2xl bg-brand-ivory p-5 shadow-soft">
            <h2 className="text-xl font-semibold">Agitación</h2>
            <p className="mt-2 text-sm text-brand-cocoa/80">
              Cansa vivir en modo defensa, exigirte de más y sentir que siempre te falta algo para estar en paz.
            </p>
          </article>
          <article className="rounded-2xl bg-brand-ivory p-5 shadow-soft">
            <h2 className="text-xl font-semibold">Solución</h2>
            <p className="mt-2 text-sm text-brand-cocoa/80">
              Un proceso guiado con ejercicios de integración emocional para sanar desde el presente y sostener cambios
              reales.
            </p>
          </article>
        </div>
      </Section>

      <Section title="Formato y resultado esperado">
        <div className="grid gap-5 md:grid-cols-2">
          <div className="rounded-2xl bg-brand-ivory p-6 text-sm text-brand-cocoa/80 shadow-soft">
            <h3 className="text-xl font-semibold">Formato</h3>
            <ul className="mt-3 grid gap-2">
              <li>Virtual y grupal.</li>
              <li>Incluye prácticas guiadas y material de integración.</li>
              <li>Acompañamiento respetuoso y contenedor.</li>
            </ul>
          </div>
          <div className="rounded-2xl bg-brand-cream p-6 text-sm text-brand-cocoa/80 shadow-soft">
            <h3 className="text-xl font-semibold">Outcome esperado</h3>
            <ul className="mt-3 grid gap-2">
              <li>Mayor autocompasión en tu diálogo interno.</li>
              <li>Reducción de patrones de autoexigencia automática.</li>
              <li>Herramientas prácticas para autorregulación emocional.</li>
            </ul>
          </div>
        </div>
      </Section>

      <Section
        title="Complemento recomendado"
        subtitle="Refuerza esta estación con una práctica de gratitud para sanar tu vínculo con el origen."
      >
        <div className="rounded-2xl bg-brand-ivory p-6 text-sm text-brand-cocoa/80 shadow-soft">
          La Actividad de Agradecimiento Familiar te ayuda a honrar tu linaje y transformar herencias emocionales en
          recursos para tu presente.
          <div className="mt-4">
            <Button href="/recursos" variant="secondary">
              Ver actividad de agradecimiento familiar
            </Button>
          </div>
        </div>
      </Section>

      <Section
        title="Siguiente paso claro"
        subtitle="Reserva tu lugar para este taller o, si prefieres, inicia con sesiones 1:1."
        tone="sage"
      >
        <div className="flex flex-wrap gap-3">
          <Button href="/contacto">Quiero inscribirme</Button>
          <Button href="/coaching/sesiones" variant="secondary">
            Prefiero iniciar en 1:1
          </Button>
        </div>
      </Section>
    </>
  )
}
