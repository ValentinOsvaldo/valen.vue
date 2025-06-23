<script lang="ts" setup>
const { slug } = useRoute().params;

const { locale } = useI18n();

const { data: post } = await useAsyncData("post", () => {
  return queryCollection("content")
    .where("stem", "LIKE", "%." + locale.value)
    .where("slug", "=", slug)
    .first();
});
</script>

<template>
  <UContainer class="max-w-4xl mx-auto">
    <ContentRenderer v-if="post" :value="post" class="post" />
  </UContainer>
</template>
