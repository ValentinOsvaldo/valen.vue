<script lang="ts" setup>
useSeoMeta({
  title: "Valen.Vue - Blog",
});

const { locale } = useI18n();

const { data: posts } = await useAsyncData("posts", () => {
  return queryCollection("content")
    .where("stem", "LIKE", "%." + locale.value)
    .all();
});
</script>

<template>
  <UContainer as="main" class="mt-8">
    
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