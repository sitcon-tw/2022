<template>
  <div>
    <a class="submission-btn" :href="href" target="_blank" @mouseenter="showConfetti">
      我 要 投 稿
    </a>
    <transition name="fade-out">
      <ConfettiExplosion v-if="isShow" :duration="duration + 1000" :force="0.75" />
    </transition>
  </div>
</template>

<script>
export default {
  props: ['href'],
  data() {
    return {
      isShow: false,
      duration: 3000
    }
  },
  methods: {
    showConfetti() {
      if (!this.isShow) {
        this.isShow = true;
        setTimeout(() => {
          this.isShow = false;
        }, this.duration);
      }
    }
  }
}
</script>
<style lang="sass" scoped>

.submission-btn
  display: block
  width: 100%
  text-align: center
  font-size: 24px
  color: #fff
  background-color: #32E0C4
  border: 1px solid #32E0C4
  text-decoration: none
  max-width: 200px
  margin: 0 auto
  font-weight: 700
  &:hover
    background-color: transparent
</style>