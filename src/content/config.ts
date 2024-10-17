import { number } from 'astro/zod';
import { z, defineCollection } from 'astro:content';

const projectCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        description: z.string(),
        role: z.string(),
        category: z.string(),
        chips: z.string().array(),
        priority: z.number().default(Number.MAX_VALUE),
        draft: z.boolean()
    })
});

export const collections = {
    'projects': projectCollection,
}