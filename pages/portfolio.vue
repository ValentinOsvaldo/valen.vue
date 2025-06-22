<script lang="ts" setup>
import { generateResumeEn } from '~/helpers/resume.generate';

useSeoMeta({
  title: "Valen.Vue - Portfolio",
});

const { locale } = useI18n();

type Skill = "front" | "mobile" | "back" | "tools";

const skillsSelected = ref<Skill[]>(["back", "front", "mobile", "tools"]);

const skills = reactive<Record<Skill, string[]>>({
  front: ["Javascript", "Typescript", "Vue", "React", "Next.js", "Nuxt.js"],
  mobile: ["React Native", "Expo", "Flutter"],
  back: ["NestJs"],
  tools: ["Git", "REST APIs", "Tailwind CSS"],
});
</script>

<template>
  <UContainer as="main" class="space-y-8 max-w-4xl mb-16">
    <section>
      <UButton
        :label="$t('portfolio.resume.generate')"
        color="primary"
        @click="generateResumeEn(locale)"
      />
    </section>

    <section class="mt-8">
      <h2 class="mb-2 text-4xl font-bold">
        {{ $t("portfolio.summary.title") }}
      </h2>

      <hr class="h-px my-2 bg-accented border-0" />

      <p class="text-muted">
        {{ $t("portfolio.summary.about") }}
      </p>
    </section>

    <section>
      <h2 class="mb-2 text-4xl font-bold">
        {{ $t("portfolio.experience.title") }}
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
          <div
            class="absolute w-3 h-3 rounded-full mt-1.5 -start-1.5 border border-background bg-muted"
          ></div>

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
        {{ $t("portfolio.skills.title") }}
      </h2>

      <hr class="h-px my-2 bg-accented border-0" />

      <div class="flex flex-row flex-wrap gap-2 mb-4">
        <UButton
          v-for="item in ['back', 'front', 'mobile', 'tools'] as Array<Skill>"
          :key="item"
          :label="item"
          :color="skillsSelected.includes(item) ? 'primary' : 'neutral'"
          variant="soft"
          size="lg"
          @click="
            skillsSelected.includes(item)
              ? skillsSelected.splice(skillsSelected.indexOf(item), 1)
              : skillsSelected.push(item)
          "
          class="capitalize"
        />
      </div>
      <div class="flex flex-row flex-wrap gap-2">
        <template
          v-for="collection in Object.entries(skills).filter((collection) =>
            skillsSelected.includes(collection[0] as Skill),
          )"
        >
          <template v-for="skill in collection[1]">
            <UBadge :label="skill" color="primary" variant="subtle" size="lg" />
          </template>
        </template>
      </div>
    </section>

    <section>
      <h2 class="mb-2 text-4xl font-bold">
        {{ $t("portfolio.personalProjects.title") }}
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
        {{ $t("portfolio.education.title") }}
      </h2>

      <hr class="h-px my-2 bg-accented border-0" />

      <ol class="relative border-s border-border border-accented">
        <li
          v-for="(education, index) in $tm(
            'portfolio.education.items',
          ) as any[]"
          :key="index"
          class="mb-10 ms-4"
        >
          <div
            class="absolute w-3 h-3 rounded-full mt-1.5 -start-1.5 border border-background bg-muted"
          ></div>

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
</template>
