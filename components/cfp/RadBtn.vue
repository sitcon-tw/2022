<template>
  <a :href="href" target="_blank">
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
    margin: 0 auto
    padding: 0 20px
    display: block
    width: max-content
    white-space: nowrap
    text-align: center
    font-size: 24px
    color: #fff
    background-color: #32E0C4
    border: 1px solid #32E0C4
    text-decoration: none
    font-weight: 700
    border-radius: 10px
    span
      letter-spacing: 0.1em
    &:hover
      background-color: transparent
    @media screen and (max-width: 768px)
        font-size: 18px
        padding: 0 15px
</style>