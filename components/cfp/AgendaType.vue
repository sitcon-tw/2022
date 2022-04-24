<template>
  <div class="agenda-type">
    <div class="normal">

      <h3 class="title">一般議程</h3>
      <cfp-divider style="margin: 0 auto" />
      <div class="type-items">
        <div class="type-item">
          <div class="title">Presentation</div>
          <p>Presentation <strong>共 40 分鐘</strong>，包含完整 30 分鐘的議程與 10 分鐘的問答時間，讓您有充分的時間展示想法、描述經歷、和與會者交流。 </p>
        </div>
        <div class="type-item">
          <div class="title">Double Espresso</div>
          <p>Double Espresso 為<strong> 20 分鐘的議程</strong>，相對於僅 10 分鐘的 Espresso，讓您有餘裕補充想法，和與會者進行問答。 </p>
        </div>
        <div class="type-item">
          <div class="title">Espresso</div>
          <p>Espresso <strong>僅有 10 分鐘</strong>，挑戰最為濃縮與精華的議程，為與會者帶來短而精緻的知識洗禮。 </p>
        </div>
      </div>
    </div>
    <div class="freeform">
      <h3 class="title">開放式議程</h3>
      <cfp-divider style="margin: 0 auto" />
      <p>開放式議程為 40 分鐘的議程，該議程不限定進行方式，希望跳脫傳統議程框架，透過雙向互動、實作等，任何你想得到的非傳統形式進行此場議程。 </p>
    </div>
  </div>
</template>
<style lang="sass" scoped>

.agenda-type
  display: grid
  grid-template-columns: 3fr 1fr
  grid-gap: 20px
  margin: 40px 0
  @media screen and (max-width: 1152px)
    grid-template-columns: 1fr

  @media screen and (max-width: 768px)
    grid-template-columns: 1fr

  .normal,.freeform
    border: 1px solid #EEEEEE

    padding: 24px 36px
    h3.title
      text-align: center
      margin: .5em 0
      margin-top: calc( -24px + .5em )
    .type-items
      display: grid
      grid-template-columns: 1fr 1fr 1fr
      grid-gap: 32px

      @media screen and (max-width: 768px)
        grid-template-columns: 1fr
      .type-item
        .title
          font-size: 20px
          line-height: 2
          font-weight: 900
          text-align: center
          padding: .5em 0.05em
          border-bottom: 1px solid rgba(222, 222, 222, 0.2)
          @media screen and (max-width: 768px)
            border-bottom: 0
            border-top: 1px solid rgba(222, 222, 222, 0.2)
    p
      color: #fff
      @media screen and (max-width: 768px)
        margin: 0
      strong
        font-weight: 700
        color: #32E0C4
</style>