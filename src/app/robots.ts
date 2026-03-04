import type { MetadataRoute } from "next"
import { site } from "@/lib/site"

export default function robots(): MetadataRoute.Robots {
  const isClosedPreview =
    process.env.CLOSED_PREVIEW_ENABLED?.toLowerCase() === "true"

  if (isClosedPreview) {
    return {
      rules: [
        {
          userAgent: "*",
          disallow: "/",
        },
      ],
    }
  }

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: `${site.url.replace(/\/$/, "")}/sitemap.xml`,
  }
}
