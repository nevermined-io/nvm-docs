"use strict";(self.webpackChunknvm_docs=self.webpackChunknvm_docs||[]).push([[4903],{3905:(e,t,n)=>{n.d(t,{Zo:()=>o,kt:()=>f});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):d(d({},t),e)),n},o=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,o=s(e,["components","mdxType","originalType","parentName"]),k=c(n),f=i,m=k["".concat(l,".").concat(f)]||k[f]||p[f]||a;return n?r.createElement(m,d(d({ref:t},o),{},{components:n})):r.createElement(m,d({ref:t},o))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,d=new Array(a);d[0]=k;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,d[1]=s;for(var c=2;c<a;c++)d[c]=n[c];return r.createElement.apply(null,d)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},80885:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>d,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var r=n(87462),i=(n(67294),n(3905));const a={},d=void 0,s={unversionedId:"nevermined-sdk/api-reference/interfaces/ProvenanceRegistry",id:"nevermined-sdk/api-reference/interfaces/ProvenanceRegistry",title:"ProvenanceRegistry",description:"@nevermined-io/nevermined-sdk-js / ProvenanceRegistry",source:"@site/docs/nevermined-sdk/api-reference/interfaces/ProvenanceRegistry.md",sourceDirName:"nevermined-sdk/api-reference/interfaces",slug:"/nevermined-sdk/api-reference/interfaces/ProvenanceRegistry",permalink:"/docs/nevermined-sdk/api-reference/interfaces/ProvenanceRegistry",draft:!1,editUrl:"https://github.com/nevermined-io/docs/tree/main/docs/nevermined-sdk/api-reference/interfaces/ProvenanceRegistry.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Profile",permalink:"/docs/nevermined-sdk/api-reference/interfaces/Profile"},next:{title:"SearchQuery",permalink:"/docs/nevermined-sdk/api-reference/interfaces/SearchQuery"}},l={},c=[{value:"Table of contents",id:"table-of-contents",level:2},{value:"Properties",id:"properties",level:3},{value:"Properties",id:"properties-1",level:2},{value:"activityId",id:"activityid",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"agentId",id:"agentid",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"agentInvolvedId",id:"agentinvolvedid",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"blockNumberUpdated",id:"blocknumberupdated",level:3},{value:"Defined in",id:"defined-in-3",level:4},{value:"createdBy",id:"createdby",level:3},{value:"Defined in",id:"defined-in-4",level:4},{value:"did",id:"did",level:3},{value:"Defined in",id:"defined-in-5",level:4},{value:"method",id:"method",level:3},{value:"Defined in",id:"defined-in-6",level:4},{value:"relatedDid",id:"relateddid",level:3},{value:"Defined in",id:"defined-in-7",level:4},{value:"signatureDelegate",id:"signaturedelegate",level:3},{value:"Defined in",id:"defined-in-8",level:4}],o={toc:c};function p(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/nevermined-sdk/api-reference/code-reference"},"@nevermined-io/nevermined-sdk-js")," / ProvenanceRegistry"),(0,i.kt)("h1",{id:"interface-provenanceregistry"},"Interface: ProvenanceRegistry"),(0,i.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,i.kt)("h3",{id:"properties"},"Properties"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/interfaces/ProvenanceRegistry#activityid"},"activityId")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/interfaces/ProvenanceRegistry#agentid"},"agentId")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/interfaces/ProvenanceRegistry#agentinvolvedid"},"agentInvolvedId")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/interfaces/ProvenanceRegistry#blocknumberupdated"},"blockNumberUpdated")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/interfaces/ProvenanceRegistry#createdby"},"createdBy")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/interfaces/ProvenanceRegistry#did"},"did")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/interfaces/ProvenanceRegistry#method"},"method")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/interfaces/ProvenanceRegistry#relateddid"},"relatedDid")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/interfaces/ProvenanceRegistry#signaturedelegate"},"signatureDelegate"))),(0,i.kt)("h2",{id:"properties-1"},"Properties"),(0,i.kt)("h3",{id:"activityid"},"activityId"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"activityId"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/sdk-js/blob/2dcaeeb/src/keeper/contracts/DIDRegistry.ts#L26"},"src/keeper/contracts/DIDRegistry.ts:26")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"agentid"},"agentId"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"agentId"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/sdk-js/blob/2dcaeeb/src/keeper/contracts/DIDRegistry.ts#L25"},"src/keeper/contracts/DIDRegistry.ts:25")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"agentinvolvedid"},"agentInvolvedId"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"agentInvolvedId"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/sdk-js/blob/2dcaeeb/src/keeper/contracts/DIDRegistry.ts#L27"},"src/keeper/contracts/DIDRegistry.ts:27")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"blocknumberupdated"},"blockNumberUpdated"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"blockNumberUpdated"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number")),(0,i.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/sdk-js/blob/2dcaeeb/src/keeper/contracts/DIDRegistry.ts#L30"},"src/keeper/contracts/DIDRegistry.ts:30")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"createdby"},"createdBy"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"createdBy"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/sdk-js/blob/2dcaeeb/src/keeper/contracts/DIDRegistry.ts#L29"},"src/keeper/contracts/DIDRegistry.ts:29")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"did"},"did"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"did"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/sdk-js/blob/2dcaeeb/src/keeper/contracts/DIDRegistry.ts#L23"},"src/keeper/contracts/DIDRegistry.ts:23")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"method"},"method"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"method"),": ",(0,i.kt)("a",{parentName:"p",href:"/docs/nevermined-sdk/api-reference/enums/ProvenanceMethod"},(0,i.kt)("inlineCode",{parentName:"a"},"ProvenanceMethod"))),(0,i.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/sdk-js/blob/2dcaeeb/src/keeper/contracts/DIDRegistry.ts#L28"},"src/keeper/contracts/DIDRegistry.ts:28")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"relateddid"},"relatedDid"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"relatedDid"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("h4",{id:"defined-in-7"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/sdk-js/blob/2dcaeeb/src/keeper/contracts/DIDRegistry.ts#L24"},"src/keeper/contracts/DIDRegistry.ts:24")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"signaturedelegate"},"signatureDelegate"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"signatureDelegate"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("h4",{id:"defined-in-8"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/sdk-js/blob/2dcaeeb/src/keeper/contracts/DIDRegistry.ts#L31"},"src/keeper/contracts/DIDRegistry.ts:31")))}p.isMDXComponent=!0}}]);