import { defineNuxtConfig } from 'nuxt'
import path from 'path'
// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  app: {
    ssr: false,
    baseURL: '/2022/',
    head: {
      titleTemplate: '%s  | SITCON 2022 學生計算機年會 | Students\' Information Technology Conference',
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: true },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Barlow:wght@500&family=Noto+Sans+TC:wght@100;300;400;500;700;900&display=swap', crossorigin: true },
        // preload imgs
        { rel: 'preload', href: 'https://sitcon.org/2022/imgs/cfp/back-hover.svg', as: 'image' },
        { rel: 'preload', href: 'https://sitcon.org/2022/imgs/cfp/cfp_maze_pattern.png', as: 'image' },
        { rel: 'preload', href: 'https://sitcon.org/2022/imgs/cfp/CFP_desktop_mainPage.jpg', as: 'image' },
      ],
      base: {
        href: '/2022/'
      }
    }
  },
  modules: ['nuxt-jsonld'],
  css: [
    'normalize.css/normalize.css',
    '~/assets/sass/main.sass'
  ],
  vite: {
    resolve: {
      alias: {
        "/2022": path.resolve(__dirname, "./public"),
      },
    },
  },
  nitro: {
    prerender: {
      routes: [
        '/2022/',
        '/2022/cfp/',
        '/2022/cfp/standard',
        '/2022/cfp/undefined',
      ]
    }
  },
  plugins: [
    '~/plugins/vue-gtag.client.js',
  ]
})
