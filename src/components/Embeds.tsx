'use client'

export function CalendlyEmbed() {
  const url = process.env.NEXT_PUBLIC_CALENDLY_URL
  if (!url) return null

  return (
    <div className="overflow-hidden rounded-2xl bg-brand-ivory shadow-soft">
      <iframe
        title="Reservar sesión"
        src={url}
        className="h-[720px] w-full"
        loading="lazy"
      />
    </div>
  )
}

export function NewsletterEmbed() {
  const url = process.env.NEXT_PUBLIC_NEWSLETTER_EMBED_URL
  if (!url) return null

  return (
    <div className="overflow-hidden rounded-2xl bg-brand-ivory shadow-soft">
      <iframe title="Newsletter" src={url} className="h-[420px] w-full" loading="lazy" />
    </div>
  )
}
