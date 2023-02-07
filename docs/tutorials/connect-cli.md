---
sidebar_position: 5
description: Use the CLI to connect to different Nevermined environments
---

# Connecting to Nevermined from the command line

The Nevermined CLI (aka NVM CLI or `ncli`) allows to interact with a Nevermined deployment from the command line interface allowing to do everything is supported from a traditional Nevermined web environment like a Marketplace or similar DApp.

The `ncli` allows to connect to a local Nevermined environment (see in the [Nevermined Tools tutorial](running-locally.md) how to do that) or with a remote one.

This tutorial will show some of the basics about how to use the `ncli` and get quick information about what's going on in a Nevermined environment.

## Getting Started

You can find more details in the [`ncli` documentation page](../cli/getting-started.md), but basically what we need is to install the `ncli` software packaged in `NPM` format. This means you can install it easily in your environment running one of the following commands:

```
npm install -g @nevermined-io/cli

or

yarn global add @nevermined-io/cli
```

After doing that you should have available in your system the `ncli` tool.

```
$ ncli --version
$ ncli --help
```

### Creating a new account

If you don't have an account locally or you want to use a new one to use the `ncli`, create it is very simple, you just need to use the `ncli`:

```
ncli accounts new

Creating wallet ...
Wallet address: 0x37434d6673ff106446c9224884D54201e5Ae46A4
Wallet public key: 0x0482d6aac219607b47c0a840784909e19694cf66d35262c0ddbf41d753962388812e5394e083a0c54bce10282b6ec0fd86be7f77d296868184e6fd999c4c1fa7e6
Wallet private key: 0x0acb0253593fcbbd20e0fd82b8ff35c8a6e6c1f32c09d1bc8b41cec9031c0986
Wallet Mnemonic:
  Phrase: street fever feed resource place adapt venue mobile hill try armed feature
  Path: m/44'/60'/0'/0/0
  Locale: en

If you want to use it in the CLI run:
export MNEMONIC="street fever feed resource place adapt venue mobile hill try armed feature"
```

As the command output says, you just need to export the `MNEMONIC` environment variable and start using the `ncli`.

```bash
export MNEMONIC="street fever feed resource place adapt venue mobile hill try armed feature"
```

:::tip

You can find more configuration options in the [`ncli` advanced configuration](../cli/advanced_configuration.md) page.

:::

### Getting Funds

