<template>
  <div>
    <GeneralHead
      page-title="首頁"
      title="SITCON X"
      description="在 SITCON 的第 X 週年，期望我們秉持初衷——讓學生們分享與交流知識，把各地學生串連起來的 X 字路口——也期望每個人能夠向貓咪學習，換個思維邏輯面對迷惘的現況，保持著好奇心與探索的樂趣，跳脫框架創造屬於自己的美好未來！"
      image="https://sitcon.org/2022/imgs/cfp/cfp-og.png" />
    <div class="container">
      <nav-bar />
      index
      <footer-item />
    </div>
  </div>
</template>
<script>
export default {
  // redirect to  '/cfp'
  created() {
    // this.$router.push('/cfp')
  }
}
</script>