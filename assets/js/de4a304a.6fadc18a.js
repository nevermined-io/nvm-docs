"use strict";(self.webpackChunknvm_docs=self.webpackChunknvm_docs||[]).push([[4070],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),u=i,h=d["".concat(s,".").concat(u)]||d[u]||m[u]||o;return n?a.createElement(h,r(r({ref:t},p),{},{components:n})):a.createElement(h,r({ref:t},p))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var c=2;c<o;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},71450:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=n(87462),i=(n(67294),n(3905));const o={sidebar_position:8,description:"Nevermined Building Blocks"},r="Building Blocks",l={unversionedId:"architecture/building-blocks",id:"architecture/building-blocks",title:"Building Blocks",description:"Nevermined Building Blocks",source:"@site/docs/architecture/building-blocks.md",sourceDirName:"architecture",slug:"/architecture/building-blocks",permalink:"/docs/architecture/building-blocks",draft:!1,editUrl:"https://github.com/nevermined-io/docs/tree/main/docs/architecture/building-blocks.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8,description:"Nevermined Building Blocks"},sidebar:"tutorialSidebar",previous:{title:"Nevermind Specs Examples",permalink:"/docs/architecture/specs/examples/"},next:{title:"Smart Contracts",permalink:"/docs/category/smart-contracts-1"}},s={},c=[{value:"Smart Contracts",id:"smart-contracts",level:2},{value:"Decentralized Autonomous Organization framework (DAOs framework)",id:"decentralized-autonomous-organization-framework-daos-framework",level:2},{value:"Marketplace API",id:"marketplace-api",level:2},{value:"Gateway",id:"gateway",level:3},{value:"Compute API",id:"compute-api",level:3},{value:"Software Development Kits (SDK&#39;s)",id:"software-development-kits-sdks",level:3},{value:"Command Line Interface (CLI) tool",id:"command-line-interface-cli-tool",level:3},{value:"Operational",id:"operational",level:2},{value:"Contract Tools",id:"contract-tools",level:3},{value:"Development and Integration",id:"development-and-integration",level:3},{value:"Multisig Wallet",id:"multisig-wallet",level:4},{value:"Control Center",id:"control-center",level:3}],p={toc:c};function m(e){let{components:t,...o}=e;return(0,i.kt)("wrapper",(0,a.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"building-blocks"},"Building Blocks"),(0,i.kt)("p",null,"Nevermined is a digital ecosystems builder where different entities can share and monetize\ntheir data and make an efficient and secure usage of it even with untrusted parties."),(0,i.kt)("p",null,"Nevermined packages, automate and augment multiple independent open and private\nsoftware components providing a fully functional data ecosystem adapted to the\nrequirements of the enterprises."),(0,i.kt)("p",null,"The complete technical solution includes the following components:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Nevermined components",src:n(32426).Z,width:"960",height:"540"})),(0,i.kt)("h2",{id:"smart-contracts"},"Smart Contracts"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/contracts/"},"Nevermined Smart Contracts"),"\nprovide the core of the Data Ecosystem. Using an Ethereum network and\nimplemented in Solidity, the Smart Contracts provide the following\nfunctionality:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"DID Registry")," - Nevermined uses W3C Decentralized Identifiers (DID) to identify\nand register assets in the platform.\nThe DID Registry allows the registering and resolving capabilities of assets\nacross multiple Metadata providers.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"NFT Contracts")," - Allowing the management of ERC-1155 and ERC-721 NFTs")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Service Execution Agreements (SEAs)")," - The core engine of the platform. They\nallow to define on-chain condition pipelines enabling to the users to define\ncomplex use cases. The SEAs orchestrate the execution of the Data Access and\nData Computation use cases of Nevermined.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Conditions")," - Small modules that can be plugged into the SEAs allowing to add\nvalidations logic")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Contract Templates")," - Pre-defined contract templates implementing different user\nflows. ")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Governance")," - Enabling the live configuration and governance of a Nevermined\ndeployment")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"ERC20 Token")," - Utility token used within the platform allowing to build all the\npayment mechanisms used across the system.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Dispenser")," - Contract that allows to dispense token under request")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Libraries")," - Utility libraries used across the contracts"))),(0,i.kt)("p",null,"All the previous contracts are ",(0,i.kt)("strong",{parentName:"p"},"Open Source")," software and provide the core of the\nNevermined network."),(0,i.kt)("p",null,"In addition to those, Nevermined provides some extensions of the contracts with\nextended functionalities:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Group and individual whitelisting conditions - Enterprise users typically\nmanage their corporate identity using Active Directory solutions or similar.\nIn those platforms exist the mapping between the user identity and the groups\nwhere those users are part of. The advanced whitelisting conditions allow to\nmap complex identity systems with the Smart Contracts logic allowing to\nprovide access control mechanisms on-chain."),(0,i.kt)("li",{parentName:"ul"},"Interface for external Tokens - It allows to plug in the system an external\nERC20 Token avoiding to use the Nevermined ERC20 token."),(0,i.kt)("li",{parentName:"ul"},"Additional SEAs Templates - The additional Service Execution Templates provide\na richer set of use cases to be used in the platform."),(0,i.kt)("li",{parentName:"ul"},"Improved SEA - Allowing to have faster agreements and simpler negotiations")),(0,i.kt)("h2",{id:"decentralized-autonomous-organization-framework-daos-framework"},"Decentralized Autonomous Organization framework (DAOs framework)"),(0,i.kt)("p",null,"The control of the Smart Contracts (deployment, upgrade) is typically a\nresponsibility of the Governance committee of the Digital Ecosystem.\nThe team responsible for the definition, deployment and maintenance of the whole\nsystem."),(0,i.kt)("p",null," A typical user of the ecosystem doesn\u2019t need to know anything about the\nunderlying Smart Contracts or Blockchain. All the business logic is\nencapsulated in the client libraries so typically there is no direct\nintegration between the users and the Smart Contracts.  "),(0,i.kt)("p",null,"Nevermined provides a ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/governance-contracts"},"DAOs contracts framework"),"\nthat allows the governance of a digital ecosystem."),(0,i.kt)("h2",{id:"marketplace-api"},"Marketplace API"),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/marketplace-api"},"Nevermined Marketplace API"),"\nis an Open Source micro-service that allows to store Assets metadata in an\noff-chain repository. It provides a plugins system allowing to persist the\nMetadata in ElasticSearch. The Marketplace API exposes the functionality\nfor searching metadata using multiple filters and parameters."),(0,i.kt)("p",null,"The Marketplace API is typically the backend used for Data Marketplaces or Data\nCatalogs for storing all the Metadata of a specific domain related to a\nMarketplace or Catalog. It also provide the management of typical capabilities\nyou can find in a Marketplace (user profiles, bookmarks, etc)."),(0,i.kt)("p",null,"Nevermined provides the package and automation of the micro-service allowing an\neasy integration and deployment in cloud providers and Kubernetes clusters."),(0,i.kt)("h3",{id:"gateway"},"Gateway"),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/gateway"},"Nevermined Gateway")," is an\nOpen Source micro-service in the Nevermined ecosystem. The Gateway is the\ntechnical component executed by Data/Compute Providers allowing them to provide\nextended data services (e.g. storage and compute). The Nevermined Gateway, as\npart of the Publisher ecosystem, includes the credentials to interact with the\ninfrastructure (initially cloud, but could be on-premise)."),(0,i.kt)("p",null,"The Gateway allows also the encryption and decryption of content via:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"RSA"),(0,i.kt)("li",{parentName:"ul"},"ECDSA"),(0,i.kt)("li",{parentName:"ul"},"Parity Secret Store")),(0,i.kt)("p",null,"Nevermined provides the package and automation of the micro-service allowing an\neasy integration and deployment in cloud providers and Kubernetes clusters."),(0,i.kt)("h3",{id:"compute-api"},"Compute API"),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/compute-api"},"Nevermined Compute API"),"\nis an Open Source micro-service in the Nevermined ecosystem. It\u2019s a component\nin charge of orchestrating the execution of compute jobs in the premises of\nthe Data/Compute Providers."),(0,i.kt)("p",null," In Nevermined the Data/Compute Providers can publish services saying they offer\ncompute capabilities to the network on top of their data under some conditions\nfor a given price. The Compute API is in charge of, after all the\nverifications made by the Gateway, to manage all the infrastructure to move\nthe algorithm where the data is and track the execution of these ephemeral\nenvironments."),(0,i.kt)("p",null,"The Compute API is a generic service exposing a REST API that can plugs\ndifferent compute backends. At this point in time the Compute API integrates\n2 different backends:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Kubernetes backend")," - It allows the orchestration of Kubernetes clusters\nfor setting up compute workflows in cloud or on-premise environments.  "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Federated Learning backend")," - It manages the execution of FL jobs in\ndifferent federated environments. It starts the coordinator and an aggregator\ntasks doing the management of the participants as part of a federated job and\nthe secure aggregation of the trained models.")),(0,i.kt)("p",null,"Nevermined provides the package and automation of the micro-service allowing an easy integration and deployment in cloud providers and Kubernetes clusters."),(0,i.kt)("h3",{id:"software-development-kits-sdks"},"Software Development Kits (SDK's)"),(0,i.kt)("p",null,"SDK's are the software libraries encapsulating the Nevermined business logic. They are used to interact with all the\ncomponents & APIs of the system.\nNevermined provides 3 different Open Source implementation of SDK's allowing the integration and implementation of\ncomplex use cases on top of the Nevermined Data Ecosystems."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/nevermined-io/sdk-js"},"Nevermined SDK JS")," - JavaScript version of the Nevermined SDK to be\nintegrated with front-end applications."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/nevermined-io/sdk-py"},"Nevermined SDK PY")," - Python version of the Nevermined SDK to be\nintegrated with back-end applications. The primary users are data scientists.")),(0,i.kt)("p",null,"The libraries are packaged and delivered in the typical formats for each language allowing easy integration:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@nevermined-io/sdk-js"},"NPM Nevermined SDK JS")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://pypi.org/project/nevermined-sdk-py/"},"NPM Nevermined SDK PY"))),(0,i.kt)("h3",{id:"command-line-interface-cli-tool"},"Command Line Interface (CLI) tool"),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/cli"},"Nevermined CLI")," tool enables to connect to the Nevermined Data Ecosystem\nand interact with it using the command line interface. It orchestrates all the underlaying components allowing to:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Publish assets"),(0,i.kt)("li",{parentName:"ul"},"Minting NFTs"),(0,i.kt)("li",{parentName:"ul"},"Get access to assets"),(0,i.kt)("li",{parentName:"ul"},"Search and discovery"),(0,i.kt)("li",{parentName:"ul"},"Running remote compute jobs"),(0,i.kt)("li",{parentName:"ul"},"Checking the state of Service Agreements"),(0,i.kt)("li",{parentName:"ul"},"Review Nevermined deployments"),(0,i.kt)("li",{parentName:"ul"},"Manage accounts/wallets"),(0,i.kt)("li",{parentName:"ul"},"Some additional functionalities")),(0,i.kt)("h2",{id:"operational"},"Operational"),(0,i.kt)("p",null,"Are the Nevermined tools (not Open Source) allowing to automate, integrate and\noperate the rest of the components of the stack. The main tools available are:"),(0,i.kt)("h3",{id:"contract-tools"},"Contract Tools"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/contract-tools"},"Nevermined Contract Tools"),".\nThe Nevermined Zeppelin OS contract management framework. Deploying and\nupgrading Smart Contracts in multiple environments is not an easy thing."),(0,i.kt)("p",null,"The Nevermined Contract Tools allow to deploy and upgrade smart contracts across\nmultiple networks (production or testnet, public or private) mitigating the\nrisk loose the control of the Smart Contracts or leave them in a non-functional\nway."),(0,i.kt)("h3",{id:"development-and-integration"},"Development and Integration"),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/tools"},"Nevermined Tools")," allows to\nexecute all the components included in the stack in a local environment.\nNevermined Tools make use of all the containers of the components and\norchestrate the execution of them having a fully functional solution using the\nsame software that you can find in a production environment."),(0,i.kt)("p",null,"This approach allows to:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Develop and integrate functionalities with a lower risk of issues when you\nmove to a staging or production environment"),(0,i.kt)("li",{parentName:"ul"},"Automate the integration tests in the CI environments having fully functional\nnetworks used for testing"),(0,i.kt)("li",{parentName:"ul"},"Connect to remote blockchain networks from your local environment")),(0,i.kt)("h4",{id:"multisig-wallet"},"Multisig Wallet"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/multisigwallet"},"Nevermined Multisig Wallet"),"\nhelps during the token governance process. The purpose of multisig wallets is to\nincrease security by requiring multiple parties to agree on transactions before\nexecution. Transactions can be executed only when confirmed by a predefined\nnumber of owners."),(0,i.kt)("h3",{id:"control-center"},"Control Center"),(0,i.kt)("p",null,"The Nevermined Control Center allows the monitoring of Nevermined deployments in different\nnetworks. It allows to control:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The execution of the Service Agreements"),(0,i.kt)("li",{parentName:"ul"},"Assets registered"),(0,i.kt)("li",{parentName:"ul"},"Token Payments"),(0,i.kt)("li",{parentName:"ul"},"Compute use cases"),(0,i.kt)("li",{parentName:"ul"},"Blocks, Events and Transactions of the network")),(0,i.kt)("p",null,"The monitoring tool exposes the dashboards for an easy understanding of what's\ngoing on in the network."))}m.isMDXComponent=!0},32426:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/components_architecture-02bc31b5488623c1056dba680bc161a5.png"}}]);