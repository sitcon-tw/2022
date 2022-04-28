<template>
  <div class="session-type-cards">
    <div class="session-type-card">
      <div class="title">議題探討形式</div>
      <div class="description">資訊發展快速，卻也延伸出許多可以深入討論的議題，我們期待透過講者的引言，拋磚引玉，激發聽眾的想法，透過互相討論的模式為這些議題提出不一樣的看法與觀點。 例如：人工智慧是否會有自我意識？
      </div>
    </div>
    <div class="session-type-card">
      <div class="title">經驗分享形式</div>
      <div class="description">不同於一般議程，在開放式議程中的經驗分享可以變得十分多元，我們期待講者透過分享自己在資訊領域遇到的難題和解決方式，並以此為開端，與聽眾碰撞出更多的論點與討論。例如：學測還是特殊選材？我如何在學科與術科中做選擇？
      </div>
    </div>
    <div class="session-type-card">
      <div class="title">更多形式由您來創造</div>
      <div class="description">不只有上述的形式，我們非常歡迎其他形式的議程。<br>
        無論是主持一場圓桌會議，一起腦力激盪，甚至舉辦一場小競賽，任何你想得到的非傳統議程形式都可以在開放式議程中進行！
      </div>
    </div>
  </div>
</template>

<style lang="sass" scoped>

.session-type-card
  border: 2px solid #FFFFFF
  padding: 50px
  display: grid
  grid-template-columns: 1fr 2fr
  margin-bottom: 24px
  align-items: center
  gap: 16px
  @media screen and (max-width: 768px)
    grid-template-columns: 1fr
    padding: 16px 36px
    padding-bottom: 36px
    border: 1px solid #FFFFFF
  .title
    font-size: 28px
    font-weight: 700
    @media screen and (max-width: 768px)
      font-size: 24px
      text-align: center
      border-bottom: 1px solid rgba(222, 222, 222, 0.2)
      padding-bottom: 8px
      margin-bottom: 8px
  .description
    color: #32E0C4
    font-size: 16px
    @media screen and (max-width: 768px)
      font-size: 14px
</style>
