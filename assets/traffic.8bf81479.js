import{l,d as e,o as x,a as b,f as o,w as t,b as n,_ as M,s as $,h as p,p as j,g as L,x as N}from"./app.aaa4f4e9.js";import{_ as z}from"./HeadBlack.0ff8fa01.js";import{_ as B}from"./BlockTitle.4a5a6c89.js";import{_ as C}from"./GeneralHead.5abaa0cb.js";const H={class:"map-container"},V=["innerHTML"],E={name:"LocationMap",setup(c){const u=l("EPSG:4326"),_=l([121.6116,25.041]),s=l(15),a=l(0),i=l('\xA9 <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors');return(m,d)=>{const r=e("ol-view"),I=e("ol-source-osm"),S=e("ol-tile-layer"),f=e("ol-geom-point"),v=e("ol-style-icon"),g=e("ol-style"),h=e("ol-feature"),w=e("ol-source-vector"),y=e("ol-vector-layer"),T=e("ol-map");return x(),b("div",H,[o(T,{loadTilesWhileAnimating:!0,loadTilesWhileInteracting:!0,pixelRatio:2,id:"map"},{default:t(()=>[o(r,{ref:"view",center:_.value,rotation:a.value,zoom:s.value,projection:u.value},null,8,["center","rotation","zoom","projection"]),o(S,null,{default:t(()=>[o(I)]),_:1}),o(y,null,{default:t(()=>[o(w,null,{default:t(()=>[o(h,null,{default:t(()=>[o(f,{coordinates:_.value},null,8,["coordinates"]),o(g,null,{default:t(()=>[o(v,{src:"/2022/imgs/sitcon-stone.png",scale:.25},null,8,["src","scale"])]),_:1})]),_:1})]),_:1})]),_:1}),o(y,null,{default:t(()=>[o(w,null,{default:t(()=>[o(h,null,{default:t(()=>[o(f,{coordinates:[9.4001631,-66.6639189]},null,8,["coordinates"]),o(g,null,{default:t(()=>[o(v,{src:"/2022/imgs/pancake.png",scale:.25},null,8,["src","scale"])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),n("div",{class:"attribution",innerHTML:i.value},null,8,V)])}}};const G={},k=c=>(j("data-v-d9cd001a"),c=c(),L(),c),O={class:"container"},W=p("\u4EA4\u901A\u65B9\u5F0F"),A=k(()=>n("div",{class:"location-title"},"\u5730\u9EDE",-1)),P=k(()=>n("p",{class:"location-description"},[p("\u4E2D\u592E\u7814\u7A76\u9662\u4EBA\u6587\u793E\u6703\u79D1\u5B78\u9928"),n("br"),p(" \u53F0\u5317\u5E02\u5357\u6E2F\u5340\u7814\u7A76\u9662\u8DEF\u4E8C\u6BB5 128 \u865F")],-1)),R=["src"],X=["src"],q={class:"the-white-neko"};function D(c,u){const _=C,s=B,a=E,i=e("client-only"),m=z,d=N,r=$;return x(),b("div",O,[o(_,{"page-title":"\u4EA4\u901A\u65B9\u5F0F",title:"\u4EA4\u901A\u65B9\u5F0F | SITCON X",description:"\u5F9E\u5404\u5730\u62B5\u9054\u5E74\u6703\u6240\u5728\u5730\uFF08\u4E2D\u7814\u9662\u4EBA\u793E\u9928\uFF09\u7684\u5404\u7A2E\u65B9\u6CD5",image:"https://sitcon.org/2022/imgs/og.jpg"}),o(r,null,{default:t(()=>[o(s,null,{default:t(()=>[W]),_:1}),o(d,{class:"with-cat"},{default:t(()=>[A,P,o(i,null,{default:t(()=>[o(a)]),_:1}),n("img",{class:"traffic-flow",src:"/2022/imgs/traffic/traffic-flow.svg"},null,8,R),n("img",{class:"traffic-flow-mobile",src:"/2022/imgs/traffic/traffic-flow-mobile.svg"},null,8,X),n("div",q,[o(m)])]),_:1})]),_:1})])}var U=M(G,[["render",D],["__scopeId","data-v-d9cd001a"]]);export{U as default};
