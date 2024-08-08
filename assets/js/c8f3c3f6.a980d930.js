"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[732],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>f});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=n.createContext({}),l=function(e){var r=n.useContext(o),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},p=function(e){var r=l(e.components);return n.createElement(o.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(t),f=a,m=u["".concat(o,".").concat(f)]||u[f]||d[f]||i;return t?n.createElement(m,s(s({ref:r},p),{},{components:t})):n.createElement(m,s({ref:r},p))}));function f(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=t.length,s=new Array(i);s[0]=u;var c={};for(var o in r)hasOwnProperty.call(r,o)&&(c[o]=r[o]);c.originalType=e,c.mdxType="string"==typeof e?e:a,s[1]=c;for(var l=2;l<i;l++)s[l]=t[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},20253:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>o,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var n=t(87462),a=(t(67294),t(3905));const i={},s=void 0,c={unversionedId:"nevermined-sdk/api-reference/interfaces/SearchResults",id:"nevermined-sdk/api-reference/interfaces/SearchResults",title:"SearchResults",description:"@nevermined-io/sdk - v3.0.23-rc0 / SearchResults",source:"@site/docs/nevermined-sdk/api-reference/interfaces/SearchResults.md",sourceDirName:"nevermined-sdk/api-reference/interfaces",slug:"/nevermined-sdk/api-reference/interfaces/SearchResults",permalink:"/docs/nevermined-sdk/api-reference/interfaces/SearchResults",draft:!1,editUrl:"https://github.com/nevermined-io/docs/tree/main/docs/nevermined-sdk/api-reference/interfaces/SearchResults.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"SearchQuery",permalink:"/docs/nevermined-sdk/api-reference/interfaces/SearchQuery"},next:{title:"ServiceAccess",permalink:"/docs/nevermined-sdk/api-reference/interfaces/ServiceAccess"}},o={},l=[{value:"Table of contents",id:"table-of-contents",level:2},{value:"Properties",id:"properties",level:3},{value:"Properties",id:"properties-1",level:2},{value:"relation",id:"relation",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"value",id:"value",level:3},{value:"Defined in",id:"defined-in-1",level:4}],p={toc:l};function d(e){let{components:r,...t}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/nevermined-sdk/api-reference/code-reference"},"@nevermined-io/sdk - v3.0.23-rc0")," / SearchResults"),(0,a.kt)("h1",{id:"interface-searchresults"},"Interface: SearchResults"),(0,a.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,a.kt)("h3",{id:"properties"},"Properties"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/interfaces/SearchResults#relation"},"relation")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/interfaces/SearchResults#value"},"value"))),(0,a.kt)("h2",{id:"properties-1"},"Properties"),(0,a.kt)("h3",{id:"relation"},"relation"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"relation"),": ",(0,a.kt)("inlineCode",{parentName:"p"},'"eq"')," ","|"," ",(0,a.kt)("inlineCode",{parentName:"p"},'"gte"')),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/sdk-js/blob/0917aa7cdaec3f72007eb6710fe0bd1232cfb930/src/types/MetadataTypes.ts#L55"},"src/types/MetadataTypes.ts:55")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"value"},"value"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"value"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/sdk-js/blob/0917aa7cdaec3f72007eb6710fe0bd1232cfb930/src/types/MetadataTypes.ts#L54"},"src/types/MetadataTypes.ts:54")))}d.isMDXComponent=!0}}]);