// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  modules: [
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/ui',
    '@nuxtjs/i18n',
    '@nuxt/test-utils',
    '@nuxt/content',
  ],

  i18n: {
    langDir: 'locales',
    lazy: true,
    strategy: 'no_prefix',
    locales: [
      { code: 'en', name: 'English', file: 'en.json' },
      { code: 'es', name: 'Spanish', file: 'es.json' },
    ],
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root',
    },
    bundle: {
      optimizeTranslationDirective: false,
    },
  },

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
  ssr: true,

  app: {
    head: {
      title: 'Valen.Vue - Developer',
    },
    viewTransition: 'always',
    pageTransition: {
      name: 'slide',
      mode: 'out-in',
    },
  },
  future: {
    compatibilityVersion: 4,
  },
  routeRules: {
    '/': { prerender: true },
    '/portfolio': { ssr: false },
    '/blog/**': { prerender: true },
  },
  nitro: {
    preset: 'vercel',
  },

  content: {
    database: {
      type: 'postgres',
      url: process.env.POSTGRES_URL!,
    },
    experimental: {
      sqliteConnector: 'native',
    },
    preview: {
      api: 'https://api.nuxt.studio',
      dev: true,
      gitInfo: {
        name: 'valen.vue',
        owner: 'ValentinOsvaldo',
        url: 'https://github.com/ValentinOsvaldo/valen.vue.git',
      },
    },
    renderer: {
      anchorLinks: false,
    },
  },

  // mdc: {
  //   components: {
  //     prose: true,
  //   },
  //   headings: {
  //     anchorLinks: {
  //       h1: false,
  //       h2: false,
  //       h3: false,
  //       h4: false,
  //       h5: false,
  //       h6: false,
  //     },
  //   },
  // },

  experimental: {
    viewTransition: true,
  },

  vite: {
    server: {
      watch: {
        usePolling: true,
      },
    },
  },
});
