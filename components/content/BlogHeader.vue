<template>
  <header class="mt-16 mb-8">
    <h1 class="text-4xl lg:text-6xl font-bold text-pretty">
      <slot mdc-unwrap="p" />
    </h1>
    <hr class="h-px my-2 bg-accented border-0" />

    <div class="flex items-center flex-row gap-4 text-sm">
      <span class="inline-flex gap-2 flex-row items-center text-muted">
        <UIcon name="i-lucide-calendar" color="neutral" variant="ghost" />
        <slot name="date" mdc-unwrap="p" />
      </span>
      <span class="inline-flex gap-2 flex-row items-center text-muted">
        <UIcon name="i-lucide-user" color="neutral" variant="ghost" />
        <slot name="author" mdc-unwrap="p" />
      </span>
    </div>
  </header>
</template>
