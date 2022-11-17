"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8260],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),p=s(n),u=i,f=p["".concat(l,".").concat(u)]||p[u]||m[u]||o;return n?r.createElement(f,a(a({ref:t},d),{},{components:n})):r.createElement(f,a({ref:t},d))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var s=2;s<o;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},93609:(e,t,n)=>{n.d(t,{Z:()=>y});var r=n(67294),i=n(86010),o=n(53438),a=n(39960),c=n(13919),l=n(95999),s=n(69621);function d(e){let{href:t,children:n}=e;return r.createElement(a.Z,{href:t,className:(0,i.default)("card padding--lg",s.Z.cardContainer)},n)}function m(e){let{href:t,icon:n,title:o,description:a}=e;return r.createElement(d,{href:t},r.createElement("h2",{className:(0,i.default)("text--truncate",s.Z.cardTitle),title:o},n," ",o),a&&r.createElement("p",{className:(0,i.default)("text--truncate",s.Z.cardDescription),title:a},a))}function p(e){let{item:t}=e;const n=(0,o.Wl)(t);return n?r.createElement(m,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,l.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function u(e){let{item:t}=e;const n=(0,c.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",i=(0,o.xz)(t.docId??void 0);return r.createElement(m,{href:t.href,icon:n,title:t.label,description:null==i?void 0:i.description})}function f(e){let{item:t}=e;switch(t.type){case"link":return r.createElement(u,{item:t});case"category":return r.createElement(p,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function h(e){let{className:t}=e;const n=(0,o.jA)();return r.createElement(y,{items:n.items,className:t})}function y(e){const{items:t,className:n}=e;if(!t)return r.createElement(h,e);const a=(0,o.MN)(t);return r.createElement("section",{className:(0,i.default)("row",n)},a.map(((e,t)=>r.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},r.createElement(f,{item:e})))))}},66697:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var r=n(87462),i=(n(67294),n(3905)),o=n(93609);const a={sidebar_position:1},c="Nevermined CLI",l={unversionedId:"cli/index",id:"cli/index",title:"Nevermined CLI",description:"The Nevermined CLI (aka NVM CLI or ncli) permits Nevermined deployment from the command line interface supporting everything from a traditional Nevermined web environment like a Marketplace to a DApp.",source:"@site/docs/cli/index.mdx",sourceDirName:"cli",slug:"/cli/",permalink:"/docs/cli/",draft:!1,editUrl:"https://github.com/nevermined-io/docs/tree/main/docs/cli/index.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"utils",permalink:"/docs/nevermined-sdk/api-reference/modules/utils"},next:{title:"Getting Started",permalink:"/docs/cli/getting-started"}},s={},d=[],m={toc:d};function p(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"nevermined-cli"},"Nevermined CLI"),(0,i.kt)("p",null,"The Nevermined CLI (aka NVM CLI or ",(0,i.kt)("inlineCode",{parentName:"p"},"ncli"),") permits Nevermined deployment from the command line interface supporting everything from a traditional Nevermined web environment like a Marketplace to a DApp."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"ncli")," allows to connect to a local Nevermined environment (see in the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.nevermined.io/docs/tutorials/running-locally"},"Nevermined Tools tutorial")," how to do that) or with a remote one."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"ncli")," is Open Source software and the code can be found in the directory ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/cli/"},"Nevermined CLI Github repository"),"."),(0,i.kt)("p",null,"In the following sections you will find more information about how to install and use the ",(0,i.kt)("inlineCode",{parentName:"p"},"ncli"),":"),(0,i.kt)(o.Z,{mdxType:"DocCardList"}))}p.isMDXComponent=!0},69621:(e,t,n)=>{n.d(t,{Z:()=>r});const r={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"}}}]);