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
    'motion-v/nuxt',
  ],

  i18n: {
    langDir: 'locales',
    lazy: true,
    defaultLocale: 'en',
    strategy: 'prefix',
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
      {
        name: 'Geist',
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

  // Optimized route rules for better first load performance
  // routeRules: {
  //   // Homepage - SSR for faster first load (no hydration delay)
  //   '/': { ssr: true },
  //   '/en': { ssr: true },
  //   '/es': { ssr: true },

  //   // Portfolio page - SSR for dynamic content
  //   '/portfolio': { ssr: true },
  //   '/en/portfolio': { ssr: true },
  //   '/es/portfolio': { ssr: true },

  //   // Blog pages - prerendered for SEO but consider SSR if slow
  //   '/blog/**': { prerender: true },
  //   '/en/blog/**': { prerender: true },
  //   '/es/blog/**': { prerender: true },

  //   // Static assets - cache aggressively
  //   '/images/**': { headers: { 'Cache-Control': 'max-age=31536000' } },
  //   '/icons/**': { headers: { 'Cache-Control': 'max-age=31536000' } },

  //   // API routes (if any) - ensure they're server-side
  //   '/api/**': { cors: true },
  // },

  nitro: {
    preset: 'vercel',
    // Optimize for Vercel and faster loading
    compressPublicAssets: true,
    minify: true,
    // Reduce bundle size
    experimental: {
      wasm: false,
    },
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

  mdc: {
    components: {
      prose: true,
    },
    headings: {
      anchorLinks: {
        h1: false,
        h2: false,
        h3: false,
        h4: false,
        h5: false,
        h6: false,
      },
    },
  },

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
