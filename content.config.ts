import { defineContentConfig, defineCollection, z } from '@nuxt/content';

export default defineContentConfig({
  collections: {
    content: defineCollection({
      type: 'page',
      source: 'blog/*.md',
      schema: z.object({
        date: z.string(),
        author: z.string(),
        slug: z.string(),
        category: z.string(),
        image: z.string(),
      }),
    }),
  },
});
