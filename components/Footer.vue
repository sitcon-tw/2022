<template>
  <footer>
    <div class="container">
      <div class="name footer-item">
        <div class="title">學生計算機年會</div>
        <div class="subtitle">Students' Information Technology Conference</div>
      </div>
      <div class="contact footer-item">
        <div class="title">聯絡我們</div>
        <div class="subtitle">contact@sitcon.org</div>
      </div>
      <div class="social-media footer-item">
        <div class="title">社群媒體</div>
        <div class="social-media-items">
          <a href="https://sitcon.org/fb" target="_blank" class="social-media-item">
            <img src="/2022/imgs/social-media/facebook.svg" alt="Facebook">
          </a>
          <a href="https://sitcon.org/twitter" target="_blank" class="social-media-item">
            <img src="/2022/imgs/social-media/twitter.svg" alt="Twitter">
          </a>
          <a href="https://sitcon.org/instagram" target="_blank" class="social-media-item">
            <img src="/2022/imgs/social-media/instagram.svg" alt="Instagram">
          </a>
          <a href="https://sitcon.org/tg" target="_blank" class="social-media-item">
            <img src="/2022/imgs/social-media/telegram.svg" alt="Telegram">
          </a>
          <a href="https://sitcon.org/yt" target="_blank" class="social-media-item">
            <img src="/2022/imgs/social-media/youtube.svg" alt="YouTube">
          </a>
          <a href="https://sitcon.org/flickr" target="_blank" class="social-media-item">
            <img src="/2022/imgs/social-media/flickr.svg" alt="Flickr">
          </a>
        </div>

      </div>
    </div>
  </footer>
</template>
<style lang="sass" scoped>

footer
  --background-opacity: .75
  background-color: rgba(0, 0, 0, var(--background-opacity))
  border-top: 1px solid rgba(222, 222, 222, 0.2)
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.85)
  backdrop-filter: blur(30px)
  @supports not (backdrop-filter: blur(30px))
    --background-opacity: .85
  .container
    max-width: 960px
    margin: 0 auto
    padding: 56px 0
    display: grid
    grid-gap: 32px
    grid-template-areas: "name social-media" "contact social-media"
    @media screen and (max-width: 1024px)
      padding: 56px 40px
      padding-bottom: 80px
      grid-template-areas: "name" "contact" "social-media"
    .footer-item
      font-weight: 700
      font-size: 16px
      line-height: 1.2em
      @media screen and (max-width: 1024px)
        font-size: 12px
      .title
        margin-bottom: .5em
      .subtitle
        @media screen and (max-width: 1024px)
          font-weight: 500
    .name
      grid-area: name
    .contact
      grid-area: contact
    .social-media
      grid-area: social-media
      .social-media-items
        --size: 32px
        display: grid
        grid-template-columns: repeat(auto-fit, var(--size))
        grid-gap: 16px
        .social-media-item
          display: block
          width: var(--size)
          height: var(--size)
          display: flex
          justify-content: center
          align-items: center
          transition: all .2s ease-in-out
          &:hover
            opacity: .8
          &:active
            opacity: 1
</style>