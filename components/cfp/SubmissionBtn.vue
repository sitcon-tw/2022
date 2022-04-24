<template>
  <a class="submission-btn" :href="href" target="_blank">
    <span>
      我要投稿
    </span>
  </a>
</template>

<script>
export default {
  props: ['href']
}
</script>
<style lang="sass" scoped>

.submission-btn
  display: block
  width: 100%
  text-align: center
  font-size: 24px
  color: #fff
  background-color: #32E0C4
  border: 1px solid #32E0C4
  text-decoration: none
  max-width: 200px
  margin: 0 auto
  font-weight: 700
  span
    letter-spacing: 0.5em
    margin-right: -0.5em
  &:hover
    background-color: transparent
</style>