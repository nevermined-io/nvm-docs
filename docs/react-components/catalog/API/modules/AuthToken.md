# Namespace: AuthToken

## Table of contents

### Variables

- [MARKETPLACE\_API\_TOKEN](AuthToken.md#marketplace_api_token)

### Functions

- [fetchMarketplaceApiTokenFromLocalStorage](AuthToken.md#fetchmarketplaceapitokenfromlocalstorage)
- [getAddressTokenSigner](AuthToken.md#getaddresstokensigner)
- [isTokenValid](AuthToken.md#istokenvalid)
- [newMarketplaceApiToken](AuthToken.md#newmarketplaceapitoken)
- [saveMarketplaceApiTokenToLocalStorage](AuthToken.md#savemarketplaceapitokentolocalstorage)

## Variables

### MARKETPLACE\_API\_TOKEN

• `Const` **MARKETPLACE\_API\_TOKEN**: ``"marketplaceAPIToken"``

#### Defined in

[utils/marketplace_token.ts:4](https://github.com/nevermined-io/react-components/blob/c920e0b/catalog/src/utils/marketplace_token.ts#L4)

## Functions

### fetchMarketplaceApiTokenFromLocalStorage

▸ **fetchMarketplaceApiTokenFromLocalStorage**(`«destructured»`): ``null`` \| `string`

Get Marketplace API token to local storage

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `address` | `string` |
| › `chainId` | `number` |

#### Returns

``null`` \| `string`

Auth token object which generated from Marketplace API

#### Defined in

[utils/marketplace_token.ts:12](https://github.com/nevermined-io/react-components/blob/c920e0b/catalog/src/utils/marketplace_token.ts#L12)

___

### getAddressTokenSigner

▸ **getAddressTokenSigner**(`«destructured»`): `undefined` \| `string`

Return the address that sign the token

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `address` | `string` |
| › `chainId` | `number` |

#### Returns

`undefined` \| `string`

The address token signer

#### Defined in

[utils/marketplace_token.ts:96](https://github.com/nevermined-io/react-components/blob/c920e0b/catalog/src/utils/marketplace_token.ts#L96)

___

### isTokenValid

▸ **isTokenValid**(`«destructured»`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `address` | `string` |
| › `chainId` | `number` |

#### Returns

`boolean`

Return `true` if token is valid

#### Defined in

[utils/marketplace_token.ts:76](https://github.com/nevermined-io/react-components/blob/c920e0b/catalog/src/utils/marketplace_token.ts#L76)

___

### newMarketplaceApiToken

▸ **newMarketplaceApiToken**(`«destructured»`): `Promise`<`boolean`\>

Generate new Marketplace API API token

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `address` | `string` |
| › `chainId` | `number` |
| › `message?` | `string` |
| › `sdk` | `Nevermined` |

#### Returns

`Promise`<`boolean`\>

Auth token object which generated from Marketplace API

#### Defined in

[utils/marketplace_token.ts:37](https://github.com/nevermined-io/react-components/blob/c920e0b/catalog/src/utils/marketplace_token.ts#L37)

___

### saveMarketplaceApiTokenToLocalStorage

▸ **saveMarketplaceApiTokenToLocalStorage**(`i`): `void`

Save Marketplace API token to local storage

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `i` | `Object` | Auth token object which is generated from Marketplace API |
| `i.address` | `string` | - |
| `i.chainId` | `number` | - |
| `i.token` | `string` | - |

#### Returns

`void`

#### Defined in

[utils/marketplace_token.ts:119](https://github.com/nevermined-io/react-components/blob/c920e0b/catalog/src/utils/marketplace_token.ts#L119)
