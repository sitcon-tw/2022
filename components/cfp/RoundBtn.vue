<template>
  <div class="round-btn">
      <a :href="href" target="_blank">
        <span>
            {{ content }}
        </span>
    </a>
  </div>
</template>

<script>
export default {
  props: ['href', 'content']
}
</script>
<style lang="sass" scoped>

div
  display: flex
  justify-content: flex-end
  a
    display: block
    width: 100%
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