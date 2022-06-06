<template>
  <div>
    <nav-bar />
    <GeneralHead
      page-title="SITCON 團隊"
      title="SITCON 團隊 | SITCON X"
      description="在 SITCON 的第 X 週年，期望我們秉持初衷——讓學生們分享與交流知識，把各地學生串連起來的 X 字路口——也期望每個人能夠向貓咪學習，換個思維邏輯面對迷惘的現況，保持著好奇心與探索的樂趣，跳脫框架創造屬於自己的美好未來！"
      image="https://sitcon.org/2022/imgs/og.jpg" />
    <div class="container">
      <arrow-box class="header-box">
        <p>
          SITCON 年會每年皆是許多志工奉獻時間與精神所舉辦，沒有大家的付出，就不可能會有如此內容豐富且高品質的年會， 希望大家在參加之餘，也不要忘記背後工作人員的付出。
        </p>
        <p>
          若你對參與 SITCON 年會的籌備有興趣，歡迎填寫跳坑表單或是關注 SITCON 的郵件論壇，明年的籌備開始時，你就會收到相關的資訊！
        </p>
        <div class="header-box-btns">
          <btn href="#" large>跳坑表單</btn>
          <btn href="https://groups.google.com/g/sitcon-general" large>郵件論壇</btn>
        </div>
        <div class="header-box-cat">
          <img :src="'/2022/imgs/cats/cat2_1.svg'" />
        </div>
      </arrow-box>
    </div>
    <div ref="border-container" class="border-container">
      <div class="team-box" v-for="({ intro, members }, name, i) of teams" :key="name" :class="[`${i % 2 == 0 ? 'odd' : 'even'}`]">
        <div class="inner-box">
          <div class="container">
            <h2 class="team-name">{{ name }}</h2>
            <p class="team-intro">{{ intro }}</p>
            <div class="team-member-items">
              <div class="team-member-item" v-for="item of members">
                <img :src="`https://www.gravatar.com/avatar/${item.emailHash}?s=320&d=https://i.imgur.com/IIG5XiW.jpg&r=g`" />
                <div class="team-member-name">{{ item.name }}</div>
                <div class="team-member-type">{{ item.type }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="team-box last">
        <div class="inner-box"></div>
      </div>
    </div>
    <div class="container">
      <footer-item />
    </div>
  </div>
</template>
<script>
import * as d3 from "d3";
import teams from '@/assets/teams.json'
export default {
  data() {
    return {
      teams
    }
  },
  mounted() {
    this.drawBorder();
    window.addEventListener('resize', this.drawBorder);
  },
  unmounted() {
    window.removeEventListener('resize', this.drawBorder);
  },
  methods: {
    drawBorder() {
      const container = this.$refs['border-container']
      let stroke = 8
      let lineGap = 20
      let gap = (window.innerWidth - Math.min(1280, window.innerWidth / 100 * 95)) / 2
      if (window.innerWidth < 768) {
        gap = window.innerWidth / 100 * 2.5
        stroke = 4
        lineGap = window.innerWidth / 100 * 2.5 / 2
      }
      const radius = parseInt(window.getComputedStyle(container).getPropertyValue('--border-radius'))
      function getPath() {
        // draw a border around the childern
        let x = 0, y = stroke
        let result = `M${x},${y}`
        x = gap - lineGap - radius
        result += `L${x},${y}`
        result += `C`
        result += `${x + radius},${y} `
        x = x + radius
        y = y + radius
        result += `${x},${y} `
        result += `${x},${y} `


        let childList = container.children;
        for (let child of childList) {
          let rect = child.getBoundingClientRect();
          let isLast = child.classList.contains('last');
          let index = [...childList].indexOf(child);
          if (isLast) {
            // last
            x = gap - lineGap
            result += `L`
            result += `${x},${y} `
            result += `C`
            result += `${x},${y} `
            x = gap + radius + lineGap
            y = y + radius + lineGap
            result += `${gap - lineGap},${y} `
            result += ` ${x},${y}`

            x = window.innerWidth
            result += `L${x},${y} `

            // result += `C`
            // result += `${x},${y} `
            // x = x + radius
            // result += `${x},${y} `
            // y = y + radius
            // result += `${x},${y} `

            return result
          }
          if (index == 0) {
            y = rect.bottom - rect.top - radius
          } else if (index % 2 == 0) {
            y += rect.height - radius * 2
          }
          if (index % 2 == 0 && index != 10) {
            // if (index == 0) {
            x = gap - lineGap
            result += `L${x},${y}`
            result += `C`
            result += `${x},${y} `
            result += `${gap - lineGap},${y + radius + lineGap} `
            x = x + radius + lineGap
            y = y + radius + lineGap
            result += ` ${x},${y}`

            x += rect.width - radius * 2 - gap

            result += `L${x},${y}`
            result += `C`
            result += `${x},${y} `
            result += `${x + radius - lineGap},${y} `
            x = x + radius - lineGap
            y = y + radius
            result += ` ${x},${y}`
          }
          if (index % 2 == 1) {
            y = y + rect.height - radius * 2 - lineGap
            result += `L${x},${y}`

            result += `C`
            result += `${x},${y} `
            result += `${x},${y + radius - lineGap} `
            x = x - radius
            y = y + radius - lineGap
            result += ` ${x},${y}`

            x = x - (rect.width - gap * 2) + lineGap + radius * 2
            result += `L${x},${y}`

            result += `C`
            result += `${x},${y} `
            result += `${gap - lineGap},${y} `
            x = gap - lineGap
            y = y + radius + lineGap
            result += ` ${x},${y}`
          }
        }
      }

      let borderContainer = d3.select(container);
      borderContainer.attr("style", "position: relative;");

      // clrar existing svg
      borderContainer.selectAll("svg").remove();
      // draw
      let svg = borderContainer.append('svg')
      svg.attr('width', '100%')
      svg.attr('height', '100%')
      svg.attr('style', 'position: absolute; top: 0; left: 0;pointer-events: none;')

      svg.append("path")
        .attr("d", getPath())
        .attr("stroke", "#A89B85")
        .attr("fill", "none")
        .attr("stroke-width", stroke)
    }
  }
}
</script>
<style lang="sass" scoped>
.header-box
  font-size: 22px
  margin-bottom: 32px
  @media (max-width: 768px)
    font-size: 16px
  .header-box-cat
    position: absolute
    top: 0
    right: 0
    transform: translate(80px,-75px)
    width: 200px
    height: 200px
    @media (max-width: 768px)
      width: 100px
      height: 100px
      transform: translate(40px, -36px)
    img
      width: 100%
      height: 100%
.header-box-btns
  margin-top: 16px
  display: flex
  gap: 16px
  align-items: center
  justify-content: center
.border-container
  --background-gap: calc((100vw - min(1280px,95vw)) / 2)
  --border-radius: 64px
  @media (max-width: 768px)
    --border-radius: 32px
.team-box
  line-height: 1.5
  .container
    padding: 48px
    @media (max-width: 768px)
      padding: 24px
  &.odd
    background-color: #F4EEE1
    color: #373737
    margin-left: var(--background-gap)
    border-radius: var(--border-radius) 0 0 var(--border-radius)
    .inner-box
      margin-left: calc(var(--background-gap) * -1)
  &.even
    background-color: #F4EEE1
    .inner-box
      margin-right: var(--background-gap)
      background-color: var(--background-color)
      border-radius: 0 var(--border-radius) var(--border-radius) 0
      .container
        margin-right: calc((100vw - min(1280px,95vw)) / 2 - var(--background-gap))
  &.last
    background-color: #F4EEE1
    .inner-box
      // margin-right: var(--background-gap)
      background-color: var(--background-color)
      border-radius: 0 0 0 0
      min-height: var(--border-radius)
      .container
        margin-right: calc((100vw - min(1280px,95vw)) / 2 - var(--background-gap))

.team-member-items
  display: grid
  grid-template-columns: repeat(auto-fit, 96px)
  grid-gap: 20px
  margin-top: 20px
  @media (max-width: 768px)
    grid-template-columns: repeat(auto-fit, minmax(72px, 1fr))
  .team-member-item
    display: flex
    flex-direction: column
    align-items: center
    justify-content: top
    text-align: center
    img
      width: 80px
      height: 80px
      object-fit: cover
      border-radius: 100em
      background-color: #fff
    .team-member-name
      font-size: 12px
      font-weight: bold
      margin-top: 4px
    .team-member-type
      font-size: 12px

</style>