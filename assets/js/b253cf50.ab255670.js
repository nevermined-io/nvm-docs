"use strict";(self.webpackChunknvm_docs=self.webpackChunknvm_docs||[]).push([[2701],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,s=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(n),h=i,m=u["".concat(l,".").concat(h)]||u[h]||d[h]||s;return n?a.createElement(m,r(r({ref:t},p),{},{components:n})):a.createElement(m,r({ref:t},p))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var s=n.length,r=new Array(s);r[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,r[1]=o;for(var c=2;c<s;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2084:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return d}});var a=n(7462),i=n(3366),s=(n(7294),n(3905)),r=["components"],o={sidebar_position:3,description:"Non-Fungible Tokens Engine"},l="NFTs Engine",c={unversionedId:"architecture/specs/Spec-NFT",id:"architecture/specs/Spec-NFT",title:"NFTs Engine",description:"Non-Fungible Tokens Engine",source:"@site/docs/architecture/specs/Spec-NFT.md",sourceDirName:"architecture/specs",slug:"/architecture/specs/Spec-NFT",permalink:"/docs/architecture/specs/Spec-NFT",draft:!1,editUrl:"https://github.com/nevermined-io/nvm-docs/tree/main/docs/architecture/specs/Spec-NFT.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,description:"Non-Fungible Tokens Engine"},sidebar:"tutorialSidebar",previous:{title:"Metadata Ontology",permalink:"/docs/architecture/specs/Spec-METADATA"},next:{title:"Decentralized Access Control",permalink:"/docs/architecture/specs/Spec-ACCESS"}},p={},d=[{value:"Motivation",id:"motivation",level:2},{value:"Use Case",id:"use-case",level:2},{value:"Publisher",id:"publisher",level:3},{value:"Consumer",id:"consumer",level:3},{value:"Facilitator",id:"facilitator",level:3},{value:"Concepts",id:"concepts",level:2},{value:"Building Blocks",id:"building-blocks",level:3},{value:"NFT Specs",id:"nft-specs",level:3},{value:"Architecture",id:"architecture",level:2},{value:"NFTs Principles",id:"nfts-principles",level:3},{value:"ERC-721 and ERC-1155",id:"erc-721-and-erc-1155",level:3},{value:"Implementation",id:"implementation",level:3},{value:"Flows",id:"flows",level:3},{value:"Publishing an Asset tokenized via NFTs",id:"publishing-an-asset-tokenized-via-nfts",level:4},{value:"Purchase and usage of a NFT",id:"purchase-and-usage-of-a-nft",level:4},{value:"Templates",id:"templates",level:3},{value:"Template for selling a tokenized asset via NFTs",id:"template-for-selling-a-tokenized-asset-via-nfts",level:4},{value:"Access to contents holding a NFT",id:"access-to-contents-holding-a-nft",level:4},{value:"Template for selling an Asset",id:"template-for-selling-an-asset",level:4},{value:"Using NFTs based on ERC-721 or ERC-1155",id:"using-nfts-based-on-erc-721-or-erc-1155",level:4},{value:"Provenance",id:"provenance",level:3},{value:"Links",id:"links",level:2}],u={toc:d};function h(e){var t=e.components,o=(0,i.Z)(e,r);return(0,s.kt)("wrapper",(0,a.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"nfts-engine"},"NFTs Engine"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"shortname:      NFT\nname:           Non-Fungible Tokens Engine\ntype:           Standard\nstatus:         Draft\nversion:        0.2\neditor:         Aitor Argomaniz <aitor@nevermined.io>\ncontributors:   Rodolphe Marques <rod@nevermined.io>\n")),(0,s.kt)("p",null,"This SPEC introduces Non-Fungible Tokens (NFTs) as part of Nevermined architecture allowing the tokenization of assets,\nsales with secondary market royalties support and exclusive access to NFT holders."),(0,s.kt)("p",null,"This specification and the implementation allow the asset tokenization via ERC-721 and ERC-1155 standards."),(0,s.kt)("h2",{id:"motivation"},"Motivation"),(0,s.kt)("p",null,"With this Specification we want to add to Nevermined the technical capabilities allowing the users to have a platform\nwhere digital and physical assets can be represented and traded between people openly, but keeping security, integrity,\nprovenance and content creator's attribution."),(0,s.kt)("p",null,"With that objective in mind, Nevermined must facilitate the execution of use cases like the following:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Art publishing, exhibition, selling. Secondary market"),(0,s.kt)("li",{parentName:"ul"},"Collection of objects"),(0,s.kt)("li",{parentName:"ul"},"Tokenization of digital and physical assets (real estate, etc.)"),(0,s.kt)("li",{parentName:"ul"},"etc")),(0,s.kt)("p",null,"The intention of this document is to discuss how a fully functional NFT engine can be established in a decentralized\nsystem, to allow the support of complex use cases related with assets tokenization."),(0,s.kt)("p",null,"The main objectives of this SPEC are:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Understand the main use cases we can to implement"),(0,s.kt)("li",{parentName:"ul"},"Understand how assets can be tokenized using NFTs"),(0,s.kt)("li",{parentName:"ul"},"Understand how asset and NFTs sales can be established between creators, owners and consumers"),(0,s.kt)("li",{parentName:"ul"},"Identify how NFTs rely in some other Nevermined building blocks"),(0,s.kt)("li",{parentName:"ul"},"Specify how NFTs associated to assets (DIDs) can be minted and burner"),(0,s.kt)("li",{parentName:"ul"},"Allow the definition of royalties that enable the retribution of original creators in the secondary market"),(0,s.kt)("li",{parentName:"ul"},"Specify how NFT holders can get access to existing services"),(0,s.kt)("li",{parentName:"ul"},"Understand what provenance information needs to be tracked")),(0,s.kt)("h2",{id:"use-case"},"Use Case"),(0,s.kt)("p",null,"The following use case helps to understand the scope of the problem driving the technical implementation to put in\nplace. For this use case we have to take into account the following target users:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Publishers (an artist for example)"),(0,s.kt)("li",{parentName:"ul"},"Consumers (a collector)"),(0,s.kt)("li",{parentName:"ul"},"Facilitators (an art gallery for example)")),(0,s.kt)("h3",{id:"publisher"},"Publisher"),(0,s.kt)("p",null,"As a ",(0,s.kt)("strong",{parentName:"p"},"Publisher"),":"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"I want to register digitally an asset"),(0,s.kt)("li",{parentName:"ul"},"I want to associate some metadata information to the assets I register"),(0,s.kt)("li",{parentName:"ul"},"I want to show my track record as publisher (bio, what I created, what I sold, etc.)"),(0,s.kt)("li",{parentName:"ul"},"I want to sell a digital representation of an asset for some price"),(0,s.kt)("li",{parentName:"ul"},"I want to limit the number of copies of an asset for sale"),(0,s.kt)("li",{parentName:"ul"},"I want to be rewarded via royalties in the secondary market for further sales"),(0,s.kt)("li",{parentName:"ul"},"I want to be able to delegate or loan some of my assets to a ",(0,s.kt)("strong",{parentName:"li"},"Facilitator")," user (gallery, etc.)")),(0,s.kt)("h3",{id:"consumer"},"Consumer"),(0,s.kt)("p",null,"As a ",(0,s.kt)("strong",{parentName:"p"},"Consumer"),":"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"I want to discover relevant assets filtering by multiple parameters"),(0,s.kt)("li",{parentName:"ul"},"I appreciate curated assets avoiding me to waste time searching for high quality"),(0,s.kt)("li",{parentName:"ul"},"I want to see a digital representation of an asset and detailed information of it"),(0,s.kt)("li",{parentName:"ul"},"I want to check the ownership of an asset and full provenance record"),(0,s.kt)("li",{parentName:"ul"},"I want to see how many pieces of an specific assets were created"),(0,s.kt)("li",{parentName:"ul"},"I want to purchase an asset or part of an asset series"),(0,s.kt)("li",{parentName:"ul"},"I want to see and share my list of purchased assets"),(0,s.kt)("li",{parentName:"ul"},"I want to be able the sell any of my purchased assets to others")),(0,s.kt)("h3",{id:"facilitator"},"Facilitator"),(0,s.kt)("p",null,"As a ",(0,s.kt)("strong",{parentName:"p"},"Facilitator"),":"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"I want to explore all the assets existing in a the general market"),(0,s.kt)("li",{parentName:"ul"},"I want to invite publishers to expose in my space"),(0,s.kt)("li",{parentName:"ul"},"I want to to receive exhibition requests in my space and curate the assets and publishers to list"),(0,s.kt)("li",{parentName:"ul"},"I want to negotiate with publishers the conditions (sell commission) for listing in my space"),(0,s.kt)("li",{parentName:"ul"},"I want to maximize my sales online"),(0,s.kt)("li",{parentName:"ul"},"I want to provide my track record curating, selling, collecting and listing assets")),(0,s.kt)("h2",{id:"concepts"},"Concepts"),(0,s.kt)("h3",{id:"building-blocks"},"Building Blocks"),(0,s.kt)("p",null,"Nevermined is based in the following building blocks:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/architecture/specs/Spec-DID"},"Decentralized Identifiers (DID)")," - To identify items across on-chain and off-chain networks"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/architecture/specs/Spec-ACCESS"},"Access Control")," - To control who can do what and under what conditions"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/architecture/specs/Spec-PROVENANCE"},"Provenance")," - To track all the actions associated with every registered asset"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/architecture/specs/Spec-ACCESS#lock-payment-condition"},"Tokenized Payment Gateway")," - To allow direct payment"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/architecture/specs/Spec-DID#integrity"},"Integrity")," - To provide proof that everything is correct"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/architecture/specs/Spec-IDM"},"Identity Management")," - To allow to define fine access control policies")),(0,s.kt)("p",null,"On top of all of that, this Specification augments Nevermined with the support of Non-Fungible Tokens (NFTs).\nThe main intention of this is to allow the tokenization, transfer, mint and burn of any existing asset published in a\nNevermined ecosystem."),(0,s.kt)("p",null,"In Nevermined, any registered asset is a DID registered via the ",(0,s.kt)("inlineCode",{parentName:"p"},"DIDRegistry")," Smart Contract.\nThis contract provides a generic way to represent the creation of a digital asset in a Nevermined ecosystem.\nThis digital asset can be the representation of anything in the real world, a data set in a big data lake, a vaccine\nshipment in a supply chain process, an artwork in a virtual (or physical) gallery or anything else. The ",(0,s.kt)("inlineCode",{parentName:"p"},"DIDRegistry"),"\ntracks that registration in an immutable way, associating this digital asset with the creator of that representation in\na Nevermined ecosystem."),(0,s.kt)("p",null,"This Specification associates directly the standard NFT capabilities to any existing asset registered via the\n",(0,s.kt)("inlineCode",{parentName:"p"},"DIDRegistry"),". It allows without friction the possibility of tokenize via NFTs any existing DID."),(0,s.kt)("h3",{id:"nft-specs"},"NFT Specs"),(0,s.kt)("p",null,"Nowadays the main standard for providing NFTs functionality in Ethereum networks is ERC-721.\nERC-721 standard requires a separate contract to be deployed for each token type or collection. This places a lot of\nredundant bytecode on the Ethereum blockchain and limits certain functionality by the nature of separating each token\ncontract into its own permissioned address. This means high cost, complexity, etc."),(0,s.kt)("p",null,"Additionaly to ERC-721, ERC-1155 standard implements a multi-token factory allowing to register and tokenize multiple\nand independent assets in the same contract instance without multiple deployments. ERC-1155 design permits transferring\nmultiple token types at once, saving on transaction costs.It is also easy to describe and mix multiple fungible or\nnon-fungible token types in a single contract."),(0,s.kt)("p",null,"Nevermined allows the utilization of ERC-721 and ERC-1155 standards for assets tokenization."),(0,s.kt)("h2",{id:"architecture"},"Architecture"),(0,s.kt)("h3",{id:"nfts-principles"},"NFTs Principles"),(0,s.kt)("p",null,"The NFTs engine is based in the following principles:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Every asset has a Decentralized Identifier (aka DID) attached, and every DID as a identifier representing a digital\nentity can have associated multiple NFTs, allowing the tokenization of any kind of digital asset independently of the\nphysical asset behind of it"),(0,s.kt)("li",{parentName:"ul"},"The user registering a DID can decide if he wants to enable or not the tokenization of the asset via NFTs"),(0,s.kt)("li",{parentName:"ul"},"When the tokenization is enabled for a specific asset, the user registering the asset can define a minting cap.\nThis minting cap can not be changed afterward, because modifying the number of existing items of an asset will affect\nthe further value of them for the NFTs holders. If the minting cap is set to zero, it means the DID minting is not\ncapped."),(0,s.kt)("li",{parentName:"ul"},"The user registering an asset can specify the royalties that are rewarding the original creator in the secondary\nmarket. These royalties must be between 0 and 100 percent. The royalties can not be changed after they are\ninitialized. This protects the buyers of a NFT to have to pay for a different commission to the one agreed during the\npurchase of a NFT."),(0,s.kt)("li",{parentName:"ul"},"The payment and transfer of NFTs must always respect the original creators attribution and rewards"),(0,s.kt)("li",{parentName:"ul"},"Users giving or selling NFTs can have a mechanism to facilitate exclusive services to NFT holders")),(0,s.kt)("h3",{id:"erc-721-and-erc-1155"},"ERC-721 and ERC-1155"),(0,s.kt)("p",null,"Different use cases can require the utilization of different NFT standards. Nevermined by default provides a Multi-token\nimplementation based in ERC-1155. That means every asset registered into Nevermined, can be minted by the asset owner\ngenerating certain number of tokens attached to them. Internally, the ",(0,s.kt)("inlineCode",{parentName:"p"},"DIDRegistry")," integrates with this multi-token\nimplementation allowing full assets tokenization without further requirements."),(0,s.kt)("p",null,"In addition to this, for asset owners with already deployed ERC-721 contracts, these external contracts can be\nintegrated as part of the selling and accessing flows allowing the purchase of ERC-721 based NFTs and access to\nexclusive contents for the NFT holders."),(0,s.kt)("h3",{id:"implementation"},"Implementation"),(0,s.kt)("p",null,"From a Smart Contracts point of view, the ",(0,s.kt)("inlineCode",{parentName:"p"},"DIDRegistry")," now extends a new ",(0,s.kt)("inlineCode",{parentName:"p"},"NFTUpgradeable")," smart contract.\nThis new contract implements the ",(0,s.kt)("inlineCode",{parentName:"p"},"ERC-1155")," standard and it's based in OpenZeppelin implementation."),(0,s.kt)("p",null,"With this change, when a new Asset is registered via the DIDRegistry, it can automatically ",(0,s.kt)("inlineCode",{parentName:"p"},"mint"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"burn")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"transfer"),"\nNFTs attached to the Asset. Example:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"\nawait didRegistry.registerMintableDID(\n                didSeed, checksum, [], url, cappedAmount, royalties, constants.activities.GENERATED, '')\nawait didRegistry.mint(did, 5)\nawait didRegistry.burn(did, 1)\nawait didRegistry.balanceOf(someone, did)\n")),(0,s.kt)("p",null,"The ",(0,s.kt)("inlineCode",{parentName:"p"},"registerMintableDID")," is a new method that facilitates a couple new things for users registering assets who want to\nattach a NFT to them:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"They enable the NFT functionality for the asset registered. By default, the assets registered via the ",(0,s.kt)("inlineCode",{parentName:"li"},"registerDID"),"\nmethod do not have the NFTs functionality enabled."),(0,s.kt)("li",{parentName:"ul"},"It setups a minting cap for the asset"),(0,s.kt)("li",{parentName:"ul"},"It specify the percentage of royalties (between 0 and 100) that the original creator of the Asset wants in the\nsecondary market for a further sale.")),(0,s.kt)("p",null,"When a DID is registered via the traditional ",(0,s.kt)("inlineCode",{parentName:"p"},"registerDID")," method, the same functionality can be obtained calling the\n",(0,s.kt)("inlineCode",{parentName:"p"},"enableAndMintDidNft")," method. Example:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"const did = await didRegistry.registerAttribute(didSeed, checksum, [], url)\nawait didRegistry.enableAndMintDidNft(did, 5, 0, true)\n")),(0,s.kt)("h3",{id:"flows"},"Flows"),(0,s.kt)("h4",{id:"publishing-an-asset-tokenized-via-nfts"},"Publishing an Asset tokenized via NFTs"),(0,s.kt)("p",null,"The publishing of an asset (with NFTs associated) involves:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Filling and publishing the asset metadata and price"),(0,s.kt)("li",{parentName:"ul"},"The publisher defines the metadata in a DDO object, the number of NFTs to mint, their price and royalties in the secondary market."),(0,s.kt)("li",{parentName:"ul"},"Association of unique Decentralized Identifiers (DID) and register on-chain"),(0,s.kt)("li",{parentName:"ul"},"The publisher register on-chain via ",(0,s.kt)("inlineCode",{parentName:"li"},"DIDRegistry")," the new asset id (DID)"),(0,s.kt)("li",{parentName:"ul"},"Adding provenance event about content creation"),(0,s.kt)("li",{parentName:"ul"},"The Contracts track the provenance event of a new Asset registered"),(0,s.kt)("li",{parentName:"ul"},"The publisher initialize the NFT setup associated to the Asset"),(0,s.kt)("li",{parentName:"ul"},"Optionally defining the royalties to receive in further sales in the secondary market"),(0,s.kt)("li",{parentName:"ul"},"Optionally define the limited items of the serie. NFT minting for a DID can be capped"),(0,s.kt)("li",{parentName:"ul"},"The contract mint the NFTs associated to the asset (DID) limited serie"),(0,s.kt)("li",{parentName:"ul"},"All the NFTs minted are locked ready to be used in sales")),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Publishing Flow",src:n(7735).Z,width:"960",height:"540"})),(0,s.kt)("h4",{id:"purchase-and-usage-of-a-nft"},"Purchase and usage of a NFT"),(0,s.kt)("p",null,"The purchase of a NFT associated to an asset involves:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"The consumer discover an interesting asset with NFTs attached to it (offchain) via marketplace, catalog, gallery, etc."),(0,s.kt)("li",{parentName:"ul"},"The consumer initialize a service agreement on-chain with the intention of purchase a NFT"),(0,s.kt)("li",{parentName:"ul"},"The consumer lock the funds required to purchase a NFT. In case the NFT is being sold by a user that is not the\noriginal asset creator, the price must include the original creator royalties"),(0,s.kt)("li",{parentName:"ul"},"The owner or a provider can trigger the TransferNFTCondition condition to approve the purchase and make the transfer\nof the NFT"),(0,s.kt)("li",{parentName:"ul"},"Anyone can call the new EscrowPayment condition. It will be in charge of:",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"Distribute the rewards to the publisher or seller"),(0,s.kt)("li",{parentName:"ul"},"Distribute the royalties to the original creator (if is not seller itself)")))),(0,s.kt)("p",null,"Using the existing ",(0,s.kt)("inlineCode",{parentName:"p"},"NFTHolder")," condition it will be possible to the new NFT owner to get access to Nevermined services"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Publishing Flow",src:n(5965).Z,width:"960",height:"540"})),(0,s.kt)("h3",{id:"templates"},"Templates"),(0,s.kt)("p",null,"The Nevermined Service Execution Agreements provide standard scenarios for providing access and trigger remote\ncomputation. To complement those, this Spec detail 3 additional templates to support the following flows:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"NFT Sale. An asset owner tokenized an asset and sell one or many of the NFTs to a different user."),(0,s.kt)("li",{parentName:"ul"},"NFT Access. A NFT holder can get access to exclusive contents for holding that NFT"),(0,s.kt)("li",{parentName:"ul"},"DID Sale. An asset owner wants to sell it totally.")),(0,s.kt)("h4",{id:"template-for-selling-a-tokenized-asset-via-nfts"},"Template for selling a tokenized asset via NFTs"),(0,s.kt)("p",null,"The NFT Sales template supports a scenario where an Asset owner wants to tokenize an asset and sell pieces of it via\nNFTs. Owners buying a new NFT can sell them later to others in a secondary market."),(0,s.kt)("p",null,"Anyone (consumer/provider/publisher) can use this template in order to setup an agreement allowing a NFT owner to\ntransfer the asset ownership after some payment."),(0,s.kt)("p",null,"The template is a composite of 3 basic conditions:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Lock Payment Condition"),(0,s.kt)("li",{parentName:"ul"},"Transfer NFT Condition"),(0,s.kt)("li",{parentName:"ul"},"Escrow Reward Condition")),(0,s.kt)("p",null,"This scenario takes into account royalties for original creators in the secondary market.\nOnce the agreement is created, the consumer after payment can request the transfer of the NFT from the current owner for\na specific DID."),(0,s.kt)("p",null,"The DID Sales template is provided by the ",(0,s.kt)("inlineCode",{parentName:"p"},"NFTSalesTemplate")," Smart Contract."),(0,s.kt)("h4",{id:"access-to-contents-holding-a-nft"},"Access to contents holding a NFT"),(0,s.kt)("p",null,"The NFT Access template is a use case specific template that allows a NFT owner to get access to exclusive contents\nprovided by the original asset creator associated to the NFT. Anyone (consumer/provider/publisher) can use this template\nin order to setup an agreement allowing NFT holders to get access to Nevermined services."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"NFT as Access Token",src:n(3896).Z,width:"960",height:"540"})),(0,s.kt)("p",null,"The template is a composite of 2 basic conditions:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"NFT Holding Condition"),(0,s.kt)("li",{parentName:"ul"},"Access Condition")),(0,s.kt)("p",null,"Once the agreement is created, the consumer can demonstrate he is holding a NFT for a specific DID. If that's the case\nthe Access condition can be fulfilled by the asset owner or provider and all the agreement is fulfilled.\nThis can be used in scenarios where a data or services owner, can allow  users to get access to exclusive services only\nwhen they demonstrate they are holding a specific number of NFTs of a DID."),(0,s.kt)("p",null,"The DID Sales template is provided by the ",(0,s.kt)("inlineCode",{parentName:"p"},"NFTAccessTemplate")," Smart Contract."),(0,s.kt)("h4",{id:"template-for-selling-an-asset"},"Template for selling an Asset"),(0,s.kt)("p",null,"It supports a scenario where an Asset owner can sell that asset to a new Owner.\nIt is important to say the ownership of the asset is transferred to a new owner but there is always a reference on-chain\nabout the original creator of the asset. This ",(0,s.kt)("strong",{parentName:"p"},"original creator can't be changed")," and is used to reward later to this\nuser in the secondary market."),(0,s.kt)("p",null,"Anyone (consumer/provider/publisher) can use this template in order to setup an agreement allowing an Asset owner to\ntransfer the asset ownership after some payment. The template is a composite of 3 basic conditions:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Lock Payment Condition"),(0,s.kt)("li",{parentName:"ul"},"Transfer DID Condition"),(0,s.kt)("li",{parentName:"ul"},"Escrow Payment Condition")),(0,s.kt)("p",null,"This scenario takes into account royalties for original creators in the secondary market. Once the agreement is created,\nthe consumer after payment can request the ownership transfer of an asset from the current owner for a specific DID."),(0,s.kt)("p",null,"The DID Sales template is provided by the ",(0,s.kt)("inlineCode",{parentName:"p"},"DIDSalesTemplate")," Smart Contract."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"DID Sale. An asset owner can put this asset for sale for a price. This not only gives access to the asset, also\ntransfers ownership to the buyer. Further sales reward the creator in the secondary market."),(0,s.kt)("li",{parentName:"ul"},"NFT Sale. An asset owner tokenize an asset using NFTs and sell them to others for a price. Further sales reward the\ncreator in the secondary market."),(0,s.kt)("li",{parentName:"ul"},"NFT access. An asset owner can mint, sell and transfer NFTs associated to a DID. Further NFT holders can get access to\ncontents showing the NFT they hold.")),(0,s.kt)("h4",{id:"using-nfts-based-on-erc-721-or-erc-1155"},"Using NFTs based on ERC-721 or ERC-1155"),(0,s.kt)("p",null,"For the NFT Sales and Access templates, there are different conditions that allow to specify the contract address to use\n(and by extension the NFT implementation). These conditions are:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"TransferNFT"),(0,s.kt)("li",{parentName:"ul"},"NFTHolder")),(0,s.kt)("p",null,"The ",(0,s.kt)("inlineCode",{parentName:"p"},"hashValues")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"fulfill")," methods now require an additional ",(0,s.kt)("inlineCode",{parentName:"p"},"_contractAddress")," parameter. This address is the\naddress of the NFT Vault contract (the Nevermined DIDRegistry implementing ERC-1155, or an external ERC-721 or\nERC-1155)."),(0,s.kt)("p",null,"Nevermined contract provide interfaces for these contracts and 2 different implementations of each for ERC-1155 &\nERC-721. Using these different implementations, the templates can be initialized with addresses using the different\nstandards and keeping at the same time all the logic on top of the contracts equal."),(0,s.kt)("p",null,"Here you can find an example of the ",(0,s.kt)("inlineCode",{parentName:"p"},"transferNFT")," DDO condition:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n          "name": "transferNFT",\n          "timelock": 0,\n          "timeout": 0,\n          "contractName": "TransferNFT721Condition",\n          "functionName": "fulfill",\n          "parameters": [{\n            "name": "_documentId",\n            "type": "bytes32",\n            "value": "f5eaf5a044d71dcdca6eb2a23c6a634c4f97a57dd71c89995f144adad5bb7354"\n          }, {\n            "name": "_receiver",\n            "type": "address",\n            "value": ""\n          }, {\n            "name": "_numberNfts",\n            "type": "uint256",\n            "value": "1"\n          }, {\n            "name": "_conditionId",\n            "type": "bytes32",\n            "value": ""\n          }, {\n            "name": "_contractAddress",\n            "type": "address",\n            "value": "0xf0ff000512fC47ab52aC8e4f90E335a5Fe3dD024"\n          }],\n          "events": [{\n            "name": "Fulfilled",\n            "actorType": "publisher",\n            "handler": {\n              "moduleName": "transferNFT",\n              "functionName": "fulfillEscrowPaymentCondition",\n              "version": "0.1"\n            }\n          }\n')),(0,s.kt)("p",null,"And ",(0,s.kt)("a",{target:"_blank",href:n(7220).Z},"here")," the whole example."),(0,s.kt)("h3",{id:"provenance"},"Provenance"),(0,s.kt)("p",null,"All the actions associated with the usual tokenization flow provided by NFTs register on-chain the relevant provenance\nentries allowing to track all that happened related to an asset."),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"When a new asset is created it registers the provenance entry ",(0,s.kt)("inlineCode",{parentName:"li"},"wasGeneratedBy")),(0,s.kt)("li",{parentName:"ol"},"When the asset owner initialize the asset tokenization via NFTs it raise the ",(0,s.kt)("inlineCode",{parentName:"li"},"used")," provenance entry"),(0,s.kt)("li",{parentName:"ol"},"When the asset owner mint a NFT associated to an asset it raise the ",(0,s.kt)("inlineCode",{parentName:"li"},"used")," provenance entry"),(0,s.kt)("li",{parentName:"ol"},"When the asset owner burn a NFT associated to an asset it raise the ",(0,s.kt)("inlineCode",{parentName:"li"},"used")," provenance entry")),(0,s.kt)("h2",{id:"links"},"Links"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://enjin.io/about/erc-1155"},"The Multi Token Standard")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://eips.ethereum.org/EIPS/eip-721"},"EIP-721: ERC-721 Non-Fungible Token Standard")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://docs.openzeppelin.com/contracts/3.x/erc1155"},"OpenZeppelin ERC1155 Smart Contract implementation")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://docs.openzeppelin.com/contracts/3.x/erc721"},"OpenZeppelin ERC721 Smart Contract implementation"))))}h.isMDXComponent=!0},7220:function(e,t,n){t.Z=n.p+"assets/files/ddo_nft721-03394bd363aff9b4fb4e31412fcf5dde.json"},3896:function(e,t,n){t.Z=n.p+"assets/images/nft_as_access_token-ab452bdd7f56851963b80e621fecdc89.png"},7735:function(e,t,n){t.Z=n.p+"assets/images/nft_publishing_flow-9dd1d0e2956c3eb9c6f2b3fce652b176.png"},5965:function(e,t,n){t.Z=n.p+"assets/images/nft_purchase_flow-a37e87951402897254d021a29e6d2a24.png"}}]);