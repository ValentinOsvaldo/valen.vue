<script lang="ts" setup>
import type { NavigationMenuItem } from "@nuxt/ui";

const { locale, setLocale, t } = useI18n();

const items = computed<NavigationMenuItem[]>(() => [
  {
    label: t("navbar.home"),
    href: "/",
  },
  {
    label: t("navbar.portfolio"),
    href: "/portfolio",
  },
  {
    label: t("navbar.blog"),
    href: "/blog",
  },
]);
const isOpen = ref(false);
</script>

<template>
  <header class="bg-default/10 backdrop-blur-2xl sticky top-0 z-50">
    <UContainer class="flex items-center justify-between px-4 py-3 relative z-50">
      <h1 class="font-bold text-xl">
        <span>Valen</span>
        <span class="text-primary">.Vue</span>
      </h1>

      <div class="flex items-center gap-2 flex-row">
        <UNavigationMenu :items="items" class="hidden md:block" />
        <UiColorModeButton />
        <UButton
          variant="subtle"
          @click="setLocale(locale === 'en' ? 'es' : 'en')"
        >
          {{ locale }}
        </UButton>
        <u-slideover>
          <UButton
            icon="i-lucide-menu"
            variant="ghost"
            class="lg:hidden"
            :ui="{ leadingIcon: 'size-6!' }"
            @click="isOpen = !isOpen"
          />

          <template #title>
            <h1 class="font-bold text-2xl">
              <span>Valen</span>
              <span class="text-primary">.Vue</span>
            </h1>
          </template>

          <template #body>
            <u-navigation-menu :items="items" orientation="vertical" />
          </template>
        </u-slideover>
      </div>
    </UContainer>
  </header>
</template>
