import fs from "node:fs/promises"
import path from "node:path"
import sharp from "sharp"

const projectRoot = process.cwd()
const rawRoot = path.join(projectRoot, "assets", "raw")
const outRoot = path.join(projectRoot, "public", "images")

const categories = ["heroes", "cards", "textures"]
const profileByCategory = {
  heroes: { width: 1200, height: 960, quality: 76 },
  cards: { width: 900, height: 1200, quality: 74 },
  textures: { width: 1440, height: 2160, quality: 74 },
}

const allowedExt = new Set([".png", ".jpg", ".jpeg"])

async function ensureBaseDirs() {
  await Promise.all(
    categories.map((category) =>
      fs.mkdir(path.join(rawRoot, category), { recursive: true }),
    ),
  )
  await Promise.all(
    categories.map((category) =>
      fs.mkdir(path.join(outRoot, category), { recursive: true }),
    ),
  )
}

async function walk(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true })
  const files = await Promise.all(
    entries.map(async (entry) => {
      const full = path.join(dir, entry.name)
      if (entry.isDirectory()) return walk(full)
      return full
    }),
  )
  return files.flat()
}

function findCategory(filePath) {
  const rel = path.relative(rawRoot, filePath)
  const segments = rel.split(path.sep).map((segment) => segment.toLowerCase())
  return categories.find((category) => segments.includes(category)) || null
}

async function optimizeFile(inputPath, category) {
  const ext = path.extname(inputPath).toLowerCase()
  if (!allowedExt.has(ext)) return null

  const baseName = path.basename(inputPath, ext)
  const outputPath = path.join(outRoot, category, `${baseName}.webp`)
  const profile = profileByCategory[category]

  await sharp(inputPath)
    .rotate()
    .resize({
      width: profile.width,
      height: profile.height,
      fit: "inside",
      withoutEnlargement: true,
    })
    .webp({
      quality: profile.quality,
      effort: 6,
      smartSubsample: true,
    })
    .toFile(outputPath)

  return outputPath
}

async function main() {
  await ensureBaseDirs()

  const allFiles = await walk(rawRoot)
  const summary = {
    heroes: 0,
    cards: 0,
    textures: 0,
    skipped: 0,
  }

  for (const filePath of allFiles) {
    const category = findCategory(filePath)
    if (!category) {
      summary.skipped += 1
      continue
    }

    const out = await optimizeFile(filePath, category)
    if (!out) {
      summary.skipped += 1
      continue
    }

    summary[category] += 1
    console.log(`optimized: ${path.relative(projectRoot, out)}`)
  }

  console.log("")
  console.log(`heroes: ${summary.heroes}`)
  console.log(`cards: ${summary.cards}`)
  console.log(`textures: ${summary.textures}`)
  console.log(`skipped: ${summary.skipped}`)
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})
