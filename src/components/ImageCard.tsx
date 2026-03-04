"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"

type ImageCardProps = {
  title: string
  imageSrc: string
  imageAlt: string
  href?: string
}

export function ImageCard({ title, imageSrc, imageAlt, href }: ImageCardProps) {
  const [imageError, setImageError] = useState(false)

  const content = (
    <article className="mx-auto w-full max-w-[290px] overflow-hidden rounded-2xl border border-brand-terracotta/12 bg-brand-ivory shadow-soft">
      <div className="relative aspect-[3/4] bg-brand-cream">
        {imageError ? (
          <div className="flex h-full items-center justify-center px-4 text-center text-xs text-brand-cocoa/70">
            Imagen temporal no disponible.
          </div>
        ) : (
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover"
            sizes="(min-width: 1280px) 280px, (min-width: 1024px) 24vw, (min-width: 640px) 38vw, 46vw"
            onError={() => setImageError(true)}
          />
        )}
      </div>
      <div className="p-4">
        <h3 className="text-base font-semibold text-brand-cocoa">{title}</h3>
      </div>
    </article>
  )

  if (!href) return content

  return (
    <Link href={href} className="block transition hover:translate-y-[-2px]">
      {content}
    </Link>
  )
}
