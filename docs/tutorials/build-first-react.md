---
sidebar_position: 2
description: Building a DApp using Nevermined frameworks
---

# How to build a React application integrated with Nevermined

The idea of this tutorial is give a quick go through about using the [Nevermined Catalog](https://github.com/nevermined-io/components-catalog) of React components to support the development of dApps using the Nevermined environment. Nevermined Catalog is a library that provides some React components to make it easier the integration with Nevermined technologies. You can find more info in the [documentation](../catalog/intro.md).

## Prerequisites

The tutorial assumes your familiarity with blockchain, and general programming.

## Let's go

Instructions for following along locally using your preferred text editor.

### Setup the React app

1. Make sure you have a recent version of [Node.js](https://nodejs.org/en/) installed.
2. Follow the [installation instructions for Create React App](https://reactjs.org/docs/create-a-new-react-app.html#create-react-app) to make a new project. Or simply run `npx create-react-app my-nevermined-app --template typescript`.
3. Move to the my-nevermined-app directory `cd my-nevermined-app`.
4. Run `yarn add @nevermined-io/catalog-core` or `npm install --save @nevermined-io/catalog-core` depending of your favourite package manager.
5. Run `yarn run start` and open <http://localhost:3000> and you will see the progress.

![image](https://user-images.githubusercontent.com/3496824/179922422-82411749-0c62-4a2b-8969-cbd35611ffa9.png)
*Screenshot of the current application status.*

### Create your Nevermined dApp

Once the react app is running and you have your catalog dependency, the next step will be to setup the configuration:

1. Donwload [Nevermined abi](http://artifacts-nevermined-rocks.s3.amazonaws.com/80001/public/contracts_v2.0.0.tar.gz) and store them in a folder named contracts in the public folder. These abis are the interface to iteract with Nevermined contracts deployed on the blockchain. Visit [ABI specification](https://docs.soliditylang.org/en/develop/abi-spec.html) to learn more about.
2. Create a `config.ts` file and provide the Nevermined config as follow:

:::tip

For the `REACT_APP_NODE_URI` you can connect to a [QuickNode](https://www.quicknode.com/) or [Infura](https://infura.io/) puclic Node. Both services allow to connect your dApp to different blockchain networks. You will need to connect to iteract with Nevermined contracts.

:::

```ts
import { Config } from '@nevermined-io/nevermined-sdk-js';

// URL where run the app
export const serviceUri = process.env.REACT_APP_SERVICE_URI || 'http://localhost:3445';
// Ethereum address own by the gateway.
export const gatewayAddress = process.env.REACT_APP_GATEWAY_ADDRESS || '0x5838B5512cF9f12FE9f2beccB20eb47211F9B0bc';
// Gateway service
export const gatewayUri = process.env.REACT_APP_GATEWAY_URI || 'https://gateway.mumbai.public.nevermined.network';
// Fauce uri to get some tokens.
export const faucetUri = process.env.REACT_APPREACT_APP_FAUCET_URI_FAUCET_URI || 'https://faucet.mumbai.public.nevermined.rocks';
// Blockchain node
export const nodeUri = process.env.REACT_APP_NODE_URI || 'https://matic-mumbai.chainstacklabs.com';
// Chain id of your network
export const acceptedChainId = process.env.REACT_APP_ACCEPTED_CHAIN_ID || '80001'; // for Mumbai
//URL where run the root of the app is. Important to find public folder with abis.
export const rootUri = process.env.REACT_APP_ROOT_URI || 'http://localhost:3445';
// Marketplace API uri to store metadata.
export const marketplaceUri = process.env.REACT_APP_MARKETPLACE_URI || 'https://marketplace-api.mumbai.public.nevermined.network';

export const appConfig: Config = {
  //@ts-ignore
  web3Provider: typeof window !== 'undefined' ? window.ethereum : new ethers.providers.JsonRpcProvider(nodeUri),
  nodeUri,
  gatewayUri,
  faucetUri,
  verbose: 2,
  gatewayAddress,
  graphHttpUri: '',
  marketplaceAuthToken: typeof window !== 'undefined' ? AuthToken.fetchMarketplaceApiTokenFromLocalStorage().token : '',
  marketplaceUri,
  artifactsFolder: `${rootUri}/contracts`,
  newGateway: true
};

```

3. Go to `index.tsx` and add the `NeverminedProvider`

```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Catalog from '@nevermined-io/catalog-core';
import { appConfig } from './config';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Catalog.NeverminedProvider config={appConfig}>
      <App />
    </Catalog.NeverminedProvider>
  </React.StrictMode>
);

reportWebVitals();
```

4. After that you will be able to iteract with the Nevermined ecosystem. List did assets deployed updating your `App.tsx`

```tsx
import Catalog from '@nevermined-io/catalog-core'
import React, { useEffect, useState } from 'react'

function App() {

  const query = {
    offset: 150,
    page: 1,
    query: {},
    sort: {
      created: 'desc'
    }
  };

  const MultipleAssets = () => {
    const { isLoading: isLoadingAssets, result } = Catalog.useAssets(query)
    const [dids, setDids] = useState<string[]>()

    useEffect(() => {
      setDids(result?.results?.map(asset => asset.id))
    }, [result])

    const [filterQuery, setQuery] = useState("")

    function filterItems(query: string) {
       setQuery(query)
       setDids(result?.results?.map(asset => asset.id)?.filter(item => item.includes(query)))
     }

    return (
      <>
        <input
          type="search"
          name="search-form"
          id="search-form"
          className="search-input"
          placeholder="Search for..."
          value={filterQuery}
          onChange={(e) => filterItems(e.target.value)}
        />
        <div>Assets: </div>
        <div>
          <ul>{!isLoadingAssets ? dids?.map(asset => <li key={asset}>{asset}</li>) : "Loading assets..."}</ul>
        </div>
      </>
    )
}
  return (
    <div className="App">
      <header className="App-header">
        <MultipleAssets />
      </header>
    </div>
  );
}

export default App;
```

### Login with Metamask

After see how it is possible list some data coming from the blockchain let's see how you can login with your Nevermined dApp using our catalog integration with Metamask.

:::info

Metamask is a popular cryptowallet that is easy to integrate with a plugin in your browser. Visit the [documentation](https://docs.metamask.io/guide/#why-metamask) to learn more and [download](https://metamask.io/) it for your favourite browser.

:::

1. Run `yarn add @nevermined-io/catalog-providers` or `npm install --save @nevermined-io/catalog-providers` depending of your favourite package manager. This library plan to give support to more wallet providers in near future. Stay tunned.

2. As before, add the WalletProvider in `index.tsx`.

```tsx
import ChainConfig from './ChainConfig';

...
      <MetaMask.WalletProvider nodeUri={appConfig.nodeUri!} correctNetworkId='0x13881' externalChainConfig={ChainConfig}>
        <App />
      </MetaMask.WalletProvider>
```

*Note - `externalChainConfig` is optional, if you don't provide it the component will set a default chain configuration. In case that you don't need a specific configuration and your dapp will work only in Polygon network you can jump the next step*

3. Copy and paste this in `ChainConfig.ts` in your `src` folder. It contains blockchain networks information:

```ts
import { zeroX } from '@nevermined-io/nevermined-sdk-js/dist/node/utils'

const spreeChainId = zeroX((1337).toString(16))
const polygonLocalnetChainId = zeroX((8997).toString(16))
const mumbaiChainId = zeroX((80001).toString(16))
const mainnetChainId = zeroX((137).toString(16))

const ChainConfig = {
  development: {
    chainId: spreeChainId,
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
      return ChainConfig.development
    }
    if (chainIdHex === mumbaiChainId) {
      return ChainConfig.mumbai
    }
    if (chainIdHex === mainnetChainId) {
      return ChainConfig.mainnet
    }
    return ChainConfig.development
  }
}

export default ChainConfig
```

4. Modify `App.tsx` to create a login button.

```tsx
import { MetaMask } from '@nevermined-io/catalog-providers'
import React from 'react'

function App() {
  const { loginMetamask, walletAddress, logout, checkIsLogged } = MetaMask.useWallet();
  
  return (
    <div className="App">
      <header className="App-header">
             {!walletAddress ? <button onClick={loginMetamask}>Login</button> : <button onClick={logout}>logout</button>}
             {walletAddress ? 
               <>
                   <div className="nav-item">{walletAddress}</div>
               </>
              : <></>
             }
      </header>
    </div>
  );
}

export default App;
```

You can find the source code in [github](https://github.com/nevermined-io/tutorials/tree/main/catalog).
