---
sidebar_position: 3
description: Nevermined Testnet Environments
---

# Testnet environments

Testnet environments are public nevermined environments deployed on public EVM-compatible testnet
networks. Typically we use Arbitrum Goerli. Arbitrum uses ETH to confirm transactions on the
Arbitrum network. To get test tokens for the Arbitrum testnet, you first need to use a
[faucet to obtain Goerli testnet ETH](https://goerlifaucet.com/). Then you can migrate those tokens
to the Arbitrum Goerli Testnet using the
[Arbitrum bridge](https://docs.arbitrum.io/getting-started-users).

## Network Fee

You need to pay a fee to use a Nevermined environment when a payment is being done through the Smart
Contracts. This needs to be configured by the content publisher. You can find more information in
the [Network Fees section](network-fees.mdx).

## Arbitrum - Goerli

### Public Arbitrum Goerli deployment (v3)

This is a **public** network deployment (`TAG_NAME=public`) of the Nevermined Contracts v3 in the
Arbitrum Goerli test network. You can use this network if you want to integrate with Nevermined in a
Arbitrum Testnet.

The **addresses** of the Nevermined Contracts can be found here:
https://artifacts.nevermined.network/421613/public/contracts_v3.5.2.json

The **ABIs of the contracts** to connect via SDK can be download from here:
https://artifacts.nevermined.network/421613/public/contracts_v3.5.2.tar.gz

```typescript
const config: NeverminedOptions = {
  web3ProviderUri: 'https://goerli-rollup.arbitrum.io/rpc',
  marketplaceUri: 'https://marketplace-api.goerli.nevermined.app',
  neverminedNodeUri: 'https://node.goerli.nevermined.app',
  neverminedNodeAddress: '0x5838B5512cF9f12FE9f2beccB20eb47211F9B0bc',
  graphHttpUri: 'https://api.thegraph.com/subgraphs/name/nevermined-io/public',
  artifactsFolder: './artifacts',
}
```

## Polygon - Mumbai

### Public Polygon Mumbai deployment (v3)

This is a **public** network deployment (`TAG_NAME=public`) of the Nevermined Contracts v3 in the
Polygon Mumbai test network. You can use this network if you want to integrate with Nevermined in a
Polygon Testnet.

The **addresses** of the Nevermined Contracts can be found here:
https://artifacts.nevermined.network/80001/public/contracts_v3.5.3.json

The **ABIs of the contracts** to connect via SDK can be download from here:
https://artifacts.nevermined.network/80001/public/contracts_v3.5.3.tar.gz

```typescript
const config: NeverminedOptions = {
  web3ProviderUri: 'https://rpc-mumbai.matic.today',
  marketplaceUri: 'https://marketplace-api.mumbai.nevermined.app',
  neverminedNodeUri: 'https://node.mumbai.nevermined.app/',
  neverminedNodeAddress: '0x5838B5512cF9f12FE9f2beccB20eb47211F9B0bc',
  graphHttpUri: 'https://api.thegraph.com/subgraphs/name/nevermined-io/public',
  artifactsFolder: './artifacts',
}
```
