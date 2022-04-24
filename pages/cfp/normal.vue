<template>
  <div>

    <Head>
      <Title>{{ title }}</Title>
      <Meta name="description" :content="title" />
    </Head>

    <cfp-glass-box first-child>
      <cfp-back-btn />
      <logo-cat-in-a-maze />
      <h1 class="text-center">一般議程</h1>
      <cfp-divider />
      <cfp-timer />
      <cfp-block-title>大河馬</cfp-block-title>
      <p>segksngb;bs gegege geg eg eg eg </p>
    </cfp-glass-box>
    <cfp-glass-box>
      <cfp-block-title>大河馬</cfp-block-title>
      <p>segksngb;bs gegege geg eg eg eg </p>
      <ul>
        <li>
          <strong>大河馬：</strong>蓬蓬鬆餅
        </li>
        <li>哪裡可以看到大河馬？哪裡可以看到大河馬？哪裡可以看到大河馬？哪裡可以看到大河馬？哪裡可以看到大河馬？哪裡可以看到大河馬？哪裡可以看到大河馬？哪裡可以看到大河馬？哪裡可以看到大河馬？哪裡可以看到大河馬？哪裡可以看到大河馬？哪裡可以看到大河馬？哪裡可以看到大河馬？哪裡可以看到大河馬？</li>
      </ul>
    </cfp-glass-box>
    <cfp-glass-box last-child>
      <cfp-block-title>Q&A</cfp-block-title>
      <cfp-question-box>
        <template v-slot:title>哪裡可以看到大河馬？</template>
        動物園都可以看到大河馬
      </cfp-question-box>
      <cfp-question-box>
        <template v-slot:title>哪裡可以看到大河馬？</template>
        動物園都可以看到大河馬
      </cfp-question-box>
      <cfp-question-box>
        <template v-slot:title>哪裡可以看到大河馬？</template>
        動物園都可以看到大河馬
      </cfp-question-box>
      <cfp-question-box>
        <template v-slot:title>哪裡可以看到大河馬？哪裡可以看到大河馬？哪裡可以看到大河馬？哪裡可以看到大河馬？哪裡可以看到大河馬？哪裡可以看到大河馬？哪裡可以看到大河馬？哪裡可以看到大河馬？哪裡可以看到大河馬？哪裡可以看到大河馬？哪裡可以看到大河馬？哪裡可以看到大河馬？哪裡可以看到大河馬？哪裡可以看到大河馬？</template>
        動物園都可以看到大河馬
      </cfp-question-box>
    </cfp-glass-box>
    <Footer />
  </div>
</template>
<script setup>
const title = ref('SITCON 2022 - 一般議程')
</script>