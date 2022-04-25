<template>
  <div class="main-title">
    <div class="sitcon-x">SITCON<span class="x" @click="xModal = true">X</span></div>
    <div class="cat">
      Cat in a Maze
    </div>
    <modal v-model="xModal">

      <div class="modal-frame">
        <div class="modal-header">
          <h2 class="text-center title"><span class="clickable" @click="xModal = false">X</span>，代表什麼 ？</h2>

        </div>
        <div class="modal-content">
          <div class="selections">
            <div class="selection-item">（A）英文字母</div>
            <div class="selection-item">（B）羅馬數字</div>
            <div class="selection-item">（C）象形文字</div>
            <div class="selection-item">（D）笛卡兒積</div>
          </div>
          <h3>這個問題的答案，<br>
            就如同人生中其他許許多多的問題般，<br>
            沒有正確與否，只有你認不認同。
          </h3>
        </div>
      </div>


    </modal>
  </div>
</template>
<script>
export default {
  data() {
    return {
      xModal: false
    }
  }
}
</script>
<style lang="sass" scoped>

.main-title
  display: flex
  align-items: center
  color: #32E0C4
  font-size: 48px
  letter-spacing: 0.05em
  font-weight: 900
  justify-content: space-around
  @media screen and (max-width: 1280px)
    font-size: 36px
  @media screen and (max-width: 768px)
    font-size: 20px
    font-weight: 700

  .sitcon-x
    position: relative
    &::after
      content: ""
      position: absolute
      right: 0
      bottom: 0
      background-image: url('/imgs/cfp/mouse-pointer.svg')
      width: var(--size)
      height: var(--size)
      transform: translateX( var(--size) ) translateY(calc( var(--size) * -0.5 ))
      background-repeat: no-repeat
      background-size: contain

      --size: 16px
      @media screen and (max-width: 768px)
        --size: 8px
    .x
      color: #fff
      position: relative
      margin-left: 0.05em
      transition: all .2s ease
      cursor: pointer
      display: inline-block
      &:hover
        transform: scale(.9)
      &:active
        transform: scale(.8)
.modal-frame
  color: #53A99B
  max-width: 500px
  margin: 0 auto
  .modal-header
    position: relative
    border-bottom: 3px solid #32E0C4

  .modal-content
    padding: 1em
    .selections
      display: grid
      grid-template-columns: repeat(2, 1fr)
      font-size: 24px
      gap: 1em 2em

      @media screen and (max-width: 768px)
        font-size: 16px
      .selection-item
        display: block
        font-weight: 700
        &:hover
          background-color: transparent
    h3
      font-size: 24px
      font-weight: 900
      color: #32E0C4
      margin-top: 1em
      margin-bottom: 1em
      @media screen and (max-width: 768px)
        font-size: 16px
</style>