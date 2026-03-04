# Mujer Alma en Calma — Sitio Web (Next.js + Tailwind)

Sitio web de **Mujer Alma en Calma** construido con:
- Next.js (App Router) + TypeScript
- Tailwind CSS
- Sistema visual de marca + héroes 5:4 y cards 3:4

## Requisitos
- Node.js 18+ (recomendado 20+)

## Instalación
```bash
npm install
npm run dev
```

Abrir: http://localhost:3000

## Pipeline de imágenes (RAW -> WEBP)
Coloca tus originales en:
- `assets/raw/heroes` (PNG/JPG/JPEG horizontal 1200x960 recomendado)
- `assets/raw/cards` (PNG/JPG/JPEG vertical 900x1200 recomendado)
- `assets/raw/textures` (opcional)

Genera optimizados con:
```bash
npm run assets:opt
```

Salida generada:
- `public/images/heroes/*.webp`
- `public/images/cards/*.webp`
- `public/images/textures/*.webp`

Calidades configuradas:
- `heroes`: 76
- `cards`: 74
- `textures`: 74

Redimensión de salida (mobile-first, sin reescalado hacia arriba):
- `heroes`: máximo `1200x960`
- `cards`: máximo `900x1200`
- `textures`: máximo `1440x2160`

Convención de rutas en páginas:
- Hero Home: `/images/heroes/home-hero.webp`
- Cards ejemplo: `/images/cards/coaching-card-1.webp`

## Variables de entorno
Copia `.env.example` a `.env.local`:
- `CLOSED_PREVIEW_ENABLED`, `CLOSED_PREVIEW_USER`, `CLOSED_PREVIEW_PASSWORD` para publicación cerrada.
- Calendly (sesiones)
- Newsletter (Brevo/Mailchimp)
- Formulario de contacto (Formspree u otro)

## Publicación cerrada (cliente interno)
Este proyecto incluye un candado global por usuario/contraseña vía `middleware`.
Cuando está activo, también aplica `noindex` y desactiva `sitemap` para pruebas internas.

Configura:
```bash
CLOSED_PREVIEW_ENABLED=true
CLOSED_PREVIEW_USER=cliente
CLOSED_PREVIEW_PASSWORD=tu_clave_segura
```

Flujo recomendado con Google Cloud Run:
```bash
gcloud auth login
gcloud config set project TU_PROJECT_ID
gcloud services enable run.googleapis.com cloudbuild.googleapis.com artifactregistry.googleapis.com
gcloud run deploy mujer-alma-en-calma \
  --source . \
  --region us-central1 \
  --platform managed \
  --allow-unauthenticated \
  --min-instances=0 \
  --max-instances=1 \
  --set-env-vars "CLOSED_PREVIEW_ENABLED=true,CLOSED_PREVIEW_USER=cliente,CLOSED_PREVIEW_PASSWORD=tu_clave_segura"
```

Luego actualiza la URL pública para metadata/sitemap:
```bash
gcloud run services describe mujer-alma-en-calma --region us-central1 --format="value(status.url)"
gcloud run services update mujer-alma-en-calma \
  --region us-central1 \
  --update-env-vars "NEXT_PUBLIC_SITE_URL=URL_OBTENIDA_EN_EL_PASO_ANTERIOR"
```

## Kit anti-sorpresas (costos)
- Escalado seguro inicial: `--min-instances=0 --max-instances=1`.
- Billing tipo request-based: mantener configuración por defecto de Cloud Run (CPU bajo demanda).
- Cache agresiva de estáticos: `Cache-Control: public, max-age=31536000, immutable` en `/images/*` (ya implementado en `next.config.mjs`).
- Budget y alertas en Billing Console:
  - Crea presupuesto mensual de prueba (por ejemplo USD 5).
  - Alertas: 50%, 90%, 100%.
- Limpieza periódica de imágenes en Artifact Registry:
```bash
gcloud artifacts docker images list us-central1-docker.pkg.dev/TU_PROJECT_ID/TU_REPO
gcloud artifacts docker images delete IMAGE_URL --delete-tags --quiet
```

Cada vez que publiques, comparte solo:
- URL de preview/producción
- Usuario y contraseña de acceso

## Estructura
- `src/app/*` páginas (rutas principales ya creadas)
- `src/components/*` componentes UI
- `src/content/blog/*` posts de blog
- `scripts/optimize-images.mjs` pipeline de optimización de imágenes
- `assets/raw/*` originales locales (ignorados por git)
- `public/images/*` imágenes optimizadas para producción
- `public/icons/*` iconos de marca

## Próximos pasos sugeridos
1. Ejecutar `npm run assets:opt` tras cada carga de nuevos RAW.
2. Conectar newsletter + formulario de contacto.
3. Ajustar SEO por página (title/description).
4. Publicar (Google Cloud Run recomendado).

Fecha de generación: 2026-03-03
