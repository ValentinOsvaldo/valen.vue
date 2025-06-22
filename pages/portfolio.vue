<script lang="ts" setup>
useSeoMeta({
  title: "Valen.Vue - Portfolio",
});
</script>

<template>
  <UContainer as="main" class="space-y-8 max-w-4xl">
    <section class="mt-8">
      <h2 class="mb-2 text-4xl font-bold">
        {{ $t("portfolio.summary.title") }}
      </h2>

      <hr class="h-px my-2 bg-accented border-0" />

      <p class="text-muted text-lg">
        {{ $t("portfolio.summary.about") }}
      </p>
    </section>

    <section>
      <h2 class="mb-2 text-4xl font-bold">
        {{ $t("portfolio.experience.title") }}
      </h2>

      <hr class="h-px my-2 bg-accented border-0" />

      <div
        v-for="experience in ($tm('portfolio.experience.items') as any[])
          .slice()
          .reverse()"
        class="mb-8"
      >
        <div class="text-default">
          {{ $rt(experience.title) }}
        </div>
        <div class="text-muted">
          {{ $rt(experience.company) }}
        </div>
        <time class="text-dimmed text-sm">
          {{ $rt(experience.date) }}
        </time>
        <ul class="list-disc list-inside text-muted">
          <li v-for="b in experience.bullets" :key="b">
            {{ $rt(b) }}
          </li>
        </ul>
      </div>
    </section>

    <!-- <section>
      <h2 class="mb-2 text-4xl font-bold">
        {{ $t("portfolio.education.title") }}
      </h2>

      <hr class="h-px my-2 bg-accented border-0" />
    </section> -->
  </UContainer>
</template>
