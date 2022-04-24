<template>
  <div class="main-title">
    <div class="sitcon-x">SITCON<span class="x" @click="xModal = true">X</span></div>
    <div class="cat">
      Cat in a Maze
    </div>
    <modal v-model="xModal">
      <template v-slot:header>
        <h3>custom header</h3>
      </template>
    </modal>
  </div>
</template>
<script>
export default {
  data() {
    return {
      xModal: false
    }
  }
}
</script>
<style lang="sass" scoped>

.main-title
  display: flex
  align-items: center
  color: #32E0C4
  font-size: 48px
  letter-spacing: 0.05em
  font-weight: 900
  justify-content: space-around
  @media screen and (max-width: 1280px)
    font-size: 36px
  @media screen and (max-width: 768px)
    font-size: 20px
    font-weight: 700

  .sitcon-x
    position: relative
    &::after
      content: ""
      position: absolute
      right: 0
      bottom: 0
      background-image: url('/imgs/cfp/mouse-pointer.svg')
      width: var(--size)
      height: var(--size)
      transform: translateX( var(--size) ) translateY(calc( var(--size) * -0.5 ))
      background-repeat: no-repeat
      background-size: contain

      --size: 16px
      @media screen and (max-width: 768px)
        --size: 8px
    .x
      color: #fff
      position: relative
      margin-left: 0.05em
      transition: all .2s ease
      cursor: pointer
      display: inline-block
      &:hover
        transform: scale(.9)
      &:active
        transform: scale(.8)
</style>