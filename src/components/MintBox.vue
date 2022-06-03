<template>
  <div class="mint-box">
    <slot />
  </div>
</template>
<style lang="sass" scoped>
.mint-box
  --padding: 36px
  background-color: #F4EEE1
  border-radius: var(--padding)
  padding: var(--padding)
  @media (max-width: 768px)
    --padding: 24px
  &+.mint-box
    margin-top: var(--padding)

</style>