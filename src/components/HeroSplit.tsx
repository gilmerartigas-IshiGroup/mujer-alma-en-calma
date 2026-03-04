"use client"

import { useState } from "react"
import Image from "next/image"

type HeroSplitProps = {
  eyebrow?: string
  title: string
  subtitle?: string
  imageSrc: string
  imageAlt: string
  priority?: boolean
}

export function HeroSplit({
  eyebrow,
  title,
  subtitle,
  imageSrc,
  imageAlt,
  priority = false,
}: HeroSplitProps) {
  const [imageError, setImageError] = useState(false)

  return (
    <section className="py-4 sm:py-6 lg:py-8">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <div className="grid items-start gap-4 lg:grid-cols-[1fr_1fr] lg:gap-8">
          <div className="max-w-3xl">
            {eyebrow ? <div className="text-xs uppercase tracking-wide text-brand-cocoa/70">{eyebrow}</div> : null}
            <h1 className="mt-3 text-4xl font-semibold leading-tight sm:text-5xl">{title}</h1>
            {subtitle ? <p className="mt-4 text-base text-brand-cocoa/80 prose-soft">{subtitle}</p> : null}
          </div>

          <div className="mx-auto w-full max-w-[420px] sm:max-w-[520px]">
            <div className="relative aspect-[5/4] overflow-hidden rounded-3xl border border-brand-terracotta/15 bg-brand-ivory p-2 shadow-soft">
            {imageError ? (
              <div className="flex h-full items-center justify-center rounded-[1.1rem] bg-brand-sage/40 px-6 text-center text-sm text-brand-cocoa/70">
                Imagen temporal no disponible. Ruta preparada: {imageSrc}
              </div>
            ) : (
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                className="rounded-[1.1rem] object-cover"
                sizes="(min-width: 1280px) 560px, (min-width: 1024px) 46vw, (min-width: 640px) 82vw, 95vw"
                priority={priority}
                onError={() => setImageError(true)}
              />
            )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
