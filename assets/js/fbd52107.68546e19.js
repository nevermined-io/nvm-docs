"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[406],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),u=s(r),m=a,f=u["".concat(l,".").concat(m)]||u[m]||p[m]||i;return r?n.createElement(f,o(o({ref:t},d),{},{components:r})):n.createElement(f,o({ref:t},d))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var s=2;s<i;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},52991:(e,t,r)=>{r.d(t,{Z:()=>y});var n=r(67294),a=r(86010),i=r(53438),o=r(39960),c=r(13919),l=r(95999);const s="cardContainer_fWXF",d="cardTitle_rnsV",p="cardDescription_PWke";function u(e){let{href:t,children:r}=e;return n.createElement(o.Z,{href:t,className:(0,a.Z)("card padding--lg",s)},r)}function m(e){let{href:t,icon:r,title:i,description:o}=e;return n.createElement(u,{href:t},n.createElement("h2",{className:(0,a.Z)("text--truncate",d),title:i},r," ",i),o&&n.createElement("p",{className:(0,a.Z)("text--truncate",p),title:o},o))}function f(e){let{item:t}=e;const r=(0,i.Wl)(t);return r?n.createElement(m,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,l.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function h(e){let{item:t}=e;const r=(0,c.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",a=(0,i.xz)(t.docId??void 0);return n.createElement(m,{href:t.href,icon:r,title:t.label,description:null==a?void 0:a.description})}function g(e){let{item:t}=e;switch(t.type){case"link":return n.createElement(h,{item:t});case"category":return n.createElement(f,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function v(e){let{className:t}=e;const r=(0,i.jA)();return n.createElement(y,{items:r.items,className:t})}function y(e){const{items:t,className:r}=e;if(!t)return n.createElement(v,e);const o=(0,i.MN)(t);return n.createElement("section",{className:(0,a.Z)("row",r)},o.map(((e,t)=>n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(g,{item:e})))))}},82884:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var n=r(87462),a=(r(67294),r(3905)),i=r(52991);const o={sidebar_position:1},c="What is the Nevermined Catalog?",l={unversionedId:"catalog/intro",id:"catalog/intro",title:"What is the Nevermined Catalog?",description:"The Nevermined Catalog is a library of packaged Nevermined functionalities making easier to add web3 capabilities to any existing React application.",source:"@site/docs/catalog/intro.md",sourceDirName:"catalog",slug:"/catalog/intro",permalink:"/docs/catalog/intro",draft:!1,editUrl:"https://github.com/nevermined-io/docs/tree/main/docs/catalog/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Digital Assets Marketplaces",permalink:"/docs/getting-started/marketplace"},next:{title:"What can I do with the catalog?",permalink:"/docs/catalog/functionalities"}},s={},d=[{value:"Core",id:"core",level:3},{value:"Providers",id:"providers",level:3},{value:"React Framework",id:"react-framework",level:2}],p={toc:d};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"what-is-the-nevermined-catalog"},"What is the Nevermined Catalog?"),(0,a.kt)("p",null,"The Nevermined Catalog is a library of packaged Nevermined functionalities making easier to add web3 capabilities to any existing React application."),(0,a.kt)("p",null,"Building web3 applications is tough, and building robust scenarios where content providers and final users can interact between them in a secure and trusted way is way more complecated even. Nevermined provides a protocol where they can interact and allow marketplaces or other web applications builders to offer use cases built on top of these capabilities."),(0,a.kt)("p",null,"To provide this level of interaction in a secure way, there are some level of integration with the different components of Nevermined. To facilitate that part we built this ",(0,a.kt)("strong",{parentName:"p"},"Nevermined Catalog")),(0,a.kt)("p",null,"The main intention of this project is provide the building blocks to create these level of robust applications without some of the complication of blockchain."),(0,a.kt)("p",null,"Some important characteristic of the Nevermined and by extension by the Catalog is you always own your keys/credentials. So with Nevermined you can implement fully functional use cases totally decentralized. This means the use cases that can be built via the Catalog allow the peer to peer interaction between content providers/producers and final users without a central entity."),(0,a.kt)("p",null,"The Catalog is splitted currently in two modules:"),(0,a.kt)("h3",{id:"core"},(0,a.kt)("a",{parentName:"h3",href:"/docs/catalog/core/"},"Core")),(0,a.kt)("p",null,"Includes all the Nevermined functionalities splitted in the ",(0,a.kt)("inlineCode",{parentName:"p"},"Catalog provider")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"Services"),". "),(0,a.kt)("h3",{id:"providers"},(0,a.kt)("a",{parentName:"h3",href:"/docs/catalog/providers/"},"Providers")),(0,a.kt)("p",null,"The Catalog exposes a package facilitating the interaction with Web3 providers like Metamask."),(0,a.kt)("h2",{id:"react-framework"},"React Framework"),(0,a.kt)("p",null,"Nevermined is framework agnostic, but we created this catalog on top of React to facilitate the integration of Nevermined to React builders. The same level of use cases/applications can be delivered in any other framework using the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.nevermined.io/docs/nevermined-sdk/"},"Nevermined SDK"),"."),(0,a.kt)(i.Z,{mdxType:"DocCardList"}))}u.isMDXComponent=!0}}]);