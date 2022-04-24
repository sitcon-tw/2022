<template>
  <figure>
    <img :src="src">
    <figcaption>
        <a :href="href">{{content}}</a>
    </figcaption>
</figure>
</template>

<script>
export default {
  props: ['src', 'content', 'href']
}
</script>
<style lang="sass" scoped>
figure 
  margin: 0 auto
  display: inline-block
  text-align: center
  img
    vertical-align: top
    width: 100%
  figcaption
    width: 100%
  a
    color: #53A99B
    text-decoration: none
</style>