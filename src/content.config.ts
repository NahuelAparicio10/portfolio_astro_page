import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
	// Load Markdown and MDX files in the `src/content/blog/` directory.
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			// Transform string to Date object
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			heroImage: image().optional(),
			tags: z.array(z.string()).optional(),
            category: z.string().optional(),
			author: z.string().optional(),
			youtubeID: z.string().regex(/^[A-Za-z0-9_-]{11}$/, 'Debe ser un ID de YouTube válido (11 chars)').optional(),
      		youtubeTitle: z.string().optional(),
			featured: z.boolean().optional(),
			featuredOrder: z.number().optional(),
		}),
});

export const collections = { blog };
