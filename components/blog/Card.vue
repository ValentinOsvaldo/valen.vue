<template>
  <div
    class="transition rounded-lg overflow-hidden w-full max-w-[500px] bg-elevated hover:scale-105"
  >
    <header class="relative">
      <NuxtImg :src="'/og-image.png'" class="w-full h-[250px] object-cover" />

      <UBadge :label="category" color="primary" variant="solid" class="absolute top-8 left-4 z-10" />
    </header>

    <div class="p-4 text-balance">
      <h3 class="text-lg font-semibold mb-2">{{ title }}</h3>
      <p class="text-muted mb-2">{{ description }}</p>

      <div class="flex items-center gap-4 text-dimmed text-sm">
        <span class="flex items-center gap-2">
          <UIcon name="i-lucide-user" class="size-4" />
          {{ author }}
        </span>
        <span class="flex items-center gap-2">
          <UIcon name="i-lucide-calendar" class="size-4" />
          {{ dateFormat }}
        </span>
      </div>
    </div>

    <footer class="flex items-center justify-between p-4">
      <UButton variant="subtle" :to="`/blog/${slug}`"> Read more </UButton>

      <UButton variant="ghost" icon="i-lucide-share" />
    </footer>
  </div>
</template>

<script lang="ts" setup>
interface Props {
  author: any;
  title: string;
  description: string;
  date: string;
  slug: any;
  category: any;
}

const props = defineProps<Props>();

const dateFormat = computed(() => new Date(props.date).toLocaleDateString());
</script>
