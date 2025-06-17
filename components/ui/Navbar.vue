<template>
  <header class="backdrop-blur-md">
    <nav class="container mx-auto p-4 flex items-center justify-between">
      <h1 class="text-xl font-semibold">
        <span>Valen</span><span class="text-primary">.Vue</span>
      </h1>

      <div class="flex items-center flex-row gap-2">
        <NuxtLink to="/">
          <UButton variant="ghost" active-variant="soft" :active="route.path === '/'"> Portfolio </UButton>
        </NuxtLink>
        <NuxtLink to="/blog">
          <UButton variant="ghost" active-variant="soft" :active="route.path === '/blog'"> Blog </UButton>
        </NuxtLink>

        <UiColorModeButton />
      </div>
    </nav>
  </header>
</template>

<script lang="ts" setup>
const route = useRoute()
</script>
