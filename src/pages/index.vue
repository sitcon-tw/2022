<template>
  <div>
    <GeneralHead
      page-title="首頁"
      title="SITCON X"
      description="在 SITCON 的第 X 週年，期望我們秉持初衷——讓學生們分享與交流知識，把各地學生串連起來的 X 字路口——也期望每個人能夠向貓咪學習，換個思維邏輯面對迷惘的現況，保持著好奇心與探索的樂趣，跳脫框架創造屬於自己的美好未來！"
      image="https://sitcon.org/2022/imgs/og.jpg" />

    <div ref="border-container" class="container border-container">
      <div class="banner">
        <h1 class="name">SITCON 學生計算機年會</h1>
        <svg-x-cat-in-a-maze class="x" />
        <div class="wool-cat-one">
          <img class="wool" :src="'/2022/imgs/cats/wool-orange.svg'" />
          <cat-cover class="cat" />
        </div>
      </div>

      <div class="info">
        <h2 class="text">
          2022 09/04<br>中央研究院 人文社會科學館
        </h2>
        <svg-arrow class="arrow" />
        <svg-arrow class="arrow" />
        <div class="btns">
          <btn @click="dialogStore.signUpDialogOpened = true">報名取票</btn>
          <btn to="/sponsor">支持我們</btn>
        </div>
      </div>

      <mint-box class="has-border">
        <h1>年會主題</h1>
        <img class="cat pad1" :src="'/2022/imgs/cat-in-a-maze.svg'" />
        <div class="pad2">
          <p>Cat in a Maze 參考自 Rat in a Maze 這道經典演算法題目。題目描述一隻老鼠要走迷宮，在給定了迷宮形狀的前提下，要努力找出走出迷宮的出路。「Rat in a
            Maze」這句話切實地反映了劇烈動盪時代下的學生們在面對未來的生涯發展時，猶如一隻無法逃避、勢必得進入體制這一迷宮的老鼠。</p>
          <p class="rat-center">但是⋯⋯我們真的只能當老鼠嗎？</p>
          <p>
            不如，像貓咪一樣思考？以貓咪的個性，第一直覺想到的會是遇到迷宮時，直接破壞迷宮離開，或者是使用我們想不到的方式解決迷宮。同時貓咪相較於老鼠，對一切事物充滿好奇、敢於探索未知事物，不畏強權挑戰一切，這是貓咪獨特的個性。<br>
            對於學生而言，充滿好奇、敢於探索未知事物相當重要，畢竟自己的未來要由自己來定義。當大家陷入迷惘的時候，比起使用老鼠比擬大家已經陷入迷惘，不如讓我們可以看看貓咪、學學貓咪，換個思維邏輯去面對迷惘的現況，保持著好奇心與探索的樂趣。又或者跳脫框架，創造屬於自己的美好未來。
          </p>
        </div>
      </mint-box>

      <mint-box class="has-border">
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
            SITCON 歡迎不同身分、來自不同背景的與會者，也非常鼓勵女性、性少數與多元背景的參與者。為了讓大家都能愉快的參加 SITCON，我們要求所有參與者閱讀年會的行為準則（<a @click.prevent="cocModal = true">Code of Conduct</a>），共同創造一個友善的環境。
          </p>
        </div>
      </mint-box>

      <div class="wool-cat-two">
        <cat-flat-left class="cat" />
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

      <img class="border-item left wool" style="display: none;" :src="'/2022/imgs/cats/wool-orange-flip.svg'" />
      <cat-head-black class="border-item right cat" style="display: none; height: auto;"  />
    </div>

    <ArrowDialog v-model="cocModal">
      <h1>行為準則</h1>
      <h2 class="pad4">Code of Conduct</h2>
      <div class="pad3">
      		<p>SITCON 冀望打造屬於學生自己的舞台，而我們也致力於為社群中的每位成員提供更友善、開放的環境。我們相信每位參與社群活動的夥伴都值得被尊重，而我們會盡力提供最安全的環境，讓參與 SITCON 盛會的每位朋友能夠認識個體間的差異、在社群中相互扶助、並鼓勵每個人揮灑屬於自己生命的色彩。</p>
          <p>因此，若有幸能在 SITCON 社群與您見面，無論您是以與會者、贊助商、工作人員、或是講者的身分參加活動，我們都希望您遵守以下的行為準則：</p>
          <ul class="pad4">
            <li>尊重每一位參與者，將對方的感受放在心上。</li>
            <li>避免使用帶有侮辱、歧視、或具有潛在騷擾意涵的文字、言語及肢體動作。</li>
            <li>多關心周遭的社群夥伴，適度詢問對方是否需要協助。</li>
            <li>當遭遇危險、或發現事情不對勁時，適時尋求工作人員的支援與協助。</li>
            <li>在活動裡多交朋友，珍惜彼此相聚的時光！</li>
          </ul>
          <p>以下的行為是不被社群所容忍的：</p>
          <ul class="pad4">
            <li>歧視行為，包含針對性別、性向、種族、外貌、宗教、年齡、身體狀況或個人身分的挑釁、冒犯、錯稱或差別待遇。</li>
            <li>騷擾行為，包含性騷擾、造成當事人反感的綽號或肢體接觸，以及任何形式的言語或肢體霸凌。</li>
            <li>公開發表、展示或放映含有侮辱、歧視、仇恨、暴力、或是性暗示的言論或影像。</li>
            <li>無故干擾議程或活動的正常進行，無視工作人員或與會者的制止。</li>
            <li>干擾、攻擊活動場地網路，未經同意蒐集或散佈個人資料。</li>
            <li>其他違反法律的行為。</li>
          </ul>
          <p>為了確保每位參與者的安全，我們將恪守以上規則。違反行為準則的參與者，我們將採取必要且合理的手段予以介入，包含但不限於將參與者請離現場、自相關名冊除名或列為不受歡迎對象，或在必要時移送警察機關法辦。若您或他人遇到了以上情況、或是有任何其他顧慮，都請立即尋求 SITCON 工作人員的協助。</p>
          <p>我們誠摯地邀請來到 SITCON 的朋友一同履行以上承諾，將 SITCON 打造為更友善、更溫暖的所在；讓每一位參與者，都能在社群的交流中共同成長、在人與人的互動中找到自信——而這正是我們所珍惜的、屬於學生社群的真正精神。</p>
      </div>
    </ArrowDialog>
  </div>
