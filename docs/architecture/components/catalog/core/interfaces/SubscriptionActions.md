[@nevermined-io/catalog-core](../README.md) / [Exports](../modules.md) / SubscriptionActions

# Interface: SubscriptionActions

## Table of contents

### Properties

- [buySubscription](SubscriptionActions.md#buysubscription)

## Properties

### buySubscription

• **buySubscription**: (`subscriptionDid`: `string`, `buyer`: `default`, `nftHolder`: `string`, `nftAmount`: `number`, `nftType`: [`NftTypes`](../modules.md#nfttypes)) => `Promise`<`string`\>

#### Type declaration

▸ (`subscriptionDid`, `buyer`, `nftHolder`, `nftAmount`, `nftType`): `Promise`<`string`\>

Order a NFT asset and transfer and delegate it to the subscription buyer

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `subscriptionDid` | `string` | Id of the NFT to subscribe |
| `buyer` | `default` | The account who buy the subscription of the NFT asset |
| `nftHolder` | `string` | The owner of the NFT asset |
| `nftAmount` | `number` | The amount of NFT asset to buy |
| `nftType` | [`NftTypes`](../modules.md#nfttypes) | NFT asset type which can be 721 or 1155 |

##### Returns

`Promise`<`string`\>

It is true if the subscription was successfully completed

#### Defined in

[src/types/index.ts:768](https://github.com/nevermined-io/components-catalog/blob/58f6e93/lib/src/types/index.ts#L768)
