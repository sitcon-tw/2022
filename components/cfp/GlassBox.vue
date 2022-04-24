<template>
  <div class="cfp-glass-box" :class="{ 'first-child': firstChild, 'last-child': lastChild }">
    <div class="cfp-glass-box__content">
      <slot />
    </div>
  </div>
</template>
<script>
export default {
  props: {
    firstChild: {
      type: Boolean,
      default: false
    },
    lastChild: {
      type: Boolean,
      default: false
    }
  },
}
</script>
<style lang="sass">

.cfp-glass-box
  background: rgba(0, 0, 0, 0.5)
  border: 1px solid rgba(222, 222, 222, 0.2)
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.85)
  backdrop-filter: blur(30px)

  max-width: 960px
  width: calc(100% - 64px)
  padding: 40px 64px

  margin: 36px auto
  border-radius: 10px
  &.first-child
    margin-top: 0
    border-radius: 0px 0px 10px 10px
    border-top: none
  &.last-child
    margin-bottom: 0
    border-radius: 10px 10px 0px 0px
    border-bottom: none
  @media screen and (max-width: 1024px)
    padding: 40px 20px
    width: calc(100% - 40px)
    margin: 18px auto
  .cfp-glass-box__content
    p
      line-height: 2em
      font-size: 16px
      color: #32E0C4
</style>