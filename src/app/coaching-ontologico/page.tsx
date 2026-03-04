import type { Metadata } from "next"
import { Button } from "@/components/Button"
import { Card } from "@/components/Card"
import { HeroSplit } from "@/components/HeroSplit"
import { Section } from "@/components/Section"

export const metadata: Metadata = {
  title: "Coaching Ontológico",
  description: "Estación 2 del viaje: transformar tu forma de observar para rediseñar tu ser y tus resultados.",
}

const benefits = [
  {
    title: "Claridad en momentos de cambio",
    body: "Ordena lo que sientes y encuentra una ruta práctica cuando hay confusión, ansiedad o decisiones importantes.",
  },
  {
    title: "Nuevas conversaciones internas",
    body: "Aprende a reconocer juicios duros y reemplazarlos por una voz más amable, realista y sostenida.",
  },
  {
    title: "Acciones alineadas contigo",
    body: "No se trata solo de entenderte: traduces cada sesión en pasos concretos que sí puedes sostener.",
  },
]

export default function Page() {
  return (
    <>
      <HeroSplit
        eyebrow="Estación 2 · Despertar del Ser"
        title="Coaching Ontológico"
        subtitle="Aquí despierta la observadora: transformas lenguaje, emociones y cuerpo para rediseñar tu forma de estar en el mundo y crear resultados distintos en tu vida."
        imageSrc="/images/heroes/coaching-hero.webp"
        imageAlt="Sesión de coaching ontológico en ambiente sereno"
      />

      <Section tone="soft">
        <div className="flex flex-wrap gap-3">
          <Button href="/coaching/sesiones">Reserva tu sesión</Button>
          <Button href="/contacto" variant="secondary">
            Quiero hacer una pregunta
          </Button>
        </div>
      </Section>

      <Section
        title="El motor de cambio interno"
        subtitle="No necesitas experiencia previa ni jerga técnica. Solo disposición para observarte con honestidad."
        tone="soft"
      >
        <div className="grid gap-5 md:grid-cols-2">
          <div className="rounded-2xl bg-brand-ivory p-6 shadow-soft">
            <h3 className="text-xl font-semibold">Qué sí encontrarás</h3>
            <ul className="mt-3 grid gap-2 text-sm text-brand-cocoa/80">
              <li>Conversaciones profundas con objetivos claros.</li>
              <li>Herramientas para regular emociones y elegir mejor.</li>
              <li>Acompañamiento cálido y profesional en cada paso.</li>
            </ul>
          </div>
          <div className="rounded-2xl bg-brand-cream p-6 shadow-soft">
            <h3 className="text-xl font-semibold">Qué no hacemos</h3>
            <ul className="mt-3 grid gap-2 text-sm text-brand-cocoa/80">
              <li>No imponemos respuestas ni fórmulas rígidas.</li>
              <li>No usamos jerga para sonar complejas.</li>
              <li>No te dejamos sola entre sesiones sin guía de práctica.</li>
            </ul>
          </div>
        </div>
      </Section>

      <Section title="Beneficios que puedes esperar" subtitle="Cada proceso se adapta a tu realidad y ritmo.">
        <div className="grid gap-5 md:grid-cols-3">
          {benefits.map((item) => (
            <Card key={item.title} title={item.title}>
              {item.body}
            </Card>
          ))}
        </div>
      </Section>

      <Section
        title="Siguiente paso claro"
        subtitle="Si esta estación resuena contigo, agenda una sesión inicial y definimos tu ruta personalizada."
        tone="sage"
      >
        <Button href="/coaching/sesiones">Comienza tu viaje de sanación</Button>
      </Section>
    </>
  )
}
