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
    </div>
    <cfp-rounded-glass-box>
      <h3>關於 SITCON</h3>
      <p>SITCON 學生計算機年會自 2013 年發起，以學生為本、由學生自發舉辦，長期投身學生資訊教育與推廣開源精神，希望引領更多學子踏入資訊的殿堂，更冀望所有對資訊有興趣的學生，能夠在年會裏齊聚一堂，彼此激盪、傳承、啟發，達到「學以致用、教學相長」的實際展現。</p>
      <p>在 SITCON 的第 X 週年，期望我們秉持初衷——讓學生們分享與交流知識，把各地學生串連起來的 X 字路口——也期望每人皆能在與大家的聊天與討論之中，找到自己的方向、熱情。</p>
      <h3>SITCON 歷年網站</h3>
      <div class="prev-sites">
        <cfp-prev-site src="/imgs/cfp/prev-sites/2021.png" href="https://sitcon.org/2021/">SITCON 2021</cfp-prev-site>
        <cfp-prev-site src="/imgs/cfp/prev-sites/2020.png" href="https://sitcon.org/2020/">SITCON 2020</cfp-prev-site>
        <cfp-prev-site src="/imgs/cfp/prev-sites/2019.png" href="https://sitcon.org/2019/">SITCON 2019</cfp-prev-site>
        <cfp-prev-site src="/imgs/cfp/prev-sites/2018.png" href="https://sitcon.org/2018/">SITCON 2018</cfp-prev-site>
      </div>
      <h3>參與討論</h3>
      <p>SITCON 是個開放的社群，許多籌備的相關事項都會在公開的郵件論壇上進行討論，如果有興趣參與，歡迎訂閱 SITCON 的郵件論壇並貢獻你的想法！</p>
      <p>若你想進一步了解過往討論的內容，也歡迎在 HackMD 上查看 SITCON 2022 的會議記錄。</p>
      <div class="rad-btns">
        <cfp-rad-btn href="#" content="SITCON 郵件論壇" />
        <cfp-rad-btn href="#" content="籌備會議紀錄" />
      </div>
    </cfp-rounded-glass-box>

    <cfp-rounded-glass-box class="cat-background">
      <h3 class="margin-0">2022 年會主題</h3>
      <h1 class="margin-0">Cat in a Maze</h1>
      <p>Cat in a Maze 參考自 Rat in a Maze 這道經典演算法題目。題目描述一隻老鼠要走迷宮，在給定了迷宮形狀的前提下，要努力找出走出迷宮的出路。「Rat in a Maze」這句話切實地反映了劇烈動盪時代下的學生們在面對未來的生涯發展時，猶如一隻無法逃避、勢必得進入體制這一迷宮的老鼠。</p>
      <h3 class="text-center">但是⋯⋯我們真的只能當老鼠嗎？</h3>
      <p>不如，像貓咪一樣思考？以貓咪的個性，第一直覺想到的會是遇到迷宮時，直接破壞迷宮離開，或者是使用我們想不到的方式解決迷宮。同時貓咪相較於老鼠，對一切事物充滿好奇、敢於探索未知事物，不畏強權挑戰一切，是貓咪獨特的個性。<br>
        對於學生而言，充滿好奇、敢於探索未知事物相當重要，畢竟自己的未來要由自己來定義。當大家陷入迷惘的時候，比起使用老鼠告訴大家已經陷入迷惘了，不如讓我們可以看看貓咪、學學貓咪，換個思維邏輯去面對迷惘的現況，保持著好奇心與探索的樂趣。又或者跳脫框架，創造屬於自己的美好未來。</p>
      <h3>SITCON 贊助徵求</h3>
      <p>SITCON 的舉辦，除了有賴眾多志工的努力，也需要金錢的支持。<br>如果您認同 SITCON 的理念，歡迎以行動支持 SITCON 的運作，讓更多交流產生！</p>
      <p>企業合作歡迎聯繫 <a href="mailto:contact@sitcon.org">contact@sitcon.org</a></p>
      <div class="rad-btns">
        <cfp-rad-btn href="#" content="個人贊助方案" />
      </div>
    </cfp-rounded-glass-box>

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
  max-width: 1152px
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
    width: 100%
    white-space: nowrap

.稿件徵求中
  display: flex
  justify-content: flex-end
  margin: 7vh
  @media screen and (max-width: 1280px)
    margin: 6vh
  @media screen and (max-width: 768px)
    margin: 3vh
  img
    width: 33em
    @media screen and (max-width: 1280px)
      width: 28em
    @media screen and (max-width: 768px)
      width: 15em

.round-btns
  width: 100%
  display: grid
  grid-row: 1
  direction: rtl
  grid-row-gap: 20px
  @media screen and (max-width: 768px)
    grid-row-gap: 15px

.prev-sites
  display: grid
  grid-template-columns: repeat(4,1fr)
  gap: 24px
  @media screen and (max-width: 768px)
    grid-template-columns: repeat(2,1fr)

.rad-btns
  display: inline-flex
  flex-wrap: nowrap
  @media screen and (max-width: 500px)
    flex-direction: column
    flex-wrap: wrap
    width: 100%
  *
    margin-right: 64px
    @media screen and (max-width: 500px)
      margin-right: auto
      margin: 0 auto
      margin-bottom: 20px

.cat-background
  @media screen and (min-width: 960px)
    position: relative
    &:before
      content: ''
      position: absolute
      bottom: 20px
      right: 100px
      width: 212px
      height: 212px
      background-image: url(/imgs/cfp/cat.png)
      background-repeat: no-repeat
      background-size: contain
      background-position: bottom right
      animation: floating-cat-animation 10s ease-in-out infinite

@keyframes floating-cat-animation
  from
    transform: translateY(0px)
  65%
    transform: translateY(-20px)
  to
    transform: translateY(0px)

.margin-0
  margin: 0

.cfp-glass-box
  border-radius: 25px
</style>