<template>
  <a :href="href" v-if="href" class="round-btn">
    <slot />
  </a>
  <router-link :to="to" v-else-if="to" class="round-btn">
    <slot />
  </router-link>
</template>

<script>
export default {
  props: ['href', 'to']
}
</script>
<style lang="sass" scoped>

.round-btn
  display: block
  width: 100%
  white-space: nowrap
  text-align: center
  font-size: 36px
  font-weight: 900
  color: #fff
  background-color: #32E0C4
  border: 1px solid #32E0C4
  text-decoration: none
  padding: .75em 1.5em
  line-height: 1
  font-weight: 700
  border-radius: 100em
  cursor: pointer
  letter-spacing: 0.1em
  transition: all 0.3s ease
  margin-bottom: .5em
  @media screen and (max-width: 768px)
    font-size: 16px
    padding: .5em 1em
  &:hover
    color: #32E0C4
    background-color: transparent
</style>
