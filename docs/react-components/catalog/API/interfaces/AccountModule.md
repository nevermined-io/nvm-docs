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

• **generateToken**: (`account`: `Account`) => `Promise`<[`MarketplaceAPIToken`](MarketplaceAPIToken.md)\>

#### Type declaration

▸ (`account`): `Promise`<[`MarketplaceAPIToken`](MarketplaceAPIToken.md)\>

Generate a token for authentication in the Marketplace API

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `account` | `Account` | Account of the user |

##### Returns

`Promise`<[`MarketplaceAPIToken`](MarketplaceAPIToken.md)\>

The new generated token

#### Defined in

[types/index.ts:511](https://github.com/nevermined-io/react-components/blob/916db15/catalog/src/types/index.ts#L511)

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

[types/index.ts:521](https://github.com/nevermined-io/react-components/blob/916db15/catalog/src/types/index.ts#L521)

___

### getAssociatedDatasets

• **getAssociatedDatasets**: (`did`: `string`, `searchOptions?`: [`SearchOptions`](SearchOptions.md)) => `Promise`<`QueryResult`\>

#### Type declaration

▸ (`did`, `searchOptions?`): `Promise`<`QueryResult`\>

Get all the datasets associated to a subscription

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `did` | `string` | - |
| `searchOptions?` | [`SearchOptions`](SearchOptions.md) | options for customize result |

##### Returns

`Promise`<`QueryResult`\>

associated datasets to subscriptions

#### Defined in

[types/index.ts:446](https://github.com/nevermined-io/react-components/blob/916db15/catalog/src/types/index.ts#L446)

___

### getAssociatedServices

• **getAssociatedServices**: (`did`: `string`, `searchOptions?`: [`SearchOptions`](SearchOptions.md)) => `Promise`<`QueryResult`\>

#### Type declaration

▸ (`did`, `searchOptions?`): `Promise`<`QueryResult`\>

Get all the services associated a subscription

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `did` | `string` | - |
| `searchOptions?` | [`SearchOptions`](SearchOptions.md) | options for customize result |

##### Returns

`Promise`<`QueryResult`\>

associated services to subscriptions

#### Defined in

[types/index.ts:439](https://github.com/nevermined-io/react-components/blob/916db15/catalog/src/types/index.ts#L439)

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

[types/index.ts:422](https://github.com/nevermined-io/react-components/blob/916db15/catalog/src/types/index.ts#L422)

___

### getPublishedSubscriptions

• **getPublishedSubscriptions**: (`account`: `Account`, `searchOptions?`: [`SearchOptions`](SearchOptions.md)) => `Promise`<`QueryResult`\>

#### Type declaration

▸ (`account`, `searchOptions?`): `Promise`<`QueryResult`\>

Get only published Subscriptions

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `account` | `Account` | - |
| `searchOptions?` | [`SearchOptions`](SearchOptions.md) | options for customize result |

##### Returns

`Promise`<`QueryResult`\>

published subscriptions

#### Defined in

[types/index.ts:429](https://github.com/nevermined-io/react-components/blob/916db15/catalog/src/types/index.ts#L429)

___

### getPublishedSubscriptionsAndDatasets

• **getPublishedSubscriptionsAndDatasets**: (`account`: `Account`, `searchOptionsSubscriptions?`: [`SearchOptions`](SearchOptions.md), `searchOptionsDatasets?`: [`SearchOptions`](SearchOptions.md)) => `Promise`<[`SubscriptionsAndDatasetsDDOs`](SubscriptionsAndDatasetsDDOs.md)[]\>

#### Type declaration

▸ (`account`, `searchOptionsSubscriptions?`, `searchOptionsDatasets?`): `Promise`<[`SubscriptionsAndDatasetsDDOs`](SubscriptionsAndDatasetsDDOs.md)[]\>

Get all the published subscriptions and datasets associated from the wallet address passed

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `account` | `Account` | Account of the user |
| `searchOptionsSubscriptions?` | [`SearchOptions`](SearchOptions.md) | options for customize result of Subscriptions |
| `searchOptionsDatasets?` | [`SearchOptions`](SearchOptions.md) | options for customize result of Datasets |

##### Returns

`Promise`<[`SubscriptionsAndDatasetsDDOs`](SubscriptionsAndDatasetsDDOs.md)[]\>

published subscriptions and its datasets

#### Defined in

[types/index.ts:466](https://github.com/nevermined-io/react-components/blob/916db15/catalog/src/types/index.ts#L466)

___

### getPublishedSubscriptionsAndServices

• **getPublishedSubscriptionsAndServices**: (`account`: `Account`, `searchOptionsSubscriptions?`: [`SearchOptions`](SearchOptions.md), `searchOptionsServices?`: [`SearchOptions`](SearchOptions.md)) => `Promise`<[`SubscriptionsAndServicesDDOs`](SubscriptionsAndServicesDDOs.md)[]\>

#### Type declaration

▸ (`account`, `searchOptionsSubscriptions?`, `searchOptionsServices?`): `Promise`<[`SubscriptionsAndServicesDDOs`](SubscriptionsAndServicesDDOs.md)[]\>

Get all the published subscriptions and services associated from the wallet address passed

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `account` | `Account` | Account of the user |
| `searchOptionsSubscriptions?` | [`SearchOptions`](SearchOptions.md) | options for customize result of Subscriptions |
| `searchOptionsServices?` | [`SearchOptions`](SearchOptions.md) | options for customize result of Service |

##### Returns

`Promise`<[`SubscriptionsAndServicesDDOs`](SubscriptionsAndServicesDDOs.md)[]\>

published subscriptions and service

#### Defined in

[types/index.ts:454](https://github.com/nevermined-io/react-components/blob/916db15/catalog/src/types/index.ts#L454)

___

### getPurchasedSubscriptions

• **getPurchasedSubscriptions**: (`account`: `Account`, `searchOptions?`: [`SearchOptions`](SearchOptions.md)) => `Promise`<`QueryResult`\>

#### Type declaration

▸ (`account`, `searchOptions?`): `Promise`<`QueryResult`\>

Get only purchased Subscriptions

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `account` | `Account` | Account of the user |
| `searchOptions?` | [`SearchOptions`](SearchOptions.md) | options for customize result |

##### Returns

`Promise`<`QueryResult`\>

purchased subscriptions

#### Defined in

[types/index.ts:478](https://github.com/nevermined-io/react-components/blob/916db15/catalog/src/types/index.ts#L478)

___

### getPurchasedSubscriptionsAndDatasets

• **getPurchasedSubscriptionsAndDatasets**: (`account`: `Account`, `searchOptionsSubscriptions?`: [`SearchOptions`](SearchOptions.md), `searchOptionsDatasets?`: [`SearchOptions`](SearchOptions.md)) => `Promise`<[`SubscriptionsAndDatasetsDDOs`](SubscriptionsAndDatasetsDDOs.md)[]\>

#### Type declaration

▸ (`account`, `searchOptionsSubscriptions?`, `searchOptionsDatasets?`): `Promise`<[`SubscriptionsAndDatasetsDDOs`](SubscriptionsAndDatasetsDDOs.md)[]\>

Get all the purchased subscriptions and datasets associated from the wallet address passed

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `account` | `Account` | Account of the user |
| `searchOptionsSubscriptions?` | [`SearchOptions`](SearchOptions.md) | options for customize result of Subscriptions |
| `searchOptionsDatasets?` | [`SearchOptions`](SearchOptions.md) | options for customize result of Datasets |

##### Returns

`Promise`<[`SubscriptionsAndDatasetsDDOs`](SubscriptionsAndDatasetsDDOs.md)[]\>

purchased subscriptions and its datasets

#### Defined in

[types/index.ts:501](https://github.com/nevermined-io/react-components/blob/916db15/catalog/src/types/index.ts#L501)

___

### getPurchasedSubscriptionsAndServices

• **getPurchasedSubscriptionsAndServices**: (`account`: `Account`, `searchOptionsSubscriptions?`: [`SearchOptions`](SearchOptions.md), `searchOptionsServices?`: [`SearchOptions`](SearchOptions.md)) => `Promise`<[`SubscriptionsAndServicesDDOs`](SubscriptionsAndServicesDDOs.md)[]\>

#### Type declaration

▸ (`account`, `searchOptionsSubscriptions?`, `searchOptionsServices?`): `Promise`<[`SubscriptionsAndServicesDDOs`](SubscriptionsAndServicesDDOs.md)[]\>

Get all the purchased subscriptions and services associated from the wallet address passed

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `account` | `Account` | Account of the user |
| `searchOptionsSubscriptions?` | [`SearchOptions`](SearchOptions.md) | options for customize result of Subscriptions |
| `searchOptionsServices?` | [`SearchOptions`](SearchOptions.md) | options for customize result of Service |

##### Returns

`Promise`<[`SubscriptionsAndServicesDDOs`](SubscriptionsAndServicesDDOs.md)[]\>

purchased subscriptions and services

#### Defined in

[types/index.ts:489](https://github.com/nevermined-io/react-components/blob/916db15/catalog/src/types/index.ts#L489)

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

[types/index.ts:416](https://github.com/nevermined-io/react-components/blob/916db15/catalog/src/types/index.ts#L416)

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

[types/index.ts:529](https://github.com/nevermined-io/react-components/blob/916db15/catalog/src/types/index.ts#L529)

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

[types/index.ts:539](https://github.com/nevermined-io/react-components/blob/916db15/catalog/src/types/index.ts#L539)

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

[types/index.ts:549](https://github.com/nevermined-io/react-components/blob/916db15/catalog/src/types/index.ts#L549)

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

[types/index.ts:516](https://github.com/nevermined-io/react-components/blob/916db15/catalog/src/types/index.ts#L516)
