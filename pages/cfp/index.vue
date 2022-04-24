<template>
  <div>

    <Head>
      <Title>{{ title }}</Title>
      <Meta name="description" :content="title" />
    </Head>
    <div class="container">
      <div class="logos">
        <logo-sitcon />
        <logo-cat-in-a-maze />
      </div>
      <div class="稿件徵求中">
        <img src="/imgs/cfp/稿件徵求中.svg">
      </div>

      <div class="round-btns">
        <cfp-round-btn href="/cfp/normal" content="一般議程" />
        <cfp-round-btn href="/cfp/freeform" content="開放式議程" />
      </div>

      <br>

      <cfp-glass-box first-child>
        <h3>關於 SITCON</h3>
        <p>SITCON 學生計算機年會自 2013 年發起，以學生為本、由學生自發舉辦，長期投身學生資訊教育與推廣開源精神，希望引領更多學子踏入資訊的殿堂，更冀望所有對資訊有興趣的學生，能夠在年會裏齊聚一堂，彼此激盪、傳承、啟發，達到「學以致用、教學相長」的實際展現。</p>
        <p>在 SITCON 的第 X 週年，期望我們秉持初衷——讓學生們分享與交流知識，把各地學生串連起來的 X 字路口——也期望每人皆能在與大家的聊天與討論之中，找到自己的方向、熱情。</p>
        <h3>SITCON 歷年網站</h3>
        <div class="prev-sites">
          <cfp-prev-site src="/imgs/cfp/prev-sites/2021.png" content="SITCON 2021" href="#" />
          <cfp-prev-site src="/imgs/cfp/prev-sites/2020.png" content="SITCON 2020" href="#" />
          <cfp-prev-site src="/imgs/cfp/prev-sites/2019.png" content="SITCON 2019" href="#" />
          <cfp-prev-site src="/imgs/cfp/prev-sites/2018.png" content="SITCON 2018" href="#" />
        </div>
        <h3>參與討論</h3>
        <p>SITCON 是個開放的社群，許多籌備的相關事項都會在公開的郵件論壇上進行討論，如果有興趣參與，歡迎訂閱 SITCON 的郵件論壇並貢獻你的想法！</p>
        <p>若你想進一步了解過往討論的內容，也歡迎在 HackMD 上查看 SITCON 2022 的會議記錄。</p>
        <div class="rad-btns">
          <cfp-rad-btn href="#" content="SITCON 郵件論壇" />
          <cfp-rad-btn href="#" content="籌備會議紀錄" />
        </div>
      </cfp-glass-box>

    </div>
    <Footer />
  </div>
</template>
<script setup>
const title = ref('SITCON 2022 - Call for Papers')
</script>
<style lang="sass" scoped>

.container
  width: calc(100% - 64px)
  padding: 40px 64px
  margin: 0 auto
  @media screen and (max-width: 1024px)
    padding: 40px 20px
    width: calc(100% - 40px)
    margin: 18px auto
  @media screen and (max-width: 650px)
    padding: 40px 5vw
  ::v-deep(.main-title)
    justify-content: flex-end
    gap: 96px
    margin-top: -.5em
    @media screen and (max-width: 768px)
      font-size: 20px
      gap: 32px
  .logos
    white-space: nowrap

.稿件徵求中
  display: flex
  justify-content: flex-end
  margin: 7vh 3vw
  @media screen and (max-width: 1280px)
    margin: 6vh 4vw
  @media screen and (max-width: 768px)
    margin: 3vh 3vw
  img
    width: 70%
    @media screen and (max-width: 1280px)
      width: 60%
    @media screen and (max-width: 768px)
      width: 45%
    @media screen and (max-width: 650px)
      width: 45vw

.round-btns
  display: grid
  grid-row: 1
  direction: rtl
  grid-row-gap: 20px
  @media screen and (max-width: 768px)
    grid-row-gap: 15px

.prev-sites
  display: grid
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr))

.rad-btns
  display: inline-flex
  *
    margin-right: 64px
  @media screen and (max-width: 768px)
    margin-right: 45px

</style>