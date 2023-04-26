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

[types/index.ts:861](https://github.com/nevermined-io/react-components/blob/1bec16c/catalog/src/types/index.ts#L861)

___

### assetPublish

• **assetPublish**: [`AssetPublishParams`](AssetPublishParams.md)

All the parameters needed to publish an asset

#### Defined in

[types/index.ts:867](https://github.com/nevermined-io/react-components/blob/1bec16c/catalog/src/types/index.ts#L867)

___

### errorAssetMessage

• **errorAssetMessage**: `string`

Handle error publish asset message

#### Defined in

[types/index.ts:859](https://github.com/nevermined-io/react-components/blob/1bec16c/catalog/src/types/index.ts#L859)

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

[types/index.ts:878](https://github.com/nevermined-io/react-components/blob/1bec16c/catalog/src/types/index.ts#L878)

___

### isProcessing

• **isProcessing**: `boolean`

If the asset is publishing

#### Defined in

[types/index.ts:865](https://github.com/nevermined-io/react-components/blob/1bec16c/catalog/src/types/index.ts#L865)

___

### isPublished

• **isPublished**: `boolean`

If the asset was published correctly

#### Defined in

[types/index.ts:863](https://github.com/nevermined-io/react-components/blob/1bec16c/catalog/src/types/index.ts#L863)

___

### publishAsset

• **publishAsset**: (`asset`: { `assetAttributes`: `AssetAttributes` ; `cryptoConfig?`: `CryptoConfig` ; `method?`: `EncryptionMethod` ; `onEvent?`: (`next`: `CreateProgressStep`) => `void` ; `password?`: `string` ; `publishMetadata?`: `PublishMetadata` ; `txParameters?`: `TxParameters`  }) => `Promise`<`undefined` \| `DDO`\>

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
| `asset.assetAttributes` | `AssetAttributes` | The attribute object discribing the asset (metadata, price, encryption method, etc...) |
| `asset.cryptoConfig?` | `CryptoConfig` | Setting for encrypting asset |
| `asset.method?` | `EncryptionMethod` | - |
| `asset.onEvent?` | (`next`: `CreateProgressStep`) => `void` | A callback to handle progress events |
| `asset.password?` | `string` | Password to encrypt metadata |
| `asset.publishMetadata?` | `PublishMetadata` | Allows to specify if the metadata should be stored in different backends |
| `asset.txParameters?` | `TxParameters` | - |

##### Returns

`Promise`<`undefined` \| `DDO`\>

The DDO object including the asset metadata and the DID

#### Defined in

[types/index.ts:898](https://github.com/nevermined-io/react-components/blob/1bec16c/catalog/src/types/index.ts#L898)

___

### publishNFT1155

• **publishNFT1155**: (`nft1155`: { `cryptoConfig?`: `CryptoConfig` ; `method?`: `EncryptionMethod` ; `nftAttributes`: `NFTAttributes` ; `onEvent?`: (`next`: `CreateProgressStep`) => `void` ; `password?`: `string` ; `publishMetadata?`: `PublishMetadata` ; `txParameters?`: `TxParameters`  }) => `Promise`<`undefined` \| `DDO`\>

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
| `nft1155.cryptoConfig?` | `CryptoConfig` | Setting for encrypting asset |
| `nft1155.method?` | `EncryptionMethod` | - |
| `nft1155.nftAttributes` | `NFTAttributes` | The attribute object discribing the asset (metadata, price, encryption method, etc...) |
| `nft1155.onEvent?` | (`next`: `CreateProgressStep`) => `void` | A callback to handle progress events |
| `nft1155.password?` | `string` | Password to encrypt metadata |
| `nft1155.publishMetadata?` | `PublishMetadata` | Allows to specify if the metadata should be stored in different backends |
| `nft1155.txParameters?` | `TxParameters` | - |

##### Returns

`Promise`<`undefined` \| `DDO`\>

The DDO object including the asset metadata and the DID

#### Defined in

[types/index.ts:966](https://github.com/nevermined-io/react-components/blob/1bec16c/catalog/src/types/index.ts#L966)

___

### publishNFT721

• **publishNFT721**: (`nft721`: { `cryptoConfig?`: `CryptoConfig` ; `method?`: `EncryptionMethod` ; `nftAddress`: `string` ; `nftAttributes`: `NFTAttributes` ; `onEvent?`: (`next`: `CreateProgressStep`) => `void` ; `password?`: `string` ; `publishMetadata?`: `PublishMetadata` ; `txParameters?`: `TxParameters`  }) => `Promise`<`undefined` \| `DDO`\>

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
| `nft721.cryptoConfig?` | `CryptoConfig` | Setting for encrypting asset |
| `nft721.method?` | `EncryptionMethod` | - |
| `nft721.nftAddress` | `string` | NFT721 contract address to load |
| `nft721.nftAttributes` | `NFTAttributes` | The attribute object discribing the asset (metadata, price, encryption method, etc...) |
| `nft721.onEvent?` | (`next`: `CreateProgressStep`) => `void` | A callback to handle progress events |
| `nft721.password?` | `string` | Password to encrypt metadata |
| `nft721.publishMetadata?` | `PublishMetadata` | Allows to specify if the metadata should be stored in different backends |
| `nft721.txParameters?` | `TxParameters` | - |

##### Returns

`Promise`<`undefined` \| `DDO`\>

The DDO object including the asset metadata and the DID

#### Defined in

[types/index.ts:931](https://github.com/nevermined-io/react-components/blob/1bec16c/catalog/src/types/index.ts#L931)

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

[types/index.ts:882](https://github.com/nevermined-io/react-components/blob/1bec16c/catalog/src/types/index.ts#L882)

___

### setAssetMessage

• **setAssetMessage**: `Dispatch`<`SetStateAction`<`string`\>\>

Set asset message

#### Defined in

[types/index.ts:871](https://github.com/nevermined-io/react-components/blob/1bec16c/catalog/src/types/index.ts#L871)

___

### setAssetPublish

• **setAssetPublish**: `Dispatch`<`SetStateAction`<[`AssetPublishParams`](AssetPublishParams.md)\>\>

Set parameters needed to publish an asset

#### Defined in

[types/index.ts:869](https://github.com/nevermined-io/react-components/blob/1bec16c/catalog/src/types/index.ts#L869)

___

### setErrorAssetMessage

• **setErrorAssetMessage**: `Dispatch`<`SetStateAction`<`string`\>\>

Set error asset message

#### Defined in

[types/index.ts:873](https://github.com/nevermined-io/react-components/blob/1bec16c/catalog/src/types/index.ts#L873)
