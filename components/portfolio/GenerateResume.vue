<script lang="ts" setup>
import { useI18n } from '#imports'

const { locale } = useI18n()

/**
 * Lazy-loads the helper *and* pdfmake only on the client.
 * The function returns a Promise so the UI can show a spinner
 * if you want to.
 */
async function handleGenerate () {
  // Guard for hydration edge-cases
  if (process.server) return

  // Dynamic import ✓ code-split ✓ client-only
  const { generateResume } = await import('~/helpers/resume.generate')
  await generateResume(locale.value)
}
</script>

<template>
  <UButton
    :label="$t('portfolio.resume.generate')"
    color="primary"
    variant="subtle"
    size="lg"
    @click="handleGenerate"
  />
</template>
