
<script>
import { RouterView } from 'vue-router'
import { Head } from '@vueuse/head'
import jsonld from './assets/jsonld';
export default {
  data() {
    return {
      showLoading: true,
      jsonld
    }
  },
  components: {
    RouterView,
    Head
  },
  mounted() {
    this.$router.beforeEach((to, from, next) => {
      this.showLoading = true
      next()
    })
    this.$router.afterEach(() => {
      this.showLoading = false
    })
    this.showLoading = false
  }
}
</script>
<template>

  <Head>
    <component :is="'script'" type="application/ld+json">
      {{ JSON.stringify(jsonld) }}
    </component>
  </Head>
  <router-view v-show="!showLoading" />
</template>
<style lang="sass">
@import './assets/sass/main.sass'
</style>
