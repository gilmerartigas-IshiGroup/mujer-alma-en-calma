import Link from "next/link"
import { ReactNode } from "react"

type ButtonProps = {
  href: string
  children: ReactNode
  variant?: "primary" | "secondary"
}

export function Button({ href, children, variant = "primary" }: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition shadow-soft"
  const primary =
    "bg-brand-terracotta text-brand-ivory hover:brightness-105"
  const secondary =
    "border border-brand-terracotta/30 bg-brand-ivory text-brand-cocoa hover:bg-brand-sand"
  return (
    <Link href={href} className={`${base} ${variant === "primary" ? primary : secondary}`}>
      {children}
    </Link>
  )
}
