import { defineCollection } from "astro:content"
import { glob } from "astro/loaders"
import { z } from "astro/zod"

// English pages live at the root (currency-converter/policy.md), Korean ones under ko/.
export const collections = {
  docs: defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content/docs" }),
    schema: z.object({
      title: z.string(),
      description: z.string(),
      // Sidebar link text and position within the app's group.
      label: z.string().optional(),
      order: z.number().default(0),
    }),
  }),
}
