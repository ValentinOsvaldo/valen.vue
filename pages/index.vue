<script lang="ts" setup>
import { motion } from 'motion-v';
const { locale } = useI18n();

useSeoMeta({
  title: 'Valen.Vue - Developer',
  description:
    'My goal is to create innovative and user-friendly applications that meet your needs and exceed your expectations.',
  ogImage: 'https://valen-vue.vercel.app/og-image.png',
  twitterImage: 'https://valen-vue.vercel.app/og-image.png',
  ogUrl: 'https://valen-vue.vercel.app',
  author: 'Osvaldo Valentin Garcia',
  ogLocale: 'en_US',
  twitterTitle: 'Valen.Vue - Developer',
  ogType: 'website',
  twitterCard: 'summary_large_image',
});
</script>

<template>
  <UContainer as="main" class="max-w-4xl">
    <section class="w-full flex items-center justify-center p-4">
      <div class="text-center text-balance space-y-3 container mx-auto my-20 mt-32">
        <motion.div
          :initial="false"
          :animate="{ opacity: 0, filter: 'blur(10px)', scale: 0.95 }"
          :whileInView="{ opacity: 1, filter: 'blur(0px)', scale: 1 }"
          :transition="{ duration: 0.8, ease: 'easeOut' }"
        >
          <h1
            class="text-4xl bg-neutral-800 dark:bg-gradient-to-r dark:from-[#3c3c3c] dark:via-[#eeeeee] dark:to-white bg-clip-text text-transparent"
          >
            {{ $t('home.hero.title') }}
          </h1>
        </motion.div>

        <motion.p
          :initial="false"
          :animate="{ opacity: 0, filter: 'blur(10px)', scale: 0.95 }"
          :whileInView="{ opacity: 1, filter: 'blur(0px)', scale: 1 }"
          :transition="{ duration: 1, ease: 'easeOut' }"
          class="text-muted text-lg"
        >
          {{ $t('home.hero.slogan') }}
        </motion.p>

        <motion.div
          :initial="false"
          :animate="{ opacity: 0, filter: 'blur(10px)', scale: 0.95 }"
          :whileInView="{ opacity: 1, filter: 'blur(0px)', scale: 1 }"
          :transition="{ duration: 1.2, ease: 'easeOut' }"
          class="flex items-center justify-center gap-4 flex-row"
        >
          <NuxtLink to="https://github.com/ValentinOsvaldo/" target="_blank" rel="noopener">
            <UIcon name="i-lucide-github" class="size-8! text-muted transition hover:text-primary" />
          </NuxtLink>
          <NuxtLink to="https://linkedin.com/in/valentin-osvaldo/" target="_blank" rel="noopener">
            <UIcon name="i-lucide-linkedin" class="size-8! text-muted transition hover:text-primary" />
          </NuxtLink>
        </motion.div>

        <motion.div
          :initial="false"
          :animate="{ opacity: 0, filter: 'blur(10px)', scale: 0.95 }"
          :whileInView="{ opacity: 1, filter: 'blur(0px)', scale: 1 }"
          :transition="{ duration: 1.3, ease: 'easeOut' }"
          class="flex items-center justify-center gap-4 flex-row mt-4"
        >
          <UButton
            leading-icon="i-lucide-mail"
            size="lg"
            color="neutral"
            variant="outline"
            to="mailto:valentingarcia.osvaldo@gmail.com"
          >
            {{ $t('home.hero.mail') }}
          </UButton>
          <UButton
            leading-icon="i-lucide-briefcase"
            size="lg"
            variant="ghost"
            color="neutral"
            :to="`${locale}/portfolio`"
          >
            {{ $t('home.hero.portfolio') }}
          </UButton>
        </motion.div>
      </div>
    </section>
  </UContainer>
</template>
