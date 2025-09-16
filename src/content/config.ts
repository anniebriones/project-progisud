import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string().optional().default(''),
    date: z.date(),
    draft: z.boolean().optional().default(false)
  })
});

export const collections = { blog };
