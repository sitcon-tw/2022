<template>
  <div class="cards">
    <slot />
  </div>
</template>
<style lang="sass" scoped>
.cards
  display: grid
  grid-template-columns: repeat(4,1fr)
  gap: 24px
  margin: 24px 0
  @media screen and (max-width: 768px)
    grid-template-columns: repeat(2,1fr)
</style>