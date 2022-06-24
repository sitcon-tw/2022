<template>
  <div class="container">
    <GeneralHead
      page-title="贊助"
      title="贊助 | SITCON X"
      description="在 SITCON 的第 X 週年，期望我們秉持初衷——讓學生們分享與交流知識，把各地學生串連起來的 X 字路口——也期望每個人能夠向貓咪學習，換個思維邏輯面對迷惘的現況，保持著好奇心與探索的樂趣，跳脫框架創造屬於自己的美好未來！"
      image="https://sitcon.org/2022/imgs/og.jpg" />

    <arrow-box>
      <block-title>支持我們</block-title>
      <mint-box class="header-box">
        <p>十年以來，SITCON 一直秉持著不向與會者收費的原則來舉辦資訊研討會，不僅創造許多學生們交流、教學互長的機會，也帶領無數學子踏入資訊的殿堂。</p>
        <stats-block />
        <p>而維繫學生們的資訊交流平台，除了有賴志工們的努力及貢獻，亦十分需要在資金上的支持。

          教育不只在課本裡，如果您也認同 SITCON 的理念，歡迎點擊下方「<a href="https://ocf.neticrm.tw/civicrm/contribute/transact?reset=1&id=55" target="_blank">個人贊助</a>」或「<a
            href="https://i.sitcon.org/2022cfs-form" target="_blank">索取贊助徵求書</a>」按鈕以了解詳細的合作方案，或是寄信至 <a
            href="mailto:contact@sitcon.org">contact@sitcon.org</a>
          與我們聯繫，商酌更多的合作方式！

          扶持資訊教育，讓我們一同使更多的臺灣學子能在舞台上展現自我、相互成長！</p>
        <div class="header-box-btns">
          <btn href="https://ocf.neticrm.tw/civicrm/contribute/transact?reset=1&id=55" large>個人贊助</btn>
          <btn href="https://i.sitcon.org/2022cfs-form" large>索取贊助徵求書</btn>
        </div>
      </mint-box>
    </arrow-box>
    <arrow-box>
      <block-title>主辦單位</block-title>
      <mint-box>
        <div class="sponsor-name">{{ sponsors.main.name }}</div>
        <img class="sopnsor-logo" :src="'/2022/imgs/logo.png'" />
        <Markdown class="sponsor-description" :content="sponsors.main.description" />
      </mint-box>
    </arrow-box>
    <arrow-box>
      <block-title>共同主辦</block-title>
      <div class="sponsor-items co_org">
        <mint-box class="sponsor-item" v-for="item of sponsors.co_org" :id="item.id" :href="item.link">
          <div class="sponsor-name">{{ item.name }}</div>
          <img class="sopnsor-logo" :src="`/2022/imgs/sponsors/${item.logo}`" />
          <Markdown class="sponsor-description" :content="item.description" />
        </mint-box>
      </div>
    </arrow-box>
    <arrow-box>
      <block-title>協辦單位</block-title>
      <div class="sponsor-items sup_org">
        <mint-box class="sponsor-item" v-for="item of sponsors.sup_org" :id="item.id" :href="item.link">
          <div class="sponsor-name">{{ item.name }}</div>
          <img class="sopnsor-logo" :src="`/2022/imgs/sponsors/${item.logo}`" />
          <Markdown class="sponsor-description" :content="item.description" />
        </mint-box>
      </div>
    </arrow-box>
    <arrow-box v-for="data of [...sponsors.sponsors, ...sponsors.thanks]">
      <block-title>{{ data.type }}</block-title>
      <div class="sponsor-items" :class="`type-${data.type}`">
        <mint-box class="sponsor-item" v-for="item of data.org" :id="item.id" :href="item.link">
          <div class="sponsor-name">{{ item.name }}</div>
          <img class="sopnsor-logo" :src="`/2022/imgs/sponsors/${item.logo}`" />
          <Markdown class="sponsor-description" :content="item.description" />
        </mint-box>
      </div>
    </arrow-box>
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
.header-box
  font-size: 22px
  @media (max-width: 768px)
    font-size: 16px

.header-box-btns
  margin-top: 16px
  display: flex
  gap: 16px
  align-items: center
  justify-content: center
  @media (max-width: 768px)
    flex-direction: column
.sponsor-name
  font-size: 24px
  font-weight: bold
  text-align: center
.sponsor-description
  font-size: 18px
  @media (max-width: 768px)
    font-size: 14px
.sopnsor-logo
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
    gap: 16px
  &.type-新芽級,&.type-特別感謝,&.type-媒體夥伴
    grid-template-columns: repeat(3, 1fr)
    @media (max-width: 768px)
      grid-template-columns: repeat(2, 1fr)
    @media (max-width: 512px)
      grid-template-columns: repeat(1, 1fr)
  &.co_org
    grid-template-columns: repeat(2, 1fr)
    @media (max-width: 768px)
      grid-template-columns: 1fr
  .sponsor-item
    margin-top: 0 !important
</style>
