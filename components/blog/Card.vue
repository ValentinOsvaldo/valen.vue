<script lang="ts" setup>
import { useClipboard } from '~/composables/useClipboard';

const { t } = useI18n();

const toast = useToast();

interface Props {
  author: string;
  title: string;
  description: string;
  date: string;
  slug: string;
  category: string;
  image?: string;
}

const props = defineProps<Props>();

const dateFormat = computed(() => Intl.DateTimeFormat().format(new Date(props.date)));

const img = computed(() => props.image || `https://valen-vue.vercel.app/og-image.png`);

const descriptionComputed = computed(() =>
  props.description.length > 100 ? `${props.description.slice(0, 100)}...` : props.description,
);

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
  <div class="h-full transition-all rounded-lg overflow-hidden w-full max-w-[500px] bg-elevated hover:scale-105 flex flex-col group">
    <header class="relative">
      <NuxtImg :src="img" :alt="title" class="transition-all w-full h-[200px] lg:h-[250px] object-cover" />

      <UBadge :label="category" color="neutral" variant="solid" class="absolute top-8 left-4 z-10 capitalize" />
    </header>

    <div class="flex flex-col h-full">
      <div class="p-4 flex-1 flex flex-col justify-between">
        <h3 class="text-lg font-semibold mb-2 text-balance">{{ title }}</h3>
        <p class="text-muted mb-2 text-pretty">{{ descriptionComputed }}</p>

        <div class="flex items-center gap-4 text-dimmed text-sm">
          <span class="flex items-center gap-2">
            <UIcon name="i-lucide-user" class="size-4" />
            {{ author }}
          </span>
          <span class="flex items-center gap-2" v-if="date">
            <UIcon name="i-lucide-calendar" class="size-4" />
            {{ dateFormat }}
          </span>
        </div>
      </div>

      <footer class="flex items-center justify-between p-4">
        <UButton variant="outline" color="neutral" :to="`/blog/${slug}`"> {{ $t('blog.read-more') }} </UButton>

        <UTooltip text="Copy link">
          <UButton variant="outline" color="neutral" icon="i-lucide-share" @click="onCopyPath(slug)" class="cursor-pointer" />
        </UTooltip>
      </footer>
    </div>
  </div>
</template>
