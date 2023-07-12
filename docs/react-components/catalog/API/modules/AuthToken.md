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

• `Const` **MARKETPLACE\_API\_TOKEN**: ``"marketplaceApiToken"``

#### Defined in

[utils/marketplace_token.ts:5](https://github.com/nevermined-io/react-components/blob/9c24121/catalog/src/utils/marketplace_token.ts#L5)

## Functions

### fetchMarketplaceApiTokenFromLocalStorage

▸ **fetchMarketplaceApiTokenFromLocalStorage**(): [`MarketplaceAPIToken`](../interfaces/MarketplaceAPIToken.md)

Get Marketplace API token to local storage

#### Returns

[`MarketplaceAPIToken`](../interfaces/MarketplaceAPIToken.md)

Auth token object which generated from Marketplace API

#### Defined in

[utils/marketplace_token.ts:25](https://github.com/nevermined-io/react-components/blob/9c24121/catalog/src/utils/marketplace_token.ts#L25)

___

### getAddressTokenSigner

▸ **getAddressTokenSigner**(): `undefined` \| `string`

Return the address that sign the token

#### Returns

`undefined` \| `string`

The address token signer

#### Defined in

[utils/marketplace_token.ts:93](https://github.com/nevermined-io/react-components/blob/9c24121/catalog/src/utils/marketplace_token.ts#L93)

___

### isTokenValid

▸ **isTokenValid**(): `boolean`

Check if Marketplace API Token is valid

#### Returns

`boolean`

Return `true` if token is valid

#### Defined in

[utils/marketplace_token.ts:71](https://github.com/nevermined-io/react-components/blob/9c24121/catalog/src/utils/marketplace_token.ts#L71)

___

### newMarketplaceApiToken

▸ **newMarketplaceApiToken**(`sdk`, `account`, `message?`): `Promise`<[`MarketplaceAPIToken`](../interfaces/MarketplaceAPIToken.md)\>

Generate new Marketplace API API token

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `sdk` | `Nevermined` | Instance of SDK object |
| `account` | `Account` | The account requesting the token |
| `message?` | `string` | Optional message to be included. Usually to be displayed in metamask |

#### Returns

`Promise`<[`MarketplaceAPIToken`](../interfaces/MarketplaceAPIToken.md)\>

Auth token object which generated from Marketplace API

#### Defined in

[utils/marketplace_token.ts:51](https://github.com/nevermined-io/react-components/blob/9c24121/catalog/src/utils/marketplace_token.ts#L51)

___

### saveMarketplaceApiTokenToLocalStorage

▸ **saveMarketplaceApiTokenToLocalStorage**(`i`): `void`

Save Marketplace API token to local storage

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `i` | [`MarketplaceAPIToken`](../interfaces/MarketplaceAPIToken.md) | Auth token object which is generated from Marketplace API |

#### Returns

`void`

#### Defined in

[utils/marketplace_token.ts:11](https://github.com/nevermined-io/react-components/blob/9c24121/catalog/src/utils/marketplace_token.ts#L11)
