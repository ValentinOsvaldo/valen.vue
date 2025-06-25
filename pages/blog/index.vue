<script lang="ts" setup>

import { withLeadingSlash, joinURL } from 'ufo'

const route= useRoute();
const { locale } = useI18n();

const slug = computed(() => Array.isArray(route.params.slug) ? route.params.slug as string[] : [route.params.slug as string])
const path = computed(() => withLeadingSlash(joinURL(locale.value, ...slug.value)))

const { data: posts } = await useAsyncData(path.value, () => {
  return queryCollection("blog")
    .where("stem", "LIKE", "%." + locale.value)
    .order('date', 'DESC')
    .all();
});

useSeoMeta({
  title: "Valen.Vue - Blog",
});
</script>

<template>
  <UContainer as="main" class="my-8">
    <h1 class="text-4xl font-bold mb-8">Blog</h1>
    
    <section class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <BlogCard
      v-for="post in posts"
      :author="post.author"
      :title="post.title"
      :description="post.description"
      :date="post.date"
      :slug="post.slug"
      :category="post.category"
      :image="post.image"
      />
    </section>
  </UContainer>
</template>