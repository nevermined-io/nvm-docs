# Namespace: AssetService

## Table of contents

### Variables

- [AssetPublishContext](AssetService.md#assetpublishcontext)

### Functions

- [AssetPublishProvider](AssetService.md#assetpublishprovider)
- [useAsset](AssetService.md#useasset)
- [useAssetPublish](AssetService.md#useassetpublish)
- [useAssets](AssetService.md#useassets)

## Variables

### AssetPublishContext

• `Const` **AssetPublishContext**: `Context`<[`AssetPublishProviderState`](../interfaces/AssetPublishProviderState.md)\>

#### Defined in

[services/asset.tsx:123](https://github.com/nevermined-io/components-catalog/blob/23aab4e/lib/src/services/asset.tsx#L123)

## Functions

### AssetPublishProvider

▸ **AssetPublishProvider**(`__namedParameters`): `Element`

Provider with all the functionalities to publish assets (no-nft, nft721, nft1155)

Here is an example how to implement it

**`See`**

[https://github.com/nevermined-io/defi-marketplace/tree/main/client/src/%2Bassets/user-publish-steps](https://github.com/nevermined-io/defi-marketplace/tree/main/client/src/%2Bassets/user-publish-steps)

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters` | `Object` |
| `__namedParameters.children` | `ReactElement`<`any`, `string` \| `JSXElementConstructor`<`any`\>\> |

#### Returns

`Element`

#### Defined in

[services/asset.tsx:131](https://github.com/nevermined-io/components-catalog/blob/23aab4e/lib/src/services/asset.tsx#L131)

___

### useAsset

▸ **useAsset**(`did`): [`AssetState`](../interfaces/AssetState.md)

Get single asset

**`Example`**

```tsx
const MyComponent = () => {
 const did = "did";
 const { ddo } = AssetService.useAsset(did);

 return (
  <>
    {JSON.stringify(ddo)}
  </>
 )
}
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `did` | `string` | asset did |

#### Returns

[`AssetState`](../interfaces/AssetState.md)

#### Defined in

[services/asset.tsx:95](https://github.com/nevermined-io/components-catalog/blob/23aab4e/lib/src/services/asset.tsx#L95)

___

### useAssetPublish

▸ **useAssetPublish**(): [`AssetPublishProviderState`](../interfaces/AssetPublishProviderState.md)

#### Returns

[`AssetPublishProviderState`](../interfaces/AssetPublishProviderState.md)

#### Defined in

[services/asset.tsx:454](https://github.com/nevermined-io/components-catalog/blob/23aab4e/lib/src/services/asset.tsx#L454)

___

### useAssets

▸ **useAssets**(`q`): `Object`

Get all assets

**`Example`**

```tsx
const MyComponent = () => {
 const {  result, isLoading } = AssetService.useAssets();

 return (
  <>
     {result.results.map((d: DDO) => {
         return (
             <div>
             {JSON.stringify(d)}
             </div>
         )
     })}
  </>
 )
}
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `q` | `SearchQuery` | assets query |

#### Returns

`Object`

| Name | Type | Description |
| :------ | :------ | :------ |
| `isLoading` | `boolean` | If the query is still processing |
| `result` | `QueryResult` | Result based in the query search requested |

#### Defined in

[services/asset.tsx:42](https://github.com/nevermined-io/components-catalog/blob/23aab4e/lib/src/services/asset.tsx#L42)
