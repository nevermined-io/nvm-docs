"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5166],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>m});var i=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function d(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=i.createContext({}),s=function(e){var n=i.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=s(e.components);return i.createElement(o.Provider,{value:n},e.children)},f={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},c=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,p=d(e,["components","mdxType","originalType","parentName"]),c=s(t),m=a,k=c["".concat(o,".").concat(m)]||c[m]||f[m]||r;return t?i.createElement(k,l(l({ref:n},p),{},{components:t})):i.createElement(k,l({ref:n},p))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,l=new Array(r);l[0]=c;var d={};for(var o in n)hasOwnProperty.call(n,o)&&(d[o]=n[o]);d.originalType=e,d.mdxType="string"==typeof e?e:a,l[1]=d;for(var s=2;s<r;s++)l[s]=t[s];return i.createElement.apply(null,l)}return i.createElement.apply(null,t)}c.displayName="MDXCreateElement"},80625:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>f,frontMatter:()=>r,metadata:()=>d,toc:()=>s});var i=t(87462),a=(t(67294),t(3905));const r={},l=void 0,d={unversionedId:"nevermined-sdk/api-reference/interfaces/NeverminedInitializationOptions",id:"nevermined-sdk/api-reference/interfaces/NeverminedInitializationOptions",title:"NeverminedInitializationOptions",description:"@nevermined-io/sdk - v3.0.19 / NeverminedInitializationOptions",source:"@site/docs/nevermined-sdk/api-reference/interfaces/NeverminedInitializationOptions.md",sourceDirName:"nevermined-sdk/api-reference/interfaces",slug:"/nevermined-sdk/api-reference/interfaces/NeverminedInitializationOptions",permalink:"/docs/nevermined-sdk/api-reference/interfaces/NeverminedInitializationOptions",draft:!1,editUrl:"https://github.com/nevermined-io/docs/tree/main/docs/nevermined-sdk/api-reference/interfaces/NeverminedInitializationOptions.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"NFT721MintedEntry",permalink:"/docs/nevermined-sdk/api-reference/interfaces/NFT721MintedEntry"},next:{title:"NewBookmark",permalink:"/docs/nevermined-sdk/api-reference/interfaces/NewBookmark"}},o={},s=[{value:"Table of contents",id:"table-of-contents",level:2},{value:"Properties",id:"properties",level:3},{value:"Properties",id:"properties-1",level:2},{value:"loadAccessFlow",id:"loadaccessflow",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"loadCompute",id:"loadcompute",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"loadCore",id:"loadcore",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"loadDIDTransferFlow",id:"loaddidtransferflow",level:3},{value:"Defined in",id:"defined-in-3",level:4},{value:"loadDispenser",id:"loaddispenser",level:3},{value:"Defined in",id:"defined-in-4",level:4},{value:"loadERC20Token",id:"loaderc20token",level:3},{value:"Defined in",id:"defined-in-5",level:4},{value:"loadNFTs1155",id:"loadnfts1155",level:3},{value:"Defined in",id:"defined-in-6",level:4},{value:"loadNFTs721",id:"loadnfts721",level:3},{value:"Defined in",id:"defined-in-7",level:4},{value:"loadRewards",id:"loadrewards",level:3},{value:"Defined in",id:"defined-in-8",level:4},{value:"loadRoyalties",id:"loadroyalties",level:3},{value:"Defined in",id:"defined-in-9",level:4},{value:"loadServiceAgreements",id:"loadserviceagreements",level:3},{value:"Defined in",id:"defined-in-10",level:4}],p={toc:s};function f(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,i.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/nevermined-sdk/api-reference/code-reference"},"@nevermined-io/sdk - v3.0.19")," / NeverminedInitializationOptions"),(0,a.kt)("h1",{id:"interface-neverminedinitializationoptions"},"Interface: NeverminedInitializationOptions"),(0,a.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,a.kt)("h3",{id:"properties"},"Properties"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/interfaces/NeverminedInitializationOptions#loadaccessflow"},"loadAccessFlow")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/interfaces/NeverminedInitializationOptions#loadcompute"},"loadCompute")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/interfaces/NeverminedInitializationOptions#loadcore"},"loadCore")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/interfaces/NeverminedInitializationOptions#loaddidtransferflow"},"loadDIDTransferFlow")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/interfaces/NeverminedInitializationOptions#loaddispenser"},"loadDispenser")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/interfaces/NeverminedInitializationOptions#loaderc20token"},"loadERC20Token")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/interfaces/NeverminedInitializationOptions#loadnfts1155"},"loadNFTs1155")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/interfaces/NeverminedInitializationOptions#loadnfts721"},"loadNFTs721")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/interfaces/NeverminedInitializationOptions#loadrewards"},"loadRewards")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/interfaces/NeverminedInitializationOptions#loadroyalties"},"loadRoyalties")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/interfaces/NeverminedInitializationOptions#loadserviceagreements"},"loadServiceAgreements"))),(0,a.kt)("h2",{id:"properties-1"},"Properties"),(0,a.kt)("h3",{id:"loadaccessflow"},"loadAccessFlow"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"loadAccessFlow"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean")),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/sdk-js/blob/065f3decbaad4f3943ea9ea3e7eade094f617f96/src/types/GeneralTypes.ts#L100"},"src/types/GeneralTypes.ts:100")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"loadcompute"},"loadCompute"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"loadCompute"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean")),(0,a.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/sdk-js/blob/065f3decbaad4f3943ea9ea3e7eade094f617f96/src/types/GeneralTypes.ts#L104"},"src/types/GeneralTypes.ts:104")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"loadcore"},"loadCore"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"loadCore"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean")),(0,a.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/sdk-js/blob/065f3decbaad4f3943ea9ea3e7eade094f617f96/src/types/GeneralTypes.ts#L94"},"src/types/GeneralTypes.ts:94")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"loaddidtransferflow"},"loadDIDTransferFlow"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"loadDIDTransferFlow"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean")),(0,a.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/sdk-js/blob/065f3decbaad4f3943ea9ea3e7eade094f617f96/src/types/GeneralTypes.ts#L101"},"src/types/GeneralTypes.ts:101")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"loaddispenser"},"loadDispenser"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"loadDispenser"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean")),(0,a.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/sdk-js/blob/065f3decbaad4f3943ea9ea3e7eade094f617f96/src/types/GeneralTypes.ts#L98"},"src/types/GeneralTypes.ts:98")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"loaderc20token"},"loadERC20Token"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"loadERC20Token"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean")),(0,a.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/sdk-js/blob/065f3decbaad4f3943ea9ea3e7eade094f617f96/src/types/GeneralTypes.ts#L99"},"src/types/GeneralTypes.ts:99")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"loadnfts1155"},"loadNFTs1155"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"loadNFTs1155"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean")),(0,a.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/sdk-js/blob/065f3decbaad4f3943ea9ea3e7eade094f617f96/src/types/GeneralTypes.ts#L97"},"src/types/GeneralTypes.ts:97")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"loadnfts721"},"loadNFTs721"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"loadNFTs721"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean")),(0,a.kt)("h4",{id:"defined-in-7"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/sdk-js/blob/065f3decbaad4f3943ea9ea3e7eade094f617f96/src/types/GeneralTypes.ts#L96"},"src/types/GeneralTypes.ts:96")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"loadrewards"},"loadRewards"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"loadRewards"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean")),(0,a.kt)("h4",{id:"defined-in-8"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/sdk-js/blob/065f3decbaad4f3943ea9ea3e7eade094f617f96/src/types/GeneralTypes.ts#L102"},"src/types/GeneralTypes.ts:102")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"loadroyalties"},"loadRoyalties"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"loadRoyalties"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean")),(0,a.kt)("h4",{id:"defined-in-9"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/sdk-js/blob/065f3decbaad4f3943ea9ea3e7eade094f617f96/src/types/GeneralTypes.ts#L103"},"src/types/GeneralTypes.ts:103")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"loadserviceagreements"},"loadServiceAgreements"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"loadServiceAgreements"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean")),(0,a.kt)("h4",{id:"defined-in-10"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/sdk-js/blob/065f3decbaad4f3943ea9ea3e7eade094f617f96/src/types/GeneralTypes.ts#L95"},"src/types/GeneralTypes.ts:95")))}f.isMDXComponent=!0}}]);