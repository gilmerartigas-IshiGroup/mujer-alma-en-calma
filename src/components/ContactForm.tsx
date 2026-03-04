'use client'

import { useMemo, useState } from "react"

export function ContactForm() {
  const action = process.env.NEXT_PUBLIC_CONTACT_FORM_ACTION
  const [sent, setSent] = useState(false)

  const canSubmit = useMemo(() => Boolean(action), [action])

  if (!action) {
    return (
      <div className="rounded-2xl bg-brand-ivory p-6 text-sm text-brand-cocoa/80 shadow-soft">
        <div className="font-semibold">Formulario pendiente de conectar</div>
        <p className="mt-2">
          Define <code className="rounded bg-black/5 px-2 py-1">NEXT_PUBLIC_CONTACT_FORM_ACTION</code> en{" "}
          <code className="rounded bg-black/5 px-2 py-1">.env.local</code> (Formspree u otro endpoint).
        </p>
      </div>
    )
  }

  if (sent) {
    return (
      <div className="rounded-2xl bg-brand-ivory p-6 text-sm text-brand-cocoa/80 shadow-soft">
        Gracias. Te responderemos pronto.
      </div>
    )
  }

  return (
    <form
      action={action}
      method="POST"
      className="grid gap-4 rounded-2xl bg-brand-ivory p-6 shadow-soft"
      onSubmit={() => setSent(true)}
    >
      {/* Honeypot anti-spam: should stay empty */}
      <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" />

      <div className="grid gap-2">
        <label className="text-xs font-semibold">Nombre</label>
        <input
          name="name"
          required
          autoComplete="name"
          className="rounded-xl border border-black/10 bg-brand-cream px-4 py-3 text-sm outline-none focus:border-black/20"
        />
      </div>

      <div className="grid gap-2">
        <label className="text-xs font-semibold">Correo</label>
        <input
          name="email"
          type="email"
          required
          autoComplete="email"
          className="rounded-xl border border-black/10 bg-brand-cream px-4 py-3 text-sm outline-none focus:border-black/20"
        />
      </div>

      <div className="grid gap-2">
        <label className="text-xs font-semibold">Mensaje</label>
        <textarea
          name="message"
          required
          rows={5}
          className="rounded-xl border border-black/10 bg-brand-cream px-4 py-3 text-sm outline-none focus:border-black/20"
        />
      </div>

      <button
        type="submit"
        disabled={!canSubmit}
        className="rounded-2xl bg-brand-terracotta px-5 py-3 text-sm font-medium text-brand-cream shadow-soft hover:opacity-90 disabled:opacity-50"
      >
        Enviar
      </button>
    </form>
  )
}
