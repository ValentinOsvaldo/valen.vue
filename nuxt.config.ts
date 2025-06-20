// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  modules: [
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/ui',
    '@nuxt/test-utils',
  ],

  fonts: {
    families: [
      {
        name: 'Poppins',
        provider: 'google',
      },
      {
        name: 'Raleway',
        provider: 'google',
      },
    ],
  },

  devtools: { enabled: true },

  imports: {
    autoImport: true,
  },

  css: ['~/assets/css/main.css'],
});
