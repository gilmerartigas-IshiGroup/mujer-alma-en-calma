import type { Metadata } from "next"
import { Button } from "@/components/Button"
import { Section } from "@/components/Section"

export const metadata: Metadata = {
  title: "Términos",
  description: "Términos de uso y lineamientos generales para servicios de Mujer Alma en Calma.",
}

export default function Page() {
  return (
    <>
      <section className="py-14">
        <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
          <div className="max-w-3xl">
            <div className="text-xs uppercase tracking-wide text-brand-cocoa/70">Legal</div>
            <h1 className="mt-3 text-4xl font-semibold leading-tight">Términos de Servicio</h1>
            <p className="mt-4 text-base text-brand-cocoa/80 prose-soft">
              Marco general para el uso del sitio, la participación en experiencias y la reserva de servicios dentro
              de Mujer Alma en Calma.
            </p>
          </div>
        </div>
      </section>

      <Section tone="soft">
        <article className="mx-auto w-full max-w-4xl rounded-2xl bg-brand-ivory p-6 text-sm text-brand-cocoa/80 shadow-soft prose-soft">
          <h2 className="text-2xl font-semibold">1. Alcance de los servicios</h2>
          <p className="mt-2">
            Coaching, círculos, talleres y retiros son espacios de acompañamiento y desarrollo personal, no sustituyen
            tratamientos médicos o psicológicos clínicos.
          </p>

          <h2 className="mt-6 text-2xl font-semibold">2. Reservas y pagos</h2>
          <p className="mt-2">
            Toda reserva se confirma según disponibilidad y condiciones comunicadas en el canal oficial de contacto.
          </p>

          <h2 className="mt-6 text-2xl font-semibold">3. Cancelaciones y cambios</h2>
          <p className="mt-2">
            Los cambios de fecha y políticas de reembolso se informan por escrito para cada experiencia específica.
          </p>

          <h2 className="mt-6 text-2xl font-semibold">4. Conducta en comunidad</h2>
          <p className="mt-2">
            Se espera trato respetuoso y confidencialidad en los espacios grupales para proteger la seguridad
            psicológica de todas las participantes.
          </p>
        </article>
      </Section>

      <Section title="Siguiente paso claro" subtitle="Si necesitas claridad sobre condiciones particulares, escríbenos." tone="sage">
        <Button href="/contacto">Consultar términos</Button>
      </Section>
    </>
  )
}
