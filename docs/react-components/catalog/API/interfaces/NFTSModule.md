# Interface: NFTSModule

## Table of contents

### Properties

- [access](NFTSModule.md#access)

## Properties

### access

• **access**: (`access`: { `buyer`: `Account` ; `chainId`: `number` ; `did`: `string` ; `ercType?`: `ERCType` ; `messageAuth?`: `string` ; `nftAmount`: `BigNumber` ; `nftHolder`: `string` ; `onEvent?`: (`next`: `OrderProgressStep`) => `void` ; `password?`: `string`  }) => `Promise`<`string`\>

#### Type declaration

▸ (`access`): `Promise`<`string`\>

Order a NFT asset and transfer and delegate it to the buyer

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `access` | `Object` |  |
| `access.buyer` | `Account` | Account of the buyer |
| `access.chainId` | `number` | - |
| `access.did` | `string` | Id of the NFT to subscribe |
| `access.ercType?` | `ERCType` | NFT asset type which can be `721` or `1155` |
| `access.messageAuth?` | `string` | Message auth in case that the token is expired |
| `access.nftAmount` | `BigNumber` | The amount of NFT asset to buy |
| `access.nftHolder` | `string` | The owner of the NFT asset |
| `access.onEvent?` | (`next`: `OrderProgressStep`) => `void` | - |
| `access.password?` | `string` | Password to desencrypt metadata |

##### Returns

`Promise`<`string`\>

It is successfully completed will return the `agreementId`

#### Defined in

[types/index.ts:875](https://github.com/nevermined-io/react-components/blob/6de295e/catalog/src/types/index.ts#L875)
