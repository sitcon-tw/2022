<template>
  <img :src="src" :alt="alt" />
</template>
<script setup>
const props = defineProps({
  src: String,
  alt: String,
})
</script>