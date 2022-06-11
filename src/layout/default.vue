<template>
  <nav-bar />
  <div style="height: 160px" />
  <div class="loading-container" v-if="showLoading">
    <div class="loading-meow">🐈 讀取中</div>
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
  height: calc(100vh - 160px)
  height: calc(100svh - 160px)
  display: flex
  align-items: center
  justify-content: center