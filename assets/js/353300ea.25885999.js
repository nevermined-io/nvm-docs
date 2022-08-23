"use strict";(self.webpackChunknvm_docs=self.webpackChunknvm_docs||[]).push([[5454],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return c}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),p=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),k=p(n),c=r,u=k["".concat(o,".").concat(c)]||k[c]||m[c]||i;return n?a.createElement(u,l(l({ref:t},s),{},{components:n})):a.createElement(u,l({ref:t},s))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=k;var d={};for(var o in t)hasOwnProperty.call(t,o)&&(d[o]=t[o]);d.originalType=e,d.mdxType="string"==typeof e?e:r,l[1]=d;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},9880:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return o},default:function(){return c},frontMatter:function(){return d},metadata:function(){return p},toc:function(){return m}});var a=n(3117),r=n(102),i=(n(7294),n(3905)),l=["components"],d={},o=void 0,p={unversionedId:"architecture/components/catalog/core/interfaces/index.AssetsModule",id:"architecture/components/catalog/core/interfaces/index.AssetsModule",title:"index.AssetsModule",description:"@nevermined-io/catalog-core / Modules / index / AssetsModule",source:"@site/docs/architecture/components/catalog/core/interfaces/index.AssetsModule.md",sourceDirName:"architecture/components/catalog/core/interfaces",slug:"/architecture/components/catalog/core/interfaces/index.AssetsModule",permalink:"/docs/architecture/components/catalog/core/interfaces/index.AssetsModule",draft:!1,editUrl:"https://github.com/nevermined-io/nvm-docs/tree/main/docs/architecture/components/catalog/core/interfaces/index.AssetsModule.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"index.AssetState",permalink:"/docs/architecture/components/catalog/core/interfaces/index.AssetState"},next:{title:"index.ChainConfig",permalink:"/docs/architecture/components/catalog/core/interfaces/index.ChainConfig"}},s={},m=[{value:"Table of contents",id:"table-of-contents",level:2},{value:"Properties",id:"properties",level:3},{value:"Properties",id:"properties-1",level:2},{value:"downloadAsset",id:"downloadasset",level:3},{value:"Type declaration",id:"type-declaration",level:4},{value:"Parameters",id:"parameters",level:5},{value:"Returns",id:"returns",level:5},{value:"Defined in",id:"defined-in",level:4},{value:"downloadNFT",id:"downloadnft",level:3},{value:"Type declaration",id:"type-declaration-1",level:4},{value:"Parameters",id:"parameters-1",level:5},{value:"Returns",id:"returns-1",level:5},{value:"Defined in",id:"defined-in-1",level:4},{value:"getCustomErc20Token",id:"getcustomerc20token",level:3},{value:"Type declaration",id:"type-declaration-2",level:4},{value:"Parameters",id:"parameters-2",level:5},{value:"Returns",id:"returns-2",level:5},{value:"Defined in",id:"defined-in-2",level:4},{value:"getSingle",id:"getsingle",level:3},{value:"Type declaration",id:"type-declaration-3",level:4},{value:"Parameters",id:"parameters-3",level:5},{value:"Returns",id:"returns-3",level:5},{value:"Defined in",id:"defined-in-3",level:4},{value:"mint",id:"mint",level:3},{value:"Type declaration",id:"type-declaration-4",level:4},{value:"Parameters",id:"parameters-4",level:5},{value:"Returns",id:"returns-4",level:5},{value:"Defined in",id:"defined-in-4",level:4},{value:"nftDetails",id:"nftdetails",level:3},{value:"Type declaration",id:"type-declaration-5",level:4},{value:"Parameters",id:"parameters-5",level:5},{value:"Returns",id:"returns-5",level:5},{value:"Defined in",id:"defined-in-5",level:4},{value:"orderAsset",id:"orderasset",level:3},{value:"Type declaration",id:"type-declaration-6",level:4},{value:"Parameters",id:"parameters-6",level:5},{value:"Returns",id:"returns-6",level:5},{value:"Defined in",id:"defined-in-6",level:4},{value:"orderNFT1155",id:"ordernft1155",level:3},{value:"Type declaration",id:"type-declaration-7",level:4},{value:"Parameters",id:"parameters-7",level:5},{value:"Returns",id:"returns-7",level:5},{value:"Defined in",id:"defined-in-7",level:4},{value:"orderNFT721",id:"ordernft721",level:3},{value:"Type declaration",id:"type-declaration-8",level:4},{value:"Parameters",id:"parameters-8",level:5},{value:"Returns",id:"returns-8",level:5},{value:"Defined in",id:"defined-in-8",level:4},{value:"query",id:"query",level:3},{value:"Type declaration",id:"type-declaration-9",level:4},{value:"Parameters",id:"parameters-9",level:5},{value:"Returns",id:"returns-9",level:5},{value:"Defined in",id:"defined-in-9",level:4},{value:"resolve",id:"resolve",level:3},{value:"Type declaration",id:"type-declaration-10",level:4},{value:"Parameters",id:"parameters-10",level:5},{value:"Returns",id:"returns-10",level:5},{value:"Defined in",id:"defined-in-10",level:4},{value:"transfer",id:"transfer",level:3},{value:"Type declaration",id:"type-declaration-11",level:4},{value:"Parameters",id:"parameters-11",level:5},{value:"Returns",id:"returns-11",level:5},{value:"Defined in",id:"defined-in-11",level:4},{value:"uploadAssetToFilecoin",id:"uploadassettofilecoin",level:3},{value:"Type declaration",id:"type-declaration-12",level:4},{value:"Parameters",id:"parameters-12",level:5},{value:"Returns",id:"returns-12",level:5},{value:"Defined in",id:"defined-in-12",level:4}],k={toc:m};function c(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/architecture/components/catalog/core/"},"@nevermined-io/catalog-core")," / ",(0,i.kt)("a",{parentName:"p",href:"/docs/architecture/components/catalog/core/modules"},"Modules")," / ",(0,i.kt)("a",{parentName:"p",href:"/docs/architecture/components/catalog/core/modules/"},"index")," / AssetsModule"),(0,i.kt)("h1",{id:"interface-assetsmodule"},"Interface: AssetsModule"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/architecture/components/catalog/core/modules/"},"index"),".AssetsModule"),(0,i.kt)("p",null,"AssetsModule is exposed by the main context\nunder 'assets' object"),(0,i.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,i.kt)("h3",{id:"properties"},"Properties"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/architecture/components/catalog/core/interfaces/index.AssetsModule#downloadasset"},"downloadAsset")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/architecture/components/catalog/core/interfaces/index.AssetsModule#downloadnft"},"downloadNFT")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/architecture/components/catalog/core/interfaces/index.AssetsModule#getcustomerc20token"},"getCustomErc20Token")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/architecture/components/catalog/core/interfaces/index.AssetsModule#getsingle"},"getSingle")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/architecture/components/catalog/core/interfaces/index.AssetsModule#mint"},"mint")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/architecture/components/catalog/core/interfaces/index.AssetsModule#nftdetails"},"nftDetails")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/architecture/components/catalog/core/interfaces/index.AssetsModule#orderasset"},"orderAsset")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/architecture/components/catalog/core/interfaces/index.AssetsModule#ordernft1155"},"orderNFT1155")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/architecture/components/catalog/core/interfaces/index.AssetsModule#ordernft721"},"orderNFT721")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/architecture/components/catalog/core/interfaces/index.AssetsModule#query"},"query")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/architecture/components/catalog/core/interfaces/index.AssetsModule#resolve"},"resolve")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/architecture/components/catalog/core/interfaces/index.AssetsModule#transfer"},"transfer")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/architecture/components/catalog/core/interfaces/index.AssetsModule#uploadassettofilecoin"},"uploadAssetToFilecoin"))),(0,i.kt)("h2",{id:"properties-1"},"Properties"),(0,i.kt)("h3",{id:"downloadasset"},"downloadAsset"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"downloadAsset"),": (",(0,i.kt)("inlineCode",{parentName:"p"},"did"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"agreementId"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string"),") => ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"boolean"),">"),(0,i.kt)("h4",{id:"type-declaration"},"Type declaration"),(0,i.kt)("p",null,"\u25b8 (",(0,i.kt)("inlineCode",{parentName:"p"},"did"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"agreementId"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"boolean"),">"),(0,i.kt)("p",null,"Download an asset already ordered and transfered to the buyer,\nif the user is the owner of the asset"),(0,i.kt)("h5",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"did")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:"left"},"id of the NFT (721 & 1155) asset")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"agreementId")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:"left"},"-")))),(0,i.kt)("h5",{id:"returns"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"boolean"),">"),(0,i.kt)("p",null,"if the NFT is downloaded successfully the method will return a true"),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/components-catalog/blob/bd89666/lib/src/types/index.ts#L589"},"src/types/index.ts:589")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"downloadnft"},"downloadNFT"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"downloadNFT"),": (",(0,i.kt)("inlineCode",{parentName:"p"},"did"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string"),") => ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"boolean"),">"),(0,i.kt)("h4",{id:"type-declaration-1"},"Type declaration"),(0,i.kt)("p",null,"\u25b8 (",(0,i.kt)("inlineCode",{parentName:"p"},"did"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"boolean"),">"),(0,i.kt)("p",null,"Download a NFT asset already ordered and transfered to the buyer,\nif the user is the owner of the asset"),(0,i.kt)("h5",{id:"parameters-1"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"did")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:"left"},"id of the NFT (721 & 1155) asset")))),(0,i.kt)("h5",{id:"returns-1"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"boolean"),">"),(0,i.kt)("p",null,"if the NFT is downloaded successfully the method will return a true"),(0,i.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/components-catalog/blob/bd89666/lib/src/types/index.ts#L576"},"src/types/index.ts:576")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"getcustomerc20token"},"getCustomErc20Token"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"getCustomErc20Token"),": (",(0,i.kt)("inlineCode",{parentName:"p"},"customErc20TokenAddress"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string"),") => ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("a",{parentName:"p",href:"/docs/architecture/components/catalog/core/interfaces/index.CustomErc20Token"},(0,i.kt)("inlineCode",{parentName:"a"},"CustomErc20Token")),">"),(0,i.kt)("h4",{id:"type-declaration-2"},"Type declaration"),(0,i.kt)("p",null,"\u25b8 (",(0,i.kt)("inlineCode",{parentName:"p"},"customErc20TokenAddress"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("a",{parentName:"p",href:"/docs/architecture/components/catalog/core/interfaces/index.CustomErc20Token"},(0,i.kt)("inlineCode",{parentName:"a"},"CustomErc20Token")),">"),(0,i.kt)("p",null,"Get all the details about a custom erc20 token"),(0,i.kt)("h5",{id:"parameters-2"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"customErc20TokenAddress")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:"left"},"The custom token address")))),(0,i.kt)("h5",{id:"returns-2"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("a",{parentName:"p",href:"/docs/architecture/components/catalog/core/interfaces/index.CustomErc20Token"},(0,i.kt)("inlineCode",{parentName:"a"},"CustomErc20Token")),">"),(0,i.kt)("p",null,"Custom token details"),(0,i.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/components-catalog/blob/bd89666/lib/src/types/index.ts#L582"},"src/types/index.ts:582")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"getsingle"},"getSingle"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"getSingle"),": (",(0,i.kt)("inlineCode",{parentName:"p"},"did"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string"),") => ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"DDO"),">"),(0,i.kt)("h4",{id:"type-declaration-3"},"Type declaration"),(0,i.kt)("p",null,"\u25b8 (",(0,i.kt)("inlineCode",{parentName:"p"},"did"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"DDO"),">"),(0,i.kt)("p",null,"Get the asset object by the did given"),(0,i.kt)("h5",{id:"parameters-3"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"did")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:"left"},"id of the asset")))),(0,i.kt)("h5",{id:"returns-3"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"DDO"),">"),(0,i.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/components-catalog/blob/bd89666/lib/src/types/index.ts#L514"},"src/types/index.ts:514")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"mint"},"mint"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"mint"),": (",(0,i.kt)("inlineCode",{parentName:"p"},"did"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"any"),") => ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"any"),">"),(0,i.kt)("h4",{id:"type-declaration-4"},"Type declaration"),(0,i.kt)("p",null,"\u25b8 (",(0,i.kt)("inlineCode",{parentName:"p"},"did"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"any"),">"),(0,i.kt)("p",null,"Mint an asset"),(0,i.kt)("h5",{id:"parameters-4"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"did")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"any"))))),(0,i.kt)("h5",{id:"returns-4"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"any"),">"),(0,i.kt)("p",null,"If the asset was minted successfully the function will return ",(0,i.kt)("inlineCode",{parentName:"p"},"true")),(0,i.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/components-catalog/blob/bd89666/lib/src/types/index.ts#L540"},"src/types/index.ts:540")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"nftdetails"},"nftDetails"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"nftDetails"),": (",(0,i.kt)("inlineCode",{parentName:"p"},"did"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string"),") => ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("a",{parentName:"p",href:"/docs/architecture/components/catalog/core/interfaces/index.NFTDetails"},(0,i.kt)("inlineCode",{parentName:"a"},"NFTDetails")),">"),(0,i.kt)("h4",{id:"type-declaration-5"},"Type declaration"),(0,i.kt)("p",null,"\u25b8 (",(0,i.kt)("inlineCode",{parentName:"p"},"did"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("a",{parentName:"p",href:"/docs/architecture/components/catalog/core/interfaces/index.NFTDetails"},(0,i.kt)("inlineCode",{parentName:"a"},"NFTDetails")),">"),(0,i.kt)("p",null,"Get the aggreement details of the NFT asset (owner, nfts supplay, royalties, etc...)"),(0,i.kt)("h5",{id:"parameters-5"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"did")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:"left"},"id of the NFT (721 & 1155) asset")))),(0,i.kt)("h5",{id:"returns-5"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("a",{parentName:"p",href:"/docs/architecture/components/catalog/core/interfaces/index.NFTDetails"},(0,i.kt)("inlineCode",{parentName:"a"},"NFTDetails")),">"),(0,i.kt)("p",null,"Agreement details of the NFT asset"),(0,i.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/components-catalog/blob/bd89666/lib/src/types/index.ts#L546"},"src/types/index.ts:546")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"orderasset"},"orderAsset"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"orderAsset"),": (",(0,i.kt)("inlineCode",{parentName:"p"},"did"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string"),") => ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"string"),">"),(0,i.kt)("h4",{id:"type-declaration-6"},"Type declaration"),(0,i.kt)("p",null,"\u25b8 (",(0,i.kt)("inlineCode",{parentName:"p"},"did"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"string"),">"),(0,i.kt)("p",null,"This method order a asset to allow after transfer to the buyer (the method only order but not transfer)"),(0,i.kt)("h5",{id:"parameters-6"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"did")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:"left"},"id of the asset")))),(0,i.kt)("h5",{id:"returns-6"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"string"),">"),(0,i.kt)("p",null,"In case the order is completed successfully it returns the agreementId\nwhich is needed to transfer the asset to the buyer"),(0,i.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/components-catalog/blob/bd89666/lib/src/types/index.ts#L553"},"src/types/index.ts:553")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"ordernft1155"},"orderNFT1155"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"orderNFT1155"),": (",(0,i.kt)("inlineCode",{parentName:"p"},"did"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string"),") => ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"string"),">"),(0,i.kt)("h4",{id:"type-declaration-7"},"Type declaration"),(0,i.kt)("p",null,"\u25b8 (",(0,i.kt)("inlineCode",{parentName:"p"},"did"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"string"),">"),(0,i.kt)("p",null,"This method order a NFT1155 asset to allow after transfer to the buyer (the method only order but not transfer)"),(0,i.kt)("h5",{id:"parameters-7"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"did")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:"left"},"id of the NFT1155 asset")))),(0,i.kt)("h5",{id:"returns-7"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"string"),">"),(0,i.kt)("p",null,"In case the order is completed successfully it returns the agreementId\nwhich is needed to transfer the NFT1155 asset to the buyer"),(0,i.kt)("h4",{id:"defined-in-7"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/components-catalog/blob/bd89666/lib/src/types/index.ts#L569"},"src/types/index.ts:569")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"ordernft721"},"orderNFT721"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"orderNFT721"),": (",(0,i.kt)("inlineCode",{parentName:"p"},"did"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"nftTokenAddress"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string"),") => ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"string"),">"),(0,i.kt)("h4",{id:"type-declaration-8"},"Type declaration"),(0,i.kt)("p",null,"\u25b8 (",(0,i.kt)("inlineCode",{parentName:"p"},"did"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"nftTokenAddress"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"string"),">"),(0,i.kt)("p",null,"This method order a NFT721 asset to allow after transfer to the buyer (the method only order but not transfer)"),(0,i.kt)("h5",{id:"parameters-8"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"did")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:"left"},"id of the NFT721 asset")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"nftTokenAddress")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:"left"},"-")))),(0,i.kt)("h5",{id:"returns-8"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"string"),">"),(0,i.kt)("p",null,"In case the order is completed successfully it returns the agreementId\nwhich is needed to transfer the NFT721 asset to the buyer"),(0,i.kt)("h4",{id:"defined-in-8"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/components-catalog/blob/bd89666/lib/src/types/index.ts#L561"},"src/types/index.ts:561")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"query"},"query"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"query"),": (",(0,i.kt)("inlineCode",{parentName:"p"},"q"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"SearchQuery"),") => ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"QueryResult"),">"),(0,i.kt)("h4",{id:"type-declaration-9"},"Type declaration"),(0,i.kt)("p",null,"\u25b8 (",(0,i.kt)("inlineCode",{parentName:"p"},"q"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"QueryResult"),">"),(0,i.kt)("h5",{id:"parameters-9"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"q")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"SearchQuery")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Query to custom the search: order result, filtering, etc...")))),(0,i.kt)("h5",{id:"returns-9"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"QueryResult"),">"),(0,i.kt)("p",null,"List of assets according with the query given"),(0,i.kt)("h4",{id:"defined-in-9"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/components-catalog/blob/bd89666/lib/src/types/index.ts#L520"},"src/types/index.ts:520")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"resolve"},"resolve"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"resolve"),": (",(0,i.kt)("inlineCode",{parentName:"p"},"did"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string"),") => ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"undefined")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},"DDO"),">"),(0,i.kt)("h4",{id:"type-declaration-10"},"Type declaration"),(0,i.kt)("p",null,"\u25b8 (",(0,i.kt)("inlineCode",{parentName:"p"},"did"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"undefined")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},"DDO"),">"),(0,i.kt)("p",null,"Get the entire object of the asset"),(0,i.kt)("h5",{id:"parameters-10"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"did")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:"left"},"id of the asset")))),(0,i.kt)("h5",{id:"returns-10"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"undefined")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},"DDO"),">"),(0,i.kt)("p",null,"Asset object"),(0,i.kt)("h4",{id:"defined-in-10"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/components-catalog/blob/bd89666/lib/src/types/index.ts#L526"},"src/types/index.ts:526")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"transfer"},"transfer"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"transfer"),": (",(0,i.kt)("inlineCode",{parentName:"p"},"assetInfo"),": { ",(0,i.kt)("inlineCode",{parentName:"p"},"amount"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number")," ; ",(0,i.kt)("inlineCode",{parentName:"p"},"did"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string"),"  }) => ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"boolean"),">"),(0,i.kt)("h4",{id:"type-declaration-11"},"Type declaration"),(0,i.kt)("p",null,"\u25b8 (",(0,i.kt)("inlineCode",{parentName:"p"},"assetInfo"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"boolean"),">"),(0,i.kt)("p",null,"Transfer the ownership of the asset to other account"),(0,i.kt)("h5",{id:"parameters-11"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"assetInfo")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Object")),(0,i.kt)("td",{parentName:"tr",align:"left"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"assetInfo.amount")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"number")),(0,i.kt)("td",{parentName:"tr",align:"left"},"The amount of asset to transfer")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"assetInfo.did")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:"left"},"The id of the asset")))),(0,i.kt)("h5",{id:"returns-11"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"boolean"),">"),(0,i.kt)("p",null,"Return true if asset was transferred successfully"),(0,i.kt)("h4",{id:"defined-in-11"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/components-catalog/blob/bd89666/lib/src/types/index.ts#L534"},"src/types/index.ts:534")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"uploadassettofilecoin"},"uploadAssetToFilecoin"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"uploadAssetToFilecoin"),": (",(0,i.kt)("inlineCode",{parentName:"p"},"File"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"File"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"filecoinUrl"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string"),") => ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"string"),">"),(0,i.kt)("h4",{id:"type-declaration-12"},"Type declaration"),(0,i.kt)("p",null,"\u25b8 (",(0,i.kt)("inlineCode",{parentName:"p"},"File"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"filecoinUrl"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"string"),">"),(0,i.kt)("p",null,"Upload files to Filecoin"),(0,i.kt)("h5",{id:"parameters-12"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"File")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"File")),(0,i.kt)("td",{parentName:"tr",align:"left"},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"filecoinUrl")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:"left"},"The url of the Filecoin server")))),(0,i.kt)("h5",{id:"returns-12"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"string"),">"),(0,i.kt)("p",null,"The url where is located the file already uploaded"),(0,i.kt)("h4",{id:"defined-in-12"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/components-catalog/blob/bd89666/lib/src/types/index.ts#L596"},"src/types/index.ts:596")))}c.isMDXComponent=!0}}]);