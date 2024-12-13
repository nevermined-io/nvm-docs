"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2551],{3905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>m});var a=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var u=a.createContext({}),d=function(e){var n=a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},l=function(e){var n=d(e.components);return a.createElement(u.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},p=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,u=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=d(t),m=i,y=p["".concat(u,".").concat(m)]||p[m]||c[m]||r;return t?a.createElement(y,o(o({ref:n},l),{},{components:t})):a.createElement(y,o({ref:n},l))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,o=new Array(r);o[0]=p;var s={};for(var u in n)hasOwnProperty.call(n,u)&&(s[u]=n[u]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var d=2;d<r;d++)o[d]=t[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},22246:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>o,default:()=>y,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var a=t(87462),i=(t(67294),t(3905));const r={sidebar_position:14,description:"What information is available in Nevermined, and how to find it"},o="Searching assets via the SDK",s={unversionedId:"tutorials/query-assets-catalog",id:"tutorials/query-assets-catalog",title:"Searching assets via the SDK",description:"What information is available in Nevermined, and how to find it",source:"@site/docs/tutorials/query-assets-catalog.md",sourceDirName:"tutorials",slug:"/tutorials/query-assets-catalog",permalink:"/docs/tutorials/query-assets-catalog",draft:!1,tags:[],version:"current",sidebarPosition:14,frontMatter:{sidebar_position:14,description:"What information is available in Nevermined, and how to find it"},sidebar:"tutorialSidebar",previous:{title:"Running Nevermined in your local environment",permalink:"/docs/tutorials/running-locally"},next:{title:"Searching information in Data Marketplaces",permalink:"/docs/tutorials/searching-information"}},u={},d=[{value:"Search by asset name",id:"search-by-asset-name",level:2},{value:"Code",id:"code",level:3},{value:"Demo",id:"demo",level:3},{value:"Search by additional information",id:"search-by-additional-information",level:2},{value:"Code",id:"code-1",level:3},{value:"Demo",id:"demo-1",level:3},{value:"Search by price range",id:"search-by-price-range",level:2},{value:"Code",id:"code-2",level:3},{value:"Demo",id:"demo-2",level:3},{value:"Sorting and paginating",id:"sorting-and-paginating",level:2},{value:"Code",id:"code-3",level:3},{value:"Demo",id:"demo-3",level:3},{value:"Sort in big objects",id:"sort-in-big-objects",level:2},{value:"Code",id:"code-4",level:3},{value:"Demo",id:"demo-4",level:3}],l=e=>function(n){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",n)},c=l("BrowserOnly"),p=l("QueryAssets"),m={toc:d};function y(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"searching-assets-via-the-sdk"},"Searching assets via the SDK"),(0,i.kt)("h2",{id:"search-by-asset-name"},"Search by asset name"),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"../architecture/specs/Spec-METADATA#main-attributes"},"main metadata attributes")," (like name, author, description, etc) are under the ",(0,i.kt)("inlineCode",{parentName:"p"},"service.attributes.main")," object in the DDO/Metadata object. So for searching all the assets with a certain name you can write a component something like this:"),(0,i.kt)("h3",{id:"code"},"Code"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"const QuerySearchByName = (): => {\n  const { assets } = Catalog.useNevermined();\n  const [ ddos, setDdos ] = useState<DDO[]>([]);\n\n  const onSearchByName = async(value: string) => {\n    if(value.length < 3) {\n      return;\n    }\n\n    const response = await assets.query({\n      query: {\n        bool: {\n          must: [{\n            nested: {\n              path: ['service'],\n              query: {\n                \"query_string\": {\n                  query: `*${value}*`,\n                  fields: [\"service.attributes.main.name\"]\n                }\n              },\n            }\n          }]\n        }\n      }\n    });\n\n    setDdos(response.results || []);\n    \n  };\n\n  return (\n    <>\n      <UiForm>\n        <UiFormInput \n          label='Search by name: (try with NFT) '\n          onChange={(e) => onSearchByName(e.target.value)}/>\n      </UiForm>\n\n      {ddos.map(ddo =>\n        <UiLayout key={ddo.id}>\n          <UiLayout>\n            <UiText>Asset name: </UiText>\n            <UiText>{ddo.service[0].attributes.main.name }</UiText>\n          </UiLayout>\n          <UiLayout>\n            <UiText>Asset id: </UiText>\n            <UiText>{ddo.id}</UiText>\n          </UiLayout>\n          <UiLayout>\n            <UiText>Creator id: </UiText>\n            <UiText>{ ddo.proof.creator }</UiText>\n          </UiLayout>\n        </UiLayout>\n      )}\n    </>\n  )\n}\n")),(0,i.kt)("h3",{id:"demo"},"Demo"),(0,i.kt)(c,{fallback:(0,i.kt)("div",null,"Loading search assets by name..."),mdxType:"BrowserOnly"},(()=>(0,i.kt)(p,{name:!0,mdxType:"QueryAssets"}))),(0,i.kt)("h2",{id:"search-by-additional-information"},"Search by additional information"),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"/docs/architecture/specs/Spec-METADATA#additional-attributes"},"Additional Information")," section is an entry into the DDO/Metadata document where users can specify a free range of attributes. They can be domain specific, and the marketplace can be used to search accross them. Things like ",(0,i.kt)("inlineCode",{parentName:"p"},"categories"),":"),(0,i.kt)("h3",{id:"code-1"},"Code"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"const QuerySearchByAdditionalInfo = () => {\n  const { assets } = Catalog.useNevermined();\n  const [ ddos, setDdos ] = useState<DDO[]>([]);\n  const [category, setCategory] = useState('');\n\n  const options = [{\n    label: 'Categories:',\n    value: ''\n\n  }, {\n    label: 'Lending',\n    value: 'ProtocolType:Lending',\n  }, {\n    label: 'Ethereum',\n    value: 'Blockchain:Ethereum',\n  }, {\n    label: 'Liquidations',\n    value: 'EventType:Liquidations',\n  }];\n\n  const onSearchByCategory = async(value: string) => {\n    const categoryChoosen = options.find(o => o.label === value)?.value;\n    setCategory(value);\n\n    if(!categoryChoosen) {\n      setDdos([]);\n      return;\n    }\n\n    const response = await assets.query({\n      query: {\n        nested: {\n          path: ['service'],\n          query: {\n            match: {\n              \"service.attributes.additionalInformation.categories\": categoryChoosen\n            }\n          }\n        }\n      }\n    });\n\n    setDdos(response.results || []);\n  };\n\n  return (\n    <>\n      <UiForm>\n        <UiFormSelect\n          label='Search by category: '\n          value={category}\n          options={options.map(o => o.label)}\n          onChange={(e) => onSearchByCategory(e as string)}/>\n      </UiForm>\n\n      {ddos.slice(0,3).map(ddo =>\n        <UiLayout key={ddo.id}>\n          <UiLayout>\n            <UiText>Asset name: </UiText>\n            <UiText>{ddo.service[0].attributes.main.name }</UiText>\n          </UiLayout>\n          <UiLayout>\n            <UiText>Asset id: </UiText>\n            <UiText>{ddo.id}</UiText>\n          </UiLayout>\n          <UiLayout>\n            <UiText>Creator id: </UiText>\n            <UiText>{ ddo.proof.creator }</UiText>\n          </UiLayout>\n        </UiLayout>\n      )}\n    </>\n  )\n};\n")),(0,i.kt)("h3",{id:"demo-1"},"Demo"),(0,i.kt)(c,{fallback:(0,i.kt)("div",null,"Loading search assets by additional information..."),mdxType:"BrowserOnly"},(()=>(0,i.kt)(p,{additionalInformation:!0,mdxType:"QueryAssets"}))),(0,i.kt)("h2",{id:"search-by-price-range"},"Search by price range"),(0,i.kt)("p",null,"The price is an attribute that is included in each of the services exposed in an asset. It is included as part of the service.attributes.main object. So to run a search using a range of prices could be something like this:"),(0,i.kt)("h3",{id:"code-2"},"Code"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"const QuerySearchByPriceRange = () => {\n  const { assets } = Catalog.useNevermined();\n  const [ ddos, setDdos ] = useState<DDO[]>([]);\n  const [ gte, setGte ] = useState('');\n  const [ lte, setLte ] = useState('');\n  const [ gteRequired, setGteRequired ] = useState('');\n  const [ lteRequired, setLteRequired ] = useState('');\n\n  useEffect(() => {\n    if(gteRequired || lteRequired) {\n      setTimeout(() => {\n        setGteRequired('');\n        setLteRequired('');\n      }, 3000);\n    }\n  }, [gteRequired, lteRequired]);\n\n  const onSearchByPriceRange = async() => {\n    if((!gte && gte !==0 ) || (!lte && lte !==0 )) {\n      setGteRequired(!gte ? 'gte input is required' : '');\n      setLteRequired(!lte ? 'lte input is required' : '');\n      setDdos([]);\n\n      return;\n    }\n\n    if(gte > lte) {\n      setGteRequired('gte input cannot be greater than lte input');\n      setDdos([]);\n\n      return;\n    }\n\n    if(gte < 0) {\n      setGteRequired('gte input cannot be less than 0');\n      setDdos([]);\n\n      return;\n    } \n\n    const response = await assetsModule.query({\n      query: {\n        nested: {\n          path: ['service'],\n          query: {\n            range: {\n              \"service.attributes.additionalInformation.priceHighestDenomination\": {\n                gte,\n                lte\n              }\n            }\n          }\n        }\n      }\n    });\n\n    setDdos(response.results || []);\n  };\n\n  const getValue = (value: string) => {\n    if(value) {\n      return parseFloat(value);\n    }\n\n    return value as undefined;\n  };\n\n  return (\n    <>\n      <UiForm>\n        <UiText>Set the price range:</UiText>\n        <UiFormInput \n          label='gte: '\n          value={gte}\n          type='number'\n          onChange={(e) => setGte(e.target.value)}\n          inputError={gteRequired}/>\n        <UiFormInput \n          label='lte: '\n          value={lte}\n          type='number'\n          onChange={(e) => setLte(e.target.value)}\n          inputError={lteRequired}/>\n        \n        <UiButton title='Search' type='secondary' onClick={onSearchByPriceRange}>Search</UiButton>\n      </UiForm>\n\n      {ddos.slice(0,3).map(ddo =>\n        <UiLayout key={ddo.id}>\n          <UiLayout>\n            <UiText>Asset name: </UiText>\n            <UiText>{ddo.service[0].attributes.main.name }</UiText>\n          </UiLayout>\n          <UiLayout>\n            <UiText>Asset id: </UiText>\n            <UiText>{ddo.id}</UiText>\n          </UiLayout>\n          <UiLayout>\n            <UiText>Creator id: </UiText>\n            <UiText>{ ddo.proof.creator }</UiText>\n          </UiLayout>\n          <UiLayout>\n            <UiText>Price: </UiText>\n            <UiText>{ddo.service[0].attributes.main.price }</UiText>\n          </UiLayout>\n        </UiLayout>\n      )}\n    </>\n  )\n}\n")),(0,i.kt)("h3",{id:"demo-2"},"Demo"),(0,i.kt)(c,{fallback:(0,i.kt)("div",null,"Loading search assets by price range..."),mdxType:"BrowserOnly"},(()=>(0,i.kt)(p,{priceRange:!0,mdxType:"QueryAssets"}))),(0,i.kt)("h2",{id:"sorting-and-paginating"},"Sorting and paginating"),(0,i.kt)("p",null,"All the search queries can include sorting and pagination attributes:"),(0,i.kt)("h3",{id:"code-3"},"Code"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"const QuerySearchByFilters = () => {\n  const { assets } = Catalog.useNevermined();\n  const [ ddos, setDdos ] = useState<DDO[]>([]);\n  const [ name, setName ] = useState('');\n  const [ short, setShort] = useState<'asc'|'desc'>('desc');\n  const [ page, setPage ] = useState(1);\n  const [ size, setSize ] = useState(100);\n  const [ nameRequired, setNameRequired ] = useState('');\n  const [ pageRequired, setPageRequired ] = useState('');\n  const [ sizeRequired, setSizeRequired ] = useState('');\n\n  useEffect(() => {\n    if(nameRequired || pageRequired || sizeRequired) {\n      setTimeout(() => {\n        setNameRequired('');\n        setPageRequired('');\n        setSizeRequired('');\n      }, 3000);\n    }\n  }, [nameRequired, pageRequired, sizeRequired]);\n\n  const setMessage = (name: string, value: number) => {\n    return value <= 0 ? `${name} input needs to be greater than 0` : `${name} input is required`\n  };\n\n  const onSearchByFilters = async() => {\n    if(!page || !size || !name) {\n      setNameRequired(!name ? 'name input is required' : '');\n      setPageRequired(!page || page < 0 ? setMessage('page', page): '');\n      setSizeRequired(!size || size <= 0 ? setMessage('size', size): '');\n      setDdos([]);\n\n      return;\n    }\n\n    const response = await assetsModule.query({\n      query: {\n        bool: {\n          must: [{\n            nested: {\n              path: ['service'],\n              query: {\n                \"query_string\": {\n                  query: `*${name}*`,\n                  fields: [\"service.attributes.main.name\"]\n                },\n              },\n            }\n          }]\n        }\n      },\n      offset: size,\n      page,\n      sort: {\n        created: short\n      }\n    })\n\n    setDdos(response.results || []);\n  };\n\n  const getValue = (value: string) => {\n    if(value) {\n      return parseInt(value, 10);\n    }\n\n    return value as undefined;\n  };\n\n  return (\n    <>\n      <UiForm>\n        <UiFormInput \n          label='Search by name: (try with NFT)'\n          inputError={nameRequired}\n          onChange={(e) => setName(e.target.value)}/>\n        <UiFormInput \n          label='Page:'\n          type='number'\n          value={page}\n          inputError={pageRequired}\n          onChange={(e) => setPage(getValue(e.target.value))}/>\n        <UiFormInput \n          label='Page size:'\n          value={size}\n          type='number'\n          inputError={sizeRequired}\n          onChange={(e) => setSize(getValue(e.target.value))}/>\n        <UiFormSelect\n          label='Short by publish date:'\n          value={short}\n          options={['asc', 'desc']}\n          onChange={(e) => setShort(e)}\n        />\n        <UiButton title='Search' type='secondary' onClick={onSearchByFilters}>Search</UiButton>\n      </UiForm>\n\n      {ddos.map(ddo =>\n        <UiLayout key={ddo.id}>\n          <UiLayout>\n            <UiText>Asset name: </UiText>\n            <UiText>{ddo.service[0].attributes.main.name }</UiText>\n          </UiLayout>\n          <UiLayout>\n            <UiText>Asset id: </UiText>\n            <UiText>{ddo.id}</UiText>\n          </UiLayout>\n          <UiLayout>\n            <UiText>Creator id: </UiText>\n            <UiText>{ ddo.proof.creator }</UiText>\n          </UiLayout>\n        </UiLayout>\n      )}\n    </>\n  )\n}\n")),(0,i.kt)("h3",{id:"demo-3"},"Demo"),(0,i.kt)(c,{fallback:(0,i.kt)("div",null,"Loading search assets by filters..."),mdxType:"BrowserOnly"},(()=>(0,i.kt)(p,{filters:!0,mdxType:"QueryAssets"}))),(0,i.kt)("h2",{id:"sort-in-big-objects"},"Sort in big objects"),(0,i.kt)("p",null,"We can sort by prop included under several levels of an object:"),(0,i.kt)("h3",{id:"code-4"},"Code"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"const QuerySearchSortByPrice = () => {\n  const { assets } = Catalog.useNevermined()\n  const [ ddos, setDdos ] = useState<DDO[]>([])\n\n  useEffect(() => {\n    onSearch({})\n  }, [])\n\n  const onSearch = async(query: unknown) => {\n    const response = await assetsModule.query(query)\n\n    setDdos(response.results || [])\n  }\n\n  return (\n    <>\n      <UiForm>\n        <UiButton title='Search' type='secondary' onClick={() => onSearch({\n          sort: [\n            {\n              'service.attributes.additionalInformation.priceHighestDenomination': {\n                order: 'asc',\n                nested: {\n                  path: 'service'\n                }\n              }\n            }\n          ]\n        })}>Sort</UiButton>\n      </UiForm>\n\n      {ddos.slice(0,3).map(ddo =>\n\n        <UiLayout key={ddo.id} className={b('item')}>\n          <UiLayout>\n            <UiText>Asset name: </UiText>\n            <UiText>{ddo.service[0].attributes.main.name }</UiText>\n          </UiLayout>\n          <UiLayout>\n            <UiText>Asset id: </UiText>\n            <UiText>{ddo.id}</UiText>\n          </UiLayout>\n          <UiLayout>\n            <UiText>Creator id: </UiText>\n            <UiText>{ ddo.proof.creator }</UiText>\n          </UiLayout>\n          <UiLayout>\n            <UiText>Price: </UiText>\n            <UiText>{ ddo.service[2].attributes.additionalInformation.priceHighestDenomination }</UiText>\n          </UiLayout>\n        </UiLayout>\n        \n      )}\n    </>\n  )\n}\n")),(0,i.kt)("h3",{id:"demo-4"},"Demo"),(0,i.kt)(c,{fallback:(0,i.kt)("div",null,"Loading search assets sorting in big objects..."),mdxType:"BrowserOnly"},(()=>(0,i.kt)(p,{complexSort:!0,mdxType:"QueryAssets"}))))}y.isMDXComponent=!0}}]);