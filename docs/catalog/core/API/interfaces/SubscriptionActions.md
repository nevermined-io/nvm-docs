# Interface: SubscriptionActions

## Table of contents

### Properties

- [buySubscription](SubscriptionActions.md#buysubscription)

## Properties

### buySubscription

• **buySubscription**: (`subscriptionDid`: `string`, `buyer`: `default`, `nftHolder`: `string`, `nftAmount`: `default`, `ercType`: `ERCType`) => `Promise`<`string`\>

#### Type declaration

▸ (`subscriptionDid`, `buyer`, `nftHolder`, `nftAmount`, `ercType`): `Promise`<`string`\>

Order a NFT asset and transfer and delegate it to the subscription buyer

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `subscriptionDid` | `string` | Id of the NFT to subscribe |
| `buyer` | `default` | The account who buy the subscription of the NFT asset |
| `nftHolder` | `string` | The owner of the NFT asset |
| `nftAmount` | `default` | The amount of NFT asset to buy |
| `ercType` | `ERCType` | NFT asset type which can be 721 or 1155 |

##### Returns

`Promise`<`string`\>

It is true if the subscription was successfully completed

#### Defined in

[types/index.ts:748](https://github.com/nevermined-io/components-catalog/blob/23aab4e/lib/src/types/index.ts#L748)
