<script lang="ts" setup>
import { useClipboard } from '~/composables/useClipboard';

const { t } = useI18n()

const toast = useToast()

interface Props {
  author: any;
  title: string;
  description: string;
  date: string;
  slug: any;
  category: any;
  image?: string;
}

const props = defineProps<Props>();

const dateFormat = computed(() => new Date(props.date).toLocaleDateString());

const img = computed(() => props.image || `https://valen-vue.vercel.app/og-image.png`);

const { copy } = useClipboard();

const onCopyPath = async (slug: string) => {
  if (!import.meta.server) {
    await copy(`${window.location.origin}/blog/${slug}`);
  } else {
    await copy(`https://valen-vue.vercel.app/blog/${slug}`);
  }

  toast.add({
    title: t('blog.copy-message'),    
  });
};
</script>


<template>
  <div
    class="transition rounded-lg overflow-hidden w-full max-w-[500px] bg-elevated hover:scale-105"
  >
    <header class="relative">
      <NuxtImg :src="img" :alt="title" class="w-full h-[200px] lg:h-[250px] object-cover" />

      <UBadge :label="category" color="primary" variant="solid" class="absolute top-8 left-4 z-10" />
    </header>

    <div class="p-4">
      <h3 class="text-lg font-semibold mb-2 text-balance">{{ title }}</h3>
      <p class="text-muted mb-2 text-pretty">{{ description }}</p>

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
      <UButton variant="subtle" :to="`/blog/${slug}`"> {{ $t('blog.read-more') }} </UButton>

      <UButton variant="ghost" icon="i-lucide-share" @click="onCopyPath(slug)" />
    </footer>
  </div>
</template>

