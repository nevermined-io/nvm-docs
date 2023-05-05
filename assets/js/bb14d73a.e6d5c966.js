(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9861],{3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>l,kt:()=>g});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=a.createContext({}),m=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},l=function(e){var t=m(e.components);return a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=m(n),g=o,p=u["".concat(c,".").concat(g)]||u[g]||d[g]||i;return n?a.createElement(p,r(r({ref:t},l),{},{components:n})):a.createElement(p,r({ref:t},l))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var m=2;m<i;m++)r[m]=n[m];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},19633:(e,t,n)=>{"use strict";n.d(t,{Z:()=>v});var a=n(67294),o=n(86010),i=n(53438),r=n(39960),s=n(13919),c=n(95999),m=n(69621);function l(e){let{defaultIcon:t,iconStaticFolderPath:i,iconClassName:r}=e;const[s,c]=(0,a.useState)();return(0,a.useEffect)((()=>{i&&n(2349)(`./${i}`).then((e=>c(e.default)))}),[i]),i&&s?a.createElement("span",{className:"sidebar-item-doc-card__icon-wrapper"},a.createElement("img",{src:s,className:(0,o.default)("sidebar-item-doc-card__icon",r)})):i?null:a.createElement("span",{className:"sidebar-item-doc-card__icon-wrapper"},t)}function d(e){let{href:t,children:n,className:i}=e;return a.createElement(r.Z,{href:t,className:(0,o.default)("card",m.Z.cardContainer,i)},n)}function u(e){let{href:t,icon:n,title:i,description:r,className:s}=e;return a.createElement(d,{href:t,className:s},n,a.createElement("h2",{className:(0,o.default)("sidebar-item-doc-card__title",m.Z.cardTitle),title:i},i),r&&a.createElement("p",{className:(0,o.default)("sidebar-item-doc-card__description",m.Z.cardDescription),title:r},r))}function g(e){var t,n,r;let{item:s}=e;const m=(0,i.Wl)(s);return m?a.createElement(u,{href:m,icon:a.createElement(l,{defaultIcon:"\ud83d\uddc3\ufe0f",iconStaticFolderPath:null==(t=s.customProps)?void 0:t.iconStaticFolderPath,iconClassName:null==(n=s.customProps)?void 0:n.iconClassName}),title:s.label,description:(0,c.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:s.items.length}),className:(0,o.default)("sidebar-item-doc-card","sidebar-item-doc-card__category",null==(r=s.customProps)?void 0:r.className)}):null}function p(e){var t,n,r;let{item:c}=e;const m=(0,s.Z)(c.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",d=(0,i.xz)(c.docId??void 0);return a.createElement(u,{href:c.href,icon:a.createElement(l,{defaultIcon:m,iconStaticFolderPath:null==(t=c.customProps)?void 0:t.iconStaticFolderPath,iconClassName:null==(n=c.customProps)?void 0:n.iconClassName}),title:c.label,description:null==d?void 0:d.description,className:(0,o.default)("sidebar-item-doc-card","sidebar-item-doc-card__link",null==(r=c.customProps)?void 0:r.className)})}function b(e){let{item:t}=e;switch(t.type){case"link":return a.createElement(p,{item:t});case"category":return a.createElement(g,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function h(e){let{className:t}=e;const n=(0,i.jA)();return a.createElement(v,{items:n.items,className:t})}function v(e){const{items:t,className:n}=e;if(!t)return a.createElement(h,e);const r=(0,i.MN)(t);return a.createElement("section",{className:(0,o.default)("row","sidebar-item-doc-card__row",n)},r.map(((e,t)=>a.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},a.createElement(b,{item:e})))))}},42787:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>c,toc:()=>l});var a=n(87462),o=(n(67294),n(3905)),i=n(19633);const r={sidebar_position:1,description:"Deep dive in Nevermined core protocol architecture",title:"Overview"},s="Intro to Nevermined Protocol Architecture",c={unversionedId:"architecture/index",id:"architecture/index",title:"Overview",description:"Deep dive in Nevermined core protocol architecture",source:"@site/docs/architecture/index.mdx",sourceDirName:"architecture",slug:"/architecture/",permalink:"/docs/architecture/",draft:!1,editUrl:"https://github.com/nevermined-io/docs/tree/main/docs/architecture/index.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,description:"Deep dive in Nevermined core protocol architecture",title:"Overview"},sidebar:"tutorialSidebar",previous:{title:"Network Fees",permalink:"/docs/environments/network-fees"},next:{title:"What can I do with my assets?",permalink:"/docs/architecture/what-can-i-do"}},m={},l=[{value:"Capabilities",id:"capabilities",level:2},{value:"Digital Ecosystem",id:"digital-ecosystem",level:2},{value:"Everything is about assets",id:"everything-is-about-assets",level:3}],d={toc:l};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"intro-to-nevermined-protocol-architecture"},"Intro to Nevermined Protocol Architecture"),(0,o.kt)("p",null,"Nevermined is a digital ecosystems builder solution that provides the capabilities of\ncreating bespoke networks where different entities can interact around digital assets.\nThis interaction between parties allow data sharing, tokenization and\nmonetization of their digital assets in an efficient and secure way between\nuntrusted parties."),(0,o.kt)("p",null,"Nevermined is the product powered by ",(0,o.kt)("a",{parentName:"p",href:"https://nevermined.io"},"Nevermined AG"),"."),(0,o.kt)("h2",{id:"capabilities"},"Capabilities"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Assets Tokenization via NFTs")," \u2014 content creators can tokenize their digital\nassets and make them available to their community of users allowing selling them,\nexclusive access to NFT holders, secondary market and royalties enforcement"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Data Sharing")," \u2014 enabling the sharing and access of digital assets between\nuntrusted parties in the data ecosystem"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Data In-Situ Computation")," \u2014 allowing the execution of models and algorithms\nwithout moving the data"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Marketplace")," \u2014 the user interfaces gluing all together and facilitating user\ninteractions with the rest of the digital ecosystem"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Data Monetization and Incentives")," \u2014 facilitating the monetization of existing\norganization assets and the different mechanisms to incentivize the users of a\ndigital ecosystem"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Data Governance")," \u2014 making possible to build the agreements that allow to\nhandle an ecosystem with multiple and independent participants\n",(0,o.kt)("strong",{parentName:"li"},"Data Interactivity")," - creating, minting and bridging omnichain digital assets and NFTs\nacross protocols and blockchains to unlock a frictionless user experience, ")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Nevermined: Building Blocks",src:n(37394).Z,width:"1724",height:"969"})),(0,o.kt)("h2",{id:"digital-ecosystem"},"Digital Ecosystem"),(0,o.kt)("p",null,"A digital ecosystem is an environment where different users can interact around\ndigital assets. So Nevermined is built around these digital assets and how they can\nbe used between different parties."),(0,o.kt)("h3",{id:"everything-is-about-assets"},"Everything is about assets"),(0,o.kt)("p",null,"An asset in Nevermined is the representation of a phisical or digital thing. It is\nregistered by the origital creator or a provider. As an abstract concept, an asset\ncan represent a piece of digital art, a dataset, an algorithm or piece of software,\na manufactured good or any other kind of physical or digital entity."),(0,o.kt)("p",null,"An asset in Nevermined is composed by 3 things:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The unique registry of the asset (on-chain) including the Decentralized Identifier\nof the asset (aka ",(0,o.kt)("strong",{parentName:"li"},"DID"),") and the reference to the asset metadata (aka ",(0,o.kt)("strong",{parentName:"li"},"DDO"),")."),(0,o.kt)("li",{parentName:"ul"},"The metadata describing the asset. This includes things like a description of the\nasset, author, creation date, etc. The metadata of the asset can be stored anywhere\n(off-chain in a database or on-chain in IPFS, Filecoin, etc)."),(0,o.kt)("li",{parentName:"ul"},"All the files attached to the asset. They can be of any type, format, size, encrypted\nor not, etc. The files can be stored in the cloud, on-premise, public network, etc.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Asset composition",src:n(8827).Z,width:"1583",height:"765"})),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Nevermined don't store the files attached to an asset. So if you register an asset you\ncan keep all of them wherever you want (in a private or public storage).\nIn Nevermined we just keep the ",(0,o.kt)("strong",{parentName:"p"},"DID")," and some ",(0,o.kt)("strong",{parentName:"p"},"metadata")," to facilitate the discovery\nof the asset.")),(0,o.kt)("p",null,"The main reason of an asset in Nevermined is to ",(0,o.kt)("strong",{parentName:"p"},"offer certain services")," from the\npublishers of that asset to the rest of the world. These services are flexible and\ntypically can be understood as something like the following example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"As a owner of this asset, I want to allow others to download the contents associated\nto it if they pay 1 ETH.\n")),(0,o.kt)("p",null,"The above example is a simple service offered by an asset owner published on Nevermined\nwhere it allows data sharing to anyone paying ",(0,o.kt)("inlineCode",{parentName:"p"},"1 ETH"),". Nevermined allows the registration\nof assets with attached services like that one, and orchestrates all the trading to\nmediate in the delivery of that service in a decentralized and secure way."),(0,o.kt)("p",null,"Nevermined implements this and some other services around digital assets, allowing to\nbuild use cases where content creators and/or publishers can create robust interactions\nwithout having a central entity keeping the assets of the users."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"This last part is important. Nevermined don't store your private files, your credentials\nor own any of the assets you register in any of the networks.")),(0,o.kt)(i.Z,{mdxType:"DocCardList"}))}u.isMDXComponent=!0},69621:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});const a={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"}},8827:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});const a=n.p+"assets/images/asset_composition-d8649aee59d9d95e822e90e3088df49f.png"},37394:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});const a=n.p+"assets/images/nvm_building_blocks-9b8750858169196fea396a3876ce9f62.png"},2349:(e,t,n)=>{var a={"./CNAME":[10267,7,267],"./contracts/AaveBorrowCondition.mumbai":[31178,3,1178],"./contracts/AaveBorrowCondition.mumbai.json":[31178,3,1178],"./contracts/AaveCollateralDepositCondition.mumbai":[88735,3,8735],"./contracts/AaveCollateralDepositCondition.mumbai.json":[88735,3,8735],"./contracts/AaveCollateralWithdrawCondition.mumbai":[90257,3,257],"./contracts/AaveCollateralWithdrawCondition.mumbai.json":[90257,3,257],"./contracts/AaveCreditTemplate.mumbai":[60531,3,531],"./contracts/AaveCreditTemplate.mumbai.json":[60531,3,531],"./contracts/AaveCreditVault.mumbai":[26486,3,6486],"./contracts/AaveCreditVault.mumbai.json":[26486,3,6486],"./contracts/AaveRepayCondition.mumbai":[46581,3,6581],"./contracts/AaveRepayCondition.mumbai.json":[46581,3,6581],"./contracts/AccessCondition.mumbai":[47017,3,7017],"./contracts/AccessCondition.mumbai.json":[47017,3,7017],"./contracts/AccessProofCondition.mumbai":[57140,3,7140],"./contracts/AccessProofCondition.mumbai.json":[57140,3,7140],"./contracts/AccessProofTemplate.mumbai":[20237,3,237],"./contracts/AccessProofTemplate.mumbai.json":[20237,3,237],"./contracts/AccessTemplate.mumbai":[39665,3,9665],"./contracts/AccessTemplate.mumbai.json":[39665,3,9665],"./contracts/AgreementStoreManager.mumbai":[77754,3,7754],"./contracts/AgreementStoreManager.mumbai.json":[77754,3,7754],"./contracts/ComputeExecutionCondition.mumbai":[39661,3,9661],"./contracts/ComputeExecutionCondition.mumbai.json":[39661,3,9661],"./contracts/ConditionStoreManager.mumbai":[68046,3,8046],"./contracts/ConditionStoreManager.mumbai.json":[68046,3,8046],"./contracts/DIDRegistry.mumbai":[15985,3,5985],"./contracts/DIDRegistry.mumbai.json":[15985,3,5985],"./contracts/DIDSalesTemplate.mumbai":[58114,3,8114],"./contracts/DIDSalesTemplate.mumbai.json":[58114,3,8114],"./contracts/Dispenser.mumbai":[16575,3,6575],"./contracts/Dispenser.mumbai.json":[16575,3,6575],"./contracts/DistributeNFTCollateralCondition.mumbai":[39575,3,9575],"./contracts/DistributeNFTCollateralCondition.mumbai.json":[39575,3,9575],"./contracts/EscrowComputeExecutionTemplate.mumbai":[65730,3,5730],"./contracts/EscrowComputeExecutionTemplate.mumbai.json":[65730,3,5730],"./contracts/EscrowPaymentCondition.mumbai":[43601,3,5255],"./contracts/EscrowPaymentCondition.mumbai.json":[43601,3,5255],"./contracts/HashLockCondition.mumbai":[54942,3,4942],"./contracts/HashLockCondition.mumbai.json":[54942,3,4942],"./contracts/LockPaymentCondition.mumbai":[59512,3,9512],"./contracts/LockPaymentCondition.mumbai.json":[59512,3,9512],"./contracts/NFT1155Upgradeable.mumbai":[4391,3,4391],"./contracts/NFT1155Upgradeable.mumbai.json":[4391,3,4391],"./contracts/NFT721AccessProofTemplate.mumbai":[75674,3,5674],"./contracts/NFT721AccessProofTemplate.mumbai.json":[75674,3,5674],"./contracts/NFT721AccessSwapTemplate.mumbai":[449,3,449],"./contracts/NFT721AccessSwapTemplate.mumbai.json":[449,3,449],"./contracts/NFT721AccessTemplate.mumbai":[53108,3,3108],"./contracts/NFT721AccessTemplate.mumbai.json":[53108,3,3108],"./contracts/NFT721EscrowPaymentCondition.mumbai":[13601,3,3601],"./contracts/NFT721EscrowPaymentCondition.mumbai.json":[13601,3,3601],"./contracts/NFT721HolderCondition.mumbai":[11048,3,1048],"./contracts/NFT721HolderCondition.mumbai.json":[11048,3,1048],"./contracts/NFT721LockCondition.mumbai":[83310,3,3310],"./contracts/NFT721LockCondition.mumbai.json":[83310,3,3310],"./contracts/NFT721SalesTemplate.mumbai":[16114,3,6114],"./contracts/NFT721SalesTemplate.mumbai.json":[16114,3,6114],"./contracts/NFT721SalesWithAccessTemplate.mumbai":[8854,3,8854],"./contracts/NFT721SalesWithAccessTemplate.mumbai.json":[8854,3,8854],"./contracts/NFT721Upgradeable.mumbai":[23355,3,3355],"./contracts/NFT721Upgradeable.mumbai.json":[23355,3,3355],"./contracts/NFTAccessCondition.mumbai":[28991,3,8991],"./contracts/NFTAccessCondition.mumbai.json":[28991,3,8991],"./contracts/NFTAccessProofTemplate.mumbai":[30146,3,146],"./contracts/NFTAccessProofTemplate.mumbai.json":[30146,3,146],"./contracts/NFTAccessSwapTemplate.mumbai":[77227,3,7227],"./contracts/NFTAccessSwapTemplate.mumbai.json":[77227,3,7227],"./contracts/NFTAccessTemplate.mumbai":[8456,3,8456],"./contracts/NFTAccessTemplate.mumbai.json":[8456,3,8456],"./contracts/NFTEscrowPaymentCondition.mumbai":[36866,3,6866],"./contracts/NFTEscrowPaymentCondition.mumbai.json":[36866,3,6866],"./contracts/NFTHolderCondition.mumbai":[6813,3,6813],"./contracts/NFTHolderCondition.mumbai.json":[6813,3,6813],"./contracts/NFTLockCondition.mumbai":[84228,3,4228],"./contracts/NFTLockCondition.mumbai.json":[84228,3,4228],"./contracts/NFTSalesTemplate.mumbai":[842,3,842],"./contracts/NFTSalesTemplate.mumbai.json":[842,3,842],"./contracts/NFTSalesWithAccessTemplate.mumbai":[56720,3,6720],"./contracts/NFTSalesWithAccessTemplate.mumbai.json":[56720,3,6720],"./contracts/NeverminedConfig.mumbai":[4284,3,4284],"./contracts/NeverminedConfig.mumbai.json":[4284,3,4284],"./contracts/NeverminedToken.mumbai":[33146,3,3146],"./contracts/NeverminedToken.mumbai.json":[33146,3,3146],"./contracts/PlonkVerifier.mumbai":[21666,3,1666],"./contracts/PlonkVerifier.mumbai.json":[21666,3,1666],"./contracts/RewardsDistributor.mumbai":[51305,3,1305],"./contracts/RewardsDistributor.mumbai.json":[51305,3,1305],"./contracts/SignCondition.mumbai":[73721,3,3721],"./contracts/SignCondition.mumbai.json":[73721,3,3721],"./contracts/StandardRoyalties.mumbai":[3011,3,3011],"./contracts/StandardRoyalties.mumbai.json":[3011,3,3011],"./contracts/TemplateStoreManager.mumbai":[24073,3,4073],"./contracts/TemplateStoreManager.mumbai.json":[24073,3,4073],"./contracts/ThresholdCondition.mumbai":[35365,3,5365],"./contracts/ThresholdCondition.mumbai.json":[35365,3,5365],"./contracts/TransferDIDOwnershipCondition.mumbai":[20821,3,821],"./contracts/TransferDIDOwnershipCondition.mumbai.json":[20821,3,821],"./contracts/TransferNFT721Condition.mumbai":[68603,3,8603],"./contracts/TransferNFT721Condition.mumbai.json":[68603,3,8603],"./contracts/TransferNFTCondition.mumbai":[28070,3,8070],"./contracts/TransferNFTCondition.mumbai.json":[28070,3,8070],"./contracts/WhitelistingCondition.mumbai":[97482,3,7482],"./contracts/WhitelistingCondition.mumbai.json":[97482,3,7482],"./fonts/Catalogue/Catalogue-Bold.otf":[71631,9,1631],"./fonts/Catalogue/Catalogue-BoldItalic.otf":[16900,9,6900],"./fonts/Catalogue/Catalogue-Book.otf":[31514,9,1514],"./fonts/Catalogue/Catalogue-BookItalic.otf":[91360,9,1360],"./fonts/Catalogue/Catalogue-Demi.otf":[86629,9,6629],"./fonts/Catalogue/Catalogue-DemiItalic.otf":[92076,9,9752],"./fonts/Catalogue/Catalogue-Italic.otf":[63762,9,3762],"./fonts/Catalogue/Catalogue-Light.otf":[85438,9,5438],"./fonts/Catalogue/Catalogue-LightItalic.otf":[93913,9,3913],"./fonts/Catalogue/Catalogue-Medium.otf":[20242,9,242],"./fonts/Catalogue/Catalogue-MediumItalic.otf":[8079,9,8079],"./fonts/Catalogue/Catalogue-Regular.otf":[61327,9,1327],"./fonts/Catalogue/Catalogue-Thin.otf":[85975,9,5975],"./fonts/Catalogue/Catalogue-ThinItalic.otf":[67500,9,7500],"./fonts/PT_Mono/OFL.txt":[8313,9,8313],"./fonts/PT_Mono/PTMono-Regular.ttf":[21706,9,1706],"./img/docusaurus.png":[49676,9,9676],"./img/favicon.ico":[68750,9,8750],"./img/logo.svg":[11735,9,1735],"./img/nevermined/nevermined-logo-symbol-gradient-dark-bg.png":[88240,9,8240],"./img/nevermined/nevermined-symbol-gradient.png":[3128,9,3128],"./img/nevermined/nevermined_logo.svg":[21569,9,1569],"./img/nevermined/nevermined_logo_1.png":[71508,9,1508],"./img/nevermined/nevermined_logo_1.svg":[31218,9,1218],"./img/nevermined/nevermined_logo_250.png":[16406,9,6406],"./img/nvm-logo.png":[99674,9,9674],"./img/undraw_docusaurus_mountain.svg":[13181,9,3181],"./img/undraw_docusaurus_react.svg":[31336,9,1336],"./img/undraw_docusaurus_tree.svg":[96750,9,6750],"./nevermined/analysis.svg":[60616,9,616],"./nevermined/arrow-right.svg":[72253,9,2253],"./nevermined/backgrounds/contact-bg-body.png":[5444,9,5444],"./nevermined/backgrounds/contact-bg-body.webp":[44242,9,4242],"./nevermined/backgrounds/header-bg.png":[76785,9,6785],"./nevermined/backgrounds/header-bg.webp":[81499,9,3316],"./nevermined/backgrounds/header-bg_mobile.png":[56425,9,6425],"./nevermined/backgrounds/header-bg_mobile.webp":[60077,9,77],"./nevermined/backgrounds/home-bg-banner.png":[76744,9,6744],"./nevermined/backgrounds/home-bg-banner.webp":[14880,9,4880],"./nevermined/backgrounds/home-bg-banner_mobile.png":[16536,9,6536],"./nevermined/backgrounds/home-bg-banner_mobile.webp":[35841,9,5841],"./nevermined/backgrounds/home-bg-box.png":[25922,9,5922],"./nevermined/backgrounds/home-bg-products.png":[80517,9,517],"./nevermined/backgrounds/home-bg-products.webp":[43277,9,3277],"./nevermined/backgrounds/home-bg-products_mobile.png":[93816,9,3816],"./nevermined/backgrounds/home-bg-products_mobile.webp":[88574,9,8574],"./nevermined/backgrounds/home-bg.png":[35387,9,5387],"./nevermined/backgrounds/single-bg-body.png":[84341,9,4341],"./nevermined/backgrounds/single-bg-body.webp":[32079,9,2079],"./nevermined/bat/battalion-bg.png":[7674,9,7674],"./nevermined/bat/battalion-logo.png":[15302,9,9604],"./nevermined/breadcrumb-arrow.svg":[3526,9,3526],"./nevermined/burger.svg":[57250,9,7250],"./nevermined/close.svg":[26430,9,6430],"./nevermined/compatibility.svg":[45488,9,5488],"./nevermined/digital-assets-marketplaces.svg":[48648,9,8648],"./nevermined/discord-gray.svg":[77958,9,7958],"./nevermined/discord-round.svg":[95627,9,5627],"./nevermined/discord.svg":[48963,9,8963],"./nevermined/doc-card-assets-tokenization-via-NFTs.svg":[85355,9,5355],"./nevermined/doc-card-connecting-devs-to-infrastructure.svg":[3195,9,3195],"./nevermined/doc-card-data-sharing.svg":[27262,9,7262],"./nevermined/doc-card-introducing-a-standard-model-for-the-web3-process-lifecycle.svg":[51459,9,1459],"./nevermined/documents.svg":[17071,9,7071],"./nevermined/filtering.svg":[44897,9,4897],"./nevermined/github-gray.svg":[82052,9,2052],"./nevermined/github.svg":[75324,9,5324],"./nevermined/integrationDocs.svg":[14640,9,4640],"./nevermined/linkedin.svg":[64339,9,4339],"./nevermined/logo.svg":[50619,9,619],"./nevermined/medium.svg":[81858,9,1858],"./nevermined/neverminedDocs.svg":[34269,9,4269],"./nevermined/planetEclipse.svg":[71247,9,1247],"./nevermined/remote-computation.svg":[40012,9,12],"./nevermined/test/tutorialsDocs.svg":[70645,9,645],"./nevermined/tutorialsDocs.png":[58640,9,8640],"./nevermined/tutorialsDocs.svg":[38338,9,8281],"./nevermined/twitter.svg":[17157,9,7792]};function o(e){if(!n.o(a,e))return Promise.resolve().then((()=>{var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=a[e],o=t[0];return n.e(t[2]).then((()=>n.t(o,16|t[1])))}o.keys=()=>Object.keys(a),o.id=2349,e.exports=o}}]);