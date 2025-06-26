<script lang="ts" setup>
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
    .limit(3)
    .all();
});
</script>

<template>
  <section class="mb-24">
    <motion.div
      :initial="false"
      :animate="{ opacity: 0, filter: 'blur(5px)', scale: 0.95 }"
      :whileInView="{ opacity: 1, filter: 'blur(0px)', scale: 1 }"
      :transition="{ duration: 0.8, ease: 'easeOut' }"
      class="mb-8"
    >
      <h2 class="text-2xl font-medium">{{ $t('home.blog.latest-posts') }}</h2>
      <p class="text-muted">{{ $t('home.blog.latest-posts-message') }}</p>
    </motion.div>

    <motion.div
      v-for="(post, index) in posts"
      :key="post.slug"
      class="mb-4"
      :initial="false"
      :animate="{ opacity: 0, filter: 'blur(5px)', scale: 0.95 }"
      :whileInView="{ opacity: 1, filter: 'blur(0px)', scale: 1 }"
      :transition="{ duration: 0.8 * (index + 1), ease: 'easeOut' }"
    >
      <span class="text-muted text-sm mb-3 capitalize">{{
        Intl.DateTimeFormat(locale, { dateStyle: 'full' }).format(new Date(post.date))
      }}</span>
      <h3 class="text-lg font-semibold mb-1.5">{{ post.title }}</h3>
      <p class="text-muted mb-3 text-sm">
        {{ post.description }}
      </p>

      <UButton variant="link" color="info" :to="`/blog/${post.slug}`">
        {{ $t('blog.read-more') }}
      </UButton>
    </motion.div>
  </section>
</template>
