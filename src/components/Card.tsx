import { ReactNode } from "react"

export function Card({
  title,
  eyebrow,
  children,
}: {
  title: string
  eyebrow?: string
  children: ReactNode
}) {
  return (
    <div className="rounded-2xl border border-brand-terracotta/10 bg-brand-ivory p-6 shadow-soft">
      {eyebrow ? <div className="text-xs uppercase tracking-wide text-brand-cocoa/70">{eyebrow}</div> : null}
      <h3 className="mt-2 text-xl font-semibold">{title}</h3>
      <div className="mt-3 text-sm text-brand-cocoa/80 prose-soft">{children}</div>
    </div>
  )
}
