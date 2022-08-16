<template>
  <div class="stats-items" ref="stats_items">
    <div class="stats-item" :class="{ highlight: highlightItem == 0 }">
      <div class="img" />
      <div class="content">
        超過 <span class="count">{{ count.audience.toLocaleString() }}<span class="unit">名</span></span> 與會者
      </div>
    </div>
    <div class="stats-item" :class="{ highlight: highlightItem == 1 }">
      <div class="img" />
      <div class="content">
        <span class="count">{{ count.speaker.toLocaleString() }}<span class="unit">名</span></span> 學生講者
      </div>
    </div>
    <div class="stats-item" :class="{ highlight: highlightItem == 2 }">
      <div class="img" />
      <div class="content">
        <span class="count">{{ count.speaker.toLocaleString() }}<span class="unit">場</span></span> 聚會與講座
      </div>
      <div class="content">
        <span class="count">{{ count.camp.toLocaleString() }}<span class="unit">場</span></span> 夏令營
      </div>
    </div>
    <div class="stats-item" :class="{ highlight: highlightItem == 3 }">
      <div class="img" />
      <div class="content">
        扶植近 <span class="count">{{ count.volunteer.toLocaleString() }}<span class="unit">名</span></span> 資訊推廣志工
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      raw_count: {
        audience: 10000,
        speaker: 350,
        lecture: 400,
        camp: 7,
        volunteer: 1000
      },
      count: {
        audience: 0,
        speaker: 0,
        lecture: 0,
        camp: 0,
        volunteer: 0
      },
      highlightItem: 0
    }
  },
  mounted() {
    this.countData();
    document.addEventListener('scroll', this.scrollListener);
  },
  unmounted() {
    document.removeEventListener('scroll', this.scrollListener);
  },
  methods: {
    countData() {
      // counting animation
      let count = this.count;
      let raw_count = JSON.parse(JSON.stringify(this.raw_count));
      for (let key in count) {
        let count_interval = setInterval(() => {
          if (count[key] < raw_count[key]) {
            count[key] += Math.floor(raw_count[key] / 100);
            if (count[key] == 0) {
              count[key] = raw_count[key];
            }
          } else {
            count[key] = raw_count[key]
            clearInterval(count_interval);
          }
        }, 10);
      }
    },
    scrollListener() {
      let res = -1
      for (let [index, item] of Object.entries(this.$refs.stats_items.children)) {
        if (item.getBoundingClientRect().y - window.innerHeight / 2 <= 0) {
          res = index
        }
        if (res == 3) {
          if ((item.getBoundingClientRect().y / (window.innerHeight / 2)) < 0.4) {
            res = 4
          }
        }
      }
      this.highlightItem = res
    }
  }
};
</script>

<style lang="sass" scoped>
.stats-items
  display: grid
  gap: 16px
  grid-template-columns: repeat(4, 1fr)
  margin: 16px 0
  @media (max-width: 1280px)
    grid-template-columns: repeat(2, 1fr)
  @media (max-width: 640px)
    grid-template-columns: 1fr
  .stats-item
    background: #000
    display: flex
    justify-content: center
    align-items: center
    border-radius: 16px
    gap: 16px
    position: relative
    overflow: hidden
    transition: all .4s ease
    &:nth-child(1)
      --background-image: url(/2022/imgs/stats-block/1.jpg)
      --background-position: center bottom
    &:nth-child(2)
      --background-image: url(/2022/imgs/stats-block/2.jpg)
      --background-position: center
    &:nth-child(3)
      --background-image: url(/2022/imgs/stats-block/3.jpg)
      --background-position: center
    &:nth-child(4)
      --background-image: url(/2022/imgs/stats-block/4.jpg)
      --background-position: center
    .img
      position: absolute
      top: 0
      left: 0
      width: 100%
      height: 100%
      border-radius: 16px
      background-image: linear-gradient(to bottom, transparent 50%, rgba(0,0,0,.8) 100%), var(--background-image)
      background-size: cover
      background-position: var(--background-position)
      transition: all .4s ease
    @media (max-width: 640px)
      &.highlight
        transform: scale(1.05)
        box-shadow: 0 5px 10px rgba(0,0,0,.25)
        .img
          opacity: 0.5
          transform: scale(1.2)
        .content
          padding-top: calc(var(--offset) / 2 + var(--padding))
          padding-bottom: calc(var(--offset) / 2 + var(--padding))
          transform: scale(1.2)
          justify-content: center
    @media (min-width: 640px)
      &:hover
        .img
          opacity: 0.5
          transform: scale(1.2)
        .content
          padding-top: calc(var(--offset) / 2 + var(--padding))
          padding-bottom: calc(var(--offset) / 2 + var(--padding))
          transform: scale(1.2)
          justify-content: center
    .content
      --offset: 128px
      --padding: 16px
      display: flex
      flex-direction: column
      justify-content: flex-end
      align-items: center
      line-height: 1.3
      font-size: 16px
      color: #fff
      padding: var(--padding)
      padding-top: calc(var(--offset) + var(--padding))
      height: 100%
      text-shadow: 0 0 8px rgba(0,0,0,.5)
      font-weight: 300
      transition: all .4s ease
      z-index: 1
      @media (max-width: 768px)
        font-size: 12px
        --offset: 72px
      .count
        font-size: 2em
        font-weight: bold
        text-align: center
        .unit
          font-size: 1rem
          font-weight: 300
          text-align: center
          margin-left: .25em
          display: inline-block
</style>