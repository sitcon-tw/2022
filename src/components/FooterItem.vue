<template>
  <div>
    <mint-box v-if="!hideSponsor">
      :pancake:
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