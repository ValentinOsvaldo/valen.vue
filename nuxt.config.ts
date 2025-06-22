// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  modules: [
    "@nuxt/eslint",
    "@nuxt/fonts",
    "@nuxt/icon",
    "@nuxt/image",
    "@nuxt/ui",
    "@nuxt/test-utils",
    "@nuxtjs/i18n",
  ],

  i18n: {
    strategy: "no_prefix",
    baseUrl: "https://valen.vue",
    locales: [
      { code: "en", name: "English", file: "en.json" },
      { code: "es", name: "Spanish", file: "es.json" },
    ],
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "i18n_redirected",
      redirectOn: "root",
    },
  },

  fonts: {
    families: [
      {
        name: "Poppins",
        provider: "google",
      },
      {
        name: "Raleway",
        provider: "google",
      },
    ],
  },

  devtools: { enabled: true },

  imports: {
    autoImport: true,
  },

  css: ["~/assets/css/main.css"],
  ssr: true,
});
