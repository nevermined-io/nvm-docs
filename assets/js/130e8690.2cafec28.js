"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3632],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),o=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=o(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=d(e,["components","mdxType","originalType","parentName"]),m=o(n),k=a,u=m["".concat(s,".").concat(k)]||m[k]||p[k]||i;return n?r.createElement(u,l(l({ref:t},c),{},{components:n})):r.createElement(u,l({ref:t},c))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var d={};for(var s in t)hasOwnProperty.call(t,s)&&(d[s]=t[s]);d.originalType=e,d.mdxType="string"==typeof e?e:a,l[1]=d;for(var o=2;o<i;o++)l[o]=n[o];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},13177:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>d,toc:()=>o});var r=n(87462),a=(n(67294),n(3905));const i={},l=void 0,d={unversionedId:"nevermined-sdk/api-reference/classes/NvmAccount",id:"nevermined-sdk/api-reference/classes/NvmAccount",title:"NvmAccount",description:"@nevermined-io/sdk - v3.0.44 / NvmAccount",source:"@site/docs/nevermined-sdk/api-reference/classes/NvmAccount.md",sourceDirName:"nevermined-sdk/api-reference/classes",slug:"/nevermined-sdk/api-reference/classes/NvmAccount",permalink:"/docs/nevermined-sdk/api-reference/classes/NvmAccount",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Nft721Contract",permalink:"/docs/nevermined-sdk/api-reference/classes/Nft721Contract"},next:{title:"NvmAccountError",permalink:"/docs/nevermined-sdk/api-reference/classes/NvmAccountError"}},s={},o=[{value:"Table of contents",id:"table-of-contents",level:2},{value:"Constructors",id:"constructors",level:3},{value:"Properties",id:"properties",level:3},{value:"Methods",id:"methods",level:3},{value:"Constructors",id:"constructors-1",level:2},{value:"constructor",id:"constructor",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"Properties",id:"properties-1",level:2},{value:"accountSigner",id:"accountsigner",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"accountType",id:"accounttype",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"babySecret",id:"babysecret",level:3},{value:"Defined in",id:"defined-in-3",level:4},{value:"babyX",id:"babyx",level:3},{value:"Defined in",id:"defined-in-4",level:4},{value:"babyY",id:"babyy",level:3},{value:"Defined in",id:"defined-in-5",level:4},{value:"id",id:"id",level:3},{value:"Defined in",id:"defined-in-6",level:4},{value:"kernelClient",id:"kernelclient",level:3},{value:"Defined in",id:"defined-in-7",level:4},{value:"password",id:"password",level:3},{value:"Defined in",id:"defined-in-8",level:4},{value:"zeroDevSigner",id:"zerodevsigner",level:3},{value:"Defined in",id:"defined-in-9",level:4},{value:"Methods",id:"methods-1",level:2},{value:"getAccountSigner",id:"getaccountsigner",level:3},{value:"Returns",id:"returns-1",level:4},{value:"Defined in",id:"defined-in-10",level:4},{value:"getAddress",id:"getaddress",level:3},{value:"Returns",id:"returns-2",level:4},{value:"Defined in",id:"defined-in-11",level:4},{value:"getId",id:"getid",level:3},{value:"Returns",id:"returns-3",level:4},{value:"Defined in",id:"defined-in-12",level:4},{value:"getKernelClient",id:"getkernelclient",level:3},{value:"Returns",id:"returns-4",level:4},{value:"Defined in",id:"defined-in-13",level:4},{value:"getPassword",id:"getpassword",level:3},{value:"Returns",id:"returns-5",level:4},{value:"Defined in",id:"defined-in-14",level:4},{value:"getPublic",id:"getpublic",level:3},{value:"Returns",id:"returns-6",level:4},{value:"Defined in",id:"defined-in-15",level:4},{value:"getType",id:"gettype",level:3},{value:"Returns",id:"returns-7",level:4},{value:"Defined in",id:"defined-in-16",level:4},{value:"getZeroDevSigner",id:"getzerodevsigner",level:3},{value:"Returns",id:"returns-8",level:4},{value:"Defined in",id:"defined-in-17",level:4},{value:"isZeroDev",id:"iszerodev",level:3},{value:"Returns",id:"returns-9",level:4},{value:"Defined in",id:"defined-in-18",level:4},{value:"setId",id:"setid",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-10",level:4},{value:"Defined in",id:"defined-in-19",level:4},{value:"setPassword",id:"setpassword",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-11",level:4},{value:"Defined in",id:"defined-in-20",level:4},{value:"signTextLocally",id:"signtextlocally",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"Returns",id:"returns-12",level:4},{value:"Defined in",id:"defined-in-21",level:4},{value:"fromAccount",id:"fromaccount",level:3},{value:"Parameters",id:"parameters-4",level:4},{value:"Returns",id:"returns-13",level:4},{value:"Defined in",id:"defined-in-22",level:4},{value:"fromAddress",id:"fromaddress",level:3},{value:"Parameters",id:"parameters-5",level:4},{value:"Returns",id:"returns-14",level:4},{value:"Defined in",id:"defined-in-23",level:4},{value:"fromZeroDevSessionKey",id:"fromzerodevsessionkey",level:3},{value:"Parameters",id:"parameters-6",level:4},{value:"Returns",id:"returns-15",level:4},{value:"Defined in",id:"defined-in-24",level:4},{value:"fromZeroDevSigner",id:"fromzerodevsigner",level:3},{value:"Parameters",id:"parameters-7",level:4},{value:"Returns",id:"returns-16",level:4},{value:"Defined in",id:"defined-in-25",level:4}],c={toc:o};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/nevermined-sdk/api-reference/code-reference"},"@nevermined-io/sdk - v3.0.44")," / NvmAccount"),(0,a.kt)("h1",{id:"class-nvmaccount"},"Class: NvmAccount"),(0,a.kt)("p",null,"Account information."),(0,a.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,a.kt)("h3",{id:"constructors"},"Constructors"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/classes/NvmAccount#constructor"},"constructor"))),(0,a.kt)("h3",{id:"properties"},"Properties"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/classes/NvmAccount#accountsigner"},"accountSigner")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/classes/NvmAccount#accounttype"},"accountType")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/classes/NvmAccount#babysecret"},"babySecret")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/classes/NvmAccount#babyx"},"babyX")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/classes/NvmAccount#babyy"},"babyY")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/classes/NvmAccount#id"},"id")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/classes/NvmAccount#kernelclient"},"kernelClient")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/classes/NvmAccount#password"},"password")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/classes/NvmAccount#zerodevsigner"},"zeroDevSigner"))),(0,a.kt)("h3",{id:"methods"},"Methods"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/classes/NvmAccount#getaccountsigner"},"getAccountSigner")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/classes/NvmAccount#getaddress"},"getAddress")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/classes/NvmAccount#getid"},"getId")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/classes/NvmAccount#getkernelclient"},"getKernelClient")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/classes/NvmAccount#getpassword"},"getPassword")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/classes/NvmAccount#getpublic"},"getPublic")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/classes/NvmAccount#gettype"},"getType")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/classes/NvmAccount#getzerodevsigner"},"getZeroDevSigner")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/classes/NvmAccount#iszerodev"},"isZeroDev")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/classes/NvmAccount#setid"},"setId")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/classes/NvmAccount#setpassword"},"setPassword")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/classes/NvmAccount#signtextlocally"},"signTextLocally")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/classes/NvmAccount#fromaccount"},"fromAccount")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/classes/NvmAccount#fromaddress"},"fromAddress")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/classes/NvmAccount#fromzerodevsessionkey"},"fromZeroDevSessionKey")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/classes/NvmAccount#fromzerodevsigner"},"fromZeroDevSigner"))),(0,a.kt)("h2",{id:"constructors-1"},"Constructors"),(0,a.kt)("h3",{id:"constructor"},"constructor"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"new NvmAccount"),"(",(0,a.kt)("inlineCode",{parentName:"p"},"id"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"accountType?"),"): ",(0,a.kt)("a",{parentName:"p",href:"/docs/nevermined-sdk/api-reference/classes/NvmAccount"},(0,a.kt)("inlineCode",{parentName:"a"},"NvmAccount"))),(0,a.kt)("h4",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"id")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"string"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"accountType")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"NvmAccountType"))))),(0,a.kt)("h4",{id:"returns"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/nevermined-sdk/api-reference/classes/NvmAccount"},(0,a.kt)("inlineCode",{parentName:"a"},"NvmAccount"))),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/sdk-js/blob/1f765603c75b92c5d8798f51b63641eb0639883b/src/models/NvmAccount.ts#L86"},"src/models/NvmAccount.ts:86")),(0,a.kt)("h2",{id:"properties-1"},"Properties"),(0,a.kt)("h3",{id:"accountsigner"},"accountSigner"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Private")," ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"accountSigner"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"Account")," ","|"," ",(0,a.kt)("inlineCode",{parentName:"p"},"PrivateKeyAccount")),(0,a.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/sdk-js/blob/1f765603c75b92c5d8798f51b63641eb0639883b/src/models/NvmAccount.ts#L15"},"src/models/NvmAccount.ts:15")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"accounttype"},"accountType"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"accountType"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"NvmAccountType")),(0,a.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/sdk-js/blob/1f765603c75b92c5d8798f51b63641eb0639883b/src/models/NvmAccount.ts#L23"},"src/models/NvmAccount.ts:23")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"babysecret"},"babySecret"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"babySecret"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/sdk-js/blob/1f765603c75b92c5d8798f51b63641eb0639883b/src/models/NvmAccount.ts#L14"},"src/models/NvmAccount.ts:14")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"babyx"},"babyX"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"babyX"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/sdk-js/blob/1f765603c75b92c5d8798f51b63641eb0639883b/src/models/NvmAccount.ts#L12"},"src/models/NvmAccount.ts:12")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"babyy"},"babyY"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"babyY"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/sdk-js/blob/1f765603c75b92c5d8798f51b63641eb0639883b/src/models/NvmAccount.ts#L13"},"src/models/NvmAccount.ts:13")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"id"},"id"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Private")," ",(0,a.kt)("strong",{parentName:"p"},"id"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/sdk-js/blob/1f765603c75b92c5d8798f51b63641eb0639883b/src/models/NvmAccount.ts#L87"},"src/models/NvmAccount.ts:87")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"kernelclient"},"kernelClient"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Private")," ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"kernelClient"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"KernelAccountClient"),"\\<",(0,a.kt)("inlineCode",{parentName:"p"},'"0x5FF137D4b0FDCD49DcA30c7CF57E578a026d2789"'),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Transport"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Chain"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"any"),">"),(0,a.kt)("h4",{id:"defined-in-7"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/sdk-js/blob/1f765603c75b92c5d8798f51b63641eb0639883b/src/models/NvmAccount.ts#L16"},"src/models/NvmAccount.ts:16")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"password"},"password"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Private")," ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"password"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("h4",{id:"defined-in-8"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/sdk-js/blob/1f765603c75b92c5d8798f51b63641eb0639883b/src/models/NvmAccount.ts#L11"},"src/models/NvmAccount.ts:11")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"zerodevsigner"},"zeroDevSigner"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Private")," ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"zeroDevSigner"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"any")),(0,a.kt)("h4",{id:"defined-in-9"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/sdk-js/blob/1f765603c75b92c5d8798f51b63641eb0639883b/src/models/NvmAccount.ts#L22"},"src/models/NvmAccount.ts:22")),(0,a.kt)("h2",{id:"methods-1"},"Methods"),(0,a.kt)("h3",{id:"getaccountsigner"},"getAccountSigner"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"getAccountSigner"),"(): ",(0,a.kt)("inlineCode",{parentName:"p"},"any")),(0,a.kt)("h4",{id:"returns-1"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"any")),(0,a.kt)("h4",{id:"defined-in-10"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/sdk-js/blob/1f765603c75b92c5d8798f51b63641eb0639883b/src/models/NvmAccount.ts#L94"},"src/models/NvmAccount.ts:94")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"getaddress"},"getAddress"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"getAddress"),"(): ","`","0x$","{","string}","`"),(0,a.kt)("h4",{id:"returns-2"},"Returns"),(0,a.kt)("p",null,"`","0x$","{","string}","`"),(0,a.kt)("h4",{id:"defined-in-11"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/sdk-js/blob/1f765603c75b92c5d8798f51b63641eb0639883b/src/models/NvmAccount.ts#L113"},"src/models/NvmAccount.ts:113")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"getid"},"getId"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"getId"),"(): ","`","0x$","{","string}","`"),(0,a.kt)("h4",{id:"returns-3"},"Returns"),(0,a.kt)("p",null,"`","0x$","{","string}","`"),(0,a.kt)("h4",{id:"defined-in-12"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/sdk-js/blob/1f765603c75b92c5d8798f51b63641eb0639883b/src/models/NvmAccount.ts#L117"},"src/models/NvmAccount.ts:117")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"getkernelclient"},"getKernelClient"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"getKernelClient"),"(): ",(0,a.kt)("inlineCode",{parentName:"p"},"undefined")," ","|"," ",(0,a.kt)("inlineCode",{parentName:"p"},"KernelAccountClient"),"\\<",(0,a.kt)("inlineCode",{parentName:"p"},'"0x5FF137D4b0FDCD49DcA30c7CF57E578a026d2789"'),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Transport"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Chain"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"any"),">"),(0,a.kt)("h4",{id:"returns-4"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"undefined")," ","|"," ",(0,a.kt)("inlineCode",{parentName:"p"},"KernelAccountClient"),"\\<",(0,a.kt)("inlineCode",{parentName:"p"},'"0x5FF137D4b0FDCD49DcA30c7CF57E578a026d2789"'),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Transport"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Chain"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"any"),">"),(0,a.kt)("h4",{id:"defined-in-13"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/sdk-js/blob/1f765603c75b92c5d8798f51b63641eb0639883b/src/models/NvmAccount.ts#L98"},"src/models/NvmAccount.ts:98")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"getpassword"},"getPassword"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"getPassword"),"(): ",(0,a.kt)("inlineCode",{parentName:"p"},"undefined")," ","|"," ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("p",null,"Returns account password."),(0,a.kt)("h4",{id:"returns-5"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"undefined")," ","|"," ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("p",null,"The account password."),(0,a.kt)("h4",{id:"defined-in-14"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/sdk-js/blob/1f765603c75b92c5d8798f51b63641eb0639883b/src/models/NvmAccount.ts#L153"},"src/models/NvmAccount.ts:153")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"getpublic"},"getPublic"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"getPublic"),"(): ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("h4",{id:"returns-6"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("h4",{id:"defined-in-15"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/sdk-js/blob/1f765603c75b92c5d8798f51b63641eb0639883b/src/models/NvmAccount.ts#L125"},"src/models/NvmAccount.ts:125")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"gettype"},"getType"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"getType"),"(): ",(0,a.kt)("inlineCode",{parentName:"p"},'"local"')," ","|"," ",(0,a.kt)("inlineCode",{parentName:"p"},'"json-rpc"')," ","|"," ",(0,a.kt)("inlineCode",{parentName:"p"},'"zerodev"')," ","|"," ",(0,a.kt)("inlineCode",{parentName:"p"},'"sessionKey"')),(0,a.kt)("h4",{id:"returns-7"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},'"local"')," ","|"," ",(0,a.kt)("inlineCode",{parentName:"p"},'"json-rpc"')," ","|"," ",(0,a.kt)("inlineCode",{parentName:"p"},'"zerodev"')," ","|"," ",(0,a.kt)("inlineCode",{parentName:"p"},'"sessionKey"')),(0,a.kt)("h4",{id:"defined-in-16"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/sdk-js/blob/1f765603c75b92c5d8798f51b63641eb0639883b/src/models/NvmAccount.ts#L102"},"src/models/NvmAccount.ts:102")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"getzerodevsigner"},"getZeroDevSigner"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"getZeroDevSigner"),"(): ",(0,a.kt)("inlineCode",{parentName:"p"},"any")),(0,a.kt)("h4",{id:"returns-8"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"any")),(0,a.kt)("h4",{id:"defined-in-17"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/sdk-js/blob/1f765603c75b92c5d8798f51b63641eb0639883b/src/models/NvmAccount.ts#L105"},"src/models/NvmAccount.ts:105")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"iszerodev"},"isZeroDev"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"isZeroDev"),"(): ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean")),(0,a.kt)("h4",{id:"returns-9"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"boolean")),(0,a.kt)("h4",{id:"defined-in-18"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/sdk-js/blob/1f765603c75b92c5d8798f51b63641eb0639883b/src/models/NvmAccount.ts#L109"},"src/models/NvmAccount.ts:109")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"setid"},"setId"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"setId"),"(",(0,a.kt)("inlineCode",{parentName:"p"},"id"),"): ",(0,a.kt)("inlineCode",{parentName:"p"},"void")),(0,a.kt)("h4",{id:"parameters-1"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"id")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"string"))))),(0,a.kt)("h4",{id:"returns-10"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"void")),(0,a.kt)("h4",{id:"defined-in-19"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/sdk-js/blob/1f765603c75b92c5d8798f51b63641eb0639883b/src/models/NvmAccount.ts#L121"},"src/models/NvmAccount.ts:121")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"setpassword"},"setPassword"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"setPassword"),"(",(0,a.kt)("inlineCode",{parentName:"p"},"password"),"): ",(0,a.kt)("inlineCode",{parentName:"p"},"void")),(0,a.kt)("p",null,"Set account password."),(0,a.kt)("h4",{id:"parameters-2"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"password")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",{parentName:"tr",align:"left"},"Password for account.")))),(0,a.kt)("h4",{id:"returns-11"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"void")),(0,a.kt)("h4",{id:"defined-in-20"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/sdk-js/blob/1f765603c75b92c5d8798f51b63641eb0639883b/src/models/NvmAccount.ts#L145"},"src/models/NvmAccount.ts:145")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"signtextlocally"},"signTextLocally"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"signTextLocally"),"(",(0,a.kt)("inlineCode",{parentName:"p"},"text"),"): ",(0,a.kt)("inlineCode",{parentName:"p"},"Promise"),"\\<","`","0x$","{","string}","`",">"),(0,a.kt)("h4",{id:"parameters-3"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"text")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"string")," ","|"," ",(0,a.kt)("inlineCode",{parentName:"td"},"Uint8Array"))))),(0,a.kt)("h4",{id:"returns-12"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Promise"),"\\<","`","0x$","{","string}","`",">"),(0,a.kt)("h4",{id:"defined-in-21"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/sdk-js/blob/1f765603c75b92c5d8798f51b63641eb0639883b/src/models/NvmAccount.ts#L129"},"src/models/NvmAccount.ts:129")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"fromaccount"},"fromAccount"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"fromAccount"),"(",(0,a.kt)("inlineCode",{parentName:"p"},"account"),"): ",(0,a.kt)("a",{parentName:"p",href:"/docs/nevermined-sdk/api-reference/classes/NvmAccount"},(0,a.kt)("inlineCode",{parentName:"a"},"NvmAccount"))),(0,a.kt)("p",null,"Returns a nevermined Account from a viem account"),(0,a.kt)("h4",{id:"parameters-4"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"account")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"Account")," ","|"," ",(0,a.kt)("inlineCode",{parentName:"td"},"PrivateKeyAccount")),(0,a.kt)("td",{parentName:"tr",align:"left"},"A viem local account")))),(0,a.kt)("h4",{id:"returns-13"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/nevermined-sdk/api-reference/classes/NvmAccount"},(0,a.kt)("inlineCode",{parentName:"a"},"NvmAccount"))),(0,a.kt)("p",null,"The nevermined account"),(0,a.kt)("h4",{id:"defined-in-22"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/sdk-js/blob/1f765603c75b92c5d8798f51b63641eb0639883b/src/models/NvmAccount.ts#L31"},"src/models/NvmAccount.ts:31")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"fromaddress"},"fromAddress"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"fromAddress"),"(",(0,a.kt)("inlineCode",{parentName:"p"},"address"),"): ",(0,a.kt)("a",{parentName:"p",href:"/docs/nevermined-sdk/api-reference/classes/NvmAccount"},(0,a.kt)("inlineCode",{parentName:"a"},"NvmAccount"))),(0,a.kt)("p",null,"Returns a nevermined Account from an address. This method is used for browser integration (i.e Metamask)"),(0,a.kt)("h4",{id:"parameters-5"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"address")),(0,a.kt)("td",{parentName:"tr",align:"left"},"`","0x$","{","string}","`"),(0,a.kt)("td",{parentName:"tr",align:"left"},"A wallet address")))),(0,a.kt)("h4",{id:"returns-14"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/nevermined-sdk/api-reference/classes/NvmAccount"},(0,a.kt)("inlineCode",{parentName:"a"},"NvmAccount"))),(0,a.kt)("p",null,"The nevermined account"),(0,a.kt)("h4",{id:"defined-in-23"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/sdk-js/blob/1f765603c75b92c5d8798f51b63641eb0639883b/src/models/NvmAccount.ts#L44"},"src/models/NvmAccount.ts:44")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"fromzerodevsessionkey"},"fromZeroDevSessionKey"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"fromZeroDevSessionKey"),"(",(0,a.kt)("inlineCode",{parentName:"p"},"kernelClient"),"): ",(0,a.kt)("a",{parentName:"p",href:"/docs/nevermined-sdk/api-reference/classes/NvmAccount"},(0,a.kt)("inlineCode",{parentName:"a"},"NvmAccount"))),(0,a.kt)("h4",{id:"parameters-6"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"kernelClient")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"KernelAccountClient"),"\\<",(0,a.kt)("inlineCode",{parentName:"td"},'"0x5FF137D4b0FDCD49DcA30c7CF57E578a026d2789"'),", ",(0,a.kt)("inlineCode",{parentName:"td"},"Transport"),", ",(0,a.kt)("inlineCode",{parentName:"td"},"Chain"),", ",(0,a.kt)("inlineCode",{parentName:"td"},"any"),">")))),(0,a.kt)("h4",{id:"returns-15"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/nevermined-sdk/api-reference/classes/NvmAccount"},(0,a.kt)("inlineCode",{parentName:"a"},"NvmAccount"))),(0,a.kt)("h4",{id:"defined-in-24"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/sdk-js/blob/1f765603c75b92c5d8798f51b63641eb0639883b/src/models/NvmAccount.ts#L71"},"src/models/NvmAccount.ts:71")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"fromzerodevsigner"},"fromZeroDevSigner"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"fromZeroDevSigner"),"(",(0,a.kt)("inlineCode",{parentName:"p"},"kernelClient"),"): ",(0,a.kt)("inlineCode",{parentName:"p"},"Promise"),"\\<",(0,a.kt)("a",{parentName:"p",href:"/docs/nevermined-sdk/api-reference/classes/NvmAccount"},(0,a.kt)("inlineCode",{parentName:"a"},"NvmAccount")),">"),(0,a.kt)("p",null,"Returns a nevermined Account from a zerodev signer"),(0,a.kt)("h4",{id:"parameters-7"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"kernelClient")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"KernelAccountClient"),"\\<",(0,a.kt)("inlineCode",{parentName:"td"},'"0x5FF137D4b0FDCD49DcA30c7CF57E578a026d2789"'),", ",(0,a.kt)("inlineCode",{parentName:"td"},"Transport"),", ",(0,a.kt)("inlineCode",{parentName:"td"},"Chain"),", ",(0,a.kt)("inlineCode",{parentName:"td"},"any"),">")))),(0,a.kt)("h4",{id:"returns-16"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Promise"),"\\<",(0,a.kt)("a",{parentName:"p",href:"/docs/nevermined-sdk/api-reference/classes/NvmAccount"},(0,a.kt)("inlineCode",{parentName:"a"},"NvmAccount")),">"),(0,a.kt)("p",null,"The nevermined account"),(0,a.kt)("h4",{id:"defined-in-25"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/sdk-js/blob/1f765603c75b92c5d8798f51b63641eb0639883b/src/models/NvmAccount.ts#L56"},"src/models/NvmAccount.ts:56")))}p.isMDXComponent=!0}}]);