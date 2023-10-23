---
sidebar_position: 3
description: It covers the providers integration, finishing with the login and logout with your Metamask wallet provider.
---

import ProvidersApp from '@site/src/components/providers'
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Login with Wallet Provider
In this tutorial you will learn how you can integrate Wallet Provider from the Catalog in your dapp and implement operations like login and logout

## Requirements
For the tutorial you will need:

- A extension of [Metamask](https://metamask.io/) installed in the browser
- [node](https://nodejs.org/en/) and [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) need to be installed

## How to install Catalog Provider
Firstable to install [Catalog Provider](../react-components/providers/README.md) you just need to run:

<Tabs>
  <TabItem label="yarn" value="yarn" default>

```bash
yarn add @nevermined-io/catalog-providers
```

  </TabItem>
  <TabItem label="npm" value="npm">

```bash
npm install --save @nevermined-io/providers
```
  </TabItem>
</Tabs>

## Add the wallet provider
Now in our app we need to add the Wallet Provider as a parent of all the components that will use functionalities from it. The `WalletProvider` has a prop call `client` where we need to pass the instance of the [Wagmi client](https://wagmi.sh/docs/client), the good news is that we have `getClient` from `@nevermined-io/providers` which will return a client already configured.
Optionally we can pass the `correctNetworkId` which will request to the wallet to change to the set network when the current one is not supported, and `connectKitProps` that includes all the customization option of `ConnectKit`, see options [here](https://docs.family.co/connectkit/customization)

```tsx
import React from 'react';
import ReactDOM from 'react-dom';
import Example from 'examples';
import { WalletProvider } from '@nevermined-io/providers';

ReactDOM.render(
    <div>
        <WalletProvider
          client={Wagmi.createClient(
            ConnectKit.getDefaultClient({
              appName: 'Login',
              chains: ChainsConfig,
              autoConnect: true
            })
          )}
          correctNetworkId={80001}
          connectKitProps={
            {
              theme: 'auto',
              mode: 'dark',
            }
          }
        >
          <Login/>
        </WalletProvider>
    </div>,
    document.getElementById("root") as HTMLElement
);
```

## Add login component
Let's create a component that contains a login button for each provider, and other button to logout.

```tsx
const Login = () => {
  const { login, walletAddress, logout, getConnectors} = useWallet()

  return (
    <div className={b('content')}>
      {!walletAddress ?
        getConnectors().map(c => 
          <UiButton key={c.name} className={b('content', ['connector'])} type='secondary' onClick={() => login(c)}>Connect to {c.name}</UiButton>
        )
        : 
        <>
          <UiText type='p' variants={["detail"]}>{walletAddress}</UiText>
          <UiButton type='secondary' onClick={logout}>Logout</UiButton>
        </>
      }
    </div>
  )
}
```
In this component we have the `login` and `logout` functions and the `walletAddress` state, if `walletAddress` is not empty means that the wallet is connected and will show the address and logout button otherwise will show the button to connect.
How you can see, we also have `getConnectors` which includes all the providers available to connect.

## Config your network (optional)
At least that you need to set differents networks for your dapp than [polygon](https://polygon.technology/) chains config is not needed, anyway here we show you how should look the config object.

```ts
const ChainsConfig: Chain[] = [
  Wagmi.chain.polygon,
  Wagmi.chain.polygonMumbai,
  {
    id: 1337,
    name: "Localhost development",
    network: "spree",
    nativeCurrency: {
      name: "Ethereum",
      symbol: "ETH",
      decimals: 18,
    },
    rpcUrls: {
      default: "http://localhost:8545"
    },
    testnet: true
  },
]

export default ChainConfig;
```

## Lets put everything together
In order to finish we need to call this component inside of the providers, this is the complete example

```tsx
import React from 'react'
import { WalletProvider, getClient, useWallet, Wagmi } from '@nevermined-io/catalog-providers'
import { UiButton, UiText, BEM } from '@nevermined-io/styles'
import styles from './styles.module.scss'

const b = BEM('providers', styles)

const ChainsConfig: Chain[] = [
  Wagmi.chain.polygon,
  Wagmi.chain.polygonMumbai,
  {
    id: 1337,
    name: "Localhost development",
    network: "spree",
    nativeCurrency: {
      name: "Ethereum",
      symbol: "ETH",
      decimals: 18,
    },
    rpcUrls: {
      default: "http://localhost:8545"
    },
    testnet: true
  },
]

const Login = () => {
  const { login, walletAddress, logout, getConnectors} = useWallet()

  return (
    <div className={b('content')}>
      {!walletAddress ?
        getConnectors().map(c => 
          <UiButton key={c.name} className={b('content', ['connector'])} type='secondary' onClick={() => login(c)}>Connect to {c.name}</UiButton>
        )
        : 
        <>
          <UiText type='p' variants={["detail"]}>{walletAddress}</UiText>
          <UiButton type='secondary' onClick={logout}>Logout</UiButton>
        </>
      }
    </div>
  )
}

ReactDOM.render(
    <div>
        <WalletProvider
          client={Wagmi.createClient(
            ConnectKit.getDefaultClient({
              appName: 'Login',
              chains: ChainsConfig,
              autoConnect: true
            })
          )}
          correctNetworkId={80001}
          connectKitProps={
            {
              theme: 'auto',
              mode: 'dark',
            }
          }
        >
          <Login/>
        </WalletProvider>
    </div>,
    document.getElementById("root") as HTMLElement
);
```

## Demo

<ProvidersApp/>