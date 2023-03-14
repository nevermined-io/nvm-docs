# @nevermined-io/providers

## Table of contents

### Interfaces

- [WalletProviderState](interfaces/WalletProviderState.md)

### Type Aliases

- [ConnectKitOptions](modules.md#connectkitoptions)
- [ConnectKitProviderProps](modules.md#connectkitproviderprops)

### Variables

- [WalletContext](modules.md#walletcontext)

### Functions

- [ClientComp](modules.md#clientcomp)
- [WalletProvider](modules.md#walletprovider)
- [getClient](modules.md#getclient)
- [useWallet](modules.md#usewallet)
- [zeroX](modules.md#zerox)

## Type Aliases

### ConnectKitOptions

Ƭ **ConnectKitOptions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `avoidLayoutShift?` | `boolean` |
| `bufferPolyfill?` | `boolean` |
| `customAvatar?` | `React.FC`<`CustomAvatarProps`\> |
| `disclaimer?` | `ReactNode` \| `string` |
| `embedGoogleFonts?` | `boolean` |
| `hideNoWalletCTA?` | `boolean` |
| `hideQuestionMarkCTA?` | `boolean` |
| `hideTooltips?` | `boolean` |
| `initialChainId?` | `number` |
| `language?` | `Languages` |
| `reducedMotion?` | `boolean` |
| `truncateLongENSAddress?` | `boolean` |
| `walletConnectCTA?` | ``"modal"`` \| ``"link"`` \| ``"both"`` |
| `walletConnectName?` | `string` |

#### Defined in

[providers/src/types.ts:4](https://github.com/nevermined-io/react-components/blob/014b919/providers/src/types.ts#L4)

___

### ConnectKitProviderProps

Ƭ **ConnectKitProviderProps**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `children?` | `React.ReactNode` |
| `customTheme?` | `CustomTheme` |
| `mode?` | `Mode` |
| `options?` | [`ConnectKitOptions`](modules.md#connectkitoptions) |
| `theme?` | `Theme` |

#### Defined in

[providers/src/types.ts:21](https://github.com/nevermined-io/react-components/blob/014b919/providers/src/types.ts#L21)

## Variables

### WalletContext

• `Const` **WalletContext**: `Context`<[`WalletProviderState`](interfaces/WalletProviderState.md)\>

#### Defined in

[providers/src/client.tsx:108](https://github.com/nevermined-io/react-components/blob/014b919/providers/src/client.tsx#L108)

## Functions

### ClientComp

▸ **ClientComp**(`«destructured»`): `Element`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `children` | `ReactElement`<`any`, `string` \| `JSXElementConstructor`<`any`\>\> |
| › `client` | `Client`<`Provider`, `WebSocketProvider`\> |
| › `connectKitProps?` | [`ConnectKitProviderProps`](modules.md#connectkitproviderprops) |
| › `correctNetworkId?` | `number` |

#### Returns

`Element`

#### Defined in

[providers/src/client.tsx:110](https://github.com/nevermined-io/react-components/blob/014b919/providers/src/client.tsx#L110)

___

### WalletProvider

▸ **WalletProvider**(`config`): `Element`

This component is a layer of [Wagmi](https://wagmi.sh/react/getting-started) and [ConnectKit](https://docs.family.co/connectkit)
which allow to handle Metamask, WalletConnect and Coinbase without needing to set any config

**`See`**

[wagmi](https://wagmi.sh/react/getting-started)

**`Example`**

Start wallet provider example:

```tsx
import React from 'react';
import ReactDOM from 'react-dom';
import { Catalog } from '@nevermined-io/catalog';
import { appConfig } from './config';
import Example from 'examples';
import { WalletProvider, getClient } from '@nevermined-io/providers';
import chainConfig from './chain_config';

ReactDOM.render(
  <div>
    <Catalog.NeverminedProvider config={appConfig} verbose={true}>
      <WalletProvider
        client={getClient(chainConfig)}
      >
        <Example />
      </WalletProvider>
    </Catalog.NeverminedProvider>
  </div>,
  document.getElementById('root') as HTMLElement
);
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `config` | `Object` |  |
| `config.children` | `ReactElement`<`any`, `string` \| `JSXElementConstructor`<`any`\>\> | - |
| `config.client` | `Client`<`any`, `WebSocketProvider`\> | The wagmi client object |
| `config.connectKitProps?` | [`ConnectKitProviderProps`](modules.md#connectkitproviderprops) | Parameter to pass the options to customize [ConnectKit](https://docs.family.co/connectkit/customization) |
| `config.correctNetworkId?` | `number` | Id of the default blockchain network in Hexadecimal. Default the fist chain configured |

#### Returns

`Element`

All the functionalities to handle the wallet in dapp

#### Defined in

[providers/src/providers.tsx:43](https://github.com/nevermined-io/react-components/blob/014b919/providers/src/providers.tsx#L43)

___

### getClient

▸ **getClient**(`appName?`, `autoConnect?`, `chainsConfig?`): `Client`<`Object`, `WebSocketProvider`\> & {}

function that build and return the wagmi client

**`Deprecated`**

use `Wagmi.createClient` instead, [see here](https://docs.nevermined.io/docs/tutorials/login-wallet-provider)

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `appName` | `string` | `'Nevermined'` | App name required for Coinbase wallet. If appName is undefined Coinbase wallet won't be supported |
| `autoConnect` | `boolean` | `true` | If it is true once that the dapp start to run it will try to connect to the wallet automatically. Default `true` |
| `chainsConfig` | `Chain`[] | `ChainsConfig` | Config with all the available chains that can be used in the dapp. Default chains supported `Polygon Mainnet`, `Polygon Mumbai`, `spree (localhost) |

#### Returns

`Client`<`Object`, `WebSocketProvider`\> & {}

#### Defined in

[providers/src/client.tsx:31](https://github.com/nevermined-io/react-components/blob/014b919/providers/src/client.tsx#L31)

___

### useWallet

▸ **useWallet**(): [`WalletProviderState`](interfaces/WalletProviderState.md)

#### Returns

[`WalletProviderState`](interfaces/WalletProviderState.md)

#### Defined in

[providers/src/client.tsx:195](https://github.com/nevermined-io/react-components/blob/014b919/providers/src/client.tsx#L195)

___

### zeroX

▸ **zeroX**(`input?`): `string`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `input` | `string` | `""` |

#### Returns

`string`

#### Defined in

[providers/src/utils/index.ts:1](https://github.com/nevermined-io/react-components/blob/014b919/providers/src/utils/index.ts#L1)
