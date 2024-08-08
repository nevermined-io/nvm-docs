"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7662],{3905:(e,r,n)=>{n.d(r,{Zo:()=>l,kt:()=>f});var t=n(67294);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function c(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?c(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function s(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},c=Object.keys(e);for(t=0;t<c.length;t++)n=c[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(t=0;t<c.length;t++)n=c[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=t.createContext({}),p=function(e){var r=t.useContext(o),n=r;return e&&(n="function"==typeof e?e(r):i(i({},r),e)),n},l=function(e){var r=p(e.components);return t.createElement(o.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},m=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,c=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=p(n),f=a,u=m["".concat(o,".").concat(f)]||m[f]||d[f]||c;return n?t.createElement(u,i(i({ref:r},l),{},{components:n})):t.createElement(u,i({ref:r},l))}));function f(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var c=n.length,i=new Array(c);i[0]=m;var s={};for(var o in r)hasOwnProperty.call(r,o)&&(s[o]=r[o]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<c;p++)i[p]=n[p];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}m.displayName="MDXCreateElement"},11485:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>o,contentTitle:()=>i,default:()=>d,frontMatter:()=>c,metadata:()=>s,toc:()=>p});var t=n(87462),a=(n(67294),n(3905));const c={},i=void 0,s={unversionedId:"nevermined-sdk/api-reference/interfaces/AccessProofTemplateParams",id:"nevermined-sdk/api-reference/interfaces/AccessProofTemplateParams",title:"AccessProofTemplateParams",description:"@nevermined-io/sdk - v3.0.23-rc0 / AccessProofTemplateParams",source:"@site/docs/nevermined-sdk/api-reference/interfaces/AccessProofTemplateParams.md",sourceDirName:"nevermined-sdk/api-reference/interfaces",slug:"/nevermined-sdk/api-reference/interfaces/AccessProofTemplateParams",permalink:"/docs/nevermined-sdk/api-reference/interfaces/AccessProofTemplateParams",draft:!1,editUrl:"https://github.com/nevermined-io/docs/tree/main/docs/nevermined-sdk/api-reference/interfaces/AccessProofTemplateParams.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"ValueType",permalink:"/docs/nevermined-sdk/api-reference/enums/ValueType"},next:{title:"ActedOnBehalfEvent",permalink:"/docs/nevermined-sdk/api-reference/interfaces/ActedOnBehalfEvent"}},o={},p=[{value:"Table of contents",id:"table-of-contents",level:2},{value:"Properties",id:"properties",level:3},{value:"Properties",id:"properties-1",level:2},{value:"consumer",id:"consumer",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"consumerId",id:"consumerid",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"type",id:"type",level:3},{value:"Defined in",id:"defined-in-2",level:4}],l={toc:p};function d(e){let{components:r,...n}=e;return(0,a.kt)("wrapper",(0,t.Z)({},l,n,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/nevermined-sdk/api-reference/code-reference"},"@nevermined-io/sdk - v3.0.23-rc0")," / AccessProofTemplateParams"),(0,a.kt)("h1",{id:"interface-accessprooftemplateparams"},"Interface: AccessProofTemplateParams"),(0,a.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,a.kt)("h3",{id:"properties"},"Properties"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/interfaces/AccessProofTemplateParams#consumer"},"consumer")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/interfaces/AccessProofTemplateParams#consumerid"},"consumerId")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/interfaces/AccessProofTemplateParams#type"},"type"))),(0,a.kt)("h2",{id:"properties-1"},"Properties"),(0,a.kt)("h3",{id:"consumer"},"consumer"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"consumer"),": ",(0,a.kt)("a",{parentName:"p",href:"/docs/nevermined-sdk/api-reference/classes/NvmAccount"},(0,a.kt)("inlineCode",{parentName:"a"},"NvmAccount"))),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/sdk-js/blob/0917aa7cdaec3f72007eb6710fe0bd1232cfb930/src/nevermined/AccessService.ts#L24"},"src/nevermined/AccessService.ts:24")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"consumerid"},"consumerId"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"consumerId"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/sdk-js/blob/0917aa7cdaec3f72007eb6710fe0bd1232cfb930/src/nevermined/AccessService.ts#L25"},"src/nevermined/AccessService.ts:25")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"type"},"type"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"type"),": ",(0,a.kt)("inlineCode",{parentName:"p"},'"access-proof"')),(0,a.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/sdk-js/blob/0917aa7cdaec3f72007eb6710fe0bd1232cfb930/src/nevermined/AccessService.ts#L23"},"src/nevermined/AccessService.ts:23")))}d.isMDXComponent=!0}}]);