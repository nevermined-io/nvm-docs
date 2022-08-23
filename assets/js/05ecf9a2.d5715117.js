"use strict";(self.webpackChunknvm_docs=self.webpackChunknvm_docs||[]).push([[4290],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return k}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),p=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):d(d({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),s=p(n),k=r,N=s["".concat(o,".").concat(k)]||s[k]||c[k]||i;return n?a.createElement(N,d(d({ref:t},m),{},{components:n})):a.createElement(N,d({ref:t},m))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,d=new Array(i);d[0]=s;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:r,d[1]=l;for(var p=2;p<i;p++)d[p]=n[p];return a.createElement.apply(null,d)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},3961:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return o},default:function(){return k},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return c}});var a=n(3117),r=n(102),i=(n(7294),n(3905)),d=["components"],l={},o=void 0,p={unversionedId:"architecture/components/catalog/core/modules/index",id:"architecture/components/catalog/core/modules/index",title:"index",description:"@nevermined-io/catalog-core / Modules / index",source:"@site/docs/architecture/components/catalog/core/modules/index.md",sourceDirName:"architecture/components/catalog/core/modules",slug:"/architecture/components/catalog/core/modules/",permalink:"/docs/architecture/components/catalog/core/modules/",draft:!1,editUrl:"https://github.com/nevermined-io/nvm-docs/tree/main/docs/architecture/components/catalog/core/modules/index.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"index.UserProfileParams",permalink:"/docs/architecture/components/catalog/core/interfaces/index.UserProfileParams"},next:{title:"services_account",permalink:"/docs/architecture/components/catalog/core/modules/services_account"}},m={},c=[{value:"Table of contents",id:"table-of-contents",level:2},{value:"References",id:"references",level:3},{value:"Enumerations",id:"enumerations",level:3},{value:"Interfaces",id:"interfaces",level:3},{value:"Type Aliases",id:"type-aliases",level:3},{value:"Variables",id:"variables",level:3},{value:"Functions",id:"functions",level:3},{value:"References",id:"references-1",level:2},{value:"default",id:"default",level:3},{value:"Type Aliases",id:"type-aliases-1",level:2},{value:"DID",id:"did",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"EventResult",id:"eventresult",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"NftTypes",id:"nfttypes",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"Variables",id:"variables-1",level:2},{value:"Catalog",id:"catalog",level:3},{value:"Type declaration",id:"type-declaration",level:4},{value:"Defined in",id:"defined-in-3",level:4},{value:"Functions",id:"functions-1",level:2},{value:"getAgreementId",id:"getagreementid",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in-4",level:4},{value:"getCurrentAccount",id:"getcurrentaccount",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Defined in",id:"defined-in-5",level:4},{value:"zeroX",id:"zerox",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-2",level:4},{value:"Defined in",id:"defined-in-6",level:4}],s={toc:c};function k(e){var t=e.components,n=(0,r.Z)(e,d);return(0,i.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/architecture/components/catalog/core/"},"@nevermined-io/catalog-core")," / ",(0,i.kt)("a",{parentName:"p",href:"/docs/architecture/components/catalog/core/modules"},"Modules")," / index"),(0,i.kt)("h1",{id:"module-index"},"Module: index"),(0,i.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,i.kt)("h3",{id:"references"},"References"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/architecture/components/catalog/core/modules/#default"},"default"))),(0,i.kt)("h3",{id:"enumerations"},"Enumerations"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/architecture/components/catalog/core/enums/index.RoyaltyKind"},"RoyaltyKind")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/architecture/components/catalog/core/enums/index.State"},"State"))),(0,i.kt)("h3",{id:"interfaces"},"Interfaces"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/architecture/components/catalog/core/interfaces/index.AccountModule"},"AccountModule")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/architecture/components/catalog/core/interfaces/index.AssetFile"},"AssetFile")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/architecture/components/catalog/core/interfaces/index.AssetPublishParams"},"AssetPublishParams")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/architecture/components/catalog/core/interfaces/index.AssetPublishProviderState"},"AssetPublishProviderState")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/architecture/components/catalog/core/interfaces/index.AssetState"},"AssetState")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/architecture/components/catalog/core/interfaces/index.AssetsModule"},"AssetsModule")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/architecture/components/catalog/core/interfaces/index.ContractEventSubscription"},"ContractEventSubscription")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/architecture/components/catalog/core/interfaces/index.CustomErc20Token"},"CustomErc20Token")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/architecture/components/catalog/core/interfaces/index.FileMetadata"},"FileMetadata")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/architecture/components/catalog/core/interfaces/index.FullfilledOrders"},"FullfilledOrders")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/architecture/components/catalog/core/interfaces/index.GenericOutput"},"GenericOutput")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/architecture/components/catalog/core/interfaces/index.MarketplaceAPIToken"},"MarketplaceAPIToken")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/architecture/components/catalog/core/interfaces/index.MintNFTInput"},"MintNFTInput")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/architecture/components/catalog/core/interfaces/index.NFTDetails"},"NFTDetails")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/architecture/components/catalog/core/interfaces/index.NeverminedProviderContext"},"NeverminedProviderContext")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/architecture/components/catalog/core/interfaces/index.NeverminedProviderProps"},"NeverminedProviderProps")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/architecture/components/catalog/core/interfaces/index.RegisterEvent"},"RegisterEvent")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/architecture/components/catalog/core/interfaces/index.SubscribeModule"},"SubscribeModule")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/architecture/components/catalog/core/interfaces/index.SubscriptionActions"},"SubscriptionActions")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/architecture/components/catalog/core/interfaces/index.Transfer"},"Transfer")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/architecture/components/catalog/core/interfaces/index.UserProfileParams"},"UserProfileParams"))),(0,i.kt)("h3",{id:"type-aliases"},"Type Aliases"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/architecture/components/catalog/core/modules/#did"},"DID")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/architecture/components/catalog/core/modules/#eventresult"},"EventResult")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/architecture/components/catalog/core/modules/#nfttypes"},"NftTypes"))),(0,i.kt)("h3",{id:"variables"},"Variables"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/architecture/components/catalog/core/modules/#catalog"},"Catalog"))),(0,i.kt)("h3",{id:"functions"},"Functions"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/architecture/components/catalog/core/modules/#getagreementid"},"getAgreementId")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/architecture/components/catalog/core/modules/#getcurrentaccount"},"getCurrentAccount")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/architecture/components/catalog/core/modules/#zerox"},"zeroX"))),(0,i.kt)("h2",{id:"references-1"},"References"),(0,i.kt)("h3",{id:"default"},"default"),(0,i.kt)("p",null,"Renames and re-exports ",(0,i.kt)("a",{parentName:"p",href:"/docs/architecture/components/catalog/core/modules/#catalog"},"Catalog")),(0,i.kt)("h2",{id:"type-aliases-1"},"Type Aliases"),(0,i.kt)("h3",{id:"did"},"DID"),(0,i.kt)("p",null,"\u01ac ",(0,i.kt)("strong",{parentName:"p"},"DID"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("p",null,"Id of the asset"),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/components-catalog/blob/bd89666/lib/src/types/index.ts#L387"},"src/types/index.ts:387")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"eventresult"},"EventResult"),(0,i.kt)("p",null,"\u01ac ",(0,i.kt)("strong",{parentName:"p"},"EventResult"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"any"),"[]",">"),(0,i.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,i.kt)("p",null,"node_modules/@nevermined-io/nevermined-sdk-js/dist/node/events/NeverminedEvent.d.ts:22"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"nfttypes"},"NftTypes"),(0,i.kt)("p",null,"\u01ac ",(0,i.kt)("strong",{parentName:"p"},"NftTypes"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"721")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},"1155")),(0,i.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,i.kt)("p",null,"node_modules/@nevermined-io/nevermined-sdk-js/dist/node/gateway/Gateway.d.ts:6"),(0,i.kt)("h2",{id:"variables-1"},"Variables"),(0,i.kt)("h3",{id:"catalog"},"Catalog"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,i.kt)("strong",{parentName:"p"},"Catalog"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Object")),(0,i.kt)("h4",{id:"type-declaration"},"Type declaration"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"AssetPublishContext")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Context"),"<",(0,i.kt)("a",{parentName:"td",href:"/docs/architecture/components/catalog/core/interfaces/index.AssetPublishProviderState"},(0,i.kt)("inlineCode",{parentName:"a"},"AssetPublishProviderState")),">")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"AssetPublishProvider")),(0,i.kt)("td",{parentName:"tr",align:"left"},"(",(0,i.kt)("inlineCode",{parentName:"td"},"__namedParameters"),": { ",(0,i.kt)("inlineCode",{parentName:"td"},"children"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"ReactElement"),"<",(0,i.kt)("inlineCode",{parentName:"td"},"any"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"string")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"JSXElementConstructor"),"<",(0,i.kt)("inlineCode",{parentName:"td"},"any"),">",">","  }) => ",(0,i.kt)("inlineCode",{parentName:"td"},"Element"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"MARKETPLACE_API_TOKEN")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},'"marketplaceApiToken"'))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"NeverminedContext")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Context"),"<",(0,i.kt)("a",{parentName:"td",href:"/docs/architecture/components/catalog/core/interfaces/index.NeverminedProviderContext"},(0,i.kt)("inlineCode",{parentName:"a"},"NeverminedProviderContext")),">")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"NeverminedProvider")),(0,i.kt)("td",{parentName:"tr",align:"left"},"(",(0,i.kt)("inlineCode",{parentName:"td"},"__namedParameters"),": ",(0,i.kt)("a",{parentName:"td",href:"/docs/architecture/components/catalog/core/interfaces/index.NeverminedProviderProps"},(0,i.kt)("inlineCode",{parentName:"a"},"NeverminedProviderProps")),") => ",(0,i.kt)("inlineCode",{parentName:"td"},"Element"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"fetchMarketplaceApiTokenFromLocalStorage")),(0,i.kt)("td",{parentName:"tr",align:"left"},"() => ",(0,i.kt)("a",{parentName:"td",href:"/docs/architecture/components/catalog/core/interfaces/index.MarketplaceAPIToken"},(0,i.kt)("inlineCode",{parentName:"a"},"MarketplaceAPIToken")))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"getAssetRegisterEvent")),(0,i.kt)("td",{parentName:"tr",align:"left"},"(",(0,i.kt)("inlineCode",{parentName:"td"},"did"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"string"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"graphUrl"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"string"),") => ",(0,i.kt)("inlineCode",{parentName:"td"},"Promise"),"<",(0,i.kt)("a",{parentName:"td",href:"/docs/architecture/components/catalog/core/interfaces/index.RegisterEvent"},(0,i.kt)("inlineCode",{parentName:"a"},"RegisterEvent")),"[]",">")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"getTransfers")),(0,i.kt)("td",{parentName:"tr",align:"left"},"(",(0,i.kt)("inlineCode",{parentName:"td"},"sdk"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"Nevermined"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"receiver"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"string"),") => ",(0,i.kt)("inlineCode",{parentName:"td"},"Promise"),"<",(0,i.kt)("a",{parentName:"td",href:"/docs/architecture/components/catalog/core/interfaces/index.Transfer"},(0,i.kt)("inlineCode",{parentName:"a"},"Transfer")),"[]",">")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"getUserFulfilledEvents")),(0,i.kt)("td",{parentName:"tr",align:"left"},"(",(0,i.kt)("inlineCode",{parentName:"td"},"sdk"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"Nevermined"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"account"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"string"),") => ",(0,i.kt)("inlineCode",{parentName:"td"},"Promise"),"<",(0,i.kt)("a",{parentName:"td",href:"/docs/architecture/components/catalog/core/interfaces/index.FullfilledOrders"},(0,i.kt)("inlineCode",{parentName:"a"},"FullfilledOrders")),"[]",">")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"getUserRegisterEvents")),(0,i.kt)("td",{parentName:"tr",align:"left"},"(",(0,i.kt)("inlineCode",{parentName:"td"},"sdk"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"Nevermined"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"owner"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"string"),") => ",(0,i.kt)("inlineCode",{parentName:"td"},"Promise"),"<",(0,i.kt)("a",{parentName:"td",href:"/docs/architecture/components/catalog/core/interfaces/index.RegisterEvent"},(0,i.kt)("inlineCode",{parentName:"a"},"RegisterEvent")),"[]",">")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"initialState")),(0,i.kt)("td",{parentName:"tr",align:"left"},"{ ",(0,i.kt)("inlineCode",{parentName:"td"},"sdk"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"Nevermined"),"  }")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"initialState.sdk")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Nevermined"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"initializeNevermined")),(0,i.kt)("td",{parentName:"tr",align:"left"},"(",(0,i.kt)("inlineCode",{parentName:"td"},"config"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"Config"),") => ",(0,i.kt)("inlineCode",{parentName:"td"},"Promise"),"<",(0,i.kt)("a",{parentName:"td",href:"/docs/architecture/components/catalog/core/interfaces/index.GenericOutput"},(0,i.kt)("inlineCode",{parentName:"a"},"GenericOutput")),"<",(0,i.kt)("inlineCode",{parentName:"td"},"Nevermined"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"any"),">",">")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"isTokenValid")),(0,i.kt)("td",{parentName:"tr",align:"left"},"() => ",(0,i.kt)("inlineCode",{parentName:"td"},"boolean"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"neverminedReducer")),(0,i.kt)("td",{parentName:"tr",align:"left"},"(",(0,i.kt)("inlineCode",{parentName:"td"},"state"),": { ",(0,i.kt)("inlineCode",{parentName:"td"},"sdk"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"Nevermined"),"  }, ",(0,i.kt)("inlineCode",{parentName:"td"},"action"),": { ",(0,i.kt)("inlineCode",{parentName:"td"},"payload"),": { ",(0,i.kt)("inlineCode",{parentName:"td"},"sdk"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"Nevermined"),"  } ; ",(0,i.kt)("inlineCode",{parentName:"td"},"type"),": ",(0,i.kt)("inlineCode",{parentName:"td"},'"SET_SDK"'),"  }) => { ",(0,i.kt)("inlineCode",{parentName:"td"},"sdk"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"Nevermined"),"  }")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"newMarketplaceApiToken")),(0,i.kt)("td",{parentName:"tr",align:"left"},"(",(0,i.kt)("inlineCode",{parentName:"td"},"sdk"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"Nevermined"),") => ",(0,i.kt)("inlineCode",{parentName:"td"},"Promise"),"<",(0,i.kt)("a",{parentName:"td",href:"/docs/architecture/components/catalog/core/interfaces/index.MarketplaceAPIToken"},(0,i.kt)("inlineCode",{parentName:"a"},"MarketplaceAPIToken")),">")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"saveMarketplaceApiTokenToLocalStorage")),(0,i.kt)("td",{parentName:"tr",align:"left"},"(",(0,i.kt)("inlineCode",{parentName:"td"},"i"),": ",(0,i.kt)("a",{parentName:"td",href:"/docs/architecture/components/catalog/core/interfaces/index.MarketplaceAPIToken"},(0,i.kt)("inlineCode",{parentName:"a"},"MarketplaceAPIToken")),") => ",(0,i.kt)("inlineCode",{parentName:"td"},"void"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"useAccountCollection")),(0,i.kt)("td",{parentName:"tr",align:"left"},"(",(0,i.kt)("inlineCode",{parentName:"td"},"id"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"string"),") => { ",(0,i.kt)("inlineCode",{parentName:"td"},"accountCollection"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"string"),"[] ; ",(0,i.kt)("inlineCode",{parentName:"td"},"isLoading"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"boolean"),"  }")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"useAccountReleases")),(0,i.kt)("td",{parentName:"tr",align:"left"},"(",(0,i.kt)("inlineCode",{parentName:"td"},"id"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"string"),") => { ",(0,i.kt)("inlineCode",{parentName:"td"},"accountReleases"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"string"),"[] ; ",(0,i.kt)("inlineCode",{parentName:"td"},"isLoading"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"boolean"),"  }")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"useAsset")),(0,i.kt)("td",{parentName:"tr",align:"left"},"(",(0,i.kt)("inlineCode",{parentName:"td"},"did"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"string"),") => ",(0,i.kt)("a",{parentName:"td",href:"/docs/architecture/components/catalog/core/interfaces/index.AssetState"},(0,i.kt)("inlineCode",{parentName:"a"},"AssetState")))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"useAssetPublish")),(0,i.kt)("td",{parentName:"tr",align:"left"},"() => ",(0,i.kt)("a",{parentName:"td",href:"/docs/architecture/components/catalog/core/interfaces/index.AssetPublishProviderState"},(0,i.kt)("inlineCode",{parentName:"a"},"AssetPublishProviderState")))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"useAssets")),(0,i.kt)("td",{parentName:"tr",align:"left"},"(",(0,i.kt)("inlineCode",{parentName:"td"},"q"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"SearchQuery"),") => { ",(0,i.kt)("inlineCode",{parentName:"td"},"isLoading"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"boolean")," ; ",(0,i.kt)("inlineCode",{parentName:"td"},"result"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"QueryResult"),"  }")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"useNevermined")),(0,i.kt)("td",{parentName:"tr",align:"left"},"() => ",(0,i.kt)("a",{parentName:"td",href:"/docs/architecture/components/catalog/core/interfaces/index.NeverminedProviderContext"},(0,i.kt)("inlineCode",{parentName:"a"},"NeverminedProviderContext")))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"useSubscribeToPaymentEvents")),(0,i.kt)("td",{parentName:"tr",align:"left"},"() => { ",(0,i.kt)("inlineCode",{parentName:"td"},"paymentEvents"),": ",(0,i.kt)("a",{parentName:"td",href:"/docs/architecture/components/catalog/core/modules/#eventresult"},(0,i.kt)("inlineCode",{parentName:"a"},"EventResult")),"[]  }")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"useSubscribeToTransferEvents")),(0,i.kt)("td",{parentName:"tr",align:"left"},"() => { ",(0,i.kt)("inlineCode",{parentName:"td"},"transferEvents"),": ",(0,i.kt)("a",{parentName:"td",href:"/docs/architecture/components/catalog/core/modules/#eventresult"},(0,i.kt)("inlineCode",{parentName:"a"},"EventResult")),"[]  }")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"useUserProfile")),(0,i.kt)("td",{parentName:"tr",align:"left"},"(",(0,i.kt)("inlineCode",{parentName:"td"},"walletAddress"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"string"),") => { ",(0,i.kt)("inlineCode",{parentName:"td"},"addresses"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"string"),"[] ; ",(0,i.kt)("inlineCode",{parentName:"td"},"errorMessage"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"string")," ; ",(0,i.kt)("inlineCode",{parentName:"td"},"inputError"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"string")," ; ",(0,i.kt)("inlineCode",{parentName:"td"},"isAddressAdded"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"boolean")," ; ",(0,i.kt)("inlineCode",{parentName:"td"},"isUpdated"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"boolean")," ; ",(0,i.kt)("inlineCode",{parentName:"td"},"newAddress"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"string")," ; ",(0,i.kt)("inlineCode",{parentName:"td"},"onAddAddress"),": () => ",(0,i.kt)("inlineCode",{parentName:"td"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"td"},"void"),">"," ; ",(0,i.kt)("inlineCode",{parentName:"td"},"onSubmitUserProfile"),": () => ",(0,i.kt)("inlineCode",{parentName:"td"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"td"},"void"),">"," ; ",(0,i.kt)("inlineCode",{parentName:"td"},"setUserProfile"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"Dispatch"),"<",(0,i.kt)("inlineCode",{parentName:"td"},"SetStateAction"),"<",(0,i.kt)("inlineCode",{parentName:"td"},"Partial"),"<",(0,i.kt)("a",{parentName:"td",href:"/docs/architecture/components/catalog/core/interfaces/index.UserProfileParams"},(0,i.kt)("inlineCode",{parentName:"a"},"UserProfileParams")),">",">",">"," ; ",(0,i.kt)("inlineCode",{parentName:"td"},"successMessage"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"string")," ; ",(0,i.kt)("inlineCode",{parentName:"td"},"userProfile"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"Partial"),"<",(0,i.kt)("a",{parentName:"td",href:"/docs/architecture/components/catalog/core/interfaces/index.UserProfileParams"},(0,i.kt)("inlineCode",{parentName:"a"},"UserProfileParams")),">","  }")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"userIsNFT1155Holder")),(0,i.kt)("td",{parentName:"tr",align:"left"},"(",(0,i.kt)("inlineCode",{parentName:"td"},"did"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"string"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"walletAddress"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"string"),") => { ",(0,i.kt)("inlineCode",{parentName:"td"},"ownNFT1155"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"boolean"),"  }")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"userIsNFT721Holder")),(0,i.kt)("td",{parentName:"tr",align:"left"},"(",(0,i.kt)("inlineCode",{parentName:"td"},"did"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"string"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"nftTokenAddress"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"string"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"walletAddress"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"string"),") => { ",(0,i.kt)("inlineCode",{parentName:"td"},"ownNFT721"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"boolean"),"  }")))),(0,i.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/components-catalog/blob/bd89666/lib/src/index.ts#L10"},"src/index.ts:10")),(0,i.kt)("h2",{id:"functions-1"},"Functions"),(0,i.kt)("h3",{id:"getagreementid"},"getAgreementId"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"getAgreementId"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"sdk"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"template"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"did"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"account"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"any"),">"),(0,i.kt)("h4",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"sdk")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Nevermined"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"template")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Template"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"did")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"account")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string"))))),(0,i.kt)("h4",{id:"returns"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"any"),">"),(0,i.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/components-catalog/blob/bd89666/lib/src/utils/index.ts#L85"},"src/utils/index.ts:85")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"getcurrentaccount"},"getCurrentAccount"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"getCurrentAccount"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"sdk"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"default"),">"),(0,i.kt)("h4",{id:"parameters-1"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"sdk")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Nevermined"))))),(0,i.kt)("h4",{id:"returns-1"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"default"),">"),(0,i.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/components-catalog/blob/bd89666/lib/src/utils/index.ts#L19"},"src/utils/index.ts:19")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"zerox"},"zeroX"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"zeroX"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"input"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("h4",{id:"parameters-2"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"input")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string"))))),(0,i.kt)("h4",{id:"returns-2"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,i.kt)("p",null,"node_modules/@nevermined-io/nevermined-sdk-js/dist/node/utils/ConversionTypeHelpers.d.ts:1"))}k.isMDXComponent=!0}}]);