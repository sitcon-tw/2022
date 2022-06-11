<template>
  <nav-bar />
  <div style="height: 160px" />
  <div class="loading-container">
    <div class="loading"></div>
  </div>
  <router-view v-if="!showLoading" />
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
<style lang="sass" scoped>
.loading-container
  display: flex
  align-items: center
  justify-content: center
  margin: 48px 0
  .loading
    width: 50px
    height: 50px
    border-radius: 50%
    border: 8px solid #A89B85
    border-top: 8px solid transparent
    animation: loading 1s linear infinite
@keyframes loading
  0%
    transform: rotate(0deg)
  100%
    transform: rotate(360deg)
</style>