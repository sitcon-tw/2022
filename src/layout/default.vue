<template>
  <nav-bar />
  <router-view v-if="!showLoading" />
  <div class="loading" v-if="showLoading">loading...</div>
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
  data() {
    return {
      showLoading: true,
    }
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