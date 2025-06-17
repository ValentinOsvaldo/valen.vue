<template>
  <NuxtLink :to="to">
    <div
      class="h-[250px] relative overflow-hidden rounded-lg group transitions"
    >
      <NuxtImg
        src="https://i.blogs.es/1ca280/trailer-1-illustration-16x9-/1366_2000.jpg"
        class="w-full h-full object-cover absolute inset-0 z-0 transition-all group-hover:scale-110 group-hover:blur-xs"
      />

      <div
        class="z-50 flex-1 absolute flex w-full justify-end flex-col h-full p-4 bg-linear-to-t from-black to-transparent transition group-hover:to-black/20"
      >
        <h3 class="text-3xl font-medium">
          {{ title }}
        </h3>

        <p class="text-muted transition">
          {{ descriptionShorted }}
        </p>
      </div>
    </div>
  </NuxtLink>
</template>

<script lang="ts" setup>
interface Props {
  title: string;
  description: string;
  to: string;
}

const props = defineProps<Props>();
const descriptionShorted = computed(() => props.description.length >= 150 ? `${props.description.slice(0, 150)}...` : props.description)
</script>
