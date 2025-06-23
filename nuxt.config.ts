// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  modules: [
    "@nuxt/eslint",
    "@nuxt/fonts",
    "@nuxt/icon",
    "@nuxt/image",
    "@nuxt/ui",
    "@nuxtjs/i18n",
    "@nuxt/test-utils",
  ],

  i18n: {
    langDir: "locales",
    lazy: true,
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

  app: {
    head: {
      title: "Valen.Vue - Developer",
    },
    viewTransition: "always",
  },
  // nitro: {
  //   prerender: {
  //     routes: ["/", "/portfolio"],
  //   },
  // },
  future: {
    compatibilityVersion: 4,
  },
  routeRules: {
    "/": { prerender: true },
    "/portfolio": { prerender: true },
  },
});
