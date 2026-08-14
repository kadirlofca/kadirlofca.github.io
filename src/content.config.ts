import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const posts = defineCollection({
  loader: glob({ base: "./src/posts", pattern: "**/*.{md,mdx}" }),
  schema: z.object({
    published: z.boolean(),
    order: z.number().optional().default(0),
    title: z.string(),
    tags: z.string().array(),
    shortDescription: z.string(),
    longDescription: z.string(),
    date: z.coerce.date(),
    video: z.string().url().optional(),
    organization: z.string().optional(),
    location: z.string().optional(),
    role: z.string().optional(),
  }),
});

export const collections = { posts };
