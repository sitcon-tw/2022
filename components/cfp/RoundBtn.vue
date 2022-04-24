<template>
  <a :href="href">
    <span>
      {{ content }}
    </span>
  </a>
</template>

<script>
export default {
  props: ['href', 'content']
}
</script>
<style lang="sass" scoped>

a
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
  span
    letter-spacing: 0.1em
  &:hover
    background-color: transparent
</style>