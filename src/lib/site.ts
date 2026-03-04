const defaultUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.trim() ||
  process.env.SITE_URL?.trim() ||
  "http://localhost:3000"

export const site = {
  name: "Mujer Alma en Calma",
  description: "Un santuario digital para volver a ti con calma, claridad y amor.",
  url: defaultUrl,
}
