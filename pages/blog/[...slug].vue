<script lang="ts" setup>
import { withLeadingSlash, joinURL } from 'ufo'

const route= useRoute();
const { locale } = useI18n();

const slug = computed(() => Array.isArray(route.params.slug) ? route.params.slug as string[] : [route.params.slug as string])
const path = computed(() => withLeadingSlash(joinURL(locale.value, ...slug.value)))

const { data: post } = await useAsyncData(path.value, () => {
  return queryCollection("blog")
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
  <UContainer class="max-w-4xl mx-auto mt-28 mb-24">
    <nav class="mb-8">
      <UButton variant="subtle" color="neutral" leading-icon="i-lucide-arrow-left" @click="$router.back()">
        {{ $t("blog.back") }}
      </UButton>
    </nav>
    <ContentRenderer v-if="post" :value="post" class="post" />
    <div v-else>Post not found</div>
  </UContainer>
</template>