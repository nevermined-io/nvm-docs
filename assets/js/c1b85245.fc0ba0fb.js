"use strict";(self.webpackChunknvm_docs=self.webpackChunknvm_docs||[]).push([[3124],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return u}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),d=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=d(e.components);return r.createElement(l.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=d(t),u=o,f=m["".concat(l,".").concat(u)]||m[u]||s[u]||i;return t?r.createElement(f,a(a({ref:n},p),{},{components:t})):r.createElement(f,a({ref:n},p))}));function u(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=m;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var d=2;d<i;d++)a[d]=t[d];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},1125:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return l},default:function(){return u},frontMatter:function(){return c},metadata:function(){return d},toc:function(){return s}});var r=t(3117),o=t(102),i=(t(7294),t(3905)),a=["components"],c={},l=void 0,d={unversionedId:"architecture/components/catalog/core/interfaces/index.NeverminedProviderProps",id:"architecture/components/catalog/core/interfaces/index.NeverminedProviderProps",title:"index.NeverminedProviderProps",description:"@nevermined-io/catalog-core / Modules / index / NeverminedProviderProps",source:"@site/docs/architecture/components/catalog/core/interfaces/index.NeverminedProviderProps.md",sourceDirName:"architecture/components/catalog/core/interfaces",slug:"/architecture/components/catalog/core/interfaces/index.NeverminedProviderProps",permalink:"/docs/architecture/components/catalog/core/interfaces/index.NeverminedProviderProps",draft:!1,editUrl:"https://github.com/nevermined-io/nvm-docs/tree/main/docs/architecture/components/catalog/core/interfaces/index.NeverminedProviderProps.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"index.NeverminedProviderContext",permalink:"/docs/architecture/components/catalog/core/interfaces/index.NeverminedProviderContext"},next:{title:"index.RegisterEvent",permalink:"/docs/architecture/components/catalog/core/interfaces/index.RegisterEvent"}},p={},s=[{value:"Table of contents",id:"table-of-contents",level:2},{value:"Properties",id:"properties",level:3},{value:"Properties",id:"properties-1",level:2},{value:"children",id:"children",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"config",id:"config",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"verbose",id:"verbose",level:3},{value:"Defined in",id:"defined-in-2",level:4}],m={toc:s};function u(e){var n=e.components,t=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/architecture/components/catalog/core/"},"@nevermined-io/catalog-core")," / ",(0,i.kt)("a",{parentName:"p",href:"/docs/architecture/components/catalog/core/modules"},"Modules")," / ",(0,i.kt)("a",{parentName:"p",href:"/docs/architecture/components/catalog/core/modules/"},"index")," / NeverminedProviderProps"),(0,i.kt)("h1",{id:"interface-neverminedproviderprops"},"Interface: NeverminedProviderProps"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/architecture/components/catalog/core/modules/"},"index"),".NeverminedProviderProps"),(0,i.kt)("p",null,"Nevermined Provider to get the core Catalog functionalities as context"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"Param"))),(0,i.kt)("p",null,"The config needed to build Nevermined SDK"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"Param"))),(0,i.kt)("p",null,"Show Catalog logs in console logs if it sets to ",(0,i.kt)("inlineCode",{parentName:"p"},"true")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"Example"))),(0,i.kt)("p",null,"Initialize NeverminedProvider:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"import React from 'react';\nimport ReactDOM from 'react-dom';\nimport Catalog from 'test-catalog-core';\nimport { appConfig } from './config';\nimport Example from 'examples';\nimport { MetaMask } from '@nevermined-io/catalog-providers';\nimport chainConfig, { mumbaiChainId } from './chain_config';\n\nReactDOM.render(\n  <div>\n    <Catalog.NeverminedProvider config={appConfig} verbose={true}>\n      <MetaMask.WalletProvider\n        externalChainConfig={chainConfig}\n        correctNetworkId={mumbaiChainId}\n        nodeUri={String(appConfig.nodeUri)}\n      >\n        <Example />\n      </MetaMask.WalletProvider>\n    </Catalog.NeverminedProvider>\n  </div>,\n  document.getElementById('root') as HTMLElement\n);\n")),(0,i.kt)("p",null,"Once it is intialized then we can execute the hook inside components"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"const SDKInstance = () => {\n const { sdk, isLoadingSDK } = Catalog.useNevermined();\n\n return (\n   <>\n     <div>Is Loading SDK</div>\n     <div>{isLoadingSDK ? 'Yes' : 'No'}</div>\n     <div>Is SDK Avaialable:</div>\n     <div>{sdk && Object.keys(sdk).length > 0 ? 'Yes' : 'No'}</div>\n   </>\n );\n};\n")),(0,i.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,i.kt)("h3",{id:"properties"},"Properties"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/architecture/components/catalog/core/interfaces/index.NeverminedProviderProps#children"},"children")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/architecture/components/catalog/core/interfaces/index.NeverminedProviderProps#config"},"config")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/architecture/components/catalog/core/interfaces/index.NeverminedProviderProps#verbose"},"verbose"))),(0,i.kt)("h2",{id:"properties-1"},"Properties"),(0,i.kt)("h3",{id:"children"},"children"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"children"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"any")),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/components-catalog/blob/bd89666/lib/src/types/index.ts#L369"},"src/types/index.ts:369")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"config"},"config"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"config"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Config")),(0,i.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/components-catalog/blob/bd89666/lib/src/types/index.ts#L371"},"src/types/index.ts:371")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"verbose"},"verbose"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"verbose"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")),(0,i.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/components-catalog/blob/bd89666/lib/src/types/index.ts#L370"},"src/types/index.ts:370")))}u.isMDXComponent=!0}}]);