<template>
  <div class="container">
    <div class="alert">
      <div class="area long c1"></div>
      <div class="area long c2"></div>
      <div class="area long c3"></div>
      <div class="area long c4"></div>
      <div class="area short c1"></div>
      <div class="area short c2"></div>
      <div class="area short c3"></div>
      <div class="area short c4"></div>
    </div>
    <div class="content">
      <img :src="'/2022/imgs/404.svg'" />
      <h1 class="text">你走錯路了嗎？<br /></h1>
      <h3 class="text">到 SITCON 官網看看吧！</h3>
      <btn to="/">
        <svg-sitcon class="logo" />
        <svg-x class="x" />
      </btn>
    </div>
  </div>
  <div class="container">
    <footer-item :hide-sponsor="true" />
  </div>
  <cat-konami />
</template>
<script>
export default {
  mounted() {
    document.body.classList.add('not-found')
  },
  beforeUnmount() {
    document.body.classList.remove('not-found')
  }
}
</script>
<style lang="sass" scoped>
.container
  position: relative
.alert
  z-index: 0
  position: absolute
  left: 50%
  transform: translateX(-50%)
  width: calc(100% - 160px)
  height: 100%
  padding: 5%
  display: grid
  grid-template-columns: repeat(4, 1fr)
  grid-template-rows: 4fr 1fr
  grid-gap: 48px 64px
  @media screen and (max-width: 768px)
    width: 100%
    grid-gap: 32px
  .area
    border-radius: 40px
    &.long.c1, &.short.c1
      background: linear-gradient(to right, #32E0C4, 100%, #82D357)
    &.long.c2, &.short.c2
      background: linear-gradient(to right, #32E0C4, 66%, #82D357)
    &.long.c3, &.short.c3
      background: linear-gradient(to right, #32E0C4, 33%, #82D357)
    &.long.c4, &.short.c4
      background: linear-gradient(to right, #32E0C4, 0%, #82D357)
.content
  position: relative
  display: flex
  flex-direction: column
  align-items: center
  gap: 20px
  padding: 6% 10%
  margin: 80px
  --background-opacity: 0.75
  background: rgba(55, 55, 55, var(--background-opacity))
  border: 1px solid rgba(222, 222, 222, 0.2)
  border-radius: 25px
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.85)
  backdrop-filter: blur(5px)
  @media screen and (max-width: 768px)
    margin: 20px 0
  img
    padding: 5% 10%
.text
  margin: 0
  color: #FFA949
  word-break: keep-all
  text-align: center
  line-height: 1.2
.btn
  font-size: 0.8rem
  display: inline-flex
  align-items: center
  padding: 1em 4em
  border-radius: 28px
  margin-top: 1em
  svg
    fill: #373737
  &:hover
    svg
      fill: #FFFFFF
  .logo
    height: 1.5em
  .x
    height: 3em
</style>
