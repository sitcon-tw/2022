<template>
  <Teleport to="body">
    <transition name="arrowDialog">
      <div class="arrow-dialog-backdrop" v-if="modelValue" @click="$emit('update:modelValue', false)">
        <div class="arrow-dialog" :class="{ 'open': modelValue }" @click.stop="">
          <arrow-box>
            <div class="content">
              <a @click="$emit('update:modelValue', false)" class="close">
                <img :src="'/2022/imgs/dialog_close.svg'" />
              </a>
              <slot />
            </div>
          </arrow-box>
        </div>
      </div>
    </transition>
  </Teleport>
</template>
<script>

export default {
  name: 'arrow-dialog',
  props: {
    modelValue: {
      type: Boolean
    }
  },
  mounted() {
    document.querySelector('html').style['overflow-y'] = this.modelValue ? 'hidden' : 'auto'
    document.querySelector('body').style['overflow-y'] = this.modelValue ? 'hidden' : 'auto'
  },
  watch: {
    modelValue: function (val) {
      // added overflow to html
      document.querySelector('html').style['overflow-y'] = val ? 'hidden' : 'auto'
      document.querySelector('body').style['overflow-y'] = val ? 'hidden' : 'auto'
    }
  },
}
</script>
<style lang="sass">
.arrow-dialog-backdrop
  position: fixed
  top: 0
  left: 0
  width: 100%
  height: 100%
  background-color: rgba(0, 0, 0, 0.5)
  z-index: 100
  display: flex
  justify-content: center
  align-items: center
  cursor: pointer
  animation: fade-in 0.25s ease-in-out
.arrow-dialog
  max-width: calc(100vw - 40px)
  min-width: 500px
  margin: 20px auto
  border: none
  --background-color: #F4EEE1
  background-color: var(--background-color)
  border-radius: 24px
  outline: none
  overflow-y: hidden
  max-height: calc(100vh - 40px)
  padding: 40px
  position: relative
  transition: all 0.25s ease
  cursor: initial
  animation: dialog-show 0.25s ease-in-out
  .close
    position: absolute
    top: 0
    right: 0
    transition: all .25s ease
    &:hover
      opacity: 0.8
      cursor: pointer
      transform: scale(.95)
    img
      width: 48px
      height: 48px
      margin: 8px
  .arrow-box
    width: 100%
    .content
      overflow-y: scroll
      max-height: calc(100dvh - 250px)
      @media screen and (max-width: 768px)
        max-height: calc(100vh - 200px)
@keyframes fade-in
  from
    opacity: 0
  to
    opacity: 1
@keyframes dialog-show
  from
    opacity: 0
    transform: scale(.5)
  to
    opacity: 1
    transform: none
.arrowDialog-enter-active,
.arrowDialog-leave-active
  transition: all .25s ease-in-out
.arrowDialog-enter-from
  opacity: 0
  .arrow-dialog
    transform: scale(.5)
.arrowDialog-leave-to
  opacity: 0
  .arrow-dialog
    transform: scale(.5)
</style>