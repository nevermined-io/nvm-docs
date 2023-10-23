---
sidebar_position: 2
description: Nevermined Production Environments
---

# Production environments

## Network Fee

The usage of a Nevermined environment requires to pay a fee when a payment is being done through the
Smart Contracts. This needs to be configured by the content publisher. You can find more information
in the [Network Fees section](network-fees.mdx).

## Arbitrum - One

### Public Arbitrum One deployment (v3)

This is a **public** network deployment (`TAG_NAME=public`) of the Nevermined Contracts v3 in the
Arbitrum One main network. You can use this network if you want to integrate with Nevermined in a
Arbitrum network.

The **addresses** of the Nevermined Contracts can be found here:
https://artifacts.nevermined.network/42161/public/contracts_v3.5.3.json

The **ABIs of the contracts** to connect via SDK can be download from here:
https://artifacts.nevermined.network/42161/public/contracts_v3.5.3.tar.gz

```typescript
const config: NeverminedOptions = {
  web3ProviderUri: 'https://arb1.arbitrum.io/rpc',
  marketplaceUri: 'https://marketplace-api.arbitrum.nevermined.app',
  neverminedNodeUri: 'https://node.arbitrum.nevermined.app',
  neverminedNodeAddress: '0x824dbcE5E9C96C5b8ce2A35a25a5ab87eD1D00b1',
  graphHttpUri: 'https://api.thegraph.com/subgraphs/name/nevermined-io/public',
  artifactsFolder: './artifacts',
}
```

## Polygon - Matic

### Public Polygon Matic deployment (v3)

This is a **public** network deployment (`TAG_NAME=public`) of the Nevermined Contracts v3 in the
Polygon Matic main network. You can use this network if you want to integrate with Nevermined in a
Polygon network.

The **addresses** of the Nevermined Contracts can be found here:
https://artifacts.nevermined.network/137/public/contracts_v3.5.3.json

The **ABIs of the contracts** to connect via SDK can be download from here:
https://artifacts.nevermined.network/137/public/contracts_v3.5.3.tar.gz

```typescript
const config: NeverminedOptions = {
  web3ProviderUri: 'https://polygon-rpc.com/',
  marketplaceUri: 'https://marketplace-api.matic.nevermined.app',
  neverminedNodeUri: 'https://node.matic.nevermined.app',
  neverminedNodeAddress: '0x824dbcE5E9C96C5b8ce2A35a25a5ab87eD1D00b1',
  graphHttpUri: 'https://api.thegraph.com/subgraphs/name/nevermined-io/public',
  artifactsFolder: './artifacts',
}
```
