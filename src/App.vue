
<script>
import { Head } from '@vueuse/head'
import jsonld from './assets/jsonld';
export default {
  data() {
    return {
      jsonld
    }
  },
  components: {
    Head
  },
}
</script>
<template>

  <Head>
    <component :is="'script'" type="application/ld+json">
      {{ JSON.stringify(jsonld) }}
    </component>
  </Head>
  <router-view />
</template>
<style lang="sass">
@import './assets/sass/main.sass'
</style>
