"use strict";(self.webpackChunknvm_docs=self.webpackChunknvm_docs||[]).push([[5635],{46215:(e,t,n)=>{n.d(t,{Z:()=>i});var s=n(67294),o=n(9669),r=n.n(o);var a=n(76798);const l=(0,a.CY)("blog",{blog:"blog_IQDh",blog__content:"blog__content_zw9B",blog__title:"blog__title_Smim","blog__pub-data":"blog__pub-data_YBEj"}),i=()=>{const[e,t]=(0,s.useState)([]),n=async()=>{const e=(await r().get("https://api.rss2json.com/v1/api.json",{params:{rss_url:"https://medium.com/feed/nevermined-io"}})).data.items.map((e=>{const t={...e};return t.content=(e=>{const t=(new DOMParser).parseFromString(e,"text/html");return t.querySelectorAll("a").forEach((e=>{if(e.hasAttribute("href")&&e.getAttribute("href").includes("/href")){const t=e.getAttribute("href"),n=document.createElement("img");e.parentElement.replaceChild(n,e),n.setAttribute("src",t),n.setAttribute("alt","Gift")}})),t.documentElement.innerHTML})(e.content),t}));t([...e])};return(0,s.useEffect)((()=>{n()}),[]),s.createElement("div",null,e.map((e=>s.createElement("div",{key:e.title,className:l("content")},s.createElement(a.II,{type:"h1",className:l("title")},e.title),s.createElement(a.II,{dangerouslySetInnerHTML:{__html:e.content},className:l("content")}),s.createElement(a.II,{type:"small",className:l("pub-data")},s.createElement("strong",null,"Published:")," ",e.pubDate)))))}},34038:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>m});var s=n(87462),o=(n(67294),n(3905)),r=n(46215);const a={sidebar_position:1,description:"Blog Posts"},l="The last 10 posts of Nevermined Medium",i={permalink:"/blog/index",editUrl:"https://github.com/nevermined-io/docs/tree/main/blog/blog/index.md",source:"@site/blog/index.md",title:"The last 10 posts of Nevermined Medium",description:"Blog Posts",date:"2022-09-19T07:04:39.000Z",formattedDate:"September 19, 2022",tags:[],readingTime:.025,hasTruncateMarker:!1,authors:[],frontMatter:{sidebar_position:1,description:"Blog Posts"}},c={authorsImageUrls:[]},m=[],d={toc:m};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,s.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(r.Z,{mdxType:"Blog"}))}u.isMDXComponent=!0}}]);