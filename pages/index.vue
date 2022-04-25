<template>
  <div>
    2022
  </div>
</template>
<script setup>
import jsonldData from '@/assets/jsonld.js'
useJsonld(jsonldData); 
</script>
<script>
export default {
  // redirect to  '/cfp'
  created() {
    this.$router.push('/cfp')
  }
}
</script>