<template>
  <div class="cfp-title">
    <slot />
  </div>
</template>
<style lang="sass" scoped>

.cfp-title
  display: inline-block
  word-break: keep-all
  font-family: 'Noto Sans TC', sans-serif
  font-size: 48px
  font-weight: 900
  line-height: 1.5em
  letter-spacing: 0em
  text-align: left
  background-color: #fff
  padding: .16em .32em
  color: #000
  margin-top: .25em
  @media screen and (max-width: 1280px)
    font-size: 36px
  @media screen and (max-width: 768px)
    font-size: 30px
    display: block
    text-align: center
</style>
