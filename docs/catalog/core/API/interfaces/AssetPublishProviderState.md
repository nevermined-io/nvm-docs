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

[types/index.ts:715](https://github.com/nevermined-io/components-catalog/blob/5d4b912/lib/src/types/index.ts#L715)

___

### assetPublish

• **assetPublish**: [`AssetPublishParams`](AssetPublishParams.md)

All the parameters needed to publish an asset

#### Defined in

[types/index.ts:721](https://github.com/nevermined-io/components-catalog/blob/5d4b912/lib/src/types/index.ts#L721)

___

### errorAssetMessage

• **errorAssetMessage**: `string`

Handle error publish asset message

#### Defined in

[types/index.ts:713](https://github.com/nevermined-io/components-catalog/blob/5d4b912/lib/src/types/index.ts#L713)

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

[types/index.ts:732](https://github.com/nevermined-io/components-catalog/blob/5d4b912/lib/src/types/index.ts#L732)

___

### isProcessing

• **isProcessing**: `boolean`

If the asset is publishing

#### Defined in

[types/index.ts:719](https://github.com/nevermined-io/components-catalog/blob/5d4b912/lib/src/types/index.ts#L719)

___

### isPublished

• **isPublished**: `boolean`

If the asset was published correctly

#### Defined in

[types/index.ts:717](https://github.com/nevermined-io/components-catalog/blob/5d4b912/lib/src/types/index.ts#L717)

___

### publishAsset

• **publishAsset**: (`asset`: { `appId?`: `string` ; `assetRewards?`: `default` ; `erc20TokenAddress?`: `string` ; `metadata`: `MetaData` ; `method?`: `EncryptionMethod` ; `providers?`: `string`[] ; `serviceTypes?`: `ServiceType`[] ; `services?`: `ServiceCommon`[] ; `txParameters?`: `TxParameters`  }) => `Promise`<`undefined` \| `DDO`\>

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
| `asset.appId?` | `string` | The id of the application creating the asset |
| `asset.assetRewards?` | `default` | The price of the asset that the owner will receive |
| `asset.erc20TokenAddress?` | `string` | The erc20 token address which the buyer will pay the price |
| `asset.metadata` | `MetaData` | The metadata object describing the asset |
| `asset.method?` | `EncryptionMethod` | Method used to encrypt the urls |
| `asset.providers?` | `string`[] | Array that contains the provider addreses |
| `asset.serviceTypes?` | `ServiceType`[] | - |
| `asset.services?` | `ServiceCommon`[] | List of services associate with the asset |
| `asset.txParameters?` | `TxParameters` | Trasaction number of the asset creation |

##### Returns

`Promise`<`undefined` \| `DDO`\>

The DDO object including the asset metadata and the DID

#### Defined in

[types/index.ts:755](https://github.com/nevermined-io/components-catalog/blob/5d4b912/lib/src/types/index.ts#L755)

___

### publishNFT1155

• **publishNFT1155**: (`nft1155`: { `appId?`: `string` ; `assetRewards?`: `default` ; `cap`: `default` ; `erc20TokenAddress?`: `string` ; `metadata`: `MetaData` ; `neverminedNFT1155Type?`: `NeverminedNFT1155Type` ; `neverminedNodeAddress`: `string` ; `nftAmount?`: `default` ; `nftMetadata?`: `string` ; `preMint?`: `boolean` ; `royaltyAttributes`: `RoyaltyAttributes` ; `txParameters?`: `TxParameters`  }) => `Promise`<`undefined` \| `DDO`\>

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
| `nft1155.appId?` | `string` | The id of the application creating the NFT |
| `nft1155.assetRewards?` | `default` | The price of the asset that the owner will receive |
| `nft1155.cap` | `default` | The maximum number of editions that can be minted. If `0` means there is no limit (uncapped) |
| `nft1155.erc20TokenAddress?` | `string` | The erc20 token address which the buyer will pay the price |
| `nft1155.metadata` | `MetaData` | The metadata object describing the asset |
| `nft1155.neverminedNFT1155Type?` | `NeverminedNFT1155Type` | - |
| `nft1155.neverminedNodeAddress` | `string` | Node address to approve to handle the NFT |
| `nft1155.nftAmount?` | `default` | NFT amount to publish |
| `nft1155.nftMetadata?` | `string` | Url to set at publishing time that resolves to the metadata of the nft as expected by opensea |
| `nft1155.preMint?` | `boolean` | If assets are minted in the creation process |
| `nft1155.royaltyAttributes` | `RoyaltyAttributes` | The amount of royalties paid back to the original creator in the secondary market |
| `nft1155.txParameters?` | `TxParameters` | Trasaction number of the asset creation |

##### Returns

`Promise`<`undefined` \| `DDO`\>

The DDO object including the asset metadata and the DID

#### Defined in

[types/index.ts:852](https://github.com/nevermined-io/components-catalog/blob/5d4b912/lib/src/types/index.ts#L852)

___

### publishNFT721

• **publishNFT721**: (`nft721`: { `assetRewards?`: `default` ; `duration?`: `number` ; `erc20TokenAddress?`: `string` ; `metadata`: `MetaData` ; `method?`: `EncryptionMethod` ; `nftAddress`: `string` ; `nftMetadata?`: `string` ; `nftTransfer?`: `boolean` ; `preMint?`: `boolean` ; `providers?`: `string`[] ; `royaltyAttributes`: `RoyaltyAttributes` ; `services?`: `ServiceType`[] ; `txParameters?`: `string`  }) => `Promise`<`undefined` \| `DDO`\>

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
| `nft721.method?` | `EncryptionMethod` | Method used to encrypt the urls |
| `nft721.nftAddress` | `string` | The contract address of the ERC-721 NFT |
| `nft721.nftMetadata?` | `string` | Url to set at publishing time that resolves to the metadata of the nft as expected by opensea |
| `nft721.nftTransfer?` | `boolean` | if the nft will be transfered to other address after published |
| `nft721.preMint?` | `boolean` | If assets are minted in the creation process |
| `nft721.providers?` | `string`[] | Array that contains the provider addreses |
| `nft721.royaltyAttributes` | `RoyaltyAttributes` | The amount of royalties paid back to the original creator in the secondary market |
| `nft721.services?` | `ServiceType`[] | List of services associate with the asset |
| `nft721.txParameters?` | `string` | Trasaction number of the asset creation |

##### Returns

`Promise`<`undefined` \| `DDO`\>

The DDO object including the asset metadata and the DID

#### Defined in

[types/index.ts:800](https://github.com/nevermined-io/components-catalog/blob/5d4b912/lib/src/types/index.ts#L800)

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

[types/index.ts:736](https://github.com/nevermined-io/components-catalog/blob/5d4b912/lib/src/types/index.ts#L736)

___

### setAssetMessage

• **setAssetMessage**: `Dispatch`<`SetStateAction`<`string`\>\>

Set asset message

#### Defined in

[types/index.ts:725](https://github.com/nevermined-io/components-catalog/blob/5d4b912/lib/src/types/index.ts#L725)

___

### setAssetPublish

• **setAssetPublish**: `Dispatch`<`SetStateAction`<[`AssetPublishParams`](AssetPublishParams.md)\>\>

Set parameters needed to publish an asset

#### Defined in

[types/index.ts:723](https://github.com/nevermined-io/components-catalog/blob/5d4b912/lib/src/types/index.ts#L723)

___

### setErrorAssetMessage

• **setErrorAssetMessage**: `Dispatch`<`SetStateAction`<`string`\>\>

Set error asset message

#### Defined in

[types/index.ts:727](https://github.com/nevermined-io/components-catalog/blob/5d4b912/lib/src/types/index.ts#L727)
