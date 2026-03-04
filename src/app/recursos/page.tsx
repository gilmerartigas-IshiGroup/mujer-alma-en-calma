import type { Metadata } from "next"
import { Section } from "@/components/Section"
import { NewsletterEmbed } from "@/components/Embeds"
import { Card } from "@/components/Card"
import { Button } from "@/components/Button"
import { HeroSplit } from "@/components/HeroSplit"

export const metadata: Metadata = {
  title: "Recursos",
  description: "Biblioteca de herramientas prácticas para sostener tu viaje entre sesiones, círculos y talleres.",
}

const newsletterUrl = process.env.NEXT_PUBLIC_NEWSLETTER_EMBED_URL

export default function Page() {
  return (
    <>
      <HeroSplit
        eyebrow="Recursos para sostener el proceso"
        title="Recursos"
        subtitle="Aquí encuentras prácticas descargables para avanzar entre estaciones del viaje y la newsletter Calma Semanal para mantener foco, calma y dirección."
        imageSrc="/images/heroes/gratitud-familiar.webp"
        imageAlt="Actividad de gratitud familiar"
      />

      <Section
        title="Descargables iniciales"
        subtitle="Contenido para aplicar hoy mismo, sin complejidad y con intención clara."
        tone="soft"
      >
        <div className="grid gap-5 md:grid-cols-3">
          <Card title="Actividad de Agradecimiento Familiar" eyebrow="Lead Magnet">
            Guía paso a paso para fortalecer vínculos en casa desde la gratitud diaria.
            <div className="mt-4">
              <Button href="/contacto" variant="secondary">
                Solicitar guía
              </Button>
            </div>
          </Card>

          <Card title="Respirar y volver (7 minutos)" eyebrow="PDF">
            Práctica corta para regularte cuando sientes sobrecarga emocional o mental.
            <div className="mt-4">
              <Button href="/contacto" variant="secondary">
                Solicitar guía
              </Button>
            </div>
          </Card>

          <Card title="Mapa de calma semanal" eyebrow="PDF">
            Plantilla para traducir emoción, necesidad y acción amable en decisiones concretas.
            <div className="mt-4">
              <Button href="/contacto" variant="secondary">
                Solicitar guía
              </Button>
            </div>
          </Card>
        </div>
      </Section>

      <Section title="Calma Semanal" subtitle="Suscripción a reflexiones y prácticas breves para sostener tu proceso.">
        <NewsletterEmbed />
        {!newsletterUrl ? (
          <div className="rounded-2xl bg-brand-ivory p-6 text-sm text-brand-cocoa/80 shadow-soft">
            Configura <code className="rounded bg-black/5 px-2 py-1">NEXT_PUBLIC_NEWSLETTER_EMBED_URL</code> en{" "}
            <code className="rounded bg-black/5 px-2 py-1">.env.local</code> para mostrar el formulario embebido.
            <div className="mt-4">
              <Button href="/contacto" variant="secondary">
                Quiero suscribirme por ahora
              </Button>
            </div>
          </div>
        ) : null}
      </Section>

      <Section
        title="Siguiente paso claro"
        subtitle="Después de descargar un recurso, agenda una sesión para personalizar tu proceso."
        tone="sage"
      >
        <Button href="/coaching/sesiones">Reservar sesión 1:1</Button>
      </Section>
    </>
  )
}
