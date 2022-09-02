<template>
  <a class="mint-box" v-if="href != ''" :href="href" :target="target">
    <slot />
  </a>
  <div class="mint-box" v-else>
    <slot />
  </div>
</template>
<style lang="sass" scoped>
.mint-box
  --padding: 36px
  background-color: #F4EEE1
  border-radius: var(--padding)
  padding: var(--padding)
  color: #383838
  text-decoration: none
  display: block
  @media (max-width: 768px)
    --padding: 24px
  &+.mint-box
    margin-top: var(--padding)
  @media screen and (prefers-color-scheme: light)
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25)
</style>
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
})
</script>