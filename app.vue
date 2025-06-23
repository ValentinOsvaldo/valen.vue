<template>
  <UApp>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </UApp>
  <Analytics />
</template>

<script lang="ts" setup>
import { Analytics } from "@vercel/analytics/nuxt";
</script>
