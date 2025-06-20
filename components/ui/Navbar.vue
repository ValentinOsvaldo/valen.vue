<script lang="ts" setup>
const isOpen = ref(false);
</script>

<template>
  <header class="backdrop-blur-2xl sticky top-0">
    <UContainer class="flex items-center justify-between p-4 relative z-50">
      <h1 class="font-bold text-2xl">
        <span>Valen</span>
        <span class="text-primary">.Vue</span>
      </h1>

      <UButton
        icon="i-lucide-menu"
        variant="ghost"
        class="lg:hidden"
        :ui="{ leadingIcon: 'size-6!' }"
        @click="isOpen = !isOpen"
      />

      <div
        class="fixed left-0 top-14 transition-all duration-500 p-4 z-0 bg-default w-full flex flex-col items-center gap-2 lg:static lg:translate-y-0 lg:flex-row lg:w-fit lg:p-0"
        :class="isOpen ? 'translate-x-0' : 'translate-x-full lg:translate-x-0'"
      >
        <UButton variant="ghost">Home</UButton>
        <UButton variant="ghost">Portfolio</UButton>
        <UButton variant="ghost">Blog</UButton>
        <UiColorModeButton />
      </div>
    </UContainer>
  </header>
</template>
