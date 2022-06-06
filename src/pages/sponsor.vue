<template>
  <div class="container">
    <nav-bar />
    <GeneralHead
      page-title="贊助"
      title="贊助 | SITCON X"
      description="在 SITCON 的第 X 週年，期望我們秉持初衷——讓學生們分享與交流知識，把各地學生串連起來的 X 字路口——也期望每個人能夠向貓咪學習，換個思維邏輯面對迷惘的現況，保持著好奇心與探索的樂趣，跳脫框架創造屬於自己的美好未來！"
      image="https://sitcon.org/2022/imgs/og.jpg" />

    <arrow-box>
      <block-title>主辦單位</block-title>
      <mint-box>
        <div class="sponsor-name">{{ sponsors.main.name }}</div>
        <img class="sponsor-logo" :src="'/2022/imgs/logo.png'" />
        <p class="sponsor-description">{{ sponsors.main.description }}</p>
      </mint-box>
    </arrow-box>
    <arrow-box>
      <block-title>共同主辦</block-title>
      <div class="sponsor-items co_org">
        <mint-box class="sponsor-item" v-for="item of sponsors.co_org" :id="item.id" :href="item.link">
          <div class="sponsor-name">{{ item.name }}</div>
          <img class="sponsor-logo" :src="`/2022/imgs/sponsors/${item.logo}`" />
          <p class="sponsor-description">{{ item.description }}</p>
        </mint-box>
      </div>
    </arrow-box>
    <arrow-box v-for="data of [...sponsors.sponsors, ...sponsors.thanks]">
      <block-title>{{ data.type }}</block-title>
      <div class="sponsor-items">
        <mint-box class="sponsor-item" v-for="item of data.org" :id="item.id" :href="item.link">
          <div class="sponsor-name">{{ item.name }}</div>
          <img class="sponsor-logo" :src="`/2022/imgs/sponsors/${item.logo}`" />
          <p class="sponsor-description">{{ item.description }}</p>
        </mint-box>
      </div>
    </arrow-box>
    <footer-item hide-sponsor />
  </div>
</template>

<script>
import sponsors from '@/assets/sponsors.json';
export default {
  data() {
    return {
      sponsors
    }
  },
};
</script>
<style lang="sass" scoped>
.sponsor-name
  font-size: 24px
  font-weight: bold
  text-align: center
.sponsor-description
  font-size: 18px
  @media (max-width: 768px)
    font-size: 14px
.sponsor-logo
  display: block
  width: 300px
  max-width: 100%
  margin: 0 auto
.sponsor-items
  display: grid
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr))
  gap: 32px
  @media (max-width: 768px)
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr))
  &.co_org
    grid-template-columns: repeat(2, 1fr)
    @media (max-width: 768px)
      grid-template-columns: 1fr
  .sponsor-item
    margin-top: 0
</style>