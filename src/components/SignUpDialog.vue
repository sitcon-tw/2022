<template>
  <ArrowDialog v-model="dialogStore.signUpDialogOpened">
    <h2 class="title">報名資訊</h2>
    <div class="content">
      <p class="text">
        SITCON 年會堅持不收費原則，秉持著「降低學生參與門檻」的理念，預算全數由個人／企業贊助或是政府／教育單位協助。<br>
        除了大家都能報名的普通票和提供給學生的學生票外，為了鼓勵開源貢獻，SITCON 也為開源貢獻者保留了 OSCVPass 票種<br>
        SITCON 也希望提供給偏鄉地區的學生接觸資訊領域的機會、鼓勵國外的學生來台進行交流，因此也規劃了遠道而來票，開放偏鄉或離島、國外地區的學生申請。
      </p>
      <div class="btns">
        <btn href="https://sitcon.kktix.cc/events/sitcon2022">KKTIX 報名連結</btn>
        <btn href="https://oscvpass.ocf.tw">OSCVPass 申請</btn>
        <btn href="https://hackmd.io/@SITCON/rJjIFtkOq">遠道而來票</btn>
        <btn to="/sponsor" @click="dialogStore.signUpDialogOpened = false">
          <img class="cat-right" src="/imgs/cats/cat-right-angle.svg" />
          支持我們
        </btn>
      </div>
    </div>
    <img class="cat-flat" src="/imgs/cats/cat-vertical.svg" />
  </ArrowDialog>
</template>
<script>
import { useDialogStore } from '../store/dialog'
export default {
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
