<template>
  <nav-bar />
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
        <btn href="#" large>郵件論壇</btn>
      </div>
      <div class="header-box-cat">
        <img :src="'/2022/imgs/cats/cat2_1.svg'" />
      </div>
    </arrow-box>
  </div>
  <div class="team-box" v-for="item of teams" :key="item.name">
    <div class="inner-box">

      <div class="container">
        <h2 class="team-name">{{ item.name }}</h2>
        <p class="team-intro">{{ item.intro }}</p>
        <div class="team-member-items">
          <div class="team-member-item" v-for="item of item.members">
            <img :src="`https://www.gravatar.com/avatar/${item.emailHash}?s=320&d=https://i.imgur.com/IIG5XiW.jpg&r=g`" />
            <div class="team-member-name">{{ item.name }}</div>
            <div class="team-member-type">{{ item.type }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="container">
    <footer-item />
  </div>
</template>
<script>
import teams from '@/assets/teams.json'
export default {
  data() {
    return {
      teams
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
.team-box
  line-height: 1.5
  --background-gap: min(60px, 2.5vw)
  --border-radius: 64px
  @media (max-width: 768px)
    --background-gap: 2.5vw
    --border-radius: 32px
  .container
    padding: 48px
  &:nth-child(odd)
    background-color: #F4EEE1
    color: #373737
    margin-left: var(--background-gap)
    border-radius: var(--border-radius) 0 0 var(--border-radius)
    .inner-box
      margin-left: calc(var(--background-gap) * -1)
  &:nth-child(even)
    background-color: #F4EEE1
    .inner-box
      margin-right: var(--background-gap)
      background-color: var(--background-color)
      border-radius: 0 var(--border-radius) var(--border-radius) 0
      .container
        margin-right: calc((100vw - min(1280px,95vw)) / 2 - var(--background-gap))

.team-member-items
  display: grid
  grid-template-columns: repeat(auto-fit, 96px)
  grid-gap: 20px
  margin-top: 20px
  @media (max-width: 768px)
    grid-template-columns: repeat(auto-fit, minmax(96px, 1fr))
  .team-member-item
    display: flex
    flex-direction: column
    align-items: center
    justify-content: center
    img
      width: 80px
      border-radius: 100em
      background-color: #fff
    .team-member-name
      font-size: 10px
      font-weight: bold
      margin-top: 4px
    .team-member-type
      font-size: 8px

</style>