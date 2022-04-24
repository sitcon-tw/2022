<template>
  <div class="question-box" :class="{ active }" @click="active = !active">
    <div class="question-box__title">
      <slot name="title" />
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
  .question-box__title
    background: #222222
    border: 1px solid rgba(222, 222, 222, 0.2)
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25)
    padding: 20px 16px

    color: #32E0C4

    position: relative
    display: flex
    justify-content: space-between
    align-items: center
    cursor: pointer
    .arrow
      border-top: 2px solid #32E0C4
      border-left: 2px solid #32E0C4
      width: 24px
      height: 24px
      transform: translate(-16px, -25%) rotate(225deg)
      transition: all .2s ease
  .question-box__content
    padding: 0 48px
    background: rgba(0, 0, 0, 0.4)
    color: #32E0C4
    transform: scaleY(0)
    transform-origin: top
    height: 0
    transition: all .2s ease
    opacity: 0
  &.active
    .question-box__title .arrow
      transform: translate(-16px,25%) rotate(45deg)
    .question-box__content
      transform: scaleY(1)
      height: auto
      padding: 24px 48px
      display: block
      opacity: 1
</style>