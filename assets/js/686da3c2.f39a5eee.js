"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3240],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>u});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=r.createContext({}),d=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},l=function(e){var t=d(e.components);return r.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),f=d(n),u=i,m=f["".concat(o,".").concat(u)]||f[u]||c[u]||a;return n?r.createElement(m,p(p({ref:t},l),{},{components:n})):r.createElement(m,p({ref:t},l))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,p=new Array(a);p[0]=f;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:i,p[1]=s;for(var d=2;d<a;d++)p[d]=n[d];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},17830:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>p,default:()=>c,frontMatter:()=>a,metadata:()=>s,toc:()=>d});var r=n(87462),i=(n(67294),n(3905));const a={},p=void 0,s={unversionedId:"nevermined-sdk/api-reference/interfaces/Stage",id:"nevermined-sdk/api-reference/interfaces/Stage",title:"Stage",description:"@nevermined-io/sdk - v3.0.44 / Stage",source:"@site/docs/nevermined-sdk/api-reference/interfaces/Stage.md",sourceDirName:"nevermined-sdk/api-reference/interfaces",slug:"/nevermined-sdk/api-reference/interfaces/Stage",permalink:"/docs/nevermined-sdk/api-reference/interfaces/Stage",draft:!1,editUrl:"https://github.com/nevermined-io/docs/tree/main/docs/nevermined-sdk/api-reference/interfaces/Stage.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"ServiceSecondary",permalink:"/docs/nevermined-sdk/api-reference/interfaces/ServiceSecondary"},next:{title:"StageInput",permalink:"/docs/nevermined-sdk/api-reference/interfaces/StageInput"}},o={},d=[{value:"Table of contents",id:"table-of-contents",level:2},{value:"Properties",id:"properties",level:3},{value:"Properties",id:"properties-1",level:2},{value:"index",id:"index",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"input",id:"input",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"output",id:"output",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"stageType",id:"stagetype",level:3},{value:"Defined in",id:"defined-in-3",level:4},{value:"transformation",id:"transformation",level:3},{value:"Defined in",id:"defined-in-4",level:4}],l={toc:d};function c(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/nevermined-sdk/api-reference/code-reference"},"@nevermined-io/sdk - v3.0.44")," / Stage"),(0,i.kt)("h1",{id:"interface-stage"},"Interface: Stage"),(0,i.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,i.kt)("h3",{id:"properties"},"Properties"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/interfaces/Stage#index"},"index")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/interfaces/Stage#input"},"input")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/interfaces/Stage#output"},"output")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/interfaces/Stage#stagetype"},"stageType")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/interfaces/Stage#transformation"},"transformation"))),(0,i.kt)("h2",{id:"properties-1"},"Properties"),(0,i.kt)("h3",{id:"index"},"index"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"index"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number")),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/sdk-js/blob/1f765603c75b92c5d8798f51b63641eb0639883b/src/types/DDOTypes.ts#L54"},"src/types/DDOTypes.ts:54")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"input"},"input"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"input"),": ",(0,i.kt)("a",{parentName:"p",href:"/docs/nevermined-sdk/api-reference/interfaces/StageInput"},(0,i.kt)("inlineCode",{parentName:"a"},"StageInput")),"[]"),(0,i.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/sdk-js/blob/1f765603c75b92c5d8798f51b63641eb0639883b/src/types/DDOTypes.ts#L56"},"src/types/DDOTypes.ts:56")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"output"},"output"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"output"),": ",(0,i.kt)("a",{parentName:"p",href:"/docs/nevermined-sdk/api-reference/interfaces/StageOutput"},(0,i.kt)("inlineCode",{parentName:"a"},"StageOutput"))),(0,i.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/sdk-js/blob/1f765603c75b92c5d8798f51b63641eb0639883b/src/types/DDOTypes.ts#L58"},"src/types/DDOTypes.ts:58")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"stagetype"},"stageType"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"stageType"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/sdk-js/blob/1f765603c75b92c5d8798f51b63641eb0639883b/src/types/DDOTypes.ts#L55"},"src/types/DDOTypes.ts:55")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"transformation"},"transformation"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"transformation"),": ",(0,i.kt)("a",{parentName:"p",href:"/docs/nevermined-sdk/api-reference/interfaces/StageTransformation"},(0,i.kt)("inlineCode",{parentName:"a"},"StageTransformation"))),(0,i.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/sdk-js/blob/1f765603c75b92c5d8798f51b63641eb0639883b/src/types/DDOTypes.ts#L57"},"src/types/DDOTypes.ts:57")))}c.isMDXComponent=!0}}]);