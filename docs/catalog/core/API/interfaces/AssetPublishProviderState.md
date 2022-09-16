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
- [setAssetMessage](AssetPublishProviderState.md#setassetmessage)
- [setAssetPublish](AssetPublishProviderState.md#setassetpublish)
- [setErrorAssetMessage](AssetPublishProviderState.md#seterrorassetmessage)

## Properties

### assetMessage

• **assetMessage**: `string`

Handle publish asset message

#### Defined in

[types/index.ts:756](https://github.com/nevermined-io/components-catalog/blob/dda3469/lib/src/types/index.ts#L756)

___

### assetPublish

• **assetPublish**: [`AssetPublishParams`](AssetPublishParams.md)

All the parameters needed to publish an asset

#### Defined in

[types/index.ts:762](https://github.com/nevermined-io/components-catalog/blob/dda3469/lib/src/types/index.ts#L762)

___

### errorAssetMessage

• **errorAssetMessage**: `string`

Handle error publish asset message

#### Defined in

[types/index.ts:754](https://github.com/nevermined-io/components-catalog/blob/dda3469/lib/src/types/index.ts#L754)

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

[types/index.ts:773](https://github.com/nevermined-io/components-catalog/blob/dda3469/lib/src/types/index.ts#L773)

___

### isProcessing

• **isProcessing**: `boolean`

If the asset is publishing

#### Defined in

[types/index.ts:760](https://github.com/nevermined-io/components-catalog/blob/dda3469/lib/src/types/index.ts#L760)

___

### isPublished

• **isPublished**: `boolean`

If the asset was published correctly

#### Defined in

[types/index.ts:758](https://github.com/nevermined-io/components-catalog/blob/dda3469/lib/src/types/index.ts#L758)

___

### publishAsset

• **publishAsset**: (`asset`: { `assetRewards?`: `default` ; `erc20TokenAddress?`: `string` ; `metadata`: `MetaData` ; `method?`: `string` ; `providers?`: `string`[] ; `serviceTypes?`: `ServiceType`[] ; `services?`: `ServiceCommon`[] ; `txParameters?`: `TxParameters`  }) => `Promise`<`undefined` \| `DDO`\>

#### Type declaration

▸ (`asset`): `Promise`<`undefined` \| `DDO`\>

Nevermined is a network where users register digital assets and attach to 
them services (like data sharing, nfts minting, etc).
With this method a user can register an asset in Nevermined giving a piece of metadata. 
This will return the DDO created (including the unique identifier of the asset - aka DID).

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `asset` | `Object` |  |
| `asset.assetRewards?` | `default` | The price of the asset that the owner will receive |
| `asset.erc20TokenAddress?` | `string` | The erc20 token address which the buyer will pay the price |
| `asset.metadata` | `MetaData` | The metadata object describing the asset |
| `asset.method?` | `string` | Method used to encrypt the urls |
| `asset.providers?` | `string`[] | Array that contains the provider addreses |
| `asset.serviceTypes?` | `ServiceType`[] | - |
| `asset.services?` | `ServiceCommon`[] | List of services associate with the asset |
| `asset.txParameters?` | `TxParameters` | Trasaction number of the asset creation |

##### Returns

`Promise`<`undefined` \| `DDO`\>

The DDO object including the asset metadata and the DID

#### Defined in

[types/index.ts:795](https://github.com/nevermined-io/components-catalog/blob/dda3469/lib/src/types/index.ts#L795)

___

### publishNFT1155

• **publishNFT1155**: (`nft1155`: { `assetRewards?`: `default` ; `cap`: `number` ; `erc20TokenAddress?`: `string` ; `gatewayAddress`: `string` ; `metadata`: `MetaData` ; `nftAmount?`: `number` ; `nftMetadata?`: `string` ; `preMint?`: `boolean` ; `royalties`: `number` ; `royaltyKind`: `RoyaltyKind` ; `txParameters?`: `TxParameters`  }) => `Promise`<`undefined` \| `DDO`\>

#### Type declaration

▸ (`nft1155`): `Promise`<`undefined` \| `DDO`\>

In Nevermined is possible to register a digital asset that allow users pay for having a 
NFT (ERC-1155). This typically allows content creators to provide access to exclusive 
contents for NFT holders.
ERC-1155 NFTs are semi-fungible, meaning that a NFT can have multiple editions.

This method will create a new digital asset associated to a ERC-1155 NFT contract.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `nft1155` | `Object` |  |
| `nft1155.assetRewards?` | `default` | The price of the asset that the owner will receive |
| `nft1155.cap` | `number` | The maximum number of editions that can be minted. If `0` means there is no limit (uncapped) |
| `nft1155.erc20TokenAddress?` | `string` | The erc20 token address which the buyer will pay the price |
| `nft1155.gatewayAddress` | `string` | Gateway address to approve to handle the NFT |
| `nft1155.metadata` | `MetaData` | The metadata object describing the asset |
| `nft1155.nftAmount?` | `number` | NFT amount to publish |
| `nft1155.nftMetadata?` | `string` | Url to set at publishing time that resolves to the metadata of the nft as expected by opensea |
| `nft1155.preMint?` | `boolean` | If assets are minted in the creation process |
| `nft1155.royalties` | `number` | The amount of royalties paid back to the original creator in the secondary market |
| `nft1155.royaltyKind` | `RoyaltyKind` | The royalties scheme that can be used |
| `nft1155.txParameters?` | `TxParameters` | Trasaction number of the asset creation |

##### Returns

`Promise`<`undefined` \| `DDO`\>

The DDO object including the asset metadata and the DID

#### Defined in

[types/index.ts:889](https://github.com/nevermined-io/components-catalog/blob/dda3469/lib/src/types/index.ts#L889)

___

### publishNFT721

• **publishNFT721**: (`nft721`: { `assetRewards?`: `default` ; `duration?`: `number` ; `erc20TokenAddress?`: `string` ; `metadata`: `MetaData` ; `method?`: `string` ; `nftAddress`: `string` ; `nftMetadata?`: `string` ; `nftTransfer?`: `boolean` ; `preMint?`: `boolean` ; `providers?`: `string`[] ; `royalties?`: `number` ; `services?`: `string`[] ; `txParameters?`: `TxParameters`  }) => `Promise`<`undefined` \| `DDO`\>

#### Type declaration

▸ (`nft721`): `Promise`<`undefined` \| `DDO`\>

In Nevermined is possible to register a digital asset that allow users pay for having a 
NFT (ERC-721). This typically allows content creators to provide access to exclusive 
contents for NFT holders.
It will create a new digital asset associated to a ERC-721 NFT contract 
(given the `nftAddress` parameter)

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `nft721` | `Object` |  |
| `nft721.assetRewards?` | `default` | The price of the asset that the owner will receive |
| `nft721.duration?` | `number` | When expire the NFT721. The default 0 value means never |
| `nft721.erc20TokenAddress?` | `string` | The erc20 token address which the buyer will pay the price |
| `nft721.metadata` | `MetaData` | The metadata object describing the asset |
| `nft721.method?` | `string` | Method used to encrypt the urls |
| `nft721.nftAddress` | `string` | The contract address of the ERC-721 NFT |
| `nft721.nftMetadata?` | `string` | Url to set at publishing time that resolves to the metadata of the nft as expected by opensea |
| `nft721.nftTransfer?` | `boolean` | if the nft will be transfered to other address after published |
| `nft721.preMint?` | `boolean` | If assets are minted in the creation process |
| `nft721.providers?` | `string`[] | Array that contains the provider addreses |
| `nft721.royalties?` | `number` | The amount of royalties paid back to the original creator in the secondary market |
| `nft721.services?` | `string`[] | List of services associate with the asset |
| `nft721.txParameters?` | `TxParameters` | Trasaction number of the asset creation |

##### Returns

`Promise`<`undefined` \| `DDO`\>

The DDO object including the asset metadata and the DID

#### Defined in

[types/index.ts:838](https://github.com/nevermined-io/components-catalog/blob/dda3469/lib/src/types/index.ts#L838)

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

[types/index.ts:777](https://github.com/nevermined-io/components-catalog/blob/dda3469/lib/src/types/index.ts#L777)

___

### setAssetMessage

• **setAssetMessage**: `Dispatch`<`SetStateAction`<`string`\>\>

Set asset message

#### Defined in

[types/index.ts:766](https://github.com/nevermined-io/components-catalog/blob/dda3469/lib/src/types/index.ts#L766)

___

### setAssetPublish

• **setAssetPublish**: `Dispatch`<`SetStateAction`<[`AssetPublishParams`](AssetPublishParams.md)\>\>

Set parameters needed to publish an asset

#### Defined in

[types/index.ts:764](https://github.com/nevermined-io/components-catalog/blob/dda3469/lib/src/types/index.ts#L764)

___

### setErrorAssetMessage

• **setErrorAssetMessage**: `Dispatch`<`SetStateAction`<`string`\>\>

Set error asset message

#### Defined in

[types/index.ts:768](https://github.com/nevermined-io/components-catalog/blob/dda3469/lib/src/types/index.ts#L768)
