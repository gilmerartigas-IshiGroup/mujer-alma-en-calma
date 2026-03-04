import { ReactNode } from "react"
import { Container } from "./Container"

export function Section({
  title,
  subtitle,
  children,
  tone = "plain",
}: {
  title?: string
  subtitle?: string
  children: ReactNode
  tone?: "plain" | "soft" | "sage"
}) {
  const bg =
    tone === "soft"
      ? "bg-brand-ivory/60"
      : tone === "sage"
        ? "bg-brand-sage/35"
        : ""
  return (
    <section className={`py-12 ${bg}`}>
      <Container>
        {title ? (
          <div className="max-w-2xl">
            <h2 className="text-2xl font-semibold">{title}</h2>
            {subtitle ? <p className="mt-2 text-sm text-brand-cocoa/75">{subtitle}</p> : null}
          </div>
        ) : null}
        <div className={title ? "mt-8" : ""}>{children}</div>
      </Container>
    </section>
  )
}
