import type { MetadataRoute } from "next"
import { site } from "@/lib/site"

export default function sitemap(): MetadataRoute.Sitemap {
  const isClosedPreview =
    process.env.CLOSED_PREVIEW_ENABLED?.toLowerCase() === "true"
  if (isClosedPreview) return []

  const base = site.url.replace(/\/$/, "")

  const routes = [
    "",
    "/coaching-ontologico",
    "/coaching/sesiones",
    "/circulos-de-mujeres",
    "/circulos/proximos-encuentros",
    "/experiencias",
    "/experiencias/talleres",
    "/experiencias/talleres/sanar-nina-interior",
    "/experiencias/talleres/vision-board-prayer-board",
    "/experiencias/retiros",
    "/experiencias/retiros/retiro-alma-en-calma",
    "/blog",
    "/recursos",
    "/contacto",
    "/legal/politica-de-privacidad",
    "/legal/terminos",
  ]

  return routes.map((r) => ({
    url: `${base}${r}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: r === "" ? 1 : 0.7,
  }))
}
