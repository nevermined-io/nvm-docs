"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3328],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>f});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function d(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var o=r.createContext({}),s=function(e){var n=r.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):d(d({},n),e)),t},p=function(e){var n=s(e.components);return r.createElement(o.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},v=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),v=s(t),f=i,m=v["".concat(o,".").concat(f)]||v[f]||l[f]||a;return t?r.createElement(m,d(d({ref:n},p),{},{components:t})):r.createElement(m,d({ref:n},p))}));function f(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,d=new Array(a);d[0]=v;var c={};for(var o in n)hasOwnProperty.call(n,o)&&(c[o]=n[o]);c.originalType=e,c.mdxType="string"==typeof e?e:i,d[1]=c;for(var s=2;s<a;s++)d[s]=t[s];return r.createElement.apply(null,d)}return r.createElement.apply(null,t)}v.displayName="MDXCreateElement"},53285:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>d,default:()=>l,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var r=t(87462),i=(t(67294),t(3905));const a={},d=void 0,c={unversionedId:"nevermined-sdk/api-reference/interfaces/WasDerivedFromEvent",id:"nevermined-sdk/api-reference/interfaces/WasDerivedFromEvent",title:"WasDerivedFromEvent",description:"@nevermined-io/sdk - v3.0.23-rc0 / WasDerivedFromEvent",source:"@site/docs/nevermined-sdk/api-reference/interfaces/WasDerivedFromEvent.md",sourceDirName:"nevermined-sdk/api-reference/interfaces",slug:"/nevermined-sdk/api-reference/interfaces/WasDerivedFromEvent",permalink:"/docs/nevermined-sdk/api-reference/interfaces/WasDerivedFromEvent",draft:!1,editUrl:"https://github.com/nevermined-io/docs/tree/main/docs/nevermined-sdk/api-reference/interfaces/WasDerivedFromEvent.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"WasAssociatedWithEvent",permalink:"/docs/nevermined-sdk/api-reference/interfaces/WasAssociatedWithEvent"},next:{title:"WasGeneratedByEvent",permalink:"/docs/nevermined-sdk/api-reference/interfaces/WasGeneratedByEvent"}},o={},s=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Table of contents",id:"table-of-contents",level:2},{value:"Properties",id:"properties",level:3},{value:"Properties",id:"properties-1",level:2},{value:"activityId",id:"activityid",level:3},{value:"Inherited from",id:"inherited-from",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"agentId",id:"agentid",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"attributes",id:"attributes",level:3},{value:"Inherited from",id:"inherited-from-1",level:4},{value:"Defined in",id:"defined-in-2",level:4},{value:"blockNumberUpdated",id:"blocknumberupdated",level:3},{value:"Inherited from",id:"inherited-from-2",level:4},{value:"Defined in",id:"defined-in-3",level:4},{value:"event",id:"event",level:3},{value:"Inherited from",id:"inherited-from-3",level:4},{value:"Defined in",id:"defined-in-4",level:4},{value:"method",id:"method",level:3},{value:"Inherited from",id:"inherited-from-4",level:4},{value:"Defined in",id:"defined-in-5",level:4},{value:"newEntityDid",id:"newentitydid",level:3},{value:"Defined in",id:"defined-in-6",level:4},{value:"provId",id:"provid",level:3},{value:"Inherited from",id:"inherited-from-5",level:4},{value:"Defined in",id:"defined-in-7",level:4},{value:"usedEntityDid",id:"usedentitydid",level:3},{value:"Defined in",id:"defined-in-8",level:4}],p={toc:s};function l(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/nevermined-sdk/api-reference/code-reference"},"@nevermined-io/sdk - v3.0.23-rc0")," / WasDerivedFromEvent"),(0,i.kt)("h1",{id:"interface-wasderivedfromevent"},"Interface: WasDerivedFromEvent"),(0,i.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/docs/nevermined-sdk/api-reference/interfaces/ProvenanceBaseEvent"},(0,i.kt)("inlineCode",{parentName:"a"},"ProvenanceBaseEvent"))),(0,i.kt)("p",{parentName:"li"},"\u21b3 ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"WasDerivedFromEvent"))))),(0,i.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,i.kt)("h3",{id:"properties"},"Properties"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/interfaces/WasDerivedFromEvent#activityid"},"activityId")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/interfaces/WasDerivedFromEvent#agentid"},"agentId")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/interfaces/WasDerivedFromEvent#attributes"},"attributes")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/interfaces/WasDerivedFromEvent#blocknumberupdated"},"blockNumberUpdated")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/interfaces/WasDerivedFromEvent#event"},"event")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/interfaces/WasDerivedFromEvent#method"},"method")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/interfaces/WasDerivedFromEvent#newentitydid"},"newEntityDid")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/interfaces/WasDerivedFromEvent#provid"},"provId")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/interfaces/WasDerivedFromEvent#usedentitydid"},"usedEntityDid"))),(0,i.kt)("h2",{id:"properties-1"},"Properties"),(0,i.kt)("h3",{id:"activityid"},"activityId"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"activityId"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("h4",{id:"inherited-from"},"Inherited from"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/nevermined-sdk/api-reference/interfaces/ProvenanceBaseEvent"},"ProvenanceBaseEvent"),".",(0,i.kt)("a",{parentName:"p",href:"/docs/nevermined-sdk/api-reference/interfaces/ProvenanceBaseEvent#activityid"},"activityId")),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/sdk-js/blob/0917aa7cdaec3f72007eb6710fe0bd1232cfb930/src/keeper/contracts/Provenance.ts#L53"},"src/keeper/contracts/Provenance.ts:53")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"agentid"},"agentId"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"agentId"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/sdk-js/blob/0917aa7cdaec3f72007eb6710fe0bd1232cfb930/src/keeper/contracts/Provenance.ts#L69"},"src/keeper/contracts/Provenance.ts:69")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"attributes"},"attributes"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"attributes"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("h4",{id:"inherited-from-1"},"Inherited from"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/nevermined-sdk/api-reference/interfaces/ProvenanceBaseEvent"},"ProvenanceBaseEvent"),".",(0,i.kt)("a",{parentName:"p",href:"/docs/nevermined-sdk/api-reference/interfaces/ProvenanceBaseEvent#attributes"},"attributes")),(0,i.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/sdk-js/blob/0917aa7cdaec3f72007eb6710fe0bd1232cfb930/src/keeper/contracts/Provenance.ts#L55"},"src/keeper/contracts/Provenance.ts:55")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"blocknumberupdated"},"blockNumberUpdated"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"blockNumberUpdated"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number")),(0,i.kt)("h4",{id:"inherited-from-2"},"Inherited from"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/nevermined-sdk/api-reference/interfaces/ProvenanceBaseEvent"},"ProvenanceBaseEvent"),".",(0,i.kt)("a",{parentName:"p",href:"/docs/nevermined-sdk/api-reference/interfaces/ProvenanceBaseEvent#blocknumberupdated"},"blockNumberUpdated")),(0,i.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/sdk-js/blob/0917aa7cdaec3f72007eb6710fe0bd1232cfb930/src/keeper/contracts/Provenance.ts#L56"},"src/keeper/contracts/Provenance.ts:56")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"event"},"event"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"event"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("h4",{id:"inherited-from-3"},"Inherited from"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/nevermined-sdk/api-reference/interfaces/ProvenanceBaseEvent"},"ProvenanceBaseEvent"),".",(0,i.kt)("a",{parentName:"p",href:"/docs/nevermined-sdk/api-reference/interfaces/ProvenanceBaseEvent#event"},"event")),(0,i.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/sdk-js/blob/0917aa7cdaec3f72007eb6710fe0bd1232cfb930/src/keeper/contracts/Provenance.ts#L51"},"src/keeper/contracts/Provenance.ts:51")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"method"},"method"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"method"),": ",(0,i.kt)("a",{parentName:"p",href:"/docs/nevermined-sdk/api-reference/enums/ProvenanceMethod"},(0,i.kt)("inlineCode",{parentName:"a"},"ProvenanceMethod"))),(0,i.kt)("h4",{id:"inherited-from-4"},"Inherited from"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/nevermined-sdk/api-reference/interfaces/ProvenanceBaseEvent"},"ProvenanceBaseEvent"),".",(0,i.kt)("a",{parentName:"p",href:"/docs/nevermined-sdk/api-reference/interfaces/ProvenanceBaseEvent#method"},"method")),(0,i.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/sdk-js/blob/0917aa7cdaec3f72007eb6710fe0bd1232cfb930/src/keeper/contracts/Provenance.ts#L52"},"src/keeper/contracts/Provenance.ts:52")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"newentitydid"},"newEntityDid"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"newEntityDid"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/sdk-js/blob/0917aa7cdaec3f72007eb6710fe0bd1232cfb930/src/keeper/contracts/Provenance.ts#L67"},"src/keeper/contracts/Provenance.ts:67")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"provid"},"provId"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"provId"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("h4",{id:"inherited-from-5"},"Inherited from"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/nevermined-sdk/api-reference/interfaces/ProvenanceBaseEvent"},"ProvenanceBaseEvent"),".",(0,i.kt)("a",{parentName:"p",href:"/docs/nevermined-sdk/api-reference/interfaces/ProvenanceBaseEvent#provid"},"provId")),(0,i.kt)("h4",{id:"defined-in-7"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/sdk-js/blob/0917aa7cdaec3f72007eb6710fe0bd1232cfb930/src/keeper/contracts/Provenance.ts#L54"},"src/keeper/contracts/Provenance.ts:54")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"usedentitydid"},"usedEntityDid"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"usedEntityDid"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("h4",{id:"defined-in-8"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/sdk-js/blob/0917aa7cdaec3f72007eb6710fe0bd1232cfb930/src/keeper/contracts/Provenance.ts#L68"},"src/keeper/contracts/Provenance.ts:68")))}l.isMDXComponent=!0}}]);