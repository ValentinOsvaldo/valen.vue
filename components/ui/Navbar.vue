<script lang="ts" setup>
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
  <header class="flex items-center justify-center top-2 sticky z-50">
    <nav
      class="mt-4 px-4 py-1 mx-auto rounded-full bg-default/30 backdrop-blur-xl border border-muted flex items-center flex-row gap-1"
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
    </nav>
  </header>
</template>
