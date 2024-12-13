"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2850],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>u});var n=a(67294);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,s=function(e,t){if(null==e)return{};var a,n,s={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,s=e.mdxType,r=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=c(a),u=s,f=p["".concat(l,".").concat(u)]||p[u]||h[u]||r;return a?n.createElement(f,i(i({ref:t},d),{},{components:a})):n.createElement(f,i({ref:t},d))}));function u(e,t){var a=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var r=a.length,i=new Array(r);i[0]=p;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:s,i[1]=o;for(var c=2;c<r;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},97232:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var n=a(87462),s=(a(67294),a(3905));const r={sidebar_position:9,description:"Data transfer proofs"},i="Data transfer proofs",o={unversionedId:"architecture/specs/Spec-DTP",id:"architecture/specs/Spec-DTP",title:"Data transfer proofs",description:"Data transfer proofs",source:"@site/docs/architecture/specs/Spec-DTP.md",sourceDirName:"architecture/specs",slug:"/architecture/specs/Spec-DTP",permalink:"/docs/architecture/specs/Spec-DTP",draft:!1,tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9,description:"Data transfer proofs"},sidebar:"tutorialSidebar",previous:{title:"Decentralized Data Provenance",permalink:"/docs/architecture/specs/Spec-PROVENANCE"},next:{title:"Marketplace API",permalink:"/docs/architecture/specs/Spec-MKT"}},l={},c=[{value:"Motivation",id:"motivation",level:2},{value:"Main ideas",id:"main-ideas",level:3},{value:"Actors and Technical Components",id:"actors-and-technical-components",level:2},{value:"Flows",id:"flows",level:2},{value:"Publishing Assets",id:"publishing-assets",level:3},{value:"Access Service agreement",id:"access-service-agreement",level:3},{value:"Accessing from node",id:"accessing-from-node",level:3},{value:"NFT Sales with access agreement",id:"nft-sales-with-access-agreement",level:3}],d={toc:c};function h(e){let{components:t,...r}=e;return(0,s.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"data-transfer-proofs"},"Data transfer proofs"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-text"},"shortname:      KEYTRANSFER\nname:           Data transfer proofs\ntype:           Standard\nstatus:         Valid\nversion:        0.1\neditor:         Sami M\xe4kel\xe4 <sami@nevermined.io>\ncontributors:   Aitor Argomaniz <aitor@nevermined.io>\n")),(0,s.kt)("p",null,"This SPEC describes an addition to ",(0,s.kt)("a",{parentName:"p",href:"https://docs.nevermined.io/docs/architecture/specs/Spec-ACCESS"},"ACCESS SPEC"),", introducing new flows with improved guarantees about data transfer.\nThis enables using public file storage for encrypted assets and data."),(0,s.kt)("h2",{id:"motivation"},"Motivation"),(0,s.kt)("p",null,"Nevermined manages access control over digital assets. The core of the protocol is to authenticate and authorize Asset Consumers to get access to assets created and registered into an ecosystem by an Asset Publisher.\nWhen this access control needs to be implemented on top of storage solutions with some authorization mechanism (like Amazon S3 or similar) it's easy. The Nevermined node ensures that only authorized users can get access.\nBut when you want to use a storage solution without any access control capabilities (like in IPFS or Filecoin), it's more complicated. Whoever has access to the URL can get access to the file, bypassing any access control mechanism that Nevermined provides."),(0,s.kt)("p",null,"In this kind of scenario, the only way to protect this content is to encrypt it and only allow decryption when the user meets certain conditions. This SPEC is about the defition of the Nevermined solution, which allows to build robust and scalable access control on top of publicly available data."),(0,s.kt)("h3",{id:"main-ideas"},"Main ideas"),(0,s.kt)("p",null,"If the unencrypted asset is described by its hash, there are at least two use cases for being able to prove that the access to the asset with given hash is transferred:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"A third party might have reviewed the data and can confirm its properties. Additionally it will show that each recipient gets the same data."),(0,s.kt)("li",{parentName:"ul"},"If compute attestation is available, for it to work both participants need access to data.")),(0,s.kt)("p",null,"To save resources, instead of showing that all the data is transferred, we assume that there is publicly available encrypted data and only the symmetric key will be transferred (the hash of symmetric key is known by all participants). This does not impact the above use cases:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"The third party can instead validate the combination of the key and encrypted data."),(0,s.kt)("li",{parentName:"ul"},"The compute attestation will use the encrypted data hash and the key instead of plain data hash as starting point. Note that with interactive proofs it would be enough for the sender to send the decrypted key signed with their ECDSA or similar key. An advantage is that the keys can be used multiple times when using snarks.")),(0,s.kt)("h2",{id:"actors-and-technical-components"},"Actors and Technical Components"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"PUBLISHERS - Provide access to assets and/or services"),(0,s.kt)("li",{parentName:"ul"},"CONSUMERS - Want to get access to assets and/or services"),(0,s.kt)("li",{parentName:"ul"},"PROVIDER - When the publisher is not 100% 'online', they can delegate some responsibilities to a provider for making data available on behalf of the publisher")),(0,s.kt)("h2",{id:"flows"},"Flows"),(0,s.kt)("h3",{id:"publishing-assets"},"Publishing Assets"),(0,s.kt)("p",null,"To set up the asset metadata:"),(0,s.kt)("p",null,"The first file represents the key and ",(0,s.kt)("inlineCode",{parentName:"p"},"url")," attribute, containing the plain text key (probably have to change).\nThese metadata are encrypted so they won't show up publicly when querying the node."),(0,s.kt)("p",null,"The public parts that have to be added to ",(0,s.kt)("inlineCode",{parentName:"p"},"additionalInformation")," are"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"poseidonHash"),": Poseidon hash of the key."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"providerKey.x")," and ",(0,s.kt)("inlineCode",{parentName:"li"},"providerKey.y"),": The Babyjubjub public key of the Provider.")),(0,s.kt)("p",null,"When the asset files are encrypted, the DDO will include under ",(0,s.kt)("inlineCode",{parentName:"p"},"main")," the attribute ",(0,s.kt)("inlineCode",{parentName:"p"},"encryption")," with the possible values of:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"dtp")," - It means the file/s are encrypted via Data Transfer Proofs"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"none")," - The files are not encrypted. This is the default behavior if the parameter is not defined")),(0,s.kt)("h3",{id:"access-service-agreement"},"Access Service agreement"),(0,s.kt)("p",null,"For the access service agreement, the following data are needed:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Address of Provider and Consumer."),(0,s.kt)("li",{parentName:"ul"},"Asset ID."),(0,s.kt)("li",{parentName:"ul"},"Poseidon hash of the data."),(0,s.kt)("li",{parentName:"ul"},"Babyjubjub keys of the Provider and Consumer."),(0,s.kt)("li",{parentName:"ul"},"Payment information.")),(0,s.kt)("p",null,"Before entering into the agreement, the Consumer should already have downloaded the publicly available encrypted data."),(0,s.kt)("p",null,"Other parts of the flow are the same as a normal access flow, but the final execution of the transfer on-chain is different."),(0,s.kt)("p",null,"The Provider first has to compute a shared secret using ECDH from his private key and the Consumer's public key. This secret is used to encrypt the key using MiMC. The encrypted key is then sent onchain with the SNARK proof of correctness."),(0,s.kt)("p",null,"Similarly, the Consumer first has to compute a shared secret using ECDH from his private key and the Provider's public key. The encrypted key is read from chain and then decrypted using MiMC. The hash of the result will be the same as was given beforehand."),(0,s.kt)("p",null,"Here is the complete flow including the different actors:"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Data Transfer Proofs Deal Flow",src:a(88760).Z,width:"960",height:"540"})),(0,s.kt)("p",null,"The flow below describes how to manage a dispute resolution, in case there's an issue."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Data Transfer Proofs Deal Flow",src:a(89630).Z,width:"960",height:"540"})),(0,s.kt)("h3",{id:"accessing-from-node"},"Accessing from node"),(0,s.kt)("p",null,"In this scenario, the node acts as a PROVIDER. This is useful when the PUBLISHER doesn't want to be on-line running a service for responding to CONSUMER requests.\nThis means the PUBLISHER delegates the ability of releasing the decryption key to the CONSUMER when the conditions are fulfilled to the PROVIDER."),(0,s.kt)("p",null,"Accessing documents using the node mostly works the same way as in a normal flow, but the Consumer has to send his Babyjubjub public key too. The data must be checked so that the node won't send invalid proofs to the net (it's possible to get the key from the calldata of the fulfill method if they have the corresponding key).\nAdditionally we can check that the Eth-address corresponds to the Babyjubjub public key. This isn't absolutely necessary, but is needed if we want the node to return the data transfer key (or perhaps the data as plain text)."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Data Transfer Proofs Deal Flow",src:a(72197).Z,width:"960",height:"540"})),(0,s.kt)("h3",{id:"nft-sales-with-access-agreement"},"NFT Sales with access agreement"),(0,s.kt)("p",null,"If an NFT is used for accessing an asset, it is safest to grant access when making the NFT sale. In this case, the access is granted when\nthe payment is made. The NFT Sales with access agreement is the same as normal NFT sales flow, but there is an additional condition for granting\nthe access."),(0,s.kt)("p",null,"To handle this flow with node, ",(0,s.kt)("inlineCode",{parentName:"p"},"nft-sales-proof")," endpoint has to be used instead of ",(0,s.kt)("inlineCode",{parentName:"p"},"nft-sales"),". The ",(0,s.kt)("inlineCode",{parentName:"p"},"nft-sales")," endpoint can be used to make sales,\nbut then access has to be granted with another agreement."))}h.isMDXComponent=!0},88760:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/data-transfer-proof-deal-flow-e4f10af09cd5ef0ec8ef84dea9a0ddbe.png"},89630:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/data-transfer-proof-dispute-resolution-438c46f17042e963584e811f0b61bcc2.png"},72197:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/data-transfer-proof-gateway-uploader-c2770e5abe786a9fdf5168c71bbe8737.png"}}]);