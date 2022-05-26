<template>

  <Head>
    <!-- Primary meta Tags -->
    <title>{{ pageTitle }} | SITCON X 學生計算機年會 | Students' Information Technology Conference</title>
    <meta name="title" :content="title" />
    <meta name="description" :content="description" />

    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://sitcon.org/2022/cfp/" v-if="cfp" />
    <meta property="og:site_name" content="SITCON X" />
    <meta property="og:title" :content="title" />
    <meta property="og:description" :content="description" />
    <meta property="og:image" :content="image" />

    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content="https://sitcon.org/2022/cfp/" v-if="cfp" />
    <meta property="twitter:title" :content="title" />
    <meta property="twitter:description" :content="description" />
    <meta property="twitter:image" :content="image" />

    <!-- Icon -->
    <link rel="icon" href="https://sitcon.org/2022/imgs/cfp/CFP_favicon.ico" sizes="any" v-if="cfp" />
    <link rel="icon" href="https://sitcon.org/2022/imgs/cfp/CFP_favicon.png" sizes="any" v-if="cfp" />
    <link rel="icon" href="https://sitcon.org/2022/imgs/cfp/CFP_favicon.svg" type="image/svg+xml" v-if="cfp" />
  </Head>
</template>

<script setup>
import { Head } from '@vueuse/head'
const props = defineProps(['cfp', 'pageTitle', 'title', 'description', 'image'])
</script>
 