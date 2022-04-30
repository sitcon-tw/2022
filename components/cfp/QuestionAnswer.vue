<template>
    <div>
        <cfp-block-title>Q&A</cfp-block-title>
        <cfp-question-box>
            <template v-slot:title>Q：「先備知識」與「目標聽眾」有何不同？</template>
            A：「目標聽眾」表示您預期何種人將會前來參與該場議程，此欄位可能表示為與會者的興趣、生活環境抑或年齡層。「先備知識」表示對該議程有興趣者，您建議須先備哪些基礎技術、能力或經驗，有助於了解與吸收該場議程的知識精華。舉例而言，若一講題為「在營隊中使用虛擬貨幣」，則先備知識可能是「沒有」，目標聽眾可能是「有想要辦營隊的人」。而如果是有關 Julia 程式語言的演講，則先備知識可能是「知道平行運算是什麼」，目標受眾可能是「想用 Julia 做資料科學的人」。
        </cfp-question-box>
        <cfp-question-box>
            <template v-slot:title>Q：投稿主題是否有必要切合年會主題（Cat in a Maze）？</template>
            A：不用。審稿時僅會依照上文所述方式審查，不會因為切合主題就拿到比較高分，或因為與主題無關就被扣分。
        </cfp-question-box>
        <cfp-question-box>
            <template v-slot:title>Q：還有疑問怎麼辦？</template>
            A：歡迎寄信至 <a href="mailto:session@sitcon.org">session@sitcon.org</a> 詢問，我們會儘速回應。
        </cfp-question-box>
    </div>
</template>
