"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2635],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=s(n),d=a,h=u["".concat(l,".").concat(d)]||u[d]||m[d]||i;return n?r.createElement(h,o(o({ref:t},c),{},{components:n})):r.createElement(h,o({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},95594:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const i={sidebar_position:6},o="Nevermined Environments",p={unversionedId:"cli/environments",id:"cli/environments",title:"Nevermined Environments",description:"Nevermined is a web3 developers framework that allows to deploy and use it in several networks to implement different use cases. This is a list of the most used environments publicly available that you can use via the Nevermined Command Line interface.",source:"@site/docs/cli/environments.md",sourceDirName:"cli",slug:"/cli/environments",permalink:"/docs/cli/environments",draft:!1,editUrl:"https://github.com/nevermined-io/docs/tree/main/docs/cli/environments.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Commands  Reference",permalink:"/docs/cli/cli_commands"},next:{title:"Getting Started with the Tutorials",permalink:"/docs/tutorials/"}},l={},s=[{value:"Environments",id:"environments",level:2},{value:"testnet",id:"testnet",level:2},{value:"Nevermined configuration",id:"nevermined-configuration",level:3},{value:"matic",id:"matic",level:2},{value:"Nevermined configuration",id:"nevermined-configuration-1",level:3},{value:"arbitrum-one",id:"arbitrum-one",level:2},{value:"Nevermined configuration",id:"nevermined-configuration-2",level:3},{value:"goerli",id:"goerli",level:2},{value:"Nevermined configuration",id:"nevermined-configuration-3",level:3},{value:"arbitrum-goerli",id:"arbitrum-goerli",level:2},{value:"Nevermined configuration",id:"nevermined-configuration-4",level:3},{value:"geth-localnet",id:"geth-localnet",level:2},{value:"Nevermined configuration",id:"nevermined-configuration-5",level:3}],c={toc:s};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"nevermined-environments"},"Nevermined Environments"),(0,a.kt)("p",null,"Nevermined is a web3 developers framework that allows to deploy and use it in several networks to implement different use cases. This is a list of the most used environments publicly available that you can use via the Nevermined Command Line interface."),(0,a.kt)("h2",{id:"environments"},"Environments"),(0,a.kt)("h2",{id:"testnet"},"testnet"),(0,a.kt)("p",null,"Public testnet environment where users can interact with Nevermined protocol.",(0,a.kt)("br",null)),(0,a.kt)("p",null," ",(0,a.kt)("strong",{parentName:"p"},"Testnet"),"\nThe Native token being used is ",(0,a.kt)("strong",{parentName:"p"},"MATIC"),". This environment is having the network name ",(0,a.kt)("strong",{parentName:"p"},"mumbai")," and the chain id/network id ",(0,a.kt)("strong",{parentName:"p"},"80001"),". ",(0,a.kt)("br",null)),(0,a.kt)("h3",{id:"nevermined-configuration"},"Nevermined configuration"),(0,a.kt)("p",null," The Nevermined contracts deployed have the version: ",(0,a.kt)("strong",{parentName:"p"},"2.1.0"),"  The Nevermined contracts are labeled with the tag name: ",(0,a.kt)("strong",{parentName:"p"},"public"),"\nThe Marketplace API used can be found on ",(0,a.kt)("a",{parentName:"p",href:"https://marketplace-api.mumbai.public.nevermined.rocks."},"https://marketplace-api.mumbai.public.nevermined.rocks.")," ",(0,a.kt)("br",null),"\nThe Gateway can be found on ",(0,a.kt)("a",{parentName:"p",href:"https://gateway.mumbai.public.nevermined.rocks"},"https://gateway.mumbai.public.nevermined.rocks")," and uses the public address ",(0,a.kt)("strong",{parentName:"p"},"0xB82dc620BB4dE6712376055a5cfc0DF11112D442"),".",(0,a.kt)("br",null),"\nThere is deployed a faucet on ",(0,a.kt)("a",{parentName:"p",href:"https://faucet.mumbai.public.nevermined.rocks"},"https://faucet.mumbai.public.nevermined.rocks")," .",(0,a.kt)("br",null)," The subgraphs to fetch contracts events can be found on ",(0,a.kt)("a",{parentName:"p",href:"https://api.thegraph.com/subgraphs/name/nevermined-io/public"},"https://api.thegraph.com/subgraphs/name/nevermined-io/public")," .",(0,a.kt)("br",null)),(0,a.kt)("h2",{id:"matic"},"matic"),(0,a.kt)("p",null,"Polygon production environment where users can interact with Nevermined protocol.",(0,a.kt)("br",null)),(0,a.kt)("p",null," ",(0,a.kt)("strong",{parentName:"p"},"Production Environment"),"\nThe Native token being used is ",(0,a.kt)("strong",{parentName:"p"},"MATIC"),". This environment is having the network name ",(0,a.kt)("strong",{parentName:"p"},"matic")," and the chain id/network id ",(0,a.kt)("strong",{parentName:"p"},"137"),". ",(0,a.kt)("br",null)),(0,a.kt)("h3",{id:"nevermined-configuration-1"},"Nevermined configuration"),(0,a.kt)("p",null," The Nevermined contracts deployed have the version: ",(0,a.kt)("strong",{parentName:"p"},"2.1.0"),"  The Nevermined contracts are labeled with the tag name: ",(0,a.kt)("strong",{parentName:"p"},"public"),"\nThe Marketplace API used can be found on ",(0,a.kt)("a",{parentName:"p",href:"https://marketplace-api.public.nevermined.rocks."},"https://marketplace-api.public.nevermined.rocks.")," ",(0,a.kt)("br",null),"\nThe Gateway can be found on ",(0,a.kt)("a",{parentName:"p",href:"https://gateway.public.nevermined.rocks"},"https://gateway.public.nevermined.rocks")," and uses the public address ",(0,a.kt)("strong",{parentName:"p"},"0xD1bF18059D590dE610D3E2D0F43Dd63C0eB2aA86"),".",(0,a.kt)("br",null),"\nThe subgraphs to fetch contracts events can be found on ",(0,a.kt)("a",{parentName:"p",href:"https://api.thegraph.com/subgraphs/name/nevermined-io/public"},"https://api.thegraph.com/subgraphs/name/nevermined-io/public")," .",(0,a.kt)("br",null)),(0,a.kt)("h2",{id:"arbitrum-one"},"arbitrum-one"),(0,a.kt)("p",null,"Arbitrum production environment where users can interact with Nevermined protocol.",(0,a.kt)("br",null)),(0,a.kt)("p",null," ",(0,a.kt)("strong",{parentName:"p"},"Production Environment"),"\nThe Native token being used is ",(0,a.kt)("strong",{parentName:"p"},"ETH"),". This environment is having the network name ",(0,a.kt)("strong",{parentName:"p"},"matic")," and the chain id/network id ",(0,a.kt)("strong",{parentName:"p"},"42161"),". ",(0,a.kt)("br",null)),(0,a.kt)("h3",{id:"nevermined-configuration-2"},"Nevermined configuration"),(0,a.kt)("p",null," The Nevermined contracts deployed have the version: ",(0,a.kt)("strong",{parentName:"p"},"2.1.0"),"  The Nevermined contracts are labeled with the tag name: ",(0,a.kt)("strong",{parentName:"p"},"public"),"\nThe Marketplace API used can be found on ",(0,a.kt)("a",{parentName:"p",href:"https://marketplace-api.arbitrum-one.public.nevermined.rocks."},"https://marketplace-api.arbitrum-one.public.nevermined.rocks.")," ",(0,a.kt)("br",null),"\nThe Gateway can be found on ",(0,a.kt)("a",{parentName:"p",href:"https://gateway.arbitrum-one.public.nevermined.rocks"},"https://gateway.arbitrum-one.public.nevermined.rocks")," and uses the public address ",(0,a.kt)("strong",{parentName:"p"},"0xD1bF18059D590dE610D3E2D0F43Dd63C0eB2aA86"),".",(0,a.kt)("br",null),"\nThe subgraphs to fetch contracts events can be found on ",(0,a.kt)("a",{parentName:"p",href:"https://api.thegraph.com/subgraphs/name/nevermined-io/public"},"https://api.thegraph.com/subgraphs/name/nevermined-io/public")," .",(0,a.kt)("br",null)),(0,a.kt)("h2",{id:"goerli"},"goerli"),(0,a.kt)("p",null,"Ethereum testnet environment where users can interact with Nevermined protocol.",(0,a.kt)("br",null)),(0,a.kt)("p",null," ",(0,a.kt)("strong",{parentName:"p"},"Testnet"),"\nThe Native token being used is ",(0,a.kt)("strong",{parentName:"p"},"ETH"),". This environment is having the network name ",(0,a.kt)("strong",{parentName:"p"},"goerli")," and the chain id/network id ",(0,a.kt)("strong",{parentName:"p"},"5"),". ",(0,a.kt)("br",null)),(0,a.kt)("h3",{id:"nevermined-configuration-3"},"Nevermined configuration"),(0,a.kt)("p",null," The Nevermined contracts deployed have the version: ",(0,a.kt)("strong",{parentName:"p"},"2.1.0"),"  The Nevermined contracts are labeled with the tag name: ",(0,a.kt)("strong",{parentName:"p"},"public"),"\nThe Marketplace API used can be found on ",(0,a.kt)("a",{parentName:"p",href:"https://marketplace-api.goerli.public.nevermined.rocks."},"https://marketplace-api.goerli.public.nevermined.rocks.")," ",(0,a.kt)("br",null),"\nThe Gateway can be found on ",(0,a.kt)("a",{parentName:"p",href:"https://gateway.goerli.public.nevermined.rocks"},"https://gateway.goerli.public.nevermined.rocks")," and uses the public address ",(0,a.kt)("strong",{parentName:"p"},"0xB82dc620BB4dE6712376055a5cfc0DF11112D442"),".",(0,a.kt)("br",null),"\nThere is deployed a faucet on ",(0,a.kt)("a",{parentName:"p",href:"https://faucet.goerli.public.nevermined.rocks"},"https://faucet.goerli.public.nevermined.rocks")," .",(0,a.kt)("br",null)," The subgraphs to fetch contracts events can be found on ",(0,a.kt)("a",{parentName:"p",href:"https://api.thegraph.com/subgraphs/name/nevermined-io/public"},"https://api.thegraph.com/subgraphs/name/nevermined-io/public")," .",(0,a.kt)("br",null)),(0,a.kt)("h2",{id:"arbitrum-goerli"},"arbitrum-goerli"),(0,a.kt)("p",null,"Arbitrum testnet environment where users can interact with Nevermined protocol.",(0,a.kt)("br",null)),(0,a.kt)("p",null," ",(0,a.kt)("strong",{parentName:"p"},"Testnet"),"\nThe Native token being used is ",(0,a.kt)("strong",{parentName:"p"},"ETH"),". This environment is having the network name ",(0,a.kt)("strong",{parentName:"p"},"arbitrum-goerli")," and the chain id/network id ",(0,a.kt)("strong",{parentName:"p"},"421613"),". ",(0,a.kt)("br",null)),(0,a.kt)("h3",{id:"nevermined-configuration-4"},"Nevermined configuration"),(0,a.kt)("p",null," The Nevermined contracts deployed have the version: ",(0,a.kt)("strong",{parentName:"p"},"2.1.0"),"  The Nevermined contracts are labeled with the tag name: ",(0,a.kt)("strong",{parentName:"p"},"public"),"\nThe Marketplace API used can be found on ",(0,a.kt)("a",{parentName:"p",href:"https://marketplace-api.arbitrum-goerli.public.nevermined.rocks."},"https://marketplace-api.arbitrum-goerli.public.nevermined.rocks.")," ",(0,a.kt)("br",null),"\nThe Gateway can be found on ",(0,a.kt)("a",{parentName:"p",href:"https://gateway.arbitrum-goerli.public.nevermined.rocks"},"https://gateway.arbitrum-goerli.public.nevermined.rocks")," and uses the public address ",(0,a.kt)("strong",{parentName:"p"},"0xB82dc620BB4dE6712376055a5cfc0DF11112D442"),".",(0,a.kt)("br",null),"\nThere is deployed a faucet on ",(0,a.kt)("a",{parentName:"p",href:"https://faucet.arbitrum-goerli.public.nevermined.rocks"},"https://faucet.arbitrum-goerli.public.nevermined.rocks")," .",(0,a.kt)("br",null)," The subgraphs to fetch contracts events can be found on ",(0,a.kt)("a",{parentName:"p",href:"https://api.thegraph.com/subgraphs/name/nevermined-io/public"},"https://api.thegraph.com/subgraphs/name/nevermined-io/public")," .",(0,a.kt)("br",null)),(0,a.kt)("h2",{id:"geth-localnet"},"geth-localnet"),(0,a.kt)("p",null,"This environment is used for local development. If you want to have a fully functional environment running in your computer, please visit ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/tools/"},"https://github.com/nevermined-io/tools/"),(0,a.kt)("br",null)),(0,a.kt)("p",null," ",(0,a.kt)("strong",{parentName:"p"},"Testnet"),"\nThe Native token being used is ",(0,a.kt)("strong",{parentName:"p"},"ETH"),". This environment is having the network name ",(0,a.kt)("strong",{parentName:"p"},"geth-localnet")," and the chain id/network id ",(0,a.kt)("strong",{parentName:"p"},"8996"),". ",(0,a.kt)("br",null)),(0,a.kt)("h3",{id:"nevermined-configuration-5"},"Nevermined configuration"),(0,a.kt)("p",null," The Nevermined contracts deployed have the version: ",(0,a.kt)("strong",{parentName:"p"},"undefined"),"  The Nevermined contracts are labeled with the tag name: ",(0,a.kt)("strong",{parentName:"p"},"undefined"),"\nThe Marketplace API used can be found on ",(0,a.kt)("a",{parentName:"p",href:"http://172.17.0.1:3100"},"http://172.17.0.1:3100"),". ",(0,a.kt)("br",null),"\nThe Gateway can be found on http://localhost:8030 and uses the public address ",(0,a.kt)("strong",{parentName:"p"},"0x068ed00cf0441e4829d9784fcbe7b9e26d4bd8d0"),".",(0,a.kt)("br",null),"\nThere is deployed a faucet on http://localhost:3001 .",(0,a.kt)("br",null)," The subgraphs to fetch contracts events can be found on http://localhost:9000/subgraphs/name/nevermined-io/development .",(0,a.kt)("br",null)))}m.isMDXComponent=!0}}]);