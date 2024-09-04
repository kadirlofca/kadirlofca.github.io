import { z, defineCollection } from 'astro:content';

const projectCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        description: z.string(),
        role: z.string(),
        chips: z.string().array(),
        priority: z.number().optional(),
        draft: z.boolean()
    })
});

export const collections = {
    'projects': projectCollection,
}