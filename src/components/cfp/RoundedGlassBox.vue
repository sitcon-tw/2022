<template>
  <cfp-glass-box class="rounded">
    <slot />
  </cfp-glass-box>
</template>
 
<style lang="sass" scoped>
.rounded.rounded
  border-radius: 56px
  padding: 72px
  @media screen and (max-width: 768px)
    border-radius: 20px
    padding: 20px
</style>