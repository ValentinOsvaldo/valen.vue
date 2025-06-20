<script lang="ts" setup>
useSeoMeta({
  title: 'Valen.Vue - Developer',
});
</script>

<template>
  <main>
    <section class="w-full flex items-center justify-center p-4">
      <div class="text-center text-balance space-y-3 container mx-auto my-20">
        <h2 class="text-5xl lg:text-6xl font-bold text-primary mb-4">
          Improving your apps
        </h2>

        <p class="text-muted text-xl">
          My goal is to create innovative and user-friendly applications that
          meet your needs and exceed your expectations.
        </p>

        <div class="flex items-center justify-center gap-4 flex-row">
          <NuxtLink
            to="https://github.com/ValentinOsvaldo/"
            target="_blank"
            rel="noopener"
          >
            <UIcon
              name="i-lucide-github"
              class="size-8! text-muted transition hover:text-primary"
            />
          </NuxtLink>
          <NuxtLink
            to="https://linkedin.com/in/valentin-osvaldo/"
            target="_blank"
            rel="noopener"
          >
            <UIcon
              name="i-lucide-linkedin"
              class="size-8! text-muted transition hover:text-primary"
            />
          </NuxtLink>
        </div>

        <div class="flex items-center justify-center gap-4 flex-row mt-4">
          <UButton leading-icon="i-lucide-mail" size="lg">Get in touch</UButton>
          <UButton leading-icon="i-lucide-briefcase" size="lg" variant="soft"
            >Portfolio</UButton
          >
        </div>
      </div>
    </section>
  </main>
</template>
