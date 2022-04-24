<template>
  <Teleport to="body">
    <transition name="modal">
      <div class="modal-mask" v-if="modelValue">
        <div class="modal-wrapper">
          <div class="modal-container">

            <div class="modal-header">
              <slot name="header">
                default header
              </slot>
            </div>

            <div class="modal-body">
              <slot name="body">
                default body
              </slot>
            </div>

            <div class="modal-footer">
              <slot name="footer">
                default footer
                <button class="modal-default-button" @click="$emit('update:modelValue', false)">
                  OK
                </button>
              </slot>
            </div>

          </div>
        </div>
      </div>
    </transition>
  </Teleport>
</template>

<script  >
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

.modal-wrapper
  display: table-cell
  vertical-align: middle

.modal-container
  width: 500px
  margin: 0px auto
  padding: 20px 30px
  background-color: #fff
  border-radius: 2px
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33)
  transition: all 0.3s ease
  position: sticky
  top: 0

.modal-header h3
  margin-top: 0
  color: #42b983

.modal-body
  margin: 20px 0

.modal-default-button
  float: right

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.

.modal-enter-from, .modal-leave-to
  opacity: 0

.modal-enter-active .modal-container

  transform: scale(.9)
.modal-leave-active .modal-container
  transform: scale(1.1)
</style>