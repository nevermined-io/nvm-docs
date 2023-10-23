---
sidebar_position: 4
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# How to use Nevermined NFTs via SDK

We are gonna see how to use Nevermined NFTs using the SDK-JS. Before starting it’s recommended you take a look at the [Getting Started](../nevermined-sdk/getting-started.md) documentation page where you will be able to find information about how to install the library and initialize it.

## Deploying and connecting to your own NFT contract

In a Nevermined network we pre-deploy some NFT implementations but typically you are gonna want to own your NFT contract. You can deploy your own Nevermined NFT implementation in different ways.

### Cloning a previously deployed contract

Via clonning you can make a copy of an already deploy contract bytecode and deploy it again in a new address. This clone will be a copy of the Smart Contract but not of the state of it. The new contract clonned will be owned by the account clonning the contract. 

:::tip Clonning saves gas

The advantage of cloning an existing contract is that it is more gas efficient than regular deploying.

:::

<Tabs>
  <TabItem label="erc-721" value="erc-721" default>

Here an example of how you clone a Nevermined ERC-721 contract:

```typescript
const cloneAddress = await nevermined.nfts721.getContract.createClone(
    'My New NFT 721', 
    'SYM', 
    'http://nft.metadata',
    BigNumber.from(0), // Uncapped
    [], // Add here any address to be added as a NFT operator
    deployerAccount
)
```

  </TabItem>
  <TabItem label="erc-1155" value="erc-1155" default>

Here an example of how you clone a Nevermined ERC-1155 contract:

```typescript
const cloneAddress = await nevermined.nfts1155.getContract.createClone(
    'My New NFT 1155', 
    'SYM', 
    'http://nft.metadata',
    [], // Add here any address to be added as a NFT operator
    deployerAccount
)
```

  </TabItem>
</Tabs>

### Deploying a Nevermined NFT contract

