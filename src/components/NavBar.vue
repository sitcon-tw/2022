<template>
  <arrow-box class="nav-bar">
    <router-link class="logo" to="/">
      <svg-sitcon class="sitcon" />
      <svg-x class="x" />
    </router-link>
    <div class="links">
      <router-link class="link hide-mobile" :to="link.to" v-for="(link, i) of links" @click="active = i">
        {{ link.text }}
      </router-link>
      <button class="link link-menu hide-desktop" :class="{ 'active': menuActive }" @click="menuActive = !menuActive">
        {{ links[active].text }}
        <div class="menu">
          <router-link class="menu-item" :to="link.to" v-for="(link, i) of links" @click="active = i">
            {{ link.text }}
          </router-link>
        </div>
      </button>
      <a class="link hide-desktop" @click="dialogStore.signUpDialogOpened = true">
        報名取票
      </a>
    </div>
  </arrow-box>
</template>
<script>
import { useDialogStore } from '../store/dialog'
export default {
  name: 'NavBar',
  setup() {
    const dialogStore = useDialogStore()
    return { dialogStore }
  },
  data() {
    return {
      active: 0,
      menuActive: false,
      links: [
        {
          to: '/',
          text: '年會主題'
        },
        {
          to: '/agenda',
          text: '議程資訊'
        },
        {
          to: '/venue',
          text: '會場地圖'
        },
        {
          to: '/traffic',
          text: '交通方式'
        },
        {
          to: '/staff',
          text: 'SITCON 團隊'
        },
        {
          to: '/sponsor',
          text: '贊助'
        }
      ]
    }
  },
  mounted() {
    this.active = this.links.findIndex(link => link.to === this.$route.path)
  },
  methods: {
  }
}
</script>
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
  position: fixed
  top: 10px
  left: 0
  right: 0
  z-index: 5
  background-color: var(--background-color)
  margin-bottom: 72px
  &:deep(.arrow_top)
    bottom: -3px
  &:deep(.arrow_bottom)
    bottom: -11px
  @media screen and (max-width: 768px)
    --border-width: 4px
    --arrow-width: 20px
    --border-radius: 24px
    &:deep(.arrow_top)
      bottom: 1px
  .logo
    display: flex
    align-items: center
    gap: 8px
    .sitcon
        height: 24px
        @media (max-width: 1024px)
          display: none
    .x
        height: 48px
        @media (max-width: 1024px)
          height: 40px
  .links
    display: flex
    gap: 8px
    --link-text-color: #383838
    @media (max-width: 1024px)
      gap: 4px
    .link
      display: block
      border: none
      background-color: #82D357
      color: var(--link-text-color)
      text-decoration: none
      border-radius: 10em
      padding: 8px 16px
      font-weight: 700
      position: relative
      transition: all 0.2s ease
      box-shadow: inset 0 0 0 4px #82D357
      text-align: center
      cursor: pointer
      @media (max-width: 1024px)
        padding: 6px 12px
        font-size: 14px
      @media (min-width: 769px)
        &:first-child
          display: none
      &:not(.link-menu)
        &:hover,&.router-link-active
          background-color: transparent
          --link-text-color: var(--text-color)
          box-shadow: inset 0 0 0 2px #82D357
      &.hide-mobile
        @media (max-width: 768px)
          display: none
      &.hide-desktop
        @media (min-width: 769px)
          display: none
      &.link-menu
        padding-right: 32px
        min-width: calc(8.5em + 8px)
        position: relative
        cursor: pointer
        &::before
          --size: 5px
          content: ''
          position: absolute
          top: 0
          bottom: 0
          right: 16px
          margin: auto
          width: var(--size)
          height: var(--size)
          border-left: 2px solid var(--link-text-color)
          border-bottom: 2px solid var(--link-text-color)
          transform: rotate(-45deg)
          transform-origin: center center
          transition: all 0.2s ease
        &.active
          background-color: transparent
          --link-text-color: var(--text-color)
          box-shadow: inset 0 0 0 2px #82D357
          &::before
            transform: translateY(50%) rotate(135deg)
          .menu
            opacity: 1
            transform: translateY(0)
            pointer-events: auto
        .menu
          --border-radius: 16px
          display: flex
          flex-direction: column
          position: absolute
          top: calc(100% + 8px)
          left: 0
          width: calc(8.5em + 8px)
          border-radius: var(--border-radius)
          background: #82D357
          opacity: 0
          transform: translateY(10px)
          transition: all 0.2s ease
          pointer-events: none
          z-index: 5
          box-shadow: 0 0 8px rgba(0, 0, 0, 0.2)
          .menu-item
            display: block
            padding: 16px 16px
            text-decoration: none
            color: #383838
            font-weight: 700
            transition: all 0.2s ease
            text-align: left
            &:first-child
              border-radius: var(--border-radius) var(--border-radius) 0 0
            &:last-child
              border-radius: 0 0 var(--border-radius) var(--border-radius)
            &:not(:last-child)
              border-bottom: 1px solid rgba(0, 0, 0, .1)
            &:hover
              background-color: rgba(0, 0, 0, .05)
              color: var(--text-color)

</style>