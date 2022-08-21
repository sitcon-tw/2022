<template>
  <ArrowDialog v-model="dialogStore.signUpDialogOpened">
    <h2 class="title">報名資訊</h2>
    <div class="content">
      <p class="text">
        SITCON 年會堅持不收費原則，秉持著「降低學生參與門檻」的理念，預算全數由個人／企業贊助或是政府／教育單位協助，若您也認同 SITCON 的理念，歡迎 <router-link to="/sponsor"  @click="dialogStore.signUpDialogOpened = false">支持我們</router-link>。<br><br>

        <ul>
          <li>目前票券均已索取完畢，若您臨時無法蒞臨會場請到 <a href="https://www.facebook.com/groups/sitcon.tw/posts/4253256531466140/" target="_blank">Facebook 社團換票樓</a> 釋出票券，將入場資格提供給需要的人。</li>
          <li>年會議程（R0、R1、R2、R3）將於年會當日在 <a herf="https://sitcon.org/yt" target="_blank">YouTube</a> 同步直播，歡迎線上參與！</li>
          <li>關注 <a href="https://sitcon.org/ig" target="_blank">Instagem</a> 和 <a href="https://sitcon.org/fb" target="_blank">Facebook</a>，以免錯過任何活動資訊！</li>
          <li><a href="https://oscvpass.ocf.tw" target="_blank">開源貢獻者快速通關 OSCVPass</a> 提供開源貢獻者各大台灣社群活動的門票或優惠方案，修 code、發 issue 及舉辦開源推廣活動等均能申請，馬上貢獻為未來做準備！</li>
        </ul>
      </p>
      <div class="btns">
        <btn href="https://sitcon.kktix.cc/events/sitcon2022">KKTIX 報名頁面</btn>
        <btn href="https://www.facebook.com/groups/sitcon.tw/posts/4253256531466140/">FB 社團換票樓</btn>
        <btn href="https://oscvpass.ocf.tw">OSCVPass 申請</btn>
        <btn to="/sponsor" @click="dialogStore.signUpDialogOpened = false">
          <img class="cat-right" src="/imgs/cats/cat-right-angle.svg" />
          支持我們
        </btn>
      </div>
    </div>
    <cat-flat-vertical class="cat-flat" />
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
  right: -4px
  @media screen and (max-width: 768px)
    bottom: 5%
    max-width: 10%
.cat-right
  position: absolute
  top: 0
  left: 0
  transform: translate(-35%, -30%)
  max-width: 50%
  max-height: 150%
</style>
