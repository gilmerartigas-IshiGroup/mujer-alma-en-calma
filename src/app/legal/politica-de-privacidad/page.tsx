import type { Metadata } from "next"
import { Button } from "@/components/Button"
import { Section } from "@/components/Section"

export const metadata: Metadata = {
  title: "Política de Privacidad",
  description: "Lineamientos básicos de tratamiento de datos de Mujer Alma en Calma.",
}

export default function Page() {
  return (
    <>
      <section className="py-14">
        <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
          <div className="max-w-3xl">
            <div className="text-xs uppercase tracking-wide text-brand-cocoa/70">Legal</div>
            <h1 className="mt-3 text-4xl font-semibold leading-tight">Política de Privacidad</h1>
            <p className="mt-4 text-base text-brand-cocoa/80 prose-soft">
              Esta política explica cómo se recopila y utiliza la información enviada mediante formularios, newsletter
              y reservas dentro del ecosistema Mujer Alma en Calma.
            </p>
          </div>
        </div>
      </section>

      <Section tone="soft">
        <article className="mx-auto w-full max-w-4xl rounded-2xl bg-brand-ivory p-6 text-sm text-brand-cocoa/80 shadow-soft prose-soft">
          <h2 className="text-2xl font-semibold">1. Datos que recopilamos</h2>
          <p className="mt-2">Nombre, correo electrónico y mensaje que envías de forma voluntaria en formularios.</p>

          <h2 className="mt-6 text-2xl font-semibold">2. Uso de la información</h2>
          <p className="mt-2">
            Se utiliza para responder consultas, gestionar reservas, enviar recursos solicitados y comunicaciones de
            Calma Semanal cuando la usuaria se suscribe.
          </p>

          <h2 className="mt-6 text-2xl font-semibold">3. Almacenamiento y seguridad</h2>
          <p className="mt-2">
            Se aplican medidas razonables para proteger la información. No se comercializan datos personales.
          </p>

          <h2 className="mt-6 text-2xl font-semibold">4. Derechos de la usuaria</h2>
          <p className="mt-2">
            Puedes solicitar acceso, corrección o eliminación de tus datos escribiendo por el canal de contacto.
          </p>
        </article>
      </Section>

      <Section title="Siguiente paso claro" subtitle="Si necesitas ampliar esta política, contáctanos por escrito." tone="sage">
        <Button href="/contacto">Consultar privacidad</Button>
      </Section>
    </>
  )
}
