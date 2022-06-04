<template>
  <div class="container">
    <nav-bar />
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