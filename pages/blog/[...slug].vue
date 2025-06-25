<script lang="ts" setup>
import { withLeadingSlash, joinURL } from 'ufo'

const route= useRoute();
const { locale } = useI18n();

const slug = computed(() => Array.isArray(route.params.slug) ? route.params.slug as string[] : [route.params.slug as string])
const path = computed(() => withLeadingSlash(joinURL(locale.value, ...slug.value)))

const { data: post } = await useAsyncData(path.value, () => {
  return queryCollection("content")
    .where("stem", "LIKE", "%." + locale.value)
    .where("slug", "=", slug.value)
    .first();
});

useSeoMeta({
  title: post.value?.title,
  description: post.value?.description,
  ogImage: post.value?.image || "https://valen-vue.vercel.app/og-image.png",
  twitterImage: post.value?.image || "https://valen-vue.vercel.app/og-image.png",
  author: post.value?.author,
  ogLocale: locale.value,
  twitterTitle: post.value?.title,
  ogType: "article",
  twitterCard: "summary_large_image",
})
</script>

<template>
  <UContainer class="max-w-4xl mx-auto my-8">
    <ContentRenderer v-if="post" :value="post" class="post" />
    <div v-else>Post not found</div>
  </UContainer>
</template>