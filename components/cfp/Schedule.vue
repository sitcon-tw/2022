<template>
  <div class="cfp-schedule">
    <div class="col">
      <div class="item">
        <div class="date">
          <div class="month">四月</div>
          <div class="day">30</div>
        </div>
        <div class="title">
          開始徵稿
        </div>
      </div>
      <div class="item">
        <div class="date">
          <div class="month">六月</div>
          <div class="day">05</div>
        </div>
        <div class="title">
          一般議程投稿<strong>截止</strong>
        </div>
      </div>
      <div class="item">
        <div class="date">
          <div class="month">六月</div>
          <div class="day">26</div>
        </div>
        <div class="title">
          開放式議程投稿<strong>截止</strong>
        </div>
      </div>
      <div class="item">
        <div class="date">
          <div class="month">七月</div>
          <div class="day">02</div>
        </div>
        <div class="title">
          一般議程錄取通知
        </div>
      </div>
    </div>
    <div class="col">
      <div class="item">
        <div class="date">
          <div class="month">七月</div>
          <div class="day">23</div>
        </div>
        <div class="title">
          開放式議程錄取通知
        </div>
      </div>
      <div class="item">
        <div class="date">
          <div class="month">八月</div>
          <div class="day">00</div>
        </div>
        <div class="title">
          試講
        </div>
      </div>
      <div class="item">
        <div class="date">
          <div class="month">九月</div>
          <div class="day">03</div>
        </div>
        <div class="title">
          彩排
        </div>
      </div>
      <div class="item">
        <div class="date">
          <div class="month">九月</div>
          <div class="day">04</div>
        </div>
        <div class="title">
          年會
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="sass" scoped>

.cfp-schedule
  display: flex
  margin: 40px 0
  @media screen and (max-width: 768px)
    display: block

  .col
    width: 50%
    @media screen and (max-width: 768px)
      width: 100%
      &:not(:last-child)
        margin-bottom: 24px
    .item
      display: flex
      align-items: center
      &:not(:first-child)
        margin-top: 36px
        @media screen and (max-width: 768px)
          margin-top: 24px
      .date
        display: flex
        flex-direction: column
        font-weight: 900
        line-height: 1
        border-right: 1px solid #eee
        padding-right: 10px
        .month
          font-size: 16px
          text-align: right
          margin-bottom: 4px
          @media screen and (max-width: 768px)
            font-size: 14px
            font-weight: 500
        .day
          font-size: 36px
          @media screen and (max-width: 768px)
            font-size: 30px
      .title
        padding-left: 10px
        color: #32E0C4
        font-size: 24px
        font-weight: 700
        @media screen and (max-width: 768px)
          font-size: 20px
        strong
          font-weight: 700
          color: #EEEEEE
</style>