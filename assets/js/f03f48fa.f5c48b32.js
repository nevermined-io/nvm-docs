"use strict";(self.webpackChunknvm_docs=self.webpackChunknvm_docs||[]).push([[9278],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=s(n),m=o,h=p["".concat(c,".").concat(m)]||p[m]||u[m]||i;return n?a.createElement(h,r(r({ref:t},d),{},{components:n})):a.createElement(h,r({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var s=2;s<i;s++)r[s]=n[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},8020:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return u}});var a=n(7462),o=n(3366),i=(n(7294),n(3905)),r=["components"],l={sidebar_position:1},c="Getting Started",s={unversionedId:"tools/cli/getting-started",id:"tools/cli/getting-started",title:"Getting Started",description:"This section provides links to information about how to get started with the Nevermined Command Line Interface (NVM CLI or ncli).",source:"@site/docs/tools/cli/getting-started.md",sourceDirName:"tools/cli",slug:"/tools/cli/getting-started",permalink:"/docs/tools/cli/getting-started",draft:!1,editUrl:"https://github.com/nevermined-io/nvm-docs/tree/main/docs/tools/cli/getting-started.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Command Line Interface",permalink:"/docs/category/command-line-interface"},next:{title:"Advanced Configuration",permalink:"/docs/tools/cli/advanced_configuration"}},d={},u=[{value:"Pre-requisites",id:"pre-requisites",level:2},{value:"How to install the <code>ncli</code>?",id:"how-to-install-the-ncli",level:2},{value:"Configure your account",id:"configure-your-account",level:2},{value:"Using your existing account",id:"using-your-existing-account",level:3},{value:"Use a mnemonic",id:"use-a-mnemonic",level:3},{value:"Use a keyfile",id:"use-a-keyfile",level:3},{value:"Creating a new account",id:"creating-a-new-account",level:3},{value:"Getting Funds",id:"getting-funds",level:2},{value:"Native tokens",id:"native-tokens",level:3},{value:"ERC20",id:"erc20",level:3},{value:"Advanced Configuration",id:"advanced-configuration",level:2}],p={toc:u};function m(e){var t=e.components,n=(0,o.Z)(e,r);return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"getting-started"},"Getting Started"),(0,i.kt)("p",null,"This section provides links to information about how to get started with the Nevermined Command Line Interface (NVM CLI or ",(0,i.kt)("inlineCode",{parentName:"p"},"ncli"),")."),(0,i.kt)("h2",{id:"pre-requisites"},"Pre-requisites"),(0,i.kt)("p",null,"The Nevermined CLI is an application built with Typescript and ready to be used in the user command line to interact with a remote (or local) Nevermined deployment.\nThe ",(0,i.kt)("inlineCode",{parentName:"p"},"ncli")," requires ",(0,i.kt)("a",{parentName:"p",href:"https://nodejs.org/"},"Node JS")," v14 or higher. You can find online instructions about ",(0,i.kt)("a",{parentName:"p",href:"https://nodejs.dev/learn/how-to-install-nodejs"},"How to install Node JS"),"."),(0,i.kt)("h2",{id:"how-to-install-the-ncli"},"How to install the ",(0,i.kt)("inlineCode",{parentName:"h2"},"ncli"),"?"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"ncli")," is packaged in ",(0,i.kt)("inlineCode",{parentName:"p"},"NPM")," format. This means you can installed easilly in your environment running one of the following commands:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"npm install -g @nevermined-io/cli\n\nor\n\nyarn global add @nevermined-io/cli\n")),(0,i.kt)("p",null,"After doing that you should have available in your system the ",(0,i.kt)("inlineCode",{parentName:"p"},"ncli")," tool."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ ncli --help\n")),(0,i.kt)("h2",{id:"configure-your-account"},"Configure your account"),(0,i.kt)("h3",{id:"using-your-existing-account"},"Using your existing account"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"ncli")," requires a wallet to connect with the blockchain network (EVM compatible). To use an existing wallet with the ",(0,i.kt)("inlineCode",{parentName:"p"},"ncli")," there are 2 options:"),(0,i.kt)("h3",{id:"use-a-mnemonic"},"Use a mnemonic"),(0,i.kt)("p",null,"You just need to export your ",(0,i.kt)("strong",{parentName:"p"},"mnemonic")," in the command line:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'export MNEMONIC="<your 12/24 words seed phrase>"\n')),(0,i.kt)("h3",{id:"use-a-keyfile"},"Use a keyfile"),(0,i.kt)("p",null,"If you have a keyfile storing your credentials you can use them providing the path to the keyfile and the keyfile password:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'export KEYFILE_PATH="<path to keyfile>"\nexport KEYFILE_PASSWORD="<keyfile password>"\n')),(0,i.kt)("h3",{id:"creating-a-new-account"},"Creating a new account"),(0,i.kt)("p",null,"If you don't have an account locally or you want to use a new one to use the ",(0,i.kt)("inlineCode",{parentName:"p"},"ncli"),", create it is very simple, you just need to use the ",(0,i.kt)("inlineCode",{parentName:"p"},"ncli"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"ncli accounts new\n\nCreating wallet ...\nWallet address: 0x37434d6673ff106446c9224884D54201e5Ae46A4\nWallet public key: 0x0482d6aac219607b47c0a840784909e19694cf66d35262c0ddbf41d753962388812e5394e083a0c54bce10282b6ec0fd86be7f77d296868184e6fd999c4c1fa7e6\nWallet private key: 0x0acb0253593fcbbd20e0fd82b8ff35c8a6e6c1f32c09d1bc8b41cec9031c0986\nWallet Mnemonic:\n  Phrase: street fever feed resource place adapt venue mobile hill try armed feature\n  Path: m/44'/60'/0'/0/0\n  Locale: en\n\nIf you want to use it in the CLI run:\nexport MNEMONIC=\"street fever feed resource place adapt venue mobile hill try armed feature\"\n")),(0,i.kt)("p",null,"As the command output says, you just need to export the ",(0,i.kt)("inlineCode",{parentName:"p"},"MNEMONIC")," environment variable and start using the ",(0,i.kt)("inlineCode",{parentName:"p"},"ncli"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'export MNEMONIC="street fever feed resource place adapt venue mobile hill try armed feature"\n')),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Remember to store your ",(0,i.kt)("strong",{parentName:"p"},"MNEMONIC")," in a secure place and don't share it with anyone."))),(0,i.kt)("h2",{id:"getting-funds"},"Getting Funds"),(0,i.kt)("h3",{id:"native-tokens"},"Native tokens"),(0,i.kt)("p",null,"To interact with a blockchain network you need to have balance in the tokens related with the transaction you need to do. For example if you want write anything on-chain as a result of calling a Smart Contract, you need to pay for that in the specific network native token (",(0,i.kt)("inlineCode",{parentName:"p"},"ETH"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"MATIC"),", etc). In a testnet, it's possible to get some of them using a public faucet. For example ",(0,i.kt)("a",{parentName:"p",href:"https://faucet.polygon.technology/"},"https://faucet.polygon.technology/")," or ",(0,i.kt)("a",{parentName:"p",href:"https://faucets.chain.link/"},"https://faucets.chain.link/"),". You just need to specify the address of your account and wait to get the funds."),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"If you just created your account with the CLI, remember the command told us our account address: ",(0,i.kt)("inlineCode",{parentName:"p"},"Wallet address: 0x37434d6673ff106446c9224884D54201e5Ae46A4")))),(0,i.kt)("h3",{id:"erc20"},"ERC20"),(0,i.kt)("p",null,"If you want to interact with a Nevermined network where the assets published have a price in a ERC20 token (like ",(0,i.kt)("strong",{parentName:"p"},"USDC"),"), you need to have balance in that token to purchase these assets. In a testnet you can get some of them in a Faucet too. For example this is the USDC Faucet in ",(0,i.kt)("inlineCode",{parentName:"p"},"mumbai"),":"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://calibration-faucet.filswan.com/#/dashboard"},"https://calibration-faucet.filswan.com/#/dashboard")),(0,i.kt)("p",null,"And then you just need to wait a couple of minutes and see if you got balance:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"ncli -n defiMumbai accounts balance 0x37434d6673ff106446c9224884D54201e5Ae46A4\n\nCustomToken with address 0xe11A86849d99F524cAC3E7A0Ec1241828e332C62\n===== Account 0x37434d6673ff106446c9224884D54201e5Ae46A4 =====\nMATIC Balance: 1.25\nToken Balance: 180000000000000000000 USDC\nEtherscan Url: https://mumbai.polygonscan.com/address/0x37434d6673ff106446c9224884D54201e5Ae46A4\nNFT Balance: 0\n\n")),(0,i.kt)("p",null,"======="),(0,i.kt)("h2",{id:"advanced-configuration"},"Advanced Configuration"))}m.isMDXComponent=!0}}]);