# Interface: AssetsModule

AssetsModule is exposed by the main context
under 'assets' object

## Table of contents

### Properties

- [downloadAsset](AssetsModule.md#downloadasset)
- [downloadNFT](AssetsModule.md#downloadnft)
- [findOne](AssetsModule.md#findone)
- [getCustomErc20Token](AssetsModule.md#getcustomerc20token)
- [nftDetails](AssetsModule.md#nftdetails)
- [orderAsset](AssetsModule.md#orderasset)
- [orderNFT1155](AssetsModule.md#ordernft1155)
- [orderNFT721](AssetsModule.md#ordernft721)
- [query](AssetsModule.md#query)
- [transfer](AssetsModule.md#transfer)
- [uploadAssetToFilecoin](AssetsModule.md#uploadassettofilecoin)

## Properties

### downloadAsset

• **downloadAsset**: (`asset`: { `accountIndex?`: `number` ; `did`: `string` ; `fileIndex?`: `number` ; `password?`: `string` ; `path?`: `string`  }) => `Promise`<`boolean`\>

#### Type declaration

▸ (`asset`): `Promise`<`boolean`\>

Download an asset already ordered and transfered to the buyer,
if the user is the owner of the asset

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `asset` | `Object` |  |
| `asset.accountIndex?` | `number` | account index of the account list wallet, it is used for testing purpose |
| `asset.did` | `string` | id of the NFT (721 & 1155) asset |
| `asset.fileIndex?` | `number` | The file to download. If not given or is -1 it will download all of them |
| `asset.password?` | `string` | Password to download a encrypted NFT |
| `asset.path?` | `string` | Destination of downloaded file |

##### Returns

`Promise`<`boolean`\>

if the NFT is downloaded successfully the method will return a true

#### Defined in

[types/index.ts:546](https://github.com/nevermined-io/components-catalog/blob/4f74426/catalog/src/types/index.ts#L546)

___

### downloadNFT

• **downloadNFT**: (`nft`: { `accountIndex?`: `number` ; `did`: `string` ; `ercType?`: `ERCType` ; `fileIndex?`: `number` ; `password?`: `string` ; `path?`: `string`  }) => `Promise`<`string` \| `boolean`\>

#### Type declaration

▸ (`nft`): `Promise`<`string` \| `boolean`\>

Download a NFT asset already ordered and transfered to the buyer,
if the user is the owner of the asset

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `nft` | `Object` |  |
| `nft.accountIndex?` | `number` | account index of the account list wallet, it is used for testing purpose |
| `nft.did` | `string` | id of the NFT (721 & 1155) asset |
| `nft.ercType?` | `ERCType` | NFT type. By default 1155 |
| `nft.fileIndex?` | `number` | The file to download. If not given or is -1 it will download all of them |
| `nft.password?` | `string` | Password to download a encrypted NFT |
| `nft.path?` | `string` | Destination of downloaded file |

##### Returns

`Promise`<`string` \| `boolean`\>

if the NFT is downloaded successfully the method will return a true

#### Defined in

[types/index.ts:514](https://github.com/nevermined-io/components-catalog/blob/4f74426/catalog/src/types/index.ts#L514)

___

### findOne

• **findOne**: (`did`: `string`) => `Promise`<`DDO`\>

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

[types/index.ts:448](https://github.com/nevermined-io/components-catalog/blob/4f74426/catalog/src/types/index.ts#L448)

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

[types/index.ts:534](https://github.com/nevermined-io/components-catalog/blob/4f74426/catalog/src/types/index.ts#L534)

___

### nftDetails

• **nftDetails**: (`did`: `string`, `ercType`: `ERCType`) => `Promise`<[`NFTDetails`](NFTDetails.md)\>

#### Type declaration

▸ (`did`, `ercType`): `Promise`<[`NFTDetails`](NFTDetails.md)\>

Get the aggreement details of the NFT asset (owner, nfts supplay, royalties, etc...)

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `did` | `string` | id of the NFT (721 & 1155) asset |
| `ercType` | `ERCType` | NFT asset type which can be 721 or 1155 |

##### Returns

`Promise`<[`NFTDetails`](NFTDetails.md)\>

Agreement details of the NFT asset

#### Defined in

[types/index.ts:478](https://github.com/nevermined-io/components-catalog/blob/4f74426/catalog/src/types/index.ts#L478)

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

[types/index.ts:485](https://github.com/nevermined-io/components-catalog/blob/4f74426/catalog/src/types/index.ts#L485)

___

### orderNFT1155

• **orderNFT1155**: (`did`: `string`, `amount`: `BigNumber`) => `Promise`<`string`\>

#### Type declaration

▸ (`did`, `amount`): `Promise`<`string`\>

This method order a NFT1155 asset to allow after transfer to the buyer (the method only order but not transfer)

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `did` | `string` | id of the NFT1155 asset |
| `amount` | `BigNumber` | Amount of NFT1155 assets to order |

##### Returns

`Promise`<`string`\>

In case the order is completed successfully it returns the agreementId
which is needed to transfer the NFT1155 asset to the buyer

#### Defined in

[types/index.ts:501](https://github.com/nevermined-io/components-catalog/blob/4f74426/catalog/src/types/index.ts#L501)

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

[types/index.ts:493](https://github.com/nevermined-io/components-catalog/blob/4f74426/catalog/src/types/index.ts#L493)

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

[types/index.ts:454](https://github.com/nevermined-io/components-catalog/blob/4f74426/catalog/src/types/index.ts#L454)

___

### transfer

• **transfer**: (`assetInfo`: { `amount`: `number` ; `did`: `string` ; `ercType`: `ERCType`  }) => `Promise`<`boolean`\>

#### Type declaration

▸ (`assetInfo`): `Promise`<`boolean`\>

Transfer the ownership of the asset to other account

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `assetInfo` | `Object` |  |
| `assetInfo.amount` | `number` | The amount of asset to transfer |
| `assetInfo.did` | `string` | The id of the asset |
| `assetInfo.ercType` | `ERCType` | NFT asset type which can be 721 or 1155 |

##### Returns

`Promise`<`boolean`\>

Return true if asset was transferred successfully

#### Defined in

[types/index.ts:463](https://github.com/nevermined-io/components-catalog/blob/4f74426/catalog/src/types/index.ts#L463)

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

[types/index.ts:565](https://github.com/nevermined-io/components-catalog/blob/4f74426/catalog/src/types/index.ts#L565)