</template>
<script>
import { useDialogStore } from '../store/dialog'
import * as d3 from "d3";
export default {
  setup() {
    const dialogStore = useDialogStore()
    return { dialogStore }
  },
  data() {
    return {
      cocModal: false,
      timers: []
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.wrapDrawBorder()
    })
    window.addEventListener('resize', this.wrapDrawBorder)
  },
  unmounted() {
    this.clearTimers()
    window.removeEventListener('resize', this.wrapDrawBorder)
  },
  methods: {
    clearTimers() {
      for(const timer of this.timers) {
        clearTimeout(timer)
      }
    },
    wrapDrawBorder() {
      this.clearTimers()
      this.drawBorder()
      for (let i of [100, 1000, 5000, 10000]) {
        this.timers.push(setTimeout(() => this.drawBorder(), i))
      }
    },
    drawBorder() {
      const container = this.$refs['border-container']
      const { height: ctH } = container.getBoundingClientRect()
      const { innerWidth: vW } = window
      const small_size = window.innerWidth <= 768
      const stroke = !small_size ? 8 : 4
      const radius = parseInt(window.getComputedStyle(container).getPropertyValue('--border-radius'))
      const short_radius = radius * .3

      const { width: bW, height: bH } = container.querySelector('.banner').getBoundingClientRect()
      const bGap = (vW - bW) / 2
      const { width: iW, height: iH } = container.querySelector('.info').getBoundingClientRect()
      const iGap = (vW - iW) / 2
      const mbxs = Array.from(document.querySelectorAll('.mint-box'), el => el.getBoundingClientRect())
      const mbHs = mbxs.map(rect => rect.height + radius * 2)
      const mbWs = mbxs.map(rect => rect.width)
      const mbW = mbWs[0]
      const mbGap = (vW - mbW) / 2
      const mbPad = mbGap - radius
      const { height: catH } = container.querySelector('.wool-cat-two').getBoundingClientRect()
      const short_gap = mbPad < 1.8 * radius

      function sign(x) { return x === 0 ? 0 : x > 0 ? 1 : -1; }
      function genLine(x, y, dx, dy, { hasArrow = false, sFirst = false, sLast = false } = {}) {
        sFirst &= short_gap
        sLast &= short_gap
        const xs = dx.reduce((pv, cv) => pv.concat(pv[pv.length - 1] + cv), [x])
        const ys = dy.reduce((pv, cv) => pv.concat(pv[pv.length - 1] + cv), [y])
        let arrow = '', arrow_style = ''
        const rd = radius * 2
        if (hasArrow) {
          const k = .4
          let crd = rd
          if (sFirst) crd = short_radius * 3
          if (dx[0] && !dy[0]) {
            const s = sign(dx[0])
            x += s * stroke / 2
            arrow += `M${x},${y} L${x + crd * k * s},${y - crd * k} `
            arrow += `M${x},${y} L${x + crd * k * s},${y + crd * k} `
            x += s * stroke / 2
          } else {
            const s = sign(dy[0])
            y += s * stroke / 2
            arrow += `M${x},${y} L${x - crd * k},${y + crd * k * s} `
            arrow += `M${x},${y} L${x + crd * k},${y + crd * k * s} `
            y += s * stroke / 2
          }
        }
        let line = ''
        line += `M${x},${y} `
        for (let i = 0, sz = dx.length; i < sz; i++) {
          let cx = 0, cy = 0
          let crd = rd
          if (sFirst && (i == 0) || sLast && (i + 2 == sz)) crd = short_radius
          const isLast = i + 1 == sz
          if (!isLast) {
            if (dx[i]) cx = crd * sign(dx[i])
            if (dy[i]) cy = crd * sign(dy[i])
          }
          line += `L${xs[i + 1] - cx},${ys[i + 1] - cy} `
          if (!isLast) {
            let nx = cx + crd * sign(dx[i + 1])
            let ny = cy + crd * sign(dy[i + 1])
            line += `q${cx},${cy} ${nx},${ny}`
          }
        }
        return { line, arrow, arrow_style }
      }
      function genBlock(u, y, h) {
        const rd = short_gap ? short_radius : radius
        const blockPad = mbPad - rd
        const x = u > 0 ? 0 : vW
        y += rd
        const dx = [blockPad*u, 0, -blockPad*u]
        const dy = [0, h-rd*2, 0]
        const xs = dx.reduce((pv, cv) => pv.concat(pv[pv.length - 1] + cv), [x])
        const ys = dy.reduce((pv, cv) => pv.concat(pv[pv.length - 1] + cv), [y])
        let arrow = '', arrow_style = ''
        let line = ''
        line += `M${x},${y} `
        for (let i = 0, sz = dx.length; i < sz; i++) {
          let cx = 0, cy = 0
          const isLast = i + 1 == sz
          if (!isLast) {
            if (dx[i]) cx = rd * sign(dx[i])
            if (dy[i]) cy = rd * sign(dy[i])
          }
          line += `L${xs[i + 1] - cx},${ys[i + 1] - cy} `
          if (!isLast) {
            let nx = cx + rd * sign(dx[i + 1])
            let ny = cy + rd * sign(dy[i + 1])
            line += `q${cx},${cy} ${nx},${ny}`
          }
        }
        return { line, arrow, arrow_style }
      }

      const p = [.5, .3, .8, .6, .7, .8]
      const of = short_gap ? short_radius * .8 : 0

      function genPath1() {
        const x = bGap
        const y = bH
        const dx = [bW + radius, 0, -radius - bGap - bW + mbPad + of, 0, -mbPad - of]
        const dy = [0, iH, 0, mbHs[0] * p[0] + of, 0]
        return genLine(x, y, dx, dy, { hasArrow: true, sLast: true })
      }

      function genPath2() {
        const x = mbPad
        const y = bH + iH + mbHs[0] + mbHs[1] * p[1]
        const dx = [0, mbW + radius * 2 - of, 0, mbPad + of]
        const dy = [-mbHs[1] * p[1], 0, -mbHs[0] + radius / 2 - of, 0]
        return genLine(x, y, dx, dy, { hasArrow: true, sLast: true })
      }

      function genPath3() {
        const x = 0
        const y = bH + iH + mbHs[0] + mbHs[1] + mbHs[2] * p[2] + of
        const dx = [mbPad + of, 0, mbW + radius * 2 - of * 2, 0, mbPad + of]
        const dy = [0, -mbHs[2] * p[2] - of, 0, mbHs[2] * p[3] + of, 0]
        return genLine(x, y, dx, dy, { hasArrow: true, sFirst: true, sLast: true })
      }

      function genPath4() {
        const x = vW
        const y = bH + iH + mbHs[0] + mbHs[1] + mbHs[2] + catH + mbHs[3] + of
        const dx = [-mbPad-of, 0, mbPad+of]
        const dy = [0, -(radius * 2 + mbHs[3]) - of * 2, 0]
        return genLine(x, y, dx, dy, { hasArrow: true, sFirst: true, sLast: true })
      }

      function genItem1() {
        const u = 1
        const y = bH + iH
        const h = mbHs[0]*p[0]
        return genBlock(u, y, h)
      }

      function genItem2() {
        const u = -1
        const y = bH + iH + radius / 2
        const h = mbHs[0] * p[5]
        return genBlock(u, y, h)
      }

      function genItem3() {
        const u = 1
        const y = bH + iH + mbHs[0] + mbHs[1]*(p[1]+0.35)
        const h = mbHs[1]*(1-p[1]-0.35) + mbHs[2] * p[2]
        return genBlock(u, y, h)
      }

      function genItem4() {
        const u = -1
        const y = bH + iH + mbHs[0] + mbHs[1]*p[4]
        const h = mbHs[1]*(1-p[4]) + mbHs[2] * p[3]
        return genBlock(u, y, h)
      }

      function genItem5() {
        const u = -1
        const y = bH + iH + mbHs[0] + mbHs[1] + mbHs[2] + catH - radius * 2
        const h = mbHs[3] + radius * 2
        return genBlock(u, y, h)
      }
      const borderContainer = d3.select(container)
      // clrar existing svg border
      borderContainer.selectAll("svg.border").remove()
      // draw
      const svg = borderContainer.append('svg')
      const height = ctH + mbHs[4]
      svg.attr('width', `${vW}px`)
      svg.attr('height', `${height}px`)
      svg.attr('viewBox', `0 0 ${vW} ${height}`)
      svg.attr('class', 'border')

      const paths = [
        genPath1(),
        genPath2(),
        genPath3(),
        genPath4(),
      ]
      for (const { line, arrow, arrow_style } of paths) {
        svg.append("path").attr("d", line).attr("stroke-width", stroke).attr("stroke", "#A89B85")
        if (arrow) svg.append("path").attr("d", arrow).attr("stroke-width", stroke).attr("stroke", "#A89B85").attr("style", arrow_style)
      }
      const items = [
        genItem1(),
        genItem2(),
        genItem3(),
        genItem4(),
        genItem5(),
      ]
      for (const { line } of items) {
        svg.append("path").attr("d", line).attr("fill", "#82D357")
      }

      const leftWool = container.querySelector('.border-item.left.wool')
      leftWool.style.top = `${bH + iH + mbHs[0] + mbHs[1] * (p[1]+0.05)}px`
      leftWool.style.width = `${mbGap}px`
      leftWool.style.display = null
      const rightCat = container.querySelector('.border-item.right.cat')
      rightCat.style.top = `${bH + iH + mbHs[0] + mbHs[1] * .5}px`
      rightCat.style.right = `${-mbGap}px`
      rightCat.style.width = `${mbGap}px`
      rightCat.style.display = null
    }
  }
}
</script>
<style lang="sass">
.mint-box.sponsors-items.is-index
  --border-radius: 32px
  @media screen and (max-width: 768px)
    --border-radius: 16px
  width: min(1280px, calc(100vw - var(--border-radius)*4))
  margin-left: auto
  margin-right: auto
