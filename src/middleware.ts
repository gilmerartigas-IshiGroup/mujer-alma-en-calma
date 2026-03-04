import { NextRequest, NextResponse } from "next/server"

const isClosedPreviewEnabled =
  process.env.CLOSED_PREVIEW_ENABLED?.toLowerCase() === "true"
const expectedUser = process.env.CLOSED_PREVIEW_USER
const expectedPassword = process.env.CLOSED_PREVIEW_PASSWORD

function unauthorized() {
  return new NextResponse("Acceso privado. Ingresa usuario y contraseña.", {
    status: 401,
    headers: {
      "WWW-Authenticate": 'Basic realm="Mujer Alma en Calma - Preview", charset="UTF-8"',
      "Cache-Control": "no-store",
    },
  })
}

function parseBasicAuth(authHeader: string | null) {
  if (!authHeader || !authHeader.startsWith("Basic ")) return null

  try {
    const encoded = authHeader.slice("Basic ".length).trim()
    const decoded = atob(encoded)
    const separator = decoded.indexOf(":")
    if (separator < 0) return null

    return {
      user: decoded.slice(0, separator),
      password: decoded.slice(separator + 1),
    }
  } catch {
    return null
  }
}

export function middleware(request: NextRequest) {
  if (!isClosedPreviewEnabled) return NextResponse.next()

  if (!expectedUser || !expectedPassword) {
    return new NextResponse("Configuracion incompleta del modo cerrado.", {
      status: 500,
      headers: { "Cache-Control": "no-store" },
    })
  }

  const credentials = parseBasicAuth(request.headers.get("authorization"))
  if (!credentials) return unauthorized()

  const isValid =
    credentials.user === expectedUser &&
    credentials.password === expectedPassword

  if (!isValid) return unauthorized()

  const response = NextResponse.next()
  response.headers.set("x-robots-tag", "noindex, nofollow")
  return response
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|_vercel|favicon.ico|robots.txt|sitemap.xml).*)",
  ],
}
