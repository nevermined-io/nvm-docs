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

[providers/src/client.tsx:105](https://github.com/nevermined-io/react-components/blob/68ff983/providers/src/client.tsx#L105)

___

### client

• **client**: `Client`<`Provider`, `WebSocketProvider`\>

All the wagmi client functionalities

**`See`**

[wagmi](https://wagmi.sh/docs/getting-started)

#### Defined in

[providers/src/client.tsx:89](https://github.com/nevermined-io/react-components/blob/68ff983/providers/src/client.tsx#L89)

___

### getAllAvailableChains

• **getAllAvailableChains**: () => `Chain`[]

#### Type declaration

▸ (): `Chain`[]

Get all the available chains

##### Returns

`Chain`[]

#### Defined in

[providers/src/client.tsx:99](https://github.com/nevermined-io/react-components/blob/68ff983/providers/src/client.tsx#L99)

___

### getConnectors

• **getConnectors**: () => `Connector`<`any`, `any`, `any`\>[]

#### Type declaration

▸ (): `Connector`<`any`, `any`, `any`\>[]

Get all the connectors available

##### Returns

`Connector`<`any`, `any`, `any`\>[]

#### Defined in

[providers/src/client.tsx:93](https://github.com/nevermined-io/react-components/blob/68ff983/providers/src/client.tsx#L93)

___

### getProvider

• **getProvider**: () => `Provider`

#### Type declaration

▸ (): `Provider`

Metamask provider for example web3 or ethers

##### Returns

`Provider`

#### Defined in

[providers/src/client.tsx:91](https://github.com/nevermined-io/react-components/blob/68ff983/providers/src/client.tsx#L91)

___

### getStatus

• **getStatus**: () => `undefined` \| ``"connecting"`` \| ``"connected"`` \| ``"reconnecting"`` \| ``"disconnected"``

#### Type declaration

▸ (): `undefined` \| ``"connecting"`` \| ``"connected"`` \| ``"reconnecting"`` \| ``"disconnected"``

Get the status of the wallet

##### Returns

`undefined` \| ``"connecting"`` \| ``"connected"`` \| ``"reconnecting"`` \| ``"disconnected"``

#### Defined in

[providers/src/client.tsx:97](https://github.com/nevermined-io/react-components/blob/68ff983/providers/src/client.tsx#L97)

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

[providers/src/client.tsx:103](https://github.com/nevermined-io/react-components/blob/68ff983/providers/src/client.tsx#L103)

___

### logout

• **logout**: () => `void`

#### Type declaration

▸ (): `void`

Logout from the wallet

##### Returns

`void`

#### Defined in

[providers/src/client.tsx:95](https://github.com/nevermined-io/react-components/blob/68ff983/providers/src/client.tsx#L95)

___

### walletAddress

• **walletAddress**: `string`

The address of the wallet account

#### Defined in

[providers/src/client.tsx:101](https://github.com/nevermined-io/react-components/blob/68ff983/providers/src/client.tsx#L101)
