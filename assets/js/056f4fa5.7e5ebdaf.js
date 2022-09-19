"use strict";(self.webpackChunknvm_docs=self.webpackChunknvm_docs||[]).push([[7070],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=l(n),u=a,h=m["".concat(c,".").concat(u)]||m[u]||p[u]||o;return n?r.createElement(h,i(i({ref:t},d),{},{components:n})):r.createElement(h,i({ref:t},d))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},14541:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=n(87462),a=(n(67294),n(3905));const o={sidebar_position:1},i="Contracts ABIs",s={unversionedId:"architecture/contracts/ContractABIs",id:"architecture/contracts/ContractABIs",title:"Contracts ABIs",description:"Nevermined as a digital ecosystems builder has some differences from a contracts deployment point of view compared",source:"@site/docs/architecture/contracts/ContractABIs.md",sourceDirName:"architecture/contracts",slug:"/architecture/contracts/ContractABIs",permalink:"/docs/architecture/contracts/ContractABIs",draft:!1,editUrl:"https://github.com/nevermined-io/docs/tree/main/docs/architecture/contracts/ContractABIs.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Smart Contracts",permalink:"/docs/category/smart-contracts"},next:{title:"Solidity API",permalink:"/docs/architecture/contracts/solidity-api"}},c={},l=[{value:"What defines a Nevermined deployment",id:"what-defines-a-nevermined-deployment",level:2},{value:"How we release the ABIs?",id:"how-we-release-the-abis",level:2},{value:"New release of the contracts (new tag)",id:"new-release-of-the-contracts-new-tag",level:3},{value:"Deployment of the contracts in a network",id:"deployment-of-the-contracts-in-a-network",level:3},{value:"Integration",id:"integration",level:2}],d={toc:l};function p(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"contracts-abis"},"Contracts ABIs"),(0,a.kt)("p",null,"Nevermined as a digital ecosystems builder has some differences from a contracts deployment point of view compared\nwith some other protocols."),(0,a.kt)("p",null,"These are some main characteristics:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"We support different products built on Nevermined contracts running in different networks"),(0,a.kt)("li",{parentName:"ul"},"Each product will use different versions of the contracts"),(0,a.kt)("li",{parentName:"ul"},"Different products in the same network could require different versions of the contracts")),(0,a.kt)("h2",{id:"what-defines-a-nevermined-deployment"},"What defines a Nevermined deployment"),(0,a.kt)("p",null,"So the organization of how the applications are using the which version of the contracts in which network is defined by\n3 dimensions:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Version"),", the version of the Smart Contracts ",(0,a.kt)("inlineCode",{parentName:"li"},"v1.3.9"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"v2.0.1"),", etc"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Network"),", in which network  (",(0,a.kt)("inlineCode",{parentName:"li"},"NETWORK_ID"),") are the contracts deployed. Typically ",(0,a.kt)("inlineCode",{parentName:"li"},"mumbai"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"polygon"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"rinkeby"),",\n",(0,a.kt)("inlineCode",{parentName:"li"},"mainnet"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"alfajores")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"celo")," but it could be others"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Tag Name"),", referring to a specific product or app using this specific release of the contracts. This is important\nbecause the same version of the contracts in the same network could be required because different configuration\nduring the deployment of the instance. If tag name is not specified we assume is a ",(0,a.kt)("inlineCode",{parentName:"li"},"common")," deployment.")),(0,a.kt)("p",null,"So ",(0,a.kt)("strong",{parentName:"p"},"Version")," + ",(0,a.kt)("strong",{parentName:"p"},"Network")," + ",(0,a.kt)("strong",{parentName:"p"},"Tag Name")," defines a unique Nevermined deployment or instance."),(0,a.kt)("h2",{id:"how-we-release-the-abis"},"How we release the ABIs?"),(0,a.kt)("p",null,"Because of this, the releasing and deployment process of the contracts take care of:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"When a new version of the contracts is tagged, the ABIs of that version are stored indicating the version."),(0,a.kt)("li",{parentName:"ol"},"When a new version of the contracts is installed or upgraded into a non-local environment, the ABIs of that version\n(with the contract address included) corresponding to that network and tag name are stored in a hierarchy structure\nrepresenting this unique version/network/tag")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Releasing new Nevermined Contracts ABIs",src:n(92046).Z,width:"960",height:"540"})),(0,a.kt)("h3",{id:"new-release-of-the-contracts-new-tag"},"New release of the contracts (new tag)"),(0,a.kt)("p",null,"A new tag of Nevermined contracts will generate the ABIs that will be uploaded using the following structure:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"https://artifacts.nevermined.rocks/abis/abis_<VERSION>.zip | tar.gz\nhttps://artifacts.nevermined.rocks/abis/<VERSION>/ContractNameA.json\nhttps://artifacts.nevermined.rocks/abis/<VERSION>/ContractNameB.json\n")),(0,a.kt)("h3",{id:"deployment-of-the-contracts-in-a-network"},"Deployment of the contracts in a network"),(0,a.kt)("p",null,"A new deployment (fresh install or upgrade) of the contracts will generate 2 different files:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The contracts file keeping the name of the contract and the address where the contract is deployed. This file will be\nin JSON format and have the following format:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "ContractName1": "0x123",\n    "ContractName2": "0x123"\n}\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The ABIs package file including all the ABI files. The package file could be in zip and tar.gz formats.")),(0,a.kt)("p",null,"Taking all the above into account, after a deployment 2 new files are generated with the contracts addresses and abis\nusing the following structure:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"https://artifacts.nevermined.rocks/deployment/<NETWORK_ID>/<TAG_NAME>/abis_<VERSION>.zip | .tar.gz\nhttps://artifacts.nevermined.rocks/deployment/<NETWORK_ID>/<TAG_NAME>/contracts_<VERSION>.json\n")),(0,a.kt)("p",null,"For example, for a new deployment of contracts ",(0,a.kt)("inlineCode",{parentName:"p"},"v2.1.0")," on ",(0,a.kt)("inlineCode",{parentName:"p"},"mumbai")," that will be used for ",(0,a.kt)("inlineCode",{parentName:"p"},"common")," environments, it will\nbe generated the following 2 files:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"https://artifacts.nevermined.rocks/deployment/mumbai/common/abis_v2.1.0.zip\nhttps://artifacts.nevermined.rocks/deployment/mumbai/common/contracts_v2.1.0.json\n")),(0,a.kt)("h2",{id:"integration"},"Integration"),(0,a.kt)("p",null,"Knowing the version, environment and the tag name, a client can get all the artifacts and addresses of the contracts\nthat needs to use downloading the artifacts from the public repository."),(0,a.kt)("p",null,"In addition to this, the NPM package ",(0,a.kt)("inlineCode",{parentName:"p"},"@nevermined-io/contracts")," of the contracts will include the ABIs. In combination\nwith the contracts.json, the client should be able to configure the correct address where connect just replacing the\ncontract addresses in the ABIs."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Integration of Nevermined Contracts ABIs",src:n(32430).Z,width:"960",height:"540"})))}p.isMDXComponent=!0},92046:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/deployment_abis-d5ef16513d8dfa272dfa49dedad01295.png"},32430:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/integration_abis-4773aab43c3e1d9970d1fe313d678b96.png"}}]);