(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9186],{3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>m,kt:()=>u});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),d=l(n),u=o,b=d["".concat(c,".").concat(u)]||d[u]||p[u]||a;return n?r.createElement(b,i(i({ref:t},m),{},{components:n})):r.createElement(b,i({ref:t},m))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},19633:(e,t,n)=>{"use strict";n.d(t,{Z:()=>f});var r=n(67294),o=n(86010),a=n(53438),i=n(39960),s=n(13919),c=n(95999),l=n(69621);function m(e){let{defaultIcon:t,iconStaticFolderPath:a,iconClassName:i}=e;const[s,c]=(0,r.useState)();return(0,r.useEffect)((()=>{a&&n(2349)(`./${a}`).then((e=>c(e.default)))}),[a]),a&&s?r.createElement("span",{className:"sidebar-item-doc-card__icon-wrapper"},r.createElement("img",{src:s,className:(0,o.Z)("sidebar-item-doc-card__icon",i)})):a?null:r.createElement("span",{className:"sidebar-item-doc-card__icon-wrapper"},t)}function p(e){let{href:t,children:n,className:a}=e;return r.createElement(i.Z,{href:t,className:(0,o.Z)("card",l.Z.cardContainer,a)},n)}function d(e){let{href:t,icon:n,title:a,description:i,className:s}=e;return r.createElement(p,{href:t,className:s},n,r.createElement("h2",{className:(0,o.Z)("sidebar-item-doc-card__title",l.Z.cardTitle),title:a},a),i&&r.createElement("p",{className:(0,o.Z)("sidebar-item-doc-card__description",l.Z.cardDescription),title:i},i))}function u(e){let{item:t}=e;const n=(0,a.Wl)(t);return n?r.createElement(d,{href:n,icon:r.createElement(m,{defaultIcon:"\ud83d\uddc3\ufe0f",iconStaticFolderPath:t.customProps?.iconStaticFolderPath,iconClassName:t.customProps?.iconClassName}),title:t.label,description:(0,c.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length}),className:(0,o.Z)("sidebar-item-doc-card","sidebar-item-doc-card__category",t.customProps?.className)}):null}function b(e){let{item:t}=e;const n=(0,s.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",i=(0,a.xz)(t.docId??void 0);return r.createElement(d,{href:t.href,icon:r.createElement(m,{defaultIcon:n,iconStaticFolderPath:t.customProps?.iconStaticFolderPath,iconClassName:t.customProps?.iconClassName}),title:t.label,description:i?.description,className:(0,o.Z)("sidebar-item-doc-card","sidebar-item-doc-card__link",t.customProps?.className)})}function g(e){let{item:t}=e;switch(t.type){case"link":return r.createElement(b,{item:t});case"category":return r.createElement(u,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function v(e){let{className:t}=e;const n=(0,a.jA)();return r.createElement(f,{items:n.items,className:t})}function f(e){const{items:t,className:n}=e;if(!t)return r.createElement(v,e);const i=(0,a.MN)(t);return r.createElement("section",{className:(0,o.Z)("row","sidebar-item-doc-card__row",n)},i.map(((e,t)=>r.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},r.createElement(g,{item:e})))))}},396:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>m});var r=n(87462),o=(n(67294),n(3905)),a=n(19633);const i={sidebar_position:1,description:"Nevermined Environments"},s="Nevermined Public Environments",c={unversionedId:"environments/index",id:"environments/index",title:"Nevermined Public Environments",description:"Nevermined Environments",source:"@site/docs/environments/index.mdx",sourceDirName:"environments",slug:"/environments/",permalink:"/docs/environments/",draft:!1,editUrl:"https://github.com/nevermined-io/docs/tree/main/docs/environments/index.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,description:"Nevermined Environments"},sidebar:"tutorialSidebar",previous:{title:"Running Nevermined in your local environment",permalink:"/docs/tutorials/running-locally"},next:{title:"Production environments",permalink:"/docs/environments/nvm-prod-envs"}},l={},m=[{value:"Blockchain networks supported",id:"blockchain-networks-supported",level:2},{value:"Production and Testing environments",id:"production-and-testing-environments",level:2},{value:"Versions",id:"versions",level:2},{value:"About the tags",id:"about-the-tags",level:2}],p={toc:m};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"nevermined-public-environments"},"Nevermined Public Environments"),(0,o.kt)("p",null,"Nevermined is available in different networks/environments for users to make use of this\ninfrastructure without the complexity of deploying Smart Contracts or other components of\nthe stack."),(0,o.kt)("p",null,"Existing networks have different characteristics related to the underlying blockchain network being used and whether they are a production or a test environment."),(0,o.kt)("h2",{id:"blockchain-networks-supported"},"Blockchain networks supported"),(0,o.kt)("p",null,"Nevermined Smart Contracts are EVM compatible so they can be deployed on any EVM compatible blockchain. Our main deployment is on ",(0,o.kt)("strong",{parentName:"p"},"Arbitrum")," network but we have deployments on:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Arbitrum")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Polygon")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Gnosis")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Optimism")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Celo"))),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"We are planning to augment the list of supported networks. If you need to use Nevermined on any other network, please let us know ",(0,o.kt)("a",{parentName:"p",href:"https://discord.gg/GZju2qScKq"},"through Discord"),".")),(0,o.kt)("h2",{id:"production-and-testing-environments"},"Production and Testing environments"),(0,o.kt)("p",null,"For each blockchain network we support actively we have Production and Testing deployments. This can help you execute a typical development/testing process and further release into production independently of the blockchain network you use."),(0,o.kt)("h2",{id:"versions"},"Versions"),(0,o.kt)("p",null,"We use ",(0,o.kt)("a",{parentName:"p",href:"https://semver.org/"},"Semantic versioning")," for our Smart Contracts interfaces and Apis. We deploy and mantain multiple versions of the contracts and APIs in these environments for integration with different versions of the stack."),(0,o.kt)("p",null,"Generally we ",(0,o.kt)("strong",{parentName:"p"},"upgrade")," Smart Contracts when we implement ",(0,o.kt)("strong",{parentName:"p"},"patches")," and ",(0,o.kt)("strong",{parentName:"p"},"minor")," changes and deploy a new version of the Smart Contracts when we implement ",(0,o.kt)("strong",{parentName:"p"},"mayor")," changes."),(0,o.kt)("p",null,"This means multiple versions of Smart Contracts for the same network and environment, allowing you to integrate either depending on your development lifecycle."),(0,o.kt)("h2",{id:"about-the-tags"},"About the tags"),(0,o.kt)("p",null,"Tags are different contract deployments for the same network & version. Each tag is independent from the others. Generically we use two different tags:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"public"),": This tag/contracts instane is meant to be used for new integrations, public integrations, etc... It expected to have the latest versions and/or configurations. This is a ",(0,o.kt)("em",{parentName:"p"},"shared")," environment. ",(0,o.kt)("em",{parentName:"p"},"Probably you need to use these environments."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"common"),': This tag/contracts instane is used by more "stable" applications. Each application has its own nevermined stack (',(0,o.kt)("inlineCode",{parentName:"p"},"node")," + ",(0,o.kt)("inlineCode",{parentName:"p"},"markeplace-api"),")."))),(0,o.kt)(a.Z,{mdxType:"DocCardList"}))}d.isMDXComponent=!0},69621:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});const r={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"}},2349:(e,t,n)=>{var r={"./CNAME":[10267,7,267],"./contracts/AaveBorrowCondition.arbitrum-sepolia":[1346,3,1346],"./contracts/AaveBorrowCondition.arbitrum-sepolia.json":[1346,3,1346],"./contracts/AaveCollateralDepositCondition.arbitrum-sepolia":[75282,3,5282],"./contracts/AaveCollateralDepositCondition.arbitrum-sepolia.json":[75282,3,5282],"./contracts/AaveCollateralWithdrawCondition.arbitrum-sepolia":[1833,3,1833],"./contracts/AaveCollateralWithdrawCondition.arbitrum-sepolia.json":[1833,3,1833],"./contracts/AaveCreditTemplate.arbitrum-sepolia":[85923,3,5923],"./contracts/AaveCreditTemplate.arbitrum-sepolia.json":[85923,3,5923],"./contracts/AaveCreditVault.arbitrum-sepolia":[87691,3,7691],"./contracts/AaveCreditVault.arbitrum-sepolia.json":[87691,3,7691],"./contracts/AaveRepayCondition.arbitrum-sepolia":[18921,3,8921],"./contracts/AaveRepayCondition.arbitrum-sepolia.json":[18921,3,8921],"./contracts/AccessCondition.arbitrum-sepolia":[92379,3,2379],"./contracts/AccessCondition.arbitrum-sepolia.json":[92379,3,2379],"./contracts/AccessDLEQCondition.arbitrum-sepolia":[87236,3,7236],"./contracts/AccessDLEQCondition.arbitrum-sepolia.json":[87236,3,7236],"./contracts/AccessDLEQTemplate.arbitrum-sepolia":[29490,3,9490],"./contracts/AccessDLEQTemplate.arbitrum-sepolia.json":[29490,3,9490],"./contracts/AccessProofCondition.arbitrum-sepolia":[70720,3,720],"./contracts/AccessProofCondition.arbitrum-sepolia.json":[70720,3,720],"./contracts/AccessProofTemplate.arbitrum-sepolia":[30274,3,274],"./contracts/AccessProofTemplate.arbitrum-sepolia.json":[30274,3,274],"./contracts/AccessTemplate.arbitrum-sepolia":[5840,3,5840],"./contracts/AccessTemplate.arbitrum-sepolia.json":[5840,3,5840],"./contracts/AgreementStoreManager.arbitrum-sepolia":[79965,3,9965],"./contracts/AgreementStoreManager.arbitrum-sepolia.json":[79965,3,9965],"./contracts/ComputeExecutionCondition.arbitrum-sepolia":[77763,3,7763],"./contracts/ComputeExecutionCondition.arbitrum-sepolia.json":[77763,3,7763],"./contracts/ConditionStoreManager.arbitrum-sepolia":[51872,3,1872],"./contracts/ConditionStoreManager.arbitrum-sepolia.json":[51872,3,1872],"./contracts/DIDRegistry.arbitrum-sepolia":[38626,3,8626],"./contracts/DIDRegistry.arbitrum-sepolia.json":[38626,3,8626],"./contracts/DIDSalesTemplate.arbitrum-sepolia":[51370,3,1370],"./contracts/DIDSalesTemplate.arbitrum-sepolia.json":[51370,3,1370],"./contracts/Dispenser.arbitrum-sepolia":[12359,3,2359],"./contracts/Dispenser.arbitrum-sepolia.json":[12359,3,2359],"./contracts/DistributeNFTCollateralCondition.arbitrum-sepolia":[21705,3,1705],"./contracts/DistributeNFTCollateralCondition.arbitrum-sepolia.json":[21705,3,1705],"./contracts/EscrowComputeExecutionTemplate.arbitrum-sepolia":[64112,3,4112],"./contracts/EscrowComputeExecutionTemplate.arbitrum-sepolia.json":[64112,3,4112],"./contracts/EscrowPaymentCondition.arbitrum-sepolia":[51751,3,1751],"./contracts/EscrowPaymentCondition.arbitrum-sepolia.json":[51751,3,1751],"./contracts/HashLockCondition.arbitrum-sepolia":[1747,3,1747],"./contracts/HashLockCondition.arbitrum-sepolia.json":[1747,3,1747],"./contracts/LockPaymentCondition.arbitrum-sepolia":[73947,3,3947],"./contracts/LockPaymentCondition.arbitrum-sepolia.json":[73947,3,3947],"./contracts/NFT1155SubscriptionUpgradeable.arbitrum-sepolia":[95910,3,2364],"./contracts/NFT1155SubscriptionUpgradeable.arbitrum-sepolia.json":[95910,3,2364],"./contracts/NFT1155Upgradeable.arbitrum-sepolia":[37963,3,7963],"./contracts/NFT1155Upgradeable.arbitrum-sepolia.json":[37963,3,7963],"./contracts/NFT721AccessDLEQTemplate.arbitrum-sepolia":[2905,3,2905],"./contracts/NFT721AccessDLEQTemplate.arbitrum-sepolia.json":[2905,3,2905],"./contracts/NFT721AccessProofTemplate.arbitrum-sepolia":[48457,3,8457],"./contracts/NFT721AccessProofTemplate.arbitrum-sepolia.json":[48457,3,8457],"./contracts/NFT721AccessSwapTemplate.arbitrum-sepolia":[61246,3,1246],"./contracts/NFT721AccessSwapTemplate.arbitrum-sepolia.json":[61246,3,1246],"./contracts/NFT721AccessTemplate.arbitrum-sepolia":[16121,3,6121],"./contracts/NFT721AccessTemplate.arbitrum-sepolia.json":[16121,3,6121],"./contracts/NFT721EscrowPaymentCondition.arbitrum-sepolia":[26823,3,6823],"./contracts/NFT721EscrowPaymentCondition.arbitrum-sepolia.json":[26823,3,6823],"./contracts/NFT721HolderCondition.arbitrum-sepolia":[24894,3,4894],"./contracts/NFT721HolderCondition.arbitrum-sepolia.json":[24894,3,4894],"./contracts/NFT721LockCondition.arbitrum-sepolia":[17235,3,7235],"./contracts/NFT721LockCondition.arbitrum-sepolia.json":[17235,3,7235],"./contracts/NFT721SalesTemplate.arbitrum-sepolia":[54925,3,4925],"./contracts/NFT721SalesTemplate.arbitrum-sepolia.json":[54925,3,4925],"./contracts/NFT721SalesWithAccessTemplate.arbitrum-sepolia":[62116,3,2116],"./contracts/NFT721SalesWithAccessTemplate.arbitrum-sepolia.json":[62116,3,2116],"./contracts/NFT721SalesWithDLEQTemplate.arbitrum-sepolia":[22782,3,2782],"./contracts/NFT721SalesWithDLEQTemplate.arbitrum-sepolia.json":[22782,3,2782],"./contracts/NFT721SubscriptionUpgradeable.arbitrum-sepolia":[23274,3,3274],"./contracts/NFT721SubscriptionUpgradeable.arbitrum-sepolia.json":[23274,3,3274],"./contracts/NFT721Upgradeable.arbitrum-sepolia":[44333,3,4333],"./contracts/NFT721Upgradeable.arbitrum-sepolia.json":[44333,3,4333],"./contracts/NFTAccessCondition.arbitrum-sepolia":[48954,3,8954],"./contracts/NFTAccessCondition.arbitrum-sepolia.json":[48954,3,8954],"./contracts/NFTAccessDLEQTemplate.arbitrum-sepolia":[72448,3,2448],"./contracts/NFTAccessDLEQTemplate.arbitrum-sepolia.json":[72448,3,2448],"./contracts/NFTAccessProofTemplate.arbitrum-sepolia":[12118,3,2118],"./contracts/NFTAccessProofTemplate.arbitrum-sepolia.json":[12118,3,2118],"./contracts/NFTAccessSwapTemplate.arbitrum-sepolia":[61766,3,1766],"./contracts/NFTAccessSwapTemplate.arbitrum-sepolia.json":[61766,3,1766],"./contracts/NFTAccessTemplate.arbitrum-sepolia":[72282,3,2282],"./contracts/NFTAccessTemplate.arbitrum-sepolia.json":[72282,3,2282],"./contracts/NFTEscrowPaymentCondition.arbitrum-sepolia":[32872,3,2872],"./contracts/NFTEscrowPaymentCondition.arbitrum-sepolia.json":[32872,3,2872],"./contracts/NFTHolderCondition.arbitrum-sepolia":[21606,3,1606],"./contracts/NFTHolderCondition.arbitrum-sepolia.json":[21606,3,1606],"./contracts/NFTLockCondition.arbitrum-sepolia":[59504,3,9504],"./contracts/NFTLockCondition.arbitrum-sepolia.json":[59504,3,9504],"./contracts/NFTSalesTemplate.arbitrum-sepolia":[75756,3,9935],"./contracts/NFTSalesTemplate.arbitrum-sepolia.json":[75756,3,9935],"./contracts/NFTSalesWithAccessTemplate.arbitrum-sepolia":[57471,3,7471],"./contracts/NFTSalesWithAccessTemplate.arbitrum-sepolia.json":[57471,3,7471],"./contracts/NFTSalesWithDLEQTemplate.arbitrum-sepolia":[20810,3,810],"./contracts/NFTSalesWithDLEQTemplate.arbitrum-sepolia.json":[20810,3,810],"./contracts/NeverminedConfig.arbitrum-sepolia":[17442,3,7442],"./contracts/NeverminedConfig.arbitrum-sepolia.json":[17442,3,7442],"./contracts/NeverminedToken.arbitrum-sepolia":[28940,3,8940],"./contracts/NeverminedToken.arbitrum-sepolia.json":[28940,3,8940],"./contracts/PlonkVerifier.arbitrum-sepolia":[39144,3,9144],"./contracts/PlonkVerifier.arbitrum-sepolia.json":[39144,3,9144],"./contracts/RewardsDistributor.arbitrum-sepolia":[31114,3,1114],"./contracts/RewardsDistributor.arbitrum-sepolia.json":[31114,3,1114],"./contracts/SignCondition.arbitrum-sepolia":[93650,3,3650],"./contracts/SignCondition.arbitrum-sepolia.json":[93650,3,3650],"./contracts/StandardRoyalties.arbitrum-sepolia":[19825,3,9825],"./contracts/StandardRoyalties.arbitrum-sepolia.json":[19825,3,9825],"./contracts/TemplateStoreManager.arbitrum-sepolia":[94290,3,4290],"./contracts/TemplateStoreManager.arbitrum-sepolia.json":[94290,3,4290],"./contracts/ThresholdCondition.arbitrum-sepolia":[76073,3,6073],"./contracts/ThresholdCondition.arbitrum-sepolia.json":[76073,3,6073],"./contracts/TransferDIDOwnershipCondition.arbitrum-sepolia":[24501,3,4501],"./contracts/TransferDIDOwnershipCondition.arbitrum-sepolia.json":[24501,3,4501],"./contracts/TransferNFT721Condition.arbitrum-sepolia":[12672,3,2672],"./contracts/TransferNFT721Condition.arbitrum-sepolia.json":[12672,3,2672],"./contracts/TransferNFTCondition.arbitrum-sepolia":[77317,3,7317],"./contracts/TransferNFTCondition.arbitrum-sepolia.json":[77317,3,7317],"./contracts/WhitelistingCondition.arbitrum-sepolia":[85793,3,5793],"./contracts/WhitelistingCondition.arbitrum-sepolia.json":[85793,3,5793],"./fonts/Catalogue/Catalogue-Bold.otf":[71631,9,1631],"./fonts/Catalogue/Catalogue-BoldItalic.otf":[16900,9,6900],"./fonts/Catalogue/Catalogue-Book.otf":[31514,9,1514],"./fonts/Catalogue/Catalogue-BookItalic.otf":[91360,9,1360],"./fonts/Catalogue/Catalogue-Demi.otf":[86629,9,6629],"./fonts/Catalogue/Catalogue-DemiItalic.otf":[92076,9,9752],"./fonts/Catalogue/Catalogue-Italic.otf":[63762,9,3762],"./fonts/Catalogue/Catalogue-Light.otf":[85438,9,5438],"./fonts/Catalogue/Catalogue-LightItalic.otf":[93913,9,3913],"./fonts/Catalogue/Catalogue-Medium.otf":[20242,9,242],"./fonts/Catalogue/Catalogue-MediumItalic.otf":[8079,9,8079],"./fonts/Catalogue/Catalogue-Regular.otf":[61327,9,1327],"./fonts/Catalogue/Catalogue-Thin.otf":[85975,9,5975],"./fonts/Catalogue/Catalogue-ThinItalic.otf":[67500,9,7500],"./fonts/PT_Mono/OFL.txt":[8313,9,8313],"./fonts/PT_Mono/PTMono-Regular.ttf":[21706,9,1706],"./img/docusaurus.png":[49676,9,9676],"./img/favicon.ico":[68750,9,8750],"./img/logo.svg":[11735,9,1735],"./img/nevermined/nevermined-logo-symbol-gradient-dark-bg.png":[88240,9,8240],"./img/nevermined/nevermined-symbol-gradient.png":[3128,9,3128],"./img/nevermined/nevermined_logo.svg":[21569,9,1569],"./img/nevermined/nevermined_logo_1.png":[71508,9,1508],"./img/nevermined/nevermined_logo_1.svg":[31218,9,1218],"./img/nevermined/nevermined_logo_250.png":[16406,9,6406],"./img/nvm-logo.png":[99674,9,9674],"./img/undraw_docusaurus_mountain.svg":[13181,9,3181],"./img/undraw_docusaurus_react.svg":[31336,9,1336],"./img/undraw_docusaurus_tree.svg":[96750,9,6750],"./nevermined/analysis.svg":[60616,9,616],"./nevermined/arrow-right.svg":[72253,9,2253],"./nevermined/backgrounds/contact-bg-body.png":[5444,9,5444],"./nevermined/backgrounds/contact-bg-body.webp":[44242,9,4242],"./nevermined/backgrounds/header-bg.png":[76785,9,6785],"./nevermined/backgrounds/header-bg.webp":[81499,9,3316],"./nevermined/backgrounds/header-bg_mobile.png":[56425,9,6425],"./nevermined/backgrounds/header-bg_mobile.webp":[60077,9,77],"./nevermined/backgrounds/home-bg-banner.png":[76744,9,6744],"./nevermined/backgrounds/home-bg-banner.webp":[14880,9,4880],"./nevermined/backgrounds/home-bg-banner_mobile.png":[16536,9,6536],"./nevermined/backgrounds/home-bg-banner_mobile.webp":[35841,9,5841],"./nevermined/backgrounds/home-bg-box.png":[25922,9,5922],"./nevermined/backgrounds/home-bg-products.png":[80517,9,517],"./nevermined/backgrounds/home-bg-products.webp":[43277,9,3277],"./nevermined/backgrounds/home-bg-products_mobile.png":[93816,9,3816],"./nevermined/backgrounds/home-bg-products_mobile.webp":[88574,9,8574],"./nevermined/backgrounds/home-bg.png":[35387,9,5387],"./nevermined/backgrounds/single-bg-body.png":[84341,9,4341],"./nevermined/backgrounds/single-bg-body.webp":[32079,9,2079],"./nevermined/bat/battalion-bg.png":[7674,9,7674],"./nevermined/bat/battalion-logo.png":[49604,9,9604],"./nevermined/breadcrumb-arrow.svg":[3526,9,3526],"./nevermined/burger.svg":[57250,9,7250],"./nevermined/close.svg":[26430,9,6430],"./nevermined/compatibility.svg":[45488,9,5488],"./nevermined/digital-assets-marketplaces.svg":[48648,9,8648],"./nevermined/discord-gray.svg":[77958,9,7958],"./nevermined/discord-round.svg":[95627,9,5627],"./nevermined/discord.svg":[48963,9,8963],"./nevermined/doc-card-assets-tokenization-via-NFTs.svg":[85355,9,5355],"./nevermined/doc-card-connecting-devs-to-infrastructure.svg":[3195,9,3195],"./nevermined/doc-card-data-sharing.svg":[27262,9,7262],"./nevermined/doc-card-introducing-a-standard-model-for-the-web3-process-lifecycle.svg":[51459,9,1459],"./nevermined/documents.svg":[17071,9,7071],"./nevermined/filtering.svg":[44897,9,4897],"./nevermined/github-gray.svg":[82052,9,2052],"./nevermined/github.svg":[75324,9,5324],"./nevermined/integrationDocs.svg":[14640,9,4640],"./nevermined/linkedin.svg":[64339,9,4339],"./nevermined/logo.svg":[50619,9,619],"./nevermined/medium.svg":[81858,9,1858],"./nevermined/neverminedDocs.svg":[34269,9,4269],"./nevermined/planetEclipse.svg":[71247,9,1247],"./nevermined/remote-computation.svg":[40012,9,12],"./nevermined/test/tutorialsDocs.svg":[70645,9,645],"./nevermined/tutorialsDocs.png":[58640,9,8640],"./nevermined/tutorialsDocs.svg":[38338,9,8281],"./nevermined/twitter.svg":[17157,9,7792]};function o(e){if(!n.o(r,e))return Promise.resolve().then((()=>{var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=r[e],o=t[0];return n.e(t[2]).then((()=>n.t(o,16|t[1])))}o.keys=()=>Object.keys(r),o.id=2349,e.exports=o}}]);