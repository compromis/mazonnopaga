// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      link: [
        {
          rel: 'icon',
          type: 'image/x-icon',
          href: 'https://compromis.net/sub/icons/favicon.ico',
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '32x32',
          href: 'https://compromis.net/sub/icons/favicon32.png',
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '192x192',
          href: 'https://compromis.net/sub/icons/favicon192.png',
        },
        {
          rel: 'stylesheet',
          href: 'https://compromis.net/sub/fonts/manrope.css?variable',
        },
      ]
    }
  },

  css: [
    '~/assets/scss/main.scss'
  ],

  modules: [
    '@vueuse/motion/nuxt',
    '@vueuse/nuxt',
    'nuxt-cloudflare-analytics',
    '@nuxt/icon',
  ],

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @import '@compromis/blobby/scss/variables';
            @import 'bootstrap/scss/functions';
            @import 'bootstrap/scss/variables';
            @import 'bootstrap/scss/mixins';
          `
        }
      }
    }
  },

  cloudflareAnalytics: {
    token: '640825047f3f4693a20c8a7a3ddb8aa2'
  }
})