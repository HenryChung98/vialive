import type { ImageMetadata } from "astro"

// Each app's App Store icon lives at src/assets/apps/<slug>-icon.(png|webp), as the square 1024px original.
const files = import.meta.glob<{ default: ImageMetadata }>("/src/assets/apps/*-icon.{png,webp}", { eager: true })

export const appIcons: Record<string, ImageMetadata> = Object.fromEntries(
  Object.entries(files).map(([path, mod]) => [path.split("/").pop()!.replace(/-icon\.\w+$/, ""), mod.default])
)
