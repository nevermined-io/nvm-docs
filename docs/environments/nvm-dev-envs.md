---
sidebar_position: 3
description: Nevermined Testnet Environments
---

# Testnet environments

Testnet environments are public nevermined environments deployed on public EVM-compatible testnet networks. Typically we use Polygon Mumbai.
Use [Alchemy's Mumbai Faucet](https://mumbaifaucet.com/) or [Polygon's Mumbai faucet](https://faucet.polygon.technology/) for requesting MATIC.

## Network Fee

You need to pay a fee to use a Nevermined environment when a payment is being done through the Smart Contracts. This needs to be configured by the content publisher. You can find more information in the [Network Fees section](network-fees.mdx).

:::info

The network fee in Nevermined testnets is **1%** and the receiver of that fee is the **0x309039F6A4e876bE0a3FCA8c1e32292358D7f07c** address.

:::


## Polygon - Mumbai

### Public Mumbai deployment (v3)

This is a **public** network deployment (`TAG_NAME=public`) of the Nevermined Contracts v3 in the Polygon Mumbai network. You can use this network if you want to integrate with Nevermined in a Polygon Testnet.

The **addresses** of the Nevermined Contracts can be found here: https://artifacts.nevermined.network/80001/public/contracts_v3.0.0.json

The **ABIs of the contracts** to connect via SDK can be download from here: https://artifacts.nevermined.network/80001/public/contracts_v3.0.0.tar.gz

| Environment | Network | Contracts Version | Tag | Component | URL | Comments |
|-------------|---------|-------------------|-----|-----------|-----|----------|
| [public-v3-mumbai](https://artifacts.nevermined.network/80001/public/contracts_v3.0.0.json) | Mumbai | 3.0.0 | public | Node | https://node.mumbai.public.nevermined.network | |
| public-v3-mumbai | Mumbai | - | public | Marketplace API | https://marketplace-api.mumbai.public.nevermined.network | |

All the contract events are exposed via [The Graph](https://thegraph.com/). You can find all the `Polygon Mumbai` Nevermined Subgraphs here (search by Nevermined):

https://thegraph.com/hosted-service

For example for Nevermined Polygon Mumbai:

https://thegraph.com/hosted-service/subgraph/nevermined-io/publicmumbaiv2neverminedtoken


## Filecoin - Hyperspace

### Public Hyperspace deployment (v3)

This is a **public** network deployment (`TAG_NAME=public`) of the Nevermined Contracts v3 in the Filecoin Hyperspace network. You can use this network if you want to integrate with Nevermined in a Filecoin FVM Testnet.

The **addresses** of the Nevermined Contracts can be found here: https://artifacts.nevermined.network/3141/public/contracts_v3.0.1.json

The **ABIs of the contracts** to connect via SDK can be download from here: https://artifacts.nevermined.network/3141/public/contracts_v3.0.1.tar.gz

| Environment | Network | Contracts Version | Tag | Component | URL | Comments |
|-------------|---------|-------------------|-----|-----------|-----|----------|
| [public-v3-hyperspace](https://artifacts.nevermined.network/3141/public/contracts_v3.0.1.json) | Hyperspace | 3.0.1 | public | Node | - | |
| public-v3-hyperspace | Hyperspace | - | public | Marketplace API | - | |
