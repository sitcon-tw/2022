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
        <h1 class="text-center">開放式議程</h1>
        <cfp-divider />
        <cfp-timer :ended-time="new Date('2022-06-26T23:59:00+08:00')" />
        <cfp-submission-btn href="https://forms.gle/pzuULG94mB7ko2ao8" />
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
        <cfp-block-title>投稿格式</cfp-block-title>
        <p>除標示為公開之資訊會對外公布外，其餘僅供審稿委員於審稿時閱讀。</p>

        <h3>稿件資訊</h3>
        <ul>
          <li>題目 Title：<strong>必填</strong>、<strong>公開</strong>。請不要超出 20 字。</li>
          <li>摘要 Abstract：<strong>必填</strong>、<strong>公開</strong>。建議 150–250 字，使用於宣傳與網站公告。</li>
          <li>進行模式 Method : <strong>必填</strong>、<strong>公開</strong>，不限字數。請詳細說明該議程預計如何和會眾互動，以及是否需要額外的工具，此項目將幫助會眾預期該如何參與此議程。</li>
          <li>議程大綱 Outline：<strong>必填</strong>。請說明該開放式議程的大綱及時間長度規劃。</li>
          <li>目標受眾 Target Audience：<strong>必填</strong>。請說明您期待該議程的目標受眾為怎麼樣的人。例如：「嚮往成為前端開發者的初學者」、「不知道該不該讀研究所的學生」等。</li>
          <li>先備知識 Prior Knowledge：<strong>必填</strong>、<strong>公開</strong>。請說明該議程的與會者所需具備的先備知識。例如：「能理解 Python 基礎語法」、「略懂 108 課綱現況」等。</li>
          <li>詳細說明 Description：<strong>必填</strong>、<strong>不限字數</strong>。請說明這個議程您認為重要的相關細節，以利審稿委員更瞭解您的議程。</li>
          <li>附件 Attachment：<strong>選填</strong>。可以附上程式碼、投影片草稿或任何您認為有助於我們瞭解您議程的附件。</li>
        </ul>

        <cfp-submission-persional-info />
        <br>

        <cfp-block-title>審稿方式</cfp-block-title>
        <p>
          稿件均經議程組形式審查，交予該領域之審稿委員審稿。審稿委員由 SITCON 工作人員、業界人士及學界人士組成。<br>
          審稿委員將針對以下項目進行篩選：
        </p>
        <ul>
          <li>稿件內容：講者是否熟悉這個題目、和會眾的交流效果、可執行性等等。</li>
          <li>表達能力：提供的資料是否有條理、文句暢通，提供資料（尤其是稿件的詳細說明）之完整度。我們偏好完整的資料，讓審稿委員更清楚了解演講細節。</li>
          <li>適合聽眾：稿件是否適合 SITCON 大多數的與會者討論。</li>
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
const pageTitle = ref('開放式議程')
const title = ref('SITCON X：開放式議程徵稿')
const description = ref('開放式議程跳脫講者對聽眾單向陳述式的演講，更加強調主講者和與會者的雙向交流。SITCON 作為學生展現自己的舞台，我們期待以學生為主體的投稿，可以是從學生角度出發的經驗分享、技術分享，或是一同探討學生相關議題等。')
const image = ref('https://sitcon.org/2022/imgs/cfp/cfp-og.png')
</script>
