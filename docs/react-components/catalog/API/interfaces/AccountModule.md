# Interface: AccountModule

AccountModule is exposed by the main context
under 'account' object

## Table of contents

### Properties

- [generateToken](AccountModule.md#generatetoken)
- [getAddressTokenSigner](AccountModule.md#getaddresstokensigner)
- [getAssociatedDatasets](AccountModule.md#getassociateddatasets)
- [getAssociatedServices](AccountModule.md#getassociatedservices)
- [getCollection](AccountModule.md#getcollection)
- [getPublishedSubscriptions](AccountModule.md#getpublishedsubscriptions)
- [getPublishedSubscriptionsAndDatasets](AccountModule.md#getpublishedsubscriptionsanddatasets)
- [getPublishedSubscriptionsAndServices](AccountModule.md#getpublishedsubscriptionsandservices)
- [getPurchasedSubscriptions](AccountModule.md#getpurchasedsubscriptions)
- [getPurchasedSubscriptionsAndDatasets](AccountModule.md#getpurchasedsubscriptionsanddatasets)
- [getPurchasedSubscriptionsAndServices](AccountModule.md#getpurchasedsubscriptionsandservices)
- [getReleases](AccountModule.md#getreleases)
- [isAssetHolder](AccountModule.md#isassetholder)
- [isNFT1155Holder](AccountModule.md#isnft1155holder)
- [isNFT721Holder](AccountModule.md#isnft721holder)
- [isTokenValid](AccountModule.md#istokenvalid)

## Properties

### generateToken

• **generateToken**: () => `Promise`<[`MarketplaceAPIToken`](MarketplaceAPIToken.md)\>

#### Type declaration

▸ (): `Promise`<[`MarketplaceAPIToken`](MarketplaceAPIToken.md)\>

Generate a token for authentication in the Marketplace API

##### Returns

`Promise`<[`MarketplaceAPIToken`](MarketplaceAPIToken.md)\>

The new generated token

#### Defined in

[types/index.ts:482](https://github.com/nevermined-io/react-components/blob/1bec16c/catalog/src/types/index.ts#L482)

___

### getAddressTokenSigner

• **getAddressTokenSigner**: () => `string`

#### Type declaration

▸ (): `string`

Return the address that sign the token

##### Returns

`string`

The address token signer

#### Defined in

[types/index.ts:492](https://github.com/nevermined-io/react-components/blob/1bec16c/catalog/src/types/index.ts#L492)

___

### getAssociatedDatasets

• **getAssociatedDatasets**: (`did`: `string`, `searchOptions?`: [`SearchOptions`](SearchOptions.md)) => `Promise`<`DDO`[]\>

#### Type declaration

▸ (`did`, `searchOptions?`): `Promise`<`DDO`[]\>

Get all the datasets associated to a subscription

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `did` | `string` | - |
| `searchOptions?` | [`SearchOptions`](SearchOptions.md) | options for customize result |

##### Returns

`Promise`<`DDO`[]\>

associated datasets to subscriptions

#### Defined in

[types/index.ts:439](https://github.com/nevermined-io/react-components/blob/1bec16c/catalog/src/types/index.ts#L439)

___

### getAssociatedServices

• **getAssociatedServices**: (`did`: `string`, `searchOptions?`: [`SearchOptions`](SearchOptions.md)) => `Promise`<`DDO`[]\>

#### Type declaration

▸ (`did`, `searchOptions?`): `Promise`<`DDO`[]\>

Get all the services associated a subscription

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `did` | `string` | - |
| `searchOptions?` | [`SearchOptions`](SearchOptions.md) | options for customize result |

##### Returns

`Promise`<`DDO`[]\>

associated services to subscriptions

#### Defined in

[types/index.ts:432](https://github.com/nevermined-io/react-components/blob/1bec16c/catalog/src/types/index.ts#L432)

___

### getCollection

• **getCollection**: (`address`: `string`) => `Promise`<`string`[]\>

#### Type declaration

▸ (`address`): `Promise`<`string`[]\>

Get the assets bought by the address given

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `address` | `string` | The address which bought the assets returned |

##### Returns

`Promise`<`string`[]\>

List of assets which was bought by the address given as argument

#### Defined in

[types/index.ts:418](https://github.com/nevermined-io/react-components/blob/1bec16c/catalog/src/types/index.ts#L418)

___

### getPublishedSubscriptions

• **getPublishedSubscriptions**: (`searchOptions?`: [`SearchOptions`](SearchOptions.md)) => `Promise`<`DDO`[]\>

#### Type declaration

▸ (`searchOptions?`): `Promise`<`DDO`[]\>

Get only published Subscriptions

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `searchOptions?` | [`SearchOptions`](SearchOptions.md) | options for customize result |

##### Returns

`Promise`<`DDO`[]\>

published subscriptions

#### Defined in

[types/index.ts:425](https://github.com/nevermined-io/react-components/blob/1bec16c/catalog/src/types/index.ts#L425)

___

### getPublishedSubscriptionsAndDatasets

• **getPublishedSubscriptionsAndDatasets**: (`searchOptions?`: [`SearchOptions`](SearchOptions.md)) => `Promise`<[`SubscriptionsAndDatasetsDDOs`](SubscriptionsAndDatasetsDDOs.md)[]\>

#### Type declaration

▸ (`searchOptions?`): `Promise`<[`SubscriptionsAndDatasetsDDOs`](SubscriptionsAndDatasetsDDOs.md)[]\>

Get all the published subscriptions and datasets associated from the wallet address passed

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `searchOptions?` | [`SearchOptions`](SearchOptions.md) | options for customize result |

##### Returns

`Promise`<[`SubscriptionsAndDatasetsDDOs`](SubscriptionsAndDatasetsDDOs.md)[]\>

published subscriptions and its datasets

#### Defined in

[types/index.ts:453](https://github.com/nevermined-io/react-components/blob/1bec16c/catalog/src/types/index.ts#L453)

___

### getPublishedSubscriptionsAndServices

• **getPublishedSubscriptionsAndServices**: (`searchOptions?`: [`SearchOptions`](SearchOptions.md)) => `Promise`<[`SubscriptionsAndServicesDDOs`](SubscriptionsAndServicesDDOs.md)[]\>

#### Type declaration

▸ (`searchOptions?`): `Promise`<[`SubscriptionsAndServicesDDOs`](SubscriptionsAndServicesDDOs.md)[]\>

Get all the published subscriptions and services associated from the wallet address passed

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `searchOptions?` | [`SearchOptions`](SearchOptions.md) | options for customize result |

##### Returns

`Promise`<[`SubscriptionsAndServicesDDOs`](SubscriptionsAndServicesDDOs.md)[]\>

published subscriptions and service

#### Defined in

[types/index.ts:445](https://github.com/nevermined-io/react-components/blob/1bec16c/catalog/src/types/index.ts#L445)

___

### getPurchasedSubscriptions

• **getPurchasedSubscriptions**: (`searchOptions?`: [`SearchOptions`](SearchOptions.md)) => `Promise`<`DDO`[]\>

#### Type declaration

▸ (`searchOptions?`): `Promise`<`DDO`[]\>

Get only purchased Subscriptions

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `searchOptions?` | [`SearchOptions`](SearchOptions.md) | options for customize result |

##### Returns

`Promise`<`DDO`[]\>

purchased subscriptions

#### Defined in

[types/index.ts:461](https://github.com/nevermined-io/react-components/blob/1bec16c/catalog/src/types/index.ts#L461)

___

### getPurchasedSubscriptionsAndDatasets

• **getPurchasedSubscriptionsAndDatasets**: (`searchOptions?`: [`SearchOptions`](SearchOptions.md)) => `Promise`<[`SubscriptionsAndDatasetsDDOs`](SubscriptionsAndDatasetsDDOs.md)[]\>

#### Type declaration

▸ (`searchOptions?`): `Promise`<[`SubscriptionsAndDatasetsDDOs`](SubscriptionsAndDatasetsDDOs.md)[]\>

Get all the purchased subscriptions and datasets associated from the wallet address passed

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `searchOptions?` | [`SearchOptions`](SearchOptions.md) | options for customize result |

##### Returns

`Promise`<[`SubscriptionsAndDatasetsDDOs`](SubscriptionsAndDatasetsDDOs.md)[]\>

purchased subscriptions and its datasets

#### Defined in

[types/index.ts:475](https://github.com/nevermined-io/react-components/blob/1bec16c/catalog/src/types/index.ts#L475)

___

### getPurchasedSubscriptionsAndServices

• **getPurchasedSubscriptionsAndServices**: (`searchOptions?`: [`SearchOptions`](SearchOptions.md)) => `Promise`<[`SubscriptionsAndServicesDDOs`](SubscriptionsAndServicesDDOs.md)[]\>

#### Type declaration

▸ (`searchOptions?`): `Promise`<[`SubscriptionsAndServicesDDOs`](SubscriptionsAndServicesDDOs.md)[]\>

Get all the purchased subscriptions and services associated from the wallet address passed

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `searchOptions?` | [`SearchOptions`](SearchOptions.md) | options for customize result |

##### Returns

`Promise`<[`SubscriptionsAndServicesDDOs`](SubscriptionsAndServicesDDOs.md)[]\>

purchased subscriptions and services

#### Defined in

[types/index.ts:467](https://github.com/nevermined-io/react-components/blob/1bec16c/catalog/src/types/index.ts#L467)

___

### getReleases

• **getReleases**: (`address`: `string`) => `Promise`<`string`[]\>

#### Type declaration

▸ (`address`): `Promise`<`string`[]\>

Get all the assets published from the address passed by argument

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `address` | `string` | The address owner of the assets that we want to get |

##### Returns

`Promise`<`string`[]\>

List of assets which was published by the address given

#### Defined in

[types/index.ts:412](https://github.com/nevermined-io/react-components/blob/1bec16c/catalog/src/types/index.ts#L412)

___

### isAssetHolder

• **isAssetHolder**: (`did`: `string`, `walletAddress`: `string`) => `Promise`<`boolean`\>

#### Type declaration

▸ (`did`, `walletAddress`): `Promise`<`boolean`\>

This method validates if an user is an asset holder.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `did` | `string` | The unique identifier of the asset |
| `walletAddress` | `string` | The public address of the user |

##### Returns

`Promise`<`boolean`\>

true if the user owns at least one edition of the NFT

#### Defined in

[types/index.ts:500](https://github.com/nevermined-io/react-components/blob/1bec16c/catalog/src/types/index.ts#L500)

___

### isNFT1155Holder

• **isNFT1155Holder**: (`did`: `string`, `walletAddress`: `string`) => `Promise`<`boolean`\>

#### Type declaration

▸ (`did`, `walletAddress`): `Promise`<`boolean`\>

This method validates if a user is a NFT (ERC-1155 based) holder for a specific `tokenId`.
For ERC-1155 tokens, we use the DID as tokenId. A user can between zero an multiple editions
of a NFT (limitted by the NFT cap).

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `did` | `string` | The unique identifier of the NFT within a NFT ERC-1155 contract |
| `walletAddress` | `string` | The public address of the user |

##### Returns

`Promise`<`boolean`\>

true if the user owns at least one edition of the NFT

#### Defined in

[types/index.ts:510](https://github.com/nevermined-io/react-components/blob/1bec16c/catalog/src/types/index.ts#L510)

___

### isNFT721Holder

• **isNFT721Holder**: (`nftAddress`: `string`, `walletAddress`: `string`) => `Promise`<`boolean`\>

#### Type declaration

▸ (`nftAddress`, `walletAddress`): `Promise`<`boolean`\>

This method validates if a user is a NFT (ERC-721 based) holder for a specific NFT contract address.
For ERC-721 tokens, we use the DID as tokenId. A user can between zero an multiple editions
of a NFT (limitted by the NFT cap).

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `nftAddress` | `string` | The contract address of the ERC-721 NFT contract |
| `walletAddress` | `string` | The public address of the user |

##### Returns

`Promise`<`boolean`\>

true if the user holds the NFT

#### Defined in

[types/index.ts:520](https://github.com/nevermined-io/react-components/blob/1bec16c/catalog/src/types/index.ts#L520)

___

### isTokenValid

• **isTokenValid**: () => `boolean`

#### Type declaration

▸ (): `boolean`

check if the token for Marketplace API is valid

##### Returns

`boolean`

if token is valid it will return true

#### Defined in

[types/index.ts:487](https://github.com/nevermined-io/react-components/blob/1bec16c/catalog/src/types/index.ts#L487)
