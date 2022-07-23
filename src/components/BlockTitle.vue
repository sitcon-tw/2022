<template>
  <h1>
    <slot />
  </h1>
</template>
<style lang="sass" scoped>
h1
  font-size: 48px
  font-weight: bold
  color: var(--text-color)
  margin: 0
  padding: 0
  margin-bottom: .5em
  @media (max-width: 768px)
    font-size: 24px
</style>