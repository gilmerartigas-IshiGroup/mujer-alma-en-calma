import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import ReactMarkdown from "react-markdown"
import { listPosts, getPost } from "@/lib/blog"
import { Section } from "@/components/Section"

type Params = { slug: string }

export async function generateStaticParams() {
  return listPosts().map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  try {
    const post = await getPost(params.slug)
    return { title: post.data.title ?? "Blog", description: post.data.description ?? "" }
  } catch {
    return { title: "Blog" }
  }
}

export default async function Page({ params }: { params: Params }) {
  let post: Awaited<ReturnType<typeof getPost>>
  try {
    post = await getPost(params.slug)
  } catch {
    notFound()
  }

  return (
    <>
      <section className="py-14">
        <div className="mx-auto w-full max-w-3xl px-5 sm:px-8">
          <div className="text-xs uppercase tracking-wide text-brand-cocoa/70">{post.data.date}</div>
          <h1 className="mt-3 text-4xl font-semibold leading-tight">{post.data.title}</h1>
          <p className="mt-4 text-sm text-brand-cocoa/80">{post.data.description}</p>
        </div>
      </section>

      <Section tone="soft">
        <div className="mx-auto w-full max-w-3xl">
          <article className="rounded-2xl bg-brand-ivory p-6 text-sm text-brand-cocoa/85 shadow-soft">
            <ReactMarkdown
              components={{
                h2: ({ children }) => <h2 className="mt-6 text-2xl font-semibold">{children}</h2>,
                p: ({ children }) => <p className="mt-3 leading-relaxed">{children}</p>,
                ul: ({ children }) => <ul className="mt-3 list-disc space-y-2 pl-5">{children}</ul>,
                ol: ({ children }) => <ol className="mt-3 list-decimal space-y-2 pl-5">{children}</ol>,
                li: ({ children }) => <li>{children}</li>,
                strong: ({ children }) => <strong className="font-semibold">{children}</strong>,
              }}
            >
              {post.body}
            </ReactMarkdown>
          </article>

          <div className="mt-6 rounded-2xl bg-brand-sage/35 p-5 text-sm text-brand-cocoa/80">
            Siguiente paso: si este tema resonó contigo, agenda una sesión y conviértelo en un plan personal.
            <div className="mt-4">
              <Link
                href="/coaching/sesiones"
                className="inline-flex rounded-2xl bg-brand-terracotta px-5 py-3 text-sm font-medium text-brand-cream shadow-soft hover:opacity-90"
              >
                Reservar sesión
              </Link>
            </div>
          </div>
        </div>
      </Section>
    </>
  )
}
