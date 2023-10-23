---
sidebar_position: 4
description: Building a DApp using Nevermined frameworks 2
---


# How to create and consume your first assets in a React application integrated with Nevermined

Following with our series, this is going to continue showing how to unblock Nevermined features using [Nevermined Components](https://github.com/nevermined-io/react-components).

## Prerequisites

The tutorial assumes your familiarity with blockchain, and general programming. If it's your first time using the Nevermined catalog don't hesitate to go back and take a look at the [previous chapter](../tutorials/running-locally.md).

### For all the assets type

Import the provider in your index.tsx from the Catalog is needed in order to start to develop.
   *Note that our application is growing and now has some routes in order to handle properly endpoints.*

```tsx
<BrowserRouter>
    <Catalog.NeverminedProvider config={appConfig}>
        <Catalog.AssetPublishProvider>
            <WalletProvider
                client={getClient()}
            >
                <App />
            </WalletProvider>
        </Catalog.AssetPublishProvider>
    </Catalog.NeverminedProvider>
</BrowserRouter>
```

### How to create an asset

This section will guide you to the creation of your first Nevermined asset.

1. Import the function from the AssetService.
        
```typescript

import { AssetService } from '@nevermined-io/catalog'

const Publisher = () => {
    const { publishAsset, assetPublish, setAssetPublish } = AssetService.useAssetPublish()

    ...
}
```

2. Create the metadata object that will be published offchain.

```typescript
    ...
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
    ...
```

3. Call the function in your code. Creating a button that publish when you click and send the `assetPublish` object.

```ts
    ...
    async function handleOnSubmit() {
        const assetAttributes = AssetAttributes.getInstance({
            metadata,
        })
        const ddo = await publishAsset({
            assetAttributes,
        })

        setDidDeployed(ddo.id)
    }
    ...
```

4. After sign a message with your wallet provider and pay the fees you will be publishing your first asset. Check that appear in the assets list after some seconds.

#### The complete example

```tsx
    
const Publisher = () => {
    const { publishAsset, assetPublish, setAssetPublish } = AssetService.useAssetPublish()
    const { isLoadingSDK } = Catalog.useNevermined()

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

    async function handleOnSubmit() {
        const assetAttributes = AssetAttributes.getInstance({
            metadata,
        })
        const ddo = await publishAsset({
            assetAttributes,
        })

        setDidDeployed(ddo!.id)
    }

    return (
        <div>
            <button onClick={handleOnSubmit} disabled={isLoadingSDK}>
                Publish Asset
            </button>
        </div>
    )
}

```

### How to consume an asset

This section will show how to consume an asset already published using Nevermined.

1. Create and component that accept as parameter a [ddo](../nevermined-sdk/api-reference/classes/DDO.md)  and import from the Catalog all the functionalities needed for this purpose

```ts
import { AssetService } from '@nevermined-io/catalog-core'
    
const Consumer = ({ddo}: {ddo: DDO}) => {
    const { assets, account, sdk } = Catalog.useNevermined()

    ...
}
```

2. You need to check if you are the owner of the asset, if it is the case you don't need to buy before to consume it
otherwise you will need to buy first, then in this point you need an `useEffect` that check it every time that the wallet
changes the account and when the asset is bought in order to avoid buy again

```typescript
...
    const { walletAddress } = useWallet()
    const [ownAsset, setOwnAsset] = useState(false)
    const [isBought, setIsBought] = useState(false)
    const [owner, setOwner] = useState('')

    useEffect(() => {
    (async () => {
        setOwnAsset(await account.isAssetHolder(ddo.id, walletAddress))
        setOwner(await sdk.assets.owner(ddo.id))
    })()
    }, [walletAddress, isBought])
...
```

3. Now you need to create the function `buy` and `download` the Asset, `buy` will give you permission to consume the asset and `download` will make you able to consume the asset

```typescript
...
    const buy = async () => {
        const response = await assets.orderAsset(did)
        setIsBought(Boolean(response))
    }

    const download = async () => {
        await assets.downloadAsset({ did: ddo.id })
    }
```

#### The complete example

```tsx
const Consumer = ({ddo}: {ddo: DDO}) => {
    const { assets, account, isLoadingSDK, sdk } = Catalog.useNevermined()
    const { walletAddress } = useWallet()
    const [ownAsset, setOwnAsset] = useState(false)
    const [isBought, setIsBought] = useState(false)
    const [owner, setOwner] = useState('')
    
    useEffect(() => {
        (async () => {
        setOwnAsset(await account.isAssetHolder(ddo.id, walletAddress))
        setOwner(await sdk.assets.owner(ddo.id))
        })()
    }, [walletAddress, isBought])

    const buy = async () => {
        const response = await assets.orderAsset(did)
        setIsBought(Boolean(response))
    }

    const download = async () => {
        await assets.downloadAsset({ did: ddo.id })
    }

    return (
        <div>
        {ownAsset ? (
            <button onClick={download} disabled={isLoadingSDK}>
            Download Asset
            </button>
        ) : (
            owner !== walletAddress ?
            <button onClick={buy} disabled={isLoadingSDK}>
            buy
            </button>
            : <span>The owner cannot buy, please change the account to buy the asset</span>
        )}
        </div>
    )
}    
```

:::info

What is an NFT?

An NFT non-fungible-token is a token that represents the value of any digital asset that lives on the blockchain. Currently there are two major standards ERC721 and ERC1155  

:::

### How to create an NFT ERC721

This section will guide you to the creation of your first Nevermined NFT ERC721.

#### Requirements

First you need to deploy the contract address of the nft ERC-721, you can use the `cli` for it, [see more here](../cli/using-cli.md#nfts)


1. Import the function from the AssetService and the contract NFT token address, also we will need the sdk.
        
```typescript

import { AssetService } from '@nevermined-io/catalog-core'
import { NFTTokenAddress } from './config'

const Publisher = () => {
    const { publishNFT721, assetPublish, setAssetPublish } = AssetService.useAssetPublish()
    const { sdk } = Catalog.useNevermined()
    ...
}
```

2. Create the metadata object that will be published offchain and the royaltyAttribute object.

```typescript
    ...
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

    const royaltyAttributes = {
        royaltyKind: RoyaltyKind.Standard,
        scheme: getRoyaltyScheme(sdk, RoyaltyKind.Standard),
        amount: 0,
    }
    ...
```

3. Call the function in your code. Creating a button that publish when you click and send the NFT token address and the `metadata` object.

```ts
    ...
    async function handleOnSubmit() {
        const ddo = await publishNFT721({
            nftAddress,
            metadata,
            royaltyAttributes,
        })
        setDidDeployed(ddo!.id)
    }
    ...
```

4. After sign a message with your wallet provider and pay the fees you will be publishing your first asset. Check that appear in the assets list after some seconds.

#### The complete example

```tsx
import { AssetService } from '@nevermined-io/catalog-core'
import { NFTTokenAddress } from './config'
    
const Publisher = () => {
    const { publishNFT721, assetPublish, setAssetPublish } = AssetService.useAssetPublish()
    const { sdk } = Catalog.useNevermined()

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

    const royaltyAttributes = {
        royaltyKind: RoyaltyKind.Standard,
        scheme: getRoyaltyScheme(sdk, RoyaltyKind.Standard),
        amount: 0,
    }

    const nftAttributes = NFTAttributes.getNFT721Instance({
        metadata,
        providers: [appConfig.neverminedNodeAddress],
        royaltyAttributes,
    })

    async function handleOnSubmit() {
        const ddo = await publishNFT721({
            nftAttributes
        })
        setDidDeployed(ddo.id)
    }

    return (
        <div>
            <button onClick={handleOnSubmit} disabled={isLoadingSDK}>
                Publish Asset
            </button>
        </div>
    )
}

```

### How to consume an NFT ERC721

This section will show how to consume an asset already published using Nevermined.

1. Create and component that accept as parameter a [ddo](../nevermined-sdk/api-reference/classes/DDO.md)  and import from the Catalog all the functionalities needed for this purpose

```ts
import { AssetService } from '@nevermined-io/catalog-core'
import { NFTTokenAddress } from './config'
    
const Consumer = ({ddo}: {ddo: DDO}) => {
    const { assets, account, sdk } = Catalog.useNevermined()

    ...
}
```

2. You need to check if you are the owner of the NFT721, if it is the case you don't need to buy before to consume it
otherwise you will need to buy first, then in this point you need an `useEffect` that check it every time that the wallet
changes the account and when the asset is bought in order to avoid buy again

```typescript
...
    const { walletAddress } = useWallet()
    const [ownNFT721, setOwnNFT721] = useState(false)
    const [isBought, setIsBought] = useState(false)
    const [owner, setOwner] = useState('')

    useEffect(() => {
    (async () => {
        setOwnNFT721(await account.isNFT721Holder(ddo.id, walletAddress))
        setOwner(await sdk.nft721.ownerOf(ddo.id))
    })()
    }, [walletAddress, isBought])
...
```

3. Now you need to create the function `buy` and `download` the NFT721, `buy` will give you permission to consume the NFT721 and `download` will make you able to consume the NFT721

```typescript
...
    const buy = async () => {
        const response = await nfts.access({
           did: ddo.id,
           nftHolder: owner,
           nftAmount: 1,
           ercType: 721
        })

        setIsBought(Boolean(response))
    }

    const download = async () => {
        await assets.downloadNFT({ 
            did: ddo.id,
            ercType: 721,
        })
    }
```

#### The complete example

```tsx
const Consumer = ({ddo}: {ddo: DDO}) => {
    const { assets, account, isLoadingSDK, nfts, sdk } = Catalog.useNevermined()
    const { walletAddress } = useWallet()
    const [ownNFT721, setOwnNFT721] = useState(false)
    const [isBought, setIsBought] = useState(false)
    const [owner, setOwner] = useState('')
    
    useEffect(() => {
        (async () => {
        setOwnNFT721(await account.isNFT721Holder(ddo.id, walletAddress))
        setOwner(await sdk.nft721.ownerOf(ddo.id))
        })()
    }, [walletAddress, isBought])

    const buy = async () => {
        const response = await nfts.access({
           did: ddo.id,
           nftHolder: owner,
           nftAmount: 1,
           ercType: 721
        })
        setIsBought(Boolean(response))
    }

    const download = async () => {
        await assets.downloadNFT({ 
            did: ddo.id,
            ercType: 721,
        })
    }

    return (
        <div>
        {ownNFT721 ? (
            <button onClick={download} disabled={isLoadingSDK}>
            Download NFT
            </button>
        ) : (
            owner !== walletAddress ?
            <button onClick={buy} disabled={isLoadingSDK}>
            buy
            </button>
            : <span>The owner cannot buy, please change the account to buy the NFT asset</span>
        )}
        </div>
    )
}    
```

### How to create an NFT ERC1155
This section will guide you to the creation of your first Nevermined NFT ERC1155 asset.

1. Import the functions from the AssetService and the sdk.
        
```typescript

import { AssetService } from '@nevermined-io/catalog-core'

const Publisher = () => {
    const { publishNFT1155, assetPublish, setAssetPublish } = AssetService.useAssetPublish()
    const { sdk } = Catalog.useNevermined()
    ...
}
```

2. Create the metadata object that will be published offchain and the royaltyAttribute object.

```typescript
    ...
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

    const royaltyAttributes = {
        royaltyKind: RoyaltyKind.Standard,
        scheme: getRoyaltyScheme(sdk, RoyaltyKind.Standard),
        amount: 0,
    }

    const nftAttributes = NFTAttributes.getNFT1155Instance({
        metadata,
        providers: [appConfig.neverminedNodeAddress]
        royaltyAttributes,
    })
    ...
```

3. Call the function in your code. Creating a button that publish when you click and send the `metadata` object, the amount of nft to mint, the royalty and the royalty kind.

```ts
    ...
    async function handleOnSubmit() {
        const ddo = await publishNFT1155({
            nftAttributes
        })
        setDidDeployed(ddo.id)
    }
    ...
```

4. After sign a message with your wallet provider and pay the fees you will be publishing your first NFT1155 asset. Check that appear in the assets list after some seconds.

#### The complete example

```tsx
    
const Publisher = () => {
    const { publishAsset, assetPublish, setAssetPublish } = AssetService.useAssetPublish()
    const { isLoadingSDK, sdk } = Catalog.useNevermined()

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

    const royaltyAttributes = {
        royaltyKind: RoyaltyKind.Standard,
        scheme: getRoyaltyScheme(sdk, RoyaltyKind.Standard),
        amount: 0,
    }

    const nftAttributes = NFTAttributes.getNFT1155Instance({
        metadata,
        providers: [appConfig.neverminedNodeAddress]
        royaltyAttributes,
    })

    async function handleOnSubmit() {
        const result = await publishNFT1155({
              nftAttributes
        })
        setDidDeployed(ddo!.id)
    }

    return (
        <div>
            <button onClick={handleOnSubmit} disabled={isLoadingSDK}>
                Publish Asset
            </button>
        </div>
    )
}

```

### How to consume an NFT ERC1155

This section will show how to consume an NFT1155 already published using Nevermined.

1. Create and component that accept as parameter a [ddo](../nevermined-sdk/api-reference/classes/DDO.md)  and import from the Catalog all the functionalities needed for this purpose

```ts
import { AssetService } from '@nevermined-io/catalog-core'
    
const Consumer = ({ddo}: {ddo: DDO}) => {
    const { assets, account, sdk } = Catalog.useNevermined()

    ...
}
```

2. You need to check if you are the owner of the NFT1155, if it is the case you don't need to buy before to consume it
otherwise you will need to buy first, then in this point you need an `useEffect` that check it every time that the wallet
changes the account and when the NFT1155 is bought in order to avoid buy again

```typescript
...
    const { walletAddress } = useWallet()
    const [ownNFT1155, setOwnNFT1155] = useState(false)
    const [isBought, setIsBought] = useState(false)
    const [owner, setOwner] = useState('')

    useEffect(() => {
    (async () => {
        setOwnNFT1155(await account.isNFT1155Holder(ddo.id, walletAddress))
        setOwner(await sdk.assets.owner(ddo.id))
    })()
    }, [walletAddress, isBought])
...
```

3. Now you need to create the function `buy` and `download` the NFT1155, `buy` will give you permission to consume the NFT1155 and `download` will make you able to consume the NFT1155

```typescript
...
    const buy = async () => {
        const response = await nfts.access({
            did:ddo.id, 
            nftHolder: owner, 
            nftAmount: BigNumber(1), 
            ercType: 1155,
        )
        setIsBought(Boolean(response))
    }

    const download = async () => {
        await assets.downloadNFT({ did: ddo.id })
    }
```

#### The complete example

```tsx
const Consumer = ({ddo}: {ddo: DDO}) => {
    const { assets, account, isLoadingSDK, nfts, sdk } = Catalog.useNevermined()
    const { walletAddress } = useWallet()
    const [ownNFT1155, setOwnNF1155] = useState(false)
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
            did:ddo.id, 
            nftHolder: owner, 
            nftAmount: BigNumber(1), 
            ercType: 1155,
        )

        setIsBought(Boolean(response))
    }

    const download = async () => {
        await assets.downloadNFT({
            did: ddo.id
        })
    }

    return (
        <div>
        {ownNFT1155 ? (
            <button onClick={download} disabled={isLoadingSDK}>
            Download NFT
            </button>
        ) : (
            owner !== walletAddress ?
            <button onClick={buy} disabled={isLoadingSDK}>
            buy
            </button>
            : <span>The owner cannot buy, please change the account to buy the NFT asset</span>
        )}
        </div>
    )
}    
```
