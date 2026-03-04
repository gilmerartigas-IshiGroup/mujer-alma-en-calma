import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/Button"
import { Card } from "@/components/Card"
import { HeroSplit } from "@/components/HeroSplit"
import { ImageCard } from "@/components/ImageCard"
import { Section } from "@/components/Section"
import { listPosts } from "@/lib/blog"

export const metadata: Metadata = {
  title: "Inicio",
  description: "Bienvenida al espacio donde tu alma vuelve a casa: un ecosistema de transformación para la mujer.",
}

const pillars = [
  {
    title: "Coaching Ontológico",
    description:
      "Conversaciones 1:1 para ordenar emociones, transformar hábitos inconscientes y avanzar con claridad.",
    cta: "Comienza tu viaje",
    href: "/coaching-ontologico",
  },
  {
    title: "Círculos de Mujeres",
    description:
      "Espacios de sororidad y contención donde la escucha es segura y tu proceso se sostiene con respeto.",
    cta: "Reserva tu lugar en el círculo",
    href: "/circulos-de-mujeres",
  },
  {
    title: "Talleres y Retiros",
    description:
      "Experiencias virtuales y presenciales para sanar tu historia, reconectar con tu intención y descansar profundo.",
    cta: "Explora experiencias",
    href: "/experiencias",
  },
]

const journeyStations = [
  {
    station: "Estación 1",
    title: "Raíces",
    summary:
      "Sanación y reconciliación con tu historia a través de Sanar la Niña Interior y Agradecimiento Familiar.",
    href: "/experiencias/talleres/sanar-nina-interior",
    cta: "Sanar desde la raíz",
  },
  {
    station: "Estación 2",
    title: "Despertar del Ser",
    summary: "Coaching Ontológico para observar tu lenguaje, transformar hábitos y rediseñar tu forma de estar.",
    href: "/coaching-ontologico",
    cta: "Explorar coaching",
  },
  {
    station: "Estación 3",
    title: "Espejo Colectivo",
    summary: "Círculos de Mujeres para sostenerte en comunidad con escucha, contención y reconocimiento mutuo.",
    href: "/circulos-de-mujeres",
    cta: "Entrar al círculo",
  },
  {
    station: "Estación 4",
    title: "Diseño de Futuro",
    summary: "Vision Board y Prayer Board para convertir intención en enfoque, acción y propósito.",
    href: "/experiencias/talleres/vision-board-prayer-board",
    cta: "Diseñar mi visión",
  },
  {
    station: "Estación 5",
    title: "Integración en Calma",
    summary: "Retiro Alma en Calma para integrar aprendizajes y volver a tu vida con claridad renovada.",
    href: "/experiencias/retiros/retiro-alma-en-calma",
    cta: "Conocer el retiro",
  },
]

