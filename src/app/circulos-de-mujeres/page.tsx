import type { Metadata } from "next"
import { Button } from "@/components/Button"
import { Card } from "@/components/Card"
import { HeroSplit } from "@/components/HeroSplit"
import { Section } from "@/components/Section"

export const metadata: Metadata = {
  title: "Círculos de Mujeres",
  description: "Estación 3 del viaje: sostén colectivo, escucha activa y contención para fortalecer tu proceso.",
}

const principles = [
  "Confidencialidad: lo compartido en círculo se queda en círculo.",
  "No juicio: cada historia se recibe con respeto, sin consejos invasivos.",
  "Participación libre: puedes hablar o simplemente sostener presencia.",
]

export default function Page() {
  return (
    <>
      <HeroSplit
        eyebrow="Estación 3 · El Espejo"
        title="Círculos de Mujeres"
        subtitle="Tu transformación individual se potencia en comunidad. Este es un espacio sagrado de escucha, contención y reconocimiento donde descubres que no estás sola."
        imageSrc="/images/heroes/circulos-hero.webp"
        imageAlt="Encuentro de mujeres en círculo de contención"
      />

      <Section tone="soft">
        <Button href="/circulos/proximos-encuentros">Reserva tu lugar en el círculo</Button>
      </Section>

      <Section
        title="Seguridad psicológica primero"
        subtitle="Diseñado para que te sientas cuidada, libre y acompañada desde el primer encuentro."
        tone="soft"
      >
        <div className="grid gap-5 md:grid-cols-2">
          <div className="rounded-2xl bg-brand-ivory p-6 shadow-soft">
            <h3 className="text-xl font-semibold">Acuerdos del espacio</h3>
            <ul className="mt-3 grid gap-2 text-sm text-brand-cocoa/80">
              {principles.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl bg-brand-cream p-6 shadow-soft">
            <h3 className="text-xl font-semibold">Qué puedes esperar</h3>
            <ul className="mt-3 grid gap-2 text-sm text-brand-cocoa/80">
              <li>Rondas guiadas de escucha y expresión emocional.</li>
              <li>Prácticas de respiración, introspección y cierre intencional.</li>
              <li>Sentido de pertenencia para sostener tus procesos de cambio.</li>
            </ul>
          </div>
        </div>
      </Section>

      <Section title="¿Para quién es?" subtitle="Ideal para mujeres que desean comenzar con una experiencia comunitaria.">
        <div className="grid gap-5 md:grid-cols-3">
          <Card title="Si te sientes sola en tu proceso">
            El círculo te ayuda a normalizar emociones y a recordar que no tienes que sostenerlo todo sola.
          </Card>
          <Card title="Si te cuesta pedir ayuda">
            Puedes entrar con presencia tranquila y compartir solo cuando te sientas lista.
          </Card>
          <Card title="Si quieres sostén semanal">
            La frecuencia grupal crea ritmo y continuidad para que el cambio no se diluya.
          </Card>
        </div>
      </Section>

      <Section
        title="Siguiente paso claro"
        subtitle="Revisa la agenda activa y elige el encuentro que mejor acompañe tu momento vital."
        tone="sage"
      >
        <Button href="/circulos/proximos-encuentros">Ver próximos encuentros</Button>
      </Section>
    </>
  )
}
