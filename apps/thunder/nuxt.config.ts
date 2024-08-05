import thunderConfig from './thunder.config';

export default defineNuxtConfig({
  debug: process.env.NODE_ENV === 'development',
  extends: ['@thunder/magento', '@thunder/composables'],

  modules: [
    '@nuxtjs/i18n',
    '@nuxtjs/apollo',
    '@nuxt/icon',
    '@nuxt/ui',
    '@nuxt/image',
    '@nuxtjs/google-fonts',
    '@nuxtjs/robots',
    'nuxt-swiper'
  ],

  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
    },
    pageTransition: { name: 'page', mode: 'out-in' }
  },

  apollo: {
    clients: {
      default: {
        httpEndpoint: process.env.API_BASE_URL ?? '',
        httpLinkOptions: {
          credentials: 'include',
          useGETForQueries: true
        },
        defaultOptions: {
          query: {
            fetchPolicy:
              process.env.NODE_ENV === 'development'
                ? 'no-cache'
                : 'cache-first'
          }
        },
        tokenName: thunderConfig.authToken
      }
    }
  },

  i18n: {
    strategy: 'prefix',
    locales: [
      {
        code: 'en',
        iso: 'en-EN',
        file: 'en-US.json'
      }
    ],
    langDir: './lang',
    defaultLocale: 'en'
  },

  typescript: {
    includeWorkspace: true
  },

  image: {
    domains: ['api.thunderjs.dev', 'vercel.app']
  },

  routeRules: {
    '/': { isr: false },
    '/content/**': { isr: false },
    '/l/**': { isr: false },
    '/p/**': { isr: false },
    '/cart/**': { ssr: false },
    '/checkout/**': { ssr: false },
    '/account/**': { ssr: false }
  },

  runtimeConfig: {
    nitro: { envPrefix: 'VERCEL_' },
    region: process.env.VERCEL_REGION,
    public: {
      ...thunderConfig
    }
  },

  googleFonts: {
    families: {
      'Red Hat Display': [400, 700]
    }
  },

  swiper: {
    modules: ['navigation', 'pagination']
  },

  compatibilityDate: '2024-08-04'
});