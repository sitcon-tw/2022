<template>
  <div>

    <Head>
      <Title>{{ title }}</Title>
      <Meta name="description" :content="title" />
    </Head>
    <div class="container">
      <logo-sitcon />

      <logo-cat-in-a-maze />

      <router-link to="/cfp/normal">一般議程</router-link>
      <br>
      <router-link to="/cfp/freeform">開放式議程</router-link>

    </div>
    <Footer />
  </div>
</template>
<script setup>
const title = ref('SITCON 2022 - Call for Papers')
</script>
<style lang="sass" scoped>

.container
  max-width: 960px
  width: calc(100% - 64px)
  padding: 40px 64px
  margin: 0 auto
  ::v-deep(.main-title)
    justify-content: flex-end
    gap: 96px
    margin-top: -.5em
    @media screen and (max-width: 768px)
      font-size: 20px
      gap: 32px
</style>