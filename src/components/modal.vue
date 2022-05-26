<template>
  <Teleport to="body">
    <transition name="modal">
      <div class="modal-mask" v-if="modelValue" @click="$emit('update:modelValue', false)">
        <div class="modal-wrapper">
          <div class="modal-container" @click.stop="">
            <div class="close" @click="$emit('update:modelValue', false)">
              <img :src="'/2022/imgs/cfp/close.svg'" />
            </div>
            <slot />
          </div>
        </div>
      </div>
    </transition>
  </Teleport>
</template>

<script >
export default {
  props: {
    modelValue: {
      type: Boolean
    }
  }
}
</script>

<style lang="sass" scoped>

.modal-mask
  position: fixed
  z-index: 9998
  top: 0
  left: 0
  width: 100%
  height: 100%
  overflow: hidden
  background-color: rgba(0, 0, 0, 0.75)
  display: table
  transition: opacity 0.3s ease
  font-size: 14px
  color: #000
  cursor: pointer
.modal-wrapper
  display: table-cell
  vertical-align: middle
.modal-container
  width: calc(100% - 60px)
  cursor: default
  max-width: 700px
  margin: 0px auto
  padding: 16px 24px
  background-color: #fff
  border-radius: 48px
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33)
  transition: all 0.3s ease
  position: sticky
  top: 0
  position: relative

  .close
    position: absolute
    top: 24px
    right: 24px
    cursor: pointer
    --size: 36px
    transition: all .2s ease
    @media screen and (max-width: 768px)
      --size: 24px
    img
      width: var(--size)
      height: var(--size)
    &:hover
      cursor: pointer
      opacity: .8
      transform: scale(.9)
    &:active
      opacity: .6
      transform: scale(.8)

// animation 
.modal-enter-from, .modal-leave-to
  opacity: 0

.modal-enter-active .modal-container

  transform: scale(.9)
.modal-leave-active .modal-container
  transform: scale(1.1)
</style>