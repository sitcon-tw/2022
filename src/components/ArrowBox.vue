<template>
  <div class="arrow-box">
    <slot />
    <div class="arrow_top" />
    <div class="arrow_bottom" />
  </div>
</template>
<style lang="sass" scoped>
.arrow-box
  --border-radius: 48px
  --border-width: 10px
  --border-color: #A89B85
  --arrow-dimmer-width: 20%
  --arrow-width: 40px
  --arrow-position: 20%
  padding: 36px
  width: calc(100vw - 10px)
  margin: 5px auto
  border-radius: var(--border-radius)
  border: var(--border-width) solid var(--border-color)
  position: relative
  width: min(1280px,95vw)
  &+.arrow-box
    margin-top: 48px
  .arrow_top
    position: absolute
    bottom: calc((var(--border-width) * -1.3361) + 14.459px)
    left: var(--arrow-position)
    width: var(--arrow-width)
    height: var(--border-width)
    background-color: var(--border-color)
    transform: rotate(45deg)
    border-radius: var(--border-radius)
    z-index: 1
  .arrow_bottom
    position: absolute
    bottom: calc((var(--border-width) * -0.877) - 12.656px)
    left: var(--arrow-position)
    width: var(--arrow-width)
    height: var(--border-width)
    background-color: var(--border-color)
    transform: rotate(-45deg)
    border-radius: var(--border-radius)
    z-index: 1
  @media (max-width: 768px)
    padding: 24px
    --border-width: 4px
    --arrow-width: 20px
    --border-radius: 24px
    .arrow_top
      bottom: 1px
    .arrow_bottom
      bottom: -11px
  &::after
    content: ""
    position: absolute
    left: calc(var(--arrow-position) + var(--arrow-width) * 0.75)
    bottom: 0
    width: var(--arrow-dimmer-width)
    height: var(--border-width)
    background: var(--background-color)
    transform: translateY(var(--border-width))
  &::before
    content: ""
    position: absolute
    bottom: calc(var(--border-width) * -1)
    left: calc(var(--arrow-position) + var(--arrow-dimmer-width) + var(--arrow-width) * 0.75 - var(--border-width) * 0.5)
    background-color: var(--border-color)
    height: var(--border-width)
    width: var(--border-width)
    border-radius: var(--border-radius)
    z-index: 1
</style>