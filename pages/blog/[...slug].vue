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
</script>

<template>
  <UContainer class="max-w-4xl mx-auto">
    <ContentRenderer v-if="post" :value="post" class="post" />
    <div v-else>Post not found</div>
  </UContainer>
</template>