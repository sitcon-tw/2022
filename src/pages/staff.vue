<template>
  <div class="container">
    <nav-bar />
    <div class="box" v-for="item of teams" :key="item.name">
      <h1>{{ item.name }}</h1>
      <p>{{ item.intro }}</p>
      <div class="member-items">
        <div class="member-item" v-for="item of item.members">
          <img :src="`https://www.gravatar.com/avatar/${item.emailHash}?s=320&d=https://i.imgur.com/IIG5XiW.jpg&r=g`" />
          <div class="member-name">{{ item.name }}</div>
          <div class="member-intro">{{ item.type }}</div>
        </div>
      </div>
    </div>
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
.member-items
  display: grid
  grid-template-columns: repeat(auto-fit, 80px)
  grid-gap: 20px
  margin-top: 20px
  .member-item
    display: flex
    flex-direction: column
    align-items: center
    justify-content: center
    img
      width: 100%
</style>