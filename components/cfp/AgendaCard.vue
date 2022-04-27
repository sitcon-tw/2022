<template>
  <div class="card">
    <a :href="href" target="_blank">
      <img class="image" :src="src" />
    </a>
    <div class="text">
      <slot />
    </div>
  </div>
</template> 
<script setup>
const props = defineProps({
  href: String,
  src: String,
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
    &:hover
      transform: scale(1.01) translateY(-2.5px)
      box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.85)
  .text
    color: #32E0C4
    font-weight: 900
    font-size: 16px
    margin-top: .5em
    line-height: 1.5em
    transition: all 0.3s ease
    :deep(a)
      color: #32E0C4
      &:hover
        color: #fff
    @media screen and (max-width: 768px)
      font-size: 14px
</style>