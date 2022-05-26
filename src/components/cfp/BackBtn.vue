<template>
  <router-link to="/cfp" class="back-btn">
    <img :src="'/2022/imgs/cfp/back-hover.svg'" alt="back" />
  </router-link>
</template>
<style lang="sass" scoped>

.back-btn
  --size: 70px
  width: var(--size)
  display: block
  background-image: url('/imgs/cfp/back.svg')
  background-size: var(--size) auto
  background-repeat: no-repeat
  @media screen and (max-width: 768px)
    --size: 40px
  img
    width: var(--size)
    opacity: 0
  &:hover
    background-image: url('/imgs/cfp/back-hover.svg')
</style>