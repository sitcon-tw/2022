<template>
  <a :href="href" class="rad-btn" target="_blank">
    {{ content }}
  </a>
</template>

<script>
export default {
  props: ['href', 'content']
}
</script>
<style lang="sass" scoped>
.rad-btn
  padding: 0 1em
  display: block
  text-align: center
  font-size: 24px
  color: #fff
  background-color: #32E0C4
  border: 1px solid #32E0C4
  text-decoration: none
  font-weight: 700
  border-radius: .5em
  transition: all 0.3s ease
  @media screen and (max-width: 768px)
    font-size: 18px
  &:hover
    color: #32E0C4
    background-color: transparent
</style>
