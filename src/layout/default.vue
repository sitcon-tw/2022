<template>
  <nav-bar v-if="!appMode" />
  <div class="nav-spacer" v-if="!appMode" />
  <transition name="fade" mode="in-out">
    <div class="loading" v-if="showLoading" />
  </transition>
  <router-view />
  <cat-konami />
  <sign-up-dialog />
  <things-must-do-dialog />
  <div class="container">
    <footer-item :hide-sponsor="hideSponsor" :is-index="isIndex" />
  </div>
</template>
<script>
export default {
  computed: {
    hideSponsor() {
      return this.$route.path.indexOf("/sponsor") === 0;
    },
    isIndex() {
      return this.$route.path === "/";
    }
  },
  data() {
    return {
      showLoading: true,
      appMode: false
    };
  },
  mounted() {
    this.$router.beforeEach((to, from, next) => {
      this.showLoading = true;
      next();
    });
    this.$router.afterEach(() => {
      this.showLoading = false;
    });
    this.showLoading = false;
    // check query string for mode=app
    const query = this.$route.query;
    if (query.mode === "app") {
      this.appMode = true;
    }
  }
}
</script>
<style lang="sass" scoped>
.app-mode
  .nav-bar, .nav-spacer
    display: none
.nav-spacer
  height: 160px
  @media screen and (max-width: 768px)
    height: 100px
.loading
  width: 25px
  height: 25px
  border-radius: 50%
  border: 4px solid #A89B85
  border-top: 4px solid transparent
  animation: loading 1s linear infinite
  position: fixed
  top: 8px
  right: 8px
  @media (max-width: 768px)
    top: 2px
    right: 2px
    width: 20px
    height: 20px
    border: 2.5px solid #A89B85
    border-top: 2.5px solid transparent

@keyframes loading
  0%
    transform: rotate(0deg)
  100%
    transform: rotate(360deg)
</style>
