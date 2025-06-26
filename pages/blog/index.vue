<script lang="ts" setup>
import { BlogCard } from '#components';
import { motion } from 'motion-v';
import { withLeadingSlash, joinURL } from 'ufo';

const route = useRoute();
const { locale } = useI18n();

const slug = computed(() =>
  Array.isArray(route.params.slug) ? (route.params.slug as string[]) : [route.params.slug as string],
);
const path = computed(() => withLeadingSlash(joinURL(locale.value, ...slug.value)));

const { data: posts } = await useAsyncData(path.value, () => {
  return queryCollection('blog')
    .where('stem', 'LIKE', '%.' + locale.value)
    .order('date', 'DESC')
    .all();
});

useSeoMeta({
  title: 'Valen.Vue - Blog',
});
</script>

<template>
  <UContainer as="main" class="mt-16 lg:mt-28 mb-28">
    <motion.h1
      :initial="false"
      :animate="{ opacity: 0, filter: 'blur(5px)', scale: 0.95 }"
      :whileInView="{ opacity: 1, filter: 'blur(0px)', scale: 1 }"
      :transition="{ duration: 0.6, ease: 'easeOut' }"
      class="text-4xl font-bold mb-8"
    >
      Blog
    </motion.h1>

    <section class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <motion.div
        v-for="post in posts"
        class="h-full"
        :initial="false"
        :animate="{ opacity: 0, filter: 'blur(5px)' }"
        :whileInView="{ opacity: 1, filter: 'blur(0px)' }"
        :transition="{ duration: 0.8, ease: 'easeOut' }"
      >
        <BlogCard
          :author="post.author"
          :title="post.title"
          :description="post.description"
          :date="post.date"
          :slug="post.slug"
          :category="post.category"
          :image="post.image"
      /></motion.div>
    </section>
  </UContainer>
</template>
