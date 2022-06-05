// 將人事表轉換為網站的 json 格式
// 1. 下載 csv
// https://docs.google.com/spreadsheets/d/1P6OJzxRu3pSbTCltH-huaGrQka2NMKSbEWgEB6H-STA/edit#gid=1610495860
// 2. 放在相同資料夾下
// 3. 執行 node teams_parser.js
const fs = require('fs');
const md5 = require('md5');
const results = {};
const file = 'SITCON 2022 工作人員登錄狀況 - 工人名單（已刪除移除工人）.csv';
const data = fs.readFileSync(file, 'utf8');
const lines = data.split('\n');
const intros = {
  "總召組": "掌握協調年會籌備進度，主持核心討論及決策。",
  "行政組": "負責維持年會常務行政事務；工作分為人事、票務，負責工作人員登記、與會人員與報名事宜。",
  "議程組": "議程組負責一切與議程相關的事情，舉凡投稿與審稿、講者聯繫、Keynote 與論壇的安排，都是議程組的工作範圍，此外，議程組也負責一部分的大會活動。",
  "行銷組": "行銷組是銜接 SITCON 與社會的橋樑，負責探詢潛在的合作單位，連結更多支持 SITCON 理念的社群夥伴、媒體與贊助商，讓 SITCON 能被更多人看見。",
  "場務組": "SITCON 場務組主要負責年會的機動人力、動線、餐飲、報到、物流和防疫的規劃，是人數最多的一組，適合最有熱情、最有活力的朋友們！",
  "設計組": "負責年會主視覺設計、網站設計、相關紀念品發想<del>挖坑</del>等事宜，開場動畫與許多會場內的印刷品也都是由設計組設計。",
  "財務組": "負責年會與金錢相關的業務。",
  "紀錄組": "協助年會與相關活動之影像紀錄，及提供各組所需之影像素材。",
  "開發組": "SITCON 開發組主要負責年會的官網與通關 App 開發，適合對網頁開發有興趣、想法，有新鮮肝可以炸的朋友們！\n\n",
  "編輯組": "SITCON 編輯組負責年會的社群媒體經營與互動，包含：Facebook、Instagram、Plurk、Twitter、Telegram Channel。以及開源相關活動推廣與其他組別公告事項、大會公告等文案撰寫需求。適合對社群媒體經營有興趣，有新鮮腦汁可以榨的朋友們！",
  "製播組": "協助年會當天各會議廳之錄影及直播，並處理議程演講的剪接後製。",
}
// drop first 3 line
lines.shift();
lines.shift();
lines.shift();
lines.shift();
let teamName = ''
lines.forEach(line => {
  const cells = line.replace(/\r/g, '').split(',');
  if (cells[0] !== '') {
    teamName = cells[0]
  }
  if (!results[teamName]) {
    results[teamName] = {
      name: teamName,
      intro: intros[teamName],
      members: []
    }
  }
  results[teamName].members.push({
    name: cells[1],
    type: cells[2],
    emailHash: md5(cells[3]),
  })
})
fs.writeFileSync('teams.json', JSON.stringify(results, null, 2));
console.log('done');
