<template>
  <div>

    <Head>
      <!-- Primary Meta Tags -->
      <Title>{{ pageTitle }}</Title>
      <Meta name="title" :content="title" />
      <Meta name="description" :content="description" />

      <!-- Open Graph / Facebook -->
      <Meta property="og:type" content="website" />
      <Meta property="og:url" content="https://sitcon.org/2022/cfp/" />
      <Meta property="og:site_name" content="SITCON 2022" />
      <Meta property="og:title" :content="title" />
      <Meta property="og:description" :content="description" />
      <Meta property="og:image" :content="image" />

      <!-- Twitter -->
      <Meta property="twitter:card" content="summary_large_image" />
      <Meta property="twitter:url" content="https://sitcon.org/2022/cfp/" />
      <Meta property="twitter:title" :content="title" />
      <Meta property="twitter:description" :content="description" />
      <Meta property="twitter:image" :content="image" />

      <!-- Icon -->
      <Link rel="icon" href="https://sitcon.org/2022/imgs/cfp/CFP_favicon.ico" sizes="any" />
      <Link rel="icon" href="https://sitcon.org/2022/imgs/cfp/CFP_favicon.png" sizes="any" />
      <Link rel="icon" href="https://sitcon.org/2022/imgs/cfp/CFP_favicon.svg" type="image/svg+xml" />
    </Head>
  </div>
</template>
<script setup>
const pageTitle = ref('Call for Papers')
const title = ref('SITCON X - Cat in a Maze')
const description = ref('在 SITCON 的第 X 週年，期望我們秉持初衷——讓學生們分享與交流知識，把各地學生串連起來的 X 字路口——也期望每個人能夠向貓咪學習，換個思維邏輯面對迷惘的現況，保持著好奇心與探索的樂趣，跳脫框架創造屬於自己的美好未來！')
const image = ref('https://sitcon.org/2022/imgs/cfp/cfp-og.png')
</script>
<script>
export default {
  // redirect to  '/cfp'
  created() {
    this.$router.push('/cfp')
  }
}
</script>