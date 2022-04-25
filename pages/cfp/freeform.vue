 <template>
  <div>

    <Head>
      <Title>{{ title }}</Title>
      <Meta name="description" :content="title" />
    </Head>
    <div class="maze-background">
      <cfp-glass-box first-child>
        <cfp-back-btn />
        <logo-cat-in-a-maze />
        <h1 class="text-center">開放式議程</h1>
        <cfp-divider />
        <cfp-timer />
        <cfp-submission-btn href="https://pancake.gnehs.net/" />
        <cfp-divider />
        <cfp-block-title>重要時程</cfp-block-title>
        <cfp-schedule />
        <cfp-block-title>議程種類</cfp-block-title>
        <cfp-agenda-type />
        <cfp-block-title>什麼是開放式議程？</cfp-block-title>
        <p>在追求創新的時代，我們為講者提供了開放式議程這個選項，跳脫講者對聽眾<strong>單向的演講（陳述）</strong>，開放式議程更加強調主講者和與會者的雙向交流。SITCON 作為學生展現自己的舞台，我們期待以學生為主體的投稿，可以是從學生角度出發的經驗分享、技術分享，或是一同探討學生相關議題等。
          <br>
          <br>
          對於還在猶豫的講者們，<strong>以下是提供給各位參考的幾種議程形式範例：</strong>
        </p>
        <cfp-session-type-card />
        <cfp-block-title>Code of Conduct 行為準則</cfp-block-title>
        <p>SITCON 歡迎不同身分、來自不同背景的與會者，我們鼓勵女性、性少數與多元背景的參與者。為了讓大家都能愉快的參加 SITCON，我們要求所有參與者閱讀年會的<a href="https://sitcon.org/code-of-conduct/" target="_blank">
            行為守則(Code of Conduct) </a>，共同創造一個友善的環境。 </p>
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
  </div>
</template>
<script setup>
const title = ref('開放式議程')
</script>