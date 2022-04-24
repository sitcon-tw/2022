<template>
  <div class="question-box" :class="{ active }" @click="active = !active">
    <div class="question-box__title">
      <slot name="title"></slot>
      <div class="arrow" />
    </div>
    <div class="question-box__content">
      <slot />
    </div>
  </div>
</template>

<script setup>
const active = ref(false)

</script>

<style lang="sass" scoped>

.question-box
  font-weight: 500
  font-size: 16px
  line-height: 1.5
  margin: 20px 0

  @media screen and (max-width: 768px)
    font-size: 14px
  .question-box__title
    --padding-y: 16px
    --arrow-size: 24px
    background: #222222
    border: 1px solid rgba(222, 222, 222, 0.2)
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25)
    padding: 20px var(--padding-y)
    padding-right: calc(var(--padding-y) * 2 + var(--arrow-size) * 1.414)
    color: #32E0C4

    position: relative
    display: flex
    justify-content: space-between
    align-items: center
    cursor: pointer
    @media screen and (max-width: 768px)
      --padding-y: 12px
      --arrow-size: 12px
      padding: 10px var(--padding-y)
      padding-right: calc(var(--padding-y) * 3 + var(--arrow-size) * 1.414)
    .arrow
      position: absolute
      right: 0
      border-top: 2px solid #32E0C4
      border-left: 2px solid #32E0C4
      width: var(--arrow-size)
      height: var(--arrow-size)
      transform: translate(calc(var(--padding-y) * -2), -25%) rotate(225deg)
      transition: all .2s ease
      flex-shrink: 0
      border-radius: calc(var(--arrow-size) / 6) 0 0 0
  .question-box__content
    --padding-x: 24px
    --padding-y: 48px
    padding: 0 var(--padding-y)
    background: rgba(0, 0, 0, 0.4)
    color: #32E0C4
    transform: scaleY(0)
    transform-origin: top
    height: 0
    transition: all .2s ease
    opacity: 0
    @media screen and (max-width: 768px)
      --padding-x: 8px
      --padding-y: 12px
  &.active
    .question-box__title .arrow
      transform: translate(calc(var(--padding-y) * -2), 25%) rotate(45deg)
    .question-box__content
      transform: scaleY(1)
      height: auto
      padding: var(--padding-x) var(--padding-y)
      display: block
      opacity: 1
</style>