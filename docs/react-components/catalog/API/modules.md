# @nevermined-io/catalog

## Table of contents

### Namespaces

- [AccountService](modules/AccountService.md)
- [AssetService](modules/AssetService.md)
- [AuthToken](modules/AuthToken.md)
- [Catalog](modules/Catalog.md)
- [EventService](modules/EventService.md)
- [SubscribeService](modules/SubscribeService.md)

### Enumerations

- [State](enums/State.md)
- [TransferNFTConditionMethod](enums/TransferNFTConditionMethod.md)

### Interfaces

- [AccountModule](interfaces/AccountModule.md)
- [AssetFile](interfaces/AssetFile.md)
- [AssetPublishParams](interfaces/AssetPublishParams.md)
- [AssetPublishProviderState](interfaces/AssetPublishProviderState.md)
- [AssetState](interfaces/AssetState.md)
- [AssetsModule](interfaces/AssetsModule.md)
- [Credentials](interfaces/Credentials.md)
- [CustomErc20Token](interfaces/CustomErc20Token.md)
- [FileMetadata](interfaces/FileMetadata.md)
- [FulfilledOrders](interfaces/FulfilledOrders.md)
- [GenericOutput](interfaces/GenericOutput.md)
- [NFTDetails](interfaces/NFTDetails.md)
- [NFTSModule](interfaces/NFTSModule.md)
- [NeverminedProviderContext](interfaces/NeverminedProviderContext.md)
- [NeverminedProviderProps](interfaces/NeverminedProviderProps.md)
- [RegisterEvent](interfaces/RegisterEvent.md)
- [SearchOptions](interfaces/SearchOptions.md)
- [SubscribeModule](interfaces/SubscribeModule.md)
- [SubscriptionsAndDatasetsDDOs](interfaces/SubscriptionsAndDatasetsDDOs.md)
- [SubscriptionsAndServicesDDOs](interfaces/SubscriptionsAndServicesDDOs.md)
- [Transfer](interfaces/Transfer.md)
- [UserProfileParams](interfaces/UserProfileParams.md)

### Type Aliases

