<template>
  <div>

    <Head>
      <!-- Primary Meta Tags -->
      <Title>{{ pageTitle }}</Title>
      <Meta name="title" :content="title" />
      <Meta name="description" :content="description" />

      <!-- Open Graph / Facebook -->
      <Meta property="og:type" content="website" />
      <Meta property="og:url" content="https://sitcon.org/2022/cfp/" />
      <Meta property="og:site_name" content="SITCON 2022" />
      <Meta property="og:title" :content="title" />
      <Meta property="og:description" :content="description" />
      <Meta property="og:image" :content="image" />

      <!-- Twitter -->
      <Meta property="twitter:card" content="summary_large_image" />
      <Meta property="twitter:url" content="https://sitcon.org/2022/cfp/" />
      <Meta property="twitter:title" :content="title" />
      <Meta property="twitter:description" :content="description" />
      <Meta property="twitter:image" :content="image" />

      <!-- Icon -->
      <Link rel="icon" href="https://sitcon.org/2022/imgs/cfp/CFP_favicon.ico" sizes="any" />
      <Link rel="icon" href="https://sitcon.org/2022/imgs/cfp/CFP_favicon.png" sizes="any" />
      <Link rel="icon" href="https://sitcon.org/2022/imgs/cfp/CFP_favicon.svg" type="image/svg+xml" />
    </Head>

    <div class="maze-background">
      <cfp-glass-box first-child>
        <cfp-back-btn />
        <logo-cat-in-a-maze />
        <h1 class="text-center">一般議程</h1>
        <cfp-divider />
        <cfp-timer />
        <cfp-submission-btn href="https://forms.gle/Hqp9Gn1sAiwDP3mK7" />
        <cfp-divider />
        <cfp-block-title>重要時程</cfp-block-title>
        <cfp-schedule />
        <cfp-block-title>議程種類</cfp-block-title>
        <cfp-agenda-type />
        <cfp-block-title>投稿主題</cfp-block-title>
        <p>SITCON 作為學生展現自己的舞台，我們特別期待以學生為主體的稿件，例如：從學生角度出發的經驗分享、技術分享，專題研究成果、獨立研究甘苦談，或探討學生相關議題等等。<br>
          任何與資訊科技、電腦技術相關的講題，我們都非常歡迎投稿！<br>
          除此之外，您也可以透過參與投稿者小聚或前往 SITCON 歷年網站（<a href="https://sitcon.org/2013/" target="_blank">2013</a>、<a href="https://sitcon.org/2014/" target="_blank">2014</a>、<a href="https://sitcon.org/2015/" target="_blank">2015</a>、<a href="https://sitcon.org/2016/" target="_blank">2016</a>、<a
             href="https://sitcon.org/2017/" target="_blank">2017</a>、<a href="https://sitcon.org/2018/" target="_blank">2018</a>、<a href="https://sitcon.org/2019/" target="_blank">2019</a>、<a href="https://sitcon.org/2020/" target="_blank">2020</a>、<a href="https://sitcon.org/2021/"
             target="_blank">2021</a>）查看過去的議程。
          <br><br>
          以下是我們選出以往的優良議程，提供給您參考：
        </p>
        <h3>Presentation</h3>
        <p>Presentation 包含完整 30 分鐘的議程與 10 分鐘的問答時間，<strong>共 40 分鐘</strong>，讓您有充分的時間展示想法、描述經歷、和與會者交流。</p>
        <cfp-cards>
          <cfp-agenda-card href="https://youtu.be/5YjbEE-E2HA" src="/2022/imgs/cfp/prev-sessions/5YjbEE-E2HA.jpg" target="_blank">
            How to hack CSGO 破壞他人遊戲體驗從這裡開始
            （<a href="https://sitcon.org/2021/agenda/97b49c22-89b5-4c66-94d4-108b36db0c19" target="_blank">簡介</a>）
          </cfp-agenda-card>
          <cfp-agenda-card href="https://youtu.be/_lNPRlt6c2E" src="/2022/imgs/cfp/prev-sessions/_lNPRlt6c2E.jpg" target="_blank">
            關於 CTF 的那些事
            （<a href="https://sitcon.org/2021/agenda/7a88857e-7d50-4d9c-a656-2d99feef6198" target="_blank">簡介</a>）
          </cfp-agenda-card>
          <cfp-agenda-card href="https://youtu.be/0YMG2n_wwXU" src="/2022/imgs/cfp/prev-sessions/0YMG2n_wwXU.jpg" target="_blank">
            NLP 陪聊 AI 培育法
            （<a href="https://sitcon.org/2021/agenda/80e71005-50f9-4e5a-bbc7-e4c6c4eeae9b" target="_blank">簡介</a>）
          </cfp-agenda-card>
          <cfp-agenda-card href="https://youtu.be/paJ0AlW6h-I" src="/2022/imgs/cfp/prev-sessions/paJ0AlW6h-I.jpg" target="_blank">
            網路維運，在台灣怎麼玩？打造全台最大家用網路！
            （<a href="https://sitcon.org/2021/agenda/3fe74d93-2ab5-4c42-8b49-b5b92973f4aa" target="_blank">簡介</a>）
          </cfp-agenda-card>
          <cfp-agenda-card href="https://youtu.be/aomXTCTlIW4" src="/2022/imgs/cfp/prev-sessions/aomXTCTlIW4.jpg" target="_blank">
            CDN 網站攻擊 - 這次換駭客當鬼來抓你了
            （<a href="https://sitcon.org/2020/agenda/14e76dd3-d03b-4a67-843c-f0fe9beae35c" target="_blank">簡介</a>）
          </cfp-agenda-card>
          <cfp-agenda-card href="https://youtu.be/1gFBx16AlMc" src="/2022/imgs/cfp/prev-sessions/1gFBx16AlMc.jpg" target="_blank">
            第一次做密室逃脫就上手
            （<a href="https://sitcon.org/2020/agenda/bdcf60d1-4ea7-4485-bc64-a6252eabc19f" target="_blank">簡介</a>）
          </cfp-agenda-card>
          <cfp-agenda-card href="https://youtu.be/qYxdomoMEf8" src="/2022/imgs/cfp/prev-sessions/qYxdomoMEf8.jpg" target="_blank">
            從學校到業界，工程師作為職業的現實
            （<a href="https://sitcon.org/2019/agenda/7a67f4fb-b6f4-4595-b9af-527b3024c8f8" target="_blank">簡介</a>）
          </cfp-agenda-card>
          <cfp-agenda-card href="https://youtu.be/SkUuK731XGY" src="/2022/imgs/cfp/prev-sessions/SkUuK731XGY.jpg" target="_blank">
            黑客、社團、資訊魔法學習大總匯
            （<a href="https://sitcon.org/2019/agenda/64ed212c-f1a9-40df-a84e-5f7411d4c887" target="_blank">簡介</a>）
          </cfp-agenda-card>
          <cfp-agenda-card href="https://youtu.be/85bW97XI4i0" src="/2022/imgs/cfp/prev-sessions/85bW97XI4i0.jpg" target="_blank">
            奔跑吧！台北：遊戲開發經驗分享
            （<a href="https://sitcon.org/2018/#/agenda/sub/d946b6e1-d826-4c64-86a4-bf013bcc0c06" target="_blank">簡介</a>）
          </cfp-agenda-card>
          <cfp-agenda-card href="https://youtu.be/8xrYLc4num8" src="/2022/imgs/cfp/prev-sessions/8xrYLc4num8.jpg" target="_blank">
            Club Mate 與德國駭客精神：34C3 大會實錄
            （<a href="https://sitcon.org/2018/#/agenda/sub/35598abf-4efe-48fc-93a4-3d539e6f6c47" target="_blank">簡介</a>）
          </cfp-agenda-card>
          <cfp-agenda-card href="https://youtu.be/msrsjX8mddE" src="/2022/imgs/cfp/prev-sessions/msrsjX8mddE.jpg" target="_blank">
            開發學校雲端服務的奇技淫巧
          </cfp-agenda-card>
        </cfp-cards>
        <h3>Double Espresso</h3>
        <p>Double Espresso <strong>為 20 分鐘的議程</strong>，相對於僅 10 分鐘的 Espresso，讓您有餘裕補充想法，和與會者進行問答。</p>
        <cfp-cards>
          <cfp-agenda-card href="https://youtu.be/Y_d6ZPQR9ag" src="/2022/imgs/cfp/prev-sessions/Y_d6ZPQR9ag.jpg" target="_blank">
            會斷線的才叫網路——20 分鐘學會宿網 Debug
            （<a href="https://sitcon.org/2021/agenda/32b8d488-7d5b-4c0e-9efe-aee6321062b9" target="_blank">簡介</a>）
          </cfp-agenda-card>
          <cfp-agenda-card href="https://youtu.be/BTjVqA-CadM" src="/2022/imgs/cfp/prev-sessions/BTjVqA-CadM.jpg" target="_blank">
            我沒有網頁開發基礎，最後卻完成一份專案？
            （<a href="https://sitcon.org/2021/agenda/3b4ad32d-97e5-4313-9ff5-faa4dc0ca566" target="_blank">簡介</a>）
          </cfp-agenda-card>
        </cfp-cards>
        <h3>Espresso</h3>
        <p>Espresso <strong>僅有 10 分鐘</strong>，挑戰最為濃縮與精華的議程，為與會者帶來短而精緻的知識洗禮。</p>
        <cfp-cards>
          <cfp-agenda-card href="https://youtu.be/y3EM5GHigTY" src="/2022/imgs/cfp/prev-sessions/y3EM5GHigTY.jpg" target="_blank">
            PHP 是世界上最棒的語言，但我做了一個比它更棒的！
            （<a href="https://sitcon.org/2021/agenda/bb826e6d-8544-4101-8811-13032bd9a4fd" target="_blank">簡介</a>）
          </cfp-agenda-card>
          <cfp-agenda-card href="https://youtu.be/I07gX4YlYrE" src="/2022/imgs/cfp/prev-sessions/I07gX4YlYrE.jpg" target="_blank">
            喜歡打街機？做一台放家裡打r
            （<a href="https://sitcon.org/2021/agenda/2b210726-c5b0-4094-a591-fccb51f0ee55" target="_blank">簡介</a>）
          </cfp-agenda-card>
          <cfp-agenda-card href="https://youtu.be/MfiKAOBrPpk" src="/2022/imgs/cfp/prev-sessions/MfiKAOBrPpk.jpg" target="_blank">
            我也能讓 Python 幫忙操控電腦嗎？
            （<a href="https://sitcon.org/2020/agenda/32ba951d-3cfb-4461-ae6a-5ddbab693b8b" target="_blank">簡介</a>）
          </cfp-agenda-card>
          <cfp-agenda-card href="https://youtu.be/NGqXSCFvZ3M" src="/2022/imgs/cfp/prev-sessions/NGqXSCFvZ3M.jpg" target="_blank">
            我只是個學生，架個網站不想花錢
            （<a href="https://sitcon.org/2020/agenda/0fe7e40c-4a84-4363-9e60-4188d81ccecc" target="_blank">簡介</a>）
          </cfp-agenda-card>
          <cfp-agenda-card href="https://youtu.be/CEPVFcZMeQg" src="/2022/imgs/cfp/prev-sessions/CEPVFcZMeQg.jpg" target="_blank">
            校園資安實務 - DNS
            （<a href="https://sitcon.org/2020/agenda/58ec7c4a-ede5-44c5-8b46-e33471543fa1" target="_blank">簡介</a>）
          </cfp-agenda-card>
          <cfp-agenda-card href="https://youtu.be/GFfaD-kVe_A" src="/2022/imgs/cfp/prev-sessions/GFfaD-kVe_A.jpg" target="_blank">
            淺談社會網路分析
            （<a href="https://sitcon.org/2019/agenda/f60637a1-0ccb-4c02-b1b0-be7a6a393d87" target="_blank">簡介</a>）
          </cfp-agenda-card>
          <cfp-agenda-card href="https://youtu.be/kD-jGfDZGGo" src="/2022/imgs/cfp/prev-sessions/kD-jGfDZGGo.jpg" target="_blank">
            你所不知道的維基 - Wikidata
            （<a href="https://sitcon.org/2019/agenda/7959ab0b-cdfa-40bc-8566-099477abb195" target="_blank">簡介</a>）
          </cfp-agenda-card>
          <cfp-agenda-card href="https://youtu.be/iZz5au-vVHk" src="/2022/imgs/cfp/prev-sessions/iZz5au-vVHk.jpg" target="_blank">
            AI for the Art in a Box
            （<a href="https://sitcon.org/2019/agenda/0b49bfce-a147-4702-a5b9-87eb2dfa5135" target="_blank">簡介</a>）
          </cfp-agenda-card>
          <cfp-agenda-card href="https://youtu.be/H5o5Oa_nbqs" src="/2022/imgs/cfp/prev-sessions/H5o5Oa_nbqs.jpg" target="_blank">
            深度學習如何深度學習
            （<a href="https://sitcon.org/2018/#/agenda/sub/f3c6853d-2b0e-464c-8837-9411455961d8" target="_blank">簡介</a>）
          </cfp-agenda-card>
          <cfp-agenda-card href="https://youtu.be/ryLLzSwQ54w" src="/2022/imgs/cfp/prev-sessions/ryLLzSwQ54w.jpg" target="_blank">
            格鬥遊戲 AI 開發經驗談
          </cfp-agenda-card>
        </cfp-cards>
        <cfp-coc style="margin-top: 68px" />
      </cfp-glass-box>
      <cfp-glass-box>
        <cfp-block-title>投稿格式</cfp-block-title>
        <p>各議程類型的投稿格式相同，除標示為公開之資訊會對外公布外，其餘僅供審稿委員於審稿時閱讀。</p>

        <h3>稿件資訊</h3>
        <ul>
          <li>投稿類型：<strong>必填</strong>、<strong>公開</strong>。請寫明所欲投稿為何種議程類型（Presentation、Double Espresso、Espresso）。</li>
          <li>題目 Title：<strong>必填</strong>、<strong>公開</strong>。請不要超出 20 字。</li>
          <li>摘要 Abstract：<strong>必填</strong>、<strong>公開</strong>。建議含標點符號 150–250 字，使用於宣傳與網站公告。</li>
          <li>演講大綱 Outline：<strong>必填</strong>。請說明議程的內容大綱與時間分配。若為多位講者共同分享，請說明各個講者如何分配演講內容。</li>
          <li>目標聽眾 Target Audience：<strong>必填</strong>。請說明您期待該議程的目標聽眾，為怎麼樣的人。例如：「嚮往成為前端開發者的初學者」、「欲精進某技能的後端工程師」等。<br>
            在這邊為您提供過往兩年的會眾比例：<br>
            <ul>
              <li>大學生：55%</li>
              <li>高中生：25%</li>
              <li>研究生：10%</li>
              <li>社會人士：10%</li>
            </ul>
          </li>
          <li>先備知識 Prior Knowledge：<strong>必填</strong>、<strong>公開</strong>。請說明該議程的與會者所需具備的先備知識。例如：「能理解 Python 基礎語法」、「能熟練運用 Class 與 OOP」等。</li>
          <li>詳細說明 Description：<strong>必填</strong>。不限字數，請說明這個議程您認為重要的相關細節，以利審稿委員更瞭解您的議程。</li>
          <li>附件 Attachment：<strong>選填</strong>。可以附上程式碼、投影片草稿或任何您認為有助於我們瞭解您的議程的附件，請再三確認是否有開啟共用權限。</li>
        </ul>

        <cfp-submission-personal-info />
        <br>

        <cfp-block-title>審稿方式</cfp-block-title>
        <p>
          稿件均經議程組形式審查，交予該領域之審稿委員審稿。審稿委員由 SITCON 工作人員、業界人士及學界人士組成。<br>
          審稿委員將針對以下項目進行篩選：
        </p>
        <ul>
          <li><strong>稿件內容</strong>：知識分享、經驗案例、想法觀點是否獨特等。</li>
          <li><strong>表達能力</strong>：提供的資料是否有條理、文句暢通，以及提供資料之完整度。完整的資料能讓審稿委員更清楚了解演講細節。</li>
          <li><strong>適合聽眾</strong>：稿件是否適合 SITCON 大多數的與會者。經我們評估比較熱門的議程，將安排在較大的演講廳。</li>
        </ul>

        <br>
        <cfp-submission-notice />
      </cfp-glass-box>
      <cfp-glass-box last-child>
        <cfp-question-answer />
      </cfp-glass-box>
      <Footer />
    </div>
  </div>
</template>
<script setup>
const pageTitle = ref('一般議程')
const title = ref('SITCON X：一般議程徵稿')
const description = ref('一般議程依據時長分為 Presentation（四十分鐘）、Double Expresso（二十分鐘）與 Espresso （十分鐘）三種。SITCON 作為學生展現自己的舞台，我們期待以學生及資訊為主體的投稿。')
const image = ref('https://sitcon.org/2022/imgs/cfp/cfp-og.png')
</script>
