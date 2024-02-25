import { defineCollection, z } from "astro:content";

const postsCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    publishedAt: z.date(),
    description: z.string(),
    isPublished: z.boolean(),
  }),
});

const projectsCollection = defineCollection({
  type: "content",
  schema: z.object({
    name: z.string(),
    description: z.string(),
    tech: z.string(),
    isPublished: z.boolean(),
    isSelected: z.boolean()
  }),
});

export const collections = {
  posts: postsCollection,
  projects: projectsCollection,
};
