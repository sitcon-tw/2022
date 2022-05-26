<script setup>
import { RouterView } from 'vue-router'
import { Head } from '@vueuse/head'
import jsonld from './assets/jsonld';
</script>

<template>

  <Head>
    <component :is="'script'" type="application/ld+json">
      {{ JSON.stringify(jsonld) }}
    </component>
  </Head>
  <RouterView />
</template>
<style lang="sass">
@import './assets/sass/main.sass'
</style>