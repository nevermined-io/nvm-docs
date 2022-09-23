"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6805],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},m=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),p=l(r),d=a,f=p["".concat(s,".").concat(d)]||p[d]||u[d]||i;return r?n.createElement(f,o(o({ref:t},m),{},{components:r})):n.createElement(f,o({ref:t},m))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var l=2;l<i;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},52991:(e,t,r)=>{r.d(t,{Z:()=>b});var n=r(67294),a=r(86010),i=r(53438),o=r(39960),c=r(13919),s=r(95999);const l="cardContainer_fWXF",m="cardTitle_rnsV",u="cardDescription_PWke";function p(e){let{href:t,children:r}=e;return n.createElement(o.Z,{href:t,className:(0,a.Z)("card padding--lg",l)},r)}function d(e){let{href:t,icon:r,title:i,description:o}=e;return n.createElement(p,{href:t},n.createElement("h2",{className:(0,a.Z)("text--truncate",m),title:i},r," ",i),o&&n.createElement("p",{className:(0,a.Z)("text--truncate",u),title:o},o))}function f(e){let{item:t}=e;const r=(0,i.Wl)(t);return r?n.createElement(d,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,s.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function h(e){let{item:t}=e;const r=(0,c.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",a=(0,i.xz)(t.docId??void 0);return n.createElement(d,{href:t.href,icon:r,title:t.label,description:null==a?void 0:a.description})}function g(e){let{item:t}=e;switch(t.type){case"link":return n.createElement(h,{item:t});case"category":return n.createElement(f,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function y(e){let{className:t}=e;const r=(0,i.jA)();return n.createElement(b,{items:r.items,className:t})}function b(e){const{items:t,className:r}=e;if(!t)return n.createElement(y,e);const o=(0,i.MN)(t);return n.createElement("section",{className:(0,a.Z)("row",r)},o.map(((e,t)=>n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(g,{item:e})))))}},98600:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>m});var n=r(87462),a=(r(67294),r(3905)),i=r(52991);const o={sidebar_position:1,description:"Nevermined Smart Contracts"},c="Smart Contracts",s={unversionedId:"architecture/contracts/index",id:"architecture/contracts/index",title:"Smart Contracts",description:"Nevermined Smart Contracts",source:"@site/docs/architecture/contracts/index.md",sourceDirName:"architecture/contracts",slug:"/architecture/contracts/",permalink:"/docs/architecture/contracts/",draft:!1,editUrl:"https://github.com/nevermined-io/docs/tree/main/docs/architecture/contracts/index.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,description:"Nevermined Smart Contracts"},sidebar:"tutorialSidebar",previous:{title:"Building Blocks",permalink:"/docs/architecture/building-blocks"},next:{title:"Contracts ABIs",permalink:"/docs/architecture/contracts/ContractABIs"}},l={},m=[{value:"Main functionality",id:"main-functionality",level:2}],u={toc:m};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"smart-contracts"},"Smart Contracts"),(0,a.kt)("p",null,"Nevermined Smart Contracts implement the main business logic of all the Nevermined use cases that allow the trustless interaction between users for building digital assets ecosystems."),(0,a.kt)("admonition",{title:"Open Source",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"The Smart Contracts are Open Source software built in Solidity, allowing to be deployed in any EVM compatible network.")),(0,a.kt)("h2",{id:"main-functionality"},"Main functionality"),(0,a.kt)("p",null,"The Smart Contracts provide the following functionality:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"DID Registry")," - Nevermined uses W3C Decentralized Identifiers (DID) to identify and register assets in the platform. The DID Registry allows the registering and resolving capabilities of assets across multiple Metadata providers."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Service Execution Agreements (SEAs)")," - The core engine of the platform. They allow us to define on-chain condition pipelines enabling the users to define complex use cases. The SEAs orchestrate the execution of the Data Access and Data Computation use cases of Nevermined."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Conditions")," - Small modules that can be plugged into the SEAs allowing to add validations logic"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Contract Templates")," - Pre-defined contract templates implementing some basic use cases"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"ERC20 Token")," - Utility token used within the platform allowing to build all the payment mechanisms used across the system."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Configuration interface")," - Allowing to configure dynamically some of the internal parameters of Nevermined (for example via a DAO)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Dispenser")," - Contract that allows to dispense token under request"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Libraries")," - Utility libraries used across the contracts")),(0,a.kt)("p",null,"All the previous contracts are Open Source software and provide the core of the Nevermined network."),(0,a.kt)(i.Z,{mdxType:"DocCardList"}))}p.isMDXComponent=!0}}]);