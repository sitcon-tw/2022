<template>
  <a :href="href" target="_blank">
    <figure>
      <img :src="src">
      <figcaption>
        <slot />
      </figcaption>
    </figure>
  </a>
</template>

<script>
export default {
  props: ['src', 'href']
}
</script>
<style lang="sass" scoped>

a
  text-decoration: none

  figure
    margin: 0 auto
    display: inline-block
    text-align: center
    img
      vertical-align: top
      width: 100%
      aspect-ratio: 16/9
      object-fit: cover
      object-position: top center
      border-radius: 16px
      transition: all 0.3s ease
      @media screen and (max-width: 768px)
        border-radius: 8px
    figcaption
      width: 100%
      color: #53A99B
      transition: all 0.3s ease
      @media screen and (max-width: 768px)
        font-weight: 300
  &:hover
    img
      transform: scale(1.01) translateY(-2.5px)
      box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.85)
    figcaption
      color: #fff
</style>