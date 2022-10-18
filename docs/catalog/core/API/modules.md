# @nevermined-io/catalog-core

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
- [CustomErc20Token](interfaces/CustomErc20Token.md)
- [FileMetadata](interfaces/FileMetadata.md)
- [FulfilledOrders](interfaces/FulfilledOrders.md)
- [GenericOutput](interfaces/GenericOutput.md)
- [MarketplaceAPIToken](interfaces/MarketplaceAPIToken.md)
- [NFTDetails](interfaces/NFTDetails.md)
- [NeverminedProviderContext](interfaces/NeverminedProviderContext.md)
- [NeverminedProviderProps](interfaces/NeverminedProviderProps.md)
- [RegisterEvent](interfaces/RegisterEvent.md)
- [SubscribeModule](interfaces/SubscribeModule.md)
- [SubscriptionActions](interfaces/SubscriptionActions.md)
- [Transfer](interfaces/Transfer.md)
- [UserProfileParams](interfaces/UserProfileParams.md)

### Type Aliases

- [BigNumber](modules.md#bignumber)
- [DID](modules.md#did)

### Variables

- [BigNumber](modules.md#bignumber-1)

### Functions

- [conductOrder](modules.md#conductorder)
- [getAgreementId](modules.md#getagreementid)
- [getCurrentAccount](modules.md#getcurrentaccount)
- [handlePostRequest](modules.md#handlepostrequest)
- [isEmptyObject](modules.md#isemptyobject)
- [loadFulfilledEvents](modules.md#loadfulfilledevents)

## Type Aliases

### BigNumber

Ƭ **BigNumber**: `BigNumberUtils`

#### Defined in

[types/index.ts:34](https://github.com/nevermined-io/components-catalog/blob/23aab4e/lib/src/types/index.ts#L34)

[types/index.ts:35](https://github.com/nevermined-io/components-catalog/blob/23aab4e/lib/src/types/index.ts#L35)

___

### DID

Ƭ **DID**: `string`

Id of the asset

#### Defined in

[types/index.ts:355](https://github.com/nevermined-io/components-catalog/blob/23aab4e/lib/src/types/index.ts#L355)

## Variables

### BigNumber

• `Const` **BigNumber**: typeof `default` = `BigNumberUtils`

#### Defined in

[types/index.ts:34](https://github.com/nevermined-io/components-catalog/blob/23aab4e/lib/src/types/index.ts#L34)

[types/index.ts:35](https://github.com/nevermined-io/components-catalog/blob/23aab4e/lib/src/types/index.ts#L35)

## Functions

### conductOrder

▸ **conductOrder**(`orderParams`): `Promise`<`string`\>

Order transfer asset to a new owner

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `orderParams` | `Object` |  |
| `orderParams.ddo` | `DDO` | Asset object |
| `orderParams.gatewayAddress` | `string` | Address of gateway to allow handle the asset transaction |
| `orderParams.newOwner` | `default` | Address of the new owner who will be transferred the asset |
| `orderParams.sdk` | `Nevermined` | Instance of SDK object |

#### Returns

`Promise`<`string`\>

Agreement id generated after order an asset

#### Defined in

[utils/index.ts:43](https://github.com/nevermined-io/components-catalog/blob/23aab4e/lib/src/utils/index.ts#L43)

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

[utils/index.ts:111](https://github.com/nevermined-io/components-catalog/blob/23aab4e/lib/src/utils/index.ts#L111)

___

### getCurrentAccount

▸ **getCurrentAccount**(`sdk`): `Promise`<`default`\>

Returns current account registered in SDK

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `sdk` | `Nevermined` | Instance of SDK object |

#### Returns

`Promise`<`default`\>

#### Defined in

[utils/index.ts:18](https://github.com/nevermined-io/components-catalog/blob/23aab4e/lib/src/utils/index.ts#L18)

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

[utils/index.ts:140](https://github.com/nevermined-io/components-catalog/blob/23aab4e/lib/src/utils/index.ts#L140)

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

[utils/index.ts:11](https://github.com/nevermined-io/components-catalog/blob/23aab4e/lib/src/utils/index.ts#L11)

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

[utils/index.ts:82](https://github.com/nevermined-io/components-catalog/blob/23aab4e/lib/src/utils/index.ts#L82)
