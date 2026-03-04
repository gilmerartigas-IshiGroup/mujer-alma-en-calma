import Link from "next/link"
import { Container } from "./Container"
import { LogoMark } from "./LogoMark"

const nav = [
  { href: "/", label: "Inicio" },
  { href: "/coaching-ontologico", label: "Coaching" },
  { href: "/circulos-de-mujeres", label: "Círculos" },
  { href: "/experiencias", label: "Experiencias" },
  { href: "/experiencias/talleres", label: "Talleres" },
  { href: "/experiencias/retiros", label: "Retiros" },
  { href: "/blog", label: "Blog" },
  { href: "/recursos", label: "Recursos" },
  { href: "/contacto", label: "Contacto" },
]

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-black/5 bg-brand-cream/95 backdrop-blur">
      <Container>
        <div className="flex items-center justify-between py-4">
          <Link href="/" className="flex items-center gap-3">
            <LogoMark className="h-10 w-10" />
            <div className="leading-tight">
              <div className="text-sm font-semibold">Mujer Alma en Calma</div>
              <div className="text-xs text-brand-cocoa/70">Santuario digital</div>
            </div>
          </Link>

          <nav className="hidden items-center gap-5 lg:flex">
            {nav.map((i) => (
              <Link key={i.href} href={i.href} className="text-sm text-brand-cocoa/80 hover:text-brand-cocoa">
                {i.label}
              </Link>
            ))}
          </nav>

          <Link
            href="/coaching/sesiones"
            className="rounded-full bg-brand-terracotta px-4 py-2 text-xs font-semibold text-brand-ivory shadow-soft hover:brightness-105"
          >
            Reserva tu sesión
          </Link>
        </div>

        <nav className="-mx-2 flex gap-2 overflow-x-auto pb-4 lg:hidden">
          {nav.map((i) => (
            <Link
              key={i.href}
              href={i.href}
              className="whitespace-nowrap rounded-full border border-brand-terracotta/25 bg-brand-ivory px-3 py-1.5 text-xs text-brand-cocoa/80"
            >
              {i.label}
            </Link>
          ))}
        </nav>
      </Container>
    </header>
  )
}
