"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3638],{3905:(e,t,n)=>{n.d(t,{Zo:()=>o,kt:()=>u});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=r.createContext({}),l=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},o=function(e){var t=l(e.components);return r.createElement(d.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,d=e.parentName,o=s(e,["components","mdxType","originalType","parentName"]),m=l(n),u=a,f=m["".concat(d,".").concat(u)]||m[u]||c[u]||i;return n?r.createElement(f,p(p({ref:t},o),{},{components:n})):r.createElement(f,p({ref:t},o))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,p=new Array(i);p[0]=m;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s.mdxType="string"==typeof e?e:a,p[1]=s;for(var l=2;l<i;l++)p[l]=n[l];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},62257:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>p,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var r=n(87462),a=(n(67294),n(3905));const i={},p=void 0,s={unversionedId:"nevermined-sdk/api-reference/interfaces/PaymentAttributes",id:"nevermined-sdk/api-reference/interfaces/PaymentAttributes",title:"PaymentAttributes",description:"@nevermined-io/sdk - v3.0.31 / PaymentAttributes",source:"@site/docs/nevermined-sdk/api-reference/interfaces/PaymentAttributes.md",sourceDirName:"nevermined-sdk/api-reference/interfaces",slug:"/nevermined-sdk/api-reference/interfaces/PaymentAttributes",permalink:"/docs/nevermined-sdk/api-reference/interfaces/PaymentAttributes",draft:!1,editUrl:"https://github.com/nevermined-io/docs/tree/main/docs/nevermined-sdk/api-reference/interfaces/PaymentAttributes.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"OperationResult",permalink:"/docs/nevermined-sdk/api-reference/interfaces/OperationResult"},next:{title:"PaymentData",permalink:"/docs/nevermined-sdk/api-reference/interfaces/PaymentData"}},d={},l=[{value:"Table of contents",id:"table-of-contents",level:2},{value:"Properties",id:"properties",level:3},{value:"Properties",id:"properties-1",level:2},{value:"additionalAttributes",id:"additionalattributes",level:3},{value:"Index signature",id:"index-signature",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"paymentEnabled",id:"paymentenabled",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"paymentType",id:"paymenttype",level:3},{value:"Defined in",id:"defined-in-2",level:4}],o={toc:l};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/nevermined-sdk/api-reference/code-reference"},"@nevermined-io/sdk - v3.0.31")," / PaymentAttributes"),(0,a.kt)("h1",{id:"interface-paymentattributes"},"Interface: PaymentAttributes"),(0,a.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,a.kt)("h3",{id:"properties"},"Properties"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/interfaces/PaymentAttributes#additionalattributes"},"additionalAttributes")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/interfaces/PaymentAttributes#paymentenabled"},"paymentEnabled")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/interfaces/PaymentAttributes#paymenttype"},"paymentType"))),(0,a.kt)("h2",{id:"properties-1"},"Properties"),(0,a.kt)("h3",{id:"additionalattributes"},"additionalAttributes"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"additionalAttributes"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"Object")),(0,a.kt)("h4",{id:"index-signature"},"Index signature"),(0,a.kt)("p",null,"\u25aa ","[key: ",(0,a.kt)("inlineCode",{parentName:"p"},"string"),"]",": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/sdk-js/blob/1c7b11ad598c195e6a484cc8f4ca9cc52a947a9f/src/types/DDOTypes.ts#L69"},"src/types/DDOTypes.ts:69")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"paymentenabled"},"paymentEnabled"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"paymentEnabled"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean")),(0,a.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/sdk-js/blob/1c7b11ad598c195e6a484cc8f4ca9cc52a947a9f/src/types/DDOTypes.ts#L68"},"src/types/DDOTypes.ts:68")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"paymenttype"},"paymentType"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"paymentType"),": ",(0,a.kt)("inlineCode",{parentName:"p"},'"serviceAgreements"')," ","|"," ",(0,a.kt)("inlineCode",{parentName:"p"},'"stripe"')),(0,a.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/sdk-js/blob/1c7b11ad598c195e6a484cc8f4ca9cc52a947a9f/src/types/DDOTypes.ts#L67"},"src/types/DDOTypes.ts:67")))}c.isMDXComponent=!0}}]);