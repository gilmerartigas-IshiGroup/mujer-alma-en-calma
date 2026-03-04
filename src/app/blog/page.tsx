import type { Metadata } from "next"
import Link from "next/link"
import { listPosts } from "@/lib/blog"
import { Section } from "@/components/Section"

export const metadata: Metadata = { title: "Blog" }

export default function Page() {
  const posts = listPosts()

  return (
    <>
      <section className="py-14">
        <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
          <div className="max-w-3xl">
            <div className="text-xs uppercase tracking-wide text-brand-cocoa/70">Lecturas</div>
            <h1 className="mt-3 text-4xl font-semibold leading-tight">Blog</h1>
            <p className="mt-4 text-sm text-brand-cocoa/80 prose-soft">
              Reflexiones y prácticas para volver a ti, sin ruido y con dirección amorosa.
            </p>
          </div>
        </div>
      </section>

      <Section tone="soft">
        <div className="grid gap-4">
          {posts.map((p) => (
            <Link
              key={p.slug}
              href={`/blog/${p.slug}`}
              className="rounded-2xl bg-brand-ivory p-6 text-sm shadow-soft hover:bg-brand-ivory/80"
            >
              <div className="text-xs text-brand-cocoa/70">{p.date}</div>
              <div className="mt-1 text-xl font-semibold">{p.title}</div>
              <div className="mt-2 text-sm text-brand-cocoa/75">{p.description}</div>
            </Link>
          ))}
          {posts.length === 0 ? (
            <div className="rounded-2xl bg-brand-ivory p-6 text-sm text-brand-cocoa/70 shadow-soft">
              Aún no hay posts. Agrega archivos MDX en <code className="rounded bg-black/5 px-2 py-1">src/content/blog</code>.
            </div>
          ) : null}
        </div>

        <div className="mt-8 rounded-2xl bg-brand-sage/35 p-5 text-sm text-brand-cocoa/80">
          Siguiente paso: descarga un recurso práctico y únete a la newsletter para sostener la calma semana a semana.
          <div className="mt-4">
            <Link
              href="/recursos"
              className="inline-flex rounded-2xl bg-brand-terracotta px-5 py-3 text-sm font-medium text-brand-cream shadow-soft hover:opacity-90"
            >
              Ir a Recursos
            </Link>
          </div>
        </div>
      </Section>
    </>
  )
}
