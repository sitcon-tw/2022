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
  --background-opacity: 0.5
  background: rgba(0, 0, 0, var(--background-opacity))
  border: 1px solid rgba(222, 222, 222, 0.2)
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.85)
  backdrop-filter: blur(15px)

  max-width: 1152px
  width: calc(100% - 64px)
  padding: 40px 64px

  margin: 36px auto
  border-radius: 10px
  @supports not (backdrop-filter: blur(15px))
    --background-opacity: 0.85
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
    p,ul
      line-height: 2em
      font-size: 16px
      color: #32E0C4
      @media screen and (max-width: 768px)
        font-size: 13px
      a
        font-weight: 700
        color: #fff
      strong
        color: #EEEEEE
</style>
