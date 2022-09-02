<template>
  <div class="container">
    <GeneralHead
      page-title="交通方式"
      title="交通方式 | SITCON X"
      description="從各地抵達年會所在地（中研院人社館）的各種方法"
      image="https://sitcon.org/2022/imgs/og.jpg" />
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
        <div class="the-white-neko">
          <cat-head-black />
        </div>
      </mint-box>
    </arrow-box>
  </div>
</template>
<style lang="sass" scoped>
.with-cat
  position: relative
  .the-white-neko
    position: absolute
    --size: 150px
    top:  calc(var(--size) * -0.6)
    right: 5vw
    height: calc(var(--size) * 0.6)
    width: var(--size)
    overflow: hidden
    &:deep(svg)
      height: unset
    object-fit: cover
    object-position: top right
    @media (max-width: 768px)
      --size: 100px
.location-title
  font-size: 32px
  font-weight: bold
  text-align: center
  @media (max-width: 768px)
    font-size: 24px
.location-description
  font-size: 24px
  line-height: 1.5
  text-align: center
  margin-top: 0
  @media (max-width: 768px)
    font-size: 18px
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