</style>
<style lang="sass" scoped>
h1, h2, h3, h4, h5, h6
  margin: 0
.border-container
  position: relative
  width: min(1280px, calc(100vw - var(--border-radius)*4))
  --background-gap: calc((100vw - min(1280px, calc(100vw - var(--border-radius)*4)))/2)
  --border-radius: 32px
  @media screen and (max-width: 768px)
    --border-radius: 16px
  .border-item
    position: absolute
    max-width: calc(var(--border-radius)*4)
    &.left.wool
      transform: translateX(-100%) scale(0.8)
    &.right.cat
      transform: scaleX(-1) rotate(90deg) scale(2) translateY(30%)
  &:deep(svg.border)
    max-width: unset
    position: absolute
    top: 0
    left: calc(-1*var(--background-gap))
    pointer-events: none
    stroke-linecap: round
    fill: none
@media screen and (min-width: 769px)
  .pad1
    padding: 0 40px
  .pad2
    padding: 0 80px
  .pad3
    padding-left: 24px
.pad4
  padding-left: 1em
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
  @media screen and (max-width: 768px)
    gap: 8px
.name
  text-align: right
.banner
  width: 95%
  margin: 0 auto
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
    align-items: end
    justify-content: flex-start
    @media screen and (max-width: 768px)
      grid-template-columns: 1fr 3fr
      grid-gap: 4px
    svg.cat
      height: 100%
      width: 100%
      transform: translateY(5px)
.info
  margin-left: 5%
  padding: var(--border-radius) 0
  display: grid
  grid-template-columns: 10fr 0.1fr 1fr 0.1fr 1fr 0.2fr auto 0.6fr
  @media screen and (max-width: 768px)
    grid-template-columns: 2fr 0.2fr 1fr 0.1fr 1fr 0.6fr auto 1.1fr
  grid-template-areas: "text . arrow1 . arrow2 . btns ."
  align-items: center
  .text
    line-height: 1.2
    grid-area: text
    word-break: keep-all
    @media screen and (max-width: 768px)
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
    .btn
      font-size: 30px
      border-radius: 5em
      @media screen and (max-width: 768px)
        font-size: 20px
  + .mint-box
    margin-top: var(--border-radius)
.mint-box
  &.has-border
    margin-bottom: calc(var(--border-radius)*2)
  .btn
    @media screen and (max-width: 768px)
      font-size: 12px
    &:hover
      color: #383838
.wool-cat-two
  width: 80%
  margin: 0 auto 0 auto
  padding-top: 80px
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
