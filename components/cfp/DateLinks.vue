<template>
  <div class="date-links">
    <div class="date">
      <h3>2022</h3>
      <h1>09 . 04</h1>
      <div class="line" />
      <h3>中央研究院</h3>
      <h1>人文社會科學館</h1>

    </div>
    <div class="links">
      <cfp-round-btn to="/cfp/standard">一般議程</cfp-round-btn>
      <cfp-round-btn to="/cfp/undefined">開放式議程</cfp-round-btn>
      <cfp-round-btn @click="scrollTo">贊助資訊</cfp-round-btn>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    scrollTo() {
      window.document.getElementById(`request-for-sponsorship`).scrollIntoView({ behavior: "smooth" })
    }
  }
}
</script>
<style lang="sass" scoped>

.date-links
  position: relative
  .date
    line-height: 1
    color: #32E0C4
    .line
      height: 100px
      width: 1px
      background-color: #32E0C4
      margin-left: 26px
      @media screen and (max-width: 768px)
        background-color: transparent
        height: 8px
  .links
    position: absolute
    top: 0
    right: 0
</style>