<template>
  <router-link to="/cfp" class="back-btn">
    <img src="/imgs/cfp/back-hover.svg" alt="back" />
  </router-link>
</template>
<style lang="sass" scoped>

.back-btn
  width: 70px
  display: block
  background-image: url('/imgs/cfp/back.svg')
  background-size: 70px auto
  background-repeat: no-repeat
  img
    width: 70px
    opacity: 0
  &:hover
    background-image: url('/imgs/cfp/back-hover.svg')
</style>