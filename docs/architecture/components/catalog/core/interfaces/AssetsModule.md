[@nevermined-io/catalog-core](../README.md) / [Exports](../modules.md) / AssetsModule

# Interface: AssetsModule

AssetsModule is exposed by the main context
under 'assets' object

## Table of contents

### Properties

- [downloadAsset](AssetsModule.md#downloadasset)
- [downloadNFT](AssetsModule.md#downloadnft)
- [getCustomErc20Token](AssetsModule.md#getcustomerc20token)
- [getSingle](AssetsModule.md#getsingle)
- [mint](AssetsModule.md#mint)
- [nftDetails](AssetsModule.md#nftdetails)
- [orderAsset](AssetsModule.md#orderasset)
- [orderNFT1155](AssetsModule.md#ordernft1155)
- [orderNFT721](AssetsModule.md#ordernft721)
- [query](AssetsModule.md#query)
- [resolve](AssetsModule.md#resolve)
- [transfer](AssetsModule.md#transfer)
- [uploadAssetToFilecoin](AssetsModule.md#uploadassettofilecoin)

## Properties

### downloadAsset

• **downloadAsset**: (`did`: `string`, `agreementId`: `string`) => `Promise`<`boolean`\>

#### Type declaration

▸ (`did`, `agreementId`): `Promise`<`boolean`\>

Download an asset already ordered and transfered to the buyer,
if the user is the owner of the asset

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `did` | `string` | id of the NFT (721 & 1155) asset |
| `agreementId` | `string` | - |

##### Returns

`Promise`<`boolean`\>

if the NFT is downloaded successfully the method will return a true

#### Defined in

[src/types/index.ts:553](https://github.com/nevermined-io/components-catalog/blob/58f6e93/lib/src/types/index.ts#L553)

___

### downloadNFT

• **downloadNFT**: (`did`: `string`) => `Promise`<`boolean`\>

#### Type declaration

▸ (`did`): `Promise`<`boolean`\>

Download a NFT asset already ordered and transfered to the buyer,
if the user is the owner of the asset

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `did` | `string` | id of the NFT (721 & 1155) asset |

##### Returns

`Promise`<`boolean`\>

if the NFT is downloaded successfully the method will return a true

#### Defined in

[src/types/index.ts:540](https://github.com/nevermined-io/components-catalog/blob/58f6e93/lib/src/types/index.ts#L540)

___

### getCustomErc20Token

• **getCustomErc20Token**: (`customErc20TokenAddress`: `string`) => `Promise`<[`CustomErc20Token`](CustomErc20Token.md)\>

#### Type declaration

▸ (`customErc20TokenAddress`): `Promise`<[`CustomErc20Token`](CustomErc20Token.md)\>

Get all the details about a custom erc20 token

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `customErc20TokenAddress` | `string` | The custom token address |

##### Returns

`Promise`<[`CustomErc20Token`](CustomErc20Token.md)\>

Custom token details

#### Defined in

[src/types/index.ts:546](https://github.com/nevermined-io/components-catalog/blob/58f6e93/lib/src/types/index.ts#L546)

___

### getSingle

• **getSingle**: (`did`: `string`) => `Promise`<`DDO`\>

#### Type declaration

▸ (`did`): `Promise`<`DDO`\>

Get the asset object by the did given

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `did` | `string` | id of the asset |

##### Returns

`Promise`<`DDO`\>

#### Defined in

[src/types/index.ts:478](https://github.com/nevermined-io/components-catalog/blob/58f6e93/lib/src/types/index.ts#L478)

___

### mint

• **mint**: (`did`: `any`) => `Promise`<`any`\>

#### Type declaration

▸ (`did`): `Promise`<`any`\>

Mint an asset

##### Parameters

| Name | Type |
| :------ | :------ |
| `did` | `any` |

##### Returns

`Promise`<`any`\>

If the asset was minted successfully the function will return `true`

#### Defined in

[src/types/index.ts:504](https://github.com/nevermined-io/components-catalog/blob/58f6e93/lib/src/types/index.ts#L504)

___

### nftDetails

• **nftDetails**: (`did`: `string`) => `Promise`<[`NFTDetails`](NFTDetails.md)\>

#### Type declaration

▸ (`did`): `Promise`<[`NFTDetails`](NFTDetails.md)\>

Get the aggreement details of the NFT asset (owner, nfts supplay, royalties, etc...)

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `did` | `string` | id of the NFT (721 & 1155) asset |

##### Returns

`Promise`<[`NFTDetails`](NFTDetails.md)\>

Agreement details of the NFT asset

#### Defined in

[src/types/index.ts:510](https://github.com/nevermined-io/components-catalog/blob/58f6e93/lib/src/types/index.ts#L510)

___

### orderAsset

• **orderAsset**: (`did`: `string`) => `Promise`<`string`\>

#### Type declaration

▸ (`did`): `Promise`<`string`\>

This method order a asset to allow after transfer to the buyer (the method only order but not transfer)

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `did` | `string` | id of the asset |

##### Returns

`Promise`<`string`\>

In case the order is completed successfully it returns the agreementId
which is needed to transfer the asset to the buyer

#### Defined in

[src/types/index.ts:517](https://github.com/nevermined-io/components-catalog/blob/58f6e93/lib/src/types/index.ts#L517)

___

### orderNFT1155

• **orderNFT1155**: (`did`: `string`) => `Promise`<`string`\>

#### Type declaration

▸ (`did`): `Promise`<`string`\>

This method order a NFT1155 asset to allow after transfer to the buyer (the method only order but not transfer)

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `did` | `string` | id of the NFT1155 asset |

##### Returns

`Promise`<`string`\>

In case the order is completed successfully it returns the agreementId
which is needed to transfer the NFT1155 asset to the buyer

#### Defined in

[src/types/index.ts:533](https://github.com/nevermined-io/components-catalog/blob/58f6e93/lib/src/types/index.ts#L533)

___

### orderNFT721

• **orderNFT721**: (`did`: `string`, `nftTokenAddress`: `string`) => `Promise`<`string`\>

#### Type declaration

▸ (`did`, `nftTokenAddress`): `Promise`<`string`\>

This method order a NFT721 asset to allow after transfer to the buyer (the method only order but not transfer)

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `did` | `string` | id of the NFT721 asset |
| `nftTokenAddress` | `string` | - |

##### Returns

`Promise`<`string`\>

In case the order is completed successfully it returns the agreementId
which is needed to transfer the NFT721 asset to the buyer

#### Defined in

[src/types/index.ts:525](https://github.com/nevermined-io/components-catalog/blob/58f6e93/lib/src/types/index.ts#L525)

___

### query

• **query**: (`q`: `SearchQuery`) => `Promise`<`QueryResult`\>

#### Type declaration

▸ (`q`): `Promise`<`QueryResult`\>

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `q` | `SearchQuery` | Query to custom the search: order result, filtering, etc... |

##### Returns

`Promise`<`QueryResult`\>

List of assets according with the query given

#### Defined in

[src/types/index.ts:484](https://github.com/nevermined-io/components-catalog/blob/58f6e93/lib/src/types/index.ts#L484)

___

### resolve

• **resolve**: (`did`: `string`) => `Promise`<`undefined` \| `DDO`\>

#### Type declaration

▸ (`did`): `Promise`<`undefined` \| `DDO`\>

Get the entire object of the asset

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `did` | `string` | id of the asset |

##### Returns

`Promise`<`undefined` \| `DDO`\>

Asset object

#### Defined in

[src/types/index.ts:490](https://github.com/nevermined-io/components-catalog/blob/58f6e93/lib/src/types/index.ts#L490)

___

### transfer

• **transfer**: (`assetInfo`: { `amount`: `number` ; `did`: `string`  }) => `Promise`<`boolean`\>

#### Type declaration

▸ (`assetInfo`): `Promise`<`boolean`\>

Transfer the ownership of the asset to other account

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `assetInfo` | `Object` |  |
| `assetInfo.amount` | `number` | The amount of asset to transfer |
| `assetInfo.did` | `string` | The id of the asset |

##### Returns

`Promise`<`boolean`\>

Return true if asset was transferred successfully

#### Defined in

[src/types/index.ts:498](https://github.com/nevermined-io/components-catalog/blob/58f6e93/lib/src/types/index.ts#L498)

___

### uploadAssetToFilecoin

• **uploadAssetToFilecoin**: (`File`: `File`, `filecoinUrl`: `string`) => `Promise`<`string`\>

#### Type declaration

▸ (`File`, `filecoinUrl`): `Promise`<`string`\>

Upload files to Filecoin

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `File` | `File` | - |
| `filecoinUrl` | `string` | The url of the Filecoin server |

##### Returns

`Promise`<`string`\>

The url where is located the file already uploaded

#### Defined in

[src/types/index.ts:560](https://github.com/nevermined-io/components-catalog/blob/58f6e93/lib/src/types/index.ts#L560)
