<template>
  <div class="container">
    <nav-bar />

    <arrow-box>
      <block-title>交通方式</block-title>
      <mint-box>
        <div class="location-title">地點</div>
        <p class="location-description">中央研究院人文社會科學館<br />
          台北市南港區研究院路二段 128 號</p>
        <client-only>
          <location-map />
        </client-only>
        <img class="traffic-flow" :src="'/2022/imgs/traffic/traffic-flow.svg'" />
        <img class="traffic-flow-mobile" :src="'/2022/imgs/traffic/traffic-flow-mobile.svg'" />
      </mint-box>
    </arrow-box>
    <footer-item />
  </div>
</template>
<style lang="sass" scoped>
.location-title
  font-size: 32px
  font-weight: bold
  text-align: center
.location-description
  font-size: 24px
  line-height: 1.5
  text-align: center
  margin-top: 0
.traffic-flow,.traffic-flow-mobile
  margin-top: 16px
  width: 100%
.traffic-flow-mobile
  display: none
@media (max-width: 768px)
  .traffic-flow
    display: none
  .traffic-flow-mobile
    display: block
</style>