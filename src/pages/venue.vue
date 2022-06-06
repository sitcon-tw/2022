<template>
  <div class="container">
    <nav-bar />
    <GeneralHead
      page-title="會場地圖"
      title="會場地圖 | SITCON X"
      description="在 SITCON 的第 X 週年，期望我們秉持初衷——讓學生們分享與交流知識，把各地學生串連起來的 X 字路口——也期望每個人能夠向貓咪學習，換個思維邏輯面對迷惘的現況，保持著好奇心與探索的樂趣，跳脫框架創造屬於自己的美好未來！"
      image="https://sitcon.org/2022/imgs/cfp/cfp-og.png" />
    <arrow-box>
      <block-title>會場地圖</block-title>
      <mint-box>
        <h2 class="floor-title">3F</h2>
        <img class="floor-img" :src="'/2022/imgs/venue/3f.svg'" />
      </mint-box>
      <mint-box>
        <h2 class="floor-title">4F</h2>
        <img class="floor-img" :src="'/2022/imgs/venue/4f.svg'" />
      </mint-box>
    </arrow-box>
    <footer-item />
  </div>
</template>

<style lang="sass" scoped>
.floor-title
  font-family: 'Syncopate' , sans-serif
  font-size: 48px
  font-weight: bold
  color: #383838
  transform: translateX(.75em)
  @media (max-width: 768px)
    font-size: 24px
.floor-img
  width: 100%
</style>