To interact with a blockchain public network you need to own some native tokens in the network where you are connected. You can find some information about how to get funds in a `testnet` in the [Faucets tutorial](https://docs.nevermined.io/docs/tutorials/faucets).


After requesting some `USDC` and `MATIC` on `Mumbai` you can check you have balance using the command:

```bash
$ ncli accounts balance 
===== Account 0x827C6546CA48Ee9a33EFEe3342292E61C6eA6507 - Index: 0 =====
MATIC Balance: 250000000000000000000000000000000000
Token Balance: 180000000000000000000 USDC
Etherscan Url: https://mumbai.polygonscan.com/address/0x827C6546CA48Ee9a33EFEe3342292E61C6eA6507
NFT Balance: 0

===== Account 0x7064f267187EbD0eDD3e14141f3AF0E5A91047B1 - Index: 1 =====

[...]

```

The command will return the balance for the 10 first derivation paths of your MNEMONIC. By default check the first account balance (Index 0) like in the example.

## Connecting to a Nevermined network

Once you have your account and that account has some funds, we can start interacting with the public networks.

First we are gonna list the available networks:

```bash
ncli network list
```

And later see the status of any of them:

```bash
ncli --network testnet network status
```

:::info

By default Nevermined `ncli` uses the `testnet` network that is connected to `Polygon Mumbai`. So if you don't pass the `--network` parameter it will use that by default.

:::

## Registering an asset tokenized via NFTs

Nevermined allows the tokenization of assets via the association of them with a NFT contract based on a `ERC-721` or `ERC-1155` (see more about the [differences between the different NFT token standards](https://www.rfox.finance/blogs/erc-721-vs-erc-1155-tokens-a-comparison-guide-of-ethereum-nft-standards)).

You have some information about how to do this using a `ERC-721` in the [CLI documentation](../cli/using-cli.md#nfts), so for this tutorial we are gonna use NFTs based on `ERC-1155` to have a different example.

Let's define first what is our use case:

:::note Use Case

As a content creator I want to tokenize a fractal I created. I want to make available **10 editions** of it, and sell them for **100 USDC** each of them. Whoever owning one of these editions will be able to have **exclusive access** to the fractal file.

:::

### Register the asset on Nevermined

First let's upload the fractal file to IPFS:

```bash
$ ncli utils upload fractal.1920x1080.jpg 
URL: cid://bafkreiabenhumlyfecdaz546ycvh6lljsf7og7qwu6f6vzhpqq4lcgutn4
Password: /S8%sx;]}sK=I+vwZc3/wYgr1Z<<~BFH
```

And now let's register the asset in Nevermined. As you see in the command options we are capping the NFT to 10 editions:

```bash
$ ncli nfts1155 create --name 'Badass fractal' --author 'John Doe' --price 100 --urls cid://bafkreiabenhumlyfecdaz546ycvh6lljsf7og7qwu6f6vzhpqq4lcgutn4 --contentType image/jpeg --cap 10

Creating NFT ...
Loading token

Creating Asset ...
Registering Asset
Services Added
Generating proof
Proof generated
Conditions filled
Encrypting files
Files encrypted
Registering Mintable Asset did:nv:e4cd0187b8d8d0db4a03e31fbdda2cf088d28789c93b24bf2f58bc9763bac211
Storing DDO did:nv:e4cd0187b8d8d0db4a03e31fbdda2cf088d28789c93b24bf2f58bc9763bac211
DDO stored
Asset registred
Asset with DID created: did:nv:e4cd0187b8d8d0db4a03e31fbdda2cf088d28789c93b24bf2f58bc9763bac211
Created DID: did:nv:e4cd0187b8d8d0db4a03e31fbdda2cf088d28789c93b24bf2f58bc9763bac211 with NFT associated and endpoint: https://marketplace-api.mumbai.public.nevermined.network/api/v1/metadata/assets/ddo/did:nv:e4cd0187b8d8d0db4a03e31fbdda2cf088d28789c93b24bf2f58bc9763bac211
Now please mint the token on the NFT Contract!

```

The `DID` returned is the unique identifier of the asset created in a Nevermined network. You can fetch all the metadata associated to the asset just asking for that `DID`:

```bash
$ ncli nfts1155 show did:nv:e4cd0187b8d8d0db4a03e31fbdda2cf088d28789c93b24bf2f58bc9763bac211

Loading information of NFTs attached to the DID: 'did:nv:e4cd0187b8d8d0db4a03e31fbdda2cf088d28789c93b24bf2f58bc9763bac211'
====== Nevermined ======
====== did:nv:e4cd0187b8d8d0db4a03e31fbdda2cf088d28789c93b24bf2f58bc9763bac211 ======
Url: https://marketplace-api.mumbai.public.nevermined.network/api/v1/metadata/assets/ddo/did:nv:e4cd0187b8d8d0db4a03e31fbdda2cf088d28789c93b24bf2f58bc9763bac211
Name: Badass fractal
Author: John Doe
License: 
Files: 1


====== Internal NFT (ERC-1155) Registry ======
Total NFT Supply: 0
Mint Cap: 10
Royalties: 0
Account 0x827C6546CA48Ee9a33EFEe3342292E61C6eA6507 balance: 0
Price (NFT-1155): 180000000000000000000 USDC

```

:::info Nevermined doesn't store your data

Nevermined never stores your files in any way. In most of the cases these are stored in a marketplace, your own infrastructure or a public network. Nevermined just stores internal ids and metadata to allow the transactions between parties to happen.

:::

### Minting

We didn't mint any edition during the NFT creation (that is possible using the `--preMint` parameter), so let's mint the 10 editions:

```bash
$ ncli nfts1155 mint did:nv:e4cd0187b8d8d0db4a03e31fbdda2cf088d28789c93b24bf2f58bc9763bac211 --amount 10

Minting NFT: 'did:nv:e4cd0187b8d8d0db4a03e31fbdda2cf088d28789c93b24bf2f58bc9763bac211'
Minting NFT with service Endpoint! https://marketplace-api.mumbai.public.nevermined.network/api/v1/metadata/assets/ddo/did:nv:e4cd0187b8d8d0db4a03e31fbdda2cf088d28789c93b24bf2f58bc9763bac211
Minted  10' NFTs (ERC-1155) 'did:nv:e4cd0187b8d8d0db4a03e31fbdda2cf088d28789c93b24bf2f58bc9763bac211'!

```

If now you run the same `show` command as before you can notice in the balance the asset creator owns the 10 editions just minted:

```bash
$ ncli nfts1155 show did:nv:e4cd0187b8d8d0db4a03e31fbdda2cf088d28789c93b24bf2f58bc9763bac211


====== Internal NFT (ERC-1155) Registry ======
Total NFT Supply: 10
Mint Cap: 10
Royalties: 0
Account 0x827C6546CA48Ee9a33EFEe3342292E61C6eA6507 balance: 10
Price (NFT-1155): 180000000000000000000 USDC

```

## Discovering the asset created

So now our tokenized asset is published, let's use a different account to purchase the asset and download the fractal file. In a different terminal let's create a new account as we did before:

```
$ ncli accounts new
Creating wallet ...
Wallet address: 0x748eac52C4FaAfD64C4cba68178A2F0904804314
Wallet public key: 0x049be7747e669849a0203ac28ba45bdafd6660e663b884ea75c06ef6c81976c943cf264f42708fe2bf92fe1ea3069dbf15fe919bb7d70ca47be776a060da894724
Wallet private key: 0x4781bbae558c9d6c40bf0f1aa57a996aacbc1f9d4eb43059242abee69cc73a87
Wallet Mnemonic:
  Phrase: elite cry swim vintage twelve choose lamp hazard blossom reject crew captain
  Path: m/44'/60'/0'/0/0
  Locale: en

If you want to use it in the CLI run:
export MNEMONIC="elite cry swim vintage twelve choose lamp hazard blossom reject crew captain"

$ export MNexport MNEMONIC="elite cry swim vintage twelve choose lamp hazard blossom reject crew captain"
```

And we fund the account with the public faucets. Please see the [Faucets tutorial](https://docs.nevermined.io/docs/tutorials/faucets).



So as a consumer I can search for fractal assets:

```bash
$ ncli assets search  "Fractal"

Search using query: Fractal
Total Results: [object Object] - Total Pages: 1
Page: 1
---------------------------
dataset > Name: Badass fractal - Url: https://marketplace-api.mumbai.public.nevermined.network/api/v1/metadata/assets/ddo/did:nv:e4cd0187b8d8d0db4a03e31fbdda2cf088d28789c93b24bf2f58bc9763bac211
---------------------------

```

And see the details of the NFT:

```
$ ncli nfts1155 show did:nv:e4cd0187b8d8d0db4a03e31fbdda2cf088d28789c93b24bf2f58bc9763bac211
Cannot load optional contract CurveRoyalties
Loading information of NFTs attached to the DID: 'did:nv:e4cd0187b8d8d0db4a03e31fbdda2cf088d28789c93b24bf2f58bc9763bac211'
====== Nevermined ======
====== did:nv:e4cd0187b8d8d0db4a03e31fbdda2cf088d28789c93b24bf2f58bc9763bac211 ======
Url: https://marketplace-api.mumbai.public.nevermined.network/api/v1/metadata/assets/ddo/did:nv:e4cd0187b8d8d0db4a03e31fbdda2cf088d28789c93b24bf2f58bc9763bac211
Name: Badass fractal
Author: John Doe
License: 
Files: 1


====== Internal NFT (ERC-1155) Registry ======
Total NFT Supply: 10
Mint Cap: 10
Royalties: 10
Account 0x748eac52C4FaAfD64C4cba68178A2F0904804314 balance: 0
Price (NFT-1155): 180000000000000000000 USDC
```

## Purchase the NFT using a different user


So now using the consumer account we created we can purchase the NFT attached to the Fractal asset:

```bash
ncli nfts1155 order did:nv:e4cd0187b8d8d0db4a03e31fbdda2cf088d28789c93b24bf2f58bc9763bac211
```

If everything went okay, now you should be able to download the files attached to the asset and protected by the NFT as access control:

```bash
ncli nfts1155 download did:nv:e4cd0187b8d8d0db4a03e31fbdda2cf088d28789c93b24bf2f58bc9763bac211 --destination /tmp
```

