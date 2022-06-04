<template>
  <div>
    <mint-box v-if="!hideSponsor" class="sopnsor-items">
      <img class="sponsor" :src="'/2022/imgs/pancake/sponsor.png'" />
      <img class="sponsor" :src="'/2022/imgs/pancake/sponsor.png'" />
      <img class="sponsor" :src="'/2022/imgs/pancake/sponsor.png'" />
      <img class="sponsor" :src="'/2022/imgs/pancake/sponsor.png'" />
      <img class="sponsor" :src="'/2022/imgs/pancake/sponsor.png'" />
      <img class="sponsor" :src="'/2022/imgs/pancake/sponsor.png'" />
      <img class="sponsor" :src="'/2022/imgs/pancake/sponsor.png'" />
      <img class="sponsor" :src="'/2022/imgs/pancake/sponsor.png'" />
    </mint-box>
    <div>
      sitcon
    </div>
  </div>

</template>
<script setup>
const props = defineProps({
  hideSponsor: {
    type: Boolean,
    default: false
  }
})
</script>
<style lang="sass" scoped>
.sopnsor-items
  display: grid
  grid-template-columns: repeat(4, 1fr)
  grid-gap: 20px
  img
    width: 100%
</style>