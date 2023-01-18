<template>
  <div class="konami-code-cat" v-if="show">
    <cat-corner v-for="cat of cats"
      :head-color="cat.headColor"
      :choker-color="cat.chokerColor"
      :hand-color="cat.handColor"
      :streak-color="cat.streakColor"
      :eye-color="cat.eyeColor"
      :with-pancake="cat.withPancake"
      :style="`transform: scaleX(${cat.flip ? '-1' : '1'}) rotate(${cat.roate}deg);`" />
  </div>
</template>
<script>
import KonamiCode from 'konami-code-js'
export default {
  name: 'cat-corner',
  data() {
    return {
      show: false,
      cats: [],
      konamiCode: null
    }
  },
  mounted() {
    this.registerKonamiCode()
  },
  unmounted() {
    this.unregisterKonamiCode()
  },
  methods: {
    registerKonamiCode() {
      let vue = this
      this.konamiCode = new KonamiCode(() => {
        vue.showCats()
      });
    },
    unregisterKonamiCode() {
      this.konamiCode.disable();
    },
    showCats() {
      this.cats = []
      for (let i = 0; i < 11; i++) {
        let randomMinMax = (min, max) => {
          return Math.floor(Math.random() * (max - min + 1)) + min
        }
        let hue = randomMinMax(30, 150)
        let chroma = randomMinMax(0, 75)
        let headColor = `hsl(${hue}, ${chroma}%, ${randomMinMax(50, 80)}%)`
        let handColor = `hsl(${hue}, ${chroma}%, ${randomMinMax(30, 50)}%)`
        this.cats.push({
          headColor,
          chokerColor: `#82D357`,
          handColor: handColor,
          streakColor: `rgba(0, 0, 0, .25)`,
          eyeColor: `rgba(0, 0, 0, .75)`,
          roate: Math.random() * 30 - 15,
          flip: Math.random() > 0.5,
          withPancake: Math.random() > 0.95
        })
      }
      this.show = true
    }
  }

}
</script>
<style lang="sass" scoped>
.konami-code-cat
  position: fixed
  bottom: 0
  right: 0
  width: 100vw
  left: 0
  z-index: 10
  display: flex
  transform: translateY(50%)
  pointer-events: none
  animation-name: show-cat
  animation-duration: 3s
  animation-direction: alternate
  animation-easing-function: ease
  animation-timeline: scroll()
@keyframes show-cat
    0%
        transform: translateY(70%)
    100%
        transform: translateY(50%)
</style>
