---
sidebar_position: 4
description: What information is available in Nevermined, and how to find it
---

import BrowserOnly from '@docusaurus/BrowserOnly';
import QueryAssets from '@site/src/components/queryAssets';

# How to query assets with Catalog

With Catalog is possible to search specific assets by using the [`query`](../react-components/catalog/API/interfaces/AssetsModule.md#query) method from [`AssetsModule`](../react-components/catalog/API/interfaces/AssetsModule.md). Here there are some examples to show how to use it

## Search by asset name

The [main metadata attributes](../architecture/specs/Spec-METADATA#main-attributes) (like name, author, description, etc) are under the `service.attributes.main` object in the DDO/Metadata object. So for searching all the assets with a certain name you can write a component something like this:

### Code

```tsx
const QuerySearchByName = (): => {
  const { assets } = Catalog.useNevermined();
  const [ ddos, setDdos ] = useState<DDO[]>([]);

  const onSearchByName = async(value: string) => {
    if(value.length < 3) {
      return;
    }

    const response = await assets.query({
      query: {
        bool: {
          must: [{
            nested: {
              path: ['service'],
              query: {
                "query_string": {
                  query: `*${value}*`,
                  fields: ["service.attributes.main.name"]
                }
              },
            }
          }]
        }
      }
    });

    setDdos(response.results || []);
    
  };

  return (
    <>
      <UiForm>
        <UiFormInput 
          label='Search by name: (try with NFT) '
          onChange={(e) => onSearchByName(e.target.value)}/>
      </UiForm>

      {ddos.map(ddo =>
        <UiLayout key={ddo.id}>
          <UiLayout>
            <UiText>Asset name: </UiText>
            <UiText>{ddo.service[0].attributes.main.name }</UiText>
          </UiLayout>
          <UiLayout>
            <UiText>Asset id: </UiText>
            <UiText>{ddo.id}</UiText>
          </UiLayout>
          <UiLayout>
            <UiText>Creator id: </UiText>
            <UiText>{ ddo.proof.creator }</UiText>
          </UiLayout>
        </UiLayout>
      )}
    </>
  )
}
```

### Demo

<BrowserOnly fallback={<div>Loading search assets by name...</div>}>
 {()=> <QueryAssets name={true}/>}
</BrowserOnly>

## Search by additional information
The [Additional Information](../architecture/specs/Spec-METADATA.md#additional-attributes) section is an entry into the DDO/Metadata document where users can specify a free range of attributes. They can be domain specific, and the marketplace can be used to search accross them. Things like `categories`:

### Code

```tsx
const QuerySearchByAdditionalInfo = () => {
  const { assets } = Catalog.useNevermined();
  const [ ddos, setDdos ] = useState<DDO[]>([]);
  const [category, setCategory] = useState('');

  const options = [{
    label: 'Categories:',
    value: ''

  }, {
    label: 'Lending',
    value: 'ProtocolType:Lending',
  }, {
    label: 'Ethereum',
    value: 'Blockchain:Ethereum',
  }, {
    label: 'Liquidations',
    value: 'EventType:Liquidations',
  }];

  const onSearchByCategory = async(value: string) => {
    const categoryChoosen = options.find(o => o.label === value)?.value;
    setCategory(value);

    if(!categoryChoosen) {
      setDdos([]);
      return;
    }

    const response = await assets.query({
      query: {
        nested: {
          path: ['service'],
          query: {
            match: {
              "service.attributes.additionalInformation.categories": categoryChoosen
            }
          }
        }
      }
    });

    setDdos(response.results || []);
  };

  return (
    <>
      <UiForm>
        <UiFormSelect
          label='Search by category: '
          value={category}
          options={options.map(o => o.label)}
          onChange={(e) => onSearchByCategory(e as string)}/>
      </UiForm>

      {ddos.slice(0,3).map(ddo =>
        <UiLayout key={ddo.id}>
          <UiLayout>
            <UiText>Asset name: </UiText>
            <UiText>{ddo.service[0].attributes.main.name }</UiText>
          </UiLayout>
          <UiLayout>
            <UiText>Asset id: </UiText>
            <UiText>{ddo.id}</UiText>
          </UiLayout>
          <UiLayout>
            <UiText>Creator id: </UiText>
            <UiText>{ ddo.proof.creator }</UiText>
          </UiLayout>
        </UiLayout>
      )}
    </>
  )
};
```

### Demo

<BrowserOnly fallback={<div>Loading search assets by additional information...</div>}>
 {()=> <QueryAssets additionalInformation={true}/>}
</BrowserOnly>

## Search by price range

The price is an attribute that is included in each of the services exposed in an asset. It is included as part of the service.attributes.main object. So to run a search using a range of prices could be something like this:

### Code

```tsx
const QuerySearchByPriceRange = () => {
  const { assets } = Catalog.useNevermined();
  const [ ddos, setDdos ] = useState<DDO[]>([]);
  const [ gte, setGte ] = useState('');
  const [ lte, setLte ] = useState('');
  const [ gteRequired, setGteRequired ] = useState('');
  const [ lteRequired, setLteRequired ] = useState('');

  useEffect(() => {
    if(gteRequired || lteRequired) {
      setTimeout(() => {
        setGteRequired('');
        setLteRequired('');
      }, 3000);
    }
  }, [gteRequired, lteRequired]);

  const onSearchByPriceRange = async() => {
    if((!gte && gte !==0 ) || (!lte && lte !==0 )) {
      setGteRequired(!gte ? 'gte input is required' : '');
      setLteRequired(!lte ? 'lte input is required' : '');
      setDdos([]);

      return;
    }

    if(gte > lte) {
      setGteRequired('gte input cannot be greater than lte input');
      setDdos([]);

      return;
    }

    if(gte < 0) {
      setGteRequired('gte input cannot be less than 0');
      setDdos([]);

      return;
    } 

    const response = await assetsModule.query({
      query: {
        nested: {
          path: ['service'],
          query: {
            range: {
              "service.attributes.additionalInformation.priceHighestDenomination": {
                gte,
                lte
              }
            }
          }
        }
      }
    });

    setDdos(response.results || []);
  };

  const getValue = (value: string) => {
    if(value) {
      return parseFloat(value);
    }

    return value as undefined;
  };

  return (
    <>
      <UiForm>
        <UiText>Set the price range:</UiText>
        <UiFormInput 
          label='gte: '
          value={gte}
          type='number'
          onChange={(e) => setGte(e.target.value)}
          inputError={gteRequired}/>
        <UiFormInput 
          label='lte: '
          value={lte}
          type='number'
          onChange={(e) => setLte(e.target.value)}
          inputError={lteRequired}/>
        
        <UiButton title='Search' type='secondary' onClick={onSearchByPriceRange}>Search</UiButton>
      </UiForm>

      {ddos.slice(0,3).map(ddo =>
        <UiLayout key={ddo.id}>
          <UiLayout>
            <UiText>Asset name: </UiText>
            <UiText>{ddo.service[0].attributes.main.name }</UiText>
          </UiLayout>
          <UiLayout>
            <UiText>Asset id: </UiText>
            <UiText>{ddo.id}</UiText>
          </UiLayout>
          <UiLayout>
            <UiText>Creator id: </UiText>
            <UiText>{ ddo.proof.creator }</UiText>
          </UiLayout>
          <UiLayout>
            <UiText>Price: </UiText>
            <UiText>{ddo.service[0].attributes.main.price }</UiText>
          </UiLayout>
        </UiLayout>
      )}
    </>
  )
}
```

### Demo

<BrowserOnly fallback={<div>Loading search assets by price range...</div>}>
 {()=> <QueryAssets priceRange={true}/>}
</BrowserOnly>

## Sorting and paginating

All the search queries can include sorting and pagination attributes:

### Code

```tsx
const QuerySearchByFilters = () => {
  const { assets } = Catalog.useNevermined();
  const [ ddos, setDdos ] = useState<DDO[]>([]);
  const [ name, setName ] = useState('');
  const [ short, setShort] = useState<'asc'|'desc'>('desc');
  const [ page, setPage ] = useState(1);
  const [ size, setSize ] = useState(100);
  const [ nameRequired, setNameRequired ] = useState('');
  const [ pageRequired, setPageRequired ] = useState('');
  const [ sizeRequired, setSizeRequired ] = useState('');

  useEffect(() => {
    if(nameRequired || pageRequired || sizeRequired) {
      setTimeout(() => {
        setNameRequired('');
        setPageRequired('');
        setSizeRequired('');
      }, 3000);
    }
  }, [nameRequired, pageRequired, sizeRequired]);

  const setMessage = (name: string, value: number) => {
    return value <= 0 ? `${name} input needs to be greater than 0` : `${name} input is required`
  };

  const onSearchByFilters = async() => {
    if(!page || !size || !name) {
      setNameRequired(!name ? 'name input is required' : '');
      setPageRequired(!page || page < 0 ? setMessage('page', page): '');
      setSizeRequired(!size || size <= 0 ? setMessage('size', size): '');
      setDdos([]);

      return;
    }

    const response = await assetsModule.query({
      query: {
        bool: {
          must: [{
            nested: {
              path: ['service'],
              query: {
                "query_string": {
                  query: `*${name}*`,
                  fields: ["service.attributes.main.name"]
                },
              },
            }
          }]
        }
      },
      offset: size,
      page,
      sort: {
        created: short
      }
    })

    setDdos(response.results || []);
  };

  const getValue = (value: string) => {
    if(value) {
      return parseInt(value, 10);
    }

    return value as undefined;
  };

  return (
    <>
      <UiForm>
        <UiFormInput 
          label='Search by name: (try with NFT)'
          inputError={nameRequired}
          onChange={(e) => setName(e.target.value)}/>
        <UiFormInput 
          label='Page:'
          type='number'
          value={page}
          inputError={pageRequired}
          onChange={(e) => setPage(getValue(e.target.value))}/>
        <UiFormInput 
          label='Page size:'
          value={size}
          type='number'
          inputError={sizeRequired}
          onChange={(e) => setSize(getValue(e.target.value))}/>
        <UiFormSelect
          label='Short by publish date:'
          value={short}
          options={['asc', 'desc']}
          onChange={(e) => setShort(e)}
        />
        <UiButton title='Search' type='secondary' onClick={onSearchByFilters}>Search</UiButton>
      </UiForm>

      {ddos.map(ddo =>
        <UiLayout key={ddo.id}>
          <UiLayout>
            <UiText>Asset name: </UiText>
            <UiText>{ddo.service[0].attributes.main.name }</UiText>
          </UiLayout>
          <UiLayout>
            <UiText>Asset id: </UiText>
            <UiText>{ddo.id}</UiText>
          </UiLayout>
          <UiLayout>
            <UiText>Creator id: </UiText>
            <UiText>{ ddo.proof.creator }</UiText>
          </UiLayout>
        </UiLayout>
      )}
    </>
  )
}
```

### Demo

<BrowserOnly fallback={<div>Loading search assets by filters...</div>}>
 {()=> <QueryAssets filters={true}/>}
</BrowserOnly>

## Sort in big objects

We can sort by prop included under several levels of an object:

### Code

```tsx
const QuerySearchSortByPrice = () => {
  const { assets } = Catalog.useNevermined()
  const [ ddos, setDdos ] = useState<DDO[]>([])

  useEffect(() => {
    onSearch({})
  }, [])

  const onSearch = async(query: unknown) => {
    const response = await assetsModule.query(query)

    setDdos(response.results || [])
  }

  return (
    <>
      <UiForm>
        <UiButton title='Search' type='secondary' onClick={() => onSearch({
          sort: [
            {
              'service.attributes.additionalInformation.priceHighestDenomination': {
                order: 'asc',
                nested: {
                  path: 'service'
                }
              }
            }
          ]
        })}>Sort</UiButton>
      </UiForm>

      {ddos.slice(0,3).map(ddo =>

        <UiLayout key={ddo.id} className={b('item')}>
          <UiLayout>
            <UiText>Asset name: </UiText>
            <UiText>{ddo.service[0].attributes.main.name }</UiText>
          </UiLayout>
          <UiLayout>
            <UiText>Asset id: </UiText>
            <UiText>{ddo.id}</UiText>
          </UiLayout>
          <UiLayout>
            <UiText>Creator id: </UiText>
            <UiText>{ ddo.proof.creator }</UiText>
          </UiLayout>
          <UiLayout>
            <UiText>Price: </UiText>
            <UiText>{ ddo.service[2].attributes.additionalInformation.priceHighestDenomination }</UiText>
          </UiLayout>
        </UiLayout>
        
      )}
    </>
  )
}
```

### Demo

<BrowserOnly fallback={<div>Loading search assets sorting in big objects...</div>}>
 {()=> <QueryAssets complexSort={true}/>}
</BrowserOnly>