export default function Page() {
  const recentPosts = listPosts().slice(0, 2)

  return (
    <>
      <HeroSplit
        eyebrow="Santuario digital para tu bienestar integral"
        title="Bienvenida al espacio donde tu alma vuelve a casa"
        subtitle="Mujer Alma en Calma es un ecosistema de transformación. Aquí, los procesos aislados se convierten en un camino coherente de sanación, autoconocimiento y diseño de futuro."
        imageSrc="/images/heroes/home-hero.webp"
        imageAlt="Mujer en espacio sereno de reconexión personal"
        priority
      />

      <section className="pb-8">
        <div className="mx-auto grid w-full max-w-6xl gap-4 px-5 sm:px-8 lg:grid-cols-[1.1fr_.9fr]">
          <div>
            <div className="flex flex-wrap gap-3">
              <Button href="/coaching-ontologico">Comienza tu viaje</Button>
              <Button href="/circulos-de-mujeres" variant="secondary">
                Conoce los círculos
              </Button>
            </div>
            <div className="mt-5 flex flex-wrap gap-2 text-xs text-brand-cocoa/75">
              <span className="rounded-full border border-brand-terracotta/20 bg-brand-sage/55 px-3 py-1">
                Coaching 1:1
              </span>
              <span className="rounded-full border border-brand-terracotta/20 bg-brand-sage/55 px-3 py-1">
                Comunidad segura
              </span>
              <span className="rounded-full border border-brand-terracotta/20 bg-brand-sage/55 px-3 py-1">
                Calma Semanal
              </span>
            </div>
          </div>

          <div className="rounded-3xl border border-brand-terracotta/10 bg-brand-ivory p-6 shadow-soft">
            <div className="text-xs uppercase tracking-wide text-brand-cocoa/70">Ruta sugerida</div>
            <h2 className="mt-2 text-2xl font-semibold">Empieza con un primer paso suave</h2>
            <ol className="mt-5 grid gap-4 text-sm text-brand-cocoa/80">
              <li className="rounded-2xl border border-brand-terracotta/10 bg-brand-cream p-4">
                <div className="font-semibold">1. Explora tu necesidad hoy</div>
                <p className="mt-1">¿Necesitas claridad individual o contención comunitaria?</p>
              </li>
              <li className="rounded-2xl border border-brand-terracotta/10 bg-brand-cream p-4">
                <div className="font-semibold">2. Elige tu experiencia</div>
                <p className="mt-1">Coaching, Círculo, Taller o Retiro según tu momento vital.</p>
              </li>
              <li className="rounded-2xl border border-brand-terracotta/10 bg-brand-cream p-4">
                <div className="font-semibold">3. Toma acción con calma</div>
                <p className="mt-1">Reserva tu lugar o descarga un recurso para empezar hoy.</p>
              </li>
            </ol>
          </div>
        </div>
      </section>

      <Section
        title="Tres puertas de entrada al ecosistema"
        subtitle="Elige por formato. Todas las rutas convergen en el mismo objetivo: ayudarte a habitar tu calma con intención."
        tone="soft"
      >
        <div className="grid gap-5 md:grid-cols-3">
          {pillars.map((pillar) => (
            <Card key={pillar.title} title={pillar.title}>
              {pillar.description}
              <div className="mt-5">
                <Button href={pillar.href} variant="secondary">
                  {pillar.cta}
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      <Section
        title="Mapa del viaje de transformación"
        subtitle="Cada servicio cumple una función específica dentro de un proceso mayor. Puedes iniciar donde estás y avanzar a tu ritmo."
      >
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-5">
          {journeyStations.map((station) => (
            <Card key={station.title} title={station.title} eyebrow={station.station}>
              {station.summary}
              <div className="mt-4">
                <Button href={station.href} variant="secondary">
                  {station.cta}
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      <Section
        title="Galería de experiencias"
        subtitle="Cards verticales 3:4 y heroes 5:4 para una navegación más limpia en móvil y desktop."
      >
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-5">
          <ImageCard
            title="Coaching"
            imageSrc="/images/cards/coaching-card-1.webp"
            imageAlt="Imagen vertical sobre coaching"
            href="/coaching-ontologico"
          />
          <ImageCard
            title="Círculos de Mujeres"
            imageSrc="/images/cards/circulos-card-2.webp"
            imageAlt="Imagen vertical sobre círculos de mujeres"
            href="/circulos-de-mujeres"
          />
          <ImageCard
            title="Retiro Pausa"
            imageSrc="/images/cards/retiro-pausa-card-3.webp"
            imageAlt="Imagen vertical sobre retiro de pausa"
            href="/experiencias/retiros/retiro-alma-en-calma"
          />
        </div>
      </Section>

      <Section
        title="Lead Magnet + Newsletter"
        subtitle="Empieza por valor inmediato: descarga una práctica breve y recibe la carta semanal Calma Semanal."
        tone="sage"
      >
        <div className="grid gap-5 lg:grid-cols-2">
          <div className="rounded-3xl bg-brand-ivory p-6 shadow-soft">
            <div className="text-xs uppercase tracking-wide text-brand-cocoa/70">Recurso destacado</div>
            <h3 className="mt-2 text-2xl font-semibold">Guía de Agradecimiento Familiar</h3>
            <p className="mt-3 text-sm text-brand-cocoa/80">
              Una dinámica descargable para transformar la conversación en casa desde la gratitud y la presencia.
            </p>
            <div className="mt-5">
              <Button href="/recursos">Descarga tu guía de agradecimiento</Button>
            </div>
          </div>

          <div className="rounded-3xl border border-black/10 bg-brand-cream p-6 shadow-soft">
            <div className="text-xs uppercase tracking-wide text-brand-cocoa/70">Calma Semanal</div>
            <h3 className="mt-2 text-2xl font-semibold">Una carta breve para volver a tu centro</h3>
            <p className="mt-3 text-sm text-brand-cocoa/80">
              Reflexiones, prácticas y preguntas guía para sostener tu paz durante la semana, sin saturación.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Button href="/recursos">Quiero suscribirme</Button>
              <Button href="/blog" variant="secondary">
                Leer el blog
              </Button>
            </div>
          </div>
        </div>
      </Section>

      <Section title="Lecturas recientes" subtitle="Recursos breves para acompañarte entre sesiones y encuentros.">
        <div className="grid gap-4 md:grid-cols-2">
          {recentPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="rounded-2xl border border-black/5 bg-brand-ivory p-5 shadow-soft hover:bg-brand-ivory/80"
            >
              <div className="text-xs text-brand-cocoa/70">{post.date}</div>
              <h3 className="mt-2 text-xl font-semibold">{post.title}</h3>
              <p className="mt-2 text-sm text-brand-cocoa/75">{post.description}</p>
            </Link>
          ))}
        </div>

        <div className="mt-8 rounded-2xl bg-brand-sage/35 p-5 text-sm text-brand-cocoa/80">
          Siguiente paso recomendado: si te resonó el contenido, agenda una sesión inicial y define tu ruta de trabajo.
          <div className="mt-4">
            <Button href="/coaching/sesiones">Reserva tu sesión</Button>
          </div>
        </div>
      </Section>
    </>
  )
}
