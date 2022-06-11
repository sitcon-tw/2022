<template>
  <nav-bar />
  <div style="height: 160px" />
  <transition name="fade" mode="in-out">
    <div class="loading-container" v-if="showLoading">
      <div class="loading"></div>
    </div>
  </transition>
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
  position: fixed
  z-index: 100
  background: rgba(0, 0, 0, .2)
  top: 0
  bottom: 0
  margin: auto
  width: 100vw
  height: 100vh
  height: 100svh
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