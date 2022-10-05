(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2551],{80344:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>q,contentTitle:()=>U,default:()=>S,frontMatter:()=>b,metadata:()=>f,toc:()=>E});var a=n(87462),r=n(67294),i=n(3905),s=n(91262),o=n(41426),l=n(76798),u=n(82169);const c=(0,l.CY)("query-assets",{"query-assets":"query-assets_RLPG","query-assets__container":"query-assets__container_V8wZ","query-assets__item":"query-assets__item_KaeN"}),d=e=>e?parseInt(e,10):e,m=e=>{let{assetsModule:t}=e;const[n,a]=(0,r.useState)([]);return r.createElement(r.Fragment,null,r.createElement(l.h1,null,r.createElement(l.i,{label:"Search by name: (try with Aave)",onChange:e=>(async e=>{if(e.length<3)return void a([]);const n=await t.query({query:{query_string:{query:`*${e}*`,fields:["service.attributes.main.name"]}}});a(n.results||[])})(e.target.value)})),n.slice(0,3).map((e=>r.createElement(l.AH,{key:e.id,className:c("item")},r.createElement(l.AH,null,r.createElement(l.II,null,"Asset name: "),r.createElement(l.II,null,e.service[0].attributes.main.name)),r.createElement(l.AH,null,r.createElement(l.II,null,"Asset id: "),r.createElement(l.II,null,e.id)),r.createElement(l.AH,null,r.createElement(l.II,null,"Creator id: "),r.createElement(l.II,null,e.proof.creator))))))},p=e=>{let{assetsModule:t}=e;const[n,a]=(0,r.useState)([]),[i,s]=(0,r.useState)(""),o=[{label:"Categories:",value:""},{label:"Lending",value:"ProtocolType:Lending"},{label:"Ethereum",value:"Blockchain:Ethereum"},{label:"Liquidations",value:"EventType:Liquidations"}];return r.createElement(r.Fragment,null,r.createElement(l.h1,null,r.createElement(l.iU,{label:"Search by category: (try with Aave)",value:i,options:o.map((e=>e.label)),onChange:e=>(async e=>{var n;const r=null==(n=o.find((t=>t.label===e)))?void 0:n.value;if(s(e),!r)return void a([]);const i=await t.query({query:{match:{"service.attributes.additionalInformation.categories":r}}});a(i.results||[])})(e)})),n.slice(0,3).map((e=>r.createElement(l.AH,{key:e.id,className:c("item")},r.createElement(l.AH,null,r.createElement(l.II,null,"Asset name: "),r.createElement(l.II,null,e.service[0].attributes.main.name)),r.createElement(l.AH,null,r.createElement(l.II,null,"Asset id: "),r.createElement(l.II,null,e.id)),r.createElement(l.AH,null,r.createElement(l.II,null,"Creator id: "),r.createElement(l.II,null,e.proof.creator))))))},g=e=>{let{assetsModule:t}=e;const[n,a]=(0,r.useState)([]),[i,s]=(0,r.useState)(0),[o,u]=(0,r.useState)(100),[m,p]=(0,r.useState)(""),[g,y]=(0,r.useState)("");(0,r.useEffect)((()=>{(m||g)&&setTimeout((()=>{p(""),y("")}),3e3)}),[m,g]);return r.createElement(r.Fragment,null,r.createElement(l.h1,null,r.createElement(l.II,null,"Set the price range:"),r.createElement(l.i,{label:"gte: ",value:i,type:"number",onChange:e=>s(d(e.target.value)),inputError:m}),r.createElement(l.i,{label:"lte: ",value:o,type:"number",onChange:e=>u(d(e.target.value)),inputError:g}),r.createElement(l.wg,{title:"Search",type:"secondary",onClick:async()=>{if(!i&&0!==i||!o&&0!==o)return p(i?"":"gte input is required"),y(o?"":"lte input is required"),void a([]);if(i>=o)return p("gte input cannot be greater than lte input"),void a([]);if(i<0)return p("gte input cannot be less than 0"),void a([]);const e=await t.query({query:{range:{"service.attributes.main.price":{gte:i,lte:o}}}});a(e.results||[])}},"Search")),n.slice(0,3).map((e=>r.createElement(l.AH,{key:e.id,className:c("item")},r.createElement(l.AH,null,r.createElement(l.II,null,"Asset name: "),r.createElement(l.II,null,e.service[0].attributes.main.name)),r.createElement(l.AH,null,r.createElement(l.II,null,"Asset id: "),r.createElement(l.II,null,e.id)),r.createElement(l.AH,null,r.createElement(l.II,null,"Creator id: "),r.createElement(l.II,null,e.proof.creator)),r.createElement(l.AH,null,r.createElement(l.II,null,"Price: "),r.createElement(l.II,null,e.service[0].attributes.main.price))))))},y=e=>{let{assetsModule:t}=e;const[n,a]=(0,r.useState)([]),[i,s]=(0,r.useState)(""),[o,u]=(0,r.useState)("desc"),[m,p]=(0,r.useState)(1),[g,y]=(0,r.useState)(100),[h,v]=(0,r.useState)(""),[b,U]=(0,r.useState)(""),[f,q]=(0,r.useState)("");(0,r.useEffect)((()=>{(h||b||f)&&setTimeout((()=>{v(""),U(""),q("")}),3e3)}),[h,b,f]);const E=(e,t)=>t<=0?`${e} input needs to be greater than 0`:`${e} input is required`;return r.createElement(r.Fragment,null,r.createElement(l.h1,null,r.createElement(l.i,{label:"Search by name: (try with Aave)",inputError:h,onChange:e=>s(e.target.value)}),r.createElement(l.i,{label:"Page:",type:"number",value:m,inputError:b,onChange:e=>p(d(e.target.value))}),r.createElement(l.i,{label:"Page size:",value:g,type:"number",inputError:f,onChange:e=>y(d(e.target.value))}),r.createElement(l.iU,{label:"Short by publish date:",value:o,options:["asc","desc"],onChange:e=>u(e)}),r.createElement(l.wg,{title:"Search",type:"secondary",onClick:async()=>{if(!m||!g||!i)return v(i?"":"name input is required"),U(!m||m<=0?E("page",m):""),q(!g||g<=0?E("size",g):""),void a([]);const e=await t.query({query:{query_string:{query:`*${i}*`,fields:["service.attributes.main.name"]}},offset:g,page:m,sort:{created:o}});a(e.results||[])}},"Search")),n.map((e=>r.createElement(l.AH,{key:e.id,className:c("item")},r.createElement(l.AH,null,r.createElement(l.II,null,"Asset name: "),r.createElement(l.II,null,e.service[0].attributes.main.name)),r.createElement(l.AH,null,r.createElement(l.II,null,"Asset id: "),r.createElement(l.II,null,e.id)),r.createElement(l.AH,null,r.createElement(l.II,null,"Creator id: "),r.createElement(l.II,null,e.proof.creator))))))},h=e=>{const{assets:t,isLoadingSDK:n}=o.Catalog.useNevermined();return r.createElement("div",{className:c("container")},!n&&r.createElement(r.Fragment,null,e.name&&r.createElement(m,{assetsModule:t}),e.additionalInformation&&r.createElement(p,{assetsModule:t}),e.priceRange&&r.createElement(g,{assetsModule:t}),e.filters&&r.createElement(y,{assetsModule:t})))},v=e=>{const t={web3Provider:"undefined"!=typeof window?window.ethereum:new u.r,gatewayUri:"https://defi.v2.gateway.mumbai.nevermined.rocks",faucetUri:"https://faucet.rinkeby.nevermined.rocks",verbose:!0,gatewayAddress:"0x5838B5512cF9f12FE9f2beccB20eb47211F9B0bc",graphHttpUri:"https://api.thegraph.com/subgraphs/name/nevermined-io/common",marketplaceAuthToken:o.AuthToken.fetchMarketplaceApiTokenFromLocalStorage().token,marketplaceUri:"https://defi.v2.marketplace-api.mumbai.nevermined.rocks",artifactsFolder:`${location.protocol}//${location.host}/contracts`};return r.createElement(o.Catalog.NeverminedProvider,{config:t,verbose:!0},r.createElement(h,{name:e.name,additionalInformation:e.additionalInformation,priceRange:e.priceRange,filters:e.filters}))},b={sidebar_position:4,description:"What information is available in Nevermined, and how to find it"},U="How to query assets with Catalog",f={unversionedId:"tutorials/query-assets-catalog",id:"tutorials/query-assets-catalog",title:"How to query assets with Catalog",description:"What information is available in Nevermined, and how to find it",source:"@site/docs/tutorials/query-assets-catalog.md",sourceDirName:"tutorials",slug:"/tutorials/query-assets-catalog",permalink:"/docs/tutorials/query-assets-catalog",draft:!1,editUrl:"https://github.com/nevermined-io/docs/tree/main/docs/tutorials/query-assets-catalog.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,description:"What information is available in Nevermined, and how to find it"},sidebar:"tutorialSidebar",previous:{title:"How to create and consume your first assets in a React application integrated with Nevermined",permalink:"/docs/tutorials/assets"},next:{title:"Searching information in Nevermined",permalink:"/docs/tutorials/searching-information"}},q={},E=[{value:"Search by asset name",id:"search-by-asset-name",level:2},{value:"Code",id:"code",level:3},{value:"Demo",id:"demo",level:3},{value:"Search by additional information",id:"search-by-additional-information",level:2},{value:"Code",id:"code-1",level:3},{value:"Demo",id:"demo-1",level:3},{value:"Search by price range",id:"search-by-price-range",level:2},{value:"Code",id:"code-2",level:3},{value:"Demo",id:"demo-2",level:3},{value:"Sorting and paginating",id:"sorting-and-paginating",level:2},{value:"Code",id:"code-3",level:3},{value:"Demo",id:"demo-3",level:3}],k={toc:E};function S(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"how-to-query-assets-with-catalog"},"How to query assets with Catalog"),(0,i.kt)("p",null,"With Catalog is possible to search specific assets by using the ",(0,i.kt)("a",{parentName:"p",href:"/docs/catalog/core/API/interfaces/AssetsModule#query"},(0,i.kt)("inlineCode",{parentName:"a"},"query"))," method from ",(0,i.kt)("a",{parentName:"p",href:"/docs/catalog/core/API/interfaces/AssetsModule"},(0,i.kt)("inlineCode",{parentName:"a"},"AssetsModule")),". Here there are some examples to show how to use it"),(0,i.kt)("h2",{id:"search-by-asset-name"},"Search by asset name"),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"../architecture/specs/Spec-METADATA#main-attributes"},"main metadata attributes")," (like name, author, description, etc) are under the ",(0,i.kt)("inlineCode",{parentName:"p"},"service.attributes.main")," object in the DDO/Metadata object. So for searching all the assets with a certain name you can write a component something like this:"),(0,i.kt)("h3",{id:"code"},"Code"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},'const QuerySearchByName = (): => {\n  const { assets } = Catalog.useNevermined();\n  const [ ddos, setDdos ] = useState<DDO[]>([]);\n\n  const onSearchByName = async(value: string) => {\n    if(value.length < 3) {\n      return;\n    }\n\n    const response = await assets.query({\n      query: {\n        "query_string": {\n          query: `*${value}*`,\n          fields: ["service.attributes.main.name"]\n        }\n      },\n    });\n\n    setDdos(response.results || []);\n    \n  };\n\n  return (\n    <>\n      <UiForm>\n        <UiFormInput \n          label=\'Search by name: (try with Aave) \'\n          onChange={(e) => onSearchByName(e.target.value)}/>\n      </UiForm>\n\n      {ddos.map(ddo =>\n        <UiLayout key={ddo.id}>\n          <UiLayout>\n            <UiText>Asset name: </UiText>\n            <UiText>{ddo.service[0].attributes.main.name }</UiText>\n          </UiLayout>\n          <UiLayout>\n            <UiText>Asset id: </UiText>\n            <UiText>{ddo.id}</UiText>\n          </UiLayout>\n          <UiLayout>\n            <UiText>Creator id: </UiText>\n            <UiText>{ ddo.proof.creator }</UiText>\n          </UiLayout>\n        </UiLayout>\n      )}\n    </>\n  )\n}\n')),(0,i.kt)("h3",{id:"demo"},"Demo"),(0,i.kt)(s.Z,{fallback:(0,i.kt)("div",null,"Loading search assets by name..."),mdxType:"BrowserOnly"},(()=>(0,i.kt)(v,{name:!0,mdxType:"QueryAssets"}))),(0,i.kt)("h2",{id:"search-by-additional-information"},"Search by additional information"),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"/docs/architecture/specs/Spec-METADATA#additional-attributes"},"Additional Information")," section is an entry into the DDO/Metadata document where users can specify a free range of attributes. They can be domain specific, and the marketplace can be used to search accross them. Things like ",(0,i.kt)("inlineCode",{parentName:"p"},"categories"),":"),(0,i.kt)("h3",{id:"code-1"},"Code"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"const QuerySearchByAdditionalInfo = () => {\n  const { assets } = Catalog.useNevermined();\n  const [ ddos, setDdos ] = useState<DDO[]>([]);\n  const [category, setCategory] = useState('');\n\n  const options = [{\n    label: 'Categories:',\n    value: ''\n\n  }, {\n    label: 'Lending',\n    value: 'ProtocolType:Lending',\n  }, {\n    label: 'Ethereum',\n    value: 'Blockchain:Ethereum',\n  }, {\n    label: 'Liquidations',\n    value: 'EventType:Liquidations',\n  }];\n\n  const onSearchByCategory = async(value: string) => {\n    const categoryChoosen = options.find(o => o.label === value)?.value;\n    setCategory(value);\n\n    if(!categoryChoosen) {\n      setDdos([]);\n      return;\n    }\n\n    const response = await assets.query({\n      query: {\n        match: {\n          \"service.attributes.additionalInformation.categories\": categoryChoosen\n        }\n      },\n    });\n\n    setDdos(response.results || []);\n  };\n\n  return (\n    <>\n      <UiForm>\n        <UiFormSelect\n          label='Search by category: (try with Aave)'\n          value={category}\n          options={options.map(o => o.label)}\n          onChange={(e) => onSearchByCategory(e as string)}/>\n      </UiForm>\n\n      {ddos.slice(0,3).map(ddo =>\n        <UiLayout key={ddo.id}>\n          <UiLayout>\n            <UiText>Asset name: </UiText>\n            <UiText>{ddo.service[0].attributes.main.name }</UiText>\n          </UiLayout>\n          <UiLayout>\n            <UiText>Asset id: </UiText>\n            <UiText>{ddo.id}</UiText>\n          </UiLayout>\n          <UiLayout>\n            <UiText>Creator id: </UiText>\n            <UiText>{ ddo.proof.creator }</UiText>\n          </UiLayout>\n        </UiLayout>\n      )}\n    </>\n  )\n};\n")),(0,i.kt)("h3",{id:"demo-1"},"Demo"),(0,i.kt)(s.Z,{fallback:(0,i.kt)("div",null,"Loading search assets by additional information..."),mdxType:"BrowserOnly"},(()=>(0,i.kt)(v,{additionalInformation:!0,mdxType:"QueryAssets"}))),(0,i.kt)("h2",{id:"search-by-price-range"},"Search by price range"),(0,i.kt)("p",null,"The price is an attribute that is included in each of the services exposed in an asset. It is included as part of the service.attributes.main object. So to run a search using a range of prices could be something like this:"),(0,i.kt)("h3",{id:"code-2"},"Code"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"const QuerySearchByPriceRange = () => {\n  const { assets } = Catalog.useNevermined();\n  const [ ddos, setDdos ] = useState<DDO[]>([]);\n  const [ gte, setGte ] = useState('');\n  const [ lte, setLte ] = useState('');\n  const [ gteRequired, setGteRequired ] = useState('');\n  const [ lteRequired, setLteRequired ] = useState('');\n\n  useEffect(() => {\n    if(gteRequired || lteRequired) {\n      setTimeout(() => {\n        setGteRequired('');\n        setLteRequired('');\n      }, 3000);\n    }\n  }, [gteRequired, lteRequired]);\n\n  const onSearchByPriceRange = async() => {\n    if((!gte && gte !==0 ) || (!lte && lte !==0 )) {\n      setGteRequired(!gte ? 'gte input is required' : '');\n      setLteRequired(!lte ? 'lte input is required' : '');\n      setDdos([]);\n\n      return;\n    }\n\n    if(gte >= lte) {\n      setGteRequired('gte input cannot be greater than lte input');\n      setDdos([]);\n\n      return;\n    }\n\n    if(gte < 0) {\n      setGteRequired('gte input cannot be less than 0');\n      setDdos([]);\n\n      return;\n    } \n\n    const response = await assetsModule.query({\n      query: {\n        range: {\n          \"service.attributes.main.price\": {\n            gte,\n            lte\n          }\n        }\n      },\n    });\n\n    setDdos(response.results || []);\n  };\n\n  const getValue = (value: string) => {\n    if(value) {\n      return parseInt(value, 10);\n    }\n\n    return value as undefined;\n  };\n\n  return (\n    <>\n      <UiForm>\n        <UiText>Set the price range:</UiText>\n        <UiFormInput \n          label='gte: '\n          value={gte}\n          type='number'\n          onChange={(e) => setGte(e.target.value)}\n          inputError={gteRequired}/>\n        <UiFormInput \n          label='lte: '\n          value={lte}\n          type='number'\n          onChange={(e) => setLte(e.target.value)}\n          inputError={lteRequired}/>\n        \n        <UiButton title='Search' type='secondary' onClick={onSearchByPriceRange}>Search</UiButton>\n      </UiForm>\n\n      {ddos.slice(0,3).map(ddo =>\n        <UiLayout key={ddo.id}>\n          <UiLayout>\n            <UiText>Asset name: </UiText>\n            <UiText>{ddo.service[0].attributes.main.name }</UiText>\n          </UiLayout>\n          <UiLayout>\n            <UiText>Asset id: </UiText>\n            <UiText>{ddo.id}</UiText>\n          </UiLayout>\n          <UiLayout>\n            <UiText>Creator id: </UiText>\n            <UiText>{ ddo.proof.creator }</UiText>\n          </UiLayout>\n          <UiLayout>\n            <UiText>Price: </UiText>\n            <UiText>{ddo.service[0].attributes.main.price }</UiText>\n          </UiLayout>\n        </UiLayout>\n      )}\n    </>\n  )\n}\n")),(0,i.kt)("h3",{id:"demo-2"},"Demo"),(0,i.kt)(s.Z,{fallback:(0,i.kt)("div",null,"Loading search assets by price range..."),mdxType:"BrowserOnly"},(()=>(0,i.kt)(v,{priceRange:!0,mdxType:"QueryAssets"}))),(0,i.kt)("h2",{id:"sorting-and-paginating"},"Sorting and paginating"),(0,i.kt)("p",null,"All the search queries can include sorting and pagination attributes:"),(0,i.kt)("h3",{id:"code-3"},"Code"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"const QuerySearchByFilters = () => {\n  const { assets } = Catalog.useNevermined();\n  const [ ddos, setDdos ] = useState<DDO[]>([]);\n  const [ name, setName ] = useState('');\n  const [ short, setShort] = useState<'asc'|'desc'>('desc');\n  const [ page, setPage ] = useState(1);\n  const [ size, setSize ] = useState(100);\n  const [ nameRequired, setNameRequired ] = useState('');\n  const [ pageRequired, setPageRequired ] = useState('');\n  const [ sizeRequired, setSizeRequired ] = useState('');\n\n  useEffect(() => {\n    if(nameRequired || pageRequired || sizeRequired) {\n      setTimeout(() => {\n        setNameRequired('');\n        setPageRequired('');\n        setSizeRequired('');\n      }, 3000);\n    }\n  }, [nameRequired, pageRequired, sizeRequired]);\n\n  const setMessage = (name: string, value: number) => {\n    return value <= 0 ? `${name} input needs to be greater than 0` : `${name} input is required`\n  };\n\n  const onSearchByFilters = async() => {\n    if(!page || !size || !name) {\n      setNameRequired(!name ? 'name input is required' : '');\n      setPageRequired(!page || page <= 0 ? setMessage('page', page): '');\n      setSizeRequired(!size || size <= 0 ? setMessage('size', size): '');\n      setDdos([]);\n\n      return;\n    }\n\n    const response = await assets.query({\n      query: {\n        \"query_string\": {\n          query: `*${name}*`,\n          fields: [\"service.attributes.main.name\"]\n        },\n      },\n      offset: size,\n      page,\n      sort: {\n        created: short\n      }\n    });\n\n    setDdos(response.results || []);\n  };\n\n  const getValue = (value: string) => {\n    if(value) {\n      return parseInt(value, 10);\n    }\n\n    return value as undefined;\n  };\n\n  return (\n    <>\n      <UiForm>\n        <UiFormInput \n          label='Search by name: (try with Aave)'\n          inputError={nameRequired}\n          onChange={(e) => setName(e.target.value)}/>\n        <UiFormInput \n          label='Page:'\n          type='number'\n          value={page}\n          inputError={pageRequired}\n          onChange={(e) => setPage(getValue(e.target.value))}/>\n        <UiFormInput \n          label='Page size:'\n          value={size}\n          type='number'\n          inputError={sizeRequired}\n          onChange={(e) => setSize(getValue(e.target.value))}/>\n        <UiFormSelect\n          label='Short by publish date:'\n          value={short}\n          options={['asc', 'desc']}\n          onChange={(e) => setShort(e)}\n        />\n        <UiButton title='Search' type='secondary' onClick={onSearchByFilters}>Search</UiButton>\n      </UiForm>\n\n      {ddos.map(ddo =>\n        <UiLayout key={ddo.id}>\n          <UiLayout>\n            <UiText>Asset name: </UiText>\n            <UiText>{ddo.service[0].attributes.main.name }</UiText>\n          </UiLayout>\n          <UiLayout>\n            <UiText>Asset id: </UiText>\n            <UiText>{ddo.id}</UiText>\n          </UiLayout>\n          <UiLayout>\n            <UiText>Creator id: </UiText>\n            <UiText>{ ddo.proof.creator }</UiText>\n          </UiLayout>\n        </UiLayout>\n      )}\n    </>\n  )\n};\n")),(0,i.kt)("h3",{id:"demo-3"},"Demo"),(0,i.kt)(s.Z,{fallback:(0,i.kt)("div",null,"Loading search assets by filters..."),mdxType:"BrowserOnly"},(()=>(0,i.kt)(v,{filters:!0,mdxType:"QueryAssets"}))))}S.isMDXComponent=!0},88677:()=>{},62808:()=>{},9114:()=>{},74487:()=>{},46601:()=>{},89214:()=>{},71922:()=>{},2363:()=>{},96419:()=>{},56353:()=>{},69386:()=>{},31616:()=>{},69862:()=>{},40964:()=>{}}]);