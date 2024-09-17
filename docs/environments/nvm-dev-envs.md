---
sidebar_position: 3
description: Nevermined Testnet Environments
---

# Testnet environments

Testnet environments are public nevermined environments deployed on public EVM-compatible testnet networks. Typically we use Arbitrum Sepolia.
Use **[Sepolia Faucet](https://sepoliafaucet.com/)** for requesting ETH.

## Network Fee

You need to pay a fee to use a Nevermined environment when a payment is being done through the Smart Contracts. This needs to be configured by the content publisher. You can find more information in the [Network Fees section](network-fees.mdx).

:::info

The network fee in Nevermined testnets is **1%** and the receiver of that fee is the **0x309039F6A4e876bE0a3FCA8c1e32292358D7f07c** address.

:::


## Testing - (Arbitrum Sepolia)

### Public Arbitrum sepolia deployment (v3)

This is a **public** network deployment (`TAG_NAME=public`) of the Nevermined Contracts v3 in the Arbitrum Sepolia network. You can use this network if you want to integrate with Nevermined in a Arbitrum Testnet.

The **addresses** of the Nevermined Contracts can be found here: https://artifacts.nevermined.network/421614/public/contracts_v3.5.7.json

The **ABIs of the contracts** to connect via SDK can be download from here: https://artifacts.nevermined.network/421614/public/contracts_v3.5.7.tar.gz

| Environment | Network | Contracts Version | Tag | Component | URL | Comments |
|-------------|---------|-------------------|-----|-----------|-----|----------|
| [public-v3-arbitrum-sepolia](https://artifacts.nevermined.network/421614/public/contracts_v3.5.7.json) | Arbitrum Sepolia | 3.5.7 | public | Node | https://node.testing.nevermined.app | |
| public-v3-arbitrum-sepolia | Arbitrum Sepolia | - | public | Marketplace API | https://marketplace-api.testing.nevermined.app | |

All the contract events are exposed via [The Graph](https://thegraph.com/). You can find all the `Arbitrum Sepolia` Nevermined Subgraphs here (search by Nevermined):

https://thegraph.com/hosted-service

