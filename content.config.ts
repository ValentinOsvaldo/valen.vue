import { defineContentConfig, defineCollection, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    blog: defineCollection({
      type: 'page',
      source: 'blog/*.md',
      schema: z.object({
        title: z.string(),
        description: z.string(),
        image: z.string(),
        date: z.date(),
        author: z.string(),
        slug: z.string(),
        category: z.string(),
        tags: z.array(z.string()),
      }),
    })
  }
})
