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

[types/index.ts:457](https://github.com/nevermined-io/react-components/blob/f13a3b1/catalog/src/types/index.ts#L457)

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

[types/index.ts:467](https://github.com/nevermined-io/react-components/blob/f13a3b1/catalog/src/types/index.ts#L467)

___

### getAssociatedDatasets

• **getAssociatedDatasets**: (`did`: `string`) => `Promise`<`DDO`[]\>

#### Type declaration

▸ (`did`): `Promise`<`DDO`[]\>

Get all the datasets associated to a subscription

##### Parameters

| Name | Type |
| :------ | :------ |
| `did` | `string` |

##### Returns

`Promise`<`DDO`[]\>

associated datasets to subscriptions

#### Defined in

[types/index.ts:422](https://github.com/nevermined-io/react-components/blob/f13a3b1/catalog/src/types/index.ts#L422)

___

### getAssociatedServices

• **getAssociatedServices**: (`did`: `string`) => `Promise`<`DDO`[]\>

#### Type declaration

▸ (`did`): `Promise`<`DDO`[]\>

Get all the services associated a subscription

##### Parameters

| Name | Type |
| :------ | :------ |
| `did` | `string` |

##### Returns

`Promise`<`DDO`[]\>

associated services to subscriptions

#### Defined in

[types/index.ts:416](https://github.com/nevermined-io/react-components/blob/f13a3b1/catalog/src/types/index.ts#L416)

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

[types/index.ts:404](https://github.com/nevermined-io/react-components/blob/f13a3b1/catalog/src/types/index.ts#L404)

___

### getPublishedSubscriptions

• **getPublishedSubscriptions**: (`address`: `string`) => `Promise`<`DDO`[]\>

#### Type declaration

▸ (`address`): `Promise`<`DDO`[]\>

Get only published Subscriptions

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `address` | `string` | the address which published the subscription returned |

##### Returns

`Promise`<`DDO`[]\>

published subscriptions

#### Defined in

[types/index.ts:410](https://github.com/nevermined-io/react-components/blob/f13a3b1/catalog/src/types/index.ts#L410)

___

### getPublishedSubscriptionsAndDatasets

• **getPublishedSubscriptionsAndDatasets**: (`address`: `string`) => `Promise`<[`SubscriptionsAndDatasetsDDOs`](SubscriptionsAndDatasetsDDOs.md)[]\>

#### Type declaration

▸ (`address`): `Promise`<[`SubscriptionsAndDatasetsDDOs`](SubscriptionsAndDatasetsDDOs.md)[]\>

Get all the published subscriptions and datasets associated from the wallet address passed

##### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |

##### Returns

`Promise`<[`SubscriptionsAndDatasetsDDOs`](SubscriptionsAndDatasetsDDOs.md)[]\>

published subscriptions and its datasets

#### Defined in

[types/index.ts:434](https://github.com/nevermined-io/react-components/blob/f13a3b1/catalog/src/types/index.ts#L434)

___

### getPublishedSubscriptionsAndServices

• **getPublishedSubscriptionsAndServices**: (`address`: `string`) => `Promise`<[`SubscriptionsAndServicesDDOs`](SubscriptionsAndServicesDDOs.md)[]\>

#### Type declaration

▸ (`address`): `Promise`<[`SubscriptionsAndServicesDDOs`](SubscriptionsAndServicesDDOs.md)[]\>

Get all the published subscriptions and services associated from the wallet address passed

##### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |

##### Returns

`Promise`<[`SubscriptionsAndServicesDDOs`](SubscriptionsAndServicesDDOs.md)[]\>

published subscriptions and service

#### Defined in

[types/index.ts:428](https://github.com/nevermined-io/react-components/blob/f13a3b1/catalog/src/types/index.ts#L428)

___

### getPurchasedSubscriptions

• **getPurchasedSubscriptions**: (`address`: `string`) => `Promise`<`DDO`[]\>

#### Type declaration

▸ (`address`): `Promise`<`DDO`[]\>

Get only purchased Subscriptions

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `address` | `string` | the address which purchased the subscription returned |

##### Returns

`Promise`<`DDO`[]\>

purchased subscriptions

#### Defined in

[types/index.ts:440](https://github.com/nevermined-io/react-components/blob/f13a3b1/catalog/src/types/index.ts#L440)

___

### getPurchasedSubscriptionsAndDatasets

• **getPurchasedSubscriptionsAndDatasets**: (`address`: `string`) => `Promise`<[`SubscriptionsAndDatasetsDDOs`](SubscriptionsAndDatasetsDDOs.md)[]\>

#### Type declaration

▸ (`address`): `Promise`<[`SubscriptionsAndDatasetsDDOs`](SubscriptionsAndDatasetsDDOs.md)[]\>

Get all the purchased subscriptions and datasets associated from the wallet address passed

##### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |

##### Returns

`Promise`<[`SubscriptionsAndDatasetsDDOs`](SubscriptionsAndDatasetsDDOs.md)[]\>

purchased subscriptions and its datasets

#### Defined in

[types/index.ts:452](https://github.com/nevermined-io/react-components/blob/f13a3b1/catalog/src/types/index.ts#L452)

___

### getPurchasedSubscriptionsAndServices

• **getPurchasedSubscriptionsAndServices**: (`address`: `string`) => `Promise`<[`SubscriptionsAndServicesDDOs`](SubscriptionsAndServicesDDOs.md)[]\>

#### Type declaration

▸ (`address`): `Promise`<[`SubscriptionsAndServicesDDOs`](SubscriptionsAndServicesDDOs.md)[]\>

Get all the purchased subscriptions and services associated from the wallet address passed

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `address` | `string` | the address which published the subscription returned |

##### Returns

`Promise`<[`SubscriptionsAndServicesDDOs`](SubscriptionsAndServicesDDOs.md)[]\>

purchased subscriptions and services

#### Defined in

[types/index.ts:446](https://github.com/nevermined-io/react-components/blob/f13a3b1/catalog/src/types/index.ts#L446)

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

[types/index.ts:398](https://github.com/nevermined-io/react-components/blob/f13a3b1/catalog/src/types/index.ts#L398)

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

[types/index.ts:475](https://github.com/nevermined-io/react-components/blob/f13a3b1/catalog/src/types/index.ts#L475)

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

[types/index.ts:485](https://github.com/nevermined-io/react-components/blob/f13a3b1/catalog/src/types/index.ts#L485)

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

[types/index.ts:495](https://github.com/nevermined-io/react-components/blob/f13a3b1/catalog/src/types/index.ts#L495)

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

[types/index.ts:462](https://github.com/nevermined-io/react-components/blob/f13a3b1/catalog/src/types/index.ts#L462)
