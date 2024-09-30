"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6385],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=r.createContext({}),l=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},d=function(e){var t=l(e.components);return r.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),f=l(n),u=i,m=f["".concat(o,".").concat(u)]||f[u]||c[u]||a;return n?r.createElement(m,p(p({ref:t},d),{},{components:n})):r.createElement(m,p({ref:t},d))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,p=new Array(a);p[0]=f;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:i,p[1]=s;for(var l=2;l<a;l++)p[l]=n[l];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},48008:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>p,default:()=>c,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var r=n(87462),i=(n(67294),n(3905));const a={},p=void 0,s={unversionedId:"nevermined-sdk/api-reference/interfaces/WebService",id:"nevermined-sdk/api-reference/interfaces/WebService",title:"WebService",description:"@nevermined-io/sdk - v3.0.35 / WebService",source:"@site/docs/nevermined-sdk/api-reference/interfaces/WebService.md",sourceDirName:"nevermined-sdk/api-reference/interfaces",slug:"/nevermined-sdk/api-reference/interfaces/WebService",permalink:"/docs/nevermined-sdk/api-reference/interfaces/WebService",draft:!1,editUrl:"https://github.com/nevermined-io/docs/tree/main/docs/nevermined-sdk/api-reference/interfaces/WebService.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Web3Clients",permalink:"/docs/nevermined-sdk/api-reference/interfaces/Web3Clients"},next:{title:"WebServiceInternalAttributes",permalink:"/docs/nevermined-sdk/api-reference/interfaces/WebServiceInternalAttributes"}},o={},l=[{value:"Table of contents",id:"table-of-contents",level:2},{value:"Properties",id:"properties",level:3},{value:"Properties",id:"properties-1",level:2},{value:"chargeType",id:"chargetype",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"encryptedAttributes",id:"encryptedattributes",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"endpoints",id:"endpoints",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"implementsQueryProtocol",id:"implementsqueryprotocol",level:3},{value:"Defined in",id:"defined-in-3",level:4},{value:"internalAttributes",id:"internalattributes",level:3},{value:"Defined in",id:"defined-in-4",level:4},{value:"isNeverminedHosted",id:"isneverminedhosted",level:3},{value:"Defined in",id:"defined-in-5",level:4},{value:"openEndpoints",id:"openendpoints",level:3},{value:"Defined in",id:"defined-in-6",level:4},{value:"queryProtocolVersion",id:"queryprotocolversion",level:3},{value:"Defined in",id:"defined-in-7",level:4},{value:"type",id:"type",level:3},{value:"Defined in",id:"defined-in-8",level:4}],d={toc:l};function c(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/nevermined-sdk/api-reference/code-reference"},"@nevermined-io/sdk - v3.0.35")," / WebService"),(0,i.kt)("h1",{id:"interface-webservice"},"Interface: WebService"),(0,i.kt)("p",null,"Interface describing an asset of type ",(0,i.kt)("inlineCode",{parentName:"p"},"service")),(0,i.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,i.kt)("h3",{id:"properties"},"Properties"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/interfaces/WebService#chargetype"},"chargeType")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/interfaces/WebService#encryptedattributes"},"encryptedAttributes")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/interfaces/WebService#endpoints"},"endpoints")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/interfaces/WebService#implementsqueryprotocol"},"implementsQueryProtocol")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/interfaces/WebService#internalattributes"},"internalAttributes")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/interfaces/WebService#isneverminedhosted"},"isNeverminedHosted")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/interfaces/WebService#openendpoints"},"openEndpoints")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/interfaces/WebService#queryprotocolversion"},"queryProtocolVersion")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/interfaces/WebService#type"},"type"))),(0,i.kt)("h2",{id:"properties-1"},"Properties"),(0,i.kt)("h3",{id:"chargetype"},"chargeType"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"chargeType"),": ",(0,i.kt)("a",{parentName:"p",href:"/docs/nevermined-sdk/api-reference/enums/ChargeType"},(0,i.kt)("inlineCode",{parentName:"a"},"ChargeType"))),(0,i.kt)("p",null,"The type of charge for the service (fixed or dymanic).\nIf fixed the amount of credits to charge will be always the same."),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/sdk-js/blob/1c4dd664ca2801e7971e95af825f688095366860/src/types/DDOTypes.ts#L220"},"src/types/DDOTypes.ts:220")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"encryptedattributes"},"encryptedAttributes"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"encryptedAttributes"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/sdk-js/blob/1c4dd664ca2801e7971e95af825f688095366860/src/types/DDOTypes.ts#L214"},"src/types/DDOTypes.ts:214")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"endpoints"},"endpoints"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"endpoints"),": ","{"," ",(0,i.kt)("inlineCode",{parentName:"p"},"[verb: string]"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string"),"; }[]"),(0,i.kt)("p",null,"List of endpoints available for the service"),(0,i.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/sdk-js/blob/1c4dd664ca2801e7971e95af825f688095366860/src/types/DDOTypes.ts#L204"},"src/types/DDOTypes.ts:204")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"implementsqueryprotocol"},"implementsQueryProtocol"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"implementsQueryProtocol"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")),(0,i.kt)("p",null,"Flag to indicate if the service implements the Nevermined Query Protocol.\nSee ",(0,i.kt)("a",{parentName:"p",href:"https://docs.nevermined.io/docs/protocol/query-protocol"},"https://docs.nevermined.io/docs/protocol/query-protocol")),(0,i.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/sdk-js/blob/1c4dd664ca2801e7971e95af825f688095366860/src/types/DDOTypes.ts#L232"},"src/types/DDOTypes.ts:232")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"internalattributes"},"internalAttributes"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"internalAttributes"),": ",(0,i.kt)("a",{parentName:"p",href:"/docs/nevermined-sdk/api-reference/interfaces/WebServiceInternalAttributes"},(0,i.kt)("inlineCode",{parentName:"a"},"WebServiceInternalAttributes"))),(0,i.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/sdk-js/blob/1c4dd664ca2801e7971e95af825f688095366860/src/types/DDOTypes.ts#L212"},"src/types/DDOTypes.ts:212")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"isneverminedhosted"},"isNeverminedHosted"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"isNeverminedHosted"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")),(0,i.kt)("p",null,"Flag to indicate if the service is hosted by Nevermined infrastructure.\nIf true, the service/agent will be running using the Nevermined Backend service."),(0,i.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/sdk-js/blob/1c4dd664ca2801e7971e95af825f688095366860/src/types/DDOTypes.ts#L226"},"src/types/DDOTypes.ts:226")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"openendpoints"},"openEndpoints"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"openEndpoints"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string"),"[]"),(0,i.kt)("p",null,"List of open endpoints available for the service. These endpoints are not protected.\nThis attribute is useful to indicate which endpoints are available for public access (documentation, definitions, etc)."),(0,i.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/sdk-js/blob/1c4dd664ca2801e7971e95af825f688095366860/src/types/DDOTypes.ts#L210"},"src/types/DDOTypes.ts:210")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"queryprotocolversion"},"queryProtocolVersion"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"queryProtocolVersion"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("p",null,"The version of the Query Protocol implemented by the service."),(0,i.kt)("h4",{id:"defined-in-7"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/sdk-js/blob/1c4dd664ca2801e7971e95af825f688095366860/src/types/DDOTypes.ts#L237"},"src/types/DDOTypes.ts:237")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"type"},"type"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"type"),": ",(0,i.kt)("inlineCode",{parentName:"p"},'"Other"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},'"RESTful"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},'"GrapQL"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},'"RPC"')),(0,i.kt)("p",null,"Type of Web service"),(0,i.kt)("h4",{id:"defined-in-8"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/sdk-js/blob/1c4dd664ca2801e7971e95af825f688095366860/src/types/DDOTypes.ts#L199"},"src/types/DDOTypes.ts:199")))}c.isMDXComponent=!0}}]);