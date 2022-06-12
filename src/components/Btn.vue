<template>
  <a class="btn" v-if="href !== ''" :href="href" :target="target" :class="{ large }">
    <slot />
  </a>
  <router-link class="btn" v-if="to !== ''" :to="to" :class="{ large }">
    <slot />
  </router-link>
</template>
<script setup>
const props = defineProps({
  href: {
    type: String,
    default: ''
  },
  target: {
    type: String,
    default: '_blank'
  },
  to: {
    type: String,
    default: ''
  },
  large: {
    type: Boolean,
    default: false
  }
})
</script>
<style lang="sass" scoped>
.btn
  background: #82D357
  color: #383838
  border-radius: 16px
  padding: 4px 16px
  text-decoration: none
  text-align: center
  box-shadow: inset 0 0 0 2px #82D357
  font-weight: 700
  font-size: 20px
  transition: all 0.2s ease
  &.large
    font-size: 28px
  &:hover
    background: transparent
    color: var(--text-color)
</style>
