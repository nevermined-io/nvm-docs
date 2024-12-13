"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6315],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),d=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=d(e.components);return i.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=d(n),m=a,f=u["".concat(s,".").concat(m)]||u[m]||c[m]||o;return n?i.createElement(f,r(r({ref:t},p),{},{components:n})):i.createElement(f,r({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var d=2;d<o;d++)r[d]=n[d];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},21151:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var i=n(87462),a=(n(67294),n(3905));const o={sidebar_position:3},r="Advanced Configuration",l={unversionedId:"cli/advanced_configuration",id:"cli/advanced_configuration",title:"Advanced Configuration",description:"The CLI is fully customizable via environment variables. By default the ncli has pre-configured different environments (testnet and production) where you can connect directly.",source:"@site/docs/cli/advanced_configuration.md",sourceDirName:"cli",slug:"/cli/advanced_configuration",permalink:"/docs/cli/advanced_configuration",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Getting Started",permalink:"/docs/cli/getting-started"},next:{title:"Commands  Reference",permalink:"/docs/cli/cli_commands"}},s={},d=[{value:"CLI global parameters",id:"cli-global-parameters",level:2},{value:"Account Environment variables",id:"account-environment-variables",level:2},{value:"Connecting to different environments",id:"connecting-to-different-environments",level:2},{value:"Network Environment variables",id:"network-environment-variables",level:2}],p={toc:d};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"advanced-configuration"},"Advanced Configuration"),(0,a.kt)("p",null,"The CLI is fully customizable via environment variables. By default the ",(0,a.kt)("inlineCode",{parentName:"p"},"ncli")," has pre-configured different environments (testnet and production) where you can connect directly. "),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"If you want to see the existing pre-configured environments you just need to run: ",(0,a.kt)("inlineCode",{parentName:"p"},"ncli network list"))),(0,a.kt)("p",null,"But if you need to connect to a different environment, or modify some configuration being used, please feel free to export any of the following environment variables in your shell to modify how the ",(0,a.kt)("inlineCode",{parentName:"p"},"ncli")," works."),(0,a.kt)("h2",{id:"cli-global-parameters"},"CLI global parameters"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"ncli")," allows to pass different parameters depending on the command you want to run. But there are some that available across the whole application:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"--help")," - If given the CLI will parse information about how to use the ",(0,a.kt)("inlineCode",{parentName:"li"},"ncli")," or a specific command"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"--version")," - If given the CLI will print the application version and will finish"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"--verbose")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"-v")," - It allows to run the ",(0,a.kt)("inlineCode",{parentName:"li"},"ncli")," in debug mode printing more information about what is going on"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"--network")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"-n")," - It allows to specify to what network you want to connect (",(0,a.kt)("inlineCode",{parentName:"li"},"geth-localnet"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"mumbai"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"defiMumbai"),", etc). If you want to see the full list of pre-configured environments please run ",(0,a.kt)("inlineCode",{parentName:"li"},"ncli network list")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"--acount")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"-a")," - If given, the ",(0,a.kt)("inlineCode",{parentName:"li"},"ncli")," will try to use that specific ",(0,a.kt)("inlineCode",{parentName:"li"},"address")," of the possible derived accounts from your ",(0,a.kt)("inlineCode",{parentName:"li"},"SEED_WORDS"),". If not given the ",(0,a.kt)("inlineCode",{parentName:"li"},"ncli")," will try to load the first account derived (derivation path 0)."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"--json")," - If this flag is provided the ",(0,a.kt)("inlineCode",{parentName:"li"},"ncli")," will print all the output in JSON format. This facilitates integrating the ",(0,a.kt)("inlineCode",{parentName:"li"},"ncli")," with another application.")),(0,a.kt)("h2",{id:"account-environment-variables"},"Account Environment variables"),(0,a.kt)("p",null,"The following list of variables are related to the account you use to connect to Nevermined"),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"By default, the ",(0,a.kt)("inlineCode",{parentName:"p"},"ncli")," always try to use a ",(0,a.kt)("inlineCode",{parentName:"p"},"SEED_WORDS")," first and if this is not given will try to use a key file.")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"SEED_WORDS")," - Your seed phrase representing your account. With this seed phrase can be derived your different wallets."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"KEYFILE_PATH")," - If the ",(0,a.kt)("inlineCode",{parentName:"li"},"SEED_WORDS")," are not provided, the ",(0,a.kt)("inlineCode",{parentName:"li"},"ncli")," will try to use a local key file to load your account. This variable should include the path to that key file."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"KEYFILE_PASSWORD")," - If you are using a key file, this variable will be used to get the password of that key file")),(0,a.kt)("admonition",{type:"warning"},(0,a.kt)("p",{parentName:"admonition"},"Remember to keep safe all your private information related to your account like seed phrases, private keys, key files and password. ",(0,a.kt)("strong",{parentName:"p"},"NEVER")," share this files with people you don't know and trust.")),(0,a.kt)("h2",{id:"connecting-to-different-environments"},"Connecting to different environments"),(0,a.kt)("p",null,"Nevermined is a framework for building digital ecosystems that can be deployed or configured in different ways. Because of that Nevermined is used to deliver multiple use cases installed in different networks. There are list of pre-defined networks/environments provided by the ",(0,a.kt)("inlineCode",{parentName:"p"},"ncli"),". You can get the list of them running:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"ncli network list\n")),(0,a.kt)("p",null,"This will return a list of all the existing environments grouped by ",(0,a.kt)("strong",{parentName:"p"},"name"),".\nIf you want to connect to any of them, we just need to configure your ",(0,a.kt)("inlineCode",{parentName:"p"},"WEB3_PROVIDER_URL"),' environmnet variable (using the "Node Uri" printed our using your own Infura or similar provider):'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"export WEB3_PROVIDER_URL=https://rpc-mumbai.matic.today\n")),(0,a.kt)("p",null," Now you can use the parameter ",(0,a.kt)("inlineCode",{parentName:"p"},"--network")," in the ",(0,a.kt)("inlineCode",{parentName:"p"},"ncli")," commands or export the ",(0,a.kt)("inlineCode",{parentName:"p"},"NETWORK")," environment variable to allow to connect and use any of these environments:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"ncli --network defiMumbai network status\n")),(0,a.kt)("h2",{id:"network-environment-variables"},"Network Environment variables"),(0,a.kt)("p",null,"The following list of variables are related to the configuration of the Nevermined environment and how you interact with them:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"NETWORK")," - Allows to uses one of the existing pre-configured Nevermined networks. Example: ",(0,a.kt)("inlineCode",{parentName:"li"},"geth-localnet"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"mumbai"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"matic"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"goerli"),". You can see the full list of networks supported running ",(0,a.kt)("inlineCode",{parentName:"li"},"ncli network list")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"WEB3_PROVIDER_URL")," - JSON-RPC server. It could be an Infura or Alchemy url too. Example: ",(0,a.kt)("inlineCode",{parentName:"li"},"http://localhost:8545")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"TOKEN_ADDRESS")," - The ERC20 token address to use for the transactions. If not given or if is ",(0,a.kt)("inlineCode",{parentName:"li"},"0x0000000000000000000000000000000000000000")," the payments will be made in the network native token (ETH, Matic, ..)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"NVM_NODE_URL")," - The url of the Nevermined Node to use. If not given the default url is: ",(0,a.kt)("inlineCode",{parentName:"li"},"http://localhost:8030")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"MARKETPLACE_API_URL")," - The url of the marketplace api to use. If not given the default url is: ",(0,a.kt)("inlineCode",{parentName:"li"},"http://localhost:3100")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"FAUCET_URL")," - The url of the faucet to use. If not given the default url is: ",(0,a.kt)("inlineCode",{parentName:"li"},"http://localhost:3001")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"IPFS_GATEWAY")," - The url of the IPFS gateway used to upload/download contents. By default is ",(0,a.kt)("inlineCode",{parentName:"li"},"https://ipfs.infura.io:5001")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"NODE_ADDRESS")," - The public address of the Nevermined Node. If not given the default address is: ",(0,a.kt)("inlineCode",{parentName:"li"},"0x068ed00cf0441e4829d9784fcbe7b9e26d4bd8d0")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"GAS_MULTIPLIER")," - For networks with some congestion, this parameter can help to increase the gas spent and speed up the transactions. If not given the default is ",(0,a.kt)("inlineCode",{parentName:"li"},"0"))),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Finding a decent ",(0,a.kt)("inlineCode",{parentName:"p"},"WEB3_PROVIDER_URL")," is some times difficult. We recommend to open an Infura or Alchemy account to have a better experience.")))}c.isMDXComponent=!0}}]);