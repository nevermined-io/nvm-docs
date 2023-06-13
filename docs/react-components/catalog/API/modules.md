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
- [MarketplaceAPIToken](interfaces/MarketplaceAPIToken.md)
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
- [getAgreementId](modules.md#getagreementid)
- [getCurrentAccount](modules.md#getcurrentaccount)
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

[types/index.ts:321](https://github.com/nevermined-io/react-components/blob/916db15/catalog/src/types/index.ts#L321)

## Variables

### emptyQueryResult

• `Const` **emptyQueryResult**: `QueryResult`

#### Defined in

[utils/index.ts:248](https://github.com/nevermined-io/react-components/blob/916db15/catalog/src/utils/index.ts#L248)

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

[utils/index.ts:48](https://github.com/nevermined-io/react-components/blob/916db15/catalog/src/utils/index.ts#L48)

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

[utils/index.ts:226](https://github.com/nevermined-io/react-components/blob/916db15/catalog/src/utils/index.ts#L226)

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

[utils/index.ts:124](https://github.com/nevermined-io/react-components/blob/916db15/catalog/src/utils/index.ts#L124)

___

### getCurrentAccount

▸ **getCurrentAccount**(`sdk`, `index?`): `Promise`<`Account`\>

Returns current account registered in SDK

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `sdk` | `Nevermined` | `undefined` | Instance of SDK object |
| `index` | `number` | `0` | - |

#### Returns

`Promise`<`Account`\>

#### Defined in

[utils/index.ts:25](https://github.com/nevermined-io/react-components/blob/916db15/catalog/src/utils/index.ts#L25)

___

### getNewSdkInstance

▸ **getNewSdkInstance**(`config`, `tokenData`): `Promise`<`Nevermined`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | `NeverminedOptions` |
| `tokenData` | [`MarketplaceAPIToken`](interfaces/MarketplaceAPIToken.md) |

#### Returns

`Promise`<`Nevermined`\>

#### Defined in

[utils/index.ts:241](https://github.com/nevermined-io/react-components/blob/916db15/catalog/src/utils/index.ts#L241)

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

[utils/index.ts:202](https://github.com/nevermined-io/react-components/blob/916db15/catalog/src/utils/index.ts#L202)

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

[utils/index.ts:178](https://github.com/nevermined-io/react-components/blob/916db15/catalog/src/utils/index.ts#L178)

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

[utils/index.ts:153](https://github.com/nevermined-io/react-components/blob/916db15/catalog/src/utils/index.ts#L153)

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

[utils/index.ts:19](https://github.com/nevermined-io/react-components/blob/916db15/catalog/src/utils/index.ts#L19)

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

[utils/index.ts:95](https://github.com/nevermined-io/react-components/blob/916db15/catalog/src/utils/index.ts#L95)
