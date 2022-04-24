 <template>
  <div>

    <Head>
      <Title>{{ title }}</Title>
      <Meta name="description" :content="title" />
    </Head>

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
      <cfp-block-title>投稿主題範例</cfp-block-title>
      <p>SITCON 作為學生展現自己的舞台，我們特別期待以學生為主體的稿件，例如：從學生角度出發的經驗分享、技術分享，專題研究成果、獨立研究甘苦談，或探討學生相關議題等等。<br>
        任何與資訊科技、電腦技術相關的講題，我們都非常歡迎投稿！
        除此之外，您也可以透過參與投稿者小聚或前往 SITCON 歷年網站（
        <a href="https://sitcon.org/2013/" target="_blank">2013</a>、
        <a href="https://sitcon.org/2014/" target="_blank">2014</a>、
        <a href="https://sitcon.org/2015/" target="_blank">2015</a>、
        <a href="https://sitcon.org/2016/" target="_blank">2016</a>、
        <a href="https://sitcon.org/2017/" target="_blank">2017</a>、
        <a href="https://sitcon.org/2018/" target="_blank">2018</a>、
        <a href="https://sitcon.org/2019/" target="_blank">2019</a>、
        <a href="https://sitcon.org/2020/" target="_blank">2020</a>、
        <a href="https://sitcon.org/2021/" target="_blank">2021</a> ）查看過去的議程。
        <br><br>
        以下是我們選出以往的優良議程，提供給您參考：
      </p>
      <h3>Presentation</h3>
      <p>Presentation 包含完整 30 分鐘的議程與 10 分鐘的問答時間，<strong>共 40 分鐘</strong>，讓您有充分的時間展示想法、描述經歷、和與會者交流。</p>
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
</template>
<script setup>
const title = ref('SITCON 2022 - 開放式議程')
</script>