import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/blog" }),
  schema: z.object({
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
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.coerce.date(),
    thumbnail: z.string(),
    stack: z.array(z.string()),
    repoUrl: z.url().optional(),
    liveUrl: z.url().optional(),
    isFeatured: z.boolean().default(false),
  }),
});

const gallery = defineCollection({
  loader: glob({ pattern: '**/[^_]*.json', base: "./src/content/gallery" }),
  schema: z.object({
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
