---
sidebar_position: 3
---

# How to use React Components

## Requirements
Before you start with this demo you require:

* An extension of [Metamask](https://metamask.io/) installed in your browser
* [node](https://nodejs.org/en/) and [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) needs to be installed

## How to get the source of this example?
You can install the example in your local machine and run it without installing anything. Information for how to do this can be found here [here](https://github.com/nevermined-io/create-nevermined-react)

## Let's start with the app config file
The first file that you need to create is the `config.ts` file which contains all the [options needed](../nevermined-sdk/api-reference/classes/Config.md) to initialize the [Catalog core](./catalog/README.md).

```ts
import { AuthToken, NeverminedOptions } from '@nevermined-io/catalog'
import { ethers } from 'ethers'

export const web3ProviderUri = process.env.REACT_APP_NODE_URI || 'https://matic-mumbai.chainstacklabs.com'
export const nodeAddress =
  process.env.REACT_APP_GATEWAY_ADDRESS || '0x5838B5512cF9f12FE9f2beccB20eb47211F9B0bc'
export const neverminedNodeUri =
  process.env.REACT_APP_GATEWAY_URI || 'https://node.mumbai.public.nevermined.network'
export const acceptedChainId = process.env.REACT_APP_ACCEPTED_CHAIN_ID || '80001' // for Mumbai
export const rootUri = process.env.REACT_APP_ROOT_URI || 'http://localhost:3445'
export const marketplaceUri = 'https://marketplace-api.mumbai.public.nevermined.network'
const graphHttpUri = process.env.GRAPH_HTTP_URI ||  'https://api.thegraph.com/subgraphs/name/nevermined-io/public'
// represent USDC token in mumbai that can be claimed in the faucet https://calibration-faucet.filswan.com/#/dashboard
export const erc20TokenAddress = process.env.ERC20_TOKEN_ADDRESS || '0xe11a86849d99f524cac3e7a0ec1241828e332c62'

export const appConfig: NeverminedOptions = {
  //@ts-ignore
  web3Provider: typeof window !== 'undefined' ? window.ethereum : new ethers.providers.JsonRpcProvider(nodeUri),
  neverminedNodeUri,
  nodeAddress,
  graphHttpUri,
  marketplaceAuthToken: AuthToken.fetchMarketplaceApiTokenFromLocalStorage().token,
  marketplaceUri,
  artifactsFolder: `${rootUri}/contracts`,
}
```

## Setting the networks for web3 providers (optional)
The next step is setting differents networks for the dapp [polygon](https://polygon.technology/) which does not require this file. However, we have included it in the example as it contains the networks settings for web3 providers.

```ts
import { Wagmi } from '@nevermined-io/catalog-providers'

const ChainsConfig: Wagmi.Chain[] = [
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

export default ChainConfig
```

## The example file
The example file `src/example/index.tsx` contains all the basic logic to handle a [NFT1155](../architecture/what-can-i-do.md#tokenization-of-assets-via-erc-1155-nfts-aka-nft-sales) as a component. It outlines each functionality and component in detail.

### SDKInstance
This component will check if [sdk](../nevermined-sdk/getting-started.md) is loaded or not and display the status

```tsx
const SDKInstance = () => {
  const { sdk, isLoadingSDK } = Catalog.useNevermined()

  return (
    <>
      <UiLayout>
        <UiText className={b('detail')} variants={['bold']}>Is Loading SDK:</UiText>
        <UiText>{isLoadingSDK ? 'Yes' : 'No'}</UiText>
      </UiLayout>

      <UiLayout>
        <UiText variants={['bold']} className={b('detail')}>Is SDK Avaialable:</UiText>
        <UiText>{sdk && Object.keys(sdk).length > 0 ? 'Yes' : 'No'}</UiText>
      </UiLayout>
    </>
  )
}
```

### SingleAsset
It shows the content of the ddo object published

```tsx
const SingleAsset = ({ddo}: {ddo: DDO}) => {

  return (
    <>
      <UiLayout>
        <UiText className={b('detail')} variants={['bold']}>Asset {ddo.id.slice(0, 10)}...:</UiText>
      </UiLayout>
      <UiText className={b('ddo')} variants={['detail']}>{JSON.stringify(ddo)}</UiText>
    </>
  )
}
```

### PublishAsset
It renders a button used to publish a new [NFT](../architecture/specs/Spec-NFT.md)

```tsx
const PublishAsset = ({onPublish}: {onPublish: () => void}) => {
  const { assets } = Catalog.useNevermined()

  return (
    <>
      <UiButton onClick={onPublish} disabled={!Object.keys(assets).length}>
        mint
      </UiButton>
    </>
  )
}
```

### BuyAsset
The `BuyAsset` component will display the button `buy` in order to buy the asset if the wallet account is not a NFT1155 holder. Otherwise, the owner will display a download button to download the NFT asset

```tsx
const BuyAsset = ({ddo}: {ddo: DDO}) => {
  const { assets, account, isLoadingSDK, nfts, sdk } = Catalog.useNevermined()
  const { walletAddress } = MetaMask.useWallet()
  const [ownNFT1155, setOwnNFT1155] = useState(false)
  const [isBought, setIsBought] = useState(false)
  const [owner, setOwner] = useState('')
  
  useEffect(() => {
    (async () => {
      setOwnNFT1155(await account.isNFT1155Holder(ddo.id, walletAddress))
      setOwner(await sdk.assets.owner(ddo.id))
    })()
  }, [walletAddress, isBought])

const buy = async () => {
    const response = await nfts.access({
      did: ddo.id,
      nftHolder: owner,
      nftAmount: BigNumber.from(1),
      ercType: 1155
    })
    setIsBought(Boolean(response))
  }

  const download = async () => {
    await assets.downloadNFT({
      did: ddo.id
    })
  }

  return (
    <UiLayout className={b('buy')}>
      {ownNFT1155 ? (
        <UiButton type='secondary' onClick={download} disabled={isLoadingSDK}>
          Download NFT
        </UiButton>
      ) : (
        owner !== walletAddress ?
        <UiButton type='secondary' onClick={buy} disabled={isLoadingSDK}>
          buy
        </UiButton>
        : <span>The owner cannot buy, please change the account to buy the NFT asset</span>
      )}
    </UiLayout>
  )
}
```

### MMWallet
An important component for connecting to the wallet. Upon connecting, the app will display the address account. Otherwise it will render a button to connect to it.

```tsx
const MMWallet = () => {
  const { login, walletAddress, getConnectors } = useWallet()
  return (
    <UiLayout>
      <UiText variants={['bold']} className={b('detail')}>Wallet address:</UiText>
      <UiText>{walletAddress}</UiText>
      {!walletAddress && <UiButton type='secondary' onClick={() => login(getConnectors()[0])}>Connect To MM</UiButton>}
    </UiLayout>
  )
}
```


### App
The main component of the example, it pulls the rest of the components and also includes the function `onPublish` with the logic to publish a NFT1155 which is transferred as a parameter to the component [PublisAsset](#publishasset)

```tsx
const App = () => {
  const { isLoadingSDK, sdk } = Catalog.useNevermined()
  const { publishNFT1155 } = AssetService.useAssetPublish()
  const { walletAddress } = useWallet()
  const [ddo, setDDO] = useState<DDO>({} as DDO)
  const royaltyAttributes = {
    royaltyKind: RoyaltyKind.Standard,
    scheme: getRoyaltyScheme(sdk, RoyaltyKind.Standard),
    amount: 0,
  }

  const metadata: MetaData = {
    main: {
      name: '',
      files: [{
        index: 0,
        contentType: 'application/json',
        url: 'https://uploads5.wikiart.org/00268/images/william-holbrook-beard/the-bear-dance-1870.jpg'
      }],
      type: 'dataset',
      author: '',
      license: '',
      dateCreated: new Date().toISOString(),
    }
  }

  const onPublish = async () => {
    try {
      const assetPriceMap = new Map([
        [walletAddress, BigNumber.from(1)]
      ])
  
      const assetPrice = new AssetPrice(assetPriceMap)
      const networkFee = await sdk.keeper.nvmConfig.getNetworkFee()
      const feeReceiver = await sdk.keeper.nvmConfig.getFeeReceiver()

      assetPrice.addNetworkFees(feeReceiver, BigNumber.from(networkFee))
      assetPrice.setTokenAddress(ERC_TOKEN)

      const royaltyAttributes = {
        royaltyKind: RoyaltyKind.Standard,
        scheme: getRoyaltyScheme(sdk, RoyaltyKind.Standard),
        amount: 0,
      }

      const nftAttributes = NFTAttributes.getNFT1155Instance({
        metadata,
        serviceTypes: ['nft-sales', 'nft-access'],
        amount: BigNumber.from(1),
        cap: BigNumber.from(100),
        royaltyAttributes,
        preMint: true,
        nftContractAddress: sdk.nfts1155.nftContract.address,
        providers: [config.neverminedNodeAddress],
        price: assetPrice,
      })

      const response = await publishNFT1155({
        nftAttributes,
      })

      setDDO(response as DDO)
    } catch (error) {
      console.log('error', error)
    }
  }

  return (
    <div className={b('container')}>
      <SDKInstance />
      <MMWallet />
      {walletAddress && !ddo.id && (
        <PublishAsset onPublish={onPublish} />
      )}
      {!isLoadingSDK && ddo?.id &&  (
        <>
          <SingleAsset ddo={ddo}/>
          <BuyAsset ddo={ddo}/>
        </>
      )}
      
    </div>
  )
}

export default App
```

### Complete example file
Now let's put everything together.

```tsx
import AssetRewards from '@nevermined-io/nevermined-sdk-js/dist/node/models/AssetRewards'
import React, { useEffect, useState } from 'react'
import { Catalog, AssetService, RoyaltyKind, BigNumber, getRoyaltyScheme, MetaData, DDO } from '@nevermined-io/catalog'
import { useWallet } from '@nevermined-io/providers'
import { UiText, UiLayout, BEM, UiButton } from '@nevermined-io/styles'
import styles from './example.module.scss'
import { appConfig } from './config'

const ERC_TOKEN = '0xe11a86849d99f524cac3e7a0ec1241828e332c62'

const b = BEM('example', styles)

const SDKInstance = () => {
  const { sdk, isLoadingSDK } = Catalog.useNevermined()

  return (
    <>
      <UiLayout>
        <UiText className={b('detail')} variants={['bold']}>Is Loading SDK:</UiText>
        <UiText>{isLoadingSDK ? 'Yes' : 'No'}</UiText>
      </UiLayout>

      <UiLayout>
        <UiText variants={['bold']} className={b('detail')}>Is SDK Avaialable:</UiText>
        <UiText>{sdk && Object.keys(sdk).length > 0 ? 'Yes' : 'No'}</UiText>
      </UiLayout>
    </>
  )
}

const SingleAsset = ({ddo}: {ddo: DDO}) => {

  return (
    <>
      <UiLayout>
        <UiText className={b('detail')} variants={['bold']}>Asset {ddo.id.slice(0, 10)}...:</UiText>
      </UiLayout>
      <UiText className={b('ddo')} variants={['detail']}>{JSON.stringify(ddo)}</UiText>
    </>
  )
}

const PublishAsset = ({onPublish}: {onPublish: () => void}) => {
  const { assets } = Catalog.useNevermined()

  return (
    <>
      <UiButton onClick={onPublish} disabled={!Object.keys(assets).length}>
        mint
      </UiButton>
    </>
  )
}

const BuyAsset = ({ddo}: {ddo: DDO}) => {
  const { assets, account, isLoadingSDK, nfts, sdk } = Catalog.useNevermined()
  const { walletAddress } = MetaMask.useWallet()
  const [ownNFT1155, setOwnNFT1155] = useState(false)
  const [isBought, setIsBought] = useState(false)
  const [owner, setOwner] = useState('')
  
  useEffect(() => {
    (async () => {
      setOwnNFT1155(await account.isNFT1155Holder(ddo.id, walletAddress))
      setOwner(await sdk.assets.owner(ddo.id))
    })()
  }, [walletAddress, isBought])

  const buy = async () => {
    const response = await nfts.access({
      did: ddo.id,
      nftHolder: owner,
      nftAmount: BigNumber.from(1),
      ercType: 1155
    })
    setIsBought(Boolean(response))
  }

  const download = async () => {
    await assets.downloadNFT({
      did: ddo.id
    })
  }

  return (
    <UiLayout className={b('buy')}>
      {ownNFT1155 ? (
        <UiButton onClick={download} disabled={isLoadingSDK}>
          Download NFT
        </UiButton>
      ) : (
        owner !== walletAddress ?
        <UiButton onClick={buy} disabled={isLoadingSDK}>
          buy
        </UiButton>
        : <span>The owner cannot buy, please change the account to buy the NFT asset</span>
      )}
    </UiLayout>
  )
}

const MMWallet = () => {
  const { login, walletAddress, getConnectors } = useWallet()
  return (
    <UiLayout>
      <UiText variants={['bold']} className={b('detail')}>Wallet address:</UiText>
      <UiText>{walletAddress}</UiText>
      {!walletAddress && <UiButton type='secondary' onClick={() => login(getConnectors()[0])}>Connect To MM</UiButton>}
    </UiLayout>
  )
}

const App = () => {
  const { isLoadingSDK, sdk } = Catalog.useNevermined()
  const { publishNFT1155 } = AssetService.useAssetPublish()
  const { walletAddress } = useWallet()
  const [ddo, setDDO] = useState<DDO>({} as DDO)

  const metadata: MetaData = {
    main: {
      name: '',
      files: [{
        index: 0,
        contentType: 'application/json',
        url: 'https://uploads5.wikiart.org/00268/images/william-holbrook-beard/the-bear-dance-1870.jpg'
      }],
      type: 'dataset',
      author: '',
      license: '',
      dateCreated: new Date().toISOString(),
    }
  }

  const onPublish = async () => {
    try {
      const assetPriceMap = new Map([
        [walletAddress, BigNumber.from(1)]
      ])
  
      const assetPrice = new AssetPrice(assetPriceMap)
      const networkFee = await sdk.keeper.nvmConfig.getNetworkFee()
      const feeReceiver = await sdk.keeper.nvmConfig.getFeeReceiver()

      assetPrice.addNetworkFees(feeReceiver, BigNumber.from(networkFee))
      assetPrice.setTokenAddress(ERC_TOKEN)

      const royaltyAttributes = {
        royaltyKind: RoyaltyKind.Standard,
        scheme: getRoyaltyScheme(sdk, RoyaltyKind.Standard),
        amount: 0,
      }

      const nftAttributes = NFTAttributes.getNFT1155Instance({
        metadata,
        serviceTypes: ['nft-sales', 'nft-access'],
        amount: BigNumber.from(1),
        cap: BigNumber.from(100),
        royaltyAttributes,
        preMint: true,
        nftContractAddress: sdk.nfts1155.nftContract.address,
        providers: [config.neverminedNodeAddress],
        price: assetPrice,
      })

      const response = await publishNFT1155({
        nftAttributes,
      })

      setDDO(response as DDO)
    } catch (error) {
      console.log('error', error)
    }
  }

  return (
    <div className={b('container')}>
      <SDKInstance />
      <MMWallet />
      {walletAddress && !ddo.id && (
        <PublishAsset onPublish={onPublish} />
      )}
      {!isLoadingSDK && ddo?.id &&  (
        <>
          <SingleAsset ddo={ddo}/>
          <BuyAsset ddo={ddo}/>
        </>
      )}
      
    </div>
  )
}

export default App
```

## Styling
In the path `src/examples/example.module.scss` you will find some styles to improve the UI of the app.

```scss
@import '~@nevermined-io/styles/lib/cjs/styles/index.scss'

.example {
  @include component;

  &__container {
    padding: 25px 0 0 25px;
  }

  &__detail {
    margin-right: 5px;
  }

  &__ddo {
    line-height: 16px;
  }

  &__buy {
    margin-top: 20px;
  }
}
```

## The index file
The `src/indes.tsx` file call Catalog core, Catalog providers and the exemple component with the configurations set

```tsx
import '@nevermined-io/styles/lib/esm/styles/globals.scss'
import '@nevermined-io/styles/lib/esm/index.css'
import React from 'react'
import ReactDOM from 'react-dom'
import { Catalog, AssetService } from '@nevermined-io/catalog'
import { appConfig } from './config'
import App from 'examples'
import { WalletProvider, getClient } from '@nevermined-io/providers'
import ChainConfig from './chain_config'


ReactDOM.render(
  <div>
    <Catalog.NeverminedProvider config={appConfig} verbose={true}>
      <AssetService.AssetPublishProvider>
        <WalletProvider
          client={Wagmi.createClient(
            ConnectKit.getDefaultClient({
              appName: 'My Nevermined App',
              chains: ChainsConfig,
              autoConnect: true
            })
          )}
        >
          <App/>
        </WalletProvider>
      </AssetService.AssetPublishProvider>
    </Catalog.NeverminedProvider>
  </div>,
  document.getElementById('root') as HTMLElement
)
```

## Publish and buy encrypted assets with DTP (Data transfer proof)

It is possible to encrypt assets and giving access by password using DTP, using `Catalog` such approach is quite simple, for publish just is needed to set the crypto config and adding the password and the cripto config in the publish method:

```ts
const nodeInfo = await sdk.services.node.getNeverminedNodeInfo()
const cryptoConfig = {
    provider_key: nodeInfo['babyjub-public-key'],
    provider_password: password,
    provider_rsa_public: nodeInfo['rsa-public-key'],
    provider_rsa_private: '',
}

...

const response = await publishNFT1155({
  nftAttributes,
  password,
  cryptoConfig
})
```

And to access and download the asset only pass the password is needed:

```ts
const agreementId = await nfts.access({
  did: ddo.id,
  nftHolder: owner,
  nftAmount: BigNumber.from(1),
  ercType: 1155,
  password,
})

const result = await assets.downloadNFT({
  did: ddo.id,
  ercType: 1155,
  password
})
```

