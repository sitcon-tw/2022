import VueGtag from 'vue-gtag-next'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VueGtag, {
    property: [
      { id: 'UA-34467841-1' },
      { id: 'GTM-NPVBCDZ' }
    ]
  })
})