import fs from "fs"
import path from "path"

export type BlogPost = {
  slug: string
  title: string
  description: string
  date: string
}

const BLOG_DIR = path.join(process.cwd(), "src", "content", "blog")

function frontmatter(raw: string) {
  const match = raw.match(/^---\n([\s\S]*?)\n---\n/)
  if (!match) return { data: {}, body: raw }
  const fm = match[1]
  const body = raw.slice(match[0].length)
  const data: Record<string, string> = {}
  fm.split("\n").forEach((line) => {
    const idx = line.indexOf(":")
    if (idx === -1) return
    const key = line.slice(0, idx).trim()
    const val = line.slice(idx + 1).trim().replace(/^"|"$/g, "")
    data[key] = val
  })
  return { data, body }
}

export function listPosts(): BlogPost[] {
  if (!fs.existsSync(BLOG_DIR)) return []
  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith(".mdx"))
  const posts = files.map((f) => {
    const slug = f.replace(/\.mdx$/, "")
    const raw = fs.readFileSync(path.join(BLOG_DIR, f), "utf8")
    const { data } = frontmatter(raw)
    return {
      slug,
      title: data.title ?? slug,
      description: data.description ?? "",
      date: data.date ?? "",
    }
  })
  return posts.sort((a, b) => (a.date < b.date ? 1 : -1))
}

export async function getPost(slug: string) {
  const full = path.join(BLOG_DIR, `${slug}.mdx`)
  const raw = fs.readFileSync(full, "utf8")
  const { data, body } = frontmatter(raw)
  return { data, body }
}
