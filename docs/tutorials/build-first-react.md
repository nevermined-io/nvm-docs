---
sidebar_position: 2
description: Building a DApp using Nevermined frameworks
---

# How to build a React application integrated with Nevermined

The idea of this tutorial is to give a quick go through about using the [Nevermined React Components](https://github.com/nevermined-io/react-components) of React components to support the development of dApps using the Nevermined environment. Nevermined Catalog is a library that provides some React components to make it easier the integration with Nevermined technologies. You can find more info in the [documentation](../react-components/intro.md).

## Prerequisites

The tutorial assumes your familiarity with blockchain, and general programming.

## Let's go

Instructions for following along locally using your preferred text editor.

### Setup the React app

1. Make sure you have a recent version of [Node.js](https://nodejs.org/en/) installed.
2. Follow the [installation instructions for Create React App](https://reactjs.org/docs/create-a-new-react-app.html#create-react-app) to make a new project. Or simply run `npx create-react-app my-nevermined-app --template typescript`.
3. Move to the my-nevermined-app directory `cd my-nevermined-app`.
4. Run `yarn add @nevermined-io/catalog` or `npm install --save @nevermined-io/catalog` depending of your favourite package manager.
5. Run `yarn run start` and open <http://localhost:3000> and you will see the progress.

![image](https://user-images.githubusercontent.com/3496824/179922422-82411749-0c62-4a2b-8969-cbd35611ffa9.png)
*Screenshot of the current application status.*

### Create your Nevermined dApp

Once the react app is running and you have your catalog dependency, the next step will be to setup the configuration:

1. Download [Nevermined abi](http://artifacts-nevermined-rocks.s3.amazonaws.com/80001/public/contracts_v2.0.0.tar.gz) and store them in a folder named contracts in the public folder. These ABIs are the interface to interact with Nevermined contracts deployed on the blockchain. Visit [ABI specification](https://docs.soliditylang.org/en/develop/abi-spec.html) to learn more about it.
2. Create a `config.ts` file and provide the Nevermined config as follow:

:::tip

For the `REACT_APP_NODE_URI` you can connect to a [QuickNode](https://www.quicknode.com/) or [Infura](https://infura.io/) puclic Node. Both services allow to connect your dApp to different blockchain networks. You will need to connect to interact with Nevermined contracts.

:::

```ts
import { Config } from '@nevermined-io/nevermined-sdk-js';

// URL where run the app
export const serviceUri = process.env.REACT_APP_SERVICE_URI || 'http://localhost:3445';
// Ethereum address own by the node.
export const neverminedNodeAddress = process.env.REACT_APP_GATEWAY_ADDRESS || '0x5838B5512cF9f12FE9f2beccB20eb47211F9B0bc';
// Node service
export const neverminedNodeUri = process.env.REACT_APP_GATEWAY_URI || 'https://node.mumbai.public.nevermined.network';
// Fauce uri to get some tokens.
export const faucetUri = process.env.REACT_APPREACT_APP_FAUCET_URI_FAUCET_URI || 'https://faucet.mumbai.public.nevermined.network';
// Blockchain node
export const web3ProviderUri = process.env.REACT_APP_NODE_URI || 'https://matic-mumbai.chainstacklabs.com';
// Chain id of your network
export const acceptedChainId = process.env.REACT_APP_ACCEPTED_CHAIN_ID || '80001'; // for Mumbai
//URL where run the root of the app is. Important to find public folder with abis.
export const rootUri = process.env.REACT_APP_ROOT_URI || 'http://localhost:3445';
// Marketplace API uri to store metadata.
export const marketplaceUri = process.env.REACT_APP_MARKETPLACE_URI || 'https://marketplace-api.mumbai.public.nevermined.network';

export const appConfig: Config = {
  //@ts-ignore
  web3Provider: typeof window !== 'undefined' ? window.ethereum : new ethers.providers.JsonRpcProvider(web3ProviderUri),
  web3ProviderUri,
  neverminedNodeUri,
  faucetUri,
  verbose: 2,
  neverminedNodeAddress,
  graphHttpUri: '',
  marketplaceAuthToken: typeof window !== 'undefined' ? AuthToken.fetchMarketplaceApiTokenFromLocalStorage().token : '',
  marketplaceUri,
  artifactsFolder: `${rootUri}/contracts`,
};

```

3. Go to `index.tsx` and add the `NeverminedProvider`

```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Catalog } from '@nevermined-io/catalog';
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
import { AssetService } from '@nevermined-io/catalog'
import React, { useEffect, useState } from 'react'

function App() {

  const response = await assetsModule.query({
    query: {
      bool: {
        must: [{
          nested: {
            path: ['service'],
            query: {
              "query_string": {
                query: 'NFT*',
                fields: ["service.attributes.main.name"]
              },
            },
          }
        }]
      }
    },
    offset: 150,
    page: 1,
    sort: {
      created: 'desc'
    }
  })

  const MultipleAssets = () => {
    const { isLoading: isLoadingAssets, result } = AssetService.useAssets(query)
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

### Login with different providers

After seeing how it is possible to list some data coming from the blockchain let's see how you can login with your Nevermined dApp using our catalog integration with different providers.

1. Run `yarn add @nevermined-io/providers` or `npm install --save @nevermined-io/providers` depending of your favourite package manager. This library plan to give support to more wallet providers in near future. Stay tuned.

2. As before, add the WalletProvider in `index.tsx`.

```tsx
import {getClient, WalletProvider } from '@nevermined-io/providers'

...
const client = Wagmi.createClient(
  ConnectKit.getDefaultClient({
    appName: 'Login',
    chains: ChainsConfig,
    autoConnect: true
  })
)

...
...
      <WalletProvider client={client}>
        <App />
      </WalletProvider>
```

4. Modify `App.tsx` to create a login button.

```tsx
import { useWallet } from '@nevermined-io/catalog-providers'
import React from 'react'

const Login = () => {
  const { login, walletAddress, logout, getConnectors} = useWallet()

  return (
    <div className='app'>
      {!walletAddress ?
        getConnectors().map(c => 
          <button onClick={() => login(c)}>Connect to {c.name}</button>
        )
        :
        <>
          <p>{walletAddress}</UiText>
          <button onClick={logout}>Logout</button>
        </>
      }
    </div>
  )
}
export default App;
```

