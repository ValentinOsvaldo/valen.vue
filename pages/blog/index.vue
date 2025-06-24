<script lang="ts" setup>

import { withLeadingSlash, joinURL } from 'ufo'

const route= useRoute();
const { locale } = useI18n();

const slug = computed(() => Array.isArray(route.params.slug) ? route.params.slug as string[] : [route.params.slug as string])
const path = computed(() => withLeadingSlash(joinURL(locale.value, ...slug.value)))

const { data: posts } = await useAsyncData(path.value, () => {
  return queryCollection("content")
    .where("stem", "LIKE", "%." + locale.value)
    .all();
});

useSeoMeta({
  title: "Valen.Vue - Blog",
});
</script>

<template>
  <UContainer as="main" class="mt-8">
    <h1 class="text-4xl font-bold">Blog</h1>
    
    <BlogCard
      v-for="post in posts"
      :author="post.author"
      :title="post.title"
      :description="post.description"
      :date="post.date"
      :slug="post.slug"
      :category="post.category"
    />
  </UContainer>
</template>