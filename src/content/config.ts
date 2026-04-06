import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: () => z.object({
    title: z.string().max(60),
    description: z.string().max(160),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    author: z.string().default('Anonymous'),
    heroImage: z.string().optional(),
    heroAlt: z.string().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

const projects = defineCollection({
  type: 'content',
  schema: () => z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.coerce.date(),
    thumbnail: z.string(),
    stack: z.array(z.string()),
    repoUrl: z.string().url().optional(),
    liveUrl: z.string().url().optional(),
    isFeatured: z.boolean().default(false),
  }),
});

const gallery = defineCollection({
  type: 'data',
  schema: () => z.object({
    title: z.string(),
    alt: z.string(),
    image: z.string(),
    dateTaken: z.coerce.date().optional(),
    location: z.string().optional(),
    category: z.enum(['Landscape', 'Portrait', 'Street', 'Digital']),
    featured: z.boolean().default(false),
  }),
});

export const collections = {
  blog,
  projects,
  gallery
};
