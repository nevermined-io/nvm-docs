# Interface: NFTSModule

## Table of contents

### Properties

- [access](NFTSModule.md#access)

## Properties

### access

• **access**: (`did`: `string`, `nftHolder`: `string`, `nftAmount`: `default`, `ercType`: `ERCType`) => `Promise`<`string`\>

#### Type declaration

▸ (`did`, `nftHolder`, `nftAmount`, `ercType`): `Promise`<`string`\>

Order a NFT asset and transfer and delegate it to the buyer

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `did` | `string` | Id of the NFT to subscribe |
| `nftHolder` | `string` | The owner of the NFT asset |
| `nftAmount` | `default` | The amount of NFT asset to buy |
| `ercType` | `ERCType` | NFT asset type which can be 721 or 1155 |

##### Returns

`Promise`<`string`\>

It is true if the subscription was successfully completed

#### Defined in

[types/index.ts:700](https://github.com/nevermined-io/components-catalog/blob/5d4b912/lib/src/types/index.ts#L700)
