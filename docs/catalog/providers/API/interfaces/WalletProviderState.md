# Interface: WalletProviderState

This component is a layer of [Wagmi](https://wagmi.sh/docs/getting-started) and [ConnectKit](https://docs.family.co/connectkit)
which allow to handle Metamask, WalletConnect and Coinbase without needing to set any config

## Table of contents

### Properties

- [checkIsChainCorrect](WalletProviderState.md#checkischaincorrect)
- [client](WalletProviderState.md#client)
- [getAllAvailableChains](WalletProviderState.md#getallavailablechains)
- [getConnectors](WalletProviderState.md#getconnectors)
- [getProvider](WalletProviderState.md#getprovider)
- [getStatus](WalletProviderState.md#getstatus)
- [login](WalletProviderState.md#login)
- [logout](WalletProviderState.md#logout)
- [walletAddress](WalletProviderState.md#walletaddress)

## Properties

### checkIsChainCorrect

• **checkIsChainCorrect**: () => `boolean`

#### Type declaration

▸ (): `boolean`

If chain is between the available networks supported

##### Returns

`boolean`

#### Defined in

[src/client.tsx:100](https://github.com/nevermined-io/components-catalog/blob/0aa351b/providers/src/client.tsx#L100)

___

### client

• **client**: `Client`<`Provider`, `WebSocketProvider`\>

All the wagmi client functionalities

**`See`**

[wagmi](https://wagmi.sh/docs/getting-started)

#### Defined in

[src/client.tsx:84](https://github.com/nevermined-io/components-catalog/blob/0aa351b/providers/src/client.tsx#L84)

___

### getAllAvailableChains

• **getAllAvailableChains**: () => `Chain`[]

#### Type declaration

▸ (): `Chain`[]

Get all the available chains

##### Returns

`Chain`[]

#### Defined in

[src/client.tsx:94](https://github.com/nevermined-io/components-catalog/blob/0aa351b/providers/src/client.tsx#L94)

___

### getConnectors

• **getConnectors**: () => `Connector`<`any`, `any`, `any`\>[]

#### Type declaration

▸ (): `Connector`<`any`, `any`, `any`\>[]

Get all the connectors available

##### Returns

`Connector`<`any`, `any`, `any`\>[]

#### Defined in

[src/client.tsx:88](https://github.com/nevermined-io/components-catalog/blob/0aa351b/providers/src/client.tsx#L88)

___

### getProvider

• **getProvider**: () => `Provider`

#### Type declaration

▸ (): `Provider`

Metamask provider for example web3 or ethers

##### Returns

`Provider`

#### Defined in

[src/client.tsx:86](https://github.com/nevermined-io/components-catalog/blob/0aa351b/providers/src/client.tsx#L86)

___

### getStatus

• **getStatus**: () => `undefined` \| ``"connecting"`` \| ``"connected"`` \| ``"reconnecting"`` \| ``"disconnected"``

#### Type declaration

▸ (): `undefined` \| ``"connecting"`` \| ``"connected"`` \| ``"reconnecting"`` \| ``"disconnected"``

Get the status of the wallet

##### Returns

`undefined` \| ``"connecting"`` \| ``"connected"`` \| ``"reconnecting"`` \| ``"disconnected"``

#### Defined in

[src/client.tsx:92](https://github.com/nevermined-io/components-catalog/blob/0aa351b/providers/src/client.tsx#L92)

___

### login

• **login**: (`connector`: `Connector`<`any`, `any`, `any`\>) => `void`

#### Type declaration

▸ (`connector`): `void`

Login in Provider

##### Parameters

| Name | Type |
| :------ | :------ |
| `connector` | `Connector`<`any`, `any`, `any`\> |

##### Returns

`void`

#### Defined in

[src/client.tsx:98](https://github.com/nevermined-io/components-catalog/blob/0aa351b/providers/src/client.tsx#L98)

___

### logout

• **logout**: () => `void`

#### Type declaration

▸ (): `void`

Logout from the wallet

##### Returns

`void`

#### Defined in

[src/client.tsx:90](https://github.com/nevermined-io/components-catalog/blob/0aa351b/providers/src/client.tsx#L90)

___

### walletAddress

• **walletAddress**: `string`

The address of the wallet account

#### Defined in

[src/client.tsx:96](https://github.com/nevermined-io/components-catalog/blob/0aa351b/providers/src/client.tsx#L96)
