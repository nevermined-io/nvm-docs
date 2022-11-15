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

- *`public-v2-mumbai`*: Polygon public testing environment (`mumbai`). Using `public` contract tag. Use this if you want to integrate with Nevermined in a Polygon Testnet.

| Environment | Network | Contracts Version | Tag | Component | URL | Comments |
|-------------|---------|-------------------|-----|-----------|-----|----------|
| public-v2-mumbai | Mumbai | 2.1.0 | public | Node | https://node.mumbai.public.nevermined.network | |
| public-v2-mumbai | Mumbai | 2.1.0 | public | Marketplace API | https://marketplace-api.mumbai.public.nevermined.network | |

All the contract events are exposed via [The Graph](https://thegraph.com/). You can find all the `Polygon Mumbai` Nevermined Subgraphs here (search by Nevermined):

https://thegraph.com/hosted-service

For example for Nevermined Polygon Mumbai:

https://thegraph.com/hosted-service/subgraph/nevermined-io/publicmumbaiv2neverminedtoken

