---
sidebar_position: 4
description: What information is available in Nevermined, and how to find it
---

import BrowserOnly from '@docusaurus/BrowserOnly';
import QueryAssets from '@site/src/components/queryAssets';

# How to query assets with Catalog

With Catalog is possible to search specific assets by using the [`query`](../catalog/core/API/interfaces/AssetsModule.md#query) method from [`AssetsModule`](../catalog/core/API/interfaces/AssetsModule.md). Here there are some examples to show how to use it

## Search by asset name

The [main metadata attributes](../architecture/specs/Spec-METADATA#main-attributes) (like name, author, description, etc) are under the `service.attributes.main` object in the DDO/Metadata object. So for searching all the assets with a certain name you can write a component something like this:

### Code

```ts
const QuerySearchByName = ({ assetsModule }: { assetsModule: AssetsModule}) => {
  const { assets } = Catalog.useNevermined();
  const [ ddos, setDdos ] = useState<DDO[]>([]);

  const onSearchByName = async(value: string) => {
    if(value.length < 3) {
      return;
    }

    const response = await assetsModule.query({
      query: {
        "query_string": {
          query: `*${value}*`,
          fields: ["service.attributes.main.name"]
        }
      },
    });

    setDdos(response.results || []);
    
  };

  return (
    <>
      <UiForm>
        <UiFormInput 
          label='Search by name: (try with Aave)'
          onChange={(e) => onSearchByName(e.target.value)}/>
      </UiForm>

      {ddos.map(ddo =>
        <>
        <UiDivider line={true}/>
        <UiLayout>
          <UiLayout>
            <UiText>Asset id: </UiText>
            <UiText>{ddo.id}</UiText>
          </UiLayout>
          <UiLayout>
            <UiText>Creator id: </UiText>
            <UiText>{ ddo.proof.creator }</UiText>
          </UiLayout>
        </UiLayout>
        </>
      )}
    </>


  )
}
```

### Demo

<BrowserOnly fallback={<div>Loading search assets by name...</div>}>
 {()=> <QueryAssets name={true}/>}
</BrowserOnly>