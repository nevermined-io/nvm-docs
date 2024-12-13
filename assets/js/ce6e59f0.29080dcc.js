"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5471],{3905:(e,n,r)=>{r.d(n,{Zo:()=>o,kt:()=>k});var t=r(67294);function i(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function p(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?p(Object(r),!0).forEach((function(n){i(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function a(e,n){if(null==e)return{};var r,t,i=function(e,n){if(null==e)return{};var r,t,i={},p=Object.keys(e);for(t=0;t<p.length;t++)r=p[t],n.indexOf(r)>=0||(i[r]=e[r]);return i}(e,n);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(t=0;t<p.length;t++)r=p[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var d=t.createContext({}),l=function(e){var n=t.useContext(d),r=n;return e&&(r="function"==typeof e?e(n):s(s({},n),e)),r},o=function(e){var n=l(e.components);return t.createElement(d.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var r=e.components,i=e.mdxType,p=e.originalType,d=e.parentName,o=a(e,["components","mdxType","originalType","parentName"]),m=l(r),k=i,v=m["".concat(d,".").concat(k)]||m[k]||c[k]||p;return r?t.createElement(v,s(s({ref:n},o),{},{components:r})):t.createElement(v,s({ref:n},o))}));function k(e,n){var r=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var p=r.length,s=new Array(p);s[0]=m;var a={};for(var d in n)hasOwnProperty.call(n,d)&&(a[d]=n[d]);a.originalType=e,a.mdxType="string"==typeof e?e:i,s[1]=a;for(var l=2;l<p;l++)s[l]=r[l];return t.createElement.apply(null,s)}return t.createElement.apply(null,r)}m.displayName="MDXCreateElement"},81206:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>c,frontMatter:()=>p,metadata:()=>a,toc:()=>l});var t=r(87462),i=(r(67294),r(3905));const p={},s=void 0,a={unversionedId:"nevermined-sdk/api-reference/classes/AppDeploymentMatic",id:"nevermined-sdk/api-reference/classes/AppDeploymentMatic",title:"AppDeploymentMatic",description:"@nevermined-io/sdk - v3.0.44 / AppDeploymentMatic",source:"@site/docs/nevermined-sdk/api-reference/classes/AppDeploymentMatic.md",sourceDirName:"nevermined-sdk/api-reference/classes",slug:"/nevermined-sdk/api-reference/classes/AppDeploymentMatic",permalink:"/docs/nevermined-sdk/api-reference/classes/AppDeploymentMatic",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"AppDeploymentLocal",permalink:"/docs/nevermined-sdk/api-reference/classes/AppDeploymentLocal"},next:{title:"AppDeploymentOptimism",permalink:"/docs/nevermined-sdk/api-reference/classes/AppDeploymentOptimism"}},d={},l=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Table of contents",id:"table-of-contents",level:2},{value:"Constructors",id:"constructors",level:3},{value:"Properties",id:"properties",level:3},{value:"Constructors",id:"constructors-1",level:2},{value:"constructor",id:"constructor",level:3},{value:"Returns",id:"returns",level:4},{value:"Inherited from",id:"inherited-from",level:4},{value:"Properties",id:"properties-1",level:2},{value:"accounts",id:"accounts",level:3},{value:"Inherited from",id:"inherited-from-1",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"appUrl",id:"appurl",level:3},{value:"Overrides",id:"overrides",level:4},{value:"Defined in",id:"defined-in-1",level:4},{value:"artifactsFolder",id:"artifactsfolder",level:3},{value:"Inherited from",id:"inherited-from-2",level:4},{value:"Defined in",id:"defined-in-2",level:4},{value:"chainId",id:"chainid",level:3},{value:"Overrides",id:"overrides-1",level:4},{value:"Defined in",id:"defined-in-3",level:4},{value:"circuitsFolder",id:"circuitsfolder",level:3},{value:"Inherited from",id:"inherited-from-3",level:4},{value:"Defined in",id:"defined-in-4",level:4},{value:"contractsVersion",id:"contractsversion",level:3},{value:"Inherited from",id:"inherited-from-4",level:4},{value:"Defined in",id:"defined-in-5",level:4},{value:"gasMultiplier",id:"gasmultiplier",level:3},{value:"Overrides",id:"overrides-2",level:4},{value:"Defined in",id:"defined-in-6",level:4},{value:"gasPriceMultiplier",id:"gaspricemultiplier",level:3},{value:"Defined in",id:"defined-in-7",level:4},{value:"gasStationUri",id:"gasstationuri",level:3},{value:"Inherited from",id:"inherited-from-5",level:4},{value:"Defined in",id:"defined-in-8",level:4},{value:"graphHttpUri",id:"graphhttpuri",level:3},{value:"Overrides",id:"overrides-3",level:4},{value:"Defined in",id:"defined-in-9",level:4},{value:"instanceName",id:"instancename",level:3},{value:"Overrides",id:"overrides-4",level:4},{value:"Defined in",id:"defined-in-10",level:4},{value:"ipfsGateway",id:"ipfsgateway",level:3},{value:"Inherited from",id:"inherited-from-6",level:4},{value:"Defined in",id:"defined-in-11",level:4},{value:"ipfsProjectId",id:"ipfsprojectid",level:3},{value:"Inherited from",id:"inherited-from-7",level:4},{value:"Defined in",id:"defined-in-12",level:4},{value:"ipfsProjectSecret",id:"ipfsprojectsecret",level:3},{value:"Inherited from",id:"inherited-from-8",level:4},{value:"Defined in",id:"defined-in-13",level:4},{value:"marketplaceAuthToken",id:"marketplaceauthtoken",level:3},{value:"Inherited from",id:"inherited-from-9",level:4},{value:"Defined in",id:"defined-in-14",level:4},{value:"marketplaceUri",id:"marketplaceuri",level:3},{value:"Overrides",id:"overrides-5",level:4},{value:"Defined in",id:"defined-in-15",level:4},{value:"neverminedBackendUri",id:"neverminedbackenduri",level:3},{value:"Overrides",id:"overrides-6",level:4},{value:"Defined in",id:"defined-in-16",level:4},{value:"neverminedNodeAddress",id:"neverminednodeaddress",level:3},{value:"Overrides",id:"overrides-7",level:4},{value:"Defined in",id:"defined-in-17",level:4},{value:"neverminedNodeUri",id:"neverminednodeuri",level:3},{value:"Overrides",id:"overrides-8",level:4},{value:"Defined in",id:"defined-in-18",level:4},{value:"nftContractCreditsAddress",id:"nftcontractcreditsaddress",level:3},{value:"Overrides",id:"overrides-9",level:4},{value:"Defined in",id:"defined-in-19",level:4},{value:"nftContractTimeAddress",id:"nftcontracttimeaddress",level:3},{value:"Overrides",id:"overrides-10",level:4},{value:"Defined in",id:"defined-in-20",level:4},{value:"tokenAddress",id:"tokenaddress",level:3},{value:"Overrides",id:"overrides-11",level:4},{value:"Defined in",id:"defined-in-21",level:4},{value:"verbose",id:"verbose",level:3},{value:"Overrides",id:"overrides-12",level:4},{value:"Defined in",id:"defined-in-22",level:4},{value:"web3Provider",id:"web3provider",level:3},{value:"Inherited from",id:"inherited-from-10",level:4},{value:"Defined in",id:"defined-in-23",level:4},{value:"web3ProviderUri",id:"web3provideruri",level:3},{value:"Overrides",id:"overrides-13",level:4},{value:"Defined in",id:"defined-in-24",level:4},{value:"zeroDevProjectId",id:"zerodevprojectid",level:3},{value:"Inherited from",id:"inherited-from-11",level:4},{value:"Defined in",id:"defined-in-25",level:4}],o={toc:l};function c(e){let{components:n,...r}=e;return(0,i.kt)("wrapper",(0,t.Z)({},o,r,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/nevermined-sdk/api-reference/code-reference"},"@nevermined-io/sdk - v3.0.44")," / AppDeploymentMatic"),(0,i.kt)("h1",{id:"class-appdeploymentmatic"},"Class: AppDeploymentMatic"),(0,i.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"/docs/nevermined-sdk/api-reference/classes/NeverminedAppOptions"},(0,i.kt)("inlineCode",{parentName:"a"},"NeverminedAppOptions"))),(0,i.kt)("p",{parentName:"li"},"\u21b3 ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"AppDeploymentMatic"))))),(0,i.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,i.kt)("h3",{id:"constructors"},"Constructors"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/classes/AppDeploymentMatic#constructor"},"constructor"))),(0,i.kt)("h3",{id:"properties"},"Properties"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/classes/AppDeploymentMatic#accounts"},"accounts")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/classes/AppDeploymentMatic#appurl"},"appUrl")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/classes/AppDeploymentMatic#artifactsfolder"},"artifactsFolder")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/classes/AppDeploymentMatic#chainid"},"chainId")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/classes/AppDeploymentMatic#circuitsfolder"},"circuitsFolder")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/classes/AppDeploymentMatic#contractsversion"},"contractsVersion")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/classes/AppDeploymentMatic#gasmultiplier"},"gasMultiplier")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/classes/AppDeploymentMatic#gaspricemultiplier"},"gasPriceMultiplier")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/classes/AppDeploymentMatic#gasstationuri"},"gasStationUri")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/classes/AppDeploymentMatic#graphhttpuri"},"graphHttpUri")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/classes/AppDeploymentMatic#instancename"},"instanceName")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/classes/AppDeploymentMatic#ipfsgateway"},"ipfsGateway")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/classes/AppDeploymentMatic#ipfsprojectid"},"ipfsProjectId")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/classes/AppDeploymentMatic#ipfsprojectsecret"},"ipfsProjectSecret")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/classes/AppDeploymentMatic#marketplaceauthtoken"},"marketplaceAuthToken")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/classes/AppDeploymentMatic#marketplaceuri"},"marketplaceUri")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/classes/AppDeploymentMatic#neverminedbackenduri"},"neverminedBackendUri")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/classes/AppDeploymentMatic#neverminednodeaddress"},"neverminedNodeAddress")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/classes/AppDeploymentMatic#neverminednodeuri"},"neverminedNodeUri")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/classes/AppDeploymentMatic#nftcontractcreditsaddress"},"nftContractCreditsAddress")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/classes/AppDeploymentMatic#nftcontracttimeaddress"},"nftContractTimeAddress")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/classes/AppDeploymentMatic#tokenaddress"},"tokenAddress")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/classes/AppDeploymentMatic#verbose"},"verbose")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/classes/AppDeploymentMatic#web3provider"},"web3Provider")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/classes/AppDeploymentMatic#web3provideruri"},"web3ProviderUri")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/nevermined-sdk/api-reference/classes/AppDeploymentMatic#zerodevprojectid"},"zeroDevProjectId"))),(0,i.kt)("h2",{id:"constructors-1"},"Constructors"),(0,i.kt)("h3",{id:"constructor"},"constructor"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"new AppDeploymentMatic"),"(): ",(0,i.kt)("a",{parentName:"p",href:"/docs/nevermined-sdk/api-reference/classes/AppDeploymentMatic"},(0,i.kt)("inlineCode",{parentName:"a"},"AppDeploymentMatic"))),(0,i.kt)("h4",{id:"returns"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/nevermined-sdk/api-reference/classes/AppDeploymentMatic"},(0,i.kt)("inlineCode",{parentName:"a"},"AppDeploymentMatic"))),(0,i.kt)("h4",{id:"inherited-from"},"Inherited from"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/nevermined-sdk/api-reference/classes/NeverminedAppOptions"},"NeverminedAppOptions"),".",(0,i.kt)("a",{parentName:"p",href:"/docs/nevermined-sdk/api-reference/classes/NeverminedAppOptions#constructor"},"constructor")),(0,i.kt)("h2",{id:"properties-1"},"Properties"),(0,i.kt)("h3",{id:"accounts"},"accounts"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"accounts"),": ",(0,i.kt)("a",{parentName:"p",href:"/docs/nevermined-sdk/api-reference/classes/NvmAccount"},(0,i.kt)("inlineCode",{parentName:"a"},"NvmAccount")),"[]"),(0,i.kt)("h4",{id:"inherited-from-1"},"Inherited from"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/nevermined-sdk/api-reference/classes/NeverminedAppOptions"},"NeverminedAppOptions"),".",(0,i.kt)("a",{parentName:"p",href:"/docs/nevermined-sdk/api-reference/classes/NeverminedAppOptions#accounts"},"accounts")),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/sdk-js/blob/1f765603c75b92c5d8798f51b63641eb0639883b/src/models/NeverminedOptions.ts#L73"},"src/models/NeverminedOptions.ts:73")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"appurl"},"appUrl"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"appUrl"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")," = ",(0,i.kt)("inlineCode",{parentName:"p"},"'https://matic.nevermined.app'")),(0,i.kt)("p",null,"The Nevermined App URL."),(0,i.kt)("h4",{id:"overrides"},"Overrides"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/nevermined-sdk/api-reference/classes/NeverminedAppOptions"},"NeverminedAppOptions"),".",(0,i.kt)("a",{parentName:"p",href:"/docs/nevermined-sdk/api-reference/classes/NeverminedAppOptions#appurl"},"appUrl")),(0,i.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/sdk-js/blob/1f765603c75b92c5d8798f51b63641eb0639883b/src/nevermined/resources/AppNetworks.ts#L101"},"src/nevermined/resources/AppNetworks.ts:101")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"artifactsfolder"},"artifactsFolder"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"artifactsFolder"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("p",null,"The folder where the nevermined contract artifacts are located."),(0,i.kt)("h4",{id:"inherited-from-2"},"Inherited from"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/nevermined-sdk/api-reference/classes/NeverminedAppOptions"},"NeverminedAppOptions"),".",(0,i.kt)("a",{parentName:"p",href:"/docs/nevermined-sdk/api-reference/classes/NeverminedAppOptions#artifactsfolder"},"artifactsFolder")),(0,i.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/sdk-js/blob/1f765603c75b92c5d8798f51b63641eb0639883b/src/models/NeverminedOptions.ts#L67"},"src/models/NeverminedOptions.ts:67")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"chainid"},"chainId"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"chainId"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number")," = ",(0,i.kt)("inlineCode",{parentName:"p"},"137")),(0,i.kt)("h4",{id:"overrides-1"},"Overrides"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/nevermined-sdk/api-reference/classes/NeverminedAppOptions"},"NeverminedAppOptions"),".",(0,i.kt)("a",{parentName:"p",href:"/docs/nevermined-sdk/api-reference/classes/NeverminedAppOptions#chainid"},"chainId")),(0,i.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/sdk-js/blob/1f765603c75b92c5d8798f51b63641eb0639883b/src/nevermined/resources/AppNetworks.ts#L102"},"src/nevermined/resources/AppNetworks.ts:102")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"circuitsfolder"},"circuitsFolder"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"circuitsFolder"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("p",null,"The folder where the nevermined contract circuits are located."),(0,i.kt)("h4",{id:"inherited-from-3"},"Inherited from"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/nevermined-sdk/api-reference/classes/NeverminedAppOptions"},"NeverminedAppOptions"),".",(0,i.kt)("a",{parentName:"p",href:"/docs/nevermined-sdk/api-reference/classes/NeverminedAppOptions#circuitsfolder"},"circuitsFolder")),(0,i.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/sdk-js/blob/1f765603c75b92c5d8798f51b63641eb0639883b/src/models/NeverminedOptions.ts#L71"},"src/models/NeverminedOptions.ts:71")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"contractsversion"},"contractsVersion"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"contractsVersion"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("p",null,"Contracts version"),(0,i.kt)("h4",{id:"inherited-from-4"},"Inherited from"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/nevermined-sdk/api-reference/classes/NeverminedAppOptions"},"NeverminedAppOptions"),".",(0,i.kt)("a",{parentName:"p",href:"/docs/nevermined-sdk/api-reference/classes/NeverminedAppOptions#contractsversion"},"contractsVersion")),(0,i.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/sdk-js/blob/1f765603c75b92c5d8798f51b63641eb0639883b/src/models/NeverminedOptions.ts#L99"},"src/models/NeverminedOptions.ts:99")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"gasmultiplier"},"gasMultiplier"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"gasMultiplier"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number")," = ",(0,i.kt)("inlineCode",{parentName:"p"},"1.2")),(0,i.kt)("p",null,"Gas multiplier for the fees.\nCan be used to speed up the transactions."),(0,i.kt)("h4",{id:"overrides-2"},"Overrides"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/nevermined-sdk/api-reference/classes/NeverminedAppOptions"},"NeverminedAppOptions"),".",(0,i.kt)("a",{parentName:"p",href:"/docs/nevermined-sdk/api-reference/classes/NeverminedAppOptions#gasmultiplier"},"gasMultiplier")),(0,i.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/sdk-js/blob/1f765603c75b92c5d8798f51b63641eb0639883b/src/nevermined/resources/AppNetworks.ts#L110"},"src/nevermined/resources/AppNetworks.ts:110")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"gaspricemultiplier"},"gasPriceMultiplier"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"gasPriceMultiplier"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number")," = ",(0,i.kt)("inlineCode",{parentName:"p"},"1.2")),(0,i.kt)("h4",{id:"defined-in-7"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/sdk-js/blob/1f765603c75b92c5d8798f51b63641eb0639883b/src/nevermined/resources/AppNetworks.ts#L111"},"src/nevermined/resources/AppNetworks.ts:111")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"gasstationuri"},"gasStationUri"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"gasStationUri"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("p",null,"Use a gas station to calculate transaction fees"),(0,i.kt)("h4",{id:"inherited-from-5"},"Inherited from"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/nevermined-sdk/api-reference/classes/NeverminedAppOptions"},"NeverminedAppOptions"),".",(0,i.kt)("a",{parentName:"p",href:"/docs/nevermined-sdk/api-reference/classes/NeverminedAppOptions#gasstationuri"},"gasStationUri")),(0,i.kt)("h4",{id:"defined-in-8"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/sdk-js/blob/1f765603c75b92c5d8798f51b63641eb0639883b/src/models/NeverminedOptions.ts#L89"},"src/models/NeverminedOptions.ts:89")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"graphhttpuri"},"graphHttpUri"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"graphHttpUri"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")," = ",(0,i.kt)("inlineCode",{parentName:"p"},"'https://api.studio.thegraph.com/query/78075/public'")),(0,i.kt)("p",null,"Enpoint for the graph-node http query"),(0,i.kt)("h4",{id:"overrides-3"},"Overrides"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/nevermined-sdk/api-reference/classes/NeverminedAppOptions"},"NeverminedAppOptions"),".",(0,i.kt)("a",{parentName:"p",href:"/docs/nevermined-sdk/api-reference/classes/NeverminedAppOptions#graphhttpuri"},"graphHttpUri")),(0,i.kt)("h4",{id:"defined-in-9"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/sdk-js/blob/1f765603c75b92c5d8798f51b63641eb0639883b/src/nevermined/resources/AppNetworks.ts#L105"},"src/nevermined/resources/AppNetworks.ts:105")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"instancename"},"instanceName"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"instanceName"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")," = ",(0,i.kt)("inlineCode",{parentName:"p"},"'appMatic'")),(0,i.kt)("h4",{id:"overrides-4"},"Overrides"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/nevermined-sdk/api-reference/classes/NeverminedAppOptions"},"NeverminedAppOptions"),".",(0,i.kt)("a",{parentName:"p",href:"/docs/nevermined-sdk/api-reference/classes/NeverminedAppOptions#instancename"},"instanceName")),(0,i.kt)("h4",{id:"defined-in-10"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/sdk-js/blob/1f765603c75b92c5d8798f51b63641eb0639883b/src/nevermined/resources/AppNetworks.ts#L100"},"src/nevermined/resources/AppNetworks.ts:100")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"ipfsgateway"},"ipfsGateway"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"ipfsGateway"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")," = ",(0,i.kt)("inlineCode",{parentName:"p"},"'https://ipfs.io'")),(0,i.kt)("p",null,"IPFS variables enable the resolution of DDOs (via ",(0,i.kt)("inlineCode",{parentName:"p"},"assets.resolve"),") from CID urls\nINFO: For performance purposes, it is recommended to setup a IPFS Infura endpoint to accelerate\nthe asset resolution requests."),(0,i.kt)("h4",{id:"inherited-from-6"},"Inherited from"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/nevermined-sdk/api-reference/classes/NeverminedAppOptions"},"NeverminedAppOptions"),".",(0,i.kt)("a",{parentName:"p",href:"/docs/nevermined-sdk/api-reference/classes/NeverminedAppOptions#ipfsgateway"},"ipfsGateway")),(0,i.kt)("h4",{id:"defined-in-11"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/sdk-js/blob/1f765603c75b92c5d8798f51b63641eb0639883b/src/models/NeverminedOptions.ts#L80"},"src/models/NeverminedOptions.ts:80")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"ipfsprojectid"},"ipfsProjectId"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"ipfsProjectId"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("h4",{id:"inherited-from-7"},"Inherited from"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/nevermined-sdk/api-reference/classes/NeverminedAppOptions"},"NeverminedAppOptions"),".",(0,i.kt)("a",{parentName:"p",href:"/docs/nevermined-sdk/api-reference/classes/NeverminedAppOptions#ipfsprojectid"},"ipfsProjectId")),(0,i.kt)("h4",{id:"defined-in-12"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/sdk-js/blob/1f765603c75b92c5d8798f51b63641eb0639883b/src/models/NeverminedOptions.ts#L82"},"src/models/NeverminedOptions.ts:82")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"ipfsprojectsecret"},"ipfsProjectSecret"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"ipfsProjectSecret"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("h4",{id:"inherited-from-8"},"Inherited from"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/nevermined-sdk/api-reference/classes/NeverminedAppOptions"},"NeverminedAppOptions"),".",(0,i.kt)("a",{parentName:"p",href:"/docs/nevermined-sdk/api-reference/classes/NeverminedAppOptions#ipfsprojectsecret"},"ipfsProjectSecret")),(0,i.kt)("h4",{id:"defined-in-13"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/sdk-js/blob/1f765603c75b92c5d8798f51b63641eb0639883b/src/models/NeverminedOptions.ts#L84"},"src/models/NeverminedOptions.ts:84")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"marketplaceauthtoken"},"marketplaceAuthToken"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"marketplaceAuthToken"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("p",null,"Marketplace auth token."),(0,i.kt)("h4",{id:"inherited-from-9"},"Inherited from"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/nevermined-sdk/api-reference/classes/NeverminedAppOptions"},"NeverminedAppOptions"),".",(0,i.kt)("a",{parentName:"p",href:"/docs/nevermined-sdk/api-reference/classes/NeverminedAppOptions#marketplaceauthtoken"},"marketplaceAuthToken")),(0,i.kt)("h4",{id:"defined-in-14"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/sdk-js/blob/1f765603c75b92c5d8798f51b63641eb0639883b/src/models/NeverminedOptions.ts#L41"},"src/models/NeverminedOptions.ts:41")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"marketplaceuri"},"marketplaceUri"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"marketplaceUri"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")," = ",(0,i.kt)("inlineCode",{parentName:"p"},"'https://marketplace-api.matic.nevermined.app'")),(0,i.kt)("p",null,"URL to the MarketPlace API use to record some Nevermined assets metadata. In a Nevermined network there could be\nmultiple Marketplace API instances. Each of them typically records the metadata of a specific domain/vertical deployed on a Nevermined network."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"See"))),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://docs.nevermined.io/docs/architecture/marketplace-api/"},"https://docs.nevermined.io/docs/architecture/marketplace-api/")),(0,i.kt)("h4",{id:"overrides-5"},"Overrides"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/nevermined-sdk/api-reference/classes/NeverminedAppOptions"},"NeverminedAppOptions"),".",(0,i.kt)("a",{parentName:"p",href:"/docs/nevermined-sdk/api-reference/classes/NeverminedAppOptions#marketplaceuri"},"marketplaceUri")),(0,i.kt)("h4",{id:"defined-in-15"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/sdk-js/blob/1f765603c75b92c5d8798f51b63641eb0639883b/src/nevermined/resources/AppNetworks.ts#L104"},"src/nevermined/resources/AppNetworks.ts:104")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"neverminedbackenduri"},"neverminedBackendUri"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"neverminedBackendUri"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")," = ",(0,i.kt)("inlineCode",{parentName:"p"},"'https://one-backend.matic.nevermined.app'")),(0,i.kt)("h4",{id:"overrides-6"},"Overrides"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/nevermined-sdk/api-reference/classes/NeverminedAppOptions"},"NeverminedAppOptions"),".",(0,i.kt)("a",{parentName:"p",href:"/docs/nevermined-sdk/api-reference/classes/NeverminedAppOptions#neverminedbackenduri"},"neverminedBackendUri")),(0,i.kt)("h4",{id:"defined-in-16"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/sdk-js/blob/1f765603c75b92c5d8798f51b63641eb0639883b/src/nevermined/resources/AppNetworks.ts#L108"},"src/nevermined/resources/AppNetworks.ts:108")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"neverminednodeaddress"},"neverminedNodeAddress"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"neverminedNodeAddress"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")," = ",(0,i.kt)("inlineCode",{parentName:"p"},"'0x824dbcE5E9C96C5b8ce2A35a25a5ab87eD1D00b1'")),(0,i.kt)("p",null,"The public address of the Nevermined Node."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"See"))),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/nevermined-sdk/api-reference/classes/NeverminedOptions#neverminednodeuri"},"neverminedNodeUri")),(0,i.kt)("h4",{id:"overrides-7"},"Overrides"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/nevermined-sdk/api-reference/classes/NeverminedAppOptions"},"NeverminedAppOptions"),".",(0,i.kt)("a",{parentName:"p",href:"/docs/nevermined-sdk/api-reference/classes/NeverminedAppOptions#neverminednodeaddress"},"neverminedNodeAddress")),(0,i.kt)("h4",{id:"defined-in-17"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/sdk-js/blob/1f765603c75b92c5d8798f51b63641eb0639883b/src/nevermined/resources/AppNetworks.ts#L107"},"src/nevermined/resources/AppNetworks.ts:107")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"neverminednodeuri"},"neverminedNodeUri"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"neverminedNodeUri"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")," = ",(0,i.kt)("inlineCode",{parentName:"p"},"'https://node.matic.nevermined.app'")),(0,i.kt)("p",null,"URL to an existing Nevermined Node. A Nevermined network can have multiple running Nodes.\nEach of them facilitate the access control and the data and infrastructure interaction with web2 elements."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"See"))),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://docs.nevermined.io/docs/architecture/node/"},"https://docs.nevermined.io/docs/architecture/node/")),(0,i.kt)("h4",{id:"overrides-8"},"Overrides"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/nevermined-sdk/api-reference/classes/NeverminedAppOptions"},"NeverminedAppOptions"),".",(0,i.kt)("a",{parentName:"p",href:"/docs/nevermined-sdk/api-reference/classes/NeverminedAppOptions#neverminednodeuri"},"neverminedNodeUri")),(0,i.kt)("h4",{id:"defined-in-18"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/sdk-js/blob/1f765603c75b92c5d8798f51b63641eb0639883b/src/nevermined/resources/AppNetworks.ts#L106"},"src/nevermined/resources/AppNetworks.ts:106")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"nftcontractcreditsaddress"},"nftContractCreditsAddress"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"nftContractCreditsAddress"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")," = ",(0,i.kt)("inlineCode",{parentName:"p"},"'0xaB53c5EBd2C42D063EA548b8e46F3E1b8F343391'")),(0,i.kt)("h4",{id:"overrides-9"},"Overrides"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/nevermined-sdk/api-reference/classes/NeverminedAppOptions"},"NeverminedAppOptions"),".",(0,i.kt)("a",{parentName:"p",href:"/docs/nevermined-sdk/api-reference/classes/NeverminedAppOptions#nftcontractcreditsaddress"},"nftContractCreditsAddress")),(0,i.kt)("h4",{id:"defined-in-19"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/sdk-js/blob/1f765603c75b92c5d8798f51b63641eb0639883b/src/nevermined/resources/AppNetworks.ts#L113"},"src/nevermined/resources/AppNetworks.ts:113")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"nftcontracttimeaddress"},"nftContractTimeAddress"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"nftContractTimeAddress"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")," = ",(0,i.kt)("inlineCode",{parentName:"p"},"'0xaB53c5EBd2C42D063EA548b8e46F3E1b8F343391'")),(0,i.kt)("h4",{id:"overrides-10"},"Overrides"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/nevermined-sdk/api-reference/classes/NeverminedAppOptions"},"NeverminedAppOptions"),".",(0,i.kt)("a",{parentName:"p",href:"/docs/nevermined-sdk/api-reference/classes/NeverminedAppOptions#nftcontracttimeaddress"},"nftContractTimeAddress")),(0,i.kt)("h4",{id:"defined-in-20"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/sdk-js/blob/1f765603c75b92c5d8798f51b63641eb0639883b/src/nevermined/resources/AppNetworks.ts#L112"},"src/nevermined/resources/AppNetworks.ts:112")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"tokenaddress"},"tokenAddress"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"tokenAddress"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")," = ",(0,i.kt)("inlineCode",{parentName:"p"},"'0x2791bca1f2de4661ed88a30c99a7a9449aa84174'")),(0,i.kt)("h4",{id:"overrides-11"},"Overrides"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/nevermined-sdk/api-reference/classes/NeverminedAppOptions"},"NeverminedAppOptions"),".",(0,i.kt)("a",{parentName:"p",href:"/docs/nevermined-sdk/api-reference/classes/NeverminedAppOptions#tokenaddress"},"tokenAddress")),(0,i.kt)("h4",{id:"defined-in-21"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/sdk-js/blob/1f765603c75b92c5d8798f51b63641eb0639883b/src/nevermined/resources/AppNetworks.ts#L114"},"src/nevermined/resources/AppNetworks.ts:114")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"verbose"},"verbose"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"verbose"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")," = ",(0,i.kt)("inlineCode",{parentName:"p"},"true")),(0,i.kt)("p",null,"Log level."),(0,i.kt)("h4",{id:"overrides-12"},"Overrides"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/nevermined-sdk/api-reference/classes/NeverminedAppOptions"},"NeverminedAppOptions"),".",(0,i.kt)("a",{parentName:"p",href:"/docs/nevermined-sdk/api-reference/classes/NeverminedAppOptions#verbose"},"verbose")),(0,i.kt)("h4",{id:"defined-in-22"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/sdk-js/blob/1f765603c75b92c5d8798f51b63641eb0639883b/src/nevermined/resources/AppNetworks.ts#L109"},"src/nevermined/resources/AppNetworks.ts:109")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"web3provider"},"web3Provider"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"web3Provider"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"any")),(0,i.kt)("p",null,"Web3 Provider."),(0,i.kt)("h4",{id:"inherited-from-10"},"Inherited from"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/nevermined-sdk/api-reference/classes/NeverminedAppOptions"},"NeverminedAppOptions"),".",(0,i.kt)("a",{parentName:"p",href:"/docs/nevermined-sdk/api-reference/classes/NeverminedAppOptions#web3provider"},"web3Provider")),(0,i.kt)("h4",{id:"defined-in-23"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/sdk-js/blob/1f765603c75b92c5d8798f51b63641eb0639883b/src/models/NeverminedOptions.ts#L46"},"src/models/NeverminedOptions.ts:46")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"web3provideruri"},"web3ProviderUri"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"web3ProviderUri"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"undefined")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("p",null,"Ethereum Web3 Provider URL. This Url allows the SDK to connect to a blockchain.\nThis provider depends on the network where you want to connect (Ethereum Mainnet, Rinkeby, Polygon Matic, etc).\nIt's possible to use a public available provider or a private/paid one like Infura, Alchemy, etc."),(0,i.kt)("h4",{id:"overrides-13"},"Overrides"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/nevermined-sdk/api-reference/classes/NeverminedAppOptions"},"NeverminedAppOptions"),".",(0,i.kt)("a",{parentName:"p",href:"/docs/nevermined-sdk/api-reference/classes/NeverminedAppOptions#web3provideruri"},"web3ProviderUri")),(0,i.kt)("h4",{id:"defined-in-24"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/sdk-js/blob/1f765603c75b92c5d8798f51b63641eb0639883b/src/nevermined/resources/AppNetworks.ts#L103"},"src/nevermined/resources/AppNetworks.ts:103")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"zerodevprojectid"},"zeroDevProjectId"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"zeroDevProjectId"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("p",null,"ZeroDev project id"),(0,i.kt)("h4",{id:"inherited-from-11"},"Inherited from"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/nevermined-sdk/api-reference/classes/NeverminedAppOptions"},"NeverminedAppOptions"),".",(0,i.kt)("a",{parentName:"p",href:"/docs/nevermined-sdk/api-reference/classes/NeverminedAppOptions#zerodevprojectid"},"zeroDevProjectId")),(0,i.kt)("h4",{id:"defined-in-25"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/sdk-js/blob/1f765603c75b92c5d8798f51b63641eb0639883b/src/models/NeverminedOptions.ts#L94"},"src/models/NeverminedOptions.ts:94")))}c.isMDXComponent=!0}}]);