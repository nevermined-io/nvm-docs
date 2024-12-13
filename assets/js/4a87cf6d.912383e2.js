"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2100],{3905:(e,r,t)=>{t.d(r,{Zo:()=>o,kt:()=>m});var a=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var d=a.createContext({}),p=function(e){var r=a.useContext(d),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},o=function(e){var r=p(e.components);return a.createElement(d.Provider,{value:r},e.children)},c={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},k=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,i=e.originalType,d=e.parentName,o=s(e,["components","mdxType","originalType","parentName"]),k=p(t),m=n,u=k["".concat(d,".").concat(m)]||k[m]||c[m]||i;return t?a.createElement(u,l(l({ref:r},o),{},{components:t})):a.createElement(u,l({ref:r},o))}));function m(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var i=t.length,l=new Array(i);l[0]=k;var s={};for(var d in r)hasOwnProperty.call(r,d)&&(s[d]=r[d]);s.originalType=e,s.mdxType="string"==typeof e?e:n,l[1]=s;for(var p=2;p<i;p++)l[p]=t[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}k.displayName="MDXCreateElement"},79138:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>d,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=t(87462),n=(t(67294),t(3905));const i={},l=void 0,s={unversionedId:"nevermined-sdk/api-reference/classes/DDOServiceAlreadyExists",id:"nevermined-sdk/api-reference/classes/DDOServiceAlreadyExists",title:"DDOServiceAlreadyExists",description:"@nevermined-io/sdk - v3.0.44 / DDOServiceAlreadyExists",source:"@site/docs/nevermined-sdk/api-reference/classes/DDOServiceAlreadyExists.md",sourceDirName:"nevermined-sdk/api-reference/classes",slug:"/nevermined-sdk/api-reference/classes/DDOServiceAlreadyExists",permalink:"/docs/nevermined-sdk/api-reference/classes/DDOServiceAlreadyExists",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"DDOPriceNotFoundError",permalink:"/docs/nevermined-sdk/api-reference/classes/DDOPriceNotFoundError"},next:{title:"DDOServiceNotFoundError",permalink:"/docs/nevermined-sdk/api-reference/classes/DDOServiceNotFoundError"}},d={},p=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Table of contents",id:"table-of-contents",level:2},{value:"Constructors",id:"constructors",level:3},{value:"Properties",id:"properties",level:3},{value:"Methods",id:"methods",level:3},{value:"Constructors",id:"constructors-1",level:2},{value:"constructor",id:"constructor",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Overrides",id:"overrides",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"Properties",id:"properties-1",level:2},{value:"cause",id:"cause",level:3},{value:"Inherited from",id:"inherited-from",level:4},{value:"Defined in",id:"defined-in-1",level:4},{value:"message",id:"message",level:3},{value:"Inherited from",id:"inherited-from-1",level:4},{value:"Defined in",id:"defined-in-2",level:4},{value:"name",id:"name",level:3},{value:"Inherited from",id:"inherited-from-2",level:4},{value:"Defined in",id:"defined-in-3",level:4},{value:"stack",id:"stack",level:3},{value:"Inherited from",id:"inherited-from-3",level:4},{value:"Defined in",id:"defined-in-4",level:4},{value:"prepareStackTrace",id:"preparestacktrace",level:3},{value:"Type declaration",id:"type-declaration",level:4},{value:"Parameters",id:"parameters-1",level:5},{value:"Returns",id:"returns-1",level:5},{value:"Inherited from",id:"inherited-from-4",level:4},{value:"Defined in",id:"defined-in-5",level:4},{value:"stackTraceLimit",id:"stacktracelimit",level:3},{value:"Inherited from",id:"inherited-from-5",level:4},{value:"Defined in",id:"defined-in-6",level:4},{value:"Methods",id:"methods-1",level:2},{value:"captureStackTrace",id:"capturestacktrace",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-2",level:4},{value:"Inherited from",id:"inherited-from-6",level:4},{value:"Defined in",id:"defined-in-7",level:4}],o={toc:p};function c(e){let{components:r,...t}=e;return(0,n.kt)("wrapper",(0,a.Z)({},o,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/docs/nevermined-sdk/api-reference/code-reference"},"@nevermined-io/sdk - v3.0.44")," / DDOServiceAlreadyExists"),(0,n.kt)("h1",{id:"class-ddoservicealreadyexists"},"Class: DDOServiceAlreadyExists"),(0,n.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"/docs/nevermined-sdk/api-reference/classes/DDOError"},(0,n.kt)("inlineCode",{parentName:"a"},"DDOError"))),(0,n.kt)("p",{parentName:"li"},"\u21b3 ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"DDOServiceAlreadyExists"))))),(0,n.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,n.kt)("h3",{id:"constructors"},"Constructors"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/classes/DDOServiceAlreadyExists#constructor"},"constructor"))),(0,n.kt)("h3",{id:"properties"},"Properties"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/classes/DDOServiceAlreadyExists#cause"},"cause")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/classes/DDOServiceAlreadyExists#message"},"message")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/classes/DDOServiceAlreadyExists#name"},"name")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/classes/DDOServiceAlreadyExists#stack"},"stack")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/classes/DDOServiceAlreadyExists#preparestacktrace"},"prepareStackTrace")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/classes/DDOServiceAlreadyExists#stacktracelimit"},"stackTraceLimit"))),(0,n.kt)("h3",{id:"methods"},"Methods"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/classes/DDOServiceAlreadyExists#capturestacktrace"},"captureStackTrace"))),(0,n.kt)("h2",{id:"constructors-1"},"Constructors"),(0,n.kt)("h3",{id:"constructor"},"constructor"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("strong",{parentName:"p"},"new DDOServiceAlreadyExists"),"(",(0,n.kt)("inlineCode",{parentName:"p"},"serviceType"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"index"),"): ",(0,n.kt)("a",{parentName:"p",href:"/docs/nevermined-sdk/api-reference/classes/DDOServiceAlreadyExists"},(0,n.kt)("inlineCode",{parentName:"a"},"DDOServiceAlreadyExists"))),(0,n.kt)("h4",{id:"parameters"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"serviceType")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"string"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"index")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"number"))))),(0,n.kt)("h4",{id:"returns"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/docs/nevermined-sdk/api-reference/classes/DDOServiceAlreadyExists"},(0,n.kt)("inlineCode",{parentName:"a"},"DDOServiceAlreadyExists"))),(0,n.kt)("h4",{id:"overrides"},"Overrides"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/docs/nevermined-sdk/api-reference/classes/DDOError"},"DDOError"),".",(0,n.kt)("a",{parentName:"p",href:"/docs/nevermined-sdk/api-reference/classes/DDOError#constructor"},"constructor")),(0,n.kt)("h4",{id:"defined-in"},"Defined in"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/sdk-js/blob/1f765603c75b92c5d8798f51b63641eb0639883b/src/errors/NeverminedErrors.ts#L82"},"src/errors/NeverminedErrors.ts:82")),(0,n.kt)("h2",{id:"properties-1"},"Properties"),(0,n.kt)("h3",{id:"cause"},"cause"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,n.kt)("strong",{parentName:"p"},"cause"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"unknown")),(0,n.kt)("h4",{id:"inherited-from"},"Inherited from"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/docs/nevermined-sdk/api-reference/classes/DDOError"},"DDOError"),".",(0,n.kt)("a",{parentName:"p",href:"/docs/nevermined-sdk/api-reference/classes/DDOError#cause"},"cause")),(0,n.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,n.kt)("p",null,"node_modules/typescript/lib/lib.es2022.error.d.ts:24"),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"message"},"message"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("strong",{parentName:"p"},"message"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"string")),(0,n.kt)("h4",{id:"inherited-from-1"},"Inherited from"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/docs/nevermined-sdk/api-reference/classes/DDOError"},"DDOError"),".",(0,n.kt)("a",{parentName:"p",href:"/docs/nevermined-sdk/api-reference/classes/DDOError#message"},"message")),(0,n.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,n.kt)("p",null,"node_modules/typescript/lib/lib.es5.d.ts:1077"),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"name"},"name"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("strong",{parentName:"p"},"name"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"string")),(0,n.kt)("h4",{id:"inherited-from-2"},"Inherited from"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/docs/nevermined-sdk/api-reference/classes/DDOError"},"DDOError"),".",(0,n.kt)("a",{parentName:"p",href:"/docs/nevermined-sdk/api-reference/classes/DDOError#name"},"name")),(0,n.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,n.kt)("p",null,"node_modules/typescript/lib/lib.es5.d.ts:1076"),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"stack"},"stack"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,n.kt)("strong",{parentName:"p"},"stack"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"string")),(0,n.kt)("h4",{id:"inherited-from-3"},"Inherited from"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/docs/nevermined-sdk/api-reference/classes/DDOError"},"DDOError"),".",(0,n.kt)("a",{parentName:"p",href:"/docs/nevermined-sdk/api-reference/classes/DDOError#stack"},"stack")),(0,n.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,n.kt)("p",null,"node_modules/typescript/lib/lib.es5.d.ts:1078"),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"preparestacktrace"},"prepareStackTrace"),(0,n.kt)("p",null,"\u25aa ",(0,n.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,n.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,n.kt)("strong",{parentName:"p"},"prepareStackTrace"),": (",(0,n.kt)("inlineCode",{parentName:"p"},"err"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"Error"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"stackTraces"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"CallSite"),"[]) => ",(0,n.kt)("inlineCode",{parentName:"p"},"any")),(0,n.kt)("p",null,"Optional override for formatting stack traces"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"See"))),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://v8.dev/docs/stack-trace-api#customizing-stack-traces"},"https://v8.dev/docs/stack-trace-api#customizing-stack-traces")),(0,n.kt)("h4",{id:"type-declaration"},"Type declaration"),(0,n.kt)("p",null,"\u25b8 (",(0,n.kt)("inlineCode",{parentName:"p"},"err"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"stackTraces"),"): ",(0,n.kt)("inlineCode",{parentName:"p"},"any")),(0,n.kt)("h5",{id:"parameters-1"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"err")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"Error"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"stackTraces")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"CallSite"),"[]")))),(0,n.kt)("h5",{id:"returns-1"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"any")),(0,n.kt)("h4",{id:"inherited-from-4"},"Inherited from"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/docs/nevermined-sdk/api-reference/classes/DDOError"},"DDOError"),".",(0,n.kt)("a",{parentName:"p",href:"/docs/nevermined-sdk/api-reference/classes/DDOError#preparestacktrace"},"prepareStackTrace")),(0,n.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,n.kt)("p",null,"node_modules/@types/node/globals.d.ts:28"),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"stacktracelimit"},"stackTraceLimit"),(0,n.kt)("p",null,"\u25aa ",(0,n.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,n.kt)("strong",{parentName:"p"},"stackTraceLimit"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"number")),(0,n.kt)("h4",{id:"inherited-from-5"},"Inherited from"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/docs/nevermined-sdk/api-reference/classes/DDOError"},"DDOError"),".",(0,n.kt)("a",{parentName:"p",href:"/docs/nevermined-sdk/api-reference/classes/DDOError#stacktracelimit"},"stackTraceLimit")),(0,n.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,n.kt)("p",null,"node_modules/@types/node/globals.d.ts:30"),(0,n.kt)("h2",{id:"methods-1"},"Methods"),(0,n.kt)("h3",{id:"capturestacktrace"},"captureStackTrace"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("strong",{parentName:"p"},"captureStackTrace"),"(",(0,n.kt)("inlineCode",{parentName:"p"},"targetObject"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"constructorOpt?"),"): ",(0,n.kt)("inlineCode",{parentName:"p"},"void")),(0,n.kt)("p",null,"Create .stack property on a target object"),(0,n.kt)("h4",{id:"parameters-2"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"targetObject")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"object"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"constructorOpt?")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"Function"))))),(0,n.kt)("h4",{id:"returns-2"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"void")),(0,n.kt)("h4",{id:"inherited-from-6"},"Inherited from"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/docs/nevermined-sdk/api-reference/classes/DDOError"},"DDOError"),".",(0,n.kt)("a",{parentName:"p",href:"/docs/nevermined-sdk/api-reference/classes/DDOError#capturestacktrace"},"captureStackTrace")),(0,n.kt)("h4",{id:"defined-in-7"},"Defined in"),(0,n.kt)("p",null,"node_modules/@types/node/globals.d.ts:21"))}c.isMDXComponent=!0}}]);