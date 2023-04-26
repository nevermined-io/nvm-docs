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

[client.tsx:40](https://github.com/nevermined-io/react-components/blob/1bec16c/providers/src/client.tsx#L40)

___

### client

• **client**: `Client`<`Provider`, `WebSocketProvider`\>

All the wagmi client functionalities

**`See`**

[wagmi](https://wagmi.sh/docs/getting-started)

#### Defined in

[client.tsx:24](https://github.com/nevermined-io/react-components/blob/1bec16c/providers/src/client.tsx#L24)

___

### getAllAvailableChains

• **getAllAvailableChains**: () => `Chain`[]

#### Type declaration

▸ (): `Chain`[]

Get all the available chains

##### Returns

`Chain`[]

#### Defined in

[client.tsx:34](https://github.com/nevermined-io/react-components/blob/1bec16c/providers/src/client.tsx#L34)

___

### getConnectors

• **getConnectors**: () => `Connector`<`any`, `any`, `any`\>[]

#### Type declaration

▸ (): `Connector`<`any`, `any`, `any`\>[]

Get all the connectors available

##### Returns

`Connector`<`any`, `any`, `any`\>[]

#### Defined in

[client.tsx:28](https://github.com/nevermined-io/react-components/blob/1bec16c/providers/src/client.tsx#L28)

___

### getProvider

• **getProvider**: () => `Provider`

#### Type declaration

▸ (): `Provider`

Metamask provider for example web3 or ethers

##### Returns

`Provider`

#### Defined in

[client.tsx:26](https://github.com/nevermined-io/react-components/blob/1bec16c/providers/src/client.tsx#L26)

___

### getStatus

• **getStatus**: () => `undefined` \| ``"connecting"`` \| ``"connected"`` \| ``"reconnecting"`` \| ``"disconnected"``

#### Type declaration

▸ (): `undefined` \| ``"connecting"`` \| ``"connected"`` \| ``"reconnecting"`` \| ``"disconnected"``

Get the status of the wallet

##### Returns

`undefined` \| ``"connecting"`` \| ``"connected"`` \| ``"reconnecting"`` \| ``"disconnected"``

#### Defined in

[client.tsx:32](https://github.com/nevermined-io/react-components/blob/1bec16c/providers/src/client.tsx#L32)

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

[client.tsx:38](https://github.com/nevermined-io/react-components/blob/1bec16c/providers/src/client.tsx#L38)

___

### logout

• **logout**: () => `void`

#### Type declaration

▸ (): `void`

Logout from the wallet

##### Returns

`void`

#### Defined in

[client.tsx:30](https://github.com/nevermined-io/react-components/blob/1bec16c/providers/src/client.tsx#L30)

___

### walletAddress

• **walletAddress**: `string`

The address of the wallet account

#### Defined in

[client.tsx:36](https://github.com/nevermined-io/react-components/blob/1bec16c/providers/src/client.tsx#L36)
