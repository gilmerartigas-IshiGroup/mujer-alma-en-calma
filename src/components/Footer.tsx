import Link from "next/link"
import { Container } from "./Container"
import { LogoMark } from "./LogoMark"

export function Footer() {
  return (
    <footer className="mt-16 border-t border-black/5 bg-brand-ivory/50">
      <Container>
        <div className="grid gap-6 py-10 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-3">
              <LogoMark className="h-8 w-8" />
              <div className="text-sm font-semibold">Mujer Alma en Calma</div>
            </div>
            <p className="mt-2 text-sm text-brand-cocoa/75">
              Un santuario digital para volver a ti con calma, claridad y amor.
            </p>
            <Link
              href="/recursos"
              className="mt-4 inline-flex rounded-full bg-brand-terracotta px-4 py-2 text-xs font-semibold text-brand-ivory shadow-soft hover:brightness-105"
            >
              Unirme a Calma Semanal
            </Link>
          </div>

          <div className="text-sm">
            <div className="font-semibold">Explorar</div>
            <div className="mt-2 grid gap-2 text-brand-cocoa/75">
              <Link href="/">Inicio</Link>
              <Link href="/coaching-ontologico">Coaching</Link>
              <Link href="/circulos-de-mujeres">Círculos</Link>
              <Link href="/experiencias">Experiencias</Link>
              <Link href="/contacto">Contacto</Link>
              <Link href="/blog">Blog</Link>
              <Link href="/recursos">Recursos</Link>
            </div>
          </div>

          <div className="text-sm">
            <div className="font-semibold">Legal</div>
            <div className="mt-2 grid gap-2 text-brand-cocoa/75">
              <Link href="/legal/politica-de-privacidad">Política de Privacidad</Link>
              <Link href="/legal/terminos">Términos</Link>
            </div>
          </div>
        </div>

        <div className="border-t border-black/5 py-6 text-xs text-brand-cocoa/70">
          © {new Date().getFullYear()} Mujer Alma en Calma. Todos los derechos reservados.
        </div>
      </Container>
    </footer>
  )
}
