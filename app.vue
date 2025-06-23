<template>
  <UApp>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    <Analytics />
  </UApp>
</template>

<script lang="ts" setup>
import { Analytics } from "@vercel/analytics/nuxt";
</script>
