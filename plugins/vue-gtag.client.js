import VueGtag from 'vue-gtag'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VueGtag, {
    config: {
      id: "G-GVRT4CHSQJ",
    },
    includes: [
      { id: 'UA-34467841-1' },
      { id: 'GTM-NPVBCDZ' }
    ]
  }, nuxtApp.vueApp.router)
})