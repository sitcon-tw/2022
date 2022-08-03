<template>

  <Teleport to="body">
    <transition name="arrowDialog">
      <div class="things-must-do-dialog"
        ref="dialog"
        v-if="dialogStore.thingsDialogOpened"
        @keyup.esc="dialogStore.thingsDialogOpened = false"
        tabindex="0">
        <a @click="dialogStore.thingsDialogOpened = false" class="close">
          <img :src="'/2022/imgs/dialog_close.svg'" />
        </a>
        <div class="content">
          <h2 class="title">不得不做的 25 件事</h2>
          <div class="content">
            <div class="bingo-table">
              <div
                class="bingo-item"
                v-for="item in bingoItems"
                @click="toggleBingoItem(item)"
                :class="{ done: item.done }"
                v-html="item.text" />
            </div>
          </div>
        </div>
      </div>
    </transition>
  </Teleport>
</template>
<script>
import { useDialogStore } from '../store/dialog'
export default {
  setup() {
    const dialogStore = useDialogStore()
    return { dialogStore }
  },
  data: () => ({
    bingoItems: [
      // row 1
      "追蹤年會各種社群媒體",
      "Keynote",
      "開放式議程",
      "打卡牆合照",
      "參與各式議程",
      // row 2
      "白板大戰",
      "於議程中發表想法或提問",
      "在回憶照片牆貼上照片",
      "程式碼拼圖",
      "使用機台列印 IG 貼文照片",
      // row 3
      "參與紀念 T 投票",
      "到交誼廳拍網美照",
      "逛遍所有攤位",
      "於論壇得到不一樣的想法",
      "購買紀念品",
      // row 4
      "導遊團",
      "點心時間",
      "找到網紅大大拍照打卡上傳 IG",
      "閃電講<br>Lightning Talk",
      "找到官網彩蛋",
      // row 5
      "認識不同社群",
      "和與會者、工人、講者們交流",
      "了解開源的精神",
      "填寫會後問卷",
      "跳坑<br>SITCON 2023！",
    ].map(x => ({
      text: x,
      done: false
    }))
  }),
  mounted() {
    // sync from localStorage
    let bingoItem = JSON.parse(localStorage?.bingoItem || `[]`)
    this.bingoItems.forEach(item => {
      item.done = bingoItem.includes(item.text)
    })
  },
  methods: {
    toggleBingoItem(item) {
      item.done = !item.done
      // save to localStorage
      let bingoItem = JSON.parse(localStorage?.bingoItem || `[]`)
      if (item.done)
        bingoItem.push(item.text)
      else
        bingoItem = bingoItem.filter(x => x !== item.text)
      localStorage['bingoItem'] = JSON.stringify(bingoItem)
    }
  },
  watch: {
    'dialogStore.thingsDialogOpened'(val) {
      document.querySelector('html').style['overflow-y'] = val ? 'hidden' : 'auto'
      this.$nextTick(() => {
        this.$refs.dialog?.focus()
      })
    }
  }
}

</script>
<style lang="sass" scoped>
.things-must-do-dialog
  position: fixed
  top: 0
  left: 0
  width: 100%
  height: 100%
  overflow: hidden
  background-color: rgb(55 55 55 / 95%)
  backdrop-filter: blur(10px)
  z-index: 100
  display: flex
  justify-content: center
  align-items: center
  color: #fff

.close
  position: absolute
  top: 0
  right: 0
  transition: all .25s ease
  z-index: 1
  &:hover
    opacity: 0.8
    cursor: pointer
    transform: scale(.95)
  img
    width: 48px
    height: 48px
    margin: 8px
.content
  position: relative
  padding: 16px
h2.title
  text-align: center
.bingo-table
  --border: 2px solid #8e8370
  display: grid
  grid-template-columns: repeat(5, 1fr)
  border-radius: 16px
  max-width: 640px
  overflow: hidden
  border: var(--border)
  background-image: url('/imgs/25-things-must-do/cat.svg')
  background-size: 90% 90%
  background-position: center
  background-repeat: no-repeat
  background-color: #F4EEE1
  color: #333
  @media (max-width: 512px)
    margin: 0 -16px
  .bingo-item
    aspect-ratio: 1/1
    display: flex
    flex-direction: column
    justify-content: center
    align-items: center
    text-align: center
    padding: 0 8px
    font-size: 16px
    font-weight: bold
    border-right: var(--border)
    line-height: 1.5
    position: relative
    cursor: pointer
    background-color: #F4EEE1
    &:nth-child(n+6)
      border-top: var(--border)
    &:nth-child(5n)
      border-right: none
    @media (max-width: 640px)
      padding: 0 2px
      font-size: 10px
      aspect-ratio: 1/1
    &:first-child
      border-top-left-radius: 16px
    &:nth-child(5)
      border-top-right-radius: 16px
    &:nth-last-child(5)
      border-bottom-left-radius: 16px
    &:last-child
      border-bottom-right-radius: 16px
    &::before
      content: ''
      height: 100%
      width: 100%
      position: absolute
      background-image: url('/imgs/25-things-must-do/done.svg')
      background-position: center
      transform: scale(1.2)
      transform-origin: center
      filter: blur(5px)
      opacity: 0
      transition: all .2s ease
    &.done
      background-color: rgba(0, 0, 0, .1)
      &::before
        opacity: 1
        transform: scale(1)
        filter: blur(0)
</style>
