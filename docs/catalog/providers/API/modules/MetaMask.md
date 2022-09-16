# Namespace: MetaMask

## Table of contents

### Interfaces

- [ChainConfig](../interfaces/MetaMask.ChainConfig.md)
- [WalletProviderState](../interfaces/MetaMask.WalletProviderState.md)

### Type Aliases

- [MetamaskProvider](MetaMask.md#metamaskprovider)

### Variables

- [WalletContext](MetaMask.md#walletcontext)

### Functions

- [WalletProvider](MetaMask.md#walletprovider)
- [useWallet](MetaMask.md#usewallet)

## Type Aliases

### MetamaskProvider

Ƭ **MetamaskProvider**: `ethers.providers.JsonRpcProvider` \| `ethers.providers.Web3Provider`

#### Defined in

[metamask.tsx:11](https://github.com/nevermined-io/components-catalog/blob/c256646/providers/src/metamask.tsx#L11)

## Variables

### WalletContext

• `Const` **WalletContext**: `Context`<[`WalletProviderState`](../interfaces/MetaMask.WalletProviderState.md)\>

#### Defined in

[metamask.tsx:152](https://github.com/nevermined-io/components-catalog/blob/c256646/providers/src/metamask.tsx#L152)

## Functions

### WalletProvider

▸ **WalletProvider**(`config`): `Element`

Wallet provider for Metamask with all the functionalities to handle the wallet in dapp

**`Example`**

Start Metamask provider example:

```tsx
import React from 'react';
import ReactDOM from 'react-dom';
import Catalog from '@nevermined-io/catalog-core';
import { appConfig } from './config';
import Example from 'examples';
import { MetaMask } from '@nevermined-io/catalog-providers';
import chainConfig, { mumbaiChainId } from './chain_config';

ReactDOM.render(
  <div>
    <Catalog.NeverminedProvider config={appConfig} verbose={true}>
      <MetaMask.WalletProvider
        externalChainConfig={chainConfig}
        correctNetworkId={mumbaiChainId}
        nodeUri={String(appConfig.nodeUri)}
      >
        <Example />
      </MetaMask.WalletProvider>
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
| `config.correctNetworkId` | `string` | Id of the default blockchain network in Hexadecimal |
| `config.externalChainConfig?` | [`ChainConfig`](../interfaces/MetaMask.ChainConfig.md) | Config with all the available chains that can be use in the dapp |
| `config.nodeUri` | `string` | Blockchain node url to connect |

#### Returns

`Element`

All the functionalities to handle the wallet in dapp

#### Defined in

[metamask.tsx:191](https://github.com/nevermined-io/components-catalog/blob/c256646/providers/src/metamask.tsx#L191)

___

### useWallet

▸ **useWallet**(): [`WalletProviderState`](../interfaces/MetaMask.WalletProviderState.md)

#### Returns

[`WalletProviderState`](../interfaces/MetaMask.WalletProviderState.md)

#### Defined in

[metamask.tsx:396](https://github.com/nevermined-io/components-catalog/blob/c256646/providers/src/metamask.tsx#L396)
