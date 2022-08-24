<template>
  <div class="container">
    <GeneralHead
      page-title="大會活動"
      title="大會活動 | SITCON X"
      description="除了議程之外，還有這些活動等著你來參與！"
      image="https://sitcon.org/2022/imgs/og.jpg" />
    <arrow-box>
      <block-title>大會活動</block-title>
      <!-- <mint-box>
        <h1>不得不做的 25 件事</h1>
        <p>按按鈕開賓果</p>
        <div style="display: flex">
          <btn @click.native="dialogStore.thingsDialogOpened = true">按我按我按我按我按我</btn>
        </div>
      </mint-box> -->
      <mint-box>
        <h1>Activity</h1>
        <h3>你是第一次參加 SITCON 年會嗎？</h3>
        <ul>
          <li>
            <strong>導遊團</strong><br>
            <span>在人來人往的潮流中感到迷茫嗎？在大家邁著堅定步伐前往想去的地方同時，只有你不知該如何是好嗎？我們聽見你的聲音了！我們舉辦了導遊團的活動，獻給還不熟悉社群的你。來吧，跟隨導遊的腳步一同走訪總召、講者、攤位，以及回憶展，帶您一步一步了解 SITCON
              的精神，年會的分工以及運作模式，還在等什麼? 快來參與吧！</span>
          </li>
          <li>
            <strong>天使計畫</strong><br>
            <span>
              天使計劃是一個提供會眾們交流機會的活動，在主辦方配對後，讓有經驗的天使帶領初心者，協助他們更加瞭解這個年會。過去幾年的天使計劃活動好評不斷，因此今年將依照往年的舉辦方式，依照天使的意願，除了天使與初心者一對一的交流之外，也會有機會讓一位天使帶領三位初心者的情況，讓三位初心者能互相認識。
            </span>
          </li>
        </ul>
        <h3>有話想跟大家說，想要分享你的想法嗎？</h3>
        <ul>
          <li>
            <strong>Lightning Talk 閃電秀</strong><br>
            <span>Lightning Talk，中文譯為「閃電秀」，又稱 data blitz（資料閃電戰），顧名思義即為「閃電一般短的演講」， 包含準備與連接投影機的時間在內，每位講者僅有 3 分鐘的時間。<br />
              講者必須以飛快的速度，進行簡潔扼要的分享。要是沒能在 3 分鐘結束，將被直接切斷訊號！對於講者，以及聽眾，都是十分刺激又轟動全場的體驗唷！<br />
              Lightning Talk 在年會當天早上開放報名，並於所有議程結束後、閉幕前進行演講，敬請期待！</span>
          </li>
          <li>
            <strong>開放式議程</strong><br>
            <span>跳脫傳統的單向資訊傳輸，我們隆重為各位推出：主打講者和與會者能互相交流的開放式議程！<br />
              希望透過講者拋磚引玉，以自己的經歷或問題，帶動與會者思考，並即時反饋給講者，進而激發出更多觀點與討論！在這個議程中，您將會是議程的一部份，若想獲得與眾不同的參與體驗，就絕對不能錯過。</span>
          </li>
          <li>
            <strong>白板大戰</strong><br>
            <span>不論你是要宣傳社團、戰程式語言、畫一隻貓、還是只是想說個嗨，白板大戰就是你的天空，透過揮灑的墨水，讓不同想法思想相互交織。<br />
              走過白板區千萬不要錯過，找到你有興趣的主題，拿起筆在 SITCON X 留下你的足跡吧！</span>
          </li>
        </ul>
        <h3>議程之間不知道要幹嘛嗎？</h3>
        <ul>
          <li>
            <strong>回憶展</strong><br>
            <span>十周年！我們在年會各處展出了 SITCON 十年來留下的點點滴滴！<br />
              我們將展出 SITCON 的各種回憶，往年的活動照片、年會的裝置藝術以及各件活動紀念衫等等，甚至會復刻一件當天呼聲最高的絕版紀念衫！<br />
              對於第一次接觸 SITCON 的與會者，能夠迅速了解 SITCON 的種種事蹟，更能了解 SITCON 設立的目標與初心。如果你是長期參與 SITCON 的與會者，也可以回憶當初經歷過的酸甜苦辣，並對於同一份回憶產生不同的共鳴。</span>
          </li>
          <li>
            <strong>社群攤位</strong><br>
            <span>為了能夠促進會眾與學生社團或相關資訊社群的交流，SITCON 邀請了許多社群前來年會擺攤。在聽完議程意猶未盡之餘，別忘到社群逛逛。在吸取知識的同時，更能充分交流，收穫滿滿！</span>
          </li>
          <li>
            <strong>程式碼拼圖</strong><br>
            <span>沒有議程的時候不知道要做什麼？想跟現場攤位互動卻又不知道從什麼話題開始？那就打開 OPass 參加程式碼拼圖吧！不只考驗自身的解題邏輯，更需要互相合作、四處探索才能解開所有謎題！您能找到在會場各個攤位散落的碎片，與同伴一起解開小石與貓貓設下的五個關卡嗎？<br />今年程式碼拼圖全部解開的人可以獲得一份精美獎品，並獲得抽獎資格喔！獎品數量有限，採先到先得、換完為止！</span>
          </li>
        </ul>
      </mint-box>
    </arrow-box>
  </div>
</template>

<style lang="sass" scoped>
</style>
<script>

import { useDialogStore } from '../store/dialog'
export default {
  setup() {
    const dialogStore = useDialogStore()
    return { dialogStore }
  },
}
</script>