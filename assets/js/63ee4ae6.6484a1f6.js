"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1950],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function d(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),s=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,p=d(e,["components","mdxType","originalType","parentName"]),k=s(r),m=a,u=k["".concat(o,".").concat(m)]||k[m]||c[m]||i;return r?n.createElement(u,l(l({ref:t},p),{},{components:r})):n.createElement(u,l({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=k;var d={};for(var o in t)hasOwnProperty.call(t,o)&&(d[o]=t[o]);d.originalType=e,d.mdxType="string"==typeof e?e:a,l[1]=d;for(var s=2;s<i;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}k.displayName="MDXCreateElement"},6265:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>d,toc:()=>s});var n=r(87462),a=(r(67294),r(3905));const i={},l=void 0,d={unversionedId:"nevermined-sdk/api-reference/classes/DDOError",id:"nevermined-sdk/api-reference/classes/DDOError",title:"DDOError",description:"@nevermined-io/sdk - v3.0.23-rc0 / DDOError",source:"@site/docs/nevermined-sdk/api-reference/classes/DDOError.md",sourceDirName:"nevermined-sdk/api-reference/classes",slug:"/nevermined-sdk/api-reference/classes/DDOError",permalink:"/docs/nevermined-sdk/api-reference/classes/DDOError",draft:!1,editUrl:"https://github.com/nevermined-io/docs/tree/main/docs/nevermined-sdk/api-reference/classes/DDOError.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"DDOConditionNotFoundError",permalink:"/docs/nevermined-sdk/api-reference/classes/DDOConditionNotFoundError"},next:{title:"DDOParamNotFoundError",permalink:"/docs/nevermined-sdk/api-reference/classes/DDOParamNotFoundError"}},o={},s=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Table of contents",id:"table-of-contents",level:2},{value:"Constructors",id:"constructors",level:3},{value:"Properties",id:"properties",level:3},{value:"Methods",id:"methods",level:3},{value:"Constructors",id:"constructors-1",level:2},{value:"constructor",id:"constructor",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Overrides",id:"overrides",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"Properties",id:"properties-1",level:2},{value:"cause",id:"cause",level:3},{value:"Inherited from",id:"inherited-from",level:4},{value:"Defined in",id:"defined-in-1",level:4},{value:"message",id:"message",level:3},{value:"Inherited from",id:"inherited-from-1",level:4},{value:"Defined in",id:"defined-in-2",level:4},{value:"name",id:"name",level:3},{value:"Inherited from",id:"inherited-from-2",level:4},{value:"Defined in",id:"defined-in-3",level:4},{value:"stack",id:"stack",level:3},{value:"Inherited from",id:"inherited-from-3",level:4},{value:"Defined in",id:"defined-in-4",level:4},{value:"prepareStackTrace",id:"preparestacktrace",level:3},{value:"Type declaration",id:"type-declaration",level:4},{value:"Parameters",id:"parameters-1",level:5},{value:"Returns",id:"returns-1",level:5},{value:"Inherited from",id:"inherited-from-4",level:4},{value:"Defined in",id:"defined-in-5",level:4},{value:"stackTraceLimit",id:"stacktracelimit",level:3},{value:"Inherited from",id:"inherited-from-5",level:4},{value:"Defined in",id:"defined-in-6",level:4},{value:"Methods",id:"methods-1",level:2},{value:"captureStackTrace",id:"capturestacktrace",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-2",level:4},{value:"Inherited from",id:"inherited-from-6",level:4},{value:"Defined in",id:"defined-in-7",level:4}],p={toc:s};function c(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/nevermined-sdk/api-reference/code-reference"},"@nevermined-io/sdk - v3.0.23-rc0")," / DDOError"),(0,a.kt)("h1",{id:"class-ddoerror"},"Class: DDOError"),(0,a.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"Error")),(0,a.kt)("p",{parentName:"li"},"\u21b3 ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"DDOError"))),(0,a.kt)("p",{parentName:"li"},"\u21b3\u21b3 ",(0,a.kt)("a",{parentName:"p",href:"/docs/nevermined-sdk/api-reference/classes/DDOServiceNotFoundError"},(0,a.kt)("inlineCode",{parentName:"a"},"DDOServiceNotFoundError"))),(0,a.kt)("p",{parentName:"li"},"\u21b3\u21b3 ",(0,a.kt)("a",{parentName:"p",href:"/docs/nevermined-sdk/api-reference/classes/DDOServiceAlreadyExists"},(0,a.kt)("inlineCode",{parentName:"a"},"DDOServiceAlreadyExists"))),(0,a.kt)("p",{parentName:"li"},"\u21b3\u21b3 ",(0,a.kt)("a",{parentName:"p",href:"/docs/nevermined-sdk/api-reference/classes/DDOConditionNotFoundError"},(0,a.kt)("inlineCode",{parentName:"a"},"DDOConditionNotFoundError"))),(0,a.kt)("p",{parentName:"li"},"\u21b3\u21b3 ",(0,a.kt)("a",{parentName:"p",href:"/docs/nevermined-sdk/api-reference/classes/DDOParamNotFoundError"},(0,a.kt)("inlineCode",{parentName:"a"},"DDOParamNotFoundError"))),(0,a.kt)("p",{parentName:"li"},"\u21b3\u21b3 ",(0,a.kt)("a",{parentName:"p",href:"/docs/nevermined-sdk/api-reference/classes/DDOPriceNotFoundError"},(0,a.kt)("inlineCode",{parentName:"a"},"DDOPriceNotFoundError"))))),(0,a.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,a.kt)("h3",{id:"constructors"},"Constructors"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/classes/DDOError#constructor"},"constructor"))),(0,a.kt)("h3",{id:"properties"},"Properties"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/classes/DDOError#cause"},"cause")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/classes/DDOError#message"},"message")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/classes/DDOError#name"},"name")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/classes/DDOError#stack"},"stack")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/classes/DDOError#preparestacktrace"},"prepareStackTrace")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/classes/DDOError#stacktracelimit"},"stackTraceLimit"))),(0,a.kt)("h3",{id:"methods"},"Methods"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/classes/DDOError#capturestacktrace"},"captureStackTrace"))),(0,a.kt)("h2",{id:"constructors-1"},"Constructors"),(0,a.kt)("h3",{id:"constructor"},"constructor"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"new DDOError"),"(",(0,a.kt)("inlineCode",{parentName:"p"},"message"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"did?"),"): ",(0,a.kt)("a",{parentName:"p",href:"/docs/nevermined-sdk/api-reference/classes/DDOError"},(0,a.kt)("inlineCode",{parentName:"a"},"DDOError"))),(0,a.kt)("h4",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"message")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"string"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"did?")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"string"))))),(0,a.kt)("h4",{id:"returns"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/nevermined-sdk/api-reference/classes/DDOError"},(0,a.kt)("inlineCode",{parentName:"a"},"DDOError"))),(0,a.kt)("h4",{id:"overrides"},"Overrides"),(0,a.kt)("p",null,"Error.constructor"),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/sdk-js/blob/0917aa7cdaec3f72007eb6710fe0bd1232cfb930/src/errors/NeverminedErrors.ts#L62"},"src/errors/NeverminedErrors.ts:62")),(0,a.kt)("h2",{id:"properties-1"},"Properties"),(0,a.kt)("h3",{id:"cause"},"cause"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"cause"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"unknown")),(0,a.kt)("h4",{id:"inherited-from"},"Inherited from"),(0,a.kt)("p",null,"Error.cause"),(0,a.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,a.kt)("p",null,"node_modules/typescript/lib/lib.es2022.error.d.ts:24"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"message"},"message"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"message"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("h4",{id:"inherited-from-1"},"Inherited from"),(0,a.kt)("p",null,"Error.message"),(0,a.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,a.kt)("p",null,"node_modules/typescript/lib/lib.es5.d.ts:1077"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"name"},"name"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"name"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("h4",{id:"inherited-from-2"},"Inherited from"),(0,a.kt)("p",null,"Error.name"),(0,a.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,a.kt)("p",null,"node_modules/typescript/lib/lib.es5.d.ts:1076"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"stack"},"stack"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"stack"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("h4",{id:"inherited-from-3"},"Inherited from"),(0,a.kt)("p",null,"Error.stack"),(0,a.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,a.kt)("p",null,"node_modules/typescript/lib/lib.es5.d.ts:1078"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"preparestacktrace"},"prepareStackTrace"),(0,a.kt)("p",null,"\u25aa ",(0,a.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"prepareStackTrace"),": (",(0,a.kt)("inlineCode",{parentName:"p"},"err"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"Error"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"stackTraces"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"CallSite"),"[]) => ",(0,a.kt)("inlineCode",{parentName:"p"},"any")),(0,a.kt)("p",null,"Optional override for formatting stack traces"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"See"))),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://v8.dev/docs/stack-trace-api#customizing-stack-traces"},"https://v8.dev/docs/stack-trace-api#customizing-stack-traces")),(0,a.kt)("h4",{id:"type-declaration"},"Type declaration"),(0,a.kt)("p",null,"\u25b8 (",(0,a.kt)("inlineCode",{parentName:"p"},"err"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"stackTraces"),"): ",(0,a.kt)("inlineCode",{parentName:"p"},"any")),(0,a.kt)("h5",{id:"parameters-1"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"err")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"Error"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"stackTraces")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"CallSite"),"[]")))),(0,a.kt)("h5",{id:"returns-1"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"any")),(0,a.kt)("h4",{id:"inherited-from-4"},"Inherited from"),(0,a.kt)("p",null,"Error.prepareStackTrace"),(0,a.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,a.kt)("p",null,"node_modules/@types/node/globals.d.ts:28"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"stacktracelimit"},"stackTraceLimit"),(0,a.kt)("p",null,"\u25aa ",(0,a.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,a.kt)("strong",{parentName:"p"},"stackTraceLimit"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("h4",{id:"inherited-from-5"},"Inherited from"),(0,a.kt)("p",null,"Error.stackTraceLimit"),(0,a.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,a.kt)("p",null,"node_modules/@types/node/globals.d.ts:30"),(0,a.kt)("h2",{id:"methods-1"},"Methods"),(0,a.kt)("h3",{id:"capturestacktrace"},"captureStackTrace"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"captureStackTrace"),"(",(0,a.kt)("inlineCode",{parentName:"p"},"targetObject"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"constructorOpt?"),"): ",(0,a.kt)("inlineCode",{parentName:"p"},"void")),(0,a.kt)("p",null,"Create .stack property on a target object"),(0,a.kt)("h4",{id:"parameters-2"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"targetObject")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"object"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"constructorOpt?")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"Function"))))),(0,a.kt)("h4",{id:"returns-2"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"void")),(0,a.kt)("h4",{id:"inherited-from-6"},"Inherited from"),(0,a.kt)("p",null,"Error.captureStackTrace"),(0,a.kt)("h4",{id:"defined-in-7"},"Defined in"),(0,a.kt)("p",null,"node_modules/@types/node/globals.d.ts:21"))}c.isMDXComponent=!0}}]);