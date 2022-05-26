<template>
  <a class="card" :href="href" :target="target">
    <img class="image" :src="src" />
    <div class="text" :class="{ 'text-center': textCenter }">
      <slot />
    </div>
  </a>
</template> 
<script setup>
const props = defineProps({
  href: String,
  target: {
    type: String,
    default: '_self'
  },
  src: String,
  textCenter: {
    type: Boolean,
    default: false
  }
})
</script>
<style lang="sass" scoped>

.card
  text-decoration: none
  display: block
  .image
    width: 100%
    height: auto
    display: block
    margin: 0 auto
    max-width: 100%
    border-radius: 10px
    transition: all 0.3s ease
  .text
    color: #32E0C4
    font-weight: 900
    font-size: 16px
    margin-top: .5em
    line-height: 1.5em
    transition: all 0.3s ease
    @media screen and (max-width: 768px)
      font-size: 14px
    &.text-center
      text-align: center

  &:hover
    .image
      transform: scale(1.01) translateY(-2.5px)
      box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.85)
    .text
      color: #fff
</style>