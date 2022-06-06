<template>
  <div class="container">
    <nav-bar />

    <arrow-box>
      <block-title>交通方式</block-title>
      <mint-box class="with-cat">
        <div class="location-title">地點</div>
        <p class="location-description">中央研究院人文社會科學館<br />
          台北市南港區研究院路二段 128 號</p>
        <client-only>
          <location-map />
        </client-only>
        <img class="traffic-flow" :src="'/2022/imgs/traffic/traffic-flow.svg'" />
        <img class="traffic-flow-mobile" :src="'/2022/imgs/traffic/traffic-flow-mobile.svg'" />
        <img class="the-white-neko" :src="'/2022/imgs/cats/cat3.svg'" />
      </mint-box>
    </arrow-box>
    <footer-item />
  </div>
</template>
<style lang="sass" scoped>
.with-cat
  position: relative
  .the-white-neko
    position: absolute
    --size: 150px
    top:  calc(var(--size) * -0.6)
    height: calc(var(--size) * 0.6)
    right: 5vw
    width: var(--size)
    object-fit: cover
    object-position: top right
    @media (max-width: 768px)
      --size: 100px
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