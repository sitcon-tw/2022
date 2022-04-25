<template>
  <component :href="href || null" :to="to || null" :is="to ? 'router-link' : 'a'" class="round-btn">
    <span>
      {{ content }}
    </span>
  </component>
</template>

<script>
export default {
  props: ['href', 'to', 'content']
}
</script>
<style lang="sass" scoped>

.round-btn
  display: block
  width: 100%
  white-space: nowrap
  text-align: center
  font-size: 24px
  color: #fff
  background-color: #32E0C4
  border: 1px solid #32E0C4
  text-decoration: none
  max-width: 175px
  font-weight: 700
  border-radius: 50px
  cursor: pointer
  span
    letter-spacing: 0.1em
  &:hover
    background-color: transparent
</style>