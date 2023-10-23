---
sidebar_position: 2
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Getting Started

### Installation

<Tabs>
  <TabItem label="yarn" value="yarn" default>

  ```bash
  yarn add @nevermined-io/sdk
  ```

  </TabItem>
  <TabItem label="npm" value="npm">

  ```bash
  npm install --save @nevermined-io/sdk
  ```

  </TabItem>
</Tabs>

### Connecting to Nevermined

Under the hood Nevermined has a set of Smart Contracts that allows Asset Providers to tokenize them and specify different access conditions. This creates Service Execution Agreements. Assets could be anything from a JPEG to a music track, from a voting right to a data set.

There are multiple environments of Nevermined available, before connecting you need to decide to which of them you want to connect and download the artifacts of that environment.
You can find a full list of the environments available in the [Environments section](../environments/).


This will download the artifacts for the latest contracts in _mumbai_ and store them in a folder called `./artifacts`:

```bash
 wget -c https://artifacts.nevermined.network/80001/public/contracts_v3.0.0.tar.gz -O -| tar -xz --one-top-level=./artifacts
 ```

 Next we need to chose the nevermined environment we want to connect to.

<Tabs>
  <TabItem label="mumbai" value="mumbai" default>

  ```typescript
  import { Config } from '@nevermined-io/sdk'

  const config: NeverminedOptions = {
      // The web3 endpoint of the blockchain network to connect to, could be an Infura endpoint, Quicknode, or any other web3 provider
      web3ProviderUri: 'https://rpc-mumbai.maticvigil.com',
      // The url of the marketplace api if you connect to one. It could be your own service if you run a Marketplace API
      marketplaceUri: 'https://marketplace-api.mumbai.public.nevermined.network',
      // The url to a Nevermined node. It could be your own if you run a Nevermined Node
      neverminedNodeUri: 'https://node.mumbai.public.nevermined.network',
      // The public address of the above Node
      neverminedNodeAddress: '0x068ed00cf0441e4829d9784fcbe7b9e26d4bd8d0',
      marketplaceAuthToken: undefined,
      // Folder where are copied the ABIs of the Nevermined Smart Contracts 
      artifactsFolder: './artifacts',
  }
  ```

  </TabItem>
  <TabItem label="matic" value="matic">

  ```typescript
  import { Config } from '@nevermined-io/sdk'

  const config: NeverminedOptions = {
      // The web3 endpoint of the blockchain network to connect to, could be an Infura endpoint, Quicknode, or any other web3 provider
      web3ProviderUri: 'https://rpc-mainnet.maticvigil.com',
      // The url of the marketplace api if you connect to one. It could be your own service if you run a Marketplace API
      marketplaceUri: 'https://marketplace-api.public.nevermined.network',
      // The url to a Nevermined node. It could be your own if you run a Nevermined Node
      neverminedNodeUri: 'https://node.public.nevermined.network',
      // The public address of the above Node
      neverminedNodeAddress: '0x068ed00cf0441e4829d9784fcbe7b9e26d4bd8d0',
      marketplaceAuthToken: '',
      // Folder where are copied the ABIs of the Nevermined Smart Contracts 
      artifactsFolder: './artifacts',
  }
  ```

  </TabItem>
</Tabs>

:::note
`web3ProviderUri` is an rpc endpoint to connect to the blockchain. You can find public links at [chainlist](https://chainlist.org/)

`artifactsFolder` is the location of the artifacts that we downloaded in the previous section.

The other environment config parameteres will be discussed in further sections
:::

With this in place we have everything we need to connect to nevermined:

```typescript
import { Nevermined } from '@nevermined-io/sdk'

const nevermined = await Nevermined.getInstance(config)

console.log(await nevermined.utils.versions.get())
// {
//   sdk: {
//     name: 'Sdk-js',
//     version: '1.0.0',
//     commit: '9d31ebc27fe6c7c8a573abd283c632e5c70e687c',
//     status: 'Working',
//     network: 'mumbai',
//     keeperVersion: '3.0.0',
// }
```
