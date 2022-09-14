---
sidebar_position: 3
description: It covers the providers integration, finishing with the login and logout with your Metamask wallet provider.
---

import MetamaskApp from '@site/src/components/metamask'
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Login with Metamask
In this tutorial you will learn how you can integrate Metamask provider from the Catalog in your dapp and implement operations like login and logout

## Requirements
For the tutorial you will need:

- A extension of [Metamask](https://metamask.io/) installed in the browser
- [node](https://nodejs.org/en/) and [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) need to be installed

## How to install Catalog Provider
Firstable to install [Catalog Provider](../catalog/providers/README.md) you just need to run:

<Tabs>
  <TabItem label="yarn" value="yarn" default>

```bash
yarn add @nevermined-io/catalog-providers
```

  </TabItem>
  <TabItem label="npm" value="npm">

```bash
npm install --save @nevermined-io/catalog-providers
```
  </TabItem>
</Tabs>

## Config your network (optional)
At least that you need to set differents networks for your dapp than [polygon](https://polygon.technology/) this file is not needed, anyway here we show you how should look the config file.

```ts
import { zeroX } from '@nevermined-io/nevermined-sdk-js/dist/node/utils';
import { acceptedChainId } from 'config';

const acceptedChainIdHex = zeroX((+acceptedChainId).toString(16));
const spreeChainId = zeroX((8996).toString(16));
const polygonLocalnetChainId = zeroX((8997).toString(16));
export const mumbaiChainId = zeroX((80001).toString(16));
const mainnetChainId = zeroX((137).toString(16));

const ChainConfig = {
  development: {
    chainId: acceptedChainIdHex === spreeChainId ? spreeChainId : polygonLocalnetChainId,
    chainName: 'Localhost development',
    nativeCurrency: {
      name: 'Ethereum',
      symbol: 'ETH',
      decimals: 18
    },
    rpcUrls: ['http://localhost:8545'],
    blockExplorerUrls: [''],
    iconUrls: ['https://s2.coinmarketcap.com/static/img/coins/64x64/3890.png']
  },
  mumbai: {
    chainId: mumbaiChainId,
    chainName: 'Polygon Testnet Mumbai',
    nativeCurrency: {
      name: 'Matic',
      symbol: 'MATIC',
      decimals: 18
    },
    rpcUrls: [
      'https://matic-mumbai.chainstacklabs.com',
      'https://rpc-endpoints.superfluid.dev/mumbai'
    ],
    blockExplorerUrls: ['https://mumbai.polygonscan.com/'],
    iconUrls: ['https://s2.coinmarketcap.com/static/img/coins/64x64/3890.png']
  },
  mainnet: {
    chainId: mainnetChainId,
    chainName: 'Polygon Mainnet',
    nativeCurrency: {
      name: 'Matic',
      symbol: 'MATIC',
      decimals: 18
    },
    rpcUrls: ['https://polygon-rpc.com'],
    blockExplorerUrls: ['https://polygonscan.com/'],
    iconUrls: ['https://s2.coinmarketcap.com/static/img/coins/64x64/3890.png']
  },
  returnConfig: (chainIdHex: string) => {
    if (chainIdHex === spreeChainId || chainIdHex === polygonLocalnetChainId) {
      return ChainConfig.development;
    }
    if (chainIdHex === mumbaiChainId) {
      return ChainConfig.mumbai;
    }
    if (chainIdHex === mainnetChainId) {
      return ChainConfig.mainnet;
    }
    return ChainConfig.development;
  }
};

export default ChainConfig;
```

This config file represent all the networks that your dapp support, and a default one where metamask will ask to switch in case that the wallet is in some not supported network

## Add the Metamask provider
Now in our app we need to add the Metamask provider as a parent of all the components that will use functionalities from it

```tsx
import React from 'react';
import ReactDOM from 'react-dom';
import Example from 'examples';
import { MetaMask } from '@nevermined-io/catalog-providers';
import chainConfig, { mumbaiChainId } from './chain_config';

const NODE_URI="http://localhost:8545"

ReactDOM.render(
    <div>
        <MetaMask.WalletProvider
            chainConfig={chainConfig}
            correctNetworkId={mumbaiChainId}
            nodeUri={NODE_URI}
        >
            ...
        </MetaMask.WalletProvider>
    </div>,
    document.getElementById("root") as HTMLElement
);
```

## Add login component
Let's create a component that contains a login button, which will login to the wallet once that it is clicked, and other button to logout

```tsx
const LoginMetaMask = () => {
    const { loginMetamask, walletAddress, logout} = MetaMask.useWallet();

    return (
        <>
            {!walletAddress ?
              <button onClick={loginMetamask}>Connect to Metamask</button>
              : 
              <>
                <div>{walletAddress}</div>
                <button onClick={logout}>Logout</button>
              </>
            }
        </>
    );
};
```

In this component we have the `loginMetamask` and `logout` functions and the `walletAddress` state, if `walletAddress` is not empty means that the metamask is connected and will show the address and logout button otherwise will show the button to connect

## Lets put everything together
In order to finish we need to call this component inside of the Metamask provider, this is the complete example

```tsx
import React from 'react';
import ReactDOM from 'react-dom';
import { MetaMask } from '@nevermined-io/catalog-providers';
import chainConfig, { mumbaiChainId } from './chain_config';

const NODE_URI="http://localhost:8545"

const LoginMetamask = () => {
    const { loginMetamask, walletAddress, logout} = MetaMask.useWallet();

    return (
        <>
            {!walletAddress ?
              <button onClick={loginMetamask}>Connect to Metamask</button>
              : 
              <>
                <div>{walletAddress}</div>
                <button onClick={logout}>Logout</button>
              </>
            }
        </>
    );
};

ReactDOM.render(
    <div>
        <MetaMask.WalletProvider
            chainConfig={chainConfig}
            correctNetworkId={mumbaiChainId}
            nodeUri={NODE_URI}
        >
          <LoginMetamask/>
        </MetaMask.WalletProvider>
    </div>,
    document.getElementById("root") as HTMLElement
);
```

## Demo

<MetamaskApp/>