---
sidebar_position: 3
---

# How to use the SDK?

## Before to start

If you project is using `React` we recommend to use [Catalog](../react-components/intro.md) to make everything much easier, SDK is the low level of it.

## Requirements

Before you start with this demo you require:

* An extension of [Metamask](https://metamask.io/) installed in your browser
* [node](https://nodejs.org/en/) and [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) needs to be installed
* The Nevermined artifacts, you can find the script [here](https://github.com/nevermined-io/create-nevermined-react/blob/main/scripts/download-artifacts.sh). To use the script run `./download-artifacts.sh [VERSION OF THE CONTRACT] [NETWORK]`

## Let's start with the app config file
The first file that you need to create is the `config.ts` file which contains all the [options needed](./api-reference/classes/Config.md) to initialize the [Nevermined SDK](./intro.md).

```ts
import { NeverminedOptions } from '@nevermined-io/sdk'
import { ethers } from 'ethers'

// The web3 endpoint of the blockchain network to connect to, could be an Infura endpoint, Quicknode, or any other web3 provider
export const web3ProviderUri = process.env.REACT_APP_NODE_URI || 'https://matic-mumbai.chainstacklabs.com'

// The url to a Nevermined node. It could be your own if you run a Nevermined Node
export const neverminedNodeUri =
  process.env.REACT_APP_GATEWAY_URI || 'https://node.mumbai.public.nevermined.network'

// The public address of the above Node
export const neverminedNodeAddress =
  process.env.REACT_APP_GATEWAY_ADDRESS || '0x5838B5512cF9f12FE9f2beccB20eb47211F9B0bc'

// The url of the marketplace api if you connect to one. It could be your own service if you run a Marketplace API
export const marketplaceUri = 'https://marketplace-api.mumbai.public.nevermined.network'

// The url of the The Graph deployment of Nevermined
const graphHttpUri = process.env.GRAPH_HTTP_URI ||  'https://api.thegraph.com/subgraphs/name/nevermined-io/public'

// represent USDC token in mumbai that can be claimed in the faucet https://calibration-faucet.filswan.com/#/dashboard 
export const erc20TokenAddress = process.env.ERC20_TOKEN_ADDRESS || '0xe11a86849d99f524cac3e7a0ec1241828e332c62'

// The Chain Id of the network where we are connecting
export const acceptedChainId = process.env.REACT_APP_ACCEPTED_CHAIN_ID || '80001' // for Mumbai

// The React application URL
export const rootUri = process.env.REACT_APP_ROOT_URI || 'http://localhost:3445'

export const appConfig: NeverminedOptions = {
  //@ts-ignore
  web3ProviderUri: typeof window !== 'undefined' ? window.ethereum : new ethers.providers.JsonRpcProvider(nodeUri),
  neverminedNodeUri,
  neverminedNodeAddress,
  graphHttpUri,
  marketplaceAuthToken: localStorage.getItem('marketplaceApiToken'),
  marketplaceUri,
  artifactsFolder: `${rootUri}/contracts`,
}
```

## The example file

The example file `src/example/index.tsx` contains all the basic logic to handle a [NFT1155](../architecture/what-can-i-do.md#tokenization-of-assets-via-erc-1155-nfts-aka-nft-sales) as a component. It outlines each functionality and component in detail.

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
const PublishAsset = ({onPublish, }: {onPublish: () => void }) => {
  return (
    <>
      <UiButton className={b('mint')} type='secondary' onClick={onPublish}>
        mint
      </UiButton>
    </>
  )
}
```

### loginMetamask
We need a function to login to metamask when it isn't yet

```tsx
const loginMarketplace = async (sdk: Nevermined, account: Account) => {
  const clientAssertion = await sdk.utils.jwt.generateClientAssertion(account)
  await sdk.services.marketplace.login(clientAssertion)
}
```

### BuyAsset
The `BuyAsset` component will display the button `buy` in order to buy the asset if the wallet account is not a NFT1155 holder. Otherwise, the owner will display a download button to download the NFT asset

```tsx
const BuyAsset = ({ddo, sdk, account}: {ddo: DDO, sdk: Nevermined, account: Account}) => {
  const [ownNFT1155, setOwnNFT1155] = useState(false)
  const [isBought, setIsBought] = useState(false)
  const [owner, setOwner] = useState('')
  
  useEffect(() => {
    (async () => {
      const balance = await sdk.nfts1155.balance(ddo.id, account)
      const nftBalance =  BigNumber.from(balance).toNumber()
      setOwnNFT1155(nftBalance > 0)
      setOwner(await sdk.assets.owner(ddo.id))
    })()
  }, [account, isBought])


  const onBuy = async () => {
    await loginMarketplace(sdk, account)

    try {
      const agreementId = await sdk.nfts1155.order(ddo.id, BigNumber.from(1), account)
      const transferResult = await sdk.nfts1155.transferForDelegate(
        agreementId,
        owner,
        account.getId(),
        BigNumber.from(1),
        1155,
      )
      
      setIsBought(Boolean(transferResult))
    } catch (error) {
      Logger.error(error)
    }
  }

  const onDownload = async () => {
    try {
      await sdk.nfts1155.access(ddo.id, account)
    } catch (error) {
      Logger.error(error)
    }
  }

  return (
    <UiLayout className={b('buy')}>
      {ownNFT1155 ? (
        <UiButton type='secondary' onClick={onDownload}>
          Download NFT
        </UiButton>
      ) : (
        owner !== account.getId() ?
        <UiButton type='secondary' onClick={onBuy}>
          buy
        </UiButton>
        : <span>The owner cannot buy, please change the account to buy the NFT asset</span>
      )}
    </UiLayout>
  )
}
```

### App
The main component of the example, it pulls the rest of the components and also includes the function `onPublish` with the logic to publish a NFT1155 which is transferred as a parameter to the component [PublisAsset](#publishasset)

```tsx
const App = ({config}: {config: Config }) => {
  const [sdk, setSdk] = useState<Nevermined>({} as Nevermined)
  const [account, setAccount] = useState<Account>(undefined as Account)
  const [ddo, setDDO] = useState<DDO>({} as DDO)
  const [walletAddress, setWalletAddress] = useState('')

  const loginMetamask = async () => {
    const response = await (window as any)?.ethereum?.request?.({
      method: "eth_requestAccounts",
    })
  
    setWalletAddress(ethers.utils.getAddress(response[0]))
  }

  useEffect(() => {
    (window as any)?.ethereum?.on("accountsChanged", (newAccount: string[]) => {
      if (newAccount && newAccount.length > 0) {
          setWalletAddress(
              ethers.utils.getAddress(newAccount[0])
          )
      } else {
          setWalletAddress("")
          console.log("No Account found!")
      }
    })

    (async() => {
      const provider = new ethers.providers.Web3Provider((window as any).ethereum)
      const accounts = await provider.listAccounts()
      setWalletAddress(
          accounts?.length ? ethers.utils.getAddress(accounts[0]) : ""
      )
    })()
  }, [])

  useEffect(() => {
    if(walletAddress) {
      (async () => {
        try {
          const nvm = await Nevermined.getInstance(config)
          const accounts = await nvm.accounts.list()

          setAccount(accounts[0])
          setSdk(nvm)
        } catch(error) {
          console.log(error)
        }
      })()
    }
  }, [walletAddress])

  const publishNFT1155 = async (nodeAddress: string, accountWallet: Account, metadata: MetaData, royaltyAttributes: RoyaltyAttributes, assetPrice: AssetPrice) => {
    const nftAttributes = NFTAttributes.getNFT1155Instance({
      metadata,
      serviceTypes: ['nft-sales', 'nft-access'],
      amount: BigNumber.from(1),
      cap: BigNumber.from(100),
      royaltyAttributes,
      preMint: true,
      nftContractAddress: sdk.nfts1155.nftContract.address,
      providers: [nodeAddress],
      price: assetPrice
    })

    const ddo = await sdk.nfts1155.create(nftAttributes, accountWallet)

    return ddo
  }

  const onPublish = async () => {
    try {
      const assetPriceMap = new Map([
        [account.getId(), BigNumber.from(1)]
      ])

      const assetPrice = new AssetPrice(assetPriceMap)
      const royaltyAttributes = {
        royaltyKind: RoyaltyKind.Standard,
        scheme: getRoyaltyScheme(sdk, RoyaltyKind.Standard),
        amount: 0,
      }

      const networkFee = await sdk.keeper.nvmConfig.getNetworkFee()
      const feeReceiver = await sdk.keeper.nvmConfig.getFeeReceiver()

      assetPrice.addNetworkFees(feeReceiver, BigNumber.from(networkFee))
      assetPrice.setTokenAddress(ERC_TOKEN)

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

      await loginMarketplace(sdk, account)
      
      const response = await publishNFT1155(config.neverminedNodeAddress, account, metadata, royaltyAttributes, assetPrice)

      setDDO(response as DDO)
    } catch (error) {
      console.log('error', error)
    }
  }

  return (
    <div className={b('container')}>
      <UiLayout>
        {account ? 
          <>
            <UiText variants={['bold']} className={b('detail')}>Wallet address:</UiText>
            <UiText>{account.getId()}</UiText>
          </> : 
          <UiButton type='secondary' onClick={loginMetamask}>Connect To MM</UiButton>
        }

        {walletAddress && !ddo.id && (
          <PublishAsset onPublish={onPublish} />
        )}

        {ddo?.id && (
          <>
              <SingleAsset ddo={ddo}/>
              <BuyAsset ddo={ddo} sdk={sdk} account={account}/>
          </>
        )}

      </UiLayout>
    </div>
  )
}

export default App
```

### Complete example file
Now let's put everything together.

```tsx
import React, {useEffect, useState} from 'react'
import { Nevermined, Account, NeverminedOptions, Logger, DDO, MetaData, AssetPrice, RoyaltyKind, getRoyaltyScheme, RoyaltyAttributes, BigNumber, NFTAttributes } from '@nevermined-io/sdk'
import { UiLayout, UiText, UiButton, BEM } from '@nevermined-io/styles'
import { ethers } from 'ethers'
import { appConfig } from './config'
import styles from './styles.module.scss'
const b = BEM('demo', styles)

const ERC_TOKEN = '0xe11a86849d99f524cac3e7a0ec1241828e332c62'

Logger.setLevel(3)

const loginMarketplace = async (sdk: Nevermined, account: Account) => {
  const clientAssertion = await sdk.utils.jwt.generateClientAssertion(account)
  await sdk.services.marketplace.login(clientAssertion)
}

const PublishAsset = ({onPublish, }: {onPublish: () => void }) => {
  return (
    <>
      <UiButton className={b('mint')} type='secondary' onClick={onPublish}>
        mint
      </UiButton>
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

const BuyAsset = ({ddo, sdk, account}: {ddo: DDO, sdk: Nevermined, account: Account}) => {
  const [ownNFT1155, setOwnNFT1155] = useState(false)
  const [isBought, setIsBought] = useState(false)
  const [owner, setOwner] = useState('')
  
  useEffect(() => {
    (async () => {
      const balance = await sdk.nfts1155.balance(ddo.id, account)
      const nftBalance =  BigNumber.from(balance).toNumber()
      setOwnNFT1155(nftBalance > 0)
      setOwner(await sdk.assets.owner(ddo.id))
    })()
  }, [account, isBought])


  const onBuy = async () => {
    await loginMarketplace(sdk, account)

    try {
      const agreementId = await sdk.nfts1155.order(ddo.id, BigNumber.from(1), account)
      const transferResult = await sdk.nfts1155.transferForDelegate(
        agreementId,
        owner,
        account.getId(),
        BigNumber.from(1),
        1155,
      )
      
      setIsBought(Boolean(transferResult))
    } catch (error) {
      Logger.error(error)
    }
  }

  const onDownload = async () => {
    try {
      await sdk.nfts1155.access(ddo.id, account)
    } catch (error) {
      Logger.error(error)
    }
  }

  return (
    <UiLayout className={b('buy')}>
      {ownNFT1155 ? (
        <UiButton type='secondary' onClick={onDownload}>
          Download NFT
        </UiButton>
      ) : (
        owner !== account.getId() ?
        <UiButton type='secondary' onClick={onBuy}>
          buy
        </UiButton>
        : <span>The owner cannot buy, please change the account to buy the NFT asset</span>
      )}
    </UiLayout>
  )
}


const App = ({config}: {config: NeverminedOptions }) => {
  const [sdk, setSdk] = useState<Nevermined>({} as Nevermined)
  const [account, setAccount] = useState<Account>(undefined as Account)
  const [ddo, setDDO] = useState<DDO>({} as DDO)
  const [walletAddress, setWalletAddress] = useState('')

  const loginMetamask = async () => {
    // eslint-disable-next-line
    const response = await (window as any)?.ethereum?.request?.({
      method: "eth_requestAccounts",
    })
  
    setWalletAddress(ethers.utils.getAddress(response[0]))
  }

  useEffect(() => {
    // eslint-disable-next-line
    (window as any)?.ethereum?.on("accountsChanged", (newAccount: string[]) => {
      if (newAccount && newAccount.length > 0) {
          setWalletAddress(
              ethers.utils.getAddress(newAccount[0])
          )
      } else {
          setWalletAddress("")
          console.log("No Account found!")
      }
    });

    (async() => {
      // eslint-disable-next-line
      const provider = new ethers.providers.Web3Provider((window as any).ethereum)
      const accounts = await provider.listAccounts()
      setWalletAddress(
          accounts?.length ? ethers.utils.getAddress(accounts[0]) : ""
      )
    })()
  }, [])

  useEffect(() => {
    if(walletAddress) {
      (async () => {
        try {
          const nvm = await Nevermined.getInstance(config)
          const accounts = await nvm.accounts.list()

          setAccount(accounts[0])
          setSdk(nvm)
        } catch(error) {
          console.log(error)
        }
      })()
    }
  }, [walletAddress])

  const publishNFT1155 = async (nodeAddress: string, accountWallet: Account, metadata: MetaData, royaltyAttributes: RoyaltyAttributes, assetPrice: AssetPrice) => {
    const nftAttributes = NFTAttributes.getNFT1155Instance({
      metadata,
      serviceTypes: ['nft-sales', 'nft-access'],
      amount: BigNumber.from(1),
      cap: BigNumber.from(100),
      royaltyAttributes,
      preMint: true,
      nftContractAddress: sdk.nfts1155.nftContract.address,
      providers: [nodeAddress],
      price: assetPrice
    })

    const ddo = await sdk.nfts1155.create(nftAttributes, accountWallet)

    return ddo
  }

  const onPublish = async () => {
    try {
      const assetPriceMap = new Map([
        [account.getId(), BigNumber.from(1)]
      ])

      const assetPrice = new AssetPrice(assetPriceMap)
      const royaltyAttributes = {
        royaltyKind: RoyaltyKind.Standard,
        scheme: getRoyaltyScheme(sdk, RoyaltyKind.Standard),
        amount: 0,
      }

      const networkFee = await sdk.keeper.nvmConfig.getNetworkFee()
      const feeReceiver = await sdk.keeper.nvmConfig.getFeeReceiver()

      assetPrice.addNetworkFees(feeReceiver, BigNumber.from(networkFee))
      assetPrice.setTokenAddress(ERC_TOKEN)

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

      await loginMarketplace(sdk, account)
      
      const response = await publishNFT1155(config.neverminedNodeAddress, account, metadata, royaltyAttributes, assetPrice)

      setDDO(response as DDO)
    } catch (error) {
      console.log('error', error)
    }
  }

  return (
    <div className={b('container')}>
      <UiLayout>
        {account ? 
          <>
            <UiText variants={['bold']} className={b('detail')}>Wallet address:</UiText>
            <UiText>{account.getId()}</UiText>
          </> : 
          <UiButton type='secondary' onClick={loginMetamask}>Connect To MM</UiButton>
        }

        {walletAddress && !ddo.id && (
          <PublishAsset onPublish={onPublish} />
        )}

        {ddo?.id && (
          <>
              <SingleAsset ddo={ddo}/>
              <BuyAsset ddo={ddo} sdk={sdk} account={account}/>
          </>
        )}

      </UiLayout>
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

  &__mint {
    margin-left: 10px;
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
The `src/indes.tsx` file call the `App` component with the configurations set

```tsx
import '@nevermined-io/styles/lib/esm/styles/globals.scss'
import '@nevermined-io/styles/lib/esm/index.css'
import React from 'react'
import ReactDOM from 'react-dom'
import { appConfig } from './config'
import App from './app'

ReactDOM.render(<App config={appConfig}/>, document.getElementById('root') as HTMLElement)
```
