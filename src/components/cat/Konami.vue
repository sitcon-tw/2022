<template>
  <div class="konami-code-cat" v-if="show">
    <cat-corner v-for="cat of cats"
      :head-color="cat.headColor"
      :choker-color="cat.chokerColor"
      :hand-color="cat.handColor"
      :streak-color="cat.streakColor"
      :eye-color="cat.eyeColor"
      :style="`transform: scaleX(${cat.flip ? '-1' : '1'}) rotate(${cat.roate}deg);`" />
  </div>
</template>
<script>
import KonamiCode from 'konami-code-js'
import randomcolor from 'randomcolor'
export default {
  name: 'cat-cornor',
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
        let hueList = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink', 'monochrome']
        let hue = hueList[Math.floor(Math.random() * hueList.length)]
        let headColor = randomcolor({ hue: hue, luminosity: 'light' })
        let eyeColor = `rgba(0, 0, 0, .5)`
        let handColor = randomcolor({ hue: hue, luminosity: 'dark' })
        this.cats.push({
          headColor,
          chokerColor: `#82D357`,
          handColor: handColor,
          streakColor: eyeColor,
          eyeColor: eyeColor,
          roate: Math.random() * 30 - 15,
          flip: Math.random() > 0.5
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
  animation-name: show-cat
  animation-duration: 3s
  animation-direction: alternate
  animation-easing-function: ease
  animation-timeline: show-cat-timeline
@keyframes show-cat
    0%
        transform: translateY(70%)
    100%
        transform: translateY(50%)
@scroll-timeline show-cat-timeline
    source: selector(".konami-code-cat")

</style>