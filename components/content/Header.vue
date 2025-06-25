<template>
  <header class="mt-8 mb-4">
    <h1 class="text-4xl lg:text-6xl font-bold mb-4">
      <slot mdc-unwrap="p" />
    </h1>

    <p class="text-muted inline-flex gap-2">
      <span class="inline-flex items-center gap-2">
        <UIcon name="i-lucide-calendar" class="size-4" />
        <slot name="date" mdc-unwrap="p" />
      </span>
      <span class="inline-flex items-center gap-2">
        <UIcon name="i-lucide-user" class="size-4" />
        <slot name="author" mdc-unwrap="p" />
      </span>
    </p>
  </header>
</template>