"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4978],{3905:(e,t,a)=>{a.d(t,{Zo:()=>o,kt:()=>N});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function d(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),m=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):d(d({},t),e)),a},o=function(e){var t=m(e.components);return n.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,o=l(e,["components","mdxType","originalType","parentName"]),k=m(a),N=r,f=k["".concat(p,".").concat(N)]||k[N]||s[N]||i;return a?n.createElement(f,d(d({ref:t},o),{},{components:a})):n.createElement(f,d({ref:t},o))}));function N(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,d=new Array(i);d[0]=k;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,d[1]=l;for(var m=2;m<i;m++)d[m]=a[m];return n.createElement.apply(null,d)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},48323:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>d,default:()=>s,frontMatter:()=>i,metadata:()=>l,toc:()=>m});var n=a(87462),r=(a(67294),a(3905));const i={},d=void 0,l={unversionedId:"nevermined-sdk/api-reference/classes/NvmAppMetadata",id:"nevermined-sdk/api-reference/classes/NvmAppMetadata",title:"NvmAppMetadata",description:"@nevermined-io/sdk - v3.0.35 / NvmAppMetadata",source:"@site/docs/nevermined-sdk/api-reference/classes/NvmAppMetadata.md",sourceDirName:"nevermined-sdk/api-reference/classes",slug:"/nevermined-sdk/api-reference/classes/NvmAppMetadata",permalink:"/docs/nevermined-sdk/api-reference/classes/NvmAppMetadata",draft:!1,editUrl:"https://github.com/nevermined-io/docs/tree/main/docs/nevermined-sdk/api-reference/classes/NvmAppMetadata.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"NvmApp",permalink:"/docs/nevermined-sdk/api-reference/classes/NvmApp"},next:{title:"Permissions",permalink:"/docs/nevermined-sdk/api-reference/classes/Permissions"}},p={},m=[{value:"Table of contents",id:"table-of-contents",level:2},{value:"Constructors",id:"constructors",level:3},{value:"Methods",id:"methods",level:3},{value:"Constructors",id:"constructors-1",level:2},{value:"constructor",id:"constructor",level:3},{value:"Returns",id:"returns",level:4},{value:"Methods",id:"methods-1",level:2},{value:"getCreditsSubscriptionMetadataTemplate",id:"getcreditssubscriptionmetadatatemplate",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"getFileMetadataTemplate",id:"getfilemetadatatemplate",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-2",level:4},{value:"Defined in",id:"defined-in-1",level:4},{value:"getServiceMetadataTemplate",id:"getservicemetadatatemplate",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-3",level:4},{value:"Defined in",id:"defined-in-2",level:4},{value:"getSubscriptionMetadataTemplate",id:"getsubscriptionmetadatatemplate",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"Returns",id:"returns-4",level:4},{value:"Defined in",id:"defined-in-3",level:4},{value:"getTimeSubscriptionMetadataTemplate",id:"gettimesubscriptionmetadatatemplate",level:3},{value:"Parameters",id:"parameters-4",level:4},{value:"Returns",id:"returns-5",level:4},{value:"Defined in",id:"defined-in-4",level:4},{value:"validateSubscription",id:"validatesubscription",level:3},{value:"Parameters",id:"parameters-5",level:4},{value:"Returns",id:"returns-6",level:4},{value:"Defined in",id:"defined-in-5",level:4}],o={toc:m};function s(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},o,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/nevermined-sdk/api-reference/code-reference"},"@nevermined-io/sdk - v3.0.35")," / NvmAppMetadata"),(0,r.kt)("h1",{id:"class-nvmappmetadata"},"Class: NvmAppMetadata"),(0,r.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,r.kt)("h3",{id:"constructors"},"Constructors"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/classes/NvmAppMetadata#constructor"},"constructor"))),(0,r.kt)("h3",{id:"methods"},"Methods"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/classes/NvmAppMetadata#getcreditssubscriptionmetadatatemplate"},"getCreditsSubscriptionMetadataTemplate")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/classes/NvmAppMetadata#getfilemetadatatemplate"},"getFileMetadataTemplate")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/classes/NvmAppMetadata#getservicemetadatatemplate"},"getServiceMetadataTemplate")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/classes/NvmAppMetadata#getsubscriptionmetadatatemplate"},"getSubscriptionMetadataTemplate")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/classes/NvmAppMetadata#gettimesubscriptionmetadatatemplate"},"getTimeSubscriptionMetadataTemplate")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/classes/NvmAppMetadata#validatesubscription"},"validateSubscription"))),(0,r.kt)("h2",{id:"constructors-1"},"Constructors"),(0,r.kt)("h3",{id:"constructor"},"constructor"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"new NvmAppMetadata"),"(): ",(0,r.kt)("a",{parentName:"p",href:"/docs/nevermined-sdk/api-reference/classes/NvmAppMetadata"},(0,r.kt)("inlineCode",{parentName:"a"},"NvmAppMetadata"))),(0,r.kt)("h4",{id:"returns"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/nevermined-sdk/api-reference/classes/NvmAppMetadata"},(0,r.kt)("inlineCode",{parentName:"a"},"NvmAppMetadata"))),(0,r.kt)("h2",{id:"methods-1"},"Methods"),(0,r.kt)("h3",{id:"getcreditssubscriptionmetadatatemplate"},"getCreditsSubscriptionMetadataTemplate"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"getCreditsSubscriptionMetadataTemplate"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"name"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"author"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"customData?"),"): ",(0,r.kt)("a",{parentName:"p",href:"/docs/nevermined-sdk/api-reference/interfaces/MetaData"},(0,r.kt)("inlineCode",{parentName:"a"},"MetaData"))),(0,r.kt)("p",null,"It returns a metadata template for a credits limitted subscription"),(0,r.kt)("h4",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"name")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"the name of the subscription")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"author")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"the author of the subscrpiton")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"customData")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Object")),(0,r.kt)("td",{parentName:"tr",align:"left"},"any key-value pair to be included in the metadata")))),(0,r.kt)("h4",{id:"returns-1"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/nevermined-sdk/api-reference/interfaces/MetaData"},(0,r.kt)("inlineCode",{parentName:"a"},"MetaData"))),(0,r.kt)("p",null,"Metadata"),(0,r.kt)("h4",{id:"defined-in"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/sdk-js/blob/1c4dd664ca2801e7971e95af825f688095366860/src/ddo/NvmAppMetadata.ts#L46"},"src/ddo/NvmAppMetadata.ts:46")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"getfilemetadatatemplate"},"getFileMetadataTemplate"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"getFileMetadataTemplate"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"name"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"author"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"customData?"),"): ",(0,r.kt)("a",{parentName:"p",href:"/docs/nevermined-sdk/api-reference/interfaces/MetaData"},(0,r.kt)("inlineCode",{parentName:"a"},"MetaData"))),(0,r.kt)("p",null,"It gets a metadata template for a file type of asset (datasets, moldels, algorithms, etc.)"),(0,r.kt)("h4",{id:"parameters-1"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"name")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"the name of the asset")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"author")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"the autor of the asset")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"customData")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Object")),(0,r.kt)("td",{parentName:"tr",align:"left"},"key-value pairs to be included in the metadata")))),(0,r.kt)("h4",{id:"returns-2"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/nevermined-sdk/api-reference/interfaces/MetaData"},(0,r.kt)("inlineCode",{parentName:"a"},"MetaData"))),(0,r.kt)("p",null,"Metadata"),(0,r.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/sdk-js/blob/1c4dd664ca2801e7971e95af825f688095366860/src/ddo/NvmAppMetadata.ts#L197"},"src/ddo/NvmAppMetadata.ts:197")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"getservicemetadatatemplate"},"getServiceMetadataTemplate"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"getServiceMetadataTemplate"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"name"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"author"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"endpoints"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"openEndpoints"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"openApiEndpoint"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"serviceType?"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"authType"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"authToken?"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"authUser?"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"authPassword?"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"isPriceDynamic?"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"isNeverminedHosted?"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"queryProtocol?"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"customData?"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"nonce?"),"): ",(0,r.kt)("a",{parentName:"p",href:"/docs/nevermined-sdk/api-reference/interfaces/MetaData"},(0,r.kt)("inlineCode",{parentName:"a"},"MetaData"))),(0,r.kt)("p",null,"It returns a metadata template for Web Service"),(0,r.kt)("h4",{id:"parameters-2"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Default value"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"name")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"undefined")),(0,r.kt)("td",{parentName:"tr",align:"left"},"the name of the subscription")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"author")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"undefined")),(0,r.kt)("td",{parentName:"tr",align:"left"},"the author of the subscrpiton")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"endpoints")),(0,r.kt)("td",{parentName:"tr",align:"left"},"{"," ",(0,r.kt)("inlineCode",{parentName:"td"},"[verb: string]"),": ",(0,r.kt)("inlineCode",{parentName:"td"},"string"),"; }[]"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"undefined")),(0,r.kt)("td",{parentName:"tr",align:"left"},"the list of endpoints")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"openEndpoints")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string"),"[]"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"undefined")),(0,r.kt)("td",{parentName:"tr",align:"left"},"the list of open endpoints (not protected)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"openApiEndpoint")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"undefined")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"undefined")),(0,r.kt)("td",{parentName:"tr",align:"left"},"the openApi endpoint endpoint if any")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"serviceType")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"'RESTful'")),(0,r.kt)("td",{parentName:"tr",align:"left"},"the type of the service")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"authType")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},'"none"')," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},'"basic"')," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},'"bearer"')," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},'"oauth"')),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"undefined")),(0,r.kt)("td",{parentName:"tr",align:"left"},"the type of authentication required by the service")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"authToken?")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"undefined")),(0,r.kt)("td",{parentName:"tr",align:"left"},"the token to be used for authentication (if authType is oauth or bearer)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"authUser?")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"undefined")),(0,r.kt)("td",{parentName:"tr",align:"left"},"the username to be used for authentication (if authType is basic)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"authPassword?")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"undefined")),(0,r.kt)("td",{parentName:"tr",align:"left"},"the password to be used for authentication (if authType is basic)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"isPriceDynamic")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"boolean")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"false")),(0,r.kt)("td",{parentName:"tr",align:"left"},"if the price is dynamic")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"isNeverminedHosted")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"boolean")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"false")),(0,r.kt)("td",{parentName:"tr",align:"left"},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"queryProtocol")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"undefined")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"undefined")),(0,r.kt)("td",{parentName:"tr",align:"left"},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"customData")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Object")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"{}")),(0,r.kt)("td",{parentName:"tr",align:"left"},"any key-value pair to be included in the metadata")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"nonce")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},"number")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"undefined")),(0,r.kt)("td",{parentName:"tr",align:"left"},"the nonce to be included in the metadata")))),(0,r.kt)("h4",{id:"returns-3"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/nevermined-sdk/api-reference/interfaces/MetaData"},(0,r.kt)("inlineCode",{parentName:"a"},"MetaData"))),(0,r.kt)("p",null,"Metadata"),(0,r.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/sdk-js/blob/1c4dd664ca2801e7971e95af825f688095366860/src/ddo/NvmAppMetadata.ts#L115"},"src/ddo/NvmAppMetadata.ts:115")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"getsubscriptionmetadatatemplate"},"getSubscriptionMetadataTemplate"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"getSubscriptionMetadataTemplate"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"name"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"author"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"customData?"),"): ",(0,r.kt)("a",{parentName:"p",href:"/docs/nevermined-sdk/api-reference/interfaces/MetaData"},(0,r.kt)("inlineCode",{parentName:"a"},"MetaData"))),(0,r.kt)("p",null,"It returns a metadata template for subscription"),(0,r.kt)("h4",{id:"parameters-3"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"name")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"the name of the subscription")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"author")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"the author of the subscrpiton")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"customData")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Object")),(0,r.kt)("td",{parentName:"tr",align:"left"},"any key-value pair to be included in the metadata")))),(0,r.kt)("h4",{id:"returns-4"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/nevermined-sdk/api-reference/interfaces/MetaData"},(0,r.kt)("inlineCode",{parentName:"a"},"MetaData"))),(0,r.kt)("p",null,"Metadata"),(0,r.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/sdk-js/blob/1c4dd664ca2801e7971e95af825f688095366860/src/ddo/NvmAppMetadata.ts#L71"},"src/ddo/NvmAppMetadata.ts:71")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"gettimesubscriptionmetadatatemplate"},"getTimeSubscriptionMetadataTemplate"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"getTimeSubscriptionMetadataTemplate"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"name"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"author"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"timeMeasure"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"customData?"),"): ",(0,r.kt)("a",{parentName:"p",href:"/docs/nevermined-sdk/api-reference/interfaces/MetaData"},(0,r.kt)("inlineCode",{parentName:"a"},"MetaData"))),(0,r.kt)("p",null,"It returns a metadata template for a subscription with time limit"),(0,r.kt)("h4",{id:"parameters-4"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"name")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"the name of the subscription")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"author")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"the author of the subscrpiton")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"timeMeasure")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"the string defining the time measure")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"customData")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Object")),(0,r.kt)("td",{parentName:"tr",align:"left"},"any key-value pair to be included in the metadata")))),(0,r.kt)("h4",{id:"returns-5"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/nevermined-sdk/api-reference/interfaces/MetaData"},(0,r.kt)("inlineCode",{parentName:"a"},"MetaData"))),(0,r.kt)("p",null,"Metadata"),(0,r.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/sdk-js/blob/1c4dd664ca2801e7971e95af825f688095366860/src/ddo/NvmAppMetadata.ts#L19"},"src/ddo/NvmAppMetadata.ts:19")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"validatesubscription"},"validateSubscription"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"validateSubscription"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"metadata"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"subscriptionType"),"): ",(0,r.kt)("a",{parentName:"p",href:"/docs/nevermined-sdk/api-reference/interfaces/MetadataValidationResults"},(0,r.kt)("inlineCode",{parentName:"a"},"MetadataValidationResults"))),(0,r.kt)("h4",{id:"parameters-5"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"metadata")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/docs/nevermined-sdk/api-reference/interfaces/MetaData"},(0,r.kt)("inlineCode",{parentName:"a"},"MetaData")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"subscriptionType")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/docs/nevermined-sdk/api-reference/enums/SubscriptionType"},(0,r.kt)("inlineCode",{parentName:"a"},"SubscriptionType")))))),(0,r.kt)("h4",{id:"returns-6"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/nevermined-sdk/api-reference/interfaces/MetadataValidationResults"},(0,r.kt)("inlineCode",{parentName:"a"},"MetadataValidationResults"))),(0,r.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/sdk-js/blob/1c4dd664ca2801e7971e95af825f688095366860/src/ddo/NvmAppMetadata.ts#L221"},"src/ddo/NvmAppMetadata.ts:221")))}s.isMDXComponent=!0}}]);