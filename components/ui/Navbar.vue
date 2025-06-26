<script lang="ts" setup>
import { UButton, UiColorModeButton } from '#components';
import { motion } from 'motion-v';
const route = useRoute();
const { locale, t } = useI18n();

const routes = computed(() => [
  {
    label: t('navbar.home'),
    href: `/`,
    active: route.path.split('/').length <= 2,
  },
  {
    label: t('navbar.portfolio'),
    href: `/${locale.value}/portfolio`,
    active: route.path.includes('/portfolio'),
  },
  {
    label: t('navbar.blog'),
    href: `/${locale.value}/blog`,
    active: route.path.includes('/blog'),
  },
]);
</script>

<template>
  <motion.nav
    :initial="false"
    :animate="{ opacity: 0, filter: 'blur(10px)', scale: 0.95 }"
    :whileInView="{ opacity: 1, filter: 'blur(0px)', scale: 1 }"
    :transition="{ duration: 0.8, ease: 'easeOut' }"
    class="mt-2 px-4 py-1 mx-auto rounded-full bg-default/80 backdrop-blur-2xl border border-muted flex items-center flex-row justify-center gap-1 z-50 fixed bottom-4 lg:bottom-auto lg:top-4 w-fit inset-x-0"
  >
    <UButton
      v-for="item in routes"
      :key="item.href"
      variant="link"
      color="neutral"
      :to="item.href"
      :active="item.active"
      size="lg"
    >
      {{ item.label }}
    </UButton>

    <UiColorModeButton />
  </motion.nav>
</template>
