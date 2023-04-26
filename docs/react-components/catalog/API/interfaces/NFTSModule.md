# Interface: NFTSModule

## Table of contents

### Properties

- [access](NFTSModule.md#access)

## Properties

### access

• **access**: (`access`: { `accountIndex?`: `number` ; `did`: `string` ; `ercType`: `ERCType` ; `nftAmount`: `BigNumber` ; `nftHolder`: `string` ; `onEvent?`: (`next`: `OrderProgressStep`) => `void` ; `password?`: `string`  }) => `Promise`<`string`\>

#### Type declaration

▸ (`access`): `Promise`<`string`\>

Order a NFT asset and transfer and delegate it to the buyer

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `access` | `Object` |  |
| `access.accountIndex?` | `number` | account index of the account list wallet, it is used for testing purpose |
| `access.did` | `string` | Id of the NFT to subscribe |
| `access.ercType` | `ERCType` | NFT asset type which can be `721` or `1155` |
| `access.nftAmount` | `BigNumber` | The amount of NFT asset to buy |
| `access.nftHolder` | `string` | The owner of the NFT asset |
| `access.onEvent?` | (`next`: `OrderProgressStep`) => `void` | - |
| `access.password?` | `string` | Password to desencrypt metadata |

##### Returns

`Promise`<`string`\>

It is successfully completed will return the `agreementId`

#### Defined in

[types/index.ts:835](https://github.com/nevermined-io/react-components/blob/1bec16c/catalog/src/types/index.ts#L835)
