 <template>
  <div class="cfp-page">
    <GeneralHead
      page-title="開放式議程"
      title="SITCON X：開放式議程徵稿"
      description="開放式議程跳脫講者對聽眾單向陳述式的演講，更加強調主講者和與會者的雙向交流。SITCON 作為學生展現自己的舞台，我們期待以學生及資訊為主體的投稿。"
      image="https://sitcon.org/2022/imgs/cfp/cfp-og.png"
      :cfp="true" />
    <div class="maze-background">
      <cfp-glass-box first-child>
        <cfp-back-btn />
        <logo-cat-in-a-maze />
        <h1 class="text-center">開放式議程</h1>
        <cfp-divider />
        <cfp-timer :ended-time="new Date('2022-06-26T23:59:59+08:00')" />
        <cfp-submission-btn href="https://forms.gle/pzuULG94mB7ko2ao8" />
        <cfp-divider />
        <cfp-block-title>重要時程</cfp-block-title>
        <cfp-schedule />
        <cfp-block-title>議程種類</cfp-block-title>
        <cfp-agenda-type />
        <cfp-block-title>什麼是開放式議程？</cfp-block-title>
        <p>在追求創新的時代，我們為講者提供了開放式議程這個選項，跳脫講者對聽眾單向陳述式的演講，開放式議程更加強調主講者和與會者的<strong>雙向交流</strong>。SITCON
          作為學生展現自己的舞台，我們期待以學生為主體的投稿，可以是從學生角度出發的經驗分享、技術分享，或是一同探討學生相關議題等。
          <br>
          <br>
          對於還在猶豫的講者們，以下是我們提供的幾種議程形式範例：
        </p>
        <cfp-session-type-card />
        <cfp-coc />
      </cfp-glass-box>
      <cfp-glass-box>
        <cfp-block-title>投稿格式</cfp-block-title>
        <p>除標示為公開之資訊會對外公布外，其餘僅供審稿委員於審稿時閱讀。</p>

        <h3>稿件資訊</h3>
        <ul>
          <li>題目 Title：<strong>必填</strong>、<strong>公開</strong>。請不要超出 20 字。</li>
          <li>摘要 Abstract：<strong>必填</strong>、<strong>公開</strong>。建議 150–250 字，使用於宣傳與網站公告。</li>
          <li>進行模式 Method : <strong>必填</strong>、<strong>公開</strong>。不限字數，請詳細說明該議程預計如何和會眾互動，以及是否需要額外的工具，此項目將幫助會眾預期該如何參與此議程。</li>
          <li>議程大綱 Outline：<strong>必填</strong>。請說明該開放式議程的大綱及時間長度規劃。</li>
          <li>目標受眾 Target Audience：<strong>必填</strong>。請說明您期待該議程的目標受眾為怎麼樣的人。例如：「嚮往成為前端開發者的初學者」、「不知道該不該讀研究所的學生」等。</li>
          <li>先備知識 Prior Knowledge：<strong>必填</strong>、<strong>公開</strong>。請說明該議程的與會者所需具備的先備知識。例如：「能理解 Python 基礎語法」、「略懂 108 課綱現況」等。</li>
          <li>詳細說明 Description：<strong>必填</strong>。不限字數，請說明這個議程您認為重要的相關細節，以利審稿委員更瞭解您的議程。</li>
          <li>附件 Attachment：<strong>選填</strong>。可以附上程式碼、投影片草稿或任何您認為有助於我們瞭解您議程的附件，請再三確認是否有開啟共用權限。</li>
        </ul>

        <cfp-submission-personal-info />
        <br>

        <cfp-block-title>審稿方式</cfp-block-title>
        <p>
          稿件均經議程組形式審查，交予該領域之審稿委員審稿。審稿委員由 SITCON 工作人員、業界人士及學界人士組成。<br>
          審稿委員將針對以下項目進行篩選：
        </p>
        <ul>
          <li><strong>稿件內容</strong>：講者是否熟悉這個題目、和會眾的交流效果、可執行性等等。</li>
          <li><strong>表達能力</strong>：提供的資料是否有條理、文句暢通，提供資料（尤其是稿件的詳細說明）之完整度。我們偏好完整的資料，讓審稿委員更清楚了解演講細節。</li>
          <li><strong>適合聽眾</strong>：稿件是否適合 SITCON 大多數的與會者討論。</li>
        </ul>

        <br>
        <cfp-submission-notice />
      </cfp-glass-box>
      <cfp-glass-box last-child>
        <cfp-question-answer />
      </cfp-glass-box>
      <cfp-footer />
    </div>
  </div>
</template>