<template>
  <div>
    <GeneralHead
      page-title="首頁"
      title="SITCON X"
      description="在 SITCON 的第 X 週年，期望我們秉持初衷——讓學生們分享與交流知識，把各地學生串連起來的 X 字路口——也期望每個人能夠向貓咪學習，換個思維邏輯面對迷惘的現況，保持著好奇心與探索的樂趣，跳脫框架創造屬於自己的美好未來！"
      image="https://sitcon.org/2022/imgs/og.jpg" />

    <div class="container">
      <div class="wrap">
        <div class="banner">
          <h1 class="name">SITCON 學生計算機年會</h1>
          <img class="x" :src="'/2022/imgs/xx.svg'" />
          <div class="wool-cat-one">
            <img class="wool" :src="'/2022/imgs/cats/wool-orange.svg'" />
            <img class="cat" :src="'/2022/imgs/cats/cat-cover.svg'" />
          </div>
        </div>

        <div class="info">
          <h2 class="text">
            2022 09/04<br>中央研究院 人文社會科學館
          </h2>
          <img class="arrow" :src="'/2022/imgs/arrow.svg'" />
          <img class="arrow" :src="'/2022/imgs/arrow.svg'" />
          <div class="btns">
            <btn href="#">報名取票</btn>
            <btn href="#">公告資訊</btn>
          </div>
        </div>
      </div>

      <div class="boxes">
        <mint-box>
          <h1>迷宮中的貓貓</h1>
          <img class="cat pad1" :src="'/2022/imgs/cat-in-a-maze.svg'" />
          <div class="pad2">
            <p>Cat in a Maze 參考自 Rat in a Maze 這道經典演算法題目。題目描述一隻老鼠要走迷宮，在給定了迷宮形狀的前提下，要努力找出走出迷宮的出路。「Rat in a Maze」這句話切實地反映了劇烈動盪時代下的學生們在面對未來的生涯發展時，猶如一隻無法逃避、勢必得進入體制這一迷宮的老鼠。</p>
            <p class="rat-center">但是⋯⋯我們真的只能當老鼠嗎？</p>
            <p>
              不如，像貓咪一樣思考？以貓咪的個性，第一直覺想到的會是遇到迷宮時，直接破壞迷宮離開，或者是使用我們想不到的方式解決迷宮。同時貓咪相較於老鼠，對一切事物充滿好奇、敢於探索未知事物，不畏強權挑戰一切，是貓咪獨特的個性。<br>
              對於學生而言，充滿好奇、敢於探索未知事物相當重要，畢竟自己的未來要由自己來定義。當大家陷入迷惘的時候，比起使用老鼠告訴大家已經陷入迷惘了，不如讓我們可以看看貓咪、學學貓咪，換個思維邏輯去面對迷惘的現況，保持著好奇心與探索的樂趣。又或者跳脫框架，創造屬於自己的美好未來。
            </p>
          </div>
        </mint-box>

        <mint-box>
          <h1>活動</h1>
          <div class="pad1">
            <h2>Activity</h2>
            <p>延續過去有的雙向交流，今年我們有這些活動可以讓大家一起參與：</p>
            <ul>
              <li>
                <strong>天使計畫：</strong><br>
                <span>天使計劃是一個提供會眾們交流機會的活動，在主辦方隨機配對後，讓有經驗的天使帶領初心者，協助他們瞭解這個年會。而這次也會繼續沿用去年的改變：依照天使的意願，除了天使與初心者一對一的交流，也會有一位天使帶兩位初心者的情況，讓兩位初心者能互相認識。</span>
              </li>
              <li>
                <strong>大會導遊團：</strong><br>
                <span>
                  第一次參加 Conference 嗎？第一次來到 SITCON 嗎？是個怕生的人嗎？?到了現場人山人海，不知道從何逛起？不管你是哪種，我們聽見你的聲音了。<br>
                  為了照顧第一次參與 Conference 的你，我們舉辦了 SITCON 導遊團，由走訪總召、幹部、講者、攤位，帶您一步步了解 SITCON 的各個面向、運作模式，並認識學生計算機年會的核心概念！
                </span>
              </li>
              <li>
                <strong>天使計畫：</strong><br>
                <span>天使計劃是一個提供會眾們交流機會的活動，在主辦方隨機配對後，讓有經驗的天使帶領初心者，協助他們瞭解這個年會。而這次也會繼續沿用去年的改變：依照天使的意願，除了天使與初心者一對一的交流，也會有一位天使帶兩位初心者的情況，讓兩位初心者能互相認識。</span>
              </li>
            </ul>
          </div>
        </mint-box>

        <mint-box>
          <h1>關於 SITCON</h1>
          <div class="pad1">
            <h2>Students' Information Technology Conference</h2>
            <p>SITCON 學生計算機年會是由學生自發舉辦，投身學生資訊教育與推廣開源精神的社群， 也是一個由學生主辦、學生擔任講者、以學生為主軸的資訊研討會，給學生們一個發表交流技術的舞台。</p>
            <p>除了技術研討之外，還有許多從學生角度出發的經驗分享、專題研究成果或探討學生相關議題等等議程。 我們也曾舉辦黑客松、工作坊，和各地學校社團舉辦聯合講座等等。</p>
          </div>
        </mint-box>

        <mint-box>
          <h1>行為準則</h1>
          <div class="pad1">
            <h2>Code of Conduct</h2>
            <p>
              SITCON 歡迎不同身分、來自不同背景的與會者，也非常鼓勵女性、性少數與多元背景的參與者。為了讓大家都能愉快的參加 SITCON，我們要求所有參與者閱讀年會的行為準則（<a href="https://sitcon.org/code-of-conduct/">Code of Conduct</a>），共同創造一個友善的環境。
            </p>
          </div>
        </mint-box>

        <div class="wool-cat-two">
          <img class="cat" :src="'/2022/imgs/cats/cat-left.svg'" />
          <img class="wool" :src="'/2022/imgs/cats/wool-green.svg'" />
          <img class="cat" :src="'/2022/imgs/cats/cat-right.svg'" />
        </div>

        <mint-box>
          <h1>參與討論</h1>
          <div class="pad1">
            <h2>Join the community</h2>
            <p>
              SITCON 是個開放的社群，許多籌備的相關事項都會在公開的郵件論壇上進行討論，如果有興趣參與，歡迎訂閱 SITCON 的郵件論壇並貢獻你的想法！<br>
              <br>
              若你想進一步了解過往討論的內容，也歡迎在 HackMD 上查看 SITCON 2022 的會議記錄。
            </p>
            <div class="btns">
              <btn href="#">郵件論壇</btn>
              <btn href="#">會議記錄</btn>
              <btn href="#">個人贊助</btn>
            </div>
          </div>
        </mint-box>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  created() {
  }
}
</script>
<style lang="sass" scoped>
h1, h2, h3, h4, h5, h6
  margin: 0
