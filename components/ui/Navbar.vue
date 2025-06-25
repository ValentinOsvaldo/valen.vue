<script lang="ts" setup>
import type { NavigationMenuItem } from "@nuxt/ui";

const { locale, setLocale, t } = useI18n();

const items = computed<NavigationMenuItem[]>(() => [
  {
    label: t("navbar.home"),
    href: "/",
    onSelect() {
      isOpen.value = false;
    }
  },
  {
    label: t("navbar.portfolio"),
    href: "/portfolio",
    onSelect() {
      isOpen.value = false;
    },
  },
  {
    label: 'Blog',
    href: "/blog",
    onSelect() {
      isOpen.value = false;
    }
  },
]);
const isOpen = ref(false);
</script>

<template>
  <header class="bg-default/10 backdrop-blur-2xl sticky top-0 z-50">
    <UContainer class="flex items-center justify-between px-4 py-3 relative z-50">
      <NuxtLink to="/">
        <h1 class="font-bold text-xl">
          <span>Valen</span>
          <span class="text-primary">.Vue</span>
        </h1>
      </NuxtLink>

      <div class="flex items-center gap-2 flex-row">
        <UNavigationMenu :items="items" class="hidden lg:block" />
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
