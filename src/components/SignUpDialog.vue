<template>
  <ArrowDialog v-model="dialogStore.signUpDialogOpened">
    <h2 class="title">報名資訊</h2>
    <div class="content">
      <p class="text">
        SITCON 年會堅持不收費原則，秉持著「降低學生參與門檻」的理念，預算全數由個人／企業贊助或是政府／教育單位協助。<br>
        <br>
        若你認同 SITCON 的理念與做法，歡迎參與 SITCON 2021 的個人贊助方案，給予我們實質上的支持。
      </p>
      <div class="btns">
        <btn href="">KKTIX 報名連結</btn>
        <btn href="">OSCVPass 申請</btn>
        <btn href="">
          <img class="cat-right" src="/imgs/cats/cat-right-angle.svg" />
          個人贊助方案
        </btn>
      </div>
    </div>
    <img class="cat-flat" src="/imgs/cats/cat-vertical.svg" />
  </ArrowDialog>
</template>
<script>
import { useDialogStore } from '../store/dialog'
export default {
  name: 'NavBar',
  setup() {
    const dialogStore = useDialogStore()
    return { dialogStore }
  },
}
</script>
<style lang="sass" scoped>
.content
  padding: 0 24px
  display: flex
  flex-direction: row
  @media screen and (max-width: 920px)
    flex-direction: column
    padding: 0
  .title
    margin: 0
  .btns
    white-space: nowrap
    padding: 16px 24px
    display: grid
    grid-template: repeat(2, 1fr) / repeat(2, 1fr)
    grid-gap: 40px 32px
    @media screen and (max-width: 512px)
      padding: 0 32px
      grid-template: repeat(3, 1fr) / 1fr
      grid-gap: 24px
    .btn
      position: relative
.cat-flat
  height: 40%
  max-width: 15%
  position: absolute
  bottom: 20%
  right: 0
  @media screen and (max-width: 768px)
    bottom: 5%
.cat-right
  position: absolute
  top: 0
  left: 0
  transform: translate(-35%, -30%)
  max-width: 50%
  max-height: 150%
</style>
