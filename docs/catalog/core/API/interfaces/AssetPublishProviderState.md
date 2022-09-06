# Interface: AssetPublishProviderState

Provider with all the functionalities to publish assets (no-nft, nft721, nft1155)

## Table of contents

### Properties

- [assetMessage](AssetPublishProviderState.md#assetmessage)
- [assetPublish](AssetPublishProviderState.md#assetpublish)
- [errorAssetMessage](AssetPublishProviderState.md#errorassetmessage)
- [handleChange](AssetPublishProviderState.md#handlechange)
- [isProcessing](AssetPublishProviderState.md#isprocessing)
- [isPublished](AssetPublishProviderState.md#ispublished)
- [publishAsset](AssetPublishProviderState.md#publishasset)
- [publishNFT1155](AssetPublishProviderState.md#publishnft1155)
- [publishNFT721](AssetPublishProviderState.md#publishnft721)
- [reset](AssetPublishProviderState.md#reset)
- [setAssetErrorMessage](AssetPublishProviderState.md#setasseterrormessage)
- [setAssetMessage](AssetPublishProviderState.md#setassetmessage)
- [setAssetPublish](AssetPublishProviderState.md#setassetpublish)

## Properties

### assetMessage

• **assetMessage**: `string`

Handle publish asset message

#### Defined in

[src/types/index.ts:783](https://github.com/nevermined-io/components-catalog/blob/658432b/lib/src/types/index.ts#L783)

___

### assetPublish

• **assetPublish**: [`AssetPublishParams`](AssetPublishParams.md)

All the parameters needed to publish an asset

#### Defined in

[src/types/index.ts:789](https://github.com/nevermined-io/components-catalog/blob/658432b/lib/src/types/index.ts#L789)

___

### errorAssetMessage

• **errorAssetMessage**: `string`

Handle error publish asset message

#### Defined in

[src/types/index.ts:781](https://github.com/nevermined-io/components-catalog/blob/658432b/lib/src/types/index.ts#L781)

___

### handleChange

• **handleChange**: (`value`: `string`, `input`: `string`) => `void`

#### Type declaration

▸ (`value`, `input`): `void`

Update asset parameters when some input changes

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `string` | Parameter value |
| `input` | `string` | Input where come the changes which match with the parameters |

##### Returns

`void`

#### Defined in

[src/types/index.ts:800](https://github.com/nevermined-io/components-catalog/blob/658432b/lib/src/types/index.ts#L800)

___

### isProcessing

• **isProcessing**: `boolean`

If the asset is publishing

#### Defined in

[src/types/index.ts:787](https://github.com/nevermined-io/components-catalog/blob/658432b/lib/src/types/index.ts#L787)

___

### isPublished

• **isPublished**: `boolean`

If the asset was published correctly

#### Defined in

[src/types/index.ts:785](https://github.com/nevermined-io/components-catalog/blob/658432b/lib/src/types/index.ts#L785)

___

### publishAsset

• **publishAsset**: (`asset`: { `metadata`: `MetaData`  }) => `Promise`<`undefined` \| `DDO`\>

#### Type declaration

▸ (`asset`): `Promise`<`undefined` \| `DDO`\>

Publish no-nft asset

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `asset` | `Object` |  |
| `asset.metadata` | `MetaData` | The description of the asset |

##### Returns

`Promise`<`undefined` \| `DDO`\>

Asset object

#### Defined in

[src/types/index.ts:810](https://github.com/nevermined-io/components-catalog/blob/658432b/lib/src/types/index.ts#L810)

___

### publishNFT1155

• **publishNFT1155**: (`asset`: { `cap`: `number` ; `metadata`: `MetaData` ; `royalties`: `number` ; `royaltyKind`: [`RoyaltyKind`](../enums/RoyaltyKind.md)  }) => `Promise`<`undefined` \| `DDO`\>

#### Type declaration

▸ (`asset`): `Promise`<`undefined` \| `DDO`\>

Publish a nft1155 asset

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `asset` | `Object` |  |
| `asset.cap` | `number` | Amount of asset that is possible to mint |
| `asset.metadata` | `MetaData` | The description of the asset |
| `asset.royalties` | `number` | - |
| `asset.royaltyKind` | [`RoyaltyKind`](../enums/RoyaltyKind.md) | Set how the owner will receive rewards for each sale |

##### Returns

`Promise`<`undefined` \| `DDO`\>

Asset object

#### Defined in

[src/types/index.ts:831](https://github.com/nevermined-io/components-catalog/blob/658432b/lib/src/types/index.ts#L831)

___

### publishNFT721

• **publishNFT721**: (`asset`: { `metadata`: `MetaData` ; `nftAddress`: `string`  }) => `Promise`<`undefined` \| `DDO`\>

#### Type declaration

▸ (`asset`): `Promise`<`undefined` \| `DDO`\>

Publish a nft721 asset

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `asset` | `Object` |  |
| `asset.metadata` | `MetaData` | The description of the asset |
| `asset.nftAddress` | `string` | nft721 token address to publish |

##### Returns

`Promise`<`undefined` \| `DDO`\>

Asset object

#### Defined in

[src/types/index.ts:817](https://github.com/nevermined-io/components-catalog/blob/658432b/lib/src/types/index.ts#L817)

___

### reset

• **reset**: (`resetAssetPublish`: [`AssetPublishParams`](AssetPublishParams.md)) => `void`

#### Type declaration

▸ (`resetAssetPublish`): `void`

Reset all the parameters of the asset

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `resetAssetPublish` | [`AssetPublishParams`](AssetPublishParams.md) | Initial parameters used for reset |

##### Returns

`void`

#### Defined in

[src/types/index.ts:804](https://github.com/nevermined-io/components-catalog/blob/658432b/lib/src/types/index.ts#L804)

___

### setAssetErrorMessage

• **setAssetErrorMessage**: `Dispatch`<`SetStateAction`<`string`\>\>

Set error asset message

#### Defined in

[src/types/index.ts:795](https://github.com/nevermined-io/components-catalog/blob/658432b/lib/src/types/index.ts#L795)

___

### setAssetMessage

• **setAssetMessage**: `Dispatch`<`SetStateAction`<`string`\>\>

Set asset message

#### Defined in

[src/types/index.ts:793](https://github.com/nevermined-io/components-catalog/blob/658432b/lib/src/types/index.ts#L793)

___

### setAssetPublish

• **setAssetPublish**: `Dispatch`<`SetStateAction`<[`AssetPublishParams`](AssetPublishParams.md)\>\>

Set parameters needed to publish an asset

#### Defined in

[src/types/index.ts:791](https://github.com/nevermined-io/components-catalog/blob/658432b/lib/src/types/index.ts#L791)
