<template>
  <arrow-box class="nav-bar">
    <router-link class="logo" to="/">
      <img class="sitcon" :src="'/2022/imgs/sitcon.svg'" />
      <img class="x" :src="'/2022/imgs/x.svg'" />
    </router-link>
    <div class="links">
      <router-link class="link" to="/agenda"> 議程資訊 </router-link>
      <router-link class="link" to="/venue"> 會場地圖 </router-link>
      <router-link class="link" to="/traffic"> 交通方式 </router-link>
      <router-link class="link" to="/staff"> SITCON 團隊 </router-link>
      <router-link class="link" to="/sponsor"> 贊助 </router-link>
    </div>
  </arrow-box>
</template>
<style lang="sass" scoped>
.nav-bar
  display: flex
  align-items: center
  justify-content: space-between
  border-radius: 100em
  padding: 8px 16px
  --arrow-position: 150px
  --arrow-dimmer-width: 90px
  --arrow-width: 20px
  --border-width: 8px
  position: sticky
  top: 10px
  z-index: 5
  background-color: var(--background-color)
  margin-bottom: 72px
  &:deep(.arrow_top)
    bottom: -3px
  &:deep(.arrow_bottom)
    bottom: -11px
  .logo
    display: flex
    align-items: center
    gap: 8px
    img
      &.sitcon
        height: 24px
        @media (max-width: 768px)
          display: none
      &.x
        height: 48px
  .links
    display: flex
    gap: 8px
    .link
      display: inline-block
      background-color: #82D357
      color: #383838
      text-decoration: none
      border-radius: 10em
      padding: 8px 16px
      font-weight: 700
      position: relative
      transition: all 0.2s ease
      box-shadow: inset 0 0 0 2px #82D357
      &:hover,&.router-link-active
        background-color: transparent
        color: var(--text-color)

</style>