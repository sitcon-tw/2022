import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  app: {
    baseURL: './',
    head: {
      titleTemplate: '%s  | SITCON 2022 學生計算機年會 | Students\' Information Technology Conference',
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: true },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Barlow:wght@500&family=Noto+Sans+TC:wght@100;300;400;500;700;900&display=swap', crossorigin: true }
      ],
    }
  },
  modules: ['nuxt-jsonld'],
  css: [
    'normalize.css/normalize.css',
    '~/assets/sass/main.sass'
  ],
  plugins: [
    '~/plugins/vue-gtag.client.js',
    '~/plugins/vue-analytics.client.js',
  ]
})
