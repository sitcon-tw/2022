import VueAnalytics from 'vue3-analytics'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VueAnalytics, {
    id: 'UA-34467841-1'
  })
})