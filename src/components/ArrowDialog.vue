<template>
  <dialog ref="signUpDialog" class="signUpDialog">
    <arrow-box>
      <a @click="close" class="close">
        <img :src="'/2022/imgs/dialog_close.svg'" />
      </a>
      <slot />
    </arrow-box>
  </dialog>
</template>
<script>
import { useDialogStore } from '../store/dialog';

export default {
  name: 'sign-up-dialog',
  props: {
    modelValue: {
      type: Boolean
    }
  },
  data() {
    return {
      showSignUpDialog: useDialogStore()
    }
  },
  watch: {
    modelValue(val) {
      if (val) {
        this.$refs.signUpDialog.showModal();
      }
    }
  },
  methods: {
    close() {
      this.$refs.signUpDialog.classList.add('hide')
      this.$refs.signUpDialog.addEventListener('animationend', () => {
        if (this.$refs.signUpDialog.classList.contains('hide')) {
          this.$refs.signUpDialog.classList.remove('hide')
          this.$refs.signUpDialog.close()
          this.$emit('update:modelValue', false)
        }
      })
    }
  }
}
</script>
<style lang="sass" scoped>
.signUpDialog
  width: calc(100vw - 40px)
  border: none
  --background-color: #F4EEE1
  background-color: var(--background-color)
  border-radius: 24px
  outline: none
  &[open]
    animation: show .25s ease
    &::backdrop
      animation: show-backdrop .25s ease
  &.hide
    animation: hide .25s ease
    &::backdrop
      animation: hide-backdrop .25s ease
  &::backdrop
    background-color: rgba(0, 0, 0, 0.75)
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

@keyframes show
    from
      transform: scale(0)
    to
      transform: scale(1)
@keyframes show-backdrop
    from
      background-color: rgba(0, 0, 0, 0)
    to
      background-color: rgba(0, 0, 0, 0.75)
@keyframes hide
    to
      transform: scale(0)
    from
      transform: scale(1)
@keyframes hide-backdrop
    to
      background-color: rgba(0, 0, 0, 0)
    from
      background-color: rgba(0, 0, 0, 0.75)
</style>