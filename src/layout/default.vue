<template>
  <nav-bar />
  <router-view />
  <div class="container">

    <footer-item :hide-sponsor="hideSponsor" />
  </div>
</template>
<script>
export default {
  computed: {
    hideSponsor() {
      return this.$route.path.indexOf('/sponsor') === 0
    }
  },
}
</script>