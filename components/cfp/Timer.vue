<template>
  <div>
    <div class="timer-title text-spacing">距離投稿截止還有：</div>
    <div class="timer">
      <div class="timer-item">
        <div class="timer-number">{{ dd }}</div>
        <div class="timer-label">DAYS</div>
      </div>
      <div class="timer-item">
        <div class="timer-number">{{ hh }}</div>
        <div class="timer-label">HOURS</div>
      </div>
      <div class="timer-item">
        <div class="timer-number">{{ mm }}</div>
        <div class="timer-label">MINUTES</div>
      </div>
      <div class="timer-item">
        <div class="timer-number">{{ ss }}</div>
        <div class="timer-label">SECONDS</div>
      </div>
    </div>
    <div class="timer-title">截止日期：即日起至6月5日（日）日出</div>

  </div>
</template>
<style lang="sass" scoped>

.timer-title
  font-size: 16px
  text-align: center
  font-weight: 100
  margin: 16px 0
  letter-spacing: 0.05em
  &.text-spacing
    letter-spacing: 0.5em
    @media screen and (max-width: 768px)
      letter-spacing: 0.05em
.timer
  --alpha: 0.5
  display: flex
  border: 1px solid rgba(222, 222, 222, var(--alpha))
  padding: 24px 0
  max-width: 660px
  margin: 0 auto
  @media screen and (max-width: 768px)
    --alpha: 0.2
    padding: 16px 0
  .timer-item
    width: calc(100% / 4)
    text-align: center
    &:not(:first-child)
      border-left: 1px solid rgba(222, 222, 222, var(--alpha))
    .timer-number
      font-size: 64px
      font-family: 'Barlow', sans-serif
      line-height: 1
      font-variant-numeric: tabular-nums
      @media screen and (max-width: 768px)
        font-size: 32px
    .timer-label
      font-size: 16px
      font-weight: 300
      font-family: 'Noto Sans TC', sans-serif
      color: #fff
      @media screen and (max-width: 768px)
        font-size: 12px
</style>
<script>
export default {
  data() {
    return {
      endedTime: new Date('2022-06-05T05:04:00+08:00'),
      dd: '88',
      hh: '88',
      mm: '88',
      ss: '88',
      timer: null
    }
  },
  created() {
    this.countdown()
  },
  mounted() {
    this.timer = setInterval(this.countdown, 1000)
  },
  beforeDestroy() {
    clearInterval(this.timer)
  },
  methods: {
    countdown() {
      const now = new Date()
      const diff = this.endedTime - now
      if (diff <= 0) {
        clearInterval(this.timer)
        return
      }
      this.dd = Math.floor(diff / 1000 / 60 / 60 / 24)
      this.hh = Math.floor(diff / 1000 / 60 / 60 % 24)
      this.mm = Math.floor(diff / 1000 / 60 % 60)
      this.ss = Math.floor(diff / 1000 % 60)
      // fill 0 to 2 digits
      this.dd = ('0' + this.dd).slice(-2)
      this.hh = ('0' + this.hh).slice(-2)
      this.mm = ('0' + this.mm).slice(-2)
      this.ss = ('0' + this.ss).slice(-2)
    }
  }
}
</script>