- [DID](modules.md#did)

### Variables

- [emptyQueryResult](modules.md#emptyqueryresult)

### Functions

- [conductOrder](modules.md#conductorder)
- [executeWithProgressEvent](modules.md#executewithprogressevent)
- [getAccountObject](modules.md#getaccountobject)
- [getAgreementId](modules.md#getagreementid)
- [getNewSdkInstance](modules.md#getnewsdkinstance)
- [getSubscriptionsAndDatasets](modules.md#getsubscriptionsanddatasets)
- [getSubscriptionsAndServices](modules.md#getsubscriptionsandservices)
- [handlePostRequest](modules.md#handlepostrequest)
- [isEmptyObject](modules.md#isemptyobject)
- [loadFulfilledEvents](modules.md#loadfulfilledevents)

## Type Aliases

### DID

Ƭ **DID**: `string`

Id of the asset

#### Defined in

[types/index.ts:321](https://github.com/nevermined-io/react-components/blob/8455fbd/catalog/src/types/index.ts#L321)

## Variables

### emptyQueryResult

• `Const` **emptyQueryResult**: `QueryResult`

#### Defined in

[utils/index.ts:241](https://github.com/nevermined-io/react-components/blob/8455fbd/catalog/src/utils/index.ts#L241)

## Functions

### conductOrder

▸ **conductOrder**(`orderParams`): `Promise`<`string`\>

Order transfer asset to a new owner

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `orderParams` | `Object` |  |
| `orderParams.ddo` | `DDO` | Asset object |
| `orderParams.ercType?` | `ERCType` | NFT Type |
| `orderParams.neverminedNodeAddress` | `string` | Address of Node to allow handle the asset transaction |
| `orderParams.newOwner` | `Account` | Address of the new owner who will be transferred the asset |
| `orderParams.sdk` | `Nevermined` | Instance of SDK object |

#### Returns

`Promise`<`string`\>

Agreement id generated after order an asset

#### Defined in

[utils/index.ts:43](https://github.com/nevermined-io/react-components/blob/8455fbd/catalog/src/utils/index.ts#L43)

___

### executeWithProgressEvent

▸ **executeWithProgressEvent**<`T`\>(`subscribableAction`, `onEvent?`): `Promise`<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `subscribableAction` | () => `SubscribablePromise`<`any`, `T`\> |
| `onEvent?` | (`next`: `any`) => `void` |

#### Returns

`Promise`<`T`\>

#### Defined in

[utils/index.ts:219](https://github.com/nevermined-io/react-components/blob/8455fbd/catalog/src/utils/index.ts#L219)

___

### getAccountObject

▸ **getAccountObject**(`sdk`, `accountAddress`): `Promise`<`Account`\>

Returns account object by passing an account address

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `sdk` | `Nevermined` | Instance of SDK object |
| `accountAddress` | `string` | Account address |

#### Returns

`Promise`<`Account`\>

#### Defined in

[utils/index.ts:25](https://github.com/nevermined-io/react-components/blob/8455fbd/catalog/src/utils/index.ts#L25)

___

### getAgreementId

▸ **getAgreementId**(`sdk`, `template`, `did`): `Promise`<`string`\>

Get agreement id of the asset based in the account that request it

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `sdk` | `Nevermined` | Instance of SDK object |
| `template` | `Template` | The template to use according of type of asset |
| `did` | `string` | The id of the asset |

#### Returns

`Promise`<`string`\>

Agreement id generated after order an asset

#### Defined in

[utils/index.ts:118](https://github.com/nevermined-io/react-components/blob/8455fbd/catalog/src/utils/index.ts#L118)

___

### getNewSdkInstance

▸ **getNewSdkInstance**(`config`, `token`): `Promise`<`Nevermined`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | `NeverminedOptions` |
| `token` | `string` |

#### Returns

`Promise`<`Nevermined`\>

#### Defined in

[utils/index.ts:234](https://github.com/nevermined-io/react-components/blob/8455fbd/catalog/src/utils/index.ts#L234)

___

### getSubscriptionsAndDatasets

▸ **getSubscriptionsAndDatasets**(`subscriptionsDDOs`, `sdk`, `searchOptions?`): `Promise`<{ `datasets`: `QueryResult` = query; `subscription`: `DDO` = ddo }[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `subscriptionsDDOs` | `DDO`[] |
| `sdk` | `Nevermined` |
| `searchOptions?` | [`SearchOptions`](interfaces/SearchOptions.md) |

#### Returns

`Promise`<{ `datasets`: `QueryResult` = query; `subscription`: `DDO` = ddo }[]\>

#### Defined in

[utils/index.ts:195](https://github.com/nevermined-io/react-components/blob/8455fbd/catalog/src/utils/index.ts#L195)

___

### getSubscriptionsAndServices

▸ **getSubscriptionsAndServices**(`subscriptionsDDOs`, `sdk`, `searchOptions?`): `Promise`<{ `services`: `QueryResult` = query; `subscription`: `DDO` = ddo }[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `subscriptionsDDOs` | `DDO`[] |
| `sdk` | `Nevermined` |
| `searchOptions?` | [`SearchOptions`](interfaces/SearchOptions.md) |

#### Returns

`Promise`<{ `services`: `QueryResult` = query; `subscription`: `DDO` = ddo }[]\>

#### Defined in

[utils/index.ts:171](https://github.com/nevermined-io/react-components/blob/8455fbd/catalog/src/utils/index.ts#L171)

___

### handlePostRequest

▸ **handlePostRequest**(`url`, `formData`, `retries?`): `Promise`<`any`\>

Handle a post request with retries if it fail

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `url` | `string` | `undefined` | Url to request |
| `formData` | `FormData` | `undefined` | The form data to request |
| `retries` | `number` | `3` | Number of requests to try |

#### Returns

`Promise`<`any`\>

Return the result data of the request

#### Defined in

[utils/index.ts:146](https://github.com/nevermined-io/react-components/blob/8455fbd/catalog/src/utils/index.ts#L146)

___

### isEmptyObject

▸ **isEmptyObject**(`i`): `boolean`

Checks if object is empty

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `i` | `any` | Object to check |

#### Returns

`boolean`

`true` if object is empty or undefined

#### Defined in

[utils/index.ts:18](https://github.com/nevermined-io/react-components/blob/8455fbd/catalog/src/utils/index.ts#L18)

___

### loadFulfilledEvents

▸ **loadFulfilledEvents**(`sdk`, `account`, `condition`): `Promise`<{ `documentId`: `string`  }[]\>

Load all the past events from an account that match with the method `getFulfilleds`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `sdk` | `Nevermined` | Instance of SDK object |
| `account` | `string` | Account user connected currently |
| `condition` | `Condition` | - |

#### Returns

`Promise`<{ `documentId`: `string`  }[]\>

Array of object with the document id of each fullfilled events

#### Defined in

[utils/index.ts:90](https://github.com/nevermined-io/react-components/blob/8455fbd/catalog/src/utils/index.ts#L90)
