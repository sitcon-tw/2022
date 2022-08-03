<template>
  <ArrowDialog v-model="dialogStore.thingsDialogOpened">
    <h2 class="title">不得不做的 25 件事</h2>
    <div class="content">
      <div class="bingo-table">
        <div class="bingo-item" v-for="(item, index) in bingoItems">
          {{ item.text }}
        </div>
      </div>
    </div>
  </ArrowDialog>
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
      "找到網紅大大拍照打卡上傳 IG 並 Hashtag 我在 #SITCON 看到 #____",
      "閃電講 Lighting Talk",
      "找到官網彩蛋",
      // row 5
      "認識不同社群",
      "和與會者、工人、講者們交流",
      "了解開源的精神",
      "填寫會後問卷",
      "跳坑 SITCON 2023！",
    ].map(x => ({
      text: x,
      done: false
    }))
  })
}
</script>
<style lang="sass" scoped>
.content
  padding: 0 24px
h2.title
  text-align: center
.bingo-table
  display: grid
  grid-template-columns: repeat(5, 1fr)
  grid-gap: 8px
  background-color: #fff
  border-radius: 16px
  max-width: 768px
  .bingo-item
    aspect-ratio: 1/1
    display: flex
    justify-content: center
    align-items: center
    text-align: center
    padding: 16px
</style>
