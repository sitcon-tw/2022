import VueGtag from 'vue-gtag'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VueGtag, {
    config: {
      id: "UA-34467841-1",
    },
    includes: [
      { id: 'GTM-NPVBCDZ' }
    ]
  })
})