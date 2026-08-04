import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/**
 * Both language collections share the same frontmatter, so the schema is
 * defined once. They stay separate collections because Astro's glob loader
 * keys entries by directory, and each language has its own content files.
 */
const postSchema = ({ image }: { image: () => z.ZodType }) =>
  z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: image().optional(),
    tags: z.array(z.string()).optional(),
    category: z.string().optional(),
    author: z.string().optional(),
    youtubeID: z
      .string()
      .regex(/^[A-Za-z0-9_-]{11}$/, 'Must be a valid 11-character YouTube ID')
      .optional(),
    youtubeTitle: z.string().optional(),
    featured: z.boolean().optional(),
    featuredOrder: z.number().optional(),
  });

const blog = defineCollection({
  loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
  schema: postSchema,
});

const es = defineCollection({
  loader: glob({ base: './src/content/es', pattern: '**/*.{md,mdx}' }),
  schema: postSchema,
});

export const collections = { blog, es };
