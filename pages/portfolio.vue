<script lang="ts" setup>
import { UContainer } from '#components';
import { motion } from 'motion-v';

useSeoMeta({
  title: 'Valen.Vue - Portfolio',
});

type Skill = 'front' | 'mobile' | 'back' | 'tools';

const skills = computed<Record<Skill, string[]>>(() => ({
  front: ['Javascript', 'Typescript', 'Vue', 'React', 'Next.js', 'Nuxt.js'],
  mobile: ['React Native', 'Expo', 'Flutter'],
  back: ['NestJs'],
  tools: ['Git', 'REST APIs', 'Tailwind CSS'],
}));
</script>

<template>
  <motion.div
    :initial="false"
    :animate="{ opacity: 0, filter: 'blur(10px)' }"
    :whileInView="{ opacity: 1, filter: 'blur(0px)' }"
    :transition="{ duration: 0.4, ease: 'easeOut' }"
  >
    <UContainer as="main" class="space-y-8 max-w-4xl mb-24 mt-8 lg:mt-24">
      <section>
        <PortfolioGenerateResume />
      </section>

      <section class="mt-8">
        <h2 class="mb-2 text-4xl font-bold">
          {{ $t('portfolio.summary.title') }}
        </h2>

        <hr class="h-px my-2 bg-accented border-0" />

        <p class="text-muted">
          {{ $t('portfolio.summary.about') }}
        </p>
      </section>

      <section>
        <h2 class="mb-2 text-4xl font-bold">
          {{ $t('portfolio.experience.title') }}
        </h2>

        <hr class="h-px my-2 bg-accented border-0" />

        <ol class="relative border-s border-border border-accented">
          <li
            v-for="(experience, index) in (
            $tm('portfolio.experience.items') as any[]
          )
            .slice()
            .reverse()"
            :key="index"
            class="mb-10 ms-4"
          >
            <div class="absolute w-3 h-3 rounded-full mt-1.5 -start-1.5 border border-background bg-muted"></div>

            <time class="mb-1 text-sm leading-none text-dimmed">
              {{ $rt(experience.date) }}
            </time>

            <h3 class="text-lg font-semibold text-default">
              {{ $rt(experience.title) }}
            </h3>

            <p class="text-sm font-medium text-muted mb-2">
              {{ $rt(experience.company) }}
            </p>

            <ul class="list-disc list-inside text-muted">
              <li v-for="b in experience.bullets" :key="b">
                {{ $rt(b) }}
              </li>
            </ul>
          </li>
        </ol>
      </section>

      <section>
        <h2 class="mb-2 text-4xl font-bold">
          {{ $t('portfolio.skills.title') }}
        </h2>

        <hr class="h-px my-2 bg-accented border-0" />

        <div class="flex flex-row flex-wrap gap-2">
          <template v-for="[group, list] in Object.entries(skills)" :key="group">
            <UBadge v-for="skill in list" :key="skill" :label="skill" color="neutral" variant="subtle" size="lg" />
          </template>
        </div>
      </section>

      <section>
        <h2 class="mb-2 text-4xl font-bold">
          {{ $t('portfolio.personalProjects.title') }}
        </h2>

        <hr class="h-px my-2 bg-accented border-0" />

        <ol>
          <li
            v-for="(project, index) in ($tm(
            'portfolio.personalProjects.items',
          ) as any[])"
            :key="index"
          >
            <h3 class="text-lg font-semibold text-default">
              {{ $rt(project.title) }}
            </h3>
            <p class="text-muted">{{ $rt(project.description) }}</p>
          </li>
        </ol>
      </section>

      <section>
        <h2 class="mb-2 text-4xl font-bold">
          {{ $t('portfolio.education.title') }}
        </h2>

        <hr class="h-px my-2 bg-accented border-0" />

        <ol class="relative border-s border-border border-accented">
          <li
            v-for="(education, index) in ($tm(
            'portfolio.education.items',
          ) as any[])"
            :key="index"
            class="mb-10 ms-4"
          >
            <div class="absolute w-3 h-3 rounded-full mt-1.5 -start-1.5 border border-background bg-muted"></div>

            <time class="mb-1 text-sm leading-none text-dimmed">
              {{ $rt(education.date) }}
            </time>

            <h3 class="text-lg font-semibold text-default">
              {{ $rt(education.title) }}
            </h3>

            <p class="text-sm font-medium text-muted mb-2">
              {{ $rt(education.institution) }}
            </p>
          </li>
        </ol>
      </section>
    </UContainer>
    </motion.div>
</template>