.wrap
  width: 95%
  margin: 0 auto
.boxes
  width: 85%
  margin: 0 auto
@media screen and (min-width: 769px)
  .pad1
    padding: 0 40px
  .pad2
    padding: 0 80px
.rat-center
  color: #FFA949
  text-align: center
  @media screen and (max-width: 768px)
    line-height: 5
  @media screen and (min-width: 769px)
    font-size: 32px
.btns
  display: flex
  gap: 16px
.name
  text-align: right
.banner
  display: grid
  grid-template-columns: 5fr 0 4fr
  grid-template-rows: 1fr 0 auto 50px auto
  @media screen and (max-width: 768px)
    grid-template-columns: 50% auto 45%
    grid-template-rows: 1fr 3fr 0 1fr 2fr
  grid-template-areas: ". . name" "x . name" "x . ." "x cat cat" ". cat cat"
  .name
    grid-area: name
    word-break: keep-all
    font-size: 32px
    @media screen and (max-width: 768px)
      font-size: 20px
      line-height: 1.5
  .x
    grid-area: x
    align-items: flex-start
    img
      width: 100%
  .wool-cat-one
    grid-area: cat
    display: grid
    grid-template-columns: auto auto
    grid-gap: 16px
    @media screen and (max-width: 768px)
      grid-template-columns: 1fr 3fr
      grid-gap: 4px
    align-items: flex-end
    justify-content: flex-start
.info
  width: 95%
  margin: 64px auto
  display: grid
  grid-template-columns: 6fr 5% 1fr 5px 1fr 5% 4fr
  @media screen and (max-width: 768px)
    grid-template-columns: 5fr 1% 8% 1% 8% 2% 4fr
  grid-template-areas: "text . arrow1 . arrow2 . btns"
  align-items: center
  .text
    line-height: 1.2
    grid-area: text
    word-break: keep-all
    @media screen and (max-width: 768px)
        font-size: 20px
        font-weight: 700
  .arrow
    &:first-of-type
      grid-area: arrow1
    &:last-of-type
      grid-area: arrow2
  .btns
    margin: 5% auto
    grid-area: btns
    @media screen and (max-width: 768px)
      flex-direction: column
.wool-cat-two
  width: 80%
  margin: 0 auto 0 auto
  margin-top: 80px
  display: grid
  grid-template-columns: 5fr 1fr 5fr
  grid-gap: 36px
  @media screen and (max-width: 768px)
    grid-gap: 8px
  align-items: end
  position: relative
  bottom: -10px
  .wool
    margin-bottom: 35%
</style>