You can deploy a Nevermined NFT any way you prefer using your typical web3 tools. The information about the artifacts of the different Nevermined Smart Contracts deployed in different networks [can be found in the documentation](https://github.com/nevermined-io/contracts/#networks).

## Connecting Nevermined to your NFT contract

Independently on how you deployed your NFT contract, you can connect your Nevermined instance to it using the following commands:

<Tabs>
  <TabItem label="erc-721" value="erc-721" default>

```typescript
await nevermined.contracts.loadNft721(my721NFTContract.address)
```

  </TabItem>
  <TabItem label="erc-1155" value="erc-1155" default>

```typescript
await nevermined.contracts.loadNft1155(my1155NFTContract.address)
```

  </TabItem>
</Tabs>

:::tip
Whatever contract (ERC-721/ERC-1155) you are going to use, it's important to load it into the `nevermined` api as described above just using the contract address. That will allow you to interact with it.
:::

## Granting and Revoking permissions to manage your NFTs

As we discussed before, in a normal scenario the users want to own their own NFTs. The NFT Smart Contracts represent the digital ownership of a user (represented via wallet) to a digital asset. If you want Nevermined to facilitate the interactivity with your assets, the Smart Contracts could require some permissions in your NFT contract to operate it.

This permissions can be granted and revoked always by the contract owner at any point.

To allow Nevermined to manage your NFTs or editions you should give permissions into the contract. If the NFT contract is based in the Nevermined NFT contracts you can use the `grantOperatorRole` method for granting permissions and the `revokeOperatorRole` to revoke them:

```typescript
// Granting permissions to TransferNFT721Condition
await nftContract.grantOperatorRole(transferNft721Condition.address, nftOwner)

// Revoking permissions to TransferNFT721Condition
await nftContract.revokeOperatorRole(transferNft721Condition.address, nftOwner)
```

## Registering a new asset tokenized via a NFT

In Nevermined digital assets can be registered into the platform and tokenized via NFTs. To do that we can associate different implementations based on ERC-721 or ERC-1155 contracts. As discussed above, Nevermined provides some extensions to them that can be used to build different use cases.

There are many possibilities that a user can define when registering an asset in Nevermined. You don’t need to use or define all of them, but here we are going to see some of them:

### Asset price, how much you wanna charge for your NFTs?

With Nevermined you can define how any asset is gonna be paid and the distribution of that payment via the `AssetPrice` class. That class is flexible and allows to define payments in different ways:

:::info

One important clarification, the amounts must be always given in the lower denominator of the token used (for example in ETH is wei). That means if the amount given to the AssetPrice is 1 in ETH that price is 1 wei.

:::

If the asset is free, the price can be establish this way:

```typescript
const freePrice = new AssetPrice()
```

Let's say John Doe wants to get 5 USDC:

```typescript
const usdcDecimals = 18
const assetPrice = new AssetPrice(
  johnDoeAddress, 
  BigNumber.from(10).pow(usdcDecimals).mul(5), 
  usdcERC20Address
)
```

In the next example John Doe wants to receive 5 wei of ETH. When the token address provided is the zero address (`0x0000000000000000000000000000000000000000`) Nevermined will use as payment the native token of the network where the Smart Contracts are deployed. It means ETH for Ethereum networks, MATIC for Polygon, etc.

```typescript
const assetPrice = new AssetPrice(
  johnDoeAddress, 
  BigNumber.from(5), 
  zeroAddress
)
```

In the following example John Doe will split the rewards with the marketplace where is selling his NFT. In this case John Doe will get 90 wei of ETH and the marketplace will get 10 wei of ETH:

```typescript
const assetPrice = new AssetPrice(
  new Map([
    [johnDoeAddress, BigNumber.from(90)],
    [marketplaceAddress, BigNumber.from(90)],
  ])
).setTokenAddress(zeroAddress)
```

And finally let's see how to add the network fees. In Nevermined the Smart Contracts charge a fee for any monetary transaction. This fee needs to be added in the assets price object in this way:

```typescript
const assetPrice = new AssetPrice(
  johnDoeAddress, 
  BigNumber.from(5), 
  zeroAddress
).addNetworkFees(
  neverminedFeesReceiver,
  BigNumber.from(10000) // 1% fee
)
```

:::tip fees
You can read more about this in the [Network Fees page](../environments/network-fees.mdx).
:::

### Royalties in the secondary market

If as a content creator you want to receive royalties in the secondary market, you must specify them during the asset registration. Royalties and some other asset attributes can not be modified after registration to avoid market adulteration.

```typescript
const royaltyAttributes = getRoyaltyAttributes(
  nevermined,
  RoyaltyKind.Standard,
  10000 // It means 1% royalties
)
```

Nevermined supports different kind of royalties schemes where the static scheme is the most common. Additional schemes can be plugged as Smart Contracts allowing to have more flexible scenarios (bounding curves, etc).

### Delegating some permissions a Nevermined Node

The trading between seller and buyer in a Nevermined ecosystem can be done directly between them in a peer to peer fashion. But to finalize all the transactions both users need to be online to accept the asset transactions. Because of that, it is convenient to delegate some permissions to a Nevermined Node (aka Node). The Node is an element in the Nevermined architecture that facilitates the usage. Nodes can be executed by Nevermined or anyone else and have a limited permissions to trigger some transactions.

During the registration of an asset this permissions can be granted adding a one or many Nodes addresses to the providers option.
The addition or removal of permissions to a Node or group of Nodes can be done during the registration or afterwards. 

### Backing up the metadata in immutable storage

In Nevermined when an asset is registered the user doing that registration provides some metadata describing the asset. It helps to identify and discover that asset, and also from a user point of view is useful to understand what the asset is about.
By default all this metadata is stored in Metadata/Marketplace APIs. These are services recording metadata off-chain (not in a blockchain but in a database or standard repository) to facilitate search and discovery of assets about specific domains. Typically a Marketplace built on top of Nevermined about a specific topic (like Health or Finance) runs an independent Metadata/Marketplace API to record information about assets related to that topic.

Because of the important function of the metadata, Nevermined facilitates the option of backing up the asset metadata in an immutable storage system (like IPFS or Filecoin). This means the asset metadata is stored in the Metadata repository and additionally into IPFS for example.

This option can be achieved by giving the `PublishMetadata` option to the create method of the NFT. For example, using `PublishMetadata.IPFS` allows to store the metadata in the Metadata API and in IPFS.

### Registering the asset

As you can see Nevermined is very flexible in the way that allows to configure several options that are convinient depending on different use cases. Let's put all of this together:


<Tabs>
  <TabItem label="erc-721" value="erc-721" default>

Registering a Nevermined NFT (ERC-721):

```typescript

const nftAttributes = NFTAttributes.getNFT721Instance({
    metadata,
    serviceTypes: ['nft-sales', 'nft-access'],
    nftContractAddress: myERC721Contract.address
})
const ddo = await nevermined.nfts721.create(
  nftAttributes, 
  johnDoeAccount
)

```

  </TabItem>
  <TabItem label="erc-1155" value="erc-1155" default>

Registering a Nevermined NFT (ERC-1155):

```typescript

const royaltyAttributes = getRoyaltyAttributes(
  nevermined,
  RoyaltyKind.Standard,
  100000 // 10% royalties in the secondary market
)

const assetAttributes = AssetAttributes.getInstance({
  metadata, // Some asset metadata
  price: assetPrice, // As we defined before
  serviceTypes: ['nft-sales', 'nft-access'],
  providers: [config.neverminedNodeAddress] // The address of the Nevermined Node with permissions to interact with the asset
})

const nftAttributes = NFTAttributes.getNFT1155Instance({
  ...assetAttributes,
  nftContractAddress: myERC1155Contract, // The address of the NFT Contract attached to the asset
  amount: numberEditions,
  royaltyAttributes
})            

const ddo = await nevermined.nfts1155.create(
    nftAttributes,
    johnDoeAccount, // The account of the user registering the asset
    PublishMetadata.IPFS
) 
```

  </TabItem>
</Tabs>

Once an asset is registered the create method will return a Decentralized Document Object (aka DDO). This object includes some metadata of the asset registered and a reference to the unique identifier of the asset in a Nevermined network, the Decentralized Identifier (aka DID).

We will use that DID always to identify one specific asset on Nevermined.

## Get some details about the asset registered

Having the DDO and DID is possible to fetch some information about the asset.
If we want to get the metadata we use the resolve method:

```typescript
// By default it will get the Metadata from the Metadata API
const metadata = await nevermined.assets.resolve(ddo.id)

// Here we force to fetch the Metadata from IPFS
const metadata = await nevermined.assets.resolve(
  ddo.id, 
  DIDResolvePolicy.ImmutableFirst
)
```

The resolve method accepts an optional parameter in the second position. That is the policy used to resolve the metadata for a DID given. Remember before we spoke about the option of storing the Metadata off-chain and on-chain, with this option we can specify how we prioritize the resolution of the metadata. Depending on the use case that gives us the option to try to resolve that metadata from the immutable data store first (like IPFS), the Metadata API or force only one of these options.

And if we want to fetch some on-chain information about the NFT:

<Tabs>
  <TabItem label="erc-721" value="erc-721" default>

```typescript
const details = await nevermined.nfts721.details(ddo.id)
```

  </TabItem>
  <TabItem label="erc-1155" value="erc-1155" default>

```typescript
const details = await nevermined.nfts1155.details(ddo.id)
```

  </TabItem>
</Tabs>

The `details` method of the NFT apis will provide information about:

* The mint cap
* The total supply of the nft
* The royalties scheme and amount
* The owner of the NFT contract

## How a buyer can order a NFT

Having a registered asset with nfts associated to it, a buyer can order then directly:

<Tabs>
  <TabItem label="erc-721" value="erc-721" default>

```typescript
const agreementId = await nevermined.nfts721.order(ddo.id, buyerAccount)
```

  </TabItem>
  <TabItem label="erc-1155" value="erc-1155" default>

```typescript
const numberEditions= BigNumber.from(1) // Higher if we want to purchase more than 1 edition
const agreementId = await nevermined.nfts1155.order(ddo.id, numberEditions, buyerAccount)
```

  </TabItem>
</Tabs>


The order method will return an `agreementId`. This is a unique identifier associated with this purchase transaction. The `agreementId` can be used later to fetch on-chain information about the status of the order.

## The buyer can download some exclusive contents associated with the asset

If everything went well during the `order` step, the buyer can claim for the NFT:

<Tabs>
  <TabItem label="erc-721" value="erc-721" default>

```typescript
const result = await nevermined.nfts721.claim(
    agreementId,
    publisherAddress,
    buyerAddress
)
```

  </TabItem>
  <TabItem label="erc-1155" value="erc-1155" default>

```typescript
const result = await nevermined.nfts1155.claim(
    agreementId,
    publisherAddress,
    buyerAddress,
    numberEditions
)
```

  </TabItem>
</Tabs>

At this point the buyer should receive the NFT and the seller the token payment described in the `AssetPrice` object.
Because the buyer is now a NFT holder, if the asset has associated some exclusive contents they can be downloaded using the access command:

<Tabs>
  <TabItem label="erc-721" value="erc-721" default>

```typescript
await nevermined.nfts721.access(
    ddo.id,
    user,
    '/tmp/my-files'
)
```

  </TabItem>
  <TabItem label="erc-1155" value="erc-1155" default>

```typescript
await nevermined.nfts1155.access(
    ddo.id,
    buyerAccount,
    '/tmp/my-files'
)
```

  </TabItem>
</Tabs>

All the files downloaded should be now in the `/tmp/my-files` folder.

## Checking NFT balances

Any user can interact directly with the NFT contracts directly to get contract balances, but that is also possible via Nevermined API:

<Tabs>
  <TabItem label="erc-721" value="erc-721" default>

```typescript
const balance = await nevermined.nfts721.balance(
  johnDoeAddress
)
```

  </TabItem>
  <TabItem label="erc-1155" value="erc-1155" default>

```typescript
const balance = await nevermined.nfts1155.balance(
  ddo.id, 
  johnDoeAddress
)
```

  </TabItem>
</Tabs>
