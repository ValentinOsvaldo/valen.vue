<script lang="ts" setup>
const route = useRoute();
const { locale, localeProperties, t } = useI18n();

const { data: home } = await useAsyncData(() => queryCollection('content').path(`/${locale.value}/${route.params.slug}`).first())

useSeoMeta({
  title: home.value?.title,
  description: home.value?.description
})
</script>

<template>
   <ContentRenderer v-if="home" :value="home" />
   <div v-else>Home not found</div>
</template>
