"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4903],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>f});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function d(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),o=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):d(d({},n),e)),t},s=function(e){var n=o(e.components);return r.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},v=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),v=o(t),f=a,k=v["".concat(l,".").concat(f)]||v[f]||p[f]||i;return t?r.createElement(k,d(d({ref:n},s),{},{components:t})):r.createElement(k,d({ref:n},s))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,d=new Array(i);d[0]=v;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,d[1]=c;for(var o=2;o<i;o++)d[o]=t[o];return r.createElement.apply(null,d)}return r.createElement.apply(null,t)}v.displayName="MDXCreateElement"},80885:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>d,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>o});var r=t(87462),a=(t(67294),t(3905));const i={},d=void 0,c={unversionedId:"nevermined-sdk/api-reference/interfaces/ProvenanceRegistry",id:"nevermined-sdk/api-reference/interfaces/ProvenanceRegistry",title:"ProvenanceRegistry",description:"@nevermined-io/sdk - v3.0.49 / ProvenanceRegistry",source:"@site/docs/nevermined-sdk/api-reference/interfaces/ProvenanceRegistry.md",sourceDirName:"nevermined-sdk/api-reference/interfaces",slug:"/nevermined-sdk/api-reference/interfaces/ProvenanceRegistry",permalink:"/docs/nevermined-sdk/api-reference/interfaces/ProvenanceRegistry",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"ProvenanceBaseEvent",permalink:"/docs/nevermined-sdk/api-reference/interfaces/ProvenanceBaseEvent"},next:{title:"Provider",permalink:"/docs/nevermined-sdk/api-reference/interfaces/Provider"}},l={},o=[{value:"Table of contents",id:"table-of-contents",level:2},{value:"Properties",id:"properties",level:3},{value:"Properties",id:"properties-1",level:2},{value:"activityId",id:"activityid",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"agentId",id:"agentid",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"agentInvolvedId",id:"agentinvolvedid",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"blockNumberUpdated",id:"blocknumberupdated",level:3},{value:"Defined in",id:"defined-in-3",level:4},{value:"createdBy",id:"createdby",level:3},{value:"Defined in",id:"defined-in-4",level:4},{value:"did",id:"did",level:3},{value:"Defined in",id:"defined-in-5",level:4},{value:"method",id:"method",level:3},{value:"Defined in",id:"defined-in-6",level:4},{value:"relatedDid",id:"relateddid",level:3},{value:"Defined in",id:"defined-in-7",level:4},{value:"signatureDelegate",id:"signaturedelegate",level:3},{value:"Defined in",id:"defined-in-8",level:4}],s={toc:o};function p(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/nevermined-sdk/api-reference/code-reference"},"@nevermined-io/sdk - v3.0.49")," / ProvenanceRegistry"),(0,a.kt)("h1",{id:"interface-provenanceregistry"},"Interface: ProvenanceRegistry"),(0,a.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,a.kt)("h3",{id:"properties"},"Properties"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/interfaces/ProvenanceRegistry#activityid"},"activityId")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/interfaces/ProvenanceRegistry#agentid"},"agentId")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/interfaces/ProvenanceRegistry#agentinvolvedid"},"agentInvolvedId")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/interfaces/ProvenanceRegistry#blocknumberupdated"},"blockNumberUpdated")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/interfaces/ProvenanceRegistry#createdby"},"createdBy")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/interfaces/ProvenanceRegistry#did"},"did")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/interfaces/ProvenanceRegistry#method"},"method")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/interfaces/ProvenanceRegistry#relateddid"},"relatedDid")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/interfaces/ProvenanceRegistry#signaturedelegate"},"signatureDelegate"))),(0,a.kt)("h2",{id:"properties-1"},"Properties"),(0,a.kt)("h3",{id:"activityid"},"activityId"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"activityId"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/sdk-js/blob/46581d70d770c789e0a8545806449cccf988f6aa/src/keeper/contracts/Provenance.ts#L29"},"src/keeper/contracts/Provenance.ts:29")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"agentid"},"agentId"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"agentId"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/sdk-js/blob/46581d70d770c789e0a8545806449cccf988f6aa/src/keeper/contracts/Provenance.ts#L28"},"src/keeper/contracts/Provenance.ts:28")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"agentinvolvedid"},"agentInvolvedId"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"agentInvolvedId"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/sdk-js/blob/46581d70d770c789e0a8545806449cccf988f6aa/src/keeper/contracts/Provenance.ts#L30"},"src/keeper/contracts/Provenance.ts:30")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"blocknumberupdated"},"blockNumberUpdated"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"blockNumberUpdated"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/sdk-js/blob/46581d70d770c789e0a8545806449cccf988f6aa/src/keeper/contracts/Provenance.ts#L33"},"src/keeper/contracts/Provenance.ts:33")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"createdby"},"createdBy"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"createdBy"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/sdk-js/blob/46581d70d770c789e0a8545806449cccf988f6aa/src/keeper/contracts/Provenance.ts#L32"},"src/keeper/contracts/Provenance.ts:32")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"did"},"did"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"did"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/sdk-js/blob/46581d70d770c789e0a8545806449cccf988f6aa/src/keeper/contracts/Provenance.ts#L26"},"src/keeper/contracts/Provenance.ts:26")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"method"},"method"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"method"),": ",(0,a.kt)("a",{parentName:"p",href:"/docs/nevermined-sdk/api-reference/enums/ProvenanceMethod"},(0,a.kt)("inlineCode",{parentName:"a"},"ProvenanceMethod"))),(0,a.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/sdk-js/blob/46581d70d770c789e0a8545806449cccf988f6aa/src/keeper/contracts/Provenance.ts#L31"},"src/keeper/contracts/Provenance.ts:31")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"relateddid"},"relatedDid"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"relatedDid"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("h4",{id:"defined-in-7"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/sdk-js/blob/46581d70d770c789e0a8545806449cccf988f6aa/src/keeper/contracts/Provenance.ts#L27"},"src/keeper/contracts/Provenance.ts:27")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"signaturedelegate"},"signatureDelegate"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"signatureDelegate"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("h4",{id:"defined-in-8"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/sdk-js/blob/46581d70d770c789e0a8545806449cccf988f6aa/src/keeper/contracts/Provenance.ts#L34"},"src/keeper/contracts/Provenance.ts:34")))}p.isMDXComponent=!0}}]);