import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    status: z.string().default('Live'),
    tags: z.array(z.string()).default([]),
    stack: z.array(z.string()).default([]),
    liveUrl: z.string().optional(),
    repoUrl: z.string().optional(),
    image: z.string().optional(),
    gallery: z.array(z.object({ src: z.string(), caption: z.string().optional() })).default([]),
    featured: z.boolean().default(false),
    listed: z.boolean().default(true),
    order: z.number().default(99),
  }),
});

export const collections = { projects };
