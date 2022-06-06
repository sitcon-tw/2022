<template>
  <div>
    <GeneralHead
      page-title="首頁"
      title="SITCON X"
      description="在 SITCON 的第 X 週年，期望我們秉持初衷——讓學生們分享與交流知識，把各地學生串連起來的 X 字路口——也期望每個人能夠向貓咪學習，換個思維邏輯面對迷惘的現況，保持著好奇心與探索的樂趣，跳脫框架創造屬於自己的美好未來！"
      image="https://sitcon.org/2022/imgs/cfp/cfp-og.png" />

    <Head>
      <!-- Primary meta Tags -->
      <title>{{ pageTitle }}</title>
      <meta name="title" :content="title" />
      <meta name="description" :content="description" />

      <!-- Open Graph / Facebook -->
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://sitcon.org/2022/cfp/" />
      <meta property="og:site_name" content="SITCON 2022" />
      <meta property="og:title" :content="title" />
      <meta property="og:description" :content="description" />
      <meta property="og:image" :content="image" />

      <!-- Twitter -->
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://sitcon.org/2022/cfp/" />
      <meta property="twitter:title" :content="title" />
      <meta property="twitter:description" :content="description" />
      <meta property="twitter:image" :content="image" />

      <!-- Icon -->
      <link rel="icon" href="https://sitcon.org/2022/imgs/cfp/CFP_favicon.ico" sizes="any" />
      <link rel="icon" href="https://sitcon.org/2022/imgs/cfp/CFP_favicon.png" sizes="any" />
      <link rel="icon" href="https://sitcon.org/2022/imgs/cfp/CFP_favicon.svg" type="image/svg+xml" />
    </Head>
    <div class="container">
      <nav-bar />
      index
      <footer-item />
    </div>
  </div>
</template>
<script setup>
</script>
<script>
export default {
  // redirect to  '/cfp'
  created() {
    // this.$router.push('/cfp')
  }
}
</script>