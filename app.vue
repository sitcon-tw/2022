<template>
  <div>
    <NuxtPage />
  </div>
</template>

<script setup>
import jsonldData from '@/assets/jsonld.js'
useJsonld(jsonldData); 
</script>