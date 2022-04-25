<template>
  <div class="maze-background">

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
      <cfp-submission-btn href="https://pancake.gnehs.net/" />
      <cfp-divider />
      <cfp-block-title>重要時程</cfp-block-title>
      <cfp-schedule />
      <cfp-block-title>議程種類</cfp-block-title>
      <cfp-agenda-type />
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
      <cfp-cards>
        <cfp-card href="https://sitcon.org/2020/agenda/14e76dd3-d03b-4a67-843c-f0fe9beae35c" src="/imgs/cfp/prev-sessions/aomXTCTlIW4.jpg" target="_blank">
          CDN 網站攻擊 - 這次換駭客當鬼來抓你了
        </cfp-card>
        <cfp-card href="https://sitcon.org/2020/agenda/bdcf60d1-4ea7-4485-bc64-a6252eabc19f" src="/imgs/cfp/prev-sessions/1gFBx16AlMc.jpg" target="_blank">
          第一次做密室逃脫就上手
        </cfp-card>
        <cfp-card href="https://sitcon.org/2019/agenda/7a67f4fb-b6f4-4595-b9af-527b3024c8f8" src="/imgs/cfp/prev-sessions/qYxdomoMEf8.jpg" target="_blank">
          從學校到業界，工程師作為職業的現實
        </cfp-card>
        <cfp-card href="https://sitcon.org/2019/agenda/64ed212c-f1a9-40df-a84e-5f7411d4c887" src="/imgs/cfp/prev-sessions/SkUuK731XGY.jpg" target="_blank">
          黑客、社團、資訊魔法學習大總匯
        </cfp-card>
        <cfp-card href="https://sitcon.org/2018/#/agenda/sub/d946b6e1-d826-4c64-86a4-bf013bcc0c06" src="/imgs/cfp/prev-sessions/85bW97XI4i0.jpg" target="_blank">
          奔跑吧！台北：遊戲開發經驗分享
        </cfp-card>
        <cfp-card href="https://sitcon.org/2018/#/agenda/sub/35598abf-4efe-48fc-93a4-3d539e6f6c47" src="/imgs/cfp/prev-sessions/8xrYLc4num8.jpg" target="_blank">
          Club Mate 與德國駭客精神：34C3 大會實錄
        </cfp-card>
        <cfp-card href="https://www.youtube.com/watch?v=msrsjX8mddE" src="/imgs/cfp/prev-sessions/msrsjX8mddE.jpg" target="_blank">
          開發學校雲端服務的奇技淫巧
        </cfp-card>
      </cfp-cards>
      <h3>Double Espresso</h3>
      <p>Double Espresso <strong>為 20 分鐘的議程</strong>，相對於僅 10 分鐘的 Espresso，讓您有餘裕補充想法，和與會者進行問答。</p>
      <cfp-cards>
        <cfp-card href="https://sitcon.org/2021/agenda/32b8d488-7d5b-4c0e-9efe-aee6321062b9" src="/imgs/cfp/prev-sessions/Y_d6ZPQR9ag.jpg" target="_blank">
          會斷線的才叫網路——20 分鐘學會宿網 Debug
        </cfp-card>
        <cfp-card href="https://sitcon.org/2021/agenda/3b4ad32d-97e5-4313-9ff5-faa4dc0ca566" src="/imgs/cfp/prev-sessions/BTjVqA-CadM.jpg" target="_blank">
          我沒有網頁開發基礎，最後卻完成一份專案？
        </cfp-card>
      </cfp-cards>
      <h3>Espresso</h3>
      <p>Espresso <strong>僅有 10 分鐘</strong>，挑戰最為濃縮與精華的議程，為與會者帶來短而精緻的知識洗禮。</p>
      <cfp-cards>
        <cfp-card href="https://sitcon.org/2020/agenda/32ba951d-3cfb-4461-ae6a-5ddbab693b8b" src="/imgs/cfp/prev-sessions/MfiKAOBrPpk.jpg" target="_blank">
          我也能讓 Python 幫忙操控電腦嗎？
        </cfp-card>
        <cfp-card href="https://sitcon.org/2020/agenda/0fe7e40c-4a84-4363-9e60-4188d81ccecc" src="/imgs/cfp/prev-sessions/NGqXSCFvZ3M.jpg" target="_blank">
          我只是個學生，架個網站不想花錢
        </cfp-card>
        <cfp-card href="https://sitcon.org/2020/agenda/58ec7c4a-ede5-44c5-8b46-e33471543fa1" src="/imgs/cfp/prev-sessions/CEPVFcZMeQg.jpg" target="_blank">
          校園資安實務 - DNS
        </cfp-card>
        <cfp-card href="https://sitcon.org/2019/agenda/f60637a1-0ccb-4c02-b1b0-be7a6a393d87" src="/imgs/cfp/prev-sessions/GFfaD-kVe_A.jpg" target="_blank">
          淺談社會網路分析
        </cfp-card>
        <cfp-card href="https://sitcon.org/2019/agenda/7959ab0b-cdfa-40bc-8566-099477abb195/" src="/imgs/cfp/prev-sessions/kD-jGfDZGGo.jpg" target="_blank">
          你所不知道的維基 - Wikidata
        </cfp-card>
        <cfp-card href="https://sitcon.org/2019/agenda/0b49bfce-a147-4702-a5b9-87eb2dfa5135/" src="/imgs/cfp/prev-sessions/iZz5au-vVHk.jpg" target="_blank">
          AI for the Art in a Box
        </cfp-card>
        <cfp-card href="https://sitcon.org/2018/#/agenda/sub/f3c6853d-2b0e-464c-8837-9411455961d8" src="/imgs/cfp/prev-sessions/H5o5Oa_nbqs.jpg" target="_blank">
          深度學習如何深度學習
        </cfp-card>
        <cfp-card href="https://www.youtube.com/watch?v=ryLLzSwQ54w" src="/imgs/cfp/prev-sessions/ryLLzSwQ54w.jpg" target="_blank">
          格鬥遊戲 AI 開發經驗談
        </cfp-card>
      </cfp-cards>

      <cfp-block-title style="margin-top: 56px">Code of Conduct 行為準則</cfp-block-title>
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
const title = ref('一般議程')
</script>